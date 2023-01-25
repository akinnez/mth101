import abs from "../maths_package/abs"

function angularDiff(pos1: number[],pos2:number[]):any {
    if (pos1[0] == pos2[0]){
             return abs(pos1[1] - pos2[1])
       } 
    if (pos1[1] == pos2[1]){
        return abs(pos1[0] - pos2[0])
    } 
    return abs([(pos1[0] - pos2[0]),(pos1[1] - pos2[1])])
}

export default angularDiff