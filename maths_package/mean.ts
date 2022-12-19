function getMean(arr:Array<number>):number | Error | any{
    if(!arr) return new Error("Invalid Input")
    if(arr.length == 0) return new Error("Invalid Input")

      let sum = 0
      for (let index = 0; index < arr.length; index++) {
        if(isNaN(arr[index])) throw new Error("Not a Number");
          sum += arr[index];
      }
       return  sum / arr.length
  }

  export default getMean