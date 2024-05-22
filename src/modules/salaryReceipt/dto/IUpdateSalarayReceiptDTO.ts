import { ReceiptsType } from "@prisma/client";

interface IUpdateSalaryReceiptDTO {
   id: string;
   payer?: string;
   description?: string;
   payment_date?: Date;
   payment_type?: ReceiptsType;
   hours_value?: number;
   number_worked_days?: number;
   total_value?: number;
}

export { IUpdateSalaryReceiptDTO };
