import { inject, injectable } from "tsyringe";
import { IMonthlyCombinedCardExpensesRepository } from "../../repositorie/IMonthlyCombinedCardExpensesRepository";
import { IFindUserIdMonthlyCombinedCardExpensesDTO } from "../../dto/IFindUserIdMonthlyCombinedCardExpensesDTO";
import { MonthlyCombinedCardExpenses } from "@prisma/client";

@injectable()
class FindUserIdMonthlyCombinedCardExpensesUseCase {
   constructor(
      @inject("MonthlyCombinedCardExpensesRepository")
      private monthlyCombinedCardExpensesRepository: IMonthlyCombinedCardExpensesRepository
   ) {}

   async execute(
      input: IFindUserIdMonthlyCombinedCardExpensesDTO
   ): Promise<MonthlyCombinedCardExpenses[]> {
      return await this.monthlyCombinedCardExpensesRepository.findUserId(input);
   }
}

export { FindUserIdMonthlyCombinedCardExpensesUseCase };
