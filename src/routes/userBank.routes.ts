import { Router } from "express";
import { CreateUserBankController } from "../modules/userBank/useCase/create/CreateUserBankController";
import { ListUserBankController } from "../modules/userBank/useCase/list/ListUserBankController";
import { ListBankIdUserBankController } from "../modules/userBank/useCase/listBankId/ListBankIdUserBankController";
import { ListIdUserBankController } from "../modules/userBank/useCase/listId/ListIdUserBankController";
import { ListUserIdUserBankController } from "../modules/userBank/useCase/listUserId/ListUserIdUserBankController";
import { UpdateUserBankController } from "../modules/userBank/useCase/update/UpdateUserBankController";
import { Joi, Segments, celebrate } from "celebrate";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";

const userBankRoutes = Router();

const createUserBankController = new CreateUserBankController();
const listUserBankController = new ListUserBankController();
const listBankIdUserBankController = new ListBankIdUserBankController();
const listIdUserBankController = new ListIdUserBankController();
const listUserIdUserBankController = new ListUserIdUserBankController();
const updateUserBankController = new UpdateUserBankController();

userBankRoutes.use(ensureAuthenticate);

userBankRoutes.post(
   "/",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            user_id: Joi.string().required(),
            bank_id: Joi.string().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   createUserBankController.handle
);

userBankRoutes.get("/", listUserBankController.handle);

userBankRoutes.get(
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
   listBankIdUserBankController.handle
);

userBankRoutes.get(
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
   listUserIdUserBankController.handle
);

userBankRoutes.get(
   "/:id",
   celebrate(
      {
         [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   listIdUserBankController.handle
);

userBankRoutes.put(
   "/",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
            user_id: Joi.string(),
            bank_id: Joi.string(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   updateUserBankController.handle
);

export { userBankRoutes };
