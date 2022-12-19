export function val1(val1:number):number[] | Error | any {
    if(!val1) return new Error("Not Found")
    if(isNaN(val1)) return new Error("Not a Number")
    let arr:number[] = [];
    for (let i = 0; i <= val1; i++) {
        if(val1 % i === 0){
            arr.push(i)
        }
    }
    return arr
}

export function val2(val2:number):number[] | Error | any {
    if(!val2) return new Error("Not Found")
    if(isNaN(val2)) return new Error("Not a Number")
    let arr2:number[] = [];
    for (let j = 0; j <= val2; j++) {
        if(val2 % j === 0){
            arr2.push(j);
        }
    }
    return arr2
}
export function val3(val3:number):number[] | Error | any {
    if(!val3) return new Error("Not Found")
    if(isNaN(val3)) return new Error("Not a Number")
    let arr3:number[] = [];

    for (let k = 0; k <= val3; k++) {
        if(val3 % k === 0){
            arr3.push(k);
        }
    }
    return arr3
}
