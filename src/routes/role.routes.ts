import { Router } from "express";
import { CreateRoleController } from "../modules/role/useCase/create/CreateRoleController.";
import { DeleteRoleController } from "../modules/role/useCase/delete/DeleteRoleController";
import { FindAllRoleController } from "../modules/role/useCase/findAll/FindAllRoleController";
import { FindIdRoleController } from "../modules/role/useCase/findId/FindIdRoleController";
import { LogicalDeleteRoleController } from "../modules/role/useCase/logicalDelete/LogicalDeleteRoleController";
import { UpdateRoleController } from "../modules/role/useCase/update/UpdateRoleController";
import { Joi, Segments, celebrate } from "celebrate";

const roleRoutes = Router();

const createRoleController = new CreateRoleController();
const deleteRoleController = new DeleteRoleController();
const findAllRoleController = new FindAllRoleController();
const findIdRoleController = new FindIdRoleController();
const logicalDeleteRoleController = new LogicalDeleteRoleController();
const updateRoleController = new UpdateRoleController();

roleRoutes.post(
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
   createRoleController.handle
);

roleRoutes.get(
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
   findIdRoleController.handle
);

roleRoutes.get("/", findAllRoleController.handle);

roleRoutes.put(
   "/",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
            name: Joi.string().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   updateRoleController.handle
);

roleRoutes.delete(
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
   logicalDeleteRoleController.handle
);

roleRoutes.delete(
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
   deleteRoleController.handle
);

export { roleRoutes };
