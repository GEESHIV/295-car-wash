import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setTooltip(true), 1200);
    return () => clearTimeout(t);
  }, [show]);

  const url = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappDefaultMessage)}`;

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex items-end gap-3 transition-all duration-500 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      {tooltip && (
        <div className="relative mb-1 hidden max-w-[220px] rounded-2xl border border-white/10 bg-ink-850 px-4 py-3 text-sm text-slate-200 shadow-xl sm:block">
          <button
            onClick={() => setTooltip(false)}
            className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-ink-700 text-slate-400 hover:text-white"
            aria-label="Dismiss"
          >
            <X className="h-3 w-3" />
          </button>
          <span className="font-semibold text-white">Need a car wash?</span>
          <br />
          <span className="text-xs text-slate-400">Message us on WhatsApp — we reply fast.</span>
        </div>
      )}

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with 295 Car Wash on WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-[0_12px_30px_-8px_rgba(16,185,129,0.6)] transition-all hover:scale-105 hover:bg-emerald-400"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500/60 animate-pulse-ring" />
        <MessageCircle className="relative h-6 w-6" />
      </a>
    </div>
  );
}
