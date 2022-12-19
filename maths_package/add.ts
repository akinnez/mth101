function add(...params:Array<number>):number{
    let sum:any ;
        for (let index = 0; index < params.length; index++) {
            const element = params[index];
            if(isNaN(element)) throw new Error("Not a Number")
            sum += element
        }
             return sum 
    }     

export default add