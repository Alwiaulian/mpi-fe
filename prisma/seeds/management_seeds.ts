import { PrismaClient } from "@prisma/client";

// const roles = [
//     'Commissioner',
//     'Auditor',
//     'Director',
//     'Committee',
// ]

// const divisions = [
//   "President Commissioner",
//   "Independent Commissioner",
//   "Director",
//   "Audit Committee",
//   "Risk Management Committee",
//   "Company Secretary",
// ];

const divisions = [
  "Commissioner",
  "Audit Committee",
  "Director",
  "Secretary Company",
  "Committee",
  "Offering",
  "Specialist",
  "Manager",
  "Supervisor",
  "Staff",
  "Intern",
];

export async function ManagementSeeder(prisma: PrismaClient) {
  //   await prisma.divisions.createMany({
  //     data: divisions.map((division) => ({ title: division })),
  //   });

  await prisma.divisions.create({
    data: {
      title: "Commissioner",
      subDivisions: {
        create: [
          {
            title: "President",
          },
          {
            title: "Independent",
          },
        ],
      },
    },
  });

  await prisma.divisions.create({
    data: {
      title: "Audit Committee",
      subDivisions: {
        create: [
          {
            title: "Lead",
          },
          {
            title: "Member",
          },
        ],
      },
    },
  });

  await prisma.divisions.create({
    data: {
      title: "Committee",
      subDivisions: {
        create: [
          {
            title: "Lead Committee Audit",
          },
          {
            title: "Member",
          },
        ],
      },
    },
  });
}
