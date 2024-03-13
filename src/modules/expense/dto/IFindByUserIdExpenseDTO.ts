interface IFindByUserIdExpenseDTO {
   user_id: string;
   page: number;
   pageSize: number;
   intial_date: string;
   final_date: string;
}

export { IFindByUserIdExpenseDTO };
