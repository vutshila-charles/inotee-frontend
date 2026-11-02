import Link from "next/link";
import { CareEnquiry } from "@/components/care-enquiry";
import { CareIcon } from "@/components/care-ui";
import { careContact, carePhotos, careServiceDetails, careServices, type CareServiceSlug } from "@/lib/care-content";

export function CareServiceDetail({ slug }: { slug: CareServiceSlug }) {
  const service = careServices.find(item => item.slug === slug)!;
  const detail = careServiceDetails[slug];
  const photo = carePhotos[detail.image];
  return <main id="main-content" className="ig-care-page">
    <div className="ig-container ig-breadcrumb"><Link href="/services/">Our care</Link><span aria-hidden="true">/</span><span>{service.label}</span></div>
    <section className="ig-container ig-detail-hero">
      <div><span className="ig-eyebrow">{service.label} · Northern Ireland</span><h1>{detail.headline}</h1><p>{detail.intro}</p><div className="ig-intro-actions"><Link href="#care-inquiry" className="ig-button ig-button-primary">Talk about {service.label.toLowerCase()} <CareIcon name="arrow" /></Link><a className="ig-text-link" href={careContact.phoneHref}><CareIcon name="phone" />{careContact.phone}</a></div></div>
      <div className="ig-detail-photo"><img src={`/images/${detail.image}.jpg`} srcSet={`/images/${detail.image}-card.jpg 720w, /images/${detail.image}.jpg 1400w`} sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1296px) 45vw, 568px" alt={photo.alt} width={photo.width} height={photo.height} style={{ objectPosition: photo.position }} fetchPriority="high" /></div>
    </section>
    <section className="ig-container ig-section ig-detail-support"><div><span className="ig-eyebrow">A plan that fits your life</span><h2>What support<br /><em>could look like.</em></h2><p>{detail.note}</p><p>Every person’s needs are different. We’ll discuss the support, timing, costs and availability with you before care is arranged.</p></div><ul className="ig-detail-list">{detail.support.map(item => <li key={item}><CareIcon name="check" /><span>{item}</span></li>)}</ul></section>
    <div className="ig-container ig-enquiry-section"><CareEnquiry initialService={slug} /></div>
    <div className="ig-container ig-related"><span className="ig-eyebrow">Explore your options</span><h2>A different kind of support?</h2><div>{careServices.filter(item => item.slug !== slug).slice(0, 3).map(item => <Link key={item.slug} href={`/services/${item.slug}/`}>{item.label}<CareIcon name="arrow" /></Link>)}</div><Link className="ig-text-link" href="/services/">View all care services <CareIcon name="arrow" /></Link></div>
  </main>;
}
