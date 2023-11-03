import { inject, injectable } from "tsyringe";
import { IGroupRoleRepository } from "../../../repositorie/IGroupRoleRepository";
import { IUpdateGroupRoleDTO } from "../../../dto/groupRole/IUpdateGroupRoleDTO";
import { GroupRole } from "@prisma/client";

@injectable()
class UpdateGroupRoleUseCase {
	constructor(
		@inject("GroupRoleRepository")
		private groupRoleRepository: IGroupRoleRepository
	) {}

	async execute({
		id,
		role_id,
		user_id,
	}: IUpdateGroupRoleDTO): Promise<GroupRole> {
		return await this.groupRoleRepository.update({ id, role_id, user_id });
	}
}

export { UpdateGroupRoleUseCase };
