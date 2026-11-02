import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-shell";
import "./globals.css";
import "./facelift.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://inoteegroup.com"),
  title: "Inotee Group | Home Care in Northern Ireland",
  description: "Personal care, dementia support, companionship and post-hospital recovery across Northern Ireland.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="__variable_73ee6c __variable_eb41fe">
        <div className="relative min-h-screen overflow-x-clip">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
