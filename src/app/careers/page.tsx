import Link from "next/link";
import { WebsiteForm, ThemeToggle, MobileNavigation } from "@/components/website-controls";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Care Roles Across Northern Ireland | Inotee Group" };

export default function Page() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 pb-10 pt-10 sm:pb-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-7">
            <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
              {"Careers"}
            </span>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-balance font-display text-5xl tracking-tight text-ink sm:text-6xl lg:text-7xl">
                {"Care roles across Northern Ireland"}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                {"Join a care team that values dignity, reliability, and compassionate support."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-6 py-3.5 text-base" href="/careers/apply/">
                {"Start application"}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                  <path d="M5 12h14">

                  </path>
                  <path d="m12 5 7 7-7 7">

                  </path>
                </svg>
              </Link>
              <a className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-panelStrong text-ink ring-1 ring-line hover:bg-panel px-6 py-3.5 text-base" href="#roles">
                {"View roles"}
              </a>
            </div>
            <p className="text-sm font-medium text-muted">
              {"We do not promise pay, sponsorship, or benefits unless details are confirmed."}
            </p>
          </div>
          <div>
            <div className="surface p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-strong">
                {"Why people apply"}
              </p>
              <div className="mt-5 grid gap-4">
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Supportive team"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Meaningful work"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Training and guidance"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Clear communication"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Flexible shift patterns where available"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="roles" className="section-space bg-white/35 dark:bg-slate-950/20">
        <div className="container-shell">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
              {"Roles"}
            </span>
            <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
              {"Care roles we are promoting"}
            </h2>
            <p className="text-lg leading-8 text-muted">
              {"Choose the role that best fits you and start the full online application. Our team will review your details and contact you about the next step."}
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="surface flex h-full flex-col p-6">
              <p className="text-2xl font-semibold text-ink">
                {"Domiciliary Care Assistant"}
              </p>
              <p className="mt-3 text-sm font-medium text-brand-strong">
                {"Belfast, Lisburn, Bangor, and surrounding areas"}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                <span className="font-semibold text-ink">
                  {"Who the role suits:"}
                </span>
                {"People who are kind, dependable, and comfortable supporting adults in their own homes."}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                <span className="font-semibold text-ink">
                  {"Typical duties:"}
                </span>
                {"Personal care, medication prompts, meal support, companionship, and helping people stay safe at home."}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                <span className="font-semibold text-ink">
                  {"Requirements:"}
                </span>
                {"Care experience is helpful. A driving licence may be preferred for community roles."}
              </p>
              <Link href="/careers/apply" className="mt-6 inline-flex w-fit rounded-full bg-brand px-5 py-3 text-sm font-semibold text-slate-950 shadow-float">
                {"Start application"}
              </Link>
            </div>
            <div className="surface flex h-full flex-col p-6">
              <p className="text-2xl font-semibold text-ink">
                {"Live-In Caregiver"}
              </p>
              <p className="mt-3 text-sm font-medium text-brand-strong">
                {"Northern Ireland"}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                <span className="font-semibold text-ink">
                  {"Who the role suits:"}
                </span>
                {"Carers who build trust well and can support someone consistently in their home environment."}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                <span className="font-semibold text-ink">
                  {"Typical duties:"}
                </span>
                {"Daily support, companionship, practical household help, and close communication with families."}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                <span className="font-semibold text-ink">
                  {"Requirements:"}
                </span>
                {"Experience with longer-form support and a calm, reliable working style are helpful."}
              </p>
              <Link href="/careers/apply" className="mt-6 inline-flex w-fit rounded-full bg-brand px-5 py-3 text-sm font-semibold text-slate-950 shadow-float">
                {"Start application"}
              </Link>
            </div>
            <div className="surface flex h-full flex-col p-6">
              <p className="text-2xl font-semibold text-ink">
                {"Night Support Worker"}
              </p>
              <p className="mt-3 text-sm font-medium text-brand-strong">
                {"Belfast and surrounding areas"}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                <span className="font-semibold text-ink">
                  {"Who the role suits:"}
                </span>
                {"People who are calm, observant, and comfortable supporting safety and reassurance overnight."}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                <span className="font-semibold text-ink">
                  {"Typical duties:"}
                </span>
                {"Night checks, mobility support, reassurance, and responding to care needs during vulnerable hours."}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                <span className="font-semibold text-ink">
                  {"Requirements:"}
                </span>
                {"Night shift availability and care experience are helpful."}
              </p>
              <Link href="/careers/apply" className="mt-6 inline-flex w-fit rounded-full bg-brand px-5 py-3 text-sm font-semibold text-slate-950 shadow-float">
                {"Start application"}
              </Link>
            </div>
            <div className="surface flex h-full flex-col p-6">
              <p className="text-2xl font-semibold text-ink">
                {"Support Worker"}
              </p>
              <p className="mt-3 text-sm font-medium text-brand-strong">
                {"Northern Ireland"}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                <span className="font-semibold text-ink">
                  {"Who the role suits:"}
                </span>
                {"People who want to support adults with practical day-to-day help at home and in the community."}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                <span className="font-semibold text-ink">
                  {"Typical duties:"}
                </span>
                {"Routine support, appointments, companionship, and encouragement with independence."}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                <span className="font-semibold text-ink">
                  {"Requirements:"}
                </span>
                {"Good communication, reliability, and a respectful approach to person-centred support."}
              </p>
              <Link href="/careers/apply" className="mt-6 inline-flex w-fit rounded-full bg-brand px-5 py-3 text-sm font-semibold text-slate-950 shadow-float">
                {"Start application"}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div className="surface p-8">
              <div className="max-w-3xl space-y-4">
                <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                  {"Why join Inotee"}
                </span>
                <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
                  {"A recruitment message built around trust, not hype"}
                </h2>
                <p className="text-lg leading-8 text-muted">
                  {"We focus on meaningful work, support, guidance, and clear communication."}
                </p>
              </div>
              <div className="mt-8 grid gap-4">
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Supportive team"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Meaningful work"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Training and guidance"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Clear communication"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Flexible shift patterns where available"}
                  </p>
                </div>
              </div>
            </div>
            <div className="surface p-8">
              <div className="max-w-3xl space-y-4">
                <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                  {"Application"}
                </span>
                <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
                  {"Use the full employment application"}
                </h2>
                <p className="text-lg leading-8 text-muted">
                  {"Every application should go through the full form so your details, references, upload, and declaration are captured properly from the start."}
                </p>
              </div>
              <div className="mt-8">
                <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-6 py-3.5 text-base" href="/careers/apply/">
                  {"Open application form"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
