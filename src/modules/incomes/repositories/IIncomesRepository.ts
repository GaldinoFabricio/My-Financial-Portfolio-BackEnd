import { Incomes } from "@prisma/client";
import { ICreateIncomesDTO } from "../dto/ICreateIncomesDTO";
import { IFindByIdIncomesDTO } from "../dto/IFindByIdIncomesDTO";
import { IDeleteIncomesDTO } from "../dto/IDeleteIncomesDTO";
import { IFindByUserIdIncomesDTO } from "../dto/IFindByUserIdIncomesDTO";
import { IFindByBankIdIncomesDTO } from "../dto/IFindByBankIdIncomesDTO";
import { IUpdateIncomesDTO } from "../dto/IUpdateIncomesDTO";
import { IUpdateAmountIncomesDTO } from "../dto/IUpdateAmountIncomesDTO";
import { IUpdateBankIdIncomesDTO } from "../dto/IUpdateBankIdIncomesDTO";

interface IIncomesRepository {
   create(input: ICreateIncomesDTO): Promise<Incomes>;

   delete(input: IDeleteIncomesDTO): Promise<Incomes>;

   findByBankId(input: IFindByBankIdIncomesDTO): Promise<Incomes[]>;

   findById(input: IFindByIdIncomesDTO): Promise<Incomes | null>;

   findByUserId(input: IFindByUserIdIncomesDTO): Promise<Incomes[]>;

   update(input: IUpdateIncomesDTO): Promise<Incomes>;

   updateAmount(input: IUpdateAmountIncomesDTO): Promise<void>;

   updateBankId(input: IUpdateBankIdIncomesDTO): Promise<void>;
}

export { IIncomesRepository };
