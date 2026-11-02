import Link from "next/link";
import { WebsiteForm, ThemeToggle, MobileNavigation } from "@/components/website-controls";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Post-Hospital Recovery | Inotee Group" };

export default function Page() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 pb-10 pt-10 sm:pb-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-7">
            <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
              {"Specialist care service"}
            </span>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-balance font-display text-5xl tracking-tight text-ink sm:text-6xl lg:text-7xl">
                {"Post-Hospital Recovery"}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                {"Short-term recovery support that helps discharge plans succeed."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-6 py-3.5 text-base" href="#service-inquiry">
                {"Request this service"}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                  <path d="M5 12h14">

                  </path>
                  <path d="m12 5 7 7-7 7">

                  </path>
                </svg>
              </a>
              <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-panelStrong text-ink ring-1 ring-line hover:bg-panel px-6 py-3.5 text-base" href="/services/">
                {"View all services"}
              </Link>
            </div>
          </div>
          <div>
            <div className="hero-card p-4">
              <div className="relative overflow-hidden rounded-[1.75rem]">
                <img alt="Post-Hospital Recovery" fetchPriority="high" width="900" height="900" decoding="async" className="h-[420px] w-full object-cover" style={{"color": "transparent"}} src="/images/photo4.jpg" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-stethoscope h-4 w-4">
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
                  {"Inotee specialist support"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="surface p-8">
              <div className="max-w-3xl space-y-4">
                <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                  {"Detailed overview"}
                </span>
                <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
                  {"How post-hospital recovery supports families at home"}
                </h2>
                <p className="text-lg leading-8 text-muted">
                  {"We help bridge the gap after discharge with practical support, medication prompts, mobility assistance, meal preparation, and reassuring communication for families and referrers."}
                </p>
              </div>
            </div>
            <div className="surface p-8">
              <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                {"Key outcomes"}
              </span>
              <div className="mt-5 space-y-4">
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm font-medium text-ink">
                    {"Smoother discharge transitions"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm font-medium text-ink">
                    {"More confidence at home after treatment"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm font-medium text-ink">
                    {"Clear support for families during recovery"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space bg-white/35 dark:bg-slate-950/20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="surface p-8">
              <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                {"Benefits"}
              </span>
              <div className="mt-5 space-y-4">
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Creates a safer, more confident transition home"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Supports recovery routines and reduces readmission risk"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Keeps families informed during a vulnerable period"}
                  </p>
                </div>
              </div>
            </div>
            <div className="surface p-8">
              <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                {"Process"}
              </span>
              <div className="mt-5 space-y-4">
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                    {"Step "}
                    {"1"}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-ink">
                    {"Review discharge information and immediate support needs"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                    {"Step "}
                    {"2"}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-ink">
                    {"Start a short-term recovery plan quickly"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                    {"Step "}
                    {"3"}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-ink">
                    {"Adjust support as the client regains independence"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="service-inquiry" className="section-space">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="surface p-8">
              <div className="max-w-3xl space-y-4">
                <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                  {"Service inquiry"}
                </span>
                <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
                  {"Ask about post-hospital recovery today"}
                </h2>
                <p className="text-lg leading-8 text-muted">
                  {"Families often arrive on service pages after researching options carefully. This call-to-action keeps the path to contact immediate and specific."}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-6 py-3.5 text-base" href="/contact/">
                  {"Contact the team"}
                </Link>
                <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-panelStrong text-ink ring-1 ring-line hover:bg-panel px-6 py-3.5 text-base" href="/faq/">
                  {"Read FAQ"}
                </Link>
              </div>
            </div>
            <div className="surface p-8">
              <WebsiteForm className="grid gap-4" kind="contact">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    {"Full name"}
                    <input className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" placeholder="Family member or client name" name="name"  required />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    {"Phone number"}
                    <input className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" placeholder="Best number to call" name="phone" />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    {"Email"}
                    <input className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" type="email" placeholder="you@example.com" name="email"  required />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    {"Service"}
                    <select className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" name="service">
                      <option>
                        {"General care inquiry"}
                      </option>
                      <option>
                        {"Elderly Care"}
                      </option>
                      <option>
                        {"Dementia Care"}
                      </option>
                      <option>
                        {"Disability Support"}
                      </option>
                      <option>
                        {"Live-In Care"}
                      </option>
                      <option>
                        {"Overnight Care"}
                      </option>
                      <option>
                        {"Companionship Care"}
                      </option>
                      <option>
                        {"Personal Care"}
                      </option>
                      <option>
                        {"Post-Hospital Recovery"}
                      </option>
                    </select>
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    {"Postcode"}
                    <input className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" placeholder="BT1 1AA" name="postcode" />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    {"Preferred contact"}
                    <select className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" name="preferredContact">
                      <option>
                        {"Phone"}
                      </option>
                      <option>
                        {"Email"}
                      </option>
                      <option>
                        {"WhatsApp"}
                      </option>
                    </select>
                  </label>
                </div>
                <label className="grid gap-2 text-sm font-medium text-ink">
                  {"What support is needed?"}
                  <textarea className="min-h-[132px] w-full rounded-2xl border border-line bg-white/80 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" placeholder="Share the care needs, timing, and any recent changes." name="careNeeds">

                  </textarea>
                </label>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-5 py-3 text-sm">
                  {"Request a care consultation"}
                </button>
              </WebsiteForm>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space bg-white/35 dark:bg-slate-950/20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <div className="max-w-3xl space-y-4">
                <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                  {"Questions"}
                </span>
                <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
                  {"Common questions families ask before getting started."}
                </h2>
                <p className="text-lg leading-8 text-muted">
                  {"The FAQ is shared across services to keep content maintainable while still supporting conversion."}
                </p>
              </div>
              <div className="mt-8">
                <div className="space-y-3">
                  <details className="group rounded-3xl border border-line bg-panel p-6 shadow-soft">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ink">
                      <span>
                        {"How quickly can care start?"}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-5 w-5 shrink-0 transition group-open:rotate-45">
                        <path d="M5 12h14">

                        </path>
                        <path d="M12 5v14">

                        </path>
                      </svg>
                    </summary>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                      {"For many inquiries we can respond the same day and move quickly into assessment, especially for discharge or urgent family situations."}
                    </p>
                  </details>
                  <details className="group rounded-3xl border border-line bg-panel p-6 shadow-soft">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ink">
                      <span>
                        {"Do you only provide elderly care?"}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-5 w-5 shrink-0 transition group-open:rotate-45">
                        <path d="M5 12h14">

                        </path>
                        <path d="M12 5v14">

                        </path>
                      </svg>
                    </summary>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                      {"No. Inotee Group supports older adults, people living with dementia, adults with disabilities, and clients recovering after hospital stays."}
                    </p>
                  </details>
                  <details className="group rounded-3xl border border-line bg-panel p-6 shadow-soft">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ink">
                      <span>
                        {"Can families stay involved in the care plan?"}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-5 w-5 shrink-0 transition group-open:rotate-45">
                        <path d="M5 12h14">

                        </path>
                        <path d="M12 5v14">

                        </path>
                      </svg>
                    </summary>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                      {"Absolutely. We build communication preferences into the plan so relatives know how and when updates will be shared."}
                    </p>
                  </details>
                </div>
              </div>
            </div>
            <div className="surface p-8">
              <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                {"More support options"}
              </span>
              <h3 className="mt-4 text-3xl font-semibold text-ink">
                {"Need a different kind of support?"}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {"Inotee offers eight home care pathways, and families often need a mix rather than a single service in isolation."}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-5 py-3 text-sm" href="/services/">
                  {"Browse all services"}
                </Link>
                <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-panelStrong text-ink ring-1 ring-line hover:bg-panel px-5 py-3 text-sm" href="/contact/">
                  {"Talk to us"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
