import { NextFunction, Request, Response, Router } from "express";
import { Joi, Segments, celebrate } from "celebrate";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { CreateFixedExpenseController } from "../modules/fixedExpense/useCase/create/CreateFixedExpenseController";
import { DeleteFixedExpenseController } from "../modules/fixedExpense/useCase/delete/DeleteFixedExpenseController";
import { FindMyFixedExpenseController } from "../modules/fixedExpense/useCase/findMy/FindMyFixedExpenseController";
import { FindUserIdFixedExpenseController } from "../modules/fixedExpense/useCase/findUserId/FindUserIdFixedExpenseController";
import { UpdateFixedExpenseController } from "../modules/fixedExpense/useCase/update/UpdateFixedExpenseController";
import { UpdateMonthlyExpenseFixedExpenseController } from "../modules/fixedExpense/useCase/updateMonthlyExpense/UpdateMonthlyExpenseFixedExpenseController";
import { UpdatePaymentDateFixedExpenseController } from "../modules/fixedExpense/useCase/updatePaymentDate/UpdatePaymentDateExpenseCategoryTableController";

const expenseCategoryTableRoutes = Router();

const createExpenseCategoryTableController = new CreateFixedExpenseController();
const deleteExpenseCategortyTableController =
   new DeleteFixedExpenseController();
const findMyExpenseCategoryTableController = new FindMyFixedExpenseController();
const findUserIdExpenseCategoryTableController =
   new FindUserIdFixedExpenseController();
const updateExpenseCategoryTableController = new UpdateFixedExpenseController();
const updateMonthlyExpenseExpenseCategoryTableController =
   new UpdateMonthlyExpenseFixedExpenseController();
const updatePaymentDateExpenseCategoryTableController =
   new UpdatePaymentDateFixedExpenseController();

expenseCategoryTableRoutes.use(ensureAuthenticate);

expenseCategoryTableRoutes.post(
   "/",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            category_id: Joi.string().required(),
            monthly_budget: Joi.number().required(),
            month: Joi.string().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   createExpenseCategoryTableController.handle
);

expenseCategoryTableRoutes.delete(
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

expenseCategoryTableRoutes.get(
   "/my",
   findMyExpenseCategoryTableController.handle
);

expenseCategoryTableRoutes.get(
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

expenseCategoryTableRoutes.put(
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

expenseCategoryTableRoutes.put(
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

expenseCategoryTableRoutes.put(
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
);

export { expenseCategoryTableRoutes };
