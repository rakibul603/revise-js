// function arrayOffunction (){
//     console.log('how many of name')
// }

// arrayOffunction()



// function checkEvenSum(sum1, sum2) {
//     let sum = sum1 + sum2;
//     console.log(sum)
//     if(sum % 2 === 0) {
//         console.log('yes this is even number ')
//     }
//     else{
//         console.log('NO this is not even number')
//     }
// }


// checkEvenSum(12, 21)


function sumTowNumberAndMultiplyByFive (num1, num2) {
    let sum = num1 + num2 ;
    let result = sum * 5;
    // console.log(result)
    if(result % 2 === 0) {
        return result;
    }
    else{
        console.log('This number is not even number')
        return result;
    }
    // return result;

    
}


let multipyNumbe = sumTowNumberAndMultiplyByFive(1, 10);

console.log(multipyNumbe)