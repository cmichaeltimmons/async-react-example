import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import { Rewards } from './Rewards';

describe('<Rewards>', () => {
    it('renders month correctly', () => {
        const data = {
            customers: {
                1: {
                    1: 100,
                    2: 200,
                    3: 300,
                    total: 600,
                },
            },
            transactions: [],
            months: ['01', '02', '03'],
        };

        const { getByText } = render(<Rewards data={data} />);
        expect(getByText('Jan')).to.be.ok;
        expect(getByText('Feb')).to.be.ok;
        expect(getByText('Mar')).to.be.ok;
    })

    it('renders one row per customer', () => {
        const data = {
            customers: {
                1: {
                    '01': 100,
                    '02': 200,
                    '03': 300,
                    total: 600,
                },
                2: {
                    '01': 100,
                    '02': 200,
                    '03': 300,
                    total: 600,
                }
            },
            transactions: [],
            months: ['01', '02', '03'],
        };

        const { getAllByRole } = render(<Rewards data={data} />);

        // expect 2 rows: header and 2 customer
        expect(getAllByRole('row')).to.have.length(3);
    })

    it('renders all cell data', () => {
        const data = {
            customers: {
                1: {
                    '01': 100,
                    '02': 200,
                    '03': 300,
                    total: 600,
                },
            },
            transactions: [],
            months: ['01', '02', '03'],
        };

        const { getAllByRole } = render(<Rewards data={data} />);

        const tableRows = getAllByRole('row').slice(1);

        // it renders the customer id
        expect(tableRows[0].cells[0].textContent).to.equal('1');
        // it renders the month data
        expect(tableRows[0].cells[1].textContent).to.equal('100');
        expect(tableRows[0].cells[2].textContent).to.equal('200');
        expect(tableRows[0].cells[3].textContent).to.equal('300');
        // it renders the total
        expect(tableRows[0].cells[4].textContent).to.equal('600');
    })


});