import { inject, injectable } from "tsyringe";
import { IUserBankRepository } from "../../repositories/IUserBankRepository";
import { IListBankIdUserBankDTO } from "../../dto/IListBankIdUserBankDTO";
import { UserBank } from "@prisma/client";

@injectable()
class ListBankIdUserBankUseCase {
   constructor(
      @inject("UserBankRepository")
      private userBankRepository: IUserBankRepository
   ) {}

   async execute({ bank_id }: IListBankIdUserBankDTO): Promise<UserBank[]> {
      return await this.userBankRepository.listBankId({ bank_id });
   }
}

export { ListBankIdUserBankUseCase };
