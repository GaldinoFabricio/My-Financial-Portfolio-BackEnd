import { Bank } from "@prisma/client";
import { prismaClient } from "../../../../database";
import { ICreateBankDTO } from "../../dto/ICreateBankDTO";
import { IBankRepository } from "../IBankRepository";
import { IListIdBankDTO } from "../../dto/IListIdBankDTO";
import { IUpdateBankDTO } from "../../dto/IUpdateBankDTO";
import { IDeleteBankDTO } from "../../dto/IDeleteBankDTO";
import { ILogicalDeleteBankDTO } from "../../dto/ILogicalDeleteBankDTO";

class BankRepository implements IBankRepository {
   async create(data: ICreateBankDTO): Promise<Bank> {
      return await prismaClient.bank.create({
         data,
      });
   }

   async delete({ id }: IDeleteBankDTO): Promise<void> {
      await prismaClient.bank.delete({ where: { id } });
   }

   async list(): Promise<Bank[]> {
      return await prismaClient.bank.findMany();
   }

   async listId({ id }: IListIdBankDTO): Promise<Bank | null> {
      return await prismaClient.bank.findFirst({ where: { id } });
   }

   async logicalDelete({ id }: ILogicalDeleteBankDTO): Promise<Bank> {
      return await prismaClient.bank.update({
         where: {
            id,
         },
         data: {
            deleted: true,
            deleted_at: new Date(),
         },
      });
   }

   async update({ id, name }: IUpdateBankDTO): Promise<Bank> {
      return await prismaClient.bank.update({
         where: {
            id,
         },
         data: {
            name,
         },
      });
   }
}

export { BankRepository };
