"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { publicNav } from "@/data/mock";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="card-border bg-surface sticky top-4 z-20 rounded-[2rem] px-5 py-4 backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Link href="/" className="display-font text-2xl tracking-[-0.05em]">
            Campaign Marketplace
          </Link>
          <div className="mt-1 text-xs uppercase tracking-[0.24em] text-[var(--accent-strong)]">
            Pitch-ready frontend prototype
          </div>
        </div>
        <nav className="flex flex-wrap gap-2 text-sm text-[rgba(98,87,72,0.95)]">
          {publicNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 transition ${
                  active ? "bg-[var(--ink)] text-white" : "hover:bg-white/70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-wrap gap-2">
          <Link href="/login" className="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-semibold">
            Log in
          </Link>
          <Link href="/signup" className="rounded-full bg-[var(--accent-strong)] px-4 py-2 text-sm font-semibold text-white">
            Request access
          </Link>
        </div>
      </div>
    </header>
  );
}
