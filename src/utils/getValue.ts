export function val1(val1:number):Array<number>| Error | any {
    if(!val1) return new Error("Not Found")
    if(isNaN(val1)) return new Error("Not a Number")
    let arr:Array<number> = [1];
    for (let i = 2 ; i <= val1; i++) {
        if(val1 % i === 0){
            arr.push(i)
        }
    }
    return arr
}
