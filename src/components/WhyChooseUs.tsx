import { MapPin, Sparkles, Smile, CalendarCheck, Eye, type LucideIcon } from 'lucide-react';
import { WHY_CHOOSE_US } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

const ICONS: Record<string, LucideIcon> = {
  MapPin,
  Sparkles,
  Smile,
  CalendarCheck,
  Eye,
};

function FeatureCard({ icon, title, text, index }: { icon: string; title: string; text: string; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = ICONS[icon] ?? Sparkles;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`reveal group relative overflow-hidden rounded-2xl border border-white/8 bg-ink-850 p-7 transition-all duration-500 hover:border-electric-400/40 hover:bg-ink-800 ${
        visible ? 'is-visible' : ''
      }`}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-electric-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-electric-500/10 text-electric-400 ring-1 ring-electric-400/30 transition-all group-hover:bg-electric-500 group-hover:text-white group-hover:shadow-[0_0_24px_-4px_rgba(34,168,255,0.6)]">
        <Icon className="h-6 w-6" />
      </span>

      <h3 className="mt-5 font-display text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>

      <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-electric-400 to-transparent transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

export default function WhyChooseUs() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-[0.12]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(34,168,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,168,255,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div ref={ref} className={`mx-auto max-w-2xl text-center ${visible ? 'is-visible' : ''}`}>
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-electric-400/25 bg-electric-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-electric-200">
              Why Choose Us
            </span>
          </div>
          <h2 className="reveal mt-5 font-display text-3xl font-extrabold leading-tight tracking-tightest text-white sm:text-4xl lg:text-5xl" style={{ transitionDelay: '0.08s' }}>
            Built Around <span className="text-gradient">Your Car</span> and You
          </h2>
          <p className="reveal mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg" style={{ transitionDelay: '0.16s' }}>
            A few reasons car owners in Sector 93 choose 295 Car Wash for their everyday cleaning needs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, i) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} text={item.text} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
