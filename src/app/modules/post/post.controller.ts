import { Request, Response } from "express";
import { PostService } from "./post.service";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const createPost = catchAsync(async (req: Request, res: Response) => {

  const result = await PostService.createPost(req.body)
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Post create successfully",
    data: result,
  });

})

export const PostController = {
  createPost
}