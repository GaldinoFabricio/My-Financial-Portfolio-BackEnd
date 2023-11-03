import { Router } from "express";
import { CreateInvestmentController } from "../modules/investment/useCase/Investment/create/CreateInvestmentController";
import { ListInvestmentController } from "../modules/investment/useCase/Investment/list/ListInvestmentController";
import { ListAssetNameInvestmentController } from "../modules/investment/useCase/Investment/listAssetName/ListAssetNameInvestmentController";
import { ListIdInvestmentController } from "../modules/investment/useCase/Investment/listId/ListIdInvestmentController";
import { ListUserBankIdInvestmentController } from "../modules/investment/useCase/Investment/listUserBankId/ListUserBankIdInvestmentController";
import { UpdateInvestmentController } from "../modules/investment/useCase/Investment/udpate/UpdateInvestmentController";
import { UpdatePriceInvestmentController } from "../modules/investment/useCase/Investment/updatePrice/UpdatePriceInvestmentController";
import { UpdateUserBankIdInvestmentController } from "../modules/investment/useCase/Investment/updateUserBankId/UpdateUserBankIdInvestmentController";
import { Joi, Segments, celebrate } from "celebrate";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";

const investmentRoutes = Router();

const createInvestmentController = new CreateInvestmentController();
const listInvestmentController = new ListInvestmentController();
const listAssetNameInvestmentController =
	new ListAssetNameInvestmentController();
const listIdInvestmentController = new ListIdInvestmentController();
const listUserBankIdInvestmentController =
	new ListUserBankIdInvestmentController();
const updateInvestmentController = new UpdateInvestmentController();
const updatePriceInvestmentController = new UpdatePriceInvestmentController();
const updateUserBankIdInvestmetnController =
	new UpdateUserBankIdInvestmentController();

investmentRoutes.use(ensureAuthenticate);

investmentRoutes.post(
	"/",
	celebrate(
		{
			[Segments.BODY]: Joi.object().keys({
				transaction_date: Joi.date().required(),
				asset_name: Joi.string().required(),
				asset_type: Joi.string().required(),
				amount: Joi.number(),
				price: Joi.number(),
				user_bank_id: Joi.string().required(),
			}),
		},
		{
			allowUnknown: false,
		}
	),
	createInvestmentController.handle
);

investmentRoutes.get("/", listInvestmentController.handle);

investmentRoutes.post("/asset-name", listAssetNameInvestmentController.handle);

investmentRoutes.get(
	"/user-bank/:user_bank_id",
	listUserBankIdInvestmentController.handle
);

investmentRoutes.get("/:id", listIdInvestmentController.handle);

investmentRoutes.put(
	"/",
	celebrate(
		{
			[Segments.BODY]: Joi.object().keys({
				id: Joi.number().required(),
				transaction_date: Joi.date(),
				asset_name: Joi.string(),
				asset_type: Joi.string(),
				amount: Joi.number(),
				price: Joi.number(),
				user_bank_id: Joi.string(),
			}),
		},
		{
			allowUnknown: false,
		}
	),
	updateInvestmentController.handle
);

investmentRoutes.put(
	"/price",
	celebrate(
		{
			[Segments.BODY]: Joi.object().keys({
				id: Joi.number().required(),
				price: Joi.number(),
			}),
		},
		{
			allowUnknown: false,
		}
	),
	updatePriceInvestmentController.handle
);

investmentRoutes.put(
	"/user-bank",
	celebrate(
		{
			[Segments.BODY]: Joi.object().keys({
				id: Joi.number().required(),
				user_bank_id: Joi.string(),
			}),
		},
		{
			allowUnknown: false,
		}
	),
	updateUserBankIdInvestmetnController.handle
);

export { investmentRoutes };
