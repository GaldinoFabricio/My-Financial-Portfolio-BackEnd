import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositore/IUserRepository";
import { User } from "@prisma/client";
import { IListIdUserDTO } from "../../dto/IListIdUserDTO";

@injectable()
class ListMyUserUseCase {
	constructor(
		@inject("UserRepository")
		private userRepository: IUserRepository
	) {}

	async execute({ id }: IListIdUserDTO): Promise<User | null> {
		return await this.userRepository.listId({ id });
	}
}

export { ListMyUserUseCase };
