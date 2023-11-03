import { User } from "@prisma/client";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { IListIdUserDTO } from "../../dto/IListIdUserDTO";
import { IUserRepository } from "../IUserRepository";
import { prismaClient } from "../../../../database";
import { IUpdateUserDTO } from "../../dto/IUpdateUserDTO";
import { GetResult } from "@prisma/client/runtime/library";
import { IUpdatePasswordUserDTO } from "../../dto/IUpdatePasswordUserDTO";
import { IListEmailUserDTO } from "../../dto/IListEmailUserDTO";

class UserRepository implements IUserRepository {
	async create(data: ICreateUserDTO): Promise<void> {
		await prismaClient.user.create({ data });
	}

	async listId({ id }: IListIdUserDTO): Promise<User | null> {
		return await prismaClient.user.findFirst({
			where: {
				id,
			},
		});
	}

	async listEmail({ email }: IListEmailUserDTO): Promise<User | null> {
		return await prismaClient.user.findFirst({
			where: {
				email,
			},
		});
	}

	async update({ email, id, name, password }: IUpdateUserDTO): Promise<User> {
		const data = await prismaClient.user.update({
			where: {
				id,
			},
			data: {
				name,
				email,
				password,
			},
		});

		return data;
	}

	async updatePassword({
		id,
		password,
	}: IUpdatePasswordUserDTO): Promise<User> {
		return await prismaClient.user.update({
			where: {
				id,
			},
			data: {
				password,
			},
		});
	}
}

export { UserRepository };
