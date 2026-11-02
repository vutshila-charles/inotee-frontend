import type { Metadata } from "next";
import { CareServiceDetail } from "@/components/care-service-detail";

export const metadata: Metadata = { title: "Dementia Care in Northern Ireland | Inotee Group", description: "Explore dementia care at home in Antrim, Belfast and Northern Ireland. Talk to Inotee Group about support, costs and local availability.", alternates: { canonical: "/services/dementia-care/" } };

export default function Page() { return <CareServiceDetail slug="dementia-care" />; }
