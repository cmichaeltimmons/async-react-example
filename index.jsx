import React, { useEffect, useState, StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import { api } from './api.js';

const Transactions = props => {
    const { data } = props
    const { transactions } = data
    return (
        <div>
            <h1>Transactions</h1>
            <table>
                <thead>
                    <tr>
                        <th>Customer Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => {
                        return (
                            <tr key={index}>
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

const months = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec'
}

const Results = props => {
    const { data } = props
    return (
        <div>
            <h1>Reward Points</h1>
            <table>
                <thead>
                    <tr>
                        <th>Customer Id</th>
                        {Array.from(data.months).map((month, index) => {
                            return <th key={index}>{months[month]}</th>
                        })}
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data.customers).map((customerId, index) => {
                        const customer = data.customers[customerId]
                        return (
                            <tr key={index}>
                                <td>{customerId}</td>
                                {Array.from(data.months).map((month, index) => {
                                    return <td key={index}>{customer[month] || 0}</td>
                                })}
                                <td>{customer['total'] || 0}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

const App = () => {
    const [data, setData] = useState({ customers: {}, transactions: [], months: [] })
    useEffect(() => {
        async function getData() {
            const transactions = await api.getData()
            setData(transactions)
        }

        getData()
    }, [])

    if (data.months.length === 0) return (<div>Loading...</div>)

    return (
        <div>
            <Transactions data={data} />
            <Results data={data} />
        </div>
    )
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

