import type { Metadata } from "next";
import { ApplicationForm } from "@/components/application-form";

export const metadata: Metadata = { title: "Apply for Care Work | Inotee Group" };

export default function ApplyPage() {
  return <main id="main-content" className="container-shell section-space">
    <div className="max-w-3xl space-y-4" style={{ marginBottom: 40 }}>
      <h1 className="text-4xl font-semibold text-ink">Apply for care work</h1>
      <p className="text-lg leading-8 text-muted">Tell us about your experience, qualifications, and availability. Our recruitment team will review your application.</p>
    </div>
    <ApplicationForm />
  </main>;
}
