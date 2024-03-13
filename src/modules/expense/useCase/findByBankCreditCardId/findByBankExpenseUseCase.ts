import AppError from "../../../../shared/errors/AppErrors";
import { IFindByBankExpenseDTO } from "../../dto/IFindByBankExpenseDTO";
import { IExpenseRepository } from "../../repositorie/IExpenseRepository";

class FindByBankExpenseUseCase {
   constructor(private expenseRepository: IExpenseRepository) {}

   async execute({ bank, month, user_id }: IFindByBankExpenseDTO) {
      return this.expenseRepository.findByBank({ bank, month, user_id });
   }
}

export { FindByBankExpenseUseCase };
