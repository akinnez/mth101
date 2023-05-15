
 function abs(val:number | Array<number>):number | Array<number> | Error {
    if (!val) return new Error('Invalid input: arg not found')
    return typeof(val) == 'number' ? (val < 0 ? val *= -1 : val) :
    (val.map((e:number,i:number) => e < 0 ? val[i]= e *= -1 : val[i]= e))
 }

 export default abs