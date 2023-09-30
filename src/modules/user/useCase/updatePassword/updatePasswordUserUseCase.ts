import { inject, injectable } from "tsyringe";
import { IUserRepositorie } from "../../repositore/IUserRepository";
import { User } from "@prisma/client";
import { IUpdatePasswordUserDTO } from "../../dto/IUpdatePasswordUserDTO";
import { hash } from "bcrypt";

@injectable()
class UpdatePasswordUserUseCase {
	constructor(
		@inject("UserRepository")
		private userRepositorie: IUserRepositorie
	) {}

	async execute({ id, password }: IUpdatePasswordUserDTO): Promise<User> {
		const passwordHash = await hash(password || "", 8);

		return await this.userRepositorie.updatePassword({
			id,
			password: passwordHash,
		});
	}
}

export { UpdatePasswordUserUseCase };
