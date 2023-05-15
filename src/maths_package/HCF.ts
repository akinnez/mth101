import common_factor from "./commonFactor"

function HCF(num:number, num1:number,num2?:number):number{
    return Math.max(common_factor(num, num1,num2))
}
export default HCF