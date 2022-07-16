
 function abs(val:number | number[]):number | number[] | Error {
    let absArr:number[] = []
    
    if (!val) {
        return new Error('Invalid input')
    }
        if (typeof(val) == 'number') {
            if(val < 0){
                return val *= -1 ;
            }
            return val
        }

        for (let index = 0; index < val.length; index++) {
            let element = val[index];
            if(element < 0){
                absArr.push(element *= -1)
            }else{
                absArr.push(element)
            }
           
        }
        return absArr
 }

 export default abs