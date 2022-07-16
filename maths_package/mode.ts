function getMode(arr:number[]):number{

const mode:number[] = [];
 let max = 0; let count = 0;

    for (let index = 0; index < arr.length; index++) {
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