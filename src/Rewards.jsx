import React from 'react'
import { mapMonths } from './utils.js'
import './Rewards.css'

export const Rewards = props => {
    const { data } = props
    return (
        <div>
            <table id="rewards-table">
                <caption>Rewards</caption>
                <thead>
                    <tr>
                        <th>Customer Id</th>
                        {Array.from(data.months).map((month) => {
                            return <th key={month}>{mapMonths[month]}</th>
                        })}
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data.customers).map((customerId) => {
                        const customer = data.customers[customerId]
                        return (
                            <tr key={customerId}>
                                <td>{customerId}</td>
                                {Array.from(data.months).map((month) => {
                                    return <td key={month}>{customer[month] || 0}</td>
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