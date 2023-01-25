
function add(params:Array<number>):number | Error{
    let sum = 0 ;
        for (let index = 0; index < params.length; index++) {
            const element = params[index];
            if(isNaN(element)) return new Error("Not a Number");
            sum += element
        }
             return sum 
    }     

export default add