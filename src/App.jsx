import React, { useEffect, useState } from 'react';
import { Transactions } from './Transactions.jsx';
import { Rewards } from './Rewards.jsx';
import './App.css';

export const App = (props) => {
    const { api } = props
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
        <>
            <Transactions data={data} />
            <Rewards data={data} />
        </>
    )
}