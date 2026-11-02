import Link from "next/link";

export default function NotFound() {
  return <main className="container-shell section-space"><h1 className="text-4xl font-semibold">Page not found</h1><p className="mt-4">The page you are looking for is unavailable.</p><Link className="mt-6 inline-flex text-brand-strong" href="/">Return home</Link></main>;
}
