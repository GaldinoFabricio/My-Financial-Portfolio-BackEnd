import { inject, injectable } from "tsyringe";
import { IRoleRepository } from "../../../repositorie/IRoleRepository";
import { IUpdateRoleDTO } from "../../../dto/role/IUpdateRoleDTO";
import { Role } from "@prisma/client";
import AppError from "../../../../../shared/errors/AppErrors";
import { IUpdateRoleRequest } from "../../../dto/role/IUpdateRoleRequest";
import Logger from "../../../../../shared/logger/Logger";
import { format } from "morgan";

@injectable()
class UpdateRoleUseCase {
	constructor(
		@inject("RoleRepository")
		private roleRepository: IRoleRepository
	) {}

	async execute({ id, name, user_id }: IUpdateRoleRequest): Promise<Role> {
		const checkExistRole = await this.roleRepository.listId({ id });
		if (!checkExistRole) {
			Logger.warn(`Usuario: ${user_id} tentou alterar a regra id: ${id}`);
			throw new AppError("Role not exist");
		}

		Logger.warn(
			`Usuario: ${user_id} alterou a regra id: ${id} as ${format(
				new Date().toString(),
				"dd/MM/yyyy HH:mm:ss"
			)}`
		);
		return await this.roleRepository.update({ id, name });
	}
}

export { UpdateRoleUseCase };
