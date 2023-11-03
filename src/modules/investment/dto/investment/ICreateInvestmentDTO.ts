interface ICreateInvestmentDTO {
	transaction_date: Date;
	asset_name: string;
	asset_type: string;
	price: number;
	user_bank_id: string;
	amount: number;
}

export { ICreateInvestmentDTO };
