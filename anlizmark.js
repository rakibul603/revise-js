function analyzeMark(marksOb) {
    // console.log(marksOb)

    let total = 0;

    let heightMark = -Infinity;
    let lowestMark = Infinity;

    let heightSubject = null;
    let lowestSubject = null;


    for (let subject in marksOb) {

        let mark = marksOb[subject];
        // console.log(value)
        total += mark;

        if (mark > heightMark) {
            heightMark = mark;
            heightSubject = subject;
        }

        if (mark < lowestMark) {
            lowestMark = mark;
            lowestSubject = subject;
        }

    }


    let average = total / Object.keys(marksOb).length;


    return {
        total,
        average,
        lowestSubject,
        heightSubject,
    }


}


let output = analyzeMark({ math: 78, english: 65, physics: 88, bangla: 99 })

console.log(output)