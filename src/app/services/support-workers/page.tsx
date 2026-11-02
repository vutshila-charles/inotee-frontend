import Link from "next/link";
import { WebsiteForm, ThemeToggle, MobileNavigation } from "@/components/website-controls";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Support Workers | Inotee Group | Inotee Group" };

export default function Page() {
  return (
    <main id="main-content" className="flex-1">
      <section className="relative isolate overflow-hidden border-b border-[rgba(13,31,78,0.08)] bg-[var(--color-brand-strong)] text-white">
        <img alt="Support Workers hero image" decoding="async" className="object-cover" style={{"position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent"}} src="/images/services-worker-support-hero.png" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,21,50,0.92)_0%,rgba(8,21,50,0.82)_40%,rgba(8,21,50,0.62)_100%)]">

        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,178,93,0.28),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_48%)]">

        </div>
        <div className="content-shell relative py-24 sm:py-28 lg:py-32">
          <p className="text-sm font-medium uppercase tracking-[0.34em] text-white/72">
            {"Inotee Group"}
          </p>
          <div className="mt-5 h-1 w-20 rounded-full bg-[var(--color-accent)]">

          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            {"Support Workers"}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
            {"Structured support for complex and everyday needs."}
          </p>
        </div>
      </section>
      <section className="section-space">
        <div className="content-shell grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.34em] text-[var(--color-ink-soft)]">
              {"What Staff We Supply"}
            </p>
            <div className="mt-4 h-1 w-20 rounded-full bg-[var(--color-accent)]">

            </div>
            <h2 className="mt-6 text-4xl font-semibold text-[var(--color-brand-strong)] sm:text-5xl">
              {"Skilled professionals ready to support your service."}
            </h2>
            <p className="mt-6 text-[1.05rem] leading-8 text-[var(--color-ink-soft)]">
              {"We place support workers who combine calm professionalism with practical care skills in residential, supported living, and outreach environments."}
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_24px_48px_rgba(13,31,78,0.12)]">
            <img alt="Support Workers introduction image" loading="lazy" width="1145" height="1374" decoding="async" className="h-full w-full object-cover" style={{"color": "transparent"}} src="/images/services-worker-support-hero.png" />
          </div>
        </div>
      </section>
      <section className="section-space bg-[linear-gradient(180deg,rgba(229,239,247,0.78)_0%,rgba(247,249,252,1)_100%)]">
        <div className="content-shell">
          <p className="text-sm uppercase tracking-[0.34em] text-[var(--color-ink-soft)]">
            {"What This Service Includes"}
          </p>
          <div className="mt-4 h-1 w-20 rounded-full bg-[var(--color-accent)]">

          </div>
          <h2 className="mt-6 text-4xl font-semibold text-[var(--color-brand-strong)] sm:text-5xl">
            {"Practical support delivered with quality and consistency."}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article className="rounded-[1.9rem] border border-white/70 bg-white/94 p-7 shadow-[0_18px_40px_rgba(13,31,78,0.08)] ring-1 ring-[rgba(13,31,78,0.04)]">
              <div className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(13,31,78,0.08)_0%,rgba(13,31,78,0.14)_100%)] text-[var(--color-brand)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase-medical h-7 w-7" aria-hidden="true">
                  <path d="M12 11v4">

                  </path>
                  <path d="M14 13h-4">

                  </path>
                  <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2">

                  </path>
                  <path d="M18 6v14">

                  </path>
                  <path d="M6 6v14">

                  </path>
                  <rect width="20" height="14" x="2" y="6" rx="2">

                  </rect>
                </svg>
              </div>
              <p className="mt-6 text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Daily living and independence support"}
              </p>
            </article>
            <article className="rounded-[1.9rem] border border-white/70 bg-white/94 p-7 shadow-[0_18px_40px_rgba(13,31,78,0.08)] ring-1 ring-[rgba(13,31,78,0.04)]">
              <div className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(13,31,78,0.08)_0%,rgba(13,31,78,0.14)_100%)] text-[var(--color-brand)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check h-7 w-7" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">

                  </path>
                  <path d="m9 12 2 2 4-4">

                  </path>
                </svg>
              </div>
              <p className="mt-6 text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Behaviour support in line with care plans"}
              </p>
            </article>
            <article className="rounded-[1.9rem] border border-white/70 bg-white/94 p-7 shadow-[0_18px_40px_rgba(13,31,78,0.08)] ring-1 ring-[rgba(13,31,78,0.04)]">
              <div className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(13,31,78,0.08)_0%,rgba(13,31,78,0.14)_100%)] text-[var(--color-brand)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-handshake h-7 w-7" aria-hidden="true">
                  <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762">

                  </path>
                </svg>
              </div>
              <p className="mt-6 text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Community access and engagement"}
              </p>
            </article>
            <article className="rounded-[1.9rem] border border-white/70 bg-white/94 p-7 shadow-[0_18px_40px_rgba(13,31,78,0.08)] ring-1 ring-[rgba(13,31,78,0.04)]">
              <div className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(13,31,78,0.08)_0%,rgba(13,31,78,0.14)_100%)] text-[var(--color-brand)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-check h-7 w-7" aria-hidden="true">
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1">

                  </rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2">

                  </path>
                  <path d="m9 14 2 2 4-4">

                  </path>
                </svg>
              </div>
              <p className="mt-6 text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Medication prompts and record keeping"}
              </p>
            </article>
            <article className="rounded-[1.9rem] border border-white/70 bg-white/94 p-7 shadow-[0_18px_40px_rgba(13,31,78,0.08)] ring-1 ring-[rgba(13,31,78,0.04)]">
              <div className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(13,31,78,0.08)_0%,rgba(13,31,78,0.14)_100%)] text-[var(--color-brand)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase-medical h-7 w-7" aria-hidden="true">
                  <path d="M12 11v4">

                  </path>
                  <path d="M14 13h-4">

                  </path>
                  <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2">

                  </path>
                  <path d="M18 6v14">

                  </path>
                  <path d="M6 6v14">

                  </path>
                  <rect width="20" height="14" x="2" y="6" rx="2">

                  </rect>
                </svg>
              </div>
              <p className="mt-6 text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Emotional reassurance and routine-building"}
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="content-shell">
          <p className="text-sm uppercase tracking-[0.34em] text-[var(--color-ink-soft)]">
            {"Why Choose Our "}
            {"Support Workers"}
            {"?"}
          </p>
          <div className="mt-4 h-1 w-20 rounded-full bg-[var(--color-accent)]">

          </div>
          <h2 className="mt-6 text-4xl font-semibold text-[var(--color-brand-strong)] sm:text-5xl">
            {"Why organisations choose this service."}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-[1.9rem] border border-white/70 bg-white/94 p-7 shadow-[0_18px_40px_rgba(13,31,78,0.08)] ring-1 ring-[rgba(13,31,78,0.04)]">
              <div className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(13,31,78,0.08)_0%,rgba(13,31,78,0.14)_100%)] text-[var(--color-brand)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check h-7 w-7" aria-hidden="true">
                  <circle cx="12" cy="12" r="10">

                  </circle>
                  <path d="m9 12 2 2 4-4">

                  </path>
                </svg>
              </div>
              <p className="mt-6 text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Continuity for service users who value trusted faces"}
              </p>
            </article>
            <article className="rounded-[1.9rem] border border-white/70 bg-white/94 p-7 shadow-[0_18px_40px_rgba(13,31,78,0.08)] ring-1 ring-[rgba(13,31,78,0.04)]">
              <div className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(13,31,78,0.08)_0%,rgba(13,31,78,0.14)_100%)] text-[var(--color-brand)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer-reset h-7 w-7" aria-hidden="true">
                  <path d="M10 2h4">

                  </path>
                  <path d="M12 14v-4">

                  </path>
                  <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6">

                  </path>
                  <path d="M9 17H4v5">

                  </path>
                </svg>
              </div>
              <p className="mt-6 text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Workers matched to the setting and level of complexity"}
              </p>
            </article>
            <article className="rounded-[1.9rem] border border-white/70 bg-white/94 p-7 shadow-[0_18px_40px_rgba(13,31,78,0.08)] ring-1 ring-[rgba(13,31,78,0.04)]">
              <div className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(13,31,78,0.08)_0%,rgba(13,31,78,0.14)_100%)] text-[var(--color-brand)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-check h-7 w-7" aria-hidden="true">
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1">

                  </rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2">

                  </path>
                  <path d="m9 14 2 2 4-4">

                  </path>
                </svg>
              </div>
              <p className="mt-6 text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Lower disruption during sickness, vacancy, or demand peaks"}
              </p>
            </article>
            <article className="rounded-[1.9rem] border border-white/70 bg-white/94 p-7 shadow-[0_18px_40px_rgba(13,31,78,0.08)] ring-1 ring-[rgba(13,31,78,0.04)]">
              <div className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(13,31,78,0.08)_0%,rgba(13,31,78,0.14)_100%)] text-[var(--color-brand)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-stethoscope h-7 w-7" aria-hidden="true">
                  <path d="M11 2v2">

                  </path>
                  <path d="M5 2v2">

                  </path>
                  <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1">

                  </path>
                  <path d="M8 15a6 6 0 0 0 12 0v-3">

                  </path>
                  <circle cx="20" cy="10" r="2">

                  </circle>
                </svg>
              </div>
              <p className="mt-6 text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Clear communication between our recruiters and your managers"}
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section-space pt-0">
        <div className="content-shell">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/70 shadow-[0_18px_40px_rgba(13,31,78,0.1)]">
              <img alt="Support Workers gallery image 1" loading="lazy" width="1536" height="1024" decoding="async" className="h-full w-full object-cover" style={{"color": "transparent"}} src="/images/about-patient-and-carer.png" />
            </div>
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/70 shadow-[0_18px_40px_rgba(13,31,78,0.1)]">
              <img alt="Support Workers gallery image 2" loading="lazy" width="1536" height="1024" decoding="async" className="h-full w-full object-cover" style={{"color": "transparent"}} src="/images/about-caring.png" />
            </div>
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/70 shadow-[0_18px_40px_rgba(13,31,78,0.1)]">
              <img alt="Support Workers gallery image 3" loading="lazy" width="1536" height="1024" decoding="async" className="h-full w-full object-cover" style={{"color": "transparent"}} src="/images/about-environment.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="content-shell">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-ink-soft)]">
            {"Our Compliance Process"}
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-[var(--color-brand-strong)] sm:text-5xl">
            {"Every candidate is checked thoroughly before placement."}
          </h2>
          <div className="mt-10 grid gap-4">
            <div className="grid gap-4 rounded-[1.5rem] border border-[var(--color-border)] bg-white p-5 shadow-sm shadow-[rgba(13,31,78,0.04)] sm:grid-cols-[60px_1fr] sm:items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-semibold text-white">
                {"1"}
              </div>
              <p className="text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Role suitability screening"}
              </p>
            </div>
            <div className="grid gap-4 rounded-[1.5rem] border border-[var(--color-border)] bg-white p-5 shadow-sm shadow-[rgba(13,31,78,0.04)] sm:grid-cols-[60px_1fr] sm:items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-semibold text-white">
                {"2"}
              </div>
              <p className="text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Identity and work-status checks"}
              </p>
            </div>
            <div className="grid gap-4 rounded-[1.5rem] border border-[var(--color-border)] bg-white p-5 shadow-sm shadow-[rgba(13,31,78,0.04)] sm:grid-cols-[60px_1fr] sm:items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-semibold text-white">
                {"3"}
              </div>
              <p className="text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Access NI and reference checks"}
              </p>
            </div>
            <div className="grid gap-4 rounded-[1.5rem] border border-[var(--color-border)] bg-white p-5 shadow-sm shadow-[rgba(13,31,78,0.04)] sm:grid-cols-[60px_1fr] sm:items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-semibold text-white">
                {"4"}
              </div>
              <p className="text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Training verification including safeguarding"}
              </p>
            </div>
            <div className="grid gap-4 rounded-[1.5rem] border border-[var(--color-border)] bg-white p-5 shadow-sm shadow-[rgba(13,31,78,0.04)] sm:grid-cols-[60px_1fr] sm:items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-semibold text-white">
                {"5"}
              </div>
              <p className="text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Experience review for supported living or residential care"}
              </p>
            </div>
            <div className="grid gap-4 rounded-[1.5rem] border border-[var(--color-border)] bg-white p-5 shadow-sm shadow-[rgba(13,31,78,0.04)] sm:grid-cols-[60px_1fr] sm:items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-semibold text-white">
                {"6"}
              </div>
              <p className="text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Values-based recruitment interview"}
              </p>
            </div>
            <div className="grid gap-4 rounded-[1.5rem] border border-[var(--color-border)] bg-white p-5 shadow-sm shadow-[rgba(13,31,78,0.04)] sm:grid-cols-[60px_1fr] sm:items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-semibold text-white">
                {"7"}
              </div>
              <p className="text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Placement suitability sign-off"}
              </p>
            </div>
            <div className="grid gap-4 rounded-[1.5rem] border border-[var(--color-border)] bg-white p-5 shadow-sm shadow-[rgba(13,31,78,0.04)] sm:grid-cols-[60px_1fr] sm:items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-semibold text-white">
                {"8"}
              </div>
              <p className="text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Post-placement quality assurance"}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space bg-gray-50">
        <div className="content-shell">
          <p className="text-sm uppercase tracking-[0.34em] text-[var(--color-ink-soft)]">
            {"Who We Work With"}
          </p>
          <div className="mt-4 h-1 w-20 rounded-full bg-[var(--color-accent)]">

          </div>
          <h2 className="mt-6 text-4xl font-semibold text-[var(--color-brand-strong)] sm:text-5xl">
            {"Settings that rely on this support."}
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <div className="flex items-center gap-4 rounded-[1.5rem] border border-[var(--color-border)] bg-white px-5 py-4 shadow-sm shadow-[rgba(13,31,78,0.04)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(13,31,78,0.08)] text-[var(--color-brand)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 lucide-building-2 h-5 w-5" aria-hidden="true">
                  <path d="M10 12h4">

                  </path>
                  <path d="M10 8h4">

                  </path>
                  <path d="M14 21v-3a2 2 0 0 0-4 0v3">

                  </path>
                  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2">

                  </path>
                  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16">

                  </path>
                </svg>
              </div>
              <span className="text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Supported living services"}
              </span>
            </div>
            <div className="flex items-center gap-4 rounded-[1.5rem] border border-[var(--color-border)] bg-white px-5 py-4 shadow-sm shadow-[rgba(13,31,78,0.04)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(13,31,78,0.08)] text-[var(--color-brand)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 lucide-building-2 h-5 w-5" aria-hidden="true">
                  <path d="M10 12h4">

                  </path>
                  <path d="M10 8h4">

                  </path>
                  <path d="M14 21v-3a2 2 0 0 0-4 0v3">

                  </path>
                  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2">

                  </path>
                  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16">

                  </path>
                </svg>
              </div>
              <span className="text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Residential homes"}
              </span>
            </div>
            <div className="flex items-center gap-4 rounded-[1.5rem] border border-[var(--color-border)] bg-white px-5 py-4 shadow-sm shadow-[rgba(13,31,78,0.04)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(13,31,78,0.08)] text-[var(--color-brand)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 lucide-building-2 h-5 w-5" aria-hidden="true">
                  <path d="M10 12h4">

                  </path>
                  <path d="M10 8h4">

                  </path>
                  <path d="M14 21v-3a2 2 0 0 0-4 0v3">

                  </path>
                  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2">

                  </path>
                  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16">

                  </path>
                </svg>
              </div>
              <span className="text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Learning disability services"}
              </span>
            </div>
            <div className="flex items-center gap-4 rounded-[1.5rem] border border-[var(--color-border)] bg-white px-5 py-4 shadow-sm shadow-[rgba(13,31,78,0.04)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(13,31,78,0.08)] text-[var(--color-brand)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 lucide-building-2 h-5 w-5" aria-hidden="true">
                  <path d="M10 12h4">

                  </path>
                  <path d="M10 8h4">

                  </path>
                  <path d="M14 21v-3a2 2 0 0 0-4 0v3">

                  </path>
                  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2">

                  </path>
                  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16">

                  </path>
                </svg>
              </div>
              <span className="text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Autism support settings"}
              </span>
            </div>
            <div className="flex items-center gap-4 rounded-[1.5rem] border border-[var(--color-border)] bg-white px-5 py-4 shadow-sm shadow-[rgba(13,31,78,0.04)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(13,31,78,0.08)] text-[var(--color-brand)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 lucide-building-2 h-5 w-5" aria-hidden="true">
                  <path d="M10 12h4">

                  </path>
                  <path d="M10 8h4">

                  </path>
                  <path d="M14 21v-3a2 2 0 0 0-4 0v3">

                  </path>
                  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2">

                  </path>
                  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16">

                  </path>
                </svg>
              </div>
              <span className="text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Outreach teams"}
              </span>
            </div>
            <div className="flex items-center gap-4 rounded-[1.5rem] border border-[var(--color-border)] bg-white px-5 py-4 shadow-sm shadow-[rgba(13,31,78,0.04)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(13,31,78,0.08)] text-[var(--color-brand)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 lucide-building-2 h-5 w-5" aria-hidden="true">
                  <path d="M10 12h4">

                  </path>
                  <path d="M10 8h4">

                  </path>
                  <path d="M14 21v-3a2 2 0 0 0-4 0v3">

                  </path>
                  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2">

                  </path>
                  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16">

                  </path>
                </svg>
              </div>
              <span className="text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Community programmes"}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space pt-0 bg-gray-50">
        <div className="content-shell">
          <p className="text-sm uppercase tracking-[0.34em] text-[var(--color-ink-soft)]">
            {"How to Request Staff"}
          </p>
          <div className="mt-4 h-1 w-20 rounded-full bg-[var(--color-accent)]">

          </div>
          <h2 className="mt-6 text-4xl font-semibold text-[var(--color-brand-strong)] sm:text-5xl">
            {"Four simple steps to get support in place."}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-[1.75rem] border border-[var(--color-border)] bg-white p-6 shadow-sm shadow-[rgba(13,31,78,0.04)]">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                {"Step "}
                {"1"}
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">
                {"Share the support environment and required experience"}
              </p>
            </article>
            <article className="rounded-[1.75rem] border border-[var(--color-border)] bg-white p-6 shadow-sm shadow-[rgba(13,31,78,0.04)]">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                {"Step "}
                {"2"}
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">
                {"We shortlist workers who match the brief"}
              </p>
            </article>
            <article className="rounded-[1.75rem] border border-[var(--color-border)] bg-white p-6 shadow-sm shadow-[rgba(13,31,78,0.04)]">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                {"Step "}
                {"3"}
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">
                {"You approve the booking and service details"}
              </p>
            </article>
            <article className="rounded-[1.75rem] border border-[var(--color-border)] bg-white p-6 shadow-sm shadow-[rgba(13,31,78,0.04)]">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                {"Step "}
                {"4"}
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">
                {"We coordinate arrival, handover, and follow-up"}
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="content-shell">
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#0d1f4e_0%,#153271_60%,#26458d_100%)] px-6 py-12 text-white shadow-2xl shadow-[rgba(13,31,78,0.18)] sm:px-10 sm:py-16">
            <img alt="Inotee Group call-to-action background" loading="lazy" decoding="async" className="object-cover" style={{"position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent"}} src="/images/cta.png" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,21,50,0.9)_0%,rgba(13,31,78,0.8)_55%,rgba(21,50,113,0.58)_100%)]">

            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,178,93,0.34),transparent_24%)]">

            </div>
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.34em] text-white/68">
                  {"Ready When You Are"}
                </p>
                <div className="mt-4 h-1 w-20 rounded-full bg-[var(--color-accent)]">

                </div>
                <h2 className="mt-6 text-4xl font-semibold sm:text-5xl">
                  {"Request Support Workers Today"}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                  {"Tell us what your service needs and we’ll move quickly with a compliant staffing plan."}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link className="rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-center text-sm font-semibold text-[var(--color-brand-strong)] shadow-lg shadow-[rgba(216,178,93,0.24)] hover:translate-y-[-1px] hover:bg-[#e7c881]" href="/contact/">
                  {"Request Staff"}
                </Link>
                <Link className="rounded-full border border-white/35 bg-white/6 px-7 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/12" href="/services/">
                  {"View All Services"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
