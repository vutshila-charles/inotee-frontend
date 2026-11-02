import Link from "next/link";
import { WebsiteForm } from "@/components/website-controls";
import { CareIcon } from "@/components/care-ui";
import { careContact, careServices, type CareServiceSlug } from "@/lib/care-content";

export function CareEnquiry({ compact = false, initialService }: { compact?: boolean; initialService?: CareServiceSlug }) {
  const selectedService = careServices.find(service => service.slug === initialService)?.inquiryType || "Not sure yet";
  return <section className={`ig-enquiry ${compact ? "ig-enquiry-compact" : ""}`} id="care-inquiry" aria-labelledby="care-enquiry-heading">
    <div className="ig-enquiry-copy">
      <span className="ig-eyebrow">Let’s take the next step together</span>
      <h2 id="care-enquiry-heading">You don’t have to work it all out alone.</h2>
      <p>Tell us a little about what you need. We’ll get in touch to talk through your options and local availability.</p>
      <a className="ig-enquiry-phone" href={careContact.phoneHref}><CareIcon name="phone" /><span><small>Prefer a conversation?</small>{careContact.phone}</span></a>
      <a className="ig-text-link" href={careContact.whatsapp} target="_blank" rel="noreferrer">Message us on WhatsApp <CareIcon name="arrow" /></a>
    </div>
    <WebsiteForm kind="inquiry" className="ig-enquiry-form" aria-label="Care enquiry">
      <div className="ig-form-heading"><h3>Let’s talk about care</h3><p>A few details are all we need to get started.</p></div>
      <div className="ig-field-row">
        <label>Your name <span aria-hidden="true">*</span><input name="fullName" autoComplete="name" placeholder="Full name" required maxLength={150} /></label>
        <label>Phone number <span aria-hidden="true">*</span><input name="phoneNumber" type="tel" inputMode="tel" autoComplete="tel" placeholder="Best number to call" required maxLength={30} /></label>
      </div>
      <div className="ig-field-row">
        <label>Email address <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></label>
        <label>Care postcode <span aria-hidden="true">*</span><input name="postcode" autoComplete="postal-code" placeholder="e.g. BT41 4JE" required maxLength={12} /></label>
      </div>
      <label>What would you like help with?<select name="typeOfCareNeeded" defaultValue={selectedService}><option>Not sure yet</option>{careServices.map(service => <option key={service.slug} value={service.inquiryType}>{service.label}</option>)}</select></label>
      <label>Anything you’d like us to know? <small>(optional)</small><textarea name="message" rows={3} placeholder="Tell us about the support you’re looking for." maxLength={3000} /></label>
      <button type="submit" className="ig-button ig-button-primary ig-form-submit">Request a call back <CareIcon name="arrow" /></button>
      <p className="ig-form-note">We’ll use these details to respond to your enquiry. <Link href="/privacy-policy/">Privacy policy</Link>.</p>
    </WebsiteForm>
  </section>;
}
