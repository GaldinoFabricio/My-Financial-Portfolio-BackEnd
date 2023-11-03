import { GroupRole } from "@prisma/client";
import { prismaClient } from "../../../../database";
import { ICreateGroupRoleDTO } from "../../dto/groupRole/ICreateGroupRoleDTO";
import { IGroupRoleRepository } from "../IGroupRoleRepository";
import { IListIdGroupRoleDTO } from "../../dto/groupRole/IListIdGroupRoleDTO";
import { IListRoleIdGroupRoleDTO } from "../../dto/groupRole/IListRoleIdGroupRoleDTO";
import { IListUserIdGroupRoleDTO } from "../../dto/groupRole/IListUserIdGroupRoleDTO";
import { IUpdateGroupRoleDTO } from "../../dto/groupRole/IUpdateGroupRoleDTO";

class GroupRoleRepository implements IGroupRoleRepository {
	async create(data: ICreateGroupRoleDTO): Promise<void> {
		await prismaClient.groupRole.create({ data });
	}

	async list(): Promise<GroupRole[]> {
		return await prismaClient.groupRole.findMany();
	}

	async listId({ id }: IListIdGroupRoleDTO): Promise<GroupRole | null> {
		return await prismaClient.groupRole.findFirst({ where: { id } });
	}

	async listRoleId({
		role_id,
	}: IListRoleIdGroupRoleDTO): Promise<GroupRole[]> {
		return await prismaClient.groupRole.findMany({
			where: {
				role_id,
			},
		});
	}

	async listUserId({
		user_id,
	}: IListUserIdGroupRoleDTO): Promise<GroupRole | null> {
		return await prismaClient.groupRole.findFirst({ where: { user_id } });
	}

	async update({
		id,
		role_id,
		user_id,
	}: IUpdateGroupRoleDTO): Promise<GroupRole> {
		return await prismaClient.groupRole.update({
			where: {
				id,
			},
			data: {
				role_id,
				user_id,
			},
		});
	}
}

export { GroupRoleRepository };
