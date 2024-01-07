import { inject, injectable } from "tsyringe";
import { IUserBankRepository } from "../../repositories/IUserBankRepository";
import { IListIdUserBankDTO } from "../../dto/IListIdUserBankDTO";
import { UserBank } from "@prisma/client";

@injectable()
class ListIdUserBankUseCase {
   constructor(
      @inject("UserBankRepository")
      private userBankRepository: IUserBankRepository
   ) {}

   async execute({ id }: IListIdUserBankDTO): Promise<UserBank | null> {
      return await this.userBankRepository.listId({ id });
   }
}

export { ListIdUserBankUseCase };
