import { Router } from "express";
import { CreateIncomesController } from "../modules/incomes/useCase/create/CreateIncomesController";
import { DeleteIncomesController } from "../modules/incomes/useCase/delete/DeleteIncomesController";
import { FindByBankIdIncomesController } from "../modules/incomes/useCase/findByBankId/FindByBankIdIncomesController";
import { FindMyIncomesController } from "../modules/incomes/useCase/findMy/FindMyIncomesController";
import { FindByUserIdIncomesController } from "../modules/incomes/useCase/findUserId/FindByUserIdIncomesController";
import { UpdateIncomesController } from "../modules/incomes/useCase/update/UpdateIncomesController";
import { UpdateAmountIncomesController } from "../modules/incomes/useCase/updateAmount/UpdateAmountIncomesController";
import { UpdateBankIdIncomesController } from "../modules/incomes/useCase/updateBankId/UpdateBankIdIncomesController";
import { Joi, Segments, celebrate } from "celebrate";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";

const incomesRoutes = Router();

const createIncomesController = new CreateIncomesController();
const deleteIncomesController = new DeleteIncomesController();
const findByBankIdIncomesController = new FindByBankIdIncomesController();
const findMyIncomesController = new FindMyIncomesController();
const findByUserIdIncomesController = new FindByUserIdIncomesController();
const updateIncomesController = new UpdateIncomesController();
const updateAmountIncomesController = new UpdateAmountIncomesController();
const updateBankIdIncomesController = new UpdateBankIdIncomesController();

incomesRoutes.use(ensureAuthenticate);

incomesRoutes.post(
   "/",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            description: Joi.string().required(),
            amount: Joi.number().required(),
            receiver_date: Joi.date().required(),
            bank_id: Joi.string().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   createIncomesController.handle
);

incomesRoutes.delete(
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
   deleteIncomesController.handle
);

incomesRoutes.get("/my", findMyIncomesController.handle);

incomesRoutes.get(
   "/bank/:bank_id",
   celebrate(
      {
         [Segments.PARAMS]: Joi.object().keys({
            bank_id: Joi.string().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   findByBankIdIncomesController.handle
);

incomesRoutes.get(
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
   findByUserIdIncomesController.handle
);

incomesRoutes.put(
   "/amount",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
            amount: Joi.number().required(),
            receiver_date: Joi.date(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   updateAmountIncomesController.handle
);

incomesRoutes.put(
   "/bank",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
            bank_id: Joi.string().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   updateBankIdIncomesController.handle
);

incomesRoutes.put(
   "/",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
            description: Joi.string(),
            amount: Joi.number(),
            receiver_date: Joi.date(),
            bank_id: Joi.string(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   updateIncomesController.handle
);

export { incomesRoutes };
