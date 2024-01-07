import { Role } from "@prisma/client";
import { prismaClient } from "../../../../database";
import { ICreateRoleDTO } from "../../dto/ICreateRoleDTO";
import { IRoleRepository } from "../IRoleRepository";
import { IFindIdRoleDTO } from "../../dto/IFindIdRoleDTO";
import { IUpdateRoleDTO } from "../../dto/IUpdateRoleDTO";
import { IDeleteRoleDTO } from "../../dto/IDeleteRoleDTO";
import { IFindNameRoleDTO } from "../../dto/IFindNameRoleDTO";
import { ILogicalDeleteRoleDTO } from "../../dto/ILogicalDeleteRoleDTO";

class RoleRepository implements IRoleRepository {
   async create(data: ICreateRoleDTO): Promise<Role> {
      return await prismaClient.role.create({ data });
   }

   async delete({ id }: IDeleteRoleDTO): Promise<void> {
      await prismaClient.role.delete({
         where: {
            id,
         },
      });
   }

   async findAll(): Promise<Role[]> {
      return await prismaClient.role.findMany();
   }

   async findId({ id }: IFindIdRoleDTO): Promise<Role | null> {
      return await prismaClient.role.findFirst({ where: { id } });
   }

   async findName({ name }: IFindNameRoleDTO): Promise<Role[]> {
      return await prismaClient.role.findMany({
         where: { name: { contains: name } },
      });
   }

   async logicalDelete({ id }: ILogicalDeleteRoleDTO): Promise<Role> {
      return await prismaClient.role.update({
         where: {
            id,
         },
         data: {
            deleted: true,
            deleted_at: new Date(),
         },
      });
   }

   async update({ id, name }: IUpdateRoleDTO): Promise<Role> {
      return await prismaClient.role.update({ where: { id }, data: { name } });
   }
}

export { RoleRepository };
