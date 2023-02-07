import { PrismaClient } from "@prisma/client";
import { PostArgs } from "../model/types";

const prisma = new PrismaClient({ log: ['query', 'info'] });

export const getPostList = async () => {
  return await prisma.post.findMany({
    include: {
      user: true
    }
  });
}

export const getSinglePost = async (id: string) => {
  return await prisma.post.findFirst({
    where: {
      id
    },
    include: {
      user: true
    }
  });
}

export const addPost = async ({ title, text, userId }: PostArgs) => {
  return await prisma.post.create({
    data: {
      title,
      text,
      userId,
    }
  });
}

export const deletePost = async (id: string) => {
  return await prisma.post.delete({
    where: {
      id
    }
  });
}

export const updatePost = async (id: string, title: string, text: string) => {
  return await prisma.post.update({
    data: {
      title,
      text,
    },
    where: {
      id
    }
  });
}
