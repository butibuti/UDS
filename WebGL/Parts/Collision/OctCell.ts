
import CollisionObject from "./CollisionObject";

export default class OctCell {
    
	shp_head: CollisionObject;
    Release() {
	    while (this.shp_head!=null&&this.shp_head.shp_next!=null)
		{
		this.shp_head = this.shp_head.shp_next;
        this.shp_head.shp_bef = null;
        }
		this.shp_head = null;
	}
	RegistObject(arg_obj:CollisionObject) {

		if (arg_obj.p_cell == this||(arg_obj==null))
				return;

		arg_obj.Remove();

		arg_obj.p_cell = this;

		if (this.shp_head) {
			arg_obj.shp_next = this.shp_head;
			this.shp_head.shp_bef = arg_obj;
			this.shp_head = arg_obj;
		}

		this.shp_head = arg_obj;
	}
	OnRemove( arg_remove:CollisionObject)
		{
			if ((this.shp_head ==arg_remove )&& arg_remove) {
			this.shp_head = this.shp_head.shp_next;
			}
		}
	GetHead():CollisionObject {
			return this.shp_head;
		}


}