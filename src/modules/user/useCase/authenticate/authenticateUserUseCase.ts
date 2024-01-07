import { inject, injectable } from "tsyringe";
import { IAuthenticateUserDTO } from "../../dto/IAuthenticateUserDTO";
import { GenerateTokenProvider } from "../../../../shared/provider/GenerateTokenProvider";
import AppError from "../../../../shared/errors/AppErrors";
import { compare } from "bcrypt";
import { IUserRepository } from "../../repositore/IUserRepository";
import PasswordValidator from "password-validator";

interface IReponse {
   token: string;
   user: {
      name: string;
   };
}

@injectable()
class AuthenticateUserUseCase {
   constructor(
      @inject("UserRepository") private userRepository: IUserRepository
   ) {}

   async execute({ email, password }: IAuthenticateUserDTO): Promise<IReponse> {
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
         throw new AppError("Email or password incorrect", 401);
      }

      const verifyUser = await this.userRepository.findEmail({ email });
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
