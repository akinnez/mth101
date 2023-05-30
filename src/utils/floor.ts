function floor(val:number):number| Error{
    if(!val) return new Error('Cannot perform this operation')
    if(isNaN(val)) return new Error("Not a Number");
    return val % 1 > 0 ? val - val % 1 : val ;
}

export default floor