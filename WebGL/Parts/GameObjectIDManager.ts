import ID from "./ID";

const map_IDs:Map<string,ID>=new Map();

export default class GameObjectIDManager{
    static GetID(arg_IDName:string){
        if(!map_IDs[arg_IDName]){
            map_IDs[arg_IDName]=new ID(map_IDs.keys.length);
        }
        return map_IDs[arg_IDName];
    }

}