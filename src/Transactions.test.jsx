import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import { Transactions } from './Transactions';

describe('<Transactions>', () => {
    it('renders all transactions', () => {
        const data = {
            customers: {
                1: {
                    '01': 100,
                    '02': 200,
                    '03': 300,
                    total: 600,
                },
            },
            transactions: [
                {
                    id: 1,
                    customer_id: 1,
                    amount: 100,
                    date: '2020-01-01',
                },
                {
                    id: 2,
                    customer_id: 1,
                    amount: 200,
                    date: '2020-02-01',
                },
                {
                    id: 3,
                    customer_id: 1,
                    amount: 300,
                    date: '2020-03-01',
                },
            ],
            months: ['01', '02', '03'],
        };

        const { getAllByRole } = render(<Transactions data={data} />);

        // expect 4 rows: header and 3 transactions
        expect(getAllByRole('row')).to.have.length(4);
    })

    it('renders all cell dat', () => {
        const data = {
            customers: {
                1: {
                    '01': 100,
                    '02': 200,
                    '03': 300,
                    total: 600,
                },
            },
            transactions: [
                {
                    id: 1,
                    customerId: 1,
                    name: 'book',
                    price: 100,
                    date: '2020-01-01',
                }
            ],
            months: ['01', '02', '03'],
        };

        const { getAllByRole } = render(<Transactions data={data} />);

        const tableRows = getAllByRole('row').slice(1);

        //it renders trasaction id
        expect(tableRows[0].cells[0].textContent).to.equal('1');
        //it renders trasaction customer id
        expect(tableRows[0].cells[1].textContent).to.equal('1');
        //it renders trasaction name
        expect(tableRows[0].cells[2].textContent).to.equal('book');
        //it renders trasaction price
        expect(tableRows[0].cells[3].textContent).to.equal('100');
        //it renders trasaction date
        expect(tableRows[0].cells[4].textContent).equals('2020-01-01');
    })
})
