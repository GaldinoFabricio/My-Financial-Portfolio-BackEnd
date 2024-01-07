import { UserBank } from "@prisma/client";
import { ICreateUserBankDTO } from "../dto/ICreateUserBankDTO";
import { IListBankIdUserBankDTO } from "../dto/IListBankIdUserBankDTO";
import { IListIdUserBankDTO } from "../dto/IListIdUserBankDTO";
import { IListUserIdUserBankDTO } from "../dto/IListUserIdUserBankDTO";
import { IUpdateUserBankDTO } from "../dto/IUpdateUserBankDTO";

interface IUserBankRepository {
   create(data: ICreateUserBankDTO): Promise<void>;

   list(): Promise<UserBank[]>;

   listBankId({ bank_id }: IListBankIdUserBankDTO): Promise<UserBank[]>;

   listId({ id }: IListIdUserBankDTO): Promise<UserBank | null>;

   listUserId({ user_id }: IListUserIdUserBankDTO): Promise<UserBank[]>;

   update({ id, bank_id, user_id }: IUpdateUserBankDTO): Promise<UserBank>;
}

export { IUserBankRepository };