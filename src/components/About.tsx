import { Check, MapPin } from 'lucide-react';
import { BUSINESS, IMAGES } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

const highlights = [
  'Conveniently located in Sector 93, Noida',
  'Friendly experience for every car owner',
  'Exterior, interior, foam and polishing care',
  'Quick booking enquiries via WhatsApp',
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative overflow-hidden bg-ink-900 py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-electric-700/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div ref={ref} className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${visible ? 'is-visible' : ''}`}>
          {/* Images */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10">
              <img
                src={IMAGES.about}
                alt="Car being carefully washed at 295 Car Wash"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
            </div>

            <div className="absolute -bottom-8 -right-4 w-44 overflow-hidden rounded-2xl ring-2 ring-ink-900 shadow-2xl sm:w-56 lg:-right-8">
              <img
                src={IMAGES.aboutSecondary}
                alt="Foam wash at 295 Car Wash"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute -left-4 top-6 rounded-2xl bg-electric-500 px-5 py-4 text-white shadow-[0_20px_40px_-12px_rgba(34,168,255,0.6)] lg:-left-8">
              <div className="font-display text-3xl font-extrabold leading-none">295</div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-electric-50">
                Car Wash
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-electric-400/25 bg-electric-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-electric-200">
              About Us
            </span>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tightest text-white sm:text-4xl lg:text-5xl">
              About <span className="text-gradient">295 Car Wash</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              At 295 Car Wash, we believe every car deserves to look its best. We aim to provide
              a convenient and satisfying car cleaning experience for vehicle owners in
              Sector 93, Noida.
            </p>

            <ul className="mt-8 space-y-3.5">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-electric-500/15 text-electric-400 ring-1 ring-electric-400/30">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-base text-slate-200">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex items-center gap-3 rounded-2xl border border-white/8 bg-ink-850 p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-electric-500/10 text-electric-400 ring-1 ring-electric-400/25">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-semibold text-white">{BUSINESS.addressLine1}</div>
                <div className="text-sm text-slate-400">{BUSINESS.addressLine2}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
