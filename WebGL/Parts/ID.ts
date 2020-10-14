export default class ID{
    num:number;
    constructor(arg_num:number){
        this.num=arg_num;
    }
    Equal(other:ID):boolean{
        return this.num==other.num;
    }
}