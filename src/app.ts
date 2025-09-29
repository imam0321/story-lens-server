import cors from "cors"
import express from "express";
import type { Application, Request, Response } from "express";
import { envVars } from "./app/config/env";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import { router } from "./app/routes";

const app: Application = express();


app.use(express.json());
app.set("trust proxy", 1);
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: envVars.FRONTEND_URL,
    credentials: true,
  })
);

app.use('/api/v1', router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Tour Matrix Server",
  });
});

app.use(globalErrorHandler)

app.use(notFound)

export default app;