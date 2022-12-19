function sort(arr:Array<number>): Array<number> | Error | any{
    if(!arr) return new Error("Invalid Input")
    if(arr.length == 0) return new Error("Invalid Input")

   return arr.sort((a:number,b:number)=>{
       return a - b;
   })
}

export default sort