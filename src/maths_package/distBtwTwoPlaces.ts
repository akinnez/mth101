import angularDiff from "../utils/differences";
import { cosInDegree, sinInDegree } from "../utils/conversion";

 function distBtwTwoPlaces(pos1: Array<number>,pos2:Array<number>):number | Error | any  {
    let PI:number = 3.141592653589793;

    if (!pos1 || !pos2) return new Error('Not Found')
    if ((pos1.length > 2 || pos1.length < 2) && (pos2.length > 2 || pos2.length < 2)) {
    return new Error('Invalid Input')
    }
    if (pos1[0] == pos2[0]){
        return (
            (angularDiff(pos1,pos2)/ 360) * 2 * PI * 6371 * cosInDegree(pos1[0])
        )
    }
    if (pos1[1] == pos2[1]){
        return( (angularDiff(pos1,pos2) * 2 * PI * 6371 ) / 360 )
        }

    return 2 * 6371 * (Math.asin(Math.sqrt(
        (sinInDegree((angularDiff(pos1,pos2)[0] / 2))) ** 2 + 
        cosInDegree(pos1[0]) *
        cosInDegree(pos2[0]) *
        (sinInDegree((angularDiff(pos1,pos2)[1] / 2)))**2 )
    ))

    }

export default distBtwTwoPlaces