import Link from "next/link";
import { WebsiteForm, ThemeToggle, MobileNavigation } from "@/components/website-controls";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Refer Someone for Home Care | Inotee Group" };

export default function Page() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 pb-10 pt-10 sm:pb-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-7">
            <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
              {"Referral partners"}
            </span>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-balance font-display text-5xl tracking-tight text-ink sm:text-6xl lg:text-7xl">
                {"Refer someone who may need care at home"}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                {"If you support families, patients, older adults, or vulnerable people who may need care at home, you can refer them to Inotee Group. We will handle every inquiry with dignity, confidentiality, and care."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-6 py-3.5 text-base" href="#referral-form">
                {"Submit referral"}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                  <path d="M5 12h14">

                  </path>
                  <path d="m12 5 7 7-7 7">

                  </path>
                </svg>
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-panelStrong text-ink ring-1 ring-line hover:bg-panel px-6 py-3.5 text-base" href="tel:02896005679">
                {"Call the care team"}
              </a>
            </div>
            <p className="text-sm font-medium text-muted">
              {"Please only submit a referral where appropriate consent has been obtained."}
            </p>
          </div>
          <div>
            <div className="surface p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-strong">
                {"Who this page is for"}
              </p>
              <div className="mt-5 grid gap-4">
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Pharmacies"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"GP practices"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Social workers"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Hospitals"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Churches and charities"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Community groups"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Solicitors"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Physiotherapists and occupational therapists"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="referral-form" className="section-space">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="surface p-8">
              <div className="max-w-3xl space-y-4">
                <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                  {"Referral form"}
                </span>
                <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
                  {"Submit a referral"}
                </h2>
                <p className="text-lg leading-8 text-muted">
                  {"Please only submit a referral where appropriate consent has been obtained."}
                </p>
              </div>
              <p className="mt-6 text-sm leading-7 text-muted">
                {"This page is designed for professionals and community organisations who want a clear route to refer someone for home care support in Belfast or wider Northern Ireland."}
              </p>
            </div>
            <div className="surface p-8">
              <WebsiteForm className="grid gap-4" kind="referral">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    {"Your name"}
                    <input className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" placeholder="Your full name" name="yourName"  required />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    {"Organisation"}
                    <input className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" placeholder="Organisation name" name="organisation" />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    {"Role"}
                    <input className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" placeholder="Your role" name="role" />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    {"Phone"}
                    <input className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" placeholder="Best phone number" name="phone" />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    {"Email"}
                    <input className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" type="email" placeholder="you@example.com" name="email"  required />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    {"Person being referred"}
                    <input className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" placeholder="Name of the person being referred" name="personBeingReferred" />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    {"Consent confirmed?"}
                    <select className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" name="consentConfirmed">
                      <option>
                        {"Yes"}
                      </option>
                      <option>
                        {"No"}
                      </option>
                      <option>
                        {"Need to discuss"}
                      </option>
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    {"Type of support needed"}
                    <select className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" name="typeOfSupportNeeded">
                      <option>
                        {"Hospital discharge support"}
                      </option>
                      <option>
                        {"Personal care at home"}
                      </option>
                      <option>
                        {"Dementia support"}
                      </option>
                      <option>
                        {"Overnight reassurance"}
                      </option>
                      <option>
                        {"Companionship"}
                      </option>
                      <option>
                        {"Disability support"}
                      </option>
                      <option>
                        {"Live-in care"}
                      </option>
                      <option>
                        {"Other"}
                      </option>
                    </select>
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    {"Urgency"}
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
                    {"Notes"}
                    <textarea className="w-full rounded-2xl border border-line bg-white/80 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70 min-h-[120px]" placeholder="Share any relevant detail about the support needed." name="notes">

                    </textarea>
                  </label>
                </div>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-6 py-3.5 text-base">
                  {"Submit referral"}
                </button>
              </WebsiteForm>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
