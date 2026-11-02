import Link from "next/link";
import { WebsiteForm, ThemeToggle, MobileNavigation } from "@/components/website-controls";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy | Inotee Group | Inotee Group" };

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
            {"Privacy Policy"}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
            {"How we handle personal information responsibly and transparently."}
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
                {"Information We Collect"}
              </h2>
              <p>
                {"We collect the information you choose to provide when you contact us, apply for work, request staffing support, subscribe to updates, or otherwise engage with Inotee Group."}
              </p>
              <p>
                {"This may include names, email addresses, telephone numbers, employment history, qualifications, compliance documentation, organisation details, and any information needed to respond to your enquiry or process your application."}
              </p>
            </section>
            <section>
              <h2>
                {"How We Use Personal Data"}
              </h2>
              <p>
                {"We use personal data to manage recruitment activity, respond to staffing enquiries, communicate with candidates and clients, and maintain regulatory compliance."}
              </p>
              <p>
                {"Where appropriate, we may also use data to improve our services, manage safeguarding concerns, and keep accurate placement records."}
              </p>
              <div>
                <h3>
                  {"Recruitment Activity"}
                </h3>
                <p>
                  {"Candidate data is used to assess suitability for roles, verify eligibility to work, arrange interviews, and coordinate placements."}
                </p>
              </div>
              <div>
                <h3>
                  {"Client Services"}
                </h3>
                <p>
                  {"Organisation contact data is used to understand staffing needs, manage bookings, and support service delivery."}
                </p>
              </div>
            </section>
            <section>
              <h2>
                {"Lawful Bases"}
              </h2>
              <p>
                {"Depending on the context, we process personal data on the basis of consent, contract, legitimate interests, and legal obligation."}
              </p>
              <p>
                {"Healthcare recruitment can also involve the processing of special category data where required for employment, safeguarding, or regulatory responsibilities."}
              </p>
            </section>
            <section>
              <h2>
                {"Data Sharing"}
              </h2>
              <p>
                {"We only share personal information where necessary for recruitment, compliance, payroll support, training administration, or legal and regulatory purposes."}
              </p>
              <p>
                {"This may include sharing with care providers, background screening services, training partners, software providers, and public bodies where legally required."}
              </p>
            </section>
            <section>
              <h2>
                {"Retention"}
              </h2>
              <p>
                {"We retain data only for as long as necessary to fulfil the purposes for which it was collected and to meet applicable legal, tax, employment, and regulatory requirements."}
              </p>
            </section>
            <section>
              <h2>
                {"Your Rights"}
              </h2>
              <p>
                {"You may have the right to access, correct, erase, restrict, object to, or transfer your personal information, subject to applicable law."}
              </p>
              <p>
                {"To exercise your rights, please contact us using the details listed on our Contact page."}
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
