import common_factor from "./commonFactor"

function HCF(num:number, num1:number,num2?:number):number {
    let hcf:number = 0;

    for (let index = 0; index < common_factor(num, num1,num2).length; index++) {
        const element = common_factor(num, num1,num2)[index];
        if (element > hcf) {
            hcf = element
        }
    }    
    return hcf
}
export default HCF