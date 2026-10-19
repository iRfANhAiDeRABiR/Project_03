// Meta (Facebook) Pixel Service for Ecosafeguard Ads Tracking
// Add your Pixel ID to .env: VITE_FB_PIXEL_ID=your_pixel_id

export const FB_PIXEL_ID = import.meta.env.VITE_FB_PIXEL_ID || "1584380026240831";

/**
 * Initializes the official Meta Pixel base tracking script
 */
export const initFacebookPixel = () => {
  if (typeof window === 'undefined') return;

  // Prevent multiple initializations if already loaded in index.html
  if (window.fbq) return;

  /* eslint-disable */
  (function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  if (FB_PIXEL_ID) {
    window.fbq('init', FB_PIXEL_ID);
    window.fbq('track', 'PageView');
  }
};

/**
 * Safe wrapper to send standard or custom Meta Pixel conversion events
 */
export const trackPixelEvent = (eventName, params = {}) => {
  if (typeof window === 'undefined') return;

  if (window.fbq) {
    window.fbq('track', eventName, params);
  } else if (import.meta.env.DEV) {
    console.log(`[Meta Pixel Event: ${eventName}]`, params);
  }
};

// =========================================================================
// Standard eCommerce Event Helpers for Meta Ads
// =========================================================================

/**
 * Track Page Views
 */
export const trackPageView = () => {
  trackPixelEvent('PageView');
};

/**
 * Track Product View
 */
export const trackViewContent = (productName, price) => {
  trackPixelEvent('ViewContent', {
    content_name: productName || 'Autodesk All Apps',
    content_category: 'Software Subscription',
    value: price || 699,
    currency: 'BDT'
  });
};

/**
 * Track when user fills the order form and initiates checkout
 */
export const trackInitiateCheckout = (orderPayload) => {
  const numericPrice = typeof orderPayload?.rawPrice === 'string'
    ? parseFloat(orderPayload.rawPrice.replace(/[^0-9.]/g, ''))
    : (orderPayload?.price || 699);

  trackPixelEvent('InitiateCheckout', {
    content_name: orderPayload?.product || 'Autodesk All Apps',
    content_ids: [orderPayload?.refId || 'AUTODESK-SUB'],
    content_type: 'product',
    num_items: orderPayload?.quantity || 1,
    value: numericPrice,
    currency: 'BDT'
  });
};

/**
 * Track when user selects payment gateway and enters phone number
 */
export const trackAddPaymentInfo = (gatewayName) => {
  trackPixelEvent('AddPaymentInfo', {
    content_category: 'Payment Gateway',
    payment_method: gatewayName || 'bKash',
    currency: 'BDT'
  });
};

/**
 * Track successful purchase submission
 */
export const trackPurchase = (orderPayload) => {
  const numericPrice = typeof orderPayload?.rawPrice === 'string'
    ? parseFloat(orderPayload.rawPrice.replace(/[^0-9.]/g, ''))
    : (orderPayload?.price || 699);

  trackPixelEvent('Purchase', {
    content_name: orderPayload?.product || 'Autodesk All Apps',
    content_type: 'product',
    content_ids: [orderPayload?.refId || 'AUTODESK-SUB'],
    num_items: orderPayload?.quantity || 1,
    value: numericPrice,
    currency: 'BDT'
  });
};

/**
 * Track customer support contact (e.g. WhatsApp clicks)
 */
export const trackContact = (channel = 'WhatsApp') => {
  trackPixelEvent('Contact', {
    channel: channel
  });
};

