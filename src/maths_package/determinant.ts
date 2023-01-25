
export function determinantTwoByTwo(val:number,val1:number,val2:number,val3:number):number|Error | any{
    if(!val || !val1 || !val2 || !val3) return new Error("Invalid Input")
    return (val * val3) - (val1 * val2)
}
export function determinantThreeByThree(
    a11:number, a12:number, a13:number, 
    a21:number,a22:number,a23:number,
    a31:number,a32:number, a33:number
    ):number | Error | any
    {     
        if(!a11 || !a12 || !a13 || !a21 || !a22 || !a23 || !a31 ||!a32 || !a33) 
        return new Error("Invalid Input")
    return  a11 * ((a22 * a33)-(a23 * a32)) -
            a12 * ((a21 * a33)-(a23 * a31)) +
            a13 * ((a21 * a32)-(a22 * a31))
}
