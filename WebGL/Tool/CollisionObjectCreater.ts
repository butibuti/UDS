import GameObject from "../GameObject/GameObject";
import Box_AABB from "../Math/Geometry/Box_AABB";
import Box_OBB from "../Math/Geometry/Box_OBB";
import GeometryHelper from "../Math/Geometry/GeometryHelper";
import Sphere from "../Math/Geometry/Sphere";
import Vector3 from "../Math/Vector3";
import CollisionObject from "../Parts/Collision/CollisionObject";
import CollisionPrimitive from "../Parts/Collision/Primitive/CollisionPrimitive";
import Transform from "../Transform";


export default class CollisionObjectCreater{
    static CreatePoint(arg_gameObject:GameObject):CollisionObject{
        return new CollisionObject(arg_gameObject,new CollisionPrimitive_Point(arg_gameObject.transform));
    }
    static CreateSphere(arg_radius:number, arg_gameObject:GameObject):CollisionObject{
        return new CollisionObject(arg_gameObject,new CollisionPrimitive_Sphere(arg_radius, arg_gameObject.transform));
    }
    static CreateCube_AABB(arg_length:Vector3, arg_gameObject:GameObject):CollisionObject{
        return new CollisionObject(arg_gameObject,new CollisionPrimitive_Box_AABB(arg_length, arg_gameObject.transform));
    }
    static CreateCube_OBB(arg_length:Vector3, arg_gameObject:GameObject):CollisionObject{
        return new CollisionObject(arg_gameObject,new CollisionPrimitive_Box_OBB(arg_length, arg_gameObject.transform));
    }
}

class CollisionPrimitive_Point implements CollisionPrimitive
{
    position:Vector3;
    transform :Transform;
	constructor(arg_transform:Transform)
	{
        this.transform=arg_transform;
        this.position=this.transform.Position;
	}
    Initialize(): void {
        
    }
    PreInitialize(): void {
        
    }
	Update(){
        this.position=this.transform.Position;
	}
	GetPosition():Vector3 {
	    return this.transform.Position;
	}
	IsHit(other: CollisionPrimitive ):boolean
	{
	    return other.IsHitPoint(this);
    }
	GetMaxPointAndMinPoint( arg_outputMax:Vector3, arg_outputMin:Vector3) :void {
		var point = this.transform.Position;
		arg_outputMax.data = point.data;
		arg_outputMin .data= point.data;
	}
	IsHitPoint(other:CollisionPrimitive_Point):boolean{
        return other.GetPosition()==this.GetPosition();
    }
	IsHitSphere(other:CollisionPrimitive_Sphere):boolean{
        return GeometryHelper.IsHitPointSphere(this.position, other.geometry);
    }
	IsHitBox_AABB(other:CollisionPrimitive_Box_AABB):boolean{

        return GeometryHelper.IsHitPointBox_AABB(this.position, other.geometry);
    }
    IsHitBox_OBB(other:CollisionPrimitive_Box_OBB):boolean{
        return GeometryHelper.IsHitPointBox_OBB(this.position,other.geometry);
    }
    
};
class CollisionPrimitive_Sphere implements CollisionPrimitive 
	{
        geometry:Sphere;
    Initialize(): void {
        
    }
    PreInitialize(): void {
        
    }
    GetMaxPointAndMinPoint(arg_outputMax: Vector3, arg_outputMin: Vector3): void {
        arg_outputMax.data=this.geometry. position .Add(new  Vector3(this.geometry. radius,this.geometry. radius,this.geometry. radius)).data;
		arg_outputMin.data= this.geometry.position .Sub(new  Vector3(this.geometry. radius,this.geometry. radius,this.geometry. radius)).data;
    }
    Update(): void {
        this.geometry. position = this.transform.Position;
			
    }
    IsHit(other: CollisionPrimitive): boolean {
        return other.IsHitSphere(this);
    }
    IsHitBox_OBB(other: CollisionPrimitive_Box_OBB): boolean {
        return GeometryHelper.IsHitSphereBox_OBB(this.geometry,other.geometry);
    }
    IsHitPoint(other: CollisionPrimitive_Point): boolean {
        return GeometryHelper.IsHitPointSphere(other.position, this.geometry);
    }
    IsHitSphere(other: CollisionPrimitive_Sphere): boolean {
        return GeometryHelper.IsHitSphereSphere(this.geometry,other.geometry);
    }
    IsHitBox_AABB(other: CollisionPrimitive_Box_AABB): boolean {
        return GeometryHelper.IsHitSphereBox_AABB(this.geometry,other.geometry);
    }
    transform: Transform;
	constructor(arg_radius:number, arg_transform:Transform)
     {
        this.transform=arg_transform;
        this.geometry=new Sphere(arg_radius,this.transform.Position );
	}
	};
class CollisionPrimitive_Box_AABB implements CollisionPrimitive
{
    geometry:Box_AABB;
    constructor(arg_length:Vector3, arg_weak_transform:Transform)
	 {
         this.geometry=new Box_AABB(arg_length,arg_weak_transform.Position)
		this.transform = arg_weak_transform;
		this.geometry.initLengthes = arg_length .Div( 2);
	}
    Initialize(): void {
        
    }
    PreInitialize(): void {
        
    }
    GetMaxPointAndMinPoint(arg_outputMax: Vector3, arg_outputMin: Vector3): void {
        
        arg_outputMax.data =this.geometry.position.Add(this.geometry. halfLengthes).data;
		arg_outputMin.data = this.geometry.position.Sub(this.geometry. halfLengthes).data;
    }
    Update(): void {
        this.geometry.position=this.transform.Position;
        this.geometry.halfLengthes = this.geometry.initLengthes .Multiply_Vec3( this.transform.Scale);
    }
    IsHit(other: CollisionPrimitive): boolean {
        return other.IsHitBox_AABB(this);
    }
    IsHitBox_OBB(other: CollisionPrimitive_Box_OBB): boolean {
        return GeometryHelper.IsHitBox_OBBBox_AABB(this.geometry,other.geometry);
    }
    IsHitPoint(other: CollisionPrimitive_Point): boolean {
        return GeometryHelper.IsHitPointBox_AABB(other.position, this.geometry);
    }
    IsHitSphere(other: CollisionPrimitive_Sphere): boolean {
        return GeometryHelper.IsHitSphereBox_AABB(other.geometry,this.geometry);
    }
    IsHitBox_AABB(other: CollisionPrimitive_Box_AABB): boolean {
        return GeometryHelper.IsHitBox_AABB(this.geometry,other.geometry);
    }
    transform: Transform;
    
};
class CollisionPrimitive_Box_OBB implements CollisionPrimitive{
    geometry:Box_OBB;
    constructor(arg_length:Vector3,  arg_weak_transform:Transform)
	{
        this.geometry=new Box_OBB(arg_length);
		this.transform = arg_weak_transform;
		this.geometry.initLengthes = arg_length.Div( 2);
	}
    Initialize(): void {
        
    }
    PreInitialize(): void {
        
    }
    GetMaxPointAndMinPoint(arg_outputMax: Vector3, arg_outputMin: Vector3): void {
        var aabb_legthes = GeometryHelper. GetBox_OBBContainAABBLength(this.geometry);
        arg_outputMax.data = this.geometry.position .Add(aabb_legthes).data;
        arg_outputMin.data =  this.geometry.position .Sub(aabb_legthes).data;
    }
    Update(): void {
        this.geometry.position =this.transform.Position;

        this.geometry.directs[0] = this.transform.GetRight();
        this.geometry.directs[1] = this.transform.GetUp();
        this.geometry.directs[2] = this.transform.GetFront();
        //console.log(this.geometry.directs[0]);
        this.geometry.halfLengthes =this.geometry. initLengthes .Multiply_Vec3(this.transform.Scale);
    }
    IsHit(other: CollisionPrimitive): boolean {
        return other.IsHitBox_OBB(this);
    }
    IsHitBox_OBB(other: CollisionPrimitive_Box_OBB): boolean {
        return GeometryHelper.IsHitBox_OBB(other.geometry,this.geometry);
    }
    IsHitPoint(other: CollisionPrimitive_Point): boolean {
        return GeometryHelper.IsHitPointBox_OBB(other.position,this.geometry);
    }
    IsHitSphere(other: CollisionPrimitive_Sphere): boolean {
        return GeometryHelper.IsHitSphereBox_OBB(other.geometry,this.geometry);
    }
    IsHitBox_AABB(other: CollisionPrimitive_Box_AABB): boolean {
        return GeometryHelper.IsHitBox_OBBBox_AABB(other.geometry,this.geometry);
    }
    transform: Transform;
    
}