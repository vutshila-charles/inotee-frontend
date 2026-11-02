"use client";

import { useRef, useState, type FormEvent } from "react";
import { applicationDefaults, applicationFieldAliases, toApplicationData, type ApplicationValues } from "@/lib/application";

const steps = [
  { title: "Personal information", keys: ["positionAppliedFor", "personal"] },
  { title: "Education and qualifications", keys: ["education"] },
  { title: "Driving licence", keys: ["drivingLicence"] },
  { title: "Professional registration", keys: ["professional"] },
  { title: "Employment history", keys: ["employmentHistory", "otherEmployment", "leisureInterests"] },
  { title: "Employment gaps", keys: ["employmentGaps"] },
  { title: "References", keys: ["references"] },
  { title: "Criminal records", keys: ["criminalRecords"] },
  { title: "Declaration and review", keys: ["generalComments", "declaration"] },
];
const required = new Set(["positionAppliedFor", "personal.title", "personal.forenames", "personal.surname", "personal.address", "personal.postcode", "personal.email", "personal.mobilePhone", "references.reference1.name", "references.reference1.organisation", "references.reference1.email", "references.reference1.telephone", "references.reference2.name", "references.reference2.organisation", "references.reference2.email", "references.reference2.telephone", "declaration.fullName", "declaration.signedOn", "declaration.confirmed"]);
const labels: Record<string, string> = { niNumber: "National Insurance number", nisccCertificateNumber: "NISCC certificate number", ukWorkRestrictions: "Do you have restrictions on working in the UK?", cannotWorkRegulatedActivity: "Details of any restriction on regulated activity", authoriseCriminalRecordsCheck: "Do you authorise a criminal records check?", convictedOrCautioned: "Have you been convicted or cautioned?", confirmed: "I confirm that the information I have provided is accurate", may_contact_before_interview: "May we contact this referee before interview?", signedOn: "Date signed", fullName: "Full name", reference1: "First referee", reference2: "Second referee" };
const label = (key: string) => labels[key] || key.replace(/([a-z])([A-Z0-9])/g, "$1 $2").replace(/_/g, " ").replace(/^./, c => c.toUpperCase());
function readPath(object: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((current, key) => current && typeof current === "object" ? (current as Record<string, unknown>)[key] : undefined, object);
}
function writePath(object: object, path: string, value: unknown) {
  const keys = path.split(".");
  let current = object as Record<string, unknown>;
  for (const key of keys.slice(0, -1)) current = current[key] as Record<string, unknown>;
  current[keys[keys.length - 1]] = value;
}

export function ApplicationForm() {
  const [values, setValues] = useState<ApplicationValues>(() => structuredClone(applicationDefaults));
  const [step, setStep] = useState(0);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [photograph, setPhotograph] = useState<File>();
  const [cv, setCv] = useState<File>();
  const form = useRef<HTMLFormElement>(null);
  function update(path: string, value: unknown) {
    setValues(previous => { const next = structuredClone(previous); writePath(next, path, value); return next; });
  }
  function field(path: string, value: unknown): React.ReactNode {
    const key = path.split(".").at(-1)!;
    if (Array.isArray(value)) return <section key={path} className="application-group">
      <h3>{label(key)}</h3>
      {value.map((row, index) => <div key={`${path}.${index}`} className="application-row">
        {field(`${path}.${index}`, row)}
        {value.length > 1 && <button type="button" className="application-secondary" onClick={() => update(path, value.filter((_, i) => i !== index))}>Remove entry {index + 1}</button>}
      </div>)}
      <button type="button" className="application-secondary" onClick={() => update(path, [...value, structuredClone(readPath(applicationDefaults, `${path}.0`))])}>Add another entry</button>
    </section>;
    if (value !== null && typeof value === "object") return <fieldset key={path} className="application-group"><legend>{/^\d+$/.test(key) ? `Entry ${Number(key) + 1}` : label(key)}</legend><div className="application-grid">{Object.entries(value).filter(([name]) => !(path === "personal" && name === "drivingLicence")).map(([name, entry]) => field(`${path}.${name}`, entry))}</div></fieldset>;
    const isRequired = required.has(path);
    const props = { name: path, required: isRequired, disabled: busy };
    const yesNo = ["currentDrivingLicence", "ukWorkRestrictions", "authoriseCriminalRecordsCheck", "convictedOrCautioned"].includes(key);
    const multiline = /address|qualifications|training|details|duties|reason|comments|interests|schoolsAttended|otherEmployment/i.test(key);
    return <label key={path} className="application-field">{label(key)}{isRequired && " *"}
      {typeof value === "boolean" ? <input {...props} type="checkbox" checked={value} onChange={e => update(path, e.target.checked)} /> : yesNo ? <select {...props} value={String(value)} onChange={e => update(path, e.target.value)}><option value="no">No</option><option value="yes">Yes</option></select> : key === "positionAppliedFor" ? <select {...props} value={String(value)} onChange={e => update(path, e.target.value)}>{["Domiciliary Care Assistant", "Live-In Caregiver", "Healthcare Assistant", "Support Worker", "Nurse"].map(role => <option key={role}>{role}</option>)}</select> : multiline ? <textarea {...props} value={String(value ?? "")} onChange={e => update(path, e.target.value)} rows={3} /> : <input {...props} value={String(value ?? "")} onChange={e => update(path, e.target.value)} type={/email/i.test(key) ? "email" : /phone|telephone/i.test(key) ? "tel" : /Date$|signedOn/.test(key) ? "date" : "text"} />}
    </label>;
  }
  function goNext() {
    if (form.current?.reportValidity()) { setStep(index => Math.min(index + 1, steps.length - 1)); setStatus(""); }
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < steps.length - 1) { goNext(); return; }
    if (busy || submitted) return;
    setBusy(true); setStatus("");
    const data = new FormData();
    data.set("applicationData", JSON.stringify(toApplicationData(values)));
    for (const [alias, path] of Object.entries(applicationFieldAliases)) {
      if (alias === "photograph") continue;
      const value = readPath(values, path);
      data.set(alias, typeof value === "boolean" ? String(value) : ["yes", "no"].includes(String(value)) ? value === "yes" ? "Yes" : "No" : String(value ?? ""));
    }
    for (const [alias, value] of Object.entries({ employmentHistory: values.employmentHistory, employmentGaps: values.employmentGaps, reference1: values.references.reference1, reference2: values.references.reference2 })) data.set(alias, JSON.stringify(value));
    data.set("sourcePage", window.location.pathname);
    if (photograph) data.set("photograph", photograph);
    if (cv) data.set("cv", cv);
    try {
      const base = (process.env.NEXT_PUBLIC_INOTEE_API_URL || "https://api.inoteegroup.com/api").replace(/\/$/, "");
      const response = await fetch(`${base}/v1/public/recruitment/applications`, { method: "POST", headers: { Accept: "application/json" }, body: data, signal: AbortSignal.timeout(30000) });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false) throw new Error(result.message || "We could not submit your application. Please contact info@inoteegroup.com.");
      setSubmitted(true); setStatus(result.message || "Thank you. Your application has been submitted.");
    } catch (error) { setStatus(error instanceof Error ? error.message : "Please try again or contact info@inoteegroup.com."); }
    finally { setBusy(false); }
  }
  if (submitted) return <p role="status" className="surface p-8">{status}</p>;
  return <form ref={form} onSubmit={submit} className="surface p-8" aria-busy={busy}>
    <p>Step {step + 1} of {steps.length}</p>
    <h2 className="text-2xl font-semibold text-ink" style={{ marginTop: 12, marginBottom: 24 }}>{steps[step].title}</h2>
    <p style={{ marginBottom: 24 }}>Required fields are marked *. Your information stays in this form until you submit. Keep this page open while completing your application.</p>
    {steps[step].keys.map(key => field(key, readPath(values, key)))}
    {step === steps.length - 1 && <>
      <label className="application-field">Photograph<input type="file" accept="image/jpeg,image/png,image/webp" onChange={e => setPhotograph(e.target.files?.[0])} /></label>
      <label className="application-field">CV (PDF or Word)<input type="file" accept=".pdf,.doc,.docx" onChange={e => setCv(e.target.files?.[0])} /></label>
      <p>Please review your information before submitting. You can use Back to make changes.</p>
    </>}
    {status && <p role="alert" style={{ marginTop: 20 }}>{status}</p>}
    <div style={{ display: "flex", justifyContent: "space-between", gap: 16, marginTop: 32 }}>
      <button type="button" className="application-secondary" disabled={step === 0 || busy} onClick={() => setStep(index => index - 1)}>Back</button>
      {step < steps.length - 1 ? <button type="button" className="application-primary" onClick={goNext}>Continue</button> : <button type="submit" className="application-primary" disabled={busy}>{busy ? "Submitting…" : "Submit application"}</button>}
    </div>
  </form>;
}
