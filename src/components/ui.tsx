import Link from "next/link";
import { ArrowUpRight } from "./icons";
import { isTodo } from "@/data/config";

export function Eyebrow({
  children,
  className = "",
  dot = true,
}: {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[0.7rem] font-medium uppercase tracking-eyebrow text-muted ${className}`}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : ""} ${className}`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="max-w-3xl text-balance font-sans text-title font-semibold text-ink">
        {title}
      </h2>
      {copy ? (
        <p className="max-w-2xl text-balance text-lead text-muted">{copy}</p>
      ) : null}
    </div>
  );
}

export function Pill({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 text-small text-muted ${className}`}
    >
      {children}
    </span>
  );
}

type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "accent" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
  withArrow?: boolean;
};

export function ActionLink({
  href,
  children,
  variant = "primary",
  external,
  className = "",
  withArrow,
}: ActionLinkProps) {
  const todo = isTodo(href);
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-small font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

  const variants: Record<string, string> = {
    primary:
      "bg-ink text-white hover:bg-accent hover:shadow-lift",
    accent:
      "bg-accent text-white hover:bg-accent-deep hover:shadow-lift",
    secondary:
      "border border-line-strong bg-surface text-ink hover:border-ink hover:shadow-soft",
    ghost: "text-ink hover:text-accent px-2",
  };

  const showArrow = withArrow ?? variant === "ghost";

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (todo) {
    return (
      <span
        className={`${base} ${variants[variant]} ${className} cursor-not-allowed opacity-60`}
        aria-disabled="true"
        title="Coming soon"
      >
        {content}
      </span>
    );
  }

  const isExternal = external ?? /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {content}
    </Link>
  );
}
