import { Router } from "express";
import { UserRouter } from "../modules/user/user.routes";
import { PostRouter } from "../modules/post/post.routes";

export const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRouter,
  },
  {
    path: "/post",
    route: PostRouter,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});