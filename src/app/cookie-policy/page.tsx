import Link from "next/link";
import { WebsiteForm, ThemeToggle, MobileNavigation } from "@/components/website-controls";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Cookie Policy | Inotee Group | Inotee Group" };

export default function Page() {
  return (
    <main id="main-content" className="flex-1">
      <section className="relative isolate overflow-hidden border-b border-[rgba(13,31,78,0.08)] bg-[var(--color-brand-strong)] text-white">
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
            {"Cookie Policy"}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
            {"How cookies help our website function and improve the user experience."}
          </p>
        </div>
      </section>
      <section className="section-space">
        <div className="content-shell">
          <article className="prose prose-slate max-w-none rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-xl shadow-[rgba(13,31,78,0.05)] sm:p-10">
            <p className="not-prose rounded-2xl bg-[rgba(13,31,78,0.04)] px-4 py-3 text-sm text-[var(--color-ink-soft)]">
              {"Last updated: 22 June 2026"}
            </p>
            <section>
              <h2>
                {"What Cookies Are"}
              </h2>
              <p>
                {"Cookies are small text files stored on your device to help websites function properly, remember preferences, and measure how pages are used."}
              </p>
            </section>
            <section>
              <h2>
                {"How We Use Cookies"}
              </h2>
              <p>
                {"We use essential cookies to support core website functionality and may use analytics or preference cookies to improve the user experience."}
              </p>
              <div>
                <h3>
                  {"Essential Cookies"}
                </h3>
                <p>
                  {"These are necessary for forms, security, and basic navigation and cannot be switched off in our systems."}
                </p>
              </div>
              <div>
                <h3>
                  {"Performance Cookies"}
                </h3>
                <p>
                  {"These help us understand how visitors use the site so we can improve layout, content, and usability."}
                </p>
              </div>
            </section>
            <section>
              <h2>
                {"Managing Cookies"}
              </h2>
              <p>
                {"You can control or delete cookies through your browser settings. Disabling some cookies may affect parts of the site or reduce functionality."}
              </p>
            </section>
            <section>
              <h2>
                {"Third-Party Services"}
              </h2>
              <p>
                {"Certain embedded services, such as map tools or analytics providers, may place their own cookies subject to their own privacy and cookie policies."}
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
