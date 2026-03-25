# Campaign Marketplace Platform - UI Structure and Flow

## 1. UI Goal

The UI should support a managed three-sided marketplace where:

- business owners can create and monitor campaigns with low effort
- Knowledge Persons (KPs) can pitch, assemble teams, and run campaign execution
- influencers can accept work, submit deliverables, and track payouts
- admins can supervise trust, payments, disputes, and marketplace quality

The product should feel less like a social app and more like a structured campaign operations platform.

The UI should optimize for:

- clarity of workflow
- low coordination overhead
- trust and visibility
- easy action-taking
- role-based simplicity

## 2. Product Areas

The full UI can be divided into these areas:

- public marketing site
- authentication and onboarding
- owner app
- KP app
- influencer app
- shared campaign workspace
- admin and operations panel
- notification and system flows

## 3. Global UI Principles

### 3.1 Core layout pattern

For the application, use a dashboard layout:

- left sidebar for primary navigation
- top bar for search, notifications, profile menu
- central content area for page-specific work
- right-side contextual panel on selected pages where useful

On mobile:

- convert sidebar to bottom nav or drawer
- keep campaign actions prominent
- simplify dense dashboards into stacked cards

### 3.2 Shared UI components

Common reusable components:

- top navigation bar
- role-aware sidebar
- notification center
- campaign status badge
- user profile card
- metric card
- activity timeline
- chat panel
- task list
- deliverable card
- rating modal
- payment status card
- confirmation modal
- dispute warning banner
- empty state blocks

### 3.3 Shared navigation groups

Across logged-in roles, common nav ideas:

- Dashboard
- Campaigns
- Messages
- Notifications
- Payments
- Profile
- Settings

Admin gets a separate structure.

## 4. Public Website UI

These pages are for discovery and trust building before signup.

### 4.1 Landing page

Purpose:

- explain platform model
- establish trust
- drive signup for each role

Sections:

- hero section with value proposition
- "How it works" for Owners, KPs, Influencers
- why this is different from agencies and influencer marketplaces
- campaign lifecycle explainer
- trust and payment protection section
- testimonials or case study section
- CTA blocks for each role
- FAQ

### 4.2 Role explainer pages

Separate pages:

- For Business Owners
- For Knowledge Persons
- For Influencers

Each page should include:

- role definition
- workflow summary
- earning/value model
- example use case
- FAQ
- signup CTA

### 4.3 Pricing / business model page

Content:

- how campaign pricing works
- platform fee model
- payment protection summary
- what is included in managed campaign workflow

### 4.4 About / trust page

Content:

- mission
- safety and trust principles
- quality control process
- support and dispute handling overview

### 4.5 Contact / support page

### 4.6 Legal pages

- Terms of Service
- Privacy Policy
- Payment and Cancellation Policy

## 5. Authentication and Onboarding UI

## 5.1 Auth pages

- Sign up
- Log in
- Forgot password
- Verify email / verify phone
- Invite acceptance screen

### Sign up page structure

Fields:

- name
- email
- phone
- password
- role selection

Role options:

- Owner
- Knowledge Person
- Influencer

### 5.2 Role selection / role confirmation

If multi-role support exists later, V1 should still ask:

- primary role
- maybe secondary role later

### 5.3 Onboarding wizard

After signup, route users into role-specific onboarding.

#### Owner onboarding

Steps:

1. business info
2. category and location
3. campaign goals
4. contact and billing setup
5. finish and go to dashboard

#### KP onboarding

Steps:

1. profile basics
2. expertise categories
3. regions/languages
4. experience/portfolio
5. payment details
6. finish and go to dashboard

#### Influencer onboarding

Steps:

1. profile basics
2. niche and city
3. social handles
4. audience details
5. payment details
6. finish and go to dashboard

### 5.4 Pending review screen

For early curated marketplace mode:

- KP account may show "Under Review"
- Influencer account may show "Pending Approval"

Screen content:

- current status
- what happens next
- expected response timeline

## 6. Owner App UI

## 6.1 Owner navigation

- Dashboard
- Campaigns
- Create Campaign
- Messages
- Payments
- Ratings
- Profile
- Settings

## 6.2 Owner Dashboard

Purpose:

- quick operational overview

Sections:

- active campaigns summary cards
- pending pitch reviews
- upcoming deadlines
- recent messages
- payment alerts
- recommended next action

Cards:

- Active Campaigns
- Awaiting Your Decision
- Pending Payments
- Completed Campaigns

### Key actions

- Create New Campaign
- Review Pitches
- Open Active Campaign

## 6.3 Create Campaign Page

This is one of the most important pages.

Structure:

- stepper or multi-section form

Sections:

- campaign title
- business category
- target audience
- geography
- campaign goal
- success metric type
- success metric target
- deliverables expected
- budget range
- timeline
- notes and references

Sidebar summary:

- completion status
- estimated visibility to KPs
- form validation hints

Actions:

- Save Draft
- Publish Campaign

## 6.4 Campaign Detail Page (Owner View)

Tabs:

- Overview
- Pitches
- Team
- Timeline
- Deliverables
- Payments
- Ratings

### Overview tab

Shows:

- brief summary
- campaign status
- selected KPI target
- budget
- dates
- current KP
- activity timeline

### Pitches tab

List of KP pitches with comparison cards.

Each pitch card:

- KP profile snapshot
- strategy summary
- proposed influencer mix
- committed metric
- estimated budget
- pitch timestamp

Actions:

- View Full Pitch
- Shortlist
- Select Pitch

### Full Pitch Drawer / Modal

Shows:

- detailed strategy
- why this campaign should work
- proposed content angles
- proposed team or team type
- KPI commitment
- KP profile details

### Team tab

After pitch selection:

- selected KP details
- team members list
- campaign contacts by role
- team locked status

### Timeline tab

Shows:

- kickoff done/pending
- milestones
- task completion states
- delivery dates

### Deliverables tab

Shows:

- submitted content links
- proof screenshots
- reviewed/approved status
- KP summary notes

### Payments tab

Shows:

- campaign amount
- payment status
- payout split summary
- invoice/receipt if available

### Ratings tab

Shows:

- pending rating tasks
- submitted ratings

## 6.5 Owner Pitch Comparison Page

Optional dedicated page if pitch volume grows.

Layout:

- table or card compare view
- side-by-side comparison

Fields:

- strategy strength
- metric promise
- proposed team quality
- budget fit
- timeline confidence

## 6.6 Messages Page (Owner)

Because owner should not be overloaded, messages should be campaign-thread oriented.

Structure:

- conversation list by campaign
- selected campaign chat panel
- pinned updates from KP
- attachments

Important UX rule:

owner mainly interacts with KP, not every influencer individually.

## 6.7 Payments Page (Owner)

Shows:

- pending campaign payments
- payment history
- receipts
- failed payment alerts

Actions:

- Complete Payment
- View Receipt
- Contact Support

## 6.8 Ratings Page (Owner)

Shows:

- campaigns awaiting feedback
- completed feedback history

Modal:

- rate KP
- optional overall campaign satisfaction

## 6.9 Owner Profile Page

Shows:

- business info
- category
- city/region
- previous campaigns
- trust indicators

## 7. KP App UI

## 7.1 KP navigation

- Dashboard
- Opportunities
- My Pitches
- Active Campaigns
- Team Management
- Messages
- Earnings
- Profile
- Settings

## 7.2 KP Dashboard

Sections:

- matching open campaigns
- pitches awaiting decision
- active campaigns
- upcoming deadlines
- pending team confirmations
- payout summary

Primary actions:

- Browse Opportunities
- Submit Pitch
- Open Campaign Workspace

## 7.3 Opportunities Page

This is the KP's campaign marketplace page.

Filters:

- category
- city/region
- budget range
- campaign objective
- timeline

Each campaign card shows:

- title
- owner business category
- target audience
- geography
- budget
- objective
- pitch deadline

Actions:

- View Brief
- Submit Pitch

## 7.4 Campaign Brief View (KP)

Purpose:

- allow deep review before pitching

Sections:

- campaign objective
- target audience
- geography
- deliverables needed
- budget
- timeline
- success metric
- owner notes

Sidebar:

- fit score or relevance tag in later versions
- pitch CTA

## 7.5 Submit Pitch Page

This page is core to the entire product.

Sections:

- strategy summary
- content angle
- proposed influencer mix
- expected deliverables plan
- committed metric
- estimated budget allocation
- timeline plan
- optional influencer shortlist

Actions:

- Save Draft
- Submit Pitch

Sidebar:

- campaign summary
- owner requirements
- rules reminder

## 7.6 My Pitches Page

Views:

- Draft
- Submitted
- Shortlisted
- Won
- Rejected

Each pitch item shows:

- campaign title
- status
- committed metric
- submitted date
- owner response state

## 7.7 Active Campaigns Page (KP)

List of campaigns where KP is selected.

Each card shows:

- campaign title
- owner
- status
- team size
- next deadline
- deliverable progress

Actions:

- Open Workspace
- Manage Team

## 7.8 Campaign Workspace (KP View)

This is the operational heart of the platform.

Suggested tab structure:

- Overview
- Team
- Tasks
- Deliverables
- Chat
- Payments
- Ratings

### Overview tab

Shows:

- owner brief summary
- selected pitch summary
- campaign KPI target
- milestone progress
- risk alerts

### Team tab

Functions:

- invite influencers
- view accepted members
- assign compensation
- mark team locked

Influencer cards:

- profile info
- handles
- niche
- acceptance status
- assigned work

### Tasks tab

Functions:

- create campaign tasks
- assign tasks to influencers
- set due dates
- track statuses

Task statuses:

- Not Started
- In Progress
- Submitted
- Needs Revision
- Completed

### Deliverables tab

Shows:

- influencer submissions
- links/media proofs
- review status
- comments

Actions:

- Approve
- Request Revision
- Mark Complete

### Chat tab

Campaign room UI:

- group message thread
- milestone/system updates
- file and link support

### Payments tab

Shows:

- owner payment state
- campaign payout split
- payout release status

### Ratings tab

Shows:

- rate owner
- rate influencers
- see pending rating requirements

## 7.9 Team Invitation Flow

Dedicated flow:

1. KP clicks Invite Influencer
2. search existing influencers or add manually
3. define role and compensation
4. send invite
5. influencer accepts/rejects
6. KP sees confirmation state

## 7.10 Earnings Page (KP)

Shows:

- pending payouts
- completed payouts
- total earnings
- payout status by campaign

## 7.11 KP Profile Page

Sections:

- expertise areas
- regions/languages
- portfolio
- rating summary
- completed campaigns
- acceptance rate

## 8. Influencer App UI

## 8.1 Influencer navigation

- Dashboard
- Campaign Invites
- Active Work
- Deliverables
- Messages
- Earnings
- Profile
- Settings

## 8.2 Influencer Dashboard

Sections:

- pending invites
- active campaign tasks
- upcoming deadlines
- recent messages
- payout summary

Primary actions:

- Review Invite
- Submit Deliverable
- Open Active Campaign

## 8.3 Campaign Invites Page

List of invitations from KPs.

Each invite card shows:

- campaign title
- category
- KP name
- expected deliverable type
- compensation
- timeline

Actions:

- View Details
- Accept
- Decline

## 8.4 Invite Detail Page

Sections:

- campaign summary
- KP summary
- expected tasks
- compensation terms
- deadlines
- rules and conduct note

Actions:

- Accept Invite
- Decline Invite

## 8.5 Active Work Page

Shows campaigns the influencer has joined.

Each card shows:

- campaign title
- assigned tasks count
- deadline
- task completion progress

Actions:

- Open Workspace
- Submit Deliverable

## 8.6 Influencer Campaign Workspace

Simpler than KP workspace.

Tabs:

- Overview
- Tasks
- Deliverables
- Chat
- Payments

### Overview tab

Shows:

- campaign summary
- KP instructions
- deadlines
- KPI context

### Tasks tab

Shows assigned tasks only.

Task card fields:

- task name
- description
- due date
- status
- supporting notes

Actions:

- Start Task
- Mark Submitted

### Deliverables tab

Form for content/proof submission.

Fields:

- deliverable type
- link/upload
- caption/notes
- proof screenshot optional

Actions:

- Submit
- Update Submission

### Chat tab

Campaign room access with team communication.

### Payments tab

Shows:

- agreed compensation
- payout status
- release date if available

## 8.7 Deliverables Page

Central page for all influencer submissions.

Filters:

- pending
- needs revision
- approved
- completed

## 8.8 Earnings Page (Influencer)

Shows:

- pending earnings
- released payouts
- campaign-wise earnings
- total earned

## 8.9 Influencer Profile Page

Sections:

- social handles
- niches
- city/region
- content types
- rating summary
- recent campaigns

## 9. Shared Campaign Workspace UI

This is the system's most critical multi-role area.

## 9.1 Workspace layout

Suggested layout:

- top header with campaign name, status, KPI target
- left tab navigation or horizontal tabs
- main content pane
- right rail for activity timeline or quick stats

Header actions:

- view brief
- view team
- view payment status
- open support/dispute

## 9.2 Shared workspace modules

Modules:

- Overview
- Timeline
- Team
- Tasks
- Deliverables
- Chat
- Files
- Payments
- Ratings

Visibility differs by role.

## 9.3 Timeline module

Shows ordered milestones:

- brief published
- pitch selected
- team formed
- kickoff complete
- tasks assigned
- deliverables submitted
- campaign completed
- payouts released

This creates transparency and trust.

## 9.4 Files module

Stores:

- brand assets
- reference docs
- pitch files
- deliverable proofs

## 10. Admin and Operations Panel UI

Admin panel is essential in MVP because this is a managed marketplace.

## 10.1 Admin navigation

- Dashboard
- Users
- Campaigns
- Pitches
- Payments
- Payouts
- Ratings
- Disputes
- Reports
- Settings

## 10.2 Admin Dashboard

Sections:

- active campaigns
- campaigns at risk
- pending approvals
- pending payments
- payout queue
- recent disputes
- suspicious activity summary

Metric cards:

- total campaigns
- active campaigns
- gross transaction volume
- pending payouts
- unresolved disputes

## 10.3 User Management Page

Views:

- Owners
- KPs
- Influencers
- Suspended users
- Pending approvals

Actions:

- view profile
- approve/reject
- suspend/reactivate
- flag for review

## 10.4 Campaign Management Page

List of all campaigns with filters:

- status
- category
- date
- payment state
- dispute state

Admin can:

- view campaign details
- intervene in issue
- update internal notes
- mark as high risk

## 10.5 Payment Operations Page

Shows:

- incoming owner payments
- failed payments
- campaign payment states
- payout release queue

Actions:

- mark payment received
- verify transaction
- release payout
- hold payout

## 10.6 Disputes Page

Shows:

- dispute tickets
- affected campaign
- owner/KP/influencer involved
- reason
- timeline of events

Actions:

- review evidence
- add internal note
- contact parties
- resolve dispute

## 10.7 Ratings and Abuse Monitoring Page

Shows:

- low-score campaigns
- repeated complaint patterns
- suspicious reciprocal ratings

## 10.8 Support Inbox

Tracks:

- campaign issues
- payment issues
- onboarding issues
- user complaints

## 11. Settings and Account Pages

All roles need a settings area.

Sections:

- personal info
- contact details
- password/security
- notification preferences
- payment details
- legal agreements

## 12. Notification UI

## 12.1 Notification center

A shared notification center for all roles.

Notification types:

- campaign status changes
- invites
- messages
- deadlines
- payment updates
- rating reminders
- admin alerts

Each notification should deep-link into the relevant page.

## 12.2 Email and WhatsApp support

Even if not fully visible as UI pages, system flows should support templates for:

- welcome
- invite
- pitch received
- pitch selected
- payment pending
- task due soon
- payout processed

## 13. System Flows

Below are the main UI flows across the system.

## 13.1 Owner campaign creation flow

1. Owner signs in
2. Owner opens Dashboard
3. Owner clicks Create Campaign
4. Owner fills multi-step brief form
5. Owner saves draft or publishes
6. System validates and publishes brief
7. Matching KPs are notified

## 13.2 KP pitch flow

1. KP signs in
2. KP views Opportunities
3. KP opens brief
4. KP clicks Submit Pitch
5. KP fills strategy form
6. KP submits pitch
7. Owner gets notification

## 13.3 Owner selects pitch flow

1. Owner opens campaign detail
2. Owner views Pitches tab
3. Owner compares pitches
4. Owner selects a pitch
5. System changes campaign status to selected
6. KP is notified

## 13.4 Team formation flow

1. KP opens selected campaign
2. KP goes to Team tab
3. KP invites influencers
4. Influencers receive invites
5. Influencers accept or decline
6. KP finalizes team
7. Owner sees locked team summary

## 13.5 Campaign execution flow

1. Campaign enters active state
2. KP creates tasks
3. Influencers receive assignments
4. Influencers submit deliverables
5. KP reviews and approves or requests revision
6. Owner monitors progress in timeline and deliverables

## 13.6 Campaign completion flow

1. KP marks campaign ready for review
2. Owner reviews outputs
3. Campaign is marked completed
4. Rating requests are triggered
5. Admin/system releases payouts

## 13.7 Payment flow

1. Owner selects pitch
2. System prompts owner for payment
3. Payment is completed or manually confirmed
4. Campaign proceeds
5. Payouts are queued after completion
6. KP and influencer earnings update

## 13.8 Dispute flow

1. Any party raises issue
2. Support/dispute ticket is created
3. Admin opens campaign record
4. Admin reviews timeline, messages, deliverables, payment state
5. Admin resolves or escalates

## 14. Role-Based Access Summary

### Owner can access

- own campaigns
- received pitches
- selected team summary
- campaign progress
- payment screens
- rating flows

### KP can access

- relevant opportunities
- own pitches
- selected campaign workspaces
- team and task management
- deliverable review
- earnings

### Influencer can access

- invites
- assigned campaign workspaces
- own tasks and deliverables
- earnings

### Admin can access

- everything with moderation and ops privileges

## 15. MVP UI Priority

If we want to design and build this in the correct order, prioritize these screens first:

### Priority 1

- Landing page
- Sign up / login
- Role onboarding
- Owner Dashboard
- Create Campaign
- Campaign Detail
- KP Opportunities
- KP Submit Pitch
- KP Campaign Workspace
- Influencer Invite and Active Work
- Shared Chat and Deliverables
- Admin Dashboard
- Payment Operations

### Priority 2

- Ratings pages
- Better profile pages
- Analytics summaries
- Notifications center
- Dispute center

### Priority 3

- Advanced compare views
- rich reporting
- recommendations
- workflow automations

## 16. Final UI Direction

The UI should communicate:

- structured professionalism
- trust and accountability
- low chaos
- clear campaign ownership

The platform should not visually feel like Instagram, a creator social app, or a freelancer gig board.

It should feel like:

- campaign operations software
- with marketplace entry points
- and collaboration tooling built around real execution

That distinction matters because the product is ultimately selling reliable campaign outcomes, not attention browsing.
