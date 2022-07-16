export function toDecimalPlaces(params:number,val:number):number | undefined {
   if(val < 0 || val > 20){
        return
    }
        return parseFloat(params.toFixed(val))        
    }

export function toSignificantFigures(params: number, val:number):number | undefined{
    if(val < 1 || val > 21){
        return
    }  
        return parseFloat(params.toPrecision(val))    
}

export function degToRad(val:number):number {
    return val * (3.141592653589793/180)
}
export function radToDeg(val:number):number {
    return val * (180/ 3.141592653589793)
}

export function sinInDegree(val:number):number{
    return Math.sin(degToRad(val))
}

export function cosInDegree(val:number):number {
    return Math.cos(degToRad(val))
}
export function tanInDegree(val:number):number {
    return sinInDegree(val) / cosInDegree(val)
}
export function cotInDegree(val:number):number {
    return cosInDegree(val) / sinInDegree(val)
}
export function secInDegree(val:number):number {
    return 1 / cosInDegree(val)
}
export function cosecInDegree(val:number):number {
    return 1 / sinInDegree(val)
}
export function arcsin(val:number):number {
    return radToDeg(Math.asin(val))
    
}
export function arccos(val:number):number {
    return radToDeg(Math.acos(val))
    
}
export function arctan(val:number):number {
    return arcsin(val)/ arccos(val)
    
}
