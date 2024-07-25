import arrowDownIcon from "../../../assets/arrow_down.svg"
import arrowUpIcon from "../../../assets/arrow_up.svg"

import { TableHeader } from "../../_atoms/TableHeader/TableHeader"
import { TableData } from "../../_atoms/TableData/TableData"
import { TableRow } from "../../_atoms/TableRow/TableRow"
import ButtonComponent from "../../_atoms/Button/Button"

import { useState, useEffect, useContext } from "react"
import { UserContext } from "./apiEntities"

export function StatementTable() {
    const userData = useContext(UserContext)

    const [isTablet, setTablet] = useState(window.innerWidth > 640)
    const [isLaptop, setLaptop] = useState(window.innerWidth > 840)

    const updateMedia = () => {
        setTablet(window.innerWidth > 640);
        setLaptop(window.innerWidth > 890)
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <table className='bg-bgwhite border-separate gap-3 overflow-scroll px-6 py-3 rounded-2xl text-center sm:w-11/12'>

            <thead>
                <TableRow>
                    <TableHeader content='Description' />
                    {
                        isTablet &&
                        <>
                            <TableHeader content='Transaction ID' />
                            <TableHeader content='Type' />
                            <TableHeader content='Card' />
                            <TableHeader content='Date' />
                        </>
                    }
                    <TableHeader content='Amount' />

                    {isLaptop && <TableHeader content='Receipt' />}

                </TableRow>
            </thead>

            <tbody>
                {userData?.accounting.transactions.map(transaction => {
                    const isDebit = (transaction.amount < 0)

                    return (
                        <TableRow key={transaction.id}>

                            <TableData>
                                <span className="flex gap-2 items-center">
                                    <img src={isDebit ? arrowDownIcon : arrowUpIcon} alt="arrow"/>
                                    {transaction.description}
                                </span>
                            </TableData>

                            {
                                isTablet &&
                                <>
                                    <TableData>{transaction.id}</TableData>
                                    <TableData>{transaction.type}</TableData>
                                    <TableData>{transaction.card.substring(0, 4).concat(' ****')}</TableData>
                                    <TableData>{transaction.date}</TableData>
                                </>
                            }

                            <TableData>
                                <span className={isDebit ? 'font-medium text-txtred' : 'font-medium text-txtgreen'}>
                                    {isDebit ? `-$${transaction.amount.toString().substring(1)}` : `+$${transaction.amount}`}
                                </span>
                            </TableData>

                            {
                                isLaptop &&
                                <TableData>
                                    <ButtonComponent
                                        arialabeltext="Download"
                                        bgcolor="bg-bgwhite"
                                        styles="border">
                                        Download
                                    </ButtonComponent>
                                </TableData>
                            }

                        </TableRow>)
                })
                }
            </tbody>

        </table>
    )
}