import { FixedExpenses } from "@prisma/client";
import { ICreateFixedExpenseDTO } from "../dto/ICreateFixedExpenseDTO";
import { IFindIdFixedExpenseDTO } from "../dto/IFindIdFixedExpenseDTO";
import { IDeleteFixedExpenseDTO } from "../dto/IDeleteFixedExpenseDTO";
import { IFindUserIdFixedExpenseDTO } from "../dto/IFindUserIdFixedExpenseDTO";
import { IUpdateFixedExpenseDTO } from "../dto/IUpdateFixedExpenseDTO";
import { IUpdateMonthlyExpenseFixedExpenseDTO } from "../dto/IUpdateMonthlyExpenseFixedExpenseDTO";
import { IUpdatePaymentDateFixedExpenseDTO } from "../dto/IUpdatePaymentDateFixedExpenseDTO";

interface IFixedExpenseRepository {
   create(input: ICreateFixedExpenseDTO): Promise<FixedExpenses>;

   delete(input: IDeleteFixedExpenseDTO): Promise<FixedExpenses>;

   findId(input: IFindIdFixedExpenseDTO): Promise<FixedExpenses | null>;

   findUser(input: IFindUserIdFixedExpenseDTO): Promise<FixedExpenses[]>;

   update(input: IUpdateFixedExpenseDTO): Promise<FixedExpenses>;

   updateMonthlyExpense(
      input: IUpdateMonthlyExpenseFixedExpenseDTO
   ): Promise<FixedExpenses>;

   updatePaymentDate(input: IUpdatePaymentDateFixedExpenseDTO): Promise<void>;
}

export { IFixedExpenseRepository };
