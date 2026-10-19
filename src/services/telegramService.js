// Telegram Bot Service for Ecosafeguard Technology
// Bot: t.me/ecosafeguard_bot
export const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || "";

// Retrieve saved Chat ID from environment, localStorage, or auto-detection
export const getAdminChatId = () => {
  return import.meta.env.VITE_TELEGRAM_CHAT_ID || localStorage.getItem('ecosafeguard_telegram_chat_id') || "";
};

export const setAdminChatId = (chatId) => {
  if (chatId) {
    localStorage.setItem('ecosafeguard_telegram_chat_id', chatId.toString().trim());
  }
};

/**
 * Auto-detects the admin Chat ID by querying getUpdates from the bot.
 * When the admin opens t.me/ecosafeguard_bot and taps /start, their Chat ID appears here.
 */
export const autoDetectAdminChatId = async () => {
  try {
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`);
    const data = await res.json();
    if (data.ok && data.result && data.result.length > 0) {
      // Find the latest message or interaction
      for (let i = data.result.length - 1; i >= 0; i--) {
        const item = data.result[i];
        const chat = item.message?.chat || item.channel_post?.chat || item.my_chat_member?.chat;
        if (chat && chat.id) {
          const discoveredId = chat.id.toString();
          setAdminChatId(discoveredId);
          return {
            chatId: discoveredId,
            firstName: chat.first_name || chat.title || "Admin",
            username: chat.username || ""
          };
        }
      }
    }
  } catch (err) {
    console.error("Error auto-detecting Telegram Chat ID:", err);
  }
  return null;
};

/**
 * Sends full order details to the Telegram Bot with formatted HTML
 */
export const sendOrderToTelegram = async (orderPayload) => {
  let targetChatId = getAdminChatId();

  // If not yet saved in localStorage, try auto-detecting from recent bot updates
  if (!targetChatId) {
    const detected = await autoDetectAdminChatId();
    if (detected) {
      targetChatId = detected.chatId;
    }
  }

  if (!targetChatId) {
    console.warn("Telegram Notification Notice: No chat_id connected yet. Tap Start in t.me/ecosafeguard_bot.");
    return {
      success: false,
      reason: "NO_CHAT_ID",
      message: "Please open t.me/ecosafeguard_bot and send /start to receive order alerts."
    };
  }

  const messageText = `
🔔 <b>NEW AUTODESK ORDER SUBMISSION</b>
━━━━━━━━━━━━━━━━━━━━━
📋 <b>Order Ref:</b> <code>${orderPayload.refId || 'N/A'}</code>
👤 <b>Customer:</b> <b>${orderPayload.name || 'N/A'}</b>
📧 <b>Delivery Email:</b> <code>${orderPayload.email || 'N/A'}</code>
📱 <b>Customer Phone:</b> <code>${orderPayload.phone || 'N/A'}</code>
━━━━━━━━━━━━━━━━━━━━━
📦 <b>Product:</b> ${orderPayload.product || 'Autodesk All Apps'}
⏳ <b>Duration:</b> ${orderPayload.duration || '1 Year'}
🪑 <b>Seats/Qty:</b> ${orderPayload.quantity || 1} Seat(s)
💰 <b>Total Amount:</b> <b>${orderPayload.totalPrice || '৳ 699'}</b>
━━━━━━━━━━━━━━━━━━━━━
💳 <b>Payment Gateway:</b> <b>${orderPayload.paymentMethod || 'bKash'}</b>
📤 <b>Sender Number:</b> <code>${orderPayload.senderNumber || 'N/A'}</code>
📥 <b>Receiver Number:</b> <code>${orderPayload.receiverNumber || 'N/A'}</code>
🔑 <b>Transaction ID (TrxID):</b> <code>${orderPayload.trxId || 'N/A'}</code>
⏰ <b>Time:</b> ${new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' })}
━━━━━━━━━━━━━━━━━━━━━
Status: ⏳ <b>PENDING MANUAL VERIFICATION</b>
`.trim();

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: targetChatId,
        text: messageText,
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              { text: "✅ Confirm (বৈধ)", callback_data: `confirm_${orderPayload.refId}` },
              { text: "❌ Invalid (ভুল TrxID)", callback_data: `invalid_${orderPayload.refId}` }
            ]
          ]
        }
      })
    });

    const result = await response.json();
    return { success: result.ok, data: result };
  } catch (err) {
    console.error("Error dispatching order to Telegram:", err);
    return { success: false, error: err };
  }
};

