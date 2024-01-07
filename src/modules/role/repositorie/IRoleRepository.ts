import { Role } from "@prisma/client";
import { IFindIdRoleDTO } from "../dto/IFindIdRoleDTO";
import { IUpdateRoleDTO } from "../dto/IUpdateRoleDTO";
import { ICreateRoleDTO } from "../dto/ICreateRoleDTO";
import { IDeleteRoleDTO } from "../dto/IDeleteRoleDTO";
import { IFindNameRoleDTO } from "../dto/IFindNameRoleDTO";
import { ILogicalDeleteRoleDTO } from "../dto/ILogicalDeleteRoleDTO";

interface IRoleRepository {
   create(data: ICreateRoleDTO): Promise<Role>;

   delete(input: IDeleteRoleDTO): Promise<void>;

   findAll(): Promise<Role[]>;

   findId({ id }: IFindIdRoleDTO): Promise<Role | null>;

   findName(input: IFindNameRoleDTO): Promise<Role[]>;

   logicalDelete(input: ILogicalDeleteRoleDTO): Promise<Role>;

   update({ id, name }: IUpdateRoleDTO): Promise<Role>;
}

export { IRoleRepository };
