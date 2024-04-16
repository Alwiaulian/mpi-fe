import { PrismaClient } from "@prisma/client";

const levels = [
  "Intern",
  "Staff",
  "Senior Staff",
  "Supervisor",
  "Senior Supervisor",
  "Manager",
  "Senior Manager",
  "Specialist",
  "Offering",
];

export async function CareerSeeder(prisma: PrismaClient) {
  await prisma.careerLevel.createMany({
    data: levels.map((level) => ({ name: level })),
  });

  await prisma.career.createMany({
    data: [
      {
        title: "Internal Audit Officer",
        description: `
            <p><strong>Responsibilities</strong></p>
            <ul>
                <li>Evaluate financial documents for accuracy and compliance with federal regulations </li>
                <li>Identify the financial risk of the organization and offer recommendations to reduce risk. </li>
                <li>Identify accounting and financial record-keeping processes that can be improved </li>
                <li>Determine ways to cut costs and improve profitability </li>
                <li>Assess the efficiency and productivity of internal staff and make recommendations for improvement </li> 
                <li>Present findings to upper management in the form of reports and presentations</li>
            </ul>
            
            <p><strong>Requirements</strong></p>
            <ul>    
                <li>Strong communication skills to work with </li> 
                <li>Accountants and other coworkers </li>
                <li>Excellent attention to detail to review large amounts of data and numbers </li>
                <li>Exceptional mathematical skills to verify entries </li>
                <li>Good critical-thinking skills to gather all of the available data and make informed decisions </li>
                <li>Excellent research skills to find all related information needed </li>
            </ul>
            `,
        careerLevelId: 8,
        careerPlacementId: 1,
      },
    ],
  });
}
