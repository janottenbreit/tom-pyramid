import type { Translation } from "./types";

export const de: Translation = {
  pageTitle: "Target Operating Model",
  pageSubtitle:
    "Jede Schicht ist Voraussetzung für die darüber liegende. Klicke auf eine Ebene für Details.",
  bottomUp: "BOTTOM-UP",
  implementation: "UMSETZUNG",
  topDown: "TOP-DOWN",
  design: "DESIGN",
  legendDesignTitle: "LESERICHTUNG DESIGN",
  legendImplementationTitle: "LESERICHTUNG UMSETZUNG",
  legendDesignText: "Strategie definiert → Technologie ermöglicht",
  legendImplementationText: "Fundament schaffen → Strategie realisieren",
  tabOverview: "ÜBERSICHT",
  tabFinance: "FINANCE",
  tabMarketing: "MARKETING",
  coreElements: "KERNELEMENTE",
  relevantKpis: "RELEVANTE KPIs",
  financeDetails: "FINANCE-DETAILS",
  marketingDetails: "MARKETING-DETAILS",
  exportLabel: "Export",
  exportingLabel: "Export…",
  notFoundTitle: "404",
  notFoundMessage: "Hoppla! Seite nicht gefunden",
  returnHome: "Zurück zur Startseite",
  languageLabel: "Sprache",
  layers: [
    {
      label: "Strategie & Zielbild",
      question: "WOHIN?",
      subtitle: "Richtung & Ambition",
      description:
        "Die Spitze definiert die strategische Ambition: Welchen Wertbeitrag leistet die Abteilung zum Unternehmen? Welche Rolle spielt sie in der Wertschöpfung? Alle darunter liegenden Schichten sind Mittel zum Zweck, um dieses Zielbild zu realisieren.",
      details: [
        "Vision & Mission der Abteilung – abgeleitet aus der Unternehmensstrategie",
        "Strategische Prioritäten & Transformationsziele (3–5 Jahre Horizont)",
        "Alignment mit PE-Investmentthese bzw. Unternehmens-/Konzernstrategie",
        "Definition des Wertbeitrags: Enabler vs. strategischer Business Partner vs. Revenue Driver",
        "Capability Gap Assessment: As-Is vs. To-Be Zustand inkl. Roadmap",
        "Change Narrative: Kommunizierbares Zielbild als Basis für Stakeholder Buy-In",
      ],
      finance: {
        intro:
          "Die CFO-Organisation transformiert sich vom Number Cruncher zum strategischen Business Partner – in PE-Kontexten mit klarem Fokus auf Exit-Readiness und Value Creation.",
        items: [
          "Zielbild: „Finance als strategischer Business Partner mit datengetriebener Entscheidungsunterstützung, automatisierten Standardprozessen und investorengerechtem Reporting – Close ≤5 BD\"",
          "PE-Kontext: Alignment der Finance-Strategie mit Value Creation Plan des Sponsors (z.B. EBITDA-Expansion, NRR-Verbesserung, Working Capital Optimierung)",
          "Three-Pillar-Modell (Deloitte): Operational Finance (transaktional) → Business Finance (advisory) → Specialized Finance (M&A, Tax, Treasury)",
          "Kompetenzshift: Von HGB-/IFRS-Buchhaltung zu Datenanalyse, Szenariomodellierung und Ökonometrie",
          "Exit-Readiness: Aufbau eines audit-fähigen Reportings mit konsistenten KPIs (ARR, NRR, Rule of 40, LTV/CAC) ab Tag 1",
        ],
        kpis: [
          "Rule of 40 Score",
          "Close Cycle Time (BD)",
          "Finance Cost as % of Revenue",
          "FTE Ratio Finance:Gesamtunternehmen",
          "Forecast Accuracy (±%)",
        ],
      },
      marketing: {
        intro:
          "Marketing entwickelt sich von der Kostenstelle zur Revenue Engine – mit messbarem Beitrag zur Pipeline und datenbasierter Allokation.",
        items: [
          "Zielbild: „Marketing als Revenue Engine mit messbarem Pipeline-Beitrag, skalierbarer Demand Generation und datenbasierter Budgetallokation\"",
          "Shift von Activity-Based zu Revenue-Aligned Marketing – KPIs an Unternehmensziele gekoppelt",
          "Integration in RevOps: Marketing, Sales und Customer Success als integriertes Revenue Team",
          "Markenpositionierung als strategisches Asset: Brand Equity in Unternehmensbewertung verankern",
          "SaaS-Kontext: Fokus auf Pipeline Velocity, CAC Efficiency und Expansion Revenue",
        ],
        kpis: [
          "Marketing-Sourced Pipeline (%)",
          "CAC Payback Period (Monate)",
          "Marketing ROI / ROMI",
          "Brand Awareness Index",
          "Pipeline Velocity",
        ],
      },
    },
    {
      label: "Service Delivery Model",
      question: "WAS & FÜR WEN?",
      subtitle: "Leistungsversprechen",
      description:
        "Das Service Delivery Model bündelt alle darunter liegenden Schichten zu einem konkreten Leistungsversprechen. Es beantwortet: Was liefern wir, an wen, in welcher Qualität und bis wann? Es definiert das Sourcing-Modell: Welche Leistungen werden inhouse, via Shared Services, über ein Center of Excellence (CoE) oder extern erbracht?",
      details: [
        "Service-Katalog: Vollständiges Verzeichnis aller Leistungen mit definierten Service Levels",
        "Sourcing-Strategie: Inhouse vs. Shared Service Center (SSC) vs. Center of Excellence (CoE) vs. Outsourcing",
        "SLA-Framework: Verbindliche Qualitäts- und Zeitstandards pro Service (z.B. BD+5 für Monthly Close)",
        "Interaktionsmodell: Wie interagiert die Abteilung mit dem Business? (Ticket-basiert, Business Partner, Embedded)",
        "Tiering: Einteilung in Self-Service (Tier 0), Standard (Tier 1), Spezialist (Tier 2), Strategic Advisory (Tier 3)",
        "Demand Management: Priorisierung und Kapazitätssteuerung eingehender Anfragen",
      ],
      finance: {
        intro:
          "Finance liefert entlang eines klaren Leistungskatalogs – von transaktionalen Standardservices bis hin zu strategischer Entscheidungsunterstützung auf C-Level.",
        items: [
          "Tier 0 – Self-Service: Standardreports via BI-Tool (Dashboards, KPI-Monitoring), automatisierte Rechnungsstellung",
          "Tier 1 – Transaktional (SSC): AP/AR-Processing, Reisekostenabrechnung, Intercompany-Abstimmung, Stammdatenpflege",
          "Tier 2 – Spezialist: Monatlicher Management Report (SLA: BD+5), Investor Reporting Package (quartalsweise), Ad-hoc-Analysen (SLA: 48h), Revenue Recognition, Tax Compliance",
          "Tier 3 – Strategic Advisory: Business Partner Advisory für Geschäftsbereiche, M&A-Support, Szenariomodellierung, Board Deck Preparation",
          "PE-Kontext: Sponsor-spezifisches Reporting (Monthly Lender Package, Quarterly Board Deck, Annual Budget) als dedizierter Service mit festen Deadlines",
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
          "Marketing definiert sein Leistungsversprechen entlang des Funnel – von Awareness-Generierung bis Revenue Attribution.",
        items: [
          "Demand Generation Services: Campaign Execution, Content Production, Paid Media Management, Event Management",
          "Analytics & Reporting: Pipeline Contribution Report (wöchentlich), Campaign Performance Dashboards (Echtzeit), Attribution Reporting (monatlich)",
          "Sales Enablement: Content Packages pro Buyer Persona, Competitive Battle Cards, Case Studies, ROI Calculators",
          "Brand Services: Brand Health Assessment (quartalsweise), Visual Identity Management, PR & Comms",
          "Sourcing: Content Creation häufig hybrid (intern + Agentur), Performance Marketing oft spezialisiert extern, Brand & Strategy immer intern",
        ],
        kpis: [
          "Content Production Cycle Time",
          "Campaign Launch Lead Time",
          "Marketing Qualified Leads (MQL) pro Monat",
          "Lead Response Time",
          "Sales Enablement Usage Rate (%)",
        ],
      },
    },
    {
      label: "Governance & Steuerung",
      question: "INNERHALB WELCHER REGELN?",
      subtitle: "Rahmen & Kontrolle",
      description:
        "Governance setzt den Rahmen, innerhalb dessen Organisation und Prozesse operieren. Ohne klare Governance entstehen Schatten-IT, informelle Entscheidungswege, Kontrollverlust und Compliance-Risiken. In PE-Kontexten ist Governance besonders kritisch: Investoren erwarten nachvollziehbare Entscheidungswege, saubere Controls und belastbare Daten.",
      details: [
        "Entscheidungsrechte: Wer entscheidet was bis zu welcher Höhe? (Signing Authority Matrix, Approval Workflows)",
        "RACI-Matrizen: Klare Verantwortlichkeiten über Abteilungsgrenzen hinweg",
        "Internes Kontrollsystem (IKS): Segregation of Duties, 4-Augen-Prinzip, Abstimmungsprozesse",
        "Compliance-Rahmen: Regulatorische Anforderungen (HGB, IFRS, SOX/ISAE 3402, DSGVO)",
        "Richtlinien & Policies: Verbindliche Regelwerke für wiederkehrende Entscheidungen",
        "Performance Management: KPI-Kaskade von Unternehmenszielen bis auf Teamebene, regelmäßige Reviews",
        "Data Governance: Datenqualität, Datenhoheit, Master Data Ownership, Single Source of Truth",
      ],
      finance: {
        intro:
          "Finance Governance ist das Kontroll-Rückgrat der Organisation – in PE-backed Companies oft der erste Bereich, der nach Closing aufgebaut oder verschärft wird.",
        items: [
          "Signing Authority Matrix: Gestaffelte Freigabelimits (z.B. bis €5k Teamlead, bis €25k Director, bis €100k CFO, darüber Board)",
          "Close Calendar: Verbindlicher Zeitplan mit Deadlines und Verantwortlichkeiten pro Close-Schritt, Eskalationsregeln bei Verzug",
          "Accounting Policies Manual: Einheitliche Bilanzierungs- und Bewertungsrichtlinien (Revenue Recognition, Capitalization, Provisions)",
          "SOX/ISAE 3402 Controls: Dokumentierte Key Controls, Test-of-Design und Test-of-Effectiveness, Remediation Tracking",
          "Investment Committee Governance: Strukturierte Entscheidungsprozesse für CapEx, M&A, größere Verträge",
          "PE Reporting Governance: Feste Deadlines für Lender Reports, Board Packages, Covenant Compliance Monitoring",
          "Data Governance: Eindeutige Ownership für KPIs (z.B. ARR-Definition einheitlich über alle Entities)",
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
          "Marketing Governance stellt sicher, dass Brand, Budget und Compliance konsistent gemanagt werden – besonders kritisch bei Multi-Entity- oder Multi-Market-Strukturen.",
        items: [
          "Brand Guidelines & Approval: Mehrstufiger Review-Prozess für externe Kommunikation, Brand Consistency Audits",
          "Budget Governance: Wer genehmigt Marketing-Spend ab welcher Höhe? Quarterly Reforecast mit CFO-Alignment",
          "DSGVO-Compliance: Opt-In-Management, Cookie Consent, Datenlöschprozesse, Auftragsverarbeitungsverträge mit Agenturen",
          "Vendor Management: Preferred Supplier List, Rahmenverträge, regelmäßige Performance Reviews für Agenturen",
          "Content Governance: Editorial Calendar, Tone of Voice Guidelines, Freigabeprozesse für regulierte Branchen",
          "Attribution Governance: Einheitliche Definition von MQL/SQL-Kriterien, verbindliches Attributionsmodell (First Touch, Multi-Touch)",
        ],
        kpis: [
          "Brand Consistency Score",
          "Budget Variance vs. Plan (%)",
          "DSGVO Incident Rate",
          "Vendor Performance Score",
          "Attribution Model Coverage (%)",
        ],
      },
    },
    {
      label: "Organisation, Rollen & Kompetenzen",
      question: "WER?",
      subtitle: "Menschen & Struktur",
      description:
        "Prozesse brauchen Menschen mit den richtigen Fähigkeiten in der richtigen Struktur. Diese Schicht definiert, wer was macht, wie die Organisation aufgebaut ist und welche Kompetenzen benötigt werden. Laut Deloitte verschieben sich Finance-Strukturen von funktionalen Silos hin zu Capability-basierten Teams mit flexiblen, multidisziplinären Task Forces.",
      details: [
        "Organisationsdesign: Funktional vs. Matrix vs. Capability-basiert, Reporting Lines, Spans & Layers",
        "Rollenprofile & Job Families: Klare Stellenbeschreibungen mit Skill-Anforderungen und Karrierepfaden",
        "Skill-Matrix: Erfassung vorhandener vs. benötigter Kompetenzen, Gap-Analyse als Basis für Upskilling",
        "Sourcing-Modell: Inhouse (Festanstellung) vs. Interim/Freelance vs. Nearshore/Offshore vs. Outsourcing",
        "Kapazitätsplanung: FTE-Bedarf pro Funktion, Auslastungssteuerung, Peak-Planung (z.B. Close, Budget Season)",
        "Talent Management: Recruiting-Pipeline, Retention-Maßnahmen, Nachfolgeplanung für Schlüsselpositionen",
        "Multidisziplinäre Teams: Agile Task Forces für Projekte (M&A, System-Implementierung, Ad-hoc-Analysen)",
      ],
      finance: {
        intro:
          "Finance-Organisationen werden kleiner, aber spezialisierter. Der Anteil transaktionaler Rollen sinkt durch Automatisierung – der Bedarf an Analytics, Business Partnering und Spezialdisziplinen steigt.",
        items: [
          "Three-Pillar-Org: Operational Finance (Accounting, AP/AR, Close) → Business Finance (FP&A, Business Partnering, Controlling) → Specialized Finance (Tax, Treasury, M&A, IR)",
          "Business Partner Modell: Dedizierte Finance Business Partner pro Geschäftsbereich – embedded im operativen Team, nicht in der Zentrale",
          "Skill-Shift: Klassische Buchhaltungs-Skills werden durch Datenanalyse (SQL, Python, BI-Tools), Szenariomodellierung und Kommunikationsfähigkeit ergänzt",
          "CoE-Ansatz (Deloitte): Center of Excellence für Spezialdisziplinen (Konsolidierung, Revenue Recognition, Transfer Pricing) – economies of skill statt nur economies of scale",
          "SSC für Transaktionen: AP/AR, Travel & Expense, Intercompany – oft nearshore (z.B. Polen, Portugal) bei PE-backed Companies mit Multi-Entity-Struktur",
          "PE-typische Rollen: Head of FP&A, Investor Relations/Reporting Manager, Integration Manager (post-M&A), Data Analyst / Finance Analytics",
        ],
        kpis: [
          "Finance FTE Ratio (Finance FTEs / 1.000 Revenue)",
          "Span of Control",
          "Voluntary Turnover Rate (%)",
          "Training Hours pro FTE",
          "Time-to-Fill kritische Positionen",
        ],
      },
      marketing: {
        intro:
          "Marketing-Organisationen differenzieren sich zunehmend entlang des Funnels – mit steigendem Bedarf an Analytics- und Ops-Kompetenz neben klassischem Creative.",
        items: [
          "Kernteams: Demand Generation vs. Product Marketing vs. Brand & Comms vs. Marketing Operations",
          "Operations als eigene Disziplin: Tech Stack Management, Datenqualität, Prozessautomatisierung, Reporting",
          "Content: Strategische Entscheidung intern vs. extern – Thought Leadership immer intern, Produktion häufig Agentur",
          "Growth-Rollen: Performance Marketing, Conversion Rate Optimization, Marketing Analytics – Hybrid aus Marketing und Data Science",
          "RevOps-Integration: In SaaS-Unternehmen zunehmend gemeinsames Team mit Sales Ops und CS Ops unter einem VP RevOps",
          "Freelancer/Agentur-Mix: Kern-Team fest angestellt, Spezialdisziplinen (SEO, Paid, Design) flexibel über Agentur-Retainer",
        ],
        kpis: [
          "Revenue per Marketing FTE",
          "Agentur-Spend vs. Inhouse-Spend Ratio",
          "Team Utilization Rate (%)",
          "Skill Coverage vs. Capability Map (%)",
          "Employee Engagement Score",
        ],
      },
    },
    {
      label: "Prozesse & Workflows",
      question: "WIE?",
      subtitle: "Abläufe & Automatisierung",
      description:
        "Prozesse definieren, wie die Technologie genutzt und die Organisation eingesetzt wird. Sie übersetzen Systemfähigkeiten in operative Abläufe. KPMG definiert Prozesse als das Herzstück des TOM – „Everything that happens is part of the process.\" Entscheidend: End-to-End-Perspektive über Abteilungsgrenzen hinweg, nicht isolierte Teilprozesse.",
      details: [
        "End-to-End-Prozessketten: Vollständige Abbildung von Trigger bis Ergebnis, über Abteilungsgrenzen hinweg",
        "Prozesslandkarte: Hierarchische Darstellung aller Kern-, Management- und Supportprozesse",
        "SOP-Dokumentation: Standardisierte Arbeitsanweisungen für jeden Prozessschritt",
        "Automatisierungsgrad: Assessment pro Prozess – manuell vs. teil-automatisiert vs. voll-automatisiert (RPA, API, AI)",
        "Schnittstellen-Management: Definierte Übergabepunkte zwischen Abteilungen mit klaren Inputs/Outputs",
        "Continuous Improvement: Regelmäßige Prozessreviews, Process Mining, Lean/Six Sigma zur Optimierung",
        "Prozess-KPIs: Cycle Time, Error Rate, Throughput, Touchpoints pro Transaktion",
      ],
      finance: {
        intro:
          "Finance-Prozesse in PE-backed Companies werden auf Speed, Accuracy und Scalability optimiert – mit dem Month-End Close als Flaggschiff-Prozess.",
        items: [
          "Record-to-Report (R2R): Kernprozess von Buchung bis Reporterstellung – Ziel: Fast Close ≤5 BD mit Parallel-Processing statt sequentiellem Ablauf",
          "Month-End Close: Typische Optimierung von 12→7→5 Tagen durch Close Checkliste, Task Dependencies, Automatisierung von Abstimmungen und Journal Entries",
          "Order-to-Cash (O2C): End-to-End von Vertragsabschluss über Billing bis Cash Collection – in SaaS: Integration von Subscription Management, Usage Billing und Revenue Recognition",
          "Procure-to-Pay (P2P): Vom Bestellanforderung über Genehmigung, Wareneingang, Invoice Matching bis Zahlung – 3-Way-Match als Standard-Control",
          "Planning & Forecasting: Jährlicher Budgetprozess + Rolling Forecast (monatlich/quartalsweise) + 13-Week Cash Flow Forecast für Lender Reporting",
          "Intercompany-Prozesse: Bei Multi-Entity-Strukturen kritisch – Abstimmung, Elimination, Transfer Pricing, Intercompany Loans",
          "Investor Reporting Workflow: Datensammlung → Validierung → Analyse → Narrativ → Review → Versand – standardisiert mit festen Deadlines",
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
          "Marketing-Prozesse werden zunehmend als end-to-end Workflows designt – von der Kampagnenidee bis zur Revenue Attribution.",
        items: [
          "Lead-to-MQL-to-SQL-Prozess: Definierte Qualifizierungskriterien, Scoring-Modell, Übergabeprotokoll an Sales mit SLA (z.B. Lead Response Time ≤4h)",
          "Campaign Execution Workflow: Briefing → Content Creation → Review/Approval → Setup → Launch → Monitoring → Reporting → Optimization",
          "Content Production Pipeline: Redaktionsplanung → Erstellung → Review → Design → Publishing → Distribution → Performance Tracking",
          "Budget Allocation & Reforecast: Quarterly Reallokation basierend auf Channel-Performance, CAC-Effizienz und Pipeline-Beitrag",
          "Marketing-to-Sales Handoff: Definierter Übergabepunkt mit Datenanreicherung, automatischem CRM-Update und Follow-Up-Tracking",
          "Event Management Workflow: Planung (T-12w) → Promotion → Execution → Follow-Up → ROI-Analyse",
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
      label: "Technologie, Daten & Infrastruktur",
      question: "WOMIT?",
      subtitle: "Werkzeuge & Fundament",
      description:
        "Das Fundament der Pyramide. Alles Weitere baut auf der Verfügbarkeit, Qualität und Integrität von Daten und Systemen auf. Ein ERP mit schlechter Datenqualität macht jeden darauf aufsetzenden Prozess unzuverlässig. Cloud-ERP-Lösungen setzen sich durch: 69% der Unternehmen haben bereits Cloud-ERP implementiert oder planen dies.",
      details: [
        "Core Systems: ERP, CRM, HCM – die transaktionalen Kernsysteme der Organisation",
        "Datenarchitektur: Data Warehouse / Data Lake, ETL/ELT-Pipelines, Datenmodell, Schnittstellen-Architektur",
        "Master Data Management: Einheitliche Stammdaten (Kunden, Produkte, Kontenplan, Kostenstellen) als Grundlage für konsistentes Reporting",
        "Integration Layer: API-Management, Middleware, iPaaS (z.B. Workato, MuleSoft, n8n) – Schnittstellen zwischen Systemen",
        "BI & Analytics: Reporting-Plattform (Power BI, Tableau, Looker), Self-Service Analytics, Dashboards",
        "Automatisierung: RPA (UiPath, Automation Anywhere), Low-Code/No-Code Plattformen, AI/ML für Anomalieerkennung und Forecasting",
        "Infrastruktur: Cloud (AWS, Azure, GCP) vs. On-Premise vs. Hybrid, Security, Backup, Disaster Recovery",
        "Datenqualität: Monitoring, Cleansing, Validierungsregeln – schlechte Daten kosten laut Gartner durchschnittlich $12,9M/Jahr",
      ],
      finance: {
        intro:
          "Der Finance Tech Stack in PE-backed SaaS Companies ist typischerweise ein Mix aus ERP, Konsolidierungstool, BI-Plattform und spezialisierten SaaS-Lösungen – oft historisch gewachsen und post-Akquisition fragmentiert.",
        items: [
          "ERP-System: SAP S/4HANA, Oracle NetSuite, Microsoft Dynamics 365, DATEV (DACH-Mittelstand) – Kern für GL, AP, AR, Fixed Assets",
          "Konsolidierung: LucaNet, CCH Tagetik, OneStream, SAP Group Reporting – Multi-Entity-Konsolidierung mit IC-Elimination",
          "FP&A / CPM: Jedox, Adaptive Planning (Workday), Pigment, Abacum – für Budgetierung, Forecasting, Szenarioanalyse",
          "BI & Reporting: Power BI, Tableau, Looker – Self-Service Dashboards für Investor KPIs (ARR, NRR, Churn, LTV/CAC)",
          "Revenue Recognition: Zuora Revenue, RevPro – speziell für SaaS-Abrechnungsmodelle (Usage, Subscription, Multi-Element)",
          "Billing & Subscription Management: Zuora, Chargebee, Stripe Billing – Integration in GL für automatisierte Revenue Recognition",
          "Datenmodell: Einheitliche ARR-/MRR-Berechnung über alle Entities, Kohortenanalyse-fähige Datenstruktur, Customer-Level Profitability",
          "Automatisierung: VBA-Macros für Legacy-Reporting, RPA für repetitive Tasks, zunehmend AI für Anomalieerkennung in Transaktionsdaten",
        ],
        kpis: [
          "System Uptime (%)",
          "Data Quality Score (%)",
          "Integration Error Rate",
          "Report Generation Time",
          "Automation Rate (% automatisierte Prozessschritte)",
        ],
      },
      marketing: {
        intro:
          "Der MarTech Stack wächst kontinuierlich – durchschnittlich nutzen Unternehmen 91 Marketing-Tools. Entscheidend ist nicht die Anzahl, sondern die Integration und Datenflüsse zwischen den Systemen.",
        items: [
          "CRM: Salesforce, HubSpot, Microsoft Dynamics – Single Source of Truth für Kundendaten und Pipeline",
          "Marketing Automation: HubSpot, Marketo, Pardot – Lead Nurturing, Email Marketing, Scoring, Workflow Automation",
          "CDP (Customer Data Platform): Segment, mParticle – Unified Customer Profile über alle Touchpoints",
          "Attribution & Analytics: Google Analytics 4, Bizible (Marketo), HubSpot Attribution – Multi-Touch Attribution für Revenue Reporting",
          "Content Management: WordPress, Contentful – Publishing, SEO, Content Performance Tracking",
          "Paid Media: Google Ads, LinkedIn Campaign Manager, Meta Ads – mit Bidding-Optimierung und Conversion-Tracking",
          "Sales Enablement: Highspot, Seismic – Content Management für Sales, Usage Analytics, Buyer Engagement",
          "Integration: iPaaS (Workato, Zapier, n8n) für Datenflüsse zwischen MarTech-Systemen und CRM/ERP",
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
