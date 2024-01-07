import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositore/IUserRepository";
import { User } from "@prisma/client";
import { IFindIdUserDTO } from "../../dto/IFindIdUserDTO";

@injectable()
class FindMyUserUseCase {
   constructor(
      @inject("UserRepository")
      private userRepository: IUserRepository
   ) {}

   async execute({ id }: IFindIdUserDTO): Promise<User | null> {
      return await this.userRepository.findId({ id });
   }
}

export { FindMyUserUseCase };
