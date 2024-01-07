import { inject, injectable } from "tsyringe";
import { IRoleRepository } from "../../repositorie/IRoleRepository";
import { IUpdateRoleDTO } from "../../dto/IUpdateRoleDTO";
import { Role } from "@prisma/client";
import AppError from "../../../../shared/errors/AppErrors";

@injectable()
class UpdateRoleUseCase {
   constructor(
      @inject("RoleRepository") private roleRepository: IRoleRepository
   ) {}

   async execute({ id, name }: IUpdateRoleDTO): Promise<Role> {
      const checkExistRole = await this.roleRepository.findId({ id });
      if (!checkExistRole) {
         throw new AppError("Regra não existe", 400);
      }

      const checkNameRoleExist = await this.roleRepository.findName({ name });
      if (checkNameRoleExist.length > 0) {
         throw new AppError("Regra já existe", 400);
      }

      return await this.roleRepository.update({ id, name });
   }
}

export { UpdateRoleUseCase };
