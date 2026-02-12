function calcBill(prices, items) {

    let total = 0;

    for (let item in prices) {
        // console.log(item, prices[item])
        let price = prices[item]
        total += price
    }

    // console.log(total)
    let itemCount = {}

    for (let item of items) {
        console.log(item)
        
    }


    return {
        total,
        itemCount,

    }
}

let output = calcBill({ pen: 10, book: 50 }, ['pen', 'pen', 'book', 'pen'])