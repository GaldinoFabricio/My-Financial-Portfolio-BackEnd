import { Router } from "express";
import { CreateBankController } from "../modules/bank/useCase/bank/create/CreateBankController";
import { ListBankController } from "../modules/bank/useCase/bank/list/ListBankController";
import { ListIdBankController } from "../modules/bank/useCase/bank/listId/ListIdBankController";
import { UpdateBankController } from "../modules/bank/useCase/bank/update/UpdateBankController";
import { Joi, Segments, celebrate } from "celebrate";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";

const bankRoutes = Router();

const createBankController = new CreateBankController();
const listBankController = new ListBankController();
const listIdBankController = new ListIdBankController();
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

bankRoutes.get("/", listBankController.handle);

bankRoutes.get(
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
	listIdBankController.handle
);

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

export { bankRoutes };
