const PI = Math.PI;

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

export function deg2Rad(val:number):number | Error | any {
    if(!val) return new Error("Not Found")
    if(isNaN(val)) return new Error("Not a Number")
    return val * (PI/180)
}
export function rad2Deg(val:number):number| Error | any {
    if(!val) return new Error("Not Found")
    if(isNaN(val)) return new Error("Not a Number")
    return val * (180/PI)
}

export function sinInDeg(val:number):number| Error | any{
    return Math.sin(deg2Rad(val))
}

export function cosInDeg(val:number):number| Error | any {
    return Math.cos(deg2Rad(val))
}
export function tanInDeg(val:number):number| Error | any {
    return sinInDeg(val) / cosInDeg(val)
}
export function cotInDeg(val:number):number | Error | any{
    return cosInDeg(val) / sinInDeg(val)
}
export function secInDeg(val:number):number | Error | any{
    return 1 / cosInDeg(val)
}
export function cosecInDeg(val:number):number | Error | any{
    return 1 / sinInDeg(val)
}
export function arcsin(val:number):number | Error | any{
    return rad2Deg(Math.asin(val))   
}
export function arccos(val:number):number | Error | any{
    return rad2Deg(Math.acos(val))
}
export function arctan(val:number):number | Error | any{
    return rad2Deg(Math.atan(val))
}
