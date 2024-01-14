import { inject, injectable } from "tsyringe";
import { ICardExpensesRepository } from "../../repositorie/ICardExpensesRepository";
import { IUpdateCardExpensesDTO } from "../../dto/IUpdateCardExpensesDTO";
import { CardExpenses } from "@prisma/client";

@injectable()
class UpdateCardExpenseUseCase {
   constructor(
      @inject("CardExpensesRepository")
      private cardExpensesRepository: ICardExpensesRepository
   ) {}

   async execute(input: IUpdateCardExpensesDTO): Promise<CardExpenses> {
      return await this.cardExpensesRepository.update(input);
   }
}

export { UpdateCardExpenseUseCase };
