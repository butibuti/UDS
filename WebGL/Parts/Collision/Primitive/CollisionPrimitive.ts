
import Vector3 from "../../../Math/Vector3";
import Transform from "../../../Transform";

export default interface CollisionPrimitive
{
	
	Initialize() :void;
    PreInitialize():void;
	GetMaxPointAndMinPoint(arg_outputMax:Vector3, arg_outputMin:Vector3) :void;
	Update() :void;
	IsHit(other: CollisionPrimitive):boolean;
	IsHitBox_OBB( other :CollisionPrimitive_Box_OBB):boolean;
    IsHitPoint( other:CollisionPrimitive_Point) :boolean;
	IsHitSphere( other:CollisionPrimitive_Sphere) :boolean;
	IsHitBox_AABB( other:CollisionPrimitive_Box_AABB) :boolean;
	transform :Transform;
};
class CollisionPrimitive_Box_OBB{}
class CollisionPrimitive_Point{}
class CollisionPrimitive_Sphere{}
class CollisionPrimitive_Box_AABB{}