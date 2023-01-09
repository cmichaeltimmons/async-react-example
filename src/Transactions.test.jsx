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
})
