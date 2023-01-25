import getMean from "./mean";
function variance(arr:Array<number>):number | Error | any {
    if(!arr) return new Error("Invalid Input")
    if(arr.length == 0) return new Error("Invalid Input")

    let deviation = 0; let d = 0; 
    for (let index = 0; index < arr.length; index++) {
        if(isNaN(arr[index])) throw new Error("Not a Number");
        d = (arr[index] - getMean(arr))**2
        deviation += d
    }
    return deviation / arr.length;
}

export default variance