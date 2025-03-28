import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

export async function customSeed() {
  const client = new PrismaClient();
  const salt = process.env.BCRYPT_SALT ? parseInt(process.env.BCRYPT_SALT) : 10;

  try {
    // Проверяем, существует ли уже пользователь admin
    const existingUser = await client.user.findFirst({
      where: { username: "admin" },
    });

    if (!existingUser) {
      // Создаем пользователя admin
      await client.user.create({
        data: {
          username: "admin",
          password: await bcrypt.hash("admin", salt),
          roles: ["user"],
          email: "admin@example.com",
        },
      });
      console.log("Created admin user");
    } else {
      console.log("Admin user already exists");
    }
  } catch (error) {
    console.error("Error creating admin user:", error);
  } finally {
    await client.$disconnect();
  }
}
