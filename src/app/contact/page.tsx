import Link from "next/link";
import { WebsiteForm, ThemeToggle, MobileNavigation } from "@/components/website-controls";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact Inotee Group | Inotee Group" };

export default function Page() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 pb-10 pt-10 sm:pb-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-7">
            <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
              {"Contact"}
            </span>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-balance font-display text-5xl tracking-tight text-ink sm:text-6xl lg:text-7xl">
                {"Talk to Inotee Group"}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                {"Choose the right path for care, recruitment, referrals, or general contact. If the situation feels urgent, call or WhatsApp us."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-6 py-3.5 text-base" href="#care-inquiry">
                {"Request care"}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                  <path d="M5 12h14">

                  </path>
                  <path d="m12 5 7 7-7 7">

                  </path>
                </svg>
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-panelStrong text-ink ring-1 ring-line hover:bg-panel px-6 py-3.5 text-base" href="#general-contact">
                {"General contact"}
              </a>
            </div>
            <p className="text-sm font-medium text-muted">
              {"Serving families across Belfast and Northern Ireland."}
            </p>
          </div>
          <div>
            <div className="surface p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-strong">
                {"Quick contact"}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-panelStrong text-ink ring-1 ring-line hover:bg-panel px-6 py-3.5 text-base" href="tel:02896005679">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-4 w-4">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">

                    </path>
                  </svg>
                  {"Call"}
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
                  {"WhatsApp"}
                </a>
              </div>
              <div className="mt-6 space-y-3 text-sm leading-7 text-muted">
                <p>
                  <a href="tel:02896005679" className="hover:text-ink">
                    {"028 9600 5679"}
                  </a>
                </p>
                <p>
                  <a href="mailto:info@inoteegroup.com" className="hover:text-ink">
                    {"info@inoteegroup.com"}
                  </a>
                </p>
                <p>
                  <a href="https://wa.me/447592401175" target="_blank" rel="noreferrer" className="hover:text-ink">
                    {"07592 401175"}
                  </a>
                </p>
                <p>
                  {"6 Castle Street, Antrim, BT41 4JE"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
              {"Choose your route"}
            </span>
            <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
              {"Clear contact options"}
            </h2>
            <p className="text-lg leading-8 text-muted">
              {"Start with the option that best matches what you need."}
            </p>
          </div>
          <div className="mt-10">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="surface flex h-full flex-col p-6">
                <h3 className="text-2xl font-semibold text-ink">
                  {"Need care?"}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {"Tell us about the support your family needs and we will guide you through the next step."}
                </p>
                <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-5 py-3 text-sm mt-6 w-fit" href="/contact/#care-inquiry">
                  {"Request care"}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                    <path d="M5 12h14">

                    </path>
                    <path d="m12 5 7 7-7 7">

                    </path>
                  </svg>
                </Link>
              </div>
              <div className="surface flex h-full flex-col p-6">
                <h3 className="text-2xl font-semibold text-ink">
                  {"Want to apply?"}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {"Use the quick apply form if you want to work in care across Northern Ireland."}
                </p>
                <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-5 py-3 text-sm mt-6 w-fit" href="/careers/#quick-apply">
                  {"Apply for care work"}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                    <path d="M5 12h14">

                    </path>
                    <path d="m12 5 7 7-7 7">

                    </path>
                  </svg>
                </Link>
              </div>
              <div className="surface flex h-full flex-col p-6">
                <h3 className="text-2xl font-semibold text-ink">
                  {"Want to refer someone?"}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {"Professionals and community organisations can refer someone who may need support at home."}
                </p>
                <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-5 py-3 text-sm mt-6 w-fit" href="/refer/">
                  {"Make a referral"}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                    <path d="M5 12h14">

                    </path>
                    <path d="m12 5 7 7-7 7">

                    </path>
                  </svg>
                </Link>
              </div>
              <div className="surface flex h-full flex-col p-6">
                <h3 className="text-2xl font-semibold text-ink">
                  {"General contact"}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {"If your question does not fit the options above, send a message and our team will respond."}
                </p>
                <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-5 py-3 text-sm mt-6 w-fit" href="/contact/#general-contact">
                  {"General inquiry"}
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
      </section>
      <section id="care-inquiry" className="section-space bg-white/35 dark:bg-slate-950/20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="surface p-8">
              <div className="max-w-3xl space-y-4">
                <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                  {"Need care?"}
                </span>
                <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
                  {"Request care for someone"}
                </h2>
                <p className="text-lg leading-8 text-muted">
                  {"Tell us what support is needed and how urgent the situation feels."}
                </p>
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
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="surface p-8">
              <div className="max-w-3xl space-y-4">
                <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                  {"Prefer a call back?"}
                </span>
                <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
                  {"Request a callback"}
                </h2>
                <p className="text-lg leading-8 text-muted">
                  {"If you would rather speak to someone directly, leave your details and our team can call you back."}
                </p>
              </div>
              <div className="mt-8">
                <WebsiteForm className="grid gap-4" kind="contact">
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    {"Full name"}
                    <input className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" placeholder="Your name" name="name"  required />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    {"Phone number"}
                    <input className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" placeholder="Best number to call" name="phone" />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    {"Best time to call"}
                    <select className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" name="bestTime">
                      <option>
                        {"Morning"}
                      </option>
                      <option>
                        {"Afternoon"}
                      </option>
                      <option>
                        {"Evening"}
                      </option>
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    {"Service of interest"}
                    <select className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" name="service">
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
                    </select>
                  </label>
                  <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-panelStrong text-ink ring-1 ring-line hover:bg-panel px-5 py-3 text-sm">
                    {"Request callback"}
                  </button>
                </WebsiteForm>
              </div>
            </div>
            <div id="general-contact" className="surface p-8">
              <div className="max-w-3xl space-y-4">
                <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                  {"General contact"}
                </span>
                <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
                  {"Send a general message"}
                </h2>
                <p className="text-lg leading-8 text-muted">
                  {"Use this if your question does not fit the care, careers, or referral forms."}
                </p>
              </div>
              <div className="mt-8">
                <WebsiteForm className="grid gap-4" kind="contact">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-medium text-ink">
                      {"Full name"}
                      <input className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" placeholder="Your name" name="name"  required />
                    </label>
                    <label className="grid gap-2 text-sm font-medium text-ink">
                      {"Email"}
                      <input className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" type="email" placeholder="you@example.com" name="email"  required />
                    </label>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-medium text-ink">
                      {"Phone"}
                      <input className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" placeholder="Phone number" name="phone" />
                    </label>
                    <label className="grid gap-2 text-sm font-medium text-ink">
                      {"Topic"}
                      <select className="h-12 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" name="topic">
                        <option>
                          {"General contact"}
                        </option>
                        <option>
                          {"Care question"}
                        </option>
                        <option>
                          {"Recruitment question"}
                        </option>
                        <option>
                          {"Referral question"}
                        </option>
                        <option>
                          {"Community partnership"}
                        </option>
                      </select>
                    </label>
                  </div>
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    {"Message"}
                    <textarea className="min-h-[132px] w-full rounded-2xl border border-line bg-white/80 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70" placeholder="Tell us how we can help." name="message">

                    </textarea>
                  </label>
                  <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-5 py-3 text-sm">
                    {"Send message"}
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
