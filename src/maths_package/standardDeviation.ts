import variance from "./variance"

 function standardDeviation(arr:Array<number>):number | Error | any  {
    if(!arr) return new Error("Invalid Input")
    if(arr.length == 0) return new Error("Invalid Input")

        return Math.sqrt(variance(arr))
    }

export default standardDeviation