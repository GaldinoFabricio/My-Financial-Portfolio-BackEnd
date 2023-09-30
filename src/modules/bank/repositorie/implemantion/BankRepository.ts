import { Bank } from "@prisma/client";
import { prismaClient } from "../../../../database";
import { ICreateBankDTO } from "../../dto/bank/ICreateBankDTO";
import { IBankRepository } from "../IBankRepository";
import { IListIdBankDTO } from "../../dto/bank/IListIdBankDTO";
import { IUpdateBankDTO } from "../../dto/bank/IUpdateBankDTO";

class BankRepository implements IBankRepository {
	async create(data: ICreateBankDTO): Promise<void> {
		await prismaClient.bank.create({
			data,
		});
	}

	async list(): Promise<Bank[]> {
		return await prismaClient.bank.findMany();
	}

	async listId({ id }: IListIdBankDTO): Promise<Bank | null> {
		return await prismaClient.bank.findFirst({ where: { id } });
	}

	async update({ id, name }: IUpdateBankDTO): Promise<Bank> {
		return await prismaClient.bank.update({
			where: {
				id,
			},
			data: {
				name,
			},
		});
	}
}

export { BankRepository };
