import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createUser(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
}

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUser();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).send(error);
  }
}

const getUserById = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUserById(Number(req.params.id));
    res.status(200).json(result);
  } catch (error) {
    res.status(404).send(error);
  }
}

export const UserController = {
  createUser,
  getAllUser,
  getUserById
}