import Link from "next/link";
import type { ReactNode } from "react";
import { careServices, careServiceDetails, carePhotos } from "@/lib/care-content";

type IconName = "arrow" | "phone" | "chat" | "heart" | "home" | "flower" | "moon" | "leaf" | "sun" | "people" | "check" | "pin" | "mail";
const paths: Record<IconName, ReactNode> = {
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  phone: <path d="M22 17v3a2 2 0 0 1-2.2 2A20 20 0 0 1 2 4.2 2 2 0 0 1 4 2h3l1.5 5-2 2a16 16 0 0 0 8.5 8.5l2-2Z" />,
  chat: <><path d="M21 11.5a8.5 8.5 0 0 1-12 7.8L3 21l1.7-6A8.5 8.5 0 1 1 21 11.5Z" /><path d="M8 11h8M8 14h5" /></>,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-1 1-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />,
  home: <><path d="m3 10 9-7 9 7v10H3Z" /><path d="M9 20v-7h6v7" /></>,
  flower: <><path d="M12 8c-7-10-13 3-4 4-10 7 3 13 4 4 7 10 13-3 4-4 10-7-3-13-4-4Z" /><circle cx="12" cy="12" r="2" /></>,
  moon: <path d="M20.8 13A9 9 0 0 1 11 3.2 9 9 0 1 0 20.8 13Z" />,
  leaf: <><path d="M20 3c-12-1-19 6-13 12 6 6 13-1 13-12Z" /><path d="m4 21 11-12" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
  people: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m3 11v-3a6 6 0 0 0-2-4" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
};
export function CareIcon({ name, className = "" }: { name: IconName; className?: string }) {
  return <svg className={`ig-icon ${className}`} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}
export function CareServiceCards({ limit }: { limit?: number }) {
  return <div className="ig-services-grid">{careServices.slice(0, limit).map(service => {
    const image = careServiceDetails[service.slug].image;
    const photo = carePhotos[image];
    return <Link key={service.slug} className="ig-service" href={`/services/${service.slug}/`}>
      <span className="ig-service-photo"><img src={`/images/${image}-card.jpg`} alt={photo.alt} width={720} height={Math.round(photo.height * 720 / photo.width)} loading="lazy" decoding="async" style={{ objectPosition: photo.position }} /></span>
      <div className="ig-service-body"><h3>{service.label}</h3><p>{service.description}</p><span className="ig-service-link">Explore care <CareIcon name="arrow" /></span></div>
    </Link>;
  })}</div>;
}
