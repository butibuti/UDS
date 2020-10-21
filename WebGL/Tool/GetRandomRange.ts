import RandomHelper from "./RandomHelper";

const ary_positions_reset=[0,1,2,3,4,5,6,-6,-5,-4,-3,-2,-1,];

var ary_positions=ary_positions_reset.slice();
var index=0;
export default  class RandomRange{
    static Reset(){
        
        ary_positions=ary_positions_reset.slice();
        index++;
    }
    static GetRandom(){

        var position=RandomHelper.GetRandomInt(0,12-index);
        var output= ary_positions[position];
        ary_positions.splice(position,1);
        index++;

        return output;
    }
}