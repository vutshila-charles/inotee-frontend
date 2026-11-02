import Link from "next/link";
import { WebsiteForm, ThemeToggle, MobileNavigation } from "@/components/website-controls";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Frequently Asked Questions | Inotee Group" };

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How quickly can care start?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Start times depend on the care needed, location, and urgency. If support is needed quickly, contact us and we will review the situation as soon as possible.\"}},{\"@type\":\"Question\",\"name\":\"What areas do you cover?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"We support families across Belfast and wider Northern Ireland, including Lisburn, Bangor, Newtownabbey, Carrickfergus, Holywood, and Antrim.\"}},{\"@type\":\"Question\",\"name\":\"What types of care do you provide?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"We provide post-hospital recovery care, dementia care, personal care, overnight care, companionship, disability support, elderly care, and live-in care.\"}},{\"@type\":\"Question\",\"name\":\"Can you help after hospital discharge?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Post-hospital recovery care can help with meals, washing and dressing, medication prompts, mobility, reassurance, and family communication after discharge.\"}},{\"@type\":\"Question\",\"name\":\"Do you support people living with dementia?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Dementia support can be arranged around routine, reassurance, safety, communication, and day-to-day practical needs.\"}},{\"@type\":\"Question\",\"name\":\"Can family members receive updates?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. We can agree how updates should be shared so families know who to contact and how communication will work.\"}},{\"@type\":\"Question\",\"name\":\"How do I request care?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Use the care inquiry form, call us, or message us on WhatsApp. Tell us what support is needed and how urgent the situation feels.\"}},{\"@type\":\"Question\",\"name\":\"How do I apply for a care role?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"You can use the quick apply form on the careers page, then complete the longer application if you want to share more detail.\"}}]}" }} />
      <section className="relative overflow-hidden px-4 pb-10 pt-10 sm:pb-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-7">
            <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
              {"FAQ"}
            </span>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-balance font-display text-5xl tracking-tight text-ink sm:text-6xl lg:text-7xl">
                {"Clear answers for families, care workers, and referrers"}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                {"If you are arranging care and want straightforward answers first, start here."}
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
              <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-panelStrong text-ink ring-1 ring-line hover:bg-panel px-6 py-3.5 text-base" href="/services/">
                {"View services"}
              </Link>
            </div>
          </div>
          <div>

          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-strong">
              {"Frequently asked questions"}
            </span>
            <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
              {"Information without the jargon"}
            </h2>
            <p className="text-lg leading-8 text-muted">
              {"If you are still unsure after reading these answers, contact the team and we will guide you."}
            </p>
          </div>
          <div className="mt-10">
            <div className="space-y-4">
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
                  {"Start times depend on the care needed, location, and urgency. If support is needed quickly, contact us and we will review the situation as soon as possible."}
                </p>
              </details>
              <details className="group rounded-3xl border border-line bg-panel p-6 shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ink">
                  <span>
                    {"What areas do you cover?"}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-5 w-5 shrink-0 transition group-open:rotate-45">
                    <path d="M5 12h14">

                    </path>
                    <path d="M12 5v14">

                    </path>
                  </svg>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                  {"We support families across Belfast and wider Northern Ireland, including Lisburn, Bangor, Newtownabbey, Carrickfergus, Holywood, and Antrim."}
                </p>
              </details>
              <details className="group rounded-3xl border border-line bg-panel p-6 shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ink">
                  <span>
                    {"What types of care do you provide?"}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-5 w-5 shrink-0 transition group-open:rotate-45">
                    <path d="M5 12h14">

                    </path>
                    <path d="M12 5v14">

                    </path>
                  </svg>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                  {"We provide post-hospital recovery care, dementia care, personal care, overnight care, companionship, disability support, elderly care, and live-in care."}
                </p>
              </details>
              <details className="group rounded-3xl border border-line bg-panel p-6 shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ink">
                  <span>
                    {"Can you help after hospital discharge?"}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-5 w-5 shrink-0 transition group-open:rotate-45">
                    <path d="M5 12h14">

                    </path>
                    <path d="M12 5v14">

                    </path>
                  </svg>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                  {"Yes. Post-hospital recovery care can help with meals, washing and dressing, medication prompts, mobility, reassurance, and family communication after discharge."}
                </p>
              </details>
              <details className="group rounded-3xl border border-line bg-panel p-6 shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ink">
                  <span>
                    {"Do you support people living with dementia?"}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-5 w-5 shrink-0 transition group-open:rotate-45">
                    <path d="M5 12h14">

                    </path>
                    <path d="M12 5v14">

                    </path>
                  </svg>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                  {"Yes. Dementia support can be arranged around routine, reassurance, safety, communication, and day-to-day practical needs."}
                </p>
              </details>
              <details className="group rounded-3xl border border-line bg-panel p-6 shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ink">
                  <span>
                    {"Can family members receive updates?"}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-5 w-5 shrink-0 transition group-open:rotate-45">
                    <path d="M5 12h14">

                    </path>
                    <path d="M12 5v14">

                    </path>
                  </svg>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                  {"Yes. We can agree how updates should be shared so families know who to contact and how communication will work."}
                </p>
              </details>
              <details className="group rounded-3xl border border-line bg-panel p-6 shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ink">
                  <span>
                    {"How do I request care?"}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-5 w-5 shrink-0 transition group-open:rotate-45">
                    <path d="M5 12h14">

                    </path>
                    <path d="M12 5v14">

                    </path>
                  </svg>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                  {"Use the care inquiry form, call us, or message us on WhatsApp. Tell us what support is needed and how urgent the situation feels."}
                </p>
              </details>
              <details className="group rounded-3xl border border-line bg-panel p-6 shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ink">
                  <span>
                    {"How do I apply for a care role?"}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-5 w-5 shrink-0 transition group-open:rotate-45">
                    <path d="M5 12h14">

                    </path>
                    <path d="M12 5v14">

                    </path>
                  </svg>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                  {"You can use the quick apply form on the careers page, then complete the longer application if you want to share more detail."}
                </p>
              </details>
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
                  {"Still unsure?"}
                </span>
                <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
                  {"Tell us what support is needed"}
                </h2>
                <p className="text-lg leading-8 text-muted">
                  {"You do not need to work out the exact service before contacting us."}
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
    </main>
  );
}
