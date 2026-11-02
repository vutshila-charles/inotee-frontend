import Link from "next/link";
import type { Metadata } from "next";
import { CareIcon, CareServiceCards } from "@/components/care-ui";
import { CareEnquiry } from "@/components/care-enquiry";
import { careAreas, careContact, careQuestions } from "@/lib/care-content";

export const metadata: Metadata = {
  title: "Home Care in Northern Ireland | Inotee Group",
  description: "Personal care, dementia support, companionship and care after hospital. Explore home care across Antrim, Belfast and Northern Ireland with Inotee Group.",
  alternates: { canonical: "/" },
  openGraph: { title: "Thoughtful care, in the place you call home | Inotee Group", description: "Personal home care across Northern Ireland. Talk to our team about support for you or someone you love.", images: [{ url: "/images/care-mobility.jpg", width: 1400, height: 933, alt: "A care worker offering support to an older woman" }] },
};

export default function HomePage() {
  const schema = { "@context": "https://schema.org", "@type": "Organization", name: "Inotee Group", url: "https://inoteegroup.com", telephone: "+442896005679", email: careContact.email, address: { "@type": "PostalAddress", streetAddress: "6 Castle Street", addressLocality: "Antrim", postalCode: "BT41 4JE", addressCountry: "GB" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: careQuestions.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
  return <main id="main-content" className="ig-home">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
    <section className="ig-hero ig-container" aria-labelledby="home-heading">
      <div className="ig-hero-copy">
        <span className="ig-eyebrow"><span className="ig-dot" />Home care in Northern Ireland</span>
        <h1 id="home-heading">Good care.<br />{" "}In the place<br />you call <em>home.</em></h1>
        <p>A helping hand for you. Peace of mind for your family. Personal home care, shaped around the life you want to keep living.</p>
        <div className="ig-hero-actions"><Link href="/contact/#care-inquiry" className="ig-button ig-button-primary">Let’s talk about care <CareIcon name="arrow" /></Link><a href={careContact.phoneHref} className="ig-hero-call"><CareIcon name="phone" /><span>Call our team<small>{careContact.phone}</small></span></a></div>
        <p className="ig-hero-location"><CareIcon name="pin" />Antrim, Belfast & across Northern Ireland</p>
      </div>
      <div className="ig-hero-visual">
        <div className="ig-hero-photo"><img src="/images/care-mobility.jpg" alt="A care worker offering a helping hand to an older woman at home" width={1400} height={933} fetchPriority="high" /><span className="ig-photo-corner" aria-hidden="true"><CareIcon name="leaf" /></span></div>
        <div className="ig-photo-caption"><span className="ig-caption-line" /><p>Small moments of care.<br /><strong>A meaningful difference.</strong></p></div>
      </div>
    </section>
    <div className="ig-reassurance"><div className="ig-container"><span><CareIcon name="heart" />Care centred on you</span><span><CareIcon name="home" />Support in your own home</span><span><CareIcon name="people" />A conversation with a local team</span></div></div>
    <section className="ig-section ig-container" id="our-care" aria-labelledby="services-heading">
      <div className="ig-section-heading"><div><span className="ig-eyebrow">A little support. A lot of possibility.</span><h2 id="services-heading">The right care,<br /><em>for your everyday.</em></h2></div><div><p>From help with a morning routine to more regular support, we’ll help you explore care that fits your life.</p><Link href="/services/" className="ig-text-link">Explore all our care <CareIcon name="arrow" /></Link></div></div>
      <CareServiceCards limit={6} />
      <div className="ig-help-strip"><span>Not sure what you need? That’s a good place to start a conversation.</span><Link href="/contact/#care-inquiry">Talk it through with us <CareIcon name="arrow" /></Link></div>
    </section>
    <section className="ig-story-band"><div className="ig-container ig-story">
      <div className="ig-story-photo"><img src="/images/care-companionship.jpg" alt="A care worker sharing a creative activity and conversation with an older couple" width={1400} height={990} loading="lazy" /></div>
      <div className="ig-story-copy"><span className="ig-eyebrow">More than a helping hand</span><h2>Familiar surroundings.<br /><em>A life that’s still yours.</em></h2><p>Home is your favourite chair, your own cup of tea, the rhythm of your day. Getting a little support shouldn’t mean losing the things that make you, you.</p><ul className="ig-check-list"><li><CareIcon name="check" /><div><strong>Your routines, respected</strong><span>Support built around your preferences and everyday needs.</span></div></li><li><CareIcon name="check" /><div><strong>Your family, part of the conversation</strong><span>Talk to us about how you’d like to stay informed.</span></div></li><li><CareIcon name="check" /><div><strong>A clear next step</strong><span>Understand the options before deciding what feels right.</span></div></li></ul><Link href="/about/" className="ig-text-link">Get to know Inotee <CareIcon name="arrow" /></Link></div>
    </div></section>
    <section className="ig-section ig-container" id="how-it-works" aria-labelledby="steps-heading">
      <div className="ig-section-heading"><div><span className="ig-eyebrow">One step at a time</span><h2 id="steps-heading">A simpler start<br /><em>to getting support.</em></h2></div><p>You don’t need to have all the answers. We’ll help you work through what care could look like for your family.</p></div>
      <ol className="ig-steps">{[
        ["Let’s have a conversation", "Tell us what is changing, what you’re finding difficult and what matters most."],
        ["Explore the right support", "We’ll discuss needs, local availability and the practical details of a care plan."],
        ["Take the next step together", "When the plan is agreed, we’ll talk through how support can begin and how we’ll keep in touch."],
      ].map(([title, description], index) => <li key={title}><span className="ig-step-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol>
      <div className="ig-recovery-note"><CareIcon name="home" /><div><strong>Coming home from hospital?</strong><p>Tell us about your discharge plans so we can discuss the support and timing you need.</p></div><Link href="/services/post-hospital-recovery-care/" className="ig-text-link">Care after hospital <CareIcon name="arrow" /></Link></div>
    </section>
    <section className="ig-area-band"><div className="ig-container ig-area"><div><span className="ig-eyebrow">Local care. Personal connections.</span><h2>Here for families<br /><em>across Northern Ireland.</em></h2><p>Based in Antrim, supporting families in Belfast and surrounding communities. Share your postcode and we’ll talk about care availability near you.</p><Link href="/contact/#care-inquiry" className="ig-button ig-button-primary">Ask about care in your area <CareIcon name="arrow" /></Link></div><div className="ig-area-panel"><CareIcon name="pin" /><h3>Closer to home</h3><div className="ig-area-towns">{careAreas.map(area => <span key={area}>{area}</span>)}</div><p>In a nearby area? <Link href="/contact/">Let’s talk.</Link></p></div></div></section>
    <section className="ig-section ig-container ig-faq-layout" aria-labelledby="questions-heading"><div><span className="ig-eyebrow">A little clarity</span><h2 id="questions-heading">Questions on<br /><em>your mind?</em></h2><p>Finding care is a personal decision. Here are a few things families often ask us.</p><Link href="/faq/" className="ig-text-link">More help & advice <CareIcon name="arrow" /></Link></div><div className="ig-questions">{careQuestions.map(item => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></section>
    <div className="ig-container ig-enquiry-section"><CareEnquiry /></div>
    <div className="ig-container ig-careers-note"><CareIcon name="people" /><p>Make a difference in someone’s everyday. <Link href="/careers/">Explore a career in care <CareIcon name="arrow" /></Link></p></div>
  </main>;
}
