import { UserBank } from "@prisma/client";
import { prismaClient } from "../../../../database";
import { ICreateUserBankDTO } from "../../dto/ICreateUserBankDTO";
import { IUserBankRepository } from "../IUserBankRepository";
import { IListBankIdUserBankDTO } from "../../dto/IListBankIdUserBankDTO";
import { IListIdUserBankDTO } from "../../dto/IListIdUserBankDTO";
import { IListUserIdUserBankDTO } from "../../dto/IListUserIdUserBankDTO";
import { IUpdateUserBankDTO } from "../../dto/IUpdateUserBankDTO";

class UserBankRepository implements IUserBankRepository {
   async create(data: ICreateUserBankDTO): Promise<void> {
      await prismaClient.userBank.create({
         data,
      });
   }

   async list(): Promise<UserBank[]> {
      return await prismaClient.userBank.findMany();
   }

   async listBankId({ bank_id }: IListBankIdUserBankDTO): Promise<UserBank[]> {
      return await prismaClient.userBank.findMany({
         where: {
            bank_id,
         },
      });
   }

   async listId({ id }: IListIdUserBankDTO): Promise<UserBank | null> {
      return await prismaClient.userBank.findFirst({
         where: { id },
      });
   }

   async listUserId({ user_id }: IListUserIdUserBankDTO): Promise<UserBank[]> {
      return await prismaClient.userBank.findMany({
         where: {
            user_id,
         },
      });
   }

   async update({
      id,
      bank_id,
      user_id,
   }: IUpdateUserBankDTO): Promise<UserBank> {
      return await prismaClient.userBank.update({
         where: {
            id,
         },
         data: {
            bank_id,
            user_id,
         },
      });
   }
}

export { UserBankRepository };