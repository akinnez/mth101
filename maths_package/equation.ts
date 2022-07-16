import { determinantThreeByThree, determinantTwoByTwo } from "./determinant";

export function simuTwoVariable(
    a11:number, a12:number, 
    a21:number, a22:number,
    c1:number, c2:number
):object
{
    return {
        x: determinantTwoByTwo(c1,a12,c2,a22) / determinantTwoByTwo(a11,a12,a21,a22),
        y: determinantTwoByTwo(a11,c1,a21,c2) / determinantTwoByTwo(a11,a12,a21,a22)
    }
}

export function simuThreeVariable(
    a11:number, a12:number, a13:number,
    a21:number, a22:number,a23:number,
    a31:number, a32:number,a33:number,
    c1:number, c2:number,c3:number
):object{
    return {
        x: determinantThreeByThree(c1, a12, a13, c2,a22,a23,c3,a32, a33)/determinantThreeByThree(a11, a12, a13, a21,a22,a23,a31,a32, a33),
        y: determinantThreeByThree(a11, c1, a13, a21,c2,a23,a31,c3, a33) /determinantThreeByThree(a11, a12, a13, a21,a22,a23,a31,a32, a33),
        z: determinantThreeByThree(a11, a12, c1, a21,a22,c2,a31,a32, c3) /determinantThreeByThree(a11, a12, a13, a21,a22,a23,a31,a32, a33)
    }
}