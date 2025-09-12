import cors from "cors"
import express from "express";
import type { Application, Request, Response } from "express";
import { envVars } from "./app/config/env";

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


app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Tour Matrix Server",
  });
});



export default app;