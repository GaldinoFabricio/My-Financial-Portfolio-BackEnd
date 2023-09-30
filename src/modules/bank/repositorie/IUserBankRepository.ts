import { UserBank } from "@prisma/client";
import { ICreateUserBankDTO } from "../dto/userBank/ICreateUserBankDTO";
import { IListBankIdUserBankDTO } from "../dto/userBank/IListBankIdUserBankDTO";
import { IListIdUserBankDTO } from "../dto/userBank/IListIdUserBankDTO";
import { IListUserIdUserBankDTO } from "../dto/userBank/IListUserIdUserBankDTO";
import { IUpdateUserBankDTO } from "../dto/userBank/IUpdateUserBankDTO";

interface IUserBankRepository {
	create(data: ICreateUserBankDTO): Promise<void>;

	list(): Promise<UserBank[]>;

	listBankId({ bank_id }: IListBankIdUserBankDTO): Promise<UserBank[]>;

	listId({ id }: IListIdUserBankDTO): Promise<UserBank | null>;

	listUserId({ user_id }: IListUserIdUserBankDTO): Promise<UserBank[]>;

	update({ id, bank_id, user_id }: IUpdateUserBankDTO): Promise<UserBank>;
}

export { IUserBankRepository };
