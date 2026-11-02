# Inotee website facelift — 2 November 2026

## Comparable UK care websites reviewed

- [Helping Hands](https://www.helpinghandshomecare.co.uk/): prominent telephone and callback routes, service categories, and a short explanation of how to arrange care.
- [Home Instead](https://www.homeinstead.co.uk/): a concise opening message, prominent care enquiries, human photography, and accessible service choices.
- [Connected Health](https://connected-health.co.uk/): Northern Ireland positioning, clear separation between homecare enquiries and career enquiries, and local office information.

These are design references, not evidence that any particular layout will increase Inotee's conversion rate. Competitor claims, testimonials, statistics, branding and images were not copied.

## Problems addressed

The previous mobile headline occupied most of the initial screen at 390px, with the photograph below the fold. Long, repetitive sections mixed client acquisition with recruitment. The original enquiry form asked about many details before the first conversation. Header and footer controls were small, and the main mobile contact routes were not persistent.

## Changes

- A shorter, family-focused opening message, natural photography and a consistent warm green/cream visual system.
- Shared responsive header, mobile menu, footer and fixed mobile Call / WhatsApp / Enquire actions.
- Rebuilt homepage, About page, care service index, eight service detail pages and contact page. The existing alternative post-hospital service URL remains available.
- A single reusable care enquiry component with four required contact/location fields, an optional service choice and an optional message. Existing public inquiry API mappings are retained.
- Clear service choices, three practical next steps, local coverage and frequently asked questions.
- Careers and referrals remain available, with less competition against the main care enquiry path.
- Clearer pending/error feedback. An invalid non-JSON API response can no longer produce a misleading success message.
- Corrected leftover Tavat company-name text in recovered public pages. The staffing/legal copy itself remains recovered content and needs a separate business review.
- Responsive typography for retained pages, labelled controls, native validation, visible keyboard focus, a skip link, reduced-motion support and safe-area spacing below mobile contact actions.
- Updated page metadata and structured data containing the current business address and visible FAQ text.

The design uses the existing licensed real photographs; no AI images or invented reviews, ratings, regulatory credentials or response-time promises were added.

## Validation and limits

The static production build and TypeScript checks pass. Browser checks cover 320px, 390px, 768px and 1440px widths, mobile navigation, care service navigation, the enquiry route, blank-form validation and contact target sizes. No live test enquiries were sent. Backend acceptance and enquiry delivery have not been established by the visual checks.

The site still exports to `out/` for SCP deployment. No production upload is part of this facelift.

## What to measure next

Track actual care enquiries and qualified telephone/WhatsApp contacts before and after deployment. With appropriate consent, obtain real client feedback and real team photographs; verified, attributable business evidence would strengthen the site beyond visual design. Only publish registration or inspection claims once the correct Inotee listing has been verified.
