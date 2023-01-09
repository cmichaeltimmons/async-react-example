import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import { App } from './App';
import { stub } from 'sinon';

describe('<App>', () => {
    it('fetches data on once', () => {
        const api = {
            getData: stub().resolves({
                customers: {},
                transactions: [],
                months: [],
            }),
        };

        render(<App api={api} />);
        expect(api.getData.calledOnce).to.be.true;
    });
});