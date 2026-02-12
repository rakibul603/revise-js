function checkPassword (password) {

    let length = password.length;

    let reasons = [];

    let hasUpperCase = false;
    let hasNumber =false;   
    let hasSpace = password.includes(" ")
    for(let i = 0; i < length; i ++) {
        let character = password[i];
        

        if(character >= "0" && character <= "9") {
            hasNumber = true;
        }
        if(character >= "A" && character <= "Z") {
            hasUpperCase = true;
        }

    }
    

    if(!hasNumber) {
        reasons.push("missing Number")
    }

    if(!hasUpperCase) {
        reasons.push("missing uppercase word")
    }
    if (hasSpace){ 
        reasons.push('Space Found')
    }

    let isValid = reasons.length === 0;

    return { 
        valid : isValid,
        reasons,
    }

}



let output = checkPassword("helloWorld")
console.log(output)
let output2 = checkPassword("Hello124")

console.log(output2)
