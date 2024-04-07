import { SalaryReceipts } from "@prisma/client";
import { ICreateSalaryReceiptDTO } from "../dto/ICreateSalaryReceipDTO";
import { IFindUserIdSalaryReceiptDTO } from "../dto/IFindUserIdSalaryReceiptDTO";

interface ISalaryReceiptService {
   create(data: ICreateSalaryReceiptDTO): Promise<SalaryReceipts>;

   findAll(input: IFindUserIdSalaryReceiptDTO): Promise<SalaryReceipts[]>;
}

export { ISalaryReceiptService };
