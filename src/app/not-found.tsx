import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-px flex min-h-[60vh] flex-col items-center justify-center gap-4 py-24 text-center">
      <p className="font-mono text-micro uppercase tracking-eyebrow text-faint">404</p>
      <h1 className="font-sans text-title font-semibold text-ink">
        This page doesn&apos;t exist.
      </h1>
      <p className="max-w-md text-muted">
        The page you&apos;re looking for moved or was never here.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-small font-medium text-white transition-colors hover:bg-accent"
      >
        Back home
      </Link>
    </div>
  );
}
