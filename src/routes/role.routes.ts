import { Router } from "express";
import { CreateRoleController } from "../modules/role/useCase/role/create/CreateRoleController";
import { ListRoleController } from "../modules/role/useCase/role/list/ListRoleController";
import { UpdateRoleControler } from "../modules/role/useCase/role/update/UpdateRoleController";
import { Joi, Segments, celebrate } from "celebrate";

const roleRoutes = Router();

const createRoleController = new CreateRoleController();
const listRoleController = new ListRoleController();
const updateRoleController = new UpdateRoleControler();

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

roleRoutes.get("/", listRoleController.handle);

roleRoutes.put(
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
	updateRoleController.handle
);

export { roleRoutes };
