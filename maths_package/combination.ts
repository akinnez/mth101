import factorial from "./factorial"

function combination(num:number, num1:number):number | Error {     
    if (num == null || num1 == null  ) {
        return new Error('Invalid Input')
    }

    if (num < num1) {
        return new Error('First number must be greater than or equal to the second number')
    }
    return factorial(num) / (factorial(num-num1)* factorial(num1)) 
}

export default combination