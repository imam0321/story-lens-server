import { NextFunction, Request, Response } from "express";
import { PostService } from "./post.service";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const createPost = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await PostService.createPost(req.body)

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Post create successfully",
    data: result,
  });
})

const getAllPosts = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await PostService.getAllPosts();

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "All Post retrieved successfully",
      data: result,
    });
  }
)

const getPostById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const post = await PostService.getPostById(Number(req.params.id));

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Post retrieved successfully",
      data: post,
    });
  }
);


const updatePost = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const post = await PostService.updatePost(Number(req.params.id), req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Post updated successfully",
    data: post,
  });
})

const deletePost = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const post = await PostService.deletePost(Number(req.params.id));
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Post deleted successfully",
      data: post,
    });
  }
)

export const PostController = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost
}