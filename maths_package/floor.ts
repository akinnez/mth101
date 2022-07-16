function floor(val:number):number{  
    if (val.toString().indexOf('.') == -1) return val;       
    return parseInt((val.toString()).slice(0,(val.toString()).indexOf('.'))); 
}

export default floor