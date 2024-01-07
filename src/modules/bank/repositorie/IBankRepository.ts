import { Bank } from "@prisma/client";
import { ICreateBankDTO } from "../dto/ICreateBankDTO";
import { IListIdBankDTO } from "../dto/IListIdBankDTO";
import { IUpdateBankDTO } from "../dto/IUpdateBankDTO";
import { ILogicalDeleteBankDTO } from "../dto/ILogicalDeleteBankDTO";
import { IDeleteBankDTO } from "../dto/IDeleteBankDTO";

interface IBankRepository {
   create(input: ICreateBankDTO): Promise<Bank>;

   delete(input: IDeleteBankDTO): Promise<void>;

   list(): Promise<Bank[]>;

   listId({ id }: IListIdBankDTO): Promise<Bank | null>;

   logicalDelete(input: ILogicalDeleteBankDTO): Promise<Bank>;

   update({ id, name }: IUpdateBankDTO): Promise<Bank>;
}

export { IBankRepository };
