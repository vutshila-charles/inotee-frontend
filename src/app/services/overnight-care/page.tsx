import type { Metadata } from "next";
import { CareServiceDetail } from "@/components/care-service-detail";

export const metadata: Metadata = { title: "Overnight Care in Northern Ireland | Inotee Group", description: "Explore overnight care at home in Antrim, Belfast and Northern Ireland. Talk to Inotee Group about support, costs and local availability.", alternates: { canonical: "/services/overnight-care/" } };

export default function Page() { return <CareServiceDetail slug="overnight-care" />; }
