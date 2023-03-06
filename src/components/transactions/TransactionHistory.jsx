import TransactionItem from "./TransactionCard";
import css from './TransactionHistory.module.css';

function Transactions({items}){
    return <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    <tbody>
        {items.map(item=>(
          <TransactionItem
          key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.currency}
          />
        ))}
    </tbody>
  </table>
}

export default Transactions;