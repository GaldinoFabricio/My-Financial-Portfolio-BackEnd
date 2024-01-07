import { Investment } from "@prisma/client";
import { ICreateInvestmentDTO } from "../dto/ICreateInvestmentDTO";
import { IListIdInvestmentDTO } from "../dto/IListIdInvestmentDTO";
import { IListAssetNameInvestmentDTO } from "../dto/IListAssetNameInvestmentDTO";
import { IListUserBankIdInvestmentDTO } from "../dto/IListUserBankIdInvestmentDTO";
import { IUpdateInvestmentDTO } from "../dto/IUpdateInvestmentDTO";
import { IUpdatePriceInvestmentDTO } from "../dto/IUpdatePriceInvestmentDTO";
import { IUpdateUserBankIdInvestmentDTO } from "../dto/IUpdateUserBankIdInvestmentDTO";

interface IInvestmentRepository {
   create(data: ICreateInvestmentDTO): Promise<void>;

   list(): Promise<Investment[]>;

   listId({ id }: IListIdInvestmentDTO): Promise<Investment | null>;

   listAssetName({
      asset_name,
   }: IListAssetNameInvestmentDTO): Promise<Investment[]>;

   listUserBankId({
      user_bank_id,
   }: IListUserBankIdInvestmentDTO): Promise<Investment[]>;

   update({
      id,
      asset_name,
      asset_type,
      amount,
      price,
      transaction_date,
      user_bank_id,
   }: IUpdateInvestmentDTO): Promise<Investment>;

   updatePrice({ price, id }: IUpdatePriceInvestmentDTO): Promise<Investment>;

   updateUserBankId({
      id,
      user_bank_id,
   }: IUpdateUserBankIdInvestmentDTO): Promise<Investment>;
}

export { IInvestmentRepository };
