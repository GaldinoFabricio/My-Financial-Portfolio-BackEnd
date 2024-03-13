import { Decimal } from "@prisma/client/runtime/library";

interface IUpdateExpenseDTO {
   id: string;
   name?: string;
   category_id?: string;
   expense?: Decimal;
   month?: string;
   payment_date?: string;
   type_payment_id?: string;
   bank_id?: string;
}
export { IUpdateExpenseDTO };
