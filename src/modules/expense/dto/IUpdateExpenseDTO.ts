import { Bank, PaymentType } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

interface IUpdateExpenseDTO {
   id: string;
   name?: string;
   category_id?: string;
   expense?: Decimal;
   month?: string;
   payment_date?: string;
   payment_type?: PaymentType;
   bank?: Bank;
}
export { IUpdateExpenseDTO };
