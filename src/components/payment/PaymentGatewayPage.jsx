import React, { useState, useEffect } from 'react';
import { BkashLogo, NagadLogo, RocketLogo } from '../common/PaymentLogos';
import {
  Copy,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ArrowLeft,
  ShieldCheck,
  PhoneCall,
  Check,
  ExternalLink,
  MessageCircle,
  HelpCircle
} from 'lucide-react';

export default function PaymentGatewayPage({ order, onCancel }) {
  const method = order?.paymentMethod || 'Bkash'; // 'Bkash' | 'Nagad' | 'Rocket'

  // Gateway Configurations
  const gatewayInfo = {
    Bkash: {
      name: "bKash",
      receiverNumber: "01641699879",
      helpline: "16247",
      ussdCode: "*247#",
      themeColor: "#e2136e",
      themeGradient: "from-[#e2136e] via-[#c7095b] to-[#990044]",
      accentBg: "bg-[#e2136e]",
      buttonBg: "bg-[#e2136e] hover:bg-[#c7095b]",
      LogoComponent: BkashLogo
    },
    Nagad: {
      name: "Nagad",
      receiverNumber: "01641699879",
      helpline: "16167",
      ussdCode: "*167#",
      themeColor: "#a31414",
      themeGradient: "from-[#990000] via-[#7d0000] to-[#500000]",
      accentBg: "bg-[#a31414]",
      buttonBg: "bg-white text-[#990000] hover:bg-slate-100",
      LogoComponent: NagadLogo
    },
    Rocket: {
      name: "Rocket",
      receiverNumber: "015189028225",
      helpline: "16216",
      ussdCode: "*322#",
      themeColor: "#8c2282",
      themeGradient: "from-[#8c2282] via-[#6f1567] to-[#4a0845]",
      accentBg: "bg-[#8c2282]",
      buttonBg: "bg-[#8c2282] hover:bg-[#6f1567] text-white",
      LogoComponent: RocketLogo
    }
  };

  const currentGateway = gatewayInfo[method] || gatewayInfo.Bkash;

  // Step state: 1 = Sender Number, 2 = Send Money & Enter TrxID, 3 = Pending Verification Summary
  const [step, setStep] = useState(1);
  const [senderNumber, setSenderNumber] = useState('');
  const [trxId, setTrxId] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [error, setError] = useState('');
  const [copiedField, setCopiedField] = useState(null);

  // 2 Minutes Timer (120 seconds countdown)
  const [timeLeft, setTimeLeft] = useState(120);
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(() => {
    if (step === 2 && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setTimerExpired(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [step, timeLeft]);

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Step 1 Validation -> Proceed to Step 2
  const handleProceedToStep2 = (e) => {
    if (e) e.preventDefault();
    const cleanNum = senderNumber.replace(/\D/g, '');
    if (cleanNum.length !== 11 || !cleanNum.startsWith('01')) {
      setError('সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)');
      return;
    }
    if (!agreeTerms) {
      setError('শর্তাবলী ও নিয়মাবলীতে সম্মত হতে হবে');
      return;
    }
    setError('');
    setStep(2);
    setTimeLeft(120); // start 2 minutes countdown
  };

  // Step 2 Validation -> Proceed to Step 3 (Pending verification ready for Telegram bot)
  const handleConfirmTrx = (e) => {
    if (e) e.preventDefault();
    if (!trxId.trim() || trxId.trim().length < 6) {
      setError('দয়া করে সঠিক Transaction ID (TrxID) লিখুন');
      return;
    }
    setError('');

    // Prepare complete payload ready for Telegram Bot
    const customerPayload = {
      refId: order?.refId || `ECO-ATD-${Math.floor(100000 + Math.random() * 900000)}`,
      name: order?.name,
      email: order?.email,
      phone: order?.phone,
      product: order?.product || "Autodesk All Apps",
      duration: order?.duration || "1 Year",
      quantity: order?.quantity || 1,
      totalPrice: order?.totalPrice || "৳ 699",
      paymentMethod: method,
      senderNumber: senderNumber,
      receiverNumber: currentGateway.receiverNumber,
      trxId: trxId.trim().toUpperCase(),
      status: "PENDING_VERIFICATION",
      submittedAt: new Date().toISOString()
    };

    // Store in localStorage for status lookup / persistence
    try {
      localStorage.setItem('ecosafeguard_last_submission', JSON.stringify(customerPayload));
    } catch (err) {
      console.warn("Storage error", err);
    }

    setStep(3);
  };

  return (
    <div className="min-h-screen bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 text-slate-800">
      
      {/* =========================================================================
          MAIN CONTAINER CARD
         ========================================================================= */}
      <div className="w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* =========================================================================
            HEADER BAR (DEDICATED PER GATEWAY)
           ========================================================================= */}
        {method === 'Bkash' && (
          <div className="bg-white px-6 pt-5 pb-4 border-b border-slate-100 flex flex-col items-center">
            <div className="h-10 flex items-center justify-center mb-3">
              <BkashLogo className="h-9 w-auto" />
            </div>
            <div className="w-full flex items-center justify-between pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  ES
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Ecosafeguard Technology</div>
                  <div className="text-[10px] text-slate-500 font-mono">Invoice: {order?.refId || "ECO-ATD-81923"}</div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block font-medium">Amount</span>
                <span className="text-base sm:text-lg font-black text-[#e2136e] font-mono">
                  {order?.totalPrice || "৳ 699"}
                </span>
              </div>
            </div>
          </div>
        )}

        {method === 'Nagad' && (
          <div className="bg-gradient-to-r from-[#990000] to-[#700000] text-white px-6 py-4 flex items-center justify-between border-b border-red-900/30">
            <div className="flex items-center gap-2">
              <NagadLogo className="w-8 h-8 bg-white p-1 rounded-full" />
              <div>
                <div className="text-xs font-bold text-white tracking-wide">Ecosafeguard Technology</div>
                <div className="text-[10px] text-red-200 font-mono">Invoice: {order?.refId || "ECO-ATD-81923"}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-red-200 uppercase font-semibold">Total Amount</div>
              <div className="text-base sm:text-lg font-black font-mono text-white">
                {order?.totalPrice || "৳ 699"}
              </div>
            </div>
          </div>
        )}

        {method === 'Rocket' && (
          <div className="bg-[#8c2282] text-white px-6 py-4 border-b border-purple-900/40">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <RocketLogo className="w-8 h-8 bg-white p-1 rounded-full" />
                <div>
                  <div className="text-xs font-bold text-white">ডাচ-বাংলা ব্যাংক রকেট (Rocket)</div>
                  <div className="text-[10px] text-purple-200">Ecosafeguard Technology</div>
                </div>
              </div>
              <span className="text-base sm:text-lg font-black font-mono text-white">
                {order?.totalPrice || "৳ 699"}
              </span>
            </div>
            <div className="text-[10px] text-purple-100 flex items-center justify-between border-t border-purple-400/30 pt-1.5">
              <span>ডায়াল করুন *322#</span>
              <span>হেল্পলাইন: 16216</span>
            </div>
          </div>
        )}

        {/* =========================================================================
            GATEWAY CONTENT BODY
           ========================================================================= */}
        <div className={`p-6 sm:p-8 ${
          method === 'Bkash'
            ? 'bg-gradient-to-br from-[#e2136e] via-[#cb095e] to-[#990044] text-white'
            : method === 'Nagad'
            ? 'bg-gradient-to-br from-[#8b0000] via-[#750000] to-[#500000] text-white'
            : 'bg-gradient-to-br from-[#8c2282] via-[#6d1264] to-[#450740] text-white'
        }`}>

          {/* =======================================================================
              STEP 1: SENDER NUMBER ENTRY
             ======================================================================= */}
          {step === 1 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              
              <div className="text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-sm mb-2 border border-white/20">
                  <span>ধাপ ১: সেন্ডার একাউন্ট নম্বর</span>
                </span>
                <h2 className="text-lg sm:text-xl font-black text-white">
                  {method === 'Bkash' && "Your bKash Account number"}
                  {method === 'Nagad' && "Your Nagad Account Number"}
                  {method === 'Rocket' && "Your Rocket Account Number"}
                </h2>
                <p className="text-xs text-white/80 mt-1">
                  যে {method} নম্বর থেকে আপনি টাকা পাঠাবেন সেই নম্বরটি লিখুন
                </p>
              </div>

              {/* Input Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 text-slate-800 shadow-lg">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Sender Mobile Number (১১ ডিজিট) *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    maxLength={11}
                    value={senderNumber}
                    onChange={(e) => {
                      setSenderNumber(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="e.g 01XXXXXXXXX"
                    autoFocus
                    className="w-full px-4 py-3.5 text-center text-lg sm:text-xl font-bold font-mono tracking-widest rounded-xl bg-slate-50 border-2 border-slate-300 focus:border-slate-800 focus:bg-white focus:outline-none transition-all text-slate-900"
                  />
                </div>

                {error && (
                  <div className="mt-2 text-xs text-rose-600 font-bold flex items-center justify-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="mt-4 flex items-start gap-2 text-[11px] text-slate-600">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-0.5 rounded text-blue-600"
                  />
                  <label htmlFor="terms" className="cursor-pointer">
                    By clicking on <strong>Confirm</strong>, you are agreeing to the terms & conditions
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={onCancel}
                  className="py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-white/20 hover:bg-white/30 text-white border border-white/30 transition-all text-center"
                >
                  Close / বাতিল
                </button>
                <button
                  type="button"
                  onClick={handleProceedToStep2}
                  className="py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-white text-slate-900 hover:bg-slate-100 shadow-md transition-all text-center"
                >
                  Confirm / পরবর্তী
                </button>
              </div>

            </div>
          )}

          {/* =======================================================================
              STEP 2: SEND MONEY DETAILS, 2-MINUTE TIMER & ENTER TRXID
             ======================================================================= */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              
              {/* Header with 2-Minute Timer */}
              <div className="flex items-center justify-between pb-3 border-b border-white/20">
                <div>
                  <span className="text-[11px] font-bold text-white/80 uppercase tracking-wide block">
                    ধাপ ২: Send Money ও TrxID
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    Send Money Instruction
                  </h3>
                </div>
                
                {/* 2-Minute Live Timer */}
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border backdrop-blur-sm ${
                  timeLeft < 30
                    ? 'bg-rose-500/30 border-rose-400 text-rose-100 animate-pulse'
                    : 'bg-white/20 border-white/30 text-white'
                }`}>
                  <Clock className="w-4 h-4" />
                  <span className="font-mono font-black text-sm tracking-widest">
                    {formatTimer(timeLeft)}
                  </span>
                </div>
              </div>

              {/* Notice Banner */}
              <div className="p-3 rounded-xl bg-white/10 border border-white/20 text-xs leading-relaxed text-white">
                <p>
                  আপনার <strong>{method}</strong> অ্যাপ বা ডায়াল কোড (<strong>{currentGateway.ussdCode}</strong>) থেকে নিচের নম্বরে <strong>Send Money</strong> করুন:
                </p>
              </div>

              {/* Receiver Number & Amount Box */}
              <div className="bg-white rounded-2xl p-4 text-slate-900 shadow-lg space-y-3">
                
                {/* Receiver Number */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 block uppercase">
                      {method} Personal (Receiver Number)
                    </span>
                    <span className="text-base sm:text-lg font-black font-mono text-slate-900">
                      {currentGateway.receiverNumber}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(currentGateway.receiverNumber, 'receiver')}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-200 hover:bg-slate-300 text-slate-800 transition-colors"
                  >
                    {copiedField === 'receiver' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Amount to Send */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 block uppercase">
                      Exact Amount to Send
                    </span>
                    <span className="text-lg sm:text-xl font-black font-mono text-emerald-700">
                      {order?.totalPrice || "৳ 699"}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy((order?.totalPrice || "699").replace(/[^\d]/g, ''), 'amount')}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-200 hover:bg-slate-300 text-slate-800 transition-colors"
                  >
                    {copiedField === 'amount' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Sender Reference */}
                <div className="text-[11px] text-slate-500 flex justify-between px-1">
                  <span>আপনার সেন্ডার নম্বর:</span>
                  <span className="font-mono font-bold text-slate-700">{senderNumber}</span>
                </div>

              </div>

              {/* TrxID Input Box */}
              <div className="bg-white rounded-2xl p-4 text-slate-900 shadow-lg">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1.5">
                  Enter Transaction ID (TrxID) *
                </label>
                <input
                  type="text"
                  value={trxId}
                  onChange={(e) => {
                    setTrxId(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="e.g. BL1A92X4Z"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-300 focus:border-slate-800 text-slate-900 font-mono font-bold tracking-wider text-base focus:bg-white focus:outline-none transition-all uppercase"
                />
                
                {error && (
                  <div className="mt-2 text-xs text-rose-600 font-bold flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{error}</span>
                  </div>
                )}
                
                <p className="text-[10px] text-slate-500 mt-2">
                  টাকা পাঠানোর পর প্রাপ্ত SMS বা স্টেটমেন্টের Transaction ID (TrxID) দিন
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-white/20 hover:bg-white/30 text-white border border-white/30 transition-all text-center"
                >
                  Back / পেছনে
                </button>
                <button
                  type="button"
                  onClick={handleConfirmTrx}
                  className="py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg transition-all text-center font-mono"
                >
                  Verify & Submit →
                </button>
              </div>

            </div>
          )}

          {/* =======================================================================
              STEP 3: VERIFICATION SUBMITTED / PENDING STATUS
              (Ready for Telegram Bot Manual Verification of Confirm/Pending/Invalid)
             ======================================================================= */}
          {step === 3 && (
            <div className="space-y-5 animate-in fade-in duration-200 text-center">
              
              {/* Animated Status Icon */}
              <div className="w-16 h-16 rounded-full bg-white text-emerald-600 flex items-center justify-center mx-auto shadow-xl ring-4 ring-white/30">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-400 text-slate-950 shadow-xs mb-2">
                  <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping"></span>
                  <span>ম্যানুয়াল ভেরিফিকেশন পেন্ডিং (Pending Verification)</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Payment Submitted Successfully!
                </h3>
                <p className="text-xs text-white/90 mt-1 leading-relaxed max-w-sm mx-auto">
                  আপনার পেমেন্ট তথ্য সফলভাবে গ্রহণ করা হয়েছে। আমাদের টিম Transaction ID যাচাই করে ৫-১৫ মিনিটের মধ্যে আপনার ইমেইলে ইনভাইটেশন পাঠিয়ে দেবে।
                </p>
              </div>

              {/* Customer & Transaction Receipt Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 text-slate-900 text-left text-xs space-y-2.5 shadow-xl">
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Order Reference:</span>
                  <span className="font-mono font-bold text-blue-600">{order?.refId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Customer Name:</span>
                  <span className="font-bold text-slate-900">{order?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Delivery Email:</span>
                  <span className="font-semibold text-slate-900 truncate max-w-[200px]">{order?.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Product & Plan:</span>
                  <span className="font-semibold text-slate-900">{order?.product} ({order?.duration})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Payment Gateway:</span>
                  <span className="font-bold text-purple-700">{method}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Sender Number:</span>
                  <span className="font-mono font-bold text-slate-800">{senderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Receiver Number:</span>
                  <span className="font-mono font-bold text-slate-800">{currentGateway.receiverNumber}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Transaction ID (TrxID):</span>
                  <span className="font-mono font-extrabold text-emerald-700 uppercase tracking-wider">{trxId}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="font-bold text-slate-900">Total Amount:</span>
                  <span className="font-mono font-black text-base text-slate-900">{order?.totalPrice}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={`https://wa.me/8801700000000?text=${encodeURIComponent(
                    `Hello Ecosafeguard, I have submitted payment for Order Ref: ${order?.refId}. Method: ${method}, Sender: ${senderNumber}, TrxID: ${trxId}, Amount: ${order?.totalPrice}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-xs bg-emerald-500 hover:bg-emerald-600 text-white shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp এ সরাসরি কনফার্মেশন জানান</span>
                </a>

                <button
                  type="button"
                  onClick={onCancel}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-white/20 hover:bg-white/30 text-white border border-white/30 transition-all text-center"
                >
                  Return to Homepage / মূল পেজে ফিরুন
                </button>
              </div>

            </div>
          )}

        </div>

        {/* =========================================================================
            BOTTOM BRAND FOOTER
           ========================================================================= */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Secure Official Payment</span>
          </div>
          <div className="flex items-center gap-1 font-mono font-bold text-slate-700">
            <PhoneCall className="w-3 h-3 text-blue-600" />
            <span>Helpline: {currentGateway.helpline}</span>
          </div>
        </div>

      </div>

    </div>
  );
}
