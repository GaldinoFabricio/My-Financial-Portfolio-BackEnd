import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositore/IUserRepository";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { hash } from "bcrypt";
import PasswordValidator from "password-validator";
import AppError from "../../../../shared/errors/AppErrors";

@injectable()
class CreateUserUseCase {
	constructor(
		@inject("UserRepository")
		private userRepository: IUserRepository
	) {}

	async execute({ email, name, password }: ICreateUserDTO): Promise<void> {
		const schema = new PasswordValidator();

		schema
			.is()
			.min(8)
			.is()
			.max(100)
			.has()
			.uppercase()
			.has()
			.lowercase()
			.has()
			.digits(2)
			.has()
			.not()
			.spaces()
			.is()
			.not()
			.oneOf(["Passw0rd", "Password123", "1234568"]);
		if (schema.validate(password)) {
			throw new AppError("Email or password incorrect", 400);
		}

		const verifyUser = await this.userRepository.listEmail({ email });
		if (!verifyUser) {
			throw new AppError("Email has registred", 400);
		}

		const passwordHash = await hash(password, 8);

		await this.userRepository.create({ email, name, password: passwordHash });
	}
}

export { CreateUserUseCase };
