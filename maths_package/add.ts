function add(...params:number[]):number{
    let sum:any = 0 ;
        for (let index = 0; index < params.length; index++) {
            const element = params[index];
            sum += element
        }
             return sum 
    }     

export default add