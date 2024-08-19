export type Transaction = {
    description: string;
    id: string;
    type: string;
    card: string;
    date: string;
    amount: number;
};

export interface Account {
    transactions: Transaction[];
    money: number;
    expenses: number;
    earnings: number;
};

export interface UserData {
  userid: string;
  password: string;
  fullname: string;
  birthdate: string;
  accounting: Account;
};

export type BalanceInfo = {
    label: string;
    icon: string;
    amount?: number;
};