import sort from "./sort"

function getMedian(arr:Array<number>):number | Error | any{
    if(!arr) return new Error("Invalid Input")
    if(arr.length == 0) return new Error("Invalid Input")
    
        sort(arr)  

       if(arr.length % 2 === 0 )
        return((arr[(arr.length / 2) - 1] +  arr[(arr.length / 2)]) / 2);

        return arr[(arr.length - 1) / 2]
    }

export default getMedian