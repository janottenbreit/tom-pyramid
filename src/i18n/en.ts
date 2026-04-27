import type { Translation } from "./types";

export const en: Translation = {
  pageTitle: "Target Operating Model",
  pageSubtitle:
    "Each layer is a prerequisite for the one above. Click a layer for details.",
  bottomUp: "BOTTOM-UP",
  implementation: "EXECUTION",
  topDown: "TOP-DOWN",
  design: "DESIGN",
  legendDesignTitle: "READING DIRECTION DESIGN",
  legendImplementationTitle: "READING DIRECTION EXECUTION",
  legendDesignText: "Strategy defines → Technology enables",
  legendImplementationText: "Build the foundation → Realize the strategy",
  tabOverview: "OVERVIEW",
  tabFinance: "FINANCE",
  tabMarketing: "MARKETING",
  coreElements: "CORE ELEMENTS",
  relevantKpis: "RELEVANT KPIs",
  financeDetails: "FINANCE DETAILS",
  marketingDetails: "MARKETING DETAILS",
  exportLabel: "Export",
  exportingLabel: "Export…",
  notFoundTitle: "404",
  notFoundMessage: "Oops! Page not found",
  returnHome: "Return to home",
  languageLabel: "Language",
  layers: [
    {
      label: "Strategy & Vision",
      question: "WHERE TO?",
      subtitle: "Direction & Ambition",
      description:
        "The apex defines the strategic ambition: what value does the function contribute to the company? What role does it play in the value chain? Every layer below is a means to realize this vision.",
      details: [
        "Vision & mission of the function — derived from the corporate strategy",
        "Strategic priorities & transformation goals (3–5 year horizon)",
        "Alignment with the PE investment thesis or corporate / group strategy",
        "Definition of the value contribution: enabler vs. strategic business partner vs. revenue driver",
        "Capability gap assessment: as-is vs. to-be state including roadmap",
        "Change narrative: a communicable target picture as the basis for stakeholder buy-in",
      ],
      finance: {
        intro:
          "The CFO organization transforms from number cruncher to strategic business partner — in PE contexts with a sharp focus on exit readiness and value creation.",
        items: [
          "Vision: \"Finance as a strategic business partner with data-driven decision support, automated standard processes, and investor-grade reporting — close ≤5 BD\"",
          "PE context: alignment of the finance strategy with the sponsor's value creation plan (e.g. EBITDA expansion, NRR improvement, working capital optimization)",
          "Three-pillar model (Deloitte): Operational Finance (transactional) → Business Finance (advisory) → Specialized Finance (M&A, Tax, Treasury)",
          "Skill shift: from HGB/IFRS bookkeeping to data analysis, scenario modeling, and econometrics",
          "Exit readiness: build an audit-ready reporting layer with consistent KPIs (ARR, NRR, Rule of 40, LTV/CAC) from day one",
        ],
        kpis: [
          "Rule of 40 Score",
          "Close Cycle Time (BD)",
          "Finance Cost as % of Revenue",
          "FTE Ratio Finance:Total Company",
          "Forecast Accuracy (±%)",
        ],
      },
      marketing: {
        intro:
          "Marketing evolves from a cost center to a revenue engine — with a measurable contribution to pipeline and data-driven allocation.",
        items: [
          "Vision: \"Marketing as a revenue engine with measurable pipeline contribution, scalable demand generation, and data-driven budget allocation\"",
          "Shift from activity-based to revenue-aligned marketing — KPIs tied to corporate goals",
          "Integration into RevOps: marketing, sales, and customer success as one integrated revenue team",
          "Brand positioning as a strategic asset: anchor brand equity in the company valuation",
          "SaaS context: focus on pipeline velocity, CAC efficiency, and expansion revenue",
        ],
        kpis: [
          "Marketing-Sourced Pipeline (%)",
          "CAC Payback Period (months)",
          "Marketing ROI / ROMI",
          "Brand Awareness Index",
          "Pipeline Velocity",
        ],
      },
    },
    {
      label: "Service Delivery Model",
      question: "WHAT & FOR WHOM?",
      subtitle: "Value Proposition",
      description:
        "The Service Delivery Model bundles all the layers below into a concrete value proposition. It answers: what do we deliver, to whom, in what quality, and by when? It defines the sourcing model: which services are delivered in-house, via shared services, through a Center of Excellence (CoE), or externally?",
      details: [
        "Service catalogue: a complete inventory of all services with defined service levels",
        "Sourcing strategy: in-house vs. Shared Service Center (SSC) vs. Center of Excellence (CoE) vs. outsourcing",
        "SLA framework: binding quality and time standards per service (e.g. BD+5 for monthly close)",
        "Interaction model: how does the function engage with the business? (ticket-based, business partner, embedded)",
        "Tiering: Self-Service (Tier 0), Standard (Tier 1), Specialist (Tier 2), Strategic Advisory (Tier 3)",
        "Demand management: prioritization and capacity steering for incoming requests",
      ],
      finance: {
        intro:
          "Finance delivers along a clear service catalogue — from transactional standard services to strategic decision support at C-level.",
        items: [
          "Tier 0 — Self-Service: standard reports via BI tooling (dashboards, KPI monitoring), automated invoicing",
          "Tier 1 — Transactional (SSC): AP/AR processing, travel & expense, intercompany reconciliation, master data maintenance",
          "Tier 2 — Specialist: monthly management report (SLA: BD+5), investor reporting package (quarterly), ad-hoc analyses (SLA: 48h), revenue recognition, tax compliance",
          "Tier 3 — Strategic Advisory: business partner advisory for business units, M&A support, scenario modeling, board deck preparation",
          "PE context: sponsor-specific reporting (Monthly Lender Package, Quarterly Board Deck, Annual Budget) as a dedicated service with hard deadlines",
        ],
        kpis: [
          "SLA Adherence Rate (%)",
          "Cost per Transaction",
          "Service Satisfaction Score",
          "Ticket Resolution Time",
          "Self-Service Adoption Rate (%)",
        ],
      },
      marketing: {
        intro:
          "Marketing defines its value proposition along the funnel — from awareness generation to revenue attribution.",
        items: [
          "Demand Generation services: campaign execution, content production, paid media management, event management",
          "Analytics & Reporting: pipeline contribution report (weekly), campaign performance dashboards (real-time), attribution reporting (monthly)",
          "Sales Enablement: content packages per buyer persona, competitive battle cards, case studies, ROI calculators",
          "Brand services: brand health assessment (quarterly), visual identity management, PR & comms",
          "Sourcing: content creation often hybrid (in-house + agency), performance marketing often specialized externally, brand & strategy always in-house",
        ],
        kpis: [
          "Content Production Cycle Time",
          "Campaign Launch Lead Time",
          "Marketing Qualified Leads (MQL) per Month",
          "Lead Response Time",
          "Sales Enablement Usage Rate (%)",
        ],
      },
    },
    {
      label: "Governance & Controls",
      question: "WITHIN WHICH RULES?",
      subtitle: "Framework & Control",
      description:
        "Governance sets the framework within which the organization and its processes operate. Without clear governance you get shadow IT, informal decision paths, loss of control, and compliance risk. In PE contexts governance is especially critical: investors expect traceable decision paths, clean controls, and reliable data.",
      details: [
        "Decision rights: who decides what, up to which threshold? (signing authority matrix, approval workflows)",
        "RACI matrices: clear responsibilities across functional boundaries",
        "Internal Control System (ICS): segregation of duties, four-eyes principle, reconciliation processes",
        "Compliance framework: regulatory requirements (HGB, IFRS, SOX/ISAE 3402, GDPR)",
        "Policies & guidelines: binding rule sets for recurring decisions",
        "Performance management: KPI cascade from corporate goals down to team level, regular reviews",
        "Data governance: data quality, data sovereignty, master data ownership, single source of truth",
      ],
      finance: {
        intro:
          "Finance governance is the control backbone of the organization — in PE-backed companies it is often the first area built up or tightened post-closing.",
        items: [
          "Signing Authority Matrix: tiered approval limits (e.g. up to €5k team lead, up to €25k director, up to €100k CFO, above that the board)",
          "Close calendar: a binding schedule with deadlines and accountabilities per close step, escalation rules for delays",
          "Accounting Policies Manual: unified accounting and valuation policies (revenue recognition, capitalization, provisions)",
          "SOX/ISAE 3402 controls: documented key controls, test of design and test of effectiveness, remediation tracking",
          "Investment Committee governance: structured decision processes for CapEx, M&A, and major contracts",
          "PE reporting governance: hard deadlines for lender reports, board packages, covenant compliance monitoring",
          "Data governance: clear ownership for KPIs (e.g. a unified ARR definition across all entities)",
        ],
        kpis: [
          "Audit Findings (#)",
          "Control Deficiencies (#)",
          "Policy Compliance Rate (%)",
          "Covenant Compliance (Headroom %)",
          "Restatement Frequency",
        ],
      },
      marketing: {
        intro:
          "Marketing governance ensures that brand, budget, and compliance are managed consistently — particularly critical in multi-entity or multi-market structures.",
        items: [
          "Brand guidelines & approval: multi-stage review process for external communication, brand consistency audits",
          "Budget governance: who approves marketing spend above which threshold? Quarterly reforecast aligned with the CFO",
          "GDPR compliance: opt-in management, cookie consent, data deletion processes, data processing agreements with agencies",
          "Vendor management: preferred supplier list, framework agreements, regular performance reviews for agencies",
          "Content governance: editorial calendar, tone-of-voice guidelines, approval processes for regulated industries",
          "Attribution governance: unified MQL/SQL criteria, a binding attribution model (first touch, multi-touch)",
        ],
        kpis: [
          "Brand Consistency Score",
          "Budget Variance vs. Plan (%)",
          "GDPR Incident Rate",
          "Vendor Performance Score",
          "Attribution Model Coverage (%)",
        ],
      },
    },
    {
      label: "Organization, Roles & Capabilities",
      question: "WHO?",
      subtitle: "People & Structure",
      description:
        "Processes need people with the right skills in the right structure. This layer defines who does what, how the organization is built, and which capabilities are required. According to Deloitte, finance structures are shifting from functional silos toward capability-based teams with flexible, multidisciplinary task forces.",
      details: [
        "Organizational design: functional vs. matrix vs. capability-based, reporting lines, spans & layers",
        "Role profiles & job families: clear job descriptions with skill requirements and career paths",
        "Skill matrix: capture existing vs. required capabilities, gap analysis as the basis for upskilling",
        "Sourcing model: in-house (permanent) vs. interim/freelance vs. nearshore/offshore vs. outsourcing",
        "Capacity planning: FTE demand per function, utilization steering, peak planning (e.g. close, budget season)",
        "Talent management: recruiting pipeline, retention measures, succession planning for key roles",
        "Multidisciplinary teams: agile task forces for projects (M&A, system implementations, ad-hoc analyses)",
      ],
      finance: {
        intro:
          "Finance organizations are getting smaller, but more specialized. The share of transactional roles is shrinking through automation — demand is rising for analytics, business partnering, and specialist disciplines.",
        items: [
          "Three-pillar org: Operational Finance (Accounting, AP/AR, Close) → Business Finance (FP&A, Business Partnering, Controlling) → Specialized Finance (Tax, Treasury, M&A, IR)",
          "Business Partner model: dedicated finance business partners per business unit — embedded in the operational team, not in headquarters",
          "Skill shift: classic accounting skills are augmented by data analysis (SQL, Python, BI tools), scenario modeling, and communication skills",
          "CoE approach (Deloitte): Center of Excellence for specialist disciplines (consolidation, revenue recognition, transfer pricing) — economies of skill, not just economies of scale",
          "SSC for transactions: AP/AR, travel & expense, intercompany — often nearshore (e.g. Poland, Portugal) at PE-backed companies with multi-entity structures",
          "PE-typical roles: Head of FP&A, Investor Relations / Reporting Manager, Integration Manager (post-M&A), Data Analyst / Finance Analytics",
        ],
        kpis: [
          "Finance FTE Ratio (Finance FTEs / 1,000 Revenue)",
          "Span of Control",
          "Voluntary Turnover Rate (%)",
          "Training Hours per FTE",
          "Time-to-Fill for Critical Roles",
        ],
      },
      marketing: {
        intro:
          "Marketing organizations are differentiating along the funnel — with growing demand for analytics and ops capability alongside classic creative.",
        items: [
          "Core teams: Demand Generation vs. Product Marketing vs. Brand & Comms vs. Marketing Operations",
          "Operations as its own discipline: tech stack management, data quality, process automation, reporting",
          "Content: a strategic call between in-house and external — thought leadership always in-house, production often via agency",
          "Growth roles: performance marketing, conversion rate optimization, marketing analytics — a hybrid of marketing and data science",
          "RevOps integration: in SaaS companies increasingly a joint team with Sales Ops and CS Ops under a VP RevOps",
          "Freelancer/agency mix: a permanent core team with specialist disciplines (SEO, paid, design) flexed via agency retainers",
        ],
        kpis: [
          "Revenue per Marketing FTE",
          "Agency Spend vs. In-House Spend Ratio",
          "Team Utilization Rate (%)",
          "Skill Coverage vs. Capability Map (%)",
          "Employee Engagement Score",
        ],
      },
    },
    {
      label: "Processes & Workflows",
      question: "HOW?",
      subtitle: "Flow & Automation",
      description:
        "Processes define how the technology is used and how the organization is deployed. They translate system capabilities into operational workflows. KPMG defines processes as the heart of the TOM — \"Everything that happens is part of the process.\" The key: an end-to-end perspective across functional boundaries, not isolated sub-processes.",
      details: [
        "End-to-end process chains: complete coverage from trigger to outcome, across functional boundaries",
        "Process map: hierarchical view of all core, management, and support processes",
        "SOP documentation: standardized work instructions for every process step",
        "Automation level: assessment per process — manual vs. partly automated vs. fully automated (RPA, API, AI)",
        "Interface management: defined hand-offs between functions with clear inputs/outputs",
        "Continuous improvement: regular process reviews, process mining, Lean/Six Sigma for optimization",
        "Process KPIs: cycle time, error rate, throughput, touchpoints per transaction",
      ],
      finance: {
        intro:
          "Finance processes in PE-backed companies are optimized for speed, accuracy, and scalability — with the month-end close as the flagship process.",
        items: [
          "Record-to-Report (R2R): the core process from booking to report — target: fast close ≤5 BD with parallel processing instead of a sequential flow",
          "Month-end close: typical optimization from 12→7→5 days via close checklist, task dependencies, automation of reconciliations and journal entries",
          "Order-to-Cash (O2C): end-to-end from contract close through billing to cash collection — in SaaS: integration of subscription management, usage billing, and revenue recognition",
          "Procure-to-Pay (P2P): from purchase requisition through approval, goods receipt, invoice matching, to payment — three-way match as the standard control",
          "Planning & forecasting: annual budget process + rolling forecast (monthly/quarterly) + 13-week cash flow forecast for lender reporting",
          "Intercompany processes: critical in multi-entity structures — reconciliation, elimination, transfer pricing, intercompany loans",
          "Investor reporting workflow: data collection → validation → analysis → narrative → review → distribution — standardized with hard deadlines",
        ],
        kpis: [
          "Days to Close",
          "Journal Entry Error Rate (%)",
          "Straight-Through Processing Rate (%)",
          "Forecast Accuracy (±%)",
          "DSO (Days Sales Outstanding)",
        ],
      },
      marketing: {
        intro:
          "Marketing processes are increasingly designed as end-to-end workflows — from campaign idea to revenue attribution.",
        items: [
          "Lead-to-MQL-to-SQL process: defined qualification criteria, scoring model, hand-off protocol to sales with SLA (e.g. lead response time ≤4h)",
          "Campaign execution workflow: briefing → content creation → review/approval → setup → launch → monitoring → reporting → optimization",
          "Content production pipeline: editorial planning → creation → review → design → publishing → distribution → performance tracking",
          "Budget allocation & reforecast: quarterly reallocation based on channel performance, CAC efficiency, and pipeline contribution",
          "Marketing-to-sales hand-off: a defined hand-off point with data enrichment, automated CRM update, and follow-up tracking",
          "Event management workflow: planning (T-12w) → promotion → execution → follow-up → ROI analysis",
        ],
        kpis: [
          "Lead-to-MQL Conversion Rate (%)",
          "Campaign ROI",
          "Content Production Cycle Time",
          "Budget Reforecast Accuracy (%)",
          "Marketing-to-Sales Handoff Time",
        ],
      },
    },
    {
      label: "Technology, Data & Infrastructure",
      question: "WITH WHAT?",
      subtitle: "Tools & Foundation",
      description:
        "The foundation of the pyramid. Everything above depends on the availability, quality, and integrity of data and systems. An ERP with poor data quality makes every process built on top of it unreliable. Cloud ERP solutions are taking over: 69% of companies have already implemented or are planning a cloud ERP.",
      details: [
        "Core systems: ERP, CRM, HCM — the transactional core systems of the organization",
        "Data architecture: data warehouse / data lake, ETL/ELT pipelines, data model, interface architecture",
        "Master data management: unified master data (customers, products, chart of accounts, cost centers) as the basis for consistent reporting",
        "Integration layer: API management, middleware, iPaaS (e.g. Workato, MuleSoft, n8n) — interfaces between systems",
        "BI & Analytics: reporting platform (Power BI, Tableau, Looker), self-service analytics, dashboards",
        "Automation: RPA (UiPath, Automation Anywhere), low-code/no-code platforms, AI/ML for anomaly detection and forecasting",
        "Infrastructure: cloud (AWS, Azure, GCP) vs. on-premise vs. hybrid, security, backup, disaster recovery",
        "Data quality: monitoring, cleansing, validation rules — bad data costs companies, on average, $12.9M per year (Gartner)",
      ],
      finance: {
        intro:
          "The finance tech stack in PE-backed SaaS companies is typically a mix of ERP, consolidation tool, BI platform, and specialized SaaS solutions — often grown historically and fragmented post-acquisition.",
        items: [
          "ERP system: SAP S/4HANA, Oracle NetSuite, Microsoft Dynamics 365, DATEV (DACH mid-market) — the core for GL, AP, AR, fixed assets",
          "Consolidation: LucaNet, CCH Tagetik, OneStream, SAP Group Reporting — multi-entity consolidation with IC elimination",
          "FP&A / CPM: Jedox, Adaptive Planning (Workday), Pigment, Abacum — for budgeting, forecasting, scenario analysis",
          "BI & Reporting: Power BI, Tableau, Looker — self-service dashboards for investor KPIs (ARR, NRR, churn, LTV/CAC)",
          "Revenue recognition: Zuora Revenue, RevPro — purpose-built for SaaS billing models (usage, subscription, multi-element)",
          "Billing & subscription management: Zuora, Chargebee, Stripe Billing — integration into the GL for automated revenue recognition",
          "Data model: a unified ARR/MRR calculation across all entities, a cohort-analysis-ready data structure, customer-level profitability",
          "Automation: VBA macros for legacy reporting, RPA for repetitive tasks, increasingly AI for anomaly detection in transaction data",
        ],
        kpis: [
          "System Uptime (%)",
          "Data Quality Score (%)",
          "Integration Error Rate",
          "Report Generation Time",
          "Automation Rate (% of automated process steps)",
        ],
      },
      marketing: {
        intro:
          "The MarTech stack keeps growing — companies use 91 marketing tools on average. What matters is not the count but the integration and data flows between systems.",
        items: [
          "CRM: Salesforce, HubSpot, Microsoft Dynamics — single source of truth for customer data and pipeline",
          "Marketing automation: HubSpot, Marketo, Pardot — lead nurturing, email marketing, scoring, workflow automation",
          "CDP (Customer Data Platform): Segment, mParticle — unified customer profile across all touchpoints",
          "Attribution & analytics: Google Analytics 4, Bizible (Marketo), HubSpot Attribution — multi-touch attribution for revenue reporting",
          "Content management: WordPress, Contentful — publishing, SEO, content performance tracking",
          "Paid media: Google Ads, LinkedIn Campaign Manager, Meta Ads — with bidding optimization and conversion tracking",
          "Sales enablement: Highspot, Seismic — content management for sales, usage analytics, buyer engagement",
          "Integration: iPaaS (Workato, Zapier, n8n) for data flows between MarTech systems and CRM/ERP",
        ],
        kpis: [
          "MarTech Stack Utilization Rate (%)",
          "Data Sync Latency",
          "Tool Consolidation Ratio",
          "Integration Coverage (%)",
          "Cost per Tool vs. Usage",
        ],
      },
    },
  ],
};
