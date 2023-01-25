export function toDecimalPlaces(params:number,val:number):number |Error| undefined {
   if((!val && !params) || val < 0 || val > 20) return new Error("Cannot perform this operation")
   if(isNaN(val) && isNaN(params)) return new Error("Not a Number")
        return parseFloat(params.toFixed(val))        
    }

export function toSignificantFigures(params: number, val:number):number |Error| undefined{
    if((!val && !params) || val < 1 || val > 21)return new Error("Cannot perform this operation") 
    if(isNaN(val) && isNaN(params)) return new Error("Not a Number")
        return parseFloat(params.toPrecision(val))    
}

export function degToRad(val:number):number | Error | any {
    if(!val) return new Error("Not Found")
    if(isNaN(val)) return new Error("Not a Number")
    return val * (3.141592653589793/180)
}
export function radToDeg(val:number):number| Error | any {
    if(!val) return new Error("Not Found")
    if(isNaN(val)) return new Error("Not a Number")
    return val * (180/ 3.141592653589793)
}

export function sinInDegree(val:number):number| Error | any{
    return Math.sin(degToRad(val))
}

export function cosInDegree(val:number):number| Error | any {
    return Math.cos(degToRad(val))
}
export function tanInDegree(val:number):number| Error | any {
    return sinInDegree(val) / cosInDegree(val)
}
export function cotInDegree(val:number):number | Error | any{
    return cosInDegree(val) / sinInDegree(val)
}
export function secInDegree(val:number):number | Error | any{
    return 1 / cosInDegree(val)
}
export function cosecInDegree(val:number):number | Error | any{
    return 1 / sinInDegree(val)
}
export function arcsin(val:number):number | Error | any{
    return radToDeg(Math.asin(val))   
}
export function arccos(val:number):number | Error | any{
    return radToDeg(Math.acos(val))
}
export function arctan(val:number):number | Error | any{
    return radToDeg(Math.atan(val))
}
