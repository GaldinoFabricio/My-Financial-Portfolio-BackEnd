import { Bank } from "@prisma/client";
import { ICreateBankDTO } from "../dto/bank/ICreateBankDTO";
import { IListIdBankDTO } from "../dto/bank/IListIdBankDTO";
import { IUpdateBankDTO } from "../dto/bank/IUpdateBankDTO";

interface IBankRepository {
	create(data: ICreateBankDTO): Promise<void>;

	list(): Promise<Bank[]>;

	listId({ id }: IListIdBankDTO): Promise<Bank | null>;

	update({ id, name }: IUpdateBankDTO): Promise<Bank>;
}

export { IBankRepository };
