
function factorial(num:number):number| Error |any{
    if(!num) return new Error("Not Found")
    if(isNaN(num)) return new Error("Not a Number")
    let n:number = 1
    for (let index = 1; index <= num; index++) {
        n *= index 
    }
    return n
}
export default factorial