import { inject, injectable } from "tsyringe";
import { IRoleRepository } from "../../../repositorie/IRoleRepository";
import { ICreateRoleDTO } from "../../../dto/role/ICreateRoleDTO";
import AppError from "../../../../../shared/errors/AppErrors";
import Logger from "../../../../../shared/logger/Logger";
import { ICreateRoleRequest } from "../../../dto/role/ICreateRoleRequest";
import { format } from "morgan";

@injectable()
class CreateRoleUseCase {
	constructor(
		@inject("RoleRepository")
		private roleRepository: IRoleRepository
	) {}

	async execute({ name, user_id }: ICreateRoleRequest): Promise<void> {
		const checkExistRole = await this.roleRepository.listName({ name });
		if (checkExistRole) {
			Logger.warn(
				`Usuario ${user_id} tentou criar uma nova regra chamada ${name}`
			);
			throw new AppError("Role already exist");
		}

		Logger.warn(
			`Usuario: ${user_id} criou uma nova regra de nome: ${name} as ${format(
				new Date().toString(),
				"dd/MM/yyyy HH:mm:ss"
			)}`
		);
		await this.roleRepository.create({ name });
	}
}

export { CreateRoleUseCase };
