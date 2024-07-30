import { createContext, ReactNode } from "react";
import { useState } from "react";
import { useUserData } from "../../../hook/useHooks";


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

export const StatementContext = createContext<any>(undefined)

export const StatementContextProvider = ({children}: {children: ReactNode}) => {
    const [filter, setFilter] = useState('');
    const userData = useUserData()

    return (
    <StatementContext.Provider value={{filter, setFilter, userData}}>
        {children}
    </StatementContext.Provider>)
}