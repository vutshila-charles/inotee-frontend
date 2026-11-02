"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CareIcon } from "@/components/care-ui";
import { careContact } from "@/lib/care-content";

const items = [["Our care services", "/services/"], ["Why choose Inotee", "/about/"], ["How to get started", "/#how-it-works"], ["Help & advice", "/faq/"], ["Get in touch", "/contact/"]];
export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); button.current?.focus(); }
    }
    if (open) document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  return <div className="ig-mobile-nav">
    <button ref={button} type="button" className="ig-menu-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
      <span>{open ? "Close" : "Menu"}</span><span className={`ig-menu-lines ${open ? "is-open" : ""}`} aria-hidden="true"><i /><i /></span>
    </button>
    {open && <nav className="ig-menu-panel" id="mobile-menu" aria-label="Mobile navigation">
      <span className="ig-eyebrow">Care, with you in mind</span>
      {items.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}<CareIcon name="arrow" /></Link>)}
      <div className="ig-menu-secondary"><Link href="/refer/" onClick={() => setOpen(false)}>Make a referral</Link><Link href="/careers/" onClick={() => setOpen(false)}>Care careers</Link></div>
      <a className="ig-menu-call" href={careContact.phoneHref}><CareIcon name="phone" />{careContact.phone}</a>
    </nav>}
  </div>;
}
