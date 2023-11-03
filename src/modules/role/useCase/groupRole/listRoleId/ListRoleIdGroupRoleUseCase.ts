import { inject, injectable } from "tsyringe";
import { IGroupRoleRepository } from "../../../repositorie/IGroupRoleRepository";
import { IListRoleIdGroupRoleDTO } from "../../../dto/groupRole/IListRoleIdGroupRoleDTO";
import { GroupRole } from "@prisma/client";

@injectable()
class ListRoleIdGroupRoleUseCase {
	constructor(
		@inject("GroupRoleRepository")
		private groupRoleRepository: IGroupRoleRepository
	) {}

	async execute({ role_id }: IListRoleIdGroupRoleDTO): Promise<GroupRole[]> {
		return await this.groupRoleRepository.listRoleId({ role_id });
	}
}

export { ListRoleIdGroupRoleUseCase };
