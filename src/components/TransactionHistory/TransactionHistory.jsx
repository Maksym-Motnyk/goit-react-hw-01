import css from "./TransactionHistory.module.css";
export default function TransactionsHistory({ transactions }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td className={css.text}> {transaction.type} </td>
            <td> {transaction.amount} </td>
            <td> {transaction.currency} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
