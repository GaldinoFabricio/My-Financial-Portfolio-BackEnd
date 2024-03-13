import { Expenses } from "@prisma/client";
import { ICreateExpenseDTO } from "../dto/ICreateExpenseDTO";
import { IUpdateExpenseDTO } from "../dto/IUpdateExpenseDTO";
import { IUpdateMonthExpenseDTO } from "../dto/IUpdateMonthExpenseDTO";
import { IFindByUserIdExpenseDTO } from "../dto/IFindByUserIdExpenseDTO";
import { IFindByBankExpenseDTO } from "../dto/IFindByBankExpenseDTO";

interface IExpenseRepository {
   create(input: ICreateExpenseDTO): Promise<Expenses>;

   findById(id: string): Promise<Expenses | null>;

   findByUserId(input: IFindByUserIdExpenseDTO): Promise<{
      expense: Expenses[];
      totalPages: number;
   }>;

   findByBank(input: IFindByBankExpenseDTO): Promise<Expenses[]>;

   update(expense: IUpdateExpenseDTO): Promise<Expenses>;

   updateMonth(expense: IUpdateMonthExpenseDTO): Promise<void>;
}

export { IExpenseRepository };
