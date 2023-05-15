import HCF from "./HCF";

function LCM(num:number, num1:number,num2?:number | any):number | Error | undefined {
    if(!num || !num1) return new Error("Invalid Inputs")
    let rem: number = num / HCF(num, num1, num2);
    let rem1: number = num1 / HCF(num, num1, num2);
    let rem2: number = num2 / HCF(num, num1, num2);

    if (!num2) {
        return HCF(num, num1,num2) * rem * rem1;
    }
    return  HCF(num, num1, num2) * ((rem * rem1 * rem2)/(HCF(rem,rem1) * HCF(rem1,rem2) * HCF(rem,rem2)))
}
export default LCM