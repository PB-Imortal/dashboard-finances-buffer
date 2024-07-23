import MoneyIcon from '../../assets/money-icon.svg'
import ExpensesIcon from '../../assets/expanses-icon.svg'
import EarningsIcon from '../../assets/earnings-icon.svg'

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
        <div className='bg-bggrey flex flex-col items-center'>
            <section className='flex justify-between sm:w-11/12'>
            
                {
                    accounting.map(data => 
                        <div className='bg-bgwhite gap-3 p-4 rounded-2xl'>
                            <div className='flex'>
                                <img src={data.icon} />

                                <div className=' flex flex-col'>
                                    <span>{data.label}</span>
                                    <span>${data.amount}</span>
                                </div>
                            </div>
                        </div>)
                }

            </section>

            <table className='bg-bgwhite gap-3 p-6 rounded-2xl text-center sm:w-11/12'>
                <tr>
                    <th>Description</th>
                    <th>Transaction ID</th>
                    <th>Type</th>
                    <th>Card</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Receipt</th>
                </tr>
                
                {simulateApiData.transactions.map(transaction => (
                    <tr>
                        <td>{transaction.description}</td>
                        <td>{transaction.id}</td>
                        <td>{transaction.type}</td>
                        <td>{transaction.card}</td>
                        <td>{transaction.date}</td>
                        <td>{transaction.amount}</td>
                        <td><button>Download</button></td>
                    </tr>
                )
                )}
            </table>
        
        </div>
    )
}