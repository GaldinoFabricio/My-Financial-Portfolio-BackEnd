import { User } from "@prisma/client";
import { IUserService } from "./IUserService";
import { ICreateUserDTO } from "../dto/ICreateUserDTO";
import { prismaClient } from "../../../database";
import { IFindIdUserDTO } from "../dto/IFindIdUserDTO";
import { IFindEmailUserDTO } from "../dto/IFindEmailUserDTO";
import { IUpdateUserDTO } from "../dto/IUpdateUserDTO";
import { IUpdatePasswordUserDTO } from "../dto/IUpdatePasswordUserDTO";

class UserService implements IUserService {
   async create(data: ICreateUserDTO): Promise<void> {
      await prismaClient.user.create({ data });
   }

   async findId({ id }: IFindIdUserDTO): Promise<User | null> {
      return await prismaClient.user.findFirst({
         where: {
            id,
         },
      });
   }

   async findEmail({ email }: IFindEmailUserDTO): Promise<User | null> {
      return await prismaClient.user.findFirst({
         where: {
            email,
         },
      });
   }

   async update({ email, id, name, password }: IUpdateUserDTO): Promise<User> {
      const data = await prismaClient.user.update({
         where: {
            id,
         },
         data: {
            name,
            email,
            password,
         },
      });

      return data;
   }

   async updatePassword({
      id,
      password,
   }: IUpdatePasswordUserDTO): Promise<User> {
      return await prismaClient.user.update({
         where: {
            id,
         },
         data: {
            password,
         },
      });
   }
}

export { UserService };
