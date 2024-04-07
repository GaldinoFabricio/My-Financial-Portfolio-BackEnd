import { Router } from "express";
import { SalaryReceiptController } from "../modules/salaryReceipt/controller/SalaryReceiptController";

const salaryReceiptRoutes = Router();
const salaryReceiptController = new SalaryReceiptController();

salaryReceiptRoutes.post("/", salaryReceiptController.create);

salaryReceiptRoutes.get("/", salaryReceiptController.findAll);

export { salaryReceiptRoutes };
