import distBtwTwoPlaces from "./maths_package/distBtwTwoPlaces";
import combination from "./maths_package/combination";
import common_factor from "./maths_package/commonFactor";
import { determinantThreeByThree, determinantTwoByTwo } from "./maths_package/determinant";
import { simuThreeVariable, simuTwoVariable } from "./maths_package/equation";
import factorial from "./maths_package/factorial";
import floor from "./maths_package/floor";
import { val1 } from "./utils/getValue";
import HCF from "./maths_package/hcf";
import LCM from "./maths_package/LCM";
import getMean from "./maths_package/mean";
import getMedian from "./maths_package/median";
import getMode from "./maths_package/mode";
import permutation from "./maths_package/permutation";
import range from "./maths_package/range";
import sort from "./maths_package/sort";
import standardDeviation from "./maths_package/standardDeviation";
import variance from "./maths_package/variance";
import add from "./maths_package/add";
import abs from "./maths_package/abs";
import { toDecimalPlaces, degToRad, toSignificantFigures,sinInDegree, cosInDegree,tanInDegree,cosecInDegree, secInDegree,cotInDegree,radToDeg,arccos,arcsin,arctan } from "./utils/conversion";

 class MathsModule {

    constructor() {}
    abs(val: number | number[]):number | number[] | Error{
            return abs(val)
    }
    add(...val:number[]):number{
       return add(...val)
    }
    combination(val:number, val1:number):number | Error{
        return combination(val,val1)
    }
    common_factor(val1:number,val2:number,val3?:number){
        return common_factor(val1,val2,val3)
    }
    determinantThreeByThree(
        a11:number, a12:number, a13:number, 
        a21:number,a22:number,a23:number,
        a31:number,a32:number, a33:number
        ):number
        {
        return determinantThreeByThree(a11,a12,a13,a21,a22,a23,a31,a32,a33)
    }
    determinantTwoByTwo(
        a11:number, a12:number, 
        a21:number, a22:number
        ):number
        {
        return determinantTwoByTwo(a11,a12,a21,a22)
    }
    factorial(val:number):number{
       return factorial(val)
    }
    factors(val:number):number[]{
       return val1(val)
    }
    floor(val:number):number{
       return floor(val)
    }
    getMean(arr:number[]):number | undefined{
        return getMean(arr)
    }
    getMedian(arr:number[]):number{
        return getMedian(arr)
    }
    getMode(arr:number[]):number{
        return getMode(arr)
    }
    HCF(val1:number,val2:number,val3?:number):number{
        return HCF(val1,val2,val3)
    }
    LCM(val1:number,val2:number,val3?:number):number{
        return LCM(val1,val2,val3)
    }
    permutation(val:number,val1:number):number{
        return permutation(val,val1)
    }
    range(arr:number[]):number{
        return range(arr)
    }
    significantFigure(num:number,sf:number):number | undefined{
        return toSignificantFigures(num,sf)
    }
    decimalPlaces(num:number,dp:number):number | undefined{
        return toDecimalPlaces(num,dp)
    }
    sort(arr:number[]):number[]{
        return sort(arr)
    }
    standardDeviation(arr:number[]):number{
        return standardDeviation(arr)
    }
    variance(arr:number[]):number{
        return variance(arr)
    }
    simuTwoVar(
        a11:number, a12:number, 
        a21:number, a22:number,
        c1:number, c2:number
    ):object{
        return simuTwoVariable(a11, a12, a21, a22,c1, c2)
    }
    simuThreeVar(
        a11:number, a12:number, a13:number,
        a21:number, a22:number,a23:number,
        a31:number, a32:number,a33:number,
        c1:number, c2:number,c3:number
    ):object{
        return simuThreeVariable(a11, a12,a13, a21, a22, a23, a31, a32, a33, c1, c2, c3)
    }
    /**
     * Returns the approximated distance between two places on the earth map in kilometer(km).
     * @param arr An array containing latitude and longitude values e.g ["30N","40W"].
     * @param arr1 An array containing latitude and longitude values e.g ["40E", "30S"].
     */
   distBtwTwoPlaces(arr:string[],arr1:string[]):number {
    return parseInt(distBtwTwoPlaces(arr,arr1).toFixed(0))
   }
   degToRad(val:number):number{
    return degToRad(val)
   }
   radToDeg(val:number):number{
    return radToDeg(val)
   }
   sinInDegree(val:number):number{
    return sinInDegree(val)
   }
   arcsinInDeg(val:number):number{
    return arcsin(val)
   }
   cosInDegree(val:number):number{
    return cosInDegree(val)
   }
   arccosInDeg(val:number):number{
    return arccos(val)
   }
   tanInDegree(val:number):number{
    return tanInDegree(val)
   }
   arctanInDeg(val:number):number{
    return arctan(val)
   }
   cosecInDegree(val:number):number{
    return cosecInDegree(val)
   }
   secInDegree(val:number):number{
    return secInDegree(val)
   }
   cotInDegree(val:number):number{
    return cotInDegree(val)
   }
    
}

export default MathsModule;



