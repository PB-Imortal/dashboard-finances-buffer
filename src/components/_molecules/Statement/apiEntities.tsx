import { createContext, ReactNode, useState, useEffect } from "react";
import { useUserData } from "../../../hook/useHooks";

export type Transaction = {
    description: string;
    id: string;
    type: string;
    card: string;
    date: string;
    amount: number;
}

interface Account {
    transactions: Transaction[];
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

export const StatementContext = createContext<
  | {
      filter: string;
      setFilter: React.Dispatch<React.SetStateAction<string>>;
      userAccounting: Account | undefined;
    }
  | undefined
>(undefined);

export const StatementContextProvider = ({children}: {children: ReactNode}) => {
    const userAccounting = useUserData()?.accounting
    const [filteredData, setFilteredData] = useState<Transaction[]>();

    useEffect(() => {
        setFilteredData(userAccounting?.transactions.slice(0,14))
    }, [userAccounting])

    return (
    <StatementContext.Provider value={{filteredData, setFilteredData, userAccounting}}>
        {children}
    </StatementContext.Provider>)
}
