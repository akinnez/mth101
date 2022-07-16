
function factorial(num:number):number{
    let n:number = 1
    for (let index = 1; index <= num; index++) {
        n *= index 
    }
    return n
}
export default factorial