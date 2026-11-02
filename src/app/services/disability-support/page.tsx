import type { Metadata } from "next";
import { CareServiceDetail } from "@/components/care-service-detail";

export const metadata: Metadata = { title: "Disability Support in Northern Ireland | Inotee Group", description: "Explore disability support at home in Antrim, Belfast and Northern Ireland. Talk to Inotee Group about support, costs and local availability.", alternates: { canonical: "/services/disability-support/" } };

export default function Page() { return <CareServiceDetail slug="disability-support" />; }
