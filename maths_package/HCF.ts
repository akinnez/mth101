import common_factor from "./commonFactor"

function HCF(num:number, num1:number,num2?:number):number| Error | any {
    // if(!num || !num1) return new Error("Invalid Inputs")
    // if(isNaN(num) || isNaN(num1)) throw new Error("Not a Number");
    let hcf!:number;
    for (let index = 0; index < common_factor(num, num1,num2).length; index++) {
        const element = common_factor(num, num1,num2)[index];
        if (element > hcf) {
            hcf = element
        }
    }    
    return hcf
}
export default HCF