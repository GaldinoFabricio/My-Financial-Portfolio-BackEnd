import { User } from "@prisma/client";
import { ICreateUserDTO } from "../dto/ICreateUserDTO";
import { IFindIdUserDTO } from "../dto/IFindIdUserDTO";
import { IUpdateUserDTO } from "../dto/IUpdateUserDTO";
import { IUpdatePasswordUserDTO } from "../dto/IUpdatePasswordUserDTO";
import { IFindEmailUserDTO } from "../dto/IFindEmailUserDTO";

interface IUserRepository {
   create(data: ICreateUserDTO): Promise<void>;

   findId({ id }: IFindIdUserDTO): Promise<User | null>;

   findEmail({ email }: IFindEmailUserDTO): Promise<User | null>;

   update(data: IUpdateUserDTO): Promise<User>;

   updatePassword({ id, password }: IUpdatePasswordUserDTO): Promise<User>;
}

export { IUserRepository };
