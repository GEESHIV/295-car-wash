import { useState, type FormEvent } from 'react';
import { CalendarCheck, Send, CheckCircle2, User, Phone, Car, Calendar, Clock, MessageSquare, ChevronDown } from 'lucide-react';
import { BUSINESS, SERVICES } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

type FormState = {
  name: string;
  mobile: string;
  carModel: string;
  vehicleType: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

const VEHICLE_TYPES = ['Hatchback', 'Sedan', 'SUV', 'Other'];

const initial: FormState = {
  name: '',
  mobile: '',
  carModel: '',
  vehicleType: '',
  service: '',
  date: '',
  time: '',
  message: '',
};

export default function BookingForm() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!form.mobile.trim()) next.mobile = 'Please enter your mobile number';
    else if (!/^[0-9+\-\s]{8,15}$/.test(form.mobile.trim())) next.mobile = 'Please enter a valid mobile number';
    if (!form.carModel.trim()) next.carModel = 'Please enter your car brand and model';
    if (!form.vehicleType) next.vehicleType = 'Please select a vehicle type';
    if (!form.service) next.service = 'Please select a required service';
    if (!form.date) next.date = 'Please choose a preferred date';
    if (!form.time) next.time = 'Please choose a preferred time';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const buildMessage = (f: FormState): string => {
    const lines = [
      `*New Car Wash Enquiry — ${BUSINESS.name}*`,
      '',
      `*Name:* ${f.name}`,
      `*Mobile:* ${f.mobile}`,
      `*Car Brand & Model:* ${f.carModel}`,
      `*Vehicle Type:* ${f.vehicleType}`,
      `*Required Service:* ${f.service}`,
      `*Preferred Date:* ${f.date}`,
      `*Preferred Time:* ${f.time}`,
    ];
    if (f.message.trim()) lines.push(`*Message:* ${f.message}`);
    return lines.join('\n');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const msg = buildMessage(form);
    const url = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const reset = () => {
    setForm(initial);
    setErrors({});
    setSubmitted(false);
  };

  const fieldClass = (key: keyof FormState) =>
    `w-full rounded-xl border bg-ink-950/60 px-4 py-3 pl-11 text-sm text-white placeholder-slate-500 transition-all focus:outline-none focus:ring-2 ${
      errors[key]
        ? 'border-red-500/60 focus:ring-red-500/30'
        : 'border-white/10 focus:border-electric-400/60 focus:ring-electric-400/20'
    }`;

  return (
    <section id="booking" className="relative overflow-hidden bg-ink-900 py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-electric-700/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-electric-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div ref={ref} className={`grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14 ${visible ? 'is-visible' : ''}`}>
          {/* Left intro */}
          <div className="reveal flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-electric-400/25 bg-electric-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-electric-200">
              Book Now
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tightest text-white sm:text-4xl lg:text-5xl">
              Book Your <span className="text-gradient">Car Wash</span> Enquiry
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              Fill in a few details about your car and the service you need. On submit, your
              details open in WhatsApp ready to send — no manual typing required.
            </p>

            <div className="mt-8 space-y-3">
              {[
                { icon: Send, text: 'Sent straight to our WhatsApp' },
                { icon: CheckCircle2, text: 'We confirm your slot on reply' },
                { icon: Phone, text: `Or call us directly: ${BUSINESS.phoneDisplay}` },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-electric-500/10 text-electric-400 ring-1 ring-electric-400/25">
                    <Icon className="h-4 w-4" />
                  </span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Form / Success */}
          <div className="reveal rounded-3xl border border-white/8 bg-ink-850/80 p-6 card-glow backdrop-blur-sm sm:p-8" style={{ transitionDelay: '0.12s' }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-electric-500/15 text-electric-400 ring-1 ring-electric-400/30">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">Enquiry Ready!</h3>
                <p className="mt-3 max-w-sm text-sm text-slate-400">
                  WhatsApp has opened with your details pre-filled. Press send there to confirm
                  your enquiry, or start a new one below.
                </p>
                <button
                  onClick={reset}
                  className="mt-7 inline-flex items-center gap-2 rounded-xl border border-electric-400/30 bg-electric-500/10 px-5 py-3 text-sm font-semibold text-electric-200 transition-all hover:bg-electric-500 hover:text-white"
                >
                  <CalendarCheck className="h-4 w-4" />
                  New Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Customer Name <span className="text-electric-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="Your full name"
                        className={fieldClass('name')}
                      />
                    </div>
                    {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Mobile Number <span className="text-electric-400">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                      <input
                        type="tel"
                        value={form.mobile}
                        onChange={(e) => update('mobile', e.target.value)}
                        placeholder="e.g. 9876543210"
                        className={fieldClass('mobile')}
                      />
                    </div>
                    {errors.mobile && <p className="mt-1.5 text-xs text-red-400">{errors.mobile}</p>}
                  </div>

                  {/* Car model */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Car Brand &amp; Model <span className="text-electric-400">*</span>
                    </label>
                    <div className="relative">
                      <Car className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                      <input
                        type="text"
                        value={form.carModel}
                        onChange={(e) => update('carModel', e.target.value)}
                        placeholder="e.g. Hyundai Creta"
                        className={fieldClass('carModel')}
                      />
                    </div>
                    {errors.carModel && <p className="mt-1.5 text-xs text-red-400">{errors.carModel}</p>}
                  </div>

                  {/* Vehicle type */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Vehicle Type <span className="text-electric-400">*</span>
                    </label>
                    <div className="relative">
                      <Car className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                      <select
                        value={form.vehicleType}
                        onChange={(e) => update('vehicleType', e.target.value)}
                        className={`${fieldClass('vehicleType')} appearance-none pr-9`}
                      >
                        <option value="" disabled>Select type</option>
                        {VEHICLE_TYPES.map((t) => (
                          <option key={t} value={t} className="bg-ink-850">{t}</option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                    </div>
                    {errors.vehicleType && <p className="mt-1.5 text-xs text-red-400">{errors.vehicleType}</p>}
                  </div>

                  {/* Service */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Required Service <span className="text-electric-400">*</span>
                    </label>
                    <div className="relative">
                      <CalendarCheck className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                      <select
                        value={form.service}
                        onChange={(e) => update('service', e.target.value)}
                        className={`${fieldClass('service')} appearance-none pr-9`}
                      >
                        <option value="" disabled>Select service</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title} className="bg-ink-850">{s.title}</option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                    </div>
                    {errors.service && <p className="mt-1.5 text-xs text-red-400">{errors.service}</p>}
                  </div>

                  {/* Date */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Preferred Date <span className="text-electric-400">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                      <input
                        type="date"
                        value={form.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => update('date', e.target.value)}
                        className={`${fieldClass('date')} [color-scheme:dark]`}
                      />
                    </div>
                    {errors.date && <p className="mt-1.5 text-xs text-red-400">{errors.date}</p>}
                  </div>

                  {/* Time */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Preferred Time <span className="text-electric-400">*</span>
                    </label>
                    <div className="relative">
                      <Clock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                      <input
                        type="time"
                        value={form.time}
                        onChange={(e) => update('time', e.target.value)}
                        className={`${fieldClass('time')} [color-scheme:dark]`}
                      />
                    </div>
                    {errors.time && <p className="mt-1.5 text-xs text-red-400">{errors.time}</p>}
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Additional Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="pointer-events-none absolute left-3.5 top-4 h-4 w-4 text-slate-500" />
                      <textarea
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        rows={3}
                        placeholder="Any specific concerns or requests (optional)"
                        className={`${fieldClass('message')} resize-none pt-3`}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2.5 rounded-2xl bg-electric-500 px-6 py-4 text-base font-bold text-white transition-all hover:bg-electric-400 hover:shadow-[0_0_36px_-6px_rgba(34,168,255,0.7)]"
                >
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  Book Now
                </button>

                <p className="text-center text-xs text-slate-500">
                  By submitting, WhatsApp opens with your details pre-filled. Nothing is stored.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
