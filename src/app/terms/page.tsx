import Link from "next/link";
import { WebsiteForm, ThemeToggle, MobileNavigation } from "@/components/website-controls";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms & Conditions | Inotee Group | Inotee Group" };

export default function Page() {
  return (
    <main className="flex-1">
      <section className="relative isolate overflow-hidden border-b border-[rgba(13,31,78,0.08)] bg-[var(--color-brand-strong)] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,21,50,0.92)_0%,rgba(8,21,50,0.82)_40%,rgba(8,21,50,0.62)_100%)]">

        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,178,93,0.28),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_48%)]">

        </div>
        <div className="content-shell relative py-24 sm:py-28 lg:py-32">
          <p className="text-sm font-medium uppercase tracking-[0.34em] text-white/72">
            {"Tavat Healthcare Recruitment"}
          </p>
          <div className="mt-5 h-1 w-20 rounded-full bg-[var(--color-accent)]">

          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            {"Terms & Conditions"}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
            {"The terms that apply when you use the Tavat Healthcare Recruitment website."}
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
                {"Use of This Website"}
              </h2>
              <p>
                {"By using this website, you agree to use it lawfully and in a way that does not interfere with its operation or the experience of other users."}
              </p>
              <p>
                {"You must not attempt to misuse forms, introduce malicious code, or access information without permission."}
              </p>
            </section>
            <section>
              <h2>
                {"Information on the Site"}
              </h2>
              <p>
                {"We aim to keep website content accurate and up to date, but information is provided for general guidance only and may change without notice."}
              </p>
            </section>
            <section>
              <h2>
                {"Recruitment and Staffing Enquiries"}
              </h2>
              <p>
                {"Submitting an application or enquiry does not guarantee employment, placement, or service availability."}
              </p>
              <p>
                {"All placements remain subject to suitability checks, compliance requirements, contractual terms, and service capacity."}
              </p>
            </section>
            <section>
              <h2>
                {"Intellectual Property"}
              </h2>
              <p>
                {"Unless otherwise stated, the website content, branding, text, and design elements belong to Tavat Healthcare Recruitment and may not be copied or reused without permission."}
              </p>
            </section>
            <section>
              <h2>
                {"Liability"}
              </h2>
              <p>
                {"To the fullest extent permitted by law, we exclude liability for indirect or consequential loss arising from use of this website or reliance on its content."}
              </p>
            </section>
            <section>
              <h2>
                {"Contact and Updates"}
              </h2>
              <p>
                {"We may update these terms from time to time. Continued use of the website after updates indicates acceptance of the revised terms."}
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
