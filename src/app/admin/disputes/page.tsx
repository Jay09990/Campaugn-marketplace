import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Panel } from "@/components/dashboard/panel";
import { roleNav } from "@/data/mock";

export default function AdminDisputesPage() {
  return (
    <DashboardShell
      role="admin"
      title="Dispute center"
      subtitle="A dedicated pitchable screen for platform intervention, evidence review, and resolution tracking."
      nav={roleNav.admin}
    >
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <Panel eyebrow="Queue" title="Open disputes">
          <div className="grid gap-3">
            {[
              "Cafe Mysa brunch relaunch - owner requested one final caption revision before payout release",
              "Glowbar festive offer sprint - influencer missed deadline, KP requested partial payout adjustment"
            ].map((item) => (
              <div key={item} className="rounded-[1.6rem] border border-[var(--line)] bg-white/75 p-5 text-sm leading-6 text-[rgba(98,87,72,0.95)]">{item}</div>
            ))}
          </div>
        </Panel>
        <Panel eyebrow="Resolution flow" title="How admin intervenes">
          <div className="grid gap-3 text-sm text-[rgba(98,87,72,0.95)]">
            {[
              "Review campaign events and chat log",
              "Check deliverable approvals and payment state",
              "Add internal notes and proposed resolution",
              "Release or hold payout based on evidence"
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-[var(--line)] bg-white/75 px-4 py-3">{item}</div>
            ))}
          </div>
        </Panel>
      </div>
    </DashboardShell>
  );
}
