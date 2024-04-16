import { PrismaClient } from "@prisma/client";
import { BranchesSeeder } from "./seeds/branch_seed";
import { ProductSeeder } from "./seeds/product_seed";
import { InfoSeeder } from "./seeds/info_seed";

const prisma = new PrismaClient();

async function main() {
  await BranchesSeeder(prisma);

  await ProductSeeder(prisma);

  await InfoSeeder(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
