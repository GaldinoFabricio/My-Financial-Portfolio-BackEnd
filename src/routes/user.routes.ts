import { Router } from "express";
import { CreateUserController } from "../modules/user/useCase/create/CreateUserController";
import { ListIdUserController } from "../modules/user/useCase/listId/ListIdUserController";
import { UpdateUserController } from "../modules/user/useCase/update/UpdateUserController";
import { UpdatePasswordUserController } from "../modules/user/useCase/updatePassword/updatePasswordUserController";
import { Joi, Segments, celebrate } from "celebrate";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { ListMyUserController } from "../modules/user/useCase/listMy/ListMyUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const listIdUserController = new ListIdUserController();
const listMyUserController = new ListMyUserController();
const updateUserController = new UpdateUserController();
const updatePasswordUserController = new UpdatePasswordUserController();

userRoutes.use(ensureAuthenticate);

userRoutes.post(
	"/",
	celebrate(
		{
			[Segments.BODY]: Joi.object().keys({
				name: Joi.string().required(),
				email: Joi.string().email().required(),
				password: Joi.string().required(),
			}),
		},
		{
			allowUnknown: false,
		}
	),
	createUserController.handle
);

userRoutes.get("/my", listMyUserController.handle);

userRoutes.get(
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
	listIdUserController.handle
);

userRoutes.put(
	"/",
	celebrate(
		{
			[Segments.BODY]: Joi.object().keys({
				id: Joi.string().required(),
				name: Joi.string().required(),
				email: Joi.string().email().required(),
				password: Joi.string().required(),
			}),
		},
		{
			allowUnknown: false,
		}
	),
	updateUserController.handle
);

userRoutes.put(
	"/password",
	celebrate(
		{
			[Segments.BODY]: Joi.object().keys({
				password: Joi.string().required(),
			}),
		},
		{
			allowUnknown: false,
		}
	),
	updatePasswordUserController.handle
);

export { userRoutes };
