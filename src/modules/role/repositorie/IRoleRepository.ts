import { Role } from "@prisma/client";
import { IListIdRoleDTO } from "../dto/role/IListIdRoleDTO";
import { IUpdateRoleDTO } from "../dto/role/IUpdateRoleDTO";
import { ICreateRoleDTO } from "../dto/role/ICreateRoleDTO";

interface IRoleRepository {
	create(data: ICreateRoleDTO): Promise<void>;

	list(): Promise<Role[]>;

	listId({ id }: IListIdRoleDTO): Promise<Role | null>;

	update({ id, name }: IUpdateRoleDTO): Promise<Role>;
}

export { IRoleRepository };
