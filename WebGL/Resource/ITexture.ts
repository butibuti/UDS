import ResourceContainer from "../Parts/ResourceContainer";

export default interface ITexture{
    Initialize():void;
    Attach(slot:number):void;
    Loaded();
    IsLoaded():boolean;
    SetContainer(resourceContainer:ResourceContainer);
}