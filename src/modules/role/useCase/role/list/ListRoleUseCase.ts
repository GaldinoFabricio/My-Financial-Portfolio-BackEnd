import { inject, injectable } from "tsyringe";
import { IRoleRepository } from "../../../repositorie/IRoleRepository";
import { Role } from "@prisma/client";

@injectable()
class ListRoleUseCase {
	constructor(
		@inject("RoleRepository")
		private roleRepository: IRoleRepository
	) {}

	async execute(): Promise<Role[]> {
		return await this.roleRepository.list();
	}
}

export { ListRoleUseCase };
