interface IUpdateExpenseCategoryTableDTO {
   id: string;
   category_id?: string;
   user_id?: string;
   monthly_budget?: number;
   month?: string;
}

export { IUpdateExpenseCategoryTableDTO };
