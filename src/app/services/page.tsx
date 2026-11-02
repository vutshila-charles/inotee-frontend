import type { Metadata } from "next";
import Link from "next/link";
import { CareIcon, CareServiceCards } from "@/components/care-ui";
import { CareEnquiry } from "@/components/care-enquiry";
import { careContact } from "@/lib/care-content";

export const metadata: Metadata = { title: "Home Care Services in Northern Ireland | Inotee Group", description: "Explore personal care, dementia support, companionship, overnight care and support after hospital across Northern Ireland.", alternates: { canonical: "/services/" } };
export default function ServicesPage() {
  return <main id="main-content" className="ig-care-page">
    <section className="ig-container ig-page-intro"><span className="ig-eyebrow">Care at home, your way</span><h1>A little help.<br /><em>A fuller everyday.</em></h1><p>Everyone’s idea of a good day is different. Explore support that helps you or someone you love stay comfortable, connected and independent at home.</p><div className="ig-intro-actions"><Link href="/contact/#care-inquiry" className="ig-button ig-button-primary">Talk about your care needs <CareIcon name="arrow" /></Link><a className="ig-text-link" href={careContact.phoneHref}><CareIcon name="phone" />{careContact.phone}</a></div></section>
    <section className="ig-container ig-services-section" aria-label="Our home care services"><CareServiceCards /><div className="ig-help-strip"><span>Not sure which type of care is right?</span><Link href="/contact/">We can help you work it out <CareIcon name="arrow" /></Link></div></section>
    <section className="ig-container ig-section ig-service-promise"><span className="ig-eyebrow">The person comes first</span><h2>Support built around<br /><em>what matters to you.</em></h2><div className="ig-promise-grid"><div><CareIcon name="heart" /><h3>Personal routines</h3><p>Tell us how you like your day to feel, from morning routines to familiar comforts.</p></div><div><CareIcon name="people" /><h3>Family conversations</h3><p>Discuss questions, changes and the way you’d like to stay in touch.</p></div><div><CareIcon name="home" /><h3>Practical planning</h3><p>Understand the support, costs and availability before making a decision.</p></div></div></section>
    <div className="ig-container ig-enquiry-section"><CareEnquiry /></div>
  </main>;
}
