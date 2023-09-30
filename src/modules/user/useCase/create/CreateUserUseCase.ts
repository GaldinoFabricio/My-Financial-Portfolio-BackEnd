import { inject, injectable } from "tsyringe";
import { IUserRepositorie } from "../../repositore/IUserRepository";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { hash } from "bcrypt";

@injectable()
class CreateUserUseCase {
	constructor(
		@inject("UserRepository")
		private userRepository: IUserRepositorie
	) {}

	async execute({ email, name, password }: ICreateUserDTO): Promise<void> {
		const passwordHash = await hash(password, 8);

		await this.userRepository.create({ email, name, password: passwordHash });
	}
}

export { CreateUserUseCase };
