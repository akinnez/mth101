import { val1 } from "../utils/getValue";

function common_factor(num:number, num1:number,num2?:number):Array<number> | Error | any{
    if(!num || !num1) return new Error("Invalid Inputs")
    if(isNaN(num) || isNaN(num1)) throw new Error("Not a Number");

    let newarr:Array<number> =[1]
    let commonThree:Array<number> =[1]

    for (let i = 1 ; i <= val1(num).length; i++) {
        if (val1(num1).includes(val1(num)[i])) {
            newarr.push(val1(num)[i])
        }
    }
        
    if (!num2) {
        return newarr
    }
    if(isNaN(num2)) throw new Error("Not a Number");

    for (let l = 1; l <= val1(num2).length; l++) { 
        if (newarr.includes(val1(num2)[l])) {
          commonThree.push(val1(num2)[l])
        } 
     }
    return commonThree
 }
 
export default common_factor

 