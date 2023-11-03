import { inject, injectable } from "tsyringe";
import { IGroupRoleRepository } from "../../../repositorie/IGroupRoleRepository";
import { ICreateGroupRoleDTO } from "../../../dto/groupRole/ICreateGroupRoleDTO";

@injectable()
class CreateGroupRoleUseCase {
	constructor(
		@inject("GroupRoleRepository")
		private groupRoleRepository: IGroupRoleRepository
	) {}

	async execute({ role_id, user_id }: ICreateGroupRoleDTO): Promise<void> {
		await this.groupRoleRepository.create({ role_id, user_id });
	}
}

export { CreateGroupRoleUseCase };
