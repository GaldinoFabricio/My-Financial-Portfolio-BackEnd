import { NextFunction, Request, Response, Router } from "express";
import { CreateExpenseCategoryTableController } from "../modules/expenseCategoryTable/useCase/create/CreateExpenseCategoryTableController";
import { DeleteExpenseCategoryTableController } from "../modules/expenseCategoryTable/useCase/delete/DeleteExpenseCategoryTableController";
import { FindMyExpenseCategoryTableController } from "../modules/expenseCategoryTable/useCase/findMy/FindMyExpenseCategoryTableController";
import { FindUserIdExpenseCategoryTableController } from "../modules/expenseCategoryTable/useCase/findUserId/FindUserIdExpenseCategoryTableController";
import { LogicalDeleteExpenseCategoryTableController } from "../modules/expenseCategoryTable/useCase/logicalDelete/LogicalDeleteExpenseCategoryTableController";
import { UpdateExpenseCategoryTableController } from "../modules/expenseCategoryTable/useCase/update/UpdateExpenseCategoryTableController";
import { UpdateMonthlyExpenseExpenseCategoryTableController } from "../modules/expenseCategoryTable/useCase/updateMonthlyExpense/UpdateMonthlyExpenseCategoryTableController";
import { UpdatePaymentDateExpenseCategoryTableController } from "../modules/expenseCategoryTable/useCase/updatePaymentDate/UpdatePaymentDateExpenseCategoryTableController";
import { Joi, Segments, celebrate } from "celebrate";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";

const expenseCategoryTableRoutes = Router();

const createExpenseCategoryTableController =
   new CreateExpenseCategoryTableController();
const deleteExpenseCategortyTableController =
   new DeleteExpenseCategoryTableController();
const findMyExpenseCategoryTableController =
   new FindMyExpenseCategoryTableController();
const findUserIdExpenseCategoryTableController =
   new FindUserIdExpenseCategoryTableController();
const logicalDeleteExpenseCategoryTableController =
   new LogicalDeleteExpenseCategoryTableController();
const updateExpenseCategoryTableController =
   new UpdateExpenseCategoryTableController();
const updateMonthlyExpenseExpenseCategoryTableController =
   new UpdateMonthlyExpenseExpenseCategoryTableController();
const updatePaymentDateExpenseCategoryTableController =
   new UpdatePaymentDateExpenseCategoryTableController();

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

expenseCategoryTableRoutes.delete(
   "/logical",
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
   logicalDeleteExpenseCategoryTableController.handle
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
