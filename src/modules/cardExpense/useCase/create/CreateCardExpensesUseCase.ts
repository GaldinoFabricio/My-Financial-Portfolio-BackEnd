import { inject, injectable } from "tsyringe";
import { ICreateCardExpensesDTO } from "../../dto/ICreateCardExpensesDTO";
import { CardExpenses } from "@prisma/client";
import { ICardExpensesRepository } from "../../repositorie/ICardExpensesRepository";

@injectable()
class CreateCardExpensesUseCase {
   constructor(
      @inject("CardExpensesRepository")
      private monthlyCombinedCardExpensesRepository: ICardExpensesRepository
   ) {}

   async execute(input: ICreateCardExpensesDTO): Promise<CardExpenses> {
      return await this.monthlyCombinedCardExpensesRepository.create(input);
   }
}

export { CreateCardExpensesUseCase };
