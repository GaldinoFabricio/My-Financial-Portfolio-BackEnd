import { Router } from "express";
import { CreateBankController } from "../modules/bank/useCase/create/CreateBankController";
import { ListBankController } from "../modules/bank/useCase/list/ListBankController";
import { ListIdBankController } from "../modules/bank/useCase/listId/ListIdBankController";
import { UpdateBankController } from "../modules/bank/useCase/update/UpdateBankController";
import { Joi, Segments, celebrate } from "celebrate";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { DeleteBankController } from "../modules/bank/useCase/delete/DeleteBankController";
import { LogicalDeleteBankController } from "../modules/bank/useCase/logicalDelete/LogicalDeleteBankController";

const bankRoutes = Router();

const createBankController = new CreateBankController();
const deleteBankController = new DeleteBankController();
const listBankController = new ListBankController();
const listIdBankController = new ListIdBankController();
const logicalDeleteBankController = new LogicalDeleteBankController();
const updateBankController = new UpdateBankController();

bankRoutes.use(ensureAuthenticate);

bankRoutes.post(
   "/",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   createBankController.handle
);

bankRoutes.get(
   "/id/:id",
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
   listIdBankController.handle
);

bankRoutes.get("/", listBankController.handle);

bankRoutes.put(
   "/",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
            name: Joi.string(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   updateBankController.handle
);

bankRoutes.delete(
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
   logicalDeleteBankController.handle
);

bankRoutes.delete(
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
   deleteBankController.handle
);

export { bankRoutes };
