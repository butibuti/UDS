import Vector2 from "../Math/Vector2";


export default class Input{
    static canvas:HTMLCanvasElement;
    
    static GetCanvasPosition(e:MouseEvent):Vector2{
        return new Vector2( e.clientX - this.canvas.offsetLeft - this.canvas.width * 0.5,e.clientY - this.canvas.offsetTop - this.canvas.height * 0.5)
    }
    
    static AddClickEvent(arg_obj,isUseEvent?:boolean){
        var event={obj:arg_obj ,handleEvent: OnClick};
        if(isUseEvent)
        this.canvas.addEventListener("click", event,isUseEvent);
        else{
            this.canvas.addEventListener("click",event,false);
        }
    }
    static AddMouseDownEvent(arg_obj,isUseEvent?:boolean){
        var event={obj:arg_obj ,handleEvent: OnMouseDown};
        if(isUseEvent)
        this.canvas.addEventListener("mousedown", event,isUseEvent);
        else{
            this.canvas.addEventListener("mousedown",event,false);
        }
    }
    static AddMouseUpEvent(arg_obj,isUseEvent?:boolean){
        var event={obj:arg_obj ,handleEvent: OnMouseUp};
        if(isUseEvent)
        this.canvas.addEventListener("mouseup", event,isUseEvent);
        else{
            this.canvas.addEventListener("mouseup",event,false);
        }
    }
    static AddKeyUpEvent(arg_obj,isUseEvent?:boolean){
        var event={obj:arg_obj ,handleEvent: OnKeyUp};
        if(isUseEvent)
        this.canvas.addEventListener("keyup", event,isUseEvent);
        else{
            this.canvas.addEventListener("keyup",event,false);
        }
    }
    static AddKeyDownEvent(arg_obj,isUseEvent?:boolean){
        var event={obj:arg_obj ,handleEvent: OnKeyDown};
        if(isUseEvent)
        document.addEventListener("keydown", event,isUseEvent);
        else{
            document.addEventListener("keydown",event,false);
        }
    }
    static AddMouseMoveEvent(arg_obj,isUseEvent?:boolean){
        var event={obj:arg_obj ,handleEvent: OnMouseMove};
        if(isUseEvent)
        this.canvas.addEventListener("mousemove", event,isUseEvent);
        else{
            this.canvas.addEventListener("mousemove",event,false);
        }
    }
    static AddMouseWheelEvent(arg_obj,isUseEvent?:boolean){
        var event={obj:arg_obj ,handleEvent: OnMouseWheel};
        if(isUseEvent)
        this.canvas.addEventListener("mousewheel", event,isUseEvent);
        else{
            this.canvas.addEventListener("mousewheel",event,false);
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