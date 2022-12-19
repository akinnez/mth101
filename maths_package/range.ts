import sort from "./sort"

function range(arr:Array<number>):number | Error | any {
    if(!arr) return new Error("Invalid Input")
    if(arr.length == 0) return new Error("Invalid Input")

    return sort(arr)[arr.length - 1] - sort(arr)[0]
}

export default range