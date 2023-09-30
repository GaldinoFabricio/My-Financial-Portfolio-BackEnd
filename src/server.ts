import express, { NextFunction, Request, Response } from "express";
import { errors, isCelebrateError } from "celebrate";
import "reflect-metadata";
import "express-async-errors";

import { routes } from "./routes/index.routes";
import "./database";
import "./shared/container";
import AppError from "./shared/errors/AppErrors";

const PORT = 3333;

const app = express();

app.use(express.json());

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

		return response.status(500).json({
			status: "error",
			message: "Internal Server Error",
		});
	}
);

app.listen(PORT, () => "server is running on port 3333");
