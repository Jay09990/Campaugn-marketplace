import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Panel } from "@/components/dashboard/panel";
import { invites, roleNav } from "@/data/mock";

export default function InfluencerInvitesPage() {
  return (
    <DashboardShell
      role="influencer"
      title="Campaign invites"
      subtitle="A fuller invite review screen showing campaign summary, payout, and acceptance intent."
      nav={roleNav.influencer}
    >
      <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <Panel eyebrow="Invites" title="Pending decisions">
          <div className="grid gap-3">
            {invites.map((item) => (
              <div key={item.campaign} className="rounded-[1.6rem] border border-[var(--line)] bg-white/75 p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="display-font text-2xl tracking-[-0.04em]">{item.campaign}</h2>
                    <p className="mt-2 text-sm text-[rgba(98,87,72,0.95)]">KP: {item.kp}</p>
                  </div>
                  <span className="rounded-full bg-[rgba(217,93,57,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">Due {item.due}</span>
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-[var(--accent-strong)]">{item.payout}</span>
                  <div className="flex gap-2">
                    <button type="button" className="rounded-full border border-[var(--line)] px-4 py-2 text-xs font-semibold">Decline</button>
                    <button type="button" className="rounded-full bg-[var(--ink)] px-4 py-2 text-xs font-semibold text-white">Accept</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel eyebrow="Earnings" title="How payout visibility is presented">
          <div className="grid gap-3 text-sm text-[rgba(98,87,72,0.95)]">
            {[
              "Accepted campaign payout visible before work starts",
              "Status changes from queued to released after sign-off",
              "History builds trust for future invitations"
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-[var(--line)] bg-white/75 px-4 py-3">{item}</div>
            ))}
          </div>
        </Panel>
      </div>
    </DashboardShell>
  );
}
