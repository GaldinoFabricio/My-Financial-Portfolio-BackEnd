import { inject, injectable } from "tsyringe";
import { IBankRepository } from "../../repositorie/IBankRepository";
import { ICreateBankDTO } from "../../dto/ICreateBankDTO";
import { Bank } from "@prisma/client";

@injectable()
class CreateBankUseCase {
   constructor(
      @inject("BankRepository")
      private bankRepository: IBankRepository
   ) {}

   async execute({ name }: ICreateBankDTO): Promise<Bank> {
      return await this.bankRepository.create({ name });
   }
}

export { CreateBankUseCase };
