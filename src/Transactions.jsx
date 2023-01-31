import React from 'react'
import './Transactions.css'

export const Transactions = props => {
    const { data } = props
    const { transactions } = data
    return (
        <div>
            <table id="transaction-table">
                <caption>Transactions</caption>
                <thead>
                    <tr>
                        <th>Transaction Id</th>
                        <th>Customer Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.id}</td>
                                <td>{transaction.customerId}</td>
                                <td>{transaction.name}</td>
                                <td>{transaction.price}</td>
                                <td>{transaction.date}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}