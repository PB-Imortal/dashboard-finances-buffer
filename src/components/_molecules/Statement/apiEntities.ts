import { createContext } from "react";

interface AccountDetails {
    description: string;
    id: string;
    type: string;
    card: string;
    date: string;
    amount: number;
}

interface Account {
    transactions: AccountDetails[];
    money: number;
    expenses: number;
    earnings: number;
}

export interface UserData {
    userid: string;
    password: string;
    fullname: string;
    birthdate: string;
    accounting: Account;
}

export const UserContext = createContext<UserData | undefined>(undefined)