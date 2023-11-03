import { inject, injectable } from "tsyringe";
import { IGroupRoleRepository } from "../../../repositorie/IGroupRoleRepository";
import { GroupRole } from "@prisma/client";

@injectable()
class ListGroupRoleUseCase {
	constructor(
		@inject("GroupRoleRepository")
		private groupRoleRepository: IGroupRoleRepository
	) {}

	async execute(): Promise<GroupRole[]> {
		return await this.groupRoleRepository.list();
	}
}

export { ListGroupRoleUseCase };
