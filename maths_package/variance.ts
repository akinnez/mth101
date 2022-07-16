import getMean from "./mean";
function variance(arr:number[]):number {
    let deviation = 0; let d = 0; 
    for (let index = 0; index < arr.length; index++) {
        d = (arr[index] - getMean(arr))**2
        deviation += d
    }
    return deviation / arr.length;
}

export default variance