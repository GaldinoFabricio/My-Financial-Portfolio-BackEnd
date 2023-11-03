import { Investment } from "@prisma/client";
import { ICreateInvestmentDTO } from "../dto/investment/ICreateInvestmentDTO";
import { IListIdInvestmentDTO } from "../dto/investment/IListIdInvestmentDTO";
import { IListAssetNameInvestmentDTO } from "../dto/investment/IListAssetNameInvestmentDTO";
import { IListUserBankIdInvestmentDTO } from "../dto/investment/IListUserBankIdInvestmentDTO";
import { IUpdateInvestmentDTO } from "../dto/investment/IUpdateInvestmentDTO";
import { IUpdatePriceInvestmentDTO } from "../dto/investment/IUpdatePriceInvestmentDTO";
import { IUpdateUserBankIdInvestmentDTO } from "../dto/investment/IUpdateUserBankIdInvestmentDTO";

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
