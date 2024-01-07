import { inject, injectable } from "tsyringe";
import { IRoleRepository } from "../../repositorie/IRoleRepository";
import { IFindIdRoleDTO } from "../../dto/IFindIdRoleDTO";
import { Role } from "@prisma/client";

@injectable()
class FindIdRoleUseCase {
   constructor(
      @inject("RoleRepository") private roleRepository: IRoleRepository
   ) {}

   async execute({ id }: IFindIdRoleDTO): Promise<Role | null> {
      return await this.roleRepository.findId({ id });
   }
}

export { FindIdRoleUseCase };
