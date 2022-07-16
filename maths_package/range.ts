import sort from "./sort"

function range(arr:number[]):number {
    return sort(arr)[arr.length - 1] - sort(arr)[0]
}

export default range