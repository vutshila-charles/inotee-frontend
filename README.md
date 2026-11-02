# Inotee Group frontend

Restored Next.js App Router application with React and TypeScript for https://inoteegroup.com.

## Run locally

Use Node.js 20.9 or later (Node 24 is installed on the recovery machine).

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Dependencies are installed locally in `node_modules`; another developer recreates them with `npm ci` using the committed lockfile.

```bash
npm run typecheck
npm run build
npm start
```

`npm start` runs a previously built production application. Deploy this project to a host that supports Next.js/Node.js. The old Apache static-export `.htaccess` is in the recovery copy and does not run this application.

## Project structure

- `src/app/`: editable public pages, root layout, metadata, and recovered CSS.
- `src/components/`: shared header/footer, theme toggle, mobile navigation, public forms, and recruitment application wizard.
- `src/lib/application.ts`: recovered application data schema and API payload mapping.
- `public/`: website images, locally hosted fonts, regulator logos, robots.txt, and sitemap.xml.
- `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`: application dependencies and configuration; commit these to Git.
- `recovered-export/`: original static backup, retained locally and ignored by Git. Its original version is also available in the repository's initial commit `78edd8c`.

`node_modules/`, `.next/`, `out/`, build caches, logs, `.env` files, and the local recovery copy are excluded by `.gitignore`. Ignoring files does not remove them from old Git commits.

## Contact details and photographs

Address: **6 Castle Street, Antrim, BT41 4JE**. WhatsApp: **07592 401175**, linked as https://wa.me/447592401175. The existing office landline is **028 9600 5679**.

The homepage and About page use real Age Cymru photographs. See [photo credits](public/images/PHOTO-CREDITS.md).

## API and recovery status

The original source project was missing. Public pages were reconstructed from exported HTML into TSX, and the original generated CSS was retained to preserve the design. Future styling can be added to `src/app/globals.css`; this recovery does not include the original Tailwind source configuration.

The nine-step recruitment form and its payload mapping were reconstructed from the compiled application bundle. Form progress is kept in memory for the current page visit. It is not saved in local storage. The previous `/join-our-team/` route now redirects to `/careers/apply/`.

The external API is not part of this repository. The recovered API base is `https://api.inoteegroup.com/api`. To override it, copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_INOTEE_API_URL`. This value is embedded at build time. Form endpoints follow the mappings found in the backup: `/v1/public/inquiries`, `/v1/public/newsletter-subscriptions`, `/referrals`, and `/v1/public/recruitment/applications`, relative to that API base.

Production submissions and backend acceptance have not been verified. No test inquiries or job applications were sent to the live API. Existing admin screens and the separate consulting application remain in `recovered-export/`; their authenticated logic was not reconstructed. Some older public service and legal pages still contain the backup's Tavat branding and require a content review before deployment.

The recovered homepage matched the live homepage exactly on 2 November 2026 before the contact and photo edits. This does not establish that all backed-up pages matched production. Local changes have not been deployed to the live host.

Git remote: https://github.com/vutshila-charles/inotee-frontend.git. The earlier push failed because terminal GitHub authentication was not configured.
