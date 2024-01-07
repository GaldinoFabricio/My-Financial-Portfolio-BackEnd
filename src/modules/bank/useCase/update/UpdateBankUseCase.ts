import { inject, injectable } from "tsyringe";
import { IBankRepository } from "../../repositorie/IBankRepository";
import { IUpdateBankDTO } from "../../dto/IUpdateBankDTO";
import { Bank } from "@prisma/client";
import isUUID from "../../../../shared/lib/isUUID";
import AppError from "../../../../shared/errors/AppErrors";

@injectable()
class UpdateBankUseCase {
   constructor(
      @inject("BankRepository")
      private bankRepository: IBankRepository
   ) {}

   async execute({ id, name }: IUpdateBankDTO): Promise<Bank> {
      if (!isUUID(id)) {
         throw new AppError("invalid id");
      }

      const verifyBankExist = await this.bankRepository.listId({ id });
      if (!verifyBankExist) {
         throw new AppError("bank not exists");
      }

      return await this.bankRepository.update({ id, name });
   }
}

export { UpdateBankUseCase };
