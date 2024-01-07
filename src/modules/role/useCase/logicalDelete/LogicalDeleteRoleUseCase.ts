import { inject, injectable } from "tsyringe";
import { IRoleRepository } from "../../repositorie/IRoleRepository";
import { ILogicalDeleteRoleDTO } from "../../dto/ILogicalDeleteRoleDTO";
import { Role } from "@prisma/client";
import AppError from "../../../../shared/errors/AppErrors";

@injectable()
class LogicalDeleteRoleUseCase {
   constructor(
      @inject("RoleRepository") private roleRepository: IRoleRepository
   ) {}

   async execute({ id }: ILogicalDeleteRoleDTO): Promise<Role> {
      const checkExistRole = await this.roleRepository.findId({ id });
      if (!checkExistRole) {
         throw new AppError("Regra não existe", 400);
      }

      return await this.roleRepository.logicalDelete({ id });
   }
}

export { LogicalDeleteRoleUseCase };
