import { inject, injectable } from "tsyringe";
import { IBankRepository } from "../../repositorie/IBankRepository";
import { IDeleteBankDTO } from "../../dto/IDeleteBankDTO";
import isUUID from "../../../../shared/lib/isUUID";
import AppError from "../../../../shared/errors/AppErrors";

@injectable()
class LogicalDeleteBankUseCase {
   constructor(
      @inject("BankRepository")
      private bankRepository: IBankRepository
   ) {}

   async execute({ id }: IDeleteBankDTO): Promise<void> {
      if (!isUUID(id)) {
         throw new AppError("invalid id");
      }

      const verifyBankExist = await this.bankRepository.listId({ id });
      if (!verifyBankExist) {
         throw new AppError("bank not exists");
      }

      await this.bankRepository.logicalDelete({ id });
   }
}

export { LogicalDeleteBankUseCase };
