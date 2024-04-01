import { Bank, PaymentType } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

interface ICreateExpenseDTO {
   name: string;
   category_id: string;
   user_id?: string;
   expense: Decimal;
   payment_date: string;
   payment_type: PaymentType;
   bank: Bank;
   month?: string;
}

export { ICreateExpenseDTO };
