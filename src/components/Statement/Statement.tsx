import MoneyIcon from '../../assets/money-icon.svg'
import ExpensesIcon from '../../assets/expanses-icon.svg'
import EarningsIcon from '../../assets/earnings-icon.svg'

import { TableRow } from '../_atoms/TableRow'
import { TableData } from '../_atoms/TableData'
import { TableHeader } from '../_atoms/TableHeader'

export default function Statement () {

    const simulateApiData = {
        transactions: [
            {
                description: 'Spotify',
                id: '#1371827',
                type: 'Shopping',
                card: '142343423',
                date: '26 Jan, 12.30 AM',
                amount: 2500
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

    const accounting = [
        {
            label: 'Money',
            icon: MoneyIcon,
            amount: simulateApiData.balance
        },
        {
            label: 'Expenses',
            icon: ExpensesIcon,
            amount: simulateApiData.expenses
        },
        {
            label: 'Earnings',
            icon: EarningsIcon,
            amount: simulateApiData.earnings
        }
    ]

    return (
        <div className='bg-bggrey flex flex-col gap-3 items-center p-3'>
            <section className='flex gap-6 sm:w-11/12'>

                {
                    accounting.map(data => 
                        <div className='bg-bgwhite gap-3 p-4 rounded-2xl w-full	'>

                            <div className='flex items-center gap-4'>
                                <img src={data.icon} />

                                <div className=' flex flex-col'>
                                    <span>{data.label}</span>
                                    <span className='font-semibold text-txtpurple text-xl'>${data.amount}</span>
                                </div>
                            </div>
                            
                        </div>)
                }

            </section>

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
                                <TableData content={transaction.amount} />
    
                                <TableData content='download'/>
                            </>}
                        />)
                    }

                </tbody>

                
            </table>
        
        </div>
    )
}