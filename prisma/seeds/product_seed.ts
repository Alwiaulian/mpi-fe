import { PrismaClient } from "@prisma/client";

export async function ProductSeeder(prisma: PrismaClient) {
  await prisma.products.create({
    data: {
      name: "Antangin JRG",
      image: "/images/products/antangin.png",
      description:
        "Herbal cold syrup with the main ingredients of Ginger, Royal Jelly and Ginseng.",
      indications:
        "Helps relieve colds, chills, nausea, flatulence, fatigue and dizziness and soothes the throat",
    },
  });
}
