import { NextFunction, Request, Response, Router } from "express";
import { CreateGroupRoleController } from "../modules/role/useCase/groupRole/create/CreateGroupRoleController";
import { ListGroupRoleController } from "../modules/role/useCase/groupRole/list/ListGroupRoleController";
import { ListRoleIdGroupRoleController } from "../modules/role/useCase/groupRole/listRoleId/ListRoleIdGroupRoleController";
import { ListUserIdGroupRoleController } from "../modules/role/useCase/groupRole/listUserId/ListUserIdGroupRoleController";
import { UpdateGroupRoleController } from "../modules/role/useCase/groupRole/update/UpdateGroupRoleController";
import { Joi, Segments, celebrate } from "celebrate";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { ensureRoleAuthenticate } from "../middleware/ensureRoleAuthentitcate";

const groupRoleRoutes = Router();

const createGroupRoleController = new CreateGroupRoleController();
const listGroupRoleController = new ListGroupRoleController();
const listRoleIdGroupRoleController = new ListRoleIdGroupRoleController();
const listUserIdGroupRoleController = new ListUserIdGroupRoleController();
const updateGroupRoleController = new UpdateGroupRoleController();

groupRoleRoutes.use(
	(request: Request, response: Response, next: NextFunction) => {
		request.roles = {
			name: "administration",
		};

		next();
	}
);

groupRoleRoutes.use(ensureAuthenticate);

groupRoleRoutes.post(
	"/",
	ensureRoleAuthenticate,
	celebrate(
		{
			[Segments.BODY]: Joi.object().keys({
				role_id: Joi.string().required(),
				user_id: Joi.string().required(),
			}),
		},
		{
			allowUnknown: false,
		}
	),
	createGroupRoleController.handle
);

groupRoleRoutes.get(
	"/role/:role_id",
	ensureRoleAuthenticate,
	celebrate(
		{
			[Segments.PARAMS]: Joi.object().keys({
				role_id: Joi.string().required(),
			}),
		},
		{
			allowUnknown: false,
		}
	),
	listRoleIdGroupRoleController.handle
);

groupRoleRoutes.get(
	"/user/:user_id",
	ensureRoleAuthenticate,
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
	listUserIdGroupRoleController.handle
);

groupRoleRoutes.get("/", listGroupRoleController.handle);

groupRoleRoutes.put(
	"/",
	ensureRoleAuthenticate,
	celebrate(
		{
			[Segments.BODY]: Joi.object().keys({
				id: Joi.string().required(),
				role_id: Joi.string(),
				user_id: Joi.string(),
			}),
		},
		{
			allowUnknown: false,
		}
	),
	updateGroupRoleController.handle
);

export { groupRoleRoutes };
