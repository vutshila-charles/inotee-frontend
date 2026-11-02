import Link from "next/link";
import { WebsiteForm, ThemeToggle, MobileNavigation } from "@/components/website-controls";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Home Care Services | Inotee Group" };

export default function Page() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 pb-10 pt-10 sm:pb-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-7">
            <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
              {"Home care services"}
            </span>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-balance font-display text-5xl tracking-tight text-ink sm:text-6xl lg:text-7xl">
                {"Choose the type of care your family needs"}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                {"Inotee Group supports families across Belfast and Northern Ireland with urgent recovery care, day-to-day personal support, and more specialist home care."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-6 py-3.5 text-base" href="/contact/#care-inquiry">
                {"Request care"}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                  <path d="M5 12h14">

                  </path>
                  <path d="m12 5 7 7-7 7">

                  </path>
                </svg>
              </Link>
              <a className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-panelStrong text-ink ring-1 ring-line hover:bg-panel px-6 py-3.5 text-base" href="tel:02896005679">
                {"Call Inotee"}
              </a>
            </div>
            <p className="text-sm font-medium text-muted">
              {"Not sure which service fits? Tell us the situation and we will guide you."}
            </p>
          </div>
          <div>
            <div className="surface p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-strong">
                {"Popular reasons families contact us"}
              </p>
              <div className="mt-5 grid gap-4">
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="font-semibold text-ink">
                    {"Hospital discharge support"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="font-semibold text-ink">
                    {"Dementia support at home"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="font-semibold text-ink">
                    {"Help with washing and dressing"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="font-semibold text-ink">
                    {"Overnight reassurance"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
              {"Service groups"}
            </span>
            <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
              {"Care grouped around real-life family situations"}
            </h2>
            <p className="text-lg leading-8 text-muted">
              {"Some families need urgent help after hospital. Others need daily support, specialist dementia care, or more ongoing help at home."}
            </p>
          </div>
          <div className="mt-10">
            <div className="grid gap-8">
              <div className="surface p-6 lg:p-8">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-strong">
                    {"Urgent or recovery care"}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {"For families who need support quickly, especially after hospital discharge or when nights feel unsafe."}
                  </p>
                </div>
                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                  <div className="rounded-[1.75rem] border border-line bg-panelStrong p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/14 text-brand-strong">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-stethoscope h-6 w-6">
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
                    <h3 className="mt-5 text-2xl font-semibold text-ink">
                      {"Post-hospital recovery care"}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      <span className="font-semibold text-ink">
                        {"Who it helps:"}
                      </span>
                      {"Families arranging safe support at home after a hospital stay."}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      <span className="font-semibold text-ink">
                        {"What support includes:"}
                      </span>
                      {"Meals, medication prompts, washing, dressing, mobility, reassurance, and family updates."}
                    </p>
                    <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-5 py-3 text-sm mt-6 w-fit" href="/services/post-hospital-recovery-care/">
                      {"Ask about this care"}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                        <path d="M5 12h14">

                        </path>
                        <path d="m12 5 7 7-7 7">

                        </path>
                      </svg>
                    </Link>
                  </div>
                  <div className="rounded-[1.75rem] border border-line bg-panelStrong p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/14 text-brand-strong">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon-star h-6 w-6">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9">

                        </path>
                        <path d="M20 3v4">

                        </path>
                        <path d="M22 5h-4">

                        </path>
                      </svg>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-ink">
                      {"Overnight care"}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      <span className="font-semibold text-ink">
                        {"Who it helps:"}
                      </span>
                      {"People who feel vulnerable at night and families who need reassurance after dark."}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      <span className="font-semibold text-ink">
                        {"What support includes:"}
                      </span>
                      {"Night checks, mobility support, reassurance, and practical help through the night."}
                    </p>
                    <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-5 py-3 text-sm mt-6 w-fit" href="/services/overnight-care/">
                      {"Ask about this care"}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                        <path d="M5 12h14">

                        </path>
                        <path d="m12 5 7 7-7 7">

                        </path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="surface p-6 lg:p-8">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-strong">
                    {"Daily personal support"}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {"For day-to-day help with routine, comfort, confidence, and staying well at home."}
                  </p>
                </div>
                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                  <div className="rounded-[1.75rem] border border-line bg-panelStrong p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/14 text-brand-strong">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-handshake h-6 w-6">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">

                        </path>
                        <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66">

                        </path>
                        <path d="m18 15-2-2">

                        </path>
                        <path d="m15 18-2-2">

                        </path>
                      </svg>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-ink">
                      {"Personal care"}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      <span className="font-semibold text-ink">
                        {"Who it helps:"}
                      </span>
                      {"People who need respectful help with washing, dressing, hygiene, and daily comfort."}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      <span className="font-semibold text-ink">
                        {"What support includes:"}
                      </span>
                      {"Personal routines, mobility support, comfort, and safe day-to-day care at home."}
                    </p>
                    <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-5 py-3 text-sm mt-6 w-fit" href="/services/personal-care/">
                      {"Ask about this care"}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                        <path d="M5 12h14">

                        </path>
                        <path d="m12 5 7 7-7 7">

                        </path>
                      </svg>
                    </Link>
                  </div>
                  <div className="rounded-[1.75rem] border border-line bg-panelStrong p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/14 text-brand-strong">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house h-6 w-6">
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8">

                        </path>
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">

                        </path>
                      </svg>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-ink">
                      {"Elderly care"}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      <span className="font-semibold text-ink">
                        {"Who it helps:"}
                      </span>
                      {"Older adults who want to stay safe, comfortable, and supported at home."}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      <span className="font-semibold text-ink">
                        {"What support includes:"}
                      </span>
                      {"Routine help, meals, medication prompts, companionship, and reassurance for families."}
                    </p>
                    <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-5 py-3 text-sm mt-6 w-fit" href="/services/elderly-care/">
                      {"Ask about this care"}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                        <path d="M5 12h14">

                        </path>
                        <path d="m12 5 7 7-7 7">

                        </path>
                      </svg>
                    </Link>
                  </div>
                  <div className="rounded-[1.75rem] border border-line bg-panelStrong p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/14 text-brand-strong">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-6 w-6">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2">

                        </path>
                        <circle cx="9" cy="7" r="4">

                        </circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87">

                        </path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75">

                        </path>
                      </svg>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-ink">
                      {"Companionship care"}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      <span className="font-semibold text-ink">
                        {"Who it helps:"}
                      </span>
                      {"People who would benefit from regular company, reassurance, and a steadier routine."}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      <span className="font-semibold text-ink">
                        {"What support includes:"}
                      </span>
                      {"Conversation, companionship, routine support, and family reassurance."}
                    </p>
                    <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-5 py-3 text-sm mt-6 w-fit" href="/services/companionship-care/">
                      {"Ask about this care"}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                        <path d="M5 12h14">

                        </path>
                        <path d="m12 5 7 7-7 7">

                        </path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="surface p-6 lg:p-8">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-strong">
                    {"Specialist support"}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {"For families who need more tailored support around dementia, disability, or higher ongoing care needs."}
                  </p>
                </div>
                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                  <div className="rounded-[1.75rem] border border-line bg-panelStrong p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/14 text-brand-strong">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain h-6 w-6">
                        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z">

                        </path>
                        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z">

                        </path>
                        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4">

                        </path>
                        <path d="M17.599 6.5a3 3 0 0 0 .399-1.375">

                        </path>
                        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5">

                        </path>
                        <path d="M3.477 10.896a4 4 0 0 1 .585-.396">

                        </path>
                        <path d="M19.938 10.5a4 4 0 0 1 .585.396">

                        </path>
                        <path d="M6 18a4 4 0 0 1-1.967-.516">

                        </path>
                        <path d="M19.967 17.484A4 4 0 0 1 18 18">

                        </path>
                      </svg>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-ink">
                      {"Dementia care"}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      <span className="font-semibold text-ink">
                        {"Who it helps:"}
                      </span>
                      {"People living with dementia and families who need calmer, clearer support at home."}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      <span className="font-semibold text-ink">
                        {"What support includes:"}
                      </span>
                      {"Routine support, reassurance, practical help, and family communication."}
                    </p>
                    <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-5 py-3 text-sm mt-6 w-fit" href="/services/dementia-care/">
                      {"Ask about this care"}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                        <path d="M5 12h14">

                        </path>
                        <path d="m12 5 7 7-7 7">

                        </path>
                      </svg>
                    </Link>
                  </div>
                  <div className="rounded-[1.75rem] border border-line bg-panelStrong p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/14 text-brand-strong">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-heart h-6 w-6">
                        <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16">

                        </path>
                        <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9">

                        </path>
                        <path d="m2 15 6 6">

                        </path>
                        <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z">

                        </path>
                      </svg>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-ink">
                      {"Disability support"}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      <span className="font-semibold text-ink">
                        {"Who it helps:"}
                      </span>
                      {"Adults who need practical, respectful support shaped around independence and routine."}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      <span className="font-semibold text-ink">
                        {"What support includes:"}
                      </span>
                      {"Home support, appointments, routine help, and person-led practical care."}
                    </p>
                    <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-5 py-3 text-sm mt-6 w-fit" href="/services/disability-support/">
                      {"Ask about this care"}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                        <path d="M5 12h14">

                        </path>
                        <path d="m12 5 7 7-7 7">

                        </path>
                      </svg>
                    </Link>
                  </div>
                  <div className="rounded-[1.75rem] border border-line bg-panelStrong p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/14 text-brand-strong">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bed-double h-6 w-6">
                        <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8">

                        </path>
                        <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4">

                        </path>
                        <path d="M12 4v6">

                        </path>
                        <path d="M2 18h20">

                        </path>
                      </svg>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-ink">
                      {"Live-in care"}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      <span className="font-semibold text-ink">
                        {"Who it helps:"}
                      </span>
                      {"People who need more consistent support at home and families who want continuity."}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      <span className="font-semibold text-ink">
                        {"What support includes:"}
                      </span>
                      {"Regular support, daily routine help, reassurance, and closer continuity at home."}
                    </p>
                    <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-5 py-3 text-sm mt-6 w-fit" href="/services/live-in-care/">
                      {"Ask about this care"}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                        <path d="M5 12h14">

                        </path>
                        <path d="m12 5 7 7-7 7">

                        </path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space bg-white/35 dark:bg-slate-950/20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="surface p-8">
              <div className="max-w-3xl space-y-4">
                <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                  {"Need guidance?"}
                </span>
                <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
                  {"Tell us what support is needed and we will guide you through the next step"}
                </h2>
                <p className="text-lg leading-8 text-muted">
                  {"You do not need to know the right service name before contacting us. We can help you work out the most suitable support."}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-panelStrong text-ink ring-1 ring-line hover:bg-panel px-6 py-3.5 text-base" href="tel:02896005679">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-4 w-4">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">

                    </path>
                  </svg>
                  {"Call now"}
                </a>
                <a target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-6 py-3.5 text-base" href="https://wa.me/447592401175">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-more h-4 w-4">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z">

                    </path>
                    <path d="M8 12h.01">

                    </path>
                    <path d="M12 12h.01">

                    </path>
                    <path d="M16 12h.01">

                    </path>
                  </svg>
                  {"WhatsApp us"}
                </a>
              </div>
            </div>
            <div className="surface p-8">
              <div className="grid gap-5">
                <WebsiteForm className="grid gap-4" kind="inquiry">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-medium text-ink">
                      {"Full name"}
                      <input className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" placeholder="Your full name" name="fullName"  required />
                    </label>
                    <label className="grid gap-2 text-sm font-medium text-ink">
                      {"Phone number"}
                      <input className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" placeholder="Best number to call" name="phoneNumber"  required />
                    </label>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-medium text-ink">
                      {"Email"}
                      <input className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" type="email" placeholder="you@example.com" name="email"  required />
                    </label>
                    <label className="grid gap-2 text-sm font-medium text-ink">
                      {"Postcode"}
                      <input className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" placeholder="BT1 1AA" name="postcode" />
                    </label>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-medium text-ink">
                      {"Who needs care?"}
                      <input className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" placeholder="For example: my mum, my dad, my aunt" name="whoNeedsCare" />
                    </label>
                    <label className="grid gap-2 text-sm font-medium text-ink">
                      {"Type of care needed"}
                      <select className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" name="typeOfCareNeeded">
                        <option>
                          {"Post-hospital recovery care"}
                        </option>
                        <option>
                          {"Dementia care"}
                        </option>
                        <option>
                          {"Personal care"}
                        </option>
                        <option>
                          {"Overnight care"}
                        </option>
                        <option>
                          {"Companionship care"}
                        </option>
                        <option>
                          {"Live-in care"}
                        </option>
                        <option>
                          {"Disability support"}
                        </option>
                        <option>
                          {"Elderly care"}
                        </option>
                        <option>
                          {"Not sure yet"}
                        </option>
                      </select>
                    </label>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-medium text-ink">
                      {"How urgent is this?"}
                      <select className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" name="urgency">
                        <option>
                          {"Urgent: needed within 24 to 48 hours"}
                        </option>
                        <option>
                          {"Soon: needed this week"}
                        </option>
                        <option>
                          {"Planning ahead"}
                        </option>
                      </select>
                    </label>
                    <label className="grid gap-2 text-sm font-medium text-ink">
                      {"Is this linked to hospital discharge?"}
                      <select className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" name="linkedToHospitalDischarge" defaultValue="Not sure">
                        <option>
                          {"Yes"}
                        </option>
                        <option>
                          {"No"}
                        </option>
                        <option>
                          {"Not sure"}
                        </option>
                      </select>
                    </label>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-medium text-ink">
                      {"Does the person live alone?"}
                      <select className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" name="livesAlone" defaultValue="Not sure">
                        <option>
                          {"Yes"}
                        </option>
                        <option>
                          {"No"}
                        </option>
                        <option>
                          {"Sometimes"}
                        </option>
                        <option>
                          {"Not sure"}
                        </option>
                      </select>
                    </label>
                    <label className="grid gap-2 text-sm font-medium text-ink">
                      {"Main concern"}
                      <select className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" name="mainConcern">
                        <option>
                          {"Falls risk"}
                        </option>
                        <option>
                          {"Medication"}
                        </option>
                        <option>
                          {"Washing/dressing"}
                        </option>
                        <option>
                          {"Meals"}
                        </option>
                        <option>
                          {"Dementia"}
                        </option>
                        <option>
                          {"Loneliness"}
                        </option>
                        <option>
                          {"Night-time safety"}
                        </option>
                        <option>
                          {"Family burnout"}
                        </option>
                        <option>
                          {"Other"}
                        </option>
                      </select>
                    </label>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-medium text-ink">
                      {"Preferred callback time"}
                      <input className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" placeholder="Morning, afternoon, evening, or a specific time" name="preferredCallbackTime" />
                    </label>
                    <label className="grid gap-2 text-sm font-medium text-ink">
                      {"Suggested care options"}
                      <div className="rounded-[1.5rem] border border-line bg-panelStrong px-4 py-3 text-sm leading-7 text-muted">
                        {"Post-hospital recovery care, Overnight care, Personal care, Dementia care"}
                      </div>
                    </label>
                  </div>
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    {"Message"}
                    <textarea className="min-h-[132px] w-full rounded-2xl border border-line bg-white/80 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" placeholder="Tell us anything helpful about the situation, timing, discharge plans, or what your family is most worried about." name="message">

                    </textarea>
                  </label>
                  <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-6 py-3.5 text-base">
                    {"Request care today"}
                  </button>
                </WebsiteForm>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
