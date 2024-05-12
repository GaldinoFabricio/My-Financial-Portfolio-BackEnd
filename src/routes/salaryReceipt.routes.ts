import { Router } from "express";
import { SalaryReceiptController } from "../modules/salaryReceipt/controller/SalaryReceiptController";
import { Joi, Segments, celebrate } from "celebrate";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";

const salaryReceiptRoutes = Router();
const salaryReceiptController = new SalaryReceiptController();

salaryReceiptRoutes.use(ensureAuthenticate);

salaryReceiptRoutes.post(
   "/",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            payer: Joi.string().required(),
            description: Joi.string().required(),
            total_value: Joi.number().required(),
            payment_date: Joi.date().required(),
            payment_type: Joi.string()
               .valid("Servicos", "Dividendo", "Outros")
               .required(),
            user_id: Joi.string().uuid().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   salaryReceiptController.create
);

salaryReceiptRoutes.get("/", salaryReceiptController.findAll);

export { salaryReceiptRoutes };
