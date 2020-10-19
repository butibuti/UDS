export default class RandomHelper{
    static GetRandomInt(min:number, max:number) {
        return Math.floor(Math.random() * Math.floor(max-min+1))+min;
    }
    static GetRandomFloat(min:number, max:number){
    
        return (Math.random() * Math.floor(max-min+1))+min;
    }
}