// function wordFrequncy(sentence) {
//     // console.log(sentence)
//     let words = sentence.split(" ");

//     let wordsCount = {
//         name: "rakib"
//     };
//     // console.log(wordsCount.hasOwnProperty("rakib+"))
//     for (let word of words) {
//         if (wordsCount.hasOwnProperty(word)) {
//             // wordsCount[word] = wordsCount[word] + 1;
//             // wordsCount[word] += 1;
//             wordsCount[word]++;
//         }
//         else {
//             wordsCount[word] = 1;
//         }
//     }

//     // console.log(words)
//     return wordsCount;
// }


// let output = wordFrequncy("I love js and I love Coding and js is fun");

// console.log(output)


function wordFrequncy(sentence) {
    let words = sentence.trim().split(" ");
    let wordsCount = {}

    for (let word of words) {
        let wordLowerCase = word.toLowerCase();

        if (wordsCount.hasOwnProperty(wordLowerCase)) {
            wordsCount[wordLowerCase]++;
        }
        else {
            wordsCount[wordLowerCase] = 1;
        }
    }


    return wordsCount;


}


let outPut = wordFrequncy(" I love js And I love Programming js is fun Fun FuN");


console.log(outPut)