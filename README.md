# Inotee Group website

Recovered static website export for https://inoteegroup.com.

## Backup status

The recovered homepage matched the live homepage exactly when checked on 2 November 2026, before the contact updates. This comparison does not establish that every backed-up page matches production.

This backup contains exported HTML, Next.js page data and compiled JavaScript, images, fonts, and Apache routing configuration. It does not contain the original React/Next.js source project or a usable package.json. There is no source build command; preserve the `_next` assets and page-data files when deploying.

## Contact details

- Address: 6 Castle Street, Antrim, BT41 4JE
- WhatsApp: 07592 401175
- WhatsApp link: https://wa.me/447592401175
- Existing office landline: 028 9600 5679

The personal mobile number was replaced in both WhatsApp and emergency contact settings. Updated JavaScript chunks have new filenames to avoid cached contact details.

## Preview and deployment

Run `python3 -m http.server 8000` from this directory and open http://localhost:8000. Deploy the website files to the existing static hosting document root, preserving `.htaccess`. Do not upload `.git` or this README.

Pushing to GitHub does not by itself confirm that the live host has deployed the changes. The export also contains older pages with Tavat branding; review those separately before treating this as a fully recovered source project.
