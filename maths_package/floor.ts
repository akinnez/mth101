function floor(val:number):number| Error{
    if(!val) return new Error('Cannot perform this operation')
    if(isNaN(val)) return new Error("Not a Number")  
    if (val.toString().indexOf('.') == -1) return val;       
    return parseInt((val.toString()).slice(0,(val.toString()).indexOf('.'))); 
}

export default floor