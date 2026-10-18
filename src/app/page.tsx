import { CSSProperties } from "react";
import Image from "next/image";
import {
  AirVent,
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  Clock,
  Fan,
  Flame,
  Gauge,
  Home as HomeIcon,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Snowflake,
  ThermometerSun,
  Wrench,
} from "lucide-react";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { HeroParticles } from "@/components/HeroParticles";
import { site } from "@/lib/site";

const services = [
  {
    icon: Flame,
    title: "Furnaces & Boilers",
    text: "Installation, repair and replacement of gas, electric and hydronic heating systems.",
    tone: "fire",
    anim: "icon-flicker",
  },
  {
    icon: Snowflake,
    title: "Air Conditioning",
    text: "Central air and ductless mini-split systems sized right for your space.",
    tone: "ice",
    anim: "icon-spin",
  },
  {
    icon: ThermometerSun,
    title: "Heat Pumps",
    text: "Efficient year-round heating and cooling from a single system.",
    tone: "fire",
    anim: "icon-heat",
  },
  {
    icon: Fan,
    title: "Ventilation & Air Quality",
    text: "HRVs, ERVs, humidifiers and filtration for cleaner, healthier air.",
    tone: "ice",
    anim: "icon-spin-fast",
  },
  {
    icon: AirVent,
    title: "Ductwork",
    text: "Custom duct design, installation and repairs to balance airflow room to room.",
    tone: "fire",
    anim: "icon-blow",
  },
  {
    icon: Wrench,
    title: "Maintenance & Tune-ups",
    text: "Seasonal inspections that keep equipment efficient and prevent breakdowns.",
    tone: "ice",
    anim: "icon-wiggle",
  },
] as const;

const reasons = [
  { icon: BadgeCheck, title: "Licensed & insured", text: "Qualified technicians who do the job to code." },
  { icon: Clock, title: "Fast response", text: "Emergency service when your heat or cooling quits." },
  { icon: Gauge, title: "Upfront pricing", text: "Clear quotes before any work begins." },
  { icon: ShieldCheck, title: "Work we stand behind", text: "Quality parts and workmanship that lasts." },
];

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function Home() {
  return (
    <>
      <Header />

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy-950 text-white">
          <div className="glow-a pointer-events-none absolute -left-40 top-1/3 size-[32rem] rounded-full bg-fire-500/25 blur-3xl" />
          <div className="glow-b pointer-events-none absolute -right-40 -top-20 size-[36rem] rounded-full bg-ice-500/25 blur-3xl" />
          <HeroParticles />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.2fr_1fr] md:py-28">
            <div>
              <p
                className="hero-in mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ice-200"
                style={delay(0)}
              >
                {site.tagline}
              </p>
              <h1
                className="hero-in font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                style={delay(120)}
              >
                Comfort in every season, <span className="text-heat-cool">hot or cold.</span>
              </h1>
              <p className="hero-in mt-6 max-w-xl text-lg text-slate-300" style={delay(260)}>
                {site.name} installs, repairs and maintains heating, ventilation and air
                conditioning systems for homes and businesses.
              </p>
              <div className="hero-in mt-8 flex flex-wrap gap-3" style={delay(400)}>
                <a
                  href="#contact"
                  className="bg-heat-cool inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white shadow-lg shadow-fire-500/20 transition hover:scale-[1.03] hover:opacity-95"
                >
                  Book a service <ArrowRight className="size-4" />
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  <Phone className="size-4" /> {site.phone}
                </a>
              </div>
            </div>

            <div className="emblem-in relative mx-auto w-64 sm:w-80 md:w-full md:max-w-md">
              <div className="glow-pulse absolute inset-6 rounded-full bg-gradient-to-br from-fire-500/30 to-ice-500/30 blur-2xl" />
              <Image
                src="/msi-emblem.png"
                alt="MSI Mechanical emblem: a flame and an ice crystal"
                width={1064}
                height={924}
                priority
                className="animate-float relative w-full drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="bg-heat-cool relative h-1.5 w-full" />
        </section>

        {/* Heat / Cool split */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl bg-gradient-to-br from-fire-600 to-fire-400 p-8 text-white shadow-xl shadow-fire-500/20">
                <Flame className="size-10" />
                <h2 className="font-display mt-4 text-2xl font-bold">Stay warm all winter</h2>
                <p className="mt-2 text-white/90">
                  Reliable heat when you need it most, from new furnace installs to late-night
                  boiler repairs.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-3xl bg-gradient-to-br from-ice-600 to-ice-400 p-8 text-white shadow-xl shadow-ice-500/20">
                <Snowflake className="size-10" />
                <h2 className="font-display mt-4 text-2xl font-bold">Stay cool all summer</h2>
                <p className="mt-2 text-white/90">
                  Quiet, efficient air conditioning that keeps every room comfortable through the
                  hottest days.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Stats */}
          <dl className="mt-12 grid grid-cols-2 gap-y-8 rounded-3xl border border-slate-200 py-8 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
            {site.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} className="flex flex-col items-center px-4 text-center">
                <dt className="order-2 mt-1 text-sm font-medium text-slate-600">{s.label}</dt>
                <dd className="order-1 font-display text-4xl font-bold sm:text-5xl">
                  <span className={i % 2 === 0 ? "text-fire-500" : "text-ice-500"}>
                    <CountUp value={s.value} suffix={s.suffix} />
                  </span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-16 bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-fire-500">
                What we do
              </p>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                Complete HVAC services
              </h2>
              <p className="mt-4 text-slate-600">
                One team for everything that keeps your building comfortable, from the
                furnace to the vents.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, text, tone, anim }, i) => (
                <Reveal key={title} delay={(i % 3) * 100}>
                  <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div
                      className={`inline-flex size-12 items-center justify-center rounded-xl transition-colors duration-300 ${
                        tone === "fire"
                          ? "bg-fire-500/10 text-fire-500 group-hover:bg-fire-500 group-hover:text-white"
                          : "bg-ice-500/10 text-ice-500 group-hover:bg-ice-500 group-hover:text-white"
                      }`}
                    >
                      <Icon className={`size-6 ${anim}`} />
                    </div>
                    <h3 className="font-display mt-5 text-lg font-semibold text-navy-900">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why MSI */}
        <section id="why" className="scroll-mt-16 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-ice-500">
                Why choose MSI
              </p>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                Residential and commercial, done right
              </h2>
              <p className="mt-4 text-slate-600">
                Whether it&apos;s a single home or a multi-unit building, we size, install and
                service systems properly so they run efficiently for years.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-navy-900">
                  <HomeIcon className="size-4 text-fire-500" /> Residential
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-navy-900">
                  <Building2 className="size-4 text-ice-500" /> Commercial
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-navy-900">
                  <CalendarCheck className="size-4 text-fire-500" /> Maintenance plans
                </span>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map(({ icon: Icon, title, text }, i) => (
                <Reveal key={title} delay={i * 100}>
                  <div className="h-full rounded-2xl border border-slate-200 p-6 transition duration-300 hover:border-slate-300 hover:shadow-md">
                    <Icon className="size-7 text-navy-900" />
                    <h3 className="font-display mt-4 font-semibold text-navy-900">{title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="px-4 sm:px-6">
          <Reveal className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-8 py-12 text-white sm:px-12">
              <div className="glow-a pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-fire-500/30 blur-3xl" />
              <div className="glow-b pointer-events-none absolute -bottom-20 -right-20 size-72 rounded-full bg-ice-500/30 blur-3xl" />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h2 className="font-display text-2xl font-bold sm:text-3xl">
                    No heat? No cooling? We&apos;re on it.
                  </h2>
                  <p className="mt-2 text-slate-300">
                    Call now for emergency service. {site.hours[2].time}.
                  </p>
                </div>
                <a
                  href={site.phoneHref}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-navy-900 transition hover:scale-[1.03] hover:bg-slate-100"
                >
                  <Phone className="size-4" /> {site.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-16 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.5fr]">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-fire-500">
                Get in touch
              </p>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                Request service or a free quote
              </h2>
              <p className="mt-4 text-slate-600">
                Send us a few details and we&apos;ll get back to you to schedule a visit.
              </p>

              <ul className="mt-8 space-y-4 text-slate-700">
                <li className="flex items-center gap-3">
                  <Phone className="size-5 text-fire-500" />
                  <a href={site.phoneHref} className="font-medium hover:text-navy-900">
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-5 text-ice-500" />
                  <a href={`mailto:${site.email}`} className="font-medium hover:text-navy-900">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="size-5 text-fire-500" />
                  <span>{site.serviceArea}</span>
                </li>
              </ul>

              <dl className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 text-sm">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4 px-4 py-3">
                    <dt className="font-medium text-navy-900">{h.days}</dt>
                    <dd className="text-slate-600">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={150}>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-navy-950 text-slate-400">
        <div className="bg-heat-cool h-1 w-full" />
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm sm:flex-row sm:px-6">
          <div className="flex items-center gap-2.5">
            <Image src="/msi-emblem.png" alt="" width={32} height={28} />
            <span className="font-display font-semibold text-white">{site.name}</span>
          </div>
          <p>© 2026 {site.name} All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
