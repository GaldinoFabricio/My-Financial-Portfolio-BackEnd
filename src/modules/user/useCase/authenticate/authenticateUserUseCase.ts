import { inject, injectable } from "tsyringe";
import { IUserRepositorie } from "../../repositore/IUserRepository";
import { IAuthenticateUserDTO } from "../../dto/IAuthenticateUserDTO";
import { GenerateTokenProvider } from "../../../../shared/provider/GenerateTokenProvider";
import AppError from "../../../../shared/errors/AppErrors";
import { compare } from "bcrypt";

interface IReponse {
	token: string;
	user: {
		name: string;
	};
}

@injectable()
class AuthenticateUserUseCase {
	constructor(
		@inject("UserRepository") private userRepositorie: IUserRepositorie
	) {}

	async execute({ email, password }: IAuthenticateUserDTO): Promise<IReponse> {
		const verifyUser = await this.userRepositorie.listEmail({ email });

		if (!verifyUser) {
			throw new AppError("Email or password incorrect", 401);
		}

		const passwordMatch = await compare(password, verifyUser.password);

		if (!passwordMatch) {
			throw new AppError("Email or password incorrect", 401);
		}

		const generateTokenProvider = new GenerateTokenProvider();

		const token = await generateTokenProvider.execute(verifyUser.id);

		const tokenReturn = {
			token,
			user: { name: verifyUser.name },
		};

		return tokenReturn;
	}
}

export { AuthenticateUserUseCase };
