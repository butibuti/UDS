import ID from "./ID";

const map_IDs:Map<string,ID>=new Map();

export default class GameObjectIDManager{
    static GetID(arg_IDName:string){
        if(!map_IDs.get(arg_IDName)){
            map_IDs.set(arg_IDName, new ID(map_IDs.size));
        }
        return map_IDs.get(arg_IDName);
    }

}