import { CreateCampaignWizard } from "@/components/forms/create-campaign-wizard";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { roleNav } from "@/data/mock";

export default function OwnerCreateCampaignPage() {
  return (
    <DashboardShell
      role="owner"
      title="Create campaign"
      subtitle="A frontend-only multi-step brief builder that makes the product feel real in demos and pitches."
      nav={roleNav.owner}
    >
      <CreateCampaignWizard />
    </DashboardShell>
  );
}
