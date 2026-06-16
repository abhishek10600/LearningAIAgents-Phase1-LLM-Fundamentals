import express, { Request, Response } from "express";
import helmet from "helmet";
import { requestLogger } from "./middlewares/request-logger.middleware.js";

export const app = express();

app.use(helmet());
app.use(requestLogger);

app.get("/health", (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    message: "Api is working fine and healthy",
  });
});
