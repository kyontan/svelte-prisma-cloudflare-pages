import Prisma from "@prisma/client";
const { PrismaClient } = Prisma;

export const prisma = new PrismaClient();
// export const createPrismaClient = () => {
//   return new PrismaClient();
// };
