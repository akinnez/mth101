import angularDiff from "../utils/differences";
import { cosInDeg, sinInDeg } from "../utils/conversion";

 function distBtwTwoPlaces(lat1: number,long1:number,lat2: number,long2:number):number | Error | any  {
    if (!lat1 || !lat2 || !long1 || !long2) throw new Error("Not found");
    
    return 2 * 6371 * (Math.asin(Math.sqrt(
        (sinInDeg((angularDiff(lat1,long1,lat2, long2)[0] / 2))) ** 2 + 
        cosInDeg(lat1) *
        cosInDeg(lat2) *
        (sinInDeg((angularDiff(lat1,long1,lat2, long2)[1] / 2)))**2 )
    ))

    }

export default distBtwTwoPlaces