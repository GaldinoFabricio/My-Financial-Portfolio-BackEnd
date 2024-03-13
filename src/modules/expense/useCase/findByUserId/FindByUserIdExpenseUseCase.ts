import { Expenses } from "@prisma/client";
import { ExpenseRepository } from "../../repositorie/implemantion/ExpenseRepository";
import { UserRepository } from "../../../user/repositore/implemantion/UserRepository";
import AppError from "../../../../shared/errors/AppErrors";
import { IFindByUserIdExpenseDTO } from "../../dto/IFindByUserIdExpenseDTO";

class FindByUserIdExpenseUseCase {
   constructor(
      private expenseRepository: ExpenseRepository,
      private userRepository: UserRepository
   ) {}

   async execute({ user_id, ...orther }: IFindByUserIdExpenseDTO): Promise<{
      expense: Expenses[];
      totalPages: number;
   }> {
      const verifyUser = await this.userRepository.findId({ id: user_id });
      if (!verifyUser) throw new AppError("User not found");

      return this.expenseRepository.findByUserId({ user_id, ...orther });
   }
}

export { FindByUserIdExpenseUseCase };
