"use client";

import Link from "next/link";
import { useEffect, useState, type ComponentProps, type FormEvent } from "react";

const links = [["Home", "/"], ["About", "/about/"], ["Services", "/services/"], ["Careers", "/careers/"], ["Refer", "/refer/"], ["FAQ", "/faq/"], ["Contact", "/contact/"]];

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    let next = false;
    try { next = localStorage.getItem("theme") === "dark"; } catch { /* Storage may be unavailable. */ }
    document.documentElement.classList.toggle("dark", next);
    setDark(next);
  }, []);
  return <button type="button" aria-label="Toggle theme" aria-pressed={dark} className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-panel text-ink" onClick={() => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch { /* Theme still works for this visit. */ }
  }}>{dark ? "☀" : "☾"}</button>;
}

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  return <div className="lg:hidden">
    <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-panel text-ink" onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" style={{ position: "absolute", top: "100%", left: 16, right: 16, padding: 24, borderRadius: 24, background: "rgb(var(--panel))", boxShadow: "0 12px 40px #0002", display: "grid", gap: 18 }}>
      {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <ThemeToggle />
    </nav>}
  </div>;
}

type Kind = "inquiry" | "contact" | "referral" | "newsletter" | "application";
type Props = ComponentProps<"form"> & { kind: Kind };

export function WebsiteForm({ children, kind, ...props }: Props) {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity() || pending) return;
    const fields = new FormData(form);
    const data: Record<string, FormDataEntryValue> = Object.fromEntries(fields.entries());
    data.sourcePage = window.location.pathname;
    const query = new URLSearchParams(window.location.search);
    for (const key of ["Source", "Medium", "Campaign", "Content", "Term"]) data[`utm${key}`] = query.get(`utm_${key.toLowerCase()}`) || "";
    setPending(true);
    setStatus("");
    try {
      const base = (process.env.NEXT_PUBLIC_INOTEE_API_URL || "https://api.inoteegroup.com/api").replace(/\/$/, "");
      const multipart = kind === "application";
      const endpoint = kind === "application" ? "/v1/public/recruitment/applications" : kind === "referral" ? "/referrals" : kind === "newsletter" ? "/v1/public/newsletter-subscriptions" : "/v1/public/inquiries";
      if (kind === "inquiry" || kind === "contact") {
        data.full_name = data.fullName || data.name || "";
        data.inquiry_type = data.typeOfCareNeeded || data.topic || data.service || "General inquiry";
        data.phone = data.phoneNumber || data.phone || "";
        if (!data.message) data.message = [data.whoNeedsCare && `Who needs care: ${data.whoNeedsCare}`, data.urgency && `Urgency: ${data.urgency}`, data.mainConcern && `Main concern: ${data.mainConcern}`].filter(Boolean).join("\n");
      }
      if (multipart && !fields.has("applicationData")) fields.set("applicationData", JSON.stringify(data));
      const response = await fetch(`${base}${endpoint}`, {
        method: "POST",
        headers: multipart ? { Accept: "application/json" } : { Accept: "application/json", "Content-Type": "application/json" },
        body: multipart ? fields : JSON.stringify(data),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false) throw new Error(result.message || "We could not send your request. Please call 028 9600 5679 or email info@inoteegroup.com.");
      setStatus(result.message || "Thank you. Your request has been sent to our team.");
      form.reset();
    } catch (error) {
      setStatus(error instanceof Error && error.name !== "TimeoutError" ? error.message : "The request timed out. Please call 028 9600 5679.");
    } finally { setPending(false); }
  }
  return <form {...props} onSubmit={submit} aria-busy={pending}>
    <fieldset disabled={pending} style={{ display: "contents" }}>{children}</fieldset>
    {status && <p role="status" style={{ gridColumn: "1 / -1", padding: 16, border: "1px solid currentColor", borderRadius: 12 }}>{status}</p>}
  </form>;
}
