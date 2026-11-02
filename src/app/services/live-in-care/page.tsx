import Link from "next/link";
import { WebsiteForm, ThemeToggle, MobileNavigation } from "@/components/website-controls";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Live-in care in Northern Ireland | Inotee Group" };

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"When do families usually ask about live-in care?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Often when needs have become more constant and short visits no longer feel enough.\"}},{\"@type\":\"Question\",\"name\":\"Can live-in care support older adults or people with dementia?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Live-in care may be considered for different care situations depending on the level of support needed.\"}},{\"@type\":\"Question\",\"name\":\"Will families know how care will work?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. We explain the next step clearly so families understand the support plan.\"}},{\"@type\":\"Question\",\"name\":\"Can live-in care be discussed before making a final decision?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Families can contact us for a care conversation before choosing the next step.\"}}]}" }} />
      <section className="relative overflow-hidden px-4 pb-10 pt-10 sm:pb-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-7">
            <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
              {"Home care service"}
            </span>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-balance font-display text-5xl tracking-tight text-ink sm:text-6xl lg:text-7xl">
                {"Live-in care in Northern Ireland"}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                {"Live-in care can help when someone needs more regular support and the family wants them to remain at home with continuity and reassurance."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-6 py-3.5 text-base" href="#service-inquiry">
                {"Request live-in care"}
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
            <p className="text-sm font-medium text-muted">
              {"Serving families across Belfast and Northern Ireland."}
            </p>
          </div>
          <div>
            <div className="hero-card p-4">
              <div className="relative overflow-hidden rounded-[1.75rem]">
                <img alt="Live-in care" fetchPriority="high" width="900" height="900" decoding="async" className="h-[420px] w-full object-cover" style={{"color": "transparent"}} src="/images/photo4.jpg" />
              </div>
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
                  {"About this care"}
                </span>
                <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
                  {"What live-in care means"}
                </h2>
                <p className="text-lg leading-8 text-muted">
                  {"Ongoing support at home for people who need more consistent care."}
                </p>
              </div>
              <p className="mt-6 text-sm leading-7 text-muted">
                {"Live-in care can help when someone needs more regular support and the family wants them to remain at home with continuity and reassurance."}
              </p>
            </div>
            <div className="surface p-8">
              <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                {"Who this care helps"}
              </span>
              <div className="mt-5 grid gap-4">
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"People who need more regular support than short visits can provide"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Families looking for continuity and reassurance at home"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Adults whose needs have become more complex or more constant"}
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
                {"Signs this care may be needed"}
              </span>
              <div className="mt-5 grid gap-4">
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Short visits are no longer enough"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"There are growing concerns about safety, isolation, or daily routine"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"A family wants more consistent support in the home"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"The person needs reassurance and practical help throughout the day"}
                  </p>
                </div>
              </div>
            </div>
            <div className="surface p-8">
              <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                {"What support can include"}
              </span>
              <div className="mt-5 grid gap-4">
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Ongoing support at home"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Help with routine and daily tasks"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Companionship and reassurance"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Personal support where needed"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-sm leading-7 text-ink">
                    {"Family communication where agreed"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="surface p-8">
              <div className="max-w-3xl space-y-4">
                <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                  {"How the inquiry process works"}
                </span>
                <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
                  {"What happens next"}
                </h2>
                <p className="text-lg leading-8 text-muted">
                  {"We keep the next step clear so families know how support can begin."}
                </p>
              </div>
              <div className="mt-8 grid gap-4">
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                    {"Step "}
                    {"1"}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-ink">
                    {"We talk through the level of support needed and the home situation"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                    {"Step "}
                    {"2"}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-ink">
                    {"We review whether live-in care is the right fit"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                    {"Step "}
                    {"3"}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-ink">
                    {"We explain the next step and how support can begin"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-panelStrong p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                    {"Step "}
                    {"4"}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-ink">
                    {"We keep communication clear as needs change"}
                  </p>
                </div>
              </div>
            </div>
            <div id="service-inquiry" className="surface p-8">
              <div className="max-w-3xl space-y-4">
                <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                  {"Request support"}
                </span>
                <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
                  {"Request live-in care"}
                </h2>
                <p className="text-lg leading-8 text-muted">
                  {"Tell us what support is needed and our team will review your inquiry as soon as possible."}
                </p>
              </div>
              <div className="mt-8">
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
                      {"Request live-in care"}
                    </button>
                  </WebsiteForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space bg-white/35 dark:bg-slate-950/20">
        <div className="container-shell">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
              {"Care you can trust"}
            </span>
            <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
              {"Trust matters on every service page"}
            </h2>
            <p className="text-lg leading-8 text-muted">
              {"Families should be able to see safe, respectful, local support without hunting for reassurance."}
            </p>
          </div>
          <div className="mt-10">
            <div className="grid gap-6">
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <div className="surface p-6">
                  <p className="text-lg font-semibold text-ink">
                    {"Safeguarding-led care"}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {"Safety, dignity, and clear action are built into the way support is planned and delivered."}
                  </p>
                </div>
                <div className="surface p-6">
                  <p className="text-lg font-semibold text-ink">
                    {"AccessNI checks"}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {"Care workers should be thoroughly checked before working with vulnerable adults."}
                  </p>
                </div>
                <div className="surface p-6">
                  <p className="text-lg font-semibold text-ink">
                    {"Trained care workers"}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {"Families need carers who understand routines, respect, and safe support at home."}
                  </p>
                </div>
                <div className="surface p-6">
                  <p className="text-lg font-semibold text-ink">
                    {"Family communication"}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {"We keep families updated so they are not left guessing what is happening."}
                  </p>
                </div>
                <div className="surface p-6">
                  <p className="text-lg font-semibold text-ink">
                    {"Clear care planning"}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {"Support should be easy to understand, with practical steps that match the person’s needs."}
                  </p>
                </div>
                <div className="surface p-6">
                  <p className="text-lg font-semibold text-ink">
                    {"Respect and dignity"}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {"Every visit should protect comfort, privacy, and independence as much as possible."}
                  </p>
                </div>
                <div className="surface p-6">
                  <p className="text-lg font-semibold text-ink">
                    {"Reliable scheduling"}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {"Consistency matters when families are arranging support around work, school, and hospital discharge."}
                  </p>
                </div>
                <div className="surface p-6">
                  <p className="text-lg font-semibold text-ink">
                    {"Local Northern Ireland support"}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {"Local knowledge helps us respond to families, referrers, and communities more helpfully."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <div className="max-w-3xl space-y-4">
                <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                  {"Frequently asked questions"}
                </span>
                <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
                  {"Questions about live-in care"}
                </h2>
                <p className="text-lg leading-8 text-muted">
                  {"If you do not see your question here, contact the team and we will talk it through with you."}
                </p>
              </div>
              <div className="mt-8">
                <div className="space-y-3">
                  <details className="group rounded-3xl border border-line bg-panel p-6 shadow-soft">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ink">
                      <span>
                        {"When do families usually ask about live-in care?"}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-5 w-5 shrink-0 transition group-open:rotate-45">
                        <path d="M5 12h14">

                        </path>
                        <path d="M12 5v14">

                        </path>
                      </svg>
                    </summary>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                      {"Often when needs have become more constant and short visits no longer feel enough."}
                    </p>
                  </details>
                  <details className="group rounded-3xl border border-line bg-panel p-6 shadow-soft">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ink">
                      <span>
                        {"Can live-in care support older adults or people with dementia?"}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-5 w-5 shrink-0 transition group-open:rotate-45">
                        <path d="M5 12h14">

                        </path>
                        <path d="M12 5v14">

                        </path>
                      </svg>
                    </summary>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                      {"Yes. Live-in care may be considered for different care situations depending on the level of support needed."}
                    </p>
                  </details>
                  <details className="group rounded-3xl border border-line bg-panel p-6 shadow-soft">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ink">
                      <span>
                        {"Will families know how care will work?"}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-5 w-5 shrink-0 transition group-open:rotate-45">
                        <path d="M5 12h14">

                        </path>
                        <path d="M12 5v14">

                        </path>
                      </svg>
                    </summary>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                      {"Yes. We explain the next step clearly so families understand the support plan."}
                    </p>
                  </details>
                  <details className="group rounded-3xl border border-line bg-panel p-6 shadow-soft">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ink">
                      <span>
                        {"Can live-in care be discussed before making a final decision?"}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-5 w-5 shrink-0 transition group-open:rotate-45">
                        <path d="M5 12h14">

                        </path>
                        <path d="M12 5v14">

                        </path>
                      </svg>
                    </summary>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                      {"Yes. Families can contact us for a care conversation before choosing the next step."}
                    </p>
                  </details>
                </div>
              </div>
            </div>
            <div className="surface p-8">
              <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
                {"Related services"}
              </span>
              <p className="mt-4 text-3xl font-semibold text-ink">
                {"You may also want to ask about"}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                {"Families often need a mix of support rather than one service on its own."}
              </p>
              <div className="mt-6">
                <div className="flex flex-wrap gap-3">
                  <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-panelStrong text-ink ring-1 ring-line hover:bg-panel px-5 py-3 text-sm" href="/services/elderly-care/">
                    {"Elderly care"}
                  </Link>
                  <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-panelStrong text-ink ring-1 ring-line hover:bg-panel px-5 py-3 text-sm" href="/services/overnight-care/">
                    {"Overnight care"}
                  </Link>
                  <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-panelStrong text-ink ring-1 ring-line hover:bg-panel px-5 py-3 text-sm" href="/services/disability-support/">
                    {"Disability support"}
                  </Link>
                </div>
              </div>
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
                  {"Local team"}
                </span>
                <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
                  {"Real people behind the care planning"}
                </h2>
                <p className="text-lg leading-8 text-muted">
                  {"We support families across Belfast, Lisburn, Bangor, Newtownabbey, Carrickfergus, Holywood, Antrim, and surrounding parts of Northern Ireland."}
                </p>
              </div>
            </div>
            <div className="surface p-6">
              <p className="text-sm leading-7 text-muted">
                {"Our care coordination team is available to guide families, discuss support options, and explain the next step clearly."}
              </p>
            </div>
          </div>
          <div className="mt-10">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div className="surface p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-brand-soft text-sm font-semibold text-brand-strong">
                  {"Team"}
                </div>
                <p className="mt-5 text-xl font-semibold text-ink">
                  {"Our care coordination team"}
                </p>
                <p className="mt-1 text-sm font-medium text-brand-strong">
                  {"Care inquiries, guidance, and family support"}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {"Our team is available to guide families, discuss care needs, and explain the next step clearly."}
                </p>
              </div>
              <div className="surface p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-brand-soft text-sm font-semibold text-brand-strong">
                  {"Team"}
                </div>
                <p className="mt-5 text-xl font-semibold text-ink">
                  {"Care quality support"}
                </p>
                <p className="mt-1 text-sm font-medium text-brand-strong">
                  {"Safeguarding and service oversight"}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {"We focus on safe support, respectful care delivery, and clear communication for families."}
                </p>
              </div>
              <div className="surface p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-brand-soft text-sm font-semibold text-brand-strong">
                  {"Team"}
                </div>
                <p className="mt-5 text-xl font-semibold text-ink">
                  {"Care planning and scheduling"}
                </p>
                <p className="mt-1 text-sm font-medium text-brand-strong">
                  {"Assessments, visit planning, and updates"}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {"We help families understand the next step, arrange support, and keep communication clear as needs change."}
                </p>
              </div>
              <div className="surface p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-brand-soft text-sm font-semibold text-brand-strong">
                  {"Team"}
                </div>
                <p className="mt-5 text-xl font-semibold text-ink">
                  {"Recruitment support"}
                </p>
                <p className="mt-1 text-sm font-medium text-brand-strong">
                  {"Applications and candidate communication"}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {"Candidates can expect a straightforward recruitment process with clear communication and support."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
