import { NextFunction, Request, Response } from "express";
import { GroupRoleRepository } from "../modules/role/repositorie/implemantion/GroupRoleRepository";
import AppError from "../shared/errors/AppErrors";
import Logger from "../shared/logger/Logger";

export async function ensureRoleAuthenticate(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const { name } = request.roles;

	const { role_id, id } = request.user;

	const groupRoleRepository = new GroupRoleRepository();
	const userGroupRoleVerify = await groupRoleRepository.checkUserRole({
		role_id,
		user_id: id,
	});

	if (!userGroupRoleVerify) {
		Logger.warn(
			`user: ${id} tried to authenticate but did not have a registered rule`
		);
		throw new AppError("error authenticating user");
	}

	if (name === userGroupRoleVerify.role.name) {
		Logger.warn(
			`user: ${id} tried to access route that has not been released`
		);
		throw new AppError("Acess Denied");
	}

	next();
}
