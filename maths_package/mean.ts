function getMean(arr:number[]):number{

      let sum = 0
      for (let index = 0; index < arr.length; index++) {
          sum += arr[index];
      }
       return  sum / arr.length
  }

  export default getMean