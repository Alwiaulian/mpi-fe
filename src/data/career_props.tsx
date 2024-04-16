export interface CarreerProps {
  title: string;
  level: string;
  placement: string;
  responsibility: string[];
  requirements: string[];
}

export const CAREERS: CarreerProps[] = [
  {
    title: "Internal Audit Officer",
    level: "Offering",
    placement: "Head Office",
    responsibility: [
      "Evaluate financial documents for accuracy and compliance with federal regulations.",
      "Identify the financial risk of the organization and offer recommendations to reduce risk. ",
      "Identify accounting and financial record-keeping processes that can be improved.",
      "Determine ways to cut costs and improve profitability.",
      "Assess the efficiency and productivity of internal staff and make recommendations for improvement.",
      "Present findings to upper management in the form of reports and presentations.",
    ],
    requirements: [
      "Strong communication skills to work with.",
      "Accountants and other coworkers",
      "Excellent attention to detail to review large amounts of data and numbers",
      "Exceptional mathematical skills to verify entries",
      "Good critical-thinking skills to gather all of the available data and make informed decisions",
      "Excellent research skills to find all related information needed",
    ],
  },
];
