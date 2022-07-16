function sort(arr:number[]): number[] {
   return arr.sort((a:any,b:any)=>{
       return a - b;
   })
}

export default sort