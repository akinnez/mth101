import { val1, val2, val3 } from "../utils/getValue";

function common_factor(num:number, num1:number,num2?:number):number[] {
    let newarr:number[] = []
    let commonThree:number[] = []
    for (let i = 0; i < val1(num).length; i++) {
        for (let j = 0; j < val2(num1).length; j++) {
            if (val1(num)[i] == val2(num1)[j]) {
                newarr.push(val1(num)[i])
            }
        }
    }

    if (!num2) {
        return newarr
    }

        for (let k = 0; k < newarr.length; k++) {
            for (let l = 0; l < val3(num2).length; l++) {  
                if (newarr[k] == val3(num2)[l]) {
                  commonThree.push(val3(num2)[l])
                }
        }  
     }
    
    return commonThree
 }
 
export default common_factor

 