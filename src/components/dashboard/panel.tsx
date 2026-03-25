import { ReactNode } from "react";

type PanelProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Panel({ eyebrow, title, children, className = "" }: PanelProps) {
  return (
    <section className={`card-border bg-surface rounded-[1.8rem] p-5 md:p-6 ${className}`}>
      <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">{eyebrow}</div>
      <h2 className="display-font mt-2 text-2xl tracking-[-0.04em]">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
