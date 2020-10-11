

import Component from "./Component";

export default class SucideComponent extends Component{
    waitFrame:number;

    constructor (arg_waitFrame:number){
        super();
        this.waitFrame=arg_waitFrame;
    }
    Update(){
        this.waitFrame--;

        if(this.waitFrame>0){
            return;
        }
        this.gameObject.Dead();
    }
}