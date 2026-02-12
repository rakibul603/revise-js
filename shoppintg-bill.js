// function calcBill(prices, items) {

//     let total = 0;

//     for (let item in prices) {
//         // console.log(item, prices[item])
//         let price = prices[item]
//         total += price
//     }

//     // console.log(total)
//     let itemCount = {}

//     for (let item of items) {
//         console.log(item)

//     }


//     return {
//         total,
//         itemCount,

//     }
// }

// let output = calcBill({ pen: 10, book: 50 }, ['pen', 'pen', 'book', 'pen'])




function calcBill(prices, items) {

    // console.log(prices, items)
    let itemCount = {}
    for (let item of items) {

        if (itemCount.hasOwnProperty(item)) {
            itemCount[item]++;
        }
        else {
            itemCount[item] = 1;
        }
    }


    let total = 0;

    for (let item in itemCount) {
        let price = prices[item];
        let quantity = itemCount[item];
        let totalPriceWithQuantity = price * quantity;
        // console.log(price)
        // total += price;
        // console.log(quantity)
        total = total + totalPriceWithQuantity

    }



    // console.log(itemCount)

    return {
        total,
        itemCount,
    }

}

let output = calcBill({ pen: 10, book: 50 }, ["pen", 'pen', 'book', 'pen'])


console.log(output)