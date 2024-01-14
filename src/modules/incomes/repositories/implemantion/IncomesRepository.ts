import { Incomes } from "@prisma/client";
import { ICreateIncomesDTO } from "../../dto/ICreateIncomesDTO";
import { IIncomesRepository } from "../IIncomesRepository";
import { prismaClient } from "../../../../database";
import { IDeleteIncomesDTO } from "../../dto/IDeleteIncomesDTO";
import { IFindByBankIdIncomesDTO } from "../../dto/IFindByBankIdIncomesDTO";
import { IFindByIdIncomesDTO } from "../../dto/IFindByIdIncomesDTO";
import { IFindByUserIdIncomesDTO } from "../../dto/IFindByUserIdIncomesDTO";
import { IUpdateIncomesDTO } from "../../dto/IUpdateIncomesDTO";
import { IUpdateAmountIncomesDTO } from "../../dto/IUpdateAmountIncomesDTO";
import { IUpdateBankIdIncomesDTO } from "../../dto/IUpdateBankIdIncomesDTO";

class IncomesRepository implements IIncomesRepository {
   async create(input: ICreateIncomesDTO): Promise<Incomes> {
      return await prismaClient.incomes.create({
         data: input,
      });
   }

   async delete({ id }: IDeleteIncomesDTO): Promise<Incomes> {
      return await prismaClient.incomes.update({
         where: {
            id,
         },
         data: {
            deleted: true,
            deleted_at: new Date(),
         },
      });
   }

   async findByBankId({
      bank_id,
   }: IFindByBankIdIncomesDTO): Promise<Incomes[]> {
      return await prismaClient.incomes.findMany({
         where: {
            bank_id,
         },
      });
   }

   async findById({ id }: IFindByIdIncomesDTO): Promise<Incomes | null> {
      return await prismaClient.incomes.findFirst({
         where: {
            id,
         },
      });
   }

   async findByUserId({
      user_id,
   }: IFindByUserIdIncomesDTO): Promise<Incomes[]> {
      return await prismaClient.$queryRaw`
         SELECT
            incomes.amount,
            incomes.bank_id,
            incomes.description,
            incomes.receiver_date,
            incomes.id
         FROM
            incomes
            INNER JOIN users_banks ON incomes.bank_id = users_banks.bank_id
         WHERE
            users_banks.user_id = ${user_id}
      `;
   }

   async update({
      id,
      amount,
      bank_id,
      description,
      receiver_date,
   }: IUpdateIncomesDTO): Promise<Incomes> {
      return await prismaClient.incomes.update({
         where: {
            id,
         },
         data: {
            amount,
            bank_id,
            description,
            receiver_date,
            updated_at: new Date(),
         },
      });
   }

   async updateAmount({
      amount,
      id,
      receiver_date,
   }: IUpdateAmountIncomesDTO): Promise<void> {
      await prismaClient.incomes.update({
         where: {
            id,
         },
         data: {
            amount,
            receiver_date,
            updated_at: new Date(),
         },
      });
   }

   async updateBankId({ bank_id, id }: IUpdateBankIdIncomesDTO): Promise<void> {
      await prismaClient.incomes.update({
         where: {
            id,
         },
         data: { bank_id, updated_at: new Date() },
      });
   }
}

export { IncomesRepository };
