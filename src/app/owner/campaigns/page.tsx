import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Panel } from "@/components/dashboard/panel";
import { campaignCards, roleNav } from "@/data/mock";

export default function OwnerCampaignsPage() {
  return (
    <DashboardShell
      role="owner"
      title="Owner campaigns"
      subtitle="A campaign-by-campaign view for pitch review, delivery monitoring, payment state, and rating closure."
      nav={roleNav.owner}
    >
      <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <Panel eyebrow="Campaign list" title="Current portfolio">
          <div className="grid gap-3">
            {campaignCards.map((campaign) => (
              <div key={campaign.title} className="rounded-[1.6rem] border border-[var(--line)] bg-white/75 p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="display-font text-2xl tracking-[-0.04em]">{campaign.title}</h2>
                    <p className="mt-2 text-sm text-[rgba(98,87,72,0.95)]">Metric: {campaign.metric}</p>
                  </div>
                  <span className="rounded-full bg-[rgba(217,93,57,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">{campaign.status}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-[rgba(98,87,72,0.95)]">
                  <span>Budget {campaign.budget}</span>
                  <span>{campaign.nextStep}</span>
                </div>
              </div>
            ))}
          </div>
        </Panel>
        <div className="grid gap-4">
          <Panel eyebrow="Payments" title="Payment and payout checkpoints">
            <div className="grid gap-3 text-sm text-[rgba(98,87,72,0.95)]">
              {[
                "Owner payment captured before campaign goes live",
                "Payout queue shown after sign-off",
                "Receipts and status visible in one panel"
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-[var(--line)] bg-white/75 px-4 py-3">{item}</div>
              ))}
            </div>
          </Panel>
          <Panel eyebrow="Ratings" title="Close the loop">
            <div className="grid gap-3 text-sm text-[rgba(98,87,72,0.95)]">
              {[
                "Rate KP on strategy and coordination",
                "See completed campaign feedback",
                "Maintain trust records for future matching"
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[var(--ink)] px-4 py-3 text-white/85">{item}</div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </DashboardShell>
  );
}
