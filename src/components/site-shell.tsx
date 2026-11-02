import Link from "next/link";
import { MobileNavigation } from "@/components/mobile-navigation";
import { CareIcon } from "@/components/care-ui";
import { careContact } from "@/lib/care-content";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return <Link href="/" className={`ig-brand ${inverse ? "ig-brand-inverse" : ""}`} aria-label="Inotee Group home">
    <span className="ig-brand-mark" aria-hidden="true">i<span /></span>
    <span className="ig-brand-words">Inotee<span>GROUP · CARE AT HOME</span></span>
  </Link>;
}
export function SiteHeader() {
  return <>
    <a className="ig-skip-link" href="#main-content">Skip to content</a>
    <div className="ig-topline"><div className="ig-container"><span>Here for families across Northern Ireland</span><Link href="/careers/">Looking for a role in care? <CareIcon name="arrow" /></Link></div></div>
    <header className="ig-header">
      <div className="ig-container ig-header-inner">
        <Brand />
        <nav className="ig-desktop-nav" aria-label="Main navigation">
          <Link href="/services/">Our care</Link><Link href="/about/">Why Inotee</Link><Link href="/#how-it-works">Getting started</Link><Link href="/faq/">Help & advice</Link>
        </nav>
        <div className="ig-header-actions"><a href={careContact.phoneHref} className="ig-header-phone"><CareIcon name="phone" /><span>{careContact.phone}</span></a><Link href="/contact/#care-inquiry" className="ig-button ig-button-primary">Enquire about care <CareIcon name="arrow" /></Link></div>
        <MobileNavigation />
      </div>
    </header>
  </>;
}
export function SiteFooter() {
  return <>
    <footer className="ig-footer">
      <div className="ig-container">
        <div className="ig-footer-top"><div><Brand inverse /><p>Thoughtful care.<br />Familiar surroundings.<br />A little more peace of mind.</p></div>
          <div><h2>Let’s talk</h2><a className="ig-footer-phone" href={careContact.phoneHref}>{careContact.phone}</a><a href={`mailto:${careContact.email}`}>{careContact.email}</a><a href={careContact.whatsapp} target="_blank" rel="noreferrer">WhatsApp: {careContact.whatsappDisplay}</a><address>{careContact.address}</address></div>
          <div><h2>How we can help</h2><Link href="/services/">Explore our care</Link><Link href="/about/">About Inotee</Link><Link href="/contact/">Care enquiries</Link><Link href="/refer/">Make a referral</Link><Link href="/careers/">Work with us</Link><Link href="/faq/">Your questions answered</Link></div>
        </div>
        <div className="ig-footer-bottom"><p>© {new Date().getFullYear()} Inotee Group</p><div><Link href="/privacy-policy/">Privacy policy</Link><Link href="/cookie-policy/">Cookies</Link><Link href="/terms/">Terms</Link></div><span>Care across Northern Ireland</span></div>
      </div>
    </footer>
    <nav className="ig-mobile-contact" aria-label="Quick contact">
      <a href={careContact.phoneHref}><CareIcon name="phone" /><span>Call us</span></a>
      <a href={careContact.whatsapp} target="_blank" rel="noreferrer"><CareIcon name="chat" /><span>WhatsApp</span></a>
      <Link href="/contact/#care-inquiry"><CareIcon name="arrow" /><span>Enquire</span></Link>
    </nav>
  </>;
}
