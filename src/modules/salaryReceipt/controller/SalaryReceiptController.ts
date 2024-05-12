import { ReceiptsType } from "@prisma/client";
import { Request, Response } from "express";
import { SalaryReceiptService } from "../service/SalaryReceiptService";
import { endOfMonth, isValid, startOfMonth } from "date-fns";

class SalaryReceiptController {
   async create(
      request: Request<
         any,
         any,
         {
            user_id: string;
            payer: string;
            description: string;
            payment_date: Date;
            payment_type: ReceiptsType;
            hours_value?: number;
            number_worked_days?: number;
            total_value: number;
         }
      >,
      response: Response
   ): Promise<Response> {
      const {
         user_id,
         payer,
         description,
         payment_date,
         payment_type,
         hours_value,
         number_worked_days,
         total_value,
      } = request.body;

      const salaryReceiptService = new SalaryReceiptService();
      await salaryReceiptService.create({
         user_id,
         payer,
         description,
         payment_date,
         payment_type,
         hours_value,
         number_worked_days,
         total_value,
      });

      return response.status(201).json();
   }

   async findAll(
      request: Request<
         any,
         any,
         any,
         {
            page: number;
            pageSize: number;
            start_date?: string;
            end_date?: string;
         }
      >,
      response: Response
   ): Promise<Response> {
      const page = request.query.page;
      const pageSize = request.query.pageSize;

      let final_date = endOfMonth(new Date()).toISOString();
      if (request.query.end_date && !isValid(request.query.end_date)) {
         final_date = request.query.end_date;
      }

      let initial_date = startOfMonth(new Date()).toISOString();
      if (request.query.start_date && !isValid(request.query.start_date)) {
         initial_date = request.query.start_date;
      }

      const salaryReceiptService = new SalaryReceiptService();
      const salaryReceipts = await salaryReceiptService.findAll({
         final_date,
         initial_date,
         page: `${page}`,
         pageSize: `${pageSize}`,
      });

      return response.json(salaryReceipts);
   }
}

export { SalaryReceiptController };
