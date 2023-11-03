import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import AppError from "../shared/errors/AppErrors";
import { UserRepository } from "../modules/user/repositore/implemantion/UserRepository";
import { GroupRoleRepository } from "../modules/role/repositorie/implemantion/GroupRoleRepository";
import Logger from "../shared/logger/Logger";

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

		const userRepository = new UserRepository();

		const usersVerify = await userRepository.listId({ id: user_id });

		if (!usersVerify) {
			Logger.warn(
				`user: ${user_id} tried to authenticate but is not registerede`
			);
			throw new AppError("User not exist", 400);
		}

		const groupRoleRepository = new GroupRoleRepository();
		const userGroupRole = await groupRoleRepository.listUserId({ user_id });

		if (!userGroupRole) {
			Logger.warn(
				`user: ${user_id} tried to authenticate but did not have a registered rule`
			);
			throw new AppError("error authenticating user");
		}

		request.user = {
			id: usersVerify.id,
			role_id: userGroupRole.role_id,
		};

		next();
	} catch {
		throw new AppError("token invalid", 401);
	}
}
