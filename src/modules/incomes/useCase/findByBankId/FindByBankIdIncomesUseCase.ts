import { inject, injectable } from "tsyringe";
import { IIncomesRepository } from "../../repositories/IIncomesRepository";
import { IFindByBankIdIncomesDTO } from "../../dto/IFindByBankIdIncomesDTO";
import { Incomes } from "@prisma/client";

@injectable()
class FindByBankIdIncomesUseCase {
   constructor(
      @inject("IncomesRepository")
      private incomesRepository: IIncomesRepository
   ) {}

   async execute(input: IFindByBankIdIncomesDTO): Promise<Incomes[]> {
      return await this.incomesRepository.findByBankId(input);
   }
}

export { FindByBankIdIncomesUseCase };
