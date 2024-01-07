import { inject, injectable } from "tsyringe";
import { IRoleRepository } from "../../repositorie/IRoleRepository";
import { Role } from "@prisma/client";
import { ICreateRoleDTO } from "../../dto/ICreateRoleDTO";
import AppError from "../../../../shared/errors/AppErrors";

@injectable()
class CreateRoleUseCase {
   constructor(
      @inject("RoleRepository") private roleRepository: IRoleRepository
   ) {}
   async execute({ name }: ICreateRoleDTO): Promise<Role> {
      const checkExistRole = await this.roleRepository.findName({ name });
      if (checkExistRole.length > 0) {
         throw new AppError("Regra já existe", 400);
      }

      return this.roleRepository.create({ name });
   }
}

export { CreateRoleUseCase };
