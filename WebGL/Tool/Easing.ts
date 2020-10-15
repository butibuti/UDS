export default class Easing{
    static EaseInSine(x: number): number {
        return 1 - Math.cos((x * Math.PI) / 2);
      }

    static EaseOutSine(x: number): number {
       return Math.sin((x * Math.PI) / 2);
    }
    static EaseInOutSine(x: number): number {
       return -(Math.cos(Math.PI * x) - 1) / 2;
    }
    static EaseInQuad(x: number): number {
        return x * x;
    }
    static EaseOutQuad(x: number): number {
        return 1 - (1 - x) * (1 - x);
    }
    static EaseInOutQuad(x: number): number {
        return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
    }
    static EaseInCubic(x: number): number {
        return x * x * x;
    }
    static EaseOutCubic(x: number): number {
        return 1 - Math.pow(1 - x, 3);
    }
    static EaseInOutCubic(x: number): number {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }
    static EaseInQuart(x: number): number {
        return x * x * x * x;
    }
    static EaseOutQuart(x: number): number {
        return 1 - Math.pow(1 - x, 4);
    
    }
    static EaseInOutQuart(x: number): number {
        return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
    }
    static EaseInCirc(x: number): number {
        return 1 - Math.sqrt(1 - Math.pow(x, 2));
    }
    static EaseOutCirc(x: number): number {
        return Math.sqrt(1 - Math.pow(x - 1, 2));
    }
    static EaseInOutCirc(x: number): number {
        return x < 0.5
          ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
          : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
    }
    static EaseInBack(x: number): number {
        const c1 = 1.70158;
        const c3 = c1 + 1;
        
        return c3 * x * x * x - c1 * x * x;
    }
    static EaseOutBack(x: number): number {
        const c1 = 1.70158;
        const c3 = c1 + 1;
        
        return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
    }
    static EaseInOutBack(x: number): number {
        const c1 = 1.70158;
        const c2 = c1 * 1.525;
        
        return x < 0.5
          ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
          : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    }

    static EaseInElastic(x: number): number {
        const c4 = (2 * Math.PI) / 3;
        
        return x === 0
          ? 0
          : x === 1
          ? 1
          : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
    }
    static EaseOutElastic(x: number): number {
        const c4 = (2 * Math.PI) / 3;
        
        return x === 0
          ? 0
          : x === 1
          ? 1
          : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
    }
    static EaseInOutElastic(x: number): number {
        const c5 = (2 * Math.PI) / 4.5;
        
        return x === 0
          ? 0
          : x === 1
          ? 1
          : x < 0.5
          ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
          : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
    }
    static EaseInQuint(x: number): number {
        return x * x * x * x * x;
    }
    static EaseOutQuint(x: number): number {
        return 1 - Math.pow(1 - x, 5);
    }
    static EaseInOutQuint(x: number): number {
        return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
    }
    static EaseInExpo(x: number): number {
        return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
    }
    static EaseOutExpo(x: number): number {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    }
    static EaseInOutExpo(x: number): number {
        return x === 0
          ? 0
          : x === 1
          ? 1
          : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
          : (2 - Math.pow(2, -20 * x + 10)) / 2;
    }
    static Parabola(x:number):number{
        return -(x-0.5)*(x-0.5)*4+1;
    }
}