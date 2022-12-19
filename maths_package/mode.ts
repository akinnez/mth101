function getMode(arr:Array<number>):number | Error | any{
    if(!arr) return new Error("Invalid Input")
    if(arr.length == 0) return new Error("Invalid Input")

const mode:Array<number> = [];
 let max = 0; let count = 0;

    for (let index = 0; index < arr.length; index++) {
        if(isNaN(arr[index])) throw new Error("Not a Number");
        let element = arr[index];   
        if (!mode[element]) {
             mode[element] = 1;
        }
        mode[element]++ ;
        if(count < mode[element]){
            max = element;
            count = mode[element]
        }
    }
         return max
}

export default getMode