import { useState } from 'react';
import { X } from 'lucide-react';
import { GALLERY } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

function GalleryItemCard({ item, index, onOpen }: { item: (typeof GALLERY)[number]; index: number; onOpen: () => void }) {
  const { ref, visible } = useReveal<HTMLButtonElement>();
  return (
    <button
      ref={ref}
      onClick={onOpen}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
      className={`reveal group relative block overflow-hidden rounded-3xl ring-1 ring-white/10 transition-all duration-500 hover:ring-electric-400/40 ${
        visible ? 'is-visible' : ''
      }`}
    >
      <img
        src={item.image}
        alt={item.caption}
        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />

      <span className="absolute left-4 top-4 rounded-full bg-electric-500/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
        {item.label}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-5 text-left">
        <h3 className="font-display text-lg font-bold text-white">{item.caption}</h3>
        <span className="mt-1 inline-block text-xs font-medium text-electric-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
          Tap to view →
        </span>
      </div>
    </button>
  );
}

export default function Gallery() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div ref={ref} className={`mx-auto max-w-2xl text-center ${visible ? 'is-visible' : ''}`}>
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-electric-400/25 bg-electric-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-electric-200">
              Before &amp; After Gallery
            </span>
          </div>
          <h2 className="reveal mt-5 font-display text-3xl font-extrabold leading-tight tracking-tightest text-white sm:text-4xl lg:text-5xl" style={{ transitionDelay: '0.08s' }}>
            The <span className="text-gradient">Difference</span> Speaks for Itself
          </h2>
          <p className="reveal mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg" style={{ transitionDelay: '0.16s' }}>
            A look at the kind of cleaning and detailing results we aim for. Images are for
            illustration and may not depict actual customer vehicles.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((item, i) => (
            <GalleryItemCard key={item.id} item={item} index={i} onOpen={() => setActive(i)} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <figure className="max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl ring-1 ring-white/10" onClick={(e) => e.stopPropagation()}>
            <img src={GALLERY[active].image} alt={GALLERY[active].caption} className="max-h-[78vh] w-full object-contain" />
            <figcaption className="bg-ink-900 px-5 py-3 text-center text-sm text-slate-300">
              <span className="font-semibold text-electric-300">{GALLERY[active].label}</span> · {GALLERY[active].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
