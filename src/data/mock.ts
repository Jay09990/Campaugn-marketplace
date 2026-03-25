export type NavItem = {
  label: string;
  href: string;
};

export const publicNav: NavItem[] = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "For Owners", href: "/for-owners" },
  { label: "For KPs", href: "/for-kps" },
  { label: "For Influencers", href: "/for-influencers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Trust", href: "/trust" },
  { label: "Contact", href: "/contact" }
];

export const roleNav: Record<string, NavItem[]> = {
  owner: [
    { label: "Dashboard", href: "/owner" },
    { label: "Campaigns", href: "/owner/campaigns" },
    { label: "Create Campaign", href: "/owner/create-campaign" },
    { label: "Messages", href: "/workspace" },
    { label: "Payments", href: "/owner/campaigns#payments" },
    { label: "Ratings", href: "/owner/campaigns#ratings" }
  ],
  kp: [
    { label: "Dashboard", href: "/kp" },
    { label: "Opportunities", href: "/kp/opportunities" },
    { label: "My Pitches", href: "/kp/pitches" },
    { label: "Active Campaigns", href: "/workspace" },
    { label: "Team Management", href: "/workspace#team" },
    { label: "Earnings", href: "/kp/pitches#earnings" }
  ],
  influencer: [
    { label: "Dashboard", href: "/influencer" },
    { label: "Campaign Invites", href: "/influencer/invites" },
    { label: "Active Work", href: "/workspace" },
    { label: "Deliverables", href: "/workspace#deliverables" },
    { label: "Messages", href: "/workspace#chat" },
    { label: "Earnings", href: "/influencer/invites#earnings" }
  ],
  admin: [
    { label: "Dashboard", href: "/admin" },
    { label: "Users", href: "/admin#users" },
    { label: "Campaigns", href: "/admin#campaigns" },
    { label: "Payments", href: "/admin#payments" },
    { label: "Payouts", href: "/admin#payouts" },
    { label: "Disputes", href: "/admin/disputes" },
    { label: "Reports", href: "/admin#reports" }
  ]
};

export const landingStats = [
  { label: "Campaigns in motion", value: "24", note: "Across food, beauty, coaching, and local retail" },
  { label: "Average team size", value: "4", note: "One KP coordinating focused creator squads" },
  { label: "Owner decision time", value: "36h", note: "From brief publish to pitch selection" }
];

export const ownerMetrics = [
  { label: "Active Campaigns", value: "03", tone: "warm" },
  { label: "Pitches Awaiting Review", value: "07", tone: "olive" },
  { label: "Payments Pending", value: "01", tone: "neutral" },
  { label: "Completed This Quarter", value: "12", tone: "warm" }
];

export const kpMetrics = [
  { label: "Matching Opportunities", value: "16", tone: "warm" },
  { label: "Pitches Shortlisted", value: "03", tone: "olive" },
  { label: "Active Campaigns", value: "04", tone: "neutral" },
  { label: "Pending Payouts", value: "INR 48k", tone: "warm" }
];

export const influencerMetrics = [
  { label: "Pending Invites", value: "05", tone: "warm" },
  { label: "Live Deliverables", value: "08", tone: "olive" },
  { label: "Revision Requests", value: "02", tone: "neutral" },
  { label: "This Month Earned", value: "INR 21k", tone: "warm" }
];

export const adminMetrics = [
  { label: "Active Campaigns", value: "24", tone: "warm" },
  { label: "Pending Approvals", value: "11", tone: "olive" },
  { label: "Payout Queue", value: "INR 1.82L", tone: "neutral" },
  { label: "Open Disputes", value: "02", tone: "warm" }
];

export const workspaceTimeline = [
  { title: "Pitch selected", detail: "Cafe Mysa selected Neha's strategy for a weekend brunch launch." },
  { title: "Team locked", detail: "3 Ahmedabad food creators accepted their scoped deliverables." },
  { title: "Content review", detail: "Two reel drafts approved, one creator requested revisions." },
  { title: "Campaign live", detail: "Launch wave scheduled across Instagram and WhatsApp promo handoff." }
];

export const opportunities = [
  {
    title: "Ahmedabad cafe relaunch",
    category: "Food and Beverage",
    geo: "Ahmedabad",
    budget: "INR 35k - 55k",
    objective: "Footfall + redemptions"
  },
  {
    title: "Salon summer offer push",
    category: "Beauty",
    geo: "Surat",
    budget: "INR 20k - 35k",
    objective: "DM inquiries"
  },
  {
    title: "Coaching center admissions sprint",
    category: "Education",
    geo: "Rajkot",
    budget: "INR 40k - 70k",
    objective: "Lead forms"
  }
];

export const invites = [
  {
    campaign: "Cafe Mysa brunch drop",
    kp: "Neha Shah",
    payout: "INR 6,500",
    due: "28 Mar"
  },
  {
    campaign: "Glowbar Ramadan offers",
    kp: "Aiman Khan",
    payout: "INR 4,200",
    due: "30 Mar"
  }
];

export const campaignCards = [
  {
    title: "Cafe Mysa brunch relaunch",
    status: "Pitch review",
    metric: "Redemption code visits",
    budget: "INR 48k",
    nextStep: "Owner reviewing 3 shortlisted pitches"
  },
  {
    title: "Glowbar festive offer sprint",
    status: "Active",
    metric: "DM inquiries",
    budget: "INR 31k",
    nextStep: "2 of 4 deliverables approved"
  },
  {
    title: "EduSpark admissions boost",
    status: "Completed",
    metric: "Lead forms",
    budget: "INR 63k",
    nextStep: "Ratings and payout release pending"
  }
];

export const pricingPlans = [
  {
    name: "Launch",
    price: "Per campaign fee",
    summary: "Best for early SMB owners running focused local campaigns.",
    bullets: ["Brief intake support", "Pitch comparison", "Campaign workspace", "Manual payout ops"]
  },
  {
    name: "Growth",
    price: "Managed service fee",
    summary: "For businesses that want stronger KPI definition and hands-on campaign support.",
    bullets: ["Priority KP matching", "Ops oversight", "Performance recap", "Priority support"]
  }
];

export const trustPillars = [
  {
    title: "Protected workflow",
    text: "All campaign-critical actions happen on-platform: briefing, selection, team lock, delivery, and closure."
  },
  {
    title: "Role-specific ratings",
    text: "Owners, KPs, and influencers are all rated on behavior that matters to their role, not vanity scores."
  },
  {
    title: "Visible payout status",
    text: "The platform shows payment state, payout queue, and campaign closure status to reduce ambiguity."
  }
];

export const faqItems = [
  {
    question: "What makes this different from an influencer marketplace?",
    answer: "The KP role turns campaign strategy and coordination into a structured product layer instead of leaving brands to manage creators themselves."
  },
  {
    question: "Can this work without a backend yet?",
    answer: "Yes. This frontend is designed as a functional clickable prototype for pitching, demos, and user testing before live transactions exist."
  },
  {
    question: "Why start with local categories?",
    answer: "Local campaigns are easier to measure, repeat, and explain. They also make the KP role feel immediately useful."
  }
];

export const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Trust", href: "/trust" }
    ]
  },
  {
    title: "Roles",
    links: [
      { label: "For Owners", href: "/for-owners" },
      { label: "For KPs", href: "/for-kps" },
      { label: "For Influencers", href: "/for-influencers" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Privacy", href: "/legal/privacy" }
    ]
  }
];
