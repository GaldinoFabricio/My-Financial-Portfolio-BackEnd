import { inject, injectable } from "tsyringe";
import { IGroupRoleRepository } from "../../../repositorie/IGroupRoleRepository";
import { IListUserIdGroupRoleDTO } from "../../../dto/groupRole/IListUserIdGroupRoleDTO";
import { GroupRole } from "@prisma/client";

@injectable()
class ListUserIdGroupRoleUseCase {
	constructor(
		@inject("GroupRoleRepository")
		private groupRoleRepository: IGroupRoleRepository
	) {}

	async execute({
		user_id,
	}: IListUserIdGroupRoleDTO): Promise<GroupRole | null> {
		return await this.groupRoleRepository.listUserId({ user_id });
	}
}

export { ListUserIdGroupRoleUseCase };
