import { Role } from "@prisma/client";
import { prismaClient } from "../../../../database";
import { ICreateRoleDTO } from "../../dto/role/ICreateRoleDTO";
import { IRoleRepository } from "../IRoleRepository";
import { IListIdRoleDTO } from "../../dto/role/IListIdRoleDTO";
import { IUpdateRoleDTO } from "../../dto/role/IUpdateRoleDTO";
import { IListNameRoleDTO } from "../../dto/role/IListNameRoleDTO";

class RoleRepository implements IRoleRepository {
	async create(data: ICreateRoleDTO): Promise<void> {
		await prismaClient.role.create({ data });
	}

	async list(): Promise<Role[]> {
		return await prismaClient.role.findMany();
	}

	async listId({ id }: IListIdRoleDTO): Promise<Role | null> {
		return await prismaClient.role.findFirst({ where: { id } });
	}

	async listName({ name }: IListNameRoleDTO): Promise<Role | null> {
		return await prismaClient.role.findFirst({ where: { name } });
	}

	async update({ id, name }: IUpdateRoleDTO): Promise<Role> {
		return await prismaClient.role.update({ where: { id }, data: { name } });
	}
}

export { RoleRepository };
