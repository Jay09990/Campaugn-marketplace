import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Panel } from "@/components/dashboard/panel";
import { roleNav } from "@/data/mock";

export default function KpPitchesPage() {
  return (
    <DashboardShell
      role="kp"
      title="Pitch pipeline"
      subtitle="Track draft, submitted, shortlisted, and won pitches in one place for the product walkthrough."
      nav={roleNav.kp}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["Draft", "02"],
          ["Submitted", "05"],
          ["Shortlisted", "03"],
          ["Won", "01"]
        ].map(([label, value]) => (
          <Panel key={label} eyebrow="Stage" title={label}>
            <div className="display-font text-5xl tracking-[-0.05em]">{value}</div>
          </Panel>
        ))}
      </div>
      <Panel eyebrow="Earnings" title="Pitching performance summary">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            "Acceptance rate 28 percent",
            "Average owner response 32 hours",
            "Pending payout INR 48k"
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-[var(--line)] bg-white/75 px-4 py-3 text-sm">{item}</div>
          ))}
        </div>
      </Panel>
    </DashboardShell>
  );
}
