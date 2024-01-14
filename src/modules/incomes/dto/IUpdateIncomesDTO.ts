interface IUpdateIncomesDTO {
   id: string;
   description?: string;
   amount?: number;
   receiver_date?: Date;
   bank_id?: string;
}

export { IUpdateIncomesDTO };
