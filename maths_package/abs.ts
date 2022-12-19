
 function abs(val:number | Array<number>):number | Array<number> | Error {
    let absArr:Array<number> = []

    if (!val) return new Error('Invalid input: arg not found')

        if (typeof(val) == 'number') {
            if(val < 0){
                return val *= -1 ;
            }
            return val
        }

        for (let index = 0; index < val.length; index++) {
            let element = val[index];
            if(isNaN(element)) throw new Error("Not a Number");            
            if(element < 0){
                absArr.push(element *= -1)
            }else{
                absArr.push(element)
            }
           
        }
        return absArr
 }

 export default abs