export const transactions = [
    {
        id: 1,
        name: 'Ball',
        price: 110,
        date: '2020-01-01',
        customerId: 1
    },
    {
        id: 2,
        name: 'Shoes',
        price: 20,
        date: '2020-01-15',
        customerId: 3
    },
    {
        id: 3,
        name: 'Shirt',
        price: 70,
        date: '2020-01-16',
        customerId: 2
    },
    {
        id: 4,
        name: 'Pants',
        price: 100,
        date: '2020-02-03',
        customerId: 2
    },
    {
        id: 5,
        name: 'Hat',
        price: 40,
        date: '2020-02-15',
        customerId: 2
    },
    {
        id: 6,
        name: 'Socks',
        price: 80,
        date: '2020-03-01',
        customerId: 3
    },
    {
        id: 7,
        name: 'Gloves',
        price: 70,
        date: '2020-03-20',
        customerId: 3
    },
    {
        id: 8,
        name: 'Sweater',
        price: 100,
        date: '2020-03-25',
        customerId: 1
    }
]

const convertToPoints = (price) => {
    if (price > 100) {
        return (price - 100) * 2 + 50
    } else if (price > 50) {
        return price - 50
    } else {
        return 0
    }
}

export const calculateRewardPoints = (transactions) => {
    const customers = {}
    const months = new Set()
    transactions.forEach(transaction => {
        const { customerId, price, date } = transaction
        const month = date.split('-')[1]
        months.add(month)
        const customer = customers[customerId] || {}
        const monthlyPoints = customer[month] || 0
        const points = convertToPoints(price)
        customer[month] = monthlyPoints + points
        customer['total'] = (customer['total'] || 0) + points
        customers[customerId] = customer
    })

    return { customers, months: Array.from(months), transactions }
}

export const api = {
    getData: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(calculateRewardPoints(transactions))
            }, 1000)
        })
    }
}
