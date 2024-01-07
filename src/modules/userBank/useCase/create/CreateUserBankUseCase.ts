import { inject, injectable } from "tsyringe";
import { IUserBankRepository } from "../../repositories/IUserBankRepository";
import { ICreateUserBankDTO } from "../../dto/ICreateUserBankDTO";

@injectable()
class CreateUserBankUseCase {
   constructor(
      @inject("UserBankRepository")
      private userBankRepository: IUserBankRepository
   ) {}

   async execute({ bank_id, user_id }: ICreateUserBankDTO): Promise<void> {
      await this.userBankRepository.create({ bank_id, user_id });
   }
}

export { CreateUserBankUseCase };
