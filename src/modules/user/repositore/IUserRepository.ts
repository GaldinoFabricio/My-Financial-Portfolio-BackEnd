import { User } from "@prisma/client";
import { ICreateUserDTO } from "../dto/ICreateUserDTO";
import { IListIdUserDTO } from "../dto/IListIdUserDTO";
import { IUpdateUserDTO } from "../dto/IUpdateUserDTO";
import { IUpdatePasswordUserDTO } from "../dto/IUpdatePasswordUserDTO";
import { IListEmailUserDTO } from "../dto/IListEmailUserDTO";

interface IUserRepository {
	create(data: ICreateUserDTO): Promise<void>;

	listId({ id }: IListIdUserDTO): Promise<User | null>;

	listEmail({ email }: IListEmailUserDTO): Promise<User | null>;

	update(data: IUpdateUserDTO): Promise<User>;

	updatePassword({ id, password }: IUpdatePasswordUserDTO): Promise<User>;
}

export { IUserRepository };
