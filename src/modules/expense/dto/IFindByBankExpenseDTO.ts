import { Bank } from "@prisma/client";

interface IFindByBankExpenseDTO {
   user_id?: string;
   bank: Bank;
   month?: string;
}

export { IFindByBankExpenseDTO };
