import { PrismaClient } from "@prisma/client";
import { UserArgs } from "../model/types";

const prisma = new PrismaClient({ log: ['query', 'info'] });

export const getUserList = async () => {
  return await prisma.user.findMany({
    include: {
      posts: true
    }
  });
}

export const getSingleUser = async (id: string) => {
  return await prisma.user.findFirst({
    where: {
      id
    },
    include: {
      posts: true
    }
  });
}

export const addUser = async ({ username, firstName, lastName }: UserArgs) => {
  return await prisma.user.create({
    data: {
      username,
      firstName,
      lastName,
    }
  });
}
