import { Request, Response } from "express";
import { ExpenseService } from "../service/ExpenseService";
import { Decimal } from "@prisma/client/runtime/library";
import { Bank, PaymentType } from "@prisma/client";
import { endOfMonth, isValid, parseISO, startOfMonth } from "date-fns";

class ExpenseController {
   public async create(
      req: Request<
         any,
         any,
         {
            name: string;
            category_id: string;
            expense: Decimal;
            payment_date: string;
            payment_type: PaymentType;
            bank: Bank;
            month?: string;
         }
      >,
      res: Response
   ) {
      const {
         bank,
         category_id,
         expense,
         name,
         payment_date,
         payment_type,
         month,
      } = req.body;
      const user_id = req.user.id;

      const expenseService = new ExpenseService();
      const data = await expenseService.create({
         bank,
         category_id,
         expense,
         name,
         payment_date,
         payment_type,
         user_id,
         month,
      });

      return res.status(201).json(data);
   }

   public async findAll(
      req: Request<
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
      res: Response
   ) {
      const user_id = req.user.id;

      let final_date = endOfMonth(new Date()).toISOString();
      if (req.query.start_date && !isValid(parseISO(req.query.start_date))) {
         final_date = req.query.start_date;
      }

      let intial_date = startOfMonth(new Date()).toISOString();
      if (req.query.end_date && !isValid(parseISO(req.query.end_date))) {
         intial_date = req.query.end_date;
      }

      const expenseService = new ExpenseService();
      const expenses = await expenseService.findAll({
         user_id,
         final_date,
         intial_date,
         page: 1,
         pageSize: 10,
      });
      return res.status(200).json(expenses);
   }

   public async findById(req: Request, res: Response) {
      const { id } = req.params;
      const expenseService = new ExpenseService();
      const expense = await expenseService.findById(id);
      return res.status(200).json(expense);
   }

   public async findByBank(
      req: Request<
         any,
         any,
         any,
         {
            bank: Bank;
            month?: string;
         }
      >,
      res: Response
   ) {
      const { bank, month } = req.body;
      const user_id = req.user.id;
      const expenseService = new ExpenseService();
      const expenses = await expenseService.findByBank({
         user_id,
         bank,
         month,
      });
      return res.status(200).json(expenses);
   }

   public async update(
      req: Request<
         any,
         any,
         {
            name: string;
            category_id: string;
            expense: Decimal;
            payment_date: string;
            payment_type: PaymentType;
            bank: Bank;
            month?: string;
         }
      >,
      res: Response
   ) {
      const { id } = req.params;
      const {
         bank,
         category_id,
         expense,
         name,
         payment_date,
         payment_type,
         month,
      } = req.body;

      const expenseService = new ExpenseService();
      const data = await expenseService.update({
         id,
         bank,
         category_id,
         expense,
         name,
         payment_date,
         payment_type,
         month,
      });
      return res.status(200).json(data);
   }

   public async updateMonth(req: Request, res: Response) {
      const { id } = req.params;
      const { month } = req.body;
      const expenseService = new ExpenseService();
      const data = await expenseService.updateMonth({ id, month });
      return res.status(200).json(data);
   }
}

export { ExpenseController };
