import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import AppError from "../shared/errors/AppErrors";
import { UserRepositorie } from "../modules/user/repositore/implemantion/UserRepository";

interface IPayload {
	sub: string;
}

export async function ensureAuthenticate(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const authToken = request.headers.authorization;

	if (!authToken) {
		throw new AppError("Token is missing", 401);
	}

	const [, token] = authToken.split(" ");

	try {
		const { sub: user_id } = verify(
			token,
			`${process.env.KEY_TOKEN}`
		) as IPayload;

		if (!user_id) {
			throw new AppError("Token is missing", 401);
		}

		const userRepository = new UserRepositorie();

		const usersVerify = await userRepository.listId({ id: user_id });

		if (!usersVerify) {
			throw new AppError("User not exist", 400);
		}

		request.user = usersVerify;

		next();
	} catch {
		throw new AppError("token invalid", 401);
	}
}
