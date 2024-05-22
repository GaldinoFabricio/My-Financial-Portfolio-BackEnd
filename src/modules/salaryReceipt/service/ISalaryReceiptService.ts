import { SalaryReceipts } from "@prisma/client";
import { ICreateSalaryReceiptDTO } from "../dto/ICreateSalaryReceipDTO";
import { IFindUserIdSalaryReceiptDTO } from "../dto/IFindUserIdSalaryReceiptDTO";
import { IUpdateSalaryReceiptDTO } from "../dto/IUpdateSalarayReceiptDTO";

interface ISalaryReceiptService {
   create(input: ICreateSalaryReceiptDTO): Promise<SalaryReceipts>;

   findAll(input: IFindUserIdSalaryReceiptDTO): Promise<SalaryReceipts[]>;

   update(input: IUpdateSalaryReceiptDTO): Promise<SalaryReceipts>;
}

export { ISalaryReceiptService };
