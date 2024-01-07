import { inject, injectable } from "tsyringe";
import { IUserBankRepository } from "../../repositories/IUserBankRepository";
import { IUpdateUserBankDTO } from "../../dto/IUpdateUserBankDTO";
import { UserBank } from "@prisma/client";

@injectable()
class UpdateUserBankUseCase {
   constructor(
      @inject("UserBankRepository")
      private userBankRepository: IUserBankRepository
   ) {}

   async execute({
      id,
      bank_id,
      user_id,
   }: IUpdateUserBankDTO): Promise<UserBank> {
      return await this.userBankRepository.update({ id, bank_id, user_id });
   }
}

export { UpdateUserBankUseCase };
