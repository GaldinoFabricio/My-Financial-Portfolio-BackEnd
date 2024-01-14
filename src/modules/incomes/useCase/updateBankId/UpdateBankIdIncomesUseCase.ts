import { inject, injectable } from "tsyringe";
import { IIncomesRepository } from "../../repositories/IIncomesRepository";
import { Incomes } from "@prisma/client";
import { IUpdateBankIdIncomesDTO } from "../../dto/IUpdateBankIdIncomesDTO";

@injectable()
class UpdateBankIdIncomesUseCase {
   constructor(
      @inject("IncomesRepository")
      private incomesRepository: IIncomesRepository
   ) {}

   async execute(input: IUpdateBankIdIncomesDTO): Promise<void> {
      await this.incomesRepository.updateBankId(input);
   }
}

export { UpdateBankIdIncomesUseCase };
