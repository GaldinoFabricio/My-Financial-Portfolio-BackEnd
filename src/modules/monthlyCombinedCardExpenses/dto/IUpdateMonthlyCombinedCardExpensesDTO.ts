interface IUpdateMonthlyCombinedCardExpensesDTO {
   id: string;
   user_bank_id?: string;
   description?: string;
   card_type?: string;
   date_expense?: Date;
   value?: number;
}

export { IUpdateMonthlyCombinedCardExpensesDTO };
