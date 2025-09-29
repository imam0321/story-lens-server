import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await UserService.createUser(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User registered successfully",
    data: result,
  });
})

const getAllUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await UserService.getAllUser();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "All User retrieved successfully",
    data: result,
  });

})

const getUserById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await UserService.getUserById(Number(req.params.id));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Single User retrieved successfully",
    data: result,
  });
})

const updateUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await UserService.updateUser(Number(req.params.id), req.body)

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User update successfully",
    data: result,
  });
})

const deleteUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await UserService.deleteUser(Number(req.params.id))
  
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User deleted successfully",
    data: result,
  });
})

export const UserController = {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser
}