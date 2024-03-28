import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { errors, isCelebrateError } from "celebrate";
import "reflect-metadata";
import "express-async-errors";

import { routes } from "./routes/index.routes";
import "./database";
import AppError from "./shared/errors/AppErrors";
import Logger from "./shared/logger/Logger";
import morganMiddleware from "./config/morganMidlware";

const app = express();

app.use(cors());

app.use(express.json());

app.use(morganMiddleware);

app.use(routes);

app.use(errors());

app.use(
   (error: Error, request: Request, response: Response, _: NextFunction) => {
      if (error instanceof AppError) {
         return response.status(error.statusCode).json({
            status: "error",
            message: error.message,
         });
      }

      if (isCelebrateError(error)) {
         const labelErrors: String[] = [];

         error.details.forEach((detail) => {
            detail.details.forEach((errors) => {
               errors.context?.label && labelErrors.push(errors.context.label);
            });
         });

         return response.status(400).json({
            status: "error",
            message: `Incorrect parameters: ${labelErrors.join(", ")}`,
         });
      }
      console.log(error);
      return response.status(500).json({
         status: "error",
         message: "Internal Server Error",
      });
   }
);

export default app;
