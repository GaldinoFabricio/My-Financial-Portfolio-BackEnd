import { NextFunction, Request, Response, Router } from "express";
import { Joi, Segments, celebrate } from "celebrate";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { ExpenseController } from "../modules/expense/controller/ExpenseController";

const expenseRoutes = Router();

const expenseController = new ExpenseController();

//expenseRoutes.use(ensureAuthenticate);

expenseRoutes.post(
   "/",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            category_id: Joi.string().uuid().required(),
            name: Joi.string().required(),
            expense: Joi.number().required(),
            payment_date: Joi.date().required(),
            payment_type: Joi.string()
               .valid("DEBITO", "CREDITO", "PIX", "TED")
               .required(),
            bank: Joi.string().valid("NUBANK", "BRADESCO").required(),
            month: Joi.string(),
            user_id: Joi.string().uuid().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   expenseController.create
);

expenseRoutes.get("/", expenseController.findAll);

expenseRoutes.put(
   "/month",
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
   expenseController.updateMonth
);

expenseRoutes.put(
   "/",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
            category_id: Joi.string(),
            monthly_budget: Joi.number(),
            month: Joi.string(),
            bank: Joi.string().valid("NUBANK", "BRADESCO"),
            payment_type: Joi.string().valid("DEBITO", "CREDITO", "PIX", "TED"),
            payment_date: Joi.date(),
            expense: Joi.number(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   expenseController.update
);

export { expenseRoutes };
