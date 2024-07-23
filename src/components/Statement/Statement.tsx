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

    return (
        <div>
            <section>
                <div>
                    <p>
                        {MoneyIcon}
                        <span>Money</span>
                        <span>${simulateApiData.balance}</span>
                    </p>
                </div>

                <div>
                    <p>
                        {ExpensesIcon}
                        <span>Expenses</span>
                        <span>${simulateApiData.expenses}</span>
                    </p>
                </div>

                <div>
                    <p>
                        {EarningsIcon}
                        <span>Earning</span>
                        <span>${simulateApiData.earnings}</span>
                    </p>
                </div>
            </section>

            <table>
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