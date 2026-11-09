import { Droplets, Phone, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS, NAV_LINKS, SERVICES } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappDefaultMessage)}`;

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-ink-950">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-electric-700/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-electric-500/10 ring-1 ring-electric-400/30">
                <Droplets className="h-5 w-5 text-electric-400" />
              </span>
              <span className="font-display text-lg font-extrabold tracking-tightest text-white">
                295<span className="text-electric-400"> Car Wash</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              A convenient, satisfying car cleaning experience for vehicle owners in
              Sector 93, Noida. Give your car the shine it deserves.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={BUSINESS.phoneHref}
                aria-label="Call us"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-electric-400/50 hover:text-electric-300"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp us"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-emerald-400/50 hover:text-emerald-300"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get directions"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-electric-400/50 hover:text-electric-300"
              >
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-slate-400 transition-colors hover:text-electric-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-left text-sm text-slate-400 transition-colors hover:text-electric-300"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-4 space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
                <a href={BUSINESS.phoneHref} className="transition-colors hover:text-white">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
                <span>
                  {BUSINESS.addressLine1}, {BUSINESS.addressLine2}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-7 sm:flex-row">
          <p className="text-center text-xs text-slate-500 sm:text-left">
            © {year} {BUSINESS.name}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-400 transition-all hover:border-electric-400/40 hover:text-electric-300"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
