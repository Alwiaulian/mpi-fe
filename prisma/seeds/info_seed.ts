import { PrismaClient } from "@prisma/client";

export async function InfoSeeder(prisma: PrismaClient) {
  await prisma.info.createMany({
    data: [
      {
        name: "Pelaporan WBS System",
        image: "/images/info/web.webp",
      },
      {
        name: "Pelaporan Gratifikasi",
        image: "/images/info/gratifikasi.webp",
      },
    ],
  });
}
