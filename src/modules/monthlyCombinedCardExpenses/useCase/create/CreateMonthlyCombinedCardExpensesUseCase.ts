import { inject, injectable } from "tsyringe";
import { IMonthlyCombinedCardExpensesRepository } from "../../repositorie/IMonthlyCombinedCardExpensesRepository";
import { ICreateMonthlyCombinedCardExpensesDTO } from "../../dto/ICreateMonthlyCombinedCardExpensesDTO";
import { MonthlyCombinedCardExpenses } from "@prisma/client";

@injectable()
class CreateMonthlyCombinedCardExpensesUseCase {
   constructor(
      @inject("MonthlyCombinedCardExpensesRepository")
      private monthlyCombinedCardExpensesRepository: IMonthlyCombinedCardExpensesRepository
   ) {}

   async execute(
      input: ICreateMonthlyCombinedCardExpensesDTO
   ): Promise<MonthlyCombinedCardExpenses> {
      return await this.monthlyCombinedCardExpensesRepository.create(input);
   }
}

export { CreateMonthlyCombinedCardExpensesUseCase };
