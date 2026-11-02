import Link from "next/link";
import type { Metadata } from "next";
import { CareEnquiry } from "@/components/care-enquiry";
import { CareIcon } from "@/components/care-ui";

export const metadata: Metadata = { title: "About Inotee Group | Personal Home Care in Northern Ireland", description: "Get to know Inotee Group. Home care built around personal routines, practical support and clear conversations with families across Northern Ireland.", alternates: { canonical: "/about/" } };
export default function AboutPage() {
  return <main id="main-content" className="ig-care-page">
    <section className="ig-container ig-detail-hero ig-about-hero"><div><span className="ig-eyebrow">A personal approach to home care</span><h1>Good care starts<br /><em>with listening.</em></h1><p>What makes a good day? What feels harder than it used to? What would make life a little easier? At Inotee Group, that’s where the conversation starts.</p><Link href="/contact/#care-inquiry" className="ig-button ig-button-primary">Talk to our team <CareIcon name="arrow" /></Link></div><div className="ig-detail-photo"><img src="/images/care-companionship.jpg" alt="A care worker listening and sharing an activity with an older couple" width={1400} height={990} fetchPriority="high" /></div></section>
    <section className="ig-story-band"><div className="ig-container ig-about-story"><span className="ig-eyebrow">Here for your everyday</span><h2>Behind every care plan,<br /><em>there’s a person.</em></h2><div><p>Someone with their own routines, preferences and stories. Someone who wants to feel comfortable in their own home, and a family who wants to know they have the right support.</p><p>We help families across Northern Ireland explore practical home care, from personal routines and companionship to dementia support, overnight care and help after a hospital stay.</p><p>Our office is in Antrim. Our starting point is you.</p></div></div></section>
    <section className="ig-container ig-section"><span className="ig-eyebrow">What matters in care</span><h2>Small details.<br /><em>Human connections.</em></h2><div className="ig-promise-grid"><div><CareIcon name="heart" /><h3>Respect for your everyday</h3><p>Your pace, privacy and familiar routines should be part of the care conversation from the beginning.</p></div><div><CareIcon name="chat" /><h3>Clear conversations</h3><p>Ask questions, talk through changes and discuss how you would like your family to be kept informed.</p></div><div><CareIcon name="home" /><h3>Practical next steps</h3><p>Understand the support available, how it could fit into life at home and what it will cost before deciding.</p></div></div></section>
    <div className="ig-container ig-enquiry-section"><CareEnquiry /></div>
  </main>;
}
