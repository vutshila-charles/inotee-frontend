import type { Metadata } from "next";
import { CareServiceDetail } from "@/components/care-service-detail";

export const metadata: Metadata = { title: "Care After Hospital in Northern Ireland | Inotee Group", description: "Explore care after hospital at home in Antrim, Belfast and Northern Ireland. Talk to Inotee Group about support, costs and local availability.", alternates: { canonical: "/services/post-hospital-recovery-care/" } };

export default function Page() { return <CareServiceDetail slug="post-hospital-recovery-care" />; }
