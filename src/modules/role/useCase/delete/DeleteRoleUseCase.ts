import { inject, injectable } from "tsyringe";
import { IRoleRepository } from "../../repositorie/IRoleRepository";
import { IDeleteRoleDTO } from "../../dto/IDeleteRoleDTO";
import AppError from "../../../../shared/errors/AppErrors";

@injectable()
class DeleteRoleUseCase {
   constructor(
      @inject("RoleRepository") private roleRepository: IRoleRepository
   ) {}

   async execute({ id }: IDeleteRoleDTO): Promise<void> {
      const checkExistRole = await this.roleRepository.findId({ id });
      if (!checkExistRole) {
         throw new AppError("Regra não existe", 400);
      }

      await this.roleRepository.delete({ id });
   }
}

export { DeleteRoleUseCase };
