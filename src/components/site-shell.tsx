import Link from "next/link";
import { WebsiteForm, ThemeToggle, MobileNavigation } from "@/components/website-controls";

export function SiteHeader() { return (
  <header className="sticky top-0 z-50 px-4 pt-4">
    <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 backdrop-blur-xl transition border-white/20 bg-white/50 dark:bg-slate-950/50">
      <Link className="flex items-center gap-3" href="/">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/15 text-lg font-bold text-brand-strong">
          {"I"}
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">
            {"Inotee Group"}
          </p>
          <p className="text-xs text-muted">
            {"Home care across Northern Ireland"}
          </p>
        </div>
      </Link>
      <nav className="hidden items-center gap-7 lg:flex">
        <Link className="text-sm font-medium text-muted transition hover:text-ink" href="/">
          {"Home"}
        </Link>
        <Link className="text-sm font-medium text-muted transition hover:text-ink" href="/about/">
          {"About"}
        </Link>
        <Link className="text-sm font-medium text-muted transition hover:text-ink" href="/services/">
          {"Services"}
        </Link>
        <Link className="text-sm font-medium text-muted transition hover:text-ink" href="/careers/">
          {"Careers"}
        </Link>
        <Link className="text-sm font-medium text-muted transition hover:text-ink" href="/refer/">
          {"Refer"}
        </Link>
        <Link className="text-sm font-medium text-muted transition hover:text-ink" href="/faq/">
          {"FAQ"}
        </Link>
        <Link className="text-sm font-medium text-muted transition hover:text-ink" href="/contact/">
          {"Contact"}
        </Link>
      </nav>
      <div className="hidden items-center gap-3 lg:flex">
        <a href="tel:02896005679" className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-ink">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-4 w-4">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">

            </path>
          </svg>
          {"028 9600 5679"}
        </a>
        <ThemeToggle />
        <Link className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-5 py-3 text-sm" href="/contact/">
          {"Request care"}
        </Link>
      </div>
      <MobileNavigation />
    </div>
  </header>
); }

export function SiteFooter() { return (
  <footer className="border-t border-line/70 bg-slate-950 pb-24 text-white md:pb-0">
    <div className="container-shell grid gap-12 py-16 lg:grid-cols-[1.1fr_0.8fr_1fr]">
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/15 font-bold text-brand">
            {"I"}
          </div>
          <div>
            <p className="font-semibold">
              {"Inotee Group"}
            </p>
            <p className="text-sm text-slate-400">
              {"Home care for Northern Ireland families"}
            </p>
          </div>
        </div>
        <p className="max-w-md text-sm leading-7 text-slate-300">
          {"Fast, trusted home care for families who need safe support at home, plus recruitment and referral support across Northern Ireland."}
        </p>
        <div className="space-y-3 text-sm text-slate-300">
          <p className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-4 w-4 text-brand">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">

              </path>
            </svg>
            {"028 9600 5679"}
          </p>
          <p className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-4 w-4 text-brand">
              <rect width="20" height="16" x="2" y="4" rx="2">

              </rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7">

              </path>
            </svg>
            {"info@inoteegroup.com"}
          </p>
          <p className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-4 w-4 text-brand">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">

              </path>
              <circle cx="12" cy="10" r="3">

              </circle>
            </svg>
            {"6 Castle Street, Antrim, BT41 4JE"}
          </p>
        </div>
      </div>
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
          {"Explore"}
        </p>
        <div className="grid gap-3">
          <Link className="text-sm text-slate-300 transition hover:text-white" href="/">
            {"Home"}
          </Link>
          <Link className="text-sm text-slate-300 transition hover:text-white" href="/about/">
            {"About"}
          </Link>
          <Link className="text-sm text-slate-300 transition hover:text-white" href="/services/">
            {"Services"}
          </Link>
          <Link className="text-sm text-slate-300 transition hover:text-white" href="/careers/">
            {"Careers"}
          </Link>
          <Link className="text-sm text-slate-300 transition hover:text-white" href="/refer/">
            {"Refer"}
          </Link>
          <Link className="text-sm text-slate-300 transition hover:text-white" href="/faq/">
            {"FAQ"}
          </Link>
          <Link className="text-sm text-slate-300 transition hover:text-white" href="/contact/">
            {"Contact"}
          </Link>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
          {"Stay Connected"}
        </p>
        <p className="text-sm leading-7 text-slate-300">
          {"Receive care updates, service availability, and recruitment news."}
        </p>
        <WebsiteForm className="flex flex-col gap-3 sm:flex-row" kind="newsletter">
          <input className="h-12 w-full rounded-2xl border px-4 text-sm outline-none transition focus:ring-4 focus:ring-brand/10 dark:bg-slate-900/70 sm:max-w-xs border-slate-800 bg-slate-900 text-white placeholder:text-slate-500 focus:border-brand" type="email" placeholder="Enter your email" name="email"  required />
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 bg-brand text-slate-950 shadow-float hover:bg-brand/90 px-5 py-3 text-sm">
            {"Subscribe"}
          </button>
        </WebsiteForm>
      </div>
    </div>
    <div className="border-t border-white/10">
      <div className="container-shell py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              {"Regulators"}
            </p>
            <p className="text-sm leading-7 text-slate-300">
              {"Registered and aligned with Northern Ireland care regulation and workforce standards."}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <a href="https://www.rqia.org.uk/" target="_blank" rel="noreferrer" className="group rounded-[1.75rem] border border-white/10 bg-white px-5 py-4 text-slate-950 transition hover:-translate-y-0.5 hover:border-brand/50">
              <div className="flex h-16 items-center justify-center">
                <img alt="RQIA logo for the Regulation and Quality Improvement Authority" loading="lazy" width="280" height="105" decoding="async" className="max-h-12 w-auto object-contain" style={{"color": "transparent"}} src="/fonts/rqia.8a6ac12a.jpg" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                {"RQIA"}
              </p>
              <p className="mt-2 text-sm text-slate-600">
                {"Regulation and Quality Improvement Authority"}
              </p>
            </a>
            <a href="https://niscc.info/" target="_blank" rel="noreferrer" className="group rounded-[1.75rem] border border-white/10 bg-white px-5 py-4 text-slate-950 transition hover:-translate-y-0.5 hover:border-brand/50">
              <div className="flex h-16 items-center justify-center">
                <img alt="NISCC logo for the Northern Ireland Social Care Council" loading="lazy" width="120" height="130" decoding="async" className="max-h-12 w-auto object-contain" style={{"color": "transparent"}} src="/fonts/niscc.b7bc1121.png" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                {"NISCC"}
              </p>
              <p className="mt-2 text-sm text-slate-600">
                {"Northern Ireland Social Care Council"}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10">
      <div className="container-shell flex flex-col gap-3 py-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>
          {"© "}
          {"2026"}
          {"Inotee Group"}
          {". All rights reserved."}
        </p>
        <p>
          {"Home care support across Belfast and Northern Ireland."}
        </p>
      </div>
    </div>
  </footer>
); }
