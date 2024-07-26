import arrowDownIcon from "../../../assets/arrow_down.svg"
import arrowUpIcon from "../../../assets/arrow_up.svg"

import { TableHeader } from "../../_atoms/TableHeader/TableHeader"
import { TableData } from "../../_atoms/TableData/TableData"
import { TableRow } from "../../_atoms/TableRow/TableRow"
import ButtonComponent from "../../_atoms/Button/Button"

import { useScreenSize } from "../../../hook/useHooks"

import { useState, useEffect, useContext } from "react"
import { UserContext } from "./apiEntities"

export function StatementTable() {
    
    const userData = useContext(UserContext)
    const screenSize = useScreenSize()

    const port = {
        isMobile: (screenSize.width < 640),
        isTablet: (screenSize.width > 760),
        isLaptop: (screenSize.width > 890),
    }

    return (
        <table className='bg-bgwhite border-separate gap-3 overflow-scroll px-6 py-3 rounded-2xl text-center w-full'>

            <thead>
                <TableRow>
                    <TableHeader content='Description' />
                    {
                        port.isTablet &&
                        <>
                            <TableHeader content='Transaction ID' />
                            <TableHeader content='Type' />
                            <TableHeader content='Card' />
                            <TableHeader content='Date' />
                        </>
                    }
                    <TableHeader content='Amount' />

                    {port.isLaptop && <TableHeader content='Receipt' />}

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
                                port.isTablet &&
                                <>
                                    <TableData>{transaction.id}</TableData>
                                    <TableData>{transaction.type}</TableData>
                                    <TableData>{transaction.card.substring(0, 4).concat(' ****')}</TableData>
                                    <TableData>{transaction.date}</TableData>
                                </>
                            }

                            <TableData variantStyle={isDebit ? 'text-txtred' : 'text-txtgreen'}>
                                    {isDebit ? `-$${transaction.amount.toString().substring(1)}` : `+$${transaction.amount}`}
                            </TableData>

                            {
                                port.isLaptop &&
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