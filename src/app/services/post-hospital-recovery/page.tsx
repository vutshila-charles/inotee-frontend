import type { Metadata } from "next";
import { CareServiceDetail } from "@/components/care-service-detail";

export const metadata: Metadata = { title: "Care After Hospital | Inotee Group", alternates: { canonical: "/services/post-hospital-recovery-care/" } };

export default function Page() { return <CareServiceDetail slug="post-hospital-recovery-care" />; }
