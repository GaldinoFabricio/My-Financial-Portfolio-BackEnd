import { GroupRole } from "@prisma/client";
import { IListRoleIdGroupRoleDTO } from "../dto/groupRole/IListRoleIdGroupRoleDTO";
import { IListUserIdGroupRoleDTO } from "../dto/groupRole/IListUserIdGroupRoleDTO";
import { IUpdateGroupRoleDTO } from "../dto/groupRole/IUpdateGroupRoleDTO";
import { ICreateGroupRoleDTO } from "../dto/groupRole/ICreateGroupRoleDTO";
import { IListIdGroupRoleDTO } from "../dto/groupRole/IListIdGroupRoleDTO";

interface IGroupRoleRepository {
	create(data: ICreateGroupRoleDTO): Promise<void>;

	list(): Promise<GroupRole[]>;

	listId({ id }: IListIdGroupRoleDTO): Promise<GroupRole | null>;

	listRoleId({ role_id }: IListRoleIdGroupRoleDTO): Promise<GroupRole[]>;

	listUserId({ user_id }: IListUserIdGroupRoleDTO): Promise<GroupRole | null>;

	update({ id, role_id, user_id }: IUpdateGroupRoleDTO): Promise<GroupRole>;
}

export { IGroupRoleRepository };
