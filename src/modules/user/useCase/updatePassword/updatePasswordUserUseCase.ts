import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositore/IUserRepository";
import { User } from "@prisma/client";
import { IUpdatePasswordUserDTO } from "../../dto/IUpdatePasswordUserDTO";
import { hash } from "bcrypt";
import PasswordValidator from "password-validator";
import AppError from "../../../../shared/errors/AppErrors";

@injectable()
class UpdatePasswordUserUseCase {
	constructor(
		@inject("UserRepository")
		private userRepositorie: IUserRepository
	) {}

	async execute({ id, password }: IUpdatePasswordUserDTO): Promise<User> {
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
		if (schema.validate(password || "")) {
			throw new AppError("Email or password incorrect", 400);
		}

		const passwordHash = await hash(password || "", 8);

		return await this.userRepositorie.updatePassword({
			id,
			password: passwordHash,
		});
	}
}

export { UpdatePasswordUserUseCase };
