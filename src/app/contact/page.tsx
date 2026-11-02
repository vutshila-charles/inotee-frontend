import type { Metadata } from "next";
import Link from "next/link";
import { CareIcon } from "@/components/care-ui";
import { CareEnquiry } from "@/components/care-enquiry";
import { careContact } from "@/lib/care-content";

export const metadata: Metadata = { title: "Talk to Our Home Care Team | Inotee Group", description: "Contact Inotee Group about care in Antrim, Belfast and Northern Ireland. Call 028 9600 5679, send a WhatsApp message or request a call back.", alternates: { canonical: "/contact/" } };
export default function ContactPage() {
  return <main id="main-content" className="ig-care-page ig-contact-page">
    <section className="ig-container ig-contact-intro"><span className="ig-eyebrow">A conversation can make things clearer</span><h1>Let’s find your<br /><em>next step.</em></h1><p>Whether you’re arranging care for yourself or someone you love, we’re here to listen.</p></section>
    <div className="ig-container ig-enquiry-section"><CareEnquiry compact /></div>
    <section className="ig-container ig-contact-details" id="general-contact" aria-label="Other ways to contact Inotee"><div><CareIcon name="mail" /><h2>Drop us a line</h2><a href={`mailto:${careContact.email}`}>{careContact.email}</a><p>For general questions and professional enquiries.</p></div><div><CareIcon name="pin" /><h2>Based in Antrim</h2><address>{careContact.address}</address><a href="https://www.google.com/maps/search/?api=1&query=6+Castle+Street+Antrim+BT41+4JE" target="_blank" rel="noreferrer">View location <CareIcon name="arrow" /></a></div><div><CareIcon name="people" /><h2>Looking for something else?</h2><Link href="/careers/">Work with Inotee <CareIcon name="arrow" /></Link><Link href="/refer/">Make a care referral <CareIcon name="arrow" /></Link></div></section>
  </main>;
}
