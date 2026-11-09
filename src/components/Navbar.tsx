import { useEffect, useState } from 'react';
import { Menu, X, Phone, Droplets } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-white/5 py-3' : 'py-5 bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <button
          onClick={() => handleNav('#home')}
          className="group flex items-center gap-2.5"
          aria-label={`${BUSINESS.name} home`}
        >
          <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-electric-500/10 ring-1 ring-electric-400/30 transition-all group-hover:bg-electric-500/20">
            <Droplets className="h-5 w-5 text-electric-400" />
            <span className="absolute inset-0 rounded-xl bg-electric-400/20 blur-md opacity-0 transition-opacity group-hover:opacity-100" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-extrabold tracking-tightest text-white">
              295<span className="text-electric-400"> Car Wash</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
              Sector 93 · Noida
            </span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={BUSINESS.phoneHref}
            className="group inline-flex items-center gap-2 rounded-xl bg-electric-500 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-electric-400 hover:shadow-[0_0_24px_-4px_rgba(34,168,255,0.6)]"
          >
            <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
            Call Now
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-slate-200 transition-colors hover:bg-white/5 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-0 z-40 origin-top bg-ink-950/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-full flex-col px-6 pt-24 pb-10">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                style={{ transitionDelay: `${i * 50}ms` }}
                className={`transform transition-all duration-500 ${
                  open ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
              >
                <button
                  onClick={() => handleNav(link.href)}
                  className="flex w-full items-center justify-between border-b border-white/5 py-4 text-left font-display text-2xl font-semibold text-slate-100 transition-colors hover:text-electric-400"
                >
                  {link.label}
                  <span className="text-electric-400/60">→</span>
                </button>
              </li>
            ))}
          </ul>

          <a
            href={BUSINESS.phoneHref}
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-electric-500 px-5 py-4 text-base font-semibold text-white"
          >
            <Phone className="h-5 w-5" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
