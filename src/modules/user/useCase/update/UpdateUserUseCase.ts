import { inject, injectable } from "tsyringe";
import { IUserRepositorie } from "../../repositore/IUserRepository";
import { IUpdateUserDTO } from "../../dto/IUpdateUserDTO";
import { User } from "@prisma/client";

@injectable()
class UpdateUserUseCase {
	constructor(
		@inject("UserRepository")
		private userRepository: IUserRepositorie
	) {}

	async execute(data: IUpdateUserDTO): Promise<User> {
		const resp = await this.userRepository.update(data);

		return resp;
	}
}

export { UpdateUserUseCase };
