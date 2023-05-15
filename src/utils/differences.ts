
function angularDiff(lat1:number, long1:number, lat2:number, long2:number):Array<number> {
    return [(lat2 - lat1),(long2 - long1)]
}

export default angularDiff