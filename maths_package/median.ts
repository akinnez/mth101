import sort from "./sort"

function getMedian(arr:number[]):number{
        sort(arr)  

       if(arr.length % 2 === 0 )
        return((arr[(arr.length / 2) - 1] +  arr[(arr.length / 2)]) / 2);

        return arr[(arr.length - 1) / 2]
    }

export default getMedian