import { inject, injectable } from "tsyringe";
import { ICardExpensesRepository } from "../../repositorie/ICardExpensesRepository";
import { IDeleteCardExpensesDTO } from "../../dto/IDeleteCardExpensesDTO";
import { CardExpenses } from "@prisma/client";

@injectable()
class DeleteCardExpensesUseCase {
   constructor(
      @inject("CardExpensesRepository")
      private monthlyCombinedCardExpensesRepository: ICardExpensesRepository
   ) {}

   async execute(input: IDeleteCardExpensesDTO): Promise<CardExpenses> {
      return await this.monthlyCombinedCardExpensesRepository.delete(input);
   }
}

export { DeleteCardExpensesUseCase };
