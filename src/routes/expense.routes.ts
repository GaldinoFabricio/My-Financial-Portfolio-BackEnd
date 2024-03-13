import { NextFunction, Request, Response, Router } from "express";
import { Joi, Segments, celebrate } from "celebrate";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { CreateExpenseController } from "../modules/expense/useCase/create/CreateExpenseController";
import { FindMyExpenseController } from "../modules/expense/useCase/findMy/FindMyExpenseController";

const expenseRoutes = Router();

const createExpenseController = new CreateExpenseController();
const findMyExpenseCategoryTableController = new FindMyExpenseController();

expenseRoutes.use(ensureAuthenticate);

expenseRoutes.post(
   "/",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            category_id: Joi.string().required(),
            name: Joi.string().required(),
            expense: Joi.number().required(),
            payment_date: Joi.number().required(),
            type_payment_id: Joi.number().required(),
            bank_id: Joi.number().required(),
            month: Joi.string(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   createExpenseController.handle
);

expenseRoutes.delete(
   "/",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   deleteExpenseCategortyTableController.handle
);

expenseRoutes.get("/my", findMyExpenseCategoryTableController.handle);

expenseRoutes.get(
   "/user/:user_id",
   celebrate(
      {
         [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   findUserIdExpenseCategoryTableController.handle
);

/*expenseRoutes.put(
   "/",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
            category_id: Joi.string(),
            monthly_budget: Joi.number(),
            month: Joi.string(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   updateExpenseCategoryTableController.handle
);

expenseRoutes.put(
   "/mothly-expense",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
            monthly_expense: Joi.number().required(),
            payment_date: Joi.date(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   updateMonthlyExpenseExpenseCategoryTableController.handle
);

expenseRoutes.put(
   "/payment",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
            payment_date: Joi.date().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   updatePaymentDateExpenseCategoryTableController.handle
);*/

export { expenseRoutes };
