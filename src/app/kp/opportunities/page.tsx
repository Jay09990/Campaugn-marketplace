import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Panel } from "@/components/dashboard/panel";
import { opportunities, roleNav } from "@/data/mock";

export default function KpOpportunitiesPage() {
  return (
    <DashboardShell
      role="kp"
      title="Opportunity board"
      subtitle="A fuller browsing surface for campaign briefs that fit a KP's expertise and geography."
      nav={roleNav.kp}
    >
      <Panel eyebrow="Browse" title="Open briefs">
        <div className="grid gap-3">
          {opportunities.map((item) => (
            <div key={item.title} className="rounded-[1.6rem] border border-[var(--line)] bg-white/75 p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="display-font text-2xl tracking-[-0.04em]">{item.title}</h2>
                  <p className="mt-2 text-sm text-[rgba(98,87,72,0.95)]">{item.category} in {item.geo}</p>
                </div>
                <span className="rounded-full bg-[rgba(217,93,57,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">{item.objective}</span>
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-[rgba(98,87,72,0.95)]">
                <span>{item.budget}</span>
                <button type="button" className="rounded-full bg-[var(--ink)] px-4 py-2 text-xs font-semibold text-white">Start pitch draft</button>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </DashboardShell>
  );
}
