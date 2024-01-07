import { inject, injectable } from "tsyringe";
import { IMonthlyCombinedCardExpensesRepository } from "../../repositorie/IMonthlyCombinedCardExpensesRepository";
import { IDeleteMonthlyCombinedCardExpensesDTO } from "../../dto/IDeleteMonthlyCombinedCardExpensesDTO";

@injectable()
class DeleteMonthlyCombinedCardExpensesUseCase {
   constructor(
      @inject("MonthlyCombinedCardExpensesRepository")
      private monthlyCombinedCardExpensesRepository: IMonthlyCombinedCardExpensesRepository
   ) {}

   async execute(input: IDeleteMonthlyCombinedCardExpensesDTO): Promise<void> {
      await this.monthlyCombinedCardExpensesRepository.delete(input);
   }
}

export { DeleteMonthlyCombinedCardExpensesUseCase };
