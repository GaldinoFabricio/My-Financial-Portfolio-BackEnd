import { GroupRole } from "@prisma/client";
import { ICreateRoleDTO } from "../dto/role/ICreateRoleDTO";

interface IGroupRoleRepository {
	create(data: ICreateRoleDTO): Promise<void>;

	list(): Promise<GroupRole[]>;

	listId(): Promise<GroupRole | null>;
}
