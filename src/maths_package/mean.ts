import add from "./add"

function getMean(arr:Array<number>):number | Error | any{
    if(!arr) return new Error("Invalid Input")
    if(arr.length == 0) return new Error("Invalid Input");
       let sum = add(arr)
    return sum /  arr.length
  }

  export default getMean