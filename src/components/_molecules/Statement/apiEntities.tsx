import { createContext, ReactNode, useState, useEffect } from "react";
import { useUserData } from "../../../hook/useHooks";
import { Transaction } from "../../../common/entities/entities";

export const StatementContext = createContext<any>(undefined);

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
