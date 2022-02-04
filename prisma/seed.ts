import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

// https://github.com/prisma/prisma/pull/4920#issuecomment-864385313
// import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const users = [
  { name: "alice" },
  { name: "bob" },
  { name: "sana" },
];

users.forEach(async user => {
  await prisma.users.create({
    data: user,
  });
});
