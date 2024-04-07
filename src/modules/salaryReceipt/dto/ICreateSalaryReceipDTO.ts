import { ReceiptsType } from "@prisma/client";

interface ICreateSalaryReceiptDTO {
   user_id: string;
   payer: string;
   descrition: string;
   payment_date: Date;
   payment_type: ReceiptsType;
   hours_value?: number;
   number_worked_days?: number;
   total_value: number;
}

export { ICreateSalaryReceiptDTO };
