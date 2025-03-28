import * as dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { customSeed } from "./customSeed";

if (require.main === module) {
  dotenv.config();

  const { BCRYPT_SALT } = process.env;

  if (!BCRYPT_SALT) {
    throw new Error("BCRYPT_SALT environment variable must be defined");
  }
}

async function seed() {
  console.info("Seeding database...");

  const client = new PrismaClient();
  
  try {
    console.info("Seeding database with custom seed...");
    await customSeed();
    
    console.info("Seeded database successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await client.$disconnect();
  }
}
