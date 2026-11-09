import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { SERVICES, BUSINESS, type Service } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const enquire = () => {
    const msg = `Hello ${BUSINESS.name}! I would like to enquire about your ${service.title} service.`;
    window.open(`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
      className={`reveal group relative overflow-hidden rounded-3xl border border-white/8 bg-ink-850 transition-all duration-500 hover:border-electric-400/40 hover:card-glow ${
        visible ? 'is-visible' : ''
      }`}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-850 via-ink-850/40 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-ink-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-electric-200 ring-1 ring-electric-400/20 backdrop-blur-sm">
          0{index + 1}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-electric-300">
          {service.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{service.description}</p>

        <button
          onClick={enquire}
          className="mt-5 inline-flex items-center gap-2 rounded-xl border border-electric-400/25 bg-electric-500/10 px-4 py-2.5 text-sm font-semibold text-electric-200 transition-all hover:bg-electric-500 hover:text-white"
        >
          <MessageCircle className="h-4 w-4" />
          Enquire Now
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-electric-400/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div ref={ref} className={`mx-auto max-w-2xl text-center ${visible ? 'is-visible' : ''}`}>
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-electric-400/25 bg-electric-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-electric-200">
              Our Services
            </span>
          </div>
          <h2 className="reveal mt-5 font-display text-3xl font-extrabold leading-tight tracking-tightest text-white sm:text-4xl lg:text-5xl" style={{ transitionDelay: '0.08s' }}>
            Care for Every Part of <span className="text-gradient">Your Car</span>
          </h2>
          <p className="reveal mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg" style={{ transitionDelay: '0.16s' }}>
            From a quick exterior rinse to a full interior refresh — explore the car cleaning
            services we offer. Tap enquire on any service to ask us on WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Service categories shown are indicative. Final service and pricing will be confirmed on enquiry.
        </p>
      </div>
    </section>
  );
}
