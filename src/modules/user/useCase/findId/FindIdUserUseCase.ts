import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositore/IUserRepository";
import { IFindIdUserDTO } from "../../dto/IFindIdUserDTO";
import AppError from "../../../../shared/errors/AppErrors";
import isUUID from "../../../../shared/lib/isUUID";

@injectable()
class FindIdUserUseCase {
   constructor(
      @inject("UserRepository")
      private userRepository: IUserRepository
   ) {}

   async execute({ id }: IFindIdUserDTO): Promise<{ id: string } | null> {
      if (!isUUID(id)) {
         throw new AppError("id invalid", 400);
      }

      return await this.userRepository.findId({ id });
   }
}

export { FindIdUserUseCase };
