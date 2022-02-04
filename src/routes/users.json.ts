import { prisma } from "$lib/prisma";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
  const users = await prisma.users.findMany();

  return {
    status: 200,
    body: users,
  }
}
