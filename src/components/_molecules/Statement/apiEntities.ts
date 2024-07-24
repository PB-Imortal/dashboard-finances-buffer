import { createContext } from "react";

interface accountdetails {
    description: string;
    id: string;
    type: string;
    card: string;
    date: string;
    amount: number;
}

interface count {
    transactions: accountdetails[];
    money: number;
    expenses: number;
    earnings: number;
}

export interface UserData {
    userid: string;
    password: string;
    fullname: string;
    birthdate: string;
    accounting: count;
}

export const UserContext = createContext<UserData | undefined>(undefined)