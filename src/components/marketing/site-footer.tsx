import Link from "next/link";
import { footerColumns } from "@/data/mock";

export function SiteFooter() {
  return (
    <footer className="card-border bg-surface rounded-[2rem] px-6 py-8">
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <div className="display-font text-2xl tracking-[-0.04em]">Campaign Marketplace</div>
          <p className="mt-3 max-w-md text-sm leading-6 text-[rgba(98,87,72,0.95)]">
            A three-sided campaign orchestration platform where owners buy outcomes, KPs run strategy, and influencers execute scoped work.
          </p>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">{column.title}</div>
            <div className="mt-4 grid gap-3 text-sm text-[rgba(98,87,72,0.95)]">
              {column.links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
