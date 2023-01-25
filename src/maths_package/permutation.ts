import factorial from "./factorial";

function permutation(num:number, num1:number):number | Error | any{
    if (!num || !num1 ) return new Error('Invalid Input')
    if(isNaN(num) || isNaN(num1)) throw new Error("Not a Number");
    if (num < num1)
    throw new Error('First number must be greater than or equal to the second number')
    return factorial(num) / factorial(num - num1)
}

export default permutation