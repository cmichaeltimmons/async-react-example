import React from 'react'
import { mapMonths } from './utils.js'

export const Rewards = props => {
    const { data } = props
    return (
        <div>
            <h1>Reward Points</h1>
            <table>
                <thead>
                    <tr>
                        <th>Customer Id</th>
                        {Array.from(data.months).map((month, index) => {
                            return <th key={index}>{mapMonths[month]}</th>
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