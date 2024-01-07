import { ExpenseCategoryTable } from "@prisma/client";
import { ICreateExpenseCategoryTableDTO } from "../dto/ICreateExpenseCategoryTableDTO";
import { IFindIdExpenseCategoryTableDTO } from "../dto/IFindIdExpenseCategoryTableDTO";
import { IDeleteExpenseCategoryTableDTO } from "../dto/IDeleteExpenseCategoryTableDTO";
import { IFindUserIdExpenseCategoryTableDTO } from "../dto/IFindUserIdExpenseCategoryTableDTO";
import { ILogicalDeleteExpenseCategoryTableDTO } from "../dto/ILogicalDeleteExpenseCategoryTableDTO";
import { IUpdateExpenseCategoryTableDTO } from "../dto/IUpdateExpenseCategoryTableDTO";
import { IUpdateMonthlyExpenseExpenseCategoryTable } from "../dto/IUpdateMonthlyExpenseExpenseCategoryTableDTO";
import { IUpdatePaymentDateExpenseCategoryTableDTO } from "../dto/IUpdatePaymentDateExpenseCategoryTableDTO";

interface IExpenseCategoryTableRepository {
   create(input: ICreateExpenseCategoryTableDTO): Promise<ExpenseCategoryTable>;

   delete(input: IDeleteExpenseCategoryTableDTO): Promise<void>;

   findId(
      input: IFindIdExpenseCategoryTableDTO
   ): Promise<ExpenseCategoryTable | null>;

   findUser(
      input: IFindUserIdExpenseCategoryTableDTO
   ): Promise<ExpenseCategoryTable[]>;

   logicalDelete(
      input: ILogicalDeleteExpenseCategoryTableDTO
   ): Promise<ExpenseCategoryTable>;

   update(input: IUpdateExpenseCategoryTableDTO): Promise<ExpenseCategoryTable>;

   updateMonthlyExpense(
      input: IUpdateMonthlyExpenseExpenseCategoryTable
   ): Promise<ExpenseCategoryTable>;

   updatePaymentDate(
      input: IUpdatePaymentDateExpenseCategoryTableDTO
   ): Promise<void>;
}

export { IExpenseCategoryTableRepository };
