import { TableHeader } from "../../_atoms/TableHeader"
import { TableData } from "../../_atoms/TableData"
import { TableRow } from "../../_atoms/TableRow"

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
                    <TableRow innerHtml={
                        <>
                            <TableHeader content='Description' />
                            <TableHeader content='Transaction ID' />
                            <TableHeader content='Type' />
                            <TableHeader content='Card' />
                            <TableHeader content='Date' />
                            <TableHeader content='Amount' />
                            <TableHeader content='Receipt' />
                        </>}
                    />

                </thead>

                <tbody>

                    {simulateApiData.transactions.map(transaction => 
                        <TableRow key={transaction.id} innerHtml={
                            <>
                                <TableData content={transaction.description}/>
                                <TableData content={transaction.id} />
                                <TableData content={transaction.type} />
                                <TableData content={transaction.card} />
                                <TableData content={transaction.date} />

                                <TableData tags={
                                    <span className={(transaction.amount < 0) ? 'text-txtred' : 'text-txtgreen'}>
                                        {transaction.amount}
                                    </span>} 
                                />

                                <TableData tags={
                                    <button>Download</button>}
                                />
                                
                            </>}
                        />)
                    }

                </tbody>

                
            </table>
    )
}