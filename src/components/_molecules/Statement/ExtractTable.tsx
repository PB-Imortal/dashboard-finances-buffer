import arrowDownIcon from "../../../assets/arrow_down.svg"
import arrowUpIcon from "../../../assets/arrow_up.svg"

import { TableHeader } from "../../_atoms/TableHeader"
import { TableData } from "../../_atoms/TableData"
import { TableRow } from "../../_atoms/TableRow"
import ButtonComponent from "../../_atoms/Button"

export function ExtractTable() {

    const simulateApiData = {
        transactions: [
            {
                description: 'Spotify',
                id: '#1371827',
                type: 'Shopping',
                card: '142343423',
                date: '26 Jan, 12.30 AM',
                amount: -2500
            },
            {   
                description: 'Freepik Sales',
                id: '#1371828',
                type: 'Transfer',
                card: '142343423',
                date: '24 Jan, 10.40 AM',
                amount: 750
            }
        ],
        balance: 10,
        expenses: 30,
        earnings: 32
    }


    return (
        <table className='bg-bgwhite gap-3 p-6 rounded-2xl text-center sm:w-11/12'>

                <thead>
                    <TableRow>
                        <TableHeader content='Description' />
                        <TableHeader content='Transaction ID' />
                        <TableHeader content='Type' />
                        <TableHeader content='Card' />
                        <TableHeader content='Date' />
                        <TableHeader content='Amount' />
                        <TableHeader content='Receipt' />
                    </TableRow>
                </thead>

                <tbody>

                    {simulateApiData.transactions.map(transaction => 
                        <TableRow key={transaction.id}>
                                <TableData>
                                    <span>
                                        <img src={(transaction.amount < 0) ? arrowDownIcon : arrowUpIcon}/>
                                        {transaction.description}
                                    </span>
                                </TableData>

                                <TableData>{transaction.id}</TableData>
                                <TableData>{transaction.type}</TableData>
                                <TableData>{transaction.card}</TableData>
                                <TableData>{transaction.date}</TableData>

                                <TableData>
                                    <span className={(transaction.amount < 0) ? 'font-medium text-txtred' : 'font-medium text-txtgreen'}>
                                        ${transaction.amount}
                                    </span> 
                                </TableData>

                                <TableData>
                                    <ButtonComponent
                                        bgcolor="bg-bgwhite"
                                        styles="border"
                                        arialabeltext="Download">
                                        Download
                                    </ButtonComponent>
                                </TableData>
                        </TableRow>)
                    }

                </tbody>

                
            </table>
    )
}