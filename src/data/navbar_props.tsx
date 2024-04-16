export interface NavigationProps {
  title: string;
  href: string;
  subMenu?: NavigationProps[];
}

export const NAV_ESG: NavigationProps[] = [
  {
    title: "GMS",
    href: "/esg/gms",
  },
  {
    title: "Reporting",
    href: "/esg/reporting",
  },
  {
    title: "Shareholders",
    href: "/esg/shareholders",
  },
];

export const NAV_MANAGEMENT: NavigationProps[] = [
  {
    title: "Commissioner",
    href: "/management/commissioner",
  },
  {
    title: "Director",
    href: "/management/director",
  },
  {
    title: "Audit Committe",
    href: "/management/audit",
  },
  {
    title: "National and Remuneration Committee",
    href: "/management/national-and-remuneration-committee",
  },
  {
    title: "Risk Management Committee",
    href: "/management/risk-management-committee",
  },
  {
    title: "Company Secretary",
    href: "/management/company-secretary",
  },
  {
    title: "Professions and Supporting Institutions",
    href: "/management/supporting-professions",
  },
];

export const NAV_MENU: NavigationProps[] = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Management",
    href: "/management",
    subMenu: NAV_MANAGEMENT,
  },
  {
    title: "Business",
    href: "/business",
  },
  {
    title: "Career",
    href: "/career",
  },
  {
    title: "News",
    href: "/news",
  },
  {
    title: "ESG",
    href: "/esg",
    subMenu: NAV_ESG,
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
];
