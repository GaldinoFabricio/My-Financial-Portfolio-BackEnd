import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositore/IUserRepository";
import { IUpdateUserDTO } from "../../dto/IUpdateUserDTO";
import { User } from "@prisma/client";

@injectable()
class UpdateUserUseCase {
   constructor(
      @inject("UserRepository")
      private userRepository: IUserRepository
   ) {}

   async execute(data: IUpdateUserDTO): Promise<User> {
      return await this.userRepository.update(data);
   }
}

export { UpdateUserUseCase };
