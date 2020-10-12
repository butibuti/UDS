import Vector2 from "../Math/Vector2";


export default class Input{
    static canvas:HTMLCanvasElement;
    private static clickEvents=new Map<String,any>();
    private static mouseDownEvents=new Map<String,any>();
    private static mouseUpEvents=new Map<String,any>();
    private static keyUpEvents=new Map<String,any>();
    private static keyDownEvents=new Map<String,any>();
    private static mouseMoveEvents=new Map<String,any>();
    private static mouseWheelEvents=new Map<String,any>();
    static GetCanvasPosition(e:MouseEvent):Vector2{
        return new Vector2( e.clientX - this.canvas.offsetLeft - this.canvas.width * 0.5,e.clientY - this.canvas.offsetTop - this.canvas.height * 0.5)
    }
    
    static AddClickEvent(arg_obj,arg_eventName:string,isUseEvent?:boolean){
        var event=this.clickEvents[arg_eventName];
        if(!event){
            event={obj:arg_obj ,handleEvent: OnClick};
            this.clickEvents[arg_eventName]=event;
        }
        if(isUseEvent)
        this.canvas.addEventListener("click", event,isUseEvent);
        else{
            this.canvas.addEventListener("click",event,false);
        }
    }
    static AddMouseDownEvent(arg_obj,arg_eventName:string,isUseEvent?:boolean){
        var event=this.mouseDownEvents[arg_eventName];
        if(!event){
            event={obj:arg_obj ,handleEvent: OnMouseDown};
            this.mouseDownEvents[arg_eventName]=event;
        }
        
        if(isUseEvent)
        this.canvas.addEventListener("mousedown", event,isUseEvent);
        else{
            this.canvas.addEventListener("mousedown",event,false);
        }
    }
    static AddMouseUpEvent(arg_obj,arg_eventName:string,isUseEvent?:boolean){
        var event=this.mouseUpEvents[arg_eventName];
        if(!event){
            event={obj:arg_obj ,handleEvent: OnMouseUp};;
            this.mouseUpEvents[arg_eventName]=event;
        }
        
        if(isUseEvent)
        this.canvas.addEventListener("mouseup", event,isUseEvent);
        else{
            this.canvas.addEventListener("mouseup",event,false);
        }
    }
    static AddKeyUpEvent(arg_obj,arg_eventName:string,isUseEvent?:boolean){
        var event=this.keyUpEvents[arg_eventName];
        if(event){
            return;
        }
        console.log("AddKey");
        event={obj:arg_obj ,handleEvent: OnKeyUp};
        this.keyUpEvents[arg_eventName]=event;
        if(isUseEvent)
        document.addEventListener("keyup", event,isUseEvent);
        else{
            document.addEventListener("keyup",event,false);
        }
    }
    static AddKeyDownEvent(arg_obj,arg_eventName:string,isUseEvent?:boolean){
        var event=this.keyDownEvents[arg_eventName];
        if(event){
            return;
        } 
        event= {obj:arg_obj ,handleEvent: OnKeyDown};
        this.keyDownEvents[arg_eventName]=event;
        if(isUseEvent)
        document.addEventListener("keydown", event,isUseEvent);
        else{
            document.addEventListener("keydown",event,false);
        }
    }
    static AddMouseMoveEvent(arg_obj,arg_eventName:string,isUseEvent?:boolean){
        var event=this.mouseMoveEvents[arg_eventName];

        if(!event){
            event= {obj:arg_obj ,handleEvent: OnMouseMove};
            this.mouseMoveEvents[arg_eventName]=event;
        }
        if(isUseEvent)
        this.canvas.addEventListener("mousemove", event,isUseEvent);
        else{
            this.canvas.addEventListener("mousemove",event,false);
        }
    }
    static AddMouseWheelEvent(arg_obj,arg_eventName:string,isUseEvent?:boolean){
        var event=this.mouseWheelEvents[arg_eventName];
        if(!event){
            event= {obj:arg_obj ,handleEvent: OnMouseWheel};
            this.mouseWheelEvents[arg_eventName]=event;
        }
         
        if(isUseEvent)
        this.canvas.addEventListener("mousewheel", event,isUseEvent);
        else{
            this.canvas.addEventListener("mousewheel",event,false);
        }
    }
    
    static RemoveKeyDownEvent(arg_eventName:string){
        var event=this.keyDownEvents[arg_eventName];
        if(event){
            console.log(arg_eventName);
            document.removeEventListener("keydown", event,true);
            this.keyDownEvents[arg_eventName]=null;
        }
    }
    
    static RemoveKeyUpEvent(arg_eventName){
        var event=this.keyUpEvents[arg_eventName];
        if(event){
            document.removeEventListener("keyup", event,true);
            this.keyUpEvents[arg_eventName]=null;
        }
    }
    
    static RemoveClickEvent(arg_eventName){
        var event=this.clickEvents[arg_eventName];
        if(event){
            document.removeEventListener("click", event,true);
            this.clickEvents[arg_eventName]=null;
        }
    }
    
    static RemoveMouseUpEvent(arg_eventName){
        var event=this.mouseUpEvents[arg_eventName];
        if(event){
            document.removeEventListener("mouseup", event,true);
            this.mouseUpEvents[arg_eventName]=null;
        }
    }
    
    static RemoveMouseDownEvent(arg_eventName){
        var event=this.mouseDownEvents[arg_eventName];
        if(event){
            document.removeEventListener("mosedown", event,true);
            this.mouseDownEvents[arg_eventName]=null;
        }
    }
    
    static RemoveMouseMoveEvent(arg_eventName){
        var event=this.mouseMoveEvents[arg_eventName];
        if(event){
            document.removeEventListener("mousemove", event,true);
            this.mouseMoveEvents[arg_eventName]=null;
        }
    }
    
    static RemoveWheelEvent(arg_eventName){
        var event=this.mouseWheelEvents[arg_eventName];
        if(event){
            document.removeEventListener("mousewheel", event,true);
            this.mouseWheelEvents[arg_eventName]=null;
        }
    }
}


function OnClick(e:MouseEvent){
    this.obj.OnClick(e);
}
function OnKeyDown(e:KeyboardEvent){
    this.obj.OnKeyDown(e);
}
function OnKeyUp(e:KeyboardEvent){
    this.obj.OnKeyUp(e);
}
function OnMouseUp(e:MouseEvent){
    this.obj.OnMouseUp(e);
}
function OnMouseDown(e:MouseEvent){
    this.obj.OnMouseUp(e);
}
function OnMouseMove(e:MouseEvent){
    this.obj.OnMouseMove(e);
}
function OnMouseWheel(e:MouseEvent){
    this.obj.OnMouseWheel(e);
}