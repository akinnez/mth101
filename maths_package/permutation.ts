import factorial from "./factorial";

function permutation(num:number, num1:number):number{
    if (num < num1) {
        throw new Error('First number must be greater than or equal to the second number')
    }

    return factorial(num) / factorial(num - num1)
}

export default permutation