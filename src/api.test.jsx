import { calculateRewardPoints } from "./api";
import { expect } from 'chai';

describe('api', () => {
    it("calculates points correctly", () => {
        const dummyTransactions = [
            {
                id: 1,
                name: "Shoes",
                price: 120,
                date: "2020-01-01",
                customerId: 1,
            },
            {
                id: 2,
                name: "Pants",
                price: 100,
                date: "2020-02-03",
                customerId: 2,
            },
            {
                id: 3,
                name: "Hat",
                price: 40,
                date: "2020-02-15",
                customerId: 2,
            },
            {
                id: 4,
                name: "Socks",
                price: 80,
                date: "2020-03-01",
                customerId: 3,
            },
            {
                id: 5,
                name: "Gloves",
                price: 70,
                date: "2020-03-20",
                customerId: 3,
            },
            {
                id: 6,
                name: "Sweater",
                price: 100,
                date: "2020-03-25",
                customerId: 1,
            },
        ];

        const { customers } = calculateRewardPoints(
            dummyTransactions
        );

        expect(customers['1'].total).to.equal(140);
        expect(customers['1']['01']).to.equal(90);
        expect(customers['1']['02']).to.equal(undefined);
        expect(customers['1']['03']).to.equal(50);

        expect(customers['2'].total).to.equal(50);
        expect(customers['2']['01']).to.equal(undefined);
        expect(customers['2']['02']).to.equal(50);
        expect(customers['2']['03']).to.equal(undefined);

        expect(customers['3'].total).to.equal(50);
        expect(customers['3']['01']).to.equal(undefined);
        expect(customers['3']['02']).to.equal(undefined);
        expect(customers['3']['03']).to.equal(50);

    });
})