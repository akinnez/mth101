import distBtwTwoPlace from "./maths_package/distBtwTwoPlaces";
import comb from "./maths_package/combination";
import commonfactor from "./maths_package/commonFactor";
import { determinantThreeOnThree, determinantTwoOnTwo } from "./maths_package/determinant";
import { simuThreeVariable, simuTwoVariable } from "./maths_package/equation";
import factoria from "./maths_package/factorial";
import flour from "./maths_package/floor";
import { val1 } from "./utils/getValue";
import HCFs from "./maths_package/HCF";
import LCMs from "./maths_package/LCM";
import getMin from "./maths_package/mean";
import getMediian from "./maths_package/median";
import getMod from "./maths_package/mode";
import permutations from "./maths_package/permutation";
import ranges from "./maths_package/range";
import sorts from "./maths_package/sort";
import standardDeviations from "./maths_package/standardDeviation";
import varyance from "./maths_package/variance";
import addd from "./maths_package/add";
import abss from "./maths_package/abs";
import { toDecimalPlaces, deg2Rad, toSignificantFigures,sinInDeg, cosInDeg,tanInDeg,cosecInDeg, secInDeg,cotInDeg,rad2Deg,arccos,arcsin,arctan } from "./utils/conversion";


/** Returns the absolute value of a number or an array of numbers
*/    
 export function abs(val: number | number[]):number | number[] | Error{
      return abss(val)
}
/**
* Returns the addition of number(s)
*/
export function add(...val:Array<number>):number| Error{
 return addd(val)
}
export function combination(val:number, val1:number):number | Error{
  return comb(val,val1)
}
export function common_factor(val1:number,val2:number,val3?:number):number | Error{
  return commonfactor(val1,val2,val3)
}
export function determinantThreeByThree(
  a11:number, a12:number, a13:number, 
  a21:number,a22:number,a23:number,
  a31:number,a32:number, a33:number
  ):number | Error 
  {
  return determinantThreeOnThree(a11,a12,a13,a21,a22,a23,a31,a32,a33)
}
export function determinantTwoByTwo(
  a11:number, a12:number, 
  a21:number, a22:number
  ):number | Error 
  {
  return determinantTwoOnTwo(a11,a12,a21,a22)
}
export function factorial(val:number):number{
 return factoria(val)
}
export function factors(val:number):Array<number>{
 return val1(val)
}
export function floor(val:number):number | Error | any{
 return flour(val)
}
export function getMean(...arr:Array<number>):number | undefined{
  return getMin(arr)
}
export function getMedian(...arr:Array<number>):number{
  return getMediian(arr)
}
export function getMode(...arr:Array<number>):number{
  return getMod(arr)
}
export function HCF(val1:number,val2:number,val3?:number):number | Error{
  return HCFs(val1,val2,val3)
}
export function LCM(val1:number,val2:number,val3?:number):number | Error{
  return LCMs(val1,val2,val3)
}
export function permutation(val:number,val1:number):number{
  return permutations(val,val1)
}
export function range(arr:Array<number>):number{
  return ranges(arr)
}
export function significantFigure(num:number,sf:number):number | Error | undefined{
  return toSignificantFigures(num,sf)
}
export function decimalPlaces(num:number,dp:number):number | Error | any {
  return toDecimalPlaces(num,dp)
}
/**
* Returns the sorted numbers from an array of numbers
*/
export function sort(arr:Array<number>):Array<number>{
  return sorts(arr)
}
/**
* Returns the standard variation of an array of numbers
*/
export function standardDeviation(arr:Array<number>):number{
  return standardDeviations(arr)
}
/**
* Returns the variance of an array of numbers
*/
export function variance(arr:Array<number>):number{
  return varyance(arr)
}
/**
* Returns the result of a 2-variable simultaneous equation
*/ 
export function simuTwoVar(
  a11:number, a12:number, 
  a21:number, a22:number,
  c1:number, c2:number
):object{
  return simuTwoVariable(a11, a12, a21, a22,c1, c2)
}
/**
* Returns the result of a 3-variable simultaneous equation
*/
export function simuThreeVar(
  a11:number, a12:number, a13:number,
  a21:number, a22:number,a23:number,
  a31:number, a32:number,a33:number,
  c1:number, c2:number,c3:number
):object{
  return simuThreeVariable(a11, a12,a13, a21, a22, a23, a31, a32, a33, c1, c2, c3)
}
/**
* Returns the approximated distance between two places on the earth map in kilometer(km).
* @param lat1 The first latitude.
* @param long1 The first longitude.
* @param lat2 The second latitude.
* @param long2 The second longitude.
*/
export function distBtwTwoPlaces(lat1: number,long1:number,lat2: number,long2:number):number | Error | any {
return parseInt(distBtwTwoPlace(lat1,long1,lat2,long2))
}
/**
* Convert degree value to Radian value
* @param val A degree value.
*/
export function degToRad(val:number):number{
return deg2Rad(val)
}
/**
* Convert Radian value to degree value
* @param val A Radian value.
*/
export function radToDeg(val:number):number{
return rad2Deg(val)
}
/**
* Convert a value in number to its Sine value
* @param val A Number value.
*/
export function sinInDegree(val:number):number{
return sinInDeg(val)
}
/**
* Convert a value in number which ranges from 0 - 1 to its Acute Sine value
* @param val A Number value.
*/
export function arcsinInDeg(val:number):number{
return arcsin(val)
}
/**
* Convert a value in number to its Cosine value
* @param val A Number value.
*/
export function cosInDegree(val:number):number{
return cosInDeg(val)
}
/**
* Convert a value in number which ranges from 0 - 1 to its Acute Cosine value
* @param val A Number value.
*/
export function arccosInDeg(val:number):number{
return arccos(val)
}
/**
* Convert a value in number to its Tangent value
* @param val A Number value.
*/
export function tanInDegree(val:number):number{
return tanInDeg(val)
}
/**
* Convert a value in number to its Acute tangent value
* @param val A Number value.
*/
export function arctanInDeg(val:number):number{
return arctan(val)
}

/**
* Convert a value in number to its Cosec value
* @param val A Number value.
*/
export function cosecInDegree(val:number):number{
return cosecInDeg(val)
}
/**
* Convert a value in number to its Sec value
* @param val A Number value.
*/
export function secInDegree(val:number):number{
return secInDeg(val)
}
/**
* Convert a value in number to its Cotangent value
* @param val A Number value.
*/
export function cotInDegree(val:number):number{
return cotInDeg(val)
}