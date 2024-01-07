import { inject, injectable } from "tsyringe";
import { IUserBankRepository } from "../../repositories/IUserBankRepository";
import { UserBank } from "@prisma/client";

@injectable()
class ListUserBankUseCase {
   constructor(
      @inject("UserBankRepository")
      private userBankRepository: IUserBankRepository
   ) {}

   async execute(): Promise<UserBank[]> {
      return await this.userBankRepository.list();
   }
}

export { ListUserBankUseCase };
