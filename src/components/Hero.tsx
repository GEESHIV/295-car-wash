import { Phone, CalendarCheck, ChevronDown, Star, Sparkles } from 'lucide-react';
import { BUSINESS, IMAGES } from '@/lib/constants';

export default function Hero() {
  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-ink-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Freshly washed luxury car with dramatic lighting"
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />
      </div>

      {/* Decorative grid + glow */}
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-[0.18]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(34,168,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,168,255,0.08) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-electric-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-electric-700/20 blur-[100px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-28 pb-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-electric-400/30 bg-electric-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-electric-200">
            <Sparkles className="h-3.5 w-3.5" />
            Premium Car Wash · Sector 93, Noida
          </div>

          <h1
            className="animate-fade-up mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tightest text-white sm:text-5xl lg:text-7xl"
            style={{ animationDelay: '0.1s' }}
          >
            Give Your Car the
            <br />
            <span className="text-gradient">Shine It Deserves.</span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl"
            style={{ animationDelay: '0.25s' }}
          >
            Keep your vehicle looking fresh, clean and shining with 295 Car Wash.
            Your car deserves the right care.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: '0.4s' }}
          >
            <button
              onClick={scrollToBooking}
              className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-electric-500 px-7 py-4 text-base font-bold text-white transition-all hover:bg-electric-400 hover:shadow-[0_0_36px_-6px_rgba(34,168,255,0.7)]"
            >
              <CalendarCheck className="h-5 w-5 transition-transform group-hover:scale-110" />
              Book Your Car Wash
            </button>
            <a
              href={BUSINESS.phoneHref}
              className="group inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:border-electric-400/50 hover:bg-white/10"
            >
              <Phone className="h-5 w-5 text-electric-400 transition-transform group-hover:rotate-12" />
              Call Now
            </a>
          </div>

          {/* Quick stats */}
          <div
            className="animate-fade-up mt-14 flex flex-wrap items-center gap-x-8 gap-y-5"
            style={{ animationDelay: '0.55s' }}
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-electric-400 text-electric-400" />
                ))}
              </div>
              <span className="text-sm text-slate-400">Loved by local car owners</span>
            </div>
            <div className="h-5 w-px bg-white/10" />
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span className="text-electric-400">●</span> Exterior · Interior · Foam · Polishing
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-electric-400 sm:flex"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </button>
    </section>
  );
}
