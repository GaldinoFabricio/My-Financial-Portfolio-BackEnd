import { GroupRole } from "@prisma/client";
import { ICreateRoleDTO } from "../../role/dto/ICreateRoleDTO";
import { IFindUserIdGroupRole } from "../dto/IFindUserIdGroupRoleDTO";
import { IFindIdGroupRoleDTO } from "../dto/IFindIdGroupRoleDTO";
import { IUpdateGroupRoleDTO } from "../dto/IUpdateGroupRoleDTO";
import { IDeleteGroupRoleDTO } from "../dto/IDeleteGroupRoleDTO";
import { ILogicalDeleteGroupRoleDTO } from "../dto/ILogicalDeleteGroupRoleDTO";

interface IGroupRoleRepository {
   create(input: ICreateRoleDTO): Promise<void>;

   delete(input: IDeleteGroupRoleDTO): Promise<GroupRole>;

   findAll(): Promise<GroupRole[]>;

   findId(input: IFindIdGroupRoleDTO): Promise<GroupRole | null>;

   findUserId(input: IFindUserIdGroupRole): Promise<GroupRole | null>;

   logicalDelete(input: ILogicalDeleteGroupRoleDTO): Promise<GroupRole>;

   update(input: IUpdateGroupRoleDTO): Promise<GroupRole>;
}

export { IGroupRoleRepository };
