export interface DepartmentText {
  intro: string;
  items: string[];
  kpis: string[];
}

export interface LayerText {
  label: string;
  question: string;
  subtitle: string;
  description: string;
  details: string[];
  finance: DepartmentText;
  marketing: DepartmentText;
}

export interface Translation {
  pageTitle: string;
  pageSubtitle: string;
  bottomUp: string;
  implementation: string;
  topDown: string;
  design: string;
  legendDesignTitle: string;
  legendImplementationTitle: string;
  legendDesignText: string;
  legendImplementationText: string;
  tabOverview: string;
  tabFinance: string;
  tabMarketing: string;
  coreElements: string;
  relevantKpis: string;
  financeDetails: string;
  marketingDetails: string;
  exportLabel: string;
  exportingLabel: string;
  notFoundTitle: string;
  notFoundMessage: string;
  returnHome: string;
  languageLabel: string;
  layers: LayerText[];
}
