import { $Enums, SalaryReceipts } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { ICreateSalaryReceiptDTO } from "../dto/ICreateSalaryReceipDTO";
import { ISalaryReceiptService } from "./ISalaryReceiptService";
import { prismaClient } from "../../../database";
import { IFindUserIdSalaryReceiptDTO } from "../dto/IFindUserIdSalaryReceiptDTO";

class SalaryReceiptService implements ISalaryReceiptService {
   async create(data: ICreateSalaryReceiptDTO): Promise<SalaryReceipts> {
      return await prismaClient.salaryReceipts.create({
         data: {
            user_id: data.user_id,
            description: data.descrition,
            payment_date: data.payment_date,
            receipts_type: data.payment_type,
            hours_value: data.hours_value,
            number_worked_days: data.number_worked_days,
            total_value: new Decimal(data.total_value),
            payer: data.payer,
         },
      });
   }

   async findAll(
      input: IFindUserIdSalaryReceiptDTO
   ): Promise<SalaryReceipts[]> {
      return await prismaClient.salaryReceipts.findMany({
         where: {
            user_id: input.user_id,
            payment_date: {
               gte: new Date(input.initial_date),
               lte: new Date(input.final_date),
            },
         },
         /*take: parseInt(input.pageSize),
         skip: (parseInt(input.page) - 1) * parseInt(input.pageSize),*/
      });
   }
}

export { SalaryReceiptService };
