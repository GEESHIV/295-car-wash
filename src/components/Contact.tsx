import { Phone, MessageCircle, MapPin, Navigation } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappDefaultMessage)}`;
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.mapsEmbedQuery)}&output=embed`;

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-electric-400/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div ref={ref} className={`mx-auto max-w-2xl text-center ${visible ? 'is-visible' : ''}`}>
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-electric-400/25 bg-electric-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-electric-200">
              Contact Us
            </span>
          </div>
          <h2 className="reveal mt-5 font-display text-3xl font-extrabold leading-tight tracking-tightest text-white sm:text-4xl lg:text-5xl" style={{ transitionDelay: '0.08s' }}>
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="reveal mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg" style={{ transitionDelay: '0.16s' }}>
            Visit us, call us, or drop a WhatsApp message — we’re here to help your car look its best.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Contact card */}
          <div className="reveal flex flex-col gap-5 rounded-3xl border border-white/8 bg-ink-850 p-7 card-glow sm:p-9">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-electric-500/10 text-electric-400 ring-1 ring-electric-400/30">
                <MapPin className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-white">{BUSINESS.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  {BUSINESS.addressLine1}, {BUSINESS.addressLine2}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-electric-500/10 text-electric-400 ring-1 ring-electric-400/30">
                <Phone className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-400">Phone</h3>
                <a href={BUSINESS.phoneHref} className="mt-1 block text-lg font-semibold text-white transition-colors hover:text-electric-300">
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="mt-2 grid gap-3 sm:grid-cols-3">
              <a
                href={BUSINESS.phoneHref}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-electric-500 px-4 py-3.5 text-sm font-bold text-white transition-all hover:bg-electric-400 hover:shadow-[0_0_24px_-6px_rgba(34,168,255,0.7)]"
              >
                <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
                Call Now
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3.5 text-sm font-bold text-emerald-300 transition-all hover:bg-emerald-500 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm font-bold text-white transition-all hover:border-electric-400/50 hover:bg-white/10"
              >
                <Navigation className="h-4 w-4 text-electric-400" />
                Get Directions
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="reveal overflow-hidden rounded-3xl border border-white/8 bg-ink-850 h-[420px]" style={{ transitionDelay: '0.1s' }}>
            <iframe
              title="295 Car Wash location map"
              src={mapEmbedSrc}
              className="h-full w-full grayscale-[0.3] contrast-110"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          The map shows the general Sector 93 area. For precise directions, use “Get Directions” above.
        </p>
      </div>
    </section>
  );
}
