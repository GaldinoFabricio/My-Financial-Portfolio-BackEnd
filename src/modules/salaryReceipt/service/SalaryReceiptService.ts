import { $Enums, SalaryReceipts } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { ICreateSalaryReceiptDTO } from "../dto/ICreateSalaryReceipDTO";
import { ISalaryReceiptService } from "./ISalaryReceiptService";
import { prismaClient } from "../../../database";
import { IFindUserIdSalaryReceiptDTO } from "../dto/IFindUserIdSalaryReceiptDTO";
import { IUpdateSalaryReceiptDTO } from "../dto/IUpdateSalarayReceiptDTO";

class SalaryReceiptService implements ISalaryReceiptService {
   async create(data: ICreateSalaryReceiptDTO): Promise<SalaryReceipts> {
      return await prismaClient.salaryReceipts.create({
         data: {
            user_id: data.user_id,
            description: data.description,
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

   async update({
      id,
      description,
      hours_value,
      number_worked_days,
      payer,
      payment_date,
      payment_type,
   }: IUpdateSalaryReceiptDTO): Promise<SalaryReceipts> {
      return await prismaClient.salaryReceipts.update({
         where: {
            id: id,
         },
         data: {
            description,
            payment_date,
            receipts_type: payment_type as $Enums.ReceiptsType,
            hours_value,
            number_worked_days,
            total_value: Number(hours_value) * Number(number_worked_days),
            payer,
         },
      });
   }
}

export { SalaryReceiptService };
