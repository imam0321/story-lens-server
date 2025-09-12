import { Prisma, User } from "@prisma/client"
import { prisma } from "../../config/db"

const createUser = async (payload: Prisma.UserCreateInput): Promise<User> => {
  const createUser = await prisma.user.create({
    data: payload
  })
  return createUser
}

const getAllUser = async () => {
  const allUser = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      picture: true,
      role: true,
      status: true,
      isVerified: true,
      createAt: true,
      updatedAt: true,
    },
    orderBy: {
      createAt: "asc"
    }
  })
  return allUser
}

const getUserById = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      picture: true,
      role: true,
      status: true,
      isVerified: true,
      createAt: true,
      updatedAt: true,
    },
  })
  return user
}


export const UserService = {
  createUser,
  getAllUser,
  getUserById
}