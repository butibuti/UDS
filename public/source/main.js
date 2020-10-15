/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./WebGl/Component/CameraChaser.ts":
/*!*****************************************!*\
  !*** ./WebGl/Component/CameraChaser.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Vector3_1 = __importDefault(__webpack_require__(/*! ../Math/Vector3 */ "./WebGl/Math/Vector3.ts"));
var Component_1 = __importDefault(__webpack_require__(/*! ./Component */ "./WebGl/Component/Component.ts"));
var CameraChaser = /** @class */ (function (_super) {
    __extends(CameraChaser, _super);
    function CameraChaser(arg_speed, arg_tragetTransform) {
        var _this = _super.call(this) || this;
        _this.speed = arg_speed;
        _this.targetTransform = arg_tragetTransform;
        _this.velocity = new Vector3_1.default(0, 0, 0);
        return _this;
    }
    CameraChaser.prototype.OnSet = function () {
        this.offsetX = this.gameObject.transform.Position.x - this.targetTransform.Position.x;
        this.offsetZ = this.gameObject.transform.Position.y - this.targetTransform.Position.y;
    };
    CameraChaser.prototype.Update = function () {
        //this.velocity.y = this.targetTransform.Position.y;
        var xlength = this.gameObject.transform.Position.x - this.targetTransform.Position.x + this.offsetX;
        //this.velocity.x =xlength/Math.abs(xlength)* xlength*xlength*this.speed;
        if (xlength * this.speed > 1) {
            this.velocity.x = xlength / 2;
        }
        else if (xlength > 17) {
            this.velocity.x = -1 * (xlength - 17) / Math.abs(xlength - 17) * (xlength - 17) * (xlength - 17) * this.speed;
        }
        else if (xlength < 3) {
            this.velocity.x = -1 * (xlength - 3) / Math.abs(xlength + 3) * (xlength + 3) * (xlength + 3) * this.speed;
        }
        else {
            this.velocity.x = 0;
        }
        var z = this.gameObject.transform.Position.z - this.targetTransform.Position.z + this.offsetZ;
        if (z > -0.5) {
            this.velocity.z = -1 * (z) / Math.abs(z + 0.5) * (z + 0.5) * (z + 0.5) * this.speed;
        }
        else if (z < -3.5) {
            this.velocity.z = -1 * (z) / Math.abs(z + 3.5) * (z + 3.5) * (z + 3.5) * this.speed;
        }
        else {
            this.velocity.z = 0;
        }
        this.gameObject.transform.SetPosition.Add_b((this.velocity));
    };
    return CameraChaser;
}(Component_1.default));
exports.default = CameraChaser;


/***/ }),

/***/ "./WebGl/Component/CollisionComponent.ts":
/*!***********************************************!*\
  !*** ./WebGl/Component/CollisionComponent.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __importDefault(__webpack_require__(/*! ./Component */ "./WebGl/Component/Component.ts"));
var CollisionObjectCreater_1 = __importDefault(__webpack_require__(/*! ../Tool/CollisionObjectCreater */ "./WebGl/Tool/CollisionObjectCreater.ts"));
var PrimitiveType;
(function (PrimitiveType) {
    PrimitiveType[PrimitiveType["sphere"] = 0] = "sphere";
    PrimitiveType[PrimitiveType["box_AABB"] = 1] = "box_AABB";
    PrimitiveType[PrimitiveType["box_OBB"] = 2] = "box_OBB";
    PrimitiveType[PrimitiveType["point"] = 3] = "point";
})(PrimitiveType || (PrimitiveType = {}));
var CollisionComponent = /** @class */ (function (_super) {
    __extends(CollisionComponent, _super);
    function CollisionComponent(arg_type, arg_size, layer) {
        var _this = _super.call(this) || this;
        _this.layer = 0;
        _this.type = arg_type;
        _this.size = arg_size;
        if (layer) {
            _this.layer = layer;
        }
        return _this;
    }
    CollisionComponent.prototype.OnSet = function () {
        switch (this.type) {
            case PrimitiveType.sphere:
                this.collision = CollisionObjectCreater_1.default.CreateSphere(this.size.x, this.gameObject);
                break;
            case PrimitiveType.point:
                this.collision = CollisionObjectCreater_1.default.CreatePoint(this.gameObject);
                break;
            case PrimitiveType.box_AABB:
                this.collision = CollisionObjectCreater_1.default.CreateCube_AABB(this.size, this.gameObject);
                break;
            case PrimitiveType.box_OBB:
                this.collision = CollisionObjectCreater_1.default.CreateCube_OBB(this.size, this.gameObject);
                break;
        }
        this.id = this.gameObject.GetCollisionManager().Regist(this.collision, this.layer);
    };
    CollisionComponent.prototype.OnRemove = function () {
        this.gameObject.GetCollisionManager().UnRegist(this.id, this.layer);
    };
    CollisionComponent.prototype.Update = function () {
        this.collision.Update();
    };
    return CollisionComponent;
}(Component_1.default));
exports.default = CollisionComponent;


/***/ }),

/***/ "./WebGl/Component/Component.ts":
/*!**************************************!*\
  !*** ./WebGl/Component/Component.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Component = /** @class */ (function () {
    function Component() {
    }
    Object.defineProperty(Component.prototype, "IsRemove", {
        get: function () {
            return this.isRemove;
        },
        enumerable: false,
        configurable: true
    });
    Component.prototype.Set = function (arg_obj) {
        this.gameObject = arg_obj;
        this.isRemove = false;
        this.OnSet();
    };
    Component.prototype.Dead = function () {
        this.isRemove = true;
    };
    Component.prototype.OnSet = function () {
    };
    Component.prototype.Remove = function () {
        this.isRemove = true;
        this.OnRemove();
        this.gameObject = null;
    };
    Component.prototype.OnRemove = function () {
    };
    Component.prototype.Release = function () {
        this.OnRelease();
        this.gameObject = null;
    };
    Component.prototype.OnRelease = function () {
    };
    Component.prototype.Update = function () {
    };
    Component.prototype.Hit = function (arg_gameObject) {
    };
    Component.prototype.GetComponentName = function () {
        return "Component";
    };
    return Component;
}());
exports.default = Component;


/***/ }),

/***/ "./WebGl/Component/ModelDrawComponent.ts":
/*!***********************************************!*\
  !*** ./WebGl/Component/ModelDrawComponent.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __importDefault(__webpack_require__(/*! ./Component */ "./WebGl/Component/Component.ts"));
var ModelInfo = /** @class */ (function () {
    function ModelInfo() {
        this.meshName = null;
    }
    return ModelInfo;
}());
var ModelDrawComponent = /** @class */ (function (_super) {
    __extends(ModelDrawComponent, _super);
    function ModelDrawComponent(isLighting, geometryName, materialName, shaderName, layer, isBillBoard, meshName, arg_transform) {
        var _this = _super.call(this) || this;
        _this.info = new ModelInfo();
        _this.transform = null;
        _this.layer = layer;
        if (meshName)
            _this.info.meshName = meshName;
        _this.info.geometryName = geometryName;
        _this.info.shaderName = shaderName;
        _this.info.materialName = materialName;
        if (arg_transform)
            _this.transform = arg_transform;
        _this.info.lighting = isLighting;
        _this.info.billBoard = isBillBoard;
        return _this;
    }
    Object.defineProperty(ModelDrawComponent.prototype, "Layer", {
        get: function () {
            return this.layer;
        },
        enumerable: false,
        configurable: true
    });
    ModelDrawComponent.prototype.OnSet = function () {
        if (!this.transform) {
            this.transform = this.gameObject.transform;
        }
        if (this.info.meshName) {
            this.model = this.gameObject.Manager.Scene.GetSceneManager().GetModelCreater().CreateModelFromMesh(this.info.lighting, this.info.billBoard, this.info.meshName, this.info.shaderName, this.transform);
        }
        else {
            this.model = this.gameObject.Manager.Scene.GetSceneManager().GetModelCreater().CreateModel(this.info.lighting, this.info.billBoard, this.info.geometryName, this.info.materialName, this.info.shaderName, this.transform);
        }
        this.RegistDraw();
    };
    ModelDrawComponent.prototype.OnRemove = function () {
        this.UnRegistDraw();
    };
    ModelDrawComponent.prototype.RegistDraw = function () {
        if (!this.modelID)
            this.modelID = this.gameObject.GetRenderer().Regist(this.model, this.layer);
    };
    ModelDrawComponent.prototype.UnRegistDraw = function () {
        if (this.modelID) {
            this.gameObject.GetRenderer().UnRegist(this.modelID, this.layer);
            this.modelID = null;
        }
    };
    return ModelDrawComponent;
}(Component_1.default));
exports.default = ModelDrawComponent;


/***/ }),

/***/ "./WebGl/Component/PoppingAnimation.ts":
/*!*********************************************!*\
  !*** ./WebGl/Component/PoppingAnimation.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Easing_1 = __importDefault(__webpack_require__(/*! ../Tool/Easing */ "./WebGl/Tool/Easing.ts"));
var Component_1 = __importDefault(__webpack_require__(/*! ./Component */ "./WebGl/Component/Component.ts"));
var PoppingAnimation = /** @class */ (function (_super) {
    __extends(PoppingAnimation, _super);
    function PoppingAnimation(arg_time, arg_isLoop, arg_targetTransform, arg_transform, arg_easingFunction) {
        var _this = _super.call(this) || this;
        _this.currentTime = 0;
        _this.direction = 1;
        _this.time = arg_time;
        _this.linerPase = 1.0 / arg_time;
        if (arg_targetTransform)
            _this.targetTransform = arg_targetTransform;
        if (arg_transform) {
            _this.transform = arg_transform;
        }
        if (arg_easingFunction) {
            _this.easingFunction = arg_easingFunction;
        }
        else {
            _this.easingFunction = Easing_1.default.EaseInOutCubic;
        }
        if (arg_isLoop) {
            _this.TimeUpdate = _this.TimeUpdate_Loop;
        }
        else {
            _this.TimeUpdate = _this.TimeUpdate_NoLoop;
        }
        return _this;
    }
    PoppingAnimation.prototype.OnSet = function () {
        if (!this.transform) {
            this.transform = this.gameObject.transform;
        }
        if (!this.targetTransform) {
            this.targetTransform = this.gameObject.transform;
        }
        this.offset = this.targetTransform.Position.Sub(this.transform.Position);
        this.scalePase = this.targetTransform.Scale.Sub(this.transform.Scale);
        this.initPosition = this.transform.Position;
        this.initScale = this.transform.Scale;
        this.rotateQuat = this.transform.Rotation.ToQuaternion();
        this.targetRotateQuat = this.targetTransform.Rotation.ToQuaternion();
    };
    PoppingAnimation.prototype.SetTarget = function (arg_time, arg_targetTransform) {
        this.currentTime = 0;
        this.time = arg_time;
        this.targetTransform = arg_targetTransform;
        this.offset = this.targetTransform.Position.Sub(this.transform.Position);
        this.scalePase = this.targetTransform.Scale.Sub(this.transform.Scale);
        this.initPosition = this.transform.Position;
        this.initScale = this.transform.Scale;
        this.rotateQuat = this.transform.Rotation.ToQuaternion();
        this.targetRotateQuat = this.targetTransform.Rotation.ToQuaternion();
    };
    PoppingAnimation.prototype.TimeUpdate_Loop = function () {
        if (this.currentTime >= this.time) {
            this.currentTime = this.time;
            this.direction = -1;
        }
        else if (this.currentTime <= 0) {
            this.currentTime = 0;
            this.direction = 1;
        }
        this.currentTime += this.direction;
    };
    PoppingAnimation.prototype.TimeUpdate_NoLoop = function () {
        if (this.currentTime >= this.time) {
            this.currentTime = this.time;
        }
        else
            this.currentTime += this.direction;
    };
    PoppingAnimation.prototype.IsMove = function () {
        if (this.currentTime >= this.time) {
            return false;
        }
        else {
            return true;
        }
    };
    PoppingAnimation.prototype.Update = function () {
        this.TimeUpdate();
        var t = this.easingFunction(this.currentTime / this.time);
        this.transform.Position = this.initPosition.Add(this.offset.Multiply(t).AddY(-Easing_1.default.Parabola(t)));
        this.transform.Scale = this.initScale.Add(this.scalePase.Multiply(t));
        //this.transform.Rotation= this.transform.Rotation
        this.transform.Rotation = this.rotateQuat.SphereLerp(this.targetRotateQuat, t).ToMatrix4x4();
    };
    return PoppingAnimation;
}(Component_1.default));
exports.default = PoppingAnimation;


/***/ }),

/***/ "./WebGl/Component/SceneChanger.ts":
/*!*****************************************!*\
  !*** ./WebGl/Component/SceneChanger.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __importDefault(__webpack_require__(/*! ./Component */ "./WebGl/Component/Component.ts"));
var SceneChanger = /** @class */ (function (_super) {
    __extends(SceneChanger, _super);
    function SceneChanger(arg_sceneName, arg_waitFrame, arg_sceneChangeValue) {
        var _this = _super.call(this) || this;
        _this.sceneName = arg_sceneName;
        _this.sceneChangeValue = arg_sceneChangeValue;
        _this.waitFrame = arg_waitFrame;
        return _this;
    }
    SceneChanger.prototype.Update = function () {
        this.waitFrame--;
        if (this.waitFrame > 0) {
            return;
        }
        this.gameObject.Manager.Scene.GetSceneManager().ChangeScene(this.sceneName, this.sceneChangeValue);
        this.Dead();
        ;
    };
    return SceneChanger;
}(Component_1.default));
exports.default = SceneChanger;


/***/ }),

/***/ "./WebGl/Component/SucideComponent.ts":
/*!********************************************!*\
  !*** ./WebGl/Component/SucideComponent.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __importDefault(__webpack_require__(/*! ./Component */ "./WebGl/Component/Component.ts"));
var SucideComponent = /** @class */ (function (_super) {
    __extends(SucideComponent, _super);
    function SucideComponent(arg_waitFrame) {
        var _this = _super.call(this) || this;
        _this.waitFrame = arg_waitFrame;
        return _this;
    }
    SucideComponent.prototype.Update = function () {
        this.waitFrame--;
        if (this.waitFrame > 0) {
            return;
        }
        this.gameObject.Dead();
    };
    return SucideComponent;
}(Component_1.default));
exports.default = SucideComponent;


/***/ }),

/***/ "./WebGl/Component/TextDrawComponent.ts":
/*!**********************************************!*\
  !*** ./WebGl/Component/TextDrawComponent.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __importDefault(__webpack_require__(/*! ./Component */ "./WebGl/Component/Component.ts"));
var ModelInfo = /** @class */ (function () {
    function ModelInfo() {
    }
    return ModelInfo;
}());
var TextDrawComponent = /** @class */ (function (_super) {
    __extends(TextDrawComponent, _super);
    function TextDrawComponent(text, fontTexName, shaderName, arg_color, layer, isBillBoard, arg_transform) {
        var _this = _super.call(this) || this;
        _this.info = new ModelInfo();
        _this.transform = null;
        _this.layer = layer;
        _this.info.shaderName = shaderName;
        _this.info.color = arg_color;
        _this.info.fontTextureName = fontTexName;
        _this.text = text;
        if (arg_transform)
            _this.transform = arg_transform;
        _this.info.billBoard = isBillBoard;
        return _this;
    }
    Object.defineProperty(TextDrawComponent.prototype, "Layer", {
        get: function () {
            return this.layer;
        },
        enumerable: false,
        configurable: true
    });
    TextDrawComponent.prototype.OnSet = function () {
        if (!this.transform) {
            this.transform = this.gameObject.transform;
        }
        this.model = this.gameObject.Manager.Scene.GetSceneManager().GetModelCreater().CreateModelFromText(this.info.billBoard, this.info.color, this.text, this.info.fontTextureName, this.info.shaderName, this.transform);
        this.modelID = this.gameObject.GetRenderer().Regist(this.model, this.layer);
    };
    TextDrawComponent.prototype.OnRemove = function () {
        this.gameObject.GetRenderer().UnRegist(this.modelID, this.layer);
    };
    return TextDrawComponent;
}(Component_1.default));
exports.default = TextDrawComponent;


/***/ }),

/***/ "./WebGl/Component/TransformAnimation.ts":
/*!***********************************************!*\
  !*** ./WebGl/Component/TransformAnimation.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Easing_1 = __importDefault(__webpack_require__(/*! ../Tool/Easing */ "./WebGl/Tool/Easing.ts"));
var Component_1 = __importDefault(__webpack_require__(/*! ./Component */ "./WebGl/Component/Component.ts"));
var TransformAnimation = /** @class */ (function (_super) {
    __extends(TransformAnimation, _super);
    function TransformAnimation(arg_time, arg_isLoop, arg_targetTransform, arg_transform, arg_easingFunction) {
        var _this = _super.call(this) || this;
        _this.currentTime = 0;
        _this.direction = 1;
        _this.time = arg_time;
        _this.linerPase = 1.0 / arg_time;
        _this.targetTransform = arg_targetTransform;
        if (arg_transform) {
            _this.transform = arg_transform;
        }
        if (arg_easingFunction) {
            _this.easingFunction = arg_easingFunction;
        }
        else {
            _this.easingFunction = Easing_1.default.EaseInOutBack;
        }
        if (arg_isLoop) {
            _this.TimeUpdate = _this.TimeUpdate_Loop;
        }
        else {
            _this.TimeUpdate = _this.TimeUpdate_NoLoop;
        }
        return _this;
    }
    TransformAnimation.prototype.OnSet = function () {
        if (!this.transform) {
            this.transform = this.gameObject.transform;
        }
        this.offset = this.targetTransform.Position.Sub(this.transform.LocalPosition);
        this.scalePase = this.targetTransform.Scale.Sub(this.transform.Scale);
        this.initPosition = this.transform.LocalPosition;
        this.initScale = this.transform.Scale;
    };
    TransformAnimation.prototype.TimeUpdate_Loop = function () {
        if (this.currentTime >= this.time) {
            this.currentTime = this.time;
            this.direction = -1;
        }
        else if (this.currentTime <= 0) {
            this.currentTime = 0;
            this.direction = 1;
        }
        this.currentTime += this.direction;
    };
    TransformAnimation.prototype.TimeUpdate_NoLoop = function () {
        if (this.currentTime >= this.time) {
            this.currentTime = this.time;
            this.Remove();
        }
        this.currentTime += this.direction;
    };
    TransformAnimation.prototype.Update = function () {
        this.TimeUpdate();
        this.transform.Position = this.initPosition.Add(this.offset.Multiply(this.currentTime / this.time));
        this.transform.Scale = this.initScale.Add(this.scalePase.Multiply(this.easingFunction(this.currentTime / this.time)));
        //this.transform.Rotation= this.transform.Rotation
    };
    return TransformAnimation;
}(Component_1.default));
exports.default = TransformAnimation;


/***/ }),

/***/ "./WebGl/CrossyLoad_Copy/PlayerComponent.ts":
/*!**************************************************!*\
  !*** ./WebGl/CrossyLoad_Copy/PlayerComponent.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Vector3_1 = __importDefault(__webpack_require__(/*! ../Math/Vector3 */ "./WebGl/Math/Vector3.ts"));
var Input_1 = __importDefault(__webpack_require__(/*! ../Tool/Input */ "./WebGl/Tool/Input.ts"));
var Transform_1 = __importDefault(__webpack_require__(/*! ../Transform */ "./WebGl/Transform.ts"));
var Component_1 = __importDefault(__webpack_require__(/*! ../Component/Component */ "./WebGl/Component/Component.ts"));
var ModelDrawComponent_1 = __importDefault(__webpack_require__(/*! ../Component/ModelDrawComponent */ "./WebGl/Component/ModelDrawComponent.ts"));
var TransformAnimation_1 = __importDefault(__webpack_require__(/*! ../Component/TransformAnimation */ "./WebGl/Component/TransformAnimation.ts"));
var PoppingAnimation_1 = __importDefault(__webpack_require__(/*! ../Component/PoppingAnimation */ "./WebGl/Component/PoppingAnimation.ts"));
var soundDelay = 5;
var PlayerComponent = /** @class */ (function (_super) {
    __extends(PlayerComponent, _super);
    function PlayerComponent(arg_movePase) {
        var _this = _super.call(this) || this;
        _this.direction = 1;
        _this.isMove = false;
        _this.e = null;
        _this.movePase = arg_movePase;
        _this.isPush = false;
        _this.soundframe = 0;
        return _this;
    }
    PlayerComponent.prototype.OnSet = function () {
        this.startY = this.gameObject.transform.Position.y;
        this.deadSe = this.gameObject.Manager.Scene.GetSceneManager().GetResourceContainer().GetSound("kill");
        this.upSe = this.gameObject.Manager.Scene.GetSceneManager().GetResourceContainer().GetSound("up");
        this.poppingComponent = new PoppingAnimation_1.default(this.movePase, false);
        this.modelTransform = new Transform_1.default();
        this.modelTransform.BaseTransform = this.gameObject.transform;
        this.gameObject.SetComponent(this.poppingComponent);
        this.gameObject.SetComponent(new ModelDrawComponent_1.default(false, "cube", "caloryMaterial", "texShader", 1, false, null, this.modelTransform));
        this.minimumTransform = new Transform_1.default(new Vector3_1.default(0, 0.1, 0), new Vector3_1.default(0, 0, 0), new Vector3_1.default(1.2, 0.8, 1.2));
        this.maximumTransform = new Transform_1.default(new Vector3_1.default(0, -0.1, 0), new Vector3_1.default(0, 0, 0), new Vector3_1.default(1.0, 1.0, 1.0));
        this.scaleComponent = new TransformAnimation_1.default(30, true, this.minimumTransform, this.modelTransform);
        this.gameObject.SetComponent(this.scaleComponent);
    };
    PlayerComponent.prototype.GetComponentName = function () {
        return "PlayerComponent";
    };
    PlayerComponent.prototype.Update = function () {
        if (this.isPush) {
        }
        if (this.e && !this.poppingComponent.IsMove()) {
            var target;
            switch (this.e.key) {
                case "w":
                    target = new Transform_1.default(this.gameObject.transform.Position.Add_b(new Vector3_1.default(0, 0, -1)));
                    break;
                case "s":
                    target = new Transform_1.default(this.gameObject.transform.Position.Add_b(new Vector3_1.default(0, 0, 1)), new Vector3_1.default(0, 180, 0));
                    break;
                case "d":
                    target = new Transform_1.default(this.gameObject.transform.Position.Add_b(new Vector3_1.default(1, 0, 0)), new Vector3_1.default(0, -90, 0));
                    break;
                case "a":
                    target = new Transform_1.default(this.gameObject.transform.Position.Add_b(new Vector3_1.default(-1, 0, 0)), new Vector3_1.default(0, 90, 0));
                    break;
            }
            if (this.e.key == "w" || this.e.key == "s" || this.e.key == "a" || this.e.key == "d") {
                this.poppingComponent.SetTarget(this.movePase, target);
            }
            this.upSe.Play_new();
            this.e = null;
        }
        this.soundframe--;
        if (this.soundframe <= 0) {
            this.soundframe = soundDelay;
        }
    };
    PlayerComponent.prototype.OnKeyDown = function (e) {
        if (e.key == "q") {
            return;
        }
        if (this.e != null) {
            return;
        }
        if (this.isPush) {
            return;
        }
        if (this.scaleComponent) {
            this.scaleComponent.Remove();
        }
        this.scaleComponent = new TransformAnimation_1.default(5, false, this.minimumTransform, this.modelTransform);
        this.gameObject.SetComponent(this.scaleComponent);
        this.isPush = true;
    };
    PlayerComponent.prototype.OnKeyUp = function (e) {
        if (e.key == "q") {
            this.ToStart();
        }
        if (this.e != null) {
            return;
        }
        if (this.scaleComponent) {
            this.scaleComponent.Remove();
        }
        this.scaleComponent = new TransformAnimation_1.default(10, false, this.maximumTransform, this.modelTransform);
        this.gameObject.SetComponent(this.scaleComponent);
        this.e = e;
        this.isPush = false;
    };
    PlayerComponent.prototype.ToStart = function () {
        Input_1.default.AddKeyUpEvent(this, "playerEvent", false);
        Input_1.default.AddKeyDownEvent(this, "playerEvent", false);
        this.isPush = false;
    };
    PlayerComponent.prototype.Reset = function () {
        Input_1.default.RemoveKeyUpEvent("playerEvent");
        Input_1.default.RemoveKeyDownEvent("playerEvent");
    };
    return PlayerComponent;
}(Component_1.default));
exports.default = PlayerComponent;


/***/ }),

/***/ "./WebGl/CrossyLoad_Copy/Stage.ts":
/*!****************************************!*\
  !*** ./WebGl/CrossyLoad_Copy/Stage.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CameraChaser_1 = __importDefault(__webpack_require__(/*! ../Component/CameraChaser */ "./WebGl/Component/CameraChaser.ts"));
var CollisionComponent_1 = __importDefault(__webpack_require__(/*! ../Component/CollisionComponent */ "./WebGl/Component/CollisionComponent.ts"));
var Vector3_1 = __importDefault(__webpack_require__(/*! ../Math/Vector3 */ "./WebGl/Math/Vector3.ts"));
var Transform_1 = __importDefault(__webpack_require__(/*! ../Transform */ "./WebGl/Transform.ts"));
var PlayerComponent_1 = __importDefault(__webpack_require__(/*! ./PlayerComponent */ "./WebGl/CrossyLoad_Copy/PlayerComponent.ts"));
var PrimitiveType;
(function (PrimitiveType) {
    PrimitiveType[PrimitiveType["sphere"] = 0] = "sphere";
    PrimitiveType[PrimitiveType["box_AABB"] = 1] = "box_AABB";
    PrimitiveType[PrimitiveType["box_OBB"] = 2] = "box_OBB";
    PrimitiveType[PrimitiveType["point"] = 3] = "point";
})(PrimitiveType || (PrimitiveType = {}));
var Stage = /** @class */ (function () {
    function Stage(arg_scene) {
        this.ary_obstacle = new Array();
        this.ary_coin = new Array();
        this.playScene = arg_scene;
        this.startPos = new Vector3_1.default(0, -0.5, 0);
        this.playerComponent = new PlayerComponent_1.default(15);
        this.player = this.playScene.GetGameManager().AddGameObject("cube", new Transform_1.default(this.startPos.Clone(), new Vector3_1.default(0, 0, 0), new Vector3_1.default(1, 1, 1)), "player", [this.playerComponent]);
        this.player.SetComponent(new CollisionComponent_1.default(PrimitiveType.box_OBB, new Vector3_1.default(1.0, 1.0, 1.0), 0));
        var camera = this.playScene.GetGameManager().AddGameObject("cameraman", this.playScene.GetCamera("main").transform);
        camera.SetComponent(new CameraChaser_1.default(0.01, this.player.transform));
    }
    Stage.prototype.Release = function () {
        this.playScene = null;
        this.ary_obstacle.length = 0;
    };
    Stage.prototype.AddObstacle = function (obstacle) {
        this.ary_obstacle.push(obstacle);
        obstacle.stage = this;
    };
    Stage.prototype.GetRing = function () {
    };
    Stage.prototype.GetCoin = function () {
    };
    Stage.prototype.Failed = function () {
    };
    Stage.prototype.Start = function () {
        this.playerComponent.ToStart();
    };
    Stage.prototype.Reset = function () {
        this.playerComponent.Reset();
        this.ary_coin.forEach(function (coin) { return coin.ReSet(); });
    };
    return Stage;
}());
exports.default = Stage;


/***/ }),

/***/ "./WebGl/GameObject/GameObject.ts":
/*!****************************************!*\
  !*** ./WebGl/GameObject/GameObject.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameObjectIDManager_1 = __importDefault(__webpack_require__(/*! ../Parts/GameObjectIDManager */ "./WebGl/Parts/GameObjectIDManager.ts"));
var GameObject = /** @class */ (function () {
    function GameObject(arg_manager, arg_name, arg_transform, arg_idName, arg_ary_components) {
        var _this = this;
        this.transform = arg_transform;
        this.newComponents = new Array();
        this.isRemove = false;
        this.name = arg_name;
        this.manager = arg_manager;
        if (arg_ary_components) {
            this.components = arg_ary_components;
        }
        else
            this.components = new Array();
        this.objectID = GameObjectIDManager_1.default.GetID(arg_idName);
        this.components.forEach(function (component) { return component.Set(_this); });
    }
    Object.defineProperty(GameObject.prototype, "IsRemove", {
        get: function () {
            return this.isRemove;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (arg_name) {
            this.manager.UnRegistObject(this.name);
            this.name = arg_name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "Manager", {
        get: function () {
            return this.manager;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "GameTime", {
        get: function () {
            return this.Manager.Scene.GetSceneManager().GetGameTime();
        },
        enumerable: false,
        configurable: true
    });
    GameObject.prototype.Remove = function () {
        this.components.forEach(function (component) { return component.Remove(); });
        this.components.length = 0;
        this.manager.UnRegistObject(this.name);
        this.manager = null;
    };
    GameObject.prototype.Release = function () {
        this.components.forEach(function (component) { return component.Remove(); });
        this.components.length = 0;
        this.manager = null;
    };
    GameObject.prototype.Dead = function () {
        this.isRemove = true;
    };
    GameObject.prototype.GetRenderer = function () {
        return this.manager.Scene.GetRenderer();
    };
    GameObject.prototype.GetCollisionManager = function () {
        return this.manager.Scene.GetCollisionManager();
    };
    GameObject.prototype.Update = function () {
        this.components = this.components.concat(this.newComponents);
        this.newComponents = new Array();
        this.components.forEach(function (component) { return component.Update(); });
        var remove = this.components.filter(function (component) { return component.IsRemove; });
        remove.forEach(function (remove) { return remove.Remove(); });
        this.components = this.components.filter(function (component) { return !component.IsRemove; });
    };
    GameObject.prototype.Initialize = function () {
    };
    GameObject.prototype.SetComponent = function (arg_component) {
        arg_component.Set(this);
        this.newComponents.push(arg_component);
        return arg_component;
    };
    GameObject.prototype.GetComponent = function (arg_serchName, arg_count) {
        return this.components.filter(function (component) { return component.GetComponentName() == arg_serchName; })[arg_count];
    };
    GameObject.prototype.Hit = function (arg_object) {
        console.log("collision:" + this.name + "," + arg_object.name);
        this.components.forEach(function (component) { return component.Hit(arg_object); });
    };
    return GameObject;
}());
exports.default = GameObject;


/***/ }),

/***/ "./WebGl/GameObject/GameObjectManager.ts":
/*!***********************************************!*\
  !*** ./WebGl/GameObject/GameObjectManager.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameObject_1 = __importDefault(__webpack_require__(/*! ./GameObject */ "./WebGl/GameObject/GameObject.ts"));
var Transform_1 = __importDefault(__webpack_require__(/*! ../Transform */ "./WebGl/Transform.ts"));
var GameObjectManager = /** @class */ (function () {
    function GameObjectManager(arg_scene) {
        this.gameObjects = new Array();
        this.newGameObjects = new Array();
        this.map_gameObjects = new Map();
        this.scene = arg_scene;
    }
    Object.defineProperty(GameObjectManager.prototype, "Scene", {
        get: function () {
            return this.scene;
        },
        enumerable: false,
        configurable: true
    });
    GameObjectManager.prototype.AddGameObject = function (arg_name, arg_transform, arg_idName, arg_ary_componets) {
        var newObj;
        if (this.map_gameObjects[arg_name]) {
            var num = 1;
            var name = arg_name + "_" + num;
            while (this.map_gameObjects[name]) {
                num++;
                name = arg_name + "_" + num;
            }
            arg_name = name;
        }
        if (!arg_idName) {
            arg_idName = "none";
        }
        if (arg_transform) {
            if (arg_ary_componets)
                newObj = new GameObject_1.default(this, arg_name, arg_transform, arg_idName, arg_ary_componets);
            else {
                newObj = new GameObject_1.default(this, arg_name, arg_transform, arg_idName);
            }
        }
        else {
            if (arg_ary_componets)
                newObj = new GameObject_1.default(this, arg_name, new Transform_1.default(), arg_idName, arg_ary_componets);
            else {
                newObj = new GameObject_1.default(this, arg_name, new Transform_1.default(), arg_idName);
            }
        }
        this.map_gameObjects[arg_name] = newObj;
        this.newGameObjects.push(newObj);
        return newObj;
    };
    GameObjectManager.prototype.RemoveObject = function (arg_gameObjName) {
        this.map_gameObjects[arg_gameObjName].Dead();
    };
    GameObjectManager.prototype.UnRegistObject = function (arg_gameObjectName) {
        this.map_gameObjects[arg_gameObjectName] = null;
    };
    GameObjectManager.prototype.Update = function () {
        this.gameObjects = this.gameObjects.concat(this.newGameObjects);
        this.newGameObjects = new Array();
        this.gameObjects.forEach(function (obj) { return obj.Update(); });
        this.gameObjects.filter(function (obj) { return obj.IsRemove; }).forEach(function (obj) { return obj.Remove(); });
        this.gameObjects = this.gameObjects.filter(function (obj) { return !obj.IsRemove; });
        //console.log(this.gameObjects.length);
    };
    GameObjectManager.prototype.GetGameObject = function (arg_gameObjectName) {
        return this.map_gameObjects[arg_gameObjectName];
    };
    GameObjectManager.prototype.RegistObj = function (obj) {
        this.map_gameObjects[obj.Name] = obj;
    };
    GameObjectManager.prototype.Release = function () {
        this.map_gameObjects.clear();
        this.newGameObjects.forEach(function (obj) { return obj.Release(); });
        this.newGameObjects.length = 0;
        this.gameObjects.forEach(function (obj) { return obj.Release(); });
        this.gameObjects.length = 0;
        this.scene = null;
    };
    return GameObjectManager;
}());
exports.default = GameObjectManager;


/***/ }),

/***/ "./WebGl/Graphic/Camera.ts":
/*!*********************************!*\
  !*** ./WebGl/Graphic/Camera.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Matrix_1 = __importDefault(__webpack_require__(/*! ../Math/Matrix */ "./WebGl/Math/Matrix.ts"));
var Transform_1 = __importDefault(__webpack_require__(/*! ../Transform */ "./WebGl/Transform.ts"));
var Vector4_1 = __importDefault(__webpack_require__(/*! ../Math/Vector4 */ "./WebGl/Math/Vector4.ts"));
var Camera = /** @class */ (function () {
    function Camera(arg_device, layer, isPararell, frameBuffer) {
        this.targetFrame = null;
        this.device = arg_device;
        this.transform = new Transform_1.default();
        this.layer = layer;
        this.clearColor = new Vector4_1.default(0, 0, 0, 0);
        if (frameBuffer) {
            this.targetFrame = frameBuffer;
            if (!isPararell) {
                this.projectionMatrix = new Matrix_1.default().Perspective(45, this.targetFrame.width / this.targetFrame.height, 0.1, 100);
            }
            else {
                this.projectionMatrix = new Matrix_1.default().Ortho(-this.targetFrame.width / 2, this.targetFrame.width / 2, this.targetFrame.height / 2, -this.targetFrame.height / 2, 0.1, 100);
            }
        }
        else {
            if (!isPararell)
                this.projectionMatrix = new Matrix_1.default().Perspective(45, this.device.GetSize().x / this.device.GetSize().y, 0.1, 100);
            else {
                this.projectionMatrix = new Matrix_1.default().Ortho(-this.device.GetSize().x / 2, this.device.GetSize().x / 2, this.device.GetSize().y / 2, -this.device.GetSize().y / 2, 0.1, 100);
            }
        }
    }
    Camera.prototype.Attach = function () {
        this.device.SetClearColor(this.clearColor);
        this.device.SetCameraStatus(this.transform.Matrix.Inverse(), this.projectionMatrix, this.transform.Rotation, this.transform.Position);
        if (this.targetFrame) {
            this.device.context.viewport(0, 0, this.targetFrame.width, this.targetFrame.height);
            this.device.context.bindFramebuffer(this.device.context.FRAMEBUFFER, this.targetFrame.frameBuffer);
            this.device.clearFunc();
        }
        else {
            this.device.context.viewport(0, 0, this.device.GetSize().x, this.device.GetSize().y);
            this.device.context.bindFramebuffer(this.device.context.FRAMEBUFFER, null);
            this.device.clearFunc();
        }
    };
    return Camera;
}());
exports.default = Camera;


/***/ }),

/***/ "./WebGl/Graphic/GraphicDevice.ts":
/*!****************************************!*\
  !*** ./WebGl/Graphic/GraphicDevice.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Vector4_1 = __importDefault(__webpack_require__(/*! ../Math/Vector4 */ "./WebGl/Math/Vector4.ts"));
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Math/Vector2 */ "./WebGl/Math/Vector2.ts"));
var GraphicDevice = /** @class */ (function () {
    function GraphicDevice(arg_canvas) {
        this.canvas = arg_canvas;
        this.context = this.canvas.getContext('webgl');
        this.context.enable(this.context.CULL_FACE);
        this.context.enable(this.context.DEPTH_TEST);
        this.context.depthFunc(this.context.LEQUAL);
        this.clearColor = new Vector4_1.default(0, 0, 0, 0);
        this.size = new Vector2_1.default(arg_canvas.width, arg_canvas.height);
        this.clearFunc = this.Clear;
        this.context.clearColor(this.clearColor.x, this.clearColor.y, this.clearColor.z, this.clearColor.w);
        this.context.clearDepth(1.0);
        this.context.blendFunc(this.context.SRC_ALPHA, this.context.ONE_MINUS_SRC_ALPHA);
        this.context.enable(this.context.BLEND);
    }
    Object.defineProperty(GraphicDevice.prototype, "TempMatrix", {
        get: function () {
            return this.tempMatrix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphicDevice.prototype, "ViewMatrix", {
        get: function () {
            return this.viewMatrix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphicDevice.prototype, "ProjectionMatrix", {
        get: function () {
            return this.projectionMatrix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphicDevice.prototype, "CameraPosition", {
        get: function () {
            return this.camPosition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphicDevice.prototype, "CameraRotationInv", {
        get: function () {
            return this.camRotationInv;
        },
        enumerable: false,
        configurable: true
    });
    GraphicDevice.prototype.SetClearColor = function (arg_color) {
        this.clearColor = arg_color;
        this.context.clearColor(this.clearColor.x, this.clearColor.y, this.clearColor.z, this.clearColor.w);
        return arg_color;
    };
    GraphicDevice.prototype.EnableStencil = function () {
        this.context.enable(this.context.STENCIL_TEST);
        this.context.clearStencil(0);
    };
    GraphicDevice.prototype.Clear = function () {
        this.context.clear(this.context.COLOR_BUFFER_BIT | this.context.DEPTH_BUFFER_BIT);
    };
    GraphicDevice.prototype.ClearStencil = function () {
        this.context.clear(this.context.COLOR_BUFFER_BIT | this.context.DEPTH_BUFFER_BIT | this.context.STENCIL_BUFFER_BIT);
    };
    GraphicDevice.prototype.GetSize = function () {
        return this.size;
    };
    GraphicDevice.prototype.Present = function () {
        this.context.flush();
    };
    GraphicDevice.prototype.SetShader = function (arg_shader) {
        this.shader = arg_shader;
        this.context.useProgram(this.shader.programObject);
    };
    GraphicDevice.prototype.CreateProgram = function (arg_vs, arg_fs) {
        // プログラムオブジェクトの生成
        var program = this.context.createProgram();
        // プログラムオブジェクトにシェーダを割り当てる
        this.context.attachShader(program, arg_vs);
        this.context.attachShader(program, arg_fs);
        // シェーダをリンク
        this.context.linkProgram(program);
        // シェーダのリンクが正しく行なわれたかチェック
        if (this.context.getProgramParameter(program, this.context.LINK_STATUS)) {
            // 成功していたらプログラムオブジェクトを有効にする
            this.context.useProgram(program);
            // プログラムオブジェクトを返して終了
            return program;
        }
        else {
            // 失敗していたらエラーログをアラートする
            alert(this.context.getProgramInfoLog(program));
        }
    };
    GraphicDevice.prototype.CreateVBO = function (arg_data) {
        // バッファオブジェクトの生成
        var vbo = this.context.createBuffer();
        // バッファをバインドする
        this.context.bindBuffer(this.context.ARRAY_BUFFER, vbo);
        // バッファにデータをセット
        this.context.bufferData(this.context.ARRAY_BUFFER, new Float32Array(arg_data), this.context.STATIC_DRAW);
        // バッファのバインドを無効化
        this.context.bindBuffer(this.context.ARRAY_BUFFER, null);
        // 生成したVBOを返して終了
        return vbo;
    };
    GraphicDevice.prototype.CreateIBO = function (arg_data) {
        // バッファオブジェクトの生成
        var ibo = this.context.createBuffer();
        // バッファをバインドする
        this.context.bindBuffer(this.context.ELEMENT_ARRAY_BUFFER, ibo);
        // バッファにデータをセット
        this.context.bufferData(this.context.ELEMENT_ARRAY_BUFFER, new Int16Array(arg_data), this.context.STATIC_DRAW);
        // バッファのバインドを無効化
        this.context.bindBuffer(this.context.ELEMENT_ARRAY_BUFFER, null);
        // 生成したIBOを返して終了
        return ibo;
    };
    GraphicDevice.prototype.CreateVertexShader = function (arg_source) {
        var shader;
        shader = this.context.createShader(this.context.VERTEX_SHADER);
        // 生成されたシェーダにソースを割り当てる
        this.context.shaderSource(shader, arg_source);
        // シェーダをコンパイルする
        this.context.compileShader(shader);
        // シェーダが正しくコンパイルされたかチェック
        if (this.context.getShaderParameter(shader, this.context.COMPILE_STATUS)) {
            // 成功していたらシェーダを返して終了
            return shader;
        }
        else {
            console.log("vertex shader failed");
            // 失敗していたらエラーログをアラートする
            alert(this.context.getShaderInfoLog(shader));
            return;
        }
    };
    GraphicDevice.prototype.CreateFragmentShader = function (arg_source) {
        var shader;
        shader = this.context.createShader(this.context.FRAGMENT_SHADER);
        // 生成されたシェーダにソースを割り当てる
        this.context.shaderSource(shader, arg_source);
        // シェーダをコンパイルする
        this.context.compileShader(shader);
        // シェーダが正しくコンパイルされたかチェック
        if (this.context.getShaderParameter(shader, this.context.COMPILE_STATUS)) {
            // 成功していたらシェーダを返して終了
            return shader;
        }
        else {
            console.log("fragment shader failed");
            // 失敗していたらエラーログをアラートする
            alert(this.context.getShaderInfoLog(shader));
            return;
        }
    };
    GraphicDevice.prototype.CreateTexture = function (arg_source, arg_texture) {
        // イメージオブジェクトの生成
        var img = new Image();
        // データのオンロードをトリガーにする
        img.onload = OnTexLoad(img, arg_texture, arg_source, this);
        // イメージオブジェクトのソースを指定
        img.src = arg_source;
    };
    GraphicDevice.prototype.SetVBO = function (arg_vboList) {
        // 引数として受け取った配列を処理する
        for (var i in arg_vboList) {
            // バッファをバインドする
            this.context.bindBuffer(this.context.ARRAY_BUFFER, arg_vboList[i]);
            // attributeLocationを有効にする
            this.context.enableVertexAttribArray(this.shader.attributeLocations[i]);
            // attributeLocationを通知し登録する
            this.context.vertexAttribPointer(this.shader.attributeLocations[i], this.shader.attributeStrides[i], this.context.FLOAT, false, 0, 0);
        }
    };
    GraphicDevice.prototype.OnLoadTexture = function (img, arg_texture, arg_source) {
        // テクスチャオブジェクトの生成
        var tex = this.context.createTexture();
        // テクスチャをバインドする
        this.context.bindTexture(this.context.TEXTURE_2D, tex);
        // テクスチャへイメージを適用
        this.context.texImage2D(this.context.TEXTURE_2D, 0, this.context.RGBA, this.context.RGBA, this.context.UNSIGNED_BYTE, img);
        // ミップマップを生成
        this.context.generateMipmap(this.context.TEXTURE_2D);
        // テクスチャのバインドを無効化
        this.context.bindTexture(this.context.TEXTURE_2D, null);
        arg_texture.data = tex;
        arg_texture.Loaded();
        console.log(arg_source + " loaded");
    };
    ;
    GraphicDevice.prototype.OnLoadShader = function (arg_source, arg_shader) {
        var data = arg_source.responseText;
        console.log(data);
        arg_shader = this.context.createShader(this.context.VERTEX_SHADER);
        // 生成されたシェーダにソースを割り当てる
        this.context.shaderSource(arg_shader, data);
        // シェーダをコンパイルする
        this.context.compileShader(arg_shader);
    };
    GraphicDevice.prototype.SetCameraStatus = function (arg_viewMatrix, arg_projectionMatrix, arg_cameraMatrix, arg_cameraPosition) {
        this.viewMatrix = arg_viewMatrix;
        this.projectionMatrix = arg_projectionMatrix;
        this.tempMatrix = this.projectionMatrix.Multiply(this.viewMatrix);
        this.camPosition = arg_cameraPosition;
        this.camRotationInv = (arg_cameraMatrix);
    };
    return GraphicDevice;
}());
exports.default = GraphicDevice;
function OnTexLoad(img, arg_texture, arg_source, device) {
    return function () {
        device.OnLoadTexture(img, arg_texture, arg_source);
    };
}
function OnShaderLoad(arg_source, arg_shader, device) {
    return function () {
        device.OnLoadShader(arg_source, arg_shader);
    };
}


/***/ }),

/***/ "./WebGl/Graphic/Model.ts":
/*!********************************!*\
  !*** ./WebGl/Graphic/Model.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model = /** @class */ (function () {
    function Model(isLight, isBillBoard) {
        if (isBillBoard == true) {
            if (isLight)
                this.Draw = this.Draw_BillBoard_Light;
            else
                this.Draw = this.Draw_BillBoard_NonLight;
        }
        else {
            if (isLight)
                this.Draw = this.Draw_Light;
            else
                this.Draw = this.Draw_NonLight;
        }
    }
    Model.prototype.Initialize_geom = function (arg_graphicDevice, arg_geometry, arg_material, arg_Shader, arg_transform) {
        this.graphicDevice = arg_graphicDevice;
        this.geometry = arg_geometry;
        this.materials = new Array();
        this.materials.push(arg_material);
        this.subsets = new Array();
        this.subsets.push(this.geometry.GetIndexSize());
        this.shader = arg_Shader;
        this.transform = arg_transform;
        this.lights = new Array();
    };
    Model.prototype.Initialize_mesh = function (arg_graphicDevice, arg_mesh, arg_Shader, arg_transform) {
        this.graphicDevice = arg_graphicDevice;
        this.geometry = arg_mesh.geometry;
        this.materials = arg_mesh.ary_materials;
        this.subsets = this.geometry.GetSubSet();
        this.shader = arg_Shader;
        this.transform = arg_transform;
        this.lights = new Array();
        console.log(this.subsets);
    };
    Model.prototype.SetLight = function (arg_light) {
        this.lights.push(arg_light);
    };
    Model.prototype.Draw_NonLight = function () {
        this.shader.Attach();
        var mvpMatrix = this.graphicDevice.TempMatrix.Multiply(this.transform.Matrix);
        var invMatrix = this.transform.Matrix.Inverse();
        // uniform変数の登録と描画
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[0], false, mvpMatrix.data);
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[1], false, this.transform.Matrix.data);
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[2], false, invMatrix.data);
        this.geometry.Draw();
        var offset = 0;
        for (var i = 0; i < this.subsets.length; i++) {
            this.materials[i].Attach();
            this.graphicDevice.context.drawElements(this.graphicDevice.context.TRIANGLES, this.subsets[i], this.graphicDevice.context.UNSIGNED_SHORT, offset * 2);
            offset += this.subsets[i];
        }
    };
    Model.prototype.Draw_Light = function () {
        this.shader.Attach();
        var mvpMatrix = this.graphicDevice.TempMatrix.Multiply(this.transform.Matrix);
        var invMatrix = this.transform.Matrix.Inverse();
        // uniform変数の登録と描画
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[0], false, mvpMatrix.data);
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[1], false, this.transform.Matrix.data);
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[2], false, invMatrix.data);
        this.lights.forEach(function (light) { return light.Atach(); });
        this.geometry.Draw();
        var offset = 0;
        for (var i = 0; i < this.subsets.length; i++) {
            this.materials[i].Attach();
            this.graphicDevice.context.drawElements(this.graphicDevice.context.TRIANGLES, this.subsets[i], this.graphicDevice.context.UNSIGNED_SHORT, offset * 2);
            offset += this.subsets[i];
        }
    };
    Model.prototype.Draw_BillBoard_Light = function () {
        this.shader.Attach();
        var mMatrix = this.transform.Matrix.Multiply(this.graphicDevice.CameraRotationInv);
        var mvpMatrix = this.graphicDevice.TempMatrix.Multiply(mMatrix);
        var invMatrix = this.transform.Matrix.Inverse();
        this.lights.forEach(function (light) { return light.Atach(); });
        // uniform変数の登録と描画
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[0], false, mvpMatrix.data);
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[1], false, this.transform.Matrix.data);
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[2], false, invMatrix.data);
        this.geometry.Draw();
        var offset = 0;
        for (var i = 0; i < this.subsets.length; i++) {
            this.materials[i].Attach();
            this.graphicDevice.context.drawElements(this.graphicDevice.context.TRIANGLES, this.subsets[i], this.graphicDevice.context.UNSIGNED_SHORT, offset * 2);
            offset += this.subsets[i];
        }
    };
    Model.prototype.Draw_BillBoard_NonLight = function () {
        this.shader.Attach();
        //this.transform.LookAt(this.graphicDevice.CameraPosition,new Vector3(0,1,0));
        var mMatrix = this.transform.Matrix.Multiply(this.graphicDevice.CameraRotationInv);
        var mvpMatrix = this.graphicDevice.TempMatrix.Multiply(mMatrix);
        var invMatrix = this.transform.Matrix.Inverse();
        // uniform変数の登録と描画
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[0], false, mvpMatrix.data);
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[1], false, this.transform.Matrix.data);
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[2], false, invMatrix.data);
        this.geometry.Draw();
        var offset = 0;
        for (var i = 0; i < this.subsets.length; i++) {
            this.materials[i].Attach();
            this.graphicDevice.context.drawElements(this.graphicDevice.context.TRIANGLES, this.subsets[i], this.graphicDevice.context.UNSIGNED_SHORT, offset * 2);
            offset += this.subsets[i];
        }
    };
    return Model;
}());
exports.default = Model;


/***/ }),

/***/ "./WebGl/Graphic/TextModel.ts":
/*!************************************!*\
  !*** ./WebGl/Graphic/TextModel.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TextModel = /** @class */ (function () {
    function TextModel(isBillBoard) {
        if (isBillBoard == true) {
            this.Draw = this.Draw_BillBoard_NonLight;
        }
        else {
            this.Draw = this.Draw_NonLight;
        }
    }
    TextModel.prototype.SetUVData = function (arg_uvVBO) {
        this.uvData = arg_uvVBO;
    };
    TextModel.prototype.Initialize_geom = function (arg_graphicDevice, arg_geometry, arg_material, arg_Shader, arg_transform) {
        this.graphicDevice = arg_graphicDevice;
        this.geometry = arg_geometry;
        this.materials = arg_material;
        this.indexSize = (this.geometry.GetIndexSize());
        this.shader = arg_Shader;
        this.transform = arg_transform;
    };
    TextModel.prototype.SetLight = function (arg_light) {
    };
    TextModel.prototype.Draw_NonLight = function () {
        this.shader.Attach();
        var mvpMatrix = this.graphicDevice.TempMatrix.Multiply(this.transform.Matrix);
        var invMatrix = this.transform.Matrix.Inverse();
        // uniform変数の登録と描画
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[0], false, mvpMatrix.data);
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[1], false, this.transform.Matrix.data);
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[2], false, invMatrix.data);
        this.geometry.Draw();
        this.geometry.ChangeVBO(this.uvData, 1);
        this.materials.Attach();
        this.graphicDevice.context.drawElements(this.graphicDevice.context.TRIANGLES, this.indexSize, this.graphicDevice.context.UNSIGNED_SHORT, 0);
    };
    TextModel.prototype.Draw_BillBoard_NonLight = function () {
        this.shader.Attach();
        //this.transform.LookAt(this.graphicDevice.CameraPosition,new Vector3(0,1,0));
        var mMatrix = this.transform.Matrix.Multiply(this.graphicDevice.CameraRotationInv);
        var mvpMatrix = this.graphicDevice.TempMatrix.Multiply(mMatrix);
        var invMatrix = this.transform.Matrix.Inverse();
        // uniform変数の登録と描画
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[0], false, mvpMatrix.data);
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[1], false, this.transform.Matrix.data);
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[2], false, invMatrix.data);
        this.geometry.Draw();
        this.geometry.ChangeVBO(this.uvData, 1);
        this.materials.Attach();
        this.graphicDevice.context.drawElements(this.graphicDevice.context.TRIANGLES, this.indexSize, this.graphicDevice.context.UNSIGNED_SHORT, 0);
    };
    return TextModel;
}());
exports.default = TextModel;


/***/ }),

/***/ "./WebGl/Light/PointLight.ts":
/*!***********************************!*\
  !*** ./WebGl/Light/PointLight.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Transform_1 = __importDefault(__webpack_require__(/*! ../Transform */ "./WebGl/Transform.ts"));
var PointLight = /** @class */ (function () {
    function PointLight(arg_device) {
        this.graphicDevice = arg_device;
        this.transform = new Transform_1.default();
    }
    PointLight.prototype.Atach = function () {
        this.graphicDevice.context.uniform3fv(this.graphicDevice.shader.uniformLocations[4], this.transform.Position.xyz);
    };
    return PointLight;
}());
exports.default = PointLight;


/***/ }),

/***/ "./WebGl/LoadScene.ts":
/*!****************************!*\
  !*** ./WebGl/LoadScene.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Scene_1 = __importDefault(__webpack_require__(/*! ./Scene/Scene */ "./WebGl/Scene/Scene.ts"));
var ResourceCreater_1 = __importDefault(__webpack_require__(/*! ./Tool/ResourceCreater */ "./WebGl/Tool/ResourceCreater.ts"));
var GeometryGenerator_1 = __importDefault(__webpack_require__(/*! ./Tool/GeometryGenerator */ "./WebGl/Tool/GeometryGenerator.ts"));
var Quat_1 = __importDefault(__webpack_require__(/*! ./Math/Quat */ "./WebGl/Math/Quat.ts"));
var Vector4_1 = __importDefault(__webpack_require__(/*! ./Math/Vector4 */ "./WebGl/Math/Vector4.ts"));
var Vector3_1 = __importDefault(__webpack_require__(/*! ./Math/Vector3 */ "./WebGl/Math/Vector3.ts"));
var PointLight_1 = __importDefault(__webpack_require__(/*! ./Light/PointLight */ "./WebGl/Light/PointLight.ts"));
var ModelDrawComponent_1 = __importDefault(__webpack_require__(/*! ./Component/ModelDrawComponent */ "./WebGl/Component/ModelDrawComponent.ts"));
var Vector2_1 = __importDefault(__webpack_require__(/*! ./Math/Vector2 */ "./WebGl/Math/Vector2.ts"));
var TextDrawComponent_1 = __importDefault(__webpack_require__(/*! ./Component/TextDrawComponent */ "./WebGl/Component/TextDrawComponent.ts"));
var Transform_1 = __importDefault(__webpack_require__(/*! ./Transform */ "./WebGl/Transform.ts"));
var SampleScene_1 = __importDefault(__webpack_require__(/*! ./SampleScene */ "./WebGl/SampleScene.ts"));
var PrimitiveType;
(function (PrimitiveType) {
    PrimitiveType[PrimitiveType["sphere"] = 0] = "sphere";
    PrimitiveType[PrimitiveType["box_AABB"] = 1] = "box_AABB";
    PrimitiveType[PrimitiveType["box_OBB"] = 2] = "box_OBB";
    PrimitiveType[PrimitiveType["point"] = 3] = "point";
})(PrimitiveType || (PrimitiveType = {}));
var float = /** @class */ (function () {
    function float() {
        this.data = new Float32Array(1);
    }
    return float;
}());
var LoadScene = /** @class */ (function (_super) {
    __extends(LoadScene, _super);
    function LoadScene(sceneManger) {
        var _this = _super.call(this, sceneManger) || this;
        _this.aQuaternion = new Quat_1.default().Identity();
        _this.bQuaternion = new Quat_1.default().Identity();
        _this.sQuaternion = new Quat_1.default().Identity();
        _this.zoomData = new float();
        _this.zoomDirection = 1.0;
        _this.zoomData.data[0] = 0.5;
        return _this;
    }
    LoadScene.prototype.BefLoad = function () {
        this.renderer.AddLayer();
        this.AddCamera(0, 1, "main", false, this.sceneManager.GetResourceContainer().GetTexture("loadingCamera"));
        // 頂点シェーダとフラグメントシェーダの生成
        var light = new PointLight_1.default(this.sceneManager.GetGraphicDevice());
        light.transform.Position = new Vector3_1.default(-5, -5, 10);
        //this.renderer.SetLight(light,0);
        this.renderer.SetLight(light, 1);
        this.sceneManager.GetGraphicDevice().EnableStencil();
        this.GetCamera("main").transform.Position = new Vector3_1.default(0, -3, 10);
        this.GetCamera("main").transform.LookAt(new Vector3_1.default(0, 0, 0), Vector3_1.default.yAxis);
        this.GetCamera("main").clearColor = new Vector4_1.default(0.0, 0.0, 0.0, 1.0);
        this.cube = this.gameObjectManager.AddGameObject("cube");
        this.anotherCube = this.gameObjectManager.AddGameObject("cube");
        this.projectionPlane = this.gameObjectManager.AddGameObject("projectionCube");
        //this.torus.SetComponent(new ModelDrawComponent("hsvTorus","caloryMaterial","pointLight",1)) as ModelDrawComponent;
        //this.cube.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,false)) as ModelDrawComponent;
        var tr = new Transform_1.default();
        tr.Position = new Vector3_1.default(1, 1, 1);
        var tr2 = new Transform_1.default();
        tr2.Position = new Vector3_1.default(-1, -1, 2);
        this.cube.SetComponent(new TextDrawComponent_1.default("loading", "font", "fontShader", new Vector4_1.default(0.75, 0.75, 0.25, 1), 1, true));
        //this.anotherCube.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,true)) as ModelDrawComponent;
        this.projectionPlane.SetComponent(new ModelDrawComponent_1.default(false, "plane", "loadingCameraMaterial", "texShader", 0, false));
        this.projectionPlane.transform.Scale = new Vector3_1.default(500, 500, 1);
        this.cube.transform.Position = new Vector3_1.default(0.5, 0, 0.5);
        this.anotherCube.transform.Position = new Vector3_1.default(-1, -5, 10);
        this.projectionPlane.transform.Position = new Vector3_1.default(0, 0, -1);
    };
    LoadScene.prototype.OnLoadingUpdate = function () {
    };
    LoadScene.prototype.OnLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var caloryTexture, material;
            return __generator(this, function (_a) {
                this.sceneManager.GetResourceContainer().AddShader(ResourceCreater_1.default.CreateShader('shader/PointLightVS.glsl', "shader/PointLightFS.glsl", this.sceneManager.GetGraphicDevice()), "pointLight");
                this.sceneManager.GetResourceContainer().AddShader(ResourceCreater_1.default.CreateShader('shader/UVNormalVS.glsl', "shader/DefaultFS_light.glsl", this.sceneManager.GetGraphicDevice()), "texShader_light");
                this.sceneManager.GetResourceContainer().AddShader(ResourceCreater_1.default.CreateShader('shader/UVNormalVS.glsl', "shader/ZoomBlur.glsl", this.sceneManager.GetGraphicDevice()), "zoomEffect");
                this.sceneManager.GetResourceContainer().AddShader(ResourceCreater_1.default.CreateShader('shader/UVNormalVS.glsl', "shader/DotEffect.glsl", this.sceneManager.GetGraphicDevice()), "dotEffect");
                this.sceneManager.GetResourceContainer().AddShader(ResourceCreater_1.default.CreateShader('shader/UVNormalColorVS.glsl', "shader/BlackTestFS.glsl", this.sceneManager.GetGraphicDevice()), "black");
                this.sceneManager.GetResourceContainer().AddGeometry(ResourceCreater_1.default.CreateGeometry(GeometryGenerator_1.default.CreateTorus(32, 32, 0.5, 1), false, true, true, this.sceneManager.GetGraphicDevice()), "hsvTorus");
                this.sceneManager.GetResourceContainer().AddGeometry(ResourceCreater_1.default.CreateGeometry(GeometryGenerator_1.default.CreateCube(1, new Vector4_1.default(1.0, 1.0, 1.0, 1)), true, true, true, this.sceneManager.GetGraphicDevice()), "cube");
                this.sceneManager.GetResourceContainer().AddGeometry(ResourceCreater_1.default.CreateGeometry(GeometryGenerator_1.default.CreateSphere(12, 12, 0.5, new Vector4_1.default(0.0, 0.0, 0.0, 1)), false, true, true, this.sceneManager.GetGraphicDevice()), "sphere");
                this.sceneManager.GetResourceContainer().AddGeometry(ResourceCreater_1.default.CreateGeometry(GeometryGenerator_1.default.CreatePlane(new Vector2_1.default(1, 1), false, new Vector4_1.default(1.0, 1.0, 1.0, 1)), true, false, false, this.sceneManager.GetGraphicDevice()), "plane");
                this.sceneManager.GetResourceContainer().AddGeometry(ResourceCreater_1.default.CreateGeometry(GeometryGenerator_1.default.CreatePlane(new Vector2_1.default(1, 1), false, new Vector4_1.default(1.0, 1.0, 1.0, 1)), false, true, true, this.sceneManager.GetGraphicDevice()), "floor");
                //this.sceneManger.GetResourceContainer().AddMesh(ResourceCreater.CreateMeshResourceFromFile("model/Maguro/maguro.b3m",this.sceneManger.GetResourceContainer(),this.sceneManger.GetGraphicDevice()),"maguro");
                this.sceneManager.GetResourceContainer().AddSoundFromFile("audio/kill2.wav", "kill");
                this.sceneManager.GetResourceContainer().AddSoundFromFile("audio/up_se.wav", "up");
                caloryTexture = ResourceCreater_1.default.CreateTexture('image/calory.png', this.sceneManager.GetGraphicDevice());
                this.sceneManager.GetResourceContainer().AddTexture(caloryTexture, "calory");
                this.sceneManager.GetResourceContainer().AddTextureFromFile("image/circle32.png", this.sceneManager.GetGraphicDevice());
                material = this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater_1.default.CreateMaterial(new Vector4_1.default(0.1, 0.1, 0.1, 1.0), this.sceneManager.GetGraphicDevice(), [this.sceneManager.GetResourceContainer().GetTexture("calory")]), "caloryMaterial");
                material.AddExParam(4, 3, new Vector3_1.default(5, 5, 10));
                material = this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater_1.default.CreateMaterial(new Vector4_1.default(0.1, 0.1, 0.1, 1.0), this.sceneManager.GetGraphicDevice(), [this.sceneManager.GetResourceContainer().GetTexture("image/circle32.png")]), "circleMaterial");
                material.AddExParam(4, 3, new Vector3_1.default(5, 5, 10));
                material = this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater_1.default.CreateMaterial(new Vector4_1.default(1.0, 0.5, 0.5, 1.0), this.sceneManager.GetGraphicDevice()), "red");
                material = this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater_1.default.CreateMaterial(new Vector4_1.default(0.5, 0.5, 0.5, 1.0), this.sceneManager.GetGraphicDevice()), "gray");
                material = this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater_1.default.CreateMaterial(new Vector4_1.default(0.8, 0.8, 0.8, 1.0), this.sceneManager.GetGraphicDevice()), "white");
                material = this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater_1.default.CreateMaterial(new Vector4_1.default(0.9, 0.8, 0.3, 1.0), this.sceneManager.GetGraphicDevice()), "yellow");
                material = this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater_1.default.CreateMaterial(new Vector4_1.default(0.5, 0.5, 1.0, 1.0), this.sceneManager.GetGraphicDevice()), "blue");
                material = this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater_1.default.CreateMaterial(new Vector4_1.default(0.5, 1.0, 0.5, 1.0), this.sceneManager.GetGraphicDevice()), "green");
                material = this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater_1.default.CreateMaterial(new Vector4_1.default(0.1, 0.1, 0.1, 1.0), this.sceneManager.GetGraphicDevice()), "zoomEffect");
                this.sceneManager.AddScene(new SampleScene_1.default(this.sceneManager), "sample");
                return [2 /*return*/];
            });
        });
    };
    LoadScene.prototype.OnInitialize = function () {
        if (this.isCurrent)
            this.sceneManager.ChangeScene("sample");
    };
    LoadScene.prototype.OnStart = function () {
        this.sceneManager.ChangeScene("sample");
    };
    return LoadScene;
}(Scene_1.default));
exports.default = LoadScene;


/***/ }),

/***/ "./WebGl/Math/Geometry/Box_AABB.ts":
/*!*****************************************!*\
  !*** ./WebGl/Math/Geometry/Box_AABB.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Box_AABB = /** @class */ (function () {
    function Box_AABB(arg_lengthes, arg_position) {
        this.halfLengthes = arg_lengthes.Multiply_b(0.5);
        if (arg_position)
            this.position = arg_position;
    }
    Box_AABB.prototype.Length = function (index) {
        return this.halfLengthes.data[index];
    };
    Box_AABB.prototype.GetMin = function (index) { return this.position.data[index] - this.halfLengthes.data[index]; };
    Box_AABB.prototype.GetMax = function (index) { return this.position.data[index] + this.halfLengthes.data[index]; };
    return Box_AABB;
}());
exports.default = Box_AABB;
;


/***/ }),

/***/ "./WebGl/Math/Geometry/Box_OBB.ts":
/*!****************************************!*\
  !*** ./WebGl/Math/Geometry/Box_OBB.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Box_OBB = /** @class */ (function () {
    function Box_OBB(arg_length) {
        this.halfLengthes = arg_length.Multiply(0.5);
        this.directs = new Array(3);
    }
    Box_OBB.prototype.GetDirect = function (index) {
        return this.directs[index];
    };
    Box_OBB.prototype.Length = function (index) {
        return this.halfLengthes.data[index];
    };
    Box_OBB.prototype.GetPos = function () {
        return this.position;
    };
    return Box_OBB;
}());
exports.default = Box_OBB;


/***/ }),

/***/ "./WebGl/Math/Geometry/GeometryHelper.ts":
/*!***********************************************!*\
  !*** ./WebGl/Math/Geometry/GeometryHelper.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Vector3_1 = __importDefault(__webpack_require__(/*! ../Vector3 */ "./WebGl/Math/Vector3.ts"));
function abs(arg) {
    if (arg < 0) {
        return arg * -1;
    }
    else {
        return arg;
    }
}
var GeometryHelper = /** @class */ (function () {
    function GeometryHelper() {
    }
    GeometryHelper.GetDistance = function (arg_point, arg_surfacePoint, arg_surfaceNormal) {
        return abs(arg_surfaceNormal.Dot(arg_point.Sub(arg_surfacePoint))) / arg_surfaceNormal.Length();
    };
    GeometryHelper.GetDistanceLineLine = function (arg_line, arg_otherLine) {
        var normal = arg_line.velocity.Cross(arg_otherLine.velocity).Normalize();
        return normal.Dot(arg_otherLine.point.Sub(arg_line.point));
    };
    GeometryHelper.IsHitPointLine = function (arg_point, arg_line) {
        var length = (arg_point.Sub(arg_line.point).Cross(arg_line.velocity)).Length();
        if (length) {
            return true;
        }
        else {
            return false;
        }
    };
    GeometryHelper.IsHitPointSegment = function (arg_point, arg_segment) {
        var v = arg_point.Sub(arg_segment.point);
        if (v.Cross(arg_segment.velocity).Length() && v.LengthSqr() <= arg_segment.velocity.LengthSqr()) {
            return true;
        }
        else {
            return false;
        }
    };
    GeometryHelper.GetDistancePointSegment = function (arg_point, arg_segment) {
        var v = arg_segment.GetEndPoint().Sub(arg_segment.point);
        var vp = arg_point.Sub(arg_segment.point);
        var t = v.Normalize().Dot(vp) / v.Length();
        if (t > 1) {
            return arg_segment.GetEndPoint().Sub(arg_point);
        }
        else if (t < 0) {
            return arg_segment.point.Sub(arg_point);
        }
        return v.Multiply_b(t).Sub_b(vp);
    };
    GeometryHelper.GetPolygonY = function (arg_pointA, arg_pointB, arg_pointC, objX, objZ) {
        var normal = arg_pointA.Sub(arg_pointB).Cross(arg_pointA.Sub(arg_pointC));
        if (normal.y < 0) {
            normal.Multiply(-1);
        }
        return arg_pointA.y - (normal.x * (objX - arg_pointA.x) + normal.z * (objZ - arg_pointA.z)) / normal.y;
    };
    GeometryHelper.IsHitLineLine = function (arg_linev1, arg_linev2) {
        var v3 = arg_linev2.point.Sub(arg_linev1.point);
        var normal1 = arg_linev1.velocity.Cross(arg_linev2.velocity);
        var normal2 = arg_linev1.velocity.Cross(v3);
        if (!normal2.LengthSqr()) {
            return true;
        }
        if (normal1.LengthSqr() != 0 && normal1.Cross(normal2).LengthSqr() == 0) {
            return true;
        }
        return false;
    };
    GeometryHelper.IsHitLineSurface = function (arg_line, arg_surfacePoint, arg_surfaceNormal) {
        var v1 = arg_line.point.Sub(arg_surfacePoint);
        if (v1.Dot(arg_surfaceNormal) == 0) {
            return true;
        }
        if (arg_line.velocity.Dot(arg_surfaceNormal)) {
            return true;
        }
        return false;
    };
    GeometryHelper.IsHitSegmentSurface = function (arg_segment, arg_surfacePoint, arg_surfaceNormal) {
        var v1 = arg_segment.point.Sub(arg_surfacePoint);
        var v2 = arg_segment.GetEndPoint().Sub(arg_surfacePoint);
        if (arg_surfaceNormal.Dot(v1) * arg_surfaceNormal.Dot(v2) <= 0) {
            return true;
        }
        return false;
    };
    GeometryHelper.GetDitancePointBox_AABBSqrt = function (arg_point, arg_box) {
        var SqLen = 0;
        for (var i = 0; i < 3; i++) {
            if (arg_point.data[i] < arg_box.GetMin(i))
                SqLen += (arg_point.data[i] - arg_box.GetMin(i)) * (arg_point.data[i] - arg_box.GetMin(i));
            if (arg_point.data[i] > arg_box.GetMax(i))
                SqLen += (arg_point.data[i] - arg_box.GetMax(i)) * (arg_point.data[i] - arg_box.GetMax(i));
        }
        return SqLen;
    };
    GeometryHelper.GetDitancePointBox_AABB = function (arg_point, arg_box) {
        return (GeometryHelper.GetDitancePointBox_AABBSqrt(arg_point, arg_box));
    };
    GeometryHelper.GetDitancePointBox_OBB_Static = function (arg_point, arg_box) {
        var output = new Vector3_1.default(0, 0, 0);
        for (var i = 0; i < 3; i++) {
            var L = arg_box.Length(i);
            if (L <= 0)
                continue;
            var s = (arg_point.Sub(arg_box.GetPos())).Dot(arg_box.GetDirect(i)) / L;
            // sの値から、はみ出した部分があればそのベクトルを加算
            s = abs(s);
            if (s > 1)
                output.Add_b(arg_box.GetDirect(i).Multiply((1 - s)).Multiply(L));
        }
        var outputLen = output.Length();
        //console.log(outputLen);
        return outputLen;
    };
    GeometryHelper.IsHitPointBox_OBB = function (arg_point, arg_box) {
        return !GeometryHelper.GetDitancePointBox_OBB_Static(arg_point, arg_box);
    };
    GeometryHelper.IsHitSphereBox_OBB = function (arg_sphere, arg_box) {
        return (arg_sphere.radius) >= GeometryHelper.GetDitancePointBox_OBB_Static(arg_sphere.position, arg_box);
    };
    GeometryHelper.IsHitPointBox_AABB = function (arg_point, arg_box) {
        return !GeometryHelper.GetDitancePointBox_AABB(arg_point, arg_box);
    };
    GeometryHelper.IsHitSphereBox_AABB = function (arg_sphere, arg_box) {
        return (arg_sphere.radius) >= GeometryHelper.GetDitancePointBox_AABB(arg_sphere.position, arg_box);
    };
    GeometryHelper.LengthSeparatedAxis = function (arg_sep, arg_e1, arg_e2, arg_e3) {
        if (arg_e3 === void 0) { arg_e3 = null; }
        var r1 = abs(arg_sep.Dot(arg_e1));
        var r2 = abs(arg_sep.Dot(arg_e2));
        var r3 = arg_e3 ? (abs(arg_sep.Dot(arg_e3))) : 0;
        return r1 + r2 + r3;
    };
    GeometryHelper.IsHitBox_AABB = function (arg_box, arg_otherBox) {
        var xAxis = new Vector3_1.default(1, 0, 0), Ae1 = xAxis.Multiply(arg_box.Length(0));
        var yAxis = new Vector3_1.default(0, 1, 0), Ae2 = yAxis.Multiply(arg_box.Length(1));
        var zAxis = new Vector3_1.default(0, 0, 1), Ae3 = zAxis.Multiply(arg_box.Length(2));
        var Be1 = xAxis.Multiply(arg_otherBox.Length(0));
        var Be2 = yAxis.Multiply(arg_otherBox.Length(1));
        var Be3 = zAxis.Multiply(arg_otherBox.Length(2));
        var Interval = arg_box.position.Sub(arg_otherBox.position);
        // 分離軸 : Ae1
        var rA = Ae1.Length();
        var rB = GeometryHelper.LengthSeparatedAxis(xAxis, Be1, Be2, Be3);
        var L = abs(Interval.Dot(xAxis));
        if (L > rA + rB)
            return false; // 衝突していない
        // 分離軸 : Ae2
        rA = Ae2.Length();
        rB = GeometryHelper.LengthSeparatedAxis(yAxis, Be1, Be2, Be3);
        L = abs(Interval.Dot(yAxis));
        if (L > rA + rB)
            return false;
        // 分離軸 : Ae3
        rA = Ae3.Length();
        rB = GeometryHelper.LengthSeparatedAxis(zAxis, Be1, Be2, Be3);
        L = abs(Interval.Dot(zAxis));
        if (L > rA + rB)
            return false;
        // 分離軸 : Be1
        rA = GeometryHelper.LengthSeparatedAxis(xAxis, Ae1, Ae2, Ae3);
        rB = Be1.Length();
        L = abs(Interval.Dot(xAxis));
        if (L > rA + rB)
            return false;
        // 分離軸 : Be2
        rA = GeometryHelper.LengthSeparatedAxis(yAxis, Ae1, Ae2, Ae3);
        rB = Be2.Length();
        L = abs(Interval.Dot(yAxis));
        if (L > rA + rB)
            return false;
        // 分離軸 : Be3
        rA = GeometryHelper.LengthSeparatedAxis(zAxis, Ae1, Ae2, Ae3);
        rB = Be3.Length();
        L = abs(Interval.Dot(zAxis));
        if (L > rA + rB)
            return false;
        return true;
    };
    GeometryHelper.IsHitBox_OBBBox_AABB = function (arg_box, arg_otherBox) {
        var xAxis = new Vector3_1.default(1, 0, 0), Ae1 = xAxis.Multiply(arg_box.Length(0));
        var yAxis = new Vector3_1.default(0, 1, 0), Ae2 = yAxis.Multiply(arg_box.Length(1));
        var zAxis = new Vector3_1.default(0, 0, 1), Ae3 = zAxis.Multiply(arg_box.Length(2));
        var NBe1 = arg_otherBox.GetDirect(0), Be1 = NBe1.Multiply(arg_otherBox.Length(0));
        var NBe2 = arg_otherBox.GetDirect(1), Be2 = NBe2.Multiply(arg_otherBox.Length(1));
        var NBe3 = arg_otherBox.GetDirect(2), Be3 = NBe3.Multiply(arg_otherBox.Length(2));
        var Interval = arg_box.position.Sub(arg_otherBox.GetPos());
        // 分離軸 : Ae1
        var rA = Ae1.Length();
        var rB = GeometryHelper.LengthSeparatedAxis(xAxis, Be1, Be2, Be3);
        var L = abs(Interval.Dot(xAxis));
        if (L > rA + rB)
            return false; // 衝突していない
        // 分離軸 : Ae2
        rA = Ae2.Length();
        rB = GeometryHelper.LengthSeparatedAxis(yAxis, Be1, Be2, Be3);
        L = abs(Interval.Dot(yAxis));
        if (L > rA + rB)
            return false;
        // 分離軸 : Ae3
        rA = Ae3.Length();
        rB = GeometryHelper.LengthSeparatedAxis(zAxis, Be1, Be2, Be3);
        L = abs(Interval.Dot(zAxis));
        if (L > rA + rB)
            return false;
        // 分離軸 : Be1
        rA = GeometryHelper.LengthSeparatedAxis(NBe1, Ae1, Ae2, Ae3);
        rB = Be1.Length();
        L = abs(Interval.Dot(NBe1));
        if (L > rA + rB)
            return false;
        // 分離軸 : Be2
        rA = GeometryHelper.LengthSeparatedAxis(NBe2, Ae1, Ae2, Ae3);
        rB = Be2.Length();
        L = abs(Interval.Dot(NBe2));
        if (L > rA + rB)
            return false;
        // 分離軸 : Be3
        rA = GeometryHelper.LengthSeparatedAxis(NBe3, Ae1, Ae2, Ae3);
        rB = Be3.Length();
        L = abs(Interval.Dot(NBe3));
        if (L > rA + rB)
            return false;
        return true;
    };
    GeometryHelper.GetBox_OBBContainAABBLength = function (arg_box) {
        var xAxis = new Vector3_1.default(1, 0, 0);
        var yAxis = new Vector3_1.default(0, 1, 0);
        var zAxis = new Vector3_1.default(0, 0, 1);
        var Be1 = arg_box.GetDirect(0).Multiply(arg_box.Length(0));
        var Be2 = arg_box.GetDirect(1).Multiply(arg_box.Length(1));
        var Be3 = arg_box.GetDirect(2).Multiply(arg_box.Length(2));
        return new Vector3_1.default(GeometryHelper.LengthSeparatedAxis(xAxis, Be1, Be2, Be3), GeometryHelper.LengthSeparatedAxis(yAxis, Be1, Be2, Be3), GeometryHelper.LengthSeparatedAxis(zAxis, Be1, Be2, Be3));
    };
    GeometryHelper.IsHitBox_OBB = function (arg_box, arg_otherBox) {
        // 各方向ベクトルの確保
        // （N***:標準化方向ベクトル）
        var NAe1 = arg_box.GetDirect(0), Ae1 = NAe1.Multiply(arg_box.Length(0));
        var NAe2 = arg_box.GetDirect(1), Ae2 = NAe2.Multiply(arg_box.Length(1));
        var NAe3 = arg_box.GetDirect(2), Ae3 = NAe3.Multiply(arg_box.Length(2));
        var NBe1 = arg_otherBox.GetDirect(0), Be1 = NBe1.Multiply(arg_otherBox.Length(0));
        var NBe2 = arg_otherBox.GetDirect(1), Be2 = NBe2.Multiply(arg_otherBox.Length(1));
        var NBe3 = arg_otherBox.GetDirect(2), Be3 = NBe3.Multiply(arg_otherBox.Length(2));
        var Interval = arg_box.GetPos().Sub(arg_otherBox.GetPos());
        // 分離軸 : Ae1
        var rA = Ae1.Length();
        var rB = GeometryHelper.LengthSeparatedAxis(NAe1, Be1, Be2, Be3);
        var L = abs(Interval.Dot(NAe1));
        if (L > rA + rB)
            return false; // 衝突していない
        // 分離軸 : Ae2
        rA = Ae2.Length();
        rB = GeometryHelper.LengthSeparatedAxis(NAe2, Be1, Be2, Be3);
        L = abs(Interval.Dot(NAe2));
        if (L > rA + rB)
            return false;
        // 分離軸 : Ae3
        rA = Ae3.Length();
        rB = GeometryHelper.LengthSeparatedAxis(NAe3, Be1, Be2, Be3);
        L = abs(Interval.Dot(NAe3));
        if (L > rA + rB)
            return false;
        // 分離軸 : Be1
        rA = GeometryHelper.LengthSeparatedAxis(NBe1, Ae1, Ae2, Ae3);
        rB = Be1.Length();
        L = abs(Interval.Dot(NBe1));
        if (L > rA + rB)
            return false;
        // 分離軸 : Be2
        rA = GeometryHelper.LengthSeparatedAxis(NBe2, Ae1, Ae2, Ae3);
        rB = Be2.Length();
        L = abs(Interval.Dot(NBe2));
        if (L > rA + rB)
            return false;
        // 分離軸 : Be3
        rA = GeometryHelper.LengthSeparatedAxis(NBe3, Ae1, Ae2, Ae3);
        rB = Be3.Length();
        L = abs(Interval.Dot(NBe3));
        if (L > rA + rB)
            return false;
        // 分離軸 : C11
        var Cross = NAe1.Cross(NBe1);
        rA = GeometryHelper.LengthSeparatedAxis(Cross, Ae2, Ae3);
        rB = GeometryHelper.LengthSeparatedAxis(Cross, Be2, Be3);
        L = abs(Interval.Dot(Cross));
        if (L > rA + rB)
            return false;
        // 分離軸 : C12
        Cross = NAe1.Cross(NBe2);
        rA = GeometryHelper.LengthSeparatedAxis(Cross, Ae2, Ae3);
        rB = GeometryHelper.LengthSeparatedAxis(Cross, Be1, Be3);
        L = abs(Interval.Dot(Cross));
        if (L > rA + rB)
            return false;
        // 分離軸 : C13
        Cross = NAe1.Cross(NBe3);
        rA = GeometryHelper.LengthSeparatedAxis(Cross, Ae2, Ae3);
        rB = GeometryHelper.LengthSeparatedAxis(Cross, Be1, Be2);
        L = abs(Interval.Dot(Cross));
        if (L > rA + rB)
            return false;
        // 分離軸 : C21
        Cross = NAe2.Cross(NBe1);
        rA = GeometryHelper.LengthSeparatedAxis(Cross, Ae1, Ae3);
        rB = GeometryHelper.LengthSeparatedAxis(Cross, Be2, Be3);
        L = abs(Interval.Dot(Cross));
        if (L > rA + rB)
            return false;
        // 分離軸 : C22
        Cross = NAe2.Cross(NBe2);
        rA = GeometryHelper.LengthSeparatedAxis(Cross, Ae1, Ae3);
        rB = GeometryHelper.LengthSeparatedAxis(Cross, Be1, Be3);
        L = abs(Interval.Dot(Cross));
        if (L > rA + rB)
            return false;
        // 分離軸 : C23
        Cross = NAe2.Cross(NBe3);
        rA = GeometryHelper.LengthSeparatedAxis(Cross, Ae1, Ae3);
        rB = GeometryHelper.LengthSeparatedAxis(Cross, Be1, Be2);
        L = abs(Interval.Dot(Cross));
        if (L > rA + rB)
            return false;
        // 分離軸 : C31
        Cross = NAe3.Cross(NBe1);
        rA = GeometryHelper.LengthSeparatedAxis(Cross, Ae1, Ae2);
        rB = GeometryHelper.LengthSeparatedAxis(Cross, Be2, Be3);
        L = abs(Interval.Dot(Cross));
        if (L > rA + rB)
            return false;
        // 分離軸 : C32
        Cross = NAe3.Cross(NBe2);
        rA = GeometryHelper.LengthSeparatedAxis(Cross, Ae1, Ae2);
        rB = GeometryHelper.LengthSeparatedAxis(Cross, Be1, Be3);
        L = abs(Interval.Dot(Cross));
        if (L > rA + rB)
            return false;
        // 分離軸 : C33
        Cross = NAe3.Cross(NBe3);
        rA = GeometryHelper.LengthSeparatedAxis(Cross, Ae1, Ae2);
        rB = GeometryHelper.LengthSeparatedAxis(Cross, Be1, Be2);
        L = abs(Interval.Dot(Cross));
        if (L > rA + rB)
            return false;
        return true;
    };
    GeometryHelper.IsHitSphereSphere = function (arg_sphere, arg_otherSphere) {
        var distance = (arg_sphere.position.Sub(arg_otherSphere.position)).Length();
        var border = arg_sphere.radius + arg_otherSphere.radius;
        return distance <= border;
    };
    GeometryHelper.IsHitPointSphere = function (arg_point, arg_otherSphere) {
        var distance = (arg_point.Sub(arg_otherSphere.position)).Length();
        return distance <= arg_otherSphere.radius;
    };
    return GeometryHelper;
}());
exports.default = GeometryHelper;


/***/ }),

/***/ "./WebGl/Math/Geometry/Sphere.ts":
/*!***************************************!*\
  !*** ./WebGl/Math/Geometry/Sphere.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Sphere = /** @class */ (function () {
    function Sphere(arg_r, arg_p, arg_s) {
        this.radius = arg_r;
        this.initRadius = arg_r;
        this.position = arg_p;
        this.radius = arg_r * arg_s;
    }
    return Sphere;
}());
exports.default = Sphere;
;


/***/ }),

/***/ "./WebGl/Math/Matrix.ts":
/*!******************************!*\
  !*** ./WebGl/Math/Matrix.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Quat_1 = __importDefault(__webpack_require__(/*! ./Quat */ "./WebGl/Math/Quat.ts"));
var Matrix4x4 = /** @class */ (function () {
    function Matrix4x4() {
        this.data = new Float32Array(16);
    }
    Matrix4x4.prototype.Identity = function () {
        this.data[0] = 1;
        this.data[1] = 0;
        this.data[2] = 0;
        this.data[3] = 0;
        this.data[4] = 0;
        this.data[5] = 1;
        this.data[6] = 0;
        this.data[7] = 0;
        this.data[8] = 0;
        this.data[9] = 0;
        this.data[10] = 1;
        this.data[11] = 0;
        this.data[12] = 0;
        this.data[13] = 0;
        this.data[14] = 0;
        this.data[15] = 1;
        return this;
    };
    Matrix4x4.prototype.Clone = function () {
        var output = new Matrix4x4();
        for (var i = 0; i < 16; i++) {
            output.data[i] = this.data[i];
        }
        return output;
    };
    Matrix4x4.prototype.Multiply = function (other) {
        var output = new Matrix4x4();
        var a = this.data[0], b = this.data[1], c = this.data[2], d = this.data[3], e = this.data[4], f = this.data[5], g = this.data[6], h = this.data[7], i = this.data[8], j = this.data[9], k = this.data[10], l = this.data[11], m = this.data[12], n = this.data[13], o = this.data[14], p = this.data[15], A = other.data[0], B = other.data[1], C = other.data[2], D = other.data[3], E = other.data[4], F = other.data[5], G = other.data[6], H = other.data[7], I = other.data[8], J = other.data[9], K = other.data[10], L = other.data[11], M = other.data[12], N = other.data[13], O = other.data[14], P = other.data[15];
        output.data[0] = A * a + B * e + C * i + D * m;
        output.data[1] = A * b + B * f + C * j + D * n;
        output.data[2] = A * c + B * g + C * k + D * o;
        output.data[3] = A * d + B * h + C * l + D * p;
        output.data[4] = E * a + F * e + G * i + H * m;
        output.data[5] = E * b + F * f + G * j + H * n;
        output.data[6] = E * c + F * g + G * k + H * o;
        output.data[7] = E * d + F * h + G * l + H * p;
        output.data[8] = I * a + J * e + K * i + L * m;
        output.data[9] = I * b + J * f + K * j + L * n;
        output.data[10] = I * c + J * g + K * k + L * o;
        output.data[11] = I * d + J * h + K * l + L * p;
        output.data[12] = M * a + N * e + O * i + P * m;
        output.data[13] = M * b + N * f + O * j + P * n;
        output.data[14] = M * c + N * g + O * k + P * o;
        output.data[15] = M * d + N * h + O * l + P * p;
        return output;
    };
    Matrix4x4.prototype.Multiply_b = function (other) {
        var a = this.data[0], b = this.data[1], c = this.data[2], d = this.data[3], e = this.data[4], f = this.data[5], g = this.data[6], h = this.data[7], i = this.data[8], j = this.data[9], k = this.data[10], l = this.data[11], m = this.data[12], n = this.data[13], o = this.data[14], p = this.data[15], A = other.data[0], B = other.data[1], C = other.data[2], D = other.data[3], E = other.data[4], F = other.data[5], G = other.data[6], H = other.data[7], I = other.data[8], J = other.data[9], K = other.data[10], L = other.data[11], M = other.data[12], N = other.data[13], O = other.data[14], P = other.data[15];
        this.data[0] = A * a + B * e + C * i + D * m;
        this.data[1] = A * b + B * f + C * j + D * n;
        this.data[2] = A * c + B * g + C * k + D * o;
        this.data[3] = A * d + B * h + C * l + D * p;
        this.data[4] = E * a + F * e + G * i + H * m;
        this.data[5] = E * b + F * f + G * j + H * n;
        this.data[6] = E * c + F * g + G * k + H * o;
        this.data[7] = E * d + F * h + G * l + H * p;
        this.data[8] = I * a + J * e + K * i + L * m;
        this.data[9] = I * b + J * f + K * j + L * n;
        this.data[10] = I * c + J * g + K * k + L * o;
        this.data[11] = I * d + J * h + K * l + L * p;
        this.data[12] = M * a + N * e + O * i + P * m;
        this.data[13] = M * b + N * f + O * j + P * n;
        this.data[14] = M * c + N * g + O * k + P * o;
        this.data[15] = M * d + N * h + O * l + P * p;
        return this;
    };
    Matrix4x4.prototype.Scale = function (arg_scale) {
        var output = new Matrix4x4();
        output.data[0] = this.data[0] * arg_scale.x;
        output.data[1] = this.data[1] * arg_scale.x;
        output.data[2] = this.data[2] * arg_scale.x;
        output.data[3] = this.data[3] * arg_scale.x;
        output.data[4] = this.data[4] * arg_scale.y;
        output.data[5] = this.data[5] * arg_scale.y;
        output.data[6] = this.data[6] * arg_scale.y;
        output.data[7] = this.data[7] * arg_scale.y;
        output.data[8] = this.data[8] * arg_scale.z;
        output.data[9] = this.data[9] * arg_scale.z;
        output.data[10] = this.data[10] * arg_scale.z;
        output.data[11] = this.data[11] * arg_scale.z;
        output.data[12] = this.data[12];
        output.data[13] = this.data[13];
        output.data[14] = this.data[14];
        output.data[15] = this.data[15];
        return output;
    };
    Matrix4x4.prototype.Scale_b = function (arg_scale) {
        this.data[0] = this.data[0] * arg_scale.x;
        this.data[1] = this.data[1] * arg_scale.x;
        this.data[2] = this.data[2] * arg_scale.x;
        this.data[3] = this.data[3] * arg_scale.x;
        this.data[4] = this.data[4] * arg_scale.y;
        this.data[5] = this.data[5] * arg_scale.y;
        this.data[6] = this.data[6] * arg_scale.y;
        this.data[7] = this.data[7] * arg_scale.y;
        this.data[8] = this.data[8] * arg_scale.z;
        this.data[9] = this.data[9] * arg_scale.z;
        this.data[10] = this.data[10] * arg_scale.z;
        this.data[11] = this.data[11] * arg_scale.z;
        this.data[12] = this.data[12];
        this.data[13] = this.data[13];
        this.data[14] = this.data[14];
        this.data[15] = this.data[15];
        return this;
    };
    Matrix4x4.prototype.Translate = function (arg_translate) {
        var output = new Matrix4x4();
        output.data[0] = this.data[0];
        output.data[1] = this.data[1];
        output.data[2] = this.data[2];
        output.data[3] = this.data[3];
        output.data[4] = this.data[4];
        output.data[5] = this.data[5];
        output.data[6] = this.data[6];
        output.data[7] = this.data[7];
        output.data[8] = this.data[8];
        output.data[9] = this.data[9];
        output.data[10] = this.data[10];
        output.data[11] = this.data[11];
        output.data[12] = this.data[0] * arg_translate.x + this.data[4] * arg_translate.y + this.data[8] * arg_translate.z + this.data[12];
        output.data[13] = this.data[1] * arg_translate.x + this.data[5] * arg_translate.y + this.data[9] * arg_translate.z + this.data[13];
        output.data[14] = this.data[2] * arg_translate.x + this.data[6] * arg_translate.y + this.data[10] * arg_translate.z + this.data[14];
        output.data[15] = this.data[3] * arg_translate.x + this.data[7] * arg_translate.y + this.data[11] * arg_translate.z + this.data[15];
        return output;
    };
    Matrix4x4.prototype.Translate_b = function (arg_translate) {
        this.data[12] = this.data[0] * arg_translate.x + this.data[4] * arg_translate.y + this.data[8] * arg_translate.z + this.data[12];
        this.data[13] = this.data[1] * arg_translate.x + this.data[5] * arg_translate.y + this.data[9] * arg_translate.z + this.data[13];
        this.data[14] = this.data[2] * arg_translate.x + this.data[6] * arg_translate.y + this.data[10] * arg_translate.z + this.data[14];
        this.data[15] = this.data[3] * arg_translate.x + this.data[7] * arg_translate.y + this.data[11] * arg_translate.z + this.data[15];
        return this;
    };
    Matrix4x4.prototype.Rotate = function (arg_angle, arg_axis) {
        var output = new Matrix4x4();
        var sq = arg_axis.Length();
        if (!sq) {
            return null;
        }
        var a = arg_axis.x, b = arg_axis.y, c = arg_axis.z;
        if (sq != 1) {
            sq = 1 / sq;
            a *= sq;
            b *= sq;
            c *= sq;
        }
        var d = Math.sin(arg_angle), e = Math.cos(arg_angle), f = 1 - e, g = this.data[0], h = this.data[1], i = this.data[2], j = this.data[3], k = this.data[4], l = this.data[5], m = this.data[6], n = this.data[7], o = this.data[8], p = this.data[9], q = this.data[10], r = this.data[11], s = a * a * f + e, t = b * a * f + c * d, u = c * a * f - b * d, v = a * b * f - c * d, w = b * b * f + e, x = c * b * f + a * d, y = a * c * f + b * d, z = b * c * f - a * d, A = c * c * f + e;
        if (arg_angle) {
            if (this.data != output.data) {
                output.data[12] = this.data[12];
                output.data[13] = this.data[13];
                output.data[14] = this.data[14];
                output.data[15] = this.data[15];
            }
        }
        else {
            output.data = this.data;
        }
        output.data[0] = g * s + k * t + o * u;
        output.data[1] = h * s + l * t + p * u;
        output.data[2] = i * s + m * t + q * u;
        output.data[3] = j * s + n * t + r * u;
        output.data[4] = g * v + k * w + o * x;
        output.data[5] = h * v + l * w + p * x;
        output.data[6] = i * v + m * w + q * x;
        output.data[7] = j * v + n * w + r * x;
        output.data[8] = g * y + k * z + o * A;
        output.data[9] = h * y + l * z + p * A;
        output.data[10] = i * y + m * z + q * A;
        output.data[11] = j * y + n * z + r * A;
        return output;
    };
    Matrix4x4.prototype.Rotate_b = function (arg_angle, arg_axis) {
        var sq = arg_axis.Length();
        if (!sq) {
            return null;
        }
        var a = arg_axis.x, b = arg_axis.y, c = arg_axis.z;
        if (sq != 1) {
            sq = 1 / sq;
            a *= sq;
            b *= sq;
            c *= sq;
        }
        var d = Math.sin(arg_angle), e = Math.cos(arg_angle), f = 1 - e, g = this.data[0], h = this.data[1], i = this.data[2], j = this.data[3], k = this.data[4], l = this.data[5], m = this.data[6], n = this.data[7], o = this.data[8], p = this.data[9], q = this.data[10], r = this.data[11], s = a * a * f + e, t = b * a * f + c * d, u = c * a * f - b * d, v = a * b * f - c * d, w = b * b * f + e, x = c * b * f + a * d, y = a * c * f + b * d, z = b * c * f - a * d, A = c * c * f + e;
        this.data[0] = g * s + k * t + o * u;
        this.data[1] = h * s + l * t + p * u;
        this.data[2] = i * s + m * t + q * u;
        this.data[3] = j * s + n * t + r * u;
        this.data[4] = g * v + k * w + o * x;
        this.data[5] = h * v + l * w + p * x;
        this.data[6] = i * v + m * w + q * x;
        this.data[7] = j * v + n * w + r * x;
        this.data[8] = g * y + k * z + o * A;
        this.data[9] = h * y + l * z + p * A;
        this.data[10] = i * y + m * z + q * A;
        this.data[11] = j * y + n * z + r * A;
        return this;
    };
    Matrix4x4.prototype.LookAt = function (arg_eye, arg_centerPos, arg_upAxis) {
        var eyeX = arg_eye.x, eyeY = arg_eye.y, eyeZ = arg_eye.z, upX = arg_upAxis.x, upY = arg_upAxis.y, upZ = arg_upAxis.z, centerX = arg_centerPos.x, centerY = arg_centerPos.y, centerZ = arg_centerPos.z;
        if (eyeX == centerX && eyeY == centerY && eyeZ == centerZ) {
            return this.Identity();
        }
        var x0, x1, x2, y0, y1, y2, z0, z1, z2, l;
        z0 = eyeX - arg_centerPos.x;
        z1 = eyeY - arg_centerPos.y;
        z2 = eyeZ - arg_centerPos.z;
        l = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
        z0 *= l;
        z1 *= l;
        z2 *= l;
        x0 = upY * z2 - upZ * z1;
        x1 = upZ * z0 - upX * z2;
        x2 = upX * z1 - upY * z0;
        l = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
        if (!l) {
            x0 = 0;
            x1 = 0;
            x2 = 0;
        }
        else {
            l = 1 / l;
            x0 *= l;
            x1 *= l;
            x2 *= l;
        }
        y0 = z1 * x2 - z2 * x1;
        y1 = z2 * x0 - z0 * x2;
        y2 = z0 * x1 - z1 * x0;
        l = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
        if (!l) {
            y0 = 0;
            y1 = 0;
            y2 = 0;
        }
        else {
            l = 1 / l;
            y0 *= l;
            y1 *= l;
            y2 *= l;
        }
        this.data[0] = x0;
        this.data[1] = y0;
        this.data[2] = z0;
        this.data[3] = 0;
        this.data[4] = x1;
        this.data[5] = y1;
        this.data[6] = z1;
        this.data[7] = 0;
        this.data[8] = x2;
        this.data[9] = y2;
        this.data[10] = z2;
        this.data[11] = 0;
        this.data[12] = -(x0 * eyeX + x1 * eyeY + x2 * eyeZ);
        this.data[13] = -(y0 * eyeX + y1 * eyeY + y2 * eyeZ);
        this.data[14] = -(z0 * eyeX + z1 * eyeY + z2 * eyeZ);
        this.data[15] = 1;
        return this;
    };
    Matrix4x4.prototype.Perspective = function (fovy, aspect, near, far) {
        var t = near * Math.tan(fovy * Math.PI / 360);
        var r = t * aspect;
        var a = r * 2, b = t * 2, c = far - near;
        this.data[0] = near * 2 / a;
        this.data[1] = 0;
        this.data[2] = 0;
        this.data[3] = 0;
        this.data[4] = 0;
        this.data[5] = near * 2 / b;
        this.data[6] = 0;
        this.data[7] = 0;
        this.data[8] = 0;
        this.data[9] = 0;
        this.data[10] = -(far + near) / c;
        this.data[11] = -1;
        this.data[12] = 0;
        this.data[13] = 0;
        this.data[14] = -(far * near * 2) / c;
        this.data[15] = 0;
        return this;
    };
    Matrix4x4.prototype.Ortho = function (left, right, top, bottom, near, far) {
        var h = (right - left);
        var v = (top - bottom);
        var d = (far - near);
        this.data[0] = 2 / h;
        this.data[1] = 0;
        this.data[2] = 0;
        this.data[3] = 0;
        this.data[4] = 0;
        this.data[5] = 2 / v;
        this.data[6] = 0;
        this.data[7] = 0;
        this.data[8] = 0;
        this.data[9] = 0;
        this.data[10] = -2 / d;
        this.data[11] = 0;
        this.data[12] = -(left + right) / h;
        this.data[13] = -(top + bottom) / v;
        this.data[14] = -(far + near) / d;
        this.data[15] = 1;
        return this;
    };
    Matrix4x4.prototype.Transpose = function () {
        var output = new Matrix4x4();
        output.data[0] = this.data[0];
        output.data[1] = this.data[4];
        output.data[2] = this.data[8];
        output.data[3] = this.data[12];
        output.data[4] = this.data[1];
        output.data[5] = this.data[5];
        output.data[6] = this.data[9];
        output.data[7] = this.data[13];
        output.data[8] = this.data[2];
        output.data[9] = this.data[6];
        output.data[10] = this.data[10];
        output.data[11] = this.data[14];
        output.data[12] = this.data[3];
        output.data[13] = this.data[7];
        output.data[14] = this.data[11];
        output.data[15] = this.data[15];
        return output;
    };
    Matrix4x4.prototype.Transpose_b = function () {
        var temp = new Matrix4x4();
        temp.data[0] = this.data[0];
        temp.data[1] = this.data[4];
        temp.data[2] = this.data[8];
        temp.data[3] = this.data[12];
        temp.data[4] = this.data[1];
        temp.data[5] = this.data[5];
        temp.data[6] = this.data[9];
        temp.data[7] = this.data[13];
        temp.data[8] = this.data[2];
        temp.data[9] = this.data[6];
        temp.data[10] = this.data[10];
        temp.data[11] = this.data[14];
        temp.data[12] = this.data[3];
        temp.data[13] = this.data[7];
        temp.data[14] = this.data[11];
        temp.data[15] = this.data[15];
        this.data = temp.data;
        return this;
    };
    Matrix4x4.prototype.Inverse = function () {
        var output = new Matrix4x4();
        var a = this.data[0], b = this.data[1], c = this.data[2], d = this.data[3], e = this.data[4], f = this.data[5], g = this.data[6], h = this.data[7], i = this.data[8], j = this.data[9], k = this.data[10], l = this.data[11], m = this.data[12], n = this.data[13], o = this.data[14], p = this.data[15], q = a * f - b * e, r = a * g - c * e, s = a * h - d * e, t = b * g - c * f, u = b * h - d * f, v = c * h - d * g, w = i * n - j * m, x = i * o - k * m, y = i * p - l * m, z = j * o - k * n, A = j * p - l * n, B = k * p - l * o, ivd = 1 / (q * B - r * A + s * z + t * y - u * x + v * w);
        output.data[0] = (f * B - g * A + h * z) * ivd;
        output.data[1] = (-b * B + c * A - d * z) * ivd;
        output.data[2] = (n * v - o * u + p * t) * ivd;
        output.data[3] = (-j * v + k * u - l * t) * ivd;
        output.data[4] = (-e * B + g * y - h * x) * ivd;
        output.data[5] = (a * B - c * y + d * x) * ivd;
        output.data[6] = (-m * v + o * s - p * r) * ivd;
        output.data[7] = (i * v - k * s + l * r) * ivd;
        output.data[8] = (e * A - f * y + h * w) * ivd;
        output.data[9] = (-a * A + b * y - d * w) * ivd;
        output.data[10] = (m * u - n * s + p * q) * ivd;
        output.data[11] = (-i * u + j * s - l * q) * ivd;
        output.data[12] = (-e * z + f * x - g * w) * ivd;
        output.data[13] = (a * z - b * x + c * w) * ivd;
        output.data[14] = (-m * t + n * r - o * q) * ivd;
        output.data[15] = (i * t - j * r + k * q) * ivd;
        return output;
    };
    Matrix4x4.prototype.Inverse_b = function () {
        var a = this.data[0], b = this.data[1], c = this.data[2], d = this.data[3], e = this.data[4], f = this.data[5], g = this.data[6], h = this.data[7], i = this.data[8], j = this.data[9], k = this.data[10], l = this.data[11], m = this.data[12], n = this.data[13], o = this.data[14], p = this.data[15], q = a * f - b * e, r = a * g - c * e, s = a * h - d * e, t = b * g - c * f, u = b * h - d * f, v = c * h - d * g, w = i * n - j * m, x = i * o - k * m, y = i * p - l * m, z = j * o - k * n, A = j * p - l * n, B = k * p - l * o, ivd = 1 / (q * B - r * A + s * z + t * y - u * x + v * w);
        this.data[0] = (f * B - g * A + h * z) * ivd;
        this.data[1] = (-b * B + c * A - d * z) * ivd;
        this.data[2] = (n * v - o * u + p * t) * ivd;
        this.data[3] = (-j * v + k * u - l * t) * ivd;
        this.data[4] = (-e * B + g * y - h * x) * ivd;
        this.data[5] = (a * B - c * y + d * x) * ivd;
        this.data[6] = (-m * v + o * s - p * r) * ivd;
        this.data[7] = (i * v - k * s + l * r) * ivd;
        this.data[8] = (e * A - f * y + h * w) * ivd;
        this.data[9] = (-a * A + b * y - d * w) * ivd;
        this.data[10] = (m * u - n * s + p * q) * ivd;
        this.data[11] = (-i * u + j * s - l * q) * ivd;
        this.data[12] = (-e * z + f * x - g * w) * ivd;
        this.data[13] = (a * z - b * x + c * w) * ivd;
        this.data[14] = (-m * t + n * r - o * q) * ivd;
        this.data[15] = (i * t - j * r + k * q) * ivd;
        return this;
    };
    Matrix4x4.prototype.ToQuaternion = function () {
        var elem = new Array(4);
        elem[0] = this.data[0] - this.data[5] - this.data[10] + 1.0;
        elem[1] = -this.data[0] + this.data[5] - this.data[10] + 1.0;
        elem[2] = -this.data[0] - this.data[5] + this.data[10] + 1.0;
        elem[3] = this.data[0] + this.data[5] + this.data[10] + 1.0;
        var biggestIndex = 0;
        for (var i = 1; i < 4; i++) {
            if (elem[i] > elem[biggestIndex])
                biggestIndex = i;
        }
        var outQuat = new Quat_1.default();
        var v = Math.sqrt(elem[biggestIndex]) * 0.5;
        outQuat.data[biggestIndex] = v;
        var mult = 0.25 / v;
        switch (biggestIndex) {
            case 0: // x
                outQuat.data[1] = (this.data[1] + this.data[4]) * mult;
                outQuat.data[2] = (this.data[2] + this.data[8]) * mult;
                outQuat.data[3] = (this.data[9] - this.data[6]) * mult;
                break;
            case 1: // y
                outQuat.data[0] = (this.data[1] + this.data[4]) * mult;
                outQuat.data[2] = (this.data[9] + this.data[6]) * mult;
                outQuat.data[3] = (this.data[2] - this.data[8]) * mult;
                break;
            case 2: // z
                outQuat.data[0] = (this.data[2] + this.data[8]) * mult;
                outQuat.data[1] = (this.data[9] + this.data[6]) * mult;
                outQuat.data[3] = (this.data[4] - this.data[1]) * mult;
                break;
            case 3: // w
                outQuat.data[0] = (this.data[9] - this.data[6]) * mult;
                outQuat.data[1] = (this.data[2] - this.data[8]) * mult;
                outQuat.data[2] = (this.data[4] - this.data[1]) * mult;
                break;
        }
        return outQuat;
    };
    return Matrix4x4;
}());
exports.default = Matrix4x4;


/***/ }),

/***/ "./WebGl/Math/Quat.ts":
/*!****************************!*\
  !*** ./WebGl/Math/Quat.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Matrix_1 = __importDefault(__webpack_require__(/*! ./Matrix */ "./WebGl/Math/Matrix.ts"));
var Vector3_1 = __importDefault(__webpack_require__(/*! ./Vector3 */ "./WebGl/Math/Vector3.ts"));
var Quaternion = /** @class */ (function () {
    function Quaternion() {
        this.data = new Float32Array(4);
    }
    Quaternion.prototype.Identity = function () {
        this.data[0] = 0;
        this.data[1] = 0;
        this.data[2] = 0;
        this.data[3] = 1;
        return this;
    };
    Quaternion.prototype.Inverse = function () {
        var output = new Quaternion();
        output.data[0] = -this.data[0];
        output.data[1] = -this.data[1];
        output.data[2] = -this.data[2];
        output.data[3] = this.data[3];
        return output;
    };
    Quaternion.prototype.Inverse_b = function () {
        this.data[0] = -this.data[0];
        this.data[1] = -this.data[1];
        this.data[2] = -this.data[2];
        this.data[3] = this.data[3];
        return this;
    };
    Quaternion.prototype.Normalize = function () {
        var output = new Quaternion();
        output.data[0] = this.data[0];
        output.data[1] = this.data[1];
        output.data[2] = this.data[2];
        output.data[3] = this.data[3];
        var x = output.data[0], y = output.data[1], z = output.data[2], w = output.data[3];
        var l = Math.sqrt(x * x + y * y + z * z + w * w);
        if (l === 0) {
            output.data[0] = 0;
            output.data[1] = 0;
            output.data[2] = 0;
            output.data[3] = 0;
        }
        else {
            l = 1 / l;
            output.data[0] = x * l;
            output.data[1] = y * l;
            output.data[2] = z * l;
            output.data[3] = w * l;
        }
        return output;
    };
    Quaternion.prototype.Normalize_b = function () {
        var l = Math.sqrt(this.data[0] * this.data[0] + this.data[1] * this.data[1] + this.data[2] * this.data[2] + this.data[3] * this.data[3]);
        if (l === 0) {
            this.data[0] = 0;
            this.data[1] = 0;
            this.data[2] = 0;
            this.data[3] = 0;
        }
        else {
            l = 1 / l;
            this.data[0] = this.data[0] * l;
            this.data[1] = this.data[1] * l;
            this.data[2] = this.data[2] * l;
            this.data[3] = this.data[3] * l;
        }
        return this;
    };
    Quaternion.prototype.Multiply = function (arg_quat) {
        var output = new Quaternion();
        var ax = this.data[0], ay = this.data[1], az = this.data[2], aw = this.data[3];
        var bx = arg_quat.data[0], by = arg_quat.data[1], bz = arg_quat.data[2], bw = arg_quat.data[3];
        output.data[0] = ax * bw + aw * bx + ay * bz - az * by;
        output.data[1] = ay * bw + aw * by + az * bx - ax * bz;
        output.data[2] = az * bw + aw * bz + ax * by - ay * bx;
        output.data[3] = aw * bw - ax * bx - ay * by - az * bz;
        return output;
    };
    Quaternion.prototype.Multiply_b = function (arg_quat) {
        var ax = this.data[0], ay = this.data[1], az = this.data[2], aw = this.data[3];
        var bx = arg_quat.data[0], by = arg_quat.data[1], bz = arg_quat.data[2], bw = arg_quat.data[3];
        this.data[0] = ax * bw + aw * bx + ay * bz - az * by;
        this.data[1] = ay * bw + aw * by + az * bx - ax * bz;
        this.data[2] = az * bw + aw * bz + ax * by - ay * bx;
        this.data[3] = aw * bw - ax * bx - ay * by - az * bz;
        return this;
    };
    Quaternion.prototype.Rotate = function (arg_angle, arg_axis) {
        var sq = arg_axis.Length();
        if (!sq) {
            return null;
        }
        var a = arg_axis.x, b = arg_axis.y, c = arg_axis.z;
        if (sq != 1) {
            sq = 1 / sq;
            a *= sq;
            b *= sq;
            c *= sq;
        }
        var s = Math.sin(arg_angle * 0.5);
        this.data[0] = a * s;
        this.data[1] = b * s;
        this.data[2] = c * s;
        this.data[3] = Math.cos(arg_angle * 0.5);
        return this;
    };
    Quaternion.prototype.ToVector3 = function (arg_vec) {
        var output = new Vector3_1.default(0, 0, 0);
        var qp = new Quaternion();
        var qq = new Quaternion();
        var qr = this.Inverse();
        qp.data[0] = arg_vec.x;
        qp.data[1] = arg_vec.y;
        qp.data[2] = arg_vec.z;
        qq = qr.Multiply(qp);
        qr = qq.Multiply(this);
        output.data[0] = qr.data[0];
        output.data[1] = qr.data[1];
        output.data[2] = qr.data[2];
        return output;
    };
    Quaternion.prototype.ToMatrix4x4 = function () {
        var output = new Matrix_1.default();
        var x = this.data[0], y = this.data[1], z = this.data[2], w = this.data[3];
        var x2 = x + x, y2 = y + y, z2 = z + z;
        var xx = x * x2, xy = x * y2, xz = x * z2;
        var yy = y * y2, yz = y * z2, zz = z * z2;
        var wx = w * x2, wy = w * y2, wz = w * z2;
        output.data[0] = 1 - (yy + zz);
        output.data[1] = xy - wz;
        output.data[2] = xz + wy;
        output.data[3] = 0;
        output.data[4] = xy + wz;
        output.data[5] = 1 - (xx + zz);
        output.data[6] = yz - wx;
        output.data[7] = 0;
        output.data[8] = xz - wy;
        output.data[9] = yz + wx;
        output.data[10] = 1 - (xx + yy);
        output.data[11] = 0;
        output.data[12] = 0;
        output.data[13] = 0;
        output.data[14] = 0;
        output.data[15] = 1;
        return output;
    };
    Quaternion.prototype.SphereLerp = function (arg_quat, time) {
        var output = new Quaternion();
        var ht = this.data[0] * arg_quat.data[0] + this.data[1] * arg_quat.data[1] + this.data[2] * arg_quat.data[2] + this.data[3] * arg_quat.data[3];
        var hs = 1.0 - ht * ht;
        if (hs <= 0.0) {
            output.data[0] = this.data[0];
            output.data[1] = this.data[1];
            output.data[2] = this.data[2];
            output.data[3] = this.data[3];
        }
        else {
            hs = Math.sqrt(hs);
            if (Math.abs(hs) < 0.0001) {
                output.data[0] = (this.data[0] * 0.5 + arg_quat.data[0] * 0.5);
                output.data[1] = (this.data[1] * 0.5 + arg_quat.data[1] * 0.5);
                output.data[2] = (this.data[2] * 0.5 + arg_quat.data[2] * 0.5);
                output.data[3] = (this.data[3] * 0.5 + arg_quat.data[3] * 0.5);
            }
            else {
                var ph = Math.acos(ht);
                var pt = ph * time;
                var t0 = Math.sin(ph - pt) / hs;
                var t1 = Math.sin(pt) / hs;
                output.data[0] = this.data[0] * t0 + arg_quat.data[0] * t1;
                output.data[1] = this.data[1] * t0 + arg_quat.data[1] * t1;
                output.data[2] = this.data[2] * t0 + arg_quat.data[2] * t1;
                output.data[3] = this.data[3] * t0 + arg_quat.data[3] * t1;
            }
        }
        return output;
    };
    Quaternion.prototype.SphereLerp_b = function (arg_quat, time) {
        var ht = this.data[0] * arg_quat.data[0] + this.data[1] * arg_quat.data[1] + this.data[2] * arg_quat.data[2] + this.data[3] * arg_quat.data[3];
        var hs = 1.0 - ht * ht;
        if (hs <= 0.0) {
            return this;
        }
        else {
            hs = Math.sqrt(hs);
            if (Math.abs(hs) < 0.0001) {
                this.data[0] = (this.data[0] * 0.5 + arg_quat.data[0] * 0.5);
                this.data[1] = (this.data[1] * 0.5 + arg_quat.data[1] * 0.5);
                this.data[2] = (this.data[2] * 0.5 + arg_quat.data[2] * 0.5);
                this.data[3] = (this.data[3] * 0.5 + arg_quat.data[3] * 0.5);
            }
            else {
                var ph = Math.acos(ht);
                var pt = ph * time;
                var t0 = Math.sin(ph - pt) / hs;
                var t1 = Math.sin(pt) / hs;
                this.data[0] = this.data[0] * t0 + arg_quat.data[0] * t1;
                this.data[1] = this.data[1] * t0 + arg_quat.data[1] * t1;
                this.data[2] = this.data[2] * t0 + arg_quat.data[2] * t1;
                this.data[3] = this.data[3] * t0 + arg_quat.data[3] * t1;
            }
        }
        return this;
    };
    return Quaternion;
}());
exports.default = Quaternion;


/***/ }),

/***/ "./WebGl/Math/Vector2.ts":
/*!*******************************!*\
  !*** ./WebGl/Math/Vector2.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        this.data = new Float32Array(2);
        this.data[0] = x;
        this.data[1] = y;
    }
    Object.defineProperty(Vector2.prototype, "x", {
        get: function () {
            return this.data[0];
        },
        set: function (arg_v) {
            this.data[0] = arg_v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "y", {
        get: function () {
            return this.data[1];
        },
        set: function (arg_v) {
            this.data[1] = arg_v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "xy", {
        get: function () {
            return this.data;
        },
        enumerable: false,
        configurable: true
    });
    Vector2.prototype.Add = function (arg_other) {
        var output = new Vector2(0, 0);
        output.data[0] = this.data[0] + arg_other.data[0];
        output.data[1] = this.data[1] + arg_other.data[1];
        return output;
    };
    Vector2.prototype.Add_b = function (arg_other) {
        this.data[0] = this.data[0] + arg_other.data[0];
        this.data[1] = this.data[1] + arg_other.data[1];
        return this;
    };
    Vector2.prototype.Sub = function (arg_other) {
        var output = new Vector2(0, 0);
        output.data[0] = this.data[0] - arg_other.data[0];
        output.data[1] = this.data[1] - arg_other.data[1];
        return output;
    };
    Vector2.prototype.Sub_b = function (arg_other) {
        this.data[0] = this.data[0] - arg_other.data[0];
        this.data[1] = this.data[1] - arg_other.data[1];
        return this;
    };
    Vector2.prototype.Multiply = function (arg_scalar) {
        var output = new Vector2(0, 0);
        output.data[0] = this.data[0] * arg_scalar;
        output.data[1] = this.data[1] * arg_scalar;
        return output;
    };
    Vector2.prototype.Multiply_b = function (arg_scalar) {
        this.data[0] *= arg_scalar;
        this.data[1] *= arg_scalar;
        return this;
    };
    Vector2.prototype.Div = function (arg_scalar) {
        var output = new Vector2(0, 0);
        output.data[0] = this.data[0] / arg_scalar;
        output.data[1] = this.data[1] / arg_scalar;
        return output;
    };
    Vector2.prototype.Div_b = function (arg_scalar) {
        this.data[0] /= arg_scalar;
        this.data[1] /= arg_scalar;
        return this;
    };
    Vector2.prototype.Length = function () {
        return Math.sqrt(this.data[0] * this.data[0] + this.data[1] * this.data[1]);
    };
    Vector2.prototype.LengthSqr = function () {
        return this.data[0] * this.data[0] + this.data[1] * this.data[1];
    };
    Vector2.prototype.Dot = function (arg_other) {
        return this.data[0] * arg_other.data[0] + this.data[1] * arg_other.data[1];
    };
    Vector2.prototype.Cross = function (arg_other) {
        return this.x * arg_other.y - this.y * arg_other.x;
    };
    Vector2.prototype.Normalize = function () {
        var output = new Vector2(this.data[0], this.data[1]);
        var length = this.Length();
        output.Div_b(length);
        return output;
    };
    Vector2.prototype.Normalize_b = function () {
        var length = this.Length();
        this.Div_b(length);
        return this;
    };
    return Vector2;
}());
exports.default = Vector2;


/***/ }),

/***/ "./WebGl/Math/Vector3.ts":
/*!*******************************!*\
  !*** ./WebGl/Math/Vector3.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector3 = /** @class */ (function () {
    function Vector3(x, y, z) {
        this.data = new Float32Array(3);
        this.data[0] = x;
        this.data[1] = y;
        this.data[2] = z;
    }
    Object.defineProperty(Vector3.prototype, "x", {
        get: function () {
            return this.data[0];
        },
        set: function (arg_other) {
            this.data[0] = arg_other;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "y", {
        get: function () {
            return this.data[1];
        },
        set: function (arg_other) {
            this.data[1] = arg_other;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "z", {
        get: function () {
            return this.data[2];
        },
        set: function (arg_other) {
            this.data[2] = arg_other;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "xyz", {
        get: function () {
            return this.data;
        },
        enumerable: false,
        configurable: true
    });
    Vector3.prototype.Add = function (arg_other) {
        var output = new Vector3(0, 0, 0);
        output.data[0] = this.data[0] + arg_other.data[0];
        output.data[1] = this.data[1] + arg_other.data[1];
        output.data[2] = this.data[2] + arg_other.data[2];
        return output;
    };
    Vector3.prototype.Add_b = function (arg_other) {
        this.data[0] = this.data[0] + arg_other.data[0];
        this.data[1] = this.data[1] + arg_other.data[1];
        this.data[2] = this.data[2] + arg_other.data[2];
        return this;
    };
    Vector3.prototype.AddX_b = function (value) {
        this.data[0] += value;
        return this;
    };
    Vector3.prototype.AddY = function (value) {
        var output = this.Clone();
        output.data[1] += value;
        return output;
    };
    Vector3.prototype.AddY_b = function (value) {
        this.data[1] += value;
        return this;
    };
    Vector3.prototype.AddZ_b = function (value) {
        this.data[2] += value;
        return this;
    };
    Vector3.prototype.Sub = function (arg_other) {
        var output = new Vector3(0, 0, 0);
        output.data[0] = this.data[0] - arg_other.data[0];
        output.data[1] = this.data[1] - arg_other.data[1];
        output.data[2] = this.data[2] - arg_other.data[2];
        return output;
    };
    Vector3.prototype.Sub_b = function (arg_other) {
        this.data[0] = this.data[0] - arg_other.data[0];
        this.data[1] = this.data[1] - arg_other.data[1];
        this.data[2] = this.data[2] - arg_other.data[2];
        return this;
    };
    Vector3.prototype.Multiply = function (arg_scalar) {
        var output = new Vector3(0, 0, 0);
        output.data[0] = this.data[0] * arg_scalar;
        output.data[1] = this.data[1] * arg_scalar;
        output.data[2] = this.data[2] * arg_scalar;
        return output;
    };
    Vector3.prototype.Multiply_Vec3 = function (arg_vector) {
        var output = new Vector3(0, 0, 0);
        output.data[0] = this.data[0] * arg_vector.data[0];
        output.data[1] = this.data[1] * arg_vector.data[1];
        output.data[2] = this.data[2] * arg_vector.data[2];
        return output;
    };
    Vector3.prototype.Multiply_b = function (arg_scalar) {
        this.data[0] *= arg_scalar;
        this.data[1] *= arg_scalar;
        this.data[2] *= arg_scalar;
        return this;
    };
    Vector3.prototype.Multiply_Vec3_b = function (arg_vector) {
        this.data[0] = this.data[0] * arg_vector.data[0];
        this.data[1] = this.data[1] * arg_vector.data[1];
        this.data[2] = this.data[2] * arg_vector.data[2];
        return this;
    };
    Vector3.prototype.Multiply_Matrix = function (arg_matrix) {
        var output = new Vector3(0, 0, 0);
        // output.data[0]=this.data[0]*arg_matrix.data[0]+this.data[0]*arg_matrix.data[4]+this.data[0]*arg_matrix.data[8]+this.data[0]*arg_matrix.data[12];
        // output.data[1]=this.data[1]*arg_matrix.data[1]+this.data[1]*arg_matrix.data[5]+this.data[1]*arg_matrix.data[9]+this.data[1]*arg_matrix.data[13];
        // output.data[2]=this.data[2]*arg_matrix.data[2]+this.data[2]*arg_matrix.data[6]+this.data[2]*arg_matrix.data[10]+this.data[2]*arg_matrix.data[14];
        output.data[0] = this.data[0] * arg_matrix.data[0] + this.data[1] * arg_matrix.data[4] + this.data[2] * arg_matrix.data[8] + arg_matrix.data[12];
        output.data[1] = this.data[0] * arg_matrix.data[1] + this.data[1] * arg_matrix.data[5] + this.data[2] * arg_matrix.data[9] + arg_matrix.data[13];
        output.data[2] = this.data[0] * arg_matrix.data[2] + this.data[1] * arg_matrix.data[6] + this.data[2] * arg_matrix.data[10] + arg_matrix.data[14];
        return output;
    };
    Vector3.prototype.Div = function (arg_scalar) {
        var output = new Vector3(0, 0, 0);
        output.data[0] = this.data[0] / arg_scalar;
        output.data[1] = this.data[1] / arg_scalar;
        output.data[2] = this.data[2] / arg_scalar;
        return output;
    };
    Vector3.prototype.Div_b = function (arg_scalar) {
        this.data[0] /= arg_scalar;
        this.data[1] /= arg_scalar;
        this.data[2] /= arg_scalar;
        return this;
    };
    Vector3.prototype.Length = function () {
        return Math.sqrt(this.data[0] * this.data[0] + this.data[1] * this.data[1] + this.data[2] * this.data[2]);
    };
    Vector3.prototype.LengthSqr = function () {
        return this.data[0] * this.data[0] + this.data[1] * this.data[1] + this.data[2] * this.data[2];
    };
    Vector3.prototype.Dot = function (arg_other) {
        return this.data[0] * arg_other.data[0] + this.data[1] * arg_other.data[1] + this.data[2] * arg_other.data[2];
    };
    Vector3.prototype.Cross = function (arg_other) {
        var output = new Vector3(0, 0, 0);
        output.data[0] = this.data[1] * arg_other.data[2] - this.data[2] * arg_other.data[1];
        output.data[1] = this.data[2] * arg_other.data[0] - this.data[0] * arg_other.data[2];
        output.data[2] = this.data[0] * arg_other.data[1] - this.data[1] * arg_other.data[0];
        return output;
    };
    Vector3.prototype.Normalize = function () {
        var output = new Vector3(0, 0, 0);
        output.data[0] = this.data[0];
        output.data[1] = this.data[1];
        output.data[2] = this.data[2];
        var length = this.Length();
        output.Div_b(length);
        return output;
    };
    Vector3.prototype.Normalize_b = function () {
        var length = this.Length();
        this.Div_b(length);
        return this;
    };
    Vector3.prototype.Clone = function () {
        return new Vector3(this.data[0], this.data[1], this.data[2]);
    };
    Vector3.xAxis = new Vector3(1, 0, 0);
    Vector3.yAxis = new Vector3(0, 1, 0);
    Vector3.zAxis = new Vector3(0, 0, 1);
    return Vector3;
}());
exports.default = Vector3;


/***/ }),

/***/ "./WebGl/Math/Vector4.ts":
/*!*******************************!*\
  !*** ./WebGl/Math/Vector4.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector4 = /** @class */ (function () {
    function Vector4(x, y, z, w) {
        this.data = new Float32Array(4);
        this.data[0] = x;
        this.data[1] = y;
        this.data[2] = z;
        this.data[3] = w;
    }
    Object.defineProperty(Vector4.prototype, "x", {
        get: function () {
            return this.data[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector4.prototype, "y", {
        get: function () {
            return this.data[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector4.prototype, "z", {
        get: function () {
            return this.data[2];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector4.prototype, "w", {
        get: function () {
            return this.data[3];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector4.prototype, "xyzw", {
        get: function () {
            return this.data;
        },
        enumerable: false,
        configurable: true
    });
    Vector4.prototype.Set = function (x, y, z, w) {
        this.data[0] = x;
        this.data[1] = y;
        this.data[2] = z;
        this.data[3] = w;
    };
    Vector4.prototype.Add = function (arg_other) {
        var output = new Vector4(0, 0, 0, 0);
        output.data[0] = this.data[0] + arg_other.data[0];
        output.data[1] = this.data[1] + arg_other.data[1];
        output.data[2] = this.data[2] + arg_other.data[2];
        output.data[3] = this.data[3] + arg_other.data[3];
        return output;
    };
    Vector4.prototype.Add_b = function (arg_other) {
        this.data[0] = this.data[0] + arg_other.data[0];
        this.data[1] = this.data[1] + arg_other.data[1];
        this.data[2] = this.data[2] + arg_other.data[2];
        this.data[3] = this.data[3] + arg_other.data[3];
        return this;
    };
    Vector4.prototype.Sub = function (arg_other) {
        var output = new Vector4(0, 0, 0, 0);
        output.data[0] = this.data[0] - arg_other.data[0];
        output.data[1] = this.data[1] - arg_other.data[1];
        output.data[2] = this.data[2] - arg_other.data[2];
        output.data[3] = this.data[3] - arg_other.data[3];
        return output;
    };
    Vector4.prototype.Sub_b = function (arg_other) {
        this.data[0] = this.data[0] - arg_other.data[0];
        this.data[1] = this.data[1] - arg_other.data[1];
        this.data[2] = this.data[2] - arg_other.data[2];
        this.data[3] = this.data[3] - arg_other.data[3];
        return this;
    };
    Vector4.prototype.Multiply = function (arg_scalar) {
        var output = new Vector4(0, 0, 0, 0);
        output.data[0] = this.data[0] * arg_scalar;
        output.data[1] = this.data[1] * arg_scalar;
        output.data[2] = this.data[2] * arg_scalar;
        output.data[3] = this.data[3] * arg_scalar;
        return output;
    };
    Vector4.prototype.Multiply_b = function (arg_scalar) {
        this.data[0] *= arg_scalar;
        this.data[1] *= arg_scalar;
        this.data[2] *= arg_scalar;
        this.data[3] *= arg_scalar;
        return this;
    };
    Vector4.prototype.Div = function (arg_scalar) {
        var output = new Vector4(0, 0, 0, 0);
        output.data[0] = this.data[0] / arg_scalar;
        output.data[1] = this.data[1] / arg_scalar;
        output.data[2] = this.data[2] / arg_scalar;
        output.data[3] = this.data[3] / arg_scalar;
        return output;
    };
    Vector4.prototype.Div_b = function (arg_scalar) {
        this.data[0] /= arg_scalar;
        this.data[1] /= arg_scalar;
        this.data[2] /= arg_scalar;
        this.data[3] /= arg_scalar;
        return this;
    };
    Vector4.prototype.Length = function () {
        return Math.sqrt(this.data[0] * this.data[0] + this.data[1] * this.data[1] + this.data[2] * this.data[2] + this.data[3] * this.data[3]);
    };
    Vector4.prototype.LengthSqr = function () {
        return this.data[0] * this.data[0] + this.data[1] * this.data[1] + this.data[2] * this.data[2] + this.data[3] * this.data[3];
    };
    Vector4.prototype.Dot = function (arg_other) {
        return this.data[0] * arg_other.data[0] + this.data[1] * arg_other.data[1] + this.data[2] * arg_other.data[2] + this.data[3] * arg_other.data[3];
    };
    Vector4.prototype.Normalize = function () {
        var output = new Vector4(this.data[0], this.data[1], this.data[2], this.data[3]);
        var length = this.Length();
        output.Div_b(length);
        return output;
    };
    Vector4.prototype.Normalize_b = function () {
        var length = this.Length();
        this.Div_b(length);
        return this;
    };
    return Vector4;
}());
exports.default = Vector4;


/***/ }),

/***/ "./WebGl/Parts/Collision/CollisionManager.ts":
/*!***************************************************!*\
  !*** ./WebGl/Parts/Collision/CollisionManager.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Vector3_1 = __importDefault(__webpack_require__(/*! ../../Math/Vector3 */ "./WebGl/Math/Vector3.ts"));
var Octree_1 = __importDefault(__webpack_require__(/*! ./Octree */ "./WebGl/Parts/Collision/Octree.ts"));
var Layer = /** @class */ (function () {
    function Layer() {
        this.octree = new Octree_1.default(6, new Vector3_1.default(-10, -30, -30), new Vector3_1.default(80, 30, 30));
    }
    Layer.prototype.Regist = function (arg_registObj) {
        return this.octree.RegistCollisionObj(arg_registObj);
    };
    Layer.prototype.UnRegist = function (arg_ID) {
        this.octree.UnRegistCollisionObj(arg_ID);
    };
    Layer.prototype.Check = function () {
        this.octree.Update();
        var list_objStack = new Array();
        var vec_collisionObjects = new Array();
        this.octree.CreateCollisionObjectList(0, vec_collisionObjects, list_objStack);
        //console.log(vec_collisionObjects);
        for (var i = 0; i < vec_collisionObjects.length; i += 2) {
            vec_collisionObjects[i].HitCheck(vec_collisionObjects[i + 1]);
        }
    };
    Layer.prototype.Release = function () {
        this.octree.Release();
    };
    return Layer;
}());
var CollisionManager = /** @class */ (function () {
    function CollisionManager() {
        this.layers = new Array();
        this.layers.push(new Layer());
    }
    CollisionManager.prototype.Regist = function (arg_registObj, layer) {
        if (this.layers.length <= layer) {
            layer = 0;
        }
        return this.layers[layer].Regist(arg_registObj);
    };
    CollisionManager.prototype.UnRegist = function (arg_ID, layer) {
        if (this.layers.length <= layer) {
            layer = 0;
        }
        this.layers[layer].UnRegist(arg_ID);
    };
    CollisionManager.prototype.AddLayer = function () {
        this.layers.push(new Layer());
    };
    CollisionManager.prototype.Check = function () {
        this.layers.forEach(function (layer) { return layer.Check(); });
    };
    CollisionManager.prototype.Release = function () {
        this.layers.forEach(function (layer) { return layer.Release(); });
        this.layers.length = 0;
    };
    return CollisionManager;
}());
exports.default = CollisionManager;


/***/ }),

/***/ "./WebGl/Parts/Collision/CollisionObject.ts":
/*!**************************************************!*\
  !*** ./WebGl/Parts/Collision/CollisionObject.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CollisionObject = /** @class */ (function () {
    function CollisionObject(arg_obj, arg_prim) {
        this.p_cell = null;
        this.object = arg_obj;
        this.collisionPrimitive = arg_prim;
    }
    CollisionObject.prototype.Remove = function () {
        if (this.p_cell == null)
            return false;
        if (this.shp_next) {
            this.shp_next.shp_bef = this.shp_bef;
        }
        if (this.shp_bef) {
            this.shp_bef.shp_next = this.shp_next;
        }
        this.p_cell.OnRemove(this);
        this.shp_next = null;
        this.shp_bef = null;
        this.p_cell = null;
        return true;
    };
    CollisionObject.prototype.RegistCell = function (arg_pCell) {
        this.p_cell = arg_pCell;
    };
    CollisionObject.prototype.GetBefObj = function () {
        return this.shp_bef;
    };
    CollisionObject.prototype.GetNextObj = function () {
        return this.shp_next;
    };
    CollisionObject.prototype.Update = function () {
        this.collisionPrimitive.Update();
    };
    CollisionObject.prototype.HitCheck = function (arg_collisionObject) {
        if (arg_collisionObject.collisionPrimitive.IsHit(this.collisionPrimitive)) {
            this.object.Hit(arg_collisionObject.object);
            arg_collisionObject.object.Hit(this.object);
        }
    };
    return CollisionObject;
}());
exports.default = CollisionObject;


/***/ }),

/***/ "./WebGl/Parts/Collision/OctCell.ts":
/*!******************************************!*\
  !*** ./WebGl/Parts/Collision/OctCell.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OctCell = /** @class */ (function () {
    function OctCell() {
    }
    OctCell.prototype.Release = function () {
        while (this.shp_head != null && this.shp_head.shp_next != null) {
            this.shp_head = this.shp_head.shp_next;
            this.shp_head.shp_bef = null;
        }
        this.shp_head = null;
    };
    OctCell.prototype.RegistObject = function (arg_obj) {
        if (arg_obj.p_cell == this || (arg_obj == null))
            return;
        arg_obj.Remove();
        arg_obj.p_cell = this;
        if (this.shp_head) {
            arg_obj.shp_next = this.shp_head;
            this.shp_head.shp_bef = arg_obj;
            this.shp_head = arg_obj;
        }
        this.shp_head = arg_obj;
    };
    OctCell.prototype.OnRemove = function (arg_remove) {
        if ((this.shp_head == arg_remove) && arg_remove) {
            this.shp_head = this.shp_head.shp_next;
        }
    };
    OctCell.prototype.GetHead = function () {
        return this.shp_head;
    };
    return OctCell;
}());
exports.default = OctCell;


/***/ }),

/***/ "./WebGl/Parts/Collision/Octree.ts":
/*!*****************************************!*\
  !*** ./WebGl/Parts/Collision/Octree.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Vector3_1 = __importDefault(__webpack_require__(/*! ../../Math/Vector3 */ "./WebGl/Math/Vector3.ts"));
var ID_1 = __importDefault(__webpack_require__(/*! ../ID */ "./WebGl/Parts/ID.ts"));
var OctCell_1 = __importDefault(__webpack_require__(/*! ./OctCell */ "./WebGl/Parts/Collision/OctCell.ts"));
var MaxLevel = 7;
var LEVEL_FLAG = [(111 << 0), (111 << 3), (111 << 6), (111 << 9), (111 << 12), (111 << 15), (111 << 18), (111 << 21), (111 << 24), (111 << 27),];
var OctreeHelper = /** @class */ (function () {
    function OctreeHelper() {
    }
    OctreeHelper.BitSeparate = function (n) {
        var s = n;
        s = (s | s << 8) & 0x0000f00f;
        s = (s | s << 4) & 0x000c30c3;
        s = (s | s << 2) & 0x00249249;
        return s;
    };
    OctreeHelper.GetLevel = function (arg_flag, arg_level) {
        var out = 1;
        for (var i = 0; i < arg_level; i++) {
            var Check = (arg_flag >> (i * 3)) & 0x7;
            if (Check != 0)
                out = i + 1;
        }
        return out;
    };
    return OctreeHelper;
}());
;
var CollisionLayer = /** @class */ (function () {
    function CollisionLayer(arg_level, arg_minPos, arg_maxPos) {
        this.OctPow = Array(MaxLevel + 1);
        this.OctPowSevenDevided = Array(MaxLevel + 1);
        if (arg_level <= MaxLevel)
            this.maxLevel = arg_level;
        else {
            this.maxLevel = MaxLevel;
        }
        this.rangeMax = arg_maxPos;
        this.rangeMin = arg_minPos;
        this.width = this.rangeMax.Sub(this.rangeMin);
        this.OctPow[0] = 1;
        this.OctPowSevenDevided[0] = 0;
        for (var i = 1; i < MaxLevel + 1; i++) {
            this.OctPow[i] = this.OctPow[i - 1] * 8;
            this.OctPowSevenDevided[i] = (this.OctPow[i] - 1) / 7;
        }
        this.maxCellNum = this.OctPowSevenDevided[MaxLevel - 1];
        this.unit = this.width.Div((1 << this.maxLevel));
        console.log(this.unit);
        this.ary_cells = new Array(this.maxCellNum);
        this.CreateCell(0);
        this.vec_shp_collisionObjs = new Array();
        this.vec_index = new Array();
    }
    CollisionLayer.prototype.Release = function () {
        this.vec_shp_collisionObjs.length = 0;
        this.vec_index.length = 0;
        for (var i = 0; i < this.maxCellNum; i++) {
            if (this.ary_cells[i])
                this.ary_cells[i].Release();
        }
        this.ary_cells.length = 0;
    };
    CollisionLayer.prototype.RegistCollisionObj = function (arg_collisionObj) {
        var id = new ID_1.default(this.vec_shp_collisionObjs.length - 1);
        this.vec_shp_collisionObjs.push(arg_collisionObj);
        this.vec_index.push(id);
        return id;
    };
    CollisionLayer.prototype.UnRegistCollisionObj = function (arg_index) {
        var index = arg_index.num;
        if (index >= this.vec_shp_collisionObjs.length) {
            return;
        }
        this.vec_shp_collisionObjs[index].Remove();
        this.vec_shp_collisionObjs.splice(index, 1);
        this.vec_index.splice(index, 1);
        for (var i = index - 1; i < this.vec_index.length; i++) {
            this.vec_index[i].num--;
        }
    };
    CollisionLayer.prototype.Initialize = function () {
    };
    CollisionLayer.prototype.Update = function () {
        this.RegistOctree();
    };
    CollisionLayer.prototype.RegistOctree = function () {
        for (var itr = 0; itr < this.vec_shp_collisionObjs.length; itr++) {
            var minPoint = new Vector3_1.default(0, 0, 0), maxPoint = new Vector3_1.default(0, 0, 0);
            this.vec_shp_collisionObjs[itr].collisionPrimitive.GetMaxPointAndMinPoint(maxPoint, minPoint);
            var cellNum = this.GetMortonSpace(minPoint, maxPoint);
            if (cellNum > this.maxCellNum) {
                continue;
            }
            if (!this.ary_cells[cellNum]) {
                this.CreateCell(cellNum);
            }
            this.ary_cells[cellNum].RegistObject(this.vec_shp_collisionObjs[itr]);
        }
    };
    CollisionLayer.prototype.Get3DMortonNumber = function (x, y, z) {
        return OctreeHelper.BitSeparate(x) | OctreeHelper.BitSeparate(y) << 1 | OctreeHelper.BitSeparate(z) << 2;
    };
    CollisionLayer.prototype.Get3DMortonNumber_Vec3 = function (arg_position) {
        return this.Get3DMortonNumber(((arg_position.x - this.rangeMin.x) / this.unit.x), ((arg_position.y - this.rangeMin.y) / this.unit.y), ((arg_position.z - this.rangeMin.z) / this.unit.z));
    };
    CollisionLayer.prototype.GetMortonSpace = function (arg_minPos, arg_maxPos) {
        var maxSpace = this.Get3DMortonNumber_Vec3(arg_maxPos);
        var levelCheckFlag = this.Get3DMortonNumber_Vec3(arg_minPos) ^ maxSpace;
        var level = OctreeHelper.GetLevel(levelCheckFlag, this.maxLevel);
        var num = (maxSpace >> ((level) * 3));
        num += this.OctPowSevenDevided[this.maxLevel - level];
        return num;
    };
    CollisionLayer.prototype.CreateCollisionObjectList = function (arg_cellNum, arg_output, arg_stack) {
        var objItr = this.ary_cells[arg_cellNum].GetHead();
        //var i=0;
        while (objItr != null) {
            var rObjItr = objItr.shp_next;
            while (rObjItr != null) {
                // 衝突リスト作成
                arg_output.push(objItr);
                arg_output.push(rObjItr);
                rObjItr = rObjItr.shp_next;
            }
            // ② 衝突スタックとの衝突リスト作成
            for (var itr = 0; itr < arg_stack.length; itr++) {
                arg_output.push(objItr);
                arg_output.push(arg_stack[itr]);
            }
            objItr = objItr.shp_next;
        }
        //console.log(i);
        var ChildFlag = false;
        // ③ 子空間
        var ObjNum = 0;
        var i, nextCellNum;
        for (i = 0; i < 8; i++) {
            nextCellNum = arg_cellNum * 8 + 1 + i;
            if (nextCellNum < this.maxCellNum && this.ary_cells[arg_cellNum * 8 + 1 + i]) {
                if (!ChildFlag) {
                    objItr = this.ary_cells[arg_cellNum].GetHead();
                    while (objItr) {
                        arg_stack.push(objItr);
                        ObjNum++;
                        objItr = objItr.shp_next;
                    }
                }
                ChildFlag = true;
                this.CreateCollisionObjectList(arg_cellNum * 8 + 1 + i, arg_output, arg_stack);
            }
        }
        // ⑤ スタックからオブジェクトを外す
        if (ChildFlag) {
            for (i = 0; i < ObjNum; i++)
                arg_stack.pop();
        }
    };
    CollisionLayer.prototype.CreateCell = function (arg_cellNum) {
        while (!this.ary_cells[arg_cellNum]) {
            // 指定の要素番号に空間を新規作成
            this.ary_cells[arg_cellNum] = new OctCell_1.default();
            // 親空間にジャンプ
            arg_cellNum = (arg_cellNum - 1) >> 3;
            if (arg_cellNum >= this.maxCellNum)
                break;
        }
    };
    return CollisionLayer;
}());
exports.default = CollisionLayer;
;


/***/ }),

/***/ "./WebGl/Parts/GameObjectIDManager.ts":
/*!********************************************!*\
  !*** ./WebGl/Parts/GameObjectIDManager.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ID_1 = __importDefault(__webpack_require__(/*! ./ID */ "./WebGl/Parts/ID.ts"));
var map_IDs = new Map();
var GameObjectIDManager = /** @class */ (function () {
    function GameObjectIDManager() {
    }
    GameObjectIDManager.GetID = function (arg_IDName) {
        if (!map_IDs[arg_IDName]) {
            map_IDs[arg_IDName] = new ID_1.default(map_IDs.keys.length);
        }
        return map_IDs[arg_IDName];
    };
    return GameObjectIDManager;
}());
exports.default = GameObjectIDManager;


/***/ }),

/***/ "./WebGl/Parts/GameTime.ts":
/*!*********************************!*\
  !*** ./WebGl/Parts/GameTime.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameTime = /** @class */ (function () {
    function GameTime() {
        this.time = new Date().getTime();
        this.absFrame = 0;
        this.relFrame = 0;
        this.timePase = 1.0;
    }
    GameTime.prototype.Count = function () {
        this.absFrame++;
        this.relFrame += this.timePase;
    };
    Object.defineProperty(GameTime.prototype, "elapsedTime", {
        get: function () {
            return this.time - new Date().getTime();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTime.prototype, "AbsoluteFrame", {
        get: function () {
            return this.absFrame;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTime.prototype, "RelativeFrame", {
        get: function () {
            return this.relFrame;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTime.prototype, "TimePase", {
        get: function () {
            return this.timePase;
        },
        set: function (arg_timePase) {
            this.timePase = arg_timePase;
        },
        enumerable: false,
        configurable: true
    });
    return GameTime;
}());
exports.default = GameTime;


/***/ }),

/***/ "./WebGl/Parts/ID.ts":
/*!***************************!*\
  !*** ./WebGl/Parts/ID.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ID = /** @class */ (function () {
    function ID(arg_num) {
        this.num = arg_num;
    }
    ID.prototype.Equal = function (other) {
        return this.num == other.num;
    };
    return ID;
}());
exports.default = ID;


/***/ }),

/***/ "./WebGl/Parts/ModelCreater.ts":
/*!*************************************!*\
  !*** ./WebGl/Parts/ModelCreater.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = __importDefault(__webpack_require__(/*! ../Graphic/Model */ "./WebGl/Graphic/Model.ts"));
var ResourceCreater_1 = __importDefault(__webpack_require__(/*! ../Tool/ResourceCreater */ "./WebGl/Tool/ResourceCreater.ts"));
var GeometryGenerator_1 = __importDefault(__webpack_require__(/*! ../Tool/GeometryGenerator */ "./WebGl/Tool/GeometryGenerator.ts"));
var TextModel_1 = __importDefault(__webpack_require__(/*! ../Graphic/TextModel */ "./WebGl/Graphic/TextModel.ts"));
var CharMap = new Map([
    [" ", 0], ["!", 1], ['"', 2], ["#", 3], ["$", 4], ["%", 5], ["&", 6], ["'", 7], ["(", 8], [")", 9],
    ["*", 10], ["+", 11], [',', 12], ["-", 13], [".", 14], ["/", 15], ["0", 16], ["1", 17], ["2", 18], ["3", 19],
    ["4", 20], ["5", 21], ['6', 22], ["7", 23], ["8", 24], ["9", 25], [":", 26], [";", 27], ["<", 28], ["=", 29],
    [">", 30], ["?", 31], ['@', 32], ["A", 33], ["B", 34], ["C", 35], ["D", 36], ["E", 37], ["F", 38], ["G", 39],
    ["H", 40], ["I", 41], ['J', 42], ["K", 43], ["L", 44], ["M", 45], ["N", 46], ["O", 47], ["P", 48], ["Q", 49],
    ["R", 50], ["S", 51], ['T', 52], ["U", 53], ["V", 54], ["W", 55], ["X", 56], ["Y", 57], ["Z", 58], ["[", 59],
    ["\\", 60], ["]", 61], ['^', 62], ["_", 63], ["`", 64], ["a", 65], ["b", 66], ["c", 67], ["d", 68], ["e", 69],
    ["f", 70], ["g", 71], ['h', 72], ["i", 73], ["j", 74], ["k", 75], ["l", 76], ["m", 77], ["n", 78], ["o", 79],
    ["p", 80], ["q", 81], ['r', 82], ["s", 83], ["t", 84], ["u", 85], ["v", 86], ["w", 87], ["x", 88], ["y", 89],
    ["z", 90], ["{", 99], ['|', 92], ["}", 93], ["~", 94],
]);
function CharChange(arg_name) {
    return CharMap.get(arg_name);
}
var ModelCreater = /** @class */ (function () {
    function ModelCreater(arg_garaphicDevice, arg_resourceContainer) {
        this.resourceContainer = arg_resourceContainer;
        this.graphicDevice = arg_garaphicDevice;
        this.fontUVContainer = new Map();
    }
    ModelCreater.prototype.CreateModel = function (isLighting, isBillBoard, geometryPath, materialPath, shaderPath, arg_transform) {
        var model = new Model_1.default(isLighting, isBillBoard);
        model.Initialize_geom(this.graphicDevice, this.resourceContainer.GetGeometry(geometryPath), this.resourceContainer.GetMaterial(materialPath), this.resourceContainer.GetShader(shaderPath), arg_transform);
        return model;
    };
    ModelCreater.prototype.CreateModelFromMesh = function (isLighting, isBillBoard, meshPath, shaderPath, arg_transform) {
        var model = new Model_1.default(isLighting, isBillBoard);
        model.Initialize_mesh(this.graphicDevice, this.resourceContainer.GetMesh(meshPath), this.resourceContainer.GetShader(shaderPath), arg_transform);
        return model;
    };
    ModelCreater.prototype.CreateModelFromText = function (isBillBoard, arg_color, text, fontTexturePath, shaderPath, arg_transform) {
        var model = new TextModel_1.default(isBillBoard);
        var materialName = arg_color.data[0] + "" + arg_color.data[1] + "" + arg_color.data[2] + "" + arg_color.data[3] + "" + fontTexturePath;
        var material = this.resourceContainer.GetMaterial(materialName);
        if (material == null) {
            material = this.resourceContainer.AddMaterial(ResourceCreater_1.default.CreateMaterial(arg_color, this.graphicDevice, [this.resourceContainer.GetTexture(fontTexturePath)]), materialName);
        }
        var geometryPath = "Text:" + text.length;
        var geometry = this.resourceContainer.GetGeometry(geometryPath);
        if (geometry == null) {
            geometry = this.resourceContainer.AddGeometry(ResourceCreater_1.default.CreateGeometry(GeometryGenerator_1.default.CreateTextGeometry(text.length), true, false, false, this.graphicDevice), geometryPath);
        }
        model.Initialize_geom(this.graphicDevice, geometry, material, this.resourceContainer.GetShader(shaderPath), arg_transform);
        var uv = this.fontUVContainer[text];
        if (!uv) {
            var data = new Array();
            var xUnit = (1.0 / 128.0) * 7;
            var yUnit = 1.0 / 14.0;
            for (var i = 0; i < text.length; i++) {
                var num = CharChange(text[i]);
                var x = num % 18;
                var y = Math.floor(num / 18);
                data.push(x * xUnit, (y + 1) * yUnit, (x + 1) * xUnit, (y + 1) * yUnit, x * xUnit, y * yUnit, (x + 1) * xUnit, y * yUnit);
            }
            uv = this.graphicDevice.CreateVBO(data);
            this.fontUVContainer[text] = uv;
        }
        model.SetUVData(uv);
        return model;
    };
    return ModelCreater;
}());
exports.default = ModelCreater;


/***/ }),

/***/ "./WebGl/Parts/Renderer.ts":
/*!*********************************!*\
  !*** ./WebGl/Parts/Renderer.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ID_1 = __importDefault(__webpack_require__(/*! ./ID */ "./WebGl/Parts/ID.ts"));
var Layer = /** @class */ (function () {
    function Layer() {
        this.ary_IDs = new Array();
        this.ary_IModels = new Array();
        this.ary_lights = new Array();
    }
    Layer.prototype.SetLight = function (arg_light) {
        this.ary_lights.push(arg_light);
        return arg_light;
    };
    Layer.prototype.Regist = function (arg_registObj) {
        if (this.ary_lights.length > 0) {
            arg_registObj.SetLight(this.ary_lights[0]);
        }
        this.ary_IModels.push(arg_registObj);
        var id = new ID_1.default(this.ary_IModels.length - 1);
        this.ary_IDs.push(id);
        return id;
    };
    Layer.prototype.UnRegist = function (arg_ID) {
        this.ary_IModels.splice(arg_ID.num, 1);
        this.ary_IDs.splice(arg_ID.num, 1);
        for (var i = arg_ID.num - 1; i < this.ary_IDs.length; i++) {
            this.ary_IDs[i].num--;
        }
    };
    Layer.prototype.Draw = function () {
        this.ary_IModels.forEach(function (imodel) { return imodel.Draw(); });
    };
    Layer.prototype.Release = function () {
        this.ary_IDs.length = 0;
        this.ary_IModels.length = 0;
        this.ary_lights.length = 0;
    };
    return Layer;
}());
var Renderer = /** @class */ (function () {
    function Renderer() {
        this.layers = new Array();
        this.layers.push(new Layer());
    }
    Renderer.prototype.Regist = function (arg_registObj, layer) {
        if (this.layers.length <= layer) {
            layer = 0;
        }
        return this.layers[layer].Regist(arg_registObj);
    };
    Renderer.prototype.UnRegist = function (arg_ID, layer) {
        if (this.layers.length <= layer) {
            layer = 0;
        }
        this.layers[layer].UnRegist(arg_ID);
    };
    Renderer.prototype.SetLight = function (arg_light, layer) {
        if (this.layers.length <= layer) {
            layer = 0;
        }
        return this.layers[layer].SetLight(arg_light);
    };
    Renderer.prototype.AddLayer = function () {
        this.layers.push(new Layer());
    };
    Renderer.prototype.Draw = function (camera) {
        if (this.layers.length <= camera.layer) {
            return;
        }
        camera.Attach();
        this.layers[camera.layer].Draw();
    };
    Renderer.prototype.Release = function () {
        this.layers.forEach(function (layer) { return layer.Release(); });
    };
    return Renderer;
}());
exports.default = Renderer;


/***/ }),

/***/ "./WebGl/Parts/ResourceContainer.ts":
/*!******************************************!*\
  !*** ./WebGl/Parts/ResourceContainer.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ResourceCreater_1 = __importDefault(__webpack_require__(/*! ../Tool/ResourceCreater */ "./WebGl/Tool/ResourceCreater.ts"));
var ResourceContainer = /** @class */ (function () {
    function ResourceContainer() {
        this.iGeometries = new Map();
        this.iMaterials = new Map();
        this.iShaders = new Map();
        this.iSounds = new Map();
        this.iTextures = new Map();
        this.iMeshes = new Map();
        this.loadingObjectCount = 0;
    }
    ResourceContainer.prototype.GetShader = function (arg_key) {
        if (this.iShaders[arg_key])
            return this.iShaders[arg_key];
        else
            console.log("key is not fond.");
        return null;
    };
    ResourceContainer.prototype.AddShader = function (arg_value, arg_key) {
        this.iShaders[arg_key] = arg_value;
        return arg_value;
    };
    ResourceContainer.prototype.RemoveShader = function (arg_key) {
        delete this.iShaders[arg_key];
    };
    ResourceContainer.prototype.GetTexture = function (arg_key) {
        if (this.iTextures[arg_key])
            return this.iTextures[arg_key];
        else
            return null;
    };
    ResourceContainer.prototype.AddTexture = function (arg_value, arg_key) {
        this.iTextures[arg_key] = arg_value;
        arg_value.SetContainer(this);
        return arg_value;
    };
    ResourceContainer.prototype.AddTextureFromFile = function (arg_value, arg_device) {
        if (this.iTextures[arg_value]) {
            return this.iTextures[arg_value];
        }
        var tex = ResourceCreater_1.default.CreateTexture(arg_value, arg_device);
        tex.SetContainer(this);
        this.iTextures[arg_value] = tex;
        return this.iTextures[arg_value];
    };
    ResourceContainer.prototype.RemoveTexture = function (arg_key) {
        delete this.iTextures[arg_key];
    };
    ResourceContainer.prototype.GetMaterial = function (arg_key) {
        if (this.iMaterials[arg_key])
            return this.iMaterials[arg_key];
        else
            return null;
    };
    ResourceContainer.prototype.AddMaterial = function (arg_value, arg_key) {
        this.iMaterials[arg_key] = arg_value;
        return arg_value;
    };
    ResourceContainer.prototype.AddMaterialFromFile = function (arg_value, arg_device) {
        if (this.iMaterials[arg_value]) {
            return this.iMaterials[arg_value];
        }
        this.iMaterials[arg_value] = ResourceCreater_1.default.CreateMaterialFromFile(arg_value, this, arg_device);
        this.LoadStart();
        return this.iMaterials[arg_value];
    };
    ResourceContainer.prototype.RemoveMaterial = function (arg_key) {
        delete this.iMaterials[arg_key];
    };
    ResourceContainer.prototype.GetGeometry = function (arg_key) {
        if (this.iGeometries[arg_key])
            return this.iGeometries[arg_key];
        else
            return null;
    };
    ResourceContainer.prototype.AddGeometry = function (arg_value, arg_key) {
        this.iGeometries[arg_key] = arg_value;
        return arg_value;
    };
    ResourceContainer.prototype.RemoveGeometry = function (arg_key) {
        delete this.iGeometries[arg_key];
    };
    ResourceContainer.prototype.GetMesh = function (arg_key) {
        if (this.iMeshes[arg_key])
            return this.iMeshes[arg_key];
        else
            return null;
    };
    ResourceContainer.prototype.AddMesh = function (arg_value, arg_key) {
        this.iMeshes[arg_key] = arg_value;
        return arg_value;
    };
    ResourceContainer.prototype.RemoveMesh = function (arg_key) {
        delete this.iMeshes[arg_key];
    };
    ResourceContainer.prototype.GetSound = function (arg_key) {
        if (this.iSounds[arg_key])
            return this.iSounds[arg_key];
        else
            return null;
    };
    ResourceContainer.prototype.AddSound = function (arg_value, arg_key) {
        this.iSounds[arg_key] = arg_value;
        return arg_value;
    };
    ResourceContainer.prototype.AddSoundFromFile = function (arg_value, arg_key) {
        this.iSounds[arg_key] = ResourceCreater_1.default.CreateSound(arg_value);
        return this.iSounds[arg_key];
    };
    ResourceContainer.prototype.RemoveSound = function (arg_key) {
        delete this.iSounds[arg_key];
    };
    ResourceContainer.prototype.LoadEnd = function () {
        this.loadingObjectCount--;
    };
    ResourceContainer.prototype.LoadStart = function () {
        this.loadingObjectCount++;
    };
    ResourceContainer.prototype.GetLoadingObjCount = function () {
        if (this.loadingObjectCount <= 0) {
            return 0;
        }
        return this.loadingObjectCount;
    };
    return ResourceContainer;
}());
exports.default = ResourceContainer;


/***/ }),

/***/ "./WebGl/Resource/FrameBufferTexture.ts":
/*!**********************************************!*\
  !*** ./WebGl/Resource/FrameBufferTexture.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FrameBufferTexture = /** @class */ (function () {
    function FrameBufferTexture(arg_graphicDevice, width, height) {
        this.width = width;
        this.height = height;
        this.graphicDevice = arg_graphicDevice;
        // フレームバッファの生成
        this.frameBuffer = this.graphicDevice.context.createFramebuffer();
        // フレームバッファをWebGLにバインド
        this.graphicDevice.context.bindFramebuffer(this.graphicDevice.context.FRAMEBUFFER, this.frameBuffer);
        // 深度バッファ用レンダーバッファの生成とバインド
        this.depthBuffer = this.graphicDevice.context.createRenderbuffer();
        this.graphicDevice.context.bindRenderbuffer(this.graphicDevice.context.RENDERBUFFER, this.depthBuffer);
        // レンダーバッファを深度バッファとして設定
        this.graphicDevice.context.renderbufferStorage(this.graphicDevice.context.RENDERBUFFER, this.graphicDevice.context.DEPTH_COMPONENT16, width, height);
        // フレームバッファにレンダーバッファを関連付ける
        this.graphicDevice.context.framebufferRenderbuffer(this.graphicDevice.context.FRAMEBUFFER, this.graphicDevice.context.DEPTH_ATTACHMENT, this.graphicDevice.context.RENDERBUFFER, this.depthBuffer);
        // フレームバッファ用テクスチャの生成
        this.data = this.graphicDevice.context.createTexture();
        // フレームバッファ用のテクスチャをバインド
        this.graphicDevice.context.bindTexture(this.graphicDevice.context.TEXTURE_2D, this.data);
        // フレームバッファ用のテクスチャにカラー用のメモリ領域を確保
        this.graphicDevice.context.texImage2D(this.graphicDevice.context.TEXTURE_2D, 0, this.graphicDevice.context.RGBA, width, height, 0, this.graphicDevice.context.RGBA, this.graphicDevice.context.UNSIGNED_BYTE, null);
        // テクスチャパラメータ
        this.graphicDevice.context.texParameteri(this.graphicDevice.context.TEXTURE_2D, this.graphicDevice.context.TEXTURE_MAG_FILTER, this.graphicDevice.context.LINEAR);
        this.graphicDevice.context.texParameteri(this.graphicDevice.context.TEXTURE_2D, this.graphicDevice.context.TEXTURE_MIN_FILTER, this.graphicDevice.context.LINEAR);
        // フレームバッファにテクスチャを関連付ける
        this.graphicDevice.context.framebufferTexture2D(this.graphicDevice.context.FRAMEBUFFER, this.graphicDevice.context.COLOR_ATTACHMENT0, this.graphicDevice.context.TEXTURE_2D, this.data, 0);
        // 各種オブジェクトのバインドを解除
        this.graphicDevice.context.bindTexture(this.graphicDevice.context.TEXTURE_2D, null);
        this.graphicDevice.context.bindRenderbuffer(this.graphicDevice.context.RENDERBUFFER, null);
        this.graphicDevice.context.bindFramebuffer(this.graphicDevice.context.FRAMEBUFFER, null);
    }
    FrameBufferTexture.prototype.SetContainer = function (resourceContainer) {
    };
    FrameBufferTexture.prototype.Loaded = function () {
    };
    FrameBufferTexture.prototype.IsLoaded = function () {
        return true;
    };
    FrameBufferTexture.prototype.Initialize = function () {
    };
    FrameBufferTexture.prototype.Attach = function (slot) {
        this.graphicDevice.context.activeTexture(this.graphicDevice.context.TEXTURE0);
        this.graphicDevice.context.bindTexture(this.graphicDevice.context.TEXTURE_2D, this.data);
        this.graphicDevice.context.uniform1i(this.graphicDevice.shader.GetTextureSlot(slot), slot);
    };
    return FrameBufferTexture;
}());
exports.default = FrameBufferTexture;


/***/ }),

/***/ "./WebGl/Resource/Geometry.ts":
/*!************************************!*\
  !*** ./WebGl/Resource/Geometry.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Geometry = /** @class */ (function () {
    function Geometry(data, isUV, isNormal, isColor, arg_device) {
        this.device = arg_device;
        this.vboList = new Array();
        this.vboList.push(arg_device.CreateVBO(data.p));
        if (isUV) {
            this.vboList.push(arg_device.CreateVBO(data.uv));
        }
        if (isNormal) {
            this.vboList.push(arg_device.CreateVBO(data.n));
        }
        if (isColor) {
            this.vboList.push(arg_device.CreateVBO(data.c));
        }
        this.ibo = arg_device.CreateIBO(data.i);
        this.indexSize = data.i.length;
        this.subset = new Array();
        this.subset.push(data.i.length);
    }
    Geometry.prototype.ChangeVBO = function (vbo, slot) {
        this.vboList[slot] = vbo;
    };
    Geometry.prototype.GetIndexSize = function () {
        return this.indexSize;
    };
    Geometry.prototype.Draw = function () {
        this.device.SetVBO(this.vboList);
        this.device.context.bindBuffer(this.device.context.ELEMENT_ARRAY_BUFFER, this.ibo);
    };
    Geometry.prototype.SetSubset = function (arg_subset) {
        this.subset = arg_subset;
    };
    Geometry.prototype.GetSubSet = function () {
        return this.subset;
    };
    return Geometry;
}());
exports.default = Geometry;


/***/ }),

/***/ "./WebGl/Resource/Material.ts":
/*!************************************!*\
  !*** ./WebGl/Resource/Material.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExParameter = /** @class */ (function () {
    function ExParameter(arg_slot, arg_size, arg_param) {
        this.slot = arg_slot;
        this.param = arg_param;
        this.size = arg_size;
        switch (arg_size) {
            case 1:
                this.atachFunc = this.Atach1f;
                break;
            case 2:
                this.atachFunc = this.Atach2f;
                break;
            case 3:
                this.atachFunc = this.Atach3f;
                break;
            case 4:
                this.atachFunc = this.Atach4f;
                break;
            case 16:
                this.atachFunc = this.AtachMat;
                break;
        }
    }
    ExParameter.prototype.Atach1f = function (device) {
        device.context.uniform1fv(device.shader.uniformLocations[this.slot], this.param.data);
    };
    ExParameter.prototype.Atach2f = function (device) {
        device.context.uniform2fv(device.shader.uniformLocations[this.slot], this.param.data);
    };
    ExParameter.prototype.Atach3f = function (device) {
        device.context.uniform3fv(device.shader.uniformLocations[this.slot], this.param.data);
    };
    ExParameter.prototype.Atach4f = function (device) {
        device.context.uniform4fv(device.shader.uniformLocations[this.slot], this.param.data);
    };
    ExParameter.prototype.AtachMat = function (device) {
        device.context.uniformMatrix4fv(device.shader.uniformLocations[this.slot], false, this.param.data);
    };
    return ExParameter;
}());
var Material = /** @class */ (function () {
    function Material() {
    }
    Material.prototype.SetParameter = function (arg_ambient, arg_device, arg_ary_texture, arg_ary_exParms) {
        var _this = this;
        this.ambientColor = arg_ambient;
        this.device = arg_device;
        if (arg_ary_texture)
            this.textures = arg_ary_texture;
        else
            this.textures = new Array();
        this.exParams = new Array();
        if (arg_ary_exParms) {
            arg_ary_exParms.foreach(function (param) { return _this.AddExParam(param.n, param.s, param.p); });
        }
    };
    Material.prototype.SetTexture = function (arg_texture, slot) {
        this.textures[slot] = arg_texture;
    };
    Material.prototype.AddExParam = function (arg_slot, arg_size, arg_param) {
        this.exParams.push(new ExParameter(arg_slot, arg_size, arg_param));
    };
    Material.prototype.Attach = function () {
        if (this.device.shader.ambientSlot) {
            this.device.context.uniform4fv(this.device.shader.uniformLocations[this.device.shader.ambientSlot], this.ambientColor.xyzw);
        }
        for (var i = 0; i < this.textures.length; i++) {
            if (this.textures[i] != null)
                this.textures[i].Attach(i);
        }
        for (var i = 0; i < this.exParams.length; i++) {
            this.exParams[i].atachFunc(this.device);
        }
    };
    return Material;
}());
exports.default = Material;


/***/ }),

/***/ "./WebGl/Resource/Mesh.ts":
/*!********************************!*\
  !*** ./WebGl/Resource/Mesh.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Mesh = /** @class */ (function () {
    function Mesh() {
    }
    Mesh.prototype.SetParameter = function (arg_geometry, arg_ary_materials) {
        this.geometry = arg_geometry;
        this.ary_materials = arg_ary_materials;
    };
    return Mesh;
}());
exports.default = Mesh;


/***/ }),

/***/ "./WebGl/Resource/Shader.ts":
/*!**********************************!*\
  !*** ./WebGl/Resource/Shader.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FileLoader_1 = __importDefault(__webpack_require__(/*! ../Tool/FileLoader */ "./WebGl/Tool/FileLoader.ts"));
function GetStride(arg_type) {
    switch (arg_type) {
        case "vec2":
            return 2;
            break;
        case "vec3":
            return 3;
            break;
        case "vec4":
            return 4;
            break;
        case "int":
            return 1;
            break;
        case "float":
            return 1;
            break;
    }
    console.log("Type undifined.");
    return 0;
}
var Shader = /** @class */ (function () {
    function Shader(vsSource, fsSource, arg_graphicDevice) {
        this.graphicDevice = arg_graphicDevice;
        var vsData = FileLoader_1.default.LoadText(vsSource);
        var v_shader = this.graphicDevice.CreateVertexShader(vsData);
        var fsData = FileLoader_1.default.LoadText(fsSource);
        var f_shader = this.graphicDevice.CreateFragmentShader(fsData);
        this.ambientSlot = -1;
        this.lightPosSlot = -1;
        this.lightDirSlot = -1;
        this.programObject = this.graphicDevice.CreateProgram(v_shader, f_shader);
        this.attributeLocations = new Array();
        this.attributeStrides = new Array();
        this.uniformLocations = new Array();
        this.textureSlots = new Array();
        var attributeSource = vsData.split(";");
        attributeSource = attributeSource.filter(function (source) { return source.indexOf("attribute") != -1; });
        var attributeSemantics = new Array();
        for (var i = 0; i < attributeSource.length; i++) {
            attributeSource[i] = attributeSource[i].replace(/\r?\n/g, "");
        }
        attributeSource.forEach(function (source) { return attributeSemantics.push(source.split(" ")); });
        for (var i = 0; i < attributeSemantics.length; i++) {
            attributeSemantics[i] = attributeSemantics[i].filter(function (s) { return s != ""; });
            this.attributeLocations[i] = this.graphicDevice.context.getAttribLocation(this.programObject, attributeSemantics[i][2]);
            this.attributeStrides[i] = GetStride(attributeSemantics[i][1]);
        }
        var uniSource = fsData.split(";");
        uniSource = vsData.split(";").concat(uniSource);
        uniSource = uniSource.filter(function (source) { return source.indexOf("uniform") != -1; });
        var uniSemantics = new Array();
        for (var i = 0; i < uniSource.length; i++) {
            uniSource[i] = uniSource[i].replace(/\r?\n/g, "");
        }
        uniSource.forEach(function (source) { return uniSemantics.push(source.split(" ")); });
        for (var i = 0; i < uniSemantics.length; i++) {
            uniSemantics[i] = uniSemantics[i].filter(function (s) { return s != ""; });
            this.uniformLocations.push(this.graphicDevice.context.getUniformLocation(this.programObject, uniSemantics[i][2]));
            if (uniSemantics[i][2] == "ambientColor") {
                this.ambientSlot = i;
            }
            else if (uniSemantics[i][2] == "lightPosition") {
                this.lightPosSlot = i;
            }
            else if (uniSemantics[i][2] == "lightDirection") {
                this.lightDirSlot = i;
            }
            else if (uniSemantics[i][1] == "sampler2D") {
                this.textureSlots.push(i);
            }
        }
    }
    Shader.prototype.GetTextureSlot = function (arg_slot) {
        if (this.textureSlots[arg_slot] != null) {
            return this.uniformLocations[this.textureSlots[arg_slot]];
        }
    };
    Shader.prototype.Attach = function () {
        this.graphicDevice.SetShader(this);
    };
    return Shader;
}());
exports.default = Shader;


/***/ }),

/***/ "./WebGl/Resource/Sound.ts":
/*!*********************************!*\
  !*** ./WebGl/Resource/Sound.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Sound = /** @class */ (function () {
    function Sound(arg_src) {
        this.audioElement = document.createElement('audio');
        this.audioElement.src = arg_src;
        this.audioElement.preload = "auto";
    }
    Sound.prototype.Play = function () {
        this.audioElement.play();
    };
    Sound.prototype.Play_new = function () {
        var audioElement = document.createElement('audio');
        audioElement.src = this.audioElement.src;
        audioElement.preload = "auto";
        audioElement.play();
    };
    Sound.prototype.Pause = function () {
        this.audioElement.pause();
    };
    Sound.prototype.Mute = function () {
        this.audioElement.muted = true;
    };
    Sound.prototype.SetVolume = function (arg_volume) {
        this.audioElement.volume = arg_volume;
    };
    Sound.prototype.GetVolume = function () {
        return this.audioElement.volume;
    };
    Sound.prototype.DisMute = function () {
        this.audioElement.muted = false;
    };
    Sound.prototype.Reset = function () {
        this.audioElement.currentTime = 0.0;
    };
    Sound.prototype.SetLoop = function (arg_isLoop) {
        this.audioElement.loop = arg_isLoop;
    };
    return Sound;
}());
exports.default = Sound;


/***/ }),

/***/ "./WebGl/Resource/Texture.ts":
/*!***********************************!*\
  !*** ./WebGl/Resource/Texture.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Texture = /** @class */ (function () {
    function Texture(arg_path, arg_device) {
        this.isLoaded = false;
        this.graphicDevice = arg_device;
        this.path = arg_path;
    }
    Texture.prototype.Loaded = function () {
        this.isLoaded = true;
        if (this.resourceContainer)
            this.resourceContainer.LoadEnd();
    };
    Texture.prototype.IsLoaded = function () {
        return this.isLoaded;
    };
    Texture.prototype.Initialize = function () {
        this.graphicDevice.CreateTexture(this.path, this);
    };
    Texture.prototype.Attach = function (slot) {
        this.graphicDevice.context.activeTexture(this.graphicDevice.context.TEXTURE0);
        this.graphicDevice.context.bindTexture(this.graphicDevice.context.TEXTURE_2D, this.data);
        this.graphicDevice.context.uniform1i(this.graphicDevice.shader.GetTextureSlot(slot), slot);
        this.graphicDevice.context.texParameteri(this.graphicDevice.context.TEXTURE_2D, this.graphicDevice.context.TEXTURE_MIN_FILTER, this.graphicDevice.context.NEAREST);
        this.graphicDevice.context.texParameteri(this.graphicDevice.context.TEXTURE_2D, this.graphicDevice.context.TEXTURE_MAG_FILTER, this.graphicDevice.context.NEAREST);
    };
    Texture.prototype.SetContainer = function (resourceContainer) {
        this.resourceContainer = resourceContainer;
        this.resourceContainer.LoadStart();
    };
    return Texture;
}());
exports.default = Texture;


/***/ }),

/***/ "./WebGl/SampleScene.ts":
/*!******************************!*\
  !*** ./WebGl/SampleScene.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Scene_1 = __importDefault(__webpack_require__(/*! ./Scene/Scene */ "./WebGl/Scene/Scene.ts"));
var ResourceCreater_1 = __importDefault(__webpack_require__(/*! ./Tool/ResourceCreater */ "./WebGl/Tool/ResourceCreater.ts"));
var Quat_1 = __importDefault(__webpack_require__(/*! ./Math/Quat */ "./WebGl/Math/Quat.ts"));
var Vector4_1 = __importDefault(__webpack_require__(/*! ./Math/Vector4 */ "./WebGl/Math/Vector4.ts"));
var Vector3_1 = __importDefault(__webpack_require__(/*! ./Math/Vector3 */ "./WebGl/Math/Vector3.ts"));
var PointLight_1 = __importDefault(__webpack_require__(/*! ./Light/PointLight */ "./WebGl/Light/PointLight.ts"));
var ModelDrawComponent_1 = __importDefault(__webpack_require__(/*! ./Component/ModelDrawComponent */ "./WebGl/Component/ModelDrawComponent.ts"));
var Transform_1 = __importDefault(__webpack_require__(/*! ./Transform */ "./WebGl/Transform.ts"));
var Input_1 = __importDefault(__webpack_require__(/*! ./Tool/Input */ "./WebGl/Tool/Input.ts"));
var SceneChanger_1 = __importDefault(__webpack_require__(/*! ./Component/SceneChanger */ "./WebGl/Component/SceneChanger.ts"));
var TransformAnimation_1 = __importDefault(__webpack_require__(/*! ./Component/TransformAnimation */ "./WebGl/Component/TransformAnimation.ts"));
var Easing_1 = __importDefault(__webpack_require__(/*! ./Tool/Easing */ "./WebGl/Tool/Easing.ts"));
var SucideComponent_1 = __importDefault(__webpack_require__(/*! ./Component/SucideComponent */ "./WebGl/Component/SucideComponent.ts"));
var Stage_1 = __importDefault(__webpack_require__(/*! ./CrossyLoad_Copy/Stage */ "./WebGl/CrossyLoad_Copy/Stage.ts"));
var PrimitiveType;
(function (PrimitiveType) {
    PrimitiveType[PrimitiveType["sphere"] = 0] = "sphere";
    PrimitiveType[PrimitiveType["box_AABB"] = 1] = "box_AABB";
    PrimitiveType[PrimitiveType["box_OBB"] = 2] = "box_OBB";
    PrimitiveType[PrimitiveType["point"] = 3] = "point";
})(PrimitiveType || (PrimitiveType = {}));
var float = /** @class */ (function () {
    function float() {
        this.data = new Float32Array(1);
    }
    return float;
}());
var SampleScene = /** @class */ (function (_super) {
    __extends(SampleScene, _super);
    function SampleScene(sceneManger) {
        var _this = _super.call(this, sceneManger) || this;
        _this.aQuaternion = new Quat_1.default().Identity();
        _this.bQuaternion = new Quat_1.default().Identity();
        _this.sQuaternion = new Quat_1.default().Identity();
        _this.zoomData = new float();
        _this.zoomData.data[0] = 0.5;
        return _this;
    }
    SampleScene.prototype.LoadingUpdate = function () {
    };
    SampleScene.prototype.OnLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var frameBuffer, material;
            return __generator(this, function (_a) {
                frameBuffer = this.sceneManager.GetResourceContainer().AddTexture(ResourceCreater_1.default.CreateFrameBuffer(1024, 1024, this.sceneManager.GetGraphicDevice()), "playCamera");
                material = this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater_1.default.CreateMaterial(new Vector4_1.default(0.1, 0.1, 0.1, 1.0), this.sceneManager.GetGraphicDevice(), [this.sceneManager.GetResourceContainer().GetTexture("playCamera")]), "playCameraMaterial");
                return [2 /*return*/];
            });
        });
    };
    SampleScene.prototype.OnInitialize = function () {
        this.renderer.AddLayer();
        this.UseCollisionManager();
        this.AddCamera(0, 1, "main", false, this.sceneManager.GetResourceContainer().GetTexture("playCamera"));
        // 頂点シェーダとフラグメントシェーダの生成
        var light = new PointLight_1.default(this.sceneManager.GetGraphicDevice());
        light.transform.Position = new Vector3_1.default(-5, -5, 10);
        //this.renderer.SetLight(light,0);
        this.renderer.SetLight(light, 1);
        this.sceneManager.GetGraphicDevice().EnableStencil();
        this.GetCamera("main").transform.Position = new Vector3_1.default(5, -20, 20);
        this.GetCamera("main").transform.LookAt(new Vector3_1.default(0, 0, -1), Vector3_1.default.yAxis);
        this.GetCamera("main").clearColor = new Vector4_1.default(0.3, 0.3, 0.3, 1.0);
        this.projectionPlane = this.gameObjectManager.AddGameObject("projectionCube");
        //this.cube.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,false)) as ModelDrawComponent;
        //this.anotherCube.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,false)) as ModelDrawComponent;
        {
            this.projectionPlane.SetComponent(new ModelDrawComponent_1.default(false, "plane", "playCameraMaterial", "texShader", 0, false));
            this.projectionPlane.transform.Scale = new Vector3_1.default(0, 0, 1);
        }
        var floor = this.gameObjectManager.AddGameObject("floor", new Transform_1.default(new Vector3_1.default(0, 0, 0), new Vector3_1.default(90, 0, 0), new Vector3_1.default(10, 10, 5)));
        floor.SetComponent(new ModelDrawComponent_1.default(false, "plane", "caloryMaterial", "texShader", 1, false));
        //this.anotherCube.transform.BaseTransform=this.cube.transform;
        this.projectionPlane.transform.Position = new Vector3_1.default(0, 0, -1);
        this.stage = new Stage_1.default(this);
        this.stage.Reset();
    };
    SampleScene.prototype.OnStart = function () {
        Input_1.default.AddKeyDownEvent(this, "sampleSceneEvent", true);
        if (this.IsLoaded()) {
            var trans = new Transform_1.default(new Vector3_1.default(0, 0, -1), new Vector3_1.default(0, 0, 0), new Vector3_1.default(500, 500, 1));
            this.projectionPlane.SetComponent(new TransformAnimation_1.default(90, false, trans, this.projectionPlane.transform, Easing_1.default.EaseInOutCirc));
            this.stage.Start();
        }
    };
    SampleScene.prototype.OnEnd = function () {
        Input_1.default.RemoveKeyDownEvent("sampleSceneEvent");
        this.stage.Reset();
    };
    SampleScene.prototype.OnUpdate = function () {
        // カウンタを元にラジアンを算出
        var rad = (this.sceneManager.GetGameTime().AbsoluteFrame % 360) * Math.PI / 180;
        var time = 1.5;
    };
    SampleScene.prototype.OnKeyDown = function (e) {
        if (e.key == "Escape") {
            var sceneChangeObject = this.gameObjectManager.GetGameObject("sceneChanger");
            if (sceneChangeObject) {
                return;
            }
            sceneChangeObject = this.gameObjectManager.AddGameObject("sceneChanger");
            sceneChangeObject.SetComponent(new SceneChanger_1.default("title", 100, null));
            var trans = new Transform_1.default(new Vector3_1.default(0, 0, -1), new Vector3_1.default(0, 0, 0), new Vector3_1.default(0, 0, 0));
            sceneChangeObject.SetComponent(new TransformAnimation_1.default(90, false, trans, this.projectionPlane.transform, Easing_1.default.EaseInOutCirc));
            sceneChangeObject.SetComponent(new SucideComponent_1.default(100));
        }
    };
    return SampleScene;
}(Scene_1.default));
exports.default = SampleScene;


/***/ }),

/***/ "./WebGl/Scene/Scene.ts":
/*!******************************!*\
  !*** ./WebGl/Scene/Scene.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Renderer_1 = __importDefault(__webpack_require__(/*! ../Parts/Renderer */ "./WebGl/Parts/Renderer.ts"));
var Camera_1 = __importDefault(__webpack_require__(/*! ../Graphic/Camera */ "./WebGl/Graphic/Camera.ts"));
var GameObjectManager_1 = __importDefault(__webpack_require__(/*! ../GameObject/GameObjectManager */ "./WebGl/GameObject/GameObjectManager.ts"));
var CollisionManager_1 = __importDefault(__webpack_require__(/*! ../Parts/Collision/CollisionManager */ "./WebGl/Parts/Collision/CollisionManager.ts"));
function Sleep(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}
var Scene = /** @class */ (function () {
    function Scene(sceneManger) {
        this.isCurrent = false;
        this.isLoaded = false;
        this.renderer = new Renderer_1.default();
        this.map_camera = new Map();
        this.ary_camera = new Array();
        this.sceneManager = sceneManger;
        this.gameObjectManager = new GameObjectManager_1.default(this);
        this.Update = this.Update_WithoutCollision;
        this.AddCamera(0, 0, "last", true);
    }
    Scene.prototype.IsCurrentScene = function () {
        return this.isCurrent;
    };
    Scene.prototype.SetCurrentScene = function (arg_iscurrent) {
        this.isCurrent = arg_iscurrent;
    };
    Scene.prototype.GetGameManager = function () {
        return this.gameObjectManager;
    };
    Scene.prototype.UseCollisionManager = function () {
        this.collisionManager = new CollisionManager_1.default();
        this.Update = this.Update_WithCollision;
    };
    Scene.prototype.GetCollisionManager = function () {
        return this.collisionManager;
    };
    Scene.prototype.IsLoaded = function () {
        return this.isLoaded;
    };
    Scene.prototype.Release = function () {
        this.OnRelease();
        this.sceneManager = null;
        this.gameObjectManager.Release();
        this.collisionManager.Release();
        this.renderer.Release();
    };
    Scene.prototype.OnRelease = function () {
    };
    Scene.prototype.GetCameraCount = function () {
        return this.ary_camera.length;
    };
    Scene.prototype.AddCamera = function (order, layer, cameraName, isPararell, frameBufferTexture) {
        var newCamera;
        if (frameBufferTexture) {
            newCamera = new Camera_1.default(this.sceneManager.GetGraphicDevice(), layer, isPararell, frameBufferTexture);
        }
        else
            newCamera = new Camera_1.default(this.sceneManager.GetGraphicDevice(), layer, isPararell);
        this.ary_camera.splice(order, 0, newCamera);
        this.map_camera[cameraName] = newCamera;
        return newCamera;
    };
    Scene.prototype.GetCamera = function (cameraName) {
        return this.map_camera[cameraName];
    };
    Scene.prototype.Draw = function () {
        var _this = this;
        this.ary_camera.forEach(function (camera) { return _this.renderer.Draw(camera); });
        this.sceneManager.GetGraphicDevice().Present();
    };
    Scene.prototype.Update_WithCollision = function () {
        this.OnUpdate();
        this.gameObjectManager.Update();
        this.collisionManager.Check();
        this.Draw();
    };
    Scene.prototype.Update_WithoutCollision = function () {
        this.OnUpdate();
        this.gameObjectManager.Update();
        this.Draw();
    };
    Scene.prototype.LoadingUpdate = function () {
        this.OnLoadingUpdate();
        this.Draw();
    };
    Scene.prototype.OnLoadingUpdate = function () {
    };
    Scene.prototype.OnUpdate = function () {
    };
    Scene.prototype.Start = function (information) {
        this.OnStart(information);
    };
    Scene.prototype.OnStart = function (information) {
    };
    Scene.prototype.End = function () {
        this.OnEnd();
    };
    Scene.prototype.OnEnd = function () {
    };
    Scene.prototype.Initialize = function () {
        this.OnInitialize();
    };
    Scene.prototype.BefLoad = function () {
    };
    Scene.prototype.Load = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.BefLoad();
                        return [4 /*yield*/, this.OnLoad()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.sceneManager.GetResourceContainer().GetLoadingObjCount()) return [3 /*break*/, 4];
                        return [4 /*yield*/, Sleep(100)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 2];
                    case 4:
                        this.isLoaded = true;
                        this.Initialize();
                        return [2 /*return*/];
                }
            });
        });
    };
    Scene.prototype.OnLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Scene.prototype.OnInitialize = function () {
    };
    Scene.prototype.GetRenderer = function () {
        return this.renderer;
    };
    Scene.prototype.GetSceneManager = function () {
        return this.sceneManager;
    };
    return Scene;
}());
exports.default = Scene;


/***/ }),

/***/ "./WebGl/Scene/SceneManager.ts":
/*!*************************************!*\
  !*** ./WebGl/Scene/SceneManager.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameTime_1 = __importDefault(__webpack_require__(/*! ../Parts/GameTime */ "./WebGl/Parts/GameTime.ts"));
var SceneManager = /** @class */ (function () {
    function SceneManager(arg_modelCreater, arg_resourceContainer, arg_graphicDevice) {
        this.map_scenes = new Map();
        this.resourceContainer = arg_resourceContainer;
        this.modelCreater = arg_modelCreater;
        this.graphicDevice = arg_graphicDevice;
        this.gameTime = new GameTime_1.default();
    }
    SceneManager.prototype.GetGraphicDevice = function () {
        return this.graphicDevice;
    };
    SceneManager.prototype.GetModelCreater = function () {
        return this.modelCreater;
    };
    SceneManager.prototype.GetResourceContainer = function () {
        return this.resourceContainer;
    };
    SceneManager.prototype.GetGameTime = function () {
        return this.gameTime;
    };
    SceneManager.prototype.Update = function () {
        if (this.currentScene.IsLoaded()) {
            this.currentScene.Update();
            this.gameTime.Count();
        }
        else {
            this.currentScene.Draw();
        }
    };
    SceneManager.prototype.AddScene = function (arg_scene, key) {
        arg_scene.Load();
        this.map_scenes[key] = arg_scene;
        return arg_scene;
    };
    SceneManager.prototype.GetScene = function (key) {
        return this.map_scenes[key];
    };
    SceneManager.prototype.GetCurrentScene = function () {
        return this.currentScene;
    };
    SceneManager.prototype.ChangeScene = function (key, information) {
        if (this.currentScene) {
            this.currentScene.SetCurrentScene(false);
            this.currentScene.End();
        }
        this.currentScene = this.map_scenes[key];
        this.currentScene.SetCurrentScene(true);
        this.currentScene.Start();
    };
    SceneManager.prototype.RemoveScene = function (key) {
        if (this.map_scenes[key]) {
            this.map_scenes[key].Release();
            delete this.map_scenes[key];
        }
    };
    return SceneManager;
}());
exports.default = SceneManager;


/***/ }),

/***/ "./WebGl/TitleScene.ts":
/*!*****************************!*\
  !*** ./WebGl/TitleScene.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Scene_1 = __importDefault(__webpack_require__(/*! ./Scene/Scene */ "./WebGl/Scene/Scene.ts"));
var ResourceCreater_1 = __importDefault(__webpack_require__(/*! ./Tool/ResourceCreater */ "./WebGl/Tool/ResourceCreater.ts"));
var GeometryGenerator_1 = __importDefault(__webpack_require__(/*! ./Tool/GeometryGenerator */ "./WebGl/Tool/GeometryGenerator.ts"));
var Quat_1 = __importDefault(__webpack_require__(/*! ./Math/Quat */ "./WebGl/Math/Quat.ts"));
var Vector4_1 = __importDefault(__webpack_require__(/*! ./Math/Vector4 */ "./WebGl/Math/Vector4.ts"));
var Vector3_1 = __importDefault(__webpack_require__(/*! ./Math/Vector3 */ "./WebGl/Math/Vector3.ts"));
var PointLight_1 = __importDefault(__webpack_require__(/*! ./Light/PointLight */ "./WebGl/Light/PointLight.ts"));
var ModelDrawComponent_1 = __importDefault(__webpack_require__(/*! ./Component/ModelDrawComponent */ "./WebGl/Component/ModelDrawComponent.ts"));
var Vector2_1 = __importDefault(__webpack_require__(/*! ./Math/Vector2 */ "./WebGl/Math/Vector2.ts"));
var TextDrawComponent_1 = __importDefault(__webpack_require__(/*! ./Component/TextDrawComponent */ "./WebGl/Component/TextDrawComponent.ts"));
var Transform_1 = __importDefault(__webpack_require__(/*! ./Transform */ "./WebGl/Transform.ts"));
var Input_1 = __importDefault(__webpack_require__(/*! ./Tool/Input */ "./WebGl/Tool/Input.ts"));
var TransformAnimation_1 = __importDefault(__webpack_require__(/*! ./Component/TransformAnimation */ "./WebGl/Component/TransformAnimation.ts"));
var SceneChanger_1 = __importDefault(__webpack_require__(/*! ./Component/SceneChanger */ "./WebGl/Component/SceneChanger.ts"));
var Easing_1 = __importDefault(__webpack_require__(/*! ./Tool/Easing */ "./WebGl/Tool/Easing.ts"));
var SucideComponent_1 = __importDefault(__webpack_require__(/*! ./Component/SucideComponent */ "./WebGl/Component/SucideComponent.ts"));
var float = /** @class */ (function () {
    function float() {
        this.data = new Float32Array(1);
    }
    return float;
}());
var TitleScene = /** @class */ (function (_super) {
    __extends(TitleScene, _super);
    function TitleScene(sceneManger) {
        var _this = _super.call(this, sceneManger) || this;
        _this.aQuaternion = new Quat_1.default().Identity();
        _this.bQuaternion = new Quat_1.default().Identity();
        _this.sQuaternion = new Quat_1.default().Identity();
        _this.zoomData = new float();
        _this.isLoad = false;
        _this.zoomDirection = 1.0;
        _this.zoomData.data[0] = 0.5;
        return _this;
    }
    TitleScene.prototype.LoadingUpdate = function () {
    };
    TitleScene.prototype.OnLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var frameBuffer, material;
            return __generator(this, function (_a) {
                this.sceneManager.GetResourceContainer().AddShader(ResourceCreater_1.default.CreateShader('shader/UVNormalColorVS.glsl', "shader/DefaultFS.glsl", this.sceneManager.GetGraphicDevice()), "texShader");
                this.sceneManager.GetResourceContainer().AddShader(ResourceCreater_1.default.CreateShader('shader/UVNormalColorVS.glsl', "shader/FontShaderFS.glsl", this.sceneManager.GetGraphicDevice()), "fontShader");
                this.sceneManager.GetResourceContainer().AddGeometry(ResourceCreater_1.default.CreateGeometry(GeometryGenerator_1.default.CreatePlane(new Vector2_1.default(1, 1), false, new Vector4_1.default(1.0, 1.0, 1.0, 1)), true, false, false, this.sceneManager.GetGraphicDevice()), "plane");
                this.sceneManager.GetResourceContainer().AddSoundFromFile("audio/title_se3.wav", "title");
                // テクスチャを生成
                this.sceneManager.GetResourceContainer().AddTexture(ResourceCreater_1.default.CreateTexture('image/charmap.png', this.sceneManager.GetGraphicDevice()), "font");
                frameBuffer = this.sceneManager.GetResourceContainer().AddTexture(ResourceCreater_1.default.CreateFrameBuffer(1024, 1024, this.sceneManager.GetGraphicDevice()), "titleCamera");
                frameBuffer = this.sceneManager.GetResourceContainer().AddTexture(ResourceCreater_1.default.CreateFrameBuffer(1024, 1024, this.sceneManager.GetGraphicDevice()), "loadingCamera");
                material = this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater_1.default.CreateMaterial(new Vector4_1.default(0.1, 0.1, 0.1, 1.0), this.sceneManager.GetGraphicDevice(), [this.sceneManager.GetResourceContainer().GetTexture("titleCamera")]), "titleCameraMaterial");
                material.AddExParam(4, 1, this.zoomData);
                material = this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater_1.default.CreateMaterial(new Vector4_1.default(0.1, 0.1, 0.1, 1.0), this.sceneManager.GetGraphicDevice(), [this.sceneManager.GetResourceContainer().GetTexture("loadingCamera")]), "loadingCameraMaterial");
                return [2 /*return*/];
            });
        });
    };
    TitleScene.prototype.OnInitialize = function () {
        this.renderer.AddLayer();
        this.AddCamera(0, 1, "main", false, this.sceneManager.GetResourceContainer().GetTexture("titleCamera"));
        // 頂点シェーダとフラグメントシェーダの生成
        var light = new PointLight_1.default(this.sceneManager.GetGraphicDevice());
        light.transform.Position = new Vector3_1.default(-5, -5, 10);
        //this.renderer.SetLight(light,0);
        this.renderer.SetLight(light, 1);
        this.sceneManager.GetGraphicDevice().EnableStencil();
        this.GetCamera("main").transform.Position = new Vector3_1.default(0, 0, 10);
        this.GetCamera("main").transform.LookAt(new Vector3_1.default(0, 0, 0), Vector3_1.default.yAxis);
        this.GetCamera("main").clearColor = new Vector4_1.default(1.0, 1.0, 1.0, 1.0);
        this.texts = this.gameObjectManager.AddGameObject("text");
        this.projectionPlane = this.gameObjectManager.AddGameObject("projectionPlane");
        //this.torus.SetComponent(new ModelDrawComponent("hsvTorus","caloryMaterial","pointLight",1)) as ModelDrawComponent;
        //this.cube.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,false)) as ModelDrawComponent;
        var tr = new Transform_1.default();
        tr.Position = new Vector3_1.default(1, 1, 1);
        var tr2 = new Transform_1.default();
        tr2.Position = new Vector3_1.default(-1, -1, 2);
        var transform = new Transform_1.default();
        transform.Scale = new Vector3_1.default(0.5, 0.5, 0.5);
        transform.Position = new Vector3_1.default(0, -1.0, 0);
        var pressAnyTransform = new Transform_1.default();
        pressAnyTransform.Scale = new Vector3_1.default(0.25, 0.25, 0.25);
        pressAnyTransform.Position = new Vector3_1.default(0, 1, 0);
        var pressTarget = new Transform_1.default();
        pressTarget.Scale = new Vector3_1.default(0.4, 0.4, 0.4);
        pressTarget.Position = new Vector3_1.default(0, 1, 0);
        this.texts.SetComponent(new TextDrawComponent_1.default("Title", "font", "fontShader", new Vector4_1.default(0.75, 0.75, 0.25, 1), 1, true, transform));
        this.texts.SetComponent(new TextDrawComponent_1.default("Press Any Key", "font", "fontShader", new Vector4_1.default(0.0, 0.0, 0.0, 1), 1, true, pressAnyTransform));
        this.texts.SetComponent(new TransformAnimation_1.default(60, true, pressTarget, pressAnyTransform));
        //this.anotherCube.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,true)) as ModelDrawComponent;
        this.projectionPlane.SetComponent(new ModelDrawComponent_1.default(false, "plane", "titleCameraMaterial", "texShader", 0, false));
        this.projectionPlane.transform.Scale = new Vector3_1.default(500, 500, 1);
        this.texts.transform.Position = new Vector3_1.default(0, 0, 0.5);
        this.projectionPlane.transform.Position = new Vector3_1.default(0, 0, -1);
    };
    TitleScene.prototype.OnUpdate = function () {
        // カウンタを元にラジアンを算出
        //console.log(this.projectionPlane.transform.Scale);
        //this.texts.transform.Position=(new Vector3( 0,slide/10,0));
    };
    TitleScene.prototype.OnStart = function () {
        Input_1.default.AddKeyDownEvent(this, "titleSceneEvent", true);
        if (this.IsLoaded()) {
            var trans = new Transform_1.default(new Vector3_1.default(0, 0, -1), new Vector3_1.default(0, 0, 0), new Vector3_1.default(500, 500, 1));
            this.texts.SetComponent(new TransformAnimation_1.default(90, false, trans, this.projectionPlane.transform, Easing_1.default.EaseInOutCirc));
        }
    };
    TitleScene.prototype.OnEnd = function () {
        Input_1.default.RemoveKeyDownEvent("titleSceneEvent");
        this.gameObjectManager.GetGameObject("sceneChanger").Dead();
    };
    TitleScene.prototype.OnKeyDown = function (e) {
        if (e.key != "Escape") {
            var sceneChangeObject = this.gameObjectManager.GetGameObject("sceneChanger");
            if (sceneChangeObject) {
                return;
            }
            this.sceneManager.GetResourceContainer().GetSound("title").Play();
            sceneChangeObject = this.gameObjectManager.AddGameObject("sceneChanger");
            sceneChangeObject.SetComponent(new SceneChanger_1.default("load", 100, null));
            var trans = new Transform_1.default(new Vector3_1.default(0, 0, -1), new Vector3_1.default(0, 0, 0), new Vector3_1.default(0, 0, 0));
            sceneChangeObject.SetComponent(new TransformAnimation_1.default(90, false, trans, this.projectionPlane.transform, Easing_1.default.EaseInOutCirc));
            sceneChangeObject.SetComponent(new SucideComponent_1.default(100));
        }
    };
    return TitleScene;
}(Scene_1.default));
exports.default = TitleScene;


/***/ }),

/***/ "./WebGl/Tool/BinaryReader.ts":
/*!************************************!*\
  !*** ./WebGl/Tool/BinaryReader.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BinaryReader = /** @class */ (function () {
    function BinaryReader(arg_buffer) {
        this.bufferView = new DataView(arg_buffer);
        this.point = 0;
    }
    BinaryReader.prototype.GetString = function (size) {
        var output = "";
        for (var i = 0; i < size; i++) {
            var read = this.bufferView.getInt8(this.point);
            if (read > 9)
                output += String.fromCharCode(read);
            else {
                switch (read) {
                    case 0:
                        output += "0";
                        break;
                    case 1:
                        output += "1";
                        break;
                    case 2:
                        output += "2";
                        break;
                    case 3:
                        output += "3";
                        break;
                    case 4:
                        output += "4";
                        break;
                    case 5:
                        output += "5";
                        break;
                    case 6:
                        output += "6";
                        break;
                    case 7:
                        output += "7";
                        break;
                    case 8:
                        output += "8";
                        break;
                    case 9:
                        output += "9";
                        break;
                }
            }
            this.point++;
        }
        return output;
    };
    BinaryReader.prototype.GetWString = function (size) {
        var output = "";
        for (var i = 0; i < size * 2; i++) {
            output += String.fromCharCode(this.bufferView.getInt8(this.point));
            this.point++;
        }
        return output;
    };
    BinaryReader.prototype.GetChar = function () {
        var output = this.bufferView.getInt8(this.point);
        this.point += 1;
        return output;
    };
    BinaryReader.prototype.GetFloat = function () {
        var output = this.bufferView.getFloat32(this.point, true);
        this.point += 4;
        return output;
    };
    BinaryReader.prototype.GetDouble = function () {
        var output = this.bufferView.getFloat64(this.point, true);
        this.point += 5;
        return output;
    };
    BinaryReader.prototype.GetInt = function (size) {
        if (!size) {
            var output = this.bufferView.getInt32(this.point, true);
            this.point += 4;
            return output;
        }
        if (size == 1) {
            var output = this.bufferView.getInt8(this.point);
            this.point += 1;
            return output;
        }
        else if (size == 2) {
            var output = this.bufferView.getInt16(this.point, true);
            this.point += 2;
            return output;
        }
        else if (size == 4) {
            var output = this.bufferView.getInt32(this.point, true);
            this.point += 4;
            return output;
        }
    };
    BinaryReader.prototype.GetUInt = function (size) {
        if (!size) {
            var output = this.bufferView.getUint32(this.point, true);
            this.point += 4;
            return output;
        }
        if (size == 1) {
            var output = this.bufferView.getUint8(this.point);
            this.point += 1;
            return output;
        }
        else if (size == 2) {
            var output = this.bufferView.getUint16(this.point, true);
            this.point += 2;
            return output;
        }
        else if (size == 4) {
            var output = this.bufferView.getUint32(this.point, true);
            this.point += 4;
            return output;
        }
    };
    return BinaryReader;
}());
exports.default = BinaryReader;


/***/ }),

/***/ "./WebGl/Tool/CollisionObjectCreater.ts":
/*!**********************************************!*\
  !*** ./WebGl/Tool/CollisionObjectCreater.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Box_AABB_1 = __importDefault(__webpack_require__(/*! ../Math/Geometry/Box_AABB */ "./WebGl/Math/Geometry/Box_AABB.ts"));
var Box_OBB_1 = __importDefault(__webpack_require__(/*! ../Math/Geometry/Box_OBB */ "./WebGl/Math/Geometry/Box_OBB.ts"));
var GeometryHelper_1 = __importDefault(__webpack_require__(/*! ../Math/Geometry/GeometryHelper */ "./WebGl/Math/Geometry/GeometryHelper.ts"));
var Sphere_1 = __importDefault(__webpack_require__(/*! ../Math/Geometry/Sphere */ "./WebGl/Math/Geometry/Sphere.ts"));
var Vector3_1 = __importDefault(__webpack_require__(/*! ../Math/Vector3 */ "./WebGl/Math/Vector3.ts"));
var CollisionObject_1 = __importDefault(__webpack_require__(/*! ../Parts/Collision/CollisionObject */ "./WebGl/Parts/Collision/CollisionObject.ts"));
var CollisionObjectCreater = /** @class */ (function () {
    function CollisionObjectCreater() {
    }
    CollisionObjectCreater.CreatePoint = function (arg_gameObject) {
        return new CollisionObject_1.default(arg_gameObject, new CollisionPrimitive_Point(arg_gameObject.transform));
    };
    CollisionObjectCreater.CreateSphere = function (arg_radius, arg_gameObject) {
        return new CollisionObject_1.default(arg_gameObject, new CollisionPrimitive_Sphere(arg_radius, arg_gameObject.transform));
    };
    CollisionObjectCreater.CreateCube_AABB = function (arg_length, arg_gameObject) {
        return new CollisionObject_1.default(arg_gameObject, new CollisionPrimitive_Box_AABB(arg_length, arg_gameObject.transform));
    };
    CollisionObjectCreater.CreateCube_OBB = function (arg_length, arg_gameObject) {
        return new CollisionObject_1.default(arg_gameObject, new CollisionPrimitive_Box_OBB(arg_length, arg_gameObject.transform));
    };
    return CollisionObjectCreater;
}());
exports.default = CollisionObjectCreater;
var CollisionPrimitive_Point = /** @class */ (function () {
    function CollisionPrimitive_Point(arg_transform) {
        this.transform = arg_transform;
        this.position = this.transform.Position;
    }
    CollisionPrimitive_Point.prototype.Initialize = function () {
    };
    CollisionPrimitive_Point.prototype.PreInitialize = function () {
    };
    CollisionPrimitive_Point.prototype.Update = function () {
        this.position = this.transform.Position;
    };
    CollisionPrimitive_Point.prototype.GetPosition = function () {
        return this.transform.Position;
    };
    CollisionPrimitive_Point.prototype.IsHit = function (other) {
        return other.IsHitPoint(this);
    };
    CollisionPrimitive_Point.prototype.GetMaxPointAndMinPoint = function (arg_outputMax, arg_outputMin) {
        var point = this.transform.Position;
        arg_outputMax.data = point.data;
        arg_outputMin.data = point.data;
    };
    CollisionPrimitive_Point.prototype.IsHitPoint = function (other) {
        return other.GetPosition() == this.GetPosition();
    };
    CollisionPrimitive_Point.prototype.IsHitSphere = function (other) {
        return GeometryHelper_1.default.IsHitPointSphere(this.position, other.geometry);
    };
    CollisionPrimitive_Point.prototype.IsHitBox_AABB = function (other) {
        return GeometryHelper_1.default.IsHitPointBox_AABB(this.position, other.geometry);
    };
    CollisionPrimitive_Point.prototype.IsHitBox_OBB = function (other) {
        return GeometryHelper_1.default.IsHitPointBox_OBB(this.position, other.geometry);
    };
    return CollisionPrimitive_Point;
}());
;
var CollisionPrimitive_Sphere = /** @class */ (function () {
    function CollisionPrimitive_Sphere(arg_radius, arg_transform) {
        this.transform = arg_transform;
        this.geometry = new Sphere_1.default(arg_radius, this.transform.Position, this.transform.Scale.x);
    }
    CollisionPrimitive_Sphere.prototype.Initialize = function () {
    };
    CollisionPrimitive_Sphere.prototype.PreInitialize = function () {
    };
    CollisionPrimitive_Sphere.prototype.GetMaxPointAndMinPoint = function (arg_outputMax, arg_outputMin) {
        arg_outputMax.data = this.geometry.position.Add(new Vector3_1.default(this.geometry.radius, this.geometry.radius, this.geometry.radius)).data;
        //console.log(arg_outputMax);
        arg_outputMin.data = this.geometry.position.Sub(new Vector3_1.default(this.geometry.radius, this.geometry.radius, this.geometry.radius)).data;
    };
    CollisionPrimitive_Sphere.prototype.Update = function () {
        this.geometry.position = this.transform.Position;
        this.geometry.radius = this.transform.Scale.x * this.geometry.initRadius;
    };
    CollisionPrimitive_Sphere.prototype.IsHit = function (other) {
        return other.IsHitSphere(this);
    };
    CollisionPrimitive_Sphere.prototype.IsHitBox_OBB = function (other) {
        return GeometryHelper_1.default.IsHitSphereBox_OBB(this.geometry, other.geometry);
    };
    CollisionPrimitive_Sphere.prototype.IsHitPoint = function (other) {
        return GeometryHelper_1.default.IsHitPointSphere(other.position, this.geometry);
    };
    CollisionPrimitive_Sphere.prototype.IsHitSphere = function (other) {
        return GeometryHelper_1.default.IsHitSphereSphere(this.geometry, other.geometry);
    };
    CollisionPrimitive_Sphere.prototype.IsHitBox_AABB = function (other) {
        return GeometryHelper_1.default.IsHitSphereBox_AABB(this.geometry, other.geometry);
    };
    return CollisionPrimitive_Sphere;
}());
;
var CollisionPrimitive_Box_AABB = /** @class */ (function () {
    function CollisionPrimitive_Box_AABB(arg_length, arg_weak_transform) {
        this.geometry = new Box_AABB_1.default(arg_length, arg_weak_transform.Position);
        this.transform = arg_weak_transform;
        this.geometry.initLengthes = arg_length.Div(2);
    }
    CollisionPrimitive_Box_AABB.prototype.Initialize = function () {
    };
    CollisionPrimitive_Box_AABB.prototype.PreInitialize = function () {
    };
    CollisionPrimitive_Box_AABB.prototype.GetMaxPointAndMinPoint = function (arg_outputMax, arg_outputMin) {
        arg_outputMax.data = this.geometry.position.Add(this.geometry.halfLengthes).data;
        arg_outputMin.data = this.geometry.position.Sub(this.geometry.halfLengthes).data;
    };
    CollisionPrimitive_Box_AABB.prototype.Update = function () {
        this.geometry.position = this.transform.Position;
        this.geometry.halfLengthes = this.geometry.initLengthes.Multiply_Vec3(this.transform.Scale);
    };
    CollisionPrimitive_Box_AABB.prototype.IsHit = function (other) {
        return other.IsHitBox_AABB(this);
    };
    CollisionPrimitive_Box_AABB.prototype.IsHitBox_OBB = function (other) {
        return GeometryHelper_1.default.IsHitBox_OBBBox_AABB(this.geometry, other.geometry);
    };
    CollisionPrimitive_Box_AABB.prototype.IsHitPoint = function (other) {
        return GeometryHelper_1.default.IsHitPointBox_AABB(other.position, this.geometry);
    };
    CollisionPrimitive_Box_AABB.prototype.IsHitSphere = function (other) {
        return GeometryHelper_1.default.IsHitSphereBox_AABB(other.geometry, this.geometry);
    };
    CollisionPrimitive_Box_AABB.prototype.IsHitBox_AABB = function (other) {
        return GeometryHelper_1.default.IsHitBox_AABB(this.geometry, other.geometry);
    };
    return CollisionPrimitive_Box_AABB;
}());
;
var CollisionPrimitive_Box_OBB = /** @class */ (function () {
    function CollisionPrimitive_Box_OBB(arg_length, arg_weak_transform) {
        this.geometry = new Box_OBB_1.default(arg_length);
        this.transform = arg_weak_transform;
        this.geometry.initLengthes = arg_length.Div(2);
    }
    CollisionPrimitive_Box_OBB.prototype.Initialize = function () {
    };
    CollisionPrimitive_Box_OBB.prototype.PreInitialize = function () {
    };
    CollisionPrimitive_Box_OBB.prototype.GetMaxPointAndMinPoint = function (arg_outputMax, arg_outputMin) {
        var aabb_legthes = GeometryHelper_1.default.GetBox_OBBContainAABBLength(this.geometry);
        arg_outputMax.data = this.geometry.position.Add(aabb_legthes).data;
        arg_outputMin.data = this.geometry.position.Sub(aabb_legthes).data;
    };
    CollisionPrimitive_Box_OBB.prototype.Update = function () {
        this.geometry.position = this.transform.Position;
        this.geometry.directs[0] = this.transform.GetRight();
        this.geometry.directs[1] = this.transform.GetUp();
        this.geometry.directs[2] = this.transform.GetFront();
        //console.log(this.geometry.directs[0]);
        this.geometry.halfLengthes = this.geometry.initLengthes.Multiply_Vec3(this.transform.Scale);
    };
    CollisionPrimitive_Box_OBB.prototype.IsHit = function (other) {
        return other.IsHitBox_OBB(this);
    };
    CollisionPrimitive_Box_OBB.prototype.IsHitBox_OBB = function (other) {
        return GeometryHelper_1.default.IsHitBox_OBB(other.geometry, this.geometry);
    };
    CollisionPrimitive_Box_OBB.prototype.IsHitPoint = function (other) {
        return GeometryHelper_1.default.IsHitPointBox_OBB(other.position, this.geometry);
    };
    CollisionPrimitive_Box_OBB.prototype.IsHitSphere = function (other) {
        return GeometryHelper_1.default.IsHitSphereBox_OBB(other.geometry, this.geometry);
    };
    CollisionPrimitive_Box_OBB.prototype.IsHitBox_AABB = function (other) {
        return GeometryHelper_1.default.IsHitBox_OBBBox_AABB(other.geometry, this.geometry);
    };
    return CollisionPrimitive_Box_OBB;
}());


/***/ }),

/***/ "./WebGl/Tool/ColorController.ts":
/*!***************************************!*\
  !*** ./WebGl/Tool/ColorController.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Vector4_1 = __importDefault(__webpack_require__(/*! ../Math/Vector4 */ "./WebGl/Math/Vector4.ts"));
var ColorController = /** @class */ (function () {
    function ColorController() {
    }
    ColorController.hsva = function (h, s, v, a) {
        if (s > 1 || v > 1 || a > 1) {
            return;
        }
        var th = h % 360;
        var i = Math.floor(th / 60);
        var f = th / 60 - i;
        var m = v * (1 - s);
        var n = v * (1 - s * f);
        var k = v * (1 - s * (1 - f));
        var color;
        if (!(s > 0) && !(s < 0)) {
            color = new Vector4_1.default(v, v, v, a);
        }
        else {
            var r = new Array(v, n, m, m, k, v);
            var g = new Array(k, v, v, n, m, m);
            var b = new Array(m, m, k, v, v, n);
            color = new Vector4_1.default(r[i], g[i], b[i], a);
        }
        return color;
    };
    return ColorController;
}());
exports.default = ColorController;


/***/ }),

/***/ "./WebGl/Tool/Easing.ts":
/*!******************************!*\
  !*** ./WebGl/Tool/Easing.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Easing = /** @class */ (function () {
    function Easing() {
    }
    Easing.EaseInSine = function (x) {
        return 1 - Math.cos((x * Math.PI) / 2);
    };
    Easing.EaseOutSine = function (x) {
        return Math.sin((x * Math.PI) / 2);
    };
    Easing.EaseInOutSine = function (x) {
        return -(Math.cos(Math.PI * x) - 1) / 2;
    };
    Easing.EaseInQuad = function (x) {
        return x * x;
    };
    Easing.EaseOutQuad = function (x) {
        return 1 - (1 - x) * (1 - x);
    };
    Easing.EaseInOutQuad = function (x) {
        return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
    };
    Easing.EaseInCubic = function (x) {
        return x * x * x;
    };
    Easing.EaseOutCubic = function (x) {
        return 1 - Math.pow(1 - x, 3);
    };
    Easing.EaseInOutCubic = function (x) {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    };
    Easing.EaseInQuart = function (x) {
        return x * x * x * x;
    };
    Easing.EaseOutQuart = function (x) {
        return 1 - Math.pow(1 - x, 4);
    };
    Easing.EaseInOutQuart = function (x) {
        return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
    };
    Easing.EaseInCirc = function (x) {
        return 1 - Math.sqrt(1 - Math.pow(x, 2));
    };
    Easing.EaseOutCirc = function (x) {
        return Math.sqrt(1 - Math.pow(x - 1, 2));
    };
    Easing.EaseInOutCirc = function (x) {
        return x < 0.5
            ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
            : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
    };
    Easing.EaseInBack = function (x) {
        var c1 = 1.70158;
        var c3 = c1 + 1;
        return c3 * x * x * x - c1 * x * x;
    };
    Easing.EaseOutBack = function (x) {
        var c1 = 1.70158;
        var c3 = c1 + 1;
        return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
    };
    Easing.EaseInOutBack = function (x) {
        var c1 = 1.70158;
        var c2 = c1 * 1.525;
        return x < 0.5
            ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
            : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    };
    Easing.EaseInElastic = function (x) {
        var c4 = (2 * Math.PI) / 3;
        return x === 0
            ? 0
            : x === 1
                ? 1
                : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
    };
    Easing.EaseOutElastic = function (x) {
        var c4 = (2 * Math.PI) / 3;
        return x === 0
            ? 0
            : x === 1
                ? 1
                : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
    };
    Easing.EaseInOutElastic = function (x) {
        var c5 = (2 * Math.PI) / 4.5;
        return x === 0
            ? 0
            : x === 1
                ? 1
                : x < 0.5
                    ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
                    : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
    };
    Easing.EaseInQuint = function (x) {
        return x * x * x * x * x;
    };
    Easing.EaseOutQuint = function (x) {
        return 1 - Math.pow(1 - x, 5);
    };
    Easing.EaseInOutQuint = function (x) {
        return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
    };
    Easing.EaseInExpo = function (x) {
        return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
    };
    Easing.EaseOutExpo = function (x) {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    };
    Easing.EaseInOutExpo = function (x) {
        return x === 0
            ? 0
            : x === 1
                ? 1
                : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
                    : (2 - Math.pow(2, -20 * x + 10)) / 2;
    };
    Easing.Parabola = function (x) {
        return -(x - 0.5) * (x - 0.5) * 4 + 1;
    };
    return Easing;
}());
exports.default = Easing;


/***/ }),

/***/ "./WebGl/Tool/FileLoader.ts":
/*!**********************************!*\
  !*** ./WebGl/Tool/FileLoader.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FileLoader = /** @class */ (function () {
    function FileLoader() {
    }
    FileLoader.LoadText = function (arg_filePath, isAsynch) {
        var xmlHttp = new XMLHttpRequest();
        if (isAsynch)
            xmlHttp.open("GET", arg_filePath, isAsynch);
        else {
            xmlHttp.open("GET", arg_filePath, false);
        }
        xmlHttp.send(null);
        var data = xmlHttp.responseText;
        return data;
    };
    FileLoader.LoadBin = function (arg_filePath, arg_out) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", arg_filePath, true);
        xmlHttp.responseType = "arraybuffer";
        xmlHttp.onload = function () {
            OnBinLoad(arg_out, xmlHttp.response);
        };
        xmlHttp.send(null);
    };
    return FileLoader;
}());
exports.default = FileLoader;
function OnBinLoad(arg_out, arg_aryBuffer) {
    arg_out.buffer = arg_aryBuffer;
    arg_out.Initialize();
}


/***/ }),

/***/ "./WebGl/Tool/GeometryGenerator.ts":
/*!*****************************************!*\
  !*** ./WebGl/Tool/GeometryGenerator.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ColorController_1 = __importDefault(__webpack_require__(/*! ./ColorController */ "./WebGl/Tool/ColorController.ts"));
var GeometryGenerater = /** @class */ (function () {
    function GeometryGenerater() {
    }
    GeometryGenerater.CreateTorus = function (row, column, irad, orad, color) {
        var pos = new Array(), nor = new Array(), col = new Array(), st = new Array(), idx = new Array();
        for (var i = 0; i <= row; i++) {
            var r = Math.PI * 2 / row * i;
            var rr = Math.cos(r);
            var ry = Math.sin(r);
            for (var ii = 0; ii <= column; ii++) {
                var tr = Math.PI * 2 / column * ii;
                var tx = (rr * irad + orad) * Math.cos(tr);
                var ty = ry * irad;
                var tz = (rr * irad + orad) * Math.sin(tr);
                var rx = rr * Math.cos(tr);
                var rz = rr * Math.sin(tr);
                var tc;
                if (color) {
                    tc = color;
                }
                else {
                    tc = ColorController_1.default.hsva(360 / column * ii, 1, 1, 1);
                }
                var rs = 1 / column * ii;
                var rt = 1 / row * i + 0.5;
                if (rt > 1.0) {
                    rt -= 1.0;
                }
                rt = 1.0 - rt;
                pos.push(tx, ty, tz);
                nor.push(rx, ry, rz);
                col.push(tc.x, tc.y, tc.z, tc.w);
                st.push(rs, rt);
            }
        }
        for (i = 0; i < row; i++) {
            for (ii = 0; ii < column; ii++) {
                r = (column + 1) * i + ii;
                idx.push(r, r + column + 1, r + 1);
                idx.push(r + column + 1, r + column + 2, r + 1);
            }
        }
        var output = { p: pos, n: nor, c: col, uv: st, i: idx };
        return output;
    };
    GeometryGenerater.CreateSphere = function (row, column, rad, color) {
        var pos = new Array(), nor = new Array(), col = new Array(), st = new Array(), idx = new Array();
        for (var i = 0; i <= row; i++) {
            var r = Math.PI / row * i;
            var ry = Math.cos(r);
            var rr = Math.sin(r);
            for (var ii = 0; ii <= column; ii++) {
                var tr = Math.PI * 2 / column * ii;
                var tx = rr * rad * Math.cos(tr);
                var ty = ry * rad;
                var tz = rr * rad * Math.sin(tr);
                var rx = rr * Math.cos(tr);
                var rz = rr * Math.sin(tr);
                var tc;
                if (color) {
                    tc = color;
                }
                else {
                    tc = ColorController_1.default.hsva(360 / row * i, 0.5, 0.5, 1.0);
                }
                pos.push(tx, ty, tz);
                nor.push(rx, ry, rz);
                col.push(tc.data[0], tc.data[1], tc.data[2], tc.data[3]);
                st.push(1 - 1 / column * ii, 1 / row * i);
            }
        }
        r = 0;
        for (i = 0; i < row; i++) {
            for (ii = 0; ii < column; ii++) {
                r = (column + 1) * i + ii;
                idx.push(r, r + 1, r + column + 2);
                idx.push(r, r + column + 2, r + column + 1);
            }
        }
        return { p: pos, n: nor, c: col, uv: st, i: idx };
    };
    GeometryGenerater.CreateCube = function (side, color) {
        var hs = side * 0.5;
        var pos = [
            -hs, -hs, hs, hs, -hs, hs, hs, hs, hs, -hs, hs, hs,
            -hs, -hs, -hs, -hs, hs, -hs, hs, hs, -hs, hs, -hs, -hs,
            -hs, hs, -hs, -hs, hs, hs, hs, hs, hs, hs, hs, -hs,
            -hs, -hs, -hs, hs, -hs, -hs, hs, -hs, hs, -hs, -hs, hs,
            hs, -hs, -hs, hs, hs, -hs, hs, hs, hs, hs, -hs, hs,
            -hs, -hs, -hs, -hs, -hs, hs, -hs, hs, hs, -hs, hs, -hs
        ];
        var nor = [
            -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0,
            -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0,
            -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,
            -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0,
            1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0,
            -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0
        ];
        var col = new Array();
        for (var i = 0; i < pos.length / 3; i++) {
            if (color) {
                var tc = color;
            }
            else {
                tc = ColorController_1.default.hsva(360 / pos.length / 3 * i, 1, 1, 1);
            }
            col.push(tc.x, tc.y, tc.z, tc.w);
        }
        var st = [
            0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
            0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
            0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
            0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
            0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
            0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0
        ];
        var idx = [
            0, 1, 2, 0, 2, 3,
            4, 5, 6, 4, 6, 7,
            8, 9, 10, 8, 10, 11,
            12, 13, 14, 12, 14, 15,
            16, 17, 18, 16, 18, 19,
            20, 21, 22, 20, 22, 23
        ];
        return { p: pos, n: nor, c: col, uv: st, i: idx };
    };
    GeometryGenerater.CreatePlane = function (arg_size, isReverse, arg_color) {
        var pos = new Array();
        var nor = new Array();
        var col = new Array();
        var idx = new Array();
        var uv = new Array();
        pos = [
            -arg_size.x, arg_size.y, 0.0,
            arg_size.x, arg_size.y, 0.0,
            -arg_size.x, -arg_size.y, 0.0,
            arg_size.x, -arg_size.y, 0.0,
        ];
        nor = [
            0.0, 0.0, -1.0,
            0.0, 0.0, -1.0,
            0.0, 0.0, -1.0,
            0.0, 0.0, -1.0,
        ];
        if (arg_color) {
            col = [
                arg_color.x, arg_color.y, arg_color.z, arg_color.w,
                arg_color.x, arg_color.y, arg_color.z, arg_color.w,
                arg_color.x, arg_color.y, arg_color.z, arg_color.w,
                arg_color.x, arg_color.y, arg_color.z, arg_color.w
            ];
        }
        else {
            col = [1, 1, 1, 1,
                1, 1, 1, 1,
                1, 1, 1, 1,
                1, 1, 1, 1
            ];
        }
        idx = [
            2, 3, 1,
            2, 1, 0,
        ];
        if (isReverse)
            uv = [
                0.0, 1.0,
                1.0, 1.0,
                0.0, 0.0,
                1.0, 0.0
            ];
        else {
            uv = [
                0.0, 0.0,
                1.0, 0.0,
                0.0, 1.0,
                1.0, 1.0
            ];
        }
        return { p: pos, n: nor, c: col, i: idx, uv: uv };
    };
    GeometryGenerater.CreateTextGeometry = function (textLength) {
        var pos = new Array();
        var idx = new Array();
        var uv = new Array();
        var unit = 1.0;
        var half = textLength / 2.0;
        for (var i = 0; i < textLength; i++) {
            pos.push(-unit * 0.5 + i * unit - unit * half, unit, 0.0);
            pos.push(unit * 0.5 + i * unit - unit * half, unit, 0.0);
            pos.push(-unit * 0.5 + i * unit - unit * half, -unit, 0.0);
            pos.push(unit * 0.5 + i * unit - unit * half, -unit, 0.0);
        }
        for (var i = 0; i < textLength; i++) {
            idx.push(2 + i * 4, 3 + i * 4, 1 + i * 4);
            idx.push(2 + i * 4, 1 + i * 4, 0 + i * 4);
        }
        for (var i = 0; i < textLength; i++) {
            uv.push(0.0, 1.0);
            uv.push(1.0, 1.0);
            uv.push(0.0, 0.0);
            uv.push(1.0, 0.0);
        }
        return { p: pos, i: idx, uv: uv };
    };
    return GeometryGenerater;
}());
exports.default = GeometryGenerater;


/***/ }),

/***/ "./WebGl/Tool/Input.ts":
/*!*****************************!*\
  !*** ./WebGl/Tool/Input.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Math/Vector2 */ "./WebGl/Math/Vector2.ts"));
var Input = /** @class */ (function () {
    function Input() {
    }
    Input.GetCanvasPosition = function (e) {
        return new Vector2_1.default(e.clientX - this.canvas.offsetLeft - this.canvas.width * 0.5, e.clientY - this.canvas.offsetTop - this.canvas.height * 0.5);
    };
    Input.AddClickEvent = function (arg_obj, arg_eventName, isUseEvent) {
        var event = this.clickEvents[arg_eventName];
        if (!event) {
            event = { obj: arg_obj, handleEvent: OnClick };
            this.clickEvents[arg_eventName] = event;
        }
        if (isUseEvent)
            this.canvas.addEventListener("click", event, isUseEvent);
        else {
            this.canvas.addEventListener("click", event, false);
        }
    };
    Input.AddMouseDownEvent = function (arg_obj, arg_eventName, isUseEvent) {
        var event = this.mouseDownEvents[arg_eventName];
        if (!event) {
            event = { obj: arg_obj, handleEvent: OnMouseDown };
            this.mouseDownEvents[arg_eventName] = event;
        }
        if (isUseEvent)
            this.canvas.addEventListener("mousedown", event, isUseEvent);
        else {
            this.canvas.addEventListener("mousedown", event, false);
        }
    };
    Input.AddMouseUpEvent = function (arg_obj, arg_eventName, isUseEvent) {
        var event = this.mouseUpEvents[arg_eventName];
        if (!event) {
            event = { obj: arg_obj, handleEvent: OnMouseUp };
            ;
            this.mouseUpEvents[arg_eventName] = event;
        }
        if (isUseEvent)
            this.canvas.addEventListener("mouseup", event, isUseEvent);
        else {
            this.canvas.addEventListener("mouseup", event, false);
        }
    };
    Input.AddKeyUpEvent = function (arg_obj, arg_eventName, isUseEvent) {
        var event = this.keyUpEvents[arg_eventName];
        if (event) {
            return;
        }
        console.log("AddKey");
        event = { obj: arg_obj, handleEvent: OnKeyUp };
        this.keyUpEvents[arg_eventName] = event;
        if (isUseEvent)
            document.addEventListener("keyup", event, isUseEvent);
        else {
            document.addEventListener("keyup", event, false);
        }
    };
    Input.AddKeyDownEvent = function (arg_obj, arg_eventName, isUseEvent) {
        var event = this.keyDownEvents[arg_eventName];
        if (event) {
            return;
        }
        event = { obj: arg_obj, handleEvent: OnKeyDown };
        this.keyDownEvents[arg_eventName] = event;
        if (isUseEvent)
            document.addEventListener("keydown", event, isUseEvent);
        else {
            document.addEventListener("keydown", event, false);
        }
    };
    Input.AddMouseMoveEvent = function (arg_obj, arg_eventName, isUseEvent) {
        var event = this.mouseMoveEvents[arg_eventName];
        if (!event) {
            event = { obj: arg_obj, handleEvent: OnMouseMove };
            this.mouseMoveEvents[arg_eventName] = event;
        }
        if (isUseEvent)
            this.canvas.addEventListener("mousemove", event, isUseEvent);
        else {
            this.canvas.addEventListener("mousemove", event, false);
        }
    };
    Input.AddMouseWheelEvent = function (arg_obj, arg_eventName, isUseEvent) {
        var event = this.mouseWheelEvents[arg_eventName];
        if (!event) {
            event = { obj: arg_obj, handleEvent: OnMouseWheel };
            this.mouseWheelEvents[arg_eventName] = event;
        }
        if (isUseEvent)
            this.canvas.addEventListener("mousewheel", event, isUseEvent);
        else {
            this.canvas.addEventListener("mousewheel", event, false);
        }
    };
    Input.RemoveKeyDownEvent = function (arg_eventName) {
        var event = this.keyDownEvents[arg_eventName];
        if (event) {
            console.log(arg_eventName);
            document.removeEventListener("keydown", event, true);
            this.keyDownEvents[arg_eventName] = null;
        }
    };
    Input.RemoveKeyUpEvent = function (arg_eventName) {
        var event = this.keyUpEvents[arg_eventName];
        if (event) {
            document.removeEventListener("keyup", event, true);
            this.keyUpEvents[arg_eventName] = null;
        }
    };
    Input.RemoveClickEvent = function (arg_eventName) {
        var event = this.clickEvents[arg_eventName];
        if (event) {
            document.removeEventListener("click", event, true);
            this.clickEvents[arg_eventName] = null;
        }
    };
    Input.RemoveMouseUpEvent = function (arg_eventName) {
        var event = this.mouseUpEvents[arg_eventName];
        if (event) {
            document.removeEventListener("mouseup", event, true);
            this.mouseUpEvents[arg_eventName] = null;
        }
    };
    Input.RemoveMouseDownEvent = function (arg_eventName) {
        var event = this.mouseDownEvents[arg_eventName];
        if (event) {
            document.removeEventListener("mosedown", event, true);
            this.mouseDownEvents[arg_eventName] = null;
        }
    };
    Input.RemoveMouseMoveEvent = function (arg_eventName) {
        var event = this.mouseMoveEvents[arg_eventName];
        if (event) {
            document.removeEventListener("mousemove", event, true);
            this.mouseMoveEvents[arg_eventName] = null;
        }
    };
    Input.RemoveWheelEvent = function (arg_eventName) {
        var event = this.mouseWheelEvents[arg_eventName];
        if (event) {
            document.removeEventListener("mousewheel", event, true);
            this.mouseWheelEvents[arg_eventName] = null;
        }
    };
    Input.clickEvents = new Map();
    Input.mouseDownEvents = new Map();
    Input.mouseUpEvents = new Map();
    Input.keyUpEvents = new Map();
    Input.keyDownEvents = new Map();
    Input.mouseMoveEvents = new Map();
    Input.mouseWheelEvents = new Map();
    return Input;
}());
exports.default = Input;
function OnClick(e) {
    this.obj.OnClick(e);
}
function OnKeyDown(e) {
    this.obj.OnKeyDown(e);
}
function OnKeyUp(e) {
    this.obj.OnKeyUp(e);
}
function OnMouseUp(e) {
    this.obj.OnMouseUp(e);
}
function OnMouseDown(e) {
    this.obj.OnMouseUp(e);
}
function OnMouseMove(e) {
    this.obj.OnMouseMove(e);
}
function OnMouseWheel(e) {
    this.obj.OnMouseWheel(e);
}


/***/ }),

/***/ "./WebGl/Tool/MathHelper.ts":
/*!**********************************!*\
  !*** ./WebGl/Tool/MathHelper.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rad = Math.PI / 180;
var sinRets = new Float32Array(360);
var MathHelper = /** @class */ (function () {
    function MathHelper() {
    }
    Object.defineProperty(MathHelper.prototype, "Rad", {
        get: function () {
            return rad;
        },
        enumerable: false,
        configurable: true
    });
    MathHelper.InitSinRets = function () {
        if (this.isInitSin) {
            return;
        }
        for (var i = 0; i < 360; i++) {
            sinRets[i] = Math.sin(this.ToRadian(i));
        }
        this.isInitSin = true;
    };
    MathHelper.ToRadian = function (degree) {
        return degree * rad;
    };
    MathHelper.GetSinPos = function (arg_t) {
        return sinRets[arg_t % 360];
    };
    MathHelper.isInitSin = false;
    return MathHelper;
}());
exports.default = MathHelper;


/***/ }),

/***/ "./WebGl/Tool/ResourceCreater.ts":
/*!***************************************!*\
  !*** ./WebGl/Tool/ResourceCreater.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Texture_1 = __importDefault(__webpack_require__(/*! ../Resource/Texture */ "./WebGl/Resource/Texture.ts"));
var Material_1 = __importDefault(__webpack_require__(/*! ../Resource/Material */ "./WebGl/Resource/Material.ts"));
var Shader_1 = __importDefault(__webpack_require__(/*! ../Resource/Shader */ "./WebGl/Resource/Shader.ts"));
var Geometry_1 = __importDefault(__webpack_require__(/*! ../Resource/Geometry */ "./WebGl/Resource/Geometry.ts"));
var Vector4_1 = __importDefault(__webpack_require__(/*! ../Math/Vector4 */ "./WebGl/Math/Vector4.ts"));
var FrameBufferTexture_1 = __importDefault(__webpack_require__(/*! ../Resource/FrameBufferTexture */ "./WebGl/Resource/FrameBufferTexture.ts"));
var Mesh_1 = __importDefault(__webpack_require__(/*! ../Resource/Mesh */ "./WebGl/Resource/Mesh.ts"));
var FileLoader_1 = __importDefault(__webpack_require__(/*! ./FileLoader */ "./WebGl/Tool/FileLoader.ts"));
var BinaryReader_1 = __importDefault(__webpack_require__(/*! ../Tool/BinaryReader */ "./WebGl/Tool/BinaryReader.ts"));
var Sound_1 = __importDefault(__webpack_require__(/*! ../Resource/Sound */ "./WebGl/Resource/Sound.ts"));
var VertexType;
(function (VertexType) {
    VertexType[VertexType["Vertex_UV"] = 0] = "Vertex_UV";
    VertexType[VertexType["Vertex_Normal"] = 1] = "Vertex_Normal";
    VertexType[VertexType["Vertex_UV_Normal"] = 2] = "Vertex_UV_Normal";
    VertexType[VertexType["Vertex_UV_Normal_Color"] = 3] = "Vertex_UV_Normal_Color";
    VertexType[VertexType["Vertex_Model_SingleBone"] = 4] = "Vertex_Model_SingleBone";
    VertexType[VertexType["Vertex_Model_DoubleBone"] = 5] = "Vertex_Model_DoubleBone";
    VertexType[VertexType["Vertex_Model_QuadBone"] = 6] = "Vertex_Model_QuadBone";
    VertexType[VertexType["Vertex_Model_SDEFBone"] = 7] = "Vertex_Model_SDEFBone";
    VertexType[VertexType["Vertex_Model_Mix"] = 8] = "Vertex_Model_Mix";
})(VertexType || (VertexType = {}));
function GetDirectory(arg_path) {
    var splited = arg_path.split("/");
    var output = "";
    for (var i = 0; i < splited.length - 1; i++) {
        output += splited[i] + "/";
    }
    return output;
}
var B3MHolder = /** @class */ (function () {
    function B3MHolder() {
    }
    B3MHolder.prototype.Initialize = function () {
        var geometry;
        var ary_material = new Array();
        this.bufferReader = new BinaryReader_1.default(this.buffer);
        {
            //hederTest
            var headStr = this.bufferReader.GetString(15);
            if (headStr != "Buti3DModelData")
                return;
        }
        //modelの名前など  
        {
            var version = this.bufferReader.GetFloat();
            //0でstd::wstring ,1でstd::string
            var encodeType = this.bufferReader.GetChar();
            var textCount = this.bufferReader.GetInt();
            //制作者の名前の読み込み
            {
                var nameStr;
                if (encodeType) {
                    nameStr = this.bufferReader.GetString(textCount);
                }
                else {
                    nameStr = this.bufferReader.GetWString(textCount);
                }
            }
            //制作者の名前の読み込み(eng)
            {
                textCount = this.bufferReader.GetInt();
                var nameStr;
                if (encodeType) {
                    nameStr = this.bufferReader.GetString(textCount);
                }
                else {
                    nameStr = this.bufferReader.GetWString(textCount);
                }
            }
            //モデル名
            {
                textCount = this.bufferReader.GetInt();
                var nameWStr;
                if (encodeType) {
                    nameWStr = this.bufferReader.GetString(textCount);
                }
                else {
                    nameWStr = this.bufferReader.GetWString(textCount);
                }
            }
            //モデル名英
            {
                textCount = this.bufferReader.GetInt();
                var nameWStr;
                if (encodeType) {
                    nameWStr = this.bufferReader.GetString(textCount);
                }
                else {
                    nameWStr = this.bufferReader.GetWString(textCount);
                }
            }
            //コメント
            {
                textCount = this.bufferReader.GetInt();
                var nameWStr;
                if (encodeType) {
                    nameWStr = (this.bufferReader.GetString(textCount));
                }
                else {
                    nameWStr = this.bufferReader.GetWString(textCount);
                }
            }
            //コメント英
            {
                textCount = this.bufferReader.GetInt();
                var nameWStr;
                if (encodeType) {
                    nameWStr = this.bufferReader.GetString(textCount);
                }
                else {
                    nameWStr = this.bufferReader.GetWString(textCount);
                }
            }
        }
        //頂点インデックスのバイト数
        var vertexIndexByteSize = this.bufferReader.GetChar();
        //マテリアルインデックスのバイト数
        var materialIndexByteSize = this.bufferReader.GetChar();
        //ボーンインデックスのバイト数
        var boneIndexByteCount = this.bufferReader.GetChar();
        //モーフインデックスのバイト数
        var morphIndexByteSize = this.bufferReader.GetChar();
        //頂点構造体の列挙型
        var type = this.bufferReader.GetChar();
        var uvExCount = this.bufferReader.GetChar();
        var vertexCount = this.bufferReader.GetUInt(vertexIndexByteSize);
        switch (type) {
            case VertexType.Vertex_UV_Normal:
                {
                    switch (uvExCount) {
                        case 0:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        case 1:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var exuv_1 = new Array(4 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                    exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        case 2:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var exuv_1 = new Array(4 * vertexCount);
                                var exuv_2 = new Array(4 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                    exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_2.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        case 3:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var exuv_1 = new Array(4 * vertexCount);
                                var exuv_2 = new Array(4 * vertexCount);
                                var exuv_3 = new Array(4 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                    exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_2.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_3.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        case 4:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var exuv_1 = new Array(4 * vertexCount);
                                var exuv_2 = new Array(4 * vertexCount);
                                var exuv_3 = new Array(4 * vertexCount);
                                var exuv_4 = new Array(4 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                    exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_2.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_3.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_4.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        default:
                            break;
                    }
                }
                break;
            case VertexType.Vertex_Model_SingleBone:
                {
                    switch (uvExCount) {
                        case 0:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                var boneIndex = new Array(vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                    boneIndex[i] = this.bufferReader.GetInt(2);
                                    ;
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        case 1:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var exuv_1 = new Array(4 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                var boneIndex = new Array(vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                    exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                    boneIndex[i] = this.bufferReader.GetInt(2);
                                    ;
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        case 2:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var exuv_1 = new Array(4 * vertexCount);
                                var exuv_2 = new Array(4 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                var boneIndex = new Array(vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                    exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_2.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                    boneIndex[i] = this.bufferReader.GetInt(2);
                                    ;
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        case 3:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var exuv_1 = new Array(4 * vertexCount);
                                var exuv_2 = new Array(4 * vertexCount);
                                var exuv_3 = new Array(4 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                var boneIndex = new Array(vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                    exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_2.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_3.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                    boneIndex[i] = this.bufferReader.GetInt(2);
                                    ;
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        case 4:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var exuv_1 = new Array(4 * vertexCount);
                                var exuv_2 = new Array(4 * vertexCount);
                                var exuv_3 = new Array(4 * vertexCount);
                                var exuv_4 = new Array(4 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                var boneIndex = new Array(vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                    exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_2.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_3.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_4.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                    boneIndex[i] = this.bufferReader.GetInt(2);
                                    ;
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        default:
                            break;
                    }
                }
                break;
            case VertexType.Vertex_Model_DoubleBone:
                {
                    switch (uvExCount) {
                        case 0:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                var boneIndex = new Array(vertexCount);
                                var boneIndex2 = new Array(vertexCount);
                                var boneWeight = new Array(vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                    boneIndex[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneIndex2[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneWeight[i] = this.bufferReader.GetFloat();
                                    ;
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        case 1:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var exuv_1 = new Array(4 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                var boneIndex = new Array(vertexCount);
                                var boneIndex2 = new Array(vertexCount);
                                var boneWeight = new Array(vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                    exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                    boneIndex[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneIndex2[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneWeight[i] = this.bufferReader.GetFloat();
                                    ;
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        case 2:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var exuv_1 = new Array(4 * vertexCount);
                                var exuv_2 = new Array(4 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                var boneIndex = new Array(vertexCount);
                                var boneIndex2 = new Array(vertexCount);
                                var boneWeight = new Array(vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                    exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_2.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                    boneIndex[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneIndex2[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneWeight[i] = this.bufferReader.GetFloat();
                                    ;
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        case 3:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var exuv_1 = new Array(4 * vertexCount);
                                var exuv_2 = new Array(4 * vertexCount);
                                var exuv_3 = new Array(4 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                var boneIndex = new Array(vertexCount);
                                var boneIndex2 = new Array(vertexCount);
                                var boneWeight = new Array(vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                    exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_2.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_3.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                    boneIndex[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneIndex2[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneWeight[i] = this.bufferReader.GetFloat();
                                    ;
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        case 4:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var exuv_1 = new Array(4 * vertexCount);
                                var exuv_2 = new Array(4 * vertexCount);
                                var exuv_3 = new Array(4 * vertexCount);
                                var exuv_4 = new Array(4 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                var boneIndex = new Array(vertexCount);
                                var boneIndex2 = new Array(vertexCount);
                                var boneWeight = new Array(vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                    exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_2.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_3.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_4.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                    boneIndex[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneIndex2[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneWeight[i] = this.bufferReader.GetFloat();
                                    ;
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        default:
                            break;
                    }
                }
                break;
            case VertexType.Vertex_Model_QuadBone:
                {
                    switch (uvExCount) {
                        case 0:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                var boneIndex = new Array(vertexCount);
                                var boneIndex2 = new Array(vertexCount);
                                var boneIndex3 = new Array(vertexCount);
                                var boneIndex4 = new Array(vertexCount);
                                var boneWeight = new Array(vertexCount);
                                var boneWeight2 = new Array(vertexCount);
                                var boneWeight3 = new Array(vertexCount);
                                var boneWeight4 = new Array(vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 1] = -this.bufferReader.GetFloat();
                                    pos[i * 3 + 2] = -this.bufferReader.GetFloat();
                                    uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                    boneIndex[i] = this.bufferReader.GetInt(2);
                                    boneIndex2[i] = this.bufferReader.GetInt(2);
                                    boneIndex3[i] = this.bufferReader.GetInt(2);
                                    boneIndex4[i] = this.bufferReader.GetInt(2);
                                    boneWeight[i] = this.bufferReader.GetFloat();
                                    boneWeight2[i] = this.bufferReader.GetFloat();
                                    boneWeight3[i] = this.bufferReader.GetFloat();
                                    boneWeight4[i] = this.bufferReader.GetFloat();
                                }
                                console.log(pos);
                                console.log(vertexIndexByteSize);
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        case 1:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var exuv_1 = new Array(4 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                var boneIndex = new Array(vertexCount);
                                var boneIndex2 = new Array(vertexCount);
                                var boneIndex3 = new Array(vertexCount);
                                var boneIndex4 = new Array(vertexCount);
                                var boneWeight = new Array(vertexCount);
                                var boneWeight2 = new Array(vertexCount);
                                var boneWeight3 = new Array(vertexCount);
                                var boneWeight4 = new Array(vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                    exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                    boneIndex[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneIndex2[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneIndex3[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneIndex4[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneWeight[i] = this.bufferReader.GetFloat();
                                    ;
                                    boneWeight2[i] = this.bufferReader.GetFloat();
                                    ;
                                    boneWeight3[i] = this.bufferReader.GetFloat();
                                    ;
                                    boneWeight4[i] = this.bufferReader.GetFloat();
                                    ;
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        case 2:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var exuv_1 = new Array(4 * vertexCount);
                                var exuv_2 = new Array(4 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                var boneIndex = new Array(vertexCount);
                                var boneIndex2 = new Array(vertexCount);
                                var boneIndex3 = new Array(vertexCount);
                                var boneIndex4 = new Array(vertexCount);
                                var boneWeight = new Array(vertexCount);
                                var boneWeight2 = new Array(vertexCount);
                                var boneWeight3 = new Array(vertexCount);
                                var boneWeight4 = new Array(vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                    exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_2.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                    boneIndex[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneIndex2[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneIndex3[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneIndex4[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneWeight[i] = this.bufferReader.GetFloat();
                                    ;
                                    boneWeight2[i] = this.bufferReader.GetFloat();
                                    ;
                                    boneWeight3[i] = this.bufferReader.GetFloat();
                                    ;
                                    boneWeight4[i] = this.bufferReader.GetFloat();
                                    ;
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        case 3:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var exuv_1 = new Array(4 * vertexCount);
                                var exuv_2 = new Array(4 * vertexCount);
                                var exuv_3 = new Array(4 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                var boneIndex = new Array(vertexCount);
                                var boneIndex2 = new Array(vertexCount);
                                var boneIndex3 = new Array(vertexCount);
                                var boneIndex4 = new Array(vertexCount);
                                var boneWeight = new Array(vertexCount);
                                var boneWeight2 = new Array(vertexCount);
                                var boneWeight3 = new Array(vertexCount);
                                var boneWeight4 = new Array(vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                    exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_2.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_3.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                    boneIndex[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneIndex2[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneIndex3[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneIndex4[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneWeight[i] = this.bufferReader.GetFloat();
                                    ;
                                    boneWeight2[i] = this.bufferReader.GetFloat();
                                    ;
                                    boneWeight3[i] = this.bufferReader.GetFloat();
                                    ;
                                    boneWeight4[i] = this.bufferReader.GetFloat();
                                    ;
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        case 4:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var exuv_1 = new Array(4 * vertexCount);
                                var exuv_2 = new Array(4 * vertexCount);
                                var exuv_3 = new Array(4 * vertexCount);
                                var exuv_4 = new Array(4 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                var boneIndex = new Array(vertexCount);
                                var boneIndex2 = new Array(vertexCount);
                                var boneIndex3 = new Array(vertexCount);
                                var boneIndex4 = new Array(vertexCount);
                                var boneWeight = new Array(vertexCount);
                                var boneWeight2 = new Array(vertexCount);
                                var boneWeight3 = new Array(vertexCount);
                                var boneWeight4 = new Array(vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                    pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                    uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                    exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_2.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_3.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    exuv_4.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                    normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                    normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                    boneIndex[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneIndex2[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneIndex3[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneIndex4[i] = this.bufferReader.GetInt(2);
                                    ;
                                    boneWeight[i] = this.bufferReader.GetFloat();
                                    ;
                                    boneWeight2[i] = this.bufferReader.GetFloat();
                                    ;
                                    boneWeight3[i] = this.bufferReader.GetFloat();
                                    ;
                                    boneWeight4[i] = this.bufferReader.GetFloat();
                                    ;
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        default:
                            break;
                    }
                }
                break;
            case VertexType.Vertex_Model_SDEFBone:
                {
                    alert("sdef is not support.");
                }
                break;
            case VertexType.Vertex_Model_Mix:
                {
                    switch (uvExCount) {
                        case 0:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                var boneIndex = new Array(vertexCount);
                                var boneIndex2 = new Array(vertexCount);
                                var boneIndex3 = new Array(vertexCount);
                                var boneIndex4 = new Array(vertexCount);
                                var boneWeight = new Array(vertexCount);
                                var boneWeight2 = new Array(vertexCount);
                                var boneWeight3 = new Array(vertexCount);
                                var boneWeight4 = new Array(vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    switch (vertexType) {
                                        case VertexType.Vertex_Model_SingleBone:
                                            {
                                                pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                                boneIndex[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex2.push(-1);
                                                boneIndex3.push(-1);
                                                boneIndex4.push(-1);
                                                boneWeight.push(1.0);
                                                boneWeight2.push(0);
                                                boneWeight3.push(0);
                                                boneWeight4.push(0);
                                            }
                                            break;
                                        case VertexType.Vertex_Model_DoubleBone:
                                            {
                                                pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                                boneIndex[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex2[i] = this.bufferReader.GetInt(2);
                                                ;
                                                var weight = this.bufferReader.GetFloat();
                                                boneWeight.push(weight);
                                                boneIndex3.push(-1);
                                                boneIndex4.push(-1);
                                                boneWeight2.push(1.0 - weight);
                                                boneWeight3.push(0);
                                                boneWeight4.push(0);
                                            }
                                            break;
                                        case VertexType.Vertex_Model_QuadBone:
                                            {
                                                pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                                boneIndex[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex2[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex3[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex4[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneWeight[i] = this.bufferReader.GetFloat();
                                                ;
                                                boneWeight2[i] = this.bufferReader.GetFloat();
                                                ;
                                                boneWeight3[i] = this.bufferReader.GetFloat();
                                                ;
                                                boneWeight4[i] = this.bufferReader.GetFloat();
                                                ;
                                            }
                                            break;
                                        case VertexType.Vertex_Model_SDEFBone:
                                            {
                                                alert("sdef is not supported.");
                                            }
                                            break;
                                        default:
                                            break;
                                    }
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        case 1:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var exuv_1 = new Array(4 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                var boneIndex = new Array(vertexCount);
                                var boneIndex2 = new Array(vertexCount);
                                var boneIndex3 = new Array(vertexCount);
                                var boneIndex4 = new Array(vertexCount);
                                var boneWeight = new Array(vertexCount);
                                var boneWeight2 = new Array(vertexCount);
                                var boneWeight3 = new Array(vertexCount);
                                var boneWeight4 = new Array(vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    switch (vertexType) {
                                        case VertexType.Vertex_Model_SingleBone:
                                            {
                                                pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                                exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                                boneIndex[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex2.push(-1);
                                                boneIndex3.push(-1);
                                                boneIndex4.push(-1);
                                                boneWeight.push(1.0);
                                                boneWeight2.push(0);
                                                boneWeight3.push(0);
                                                boneWeight4.push(0);
                                            }
                                            break;
                                        case VertexType.Vertex_Model_DoubleBone:
                                            {
                                                pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                                exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                                boneIndex[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex2[i] = this.bufferReader.GetInt(2);
                                                ;
                                                var weight = this.bufferReader.GetFloat();
                                                boneWeight.push(weight);
                                                boneIndex3.push(-1);
                                                boneIndex4.push(-1);
                                                boneWeight2.push(1.0 - weight);
                                                boneWeight3.push(0);
                                                boneWeight4.push(0);
                                            }
                                            break;
                                        case VertexType.Vertex_Model_QuadBone:
                                            {
                                                pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                                exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                                boneIndex[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex2[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex3[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex4[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneWeight[i] = this.bufferReader.GetFloat();
                                                ;
                                                boneWeight2[i] = this.bufferReader.GetFloat();
                                                ;
                                                boneWeight3[i] = this.bufferReader.GetFloat();
                                                ;
                                                boneWeight4[i] = this.bufferReader.GetFloat();
                                                ;
                                            }
                                            break;
                                        case VertexType.Vertex_Model_SDEFBone:
                                            {
                                                alert("sdef is not supported.");
                                            }
                                            break;
                                        default:
                                            break;
                                    }
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        case 2:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var exuv_1 = new Array(4 * vertexCount);
                                var exuv_2 = new Array(4 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                var boneIndex = new Array(vertexCount);
                                var boneIndex2 = new Array(vertexCount);
                                var boneIndex3 = new Array(vertexCount);
                                var boneIndex4 = new Array(vertexCount);
                                var boneWeight = new Array(vertexCount);
                                var boneWeight2 = new Array(vertexCount);
                                var boneWeight3 = new Array(vertexCount);
                                var boneWeight4 = new Array(vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    switch (vertexType) {
                                        case VertexType.Vertex_Model_SingleBone:
                                            {
                                                pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                                exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                exuv_2.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                                boneIndex[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex2.push(-1);
                                                boneIndex3.push(-1);
                                                boneIndex4.push(-1);
                                                boneWeight.push(1.0);
                                                boneWeight2.push(0);
                                                boneWeight3.push(0);
                                                boneWeight4.push(0);
                                            }
                                            break;
                                        case VertexType.Vertex_Model_DoubleBone:
                                            {
                                                pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                                exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                exuv_2.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                                boneIndex[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex2[i] = this.bufferReader.GetInt(2);
                                                ;
                                                var weight = this.bufferReader.GetFloat();
                                                boneWeight.push(weight);
                                                boneIndex3.push(-1);
                                                boneIndex4.push(-1);
                                                boneWeight2.push(1.0 - weight);
                                                boneWeight3.push(0);
                                                boneWeight4.push(0);
                                            }
                                            break;
                                        case VertexType.Vertex_Model_QuadBone:
                                            {
                                                pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                                exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                exuv_2.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                                boneIndex[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex2[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex3[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex4[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneWeight[i] = this.bufferReader.GetFloat();
                                                ;
                                                boneWeight2[i] = this.bufferReader.GetFloat();
                                                ;
                                                boneWeight3[i] = this.bufferReader.GetFloat();
                                                ;
                                                boneWeight4[i] = this.bufferReader.GetFloat();
                                                ;
                                            }
                                            break;
                                        case VertexType.Vertex_Model_SDEFBone:
                                            {
                                                alert("sdef is not supported.");
                                            }
                                            break;
                                        default:
                                            break;
                                    }
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        case 3:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var exuv_1 = new Array(4 * vertexCount);
                                var exuv_2 = new Array(4 * vertexCount);
                                var exuv_3 = new Array(4 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                var boneIndex = new Array(vertexCount);
                                var boneIndex2 = new Array(vertexCount);
                                var boneIndex3 = new Array(vertexCount);
                                var boneIndex4 = new Array(vertexCount);
                                var boneWeight = new Array(vertexCount);
                                var boneWeight2 = new Array(vertexCount);
                                var boneWeight3 = new Array(vertexCount);
                                var boneWeight4 = new Array(vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    switch (vertexType) {
                                        case VertexType.Vertex_Model_SingleBone:
                                            {
                                                pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                                exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                exuv_2.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                exuv_3.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                                boneIndex[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex2.push(-1);
                                                boneIndex3.push(-1);
                                                boneIndex4.push(-1);
                                                boneWeight.push(1.0);
                                                boneWeight2.push(0);
                                                boneWeight3.push(0);
                                                boneWeight4.push(0);
                                            }
                                            break;
                                        case VertexType.Vertex_Model_DoubleBone:
                                            {
                                                pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                                exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                exuv_2.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                exuv_3.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                                boneIndex[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex2[i] = this.bufferReader.GetInt(2);
                                                ;
                                                var weight = this.bufferReader.GetFloat();
                                                boneWeight.push(weight);
                                                boneIndex3.push(-1);
                                                boneIndex4.push(-1);
                                                boneWeight2.push(1.0 - weight);
                                                boneWeight3.push(0);
                                                boneWeight4.push(0);
                                            }
                                            break;
                                        case VertexType.Vertex_Model_QuadBone:
                                            {
                                                pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                                exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                exuv_2.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                exuv_3.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                                boneIndex[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex2[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex3[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex4[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneWeight[i] = this.bufferReader.GetFloat();
                                                ;
                                                boneWeight2[i] = this.bufferReader.GetFloat();
                                                ;
                                                boneWeight3[i] = this.bufferReader.GetFloat();
                                                ;
                                                boneWeight4[i] = this.bufferReader.GetFloat();
                                                ;
                                            }
                                            break;
                                        case VertexType.Vertex_Model_SDEFBone:
                                            {
                                                alert("sdef is not supported.");
                                            }
                                            break;
                                        default:
                                            break;
                                    }
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        case 4:
                            {
                                var pos = new Array(3 * vertexCount);
                                var uv = new Array(2 * vertexCount);
                                var exuv_1 = new Array(4 * vertexCount);
                                var exuv_2 = new Array(4 * vertexCount);
                                var exuv_3 = new Array(4 * vertexCount);
                                var exuv_4 = new Array(4 * vertexCount);
                                var normal = new Array(3 * vertexCount);
                                var boneIndex = new Array(vertexCount);
                                var boneIndex2 = new Array(vertexCount);
                                var boneIndex3 = new Array(vertexCount);
                                var boneIndex4 = new Array(vertexCount);
                                var boneWeight = new Array(vertexCount);
                                var boneWeight2 = new Array(vertexCount);
                                var boneWeight3 = new Array(vertexCount);
                                var boneWeight4 = new Array(vertexCount);
                                for (var i = 0; i < vertexCount; i++) {
                                    var vertexType = this.bufferReader.GetChar();
                                    switch (vertexType) {
                                        case VertexType.Vertex_Model_SingleBone:
                                            {
                                                pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                                exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                exuv_2.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                exuv_3.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                exuv_4.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                                boneIndex[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex2.push(-1);
                                                boneIndex3.push(-1);
                                                boneIndex4.push(-1);
                                                boneWeight.push(1.0);
                                                boneWeight2.push(0);
                                                boneWeight3.push(0);
                                                boneWeight4.push(0);
                                            }
                                            break;
                                        case VertexType.Vertex_Model_DoubleBone:
                                            {
                                                pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                                exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                exuv_2.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                exuv_3.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                exuv_4.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                                boneIndex[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex2[i] = this.bufferReader.GetInt(2);
                                                ;
                                                var weight = this.bufferReader.GetFloat();
                                                boneWeight.push(weight);
                                                boneIndex3.push(-1);
                                                boneIndex4.push(-1);
                                                boneWeight2.push(1.0 - weight);
                                                boneWeight3.push(0);
                                                boneWeight4.push(0);
                                            }
                                            break;
                                        case VertexType.Vertex_Model_QuadBone:
                                            {
                                                pos[i * 3 + 0] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 1] = this.bufferReader.GetFloat();
                                                pos[i * 3 + 2] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 0] = this.bufferReader.GetFloat();
                                                uv[i * 2 + 1] = this.bufferReader.GetFloat();
                                                exuv_1.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                exuv_2.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                exuv_3.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                exuv_4.push(this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat(), this.bufferReader.GetFloat());
                                                normal[i * 3 + 0] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 1] = this.bufferReader.GetFloat();
                                                normal[i * 3 + 2] = this.bufferReader.GetFloat();
                                                boneIndex[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex2[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex3[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneIndex4[i] = this.bufferReader.GetInt(2);
                                                ;
                                                boneWeight[i] = this.bufferReader.GetFloat();
                                                ;
                                                boneWeight2[i] = this.bufferReader.GetFloat();
                                                ;
                                                boneWeight3[i] = this.bufferReader.GetFloat();
                                                ;
                                                boneWeight4[i] = this.bufferReader.GetFloat();
                                                ;
                                            }
                                            break;
                                        case VertexType.Vertex_Model_SDEFBone:
                                            {
                                                alert("sdef is not supported.");
                                            }
                                            break;
                                        default:
                                            break;
                                    }
                                }
                                var idx = this.ReadIndex(vertexIndexByteSize);
                                geometry = ResourceCreater.CreateGeometry({ p: pos, n: normal, uv: uv, i: idx }, true, true, false, this.graphicDevice);
                            }
                            break;
                        default:
                            break;
                    }
                }
                break;
            default:
                break;
        }
        var materialCount;
        materialCount = this.bufferReader.GetInt(materialIndexByteSize);
        var subset = new Array(materialCount);
        var dir = GetDirectory(this.filePath);
        for (var i = 0; i < materialCount; i++) {
            var fileNameCount = this.bufferReader.GetInt();
            if (encodeType) {
                var materialFilePath = this.bufferReader.GetString(fileNameCount);
                ary_material.push(ResourceCreater.CreateMaterialFromFile(dir + materialFilePath, this.container, this.graphicDevice));
            }
            else {
                var materialFilePath = this.bufferReader.GetWString(fileNameCount);
                ary_material.push(ResourceCreater.CreateMaterialFromFile(dir + materialFilePath, this.container, this.graphicDevice));
            }
            subset[i] = (this.bufferReader.GetInt());
        }
        geometry.SetSubset(subset);
        this.mesh.SetParameter(geometry, ary_material);
        this.container.LoadEnd();
    };
    B3MHolder.prototype.ReadIndex = function (vertexIndexByteSize) {
        //インデックスの読み込み
        var indexCount = this.bufferReader.GetInt();
        var idx = new Array(indexCount * 3);
        for (var i = 0; i < indexCount * 3; i++) {
            idx[i] = (this.bufferReader.GetUInt(vertexIndexByteSize));
        }
        return idx;
    };
    return B3MHolder;
}());
var MaterialBinLoader = /** @class */ (function () {
    function MaterialBinLoader() {
    }
    MaterialBinLoader.prototype.Initialize = function () {
        var mat;
        var materialReader = new BinaryReader_1.default(this.buffer);
        var magic = materialReader.GetString(16);
        if (magic != "ButiMaterialData") {
            console.log("ファイルが違います");
            return;
        }
        var version = materialReader.GetFloat();
        //0でstd::wstring ,1でstd::string
        var encodeType = materialReader.GetChar();
        {
            var materialNameCount = materialReader.GetInt();
            if (encodeType) {
                materialReader.GetString(materialNameCount);
            }
            else {
                materialReader.GetWString(materialNameCount);
            }
        }
        //マテリアル名英
        {
            var materialNameCount = materialReader.GetInt();
            if (encodeType) {
                materialReader.GetString(materialNameCount);
            }
            else {
                materialReader.GetWString(materialNameCount);
            }
        }
        //テクスチャ
        var textureCount = materialReader.GetChar();
        var ary_texture = new Array();
        var dir = GetDirectory(this.filePath);
        for (var i = 0; i < textureCount; i++) {
            var texNameCount = materialReader.GetInt();
            if (texNameCount < 0) {
                ary_texture.push(this.container.AddTextureFromFile("", this.graphicDevice));
            }
            else if (encodeType) {
                var textureName = materialReader.GetString(texNameCount);
                ary_texture.push(this.container.AddTextureFromFile(dir + "../" + textureName, this.graphicDevice));
            }
            else {
                var textureName = materialReader.GetWString(texNameCount);
                ary_texture.push(this.container.AddTextureFromFile(dir + "../" + textureName, this.graphicDevice));
            }
        }
        //マテリアル
        var diffuse = new Vector4_1.default(materialReader.GetFloat(), materialReader.GetFloat(), materialReader.GetFloat(), materialReader.GetFloat());
        var specular = new Vector4_1.default(materialReader.GetFloat(), materialReader.GetFloat(), materialReader.GetFloat(), materialReader.GetFloat());
        var ambient = new Vector4_1.default(materialReader.GetFloat(), materialReader.GetFloat(), materialReader.GetFloat(), materialReader.GetFloat());
        var emissive = new Vector4_1.default(materialReader.GetFloat(), materialReader.GetFloat(), materialReader.GetFloat(), materialReader.GetFloat());
        var byteFlag = materialReader.GetChar();
        var sphereFlag = materialReader.GetChar();
        {
            var materialNameCount = materialReader.GetInt();
            if (encodeType) {
                materialReader.GetString(materialNameCount);
            }
            else {
                materialReader.GetWString(materialNameCount);
            }
        }
        this.material.SetParameter(ambient, this.graphicDevice, ary_texture);
        this.container.LoadEnd();
    };
    return MaterialBinLoader;
}());
var ResourceCreater = /** @class */ (function () {
    function ResourceCreater() {
    }
    ResourceCreater.CreateGeometry = function (data, isUV, isNormal, isColor, arg_device) {
        return new Geometry_1.default(data, isUV, isNormal, isColor, arg_device);
    };
    ResourceCreater.CreateMaterial = function (arg_ambient, arg_device, arg_ary_texture, arg_ary_exParms) {
        var mat = new Material_1.default();
        mat.SetParameter(arg_ambient, arg_device, arg_ary_texture, arg_ary_exParms);
        return mat;
    };
    ResourceCreater.CreateShader = function (vsSource, fsSource, arg_graphicDevice) {
        return new Shader_1.default(vsSource, fsSource, arg_graphicDevice);
    };
    ResourceCreater.CreateSound = function (arg_soundSorce) {
        return new Sound_1.default(arg_soundSorce);
    };
    ResourceCreater.CreateTexture = function (arg_path, arg_device) {
        var tex = new Texture_1.default(arg_path, arg_device);
        tex.Initialize();
        return tex;
    };
    ResourceCreater.CreateFrameBuffer = function (width, height, arg_device) {
        return new FrameBufferTexture_1.default(arg_device, width, height);
    };
    ResourceCreater.CreateMeshResourceFromFile = function (arg_filePath, resourceContainer, arg_device) {
        var out = new Mesh_1.default();
        var holder = new B3MHolder();
        resourceContainer.LoadStart();
        holder.graphicDevice = arg_device;
        holder.container = resourceContainer;
        holder.filePath = arg_filePath;
        holder.mesh = out;
        FileLoader_1.default.LoadBin(arg_filePath, holder);
        return out;
    };
    ResourceCreater.CreateMaterialFromFile = function (arg_filePath, resourceContainer, arg_device) {
        var out = new Material_1.default();
        var holder = new MaterialBinLoader();
        resourceContainer.LoadStart();
        holder.graphicDevice = arg_device;
        holder.container = resourceContainer;
        holder.filePath = arg_filePath;
        holder.material = out;
        FileLoader_1.default.LoadBin(arg_filePath, holder);
        return out;
    };
    return ResourceCreater;
}());
exports.default = ResourceCreater;


/***/ }),

/***/ "./WebGl/Transform.ts":
/*!****************************!*\
  !*** ./WebGl/Transform.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Matrix_1 = __importDefault(__webpack_require__(/*! ./Math/Matrix */ "./WebGl/Math/Matrix.ts"));
var Vector3_1 = __importDefault(__webpack_require__(/*! ./Math/Vector3 */ "./WebGl/Math/Vector3.ts"));
var MathHelper_1 = __importDefault(__webpack_require__(/*! ./Tool/MathHelper */ "./WebGl/Tool/MathHelper.ts"));
var calcMatrix4x4 = new Matrix_1.default().Identity();
var Transform = /** @class */ (function () {
    function Transform(position, rotation, scale) {
        if (position) {
            this.position = position;
        }
        else
            this.position = new Vector3_1.default(0, 0, 0);
        if (scale) {
            this.scale = scale;
        }
        else {
            this.scale = new Vector3_1.default(1, 1, 1);
        }
        this.rotation = new Matrix_1.default().Identity();
        if (rotation) {
            this.rotation.Rotate_b(MathHelper_1.default.ToRadian(rotation.z), Vector3_1.default.zAxis).Multiply_b(new Matrix_1.default().Identity().Rotate_b(MathHelper_1.default.ToRadian(rotation.y), Vector3_1.default.yAxis)).Multiply_b(new Matrix_1.default().Identity().Rotate_b(MathHelper_1.default.ToRadian(rotation.x), Vector3_1.default.xAxis));
        }
        this.generateFunc = this.ScaleRotationTranslate;
    }
    Object.defineProperty(Transform.prototype, "Position", {
        get: function () {
            var mat = this.Matrix;
            return new Vector3_1.default(mat.data[12], mat.data[13], mat.data[14]);
        },
        set: function (value) {
            this.position.x = value.x;
            this.position.y = value.y;
            this.position.z = value.z;
            if (this.matrix) {
                this.matrix.data[12] = this.position.x;
                this.matrix.data[13] = this.position.y;
                this.matrix.data[14] = this.position.z;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "LocalPosition", {
        get: function () {
            return this.position.Clone();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "Rotation", {
        get: function () {
            if (this.baseTransform != null) {
                return this.baseTransform.Rotation.Multiply(this.rotation);
            }
            else
                return this.rotation;
        },
        set: function (value) {
            this.rotation = value.Clone();
            this.matrix = null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "Scale", {
        get: function () {
            return this.scale.Clone();
        },
        set: function (value) {
            this.scale.x = value.x;
            this.scale.y = value.y;
            this.scale.z = value.z;
            this.matrix = null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "Matrix", {
        get: function () {
            if (this.matrix == null)
                this.generateFunc();
            if (this.baseTransform != null) {
                return this.baseTransform.Matrix.Multiply(this.matrix);
            }
            else {
                return this.matrix;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "LocalMatrix", {
        get: function () {
            if (this.matrix == null)
                this.generateFunc();
            return this.matrix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "BaseTransform", {
        get: function () {
            return this.baseTransform;
        },
        set: function (arg_base) {
            this.baseTransform = arg_base;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "SetPosition", {
        get: function () {
            this.matrix = null;
            return this.position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "SetScale", {
        get: function () {
            this.matrix = null;
            return this.scale;
        },
        enumerable: false,
        configurable: true
    });
    Transform.prototype.GetFront = function () {
        return Vector3_1.default.zAxis.Multiply_Matrix(this.Rotation).Normalize_b();
    };
    Transform.prototype.GetRight = function () {
        return Vector3_1.default.xAxis.Multiply_Matrix(this.Rotation).Normalize_b();
    };
    Transform.prototype.GetUp = function () {
        return Vector3_1.default.yAxis.Multiply_Matrix(this.Rotation).Normalize_b();
    };
    Transform.prototype.ScaleRotationTranslate = function () {
        this.matrix = new Matrix_1.default();
        this.matrix.Identity();
        this.matrix.Translate_b(this.position);
        this.matrix.Multiply_b(this.rotation);
        this.matrix.Scale_b(this.scale);
    };
    Transform.prototype.LookAt = function (arg_targetPos, arg_upAxis) {
        this.rotation.Identity();
        var z = (arg_targetPos.Sub(this.Position)).Normalize().Multiply(-1);
        var x = arg_upAxis.Cross(z).Normalize();
        var y = z.Cross(x).Normalize();
        this.rotation.data[0] = x.x;
        this.rotation.data[1] = x.y;
        this.rotation.data[2] = x.z;
        this.rotation.data[4] = y.x;
        this.rotation.data[5] = y.y;
        this.rotation.data[6] = y.z;
        this.rotation.data[8] = z.x;
        this.rotation.data[9] = z.y;
        this.rotation.data[10] = z.z;
        this.matrix = null;
    };
    Transform.prototype.ScaleTranslateRotation = function () {
        this.matrix = new Matrix_1.default();
        this.matrix.Identity();
        this.matrix.Multiply_b(this.rotation);
        this.matrix.Translate_b(this.position);
        this.matrix.Scale_b(this.scale);
    };
    Transform.prototype.Translate = function (arg_velocity) {
        this.position.x = this.position.x + arg_velocity.x;
        this.position.y = this.position.y + arg_velocity.y;
        this.position.z = this.position.z + arg_velocity.z;
        if (this.matrix) {
            this.matrix.data[12] = this.position.x;
            this.matrix.data[13] = this.position.y;
            this.matrix.data[14] = this.position.z;
        }
    };
    Transform.prototype.TranslateX = function (arg_x) {
        this.position.data[0] += arg_x;
        if (this.matrix) {
            this.matrix.data[12] = this.position.x;
        }
    };
    Transform.prototype.TranslateY = function (arg_y) {
        this.position.data[1] += arg_y;
        if (this.matrix) {
            this.matrix.data[13] = this.position.y;
        }
    };
    Transform.prototype.TranslateZ = function (arg_z) {
        this.position.data[2] += arg_z;
        if (this.matrix) {
            this.matrix.data[14] = this.position.z;
        }
    };
    Transform.prototype.SetPositionX = function (arg_x) {
        this.position.data[0] = arg_x;
        if (this.matrix) {
            this.matrix.data[12] = this.position.x;
        }
    };
    Transform.prototype.SetPositionY = function (arg_y) {
        this.position.data[1] = arg_y;
        if (this.matrix) {
            this.matrix.data[13] = arg_y;
        }
    };
    Transform.prototype.SetPositionZ = function (arg_z) {
        this.position.data[2] = arg_z;
        if (this.matrix) {
            this.matrix.data[14] = this.position.z;
        }
    };
    Transform.prototype.Roll_Local = function (arg_rotateMatrix) {
        this.rotation.Multiply_b(arg_rotateMatrix);
        this.matrix = null;
    };
    Transform.prototype.Roll_World = function (arg_rotateMatrix) {
        this.rotation = arg_rotateMatrix.Multiply(this.rotation);
        this.matrix = null;
    };
    Transform.prototype.RollX_Local_Degrees = function (arg_degrees) {
        this.RollX_Local_Radians(MathHelper_1.default.ToRadian(arg_degrees));
    };
    Transform.prototype.RollX_Local_Radians = function (arg_radians) {
        calcMatrix4x4.Identity();
        calcMatrix4x4.Rotate_b(arg_radians, Vector3_1.default.xAxis);
        this.rotation.Multiply_b(calcMatrix4x4);
        this.matrix = null;
    };
    Transform.prototype.RollX_World_Degrees = function (arg_degrees) {
        this.RollX_World_Radians(MathHelper_1.default.ToRadian(arg_degrees));
    };
    Transform.prototype.RollX_World_Radians = function (arg_radians) {
        calcMatrix4x4.Identity();
        calcMatrix4x4.Rotate_b(arg_radians, Vector3_1.default.xAxis);
        this.rotation = calcMatrix4x4.Multiply(this.rotation);
        this.matrix = null;
    };
    Transform.prototype.RollY_Local_Degrees = function (arg_degrees) {
        this.RollY_Local_Radians(MathHelper_1.default.ToRadian(arg_degrees));
    };
    Transform.prototype.RollY_Local_Radians = function (arg_radians) {
        calcMatrix4x4.Identity();
        calcMatrix4x4.Rotate_b(arg_radians, Vector3_1.default.yAxis);
        this.rotation.Multiply_b(calcMatrix4x4);
        this.matrix = null;
    };
    Transform.prototype.RollY_World_Degrees = function (arg_degrees) {
        this.RollY_World_Radians(MathHelper_1.default.ToRadian(arg_degrees));
    };
    Transform.prototype.RollY_World_Radians = function (arg_radians) {
        calcMatrix4x4.Identity();
        calcMatrix4x4.Rotate_b(arg_radians, Vector3_1.default.yAxis);
        this.rotation = calcMatrix4x4.Multiply(this.rotation);
        this.matrix = null;
    };
    Transform.prototype.RollZ_Local_Degrees = function (arg_degrees) {
        this.RollZ_Local_Radians(MathHelper_1.default.ToRadian(arg_degrees));
    };
    Transform.prototype.RollZ_Local_Radians = function (arg_radians) {
        calcMatrix4x4.Identity();
        calcMatrix4x4.Rotate_b(arg_radians, Vector3_1.default.zAxis);
        this.rotation.Multiply_b(calcMatrix4x4);
        this.matrix = null;
    };
    Transform.prototype.RollZ_World_Degrees = function (arg_degrees) {
        this.RollZ_World_Radians(MathHelper_1.default.ToRadian(arg_degrees));
    };
    Transform.prototype.RollZ_World_Radians = function (arg_radians) {
        calcMatrix4x4.Identity();
        calcMatrix4x4.Rotate_b(arg_radians, Vector3_1.default.zAxis);
        this.rotation = calcMatrix4x4.Multiply(this.rotation);
        this.matrix = null;
    };
    Transform.prototype.Clone = function () {
        var out = new Transform(this.LocalPosition);
        out.scale = this.scale;
        out.rotation = this.rotation;
        out.baseTransform = this.baseTransform;
        return out;
    };
    return Transform;
}());
exports.default = Transform;


/***/ }),

/***/ "./WebGl/index.ts":
/*!************************!*\
  !*** ./WebGl/index.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GraphicDevice_1 = __importDefault(__webpack_require__(/*! ./Graphic/GraphicDevice */ "./WebGl/Graphic/GraphicDevice.ts"));
var ResourceContainer_1 = __importDefault(__webpack_require__(/*! ./Parts/ResourceContainer */ "./WebGl/Parts/ResourceContainer.ts"));
var ModelCreater_1 = __importDefault(__webpack_require__(/*! ./Parts/ModelCreater */ "./WebGl/Parts/ModelCreater.ts"));
var SceneManager_1 = __importDefault(__webpack_require__(/*! ./Scene/SceneManager */ "./WebGl/Scene/SceneManager.ts"));
var Input_1 = __importDefault(__webpack_require__(/*! ./Tool/Input */ "./WebGl/Tool/Input.ts"));
var TitleScene_1 = __importDefault(__webpack_require__(/*! ./TitleScene */ "./WebGl/TitleScene.ts"));
var LoadScene_1 = __importDefault(__webpack_require__(/*! ./LoadScene */ "./WebGl/LoadScene.ts"));
onload = function () {
    console.log("this js is webGL/index.ts");
    //canvasエレメントを取得
    var canvas = document.getElementById('myCanvas');
    //audioElement.volume=0.0;
    canvas.setAttribute('tabindex', "");
    Input_1.default.canvas = canvas;
    var resourceContainer = new ResourceContainer_1.default();
    var graphicDevice = new GraphicDevice_1.default(canvas);
    var modelCreater = new ModelCreater_1.default(graphicDevice, resourceContainer);
    var sceneManager = new SceneManager_1.default(modelCreater, resourceContainer, graphicDevice);
    sceneManager.AddScene(new TitleScene_1.default(sceneManager), "title");
    sceneManager.AddScene(new LoadScene_1.default(sceneManager), "load");
    sceneManager.ChangeScene("title");
    tick();
    // 恒常ループ
    function tick() {
        sceneManager.Update();
        //console.log(Input.mousePosition.x+","+Input.mousePosition.x);
        requestAnimationFrame(tick);
    }
    ;
};


/***/ }),

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(/*! ./WebGl/index */ "./WebGl/index.ts")

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvQ29tcG9uZW50L0NhbWVyYUNoYXNlci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Db21wb25lbnQvQ29sbGlzaW9uQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL1dlYkdsL0NvbXBvbmVudC9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvQ29tcG9uZW50L01vZGVsRHJhd0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Db21wb25lbnQvUG9wcGluZ0FuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Db21wb25lbnQvU2NlbmVDaGFuZ2VyLnRzIiwid2VicGFjazovLy8uL1dlYkdsL0NvbXBvbmVudC9TdWNpZGVDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvQ29tcG9uZW50L1RleHREcmF3Q29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL1dlYkdsL0NvbXBvbmVudC9UcmFuc2Zvcm1BbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvQ3Jvc3N5TG9hZF9Db3B5L1BsYXllckNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Dcm9zc3lMb2FkX0NvcHkvU3RhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvR2FtZU9iamVjdC9HYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy8uL1dlYkdsL0dhbWVPYmplY3QvR2FtZU9iamVjdE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvR3JhcGhpYy9DYW1lcmEudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvR3JhcGhpYy9HcmFwaGljRGV2aWNlLnRzIiwid2VicGFjazovLy8uL1dlYkdsL0dyYXBoaWMvTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvR3JhcGhpYy9UZXh0TW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvTGlnaHQvUG9pbnRMaWdodC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Mb2FkU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvTWF0aC9HZW9tZXRyeS9Cb3hfQUFCQi50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9NYXRoL0dlb21ldHJ5L0JveF9PQkIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvTWF0aC9HZW9tZXRyeS9HZW9tZXRyeUhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9NYXRoL0dlb21ldHJ5L1NwaGVyZS50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9NYXRoL01hdHJpeC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9NYXRoL1F1YXQudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvTWF0aC9WZWN0b3IyLnRzIiwid2VicGFjazovLy8uL1dlYkdsL01hdGgvVmVjdG9yMy50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9NYXRoL1ZlY3RvcjQudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvUGFydHMvQ29sbGlzaW9uL0NvbGxpc2lvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvUGFydHMvQ29sbGlzaW9uL0NvbGxpc2lvbk9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9QYXJ0cy9Db2xsaXNpb24vT2N0Q2VsbC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9QYXJ0cy9Db2xsaXNpb24vT2N0cmVlLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1BhcnRzL0dhbWVPYmplY3RJRE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvUGFydHMvR2FtZVRpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvUGFydHMvSUQudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvUGFydHMvTW9kZWxDcmVhdGVyLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1BhcnRzL1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1BhcnRzL1Jlc291cmNlQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1Jlc291cmNlL0ZyYW1lQnVmZmVyVGV4dHVyZS50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9SZXNvdXJjZS9HZW9tZXRyeS50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9SZXNvdXJjZS9NYXRlcmlhbC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9SZXNvdXJjZS9NZXNoLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1Jlc291cmNlL1NoYWRlci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9SZXNvdXJjZS9Tb3VuZC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9SZXNvdXJjZS9UZXh0dXJlLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1NhbXBsZVNjZW5lLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1NjZW5lL1NjZW5lLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1NjZW5lL1NjZW5lTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9UaXRsZVNjZW5lLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1Rvb2wvQmluYXJ5UmVhZGVyLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1Rvb2wvQ29sbGlzaW9uT2JqZWN0Q3JlYXRlci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Ub29sL0NvbG9yQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Ub29sL0Vhc2luZy50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Ub29sL0ZpbGVMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvVG9vbC9HZW9tZXRyeUdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Ub29sL0lucHV0LnRzIiwid2VicGFjazovLy8uL1dlYkdsL1Rvb2wvTWF0aEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Ub29sL1Jlc291cmNlQ3JlYXRlci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9UcmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qiw4RUFBOEU7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQ0FBZ0MsbUJBQU8sQ0FBQyxnREFBaUI7QUFDekQsa0NBQWtDLG1CQUFPLENBQUMsbURBQWE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDL0RhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qiw4RUFBOEU7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxrQ0FBa0MsbUJBQU8sQ0FBQyxtREFBYTtBQUN2RCwrQ0FBK0MsbUJBQU8sQ0FBQyw4RUFBZ0M7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQ0FBc0M7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDaEVhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUM1Q2E7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLDhFQUE4RTtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGtDQUFrQyxtQkFBTyxDQUFDLG1EQUFhO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzdFYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsOEVBQThFO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsK0JBQStCLG1CQUFPLENBQUMsOENBQWdCO0FBQ3ZELGtDQUFrQyxtQkFBTyxDQUFDLG1EQUFhO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzVHYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsOEVBQThFO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsa0NBQWtDLG1CQUFPLENBQUMsbURBQWE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN2Q2E7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLDhFQUE4RTtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGtDQUFrQyxtQkFBTyxDQUFDLG1EQUFhO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ25DYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsOEVBQThFO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsa0NBQWtDLG1CQUFPLENBQUMsbURBQWE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDM0RhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qiw4RUFBOEU7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCwrQkFBK0IsbUJBQU8sQ0FBQyw4Q0FBZ0I7QUFDdkQsa0NBQWtDLG1CQUFPLENBQUMsbURBQWE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDakZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qiw4RUFBOEU7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQ0FBZ0MsbUJBQU8sQ0FBQyxnREFBaUI7QUFDekQsOEJBQThCLG1CQUFPLENBQUMsNENBQWU7QUFDckQsa0NBQWtDLG1CQUFPLENBQUMsMENBQWM7QUFDeEQsa0NBQWtDLG1CQUFPLENBQUMsOERBQXdCO0FBQ2xFLDJDQUEyQyxtQkFBTyxDQUFDLGdGQUFpQztBQUNwRiwyQ0FBMkMsbUJBQU8sQ0FBQyxnRkFBaUM7QUFDcEYseUNBQXlDLG1CQUFPLENBQUMsNEVBQStCO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2hJYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQscUNBQXFDLG1CQUFPLENBQUMsb0VBQTJCO0FBQ3hFLDJDQUEyQyxtQkFBTyxDQUFDLGdGQUFpQztBQUNwRixnQ0FBZ0MsbUJBQU8sQ0FBQyxnREFBaUI7QUFDekQsa0NBQWtDLG1CQUFPLENBQUMsMENBQWM7QUFDeEQsd0NBQXdDLG1CQUFPLENBQUMscUVBQW1CO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0NBQXNDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHFCQUFxQixFQUFFO0FBQ3RFO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNwRGE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDRDQUE0QyxtQkFBTyxDQUFDLDBFQUE4QjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELDZCQUE2QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esc0RBQXNELDJCQUEyQixFQUFFO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsMkJBQTJCLEVBQUU7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELDJCQUEyQixFQUFFO0FBQ25GLGtFQUFrRSwyQkFBMkIsRUFBRTtBQUMvRiwwQ0FBMEMsd0JBQXdCLEVBQUU7QUFDcEUsdUVBQXVFLDRCQUE0QixFQUFFO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxzREFBc0QsRUFBRTtBQUNwSDtBQUNBO0FBQ0E7QUFDQSxzREFBc0Qsa0NBQWtDLEVBQUU7QUFDMUY7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2xHYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsbUNBQW1DLG1CQUFPLENBQUMsc0RBQWM7QUFDekQsa0NBQWtDLG1CQUFPLENBQUMsMENBQWM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELHFCQUFxQixFQUFFO0FBQ3hFLGdEQUFnRCxxQkFBcUIsRUFBRSwwQkFBMEIscUJBQXFCLEVBQUU7QUFDeEgsbUVBQW1FLHNCQUFzQixFQUFFO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELHNCQUFzQixFQUFFO0FBQzVFO0FBQ0EsaURBQWlELHNCQUFzQixFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbkZhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCwrQkFBK0IsbUJBQU8sQ0FBQyw4Q0FBZ0I7QUFDdkQsa0NBQWtDLG1CQUFPLENBQUMsMENBQWM7QUFDeEQsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQWlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2hEYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQWlCO0FBQ3pELGdDQUFnQyxtQkFBTyxDQUFDLGdEQUFpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25PYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxzQkFBc0IsRUFBRTtBQUN0RTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxzQkFBc0IsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2hIYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3REYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsa0NBQWtDLG1CQUFPLENBQUMsMENBQWM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDaEJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qiw4RUFBOEU7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsOEJBQThCLG1CQUFPLENBQUMsNkNBQWU7QUFDckQsd0NBQXdDLG1CQUFPLENBQUMsK0RBQXdCO0FBQ3hFLDBDQUEwQyxtQkFBTyxDQUFDLG1FQUEwQjtBQUM1RSw2QkFBNkIsbUJBQU8sQ0FBQyx5Q0FBYTtBQUNsRCxnQ0FBZ0MsbUJBQU8sQ0FBQywrQ0FBZ0I7QUFDeEQsZ0NBQWdDLG1CQUFPLENBQUMsK0NBQWdCO0FBQ3hELG1DQUFtQyxtQkFBTyxDQUFDLHVEQUFvQjtBQUMvRCwyQ0FBMkMsbUJBQU8sQ0FBQywrRUFBZ0M7QUFDbkYsZ0NBQWdDLG1CQUFPLENBQUMsK0NBQWdCO0FBQ3hELDBDQUEwQyxtQkFBTyxDQUFDLDZFQUErQjtBQUNqRixrQ0FBa0MsbUJBQU8sQ0FBQyx5Q0FBYTtBQUN2RCxvQ0FBb0MsbUJBQU8sQ0FBQyw2Q0FBZTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNDQUFzQztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN2S2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Qsa0VBQWtFO0FBQ3BILGtEQUFrRCxrRUFBa0U7QUFDcEg7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2xCYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0NBQWdDLG1CQUFPLENBQUMsMkNBQVk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxlQUFlO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUMxV2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNaYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsNkJBQTZCLG1CQUFPLENBQUMsb0NBQVE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3JiYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsK0JBQStCLG1CQUFPLENBQUMsd0NBQVU7QUFDakQsZ0NBQWdDLG1CQUFPLENBQUMsMENBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ25OYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDeEdhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNoTGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDcklhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQ0FBZ0MsbUJBQU8sQ0FBQyxtREFBb0I7QUFDNUQsK0JBQStCLG1CQUFPLENBQUMsbURBQVU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUNBQWlDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxzQkFBc0IsRUFBRTtBQUN0RTtBQUNBO0FBQ0EsOENBQThDLHdCQUF3QixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzdEYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDM0NhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNsQ2E7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGdDQUFnQyxtQkFBTyxDQUFDLG1EQUFvQjtBQUM1RCwyQkFBMkIsbUJBQU8sQ0FBQyxrQ0FBTztBQUMxQyxnQ0FBZ0MsbUJBQU8sQ0FBQyxxREFBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwyQkFBMkI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlDQUF5QztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHdCQUF3QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFlBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0thO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCwyQkFBMkIsbUJBQU8sQ0FBQyxpQ0FBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbEJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUM5Q2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDWGE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDhCQUE4QixtQkFBTyxDQUFDLGtEQUFrQjtBQUN4RCx3Q0FBd0MsbUJBQU8sQ0FBQyxnRUFBeUI7QUFDekUsMENBQTBDLG1CQUFPLENBQUMsb0VBQTJCO0FBQzdFLGtDQUFrQyxtQkFBTyxDQUFDLDBEQUFzQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0Y7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN4RWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDJCQUEyQixtQkFBTyxDQUFDLGlDQUFNO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHlCQUF5QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxzQkFBc0IsRUFBRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx3QkFBd0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDaEZhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCx3Q0FBd0MsbUJBQU8sQ0FBQyxnRUFBeUI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNuSWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbERhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDdkNhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELG9EQUFvRCxFQUFFO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzlFYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNYYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsbUNBQW1DLG1CQUFPLENBQUMsc0RBQW9CO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyxvRUFBb0UsMENBQTBDLEVBQUU7QUFDaEg7QUFDQSx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0E7QUFDQSxtREFBbUQsbURBQW1ELEVBQUU7QUFDeEcsdUJBQXVCLCtCQUErQjtBQUN0RCwrRUFBK0UsZ0JBQWdCLEVBQUU7QUFDakc7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLG1DQUFtQztBQUNuQyx3REFBd0Qsd0NBQXdDLEVBQUU7QUFDbEc7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSw2Q0FBNkMsNkNBQTZDLEVBQUU7QUFDNUYsdUJBQXVCLHlCQUF5QjtBQUNoRCxtRUFBbUUsZ0JBQWdCLEVBQUU7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDekZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN4Q2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDaENhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qiw4RUFBOEU7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsOEJBQThCLG1CQUFPLENBQUMsNkNBQWU7QUFDckQsd0NBQXdDLG1CQUFPLENBQUMsK0RBQXdCO0FBQ3hFLDZCQUE2QixtQkFBTyxDQUFDLHlDQUFhO0FBQ2xELGdDQUFnQyxtQkFBTyxDQUFDLCtDQUFnQjtBQUN4RCxnQ0FBZ0MsbUJBQU8sQ0FBQywrQ0FBZ0I7QUFDeEQsbUNBQW1DLG1CQUFPLENBQUMsdURBQW9CO0FBQy9ELDJDQUEyQyxtQkFBTyxDQUFDLCtFQUFnQztBQUNuRixrQ0FBa0MsbUJBQU8sQ0FBQyx5Q0FBYTtBQUN2RCw4QkFBOEIsbUJBQU8sQ0FBQywyQ0FBYztBQUNwRCxxQ0FBcUMsbUJBQU8sQ0FBQyxtRUFBMEI7QUFDdkUsMkNBQTJDLG1CQUFPLENBQUMsK0VBQWdDO0FBQ25GLCtCQUErQixtQkFBTyxDQUFDLDZDQUFlO0FBQ3RELHdDQUF3QyxtQkFBTyxDQUFDLHlFQUE2QjtBQUM3RSw4QkFBOEIsbUJBQU8sQ0FBQyxpRUFBeUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQ0FBc0M7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbkthO0FBQ2I7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsaUNBQWlDLG1CQUFPLENBQUMsb0RBQW1CO0FBQzVELCtCQUErQixtQkFBTyxDQUFDLG9EQUFtQjtBQUMxRCwwQ0FBMEMsbUJBQU8sQ0FBQyxnRkFBaUM7QUFDbkYseUNBQXlDLG1CQUFPLENBQUMsd0ZBQXFDO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsb0NBQW9DLEVBQUU7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzNMYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsaUNBQWlDLG1CQUFPLENBQUMsb0RBQW1CO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUMvRGE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLDhFQUE4RTtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw4QkFBOEIsbUJBQU8sQ0FBQyw2Q0FBZTtBQUNyRCx3Q0FBd0MsbUJBQU8sQ0FBQywrREFBd0I7QUFDeEUsMENBQTBDLG1CQUFPLENBQUMsbUVBQTBCO0FBQzVFLDZCQUE2QixtQkFBTyxDQUFDLHlDQUFhO0FBQ2xELGdDQUFnQyxtQkFBTyxDQUFDLCtDQUFnQjtBQUN4RCxnQ0FBZ0MsbUJBQU8sQ0FBQywrQ0FBZ0I7QUFDeEQsbUNBQW1DLG1CQUFPLENBQUMsdURBQW9CO0FBQy9ELDJDQUEyQyxtQkFBTyxDQUFDLCtFQUFnQztBQUNuRixnQ0FBZ0MsbUJBQU8sQ0FBQywrQ0FBZ0I7QUFDeEQsMENBQTBDLG1CQUFPLENBQUMsNkVBQStCO0FBQ2pGLGtDQUFrQyxtQkFBTyxDQUFDLHlDQUFhO0FBQ3ZELDhCQUE4QixtQkFBTyxDQUFDLDJDQUFjO0FBQ3BELDJDQUEyQyxtQkFBTyxDQUFDLCtFQUFnQztBQUNuRixxQ0FBcUMsbUJBQU8sQ0FBQyxtRUFBMEI7QUFDdkUsK0JBQStCLG1CQUFPLENBQUMsNkNBQWU7QUFDdEQsd0NBQXdDLG1CQUFPLENBQUMseUVBQTZCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDcExhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsVUFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN4SGE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGlDQUFpQyxtQkFBTyxDQUFDLG9FQUEyQjtBQUNwRSxnQ0FBZ0MsbUJBQU8sQ0FBQyxrRUFBMEI7QUFDbEUsdUNBQXVDLG1CQUFPLENBQUMsZ0ZBQWlDO0FBQ2hGLCtCQUErQixtQkFBTyxDQUFDLGdFQUF5QjtBQUNoRSxnQ0FBZ0MsbUJBQU8sQ0FBQyxnREFBaUI7QUFDekQsd0NBQXdDLG1CQUFPLENBQUMsc0ZBQW9DO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNsTFk7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGdDQUFnQyxtQkFBTyxDQUFDLGdEQUFpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDakNhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDM0hhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvQmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELHdDQUF3QyxtQkFBTyxDQUFDLDBEQUFtQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1Qix3QkFBd0IsYUFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCLHdCQUF3QixhQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDck5hO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQ0FBZ0MsbUJBQU8sQ0FBQyxnREFBaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcExhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDaENhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQ0FBZ0MsbUJBQU8sQ0FBQyx3REFBcUI7QUFDN0QsaUNBQWlDLG1CQUFPLENBQUMsMERBQXNCO0FBQy9ELCtCQUErQixtQkFBTyxDQUFDLHNEQUFvQjtBQUMzRCxpQ0FBaUMsbUJBQU8sQ0FBQywwREFBc0I7QUFDL0QsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQWlCO0FBQ3pELDJDQUEyQyxtQkFBTyxDQUFDLDhFQUFnQztBQUNuRiw2QkFBNkIsbUJBQU8sQ0FBQyxrREFBa0I7QUFDdkQsbUNBQW1DLG1CQUFPLENBQUMsZ0RBQWM7QUFDekQscUNBQXFDLG1CQUFPLENBQUMsMERBQXNCO0FBQ25FLDhCQUE4QixtQkFBTyxDQUFDLG9EQUFtQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnQ0FBZ0M7QUFDakM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDNS9DYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsK0JBQStCLG1CQUFPLENBQUMsNkNBQWU7QUFDdEQsZ0NBQWdDLG1CQUFPLENBQUMsK0NBQWdCO0FBQ3hELG1DQUFtQyxtQkFBTyxDQUFDLHFEQUFtQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDOVJhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxzQ0FBc0MsbUJBQU8sQ0FBQyxpRUFBeUI7QUFDdkUsMENBQTBDLG1CQUFPLENBQUMscUVBQTJCO0FBQzdFLHFDQUFxQyxtQkFBTyxDQUFDLDJEQUFzQjtBQUNuRSxxQ0FBcUMsbUJBQU8sQ0FBQywyREFBc0I7QUFDbkUsOEJBQThCLG1CQUFPLENBQUMsMkNBQWM7QUFDcEQsbUNBQW1DLG1CQUFPLENBQUMsMkNBQWM7QUFDekQsa0NBQWtDLG1CQUFPLENBQUMseUNBQWE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pDQSxtQkFBTyxDQUFDLHVDQUFlLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZ2FtZS5qc1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBWZWN0b3IzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL01hdGgvVmVjdG9yM1wiKSk7XHJcbnZhciBDb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21wb25lbnRcIikpO1xyXG52YXIgQ2FtZXJhQ2hhc2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKENhbWVyYUNoYXNlciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENhbWVyYUNoYXNlcihhcmdfc3BlZWQsIGFyZ190cmFnZXRUcmFuc2Zvcm0pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnNwZWVkID0gYXJnX3NwZWVkO1xyXG4gICAgICAgIF90aGlzLnRhcmdldFRyYW5zZm9ybSA9IGFyZ190cmFnZXRUcmFuc2Zvcm07XHJcbiAgICAgICAgX3RoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgMCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgQ2FtZXJhQ2hhc2VyLnByb3RvdHlwZS5PblNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm9mZnNldFggPSB0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtLlBvc2l0aW9uLnggLSB0aGlzLnRhcmdldFRyYW5zZm9ybS5Qb3NpdGlvbi54O1xyXG4gICAgICAgIHRoaXMub2Zmc2V0WiA9IHRoaXMuZ2FtZU9iamVjdC50cmFuc2Zvcm0uUG9zaXRpb24ueSAtIHRoaXMudGFyZ2V0VHJhbnNmb3JtLlBvc2l0aW9uLnk7XHJcbiAgICB9O1xyXG4gICAgQ2FtZXJhQ2hhc2VyLnByb3RvdHlwZS5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy90aGlzLnZlbG9jaXR5LnkgPSB0aGlzLnRhcmdldFRyYW5zZm9ybS5Qb3NpdGlvbi55O1xyXG4gICAgICAgIHZhciB4bGVuZ3RoID0gdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybS5Qb3NpdGlvbi54IC0gdGhpcy50YXJnZXRUcmFuc2Zvcm0uUG9zaXRpb24ueCArIHRoaXMub2Zmc2V0WDtcclxuICAgICAgICAvL3RoaXMudmVsb2NpdHkueCA9eGxlbmd0aC9NYXRoLmFicyh4bGVuZ3RoKSogeGxlbmd0aCp4bGVuZ3RoKnRoaXMuc3BlZWQ7XHJcbiAgICAgICAgaWYgKHhsZW5ndGggKiB0aGlzLnNwZWVkID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSB4bGVuZ3RoIC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoeGxlbmd0aCA+IDE3KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IC0xICogKHhsZW5ndGggLSAxNykgLyBNYXRoLmFicyh4bGVuZ3RoIC0gMTcpICogKHhsZW5ndGggLSAxNykgKiAoeGxlbmd0aCAtIDE3KSAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHhsZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IC0xICogKHhsZW5ndGggLSAzKSAvIE1hdGguYWJzKHhsZW5ndGggKyAzKSAqICh4bGVuZ3RoICsgMykgKiAoeGxlbmd0aCArIDMpICogdGhpcy5zcGVlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB6ID0gdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybS5Qb3NpdGlvbi56IC0gdGhpcy50YXJnZXRUcmFuc2Zvcm0uUG9zaXRpb24ueiArIHRoaXMub2Zmc2V0WjtcclxuICAgICAgICBpZiAoeiA+IC0wLjUpIHtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS56ID0gLTEgKiAoeikgLyBNYXRoLmFicyh6ICsgMC41KSAqICh6ICsgMC41KSAqICh6ICsgMC41KSAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHogPCAtMy41KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueiA9IC0xICogKHopIC8gTWF0aC5hYnMoeiArIDMuNSkgKiAoeiArIDMuNSkgKiAoeiArIDMuNSkgKiB0aGlzLnNwZWVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS56ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybS5TZXRQb3NpdGlvbi5BZGRfYigodGhpcy52ZWxvY2l0eSkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDYW1lcmFDaGFzZXI7XHJcbn0oQ29tcG9uZW50XzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDYW1lcmFDaGFzZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21wb25lbnRcIikpO1xyXG52YXIgQ29sbGlzaW9uT2JqZWN0Q3JlYXRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9Ub29sL0NvbGxpc2lvbk9iamVjdENyZWF0ZXJcIikpO1xyXG52YXIgUHJpbWl0aXZlVHlwZTtcclxuKGZ1bmN0aW9uIChQcmltaXRpdmVUeXBlKSB7XHJcbiAgICBQcmltaXRpdmVUeXBlW1ByaW1pdGl2ZVR5cGVbXCJzcGhlcmVcIl0gPSAwXSA9IFwic3BoZXJlXCI7XHJcbiAgICBQcmltaXRpdmVUeXBlW1ByaW1pdGl2ZVR5cGVbXCJib3hfQUFCQlwiXSA9IDFdID0gXCJib3hfQUFCQlwiO1xyXG4gICAgUHJpbWl0aXZlVHlwZVtQcmltaXRpdmVUeXBlW1wiYm94X09CQlwiXSA9IDJdID0gXCJib3hfT0JCXCI7XHJcbiAgICBQcmltaXRpdmVUeXBlW1ByaW1pdGl2ZVR5cGVbXCJwb2ludFwiXSA9IDNdID0gXCJwb2ludFwiO1xyXG59KShQcmltaXRpdmVUeXBlIHx8IChQcmltaXRpdmVUeXBlID0ge30pKTtcclxudmFyIENvbGxpc2lvbkNvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDb2xsaXNpb25Db21wb25lbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDb2xsaXNpb25Db21wb25lbnQoYXJnX3R5cGUsIGFyZ19zaXplLCBsYXllcikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMubGF5ZXIgPSAwO1xyXG4gICAgICAgIF90aGlzLnR5cGUgPSBhcmdfdHlwZTtcclxuICAgICAgICBfdGhpcy5zaXplID0gYXJnX3NpemU7XHJcbiAgICAgICAgaWYgKGxheWVyKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmxheWVyID0gbGF5ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIENvbGxpc2lvbkNvbXBvbmVudC5wcm90b3R5cGUuT25TZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBQcmltaXRpdmVUeXBlLnNwaGVyZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uID0gQ29sbGlzaW9uT2JqZWN0Q3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlU3BoZXJlKHRoaXMuc2l6ZS54LCB0aGlzLmdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUHJpbWl0aXZlVHlwZS5wb2ludDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uID0gQ29sbGlzaW9uT2JqZWN0Q3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlUG9pbnQodGhpcy5nYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFByaW1pdGl2ZVR5cGUuYm94X0FBQkI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvbiA9IENvbGxpc2lvbk9iamVjdENyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZUN1YmVfQUFCQih0aGlzLnNpemUsIHRoaXMuZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQcmltaXRpdmVUeXBlLmJveF9PQkI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvbiA9IENvbGxpc2lvbk9iamVjdENyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZUN1YmVfT0JCKHRoaXMuc2l6ZSwgdGhpcy5nYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5nYW1lT2JqZWN0LkdldENvbGxpc2lvbk1hbmFnZXIoKS5SZWdpc3QodGhpcy5jb2xsaXNpb24sIHRoaXMubGF5ZXIpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbkNvbXBvbmVudC5wcm90b3R5cGUuT25SZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0LkdldENvbGxpc2lvbk1hbmFnZXIoKS5VblJlZ2lzdCh0aGlzLmlkLCB0aGlzLmxheWVyKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25Db21wb25lbnQucHJvdG90eXBlLlVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbi5VcGRhdGUoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29sbGlzaW9uQ29tcG9uZW50O1xyXG59KENvbXBvbmVudF8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ29sbGlzaW9uQ29tcG9uZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29tcG9uZW50KCkge1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIFwiSXNSZW1vdmVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1JlbW92ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBDb21wb25lbnQucHJvdG90eXBlLlNldCA9IGZ1bmN0aW9uIChhcmdfb2JqKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0ID0gYXJnX29iajtcclxuICAgICAgICB0aGlzLmlzUmVtb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5PblNldCgpO1xyXG4gICAgfTtcclxuICAgIENvbXBvbmVudC5wcm90b3R5cGUuRGVhZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmlzUmVtb3ZlID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBDb21wb25lbnQucHJvdG90eXBlLk9uU2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIENvbXBvbmVudC5wcm90b3R5cGUuUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXNSZW1vdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuT25SZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3QgPSBudWxsO1xyXG4gICAgfTtcclxuICAgIENvbXBvbmVudC5wcm90b3R5cGUuT25SZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5SZWxlYXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuT25SZWxlYXNlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0ID0gbnVsbDtcclxuICAgIH07XHJcbiAgICBDb21wb25lbnQucHJvdG90eXBlLk9uUmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBDb21wb25lbnQucHJvdG90eXBlLlVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBDb21wb25lbnQucHJvdG90eXBlLkhpdCA9IGZ1bmN0aW9uIChhcmdfZ2FtZU9iamVjdCkge1xyXG4gICAgfTtcclxuICAgIENvbXBvbmVudC5wcm90b3R5cGUuR2V0Q29tcG9uZW50TmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJDb21wb25lbnRcIjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDb21wb25lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21wb25lbnRcIikpO1xyXG52YXIgTW9kZWxJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTW9kZWxJbmZvKCkge1xyXG4gICAgICAgIHRoaXMubWVzaE5hbWUgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1vZGVsSW5mbztcclxufSgpKTtcclxudmFyIE1vZGVsRHJhd0NvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhNb2RlbERyYXdDb21wb25lbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBNb2RlbERyYXdDb21wb25lbnQoaXNMaWdodGluZywgZ2VvbWV0cnlOYW1lLCBtYXRlcmlhbE5hbWUsIHNoYWRlck5hbWUsIGxheWVyLCBpc0JpbGxCb2FyZCwgbWVzaE5hbWUsIGFyZ190cmFuc2Zvcm0pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmluZm8gPSBuZXcgTW9kZWxJbmZvKCk7XHJcbiAgICAgICAgX3RoaXMudHJhbnNmb3JtID0gbnVsbDtcclxuICAgICAgICBfdGhpcy5sYXllciA9IGxheWVyO1xyXG4gICAgICAgIGlmIChtZXNoTmFtZSlcclxuICAgICAgICAgICAgX3RoaXMuaW5mby5tZXNoTmFtZSA9IG1lc2hOYW1lO1xyXG4gICAgICAgIF90aGlzLmluZm8uZ2VvbWV0cnlOYW1lID0gZ2VvbWV0cnlOYW1lO1xyXG4gICAgICAgIF90aGlzLmluZm8uc2hhZGVyTmFtZSA9IHNoYWRlck5hbWU7XHJcbiAgICAgICAgX3RoaXMuaW5mby5tYXRlcmlhbE5hbWUgPSBtYXRlcmlhbE5hbWU7XHJcbiAgICAgICAgaWYgKGFyZ190cmFuc2Zvcm0pXHJcbiAgICAgICAgICAgIF90aGlzLnRyYW5zZm9ybSA9IGFyZ190cmFuc2Zvcm07XHJcbiAgICAgICAgX3RoaXMuaW5mby5saWdodGluZyA9IGlzTGlnaHRpbmc7XHJcbiAgICAgICAgX3RoaXMuaW5mby5iaWxsQm9hcmQgPSBpc0JpbGxCb2FyZDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTW9kZWxEcmF3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJMYXllclwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxheWVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE1vZGVsRHJhd0NvbXBvbmVudC5wcm90b3R5cGUuT25TZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMuZ2FtZU9iamVjdC50cmFuc2Zvcm07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmluZm8ubWVzaE5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuZ2FtZU9iamVjdC5NYW5hZ2VyLlNjZW5lLkdldFNjZW5lTWFuYWdlcigpLkdldE1vZGVsQ3JlYXRlcigpLkNyZWF0ZU1vZGVsRnJvbU1lc2godGhpcy5pbmZvLmxpZ2h0aW5nLCB0aGlzLmluZm8uYmlsbEJvYXJkLCB0aGlzLmluZm8ubWVzaE5hbWUsIHRoaXMuaW5mby5zaGFkZXJOYW1lLCB0aGlzLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gdGhpcy5nYW1lT2JqZWN0Lk1hbmFnZXIuU2NlbmUuR2V0U2NlbmVNYW5hZ2VyKCkuR2V0TW9kZWxDcmVhdGVyKCkuQ3JlYXRlTW9kZWwodGhpcy5pbmZvLmxpZ2h0aW5nLCB0aGlzLmluZm8uYmlsbEJvYXJkLCB0aGlzLmluZm8uZ2VvbWV0cnlOYW1lLCB0aGlzLmluZm8ubWF0ZXJpYWxOYW1lLCB0aGlzLmluZm8uc2hhZGVyTmFtZSwgdGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLlJlZ2lzdERyYXcoKTtcclxuICAgIH07XHJcbiAgICBNb2RlbERyYXdDb21wb25lbnQucHJvdG90eXBlLk9uUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuVW5SZWdpc3REcmF3KCk7XHJcbiAgICB9O1xyXG4gICAgTW9kZWxEcmF3Q29tcG9uZW50LnByb3RvdHlwZS5SZWdpc3REcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tb2RlbElEKVxyXG4gICAgICAgICAgICB0aGlzLm1vZGVsSUQgPSB0aGlzLmdhbWVPYmplY3QuR2V0UmVuZGVyZXIoKS5SZWdpc3QodGhpcy5tb2RlbCwgdGhpcy5sYXllcik7XHJcbiAgICB9O1xyXG4gICAgTW9kZWxEcmF3Q29tcG9uZW50LnByb3RvdHlwZS5VblJlZ2lzdERyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWxJRCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3QuR2V0UmVuZGVyZXIoKS5VblJlZ2lzdCh0aGlzLm1vZGVsSUQsIHRoaXMubGF5ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsSUQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gTW9kZWxEcmF3Q29tcG9uZW50O1xyXG59KENvbXBvbmVudF8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gTW9kZWxEcmF3Q29tcG9uZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgRWFzaW5nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1Rvb2wvRWFzaW5nXCIpKTtcclxudmFyIENvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvbXBvbmVudFwiKSk7XHJcbnZhciBQb3BwaW5nQW5pbWF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFBvcHBpbmdBbmltYXRpb24sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBQb3BwaW5nQW5pbWF0aW9uKGFyZ190aW1lLCBhcmdfaXNMb29wLCBhcmdfdGFyZ2V0VHJhbnNmb3JtLCBhcmdfdHJhbnNmb3JtLCBhcmdfZWFzaW5nRnVuY3Rpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICBfdGhpcy5kaXJlY3Rpb24gPSAxO1xyXG4gICAgICAgIF90aGlzLnRpbWUgPSBhcmdfdGltZTtcclxuICAgICAgICBfdGhpcy5saW5lclBhc2UgPSAxLjAgLyBhcmdfdGltZTtcclxuICAgICAgICBpZiAoYXJnX3RhcmdldFRyYW5zZm9ybSlcclxuICAgICAgICAgICAgX3RoaXMudGFyZ2V0VHJhbnNmb3JtID0gYXJnX3RhcmdldFRyYW5zZm9ybTtcclxuICAgICAgICBpZiAoYXJnX3RyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICBfdGhpcy50cmFuc2Zvcm0gPSBhcmdfdHJhbnNmb3JtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJnX2Vhc2luZ0Z1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmVhc2luZ0Z1bmN0aW9uID0gYXJnX2Vhc2luZ0Z1bmN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgX3RoaXMuZWFzaW5nRnVuY3Rpb24gPSBFYXNpbmdfMS5kZWZhdWx0LkVhc2VJbk91dEN1YmljO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJnX2lzTG9vcCkge1xyXG4gICAgICAgICAgICBfdGhpcy5UaW1lVXBkYXRlID0gX3RoaXMuVGltZVVwZGF0ZV9Mb29wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgX3RoaXMuVGltZVVwZGF0ZSA9IF90aGlzLlRpbWVVcGRhdGVfTm9Mb29wO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBQb3BwaW5nQW5pbWF0aW9uLnByb3RvdHlwZS5PblNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMudHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldFRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldFRyYW5zZm9ybSA9IHRoaXMuZ2FtZU9iamVjdC50cmFuc2Zvcm07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy50YXJnZXRUcmFuc2Zvcm0uUG9zaXRpb24uU3ViKHRoaXMudHJhbnNmb3JtLlBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLnNjYWxlUGFzZSA9IHRoaXMudGFyZ2V0VHJhbnNmb3JtLlNjYWxlLlN1Yih0aGlzLnRyYW5zZm9ybS5TY2FsZSk7XHJcbiAgICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybS5Qb3NpdGlvbjtcclxuICAgICAgICB0aGlzLmluaXRTY2FsZSA9IHRoaXMudHJhbnNmb3JtLlNjYWxlO1xyXG4gICAgICAgIHRoaXMucm90YXRlUXVhdCA9IHRoaXMudHJhbnNmb3JtLlJvdGF0aW9uLlRvUXVhdGVybmlvbigpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0Um90YXRlUXVhdCA9IHRoaXMudGFyZ2V0VHJhbnNmb3JtLlJvdGF0aW9uLlRvUXVhdGVybmlvbigpO1xyXG4gICAgfTtcclxuICAgIFBvcHBpbmdBbmltYXRpb24ucHJvdG90eXBlLlNldFRhcmdldCA9IGZ1bmN0aW9uIChhcmdfdGltZSwgYXJnX3RhcmdldFRyYW5zZm9ybSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMudGltZSA9IGFyZ190aW1lO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0VHJhbnNmb3JtID0gYXJnX3RhcmdldFRyYW5zZm9ybTtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IHRoaXMudGFyZ2V0VHJhbnNmb3JtLlBvc2l0aW9uLlN1Yih0aGlzLnRyYW5zZm9ybS5Qb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5zY2FsZVBhc2UgPSB0aGlzLnRhcmdldFRyYW5zZm9ybS5TY2FsZS5TdWIodGhpcy50cmFuc2Zvcm0uU2NhbGUpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy50cmFuc2Zvcm0uUG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5pbml0U2NhbGUgPSB0aGlzLnRyYW5zZm9ybS5TY2FsZTtcclxuICAgICAgICB0aGlzLnJvdGF0ZVF1YXQgPSB0aGlzLnRyYW5zZm9ybS5Sb3RhdGlvbi5Ub1F1YXRlcm5pb24oKTtcclxuICAgICAgICB0aGlzLnRhcmdldFJvdGF0ZVF1YXQgPSB0aGlzLnRhcmdldFRyYW5zZm9ybS5Sb3RhdGlvbi5Ub1F1YXRlcm5pb24oKTtcclxuICAgIH07XHJcbiAgICBQb3BwaW5nQW5pbWF0aW9uLnByb3RvdHlwZS5UaW1lVXBkYXRlX0xvb3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPj0gdGhpcy50aW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLnRpbWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY3VycmVudFRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lICs9IHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgfTtcclxuICAgIFBvcHBpbmdBbmltYXRpb24ucHJvdG90eXBlLlRpbWVVcGRhdGVfTm9Mb29wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID49IHRoaXMudGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy50aW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgKz0gdGhpcy5kaXJlY3Rpb247XHJcbiAgICB9O1xyXG4gICAgUG9wcGluZ0FuaW1hdGlvbi5wcm90b3R5cGUuSXNNb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID49IHRoaXMudGltZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUG9wcGluZ0FuaW1hdGlvbi5wcm90b3R5cGUuVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuVGltZVVwZGF0ZSgpO1xyXG4gICAgICAgIHZhciB0ID0gdGhpcy5lYXNpbmdGdW5jdGlvbih0aGlzLmN1cnJlbnRUaW1lIC8gdGhpcy50aW1lKTtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybS5Qb3NpdGlvbiA9IHRoaXMuaW5pdFBvc2l0aW9uLkFkZCh0aGlzLm9mZnNldC5NdWx0aXBseSh0KS5BZGRZKC1FYXNpbmdfMS5kZWZhdWx0LlBhcmFib2xhKHQpKSk7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uU2NhbGUgPSB0aGlzLmluaXRTY2FsZS5BZGQodGhpcy5zY2FsZVBhc2UuTXVsdGlwbHkodCkpO1xyXG4gICAgICAgIC8vdGhpcy50cmFuc2Zvcm0uUm90YXRpb249IHRoaXMudHJhbnNmb3JtLlJvdGF0aW9uXHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uUm90YXRpb24gPSB0aGlzLnJvdGF0ZVF1YXQuU3BoZXJlTGVycCh0aGlzLnRhcmdldFJvdGF0ZVF1YXQsIHQpLlRvTWF0cml4NHg0KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFBvcHBpbmdBbmltYXRpb247XHJcbn0oQ29tcG9uZW50XzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBQb3BwaW5nQW5pbWF0aW9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ29tcG9uZW50XCIpKTtcclxudmFyIFNjZW5lQ2hhbmdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhTY2VuZUNoYW5nZXIsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTY2VuZUNoYW5nZXIoYXJnX3NjZW5lTmFtZSwgYXJnX3dhaXRGcmFtZSwgYXJnX3NjZW5lQ2hhbmdlVmFsdWUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnNjZW5lTmFtZSA9IGFyZ19zY2VuZU5hbWU7XHJcbiAgICAgICAgX3RoaXMuc2NlbmVDaGFuZ2VWYWx1ZSA9IGFyZ19zY2VuZUNoYW5nZVZhbHVlO1xyXG4gICAgICAgIF90aGlzLndhaXRGcmFtZSA9IGFyZ193YWl0RnJhbWU7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgU2NlbmVDaGFuZ2VyLnByb3RvdHlwZS5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy53YWl0RnJhbWUtLTtcclxuICAgICAgICBpZiAodGhpcy53YWl0RnJhbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0Lk1hbmFnZXIuU2NlbmUuR2V0U2NlbmVNYW5hZ2VyKCkuQ2hhbmdlU2NlbmUodGhpcy5zY2VuZU5hbWUsIHRoaXMuc2NlbmVDaGFuZ2VWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5EZWFkKCk7XHJcbiAgICAgICAgO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTY2VuZUNoYW5nZXI7XHJcbn0oQ29tcG9uZW50XzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBTY2VuZUNoYW5nZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21wb25lbnRcIikpO1xyXG52YXIgU3VjaWRlQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFN1Y2lkZUNvbXBvbmVudCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFN1Y2lkZUNvbXBvbmVudChhcmdfd2FpdEZyYW1lKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy53YWl0RnJhbWUgPSBhcmdfd2FpdEZyYW1lO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFN1Y2lkZUNvbXBvbmVudC5wcm90b3R5cGUuVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMud2FpdEZyYW1lLS07XHJcbiAgICAgICAgaWYgKHRoaXMud2FpdEZyYW1lID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdC5EZWFkKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFN1Y2lkZUNvbXBvbmVudDtcclxufShDb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFN1Y2lkZUNvbXBvbmVudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIENvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvbXBvbmVudFwiKSk7XHJcbnZhciBNb2RlbEluZm8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNb2RlbEluZm8oKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTW9kZWxJbmZvO1xyXG59KCkpO1xyXG52YXIgVGV4dERyYXdDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVGV4dERyYXdDb21wb25lbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUZXh0RHJhd0NvbXBvbmVudCh0ZXh0LCBmb250VGV4TmFtZSwgc2hhZGVyTmFtZSwgYXJnX2NvbG9yLCBsYXllciwgaXNCaWxsQm9hcmQsIGFyZ190cmFuc2Zvcm0pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmluZm8gPSBuZXcgTW9kZWxJbmZvKCk7XHJcbiAgICAgICAgX3RoaXMudHJhbnNmb3JtID0gbnVsbDtcclxuICAgICAgICBfdGhpcy5sYXllciA9IGxheWVyO1xyXG4gICAgICAgIF90aGlzLmluZm8uc2hhZGVyTmFtZSA9IHNoYWRlck5hbWU7XHJcbiAgICAgICAgX3RoaXMuaW5mby5jb2xvciA9IGFyZ19jb2xvcjtcclxuICAgICAgICBfdGhpcy5pbmZvLmZvbnRUZXh0dXJlTmFtZSA9IGZvbnRUZXhOYW1lO1xyXG4gICAgICAgIF90aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIGlmIChhcmdfdHJhbnNmb3JtKVxyXG4gICAgICAgICAgICBfdGhpcy50cmFuc2Zvcm0gPSBhcmdfdHJhbnNmb3JtO1xyXG4gICAgICAgIF90aGlzLmluZm8uYmlsbEJvYXJkID0gaXNCaWxsQm9hcmQ7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRleHREcmF3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJMYXllclwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxheWVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFRleHREcmF3Q29tcG9uZW50LnByb3RvdHlwZS5PblNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMudHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuZ2FtZU9iamVjdC5NYW5hZ2VyLlNjZW5lLkdldFNjZW5lTWFuYWdlcigpLkdldE1vZGVsQ3JlYXRlcigpLkNyZWF0ZU1vZGVsRnJvbVRleHQodGhpcy5pbmZvLmJpbGxCb2FyZCwgdGhpcy5pbmZvLmNvbG9yLCB0aGlzLnRleHQsIHRoaXMuaW5mby5mb250VGV4dHVyZU5hbWUsIHRoaXMuaW5mby5zaGFkZXJOYW1lLCB0aGlzLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbElEID0gdGhpcy5nYW1lT2JqZWN0LkdldFJlbmRlcmVyKCkuUmVnaXN0KHRoaXMubW9kZWwsIHRoaXMubGF5ZXIpO1xyXG4gICAgfTtcclxuICAgIFRleHREcmF3Q29tcG9uZW50LnByb3RvdHlwZS5PblJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3QuR2V0UmVuZGVyZXIoKS5VblJlZ2lzdCh0aGlzLm1vZGVsSUQsIHRoaXMubGF5ZXIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUZXh0RHJhd0NvbXBvbmVudDtcclxufShDb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFRleHREcmF3Q29tcG9uZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgRWFzaW5nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1Rvb2wvRWFzaW5nXCIpKTtcclxudmFyIENvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvbXBvbmVudFwiKSk7XHJcbnZhciBUcmFuc2Zvcm1BbmltYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVHJhbnNmb3JtQW5pbWF0aW9uLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVHJhbnNmb3JtQW5pbWF0aW9uKGFyZ190aW1lLCBhcmdfaXNMb29wLCBhcmdfdGFyZ2V0VHJhbnNmb3JtLCBhcmdfdHJhbnNmb3JtLCBhcmdfZWFzaW5nRnVuY3Rpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICBfdGhpcy5kaXJlY3Rpb24gPSAxO1xyXG4gICAgICAgIF90aGlzLnRpbWUgPSBhcmdfdGltZTtcclxuICAgICAgICBfdGhpcy5saW5lclBhc2UgPSAxLjAgLyBhcmdfdGltZTtcclxuICAgICAgICBfdGhpcy50YXJnZXRUcmFuc2Zvcm0gPSBhcmdfdGFyZ2V0VHJhbnNmb3JtO1xyXG4gICAgICAgIGlmIChhcmdfdHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnRyYW5zZm9ybSA9IGFyZ190cmFuc2Zvcm07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmdfZWFzaW5nRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgX3RoaXMuZWFzaW5nRnVuY3Rpb24gPSBhcmdfZWFzaW5nRnVuY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBfdGhpcy5lYXNpbmdGdW5jdGlvbiA9IEVhc2luZ18xLmRlZmF1bHQuRWFzZUluT3V0QmFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZ19pc0xvb3ApIHtcclxuICAgICAgICAgICAgX3RoaXMuVGltZVVwZGF0ZSA9IF90aGlzLlRpbWVVcGRhdGVfTG9vcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIF90aGlzLlRpbWVVcGRhdGUgPSBfdGhpcy5UaW1lVXBkYXRlX05vTG9vcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgVHJhbnNmb3JtQW5pbWF0aW9uLnByb3RvdHlwZS5PblNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMudHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLnRhcmdldFRyYW5zZm9ybS5Qb3NpdGlvbi5TdWIodGhpcy50cmFuc2Zvcm0uTG9jYWxQb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5zY2FsZVBhc2UgPSB0aGlzLnRhcmdldFRyYW5zZm9ybS5TY2FsZS5TdWIodGhpcy50cmFuc2Zvcm0uU2NhbGUpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy50cmFuc2Zvcm0uTG9jYWxQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLmluaXRTY2FsZSA9IHRoaXMudHJhbnNmb3JtLlNjYWxlO1xyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybUFuaW1hdGlvbi5wcm90b3R5cGUuVGltZVVwZGF0ZV9Mb29wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID49IHRoaXMudGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy50aW1lO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmN1cnJlbnRUaW1lIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSArPSB0aGlzLmRpcmVjdGlvbjtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm1BbmltYXRpb24ucHJvdG90eXBlLlRpbWVVcGRhdGVfTm9Mb29wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID49IHRoaXMudGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy50aW1lO1xyXG4gICAgICAgICAgICB0aGlzLlJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lICs9IHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybUFuaW1hdGlvbi5wcm90b3R5cGUuVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuVGltZVVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtLlBvc2l0aW9uID0gdGhpcy5pbml0UG9zaXRpb24uQWRkKHRoaXMub2Zmc2V0Lk11bHRpcGx5KHRoaXMuY3VycmVudFRpbWUgLyB0aGlzLnRpbWUpKTtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybS5TY2FsZSA9IHRoaXMuaW5pdFNjYWxlLkFkZCh0aGlzLnNjYWxlUGFzZS5NdWx0aXBseSh0aGlzLmVhc2luZ0Z1bmN0aW9uKHRoaXMuY3VycmVudFRpbWUgLyB0aGlzLnRpbWUpKSk7XHJcbiAgICAgICAgLy90aGlzLnRyYW5zZm9ybS5Sb3RhdGlvbj0gdGhpcy50cmFuc2Zvcm0uUm90YXRpb25cclxuICAgIH07XHJcbiAgICByZXR1cm4gVHJhbnNmb3JtQW5pbWF0aW9uO1xyXG59KENvbXBvbmVudF8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVHJhbnNmb3JtQW5pbWF0aW9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVmVjdG9yM18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9NYXRoL1ZlY3RvcjNcIikpO1xyXG52YXIgSW5wdXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVG9vbC9JbnB1dFwiKSk7XHJcbnZhciBUcmFuc2Zvcm1fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVHJhbnNmb3JtXCIpKTtcclxudmFyIENvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9Db21wb25lbnQvQ29tcG9uZW50XCIpKTtcclxudmFyIE1vZGVsRHJhd0NvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9Db21wb25lbnQvTW9kZWxEcmF3Q29tcG9uZW50XCIpKTtcclxudmFyIFRyYW5zZm9ybUFuaW1hdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9Db21wb25lbnQvVHJhbnNmb3JtQW5pbWF0aW9uXCIpKTtcclxudmFyIFBvcHBpbmdBbmltYXRpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vQ29tcG9uZW50L1BvcHBpbmdBbmltYXRpb25cIikpO1xyXG52YXIgc291bmREZWxheSA9IDU7XHJcbnZhciBQbGF5ZXJDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUGxheWVyQ29tcG9uZW50LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUGxheWVyQ29tcG9uZW50KGFyZ19tb3ZlUGFzZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuZGlyZWN0aW9uID0gMTtcclxuICAgICAgICBfdGhpcy5pc01vdmUgPSBmYWxzZTtcclxuICAgICAgICBfdGhpcy5lID0gbnVsbDtcclxuICAgICAgICBfdGhpcy5tb3ZlUGFzZSA9IGFyZ19tb3ZlUGFzZTtcclxuICAgICAgICBfdGhpcy5pc1B1c2ggPSBmYWxzZTtcclxuICAgICAgICBfdGhpcy5zb3VuZGZyYW1lID0gMDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBQbGF5ZXJDb21wb25lbnQucHJvdG90eXBlLk9uU2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRZID0gdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybS5Qb3NpdGlvbi55O1xyXG4gICAgICAgIHRoaXMuZGVhZFNlID0gdGhpcy5nYW1lT2JqZWN0Lk1hbmFnZXIuU2NlbmUuR2V0U2NlbmVNYW5hZ2VyKCkuR2V0UmVzb3VyY2VDb250YWluZXIoKS5HZXRTb3VuZChcImtpbGxcIik7XHJcbiAgICAgICAgdGhpcy51cFNlID0gdGhpcy5nYW1lT2JqZWN0Lk1hbmFnZXIuU2NlbmUuR2V0U2NlbmVNYW5hZ2VyKCkuR2V0UmVzb3VyY2VDb250YWluZXIoKS5HZXRTb3VuZChcInVwXCIpO1xyXG4gICAgICAgIHRoaXMucG9wcGluZ0NvbXBvbmVudCA9IG5ldyBQb3BwaW5nQW5pbWF0aW9uXzEuZGVmYXVsdCh0aGlzLm1vdmVQYXNlLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbFRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm1fMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbFRyYW5zZm9ybS5CYXNlVHJhbnNmb3JtID0gdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybTtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3QuU2V0Q29tcG9uZW50KHRoaXMucG9wcGluZ0NvbXBvbmVudCk7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0LlNldENvbXBvbmVudChuZXcgTW9kZWxEcmF3Q29tcG9uZW50XzEuZGVmYXVsdChmYWxzZSwgXCJjdWJlXCIsIFwiY2Fsb3J5TWF0ZXJpYWxcIiwgXCJ0ZXhTaGFkZXJcIiwgMSwgZmFsc2UsIG51bGwsIHRoaXMubW9kZWxUcmFuc2Zvcm0pKTtcclxuICAgICAgICB0aGlzLm1pbmltdW1UcmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtXzEuZGVmYXVsdChuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMC4xLCAwKSwgbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDApLCBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMS4yLCAwLjgsIDEuMikpO1xyXG4gICAgICAgIHRoaXMubWF4aW11bVRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm1fMS5kZWZhdWx0KG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAtMC4xLCAwKSwgbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDApLCBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMS4wLCAxLjAsIDEuMCkpO1xyXG4gICAgICAgIHRoaXMuc2NhbGVDb21wb25lbnQgPSBuZXcgVHJhbnNmb3JtQW5pbWF0aW9uXzEuZGVmYXVsdCgzMCwgdHJ1ZSwgdGhpcy5taW5pbXVtVHJhbnNmb3JtLCB0aGlzLm1vZGVsVHJhbnNmb3JtKTtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3QuU2V0Q29tcG9uZW50KHRoaXMuc2NhbGVDb21wb25lbnQpO1xyXG4gICAgfTtcclxuICAgIFBsYXllckNvbXBvbmVudC5wcm90b3R5cGUuR2V0Q29tcG9uZW50TmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJQbGF5ZXJDb21wb25lbnRcIjtcclxuICAgIH07XHJcbiAgICBQbGF5ZXJDb21wb25lbnQucHJvdG90eXBlLlVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1B1c2gpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZSAmJiAhdGhpcy5wb3BwaW5nQ29tcG9uZW50LklzTW92ZSgpKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQ7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5lLmtleSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIndcIjpcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBuZXcgVHJhbnNmb3JtXzEuZGVmYXVsdCh0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtLlBvc2l0aW9uLkFkZF9iKG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAtMSkpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gbmV3IFRyYW5zZm9ybV8xLmRlZmF1bHQodGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybS5Qb3NpdGlvbi5BZGRfYihuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgMSkpLCBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMTgwLCAwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IG5ldyBUcmFuc2Zvcm1fMS5kZWZhdWx0KHRoaXMuZ2FtZU9iamVjdC50cmFuc2Zvcm0uUG9zaXRpb24uQWRkX2IobmV3IFZlY3RvcjNfMS5kZWZhdWx0KDEsIDAsIDApKSwgbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIC05MCwgMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImFcIjpcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBuZXcgVHJhbnNmb3JtXzEuZGVmYXVsdCh0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtLlBvc2l0aW9uLkFkZF9iKG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgtMSwgMCwgMCkpLCBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgOTAsIDApKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5lLmtleSA9PSBcIndcIiB8fCB0aGlzLmUua2V5ID09IFwic1wiIHx8IHRoaXMuZS5rZXkgPT0gXCJhXCIgfHwgdGhpcy5lLmtleSA9PSBcImRcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3BwaW5nQ29tcG9uZW50LlNldFRhcmdldCh0aGlzLm1vdmVQYXNlLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudXBTZS5QbGF5X25ldygpO1xyXG4gICAgICAgICAgICB0aGlzLmUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNvdW5kZnJhbWUtLTtcclxuICAgICAgICBpZiAodGhpcy5zb3VuZGZyYW1lIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VuZGZyYW1lID0gc291bmREZWxheTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUGxheWVyQ29tcG9uZW50LnByb3RvdHlwZS5PbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSBcInFcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzUHVzaCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNjYWxlQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGVDb21wb25lbnQuUmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NhbGVDb21wb25lbnQgPSBuZXcgVHJhbnNmb3JtQW5pbWF0aW9uXzEuZGVmYXVsdCg1LCBmYWxzZSwgdGhpcy5taW5pbXVtVHJhbnNmb3JtLCB0aGlzLm1vZGVsVHJhbnNmb3JtKTtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3QuU2V0Q29tcG9uZW50KHRoaXMuc2NhbGVDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuaXNQdXNoID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBQbGF5ZXJDb21wb25lbnQucHJvdG90eXBlLk9uS2V5VXAgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSBcInFcIikge1xyXG4gICAgICAgICAgICB0aGlzLlRvU3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2NhbGVDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZUNvbXBvbmVudC5SZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2FsZUNvbXBvbmVudCA9IG5ldyBUcmFuc2Zvcm1BbmltYXRpb25fMS5kZWZhdWx0KDEwLCBmYWxzZSwgdGhpcy5tYXhpbXVtVHJhbnNmb3JtLCB0aGlzLm1vZGVsVHJhbnNmb3JtKTtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3QuU2V0Q29tcG9uZW50KHRoaXMuc2NhbGVDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuZSA9IGU7XHJcbiAgICAgICAgdGhpcy5pc1B1c2ggPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICBQbGF5ZXJDb21wb25lbnQucHJvdG90eXBlLlRvU3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgSW5wdXRfMS5kZWZhdWx0LkFkZEtleVVwRXZlbnQodGhpcywgXCJwbGF5ZXJFdmVudFwiLCBmYWxzZSk7XHJcbiAgICAgICAgSW5wdXRfMS5kZWZhdWx0LkFkZEtleURvd25FdmVudCh0aGlzLCBcInBsYXllckV2ZW50XCIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmlzUHVzaCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIFBsYXllckNvbXBvbmVudC5wcm90b3R5cGUuUmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgSW5wdXRfMS5kZWZhdWx0LlJlbW92ZUtleVVwRXZlbnQoXCJwbGF5ZXJFdmVudFwiKTtcclxuICAgICAgICBJbnB1dF8xLmRlZmF1bHQuUmVtb3ZlS2V5RG93bkV2ZW50KFwicGxheWVyRXZlbnRcIik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFBsYXllckNvbXBvbmVudDtcclxufShDb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFBsYXllckNvbXBvbmVudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIENhbWVyYUNoYXNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9Db21wb25lbnQvQ2FtZXJhQ2hhc2VyXCIpKTtcclxudmFyIENvbGxpc2lvbkNvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9Db21wb25lbnQvQ29sbGlzaW9uQ29tcG9uZW50XCIpKTtcclxudmFyIFZlY3RvcjNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTWF0aC9WZWN0b3IzXCIpKTtcclxudmFyIFRyYW5zZm9ybV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9UcmFuc2Zvcm1cIikpO1xyXG52YXIgUGxheWVyQ29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUGxheWVyQ29tcG9uZW50XCIpKTtcclxudmFyIFByaW1pdGl2ZVR5cGU7XHJcbihmdW5jdGlvbiAoUHJpbWl0aXZlVHlwZSkge1xyXG4gICAgUHJpbWl0aXZlVHlwZVtQcmltaXRpdmVUeXBlW1wic3BoZXJlXCJdID0gMF0gPSBcInNwaGVyZVwiO1xyXG4gICAgUHJpbWl0aXZlVHlwZVtQcmltaXRpdmVUeXBlW1wiYm94X0FBQkJcIl0gPSAxXSA9IFwiYm94X0FBQkJcIjtcclxuICAgIFByaW1pdGl2ZVR5cGVbUHJpbWl0aXZlVHlwZVtcImJveF9PQkJcIl0gPSAyXSA9IFwiYm94X09CQlwiO1xyXG4gICAgUHJpbWl0aXZlVHlwZVtQcmltaXRpdmVUeXBlW1wicG9pbnRcIl0gPSAzXSA9IFwicG9pbnRcIjtcclxufSkoUHJpbWl0aXZlVHlwZSB8fCAoUHJpbWl0aXZlVHlwZSA9IHt9KSk7XHJcbnZhciBTdGFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFN0YWdlKGFyZ19zY2VuZSkge1xyXG4gICAgICAgIHRoaXMuYXJ5X29ic3RhY2xlID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5hcnlfY29pbiA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMucGxheVNjZW5lID0gYXJnX3NjZW5lO1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3MgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgLTAuNSwgMCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDb21wb25lbnQgPSBuZXcgUGxheWVyQ29tcG9uZW50XzEuZGVmYXVsdCgxNSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXlTY2VuZS5HZXRHYW1lTWFuYWdlcigpLkFkZEdhbWVPYmplY3QoXCJjdWJlXCIsIG5ldyBUcmFuc2Zvcm1fMS5kZWZhdWx0KHRoaXMuc3RhcnRQb3MuQ2xvbmUoKSwgbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDApLCBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMSwgMSwgMSkpLCBcInBsYXllclwiLCBbdGhpcy5wbGF5ZXJDb21wb25lbnRdKTtcclxuICAgICAgICB0aGlzLnBsYXllci5TZXRDb21wb25lbnQobmV3IENvbGxpc2lvbkNvbXBvbmVudF8xLmRlZmF1bHQoUHJpbWl0aXZlVHlwZS5ib3hfT0JCLCBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMS4wLCAxLjAsIDEuMCksIDApKTtcclxuICAgICAgICB2YXIgY2FtZXJhID0gdGhpcy5wbGF5U2NlbmUuR2V0R2FtZU1hbmFnZXIoKS5BZGRHYW1lT2JqZWN0KFwiY2FtZXJhbWFuXCIsIHRoaXMucGxheVNjZW5lLkdldENhbWVyYShcIm1haW5cIikudHJhbnNmb3JtKTtcclxuICAgICAgICBjYW1lcmEuU2V0Q29tcG9uZW50KG5ldyBDYW1lcmFDaGFzZXJfMS5kZWZhdWx0KDAuMDEsIHRoaXMucGxheWVyLnRyYW5zZm9ybSkpO1xyXG4gICAgfVxyXG4gICAgU3RhZ2UucHJvdG90eXBlLlJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5U2NlbmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXJ5X29ic3RhY2xlLmxlbmd0aCA9IDA7XHJcbiAgICB9O1xyXG4gICAgU3RhZ2UucHJvdG90eXBlLkFkZE9ic3RhY2xlID0gZnVuY3Rpb24gKG9ic3RhY2xlKSB7XHJcbiAgICAgICAgdGhpcy5hcnlfb2JzdGFjbGUucHVzaChvYnN0YWNsZSk7XHJcbiAgICAgICAgb2JzdGFjbGUuc3RhZ2UgPSB0aGlzO1xyXG4gICAgfTtcclxuICAgIFN0YWdlLnByb3RvdHlwZS5HZXRSaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIFN0YWdlLnByb3RvdHlwZS5HZXRDb2luID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIFN0YWdlLnByb3RvdHlwZS5GYWlsZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgU3RhZ2UucHJvdG90eXBlLlN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyQ29tcG9uZW50LlRvU3RhcnQoKTtcclxuICAgIH07XHJcbiAgICBTdGFnZS5wcm90b3R5cGUuUmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDb21wb25lbnQuUmVzZXQoKTtcclxuICAgICAgICB0aGlzLmFyeV9jb2luLmZvckVhY2goZnVuY3Rpb24gKGNvaW4pIHsgcmV0dXJuIGNvaW4uUmVTZXQoKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFN0YWdlO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBTdGFnZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEdhbWVPYmplY3RJRE1hbmFnZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vUGFydHMvR2FtZU9iamVjdElETWFuYWdlclwiKSk7XHJcbnZhciBHYW1lT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZU9iamVjdChhcmdfbWFuYWdlciwgYXJnX25hbWUsIGFyZ190cmFuc2Zvcm0sIGFyZ19pZE5hbWUsIGFyZ19hcnlfY29tcG9uZW50cykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBhcmdfdHJhbnNmb3JtO1xyXG4gICAgICAgIHRoaXMubmV3Q29tcG9uZW50cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuaXNSZW1vdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBhcmdfbmFtZTtcclxuICAgICAgICB0aGlzLm1hbmFnZXIgPSBhcmdfbWFuYWdlcjtcclxuICAgICAgICBpZiAoYXJnX2FyeV9jb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cyA9IGFyZ19hcnlfY29tcG9uZW50cztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLm9iamVjdElEID0gR2FtZU9iamVjdElETWFuYWdlcl8xLmRlZmF1bHQuR2V0SUQoYXJnX2lkTmFtZSk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goZnVuY3Rpb24gKGNvbXBvbmVudCkgeyByZXR1cm4gY29tcG9uZW50LlNldChfdGhpcyk7IH0pO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWVPYmplY3QucHJvdG90eXBlLCBcIklzUmVtb3ZlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNSZW1vdmU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWVPYmplY3QucHJvdG90eXBlLCBcIk5hbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoYXJnX25hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5tYW5hZ2VyLlVuUmVnaXN0T2JqZWN0KHRoaXMubmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IGFyZ19uYW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lT2JqZWN0LnByb3RvdHlwZSwgXCJNYW5hZ2VyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZU9iamVjdC5wcm90b3R5cGUsIFwiR2FtZVRpbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5NYW5hZ2VyLlNjZW5lLkdldFNjZW5lTWFuYWdlcigpLkdldEdhbWVUaW1lKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUuUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjb21wb25lbnQpIHsgcmV0dXJuIGNvbXBvbmVudC5SZW1vdmUoKTsgfSk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyLlVuUmVnaXN0T2JqZWN0KHRoaXMubmFtZSk7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gbnVsbDtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0LnByb3RvdHlwZS5SZWxlYXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjb21wb25lbnQpIHsgcmV0dXJuIGNvbXBvbmVudC5SZW1vdmUoKTsgfSk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gbnVsbDtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0LnByb3RvdHlwZS5EZWFkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXNSZW1vdmUgPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIEdhbWVPYmplY3QucHJvdG90eXBlLkdldFJlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hbmFnZXIuU2NlbmUuR2V0UmVuZGVyZXIoKTtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0LnByb3RvdHlwZS5HZXRDb2xsaXNpb25NYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hbmFnZXIuU2NlbmUuR2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgfTtcclxuICAgIEdhbWVPYmplY3QucHJvdG90eXBlLlVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHMuY29uY2F0KHRoaXMubmV3Q29tcG9uZW50cyk7XHJcbiAgICAgICAgdGhpcy5uZXdDb21wb25lbnRzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goZnVuY3Rpb24gKGNvbXBvbmVudCkgeyByZXR1cm4gY29tcG9uZW50LlVwZGF0ZSgpOyB9KTtcclxuICAgICAgICB2YXIgcmVtb3ZlID0gdGhpcy5jb21wb25lbnRzLmZpbHRlcihmdW5jdGlvbiAoY29tcG9uZW50KSB7IHJldHVybiBjb21wb25lbnQuSXNSZW1vdmU7IH0pO1xyXG4gICAgICAgIHJlbW92ZS5mb3JFYWNoKGZ1bmN0aW9uIChyZW1vdmUpIHsgcmV0dXJuIHJlbW92ZS5SZW1vdmUoKTsgfSk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gdGhpcy5jb21wb25lbnRzLmZpbHRlcihmdW5jdGlvbiAoY29tcG9uZW50KSB7IHJldHVybiAhY29tcG9uZW50LklzUmVtb3ZlOyB9KTtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0LnByb3RvdHlwZS5Jbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIEdhbWVPYmplY3QucHJvdG90eXBlLlNldENvbXBvbmVudCA9IGZ1bmN0aW9uIChhcmdfY29tcG9uZW50KSB7XHJcbiAgICAgICAgYXJnX2NvbXBvbmVudC5TZXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5uZXdDb21wb25lbnRzLnB1c2goYXJnX2NvbXBvbmVudCk7XHJcbiAgICAgICAgcmV0dXJuIGFyZ19jb21wb25lbnQ7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUuR2V0Q29tcG9uZW50ID0gZnVuY3Rpb24gKGFyZ19zZXJjaE5hbWUsIGFyZ19jb3VudCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjb21wb25lbnQpIHsgcmV0dXJuIGNvbXBvbmVudC5HZXRDb21wb25lbnROYW1lKCkgPT0gYXJnX3NlcmNoTmFtZTsgfSlbYXJnX2NvdW50XTtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0LnByb3RvdHlwZS5IaXQgPSBmdW5jdGlvbiAoYXJnX29iamVjdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29sbGlzaW9uOlwiICsgdGhpcy5uYW1lICsgXCIsXCIgKyBhcmdfb2JqZWN0Lm5hbWUpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjb21wb25lbnQpIHsgcmV0dXJuIGNvbXBvbmVudC5IaXQoYXJnX29iamVjdCk7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lT2JqZWN0O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBHYW1lT2JqZWN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgR2FtZU9iamVjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0dhbWVPYmplY3RcIikpO1xyXG52YXIgVHJhbnNmb3JtXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1RyYW5zZm9ybVwiKSk7XHJcbnZhciBHYW1lT2JqZWN0TWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWVPYmplY3RNYW5hZ2VyKGFyZ19zY2VuZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLm5ld0dhbWVPYmplY3RzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5tYXBfZ2FtZU9iamVjdHMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IGFyZ19zY2VuZTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lT2JqZWN0TWFuYWdlci5wcm90b3R5cGUsIFwiU2NlbmVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBHYW1lT2JqZWN0TWFuYWdlci5wcm90b3R5cGUuQWRkR2FtZU9iamVjdCA9IGZ1bmN0aW9uIChhcmdfbmFtZSwgYXJnX3RyYW5zZm9ybSwgYXJnX2lkTmFtZSwgYXJnX2FyeV9jb21wb25ldHMpIHtcclxuICAgICAgICB2YXIgbmV3T2JqO1xyXG4gICAgICAgIGlmICh0aGlzLm1hcF9nYW1lT2JqZWN0c1thcmdfbmFtZV0pIHtcclxuICAgICAgICAgICAgdmFyIG51bSA9IDE7XHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gYXJnX25hbWUgKyBcIl9cIiArIG51bTtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMubWFwX2dhbWVPYmplY3RzW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBudW0rKztcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBhcmdfbmFtZSArIFwiX1wiICsgbnVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFyZ19uYW1lID0gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhcmdfaWROYW1lKSB7XHJcbiAgICAgICAgICAgIGFyZ19pZE5hbWUgPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZ190cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgaWYgKGFyZ19hcnlfY29tcG9uZXRzKVxyXG4gICAgICAgICAgICAgICAgbmV3T2JqID0gbmV3IEdhbWVPYmplY3RfMS5kZWZhdWx0KHRoaXMsIGFyZ19uYW1lLCBhcmdfdHJhbnNmb3JtLCBhcmdfaWROYW1lLCBhcmdfYXJ5X2NvbXBvbmV0cyk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3T2JqID0gbmV3IEdhbWVPYmplY3RfMS5kZWZhdWx0KHRoaXMsIGFyZ19uYW1lLCBhcmdfdHJhbnNmb3JtLCBhcmdfaWROYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGFyZ19hcnlfY29tcG9uZXRzKVxyXG4gICAgICAgICAgICAgICAgbmV3T2JqID0gbmV3IEdhbWVPYmplY3RfMS5kZWZhdWx0KHRoaXMsIGFyZ19uYW1lLCBuZXcgVHJhbnNmb3JtXzEuZGVmYXVsdCgpLCBhcmdfaWROYW1lLCBhcmdfYXJ5X2NvbXBvbmV0cyk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3T2JqID0gbmV3IEdhbWVPYmplY3RfMS5kZWZhdWx0KHRoaXMsIGFyZ19uYW1lLCBuZXcgVHJhbnNmb3JtXzEuZGVmYXVsdCgpLCBhcmdfaWROYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1hcF9nYW1lT2JqZWN0c1thcmdfbmFtZV0gPSBuZXdPYmo7XHJcbiAgICAgICAgdGhpcy5uZXdHYW1lT2JqZWN0cy5wdXNoKG5ld09iaik7XHJcbiAgICAgICAgcmV0dXJuIG5ld09iajtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0TWFuYWdlci5wcm90b3R5cGUuUmVtb3ZlT2JqZWN0ID0gZnVuY3Rpb24gKGFyZ19nYW1lT2JqTmFtZSkge1xyXG4gICAgICAgIHRoaXMubWFwX2dhbWVPYmplY3RzW2FyZ19nYW1lT2JqTmFtZV0uRGVhZCgpO1xyXG4gICAgfTtcclxuICAgIEdhbWVPYmplY3RNYW5hZ2VyLnByb3RvdHlwZS5VblJlZ2lzdE9iamVjdCA9IGZ1bmN0aW9uIChhcmdfZ2FtZU9iamVjdE5hbWUpIHtcclxuICAgICAgICB0aGlzLm1hcF9nYW1lT2JqZWN0c1thcmdfZ2FtZU9iamVjdE5hbWVdID0gbnVsbDtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0TWFuYWdlci5wcm90b3R5cGUuVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMgPSB0aGlzLmdhbWVPYmplY3RzLmNvbmNhdCh0aGlzLm5ld0dhbWVPYmplY3RzKTtcclxuICAgICAgICB0aGlzLm5ld0dhbWVPYmplY3RzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iai5VcGRhdGUoKTsgfSk7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cy5maWx0ZXIoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqLklzUmVtb3ZlOyB9KS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iai5SZW1vdmUoKTsgfSk7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cyA9IHRoaXMuZ2FtZU9iamVjdHMuZmlsdGVyKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuICFvYmouSXNSZW1vdmU7IH0pO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5nYW1lT2JqZWN0cy5sZW5ndGgpO1xyXG4gICAgfTtcclxuICAgIEdhbWVPYmplY3RNYW5hZ2VyLnByb3RvdHlwZS5HZXRHYW1lT2JqZWN0ID0gZnVuY3Rpb24gKGFyZ19nYW1lT2JqZWN0TmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcF9nYW1lT2JqZWN0c1thcmdfZ2FtZU9iamVjdE5hbWVdO1xyXG4gICAgfTtcclxuICAgIEdhbWVPYmplY3RNYW5hZ2VyLnByb3RvdHlwZS5SZWdpc3RPYmogPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgdGhpcy5tYXBfZ2FtZU9iamVjdHNbb2JqLk5hbWVdID0gb2JqO1xyXG4gICAgfTtcclxuICAgIEdhbWVPYmplY3RNYW5hZ2VyLnByb3RvdHlwZS5SZWxlYXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubWFwX2dhbWVPYmplY3RzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5uZXdHYW1lT2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iai5SZWxlYXNlKCk7IH0pO1xyXG4gICAgICAgIHRoaXMubmV3R2FtZU9iamVjdHMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqLlJlbGVhc2UoKTsgfSk7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBudWxsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lT2JqZWN0TWFuYWdlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZU9iamVjdE1hbmFnZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBNYXRyaXhfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTWF0aC9NYXRyaXhcIikpO1xyXG52YXIgVHJhbnNmb3JtXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1RyYW5zZm9ybVwiKSk7XHJcbnZhciBWZWN0b3I0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL01hdGgvVmVjdG9yNFwiKSk7XHJcbnZhciBDYW1lcmEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDYW1lcmEoYXJnX2RldmljZSwgbGF5ZXIsIGlzUGFyYXJlbGwsIGZyYW1lQnVmZmVyKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRGcmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSBhcmdfZGV2aWNlO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybV8xLmRlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmxheWVyID0gbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5jbGVhckNvbG9yID0gbmV3IFZlY3RvcjRfMS5kZWZhdWx0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIGlmIChmcmFtZUJ1ZmZlcikge1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldEZyYW1lID0gZnJhbWVCdWZmZXI7XHJcbiAgICAgICAgICAgIGlmICghaXNQYXJhcmVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4ID0gbmV3IE1hdHJpeF8xLmRlZmF1bHQoKS5QZXJzcGVjdGl2ZSg0NSwgdGhpcy50YXJnZXRGcmFtZS53aWR0aCAvIHRoaXMudGFyZ2V0RnJhbWUuaGVpZ2h0LCAwLjEsIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3Rpb25NYXRyaXggPSBuZXcgTWF0cml4XzEuZGVmYXVsdCgpLk9ydGhvKC10aGlzLnRhcmdldEZyYW1lLndpZHRoIC8gMiwgdGhpcy50YXJnZXRGcmFtZS53aWR0aCAvIDIsIHRoaXMudGFyZ2V0RnJhbWUuaGVpZ2h0IC8gMiwgLXRoaXMudGFyZ2V0RnJhbWUuaGVpZ2h0IC8gMiwgMC4xLCAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIWlzUGFyYXJlbGwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3Rpb25NYXRyaXggPSBuZXcgTWF0cml4XzEuZGVmYXVsdCgpLlBlcnNwZWN0aXZlKDQ1LCB0aGlzLmRldmljZS5HZXRTaXplKCkueCAvIHRoaXMuZGV2aWNlLkdldFNpemUoKS55LCAwLjEsIDEwMCk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4ID0gbmV3IE1hdHJpeF8xLmRlZmF1bHQoKS5PcnRobygtdGhpcy5kZXZpY2UuR2V0U2l6ZSgpLnggLyAyLCB0aGlzLmRldmljZS5HZXRTaXplKCkueCAvIDIsIHRoaXMuZGV2aWNlLkdldFNpemUoKS55IC8gMiwgLXRoaXMuZGV2aWNlLkdldFNpemUoKS55IC8gMiwgMC4xLCAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQ2FtZXJhLnByb3RvdHlwZS5BdHRhY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kZXZpY2UuU2V0Q2xlYXJDb2xvcih0aGlzLmNsZWFyQ29sb3IpO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlLlNldENhbWVyYVN0YXR1cyh0aGlzLnRyYW5zZm9ybS5NYXRyaXguSW52ZXJzZSgpLCB0aGlzLnByb2plY3Rpb25NYXRyaXgsIHRoaXMudHJhbnNmb3JtLlJvdGF0aW9uLCB0aGlzLnRyYW5zZm9ybS5Qb3NpdGlvbik7XHJcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0RnJhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2UuY29udGV4dC52aWV3cG9ydCgwLCAwLCB0aGlzLnRhcmdldEZyYW1lLndpZHRoLCB0aGlzLnRhcmdldEZyYW1lLmhlaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlLmNvbnRleHQuYmluZEZyYW1lYnVmZmVyKHRoaXMuZGV2aWNlLmNvbnRleHQuRlJBTUVCVUZGRVIsIHRoaXMudGFyZ2V0RnJhbWUuZnJhbWVCdWZmZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZS5jbGVhckZ1bmMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlLmNvbnRleHQudmlld3BvcnQoMCwgMCwgdGhpcy5kZXZpY2UuR2V0U2l6ZSgpLngsIHRoaXMuZGV2aWNlLkdldFNpemUoKS55KTtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2UuY29udGV4dC5iaW5kRnJhbWVidWZmZXIodGhpcy5kZXZpY2UuY29udGV4dC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlLmNsZWFyRnVuYygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2FtZXJhO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDYW1lcmE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBWZWN0b3I0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL01hdGgvVmVjdG9yNFwiKSk7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL01hdGgvVmVjdG9yMlwiKSk7XHJcbnZhciBHcmFwaGljRGV2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR3JhcGhpY0RldmljZShhcmdfY2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBhcmdfY2FudmFzO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJyk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmVuYWJsZSh0aGlzLmNvbnRleHQuQ1VMTF9GQUNFKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZW5hYmxlKHRoaXMuY29udGV4dC5ERVBUSF9URVNUKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZGVwdGhGdW5jKHRoaXMuY29udGV4dC5MRVFVQUwpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJDb2xvciA9IG5ldyBWZWN0b3I0XzEuZGVmYXVsdCgwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnNpemUgPSBuZXcgVmVjdG9yMl8xLmRlZmF1bHQoYXJnX2NhbnZhcy53aWR0aCwgYXJnX2NhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJGdW5jID0gdGhpcy5DbGVhcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcih0aGlzLmNsZWFyQ29sb3IueCwgdGhpcy5jbGVhckNvbG9yLnksIHRoaXMuY2xlYXJDb2xvci56LCB0aGlzLmNsZWFyQ29sb3Iudyk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyRGVwdGgoMS4wKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmxlbmRGdW5jKHRoaXMuY29udGV4dC5TUkNfQUxQSEEsIHRoaXMuY29udGV4dC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZW5hYmxlKHRoaXMuY29udGV4dC5CTEVORCk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR3JhcGhpY0RldmljZS5wcm90b3R5cGUsIFwiVGVtcE1hdHJpeFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRlbXBNYXRyaXg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLCBcIlZpZXdNYXRyaXhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52aWV3TWF0cml4O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHcmFwaGljRGV2aWNlLnByb3RvdHlwZSwgXCJQcm9qZWN0aW9uTWF0cml4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdGlvbk1hdHJpeDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR3JhcGhpY0RldmljZS5wcm90b3R5cGUsIFwiQ2FtZXJhUG9zaXRpb25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYW1Qb3NpdGlvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR3JhcGhpY0RldmljZS5wcm90b3R5cGUsIFwiQ2FtZXJhUm90YXRpb25JbnZcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYW1Sb3RhdGlvbkludjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5TZXRDbGVhckNvbG9yID0gZnVuY3Rpb24gKGFyZ19jb2xvcikge1xyXG4gICAgICAgIHRoaXMuY2xlYXJDb2xvciA9IGFyZ19jb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcih0aGlzLmNsZWFyQ29sb3IueCwgdGhpcy5jbGVhckNvbG9yLnksIHRoaXMuY2xlYXJDb2xvci56LCB0aGlzLmNsZWFyQ29sb3Iudyk7XHJcbiAgICAgICAgcmV0dXJuIGFyZ19jb2xvcjtcclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5FbmFibGVTdGVuY2lsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5lbmFibGUodGhpcy5jb250ZXh0LlNURU5DSUxfVEVTVCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyU3RlbmNpbCgwKTtcclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5DbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXIodGhpcy5jb250ZXh0LkNPTE9SX0JVRkZFUl9CSVQgfCB0aGlzLmNvbnRleHQuREVQVEhfQlVGRkVSX0JJVCk7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuQ2xlYXJTdGVuY2lsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhcih0aGlzLmNvbnRleHQuQ09MT1JfQlVGRkVSX0JJVCB8IHRoaXMuY29udGV4dC5ERVBUSF9CVUZGRVJfQklUIHwgdGhpcy5jb250ZXh0LlNURU5DSUxfQlVGRkVSX0JJVCk7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuR2V0U2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLlByZXNlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZsdXNoKCk7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuU2V0U2hhZGVyID0gZnVuY3Rpb24gKGFyZ19zaGFkZXIpIHtcclxuICAgICAgICB0aGlzLnNoYWRlciA9IGFyZ19zaGFkZXI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW0odGhpcy5zaGFkZXIucHJvZ3JhbU9iamVjdCk7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuQ3JlYXRlUHJvZ3JhbSA9IGZ1bmN0aW9uIChhcmdfdnMsIGFyZ19mcykge1xyXG4gICAgICAgIC8vIOODl+ODreOCsOODqeODoOOCquODluOCuOOCp+OCr+ODiOOBrueUn+aIkFxyXG4gICAgICAgIHZhciBwcm9ncmFtID0gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0oKTtcclxuICAgICAgICAvLyDjg5fjg63jgrDjg6njg6Djgqrjg5bjgrjjgqfjgq/jg4jjgavjgrfjgqfjg7zjg4DjgpLlibLjgorlvZPjgabjgotcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGFyZ192cyk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCBhcmdfZnMpO1xyXG4gICAgICAgIC8vIOOCt+OCp+ODvOODgOOCkuODquODs+OCr1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICAvLyDjgrfjgqfjg7zjg4Djga7jg6rjg7Pjgq/jgYzmraPjgZfjgY/ooYzjgarjgo/jgozjgZ/jgYvjg4Hjgqfjg4Pjgq9cclxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgdGhpcy5jb250ZXh0LkxJTktfU1RBVFVTKSkge1xyXG4gICAgICAgICAgICAvLyDmiJDlip/jgZfjgabjgYTjgZ/jgonjg5fjg63jgrDjg6njg6Djgqrjg5bjgrjjgqfjgq/jg4jjgpLmnInlirnjgavjgZnjgotcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIC8vIOODl+ODreOCsOODqeODoOOCquODluOCuOOCp+OCr+ODiOOCkui/lOOBl+OBpue1guS6hlxyXG4gICAgICAgICAgICByZXR1cm4gcHJvZ3JhbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOWkseaVl+OBl+OBpuOBhOOBn+OCieOCqOODqeODvOODreOCsOOCkuOCouODqeODvOODiOOBmeOCi1xyXG4gICAgICAgICAgICBhbGVydCh0aGlzLmNvbnRleHQuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5DcmVhdGVWQk8gPSBmdW5jdGlvbiAoYXJnX2RhdGEpIHtcclxuICAgICAgICAvLyDjg5Djg4Pjg5XjgqHjgqrjg5bjgrjjgqfjgq/jg4jjga7nlJ/miJBcclxuICAgICAgICB2YXIgdmJvID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgIC8vIOODkOODg+ODleOCoeOCkuODkOOCpOODs+ODieOBmeOCi1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRoaXMuY29udGV4dC5BUlJBWV9CVUZGRVIsIHZibyk7XHJcbiAgICAgICAgLy8g44OQ44OD44OV44Kh44Gr44OH44O844K/44KS44K744OD44OIXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGhpcy5jb250ZXh0LkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShhcmdfZGF0YSksIHRoaXMuY29udGV4dC5TVEFUSUNfRFJBVyk7XHJcbiAgICAgICAgLy8g44OQ44OD44OV44Kh44Gu44OQ44Kk44Oz44OJ44KS54Sh5Yq55YyWXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGhpcy5jb250ZXh0LkFSUkFZX0JVRkZFUiwgbnVsbCk7XHJcbiAgICAgICAgLy8g55Sf5oiQ44GX44GfVkJP44KS6L+U44GX44Gm57WC5LqGXHJcbiAgICAgICAgcmV0dXJuIHZibztcclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5DcmVhdGVJQk8gPSBmdW5jdGlvbiAoYXJnX2RhdGEpIHtcclxuICAgICAgICAvLyDjg5Djg4Pjg5XjgqHjgqrjg5bjgrjjgqfjgq/jg4jjga7nlJ/miJBcclxuICAgICAgICB2YXIgaWJvID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgIC8vIOODkOODg+ODleOCoeOCkuODkOOCpOODs+ODieOBmeOCi1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRoaXMuY29udGV4dC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgaWJvKTtcclxuICAgICAgICAvLyDjg5Djg4Pjg5XjgqHjgavjg4fjg7zjgr/jgpLjgrvjg4Pjg4hcclxuICAgICAgICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0aGlzLmNvbnRleHQuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG5ldyBJbnQxNkFycmF5KGFyZ19kYXRhKSwgdGhpcy5jb250ZXh0LlNUQVRJQ19EUkFXKTtcclxuICAgICAgICAvLyDjg5Djg4Pjg5XjgqHjga7jg5DjgqTjg7Pjg4njgpLnhKHlirnljJZcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0aGlzLmNvbnRleHQuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG51bGwpO1xyXG4gICAgICAgIC8vIOeUn+aIkOOBl+OBn0lCT+OCkui/lOOBl+OBpue1guS6hlxyXG4gICAgICAgIHJldHVybiBpYm87XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuQ3JlYXRlVmVydGV4U2hhZGVyID0gZnVuY3Rpb24gKGFyZ19zb3VyY2UpIHtcclxuICAgICAgICB2YXIgc2hhZGVyO1xyXG4gICAgICAgIHNoYWRlciA9IHRoaXMuY29udGV4dC5jcmVhdGVTaGFkZXIodGhpcy5jb250ZXh0LlZFUlRFWF9TSEFERVIpO1xyXG4gICAgICAgIC8vIOeUn+aIkOOBleOCjOOBn+OCt+OCp+ODvOODgOOBq+OCveODvOOCueOCkuWJsuOCiuW9k+OBpuOCi1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBhcmdfc291cmNlKTtcclxuICAgICAgICAvLyDjgrfjgqfjg7zjg4DjgpLjgrPjg7Pjg5HjgqTjg6vjgZnjgotcclxuICAgICAgICB0aGlzLmNvbnRleHQuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG4gICAgICAgIC8vIOOCt+OCp+ODvOODgOOBjOato+OBl+OBj+OCs+ODs+ODkeOCpOODq+OBleOCjOOBn+OBi+ODgeOCp+ODg+OCr1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgdGhpcy5jb250ZXh0LkNPTVBJTEVfU1RBVFVTKSkge1xyXG4gICAgICAgICAgICAvLyDmiJDlip/jgZfjgabjgYTjgZ/jgonjgrfjgqfjg7zjg4DjgpLov5TjgZfjgabntYLkuoZcclxuICAgICAgICAgICAgcmV0dXJuIHNoYWRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmVydGV4IHNoYWRlciBmYWlsZWRcIik7XHJcbiAgICAgICAgICAgIC8vIOWkseaVl+OBl+OBpuOBhOOBn+OCieOCqOODqeODvOODreOCsOOCkuOCouODqeODvOODiOOBmeOCi1xyXG4gICAgICAgICAgICBhbGVydCh0aGlzLmNvbnRleHQuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5DcmVhdGVGcmFnbWVudFNoYWRlciA9IGZ1bmN0aW9uIChhcmdfc291cmNlKSB7XHJcbiAgICAgICAgdmFyIHNoYWRlcjtcclxuICAgICAgICBzaGFkZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlU2hhZGVyKHRoaXMuY29udGV4dC5GUkFHTUVOVF9TSEFERVIpO1xyXG4gICAgICAgIC8vIOeUn+aIkOOBleOCjOOBn+OCt+OCp+ODvOODgOOBq+OCveODvOOCueOCkuWJsuOCiuW9k+OBpuOCi1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBhcmdfc291cmNlKTtcclxuICAgICAgICAvLyDjgrfjgqfjg7zjg4DjgpLjgrPjg7Pjg5HjgqTjg6vjgZnjgotcclxuICAgICAgICB0aGlzLmNvbnRleHQuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG4gICAgICAgIC8vIOOCt+OCp+ODvOODgOOBjOato+OBl+OBj+OCs+ODs+ODkeOCpOODq+OBleOCjOOBn+OBi+ODgeOCp+ODg+OCr1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgdGhpcy5jb250ZXh0LkNPTVBJTEVfU1RBVFVTKSkge1xyXG4gICAgICAgICAgICAvLyDmiJDlip/jgZfjgabjgYTjgZ/jgonjgrfjgqfjg7zjg4DjgpLov5TjgZfjgabntYLkuoZcclxuICAgICAgICAgICAgcmV0dXJuIHNoYWRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZnJhZ21lbnQgc2hhZGVyIGZhaWxlZFwiKTtcclxuICAgICAgICAgICAgLy8g5aSx5pWX44GX44Gm44GE44Gf44KJ44Ko44Op44O844Ot44Kw44KS44Ki44Op44O844OI44GZ44KLXHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuY29udGV4dC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLkNyZWF0ZVRleHR1cmUgPSBmdW5jdGlvbiAoYXJnX3NvdXJjZSwgYXJnX3RleHR1cmUpIHtcclxuICAgICAgICAvLyDjgqTjg6Hjg7zjgrjjgqrjg5bjgrjjgqfjgq/jg4jjga7nlJ/miJBcclxuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgLy8g44OH44O844K/44Gu44Kq44Oz44Ot44O844OJ44KS44OI44Oq44Ks44O844Gr44GZ44KLXHJcbiAgICAgICAgaW1nLm9ubG9hZCA9IE9uVGV4TG9hZChpbWcsIGFyZ190ZXh0dXJlLCBhcmdfc291cmNlLCB0aGlzKTtcclxuICAgICAgICAvLyDjgqTjg6Hjg7zjgrjjgqrjg5bjgrjjgqfjgq/jg4jjga7jgr3jg7zjgrnjgpLmjIflrppcclxuICAgICAgICBpbWcuc3JjID0gYXJnX3NvdXJjZTtcclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5TZXRWQk8gPSBmdW5jdGlvbiAoYXJnX3Zib0xpc3QpIHtcclxuICAgICAgICAvLyDlvJXmlbDjgajjgZfjgablj5fjgZHlj5bjgaPjgZ/phY3liJfjgpLlh6bnkIbjgZnjgotcclxuICAgICAgICBmb3IgKHZhciBpIGluIGFyZ192Ym9MaXN0KSB7XHJcbiAgICAgICAgICAgIC8vIOODkOODg+ODleOCoeOCkuODkOOCpOODs+ODieOBmeOCi1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0aGlzLmNvbnRleHQuQVJSQVlfQlVGRkVSLCBhcmdfdmJvTGlzdFtpXSk7XHJcbiAgICAgICAgICAgIC8vIGF0dHJpYnV0ZUxvY2F0aW9u44KS5pyJ5Yq544Gr44GZ44KLXHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnNoYWRlci5hdHRyaWJ1dGVMb2NhdGlvbnNbaV0pO1xyXG4gICAgICAgICAgICAvLyBhdHRyaWJ1dGVMb2NhdGlvbuOCkumAmuefpeOBl+eZu+mMsuOBmeOCi1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnNoYWRlci5hdHRyaWJ1dGVMb2NhdGlvbnNbaV0sIHRoaXMuc2hhZGVyLmF0dHJpYnV0ZVN0cmlkZXNbaV0sIHRoaXMuY29udGV4dC5GTE9BVCwgZmFsc2UsIDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5PbkxvYWRUZXh0dXJlID0gZnVuY3Rpb24gKGltZywgYXJnX3RleHR1cmUsIGFyZ19zb3VyY2UpIHtcclxuICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6Pjgqrjg5bjgrjjgqfjgq/jg4jjga7nlJ/miJBcclxuICAgICAgICB2YXIgdGV4ID0gdGhpcy5jb250ZXh0LmNyZWF0ZVRleHR1cmUoKTtcclxuICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6PjgpLjg5DjgqTjg7Pjg4njgZnjgotcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUodGhpcy5jb250ZXh0LlRFWFRVUkVfMkQsIHRleCk7XHJcbiAgICAgICAgLy8g44OG44Kv44K544OB44Oj44G444Kk44Oh44O844K444KS6YGp55SoXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnRleEltYWdlMkQodGhpcy5jb250ZXh0LlRFWFRVUkVfMkQsIDAsIHRoaXMuY29udGV4dC5SR0JBLCB0aGlzLmNvbnRleHQuUkdCQSwgdGhpcy5jb250ZXh0LlVOU0lHTkVEX0JZVEUsIGltZyk7XHJcbiAgICAgICAgLy8g44Of44OD44OX44Oe44OD44OX44KS55Sf5oiQXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmdlbmVyYXRlTWlwbWFwKHRoaXMuY29udGV4dC5URVhUVVJFXzJEKTtcclxuICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6Pjga7jg5DjgqTjg7Pjg4njgpLnhKHlirnljJZcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUodGhpcy5jb250ZXh0LlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gICAgICAgIGFyZ190ZXh0dXJlLmRhdGEgPSB0ZXg7XHJcbiAgICAgICAgYXJnX3RleHR1cmUuTG9hZGVkKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYXJnX3NvdXJjZSArIFwiIGxvYWRlZFwiKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5PbkxvYWRTaGFkZXIgPSBmdW5jdGlvbiAoYXJnX3NvdXJjZSwgYXJnX3NoYWRlcikge1xyXG4gICAgICAgIHZhciBkYXRhID0gYXJnX3NvdXJjZS5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgYXJnX3NoYWRlciA9IHRoaXMuY29udGV4dC5jcmVhdGVTaGFkZXIodGhpcy5jb250ZXh0LlZFUlRFWF9TSEFERVIpO1xyXG4gICAgICAgIC8vIOeUn+aIkOOBleOCjOOBn+OCt+OCp+ODvOODgOOBq+OCveODvOOCueOCkuWJsuOCiuW9k+OBpuOCi1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zaGFkZXJTb3VyY2UoYXJnX3NoYWRlciwgZGF0YSk7XHJcbiAgICAgICAgLy8g44K344Kn44O844OA44KS44Kz44Oz44OR44Kk44Or44GZ44KLXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNvbXBpbGVTaGFkZXIoYXJnX3NoYWRlcik7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuU2V0Q2FtZXJhU3RhdHVzID0gZnVuY3Rpb24gKGFyZ192aWV3TWF0cml4LCBhcmdfcHJvamVjdGlvbk1hdHJpeCwgYXJnX2NhbWVyYU1hdHJpeCwgYXJnX2NhbWVyYVBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy52aWV3TWF0cml4ID0gYXJnX3ZpZXdNYXRyaXg7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4ID0gYXJnX3Byb2plY3Rpb25NYXRyaXg7XHJcbiAgICAgICAgdGhpcy50ZW1wTWF0cml4ID0gdGhpcy5wcm9qZWN0aW9uTWF0cml4Lk11bHRpcGx5KHRoaXMudmlld01hdHJpeCk7XHJcbiAgICAgICAgdGhpcy5jYW1Qb3NpdGlvbiA9IGFyZ19jYW1lcmFQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLmNhbVJvdGF0aW9uSW52ID0gKGFyZ19jYW1lcmFNYXRyaXgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHcmFwaGljRGV2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBHcmFwaGljRGV2aWNlO1xyXG5mdW5jdGlvbiBPblRleExvYWQoaW1nLCBhcmdfdGV4dHVyZSwgYXJnX3NvdXJjZSwgZGV2aWNlKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRldmljZS5PbkxvYWRUZXh0dXJlKGltZywgYXJnX3RleHR1cmUsIGFyZ19zb3VyY2UpO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBPblNoYWRlckxvYWQoYXJnX3NvdXJjZSwgYXJnX3NoYWRlciwgZGV2aWNlKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRldmljZS5PbkxvYWRTaGFkZXIoYXJnX3NvdXJjZSwgYXJnX3NoYWRlcik7XHJcbiAgICB9O1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1vZGVsKGlzTGlnaHQsIGlzQmlsbEJvYXJkKSB7XHJcbiAgICAgICAgaWYgKGlzQmlsbEJvYXJkID09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKGlzTGlnaHQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLkRyYXcgPSB0aGlzLkRyYXdfQmlsbEJvYXJkX0xpZ2h0O1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLkRyYXcgPSB0aGlzLkRyYXdfQmlsbEJvYXJkX05vbkxpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGlzTGlnaHQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLkRyYXcgPSB0aGlzLkRyYXdfTGlnaHQ7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuRHJhdyA9IHRoaXMuRHJhd19Ob25MaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBNb2RlbC5wcm90b3R5cGUuSW5pdGlhbGl6ZV9nZW9tID0gZnVuY3Rpb24gKGFyZ19ncmFwaGljRGV2aWNlLCBhcmdfZ2VvbWV0cnksIGFyZ19tYXRlcmlhbCwgYXJnX1NoYWRlciwgYXJnX3RyYW5zZm9ybSkge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZSA9IGFyZ19ncmFwaGljRGV2aWNlO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBhcmdfZ2VvbWV0cnk7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLm1hdGVyaWFscy5wdXNoKGFyZ19tYXRlcmlhbCk7XHJcbiAgICAgICAgdGhpcy5zdWJzZXRzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5zdWJzZXRzLnB1c2godGhpcy5nZW9tZXRyeS5HZXRJbmRleFNpemUoKSk7XHJcbiAgICAgICAgdGhpcy5zaGFkZXIgPSBhcmdfU2hhZGVyO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gYXJnX3RyYW5zZm9ybTtcclxuICAgICAgICB0aGlzLmxpZ2h0cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgfTtcclxuICAgIE1vZGVsLnByb3RvdHlwZS5Jbml0aWFsaXplX21lc2ggPSBmdW5jdGlvbiAoYXJnX2dyYXBoaWNEZXZpY2UsIGFyZ19tZXNoLCBhcmdfU2hhZGVyLCBhcmdfdHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlID0gYXJnX2dyYXBoaWNEZXZpY2U7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IGFyZ19tZXNoLmdlb21ldHJ5O1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxzID0gYXJnX21lc2guYXJ5X21hdGVyaWFscztcclxuICAgICAgICB0aGlzLnN1YnNldHMgPSB0aGlzLmdlb21ldHJ5LkdldFN1YlNldCgpO1xyXG4gICAgICAgIHRoaXMuc2hhZGVyID0gYXJnX1NoYWRlcjtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IGFyZ190cmFuc2Zvcm07XHJcbiAgICAgICAgdGhpcy5saWdodHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN1YnNldHMpO1xyXG4gICAgfTtcclxuICAgIE1vZGVsLnByb3RvdHlwZS5TZXRMaWdodCA9IGZ1bmN0aW9uIChhcmdfbGlnaHQpIHtcclxuICAgICAgICB0aGlzLmxpZ2h0cy5wdXNoKGFyZ19saWdodCk7XHJcbiAgICB9O1xyXG4gICAgTW9kZWwucHJvdG90eXBlLkRyYXdfTm9uTGlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zaGFkZXIuQXR0YWNoKCk7XHJcbiAgICAgICAgdmFyIG12cE1hdHJpeCA9IHRoaXMuZ3JhcGhpY0RldmljZS5UZW1wTWF0cml4Lk11bHRpcGx5KHRoaXMudHJhbnNmb3JtLk1hdHJpeCk7XHJcbiAgICAgICAgdmFyIGludk1hdHJpeCA9IHRoaXMudHJhbnNmb3JtLk1hdHJpeC5JbnZlcnNlKCk7XHJcbiAgICAgICAgLy8gdW5pZm9ybeWkieaVsOOBrueZu+mMsuOBqOaPj+eUu1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1swXSwgZmFsc2UsIG12cE1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMV0sIGZhbHNlLCB0aGlzLnRyYW5zZm9ybS5NYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzJdLCBmYWxzZSwgaW52TWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuRHJhdygpO1xyXG4gICAgICAgIHZhciBvZmZzZXQgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdWJzZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzW2ldLkF0dGFjaCgpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5kcmF3RWxlbWVudHModGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVFJJQU5HTEVTLCB0aGlzLnN1YnNldHNbaV0sIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlVOU0lHTkVEX1NIT1JULCBvZmZzZXQgKiAyKTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IHRoaXMuc3Vic2V0c1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTW9kZWwucHJvdG90eXBlLkRyYXdfTGlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zaGFkZXIuQXR0YWNoKCk7XHJcbiAgICAgICAgdmFyIG12cE1hdHJpeCA9IHRoaXMuZ3JhcGhpY0RldmljZS5UZW1wTWF0cml4Lk11bHRpcGx5KHRoaXMudHJhbnNmb3JtLk1hdHJpeCk7XHJcbiAgICAgICAgdmFyIGludk1hdHJpeCA9IHRoaXMudHJhbnNmb3JtLk1hdHJpeC5JbnZlcnNlKCk7XHJcbiAgICAgICAgLy8gdW5pZm9ybeWkieaVsOOBrueZu+mMsuOBqOaPj+eUu1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1swXSwgZmFsc2UsIG12cE1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMV0sIGZhbHNlLCB0aGlzLnRyYW5zZm9ybS5NYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzJdLCBmYWxzZSwgaW52TWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMubGlnaHRzLmZvckVhY2goZnVuY3Rpb24gKGxpZ2h0KSB7IHJldHVybiBsaWdodC5BdGFjaCgpOyB9KTtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LkRyYXcoKTtcclxuICAgICAgICB2YXIgb2Zmc2V0ID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3Vic2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsc1tpXS5BdHRhY2goKTtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuZHJhd0VsZW1lbnRzKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRSSUFOR0xFUywgdGhpcy5zdWJzZXRzW2ldLCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5VTlNJR05FRF9TSE9SVCwgb2Zmc2V0ICogMik7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSB0aGlzLnN1YnNldHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE1vZGVsLnByb3RvdHlwZS5EcmF3X0JpbGxCb2FyZF9MaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNoYWRlci5BdHRhY2goKTtcclxuICAgICAgICB2YXIgbU1hdHJpeCA9IHRoaXMudHJhbnNmb3JtLk1hdHJpeC5NdWx0aXBseSh0aGlzLmdyYXBoaWNEZXZpY2UuQ2FtZXJhUm90YXRpb25JbnYpO1xyXG4gICAgICAgIHZhciBtdnBNYXRyaXggPSB0aGlzLmdyYXBoaWNEZXZpY2UuVGVtcE1hdHJpeC5NdWx0aXBseShtTWF0cml4KTtcclxuICAgICAgICB2YXIgaW52TWF0cml4ID0gdGhpcy50cmFuc2Zvcm0uTWF0cml4LkludmVyc2UoKTtcclxuICAgICAgICB0aGlzLmxpZ2h0cy5mb3JFYWNoKGZ1bmN0aW9uIChsaWdodCkgeyByZXR1cm4gbGlnaHQuQXRhY2goKTsgfSk7XHJcbiAgICAgICAgLy8gdW5pZm9ybeWkieaVsOOBrueZu+mMsuOBqOaPj+eUu1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1swXSwgZmFsc2UsIG12cE1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMV0sIGZhbHNlLCB0aGlzLnRyYW5zZm9ybS5NYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzJdLCBmYWxzZSwgaW52TWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuRHJhdygpO1xyXG4gICAgICAgIHZhciBvZmZzZXQgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdWJzZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzW2ldLkF0dGFjaCgpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5kcmF3RWxlbWVudHModGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVFJJQU5HTEVTLCB0aGlzLnN1YnNldHNbaV0sIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlVOU0lHTkVEX1NIT1JULCBvZmZzZXQgKiAyKTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IHRoaXMuc3Vic2V0c1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTW9kZWwucHJvdG90eXBlLkRyYXdfQmlsbEJvYXJkX05vbkxpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2hhZGVyLkF0dGFjaCgpO1xyXG4gICAgICAgIC8vdGhpcy50cmFuc2Zvcm0uTG9va0F0KHRoaXMuZ3JhcGhpY0RldmljZS5DYW1lcmFQb3NpdGlvbixuZXcgVmVjdG9yMygwLDEsMCkpO1xyXG4gICAgICAgIHZhciBtTWF0cml4ID0gdGhpcy50cmFuc2Zvcm0uTWF0cml4Lk11bHRpcGx5KHRoaXMuZ3JhcGhpY0RldmljZS5DYW1lcmFSb3RhdGlvbkludik7XHJcbiAgICAgICAgdmFyIG12cE1hdHJpeCA9IHRoaXMuZ3JhcGhpY0RldmljZS5UZW1wTWF0cml4Lk11bHRpcGx5KG1NYXRyaXgpO1xyXG4gICAgICAgIHZhciBpbnZNYXRyaXggPSB0aGlzLnRyYW5zZm9ybS5NYXRyaXguSW52ZXJzZSgpO1xyXG4gICAgICAgIC8vIHVuaWZvcm3lpInmlbDjga7nmbvpjLLjgajmj4/nlLtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMF0sIGZhbHNlLCBtdnBNYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzFdLCBmYWxzZSwgdGhpcy50cmFuc2Zvcm0uTWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1syXSwgZmFsc2UsIGludk1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LkRyYXcoKTtcclxuICAgICAgICB2YXIgb2Zmc2V0ID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3Vic2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsc1tpXS5BdHRhY2goKTtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuZHJhd0VsZW1lbnRzKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRSSUFOR0xFUywgdGhpcy5zdWJzZXRzW2ldLCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5VTlNJR05FRF9TSE9SVCwgb2Zmc2V0ICogMik7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSB0aGlzLnN1YnNldHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBNb2RlbDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gTW9kZWw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBUZXh0TW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUZXh0TW9kZWwoaXNCaWxsQm9hcmQpIHtcclxuICAgICAgICBpZiAoaXNCaWxsQm9hcmQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkRyYXcgPSB0aGlzLkRyYXdfQmlsbEJvYXJkX05vbkxpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5EcmF3ID0gdGhpcy5EcmF3X05vbkxpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFRleHRNb2RlbC5wcm90b3R5cGUuU2V0VVZEYXRhID0gZnVuY3Rpb24gKGFyZ191dlZCTykge1xyXG4gICAgICAgIHRoaXMudXZEYXRhID0gYXJnX3V2VkJPO1xyXG4gICAgfTtcclxuICAgIFRleHRNb2RlbC5wcm90b3R5cGUuSW5pdGlhbGl6ZV9nZW9tID0gZnVuY3Rpb24gKGFyZ19ncmFwaGljRGV2aWNlLCBhcmdfZ2VvbWV0cnksIGFyZ19tYXRlcmlhbCwgYXJnX1NoYWRlciwgYXJnX3RyYW5zZm9ybSkge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZSA9IGFyZ19ncmFwaGljRGV2aWNlO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBhcmdfZ2VvbWV0cnk7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbHMgPSBhcmdfbWF0ZXJpYWw7XHJcbiAgICAgICAgdGhpcy5pbmRleFNpemUgPSAodGhpcy5nZW9tZXRyeS5HZXRJbmRleFNpemUoKSk7XHJcbiAgICAgICAgdGhpcy5zaGFkZXIgPSBhcmdfU2hhZGVyO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gYXJnX3RyYW5zZm9ybTtcclxuICAgIH07XHJcbiAgICBUZXh0TW9kZWwucHJvdG90eXBlLlNldExpZ2h0ID0gZnVuY3Rpb24gKGFyZ19saWdodCkge1xyXG4gICAgfTtcclxuICAgIFRleHRNb2RlbC5wcm90b3R5cGUuRHJhd19Ob25MaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNoYWRlci5BdHRhY2goKTtcclxuICAgICAgICB2YXIgbXZwTWF0cml4ID0gdGhpcy5ncmFwaGljRGV2aWNlLlRlbXBNYXRyaXguTXVsdGlwbHkodGhpcy50cmFuc2Zvcm0uTWF0cml4KTtcclxuICAgICAgICB2YXIgaW52TWF0cml4ID0gdGhpcy50cmFuc2Zvcm0uTWF0cml4LkludmVyc2UoKTtcclxuICAgICAgICAvLyB1bmlmb3Jt5aSJ5pWw44Gu55m76Yyy44Go5o+P55S7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzBdLCBmYWxzZSwgbXZwTWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1sxXSwgZmFsc2UsIHRoaXMudHJhbnNmb3JtLk1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMl0sIGZhbHNlLCBpbnZNYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5EcmF3KCk7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5DaGFuZ2VWQk8odGhpcy51dkRhdGEsIDEpO1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxzLkF0dGFjaCgpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmRyYXdFbGVtZW50cyh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5UUklBTkdMRVMsIHRoaXMuaW5kZXhTaXplLCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5VTlNJR05FRF9TSE9SVCwgMCk7XHJcbiAgICB9O1xyXG4gICAgVGV4dE1vZGVsLnByb3RvdHlwZS5EcmF3X0JpbGxCb2FyZF9Ob25MaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNoYWRlci5BdHRhY2goKTtcclxuICAgICAgICAvL3RoaXMudHJhbnNmb3JtLkxvb2tBdCh0aGlzLmdyYXBoaWNEZXZpY2UuQ2FtZXJhUG9zaXRpb24sbmV3IFZlY3RvcjMoMCwxLDApKTtcclxuICAgICAgICB2YXIgbU1hdHJpeCA9IHRoaXMudHJhbnNmb3JtLk1hdHJpeC5NdWx0aXBseSh0aGlzLmdyYXBoaWNEZXZpY2UuQ2FtZXJhUm90YXRpb25JbnYpO1xyXG4gICAgICAgIHZhciBtdnBNYXRyaXggPSB0aGlzLmdyYXBoaWNEZXZpY2UuVGVtcE1hdHJpeC5NdWx0aXBseShtTWF0cml4KTtcclxuICAgICAgICB2YXIgaW52TWF0cml4ID0gdGhpcy50cmFuc2Zvcm0uTWF0cml4LkludmVyc2UoKTtcclxuICAgICAgICAvLyB1bmlmb3Jt5aSJ5pWw44Gu55m76Yyy44Go5o+P55S7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzBdLCBmYWxzZSwgbXZwTWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1sxXSwgZmFsc2UsIHRoaXMudHJhbnNmb3JtLk1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMl0sIGZhbHNlLCBpbnZNYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5EcmF3KCk7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5DaGFuZ2VWQk8odGhpcy51dkRhdGEsIDEpO1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxzLkF0dGFjaCgpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmRyYXdFbGVtZW50cyh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5UUklBTkdMRVMsIHRoaXMuaW5kZXhTaXplLCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5VTlNJR05FRF9TSE9SVCwgMCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRleHRNb2RlbDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dE1vZGVsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVHJhbnNmb3JtXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1RyYW5zZm9ybVwiKSk7XHJcbnZhciBQb2ludExpZ2h0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUG9pbnRMaWdodChhcmdfZGV2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlID0gYXJnX2RldmljZTtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm1fMS5kZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBQb2ludExpZ2h0LnByb3RvdHlwZS5BdGFjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtM2Z2KHRoaXMuZ3JhcGhpY0RldmljZS5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1s0XSwgdGhpcy50cmFuc2Zvcm0uUG9zaXRpb24ueHl6KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUG9pbnRMaWdodDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUG9pbnRMaWdodDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBTY2VuZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NjZW5lL1NjZW5lXCIpKTtcclxudmFyIFJlc291cmNlQ3JlYXRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1Rvb2wvUmVzb3VyY2VDcmVhdGVyXCIpKTtcclxudmFyIEdlb21ldHJ5R2VuZXJhdG9yXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVG9vbC9HZW9tZXRyeUdlbmVyYXRvclwiKSk7XHJcbnZhciBRdWF0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWF0aC9RdWF0XCIpKTtcclxudmFyIFZlY3RvcjRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYXRoL1ZlY3RvcjRcIikpO1xyXG52YXIgVmVjdG9yM18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01hdGgvVmVjdG9yM1wiKSk7XHJcbnZhciBQb2ludExpZ2h0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTGlnaHQvUG9pbnRMaWdodFwiKSk7XHJcbnZhciBNb2RlbERyYXdDb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21wb25lbnQvTW9kZWxEcmF3Q29tcG9uZW50XCIpKTtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYXRoL1ZlY3RvcjJcIikpO1xyXG52YXIgVGV4dERyYXdDb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21wb25lbnQvVGV4dERyYXdDb21wb25lbnRcIikpO1xyXG52YXIgVHJhbnNmb3JtXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVHJhbnNmb3JtXCIpKTtcclxudmFyIFNhbXBsZVNjZW5lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vU2FtcGxlU2NlbmVcIikpO1xyXG52YXIgUHJpbWl0aXZlVHlwZTtcclxuKGZ1bmN0aW9uIChQcmltaXRpdmVUeXBlKSB7XHJcbiAgICBQcmltaXRpdmVUeXBlW1ByaW1pdGl2ZVR5cGVbXCJzcGhlcmVcIl0gPSAwXSA9IFwic3BoZXJlXCI7XHJcbiAgICBQcmltaXRpdmVUeXBlW1ByaW1pdGl2ZVR5cGVbXCJib3hfQUFCQlwiXSA9IDFdID0gXCJib3hfQUFCQlwiO1xyXG4gICAgUHJpbWl0aXZlVHlwZVtQcmltaXRpdmVUeXBlW1wiYm94X09CQlwiXSA9IDJdID0gXCJib3hfT0JCXCI7XHJcbiAgICBQcmltaXRpdmVUeXBlW1ByaW1pdGl2ZVR5cGVbXCJwb2ludFwiXSA9IDNdID0gXCJwb2ludFwiO1xyXG59KShQcmltaXRpdmVUeXBlIHx8IChQcmltaXRpdmVUeXBlID0ge30pKTtcclxudmFyIGZsb2F0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gZmxvYXQoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEZsb2F0MzJBcnJheSgxKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmbG9hdDtcclxufSgpKTtcclxudmFyIExvYWRTY2VuZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhMb2FkU2NlbmUsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBMb2FkU2NlbmUoc2NlbmVNYW5nZXIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzY2VuZU1hbmdlcikgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5hUXVhdGVybmlvbiA9IG5ldyBRdWF0XzEuZGVmYXVsdCgpLklkZW50aXR5KCk7XHJcbiAgICAgICAgX3RoaXMuYlF1YXRlcm5pb24gPSBuZXcgUXVhdF8xLmRlZmF1bHQoKS5JZGVudGl0eSgpO1xyXG4gICAgICAgIF90aGlzLnNRdWF0ZXJuaW9uID0gbmV3IFF1YXRfMS5kZWZhdWx0KCkuSWRlbnRpdHkoKTtcclxuICAgICAgICBfdGhpcy56b29tRGF0YSA9IG5ldyBmbG9hdCgpO1xyXG4gICAgICAgIF90aGlzLnpvb21EaXJlY3Rpb24gPSAxLjA7XHJcbiAgICAgICAgX3RoaXMuem9vbURhdGEuZGF0YVswXSA9IDAuNTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBMb2FkU2NlbmUucHJvdG90eXBlLkJlZkxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5BZGRMYXllcigpO1xyXG4gICAgICAgIHRoaXMuQWRkQ2FtZXJhKDAsIDEsIFwibWFpblwiLCBmYWxzZSwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5HZXRUZXh0dXJlKFwibG9hZGluZ0NhbWVyYVwiKSk7XHJcbiAgICAgICAgLy8g6aCC54K544K344Kn44O844OA44Go44OV44Op44Kw44Oh44Oz44OI44K344Kn44O844OA44Gu55Sf5oiQXHJcbiAgICAgICAgdmFyIGxpZ2h0ID0gbmV3IFBvaW50TGlnaHRfMS5kZWZhdWx0KHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSk7XHJcbiAgICAgICAgbGlnaHQudHJhbnNmb3JtLlBvc2l0aW9uID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KC01LCAtNSwgMTApO1xyXG4gICAgICAgIC8vdGhpcy5yZW5kZXJlci5TZXRMaWdodChsaWdodCwwKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLlNldExpZ2h0KGxpZ2h0LCAxKTtcclxuICAgICAgICB0aGlzLnNjZW5lTWFuYWdlci5HZXRHcmFwaGljRGV2aWNlKCkuRW5hYmxlU3RlbmNpbCgpO1xyXG4gICAgICAgIHRoaXMuR2V0Q2FtZXJhKFwibWFpblwiKS50cmFuc2Zvcm0uUG9zaXRpb24gPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgLTMsIDEwKTtcclxuICAgICAgICB0aGlzLkdldENhbWVyYShcIm1haW5cIikudHJhbnNmb3JtLkxvb2tBdChuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgMCksIFZlY3RvcjNfMS5kZWZhdWx0LnlBeGlzKTtcclxuICAgICAgICB0aGlzLkdldENhbWVyYShcIm1haW5cIikuY2xlYXJDb2xvciA9IG5ldyBWZWN0b3I0XzEuZGVmYXVsdCgwLjAsIDAuMCwgMC4wLCAxLjApO1xyXG4gICAgICAgIHRoaXMuY3ViZSA9IHRoaXMuZ2FtZU9iamVjdE1hbmFnZXIuQWRkR2FtZU9iamVjdChcImN1YmVcIik7XHJcbiAgICAgICAgdGhpcy5hbm90aGVyQ3ViZSA9IHRoaXMuZ2FtZU9iamVjdE1hbmFnZXIuQWRkR2FtZU9iamVjdChcImN1YmVcIik7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uUGxhbmUgPSB0aGlzLmdhbWVPYmplY3RNYW5hZ2VyLkFkZEdhbWVPYmplY3QoXCJwcm9qZWN0aW9uQ3ViZVwiKTtcclxuICAgICAgICAvL3RoaXMudG9ydXMuU2V0Q29tcG9uZW50KG5ldyBNb2RlbERyYXdDb21wb25lbnQoXCJoc3ZUb3J1c1wiLFwiY2Fsb3J5TWF0ZXJpYWxcIixcInBvaW50TGlnaHRcIiwxKSkgYXMgTW9kZWxEcmF3Q29tcG9uZW50O1xyXG4gICAgICAgIC8vdGhpcy5jdWJlLlNldENvbXBvbmVudChuZXcgTW9kZWxEcmF3Q29tcG9uZW50KGZhbHNlLCBcImN1YmVcIixcImNhbG9yeU1hdGVyaWFsXCIsXCJ0ZXhTaGFkZXJcIiwxLGZhbHNlKSkgYXMgTW9kZWxEcmF3Q29tcG9uZW50O1xyXG4gICAgICAgIHZhciB0ciA9IG5ldyBUcmFuc2Zvcm1fMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdHIuUG9zaXRpb24gPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMSwgMSwgMSk7XHJcbiAgICAgICAgdmFyIHRyMiA9IG5ldyBUcmFuc2Zvcm1fMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdHIyLlBvc2l0aW9uID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KC0xLCAtMSwgMik7XHJcbiAgICAgICAgdGhpcy5jdWJlLlNldENvbXBvbmVudChuZXcgVGV4dERyYXdDb21wb25lbnRfMS5kZWZhdWx0KFwibG9hZGluZ1wiLCBcImZvbnRcIiwgXCJmb250U2hhZGVyXCIsIG5ldyBWZWN0b3I0XzEuZGVmYXVsdCgwLjc1LCAwLjc1LCAwLjI1LCAxKSwgMSwgdHJ1ZSkpO1xyXG4gICAgICAgIC8vdGhpcy5hbm90aGVyQ3ViZS5TZXRDb21wb25lbnQobmV3IE1vZGVsRHJhd0NvbXBvbmVudChmYWxzZSwgXCJjdWJlXCIsXCJjYWxvcnlNYXRlcmlhbFwiLFwidGV4U2hhZGVyXCIsMSx0cnVlKSkgYXMgTW9kZWxEcmF3Q29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlvblBsYW5lLlNldENvbXBvbmVudChuZXcgTW9kZWxEcmF3Q29tcG9uZW50XzEuZGVmYXVsdChmYWxzZSwgXCJwbGFuZVwiLCBcImxvYWRpbmdDYW1lcmFNYXRlcmlhbFwiLCBcInRleFNoYWRlclwiLCAwLCBmYWxzZSkpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlvblBsYW5lLnRyYW5zZm9ybS5TY2FsZSA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCg1MDAsIDUwMCwgMSk7XHJcbiAgICAgICAgdGhpcy5jdWJlLnRyYW5zZm9ybS5Qb3NpdGlvbiA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLjUsIDAsIDAuNSk7XHJcbiAgICAgICAgdGhpcy5hbm90aGVyQ3ViZS50cmFuc2Zvcm0uUG9zaXRpb24gPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoLTEsIC01LCAxMCk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uUGxhbmUudHJhbnNmb3JtLlBvc2l0aW9uID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIC0xKTtcclxuICAgIH07XHJcbiAgICBMb2FkU2NlbmUucHJvdG90eXBlLk9uTG9hZGluZ1VwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBMb2FkU2NlbmUucHJvdG90eXBlLk9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjYWxvcnlUZXh0dXJlLCBtYXRlcmlhbDtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRTaGFkZXIoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVTaGFkZXIoJ3NoYWRlci9Qb2ludExpZ2h0VlMuZ2xzbCcsIFwic2hhZGVyL1BvaW50TGlnaHRGUy5nbHNsXCIsIHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSksIFwicG9pbnRMaWdodFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkU2hhZGVyKFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlU2hhZGVyKCdzaGFkZXIvVVZOb3JtYWxWUy5nbHNsJywgXCJzaGFkZXIvRGVmYXVsdEZTX2xpZ2h0Lmdsc2xcIiwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJ0ZXhTaGFkZXJfbGlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZFNoYWRlcihSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZVNoYWRlcignc2hhZGVyL1VWTm9ybWFsVlMuZ2xzbCcsIFwic2hhZGVyL1pvb21CbHVyLmdsc2xcIiwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJ6b29tRWZmZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRTaGFkZXIoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVTaGFkZXIoJ3NoYWRlci9VVk5vcm1hbFZTLmdsc2wnLCBcInNoYWRlci9Eb3RFZmZlY3QuZ2xzbFwiLCB0aGlzLnNjZW5lTWFuYWdlci5HZXRHcmFwaGljRGV2aWNlKCkpLCBcImRvdEVmZmVjdFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkU2hhZGVyKFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlU2hhZGVyKCdzaGFkZXIvVVZOb3JtYWxDb2xvclZTLmdsc2wnLCBcInNoYWRlci9CbGFja1Rlc3RGUy5nbHNsXCIsIHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSksIFwiYmxhY2tcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZEdlb21ldHJ5KFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlR2VvbWV0cnkoR2VvbWV0cnlHZW5lcmF0b3JfMS5kZWZhdWx0LkNyZWF0ZVRvcnVzKDMyLCAzMiwgMC41LCAxKSwgZmFsc2UsIHRydWUsIHRydWUsIHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSksIFwiaHN2VG9ydXNcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZEdlb21ldHJ5KFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlR2VvbWV0cnkoR2VvbWV0cnlHZW5lcmF0b3JfMS5kZWZhdWx0LkNyZWF0ZUN1YmUoMSwgbmV3IFZlY3RvcjRfMS5kZWZhdWx0KDEuMCwgMS4wLCAxLjAsIDEpKSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJjdWJlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRHZW9tZXRyeShSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZUdlb21ldHJ5KEdlb21ldHJ5R2VuZXJhdG9yXzEuZGVmYXVsdC5DcmVhdGVTcGhlcmUoMTIsIDEyLCAwLjUsIG5ldyBWZWN0b3I0XzEuZGVmYXVsdCgwLjAsIDAuMCwgMC4wLCAxKSksIGZhbHNlLCB0cnVlLCB0cnVlLCB0aGlzLnNjZW5lTWFuYWdlci5HZXRHcmFwaGljRGV2aWNlKCkpLCBcInNwaGVyZVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkR2VvbWV0cnkoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVHZW9tZXRyeShHZW9tZXRyeUdlbmVyYXRvcl8xLmRlZmF1bHQuQ3JlYXRlUGxhbmUobmV3IFZlY3RvcjJfMS5kZWZhdWx0KDEsIDEpLCBmYWxzZSwgbmV3IFZlY3RvcjRfMS5kZWZhdWx0KDEuMCwgMS4wLCAxLjAsIDEpKSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCB0aGlzLnNjZW5lTWFuYWdlci5HZXRHcmFwaGljRGV2aWNlKCkpLCBcInBsYW5lXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRHZW9tZXRyeShSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZUdlb21ldHJ5KEdlb21ldHJ5R2VuZXJhdG9yXzEuZGVmYXVsdC5DcmVhdGVQbGFuZShuZXcgVmVjdG9yMl8xLmRlZmF1bHQoMSwgMSksIGZhbHNlLCBuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMS4wLCAxLjAsIDEuMCwgMSkpLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJmbG9vclwiKTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5zY2VuZU1hbmdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZE1lc2goUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZU1lc2hSZXNvdXJjZUZyb21GaWxlKFwibW9kZWwvTWFndXJvL21hZ3Vyby5iM21cIix0aGlzLnNjZW5lTWFuZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCksdGhpcy5zY2VuZU1hbmdlci5HZXRHcmFwaGljRGV2aWNlKCkpLFwibWFndXJvXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRTb3VuZEZyb21GaWxlKFwiYXVkaW8va2lsbDIud2F2XCIsIFwia2lsbFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkU291bmRGcm9tRmlsZShcImF1ZGlvL3VwX3NlLndhdlwiLCBcInVwXCIpO1xyXG4gICAgICAgICAgICAgICAgY2Fsb3J5VGV4dHVyZSA9IFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlVGV4dHVyZSgnaW1hZ2UvY2Fsb3J5LnBuZycsIHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZFRleHR1cmUoY2Fsb3J5VGV4dHVyZSwgXCJjYWxvcnlcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZFRleHR1cmVGcm9tRmlsZShcImltYWdlL2NpcmNsZTMyLnBuZ1wiLCB0aGlzLnNjZW5lTWFuYWdlci5HZXRHcmFwaGljRGV2aWNlKCkpO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwgPSB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZE1hdGVyaWFsKFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlTWF0ZXJpYWwobmV3IFZlY3RvcjRfMS5kZWZhdWx0KDAuMSwgMC4xLCAwLjEsIDEuMCksIHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSwgW3RoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuR2V0VGV4dHVyZShcImNhbG9yeVwiKV0pLCBcImNhbG9yeU1hdGVyaWFsXCIpO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuQWRkRXhQYXJhbSg0LCAzLCBuZXcgVmVjdG9yM18xLmRlZmF1bHQoNSwgNSwgMTApKTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsID0gdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRNYXRlcmlhbChSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZU1hdGVyaWFsKG5ldyBWZWN0b3I0XzEuZGVmYXVsdCgwLjEsIDAuMSwgMC4xLCAxLjApLCB0aGlzLnNjZW5lTWFuYWdlci5HZXRHcmFwaGljRGV2aWNlKCksIFt0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkdldFRleHR1cmUoXCJpbWFnZS9jaXJjbGUzMi5wbmdcIildKSwgXCJjaXJjbGVNYXRlcmlhbFwiKTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLkFkZEV4UGFyYW0oNCwgMywgbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDUsIDUsIDEwKSk7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbCA9IHRoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkTWF0ZXJpYWwoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVNYXRlcmlhbChuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMS4wLCAwLjUsIDAuNSwgMS4wKSwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJyZWRcIik7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbCA9IHRoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkTWF0ZXJpYWwoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVNYXRlcmlhbChuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMC41LCAwLjUsIDAuNSwgMS4wKSwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJncmF5XCIpO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwgPSB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZE1hdGVyaWFsKFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlTWF0ZXJpYWwobmV3IFZlY3RvcjRfMS5kZWZhdWx0KDAuOCwgMC44LCAwLjgsIDEuMCksIHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSksIFwid2hpdGVcIik7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbCA9IHRoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkTWF0ZXJpYWwoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVNYXRlcmlhbChuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMC45LCAwLjgsIDAuMywgMS4wKSwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJ5ZWxsb3dcIik7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbCA9IHRoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkTWF0ZXJpYWwoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVNYXRlcmlhbChuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMC41LCAwLjUsIDEuMCwgMS4wKSwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJibHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwgPSB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZE1hdGVyaWFsKFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlTWF0ZXJpYWwobmV3IFZlY3RvcjRfMS5kZWZhdWx0KDAuNSwgMS4wLCAwLjUsIDEuMCksIHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSksIFwiZ3JlZW5cIik7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbCA9IHRoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkTWF0ZXJpYWwoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVNYXRlcmlhbChuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMC4xLCAwLjEsIDAuMSwgMS4wKSwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJ6b29tRWZmZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmFnZXIuQWRkU2NlbmUobmV3IFNhbXBsZVNjZW5lXzEuZGVmYXVsdCh0aGlzLnNjZW5lTWFuYWdlciksIFwic2FtcGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMb2FkU2NlbmUucHJvdG90eXBlLk9uSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0N1cnJlbnQpXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyLkNoYW5nZVNjZW5lKFwic2FtcGxlXCIpO1xyXG4gICAgfTtcclxuICAgIExvYWRTY2VuZS5wcm90b3R5cGUuT25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjZW5lTWFuYWdlci5DaGFuZ2VTY2VuZShcInNhbXBsZVwiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTG9hZFNjZW5lO1xyXG59KFNjZW5lXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkU2NlbmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBCb3hfQUFCQiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJveF9BQUJCKGFyZ19sZW5ndGhlcywgYXJnX3Bvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5oYWxmTGVuZ3RoZXMgPSBhcmdfbGVuZ3RoZXMuTXVsdGlwbHlfYigwLjUpO1xyXG4gICAgICAgIGlmIChhcmdfcG9zaXRpb24pXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBhcmdfcG9zaXRpb247XHJcbiAgICB9XHJcbiAgICBCb3hfQUFCQi5wcm90b3R5cGUuTGVuZ3RoID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFsZkxlbmd0aGVzLmRhdGFbaW5kZXhdO1xyXG4gICAgfTtcclxuICAgIEJveF9BQUJCLnByb3RvdHlwZS5HZXRNaW4gPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHRoaXMucG9zaXRpb24uZGF0YVtpbmRleF0gLSB0aGlzLmhhbGZMZW5ndGhlcy5kYXRhW2luZGV4XTsgfTtcclxuICAgIEJveF9BQUJCLnByb3RvdHlwZS5HZXRNYXggPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHRoaXMucG9zaXRpb24uZGF0YVtpbmRleF0gKyB0aGlzLmhhbGZMZW5ndGhlcy5kYXRhW2luZGV4XTsgfTtcclxuICAgIHJldHVybiBCb3hfQUFCQjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQm94X0FBQkI7XHJcbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEJveF9PQkIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCb3hfT0JCKGFyZ19sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmhhbGZMZW5ndGhlcyA9IGFyZ19sZW5ndGguTXVsdGlwbHkoMC41KTtcclxuICAgICAgICB0aGlzLmRpcmVjdHMgPSBuZXcgQXJyYXkoMyk7XHJcbiAgICB9XHJcbiAgICBCb3hfT0JCLnByb3RvdHlwZS5HZXREaXJlY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3RzW2luZGV4XTtcclxuICAgIH07XHJcbiAgICBCb3hfT0JCLnByb3RvdHlwZS5MZW5ndGggPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYWxmTGVuZ3RoZXMuZGF0YVtpbmRleF07XHJcbiAgICB9O1xyXG4gICAgQm94X09CQi5wcm90b3R5cGUuR2V0UG9zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCb3hfT0JCO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBCb3hfT0JCO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVmVjdG9yM18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9WZWN0b3IzXCIpKTtcclxuZnVuY3Rpb24gYWJzKGFyZykge1xyXG4gICAgaWYgKGFyZyA8IDApIHtcclxuICAgICAgICByZXR1cm4gYXJnICogLTE7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYXJnO1xyXG4gICAgfVxyXG59XHJcbnZhciBHZW9tZXRyeUhlbHBlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdlb21ldHJ5SGVscGVyKCkge1xyXG4gICAgfVxyXG4gICAgR2VvbWV0cnlIZWxwZXIuR2V0RGlzdGFuY2UgPSBmdW5jdGlvbiAoYXJnX3BvaW50LCBhcmdfc3VyZmFjZVBvaW50LCBhcmdfc3VyZmFjZU5vcm1hbCkge1xyXG4gICAgICAgIHJldHVybiBhYnMoYXJnX3N1cmZhY2VOb3JtYWwuRG90KGFyZ19wb2ludC5TdWIoYXJnX3N1cmZhY2VQb2ludCkpKSAvIGFyZ19zdXJmYWNlTm9ybWFsLkxlbmd0aCgpO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLkdldERpc3RhbmNlTGluZUxpbmUgPSBmdW5jdGlvbiAoYXJnX2xpbmUsIGFyZ19vdGhlckxpbmUpIHtcclxuICAgICAgICB2YXIgbm9ybWFsID0gYXJnX2xpbmUudmVsb2NpdHkuQ3Jvc3MoYXJnX290aGVyTGluZS52ZWxvY2l0eSkuTm9ybWFsaXplKCk7XHJcbiAgICAgICAgcmV0dXJuIG5vcm1hbC5Eb3QoYXJnX290aGVyTGluZS5wb2ludC5TdWIoYXJnX2xpbmUucG9pbnQpKTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5Jc0hpdFBvaW50TGluZSA9IGZ1bmN0aW9uIChhcmdfcG9pbnQsIGFyZ19saW5lKSB7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IChhcmdfcG9pbnQuU3ViKGFyZ19saW5lLnBvaW50KS5Dcm9zcyhhcmdfbGluZS52ZWxvY2l0eSkpLkxlbmd0aCgpO1xyXG4gICAgICAgIGlmIChsZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLklzSGl0UG9pbnRTZWdtZW50ID0gZnVuY3Rpb24gKGFyZ19wb2ludCwgYXJnX3NlZ21lbnQpIHtcclxuICAgICAgICB2YXIgdiA9IGFyZ19wb2ludC5TdWIoYXJnX3NlZ21lbnQucG9pbnQpO1xyXG4gICAgICAgIGlmICh2LkNyb3NzKGFyZ19zZWdtZW50LnZlbG9jaXR5KS5MZW5ndGgoKSAmJiB2Lkxlbmd0aFNxcigpIDw9IGFyZ19zZWdtZW50LnZlbG9jaXR5Lkxlbmd0aFNxcigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5HZXREaXN0YW5jZVBvaW50U2VnbWVudCA9IGZ1bmN0aW9uIChhcmdfcG9pbnQsIGFyZ19zZWdtZW50KSB7XHJcbiAgICAgICAgdmFyIHYgPSBhcmdfc2VnbWVudC5HZXRFbmRQb2ludCgpLlN1Yihhcmdfc2VnbWVudC5wb2ludCk7XHJcbiAgICAgICAgdmFyIHZwID0gYXJnX3BvaW50LlN1Yihhcmdfc2VnbWVudC5wb2ludCk7XHJcbiAgICAgICAgdmFyIHQgPSB2Lk5vcm1hbGl6ZSgpLkRvdCh2cCkgLyB2Lkxlbmd0aCgpO1xyXG4gICAgICAgIGlmICh0ID4gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJnX3NlZ21lbnQuR2V0RW5kUG9pbnQoKS5TdWIoYXJnX3BvaW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodCA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFyZ19zZWdtZW50LnBvaW50LlN1YihhcmdfcG9pbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdi5NdWx0aXBseV9iKHQpLlN1Yl9iKHZwKTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5HZXRQb2x5Z29uWSA9IGZ1bmN0aW9uIChhcmdfcG9pbnRBLCBhcmdfcG9pbnRCLCBhcmdfcG9pbnRDLCBvYmpYLCBvYmpaKSB7XHJcbiAgICAgICAgdmFyIG5vcm1hbCA9IGFyZ19wb2ludEEuU3ViKGFyZ19wb2ludEIpLkNyb3NzKGFyZ19wb2ludEEuU3ViKGFyZ19wb2ludEMpKTtcclxuICAgICAgICBpZiAobm9ybWFsLnkgPCAwKSB7XHJcbiAgICAgICAgICAgIG5vcm1hbC5NdWx0aXBseSgtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcmdfcG9pbnRBLnkgLSAobm9ybWFsLnggKiAob2JqWCAtIGFyZ19wb2ludEEueCkgKyBub3JtYWwueiAqIChvYmpaIC0gYXJnX3BvaW50QS56KSkgLyBub3JtYWwueTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5Jc0hpdExpbmVMaW5lID0gZnVuY3Rpb24gKGFyZ19saW5ldjEsIGFyZ19saW5ldjIpIHtcclxuICAgICAgICB2YXIgdjMgPSBhcmdfbGluZXYyLnBvaW50LlN1YihhcmdfbGluZXYxLnBvaW50KTtcclxuICAgICAgICB2YXIgbm9ybWFsMSA9IGFyZ19saW5ldjEudmVsb2NpdHkuQ3Jvc3MoYXJnX2xpbmV2Mi52ZWxvY2l0eSk7XHJcbiAgICAgICAgdmFyIG5vcm1hbDIgPSBhcmdfbGluZXYxLnZlbG9jaXR5LkNyb3NzKHYzKTtcclxuICAgICAgICBpZiAoIW5vcm1hbDIuTGVuZ3RoU3FyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub3JtYWwxLkxlbmd0aFNxcigpICE9IDAgJiYgbm9ybWFsMS5Dcm9zcyhub3JtYWwyKS5MZW5ndGhTcXIoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuSXNIaXRMaW5lU3VyZmFjZSA9IGZ1bmN0aW9uIChhcmdfbGluZSwgYXJnX3N1cmZhY2VQb2ludCwgYXJnX3N1cmZhY2VOb3JtYWwpIHtcclxuICAgICAgICB2YXIgdjEgPSBhcmdfbGluZS5wb2ludC5TdWIoYXJnX3N1cmZhY2VQb2ludCk7XHJcbiAgICAgICAgaWYgKHYxLkRvdChhcmdfc3VyZmFjZU5vcm1hbCkgPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZ19saW5lLnZlbG9jaXR5LkRvdChhcmdfc3VyZmFjZU5vcm1hbCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5Jc0hpdFNlZ21lbnRTdXJmYWNlID0gZnVuY3Rpb24gKGFyZ19zZWdtZW50LCBhcmdfc3VyZmFjZVBvaW50LCBhcmdfc3VyZmFjZU5vcm1hbCkge1xyXG4gICAgICAgIHZhciB2MSA9IGFyZ19zZWdtZW50LnBvaW50LlN1Yihhcmdfc3VyZmFjZVBvaW50KTtcclxuICAgICAgICB2YXIgdjIgPSBhcmdfc2VnbWVudC5HZXRFbmRQb2ludCgpLlN1Yihhcmdfc3VyZmFjZVBvaW50KTtcclxuICAgICAgICBpZiAoYXJnX3N1cmZhY2VOb3JtYWwuRG90KHYxKSAqIGFyZ19zdXJmYWNlTm9ybWFsLkRvdCh2MikgPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLkdldERpdGFuY2VQb2ludEJveF9BQUJCU3FydCA9IGZ1bmN0aW9uIChhcmdfcG9pbnQsIGFyZ19ib3gpIHtcclxuICAgICAgICB2YXIgU3FMZW4gPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhcmdfcG9pbnQuZGF0YVtpXSA8IGFyZ19ib3guR2V0TWluKGkpKVxyXG4gICAgICAgICAgICAgICAgU3FMZW4gKz0gKGFyZ19wb2ludC5kYXRhW2ldIC0gYXJnX2JveC5HZXRNaW4oaSkpICogKGFyZ19wb2ludC5kYXRhW2ldIC0gYXJnX2JveC5HZXRNaW4oaSkpO1xyXG4gICAgICAgICAgICBpZiAoYXJnX3BvaW50LmRhdGFbaV0gPiBhcmdfYm94LkdldE1heChpKSlcclxuICAgICAgICAgICAgICAgIFNxTGVuICs9IChhcmdfcG9pbnQuZGF0YVtpXSAtIGFyZ19ib3guR2V0TWF4KGkpKSAqIChhcmdfcG9pbnQuZGF0YVtpXSAtIGFyZ19ib3guR2V0TWF4KGkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNxTGVuO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLkdldERpdGFuY2VQb2ludEJveF9BQUJCID0gZnVuY3Rpb24gKGFyZ19wb2ludCwgYXJnX2JveCkge1xyXG4gICAgICAgIHJldHVybiAoR2VvbWV0cnlIZWxwZXIuR2V0RGl0YW5jZVBvaW50Qm94X0FBQkJTcXJ0KGFyZ19wb2ludCwgYXJnX2JveCkpO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLkdldERpdGFuY2VQb2ludEJveF9PQkJfU3RhdGljID0gZnVuY3Rpb24gKGFyZ19wb2ludCwgYXJnX2JveCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgMCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIEwgPSBhcmdfYm94Lkxlbmd0aChpKTtcclxuICAgICAgICAgICAgaWYgKEwgPD0gMClcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB2YXIgcyA9IChhcmdfcG9pbnQuU3ViKGFyZ19ib3guR2V0UG9zKCkpKS5Eb3QoYXJnX2JveC5HZXREaXJlY3QoaSkpIC8gTDtcclxuICAgICAgICAgICAgLy8gc+OBruWApOOBi+OCieOAgeOBr+OBv+WHuuOBl+OBn+mDqOWIhuOBjOOBguOCjOOBsOOBneOBruODmeOCr+ODiOODq+OCkuWKoOeul1xyXG4gICAgICAgICAgICBzID0gYWJzKHMpO1xyXG4gICAgICAgICAgICBpZiAocyA+IDEpXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuQWRkX2IoYXJnX2JveC5HZXREaXJlY3QoaSkuTXVsdGlwbHkoKDEgLSBzKSkuTXVsdGlwbHkoTCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb3V0cHV0TGVuID0gb3V0cHV0Lkxlbmd0aCgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cob3V0cHV0TGVuKTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0TGVuO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLklzSGl0UG9pbnRCb3hfT0JCID0gZnVuY3Rpb24gKGFyZ19wb2ludCwgYXJnX2JveCkge1xyXG4gICAgICAgIHJldHVybiAhR2VvbWV0cnlIZWxwZXIuR2V0RGl0YW5jZVBvaW50Qm94X09CQl9TdGF0aWMoYXJnX3BvaW50LCBhcmdfYm94KTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5Jc0hpdFNwaGVyZUJveF9PQkIgPSBmdW5jdGlvbiAoYXJnX3NwaGVyZSwgYXJnX2JveCkge1xyXG4gICAgICAgIHJldHVybiAoYXJnX3NwaGVyZS5yYWRpdXMpID49IEdlb21ldHJ5SGVscGVyLkdldERpdGFuY2VQb2ludEJveF9PQkJfU3RhdGljKGFyZ19zcGhlcmUucG9zaXRpb24sIGFyZ19ib3gpO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLklzSGl0UG9pbnRCb3hfQUFCQiA9IGZ1bmN0aW9uIChhcmdfcG9pbnQsIGFyZ19ib3gpIHtcclxuICAgICAgICByZXR1cm4gIUdlb21ldHJ5SGVscGVyLkdldERpdGFuY2VQb2ludEJveF9BQUJCKGFyZ19wb2ludCwgYXJnX2JveCk7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuSXNIaXRTcGhlcmVCb3hfQUFCQiA9IGZ1bmN0aW9uIChhcmdfc3BoZXJlLCBhcmdfYm94KSB7XHJcbiAgICAgICAgcmV0dXJuIChhcmdfc3BoZXJlLnJhZGl1cykgPj0gR2VvbWV0cnlIZWxwZXIuR2V0RGl0YW5jZVBvaW50Qm94X0FBQkIoYXJnX3NwaGVyZS5wb3NpdGlvbiwgYXJnX2JveCk7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyA9IGZ1bmN0aW9uIChhcmdfc2VwLCBhcmdfZTEsIGFyZ19lMiwgYXJnX2UzKSB7XHJcbiAgICAgICAgaWYgKGFyZ19lMyA9PT0gdm9pZCAwKSB7IGFyZ19lMyA9IG51bGw7IH1cclxuICAgICAgICB2YXIgcjEgPSBhYnMoYXJnX3NlcC5Eb3QoYXJnX2UxKSk7XHJcbiAgICAgICAgdmFyIHIyID0gYWJzKGFyZ19zZXAuRG90KGFyZ19lMikpO1xyXG4gICAgICAgIHZhciByMyA9IGFyZ19lMyA/IChhYnMoYXJnX3NlcC5Eb3QoYXJnX2UzKSkpIDogMDtcclxuICAgICAgICByZXR1cm4gcjEgKyByMiArIHIzO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLklzSGl0Qm94X0FBQkIgPSBmdW5jdGlvbiAoYXJnX2JveCwgYXJnX290aGVyQm94KSB7XHJcbiAgICAgICAgdmFyIHhBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDEsIDAsIDApLCBBZTEgPSB4QXhpcy5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgwKSk7XHJcbiAgICAgICAgdmFyIHlBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDEsIDApLCBBZTIgPSB5QXhpcy5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgxKSk7XHJcbiAgICAgICAgdmFyIHpBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDEpLCBBZTMgPSB6QXhpcy5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgyKSk7XHJcbiAgICAgICAgdmFyIEJlMSA9IHhBeGlzLk11bHRpcGx5KGFyZ19vdGhlckJveC5MZW5ndGgoMCkpO1xyXG4gICAgICAgIHZhciBCZTIgPSB5QXhpcy5NdWx0aXBseShhcmdfb3RoZXJCb3guTGVuZ3RoKDEpKTtcclxuICAgICAgICB2YXIgQmUzID0gekF4aXMuTXVsdGlwbHkoYXJnX290aGVyQm94Lkxlbmd0aCgyKSk7XHJcbiAgICAgICAgdmFyIEludGVydmFsID0gYXJnX2JveC5wb3NpdGlvbi5TdWIoYXJnX290aGVyQm94LnBvc2l0aW9uKTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBBZTFcclxuICAgICAgICB2YXIgckEgPSBBZTEuTGVuZ3RoKCk7XHJcbiAgICAgICAgdmFyIHJCID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh4QXhpcywgQmUxLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgdmFyIEwgPSBhYnMoSW50ZXJ2YWwuRG90KHhBeGlzKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIOihneeqgeOBl+OBpuOBhOOBquOBhFxyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEFlMlxyXG4gICAgICAgIHJBID0gQWUyLkxlbmd0aCgpO1xyXG4gICAgICAgIHJCID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh5QXhpcywgQmUxLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoeUF4aXMpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBBZTNcclxuICAgICAgICByQSA9IEFlMy5MZW5ndGgoKTtcclxuICAgICAgICByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoekF4aXMsIEJlMSwgQmUyLCBCZTMpO1xyXG4gICAgICAgIEwgPSBhYnMoSW50ZXJ2YWwuRG90KHpBeGlzKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8g5YiG6Zui6Lu4IDogQmUxXHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKHhBeGlzLCBBZTEsIEFlMiwgQWUzKTtcclxuICAgICAgICByQiA9IEJlMS5MZW5ndGgoKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdCh4QXhpcykpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEJlMlxyXG4gICAgICAgIHJBID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh5QXhpcywgQWUxLCBBZTIsIEFlMyk7XHJcbiAgICAgICAgckIgPSBCZTIuTGVuZ3RoKCk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoeUF4aXMpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBCZTNcclxuICAgICAgICByQSA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoekF4aXMsIEFlMSwgQWUyLCBBZTMpO1xyXG4gICAgICAgIHJCID0gQmUzLkxlbmd0aCgpO1xyXG4gICAgICAgIEwgPSBhYnMoSW50ZXJ2YWwuRG90KHpBeGlzKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuSXNIaXRCb3hfT0JCQm94X0FBQkIgPSBmdW5jdGlvbiAoYXJnX2JveCwgYXJnX290aGVyQm94KSB7XHJcbiAgICAgICAgdmFyIHhBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDEsIDAsIDApLCBBZTEgPSB4QXhpcy5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgwKSk7XHJcbiAgICAgICAgdmFyIHlBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDEsIDApLCBBZTIgPSB5QXhpcy5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgxKSk7XHJcbiAgICAgICAgdmFyIHpBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDEpLCBBZTMgPSB6QXhpcy5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgyKSk7XHJcbiAgICAgICAgdmFyIE5CZTEgPSBhcmdfb3RoZXJCb3guR2V0RGlyZWN0KDApLCBCZTEgPSBOQmUxLk11bHRpcGx5KGFyZ19vdGhlckJveC5MZW5ndGgoMCkpO1xyXG4gICAgICAgIHZhciBOQmUyID0gYXJnX290aGVyQm94LkdldERpcmVjdCgxKSwgQmUyID0gTkJlMi5NdWx0aXBseShhcmdfb3RoZXJCb3guTGVuZ3RoKDEpKTtcclxuICAgICAgICB2YXIgTkJlMyA9IGFyZ19vdGhlckJveC5HZXREaXJlY3QoMiksIEJlMyA9IE5CZTMuTXVsdGlwbHkoYXJnX290aGVyQm94Lkxlbmd0aCgyKSk7XHJcbiAgICAgICAgdmFyIEludGVydmFsID0gYXJnX2JveC5wb3NpdGlvbi5TdWIoYXJnX290aGVyQm94LkdldFBvcygpKTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBBZTFcclxuICAgICAgICB2YXIgckEgPSBBZTEuTGVuZ3RoKCk7XHJcbiAgICAgICAgdmFyIHJCID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh4QXhpcywgQmUxLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgdmFyIEwgPSBhYnMoSW50ZXJ2YWwuRG90KHhBeGlzKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIOihneeqgeOBl+OBpuOBhOOBquOBhFxyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEFlMlxyXG4gICAgICAgIHJBID0gQWUyLkxlbmd0aCgpO1xyXG4gICAgICAgIHJCID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh5QXhpcywgQmUxLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoeUF4aXMpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBBZTNcclxuICAgICAgICByQSA9IEFlMy5MZW5ndGgoKTtcclxuICAgICAgICByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoekF4aXMsIEJlMSwgQmUyLCBCZTMpO1xyXG4gICAgICAgIEwgPSBhYnMoSW50ZXJ2YWwuRG90KHpBeGlzKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8g5YiG6Zui6Lu4IDogQmUxXHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKE5CZTEsIEFlMSwgQWUyLCBBZTMpO1xyXG4gICAgICAgIHJCID0gQmUxLkxlbmd0aCgpO1xyXG4gICAgICAgIEwgPSBhYnMoSW50ZXJ2YWwuRG90KE5CZTEpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBCZTJcclxuICAgICAgICByQSA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoTkJlMiwgQWUxLCBBZTIsIEFlMyk7XHJcbiAgICAgICAgckIgPSBCZTIuTGVuZ3RoKCk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoTkJlMikpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEJlM1xyXG4gICAgICAgIHJBID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyhOQmUzLCBBZTEsIEFlMiwgQWUzKTtcclxuICAgICAgICByQiA9IEJlMy5MZW5ndGgoKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdChOQmUzKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuR2V0Qm94X09CQkNvbnRhaW5BQUJCTGVuZ3RoID0gZnVuY3Rpb24gKGFyZ19ib3gpIHtcclxuICAgICAgICB2YXIgeEF4aXMgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMSwgMCwgMCk7XHJcbiAgICAgICAgdmFyIHlBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDEsIDApO1xyXG4gICAgICAgIHZhciB6QXhpcyA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAxKTtcclxuICAgICAgICB2YXIgQmUxID0gYXJnX2JveC5HZXREaXJlY3QoMCkuTXVsdGlwbHkoYXJnX2JveC5MZW5ndGgoMCkpO1xyXG4gICAgICAgIHZhciBCZTIgPSBhcmdfYm94LkdldERpcmVjdCgxKS5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgxKSk7XHJcbiAgICAgICAgdmFyIEJlMyA9IGFyZ19ib3guR2V0RGlyZWN0KDIpLk11bHRpcGx5KGFyZ19ib3guTGVuZ3RoKDIpKTtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoeEF4aXMsIEJlMSwgQmUyLCBCZTMpLCBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKHlBeGlzLCBCZTEsIEJlMiwgQmUzKSwgR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh6QXhpcywgQmUxLCBCZTIsIEJlMykpO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLklzSGl0Qm94X09CQiA9IGZ1bmN0aW9uIChhcmdfYm94LCBhcmdfb3RoZXJCb3gpIHtcclxuICAgICAgICAvLyDlkITmlrnlkJHjg5njgq/jg4jjg6vjga7norrkv51cclxuICAgICAgICAvLyDvvIhOKioqOuaomea6luWMluaWueWQkeODmeOCr+ODiOODq++8iVxyXG4gICAgICAgIHZhciBOQWUxID0gYXJnX2JveC5HZXREaXJlY3QoMCksIEFlMSA9IE5BZTEuTXVsdGlwbHkoYXJnX2JveC5MZW5ndGgoMCkpO1xyXG4gICAgICAgIHZhciBOQWUyID0gYXJnX2JveC5HZXREaXJlY3QoMSksIEFlMiA9IE5BZTIuTXVsdGlwbHkoYXJnX2JveC5MZW5ndGgoMSkpO1xyXG4gICAgICAgIHZhciBOQWUzID0gYXJnX2JveC5HZXREaXJlY3QoMiksIEFlMyA9IE5BZTMuTXVsdGlwbHkoYXJnX2JveC5MZW5ndGgoMikpO1xyXG4gICAgICAgIHZhciBOQmUxID0gYXJnX290aGVyQm94LkdldERpcmVjdCgwKSwgQmUxID0gTkJlMS5NdWx0aXBseShhcmdfb3RoZXJCb3guTGVuZ3RoKDApKTtcclxuICAgICAgICB2YXIgTkJlMiA9IGFyZ19vdGhlckJveC5HZXREaXJlY3QoMSksIEJlMiA9IE5CZTIuTXVsdGlwbHkoYXJnX290aGVyQm94Lkxlbmd0aCgxKSk7XHJcbiAgICAgICAgdmFyIE5CZTMgPSBhcmdfb3RoZXJCb3guR2V0RGlyZWN0KDIpLCBCZTMgPSBOQmUzLk11bHRpcGx5KGFyZ19vdGhlckJveC5MZW5ndGgoMikpO1xyXG4gICAgICAgIHZhciBJbnRlcnZhbCA9IGFyZ19ib3guR2V0UG9zKCkuU3ViKGFyZ19vdGhlckJveC5HZXRQb3MoKSk7XHJcbiAgICAgICAgLy8g5YiG6Zui6Lu4IDogQWUxXHJcbiAgICAgICAgdmFyIHJBID0gQWUxLkxlbmd0aCgpO1xyXG4gICAgICAgIHZhciByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoTkFlMSwgQmUxLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgdmFyIEwgPSBhYnMoSW50ZXJ2YWwuRG90KE5BZTEpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8g6KGd56qB44GX44Gm44GE44Gq44GEXHJcbiAgICAgICAgLy8g5YiG6Zui6Lu4IDogQWUyXHJcbiAgICAgICAgckEgPSBBZTIuTGVuZ3RoKCk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKE5BZTIsIEJlMSwgQmUyLCBCZTMpO1xyXG4gICAgICAgIEwgPSBhYnMoSW50ZXJ2YWwuRG90KE5BZTIpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBBZTNcclxuICAgICAgICByQSA9IEFlMy5MZW5ndGgoKTtcclxuICAgICAgICByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoTkFlMywgQmUxLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoTkFlMykpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEJlMVxyXG4gICAgICAgIHJBID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyhOQmUxLCBBZTEsIEFlMiwgQWUzKTtcclxuICAgICAgICByQiA9IEJlMS5MZW5ndGgoKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdChOQmUxKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8g5YiG6Zui6Lu4IDogQmUyXHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKE5CZTIsIEFlMSwgQWUyLCBBZTMpO1xyXG4gICAgICAgIHJCID0gQmUyLkxlbmd0aCgpO1xyXG4gICAgICAgIEwgPSBhYnMoSW50ZXJ2YWwuRG90KE5CZTIpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBCZTNcclxuICAgICAgICByQSA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoTkJlMywgQWUxLCBBZTIsIEFlMyk7XHJcbiAgICAgICAgckIgPSBCZTMuTGVuZ3RoKCk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoTkJlMykpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEMxMVxyXG4gICAgICAgIHZhciBDcm9zcyA9IE5BZTEuQ3Jvc3MoTkJlMSk7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTIsIEFlMyk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMTJcclxuICAgICAgICBDcm9zcyA9IE5BZTEuQ3Jvc3MoTkJlMik7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTIsIEFlMyk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTEsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMTNcclxuICAgICAgICBDcm9zcyA9IE5BZTEuQ3Jvc3MoTkJlMyk7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTIsIEFlMyk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTEsIEJlMik7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMjFcclxuICAgICAgICBDcm9zcyA9IE5BZTIuQ3Jvc3MoTkJlMSk7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTEsIEFlMyk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMjJcclxuICAgICAgICBDcm9zcyA9IE5BZTIuQ3Jvc3MoTkJlMik7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTEsIEFlMyk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTEsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMjNcclxuICAgICAgICBDcm9zcyA9IE5BZTIuQ3Jvc3MoTkJlMyk7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTEsIEFlMyk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTEsIEJlMik7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMzFcclxuICAgICAgICBDcm9zcyA9IE5BZTMuQ3Jvc3MoTkJlMSk7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTEsIEFlMik7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMzJcclxuICAgICAgICBDcm9zcyA9IE5BZTMuQ3Jvc3MoTkJlMik7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTEsIEFlMik7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTEsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMzNcclxuICAgICAgICBDcm9zcyA9IE5BZTMuQ3Jvc3MoTkJlMyk7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTEsIEFlMik7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTEsIEJlMik7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5Jc0hpdFNwaGVyZVNwaGVyZSA9IGZ1bmN0aW9uIChhcmdfc3BoZXJlLCBhcmdfb3RoZXJTcGhlcmUpIHtcclxuICAgICAgICB2YXIgZGlzdGFuY2UgPSAoYXJnX3NwaGVyZS5wb3NpdGlvbi5TdWIoYXJnX290aGVyU3BoZXJlLnBvc2l0aW9uKSkuTGVuZ3RoKCk7XHJcbiAgICAgICAgdmFyIGJvcmRlciA9IGFyZ19zcGhlcmUucmFkaXVzICsgYXJnX290aGVyU3BoZXJlLnJhZGl1cztcclxuICAgICAgICByZXR1cm4gZGlzdGFuY2UgPD0gYm9yZGVyO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLklzSGl0UG9pbnRTcGhlcmUgPSBmdW5jdGlvbiAoYXJnX3BvaW50LCBhcmdfb3RoZXJTcGhlcmUpIHtcclxuICAgICAgICB2YXIgZGlzdGFuY2UgPSAoYXJnX3BvaW50LlN1Yihhcmdfb3RoZXJTcGhlcmUucG9zaXRpb24pKS5MZW5ndGgoKTtcclxuICAgICAgICByZXR1cm4gZGlzdGFuY2UgPD0gYXJnX290aGVyU3BoZXJlLnJhZGl1cztcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2VvbWV0cnlIZWxwZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEdlb21ldHJ5SGVscGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgU3BoZXJlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3BoZXJlKGFyZ19yLCBhcmdfcCwgYXJnX3MpIHtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IGFyZ19yO1xyXG4gICAgICAgIHRoaXMuaW5pdFJhZGl1cyA9IGFyZ19yO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBhcmdfcDtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IGFyZ19yICogYXJnX3M7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gU3BoZXJlO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBTcGhlcmU7XHJcbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFF1YXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9RdWF0XCIpKTtcclxudmFyIE1hdHJpeDR4NCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hdHJpeDR4NCgpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTtcclxuICAgIH1cclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuSWRlbnRpdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gMTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbNF0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IDE7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbN10gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMTBdID0gMTtcclxuICAgICAgICB0aGlzLmRhdGFbMTFdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMTJdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMTNdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMTRdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMTVdID0gMTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLkNsb25lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgTWF0cml4NHg0KCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhW2ldID0gdGhpcy5kYXRhW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuTXVsdGlwbHkgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IE1hdHJpeDR4NCgpO1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5kYXRhWzBdLCBiID0gdGhpcy5kYXRhWzFdLCBjID0gdGhpcy5kYXRhWzJdLCBkID0gdGhpcy5kYXRhWzNdLCBlID0gdGhpcy5kYXRhWzRdLCBmID0gdGhpcy5kYXRhWzVdLCBnID0gdGhpcy5kYXRhWzZdLCBoID0gdGhpcy5kYXRhWzddLCBpID0gdGhpcy5kYXRhWzhdLCBqID0gdGhpcy5kYXRhWzldLCBrID0gdGhpcy5kYXRhWzEwXSwgbCA9IHRoaXMuZGF0YVsxMV0sIG0gPSB0aGlzLmRhdGFbMTJdLCBuID0gdGhpcy5kYXRhWzEzXSwgbyA9IHRoaXMuZGF0YVsxNF0sIHAgPSB0aGlzLmRhdGFbMTVdLCBBID0gb3RoZXIuZGF0YVswXSwgQiA9IG90aGVyLmRhdGFbMV0sIEMgPSBvdGhlci5kYXRhWzJdLCBEID0gb3RoZXIuZGF0YVszXSwgRSA9IG90aGVyLmRhdGFbNF0sIEYgPSBvdGhlci5kYXRhWzVdLCBHID0gb3RoZXIuZGF0YVs2XSwgSCA9IG90aGVyLmRhdGFbN10sIEkgPSBvdGhlci5kYXRhWzhdLCBKID0gb3RoZXIuZGF0YVs5XSwgSyA9IG90aGVyLmRhdGFbMTBdLCBMID0gb3RoZXIuZGF0YVsxMV0sIE0gPSBvdGhlci5kYXRhWzEyXSwgTiA9IG90aGVyLmRhdGFbMTNdLCBPID0gb3RoZXIuZGF0YVsxNF0sIFAgPSBvdGhlci5kYXRhWzE1XTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IEEgKiBhICsgQiAqIGUgKyBDICogaSArIEQgKiBtO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gQSAqIGIgKyBCICogZiArIEMgKiBqICsgRCAqIG47XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSBBICogYyArIEIgKiBnICsgQyAqIGsgKyBEICogbztcclxuICAgICAgICBvdXRwdXQuZGF0YVszXSA9IEEgKiBkICsgQiAqIGggKyBDICogbCArIEQgKiBwO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzRdID0gRSAqIGEgKyBGICogZSArIEcgKiBpICsgSCAqIG07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNV0gPSBFICogYiArIEYgKiBmICsgRyAqIGogKyBIICogbjtcclxuICAgICAgICBvdXRwdXQuZGF0YVs2XSA9IEUgKiBjICsgRiAqIGcgKyBHICogayArIEggKiBvO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzddID0gRSAqIGQgKyBGICogaCArIEcgKiBsICsgSCAqIHA7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbOF0gPSBJICogYSArIEogKiBlICsgSyAqIGkgKyBMICogbTtcclxuICAgICAgICBvdXRwdXQuZGF0YVs5XSA9IEkgKiBiICsgSiAqIGYgKyBLICogaiArIEwgKiBuO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEwXSA9IEkgKiBjICsgSiAqIGcgKyBLICogayArIEwgKiBvO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzExXSA9IEkgKiBkICsgSiAqIGggKyBLICogbCArIEwgKiBwO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEyXSA9IE0gKiBhICsgTiAqIGUgKyBPICogaSArIFAgKiBtO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEzXSA9IE0gKiBiICsgTiAqIGYgKyBPICogaiArIFAgKiBuO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzE0XSA9IE0gKiBjICsgTiAqIGcgKyBPICogayArIFAgKiBvO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzE1XSA9IE0gKiBkICsgTiAqIGggKyBPICogbCArIFAgKiBwO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NHg0LnByb3RvdHlwZS5NdWx0aXBseV9iID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLmRhdGFbMF0sIGIgPSB0aGlzLmRhdGFbMV0sIGMgPSB0aGlzLmRhdGFbMl0sIGQgPSB0aGlzLmRhdGFbM10sIGUgPSB0aGlzLmRhdGFbNF0sIGYgPSB0aGlzLmRhdGFbNV0sIGcgPSB0aGlzLmRhdGFbNl0sIGggPSB0aGlzLmRhdGFbN10sIGkgPSB0aGlzLmRhdGFbOF0sIGogPSB0aGlzLmRhdGFbOV0sIGsgPSB0aGlzLmRhdGFbMTBdLCBsID0gdGhpcy5kYXRhWzExXSwgbSA9IHRoaXMuZGF0YVsxMl0sIG4gPSB0aGlzLmRhdGFbMTNdLCBvID0gdGhpcy5kYXRhWzE0XSwgcCA9IHRoaXMuZGF0YVsxNV0sIEEgPSBvdGhlci5kYXRhWzBdLCBCID0gb3RoZXIuZGF0YVsxXSwgQyA9IG90aGVyLmRhdGFbMl0sIEQgPSBvdGhlci5kYXRhWzNdLCBFID0gb3RoZXIuZGF0YVs0XSwgRiA9IG90aGVyLmRhdGFbNV0sIEcgPSBvdGhlci5kYXRhWzZdLCBIID0gb3RoZXIuZGF0YVs3XSwgSSA9IG90aGVyLmRhdGFbOF0sIEogPSBvdGhlci5kYXRhWzldLCBLID0gb3RoZXIuZGF0YVsxMF0sIEwgPSBvdGhlci5kYXRhWzExXSwgTSA9IG90aGVyLmRhdGFbMTJdLCBOID0gb3RoZXIuZGF0YVsxM10sIE8gPSBvdGhlci5kYXRhWzE0XSwgUCA9IG90aGVyLmRhdGFbMTVdO1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IEEgKiBhICsgQiAqIGUgKyBDICogaSArIEQgKiBtO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IEEgKiBiICsgQiAqIGYgKyBDICogaiArIEQgKiBuO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IEEgKiBjICsgQiAqIGcgKyBDICogayArIEQgKiBvO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IEEgKiBkICsgQiAqIGggKyBDICogbCArIEQgKiBwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IEUgKiBhICsgRiAqIGUgKyBHICogaSArIEggKiBtO1xyXG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IEUgKiBiICsgRiAqIGYgKyBHICogaiArIEggKiBuO1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IEUgKiBjICsgRiAqIGcgKyBHICogayArIEggKiBvO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IEUgKiBkICsgRiAqIGggKyBHICogbCArIEggKiBwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IEkgKiBhICsgSiAqIGUgKyBLICogaSArIEwgKiBtO1xyXG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IEkgKiBiICsgSiAqIGYgKyBLICogaiArIEwgKiBuO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMF0gPSBJICogYyArIEogKiBnICsgSyAqIGsgKyBMICogbztcclxuICAgICAgICB0aGlzLmRhdGFbMTFdID0gSSAqIGQgKyBKICogaCArIEsgKiBsICsgTCAqIHA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEyXSA9IE0gKiBhICsgTiAqIGUgKyBPICogaSArIFAgKiBtO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxM10gPSBNICogYiArIE4gKiBmICsgTyAqIGogKyBQICogbjtcclxuICAgICAgICB0aGlzLmRhdGFbMTRdID0gTSAqIGMgKyBOICogZyArIE8gKiBrICsgUCAqIG87XHJcbiAgICAgICAgdGhpcy5kYXRhWzE1XSA9IE0gKiBkICsgTiAqIGggKyBPICogbCArIFAgKiBwO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuU2NhbGUgPSBmdW5jdGlvbiAoYXJnX3NjYWxlKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBNYXRyaXg0eDQoKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAqIGFyZ19zY2FsZS54O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdICogYXJnX3NjYWxlLng7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gKiBhcmdfc2NhbGUueDtcclxuICAgICAgICBvdXRwdXQuZGF0YVszXSA9IHRoaXMuZGF0YVszXSAqIGFyZ19zY2FsZS54O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzRdID0gdGhpcy5kYXRhWzRdICogYXJnX3NjYWxlLnk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNV0gPSB0aGlzLmRhdGFbNV0gKiBhcmdfc2NhbGUueTtcclxuICAgICAgICBvdXRwdXQuZGF0YVs2XSA9IHRoaXMuZGF0YVs2XSAqIGFyZ19zY2FsZS55O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzddID0gdGhpcy5kYXRhWzddICogYXJnX3NjYWxlLnk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbOF0gPSB0aGlzLmRhdGFbOF0gKiBhcmdfc2NhbGUuejtcclxuICAgICAgICBvdXRwdXQuZGF0YVs5XSA9IHRoaXMuZGF0YVs5XSAqIGFyZ19zY2FsZS56O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEwXSA9IHRoaXMuZGF0YVsxMF0gKiBhcmdfc2NhbGUuejtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMV0gPSB0aGlzLmRhdGFbMTFdICogYXJnX3NjYWxlLno7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTJdID0gdGhpcy5kYXRhWzEyXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxM10gPSB0aGlzLmRhdGFbMTNdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzE0XSA9IHRoaXMuZGF0YVsxNF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTVdID0gdGhpcy5kYXRhWzE1XTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuU2NhbGVfYiA9IGZ1bmN0aW9uIChhcmdfc2NhbGUpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKiBhcmdfc2NhbGUueDtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKiBhcmdfc2NhbGUueDtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gKiBhcmdfc2NhbGUueDtcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSB0aGlzLmRhdGFbM10gKiBhcmdfc2NhbGUueDtcclxuICAgICAgICB0aGlzLmRhdGFbNF0gPSB0aGlzLmRhdGFbNF0gKiBhcmdfc2NhbGUueTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSB0aGlzLmRhdGFbNV0gKiBhcmdfc2NhbGUueTtcclxuICAgICAgICB0aGlzLmRhdGFbNl0gPSB0aGlzLmRhdGFbNl0gKiBhcmdfc2NhbGUueTtcclxuICAgICAgICB0aGlzLmRhdGFbN10gPSB0aGlzLmRhdGFbN10gKiBhcmdfc2NhbGUueTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSB0aGlzLmRhdGFbOF0gKiBhcmdfc2NhbGUuejtcclxuICAgICAgICB0aGlzLmRhdGFbOV0gPSB0aGlzLmRhdGFbOV0gKiBhcmdfc2NhbGUuejtcclxuICAgICAgICB0aGlzLmRhdGFbMTBdID0gdGhpcy5kYXRhWzEwXSAqIGFyZ19zY2FsZS56O1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMV0gPSB0aGlzLmRhdGFbMTFdICogYXJnX3NjYWxlLno7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEyXSA9IHRoaXMuZGF0YVsxMl07XHJcbiAgICAgICAgdGhpcy5kYXRhWzEzXSA9IHRoaXMuZGF0YVsxM107XHJcbiAgICAgICAgdGhpcy5kYXRhWzE0XSA9IHRoaXMuZGF0YVsxNF07XHJcbiAgICAgICAgdGhpcy5kYXRhWzE1XSA9IHRoaXMuZGF0YVsxNV07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NHg0LnByb3RvdHlwZS5UcmFuc2xhdGUgPSBmdW5jdGlvbiAoYXJnX3RyYW5zbGF0ZSkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgTWF0cml4NHg0KCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMl07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSB0aGlzLmRhdGFbM107XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNF0gPSB0aGlzLmRhdGFbNF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNV0gPSB0aGlzLmRhdGFbNV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNl0gPSB0aGlzLmRhdGFbNl07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbN10gPSB0aGlzLmRhdGFbN107XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbOF0gPSB0aGlzLmRhdGFbOF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbOV0gPSB0aGlzLmRhdGFbOV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTBdID0gdGhpcy5kYXRhWzEwXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMV0gPSB0aGlzLmRhdGFbMTFdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEyXSA9IHRoaXMuZGF0YVswXSAqIGFyZ190cmFuc2xhdGUueCArIHRoaXMuZGF0YVs0XSAqIGFyZ190cmFuc2xhdGUueSArIHRoaXMuZGF0YVs4XSAqIGFyZ190cmFuc2xhdGUueiArIHRoaXMuZGF0YVsxMl07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTNdID0gdGhpcy5kYXRhWzFdICogYXJnX3RyYW5zbGF0ZS54ICsgdGhpcy5kYXRhWzVdICogYXJnX3RyYW5zbGF0ZS55ICsgdGhpcy5kYXRhWzldICogYXJnX3RyYW5zbGF0ZS56ICsgdGhpcy5kYXRhWzEzXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxNF0gPSB0aGlzLmRhdGFbMl0gKiBhcmdfdHJhbnNsYXRlLnggKyB0aGlzLmRhdGFbNl0gKiBhcmdfdHJhbnNsYXRlLnkgKyB0aGlzLmRhdGFbMTBdICogYXJnX3RyYW5zbGF0ZS56ICsgdGhpcy5kYXRhWzE0XTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxNV0gPSB0aGlzLmRhdGFbM10gKiBhcmdfdHJhbnNsYXRlLnggKyB0aGlzLmRhdGFbN10gKiBhcmdfdHJhbnNsYXRlLnkgKyB0aGlzLmRhdGFbMTFdICogYXJnX3RyYW5zbGF0ZS56ICsgdGhpcy5kYXRhWzE1XTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuVHJhbnNsYXRlX2IgPSBmdW5jdGlvbiAoYXJnX3RyYW5zbGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMl0gPSB0aGlzLmRhdGFbMF0gKiBhcmdfdHJhbnNsYXRlLnggKyB0aGlzLmRhdGFbNF0gKiBhcmdfdHJhbnNsYXRlLnkgKyB0aGlzLmRhdGFbOF0gKiBhcmdfdHJhbnNsYXRlLnogKyB0aGlzLmRhdGFbMTJdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxM10gPSB0aGlzLmRhdGFbMV0gKiBhcmdfdHJhbnNsYXRlLnggKyB0aGlzLmRhdGFbNV0gKiBhcmdfdHJhbnNsYXRlLnkgKyB0aGlzLmRhdGFbOV0gKiBhcmdfdHJhbnNsYXRlLnogKyB0aGlzLmRhdGFbMTNdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxNF0gPSB0aGlzLmRhdGFbMl0gKiBhcmdfdHJhbnNsYXRlLnggKyB0aGlzLmRhdGFbNl0gKiBhcmdfdHJhbnNsYXRlLnkgKyB0aGlzLmRhdGFbMTBdICogYXJnX3RyYW5zbGF0ZS56ICsgdGhpcy5kYXRhWzE0XTtcclxuICAgICAgICB0aGlzLmRhdGFbMTVdID0gdGhpcy5kYXRhWzNdICogYXJnX3RyYW5zbGF0ZS54ICsgdGhpcy5kYXRhWzddICogYXJnX3RyYW5zbGF0ZS55ICsgdGhpcy5kYXRhWzExXSAqIGFyZ190cmFuc2xhdGUueiArIHRoaXMuZGF0YVsxNV07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NHg0LnByb3RvdHlwZS5Sb3RhdGUgPSBmdW5jdGlvbiAoYXJnX2FuZ2xlLCBhcmdfYXhpcykge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgTWF0cml4NHg0KCk7XHJcbiAgICAgICAgdmFyIHNxID0gYXJnX2F4aXMuTGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKCFzcSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGEgPSBhcmdfYXhpcy54LCBiID0gYXJnX2F4aXMueSwgYyA9IGFyZ19heGlzLno7XHJcbiAgICAgICAgaWYgKHNxICE9IDEpIHtcclxuICAgICAgICAgICAgc3EgPSAxIC8gc3E7XHJcbiAgICAgICAgICAgIGEgKj0gc3E7XHJcbiAgICAgICAgICAgIGIgKj0gc3E7XHJcbiAgICAgICAgICAgIGMgKj0gc3E7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkID0gTWF0aC5zaW4oYXJnX2FuZ2xlKSwgZSA9IE1hdGguY29zKGFyZ19hbmdsZSksIGYgPSAxIC0gZSwgZyA9IHRoaXMuZGF0YVswXSwgaCA9IHRoaXMuZGF0YVsxXSwgaSA9IHRoaXMuZGF0YVsyXSwgaiA9IHRoaXMuZGF0YVszXSwgayA9IHRoaXMuZGF0YVs0XSwgbCA9IHRoaXMuZGF0YVs1XSwgbSA9IHRoaXMuZGF0YVs2XSwgbiA9IHRoaXMuZGF0YVs3XSwgbyA9IHRoaXMuZGF0YVs4XSwgcCA9IHRoaXMuZGF0YVs5XSwgcSA9IHRoaXMuZGF0YVsxMF0sIHIgPSB0aGlzLmRhdGFbMTFdLCBzID0gYSAqIGEgKiBmICsgZSwgdCA9IGIgKiBhICogZiArIGMgKiBkLCB1ID0gYyAqIGEgKiBmIC0gYiAqIGQsIHYgPSBhICogYiAqIGYgLSBjICogZCwgdyA9IGIgKiBiICogZiArIGUsIHggPSBjICogYiAqIGYgKyBhICogZCwgeSA9IGEgKiBjICogZiArIGIgKiBkLCB6ID0gYiAqIGMgKiBmIC0gYSAqIGQsIEEgPSBjICogYyAqIGYgKyBlO1xyXG4gICAgICAgIGlmIChhcmdfYW5nbGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YSAhPSBvdXRwdXQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFbMTJdID0gdGhpcy5kYXRhWzEyXTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5kYXRhWzEzXSA9IHRoaXMuZGF0YVsxM107XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YVsxNF0gPSB0aGlzLmRhdGFbMTRdO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFbMTVdID0gdGhpcy5kYXRhWzE1XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb3V0cHV0LmRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gZyAqIHMgKyBrICogdCArIG8gKiB1O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gaCAqIHMgKyBsICogdCArIHAgKiB1O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gaSAqIHMgKyBtICogdCArIHEgKiB1O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzNdID0gaiAqIHMgKyBuICogdCArIHIgKiB1O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzRdID0gZyAqIHYgKyBrICogdyArIG8gKiB4O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzVdID0gaCAqIHYgKyBsICogdyArIHAgKiB4O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzZdID0gaSAqIHYgKyBtICogdyArIHEgKiB4O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzddID0gaiAqIHYgKyBuICogdyArIHIgKiB4O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzhdID0gZyAqIHkgKyBrICogeiArIG8gKiBBO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzldID0gaCAqIHkgKyBsICogeiArIHAgKiBBO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEwXSA9IGkgKiB5ICsgbSAqIHogKyBxICogQTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMV0gPSBqICogeSArIG4gKiB6ICsgciAqIEE7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLlJvdGF0ZV9iID0gZnVuY3Rpb24gKGFyZ19hbmdsZSwgYXJnX2F4aXMpIHtcclxuICAgICAgICB2YXIgc3EgPSBhcmdfYXhpcy5MZW5ndGgoKTtcclxuICAgICAgICBpZiAoIXNxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYSA9IGFyZ19heGlzLngsIGIgPSBhcmdfYXhpcy55LCBjID0gYXJnX2F4aXMuejtcclxuICAgICAgICBpZiAoc3EgIT0gMSkge1xyXG4gICAgICAgICAgICBzcSA9IDEgLyBzcTtcclxuICAgICAgICAgICAgYSAqPSBzcTtcclxuICAgICAgICAgICAgYiAqPSBzcTtcclxuICAgICAgICAgICAgYyAqPSBzcTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGQgPSBNYXRoLnNpbihhcmdfYW5nbGUpLCBlID0gTWF0aC5jb3MoYXJnX2FuZ2xlKSwgZiA9IDEgLSBlLCBnID0gdGhpcy5kYXRhWzBdLCBoID0gdGhpcy5kYXRhWzFdLCBpID0gdGhpcy5kYXRhWzJdLCBqID0gdGhpcy5kYXRhWzNdLCBrID0gdGhpcy5kYXRhWzRdLCBsID0gdGhpcy5kYXRhWzVdLCBtID0gdGhpcy5kYXRhWzZdLCBuID0gdGhpcy5kYXRhWzddLCBvID0gdGhpcy5kYXRhWzhdLCBwID0gdGhpcy5kYXRhWzldLCBxID0gdGhpcy5kYXRhWzEwXSwgciA9IHRoaXMuZGF0YVsxMV0sIHMgPSBhICogYSAqIGYgKyBlLCB0ID0gYiAqIGEgKiBmICsgYyAqIGQsIHUgPSBjICogYSAqIGYgLSBiICogZCwgdiA9IGEgKiBiICogZiAtIGMgKiBkLCB3ID0gYiAqIGIgKiBmICsgZSwgeCA9IGMgKiBiICogZiArIGEgKiBkLCB5ID0gYSAqIGMgKiBmICsgYiAqIGQsIHogPSBiICogYyAqIGYgLSBhICogZCwgQSA9IGMgKiBjICogZiArIGU7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gZyAqIHMgKyBrICogdCArIG8gKiB1O1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IGggKiBzICsgbCAqIHQgKyBwICogdTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBpICogcyArIG0gKiB0ICsgcSAqIHU7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gaiAqIHMgKyBuICogdCArIHIgKiB1O1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IGcgKiB2ICsgayAqIHcgKyBvICogeDtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBoICogdiArIGwgKiB3ICsgcCAqIHg7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gaSAqIHYgKyBtICogdyArIHEgKiB4O1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IGogKiB2ICsgbiAqIHcgKyByICogeDtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBnICogeSArIGsgKiB6ICsgbyAqIEE7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gaCAqIHkgKyBsICogeiArIHAgKiBBO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMF0gPSBpICogeSArIG0gKiB6ICsgcSAqIEE7XHJcbiAgICAgICAgdGhpcy5kYXRhWzExXSA9IGogKiB5ICsgbiAqIHogKyByICogQTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLkxvb2tBdCA9IGZ1bmN0aW9uIChhcmdfZXllLCBhcmdfY2VudGVyUG9zLCBhcmdfdXBBeGlzKSB7XHJcbiAgICAgICAgdmFyIGV5ZVggPSBhcmdfZXllLngsIGV5ZVkgPSBhcmdfZXllLnksIGV5ZVogPSBhcmdfZXllLnosIHVwWCA9IGFyZ191cEF4aXMueCwgdXBZID0gYXJnX3VwQXhpcy55LCB1cFogPSBhcmdfdXBBeGlzLnosIGNlbnRlclggPSBhcmdfY2VudGVyUG9zLngsIGNlbnRlclkgPSBhcmdfY2VudGVyUG9zLnksIGNlbnRlclogPSBhcmdfY2VudGVyUG9zLno7XHJcbiAgICAgICAgaWYgKGV5ZVggPT0gY2VudGVyWCAmJiBleWVZID09IGNlbnRlclkgJiYgZXllWiA9PSBjZW50ZXJaKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLklkZW50aXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB4MCwgeDEsIHgyLCB5MCwgeTEsIHkyLCB6MCwgejEsIHoyLCBsO1xyXG4gICAgICAgIHowID0gZXllWCAtIGFyZ19jZW50ZXJQb3MueDtcclxuICAgICAgICB6MSA9IGV5ZVkgLSBhcmdfY2VudGVyUG9zLnk7XHJcbiAgICAgICAgejIgPSBleWVaIC0gYXJnX2NlbnRlclBvcy56O1xyXG4gICAgICAgIGwgPSAxIC8gTWF0aC5zcXJ0KHowICogejAgKyB6MSAqIHoxICsgejIgKiB6Mik7XHJcbiAgICAgICAgejAgKj0gbDtcclxuICAgICAgICB6MSAqPSBsO1xyXG4gICAgICAgIHoyICo9IGw7XHJcbiAgICAgICAgeDAgPSB1cFkgKiB6MiAtIHVwWiAqIHoxO1xyXG4gICAgICAgIHgxID0gdXBaICogejAgLSB1cFggKiB6MjtcclxuICAgICAgICB4MiA9IHVwWCAqIHoxIC0gdXBZICogejA7XHJcbiAgICAgICAgbCA9IE1hdGguc3FydCh4MCAqIHgwICsgeDEgKiB4MSArIHgyICogeDIpO1xyXG4gICAgICAgIGlmICghbCkge1xyXG4gICAgICAgICAgICB4MCA9IDA7XHJcbiAgICAgICAgICAgIHgxID0gMDtcclxuICAgICAgICAgICAgeDIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbCA9IDEgLyBsO1xyXG4gICAgICAgICAgICB4MCAqPSBsO1xyXG4gICAgICAgICAgICB4MSAqPSBsO1xyXG4gICAgICAgICAgICB4MiAqPSBsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB5MCA9IHoxICogeDIgLSB6MiAqIHgxO1xyXG4gICAgICAgIHkxID0gejIgKiB4MCAtIHowICogeDI7XHJcbiAgICAgICAgeTIgPSB6MCAqIHgxIC0gejEgKiB4MDtcclxuICAgICAgICBsID0gTWF0aC5zcXJ0KHkwICogeTAgKyB5MSAqIHkxICsgeTIgKiB5Mik7XHJcbiAgICAgICAgaWYgKCFsKSB7XHJcbiAgICAgICAgICAgIHkwID0gMDtcclxuICAgICAgICAgICAgeTEgPSAwO1xyXG4gICAgICAgICAgICB5MiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsID0gMSAvIGw7XHJcbiAgICAgICAgICAgIHkwICo9IGw7XHJcbiAgICAgICAgICAgIHkxICo9IGw7XHJcbiAgICAgICAgICAgIHkyICo9IGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IHgwO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IHkwO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IHowO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzRdID0geDE7XHJcbiAgICAgICAgdGhpcy5kYXRhWzVdID0geTE7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gejE7XHJcbiAgICAgICAgdGhpcy5kYXRhWzddID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSB4MjtcclxuICAgICAgICB0aGlzLmRhdGFbOV0gPSB5MjtcclxuICAgICAgICB0aGlzLmRhdGFbMTBdID0gejI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzExXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEyXSA9IC0oeDAgKiBleWVYICsgeDEgKiBleWVZICsgeDIgKiBleWVaKTtcclxuICAgICAgICB0aGlzLmRhdGFbMTNdID0gLSh5MCAqIGV5ZVggKyB5MSAqIGV5ZVkgKyB5MiAqIGV5ZVopO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxNF0gPSAtKHowICogZXllWCArIHoxICogZXllWSArIHoyICogZXllWik7XHJcbiAgICAgICAgdGhpcy5kYXRhWzE1XSA9IDE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NHg0LnByb3RvdHlwZS5QZXJzcGVjdGl2ZSA9IGZ1bmN0aW9uIChmb3Z5LCBhc3BlY3QsIG5lYXIsIGZhcikge1xyXG4gICAgICAgIHZhciB0ID0gbmVhciAqIE1hdGgudGFuKGZvdnkgKiBNYXRoLlBJIC8gMzYwKTtcclxuICAgICAgICB2YXIgciA9IHQgKiBhc3BlY3Q7XHJcbiAgICAgICAgdmFyIGEgPSByICogMiwgYiA9IHQgKiAyLCBjID0gZmFyIC0gbmVhcjtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSBuZWFyICogMiAvIGE7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzRdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZWFyICogMiAvIGI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbN10gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMTBdID0gLShmYXIgKyBuZWFyKSAvIGM7XHJcbiAgICAgICAgdGhpcy5kYXRhWzExXSA9IC0xO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMl0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxM10gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxNF0gPSAtKGZhciAqIG5lYXIgKiAyKSAvIGM7XHJcbiAgICAgICAgdGhpcy5kYXRhWzE1XSA9IDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NHg0LnByb3RvdHlwZS5PcnRobyA9IGZ1bmN0aW9uIChsZWZ0LCByaWdodCwgdG9wLCBib3R0b20sIG5lYXIsIGZhcikge1xyXG4gICAgICAgIHZhciBoID0gKHJpZ2h0IC0gbGVmdCk7XHJcbiAgICAgICAgdmFyIHYgPSAodG9wIC0gYm90dG9tKTtcclxuICAgICAgICB2YXIgZCA9IChmYXIgLSBuZWFyKTtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSAyIC8gaDtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbNF0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IDIgLyB2O1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzddID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEwXSA9IC0yIC8gZDtcclxuICAgICAgICB0aGlzLmRhdGFbMTFdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMTJdID0gLShsZWZ0ICsgcmlnaHQpIC8gaDtcclxuICAgICAgICB0aGlzLmRhdGFbMTNdID0gLSh0b3AgKyBib3R0b20pIC8gdjtcclxuICAgICAgICB0aGlzLmRhdGFbMTRdID0gLShmYXIgKyBuZWFyKSAvIGQ7XHJcbiAgICAgICAgdGhpcy5kYXRhWzE1XSA9IDE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NHg0LnByb3RvdHlwZS5UcmFuc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBNYXRyaXg0eDQoKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVs0XTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVs4XTtcclxuICAgICAgICBvdXRwdXQuZGF0YVszXSA9IHRoaXMuZGF0YVsxMl07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNF0gPSB0aGlzLmRhdGFbMV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNV0gPSB0aGlzLmRhdGFbNV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNl0gPSB0aGlzLmRhdGFbOV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbN10gPSB0aGlzLmRhdGFbMTNdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzhdID0gdGhpcy5kYXRhWzJdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzldID0gdGhpcy5kYXRhWzZdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEwXSA9IHRoaXMuZGF0YVsxMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTFdID0gdGhpcy5kYXRhWzE0XTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMl0gPSB0aGlzLmRhdGFbM107XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTNdID0gdGhpcy5kYXRhWzddO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzE0XSA9IHRoaXMuZGF0YVsxMV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTVdID0gdGhpcy5kYXRhWzE1XTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuVHJhbnNwb3NlX2IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRlbXAgPSBuZXcgTWF0cml4NHg0KCk7XHJcbiAgICAgICAgdGVtcC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdO1xyXG4gICAgICAgIHRlbXAuZGF0YVsxXSA9IHRoaXMuZGF0YVs0XTtcclxuICAgICAgICB0ZW1wLmRhdGFbMl0gPSB0aGlzLmRhdGFbOF07XHJcbiAgICAgICAgdGVtcC5kYXRhWzNdID0gdGhpcy5kYXRhWzEyXTtcclxuICAgICAgICB0ZW1wLmRhdGFbNF0gPSB0aGlzLmRhdGFbMV07XHJcbiAgICAgICAgdGVtcC5kYXRhWzVdID0gdGhpcy5kYXRhWzVdO1xyXG4gICAgICAgIHRlbXAuZGF0YVs2XSA9IHRoaXMuZGF0YVs5XTtcclxuICAgICAgICB0ZW1wLmRhdGFbN10gPSB0aGlzLmRhdGFbMTNdO1xyXG4gICAgICAgIHRlbXAuZGF0YVs4XSA9IHRoaXMuZGF0YVsyXTtcclxuICAgICAgICB0ZW1wLmRhdGFbOV0gPSB0aGlzLmRhdGFbNl07XHJcbiAgICAgICAgdGVtcC5kYXRhWzEwXSA9IHRoaXMuZGF0YVsxMF07XHJcbiAgICAgICAgdGVtcC5kYXRhWzExXSA9IHRoaXMuZGF0YVsxNF07XHJcbiAgICAgICAgdGVtcC5kYXRhWzEyXSA9IHRoaXMuZGF0YVszXTtcclxuICAgICAgICB0ZW1wLmRhdGFbMTNdID0gdGhpcy5kYXRhWzddO1xyXG4gICAgICAgIHRlbXAuZGF0YVsxNF0gPSB0aGlzLmRhdGFbMTFdO1xyXG4gICAgICAgIHRlbXAuZGF0YVsxNV0gPSB0aGlzLmRhdGFbMTVdO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHRlbXAuZGF0YTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLkludmVyc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBNYXRyaXg0eDQoKTtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuZGF0YVswXSwgYiA9IHRoaXMuZGF0YVsxXSwgYyA9IHRoaXMuZGF0YVsyXSwgZCA9IHRoaXMuZGF0YVszXSwgZSA9IHRoaXMuZGF0YVs0XSwgZiA9IHRoaXMuZGF0YVs1XSwgZyA9IHRoaXMuZGF0YVs2XSwgaCA9IHRoaXMuZGF0YVs3XSwgaSA9IHRoaXMuZGF0YVs4XSwgaiA9IHRoaXMuZGF0YVs5XSwgayA9IHRoaXMuZGF0YVsxMF0sIGwgPSB0aGlzLmRhdGFbMTFdLCBtID0gdGhpcy5kYXRhWzEyXSwgbiA9IHRoaXMuZGF0YVsxM10sIG8gPSB0aGlzLmRhdGFbMTRdLCBwID0gdGhpcy5kYXRhWzE1XSwgcSA9IGEgKiBmIC0gYiAqIGUsIHIgPSBhICogZyAtIGMgKiBlLCBzID0gYSAqIGggLSBkICogZSwgdCA9IGIgKiBnIC0gYyAqIGYsIHUgPSBiICogaCAtIGQgKiBmLCB2ID0gYyAqIGggLSBkICogZywgdyA9IGkgKiBuIC0gaiAqIG0sIHggPSBpICogbyAtIGsgKiBtLCB5ID0gaSAqIHAgLSBsICogbSwgeiA9IGogKiBvIC0gayAqIG4sIEEgPSBqICogcCAtIGwgKiBuLCBCID0gayAqIHAgLSBsICogbywgaXZkID0gMSAvIChxICogQiAtIHIgKiBBICsgcyAqIHogKyB0ICogeSAtIHUgKiB4ICsgdiAqIHcpO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gKGYgKiBCIC0gZyAqIEEgKyBoICogeikgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSAoLWIgKiBCICsgYyAqIEEgLSBkICogeikgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSAobiAqIHYgLSBvICogdSArIHAgKiB0KSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVszXSA9ICgtaiAqIHYgKyBrICogdSAtIGwgKiB0KSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs0XSA9ICgtZSAqIEIgKyBnICogeSAtIGggKiB4KSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs1XSA9IChhICogQiAtIGMgKiB5ICsgZCAqIHgpICogaXZkO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzZdID0gKC1tICogdiArIG8gKiBzIC0gcCAqIHIpICogaXZkO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzddID0gKGkgKiB2IC0gayAqIHMgKyBsICogcikgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbOF0gPSAoZSAqIEEgLSBmICogeSArIGggKiB3KSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs5XSA9ICgtYSAqIEEgKyBiICogeSAtIGQgKiB3KSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMF0gPSAobSAqIHUgLSBuICogcyArIHAgKiBxKSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMV0gPSAoLWkgKiB1ICsgaiAqIHMgLSBsICogcSkgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTJdID0gKC1lICogeiArIGYgKiB4IC0gZyAqIHcpICogaXZkO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEzXSA9IChhICogeiAtIGIgKiB4ICsgYyAqIHcpICogaXZkO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzE0XSA9ICgtbSAqIHQgKyBuICogciAtIG8gKiBxKSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxNV0gPSAoaSAqIHQgLSBqICogciArIGsgKiBxKSAqIGl2ZDtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuSW52ZXJzZV9iID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5kYXRhWzBdLCBiID0gdGhpcy5kYXRhWzFdLCBjID0gdGhpcy5kYXRhWzJdLCBkID0gdGhpcy5kYXRhWzNdLCBlID0gdGhpcy5kYXRhWzRdLCBmID0gdGhpcy5kYXRhWzVdLCBnID0gdGhpcy5kYXRhWzZdLCBoID0gdGhpcy5kYXRhWzddLCBpID0gdGhpcy5kYXRhWzhdLCBqID0gdGhpcy5kYXRhWzldLCBrID0gdGhpcy5kYXRhWzEwXSwgbCA9IHRoaXMuZGF0YVsxMV0sIG0gPSB0aGlzLmRhdGFbMTJdLCBuID0gdGhpcy5kYXRhWzEzXSwgbyA9IHRoaXMuZGF0YVsxNF0sIHAgPSB0aGlzLmRhdGFbMTVdLCBxID0gYSAqIGYgLSBiICogZSwgciA9IGEgKiBnIC0gYyAqIGUsIHMgPSBhICogaCAtIGQgKiBlLCB0ID0gYiAqIGcgLSBjICogZiwgdSA9IGIgKiBoIC0gZCAqIGYsIHYgPSBjICogaCAtIGQgKiBnLCB3ID0gaSAqIG4gLSBqICogbSwgeCA9IGkgKiBvIC0gayAqIG0sIHkgPSBpICogcCAtIGwgKiBtLCB6ID0gaiAqIG8gLSBrICogbiwgQSA9IGogKiBwIC0gbCAqIG4sIEIgPSBrICogcCAtIGwgKiBvLCBpdmQgPSAxIC8gKHEgKiBCIC0gciAqIEEgKyBzICogeiArIHQgKiB5IC0gdSAqIHggKyB2ICogdyk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gKGYgKiBCIC0gZyAqIEEgKyBoICogeikgKiBpdmQ7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gKC1iICogQiArIGMgKiBBIC0gZCAqIHopICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IChuICogdiAtIG8gKiB1ICsgcCAqIHQpICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9ICgtaiAqIHYgKyBrICogdSAtIGwgKiB0KSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbNF0gPSAoLWUgKiBCICsgZyAqIHkgLSBoICogeCkgKiBpdmQ7XHJcbiAgICAgICAgdGhpcy5kYXRhWzVdID0gKGEgKiBCIC0gYyAqIHkgKyBkICogeCkgKiBpdmQ7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gKC1tICogdiArIG8gKiBzIC0gcCAqIHIpICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IChpICogdiAtIGsgKiBzICsgbCAqIHIpICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IChlICogQSAtIGYgKiB5ICsgaCAqIHcpICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVs5XSA9ICgtYSAqIEEgKyBiICogeSAtIGQgKiB3KSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbMTBdID0gKG0gKiB1IC0gbiAqIHMgKyBwICogcSkgKiBpdmQ7XHJcbiAgICAgICAgdGhpcy5kYXRhWzExXSA9ICgtaSAqIHUgKyBqICogcyAtIGwgKiBxKSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbMTJdID0gKC1lICogeiArIGYgKiB4IC0gZyAqIHcpICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxM10gPSAoYSAqIHogLSBiICogeCArIGMgKiB3KSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbMTRdID0gKC1tICogdCArIG4gKiByIC0gbyAqIHEpICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxNV0gPSAoaSAqIHQgLSBqICogciArIGsgKiBxKSAqIGl2ZDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLlRvUXVhdGVybmlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWxlbSA9IG5ldyBBcnJheSg0KTtcclxuICAgICAgICBlbGVtWzBdID0gdGhpcy5kYXRhWzBdIC0gdGhpcy5kYXRhWzVdIC0gdGhpcy5kYXRhWzEwXSArIDEuMDtcclxuICAgICAgICBlbGVtWzFdID0gLXRoaXMuZGF0YVswXSArIHRoaXMuZGF0YVs1XSAtIHRoaXMuZGF0YVsxMF0gKyAxLjA7XHJcbiAgICAgICAgZWxlbVsyXSA9IC10aGlzLmRhdGFbMF0gLSB0aGlzLmRhdGFbNV0gKyB0aGlzLmRhdGFbMTBdICsgMS4wO1xyXG4gICAgICAgIGVsZW1bM10gPSB0aGlzLmRhdGFbMF0gKyB0aGlzLmRhdGFbNV0gKyB0aGlzLmRhdGFbMTBdICsgMS4wO1xyXG4gICAgICAgIHZhciBiaWdnZXN0SW5kZXggPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtW2ldID4gZWxlbVtiaWdnZXN0SW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgYmlnZ2VzdEluZGV4ID0gaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG91dFF1YXQgPSBuZXcgUXVhdF8xLmRlZmF1bHQoKTtcclxuICAgICAgICB2YXIgdiA9IE1hdGguc3FydChlbGVtW2JpZ2dlc3RJbmRleF0pICogMC41O1xyXG4gICAgICAgIG91dFF1YXQuZGF0YVtiaWdnZXN0SW5kZXhdID0gdjtcclxuICAgICAgICB2YXIgbXVsdCA9IDAuMjUgLyB2O1xyXG4gICAgICAgIHN3aXRjaCAoYmlnZ2VzdEluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogLy8geFxyXG4gICAgICAgICAgICAgICAgb3V0UXVhdC5kYXRhWzFdID0gKHRoaXMuZGF0YVsxXSArIHRoaXMuZGF0YVs0XSkgKiBtdWx0O1xyXG4gICAgICAgICAgICAgICAgb3V0UXVhdC5kYXRhWzJdID0gKHRoaXMuZGF0YVsyXSArIHRoaXMuZGF0YVs4XSkgKiBtdWx0O1xyXG4gICAgICAgICAgICAgICAgb3V0UXVhdC5kYXRhWzNdID0gKHRoaXMuZGF0YVs5XSAtIHRoaXMuZGF0YVs2XSkgKiBtdWx0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTogLy8geVxyXG4gICAgICAgICAgICAgICAgb3V0UXVhdC5kYXRhWzBdID0gKHRoaXMuZGF0YVsxXSArIHRoaXMuZGF0YVs0XSkgKiBtdWx0O1xyXG4gICAgICAgICAgICAgICAgb3V0UXVhdC5kYXRhWzJdID0gKHRoaXMuZGF0YVs5XSArIHRoaXMuZGF0YVs2XSkgKiBtdWx0O1xyXG4gICAgICAgICAgICAgICAgb3V0UXVhdC5kYXRhWzNdID0gKHRoaXMuZGF0YVsyXSAtIHRoaXMuZGF0YVs4XSkgKiBtdWx0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjogLy8gelxyXG4gICAgICAgICAgICAgICAgb3V0UXVhdC5kYXRhWzBdID0gKHRoaXMuZGF0YVsyXSArIHRoaXMuZGF0YVs4XSkgKiBtdWx0O1xyXG4gICAgICAgICAgICAgICAgb3V0UXVhdC5kYXRhWzFdID0gKHRoaXMuZGF0YVs5XSArIHRoaXMuZGF0YVs2XSkgKiBtdWx0O1xyXG4gICAgICAgICAgICAgICAgb3V0UXVhdC5kYXRhWzNdID0gKHRoaXMuZGF0YVs0XSAtIHRoaXMuZGF0YVsxXSkgKiBtdWx0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzogLy8gd1xyXG4gICAgICAgICAgICAgICAgb3V0UXVhdC5kYXRhWzBdID0gKHRoaXMuZGF0YVs5XSAtIHRoaXMuZGF0YVs2XSkgKiBtdWx0O1xyXG4gICAgICAgICAgICAgICAgb3V0UXVhdC5kYXRhWzFdID0gKHRoaXMuZGF0YVsyXSAtIHRoaXMuZGF0YVs4XSkgKiBtdWx0O1xyXG4gICAgICAgICAgICAgICAgb3V0UXVhdC5kYXRhWzJdID0gKHRoaXMuZGF0YVs0XSAtIHRoaXMuZGF0YVsxXSkgKiBtdWx0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRRdWF0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNYXRyaXg0eDQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1hdHJpeDR4NDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIE1hdHJpeF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01hdHJpeFwiKSk7XHJcbnZhciBWZWN0b3IzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVmVjdG9yM1wiKSk7XHJcbnZhciBRdWF0ZXJuaW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUXVhdGVybmlvbigpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KDQpO1xyXG4gICAgfVxyXG4gICAgUXVhdGVybmlvbi5wcm90b3R5cGUuSWRlbnRpdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gMTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBRdWF0ZXJuaW9uLnByb3RvdHlwZS5JbnZlcnNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gLXRoaXMuZGF0YVswXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IC10aGlzLmRhdGFbMV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSAtdGhpcy5kYXRhWzJdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzNdID0gdGhpcy5kYXRhWzNdO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgUXVhdGVybmlvbi5wcm90b3R5cGUuSW52ZXJzZV9iID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IC10aGlzLmRhdGFbMF07XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gLXRoaXMuZGF0YVsxXTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSAtdGhpcy5kYXRhWzJdO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IHRoaXMuZGF0YVszXTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBRdWF0ZXJuaW9uLnByb3RvdHlwZS5Ob3JtYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMl07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSB0aGlzLmRhdGFbM107XHJcbiAgICAgICAgdmFyIHggPSBvdXRwdXQuZGF0YVswXSwgeSA9IG91dHB1dC5kYXRhWzFdLCB6ID0gb3V0cHV0LmRhdGFbMl0sIHcgPSBvdXRwdXQuZGF0YVszXTtcclxuICAgICAgICB2YXIgbCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdyk7XHJcbiAgICAgICAgaWYgKGwgPT09IDApIHtcclxuICAgICAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSAwO1xyXG4gICAgICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IDA7XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhWzJdID0gMDtcclxuICAgICAgICAgICAgb3V0cHV0LmRhdGFbM10gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbCA9IDEgLyBsO1xyXG4gICAgICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHggKiBsO1xyXG4gICAgICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHkgKiBsO1xyXG4gICAgICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHogKiBsO1xyXG4gICAgICAgICAgICBvdXRwdXQuZGF0YVszXSA9IHcgKiBsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFF1YXRlcm5pb24ucHJvdG90eXBlLk5vcm1hbGl6ZV9iID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBsID0gTWF0aC5zcXJ0KHRoaXMuZGF0YVswXSAqIHRoaXMuZGF0YVswXSArIHRoaXMuZGF0YVsxXSAqIHRoaXMuZGF0YVsxXSArIHRoaXMuZGF0YVsyXSAqIHRoaXMuZGF0YVsyXSArIHRoaXMuZGF0YVszXSAqIHRoaXMuZGF0YVszXSk7XHJcbiAgICAgICAgaWYgKGwgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhWzBdID0gMDtcclxuICAgICAgICAgICAgdGhpcy5kYXRhWzFdID0gMDtcclxuICAgICAgICAgICAgdGhpcy5kYXRhWzJdID0gMDtcclxuICAgICAgICAgICAgdGhpcy5kYXRhWzNdID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGwgPSAxIC8gbDtcclxuICAgICAgICAgICAgdGhpcy5kYXRhWzBdID0gdGhpcy5kYXRhWzBdICogbDtcclxuICAgICAgICAgICAgdGhpcy5kYXRhWzFdID0gdGhpcy5kYXRhWzFdICogbDtcclxuICAgICAgICAgICAgdGhpcy5kYXRhWzJdID0gdGhpcy5kYXRhWzJdICogbDtcclxuICAgICAgICAgICAgdGhpcy5kYXRhWzNdID0gdGhpcy5kYXRhWzNdICogbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUXVhdGVybmlvbi5wcm90b3R5cGUuTXVsdGlwbHkgPSBmdW5jdGlvbiAoYXJnX3F1YXQpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgICAgICB2YXIgYXggPSB0aGlzLmRhdGFbMF0sIGF5ID0gdGhpcy5kYXRhWzFdLCBheiA9IHRoaXMuZGF0YVsyXSwgYXcgPSB0aGlzLmRhdGFbM107XHJcbiAgICAgICAgdmFyIGJ4ID0gYXJnX3F1YXQuZGF0YVswXSwgYnkgPSBhcmdfcXVhdC5kYXRhWzFdLCBieiA9IGFyZ19xdWF0LmRhdGFbMl0sIGJ3ID0gYXJnX3F1YXQuZGF0YVszXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IGF4ICogYncgKyBhdyAqIGJ4ICsgYXkgKiBieiAtIGF6ICogYnk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSBheSAqIGJ3ICsgYXcgKiBieSArIGF6ICogYnggLSBheCAqIGJ6O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gYXogKiBidyArIGF3ICogYnogKyBheCAqIGJ5IC0gYXkgKiBieDtcclxuICAgICAgICBvdXRwdXQuZGF0YVszXSA9IGF3ICogYncgLSBheCAqIGJ4IC0gYXkgKiBieSAtIGF6ICogYno7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBRdWF0ZXJuaW9uLnByb3RvdHlwZS5NdWx0aXBseV9iID0gZnVuY3Rpb24gKGFyZ19xdWF0KSB7XHJcbiAgICAgICAgdmFyIGF4ID0gdGhpcy5kYXRhWzBdLCBheSA9IHRoaXMuZGF0YVsxXSwgYXogPSB0aGlzLmRhdGFbMl0sIGF3ID0gdGhpcy5kYXRhWzNdO1xyXG4gICAgICAgIHZhciBieCA9IGFyZ19xdWF0LmRhdGFbMF0sIGJ5ID0gYXJnX3F1YXQuZGF0YVsxXSwgYnogPSBhcmdfcXVhdC5kYXRhWzJdLCBidyA9IGFyZ19xdWF0LmRhdGFbM107XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gYXggKiBidyArIGF3ICogYnggKyBheSAqIGJ6IC0gYXogKiBieTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSBheSAqIGJ3ICsgYXcgKiBieSArIGF6ICogYnggLSBheCAqIGJ6O1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYng7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gYXcgKiBidyAtIGF4ICogYnggLSBheSAqIGJ5IC0gYXogKiBiejtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBRdWF0ZXJuaW9uLnByb3RvdHlwZS5Sb3RhdGUgPSBmdW5jdGlvbiAoYXJnX2FuZ2xlLCBhcmdfYXhpcykge1xyXG4gICAgICAgIHZhciBzcSA9IGFyZ19heGlzLkxlbmd0aCgpO1xyXG4gICAgICAgIGlmICghc3EpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhID0gYXJnX2F4aXMueCwgYiA9IGFyZ19heGlzLnksIGMgPSBhcmdfYXhpcy56O1xyXG4gICAgICAgIGlmIChzcSAhPSAxKSB7XHJcbiAgICAgICAgICAgIHNxID0gMSAvIHNxO1xyXG4gICAgICAgICAgICBhICo9IHNxO1xyXG4gICAgICAgICAgICBiICo9IHNxO1xyXG4gICAgICAgICAgICBjICo9IHNxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcyA9IE1hdGguc2luKGFyZ19hbmdsZSAqIDAuNSk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gYSAqIHM7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gYiAqIHM7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gYyAqIHM7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gTWF0aC5jb3MoYXJnX2FuZ2xlICogMC41KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBRdWF0ZXJuaW9uLnByb3RvdHlwZS5Ub1ZlY3RvcjMgPSBmdW5jdGlvbiAoYXJnX3ZlYykge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgMCk7XHJcbiAgICAgICAgdmFyIHFwID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgICAgICB2YXIgcXEgPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgICAgIHZhciBxciA9IHRoaXMuSW52ZXJzZSgpO1xyXG4gICAgICAgIHFwLmRhdGFbMF0gPSBhcmdfdmVjLng7XHJcbiAgICAgICAgcXAuZGF0YVsxXSA9IGFyZ192ZWMueTtcclxuICAgICAgICBxcC5kYXRhWzJdID0gYXJnX3ZlYy56O1xyXG4gICAgICAgIHFxID0gcXIuTXVsdGlwbHkocXApO1xyXG4gICAgICAgIHFyID0gcXEuTXVsdGlwbHkodGhpcyk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSBxci5kYXRhWzBdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gcXIuZGF0YVsxXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHFyLmRhdGFbMl07XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBRdWF0ZXJuaW9uLnByb3RvdHlwZS5Ub01hdHJpeDR4NCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IE1hdHJpeF8xLmRlZmF1bHQoKTtcclxuICAgICAgICB2YXIgeCA9IHRoaXMuZGF0YVswXSwgeSA9IHRoaXMuZGF0YVsxXSwgeiA9IHRoaXMuZGF0YVsyXSwgdyA9IHRoaXMuZGF0YVszXTtcclxuICAgICAgICB2YXIgeDIgPSB4ICsgeCwgeTIgPSB5ICsgeSwgejIgPSB6ICsgejtcclxuICAgICAgICB2YXIgeHggPSB4ICogeDIsIHh5ID0geCAqIHkyLCB4eiA9IHggKiB6MjtcclxuICAgICAgICB2YXIgeXkgPSB5ICogeTIsIHl6ID0geSAqIHoyLCB6eiA9IHogKiB6MjtcclxuICAgICAgICB2YXIgd3ggPSB3ICogeDIsIHd5ID0gdyAqIHkyLCB3eiA9IHcgKiB6MjtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IDEgLSAoeXkgKyB6eik7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB4eSAtIHd6O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0geHogKyB3eTtcclxuICAgICAgICBvdXRwdXQuZGF0YVszXSA9IDA7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNF0gPSB4eSArIHd6O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzVdID0gMSAtICh4eCArIHp6KTtcclxuICAgICAgICBvdXRwdXQuZGF0YVs2XSA9IHl6IC0gd3g7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbN10gPSAwO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzhdID0geHogLSB3eTtcclxuICAgICAgICBvdXRwdXQuZGF0YVs5XSA9IHl6ICsgd3g7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTBdID0gMSAtICh4eCArIHl5KTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMV0gPSAwO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEyXSA9IDA7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTNdID0gMDtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxNF0gPSAwO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzE1XSA9IDE7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBRdWF0ZXJuaW9uLnByb3RvdHlwZS5TcGhlcmVMZXJwID0gZnVuY3Rpb24gKGFyZ19xdWF0LCB0aW1lKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgdmFyIGh0ID0gdGhpcy5kYXRhWzBdICogYXJnX3F1YXQuZGF0YVswXSArIHRoaXMuZGF0YVsxXSAqIGFyZ19xdWF0LmRhdGFbMV0gKyB0aGlzLmRhdGFbMl0gKiBhcmdfcXVhdC5kYXRhWzJdICsgdGhpcy5kYXRhWzNdICogYXJnX3F1YXQuZGF0YVszXTtcclxuICAgICAgICB2YXIgaHMgPSAxLjAgLSBodCAqIGh0O1xyXG4gICAgICAgIGlmIChocyA8PSAwLjApIHtcclxuICAgICAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF07XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdO1xyXG4gICAgICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXTtcclxuICAgICAgICAgICAgb3V0cHV0LmRhdGFbM10gPSB0aGlzLmRhdGFbM107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBocyA9IE1hdGguc3FydChocyk7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhocykgPCAwLjAwMDEpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5kYXRhWzBdID0gKHRoaXMuZGF0YVswXSAqIDAuNSArIGFyZ19xdWF0LmRhdGFbMF0gKiAwLjUpO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSAodGhpcy5kYXRhWzFdICogMC41ICsgYXJnX3F1YXQuZGF0YVsxXSAqIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YVsyXSA9ICh0aGlzLmRhdGFbMl0gKiAwLjUgKyBhcmdfcXVhdC5kYXRhWzJdICogMC41KTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5kYXRhWzNdID0gKHRoaXMuZGF0YVszXSAqIDAuNSArIGFyZ19xdWF0LmRhdGFbM10gKiAwLjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBoID0gTWF0aC5hY29zKGh0KTtcclxuICAgICAgICAgICAgICAgIHZhciBwdCA9IHBoICogdGltZTtcclxuICAgICAgICAgICAgICAgIHZhciB0MCA9IE1hdGguc2luKHBoIC0gcHQpIC8gaHM7XHJcbiAgICAgICAgICAgICAgICB2YXIgdDEgPSBNYXRoLnNpbihwdCkgLyBocztcclxuICAgICAgICAgICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdICogdDAgKyBhcmdfcXVhdC5kYXRhWzBdICogdDE7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAqIHQwICsgYXJnX3F1YXQuZGF0YVsxXSAqIHQxO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gKiB0MCArIGFyZ19xdWF0LmRhdGFbMl0gKiB0MTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5kYXRhWzNdID0gdGhpcy5kYXRhWzNdICogdDAgKyBhcmdfcXVhdC5kYXRhWzNdICogdDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBRdWF0ZXJuaW9uLnByb3RvdHlwZS5TcGhlcmVMZXJwX2IgPSBmdW5jdGlvbiAoYXJnX3F1YXQsIHRpbWUpIHtcclxuICAgICAgICB2YXIgaHQgPSB0aGlzLmRhdGFbMF0gKiBhcmdfcXVhdC5kYXRhWzBdICsgdGhpcy5kYXRhWzFdICogYXJnX3F1YXQuZGF0YVsxXSArIHRoaXMuZGF0YVsyXSAqIGFyZ19xdWF0LmRhdGFbMl0gKyB0aGlzLmRhdGFbM10gKiBhcmdfcXVhdC5kYXRhWzNdO1xyXG4gICAgICAgIHZhciBocyA9IDEuMCAtIGh0ICogaHQ7XHJcbiAgICAgICAgaWYgKGhzIDw9IDAuMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhzID0gTWF0aC5zcXJ0KGhzKTtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGhzKSA8IDAuMDAwMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhWzBdID0gKHRoaXMuZGF0YVswXSAqIDAuNSArIGFyZ19xdWF0LmRhdGFbMF0gKiAwLjUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhWzFdID0gKHRoaXMuZGF0YVsxXSAqIDAuNSArIGFyZ19xdWF0LmRhdGFbMV0gKiAwLjUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhWzJdID0gKHRoaXMuZGF0YVsyXSAqIDAuNSArIGFyZ19xdWF0LmRhdGFbMl0gKiAwLjUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhWzNdID0gKHRoaXMuZGF0YVszXSAqIDAuNSArIGFyZ19xdWF0LmRhdGFbM10gKiAwLjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBoID0gTWF0aC5hY29zKGh0KTtcclxuICAgICAgICAgICAgICAgIHZhciBwdCA9IHBoICogdGltZTtcclxuICAgICAgICAgICAgICAgIHZhciB0MCA9IE1hdGguc2luKHBoIC0gcHQpIC8gaHM7XHJcbiAgICAgICAgICAgICAgICB2YXIgdDEgPSBNYXRoLnNpbihwdCkgLyBocztcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAqIHQwICsgYXJnX3F1YXQuZGF0YVswXSAqIHQxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhWzFdID0gdGhpcy5kYXRhWzFdICogdDAgKyBhcmdfcXVhdC5kYXRhWzFdICogdDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gKiB0MCArIGFyZ19xdWF0LmRhdGFbMl0gKiB0MTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVszXSA9IHRoaXMuZGF0YVszXSAqIHQwICsgYXJnX3F1YXQuZGF0YVszXSAqIHQxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBRdWF0ZXJuaW9uO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBRdWF0ZXJuaW9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVmVjdG9yMiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFZlY3RvcjIoeCwgeSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoMik7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0geDtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB5O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIucHJvdG90eXBlLCBcInhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzBdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoYXJnX3YpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhWzBdID0gYXJnX3Y7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIucHJvdG90eXBlLCBcInlcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzFdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoYXJnX3YpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhWzFdID0gYXJnX3Y7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIucHJvdG90eXBlLCBcInh5XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5BZGQgPSBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdICsgYXJnX290aGVyLmRhdGFbMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKyBhcmdfb3RoZXIuZGF0YVsxXTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLkFkZF9iID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IHRoaXMuZGF0YVswXSArIGFyZ19vdGhlci5kYXRhWzBdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSArIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLlN1YiA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gLSBhcmdfb3RoZXIuZGF0YVswXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAtIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuU3ViX2IgPSBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gdGhpcy5kYXRhWzBdIC0gYXJnX290aGVyLmRhdGFbMF07XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gdGhpcy5kYXRhWzFdIC0gYXJnX290aGVyLmRhdGFbMV07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuTXVsdGlwbHkgPSBmdW5jdGlvbiAoYXJnX3NjYWxhcikge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAqIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKiBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuTXVsdGlwbHlfYiA9IGZ1bmN0aW9uIChhcmdfc2NhbGFyKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdICo9IGFyZ19zY2FsYXI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdICo9IGFyZ19zY2FsYXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuRGl2ID0gZnVuY3Rpb24gKGFyZ19zY2FsYXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gLyBhcmdfc2NhbGFyO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdIC8gYXJnX3NjYWxhcjtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLkRpdl9iID0gZnVuY3Rpb24gKGFyZ19zY2FsYXIpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gLz0gYXJnX3NjYWxhcjtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gLz0gYXJnX3NjYWxhcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5MZW5ndGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRhdGFbMF0gKiB0aGlzLmRhdGFbMF0gKyB0aGlzLmRhdGFbMV0gKiB0aGlzLmRhdGFbMV0pO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLkxlbmd0aFNxciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzBdICogdGhpcy5kYXRhWzBdICsgdGhpcy5kYXRhWzFdICogdGhpcy5kYXRhWzFdO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLkRvdCA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzBdICogYXJnX290aGVyLmRhdGFbMF0gKyB0aGlzLmRhdGFbMV0gKiBhcmdfb3RoZXIuZGF0YVsxXTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5Dcm9zcyA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54ICogYXJnX290aGVyLnkgLSB0aGlzLnkgKiBhcmdfb3RoZXIueDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5Ob3JtYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3IyKHRoaXMuZGF0YVswXSwgdGhpcy5kYXRhWzFdKTtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5MZW5ndGgoKTtcclxuICAgICAgICBvdXRwdXQuRGl2X2IobGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLk5vcm1hbGl6ZV9iID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLkxlbmd0aCgpO1xyXG4gICAgICAgIHRoaXMuRGl2X2IobGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICByZXR1cm4gVmVjdG9yMjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVmVjdG9yMjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFZlY3RvcjMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBWZWN0b3IzKHgsIHksIHopIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KDMpO1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IHg7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0geTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSB6O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjMucHJvdG90eXBlLCBcInhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzBdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVswXSA9IGFyZ19vdGhlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMy5wcm90b3R5cGUsIFwieVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbMV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhWzFdID0gYXJnX290aGVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IzLnByb3RvdHlwZSwgXCJ6XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVsyXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbMl0gPSBhcmdfb3RoZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjMucHJvdG90eXBlLCBcInh5elwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuQWRkID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXSArIGFyZ19vdGhlci5kYXRhWzBdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdICsgYXJnX290aGVyLmRhdGFbMV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gKyBhcmdfb3RoZXIuZGF0YVsyXTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLkFkZF9iID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IHRoaXMuZGF0YVswXSArIGFyZ19vdGhlci5kYXRhWzBdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSArIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSArIGFyZ19vdGhlci5kYXRhWzJdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLkFkZFhfYiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSArPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5BZGRZID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuQ2xvbmUoKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSArPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLkFkZFlfYiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSArPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5BZGRaX2IgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gKz0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuU3ViID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAtIGFyZ19vdGhlci5kYXRhWzBdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdIC0gYXJnX290aGVyLmRhdGFbMV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gLSBhcmdfb3RoZXIuZGF0YVsyXTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLlN1Yl9iID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAtIGFyZ19vdGhlci5kYXRhWzBdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAtIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAtIGFyZ19vdGhlci5kYXRhWzJdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLk11bHRpcGx5ID0gZnVuY3Rpb24gKGFyZ19zY2FsYXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKiBhcmdfc2NhbGFyO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdICogYXJnX3NjYWxhcjtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAqIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5NdWx0aXBseV9WZWMzID0gZnVuY3Rpb24gKGFyZ192ZWN0b3IpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKiBhcmdfdmVjdG9yLmRhdGFbMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKiBhcmdfdmVjdG9yLmRhdGFbMV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gKiBhcmdfdmVjdG9yLmRhdGFbMl07XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5NdWx0aXBseV9iID0gZnVuY3Rpb24gKGFyZ19zY2FsYXIpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gKj0gYXJnX3NjYWxhcjtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gKj0gYXJnX3NjYWxhcjtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gKj0gYXJnX3NjYWxhcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5NdWx0aXBseV9WZWMzX2IgPSBmdW5jdGlvbiAoYXJnX3ZlY3Rvcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAqIGFyZ192ZWN0b3IuZGF0YVswXTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKiBhcmdfdmVjdG9yLmRhdGFbMV07XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gdGhpcy5kYXRhWzJdICogYXJnX3ZlY3Rvci5kYXRhWzJdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLk11bHRpcGx5X01hdHJpeCA9IGZ1bmN0aW9uIChhcmdfbWF0cml4KSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgICAgIC8vIG91dHB1dC5kYXRhWzBdPXRoaXMuZGF0YVswXSphcmdfbWF0cml4LmRhdGFbMF0rdGhpcy5kYXRhWzBdKmFyZ19tYXRyaXguZGF0YVs0XSt0aGlzLmRhdGFbMF0qYXJnX21hdHJpeC5kYXRhWzhdK3RoaXMuZGF0YVswXSphcmdfbWF0cml4LmRhdGFbMTJdO1xyXG4gICAgICAgIC8vIG91dHB1dC5kYXRhWzFdPXRoaXMuZGF0YVsxXSphcmdfbWF0cml4LmRhdGFbMV0rdGhpcy5kYXRhWzFdKmFyZ19tYXRyaXguZGF0YVs1XSt0aGlzLmRhdGFbMV0qYXJnX21hdHJpeC5kYXRhWzldK3RoaXMuZGF0YVsxXSphcmdfbWF0cml4LmRhdGFbMTNdO1xyXG4gICAgICAgIC8vIG91dHB1dC5kYXRhWzJdPXRoaXMuZGF0YVsyXSphcmdfbWF0cml4LmRhdGFbMl0rdGhpcy5kYXRhWzJdKmFyZ19tYXRyaXguZGF0YVs2XSt0aGlzLmRhdGFbMl0qYXJnX21hdHJpeC5kYXRhWzEwXSt0aGlzLmRhdGFbMl0qYXJnX21hdHJpeC5kYXRhWzE0XTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAqIGFyZ19tYXRyaXguZGF0YVswXSArIHRoaXMuZGF0YVsxXSAqIGFyZ19tYXRyaXguZGF0YVs0XSArIHRoaXMuZGF0YVsyXSAqIGFyZ19tYXRyaXguZGF0YVs4XSArIGFyZ19tYXRyaXguZGF0YVsxMl07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMF0gKiBhcmdfbWF0cml4LmRhdGFbMV0gKyB0aGlzLmRhdGFbMV0gKiBhcmdfbWF0cml4LmRhdGFbNV0gKyB0aGlzLmRhdGFbMl0gKiBhcmdfbWF0cml4LmRhdGFbOV0gKyBhcmdfbWF0cml4LmRhdGFbMTNdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gdGhpcy5kYXRhWzBdICogYXJnX21hdHJpeC5kYXRhWzJdICsgdGhpcy5kYXRhWzFdICogYXJnX21hdHJpeC5kYXRhWzZdICsgdGhpcy5kYXRhWzJdICogYXJnX21hdHJpeC5kYXRhWzEwXSArIGFyZ19tYXRyaXguZGF0YVsxNF07XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5EaXYgPSBmdW5jdGlvbiAoYXJnX3NjYWxhcikge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAvIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gLyBhcmdfc2NhbGFyO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gdGhpcy5kYXRhWzJdIC8gYXJnX3NjYWxhcjtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLkRpdl9iID0gZnVuY3Rpb24gKGFyZ19zY2FsYXIpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gLz0gYXJnX3NjYWxhcjtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gLz0gYXJnX3NjYWxhcjtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gLz0gYXJnX3NjYWxhcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5MZW5ndGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRhdGFbMF0gKiB0aGlzLmRhdGFbMF0gKyB0aGlzLmRhdGFbMV0gKiB0aGlzLmRhdGFbMV0gKyB0aGlzLmRhdGFbMl0gKiB0aGlzLmRhdGFbMl0pO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLkxlbmd0aFNxciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzBdICogdGhpcy5kYXRhWzBdICsgdGhpcy5kYXRhWzFdICogdGhpcy5kYXRhWzFdICsgdGhpcy5kYXRhWzJdICogdGhpcy5kYXRhWzJdO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLkRvdCA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzBdICogYXJnX290aGVyLmRhdGFbMF0gKyB0aGlzLmRhdGFbMV0gKiBhcmdfb3RoZXIuZGF0YVsxXSArIHRoaXMuZGF0YVsyXSAqIGFyZ19vdGhlci5kYXRhWzJdO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLkNyb3NzID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVsxXSAqIGFyZ19vdGhlci5kYXRhWzJdIC0gdGhpcy5kYXRhWzJdICogYXJnX290aGVyLmRhdGFbMV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMl0gKiBhcmdfb3RoZXIuZGF0YVswXSAtIHRoaXMuZGF0YVswXSAqIGFyZ19vdGhlci5kYXRhWzJdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gdGhpcy5kYXRhWzBdICogYXJnX290aGVyLmRhdGFbMV0gLSB0aGlzLmRhdGFbMV0gKiBhcmdfb3RoZXIuZGF0YVswXTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLk5vcm1hbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMl07XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMuTGVuZ3RoKCk7XHJcbiAgICAgICAgb3V0cHV0LkRpdl9iKGxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5Ob3JtYWxpemVfYiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5MZW5ndGgoKTtcclxuICAgICAgICB0aGlzLkRpdl9iKGxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuQ2xvbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHRoaXMuZGF0YVswXSwgdGhpcy5kYXRhWzFdLCB0aGlzLmRhdGFbMl0pO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMueEF4aXMgPSBuZXcgVmVjdG9yMygxLCAwLCAwKTtcclxuICAgIFZlY3RvcjMueUF4aXMgPSBuZXcgVmVjdG9yMygwLCAxLCAwKTtcclxuICAgIFZlY3RvcjMuekF4aXMgPSBuZXcgVmVjdG9yMygwLCAwLCAxKTtcclxuICAgIHJldHVybiBWZWN0b3IzO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBWZWN0b3IzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVmVjdG9yNCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFZlY3RvcjQoeCwgeSwgeiwgdykge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoNCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0geDtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB5O1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IHo7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gdztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3I0LnByb3RvdHlwZSwgXCJ4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVswXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yNC5wcm90b3R5cGUsIFwieVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbMV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjQucHJvdG90eXBlLCBcInpcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzJdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3I0LnByb3RvdHlwZSwgXCJ3XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVszXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yNC5wcm90b3R5cGUsIFwieHl6d1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVmVjdG9yNC5wcm90b3R5cGUuU2V0ID0gZnVuY3Rpb24gKHgsIHksIHosIHcpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSB4O1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IHk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gejtcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSB3O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLkFkZCA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjQoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKyBhcmdfb3RoZXIuZGF0YVswXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSArIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gdGhpcy5kYXRhWzJdICsgYXJnX290aGVyLmRhdGFbMl07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSB0aGlzLmRhdGFbM10gKyBhcmdfb3RoZXIuZGF0YVszXTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLkFkZF9iID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IHRoaXMuZGF0YVswXSArIGFyZ19vdGhlci5kYXRhWzBdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSArIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSArIGFyZ19vdGhlci5kYXRhWzJdO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IHRoaXMuZGF0YVszXSArIGFyZ19vdGhlci5kYXRhWzNdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLlN1YiA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjQoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gLSBhcmdfb3RoZXIuZGF0YVswXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAtIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gdGhpcy5kYXRhWzJdIC0gYXJnX290aGVyLmRhdGFbMl07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSB0aGlzLmRhdGFbM10gLSBhcmdfb3RoZXIuZGF0YVszXTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLlN1Yl9iID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAtIGFyZ19vdGhlci5kYXRhWzBdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAtIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAtIGFyZ19vdGhlci5kYXRhWzJdO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IHRoaXMuZGF0YVszXSAtIGFyZ19vdGhlci5kYXRhWzNdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLk11bHRpcGx5ID0gZnVuY3Rpb24gKGFyZ19zY2FsYXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjQoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKiBhcmdfc2NhbGFyO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdICogYXJnX3NjYWxhcjtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAqIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSB0aGlzLmRhdGFbM10gKiBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yNC5wcm90b3R5cGUuTXVsdGlwbHlfYiA9IGZ1bmN0aW9uIChhcmdfc2NhbGFyKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdICo9IGFyZ19zY2FsYXI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdICo9IGFyZ19zY2FsYXI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdICo9IGFyZ19zY2FsYXI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdICo9IGFyZ19zY2FsYXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yNC5wcm90b3R5cGUuRGl2ID0gZnVuY3Rpb24gKGFyZ19zY2FsYXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjQoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gLyBhcmdfc2NhbGFyO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdIC8gYXJnX3NjYWxhcjtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAvIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSB0aGlzLmRhdGFbM10gLyBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yNC5wcm90b3R5cGUuRGl2X2IgPSBmdW5jdGlvbiAoYXJnX3NjYWxhcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSAvPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSAvPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSAvPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSAvPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLkxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGF0YVswXSAqIHRoaXMuZGF0YVswXSArIHRoaXMuZGF0YVsxXSAqIHRoaXMuZGF0YVsxXSArIHRoaXMuZGF0YVsyXSAqIHRoaXMuZGF0YVsyXSArIHRoaXMuZGF0YVszXSAqIHRoaXMuZGF0YVszXSk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yNC5wcm90b3R5cGUuTGVuZ3RoU3FyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbMF0gKiB0aGlzLmRhdGFbMF0gKyB0aGlzLmRhdGFbMV0gKiB0aGlzLmRhdGFbMV0gKyB0aGlzLmRhdGFbMl0gKiB0aGlzLmRhdGFbMl0gKyB0aGlzLmRhdGFbM10gKiB0aGlzLmRhdGFbM107XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yNC5wcm90b3R5cGUuRG90ID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbMF0gKiBhcmdfb3RoZXIuZGF0YVswXSArIHRoaXMuZGF0YVsxXSAqIGFyZ19vdGhlci5kYXRhWzFdICsgdGhpcy5kYXRhWzJdICogYXJnX290aGVyLmRhdGFbMl0gKyB0aGlzLmRhdGFbM10gKiBhcmdfb3RoZXIuZGF0YVszXTtcclxuICAgIH07XHJcbiAgICBWZWN0b3I0LnByb3RvdHlwZS5Ob3JtYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3I0KHRoaXMuZGF0YVswXSwgdGhpcy5kYXRhWzFdLCB0aGlzLmRhdGFbMl0sIHRoaXMuZGF0YVszXSk7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMuTGVuZ3RoKCk7XHJcbiAgICAgICAgb3V0cHV0LkRpdl9iKGxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3I0LnByb3RvdHlwZS5Ob3JtYWxpemVfYiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5MZW5ndGgoKTtcclxuICAgICAgICB0aGlzLkRpdl9iKGxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFZlY3RvcjQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFZlY3RvcjQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBWZWN0b3IzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL01hdGgvVmVjdG9yM1wiKSk7XHJcbnZhciBPY3RyZWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9PY3RyZWVcIikpO1xyXG52YXIgTGF5ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBMYXllcigpIHtcclxuICAgICAgICB0aGlzLm9jdHJlZSA9IG5ldyBPY3RyZWVfMS5kZWZhdWx0KDYsIG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgtMTAsIC0zMCwgLTMwKSwgbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDgwLCAzMCwgMzApKTtcclxuICAgIH1cclxuICAgIExheWVyLnByb3RvdHlwZS5SZWdpc3QgPSBmdW5jdGlvbiAoYXJnX3JlZ2lzdE9iaikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9jdHJlZS5SZWdpc3RDb2xsaXNpb25PYmooYXJnX3JlZ2lzdE9iaik7XHJcbiAgICB9O1xyXG4gICAgTGF5ZXIucHJvdG90eXBlLlVuUmVnaXN0ID0gZnVuY3Rpb24gKGFyZ19JRCkge1xyXG4gICAgICAgIHRoaXMub2N0cmVlLlVuUmVnaXN0Q29sbGlzaW9uT2JqKGFyZ19JRCk7XHJcbiAgICB9O1xyXG4gICAgTGF5ZXIucHJvdG90eXBlLkNoZWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMub2N0cmVlLlVwZGF0ZSgpO1xyXG4gICAgICAgIHZhciBsaXN0X29ialN0YWNrID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdmFyIHZlY19jb2xsaXNpb25PYmplY3RzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5vY3RyZWUuQ3JlYXRlQ29sbGlzaW9uT2JqZWN0TGlzdCgwLCB2ZWNfY29sbGlzaW9uT2JqZWN0cywgbGlzdF9vYmpTdGFjayk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh2ZWNfY29sbGlzaW9uT2JqZWN0cyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZWNfY29sbGlzaW9uT2JqZWN0cy5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICB2ZWNfY29sbGlzaW9uT2JqZWN0c1tpXS5IaXRDaGVjayh2ZWNfY29sbGlzaW9uT2JqZWN0c1tpICsgMV0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMYXllci5wcm90b3R5cGUuUmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm9jdHJlZS5SZWxlYXNlKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExheWVyO1xyXG59KCkpO1xyXG52YXIgQ29sbGlzaW9uTWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbGxpc2lvbk1hbmFnZXIoKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmxheWVycy5wdXNoKG5ldyBMYXllcigpKTtcclxuICAgIH1cclxuICAgIENvbGxpc2lvbk1hbmFnZXIucHJvdG90eXBlLlJlZ2lzdCA9IGZ1bmN0aW9uIChhcmdfcmVnaXN0T2JqLCBsYXllcikge1xyXG4gICAgICAgIGlmICh0aGlzLmxheWVycy5sZW5ndGggPD0gbGF5ZXIpIHtcclxuICAgICAgICAgICAgbGF5ZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5sYXllcnNbbGF5ZXJdLlJlZ2lzdChhcmdfcmVnaXN0T2JqKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25NYW5hZ2VyLnByb3RvdHlwZS5VblJlZ2lzdCA9IGZ1bmN0aW9uIChhcmdfSUQsIGxheWVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGF5ZXJzLmxlbmd0aCA8PSBsYXllcikge1xyXG4gICAgICAgICAgICBsYXllciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGF5ZXJzW2xheWVyXS5VblJlZ2lzdChhcmdfSUQpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbk1hbmFnZXIucHJvdG90eXBlLkFkZExheWVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLnB1c2gobmV3IExheWVyKCkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbk1hbmFnZXIucHJvdG90eXBlLkNoZWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKGxheWVyKSB7IHJldHVybiBsYXllci5DaGVjaygpOyB9KTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25NYW5hZ2VyLnByb3RvdHlwZS5SZWxlYXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKGxheWVyKSB7IHJldHVybiBsYXllci5SZWxlYXNlKCk7IH0pO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmxlbmd0aCA9IDA7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbGxpc2lvbk1hbmFnZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENvbGxpc2lvbk1hbmFnZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDb2xsaXNpb25PYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb2xsaXNpb25PYmplY3QoYXJnX29iaiwgYXJnX3ByaW0pIHtcclxuICAgICAgICB0aGlzLnBfY2VsbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vYmplY3QgPSBhcmdfb2JqO1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uUHJpbWl0aXZlID0gYXJnX3ByaW07XHJcbiAgICB9XHJcbiAgICBDb2xsaXNpb25PYmplY3QucHJvdG90eXBlLlJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5wX2NlbGwgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnNocF9uZXh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hwX25leHQuc2hwX2JlZiA9IHRoaXMuc2hwX2JlZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2hwX2JlZikge1xyXG4gICAgICAgICAgICB0aGlzLnNocF9iZWYuc2hwX25leHQgPSB0aGlzLnNocF9uZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBfY2VsbC5PblJlbW92ZSh0aGlzKTtcclxuICAgICAgICB0aGlzLnNocF9uZXh0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNocF9iZWYgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucF9jZWxsID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25PYmplY3QucHJvdG90eXBlLlJlZ2lzdENlbGwgPSBmdW5jdGlvbiAoYXJnX3BDZWxsKSB7XHJcbiAgICAgICAgdGhpcy5wX2NlbGwgPSBhcmdfcENlbGw7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uT2JqZWN0LnByb3RvdHlwZS5HZXRCZWZPYmogPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hwX2JlZjtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25PYmplY3QucHJvdG90eXBlLkdldE5leHRPYmogPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hwX25leHQ7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uT2JqZWN0LnByb3RvdHlwZS5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb25QcmltaXRpdmUuVXBkYXRlKCk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uT2JqZWN0LnByb3RvdHlwZS5IaXRDaGVjayA9IGZ1bmN0aW9uIChhcmdfY29sbGlzaW9uT2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKGFyZ19jb2xsaXNpb25PYmplY3QuY29sbGlzaW9uUHJpbWl0aXZlLklzSGl0KHRoaXMuY29sbGlzaW9uUHJpbWl0aXZlKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5IaXQoYXJnX2NvbGxpc2lvbk9iamVjdC5vYmplY3QpO1xyXG4gICAgICAgICAgICBhcmdfY29sbGlzaW9uT2JqZWN0Lm9iamVjdC5IaXQodGhpcy5vYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29sbGlzaW9uT2JqZWN0O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDb2xsaXNpb25PYmplY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBPY3RDZWxsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gT2N0Q2VsbCgpIHtcclxuICAgIH1cclxuICAgIE9jdENlbGwucHJvdG90eXBlLlJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuc2hwX2hlYWQgIT0gbnVsbCAmJiB0aGlzLnNocF9oZWFkLnNocF9uZXh0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zaHBfaGVhZCA9IHRoaXMuc2hwX2hlYWQuc2hwX25leHQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2hwX2hlYWQuc2hwX2JlZiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hwX2hlYWQgPSBudWxsO1xyXG4gICAgfTtcclxuICAgIE9jdENlbGwucHJvdG90eXBlLlJlZ2lzdE9iamVjdCA9IGZ1bmN0aW9uIChhcmdfb2JqKSB7XHJcbiAgICAgICAgaWYgKGFyZ19vYmoucF9jZWxsID09IHRoaXMgfHwgKGFyZ19vYmogPT0gbnVsbCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBhcmdfb2JqLlJlbW92ZSgpO1xyXG4gICAgICAgIGFyZ19vYmoucF9jZWxsID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5zaHBfaGVhZCkge1xyXG4gICAgICAgICAgICBhcmdfb2JqLnNocF9uZXh0ID0gdGhpcy5zaHBfaGVhZDtcclxuICAgICAgICAgICAgdGhpcy5zaHBfaGVhZC5zaHBfYmVmID0gYXJnX29iajtcclxuICAgICAgICAgICAgdGhpcy5zaHBfaGVhZCA9IGFyZ19vYmo7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hwX2hlYWQgPSBhcmdfb2JqO1xyXG4gICAgfTtcclxuICAgIE9jdENlbGwucHJvdG90eXBlLk9uUmVtb3ZlID0gZnVuY3Rpb24gKGFyZ19yZW1vdmUpIHtcclxuICAgICAgICBpZiAoKHRoaXMuc2hwX2hlYWQgPT0gYXJnX3JlbW92ZSkgJiYgYXJnX3JlbW92ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNocF9oZWFkID0gdGhpcy5zaHBfaGVhZC5zaHBfbmV4dDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgT2N0Q2VsbC5wcm90b3R5cGUuR2V0SGVhZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaHBfaGVhZDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gT2N0Q2VsbDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gT2N0Q2VsbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFZlY3RvcjNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vTWF0aC9WZWN0b3IzXCIpKTtcclxudmFyIElEXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL0lEXCIpKTtcclxudmFyIE9jdENlbGxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9PY3RDZWxsXCIpKTtcclxudmFyIE1heExldmVsID0gNztcclxudmFyIExFVkVMX0ZMQUcgPSBbKDExMSA8PCAwKSwgKDExMSA8PCAzKSwgKDExMSA8PCA2KSwgKDExMSA8PCA5KSwgKDExMSA8PCAxMiksICgxMTEgPDwgMTUpLCAoMTExIDw8IDE4KSwgKDExMSA8PCAyMSksICgxMTEgPDwgMjQpLCAoMTExIDw8IDI3KSxdO1xyXG52YXIgT2N0cmVlSGVscGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gT2N0cmVlSGVscGVyKCkge1xyXG4gICAgfVxyXG4gICAgT2N0cmVlSGVscGVyLkJpdFNlcGFyYXRlID0gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICB2YXIgcyA9IG47XHJcbiAgICAgICAgcyA9IChzIHwgcyA8PCA4KSAmIDB4MDAwMGYwMGY7XHJcbiAgICAgICAgcyA9IChzIHwgcyA8PCA0KSAmIDB4MDAwYzMwYzM7XHJcbiAgICAgICAgcyA9IChzIHwgcyA8PCAyKSAmIDB4MDAyNDkyNDk7XHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9O1xyXG4gICAgT2N0cmVlSGVscGVyLkdldExldmVsID0gZnVuY3Rpb24gKGFyZ19mbGFnLCBhcmdfbGV2ZWwpIHtcclxuICAgICAgICB2YXIgb3V0ID0gMTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ19sZXZlbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBDaGVjayA9IChhcmdfZmxhZyA+PiAoaSAqIDMpKSAmIDB4NztcclxuICAgICAgICAgICAgaWYgKENoZWNrICE9IDApXHJcbiAgICAgICAgICAgICAgICBvdXQgPSBpICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gT2N0cmVlSGVscGVyO1xyXG59KCkpO1xyXG47XHJcbnZhciBDb2xsaXNpb25MYXllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbGxpc2lvbkxheWVyKGFyZ19sZXZlbCwgYXJnX21pblBvcywgYXJnX21heFBvcykge1xyXG4gICAgICAgIHRoaXMuT2N0UG93ID0gQXJyYXkoTWF4TGV2ZWwgKyAxKTtcclxuICAgICAgICB0aGlzLk9jdFBvd1NldmVuRGV2aWRlZCA9IEFycmF5KE1heExldmVsICsgMSk7XHJcbiAgICAgICAgaWYgKGFyZ19sZXZlbCA8PSBNYXhMZXZlbClcclxuICAgICAgICAgICAgdGhpcy5tYXhMZXZlbCA9IGFyZ19sZXZlbDtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYXhMZXZlbCA9IE1heExldmVsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJhbmdlTWF4ID0gYXJnX21heFBvcztcclxuICAgICAgICB0aGlzLnJhbmdlTWluID0gYXJnX21pblBvcztcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5yYW5nZU1heC5TdWIodGhpcy5yYW5nZU1pbik7XHJcbiAgICAgICAgdGhpcy5PY3RQb3dbMF0gPSAxO1xyXG4gICAgICAgIHRoaXMuT2N0UG93U2V2ZW5EZXZpZGVkWzBdID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IE1heExldmVsICsgMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuT2N0UG93W2ldID0gdGhpcy5PY3RQb3dbaSAtIDFdICogODtcclxuICAgICAgICAgICAgdGhpcy5PY3RQb3dTZXZlbkRldmlkZWRbaV0gPSAodGhpcy5PY3RQb3dbaV0gLSAxKSAvIDc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWF4Q2VsbE51bSA9IHRoaXMuT2N0UG93U2V2ZW5EZXZpZGVkW01heExldmVsIC0gMV07XHJcbiAgICAgICAgdGhpcy51bml0ID0gdGhpcy53aWR0aC5EaXYoKDEgPDwgdGhpcy5tYXhMZXZlbCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudW5pdCk7XHJcbiAgICAgICAgdGhpcy5hcnlfY2VsbHMgPSBuZXcgQXJyYXkodGhpcy5tYXhDZWxsTnVtKTtcclxuICAgICAgICB0aGlzLkNyZWF0ZUNlbGwoMCk7XHJcbiAgICAgICAgdGhpcy52ZWNfc2hwX2NvbGxpc2lvbk9ianMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLnZlY19pbmRleCA9IG5ldyBBcnJheSgpO1xyXG4gICAgfVxyXG4gICAgQ29sbGlzaW9uTGF5ZXIucHJvdG90eXBlLlJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy52ZWNfc2hwX2NvbGxpc2lvbk9ianMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLnZlY19pbmRleC5sZW5ndGggPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tYXhDZWxsTnVtOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXJ5X2NlbGxzW2ldKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnlfY2VsbHNbaV0uUmVsZWFzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFyeV9jZWxscy5sZW5ndGggPSAwO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbkxheWVyLnByb3RvdHlwZS5SZWdpc3RDb2xsaXNpb25PYmogPSBmdW5jdGlvbiAoYXJnX2NvbGxpc2lvbk9iaikge1xyXG4gICAgICAgIHZhciBpZCA9IG5ldyBJRF8xLmRlZmF1bHQodGhpcy52ZWNfc2hwX2NvbGxpc2lvbk9ianMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgdGhpcy52ZWNfc2hwX2NvbGxpc2lvbk9ianMucHVzaChhcmdfY29sbGlzaW9uT2JqKTtcclxuICAgICAgICB0aGlzLnZlY19pbmRleC5wdXNoKGlkKTtcclxuICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uTGF5ZXIucHJvdG90eXBlLlVuUmVnaXN0Q29sbGlzaW9uT2JqID0gZnVuY3Rpb24gKGFyZ19pbmRleCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IGFyZ19pbmRleC5udW07XHJcbiAgICAgICAgaWYgKGluZGV4ID49IHRoaXMudmVjX3NocF9jb2xsaXNpb25PYmpzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmVjX3NocF9jb2xsaXNpb25PYmpzW2luZGV4XS5SZW1vdmUoKTtcclxuICAgICAgICB0aGlzLnZlY19zaHBfY29sbGlzaW9uT2Jqcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMudmVjX2luZGV4LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGluZGV4IC0gMTsgaSA8IHRoaXMudmVjX2luZGV4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVjX2luZGV4W2ldLm51bS0tO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25MYXllci5wcm90b3R5cGUuSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25MYXllci5wcm90b3R5cGUuVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuUmVnaXN0T2N0cmVlKCk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uTGF5ZXIucHJvdG90eXBlLlJlZ2lzdE9jdHJlZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBpdHIgPSAwOyBpdHIgPCB0aGlzLnZlY19zaHBfY29sbGlzaW9uT2Jqcy5sZW5ndGg7IGl0cisrKSB7XHJcbiAgICAgICAgICAgIHZhciBtaW5Qb2ludCA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAwKSwgbWF4UG9pbnQgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVjX3NocF9jb2xsaXNpb25PYmpzW2l0cl0uY29sbGlzaW9uUHJpbWl0aXZlLkdldE1heFBvaW50QW5kTWluUG9pbnQobWF4UG9pbnQsIG1pblBvaW50KTtcclxuICAgICAgICAgICAgdmFyIGNlbGxOdW0gPSB0aGlzLkdldE1vcnRvblNwYWNlKG1pblBvaW50LCBtYXhQb2ludCk7XHJcbiAgICAgICAgICAgIGlmIChjZWxsTnVtID4gdGhpcy5tYXhDZWxsTnVtKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYXJ5X2NlbGxzW2NlbGxOdW1dKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNyZWF0ZUNlbGwoY2VsbE51bSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hcnlfY2VsbHNbY2VsbE51bV0uUmVnaXN0T2JqZWN0KHRoaXMudmVjX3NocF9jb2xsaXNpb25PYmpzW2l0cl0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25MYXllci5wcm90b3R5cGUuR2V0M0RNb3J0b25OdW1iZXIgPSBmdW5jdGlvbiAoeCwgeSwgeikge1xyXG4gICAgICAgIHJldHVybiBPY3RyZWVIZWxwZXIuQml0U2VwYXJhdGUoeCkgfCBPY3RyZWVIZWxwZXIuQml0U2VwYXJhdGUoeSkgPDwgMSB8IE9jdHJlZUhlbHBlci5CaXRTZXBhcmF0ZSh6KSA8PCAyO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbkxheWVyLnByb3RvdHlwZS5HZXQzRE1vcnRvbk51bWJlcl9WZWMzID0gZnVuY3Rpb24gKGFyZ19wb3NpdGlvbikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkdldDNETW9ydG9uTnVtYmVyKCgoYXJnX3Bvc2l0aW9uLnggLSB0aGlzLnJhbmdlTWluLngpIC8gdGhpcy51bml0LngpLCAoKGFyZ19wb3NpdGlvbi55IC0gdGhpcy5yYW5nZU1pbi55KSAvIHRoaXMudW5pdC55KSwgKChhcmdfcG9zaXRpb24ueiAtIHRoaXMucmFuZ2VNaW4ueikgLyB0aGlzLnVuaXQueikpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbkxheWVyLnByb3RvdHlwZS5HZXRNb3J0b25TcGFjZSA9IGZ1bmN0aW9uIChhcmdfbWluUG9zLCBhcmdfbWF4UG9zKSB7XHJcbiAgICAgICAgdmFyIG1heFNwYWNlID0gdGhpcy5HZXQzRE1vcnRvbk51bWJlcl9WZWMzKGFyZ19tYXhQb3MpO1xyXG4gICAgICAgIHZhciBsZXZlbENoZWNrRmxhZyA9IHRoaXMuR2V0M0RNb3J0b25OdW1iZXJfVmVjMyhhcmdfbWluUG9zKSBeIG1heFNwYWNlO1xyXG4gICAgICAgIHZhciBsZXZlbCA9IE9jdHJlZUhlbHBlci5HZXRMZXZlbChsZXZlbENoZWNrRmxhZywgdGhpcy5tYXhMZXZlbCk7XHJcbiAgICAgICAgdmFyIG51bSA9IChtYXhTcGFjZSA+PiAoKGxldmVsKSAqIDMpKTtcclxuICAgICAgICBudW0gKz0gdGhpcy5PY3RQb3dTZXZlbkRldmlkZWRbdGhpcy5tYXhMZXZlbCAtIGxldmVsXTtcclxuICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbkxheWVyLnByb3RvdHlwZS5DcmVhdGVDb2xsaXNpb25PYmplY3RMaXN0ID0gZnVuY3Rpb24gKGFyZ19jZWxsTnVtLCBhcmdfb3V0cHV0LCBhcmdfc3RhY2spIHtcclxuICAgICAgICB2YXIgb2JqSXRyID0gdGhpcy5hcnlfY2VsbHNbYXJnX2NlbGxOdW1dLkdldEhlYWQoKTtcclxuICAgICAgICAvL3ZhciBpPTA7XHJcbiAgICAgICAgd2hpbGUgKG9iakl0ciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhciByT2JqSXRyID0gb2JqSXRyLnNocF9uZXh0O1xyXG4gICAgICAgICAgICB3aGlsZSAock9iakl0ciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDooZ3nqoHjg6rjgrnjg4jkvZzmiJBcclxuICAgICAgICAgICAgICAgIGFyZ19vdXRwdXQucHVzaChvYmpJdHIpO1xyXG4gICAgICAgICAgICAgICAgYXJnX291dHB1dC5wdXNoKHJPYmpJdHIpO1xyXG4gICAgICAgICAgICAgICAgck9iakl0ciA9IHJPYmpJdHIuc2hwX25leHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g4pGhIOihneeqgeOCueOCv+ODg+OCr+OBqOOBruihneeqgeODquOCueODiOS9nOaIkFxyXG4gICAgICAgICAgICBmb3IgKHZhciBpdHIgPSAwOyBpdHIgPCBhcmdfc3RhY2subGVuZ3RoOyBpdHIrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnX291dHB1dC5wdXNoKG9iakl0cik7XHJcbiAgICAgICAgICAgICAgICBhcmdfb3V0cHV0LnB1c2goYXJnX3N0YWNrW2l0cl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9iakl0ciA9IG9iakl0ci5zaHBfbmV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpKTtcclxuICAgICAgICB2YXIgQ2hpbGRGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgLy8g4pGiIOWtkOepuumWk1xyXG4gICAgICAgIHZhciBPYmpOdW0gPSAwO1xyXG4gICAgICAgIHZhciBpLCBuZXh0Q2VsbE51bTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5leHRDZWxsTnVtID0gYXJnX2NlbGxOdW0gKiA4ICsgMSArIGk7XHJcbiAgICAgICAgICAgIGlmIChuZXh0Q2VsbE51bSA8IHRoaXMubWF4Q2VsbE51bSAmJiB0aGlzLmFyeV9jZWxsc1thcmdfY2VsbE51bSAqIDggKyAxICsgaV0pIHtcclxuICAgICAgICAgICAgICAgIGlmICghQ2hpbGRGbGFnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqSXRyID0gdGhpcy5hcnlfY2VsbHNbYXJnX2NlbGxOdW1dLkdldEhlYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAob2JqSXRyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ19zdGFjay5wdXNoKG9iakl0cik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iak51bSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpJdHIgPSBvYmpJdHIuc2hwX25leHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQ2hpbGRGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ3JlYXRlQ29sbGlzaW9uT2JqZWN0TGlzdChhcmdfY2VsbE51bSAqIDggKyAxICsgaSwgYXJnX291dHB1dCwgYXJnX3N0YWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDikaQg44K544K/44OD44Kv44GL44KJ44Kq44OW44K444Kn44Kv44OI44KS5aSW44GZXHJcbiAgICAgICAgaWYgKENoaWxkRmxhZykge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgT2JqTnVtOyBpKyspXHJcbiAgICAgICAgICAgICAgICBhcmdfc3RhY2sucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbkxheWVyLnByb3RvdHlwZS5DcmVhdGVDZWxsID0gZnVuY3Rpb24gKGFyZ19jZWxsTnVtKSB7XHJcbiAgICAgICAgd2hpbGUgKCF0aGlzLmFyeV9jZWxsc1thcmdfY2VsbE51bV0pIHtcclxuICAgICAgICAgICAgLy8g5oyH5a6a44Gu6KaB57Sg55Wq5Y+344Gr56m66ZaT44KS5paw6KaP5L2c5oiQXHJcbiAgICAgICAgICAgIHRoaXMuYXJ5X2NlbGxzW2FyZ19jZWxsTnVtXSA9IG5ldyBPY3RDZWxsXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvLyDopqrnqbrplpPjgavjgrjjg6Pjg7Pjg5dcclxuICAgICAgICAgICAgYXJnX2NlbGxOdW0gPSAoYXJnX2NlbGxOdW0gLSAxKSA+PiAzO1xyXG4gICAgICAgICAgICBpZiAoYXJnX2NlbGxOdW0gPj0gdGhpcy5tYXhDZWxsTnVtKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBDb2xsaXNpb25MYXllcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ29sbGlzaW9uTGF5ZXI7XHJcbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIElEXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vSURcIikpO1xyXG52YXIgbWFwX0lEcyA9IG5ldyBNYXAoKTtcclxudmFyIEdhbWVPYmplY3RJRE1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lT2JqZWN0SURNYW5hZ2VyKCkge1xyXG4gICAgfVxyXG4gICAgR2FtZU9iamVjdElETWFuYWdlci5HZXRJRCA9IGZ1bmN0aW9uIChhcmdfSUROYW1lKSB7XHJcbiAgICAgICAgaWYgKCFtYXBfSURzW2FyZ19JRE5hbWVdKSB7XHJcbiAgICAgICAgICAgIG1hcF9JRHNbYXJnX0lETmFtZV0gPSBuZXcgSURfMS5kZWZhdWx0KG1hcF9JRHMua2V5cy5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWFwX0lEc1thcmdfSUROYW1lXTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZU9iamVjdElETWFuYWdlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZU9iamVjdElETWFuYWdlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEdhbWVUaW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZVRpbWUoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5hYnNGcmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy5yZWxGcmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lUGFzZSA9IDEuMDtcclxuICAgIH1cclxuICAgIEdhbWVUaW1lLnByb3RvdHlwZS5Db3VudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFic0ZyYW1lKys7XHJcbiAgICAgICAgdGhpcy5yZWxGcmFtZSArPSB0aGlzLnRpbWVQYXNlO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lVGltZS5wcm90b3R5cGUsIFwiZWxhcHNlZFRpbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aW1lIC0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWVUaW1lLnByb3RvdHlwZSwgXCJBYnNvbHV0ZUZyYW1lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWJzRnJhbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWVUaW1lLnByb3RvdHlwZSwgXCJSZWxhdGl2ZUZyYW1lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVsRnJhbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWVUaW1lLnByb3RvdHlwZSwgXCJUaW1lUGFzZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWVQYXNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoYXJnX3RpbWVQYXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZVBhc2UgPSBhcmdfdGltZVBhc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIEdhbWVUaW1lO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBHYW1lVGltZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIElEID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSUQoYXJnX251bSkge1xyXG4gICAgICAgIHRoaXMubnVtID0gYXJnX251bTtcclxuICAgIH1cclxuICAgIElELnByb3RvdHlwZS5FcXVhbCA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bSA9PSBvdGhlci5udW07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIElEO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBJRDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIE1vZGVsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL0dyYXBoaWMvTW9kZWxcIikpO1xyXG52YXIgUmVzb3VyY2VDcmVhdGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1Rvb2wvUmVzb3VyY2VDcmVhdGVyXCIpKTtcclxudmFyIEdlb21ldHJ5R2VuZXJhdG9yXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1Rvb2wvR2VvbWV0cnlHZW5lcmF0b3JcIikpO1xyXG52YXIgVGV4dE1vZGVsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL0dyYXBoaWMvVGV4dE1vZGVsXCIpKTtcclxudmFyIENoYXJNYXAgPSBuZXcgTWFwKFtcclxuICAgIFtcIiBcIiwgMF0sIFtcIiFcIiwgMV0sIFsnXCInLCAyXSwgW1wiI1wiLCAzXSwgW1wiJFwiLCA0XSwgW1wiJVwiLCA1XSwgW1wiJlwiLCA2XSwgW1wiJ1wiLCA3XSwgW1wiKFwiLCA4XSwgW1wiKVwiLCA5XSxcclxuICAgIFtcIipcIiwgMTBdLCBbXCIrXCIsIDExXSwgWycsJywgMTJdLCBbXCItXCIsIDEzXSwgW1wiLlwiLCAxNF0sIFtcIi9cIiwgMTVdLCBbXCIwXCIsIDE2XSwgW1wiMVwiLCAxN10sIFtcIjJcIiwgMThdLCBbXCIzXCIsIDE5XSxcclxuICAgIFtcIjRcIiwgMjBdLCBbXCI1XCIsIDIxXSwgWyc2JywgMjJdLCBbXCI3XCIsIDIzXSwgW1wiOFwiLCAyNF0sIFtcIjlcIiwgMjVdLCBbXCI6XCIsIDI2XSwgW1wiO1wiLCAyN10sIFtcIjxcIiwgMjhdLCBbXCI9XCIsIDI5XSxcclxuICAgIFtcIj5cIiwgMzBdLCBbXCI/XCIsIDMxXSwgWydAJywgMzJdLCBbXCJBXCIsIDMzXSwgW1wiQlwiLCAzNF0sIFtcIkNcIiwgMzVdLCBbXCJEXCIsIDM2XSwgW1wiRVwiLCAzN10sIFtcIkZcIiwgMzhdLCBbXCJHXCIsIDM5XSxcclxuICAgIFtcIkhcIiwgNDBdLCBbXCJJXCIsIDQxXSwgWydKJywgNDJdLCBbXCJLXCIsIDQzXSwgW1wiTFwiLCA0NF0sIFtcIk1cIiwgNDVdLCBbXCJOXCIsIDQ2XSwgW1wiT1wiLCA0N10sIFtcIlBcIiwgNDhdLCBbXCJRXCIsIDQ5XSxcclxuICAgIFtcIlJcIiwgNTBdLCBbXCJTXCIsIDUxXSwgWydUJywgNTJdLCBbXCJVXCIsIDUzXSwgW1wiVlwiLCA1NF0sIFtcIldcIiwgNTVdLCBbXCJYXCIsIDU2XSwgW1wiWVwiLCA1N10sIFtcIlpcIiwgNThdLCBbXCJbXCIsIDU5XSxcclxuICAgIFtcIlxcXFxcIiwgNjBdLCBbXCJdXCIsIDYxXSwgWydeJywgNjJdLCBbXCJfXCIsIDYzXSwgW1wiYFwiLCA2NF0sIFtcImFcIiwgNjVdLCBbXCJiXCIsIDY2XSwgW1wiY1wiLCA2N10sIFtcImRcIiwgNjhdLCBbXCJlXCIsIDY5XSxcclxuICAgIFtcImZcIiwgNzBdLCBbXCJnXCIsIDcxXSwgWydoJywgNzJdLCBbXCJpXCIsIDczXSwgW1wialwiLCA3NF0sIFtcImtcIiwgNzVdLCBbXCJsXCIsIDc2XSwgW1wibVwiLCA3N10sIFtcIm5cIiwgNzhdLCBbXCJvXCIsIDc5XSxcclxuICAgIFtcInBcIiwgODBdLCBbXCJxXCIsIDgxXSwgWydyJywgODJdLCBbXCJzXCIsIDgzXSwgW1widFwiLCA4NF0sIFtcInVcIiwgODVdLCBbXCJ2XCIsIDg2XSwgW1wid1wiLCA4N10sIFtcInhcIiwgODhdLCBbXCJ5XCIsIDg5XSxcclxuICAgIFtcInpcIiwgOTBdLCBbXCJ7XCIsIDk5XSwgWyd8JywgOTJdLCBbXCJ9XCIsIDkzXSwgW1wiflwiLCA5NF0sXHJcbl0pO1xyXG5mdW5jdGlvbiBDaGFyQ2hhbmdlKGFyZ19uYW1lKSB7XHJcbiAgICByZXR1cm4gQ2hhck1hcC5nZXQoYXJnX25hbWUpO1xyXG59XHJcbnZhciBNb2RlbENyZWF0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNb2RlbENyZWF0ZXIoYXJnX2dhcmFwaGljRGV2aWNlLCBhcmdfcmVzb3VyY2VDb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLnJlc291cmNlQ29udGFpbmVyID0gYXJnX3Jlc291cmNlQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZSA9IGFyZ19nYXJhcGhpY0RldmljZTtcclxuICAgICAgICB0aGlzLmZvbnRVVkNvbnRhaW5lciA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuICAgIE1vZGVsQ3JlYXRlci5wcm90b3R5cGUuQ3JlYXRlTW9kZWwgPSBmdW5jdGlvbiAoaXNMaWdodGluZywgaXNCaWxsQm9hcmQsIGdlb21ldHJ5UGF0aCwgbWF0ZXJpYWxQYXRoLCBzaGFkZXJQYXRoLCBhcmdfdHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdmFyIG1vZGVsID0gbmV3IE1vZGVsXzEuZGVmYXVsdChpc0xpZ2h0aW5nLCBpc0JpbGxCb2FyZCk7XHJcbiAgICAgICAgbW9kZWwuSW5pdGlhbGl6ZV9nZW9tKHRoaXMuZ3JhcGhpY0RldmljZSwgdGhpcy5yZXNvdXJjZUNvbnRhaW5lci5HZXRHZW9tZXRyeShnZW9tZXRyeVBhdGgpLCB0aGlzLnJlc291cmNlQ29udGFpbmVyLkdldE1hdGVyaWFsKG1hdGVyaWFsUGF0aCksIHRoaXMucmVzb3VyY2VDb250YWluZXIuR2V0U2hhZGVyKHNoYWRlclBhdGgpLCBhcmdfdHJhbnNmb3JtKTtcclxuICAgICAgICByZXR1cm4gbW9kZWw7XHJcbiAgICB9O1xyXG4gICAgTW9kZWxDcmVhdGVyLnByb3RvdHlwZS5DcmVhdGVNb2RlbEZyb21NZXNoID0gZnVuY3Rpb24gKGlzTGlnaHRpbmcsIGlzQmlsbEJvYXJkLCBtZXNoUGF0aCwgc2hhZGVyUGF0aCwgYXJnX3RyYW5zZm9ybSkge1xyXG4gICAgICAgIHZhciBtb2RlbCA9IG5ldyBNb2RlbF8xLmRlZmF1bHQoaXNMaWdodGluZywgaXNCaWxsQm9hcmQpO1xyXG4gICAgICAgIG1vZGVsLkluaXRpYWxpemVfbWVzaCh0aGlzLmdyYXBoaWNEZXZpY2UsIHRoaXMucmVzb3VyY2VDb250YWluZXIuR2V0TWVzaChtZXNoUGF0aCksIHRoaXMucmVzb3VyY2VDb250YWluZXIuR2V0U2hhZGVyKHNoYWRlclBhdGgpLCBhcmdfdHJhbnNmb3JtKTtcclxuICAgICAgICByZXR1cm4gbW9kZWw7XHJcbiAgICB9O1xyXG4gICAgTW9kZWxDcmVhdGVyLnByb3RvdHlwZS5DcmVhdGVNb2RlbEZyb21UZXh0ID0gZnVuY3Rpb24gKGlzQmlsbEJvYXJkLCBhcmdfY29sb3IsIHRleHQsIGZvbnRUZXh0dXJlUGF0aCwgc2hhZGVyUGF0aCwgYXJnX3RyYW5zZm9ybSkge1xyXG4gICAgICAgIHZhciBtb2RlbCA9IG5ldyBUZXh0TW9kZWxfMS5kZWZhdWx0KGlzQmlsbEJvYXJkKTtcclxuICAgICAgICB2YXIgbWF0ZXJpYWxOYW1lID0gYXJnX2NvbG9yLmRhdGFbMF0gKyBcIlwiICsgYXJnX2NvbG9yLmRhdGFbMV0gKyBcIlwiICsgYXJnX2NvbG9yLmRhdGFbMl0gKyBcIlwiICsgYXJnX2NvbG9yLmRhdGFbM10gKyBcIlwiICsgZm9udFRleHR1cmVQYXRoO1xyXG4gICAgICAgIHZhciBtYXRlcmlhbCA9IHRoaXMucmVzb3VyY2VDb250YWluZXIuR2V0TWF0ZXJpYWwobWF0ZXJpYWxOYW1lKTtcclxuICAgICAgICBpZiAobWF0ZXJpYWwgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBtYXRlcmlhbCA9IHRoaXMucmVzb3VyY2VDb250YWluZXIuQWRkTWF0ZXJpYWwoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVNYXRlcmlhbChhcmdfY29sb3IsIHRoaXMuZ3JhcGhpY0RldmljZSwgW3RoaXMucmVzb3VyY2VDb250YWluZXIuR2V0VGV4dHVyZShmb250VGV4dHVyZVBhdGgpXSksIG1hdGVyaWFsTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBnZW9tZXRyeVBhdGggPSBcIlRleHQ6XCIgKyB0ZXh0Lmxlbmd0aDtcclxuICAgICAgICB2YXIgZ2VvbWV0cnkgPSB0aGlzLnJlc291cmNlQ29udGFpbmVyLkdldEdlb21ldHJ5KGdlb21ldHJ5UGF0aCk7XHJcbiAgICAgICAgaWYgKGdlb21ldHJ5ID09IG51bGwpIHtcclxuICAgICAgICAgICAgZ2VvbWV0cnkgPSB0aGlzLnJlc291cmNlQ29udGFpbmVyLkFkZEdlb21ldHJ5KFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlR2VvbWV0cnkoR2VvbWV0cnlHZW5lcmF0b3JfMS5kZWZhdWx0LkNyZWF0ZVRleHRHZW9tZXRyeSh0ZXh0Lmxlbmd0aCksIHRydWUsIGZhbHNlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKSwgZ2VvbWV0cnlQYXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbW9kZWwuSW5pdGlhbGl6ZV9nZW9tKHRoaXMuZ3JhcGhpY0RldmljZSwgZ2VvbWV0cnksIG1hdGVyaWFsLCB0aGlzLnJlc291cmNlQ29udGFpbmVyLkdldFNoYWRlcihzaGFkZXJQYXRoKSwgYXJnX3RyYW5zZm9ybSk7XHJcbiAgICAgICAgdmFyIHV2ID0gdGhpcy5mb250VVZDb250YWluZXJbdGV4dF07XHJcbiAgICAgICAgaWYgKCF1dikge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICB2YXIgeFVuaXQgPSAoMS4wIC8gMTI4LjApICogNztcclxuICAgICAgICAgICAgdmFyIHlVbml0ID0gMS4wIC8gMTQuMDtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbnVtID0gQ2hhckNoYW5nZSh0ZXh0W2ldKTtcclxuICAgICAgICAgICAgICAgIHZhciB4ID0gbnVtICUgMTg7XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IE1hdGguZmxvb3IobnVtIC8gMTgpO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKHggKiB4VW5pdCwgKHkgKyAxKSAqIHlVbml0LCAoeCArIDEpICogeFVuaXQsICh5ICsgMSkgKiB5VW5pdCwgeCAqIHhVbml0LCB5ICogeVVuaXQsICh4ICsgMSkgKiB4VW5pdCwgeSAqIHlVbml0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1diA9IHRoaXMuZ3JhcGhpY0RldmljZS5DcmVhdGVWQk8oZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9udFVWQ29udGFpbmVyW3RleHRdID0gdXY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1vZGVsLlNldFVWRGF0YSh1dik7XHJcbiAgICAgICAgcmV0dXJuIG1vZGVsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNb2RlbENyZWF0ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1vZGVsQ3JlYXRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIElEXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vSURcIikpO1xyXG52YXIgTGF5ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBMYXllcigpIHtcclxuICAgICAgICB0aGlzLmFyeV9JRHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmFyeV9JTW9kZWxzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5hcnlfbGlnaHRzID0gbmV3IEFycmF5KCk7XHJcbiAgICB9XHJcbiAgICBMYXllci5wcm90b3R5cGUuU2V0TGlnaHQgPSBmdW5jdGlvbiAoYXJnX2xpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5hcnlfbGlnaHRzLnB1c2goYXJnX2xpZ2h0KTtcclxuICAgICAgICByZXR1cm4gYXJnX2xpZ2h0O1xyXG4gICAgfTtcclxuICAgIExheWVyLnByb3RvdHlwZS5SZWdpc3QgPSBmdW5jdGlvbiAoYXJnX3JlZ2lzdE9iaikge1xyXG4gICAgICAgIGlmICh0aGlzLmFyeV9saWdodHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhcmdfcmVnaXN0T2JqLlNldExpZ2h0KHRoaXMuYXJ5X2xpZ2h0c1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXJ5X0lNb2RlbHMucHVzaChhcmdfcmVnaXN0T2JqKTtcclxuICAgICAgICB2YXIgaWQgPSBuZXcgSURfMS5kZWZhdWx0KHRoaXMuYXJ5X0lNb2RlbHMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgdGhpcy5hcnlfSURzLnB1c2goaWQpO1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH07XHJcbiAgICBMYXllci5wcm90b3R5cGUuVW5SZWdpc3QgPSBmdW5jdGlvbiAoYXJnX0lEKSB7XHJcbiAgICAgICAgdGhpcy5hcnlfSU1vZGVscy5zcGxpY2UoYXJnX0lELm51bSwgMSk7XHJcbiAgICAgICAgdGhpcy5hcnlfSURzLnNwbGljZShhcmdfSUQubnVtLCAxKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gYXJnX0lELm51bSAtIDE7IGkgPCB0aGlzLmFyeV9JRHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnlfSURzW2ldLm51bS0tO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMYXllci5wcm90b3R5cGUuRHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFyeV9JTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGltb2RlbCkgeyByZXR1cm4gaW1vZGVsLkRyYXcoKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgTGF5ZXIucHJvdG90eXBlLlJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hcnlfSURzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5hcnlfSU1vZGVscy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuYXJ5X2xpZ2h0cy5sZW5ndGggPSAwO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMYXllcjtcclxufSgpKTtcclxudmFyIFJlbmRlcmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVuZGVyZXIoKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmxheWVycy5wdXNoKG5ldyBMYXllcigpKTtcclxuICAgIH1cclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5SZWdpc3QgPSBmdW5jdGlvbiAoYXJnX3JlZ2lzdE9iaiwgbGF5ZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5sYXllcnMubGVuZ3RoIDw9IGxheWVyKSB7XHJcbiAgICAgICAgICAgIGxheWVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzW2xheWVyXS5SZWdpc3QoYXJnX3JlZ2lzdE9iaik7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLlVuUmVnaXN0ID0gZnVuY3Rpb24gKGFyZ19JRCwgbGF5ZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5sYXllcnMubGVuZ3RoIDw9IGxheWVyKSB7XHJcbiAgICAgICAgICAgIGxheWVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYXllcnNbbGF5ZXJdLlVuUmVnaXN0KGFyZ19JRCk7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLlNldExpZ2h0ID0gZnVuY3Rpb24gKGFyZ19saWdodCwgbGF5ZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5sYXllcnMubGVuZ3RoIDw9IGxheWVyKSB7XHJcbiAgICAgICAgICAgIGxheWVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzW2xheWVyXS5TZXRMaWdodChhcmdfbGlnaHQpO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5BZGRMYXllciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxheWVycy5wdXNoKG5ldyBMYXllcigpKTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuRHJhdyA9IGZ1bmN0aW9uIChjYW1lcmEpIHtcclxuICAgICAgICBpZiAodGhpcy5sYXllcnMubGVuZ3RoIDw9IGNhbWVyYS5sYXllcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbWVyYS5BdHRhY2goKTtcclxuICAgICAgICB0aGlzLmxheWVyc1tjYW1lcmEubGF5ZXJdLkRyYXcoKTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuUmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChsYXllcikgeyByZXR1cm4gbGF5ZXIuUmVsZWFzZSgpOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVuZGVyZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJlbmRlcmVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUmVzb3VyY2VDcmVhdGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1Rvb2wvUmVzb3VyY2VDcmVhdGVyXCIpKTtcclxudmFyIFJlc291cmNlQ29udGFpbmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVzb3VyY2VDb250YWluZXIoKSB7XHJcbiAgICAgICAgdGhpcy5pR2VvbWV0cmllcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmlNYXRlcmlhbHMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5pU2hhZGVycyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmlTb3VuZHMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5pVGV4dHVyZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5pTWVzaGVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ09iamVjdENvdW50ID0gMDtcclxuICAgIH1cclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5HZXRTaGFkZXIgPSBmdW5jdGlvbiAoYXJnX2tleSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlTaGFkZXJzW2FyZ19rZXldKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pU2hhZGVyc1thcmdfa2V5XTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwia2V5IGlzIG5vdCBmb25kLlwiKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuQWRkU2hhZGVyID0gZnVuY3Rpb24gKGFyZ192YWx1ZSwgYXJnX2tleSkge1xyXG4gICAgICAgIHRoaXMuaVNoYWRlcnNbYXJnX2tleV0gPSBhcmdfdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGFyZ192YWx1ZTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuUmVtb3ZlU2hhZGVyID0gZnVuY3Rpb24gKGFyZ19rZXkpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5pU2hhZGVyc1thcmdfa2V5XTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuR2V0VGV4dHVyZSA9IGZ1bmN0aW9uIChhcmdfa2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaVRleHR1cmVzW2FyZ19rZXldKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pVGV4dHVyZXNbYXJnX2tleV07XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuQWRkVGV4dHVyZSA9IGZ1bmN0aW9uIChhcmdfdmFsdWUsIGFyZ19rZXkpIHtcclxuICAgICAgICB0aGlzLmlUZXh0dXJlc1thcmdfa2V5XSA9IGFyZ192YWx1ZTtcclxuICAgICAgICBhcmdfdmFsdWUuU2V0Q29udGFpbmVyKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiBhcmdfdmFsdWU7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLkFkZFRleHR1cmVGcm9tRmlsZSA9IGZ1bmN0aW9uIChhcmdfdmFsdWUsIGFyZ19kZXZpY2UpIHtcclxuICAgICAgICBpZiAodGhpcy5pVGV4dHVyZXNbYXJnX3ZhbHVlXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pVGV4dHVyZXNbYXJnX3ZhbHVlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRleCA9IFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlVGV4dHVyZShhcmdfdmFsdWUsIGFyZ19kZXZpY2UpO1xyXG4gICAgICAgIHRleC5TZXRDb250YWluZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5pVGV4dHVyZXNbYXJnX3ZhbHVlXSA9IHRleDtcclxuICAgICAgICByZXR1cm4gdGhpcy5pVGV4dHVyZXNbYXJnX3ZhbHVlXTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuUmVtb3ZlVGV4dHVyZSA9IGZ1bmN0aW9uIChhcmdfa2V5KSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuaVRleHR1cmVzW2FyZ19rZXldO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5HZXRNYXRlcmlhbCA9IGZ1bmN0aW9uIChhcmdfa2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaU1hdGVyaWFsc1thcmdfa2V5XSlcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaU1hdGVyaWFsc1thcmdfa2V5XTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5BZGRNYXRlcmlhbCA9IGZ1bmN0aW9uIChhcmdfdmFsdWUsIGFyZ19rZXkpIHtcclxuICAgICAgICB0aGlzLmlNYXRlcmlhbHNbYXJnX2tleV0gPSBhcmdfdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGFyZ192YWx1ZTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuQWRkTWF0ZXJpYWxGcm9tRmlsZSA9IGZ1bmN0aW9uIChhcmdfdmFsdWUsIGFyZ19kZXZpY2UpIHtcclxuICAgICAgICBpZiAodGhpcy5pTWF0ZXJpYWxzW2FyZ192YWx1ZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaU1hdGVyaWFsc1thcmdfdmFsdWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlNYXRlcmlhbHNbYXJnX3ZhbHVlXSA9IFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlTWF0ZXJpYWxGcm9tRmlsZShhcmdfdmFsdWUsIHRoaXMsIGFyZ19kZXZpY2UpO1xyXG4gICAgICAgIHRoaXMuTG9hZFN0YXJ0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaU1hdGVyaWFsc1thcmdfdmFsdWVdO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5SZW1vdmVNYXRlcmlhbCA9IGZ1bmN0aW9uIChhcmdfa2V5KSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuaU1hdGVyaWFsc1thcmdfa2V5XTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuR2V0R2VvbWV0cnkgPSBmdW5jdGlvbiAoYXJnX2tleSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlHZW9tZXRyaWVzW2FyZ19rZXldKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pR2VvbWV0cmllc1thcmdfa2V5XTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5BZGRHZW9tZXRyeSA9IGZ1bmN0aW9uIChhcmdfdmFsdWUsIGFyZ19rZXkpIHtcclxuICAgICAgICB0aGlzLmlHZW9tZXRyaWVzW2FyZ19rZXldID0gYXJnX3ZhbHVlO1xyXG4gICAgICAgIHJldHVybiBhcmdfdmFsdWU7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLlJlbW92ZUdlb21ldHJ5ID0gZnVuY3Rpb24gKGFyZ19rZXkpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5pR2VvbWV0cmllc1thcmdfa2V5XTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuR2V0TWVzaCA9IGZ1bmN0aW9uIChhcmdfa2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaU1lc2hlc1thcmdfa2V5XSlcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaU1lc2hlc1thcmdfa2V5XTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5BZGRNZXNoID0gZnVuY3Rpb24gKGFyZ192YWx1ZSwgYXJnX2tleSkge1xyXG4gICAgICAgIHRoaXMuaU1lc2hlc1thcmdfa2V5XSA9IGFyZ192YWx1ZTtcclxuICAgICAgICByZXR1cm4gYXJnX3ZhbHVlO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5SZW1vdmVNZXNoID0gZnVuY3Rpb24gKGFyZ19rZXkpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5pTWVzaGVzW2FyZ19rZXldO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5HZXRTb3VuZCA9IGZ1bmN0aW9uIChhcmdfa2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaVNvdW5kc1thcmdfa2V5XSlcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaVNvdW5kc1thcmdfa2V5XTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5BZGRTb3VuZCA9IGZ1bmN0aW9uIChhcmdfdmFsdWUsIGFyZ19rZXkpIHtcclxuICAgICAgICB0aGlzLmlTb3VuZHNbYXJnX2tleV0gPSBhcmdfdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGFyZ192YWx1ZTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuQWRkU291bmRGcm9tRmlsZSA9IGZ1bmN0aW9uIChhcmdfdmFsdWUsIGFyZ19rZXkpIHtcclxuICAgICAgICB0aGlzLmlTb3VuZHNbYXJnX2tleV0gPSBSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZVNvdW5kKGFyZ192YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaVNvdW5kc1thcmdfa2V5XTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuUmVtb3ZlU291bmQgPSBmdW5jdGlvbiAoYXJnX2tleSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmlTb3VuZHNbYXJnX2tleV07XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLkxvYWRFbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nT2JqZWN0Q291bnQtLTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuTG9hZFN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ09iamVjdENvdW50Kys7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLkdldExvYWRpbmdPYmpDb3VudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2FkaW5nT2JqZWN0Q291bnQgPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZGluZ09iamVjdENvdW50O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZXNvdXJjZUNvbnRhaW5lcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUmVzb3VyY2VDb250YWluZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBGcmFtZUJ1ZmZlclRleHR1cmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGcmFtZUJ1ZmZlclRleHR1cmUoYXJnX2dyYXBoaWNEZXZpY2UsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlID0gYXJnX2dyYXBoaWNEZXZpY2U7XHJcbiAgICAgICAgLy8g44OV44Os44O844Og44OQ44OD44OV44Kh44Gu55Sf5oiQXHJcbiAgICAgICAgdGhpcy5mcmFtZUJ1ZmZlciA9IHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmNyZWF0ZUZyYW1lYnVmZmVyKCk7XHJcbiAgICAgICAgLy8g44OV44Os44O844Og44OQ44OD44OV44Kh44KSV2ViR0zjgavjg5DjgqTjg7Pjg4lcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5iaW5kRnJhbWVidWZmZXIodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuRlJBTUVCVUZGRVIsIHRoaXMuZnJhbWVCdWZmZXIpO1xyXG4gICAgICAgIC8vIOa3seW6puODkOODg+ODleOCoeeUqOODrOODs+ODgOODvOODkOODg+ODleOCoeOBrueUn+aIkOOBqOODkOOCpOODs+ODiVxyXG4gICAgICAgIHRoaXMuZGVwdGhCdWZmZXIgPSB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5jcmVhdGVSZW5kZXJidWZmZXIoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5iaW5kUmVuZGVyYnVmZmVyKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlJFTkRFUkJVRkZFUiwgdGhpcy5kZXB0aEJ1ZmZlcik7XHJcbiAgICAgICAgLy8g44Os44Oz44OA44O844OQ44OD44OV44Kh44KS5rex5bqm44OQ44OD44OV44Kh44Go44GX44Gm6Kit5a6aXHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQucmVuZGVyYnVmZmVyU3RvcmFnZSh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5SRU5ERVJCVUZGRVIsIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LkRFUFRIX0NPTVBPTkVOVDE2LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAvLyDjg5Xjg6zjg7zjg6Djg5Djg4Pjg5XjgqHjgavjg6zjg7Pjg4Djg7zjg5Djg4Pjg5XjgqHjgpLplqLpgKPku5jjgZHjgotcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5mcmFtZWJ1ZmZlclJlbmRlcmJ1ZmZlcih0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5GUkFNRUJVRkZFUiwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuREVQVEhfQVRUQUNITUVOVCwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuUkVOREVSQlVGRkVSLCB0aGlzLmRlcHRoQnVmZmVyKTtcclxuICAgICAgICAvLyDjg5Xjg6zjg7zjg6Djg5Djg4Pjg5XjgqHnlKjjg4bjgq/jgrnjg4Hjg6Pjga7nlJ/miJBcclxuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgICAgICAgLy8g44OV44Os44O844Og44OQ44OD44OV44Kh55So44Gu44OG44Kv44K544OB44Oj44KS44OQ44Kk44Oz44OJXHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuYmluZFRleHR1cmUodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVEVYVFVSRV8yRCwgdGhpcy5kYXRhKTtcclxuICAgICAgICAvLyDjg5Xjg6zjg7zjg6Djg5Djg4Pjg5XjgqHnlKjjga7jg4bjgq/jgrnjg4Hjg6Pjgavjgqvjg6njg7znlKjjga7jg6Hjg6Ljg6rpoJjln5/jgpLnorrkv51cclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC50ZXhJbWFnZTJEKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRFWFRVUkVfMkQsIDAsIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlJHQkEsIHdpZHRoLCBoZWlnaHQsIDAsIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlJHQkEsIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlVOU0lHTkVEX0JZVEUsIG51bGwpO1xyXG4gICAgICAgIC8vIOODhuOCr+OCueODgeODo+ODkeODqeODoeODvOOCv1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnRleFBhcmFtZXRlcmkodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVEVYVFVSRV8yRCwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVEVYVFVSRV9NQUdfRklMVEVSLCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5MSU5FQVIpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnRleFBhcmFtZXRlcmkodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVEVYVFVSRV8yRCwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVEVYVFVSRV9NSU5fRklMVEVSLCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5MSU5FQVIpO1xyXG4gICAgICAgIC8vIOODleODrOODvOODoOODkOODg+ODleOCoeOBq+ODhuOCr+OCueODgeODo+OCkumWoumAo+S7mOOBkeOCi1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmZyYW1lYnVmZmVyVGV4dHVyZTJEKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LkZSQU1FQlVGRkVSLCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5DT0xPUl9BVFRBQ0hNRU5UMCwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVEVYVFVSRV8yRCwgdGhpcy5kYXRhLCAwKTtcclxuICAgICAgICAvLyDlkITnqK7jgqrjg5bjgrjjgqfjgq/jg4jjga7jg5DjgqTjg7Pjg4njgpLop6PpmaRcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5iaW5kVGV4dHVyZSh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5iaW5kUmVuZGVyYnVmZmVyKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlJFTkRFUkJVRkZFUiwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LkZSQU1FQlVGRkVSLCBudWxsKTtcclxuICAgIH1cclxuICAgIEZyYW1lQnVmZmVyVGV4dHVyZS5wcm90b3R5cGUuU2V0Q29udGFpbmVyID0gZnVuY3Rpb24gKHJlc291cmNlQ29udGFpbmVyKSB7XHJcbiAgICB9O1xyXG4gICAgRnJhbWVCdWZmZXJUZXh0dXJlLnByb3RvdHlwZS5Mb2FkZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgRnJhbWVCdWZmZXJUZXh0dXJlLnByb3RvdHlwZS5Jc0xvYWRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBGcmFtZUJ1ZmZlclRleHR1cmUucHJvdG90eXBlLkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgRnJhbWVCdWZmZXJUZXh0dXJlLnByb3RvdHlwZS5BdHRhY2ggPSBmdW5jdGlvbiAoc2xvdCkge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmFjdGl2ZVRleHR1cmUodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVEVYVFVSRTApO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmJpbmRUZXh0dXJlKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRFWFRVUkVfMkQsIHRoaXMuZGF0YSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybTFpKHRoaXMuZ3JhcGhpY0RldmljZS5zaGFkZXIuR2V0VGV4dHVyZVNsb3Qoc2xvdCksIHNsb3QpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBGcmFtZUJ1ZmZlclRleHR1cmU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEZyYW1lQnVmZmVyVGV4dHVyZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEdlb21ldHJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2VvbWV0cnkoZGF0YSwgaXNVViwgaXNOb3JtYWwsIGlzQ29sb3IsIGFyZ19kZXZpY2UpIHtcclxuICAgICAgICB0aGlzLmRldmljZSA9IGFyZ19kZXZpY2U7XHJcbiAgICAgICAgdGhpcy52Ym9MaXN0ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy52Ym9MaXN0LnB1c2goYXJnX2RldmljZS5DcmVhdGVWQk8oZGF0YS5wKSk7XHJcbiAgICAgICAgaWYgKGlzVVYpIHtcclxuICAgICAgICAgICAgdGhpcy52Ym9MaXN0LnB1c2goYXJnX2RldmljZS5DcmVhdGVWQk8oZGF0YS51dikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNOb3JtYWwpIHtcclxuICAgICAgICAgICAgdGhpcy52Ym9MaXN0LnB1c2goYXJnX2RldmljZS5DcmVhdGVWQk8oZGF0YS5uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0NvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmJvTGlzdC5wdXNoKGFyZ19kZXZpY2UuQ3JlYXRlVkJPKGRhdGEuYykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlibyA9IGFyZ19kZXZpY2UuQ3JlYXRlSUJPKGRhdGEuaSk7XHJcbiAgICAgICAgdGhpcy5pbmRleFNpemUgPSBkYXRhLmkubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuc3Vic2V0ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5zdWJzZXQucHVzaChkYXRhLmkubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIEdlb21ldHJ5LnByb3RvdHlwZS5DaGFuZ2VWQk8gPSBmdW5jdGlvbiAodmJvLCBzbG90KSB7XHJcbiAgICAgICAgdGhpcy52Ym9MaXN0W3Nsb3RdID0gdmJvO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5LnByb3RvdHlwZS5HZXRJbmRleFNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXhTaXplO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5LnByb3RvdHlwZS5EcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZGV2aWNlLlNldFZCTyh0aGlzLnZib0xpc3QpO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlLmNvbnRleHQuYmluZEJ1ZmZlcih0aGlzLmRldmljZS5jb250ZXh0LkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmlibyk7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnkucHJvdG90eXBlLlNldFN1YnNldCA9IGZ1bmN0aW9uIChhcmdfc3Vic2V0KSB7XHJcbiAgICAgICAgdGhpcy5zdWJzZXQgPSBhcmdfc3Vic2V0O1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5LnByb3RvdHlwZS5HZXRTdWJTZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Vic2V0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHZW9tZXRyeTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gR2VvbWV0cnk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBFeFBhcmFtZXRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEV4UGFyYW1ldGVyKGFyZ19zbG90LCBhcmdfc2l6ZSwgYXJnX3BhcmFtKSB7XHJcbiAgICAgICAgdGhpcy5zbG90ID0gYXJnX3Nsb3Q7XHJcbiAgICAgICAgdGhpcy5wYXJhbSA9IGFyZ19wYXJhbTtcclxuICAgICAgICB0aGlzLnNpemUgPSBhcmdfc2l6ZTtcclxuICAgICAgICBzd2l0Y2ggKGFyZ19zaXplKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYXRhY2hGdW5jID0gdGhpcy5BdGFjaDFmO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYXRhY2hGdW5jID0gdGhpcy5BdGFjaDJmO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMuYXRhY2hGdW5jID0gdGhpcy5BdGFjaDNmO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYXRhY2hGdW5jID0gdGhpcy5BdGFjaDRmO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTY6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0YWNoRnVuYyA9IHRoaXMuQXRhY2hNYXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBFeFBhcmFtZXRlci5wcm90b3R5cGUuQXRhY2gxZiA9IGZ1bmN0aW9uIChkZXZpY2UpIHtcclxuICAgICAgICBkZXZpY2UuY29udGV4dC51bmlmb3JtMWZ2KGRldmljZS5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1t0aGlzLnNsb3RdLCB0aGlzLnBhcmFtLmRhdGEpO1xyXG4gICAgfTtcclxuICAgIEV4UGFyYW1ldGVyLnByb3RvdHlwZS5BdGFjaDJmID0gZnVuY3Rpb24gKGRldmljZSkge1xyXG4gICAgICAgIGRldmljZS5jb250ZXh0LnVuaWZvcm0yZnYoZGV2aWNlLnNoYWRlci51bmlmb3JtTG9jYXRpb25zW3RoaXMuc2xvdF0sIHRoaXMucGFyYW0uZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgRXhQYXJhbWV0ZXIucHJvdG90eXBlLkF0YWNoM2YgPSBmdW5jdGlvbiAoZGV2aWNlKSB7XHJcbiAgICAgICAgZGV2aWNlLmNvbnRleHQudW5pZm9ybTNmdihkZXZpY2Uuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbdGhpcy5zbG90XSwgdGhpcy5wYXJhbS5kYXRhKTtcclxuICAgIH07XHJcbiAgICBFeFBhcmFtZXRlci5wcm90b3R5cGUuQXRhY2g0ZiA9IGZ1bmN0aW9uIChkZXZpY2UpIHtcclxuICAgICAgICBkZXZpY2UuY29udGV4dC51bmlmb3JtNGZ2KGRldmljZS5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1t0aGlzLnNsb3RdLCB0aGlzLnBhcmFtLmRhdGEpO1xyXG4gICAgfTtcclxuICAgIEV4UGFyYW1ldGVyLnByb3RvdHlwZS5BdGFjaE1hdCA9IGZ1bmN0aW9uIChkZXZpY2UpIHtcclxuICAgICAgICBkZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KGRldmljZS5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1t0aGlzLnNsb3RdLCBmYWxzZSwgdGhpcy5wYXJhbS5kYXRhKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRXhQYXJhbWV0ZXI7XHJcbn0oKSk7XHJcbnZhciBNYXRlcmlhbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hdGVyaWFsKCkge1xyXG4gICAgfVxyXG4gICAgTWF0ZXJpYWwucHJvdG90eXBlLlNldFBhcmFtZXRlciA9IGZ1bmN0aW9uIChhcmdfYW1iaWVudCwgYXJnX2RldmljZSwgYXJnX2FyeV90ZXh0dXJlLCBhcmdfYXJ5X2V4UGFybXMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYW1iaWVudENvbG9yID0gYXJnX2FtYmllbnQ7XHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSBhcmdfZGV2aWNlO1xyXG4gICAgICAgIGlmIChhcmdfYXJ5X3RleHR1cmUpXHJcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZXMgPSBhcmdfYXJ5X3RleHR1cmU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmVzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5leFBhcmFtcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGlmIChhcmdfYXJ5X2V4UGFybXMpIHtcclxuICAgICAgICAgICAgYXJnX2FyeV9leFBhcm1zLmZvcmVhY2goZnVuY3Rpb24gKHBhcmFtKSB7IHJldHVybiBfdGhpcy5BZGRFeFBhcmFtKHBhcmFtLm4sIHBhcmFtLnMsIHBhcmFtLnApOyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTWF0ZXJpYWwucHJvdG90eXBlLlNldFRleHR1cmUgPSBmdW5jdGlvbiAoYXJnX3RleHR1cmUsIHNsb3QpIHtcclxuICAgICAgICB0aGlzLnRleHR1cmVzW3Nsb3RdID0gYXJnX3RleHR1cmU7XHJcbiAgICB9O1xyXG4gICAgTWF0ZXJpYWwucHJvdG90eXBlLkFkZEV4UGFyYW0gPSBmdW5jdGlvbiAoYXJnX3Nsb3QsIGFyZ19zaXplLCBhcmdfcGFyYW0pIHtcclxuICAgICAgICB0aGlzLmV4UGFyYW1zLnB1c2gobmV3IEV4UGFyYW1ldGVyKGFyZ19zbG90LCBhcmdfc2l6ZSwgYXJnX3BhcmFtKSk7XHJcbiAgICB9O1xyXG4gICAgTWF0ZXJpYWwucHJvdG90eXBlLkF0dGFjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5kZXZpY2Uuc2hhZGVyLmFtYmllbnRTbG90KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlLmNvbnRleHQudW5pZm9ybTRmdih0aGlzLmRldmljZS5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1t0aGlzLmRldmljZS5zaGFkZXIuYW1iaWVudFNsb3RdLCB0aGlzLmFtYmllbnRDb2xvci54eXp3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRleHR1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHR1cmVzW2ldICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVzW2ldLkF0dGFjaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV4UGFyYW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhQYXJhbXNbaV0uYXRhY2hGdW5jKHRoaXMuZGV2aWNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1hdGVyaWFsO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBNYXRlcmlhbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIE1lc2ggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNZXNoKCkge1xyXG4gICAgfVxyXG4gICAgTWVzaC5wcm90b3R5cGUuU2V0UGFyYW1ldGVyID0gZnVuY3Rpb24gKGFyZ19nZW9tZXRyeSwgYXJnX2FyeV9tYXRlcmlhbHMpIHtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gYXJnX2dlb21ldHJ5O1xyXG4gICAgICAgIHRoaXMuYXJ5X21hdGVyaWFscyA9IGFyZ19hcnlfbWF0ZXJpYWxzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNZXNoO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBNZXNoO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgRmlsZUxvYWRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9Ub29sL0ZpbGVMb2FkZXJcIikpO1xyXG5mdW5jdGlvbiBHZXRTdHJpZGUoYXJnX3R5cGUpIHtcclxuICAgIHN3aXRjaCAoYXJnX3R5cGUpIHtcclxuICAgICAgICBjYXNlIFwidmVjMlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gMjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInZlYzNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ2ZWM0XCI6XHJcbiAgICAgICAgICAgIHJldHVybiA0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiaW50XCI6XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZmxvYXRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJUeXBlIHVuZGlmaW5lZC5cIik7XHJcbiAgICByZXR1cm4gMDtcclxufVxyXG52YXIgU2hhZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2hhZGVyKHZzU291cmNlLCBmc1NvdXJjZSwgYXJnX2dyYXBoaWNEZXZpY2UpIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UgPSBhcmdfZ3JhcGhpY0RldmljZTtcclxuICAgICAgICB2YXIgdnNEYXRhID0gRmlsZUxvYWRlcl8xLmRlZmF1bHQuTG9hZFRleHQodnNTb3VyY2UpO1xyXG4gICAgICAgIHZhciB2X3NoYWRlciA9IHRoaXMuZ3JhcGhpY0RldmljZS5DcmVhdGVWZXJ0ZXhTaGFkZXIodnNEYXRhKTtcclxuICAgICAgICB2YXIgZnNEYXRhID0gRmlsZUxvYWRlcl8xLmRlZmF1bHQuTG9hZFRleHQoZnNTb3VyY2UpO1xyXG4gICAgICAgIHZhciBmX3NoYWRlciA9IHRoaXMuZ3JhcGhpY0RldmljZS5DcmVhdGVGcmFnbWVudFNoYWRlcihmc0RhdGEpO1xyXG4gICAgICAgIHRoaXMuYW1iaWVudFNsb3QgPSAtMTtcclxuICAgICAgICB0aGlzLmxpZ2h0UG9zU2xvdCA9IC0xO1xyXG4gICAgICAgIHRoaXMubGlnaHREaXJTbG90ID0gLTE7XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtT2JqZWN0ID0gdGhpcy5ncmFwaGljRGV2aWNlLkNyZWF0ZVByb2dyYW0odl9zaGFkZXIsIGZfc2hhZGVyKTtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlU3RyaWRlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZVNsb3RzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdmFyIGF0dHJpYnV0ZVNvdXJjZSA9IHZzRGF0YS5zcGxpdChcIjtcIik7XHJcbiAgICAgICAgYXR0cmlidXRlU291cmNlID0gYXR0cmlidXRlU291cmNlLmZpbHRlcihmdW5jdGlvbiAoc291cmNlKSB7IHJldHVybiBzb3VyY2UuaW5kZXhPZihcImF0dHJpYnV0ZVwiKSAhPSAtMTsgfSk7XHJcbiAgICAgICAgdmFyIGF0dHJpYnV0ZVNlbWFudGljcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cmlidXRlU291cmNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZVNvdXJjZVtpXSA9IGF0dHJpYnV0ZVNvdXJjZVtpXS5yZXBsYWNlKC9cXHI/XFxuL2csIFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhdHRyaWJ1dGVTb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7IHJldHVybiBhdHRyaWJ1dGVTZW1hbnRpY3MucHVzaChzb3VyY2Uuc3BsaXQoXCIgXCIpKTsgfSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdHRyaWJ1dGVTZW1hbnRpY3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlU2VtYW50aWNzW2ldID0gYXR0cmlidXRlU2VtYW50aWNzW2ldLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcyAhPSBcIlwiOyB9KTtcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnNbaV0gPSB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnByb2dyYW1PYmplY3QsIGF0dHJpYnV0ZVNlbWFudGljc1tpXVsyXSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlU3RyaWRlc1tpXSA9IEdldFN0cmlkZShhdHRyaWJ1dGVTZW1hbnRpY3NbaV1bMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdW5pU291cmNlID0gZnNEYXRhLnNwbGl0KFwiO1wiKTtcclxuICAgICAgICB1bmlTb3VyY2UgPSB2c0RhdGEuc3BsaXQoXCI7XCIpLmNvbmNhdCh1bmlTb3VyY2UpO1xyXG4gICAgICAgIHVuaVNvdXJjZSA9IHVuaVNvdXJjZS5maWx0ZXIoZnVuY3Rpb24gKHNvdXJjZSkgeyByZXR1cm4gc291cmNlLmluZGV4T2YoXCJ1bmlmb3JtXCIpICE9IC0xOyB9KTtcclxuICAgICAgICB2YXIgdW5pU2VtYW50aWNzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1bmlTb3VyY2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdW5pU291cmNlW2ldID0gdW5pU291cmNlW2ldLnJlcGxhY2UoL1xccj9cXG4vZywgXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVuaVNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHsgcmV0dXJuIHVuaVNlbWFudGljcy5wdXNoKHNvdXJjZS5zcGxpdChcIiBcIikpOyB9KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHVuaVNlbWFudGljcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB1bmlTZW1hbnRpY3NbaV0gPSB1bmlTZW1hbnRpY3NbaV0uZmlsdGVyKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzICE9IFwiXCI7IH0pO1xyXG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMucHVzaCh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtT2JqZWN0LCB1bmlTZW1hbnRpY3NbaV1bMl0pKTtcclxuICAgICAgICAgICAgaWYgKHVuaVNlbWFudGljc1tpXVsyXSA9PSBcImFtYmllbnRDb2xvclwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFtYmllbnRTbG90ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1bmlTZW1hbnRpY3NbaV1bMl0gPT0gXCJsaWdodFBvc2l0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlnaHRQb3NTbG90ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1bmlTZW1hbnRpY3NbaV1bMl0gPT0gXCJsaWdodERpcmVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpZ2h0RGlyU2xvdCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodW5pU2VtYW50aWNzW2ldWzFdID09IFwic2FtcGxlcjJEXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZVNsb3RzLnB1c2goaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBTaGFkZXIucHJvdG90eXBlLkdldFRleHR1cmVTbG90ID0gZnVuY3Rpb24gKGFyZ19zbG90KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGV4dHVyZVNsb3RzW2FyZ19zbG90XSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnNbdGhpcy50ZXh0dXJlU2xvdHNbYXJnX3Nsb3RdXTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU2hhZGVyLnByb3RvdHlwZS5BdHRhY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLlNldFNoYWRlcih0aGlzKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2hhZGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBTaGFkZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBTb3VuZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNvdW5kKGFyZ19zcmMpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQuc3JjID0gYXJnX3NyYztcclxuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5wcmVsb2FkID0gXCJhdXRvXCI7XHJcbiAgICB9XHJcbiAgICBTb3VuZC5wcm90b3R5cGUuUGxheSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5wbGF5KCk7XHJcbiAgICB9O1xyXG4gICAgU291bmQucHJvdG90eXBlLlBsYXlfbmV3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhdWRpb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gICAgICAgIGF1ZGlvRWxlbWVudC5zcmMgPSB0aGlzLmF1ZGlvRWxlbWVudC5zcmM7XHJcbiAgICAgICAgYXVkaW9FbGVtZW50LnByZWxvYWQgPSBcImF1dG9cIjtcclxuICAgICAgICBhdWRpb0VsZW1lbnQucGxheSgpO1xyXG4gICAgfTtcclxuICAgIFNvdW5kLnByb3RvdHlwZS5QYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5wYXVzZSgpO1xyXG4gICAgfTtcclxuICAgIFNvdW5kLnByb3RvdHlwZS5NdXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYXVkaW9FbGVtZW50Lm11dGVkID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBTb3VuZC5wcm90b3R5cGUuU2V0Vm9sdW1lID0gZnVuY3Rpb24gKGFyZ192b2x1bWUpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC52b2x1bWUgPSBhcmdfdm9sdW1lO1xyXG4gICAgfTtcclxuICAgIFNvdW5kLnByb3RvdHlwZS5HZXRWb2x1bWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXVkaW9FbGVtZW50LnZvbHVtZTtcclxuICAgIH07XHJcbiAgICBTb3VuZC5wcm90b3R5cGUuRGlzTXV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5tdXRlZCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIFNvdW5kLnByb3RvdHlwZS5SZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5jdXJyZW50VGltZSA9IDAuMDtcclxuICAgIH07XHJcbiAgICBTb3VuZC5wcm90b3R5cGUuU2V0TG9vcCA9IGZ1bmN0aW9uIChhcmdfaXNMb29wKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQubG9vcCA9IGFyZ19pc0xvb3A7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNvdW5kO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBTb3VuZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFRleHR1cmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUZXh0dXJlKGFyZ19wYXRoLCBhcmdfZGV2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZSA9IGFyZ19kZXZpY2U7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gYXJnX3BhdGg7XHJcbiAgICB9XHJcbiAgICBUZXh0dXJlLnByb3RvdHlwZS5Mb2FkZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMucmVzb3VyY2VDb250YWluZXIpXHJcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VDb250YWluZXIuTG9hZEVuZCgpO1xyXG4gICAgfTtcclxuICAgIFRleHR1cmUucHJvdG90eXBlLklzTG9hZGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzTG9hZGVkO1xyXG4gICAgfTtcclxuICAgIFRleHR1cmUucHJvdG90eXBlLkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLkNyZWF0ZVRleHR1cmUodGhpcy5wYXRoLCB0aGlzKTtcclxuICAgIH07XHJcbiAgICBUZXh0dXJlLnByb3RvdHlwZS5BdHRhY2ggPSBmdW5jdGlvbiAoc2xvdCkge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmFjdGl2ZVRleHR1cmUodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVEVYVFVSRTApO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmJpbmRUZXh0dXJlKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRFWFRVUkVfMkQsIHRoaXMuZGF0YSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybTFpKHRoaXMuZ3JhcGhpY0RldmljZS5zaGFkZXIuR2V0VGV4dHVyZVNsb3Qoc2xvdCksIHNsb3QpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnRleFBhcmFtZXRlcmkodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVEVYVFVSRV8yRCwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVEVYVFVSRV9NSU5fRklMVEVSLCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5ORUFSRVNUKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRFWFRVUkVfMkQsIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRFWFRVUkVfTUFHX0ZJTFRFUiwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuTkVBUkVTVCk7XHJcbiAgICB9O1xyXG4gICAgVGV4dHVyZS5wcm90b3R5cGUuU2V0Q29udGFpbmVyID0gZnVuY3Rpb24gKHJlc291cmNlQ29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZUNvbnRhaW5lciA9IHJlc291cmNlQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2VDb250YWluZXIuTG9hZFN0YXJ0KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRleHR1cmU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFRleHR1cmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgU2NlbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TY2VuZS9TY2VuZVwiKSk7XHJcbnZhciBSZXNvdXJjZUNyZWF0ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Ub29sL1Jlc291cmNlQ3JlYXRlclwiKSk7XHJcbnZhciBRdWF0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWF0aC9RdWF0XCIpKTtcclxudmFyIFZlY3RvcjRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYXRoL1ZlY3RvcjRcIikpO1xyXG52YXIgVmVjdG9yM18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01hdGgvVmVjdG9yM1wiKSk7XHJcbnZhciBQb2ludExpZ2h0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTGlnaHQvUG9pbnRMaWdodFwiKSk7XHJcbnZhciBNb2RlbERyYXdDb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21wb25lbnQvTW9kZWxEcmF3Q29tcG9uZW50XCIpKTtcclxudmFyIFRyYW5zZm9ybV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1RyYW5zZm9ybVwiKSk7XHJcbnZhciBJbnB1dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1Rvb2wvSW5wdXRcIikpO1xyXG52YXIgU2NlbmVDaGFuZ2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ29tcG9uZW50L1NjZW5lQ2hhbmdlclwiKSk7XHJcbnZhciBUcmFuc2Zvcm1BbmltYXRpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21wb25lbnQvVHJhbnNmb3JtQW5pbWF0aW9uXCIpKTtcclxudmFyIEVhc2luZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1Rvb2wvRWFzaW5nXCIpKTtcclxudmFyIFN1Y2lkZUNvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvbXBvbmVudC9TdWNpZGVDb21wb25lbnRcIikpO1xyXG52YXIgU3RhZ2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Dcm9zc3lMb2FkX0NvcHkvU3RhZ2VcIikpO1xyXG52YXIgUHJpbWl0aXZlVHlwZTtcclxuKGZ1bmN0aW9uIChQcmltaXRpdmVUeXBlKSB7XHJcbiAgICBQcmltaXRpdmVUeXBlW1ByaW1pdGl2ZVR5cGVbXCJzcGhlcmVcIl0gPSAwXSA9IFwic3BoZXJlXCI7XHJcbiAgICBQcmltaXRpdmVUeXBlW1ByaW1pdGl2ZVR5cGVbXCJib3hfQUFCQlwiXSA9IDFdID0gXCJib3hfQUFCQlwiO1xyXG4gICAgUHJpbWl0aXZlVHlwZVtQcmltaXRpdmVUeXBlW1wiYm94X09CQlwiXSA9IDJdID0gXCJib3hfT0JCXCI7XHJcbiAgICBQcmltaXRpdmVUeXBlW1ByaW1pdGl2ZVR5cGVbXCJwb2ludFwiXSA9IDNdID0gXCJwb2ludFwiO1xyXG59KShQcmltaXRpdmVUeXBlIHx8IChQcmltaXRpdmVUeXBlID0ge30pKTtcclxudmFyIGZsb2F0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gZmxvYXQoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEZsb2F0MzJBcnJheSgxKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmbG9hdDtcclxufSgpKTtcclxudmFyIFNhbXBsZVNjZW5lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNhbXBsZVNjZW5lLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU2FtcGxlU2NlbmUoc2NlbmVNYW5nZXIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzY2VuZU1hbmdlcikgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5hUXVhdGVybmlvbiA9IG5ldyBRdWF0XzEuZGVmYXVsdCgpLklkZW50aXR5KCk7XHJcbiAgICAgICAgX3RoaXMuYlF1YXRlcm5pb24gPSBuZXcgUXVhdF8xLmRlZmF1bHQoKS5JZGVudGl0eSgpO1xyXG4gICAgICAgIF90aGlzLnNRdWF0ZXJuaW9uID0gbmV3IFF1YXRfMS5kZWZhdWx0KCkuSWRlbnRpdHkoKTtcclxuICAgICAgICBfdGhpcy56b29tRGF0YSA9IG5ldyBmbG9hdCgpO1xyXG4gICAgICAgIF90aGlzLnpvb21EYXRhLmRhdGFbMF0gPSAwLjU7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgU2FtcGxlU2NlbmUucHJvdG90eXBlLkxvYWRpbmdVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgU2FtcGxlU2NlbmUucHJvdG90eXBlLk9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBmcmFtZUJ1ZmZlciwgbWF0ZXJpYWw7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIGZyYW1lQnVmZmVyID0gdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRUZXh0dXJlKFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlRnJhbWVCdWZmZXIoMTAyNCwgMTAyNCwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJwbGF5Q2FtZXJhXCIpO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwgPSB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZE1hdGVyaWFsKFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlTWF0ZXJpYWwobmV3IFZlY3RvcjRfMS5kZWZhdWx0KDAuMSwgMC4xLCAwLjEsIDEuMCksIHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSwgW3RoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuR2V0VGV4dHVyZShcInBsYXlDYW1lcmFcIildKSwgXCJwbGF5Q2FtZXJhTWF0ZXJpYWxcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNhbXBsZVNjZW5lLnByb3RvdHlwZS5PbkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5BZGRMYXllcigpO1xyXG4gICAgICAgIHRoaXMuVXNlQ29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMuQWRkQ2FtZXJhKDAsIDEsIFwibWFpblwiLCBmYWxzZSwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5HZXRUZXh0dXJlKFwicGxheUNhbWVyYVwiKSk7XHJcbiAgICAgICAgLy8g6aCC54K544K344Kn44O844OA44Go44OV44Op44Kw44Oh44Oz44OI44K344Kn44O844OA44Gu55Sf5oiQXHJcbiAgICAgICAgdmFyIGxpZ2h0ID0gbmV3IFBvaW50TGlnaHRfMS5kZWZhdWx0KHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSk7XHJcbiAgICAgICAgbGlnaHQudHJhbnNmb3JtLlBvc2l0aW9uID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KC01LCAtNSwgMTApO1xyXG4gICAgICAgIC8vdGhpcy5yZW5kZXJlci5TZXRMaWdodChsaWdodCwwKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLlNldExpZ2h0KGxpZ2h0LCAxKTtcclxuICAgICAgICB0aGlzLnNjZW5lTWFuYWdlci5HZXRHcmFwaGljRGV2aWNlKCkuRW5hYmxlU3RlbmNpbCgpO1xyXG4gICAgICAgIHRoaXMuR2V0Q2FtZXJhKFwibWFpblwiKS50cmFuc2Zvcm0uUG9zaXRpb24gPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoNSwgLTIwLCAyMCk7XHJcbiAgICAgICAgdGhpcy5HZXRDYW1lcmEoXCJtYWluXCIpLnRyYW5zZm9ybS5Mb29rQXQobmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIC0xKSwgVmVjdG9yM18xLmRlZmF1bHQueUF4aXMpO1xyXG4gICAgICAgIHRoaXMuR2V0Q2FtZXJhKFwibWFpblwiKS5jbGVhckNvbG9yID0gbmV3IFZlY3RvcjRfMS5kZWZhdWx0KDAuMywgMC4zLCAwLjMsIDEuMCk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uUGxhbmUgPSB0aGlzLmdhbWVPYmplY3RNYW5hZ2VyLkFkZEdhbWVPYmplY3QoXCJwcm9qZWN0aW9uQ3ViZVwiKTtcclxuICAgICAgICAvL3RoaXMuY3ViZS5TZXRDb21wb25lbnQobmV3IE1vZGVsRHJhd0NvbXBvbmVudChmYWxzZSwgXCJjdWJlXCIsXCJjYWxvcnlNYXRlcmlhbFwiLFwidGV4U2hhZGVyXCIsMSxmYWxzZSkpIGFzIE1vZGVsRHJhd0NvbXBvbmVudDtcclxuICAgICAgICAvL3RoaXMuYW5vdGhlckN1YmUuU2V0Q29tcG9uZW50KG5ldyBNb2RlbERyYXdDb21wb25lbnQoZmFsc2UsIFwiY3ViZVwiLFwiY2Fsb3J5TWF0ZXJpYWxcIixcInRleFNoYWRlclwiLDEsZmFsc2UpKSBhcyBNb2RlbERyYXdDb21wb25lbnQ7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnByb2plY3Rpb25QbGFuZS5TZXRDb21wb25lbnQobmV3IE1vZGVsRHJhd0NvbXBvbmVudF8xLmRlZmF1bHQoZmFsc2UsIFwicGxhbmVcIiwgXCJwbGF5Q2FtZXJhTWF0ZXJpYWxcIiwgXCJ0ZXhTaGFkZXJcIiwgMCwgZmFsc2UpKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0aW9uUGxhbmUudHJhbnNmb3JtLlNjYWxlID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZmxvb3IgPSB0aGlzLmdhbWVPYmplY3RNYW5hZ2VyLkFkZEdhbWVPYmplY3QoXCJmbG9vclwiLCBuZXcgVHJhbnNmb3JtXzEuZGVmYXVsdChuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgMCksIG5ldyBWZWN0b3IzXzEuZGVmYXVsdCg5MCwgMCwgMCksIG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgxMCwgMTAsIDUpKSk7XHJcbiAgICAgICAgZmxvb3IuU2V0Q29tcG9uZW50KG5ldyBNb2RlbERyYXdDb21wb25lbnRfMS5kZWZhdWx0KGZhbHNlLCBcInBsYW5lXCIsIFwiY2Fsb3J5TWF0ZXJpYWxcIiwgXCJ0ZXhTaGFkZXJcIiwgMSwgZmFsc2UpKTtcclxuICAgICAgICAvL3RoaXMuYW5vdGhlckN1YmUudHJhbnNmb3JtLkJhc2VUcmFuc2Zvcm09dGhpcy5jdWJlLnRyYW5zZm9ybTtcclxuICAgICAgICB0aGlzLnByb2plY3Rpb25QbGFuZS50cmFuc2Zvcm0uUG9zaXRpb24gPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgLTEpO1xyXG4gICAgICAgIHRoaXMuc3RhZ2UgPSBuZXcgU3RhZ2VfMS5kZWZhdWx0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhZ2UuUmVzZXQoKTtcclxuICAgIH07XHJcbiAgICBTYW1wbGVTY2VuZS5wcm90b3R5cGUuT25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBJbnB1dF8xLmRlZmF1bHQuQWRkS2V5RG93bkV2ZW50KHRoaXMsIFwic2FtcGxlU2NlbmVFdmVudFwiLCB0cnVlKTtcclxuICAgICAgICBpZiAodGhpcy5Jc0xvYWRlZCgpKSB7XHJcbiAgICAgICAgICAgIHZhciB0cmFucyA9IG5ldyBUcmFuc2Zvcm1fMS5kZWZhdWx0KG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAtMSksIG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAwKSwgbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDUwMCwgNTAwLCAxKSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvamVjdGlvblBsYW5lLlNldENvbXBvbmVudChuZXcgVHJhbnNmb3JtQW5pbWF0aW9uXzEuZGVmYXVsdCg5MCwgZmFsc2UsIHRyYW5zLCB0aGlzLnByb2plY3Rpb25QbGFuZS50cmFuc2Zvcm0sIEVhc2luZ18xLmRlZmF1bHQuRWFzZUluT3V0Q2lyYykpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YWdlLlN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNhbXBsZVNjZW5lLnByb3RvdHlwZS5PbkVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBJbnB1dF8xLmRlZmF1bHQuUmVtb3ZlS2V5RG93bkV2ZW50KFwic2FtcGxlU2NlbmVFdmVudFwiKTtcclxuICAgICAgICB0aGlzLnN0YWdlLlJlc2V0KCk7XHJcbiAgICB9O1xyXG4gICAgU2FtcGxlU2NlbmUucHJvdG90eXBlLk9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIOOCq+OCpuODs+OCv+OCkuWFg+OBq+ODqeOCuOOCouODs+OCkueul+WHulxyXG4gICAgICAgIHZhciByYWQgPSAodGhpcy5zY2VuZU1hbmFnZXIuR2V0R2FtZVRpbWUoKS5BYnNvbHV0ZUZyYW1lICUgMzYwKSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgdmFyIHRpbWUgPSAxLjU7XHJcbiAgICB9O1xyXG4gICAgU2FtcGxlU2NlbmUucHJvdG90eXBlLk9uS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgdmFyIHNjZW5lQ2hhbmdlT2JqZWN0ID0gdGhpcy5nYW1lT2JqZWN0TWFuYWdlci5HZXRHYW1lT2JqZWN0KFwic2NlbmVDaGFuZ2VyXCIpO1xyXG4gICAgICAgICAgICBpZiAoc2NlbmVDaGFuZ2VPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzY2VuZUNoYW5nZU9iamVjdCA9IHRoaXMuZ2FtZU9iamVjdE1hbmFnZXIuQWRkR2FtZU9iamVjdChcInNjZW5lQ2hhbmdlclwiKTtcclxuICAgICAgICAgICAgc2NlbmVDaGFuZ2VPYmplY3QuU2V0Q29tcG9uZW50KG5ldyBTY2VuZUNoYW5nZXJfMS5kZWZhdWx0KFwidGl0bGVcIiwgMTAwLCBudWxsKSk7XHJcbiAgICAgICAgICAgIHZhciB0cmFucyA9IG5ldyBUcmFuc2Zvcm1fMS5kZWZhdWx0KG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAtMSksIG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAwKSwgbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDApKTtcclxuICAgICAgICAgICAgc2NlbmVDaGFuZ2VPYmplY3QuU2V0Q29tcG9uZW50KG5ldyBUcmFuc2Zvcm1BbmltYXRpb25fMS5kZWZhdWx0KDkwLCBmYWxzZSwgdHJhbnMsIHRoaXMucHJvamVjdGlvblBsYW5lLnRyYW5zZm9ybSwgRWFzaW5nXzEuZGVmYXVsdC5FYXNlSW5PdXRDaXJjKSk7XHJcbiAgICAgICAgICAgIHNjZW5lQ2hhbmdlT2JqZWN0LlNldENvbXBvbmVudChuZXcgU3VjaWRlQ29tcG9uZW50XzEuZGVmYXVsdCgxMDApKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNhbXBsZVNjZW5lO1xyXG59KFNjZW5lXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBTYW1wbGVTY2VuZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBSZW5kZXJlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9QYXJ0cy9SZW5kZXJlclwiKSk7XHJcbnZhciBDYW1lcmFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vR3JhcGhpYy9DYW1lcmFcIikpO1xyXG52YXIgR2FtZU9iamVjdE1hbmFnZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vR2FtZU9iamVjdC9HYW1lT2JqZWN0TWFuYWdlclwiKSk7XHJcbnZhciBDb2xsaXNpb25NYW5hZ2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1BhcnRzL0NvbGxpc2lvbi9Db2xsaXNpb25NYW5hZ2VyXCIpKTtcclxuZnVuY3Rpb24gU2xlZXAodGltZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKTtcclxuICAgIH0pO1xyXG59XHJcbnZhciBTY2VuZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNjZW5lKHNjZW5lTWFuZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5pc0N1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcl8xLmRlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLm1hcF9jYW1lcmEgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5hcnlfY2FtZXJhID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZU1hbmFnZXIgPSBzY2VuZU1hbmdlcjtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3RNYW5hZ2VyID0gbmV3IEdhbWVPYmplY3RNYW5hZ2VyXzEuZGVmYXVsdCh0aGlzKTtcclxuICAgICAgICB0aGlzLlVwZGF0ZSA9IHRoaXMuVXBkYXRlX1dpdGhvdXRDb2xsaXNpb247XHJcbiAgICAgICAgdGhpcy5BZGRDYW1lcmEoMCwgMCwgXCJsYXN0XCIsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgU2NlbmUucHJvdG90eXBlLklzQ3VycmVudFNjZW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzQ3VycmVudDtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuU2V0Q3VycmVudFNjZW5lID0gZnVuY3Rpb24gKGFyZ19pc2N1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLmlzQ3VycmVudCA9IGFyZ19pc2N1cnJlbnQ7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLkdldEdhbWVNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVPYmplY3RNYW5hZ2VyO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5Vc2VDb2xsaXNpb25NYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uTWFuYWdlciA9IG5ldyBDb2xsaXNpb25NYW5hZ2VyXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuVXBkYXRlID0gdGhpcy5VcGRhdGVfV2l0aENvbGxpc2lvbjtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuR2V0Q29sbGlzaW9uTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2xsaXNpb25NYW5hZ2VyO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5Jc0xvYWRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0xvYWRlZDtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuUmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLk9uUmVsZWFzZSgpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3RNYW5hZ2VyLlJlbGVhc2UoKTtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbk1hbmFnZXIuUmVsZWFzZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuUmVsZWFzZSgpO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5PblJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLkdldENhbWVyYUNvdW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyeV9jYW1lcmEubGVuZ3RoO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5BZGRDYW1lcmEgPSBmdW5jdGlvbiAob3JkZXIsIGxheWVyLCBjYW1lcmFOYW1lLCBpc1BhcmFyZWxsLCBmcmFtZUJ1ZmZlclRleHR1cmUpIHtcclxuICAgICAgICB2YXIgbmV3Q2FtZXJhO1xyXG4gICAgICAgIGlmIChmcmFtZUJ1ZmZlclRleHR1cmUpIHtcclxuICAgICAgICAgICAgbmV3Q2FtZXJhID0gbmV3IENhbWVyYV8xLmRlZmF1bHQodGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpLCBsYXllciwgaXNQYXJhcmVsbCwgZnJhbWVCdWZmZXJUZXh0dXJlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBuZXdDYW1lcmEgPSBuZXcgQ2FtZXJhXzEuZGVmYXVsdCh0aGlzLnNjZW5lTWFuYWdlci5HZXRHcmFwaGljRGV2aWNlKCksIGxheWVyLCBpc1BhcmFyZWxsKTtcclxuICAgICAgICB0aGlzLmFyeV9jYW1lcmEuc3BsaWNlKG9yZGVyLCAwLCBuZXdDYW1lcmEpO1xyXG4gICAgICAgIHRoaXMubWFwX2NhbWVyYVtjYW1lcmFOYW1lXSA9IG5ld0NhbWVyYTtcclxuICAgICAgICByZXR1cm4gbmV3Q2FtZXJhO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5HZXRDYW1lcmEgPSBmdW5jdGlvbiAoY2FtZXJhTmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcF9jYW1lcmFbY2FtZXJhTmFtZV07XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLkRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmFyeV9jYW1lcmEuZm9yRWFjaChmdW5jdGlvbiAoY2FtZXJhKSB7IHJldHVybiBfdGhpcy5yZW5kZXJlci5EcmF3KGNhbWVyYSk7IH0pO1xyXG4gICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKS5QcmVzZW50KCk7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLlVwZGF0ZV9XaXRoQ29sbGlzaW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuT25VcGRhdGUoKTtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3RNYW5hZ2VyLlVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uTWFuYWdlci5DaGVjaygpO1xyXG4gICAgICAgIHRoaXMuRHJhdygpO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5VcGRhdGVfV2l0aG91dENvbGxpc2lvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLk9uVXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0TWFuYWdlci5VcGRhdGUoKTtcclxuICAgICAgICB0aGlzLkRyYXcoKTtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuTG9hZGluZ1VwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLk9uTG9hZGluZ1VwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuRHJhdygpO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5PbkxvYWRpbmdVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLk9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5TdGFydCA9IGZ1bmN0aW9uIChpbmZvcm1hdGlvbikge1xyXG4gICAgICAgIHRoaXMuT25TdGFydChpbmZvcm1hdGlvbik7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLk9uU3RhcnQgPSBmdW5jdGlvbiAoaW5mb3JtYXRpb24pIHtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuRW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuT25FbmQoKTtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuT25FbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5PbkluaXRpYWxpemUoKTtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuQmVmTG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuTG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQmVmTG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLk9uTG9hZCgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkdldExvYWRpbmdPYmpDb3VudCgpKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgU2xlZXAoMTAwKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5PbkxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5PbkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLkdldFJlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5HZXRTY2VuZU1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVNYW5hZ2VyO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTY2VuZTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU2NlbmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBHYW1lVGltZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9QYXJ0cy9HYW1lVGltZVwiKSk7XHJcbnZhciBTY2VuZU1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTY2VuZU1hbmFnZXIoYXJnX21vZGVsQ3JlYXRlciwgYXJnX3Jlc291cmNlQ29udGFpbmVyLCBhcmdfZ3JhcGhpY0RldmljZSkge1xyXG4gICAgICAgIHRoaXMubWFwX3NjZW5lcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLnJlc291cmNlQ29udGFpbmVyID0gYXJnX3Jlc291cmNlQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMubW9kZWxDcmVhdGVyID0gYXJnX21vZGVsQ3JlYXRlcjtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UgPSBhcmdfZ3JhcGhpY0RldmljZTtcclxuICAgICAgICB0aGlzLmdhbWVUaW1lID0gbmV3IEdhbWVUaW1lXzEuZGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5HZXRHcmFwaGljRGV2aWNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdyYXBoaWNEZXZpY2U7XHJcbiAgICB9O1xyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5HZXRNb2RlbENyZWF0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxDcmVhdGVyO1xyXG4gICAgfTtcclxuICAgIFNjZW5lTWFuYWdlci5wcm90b3R5cGUuR2V0UmVzb3VyY2VDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VDb250YWluZXI7XHJcbiAgICB9O1xyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5HZXRHYW1lVGltZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lVGltZTtcclxuICAgIH07XHJcbiAgICBTY2VuZU1hbmFnZXIucHJvdG90eXBlLlVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2NlbmUuSXNMb2FkZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5VcGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lVGltZS5Db3VudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuRHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTY2VuZU1hbmFnZXIucHJvdG90eXBlLkFkZFNjZW5lID0gZnVuY3Rpb24gKGFyZ19zY2VuZSwga2V5KSB7XHJcbiAgICAgICAgYXJnX3NjZW5lLkxvYWQoKTtcclxuICAgICAgICB0aGlzLm1hcF9zY2VuZXNba2V5XSA9IGFyZ19zY2VuZTtcclxuICAgICAgICByZXR1cm4gYXJnX3NjZW5lO1xyXG4gICAgfTtcclxuICAgIFNjZW5lTWFuYWdlci5wcm90b3R5cGUuR2V0U2NlbmUgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwX3NjZW5lc1trZXldO1xyXG4gICAgfTtcclxuICAgIFNjZW5lTWFuYWdlci5wcm90b3R5cGUuR2V0Q3VycmVudFNjZW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTY2VuZTtcclxuICAgIH07XHJcbiAgICBTY2VuZU1hbmFnZXIucHJvdG90eXBlLkNoYW5nZVNjZW5lID0gZnVuY3Rpb24gKGtleSwgaW5mb3JtYXRpb24pIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2NlbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuU2V0Q3VycmVudFNjZW5lKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuRW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5tYXBfc2NlbmVzW2tleV07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuU2V0Q3VycmVudFNjZW5lKHRydWUpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLlN0YXJ0KCk7XHJcbiAgICB9O1xyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5SZW1vdmVTY2VuZSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICBpZiAodGhpcy5tYXBfc2NlbmVzW2tleV0pIHtcclxuICAgICAgICAgICAgdGhpcy5tYXBfc2NlbmVzW2tleV0uUmVsZWFzZSgpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5tYXBfc2NlbmVzW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBTY2VuZU1hbmFnZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFNjZW5lTWFuYWdlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBTY2VuZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NjZW5lL1NjZW5lXCIpKTtcclxudmFyIFJlc291cmNlQ3JlYXRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1Rvb2wvUmVzb3VyY2VDcmVhdGVyXCIpKTtcclxudmFyIEdlb21ldHJ5R2VuZXJhdG9yXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVG9vbC9HZW9tZXRyeUdlbmVyYXRvclwiKSk7XHJcbnZhciBRdWF0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWF0aC9RdWF0XCIpKTtcclxudmFyIFZlY3RvcjRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYXRoL1ZlY3RvcjRcIikpO1xyXG52YXIgVmVjdG9yM18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01hdGgvVmVjdG9yM1wiKSk7XHJcbnZhciBQb2ludExpZ2h0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTGlnaHQvUG9pbnRMaWdodFwiKSk7XHJcbnZhciBNb2RlbERyYXdDb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21wb25lbnQvTW9kZWxEcmF3Q29tcG9uZW50XCIpKTtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYXRoL1ZlY3RvcjJcIikpO1xyXG52YXIgVGV4dERyYXdDb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21wb25lbnQvVGV4dERyYXdDb21wb25lbnRcIikpO1xyXG52YXIgVHJhbnNmb3JtXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVHJhbnNmb3JtXCIpKTtcclxudmFyIElucHV0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVG9vbC9JbnB1dFwiKSk7XHJcbnZhciBUcmFuc2Zvcm1BbmltYXRpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21wb25lbnQvVHJhbnNmb3JtQW5pbWF0aW9uXCIpKTtcclxudmFyIFNjZW5lQ2hhbmdlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvbXBvbmVudC9TY2VuZUNoYW5nZXJcIikpO1xyXG52YXIgRWFzaW5nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVG9vbC9FYXNpbmdcIikpO1xyXG52YXIgU3VjaWRlQ29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ29tcG9uZW50L1N1Y2lkZUNvbXBvbmVudFwiKSk7XHJcbnZhciBmbG9hdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIGZsb2F0KCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmxvYXQ7XHJcbn0oKSk7XHJcbnZhciBUaXRsZVNjZW5lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRpdGxlU2NlbmUsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUaXRsZVNjZW5lKHNjZW5lTWFuZ2VyKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc2NlbmVNYW5nZXIpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuYVF1YXRlcm5pb24gPSBuZXcgUXVhdF8xLmRlZmF1bHQoKS5JZGVudGl0eSgpO1xyXG4gICAgICAgIF90aGlzLmJRdWF0ZXJuaW9uID0gbmV3IFF1YXRfMS5kZWZhdWx0KCkuSWRlbnRpdHkoKTtcclxuICAgICAgICBfdGhpcy5zUXVhdGVybmlvbiA9IG5ldyBRdWF0XzEuZGVmYXVsdCgpLklkZW50aXR5KCk7XHJcbiAgICAgICAgX3RoaXMuem9vbURhdGEgPSBuZXcgZmxvYXQoKTtcclxuICAgICAgICBfdGhpcy5pc0xvYWQgPSBmYWxzZTtcclxuICAgICAgICBfdGhpcy56b29tRGlyZWN0aW9uID0gMS4wO1xyXG4gICAgICAgIF90aGlzLnpvb21EYXRhLmRhdGFbMF0gPSAwLjU7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgVGl0bGVTY2VuZS5wcm90b3R5cGUuTG9hZGluZ1VwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBUaXRsZVNjZW5lLnByb3RvdHlwZS5PbkxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZnJhbWVCdWZmZXIsIG1hdGVyaWFsO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZFNoYWRlcihSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZVNoYWRlcignc2hhZGVyL1VWTm9ybWFsQ29sb3JWUy5nbHNsJywgXCJzaGFkZXIvRGVmYXVsdEZTLmdsc2xcIiwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJ0ZXhTaGFkZXJcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZFNoYWRlcihSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZVNoYWRlcignc2hhZGVyL1VWTm9ybWFsQ29sb3JWUy5nbHNsJywgXCJzaGFkZXIvRm9udFNoYWRlckZTLmdsc2xcIiwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJmb250U2hhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRHZW9tZXRyeShSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZUdlb21ldHJ5KEdlb21ldHJ5R2VuZXJhdG9yXzEuZGVmYXVsdC5DcmVhdGVQbGFuZShuZXcgVmVjdG9yMl8xLmRlZmF1bHQoMSwgMSksIGZhbHNlLCBuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMS4wLCAxLjAsIDEuMCwgMSkpLCB0cnVlLCBmYWxzZSwgZmFsc2UsIHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSksIFwicGxhbmVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZFNvdW5kRnJvbUZpbGUoXCJhdWRpby90aXRsZV9zZTMud2F2XCIsIFwidGl0bGVcIik7XHJcbiAgICAgICAgICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6PjgpLnlJ/miJBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkVGV4dHVyZShSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZVRleHR1cmUoJ2ltYWdlL2NoYXJtYXAucG5nJywgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJmb250XCIpO1xyXG4gICAgICAgICAgICAgICAgZnJhbWVCdWZmZXIgPSB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZFRleHR1cmUoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVGcmFtZUJ1ZmZlcigxMDI0LCAxMDI0LCB0aGlzLnNjZW5lTWFuYWdlci5HZXRHcmFwaGljRGV2aWNlKCkpLCBcInRpdGxlQ2FtZXJhXCIpO1xyXG4gICAgICAgICAgICAgICAgZnJhbWVCdWZmZXIgPSB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZFRleHR1cmUoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVGcmFtZUJ1ZmZlcigxMDI0LCAxMDI0LCB0aGlzLnNjZW5lTWFuYWdlci5HZXRHcmFwaGljRGV2aWNlKCkpLCBcImxvYWRpbmdDYW1lcmFcIik7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbCA9IHRoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkTWF0ZXJpYWwoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVNYXRlcmlhbChuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMC4xLCAwLjEsIDAuMSwgMS4wKSwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpLCBbdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5HZXRUZXh0dXJlKFwidGl0bGVDYW1lcmFcIildKSwgXCJ0aXRsZUNhbWVyYU1hdGVyaWFsXCIpO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuQWRkRXhQYXJhbSg0LCAxLCB0aGlzLnpvb21EYXRhKTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsID0gdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRNYXRlcmlhbChSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZU1hdGVyaWFsKG5ldyBWZWN0b3I0XzEuZGVmYXVsdCgwLjEsIDAuMSwgMC4xLCAxLjApLCB0aGlzLnNjZW5lTWFuYWdlci5HZXRHcmFwaGljRGV2aWNlKCksIFt0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkdldFRleHR1cmUoXCJsb2FkaW5nQ2FtZXJhXCIpXSksIFwibG9hZGluZ0NhbWVyYU1hdGVyaWFsXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBUaXRsZVNjZW5lLnByb3RvdHlwZS5PbkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5BZGRMYXllcigpO1xyXG4gICAgICAgIHRoaXMuQWRkQ2FtZXJhKDAsIDEsIFwibWFpblwiLCBmYWxzZSwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5HZXRUZXh0dXJlKFwidGl0bGVDYW1lcmFcIikpO1xyXG4gICAgICAgIC8vIOmggueCueOCt+OCp+ODvOODgOOBqOODleODqeOCsOODoeODs+ODiOOCt+OCp+ODvOODgOOBrueUn+aIkFxyXG4gICAgICAgIHZhciBsaWdodCA9IG5ldyBQb2ludExpZ2h0XzEuZGVmYXVsdCh0aGlzLnNjZW5lTWFuYWdlci5HZXRHcmFwaGljRGV2aWNlKCkpO1xyXG4gICAgICAgIGxpZ2h0LnRyYW5zZm9ybS5Qb3NpdGlvbiA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgtNSwgLTUsIDEwKTtcclxuICAgICAgICAvL3RoaXMucmVuZGVyZXIuU2V0TGlnaHQobGlnaHQsMCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5TZXRMaWdodChsaWdodCwgMSk7XHJcbiAgICAgICAgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpLkVuYWJsZVN0ZW5jaWwoKTtcclxuICAgICAgICB0aGlzLkdldENhbWVyYShcIm1haW5cIikudHJhbnNmb3JtLlBvc2l0aW9uID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDEwKTtcclxuICAgICAgICB0aGlzLkdldENhbWVyYShcIm1haW5cIikudHJhbnNmb3JtLkxvb2tBdChuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgMCksIFZlY3RvcjNfMS5kZWZhdWx0LnlBeGlzKTtcclxuICAgICAgICB0aGlzLkdldENhbWVyYShcIm1haW5cIikuY2xlYXJDb2xvciA9IG5ldyBWZWN0b3I0XzEuZGVmYXVsdCgxLjAsIDEuMCwgMS4wLCAxLjApO1xyXG4gICAgICAgIHRoaXMudGV4dHMgPSB0aGlzLmdhbWVPYmplY3RNYW5hZ2VyLkFkZEdhbWVPYmplY3QoXCJ0ZXh0XCIpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlvblBsYW5lID0gdGhpcy5nYW1lT2JqZWN0TWFuYWdlci5BZGRHYW1lT2JqZWN0KFwicHJvamVjdGlvblBsYW5lXCIpO1xyXG4gICAgICAgIC8vdGhpcy50b3J1cy5TZXRDb21wb25lbnQobmV3IE1vZGVsRHJhd0NvbXBvbmVudChcImhzdlRvcnVzXCIsXCJjYWxvcnlNYXRlcmlhbFwiLFwicG9pbnRMaWdodFwiLDEpKSBhcyBNb2RlbERyYXdDb21wb25lbnQ7XHJcbiAgICAgICAgLy90aGlzLmN1YmUuU2V0Q29tcG9uZW50KG5ldyBNb2RlbERyYXdDb21wb25lbnQoZmFsc2UsIFwiY3ViZVwiLFwiY2Fsb3J5TWF0ZXJpYWxcIixcInRleFNoYWRlclwiLDEsZmFsc2UpKSBhcyBNb2RlbERyYXdDb21wb25lbnQ7XHJcbiAgICAgICAgdmFyIHRyID0gbmV3IFRyYW5zZm9ybV8xLmRlZmF1bHQoKTtcclxuICAgICAgICB0ci5Qb3NpdGlvbiA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgxLCAxLCAxKTtcclxuICAgICAgICB2YXIgdHIyID0gbmV3IFRyYW5zZm9ybV8xLmRlZmF1bHQoKTtcclxuICAgICAgICB0cjIuUG9zaXRpb24gPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoLTEsIC0xLCAyKTtcclxuICAgICAgICB2YXIgdHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybV8xLmRlZmF1bHQoKTtcclxuICAgICAgICB0cmFuc2Zvcm0uU2NhbGUgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMC41LCAwLjUsIDAuNSk7XHJcbiAgICAgICAgdHJhbnNmb3JtLlBvc2l0aW9uID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIC0xLjAsIDApO1xyXG4gICAgICAgIHZhciBwcmVzc0FueVRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm1fMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgcHJlc3NBbnlUcmFuc2Zvcm0uU2NhbGUgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMC4yNSwgMC4yNSwgMC4yNSk7XHJcbiAgICAgICAgcHJlc3NBbnlUcmFuc2Zvcm0uUG9zaXRpb24gPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMSwgMCk7XHJcbiAgICAgICAgdmFyIHByZXNzVGFyZ2V0ID0gbmV3IFRyYW5zZm9ybV8xLmRlZmF1bHQoKTtcclxuICAgICAgICBwcmVzc1RhcmdldC5TY2FsZSA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLjQsIDAuNCwgMC40KTtcclxuICAgICAgICBwcmVzc1RhcmdldC5Qb3NpdGlvbiA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLnRleHRzLlNldENvbXBvbmVudChuZXcgVGV4dERyYXdDb21wb25lbnRfMS5kZWZhdWx0KFwiVGl0bGVcIiwgXCJmb250XCIsIFwiZm9udFNoYWRlclwiLCBuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMC43NSwgMC43NSwgMC4yNSwgMSksIDEsIHRydWUsIHRyYW5zZm9ybSkpO1xyXG4gICAgICAgIHRoaXMudGV4dHMuU2V0Q29tcG9uZW50KG5ldyBUZXh0RHJhd0NvbXBvbmVudF8xLmRlZmF1bHQoXCJQcmVzcyBBbnkgS2V5XCIsIFwiZm9udFwiLCBcImZvbnRTaGFkZXJcIiwgbmV3IFZlY3RvcjRfMS5kZWZhdWx0KDAuMCwgMC4wLCAwLjAsIDEpLCAxLCB0cnVlLCBwcmVzc0FueVRyYW5zZm9ybSkpO1xyXG4gICAgICAgIHRoaXMudGV4dHMuU2V0Q29tcG9uZW50KG5ldyBUcmFuc2Zvcm1BbmltYXRpb25fMS5kZWZhdWx0KDYwLCB0cnVlLCBwcmVzc1RhcmdldCwgcHJlc3NBbnlUcmFuc2Zvcm0pKTtcclxuICAgICAgICAvL3RoaXMuYW5vdGhlckN1YmUuU2V0Q29tcG9uZW50KG5ldyBNb2RlbERyYXdDb21wb25lbnQoZmFsc2UsIFwiY3ViZVwiLFwiY2Fsb3J5TWF0ZXJpYWxcIixcInRleFNoYWRlclwiLDEsdHJ1ZSkpIGFzIE1vZGVsRHJhd0NvbXBvbmVudDtcclxuICAgICAgICB0aGlzLnByb2plY3Rpb25QbGFuZS5TZXRDb21wb25lbnQobmV3IE1vZGVsRHJhd0NvbXBvbmVudF8xLmRlZmF1bHQoZmFsc2UsIFwicGxhbmVcIiwgXCJ0aXRsZUNhbWVyYU1hdGVyaWFsXCIsIFwidGV4U2hhZGVyXCIsIDAsIGZhbHNlKSk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uUGxhbmUudHJhbnNmb3JtLlNjYWxlID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDUwMCwgNTAwLCAxKTtcclxuICAgICAgICB0aGlzLnRleHRzLnRyYW5zZm9ybS5Qb3NpdGlvbiA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAwLjUpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlvblBsYW5lLnRyYW5zZm9ybS5Qb3NpdGlvbiA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAtMSk7XHJcbiAgICB9O1xyXG4gICAgVGl0bGVTY2VuZS5wcm90b3R5cGUuT25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8g44Kr44Km44Oz44K/44KS5YWD44Gr44Op44K444Ki44Oz44KS566X5Ye6XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb2plY3Rpb25QbGFuZS50cmFuc2Zvcm0uU2NhbGUpO1xyXG4gICAgICAgIC8vdGhpcy50ZXh0cy50cmFuc2Zvcm0uUG9zaXRpb249KG5ldyBWZWN0b3IzKCAwLHNsaWRlLzEwLDApKTtcclxuICAgIH07XHJcbiAgICBUaXRsZVNjZW5lLnByb3RvdHlwZS5PblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIElucHV0XzEuZGVmYXVsdC5BZGRLZXlEb3duRXZlbnQodGhpcywgXCJ0aXRsZVNjZW5lRXZlbnRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuSXNMb2FkZWQoKSkge1xyXG4gICAgICAgICAgICB2YXIgdHJhbnMgPSBuZXcgVHJhbnNmb3JtXzEuZGVmYXVsdChuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgLTEpLCBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgMCksIG5ldyBWZWN0b3IzXzEuZGVmYXVsdCg1MDAsIDUwMCwgMSkpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRzLlNldENvbXBvbmVudChuZXcgVHJhbnNmb3JtQW5pbWF0aW9uXzEuZGVmYXVsdCg5MCwgZmFsc2UsIHRyYW5zLCB0aGlzLnByb2plY3Rpb25QbGFuZS50cmFuc2Zvcm0sIEVhc2luZ18xLmRlZmF1bHQuRWFzZUluT3V0Q2lyYykpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBUaXRsZVNjZW5lLnByb3RvdHlwZS5PbkVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBJbnB1dF8xLmRlZmF1bHQuUmVtb3ZlS2V5RG93bkV2ZW50KFwidGl0bGVTY2VuZUV2ZW50XCIpO1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdE1hbmFnZXIuR2V0R2FtZU9iamVjdChcInNjZW5lQ2hhbmdlclwiKS5EZWFkKCk7XHJcbiAgICB9O1xyXG4gICAgVGl0bGVTY2VuZS5wcm90b3R5cGUuT25LZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS5rZXkgIT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgICAgICB2YXIgc2NlbmVDaGFuZ2VPYmplY3QgPSB0aGlzLmdhbWVPYmplY3RNYW5hZ2VyLkdldEdhbWVPYmplY3QoXCJzY2VuZUNoYW5nZXJcIik7XHJcbiAgICAgICAgICAgIGlmIChzY2VuZUNoYW5nZU9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuR2V0U291bmQoXCJ0aXRsZVwiKS5QbGF5KCk7XHJcbiAgICAgICAgICAgIHNjZW5lQ2hhbmdlT2JqZWN0ID0gdGhpcy5nYW1lT2JqZWN0TWFuYWdlci5BZGRHYW1lT2JqZWN0KFwic2NlbmVDaGFuZ2VyXCIpO1xyXG4gICAgICAgICAgICBzY2VuZUNoYW5nZU9iamVjdC5TZXRDb21wb25lbnQobmV3IFNjZW5lQ2hhbmdlcl8xLmRlZmF1bHQoXCJsb2FkXCIsIDEwMCwgbnVsbCkpO1xyXG4gICAgICAgICAgICB2YXIgdHJhbnMgPSBuZXcgVHJhbnNmb3JtXzEuZGVmYXVsdChuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgLTEpLCBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgMCksIG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAwKSk7XHJcbiAgICAgICAgICAgIHNjZW5lQ2hhbmdlT2JqZWN0LlNldENvbXBvbmVudChuZXcgVHJhbnNmb3JtQW5pbWF0aW9uXzEuZGVmYXVsdCg5MCwgZmFsc2UsIHRyYW5zLCB0aGlzLnByb2plY3Rpb25QbGFuZS50cmFuc2Zvcm0sIEVhc2luZ18xLmRlZmF1bHQuRWFzZUluT3V0Q2lyYykpO1xyXG4gICAgICAgICAgICBzY2VuZUNoYW5nZU9iamVjdC5TZXRDb21wb25lbnQobmV3IFN1Y2lkZUNvbXBvbmVudF8xLmRlZmF1bHQoMTAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBUaXRsZVNjZW5lO1xyXG59KFNjZW5lXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBUaXRsZVNjZW5lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQmluYXJ5UmVhZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQmluYXJ5UmVhZGVyKGFyZ19idWZmZXIpIHtcclxuICAgICAgICB0aGlzLmJ1ZmZlclZpZXcgPSBuZXcgRGF0YVZpZXcoYXJnX2J1ZmZlcik7XHJcbiAgICAgICAgdGhpcy5wb2ludCA9IDA7XHJcbiAgICB9XHJcbiAgICBCaW5hcnlSZWFkZXIucHJvdG90eXBlLkdldFN0cmluZyA9IGZ1bmN0aW9uIChzaXplKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IFwiXCI7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHJlYWQgPSB0aGlzLmJ1ZmZlclZpZXcuZ2V0SW50OCh0aGlzLnBvaW50KTtcclxuICAgICAgICAgICAgaWYgKHJlYWQgPiA5KVxyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocmVhZCk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZWFkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IFwiMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBcIjJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gXCIzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IFwiNFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBcIjVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gXCI2XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IFwiN1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBcIjhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gXCI5XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBCaW5hcnlSZWFkZXIucHJvdG90eXBlLkdldFdTdHJpbmcgPSBmdW5jdGlvbiAoc2l6ZSkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBcIlwiO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZSAqIDI7IGkrKykge1xyXG4gICAgICAgICAgICBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh0aGlzLmJ1ZmZlclZpZXcuZ2V0SW50OCh0aGlzLnBvaW50KSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBCaW5hcnlSZWFkZXIucHJvdG90eXBlLkdldENoYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuYnVmZmVyVmlldy5nZXRJbnQ4KHRoaXMucG9pbnQpO1xyXG4gICAgICAgIHRoaXMucG9pbnQgKz0gMTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIEJpbmFyeVJlYWRlci5wcm90b3R5cGUuR2V0RmxvYXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuYnVmZmVyVmlldy5nZXRGbG9hdDMyKHRoaXMucG9pbnQsIHRydWUpO1xyXG4gICAgICAgIHRoaXMucG9pbnQgKz0gNDtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIEJpbmFyeVJlYWRlci5wcm90b3R5cGUuR2V0RG91YmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLmJ1ZmZlclZpZXcuZ2V0RmxvYXQ2NCh0aGlzLnBvaW50LCB0cnVlKTtcclxuICAgICAgICB0aGlzLnBvaW50ICs9IDU7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBCaW5hcnlSZWFkZXIucHJvdG90eXBlLkdldEludCA9IGZ1bmN0aW9uIChzaXplKSB7XHJcbiAgICAgICAgaWYgKCFzaXplKSB7XHJcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLmJ1ZmZlclZpZXcuZ2V0SW50MzIodGhpcy5wb2ludCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnQgKz0gNDtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNpemUgPT0gMSkge1xyXG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5idWZmZXJWaWV3LmdldEludDgodGhpcy5wb2ludCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnQgKz0gMTtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc2l6ZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLmJ1ZmZlclZpZXcuZ2V0SW50MTYodGhpcy5wb2ludCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnQgKz0gMjtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc2l6ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLmJ1ZmZlclZpZXcuZ2V0SW50MzIodGhpcy5wb2ludCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnQgKz0gNDtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5HZXRVSW50ID0gZnVuY3Rpb24gKHNpemUpIHtcclxuICAgICAgICBpZiAoIXNpemUpIHtcclxuICAgICAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuYnVmZmVyVmlldy5nZXRVaW50MzIodGhpcy5wb2ludCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnQgKz0gNDtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNpemUgPT0gMSkge1xyXG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5idWZmZXJWaWV3LmdldFVpbnQ4KHRoaXMucG9pbnQpO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50ICs9IDE7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNpemUgPT0gMikge1xyXG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5idWZmZXJWaWV3LmdldFVpbnQxNih0aGlzLnBvaW50LCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5wb2ludCArPSAyO1xyXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzaXplID09IDQpIHtcclxuICAgICAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuYnVmZmVyVmlldy5nZXRVaW50MzIodGhpcy5wb2ludCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnQgKz0gNDtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJpbmFyeVJlYWRlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQmluYXJ5UmVhZGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQm94X0FBQkJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTWF0aC9HZW9tZXRyeS9Cb3hfQUFCQlwiKSk7XHJcbnZhciBCb3hfT0JCXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL01hdGgvR2VvbWV0cnkvQm94X09CQlwiKSk7XHJcbnZhciBHZW9tZXRyeUhlbHBlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9NYXRoL0dlb21ldHJ5L0dlb21ldHJ5SGVscGVyXCIpKTtcclxudmFyIFNwaGVyZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9NYXRoL0dlb21ldHJ5L1NwaGVyZVwiKSk7XHJcbnZhciBWZWN0b3IzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL01hdGgvVmVjdG9yM1wiKSk7XHJcbnZhciBDb2xsaXNpb25PYmplY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vUGFydHMvQ29sbGlzaW9uL0NvbGxpc2lvbk9iamVjdFwiKSk7XHJcbnZhciBDb2xsaXNpb25PYmplY3RDcmVhdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29sbGlzaW9uT2JqZWN0Q3JlYXRlcigpIHtcclxuICAgIH1cclxuICAgIENvbGxpc2lvbk9iamVjdENyZWF0ZXIuQ3JlYXRlUG9pbnQgPSBmdW5jdGlvbiAoYXJnX2dhbWVPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbGxpc2lvbk9iamVjdF8xLmRlZmF1bHQoYXJnX2dhbWVPYmplY3QsIG5ldyBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQoYXJnX2dhbWVPYmplY3QudHJhbnNmb3JtKSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uT2JqZWN0Q3JlYXRlci5DcmVhdGVTcGhlcmUgPSBmdW5jdGlvbiAoYXJnX3JhZGl1cywgYXJnX2dhbWVPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbGxpc2lvbk9iamVjdF8xLmRlZmF1bHQoYXJnX2dhbWVPYmplY3QsIG5ldyBDb2xsaXNpb25QcmltaXRpdmVfU3BoZXJlKGFyZ19yYWRpdXMsIGFyZ19nYW1lT2JqZWN0LnRyYW5zZm9ybSkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbk9iamVjdENyZWF0ZXIuQ3JlYXRlQ3ViZV9BQUJCID0gZnVuY3Rpb24gKGFyZ19sZW5ndGgsIGFyZ19nYW1lT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xsaXNpb25PYmplY3RfMS5kZWZhdWx0KGFyZ19nYW1lT2JqZWN0LCBuZXcgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCKGFyZ19sZW5ndGgsIGFyZ19nYW1lT2JqZWN0LnRyYW5zZm9ybSkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbk9iamVjdENyZWF0ZXIuQ3JlYXRlQ3ViZV9PQkIgPSBmdW5jdGlvbiAoYXJnX2xlbmd0aCwgYXJnX2dhbWVPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbGxpc2lvbk9iamVjdF8xLmRlZmF1bHQoYXJnX2dhbWVPYmplY3QsIG5ldyBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQihhcmdfbGVuZ3RoLCBhcmdfZ2FtZU9iamVjdC50cmFuc2Zvcm0pKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29sbGlzaW9uT2JqZWN0Q3JlYXRlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ29sbGlzaW9uT2JqZWN0Q3JlYXRlcjtcclxudmFyIENvbGxpc2lvblByaW1pdGl2ZV9Qb2ludCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbGxpc2lvblByaW1pdGl2ZV9Qb2ludChhcmdfdHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBhcmdfdHJhbnNmb3JtO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybS5Qb3NpdGlvbjtcclxuICAgIH1cclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Qb2ludC5wcm90b3R5cGUuSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQucHJvdG90eXBlLlByZUluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1BvaW50LnByb3RvdHlwZS5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMudHJhbnNmb3JtLlBvc2l0aW9uO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Qb2ludC5wcm90b3R5cGUuR2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLlBvc2l0aW9uO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Qb2ludC5wcm90b3R5cGUuSXNIaXQgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gb3RoZXIuSXNIaXRQb2ludCh0aGlzKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQucHJvdG90eXBlLkdldE1heFBvaW50QW5kTWluUG9pbnQgPSBmdW5jdGlvbiAoYXJnX291dHB1dE1heCwgYXJnX291dHB1dE1pbikge1xyXG4gICAgICAgIHZhciBwb2ludCA9IHRoaXMudHJhbnNmb3JtLlBvc2l0aW9uO1xyXG4gICAgICAgIGFyZ19vdXRwdXRNYXguZGF0YSA9IHBvaW50LmRhdGE7XHJcbiAgICAgICAgYXJnX291dHB1dE1pbi5kYXRhID0gcG9pbnQuZGF0YTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQucHJvdG90eXBlLklzSGl0UG9pbnQgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gb3RoZXIuR2V0UG9zaXRpb24oKSA9PSB0aGlzLkdldFBvc2l0aW9uKCk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1BvaW50LnByb3RvdHlwZS5Jc0hpdFNwaGVyZSA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRQb2ludFNwaGVyZSh0aGlzLnBvc2l0aW9uLCBvdGhlci5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1BvaW50LnByb3RvdHlwZS5Jc0hpdEJveF9BQUJCID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5Jc0hpdFBvaW50Qm94X0FBQkIodGhpcy5wb3NpdGlvbiwgb3RoZXIuZ2VvbWV0cnkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Qb2ludC5wcm90b3R5cGUuSXNIaXRCb3hfT0JCID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5Jc0hpdFBvaW50Qm94X09CQih0aGlzLnBvc2l0aW9uLCBvdGhlci5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbGxpc2lvblByaW1pdGl2ZV9Qb2ludDtcclxufSgpKTtcclxuO1xyXG52YXIgQ29sbGlzaW9uUHJpbWl0aXZlX1NwaGVyZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbGxpc2lvblByaW1pdGl2ZV9TcGhlcmUoYXJnX3JhZGl1cywgYXJnX3RyYW5zZm9ybSkge1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gYXJnX3RyYW5zZm9ybTtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFNwaGVyZV8xLmRlZmF1bHQoYXJnX3JhZGl1cywgdGhpcy50cmFuc2Zvcm0uUG9zaXRpb24sIHRoaXMudHJhbnNmb3JtLlNjYWxlLngpO1xyXG4gICAgfVxyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1NwaGVyZS5wcm90b3R5cGUuSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfU3BoZXJlLnByb3RvdHlwZS5QcmVJbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9TcGhlcmUucHJvdG90eXBlLkdldE1heFBvaW50QW5kTWluUG9pbnQgPSBmdW5jdGlvbiAoYXJnX291dHB1dE1heCwgYXJnX291dHB1dE1pbikge1xyXG4gICAgICAgIGFyZ19vdXRwdXRNYXguZGF0YSA9IHRoaXMuZ2VvbWV0cnkucG9zaXRpb24uQWRkKG5ldyBWZWN0b3IzXzEuZGVmYXVsdCh0aGlzLmdlb21ldHJ5LnJhZGl1cywgdGhpcy5nZW9tZXRyeS5yYWRpdXMsIHRoaXMuZ2VvbWV0cnkucmFkaXVzKSkuZGF0YTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGFyZ19vdXRwdXRNYXgpO1xyXG4gICAgICAgIGFyZ19vdXRwdXRNaW4uZGF0YSA9IHRoaXMuZ2VvbWV0cnkucG9zaXRpb24uU3ViKG5ldyBWZWN0b3IzXzEuZGVmYXVsdCh0aGlzLmdlb21ldHJ5LnJhZGl1cywgdGhpcy5nZW9tZXRyeS5yYWRpdXMsIHRoaXMuZ2VvbWV0cnkucmFkaXVzKSkuZGF0YTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfU3BoZXJlLnByb3RvdHlwZS5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5wb3NpdGlvbiA9IHRoaXMudHJhbnNmb3JtLlBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkucmFkaXVzID0gdGhpcy50cmFuc2Zvcm0uU2NhbGUueCAqIHRoaXMuZ2VvbWV0cnkuaW5pdFJhZGl1cztcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfU3BoZXJlLnByb3RvdHlwZS5Jc0hpdCA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBvdGhlci5Jc0hpdFNwaGVyZSh0aGlzKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfU3BoZXJlLnByb3RvdHlwZS5Jc0hpdEJveF9PQkIgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gR2VvbWV0cnlIZWxwZXJfMS5kZWZhdWx0LklzSGl0U3BoZXJlQm94X09CQih0aGlzLmdlb21ldHJ5LCBvdGhlci5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1NwaGVyZS5wcm90b3R5cGUuSXNIaXRQb2ludCA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRQb2ludFNwaGVyZShvdGhlci5wb3NpdGlvbiwgdGhpcy5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1NwaGVyZS5wcm90b3R5cGUuSXNIaXRTcGhlcmUgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gR2VvbWV0cnlIZWxwZXJfMS5kZWZhdWx0LklzSGl0U3BoZXJlU3BoZXJlKHRoaXMuZ2VvbWV0cnksIG90aGVyLmdlb21ldHJ5KTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfU3BoZXJlLnByb3RvdHlwZS5Jc0hpdEJveF9BQUJCID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5Jc0hpdFNwaGVyZUJveF9BQUJCKHRoaXMuZ2VvbWV0cnksIG90aGVyLmdlb21ldHJ5KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29sbGlzaW9uUHJpbWl0aXZlX1NwaGVyZTtcclxufSgpKTtcclxuO1xyXG52YXIgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCKGFyZ19sZW5ndGgsIGFyZ193ZWFrX3RyYW5zZm9ybSkge1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQm94X0FBQkJfMS5kZWZhdWx0KGFyZ19sZW5ndGgsIGFyZ193ZWFrX3RyYW5zZm9ybS5Qb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBhcmdfd2Vha190cmFuc2Zvcm07XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5pbml0TGVuZ3RoZXMgPSBhcmdfbGVuZ3RoLkRpdigyKTtcclxuICAgIH1cclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfQUFCQi5wcm90b3R5cGUuSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X0FBQkIucHJvdG90eXBlLlByZUluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCLnByb3RvdHlwZS5HZXRNYXhQb2ludEFuZE1pblBvaW50ID0gZnVuY3Rpb24gKGFyZ19vdXRwdXRNYXgsIGFyZ19vdXRwdXRNaW4pIHtcclxuICAgICAgICBhcmdfb3V0cHV0TWF4LmRhdGEgPSB0aGlzLmdlb21ldHJ5LnBvc2l0aW9uLkFkZCh0aGlzLmdlb21ldHJ5LmhhbGZMZW5ndGhlcykuZGF0YTtcclxuICAgICAgICBhcmdfb3V0cHV0TWluLmRhdGEgPSB0aGlzLmdlb21ldHJ5LnBvc2l0aW9uLlN1Yih0aGlzLmdlb21ldHJ5LmhhbGZMZW5ndGhlcykuZGF0YTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X0FBQkIucHJvdG90eXBlLlVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LnBvc2l0aW9uID0gdGhpcy50cmFuc2Zvcm0uUG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5oYWxmTGVuZ3RoZXMgPSB0aGlzLmdlb21ldHJ5LmluaXRMZW5ndGhlcy5NdWx0aXBseV9WZWMzKHRoaXMudHJhbnNmb3JtLlNjYWxlKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X0FBQkIucHJvdG90eXBlLklzSGl0ID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG90aGVyLklzSGl0Qm94X0FBQkIodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCLnByb3RvdHlwZS5Jc0hpdEJveF9PQkIgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gR2VvbWV0cnlIZWxwZXJfMS5kZWZhdWx0LklzSGl0Qm94X09CQkJveF9BQUJCKHRoaXMuZ2VvbWV0cnksIG90aGVyLmdlb21ldHJ5KTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X0FBQkIucHJvdG90eXBlLklzSGl0UG9pbnQgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gR2VvbWV0cnlIZWxwZXJfMS5kZWZhdWx0LklzSGl0UG9pbnRCb3hfQUFCQihvdGhlci5wb3NpdGlvbiwgdGhpcy5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCLnByb3RvdHlwZS5Jc0hpdFNwaGVyZSA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRTcGhlcmVCb3hfQUFCQihvdGhlci5nZW9tZXRyeSwgdGhpcy5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCLnByb3RvdHlwZS5Jc0hpdEJveF9BQUJCID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5Jc0hpdEJveF9BQUJCKHRoaXMuZ2VvbWV0cnksIG90aGVyLmdlb21ldHJ5KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCO1xyXG59KCkpO1xyXG47XHJcbnZhciBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfT0JCKGFyZ19sZW5ndGgsIGFyZ193ZWFrX3RyYW5zZm9ybSkge1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQm94X09CQl8xLmRlZmF1bHQoYXJnX2xlbmd0aCk7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBhcmdfd2Vha190cmFuc2Zvcm07XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5pbml0TGVuZ3RoZXMgPSBhcmdfbGVuZ3RoLkRpdigyKTtcclxuICAgIH1cclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfT0JCLnByb3RvdHlwZS5Jbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfT0JCLnByb3RvdHlwZS5QcmVJbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfT0JCLnByb3RvdHlwZS5HZXRNYXhQb2ludEFuZE1pblBvaW50ID0gZnVuY3Rpb24gKGFyZ19vdXRwdXRNYXgsIGFyZ19vdXRwdXRNaW4pIHtcclxuICAgICAgICB2YXIgYWFiYl9sZWd0aGVzID0gR2VvbWV0cnlIZWxwZXJfMS5kZWZhdWx0LkdldEJveF9PQkJDb250YWluQUFCQkxlbmd0aCh0aGlzLmdlb21ldHJ5KTtcclxuICAgICAgICBhcmdfb3V0cHV0TWF4LmRhdGEgPSB0aGlzLmdlb21ldHJ5LnBvc2l0aW9uLkFkZChhYWJiX2xlZ3RoZXMpLmRhdGE7XHJcbiAgICAgICAgYXJnX291dHB1dE1pbi5kYXRhID0gdGhpcy5nZW9tZXRyeS5wb3NpdGlvbi5TdWIoYWFiYl9sZWd0aGVzKS5kYXRhO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfT0JCLnByb3RvdHlwZS5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5wb3NpdGlvbiA9IHRoaXMudHJhbnNmb3JtLlBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuZGlyZWN0c1swXSA9IHRoaXMudHJhbnNmb3JtLkdldFJpZ2h0KCk7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5kaXJlY3RzWzFdID0gdGhpcy50cmFuc2Zvcm0uR2V0VXAoKTtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LmRpcmVjdHNbMl0gPSB0aGlzLnRyYW5zZm9ybS5HZXRGcm9udCgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5nZW9tZXRyeS5kaXJlY3RzWzBdKTtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LmhhbGZMZW5ndGhlcyA9IHRoaXMuZ2VvbWV0cnkuaW5pdExlbmd0aGVzLk11bHRpcGx5X1ZlYzModGhpcy50cmFuc2Zvcm0uU2NhbGUpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfT0JCLnByb3RvdHlwZS5Jc0hpdCA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBvdGhlci5Jc0hpdEJveF9PQkIodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9PQkIucHJvdG90eXBlLklzSGl0Qm94X09CQiA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRCb3hfT0JCKG90aGVyLmdlb21ldHJ5LCB0aGlzLmdlb21ldHJ5KTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQi5wcm90b3R5cGUuSXNIaXRQb2ludCA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRQb2ludEJveF9PQkIob3RoZXIucG9zaXRpb24sIHRoaXMuZ2VvbWV0cnkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfT0JCLnByb3RvdHlwZS5Jc0hpdFNwaGVyZSA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRTcGhlcmVCb3hfT0JCKG90aGVyLmdlb21ldHJ5LCB0aGlzLmdlb21ldHJ5KTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQi5wcm90b3R5cGUuSXNIaXRCb3hfQUFCQiA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRCb3hfT0JCQm94X0FBQkIob3RoZXIuZ2VvbWV0cnksIHRoaXMuZ2VvbWV0cnkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQjtcclxufSgpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFZlY3RvcjRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTWF0aC9WZWN0b3I0XCIpKTtcclxudmFyIENvbG9yQ29udHJvbGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbG9yQ29udHJvbGxlcigpIHtcclxuICAgIH1cclxuICAgIENvbG9yQ29udHJvbGxlci5oc3ZhID0gZnVuY3Rpb24gKGgsIHMsIHYsIGEpIHtcclxuICAgICAgICBpZiAocyA+IDEgfHwgdiA+IDEgfHwgYSA+IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdGggPSBoICUgMzYwO1xyXG4gICAgICAgIHZhciBpID0gTWF0aC5mbG9vcih0aCAvIDYwKTtcclxuICAgICAgICB2YXIgZiA9IHRoIC8gNjAgLSBpO1xyXG4gICAgICAgIHZhciBtID0gdiAqICgxIC0gcyk7XHJcbiAgICAgICAgdmFyIG4gPSB2ICogKDEgLSBzICogZik7XHJcbiAgICAgICAgdmFyIGsgPSB2ICogKDEgLSBzICogKDEgLSBmKSk7XHJcbiAgICAgICAgdmFyIGNvbG9yO1xyXG4gICAgICAgIGlmICghKHMgPiAwKSAmJiAhKHMgPCAwKSkge1xyXG4gICAgICAgICAgICBjb2xvciA9IG5ldyBWZWN0b3I0XzEuZGVmYXVsdCh2LCB2LCB2LCBhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByID0gbmV3IEFycmF5KHYsIG4sIG0sIG0sIGssIHYpO1xyXG4gICAgICAgICAgICB2YXIgZyA9IG5ldyBBcnJheShrLCB2LCB2LCBuLCBtLCBtKTtcclxuICAgICAgICAgICAgdmFyIGIgPSBuZXcgQXJyYXkobSwgbSwgaywgdiwgdiwgbik7XHJcbiAgICAgICAgICAgIGNvbG9yID0gbmV3IFZlY3RvcjRfMS5kZWZhdWx0KHJbaV0sIGdbaV0sIGJbaV0sIGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbG9yQ29udHJvbGxlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ29sb3JDb250cm9sbGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgRWFzaW5nID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRWFzaW5nKCkge1xyXG4gICAgfVxyXG4gICAgRWFzaW5nLkVhc2VJblNpbmUgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHJldHVybiAxIC0gTWF0aC5jb3MoKHggKiBNYXRoLlBJKSAvIDIpO1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5FYXNlT3V0U2luZSA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc2luKCh4ICogTWF0aC5QSSkgLyAyKTtcclxuICAgIH07XHJcbiAgICBFYXNpbmcuRWFzZUluT3V0U2luZSA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgcmV0dXJuIC0oTWF0aC5jb3MoTWF0aC5QSSAqIHgpIC0gMSkgLyAyO1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5FYXNlSW5RdWFkID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICByZXR1cm4geCAqIHg7XHJcbiAgICB9O1xyXG4gICAgRWFzaW5nLkVhc2VPdXRRdWFkID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICByZXR1cm4gMSAtICgxIC0geCkgKiAoMSAtIHgpO1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5FYXNlSW5PdXRRdWFkID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICByZXR1cm4geCA8IDAuNSA/IDIgKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCAyKSAvIDI7XHJcbiAgICB9O1xyXG4gICAgRWFzaW5nLkVhc2VJbkN1YmljID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICByZXR1cm4geCAqIHggKiB4O1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5FYXNlT3V0Q3ViaWMgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHJldHVybiAxIC0gTWF0aC5wb3coMSAtIHgsIDMpO1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5FYXNlSW5PdXRDdWJpYyA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHggPCAwLjUgPyA0ICogeCAqIHggKiB4IDogMSAtIE1hdGgucG93KC0yICogeCArIDIsIDMpIC8gMjtcclxuICAgIH07XHJcbiAgICBFYXNpbmcuRWFzZUluUXVhcnQgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHJldHVybiB4ICogeCAqIHggKiB4O1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5FYXNlT3V0UXVhcnQgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHJldHVybiAxIC0gTWF0aC5wb3coMSAtIHgsIDQpO1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5FYXNlSW5PdXRRdWFydCA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHggPCAwLjUgPyA4ICogeCAqIHggKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCA0KSAvIDI7XHJcbiAgICB9O1xyXG4gICAgRWFzaW5nLkVhc2VJbkNpcmMgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4LCAyKSk7XHJcbiAgICB9O1xyXG4gICAgRWFzaW5nLkVhc2VPdXRDaXJjID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4IC0gMSwgMikpO1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5FYXNlSW5PdXRDaXJjID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICByZXR1cm4geCA8IDAuNVxyXG4gICAgICAgICAgICA/ICgxIC0gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdygyICogeCwgMikpKSAvIDJcclxuICAgICAgICAgICAgOiAoTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCAyKSkgKyAxKSAvIDI7XHJcbiAgICB9O1xyXG4gICAgRWFzaW5nLkVhc2VJbkJhY2sgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHZhciBjMSA9IDEuNzAxNTg7XHJcbiAgICAgICAgdmFyIGMzID0gYzEgKyAxO1xyXG4gICAgICAgIHJldHVybiBjMyAqIHggKiB4ICogeCAtIGMxICogeCAqIHg7XHJcbiAgICB9O1xyXG4gICAgRWFzaW5nLkVhc2VPdXRCYWNrID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICB2YXIgYzEgPSAxLjcwMTU4O1xyXG4gICAgICAgIHZhciBjMyA9IGMxICsgMTtcclxuICAgICAgICByZXR1cm4gMSArIGMzICogTWF0aC5wb3coeCAtIDEsIDMpICsgYzEgKiBNYXRoLnBvdyh4IC0gMSwgMik7XHJcbiAgICB9O1xyXG4gICAgRWFzaW5nLkVhc2VJbk91dEJhY2sgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHZhciBjMSA9IDEuNzAxNTg7XHJcbiAgICAgICAgdmFyIGMyID0gYzEgKiAxLjUyNTtcclxuICAgICAgICByZXR1cm4geCA8IDAuNVxyXG4gICAgICAgICAgICA/IChNYXRoLnBvdygyICogeCwgMikgKiAoKGMyICsgMSkgKiAyICogeCAtIGMyKSkgLyAyXHJcbiAgICAgICAgICAgIDogKE1hdGgucG93KDIgKiB4IC0gMiwgMikgKiAoKGMyICsgMSkgKiAoeCAqIDIgLSAyKSArIGMyKSArIDIpIC8gMjtcclxuICAgIH07XHJcbiAgICBFYXNpbmcuRWFzZUluRWxhc3RpYyA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgdmFyIGM0ID0gKDIgKiBNYXRoLlBJKSAvIDM7XHJcbiAgICAgICAgcmV0dXJuIHggPT09IDBcclxuICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgIDogeCA9PT0gMVxyXG4gICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICA6IC1NYXRoLnBvdygyLCAxMCAqIHggLSAxMCkgKiBNYXRoLnNpbigoeCAqIDEwIC0gMTAuNzUpICogYzQpO1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5FYXNlT3V0RWxhc3RpYyA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgdmFyIGM0ID0gKDIgKiBNYXRoLlBJKSAvIDM7XHJcbiAgICAgICAgcmV0dXJuIHggPT09IDBcclxuICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgIDogeCA9PT0gMVxyXG4gICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICA6IE1hdGgucG93KDIsIC0xMCAqIHgpICogTWF0aC5zaW4oKHggKiAxMCAtIDAuNzUpICogYzQpICsgMTtcclxuICAgIH07XHJcbiAgICBFYXNpbmcuRWFzZUluT3V0RWxhc3RpYyA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgdmFyIGM1ID0gKDIgKiBNYXRoLlBJKSAvIDQuNTtcclxuICAgICAgICByZXR1cm4geCA9PT0gMFxyXG4gICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgOiB4ID09PSAxXHJcbiAgICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICAgIDogeCA8IDAuNVxyXG4gICAgICAgICAgICAgICAgICAgID8gLShNYXRoLnBvdygyLCAyMCAqIHggLSAxMCkgKiBNYXRoLnNpbigoMjAgKiB4IC0gMTEuMTI1KSAqIGM1KSkgLyAyXHJcbiAgICAgICAgICAgICAgICAgICAgOiAoTWF0aC5wb3coMiwgLTIwICogeCArIDEwKSAqIE1hdGguc2luKCgyMCAqIHggLSAxMS4xMjUpICogYzUpKSAvIDIgKyAxO1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5FYXNlSW5RdWludCA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHggKiB4ICogeCAqIHggKiB4O1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5FYXNlT3V0UXVpbnQgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHJldHVybiAxIC0gTWF0aC5wb3coMSAtIHgsIDUpO1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5FYXNlSW5PdXRRdWludCA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHggPCAwLjUgPyAxNiAqIHggKiB4ICogeCAqIHggKiB4IDogMSAtIE1hdGgucG93KC0yICogeCArIDIsIDUpIC8gMjtcclxuICAgIH07XHJcbiAgICBFYXNpbmcuRWFzZUluRXhwbyA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHggPT09IDAgPyAwIDogTWF0aC5wb3coMiwgMTAgKiB4IC0gMTApO1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5FYXNlT3V0RXhwbyA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHggPT09IDEgPyAxIDogMSAtIE1hdGgucG93KDIsIC0xMCAqIHgpO1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5FYXNlSW5PdXRFeHBvID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICByZXR1cm4geCA9PT0gMFxyXG4gICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgOiB4ID09PSAxXHJcbiAgICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICAgIDogeCA8IDAuNSA/IE1hdGgucG93KDIsIDIwICogeCAtIDEwKSAvIDJcclxuICAgICAgICAgICAgICAgICAgICA6ICgyIC0gTWF0aC5wb3coMiwgLTIwICogeCArIDEwKSkgLyAyO1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5QYXJhYm9sYSA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgcmV0dXJuIC0oeCAtIDAuNSkgKiAoeCAtIDAuNSkgKiA0ICsgMTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRWFzaW5nO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBFYXNpbmc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBGaWxlTG9hZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRmlsZUxvYWRlcigpIHtcclxuICAgIH1cclxuICAgIEZpbGVMb2FkZXIuTG9hZFRleHQgPSBmdW5jdGlvbiAoYXJnX2ZpbGVQYXRoLCBpc0FzeW5jaCkge1xyXG4gICAgICAgIHZhciB4bWxIdHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgaWYgKGlzQXN5bmNoKVxyXG4gICAgICAgICAgICB4bWxIdHRwLm9wZW4oXCJHRVRcIiwgYXJnX2ZpbGVQYXRoLCBpc0FzeW5jaCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHhtbEh0dHAub3BlbihcIkdFVFwiLCBhcmdfZmlsZVBhdGgsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgeG1sSHR0cC5zZW5kKG51bGwpO1xyXG4gICAgICAgIHZhciBkYXRhID0geG1sSHR0cC5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG4gICAgRmlsZUxvYWRlci5Mb2FkQmluID0gZnVuY3Rpb24gKGFyZ19maWxlUGF0aCwgYXJnX291dCkge1xyXG4gICAgICAgIHZhciB4bWxIdHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeG1sSHR0cC5vcGVuKFwiR0VUXCIsIGFyZ19maWxlUGF0aCwgdHJ1ZSk7XHJcbiAgICAgICAgeG1sSHR0cC5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XHJcbiAgICAgICAgeG1sSHR0cC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIE9uQmluTG9hZChhcmdfb3V0LCB4bWxIdHRwLnJlc3BvbnNlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHhtbEh0dHAuc2VuZChudWxsKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRmlsZUxvYWRlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRmlsZUxvYWRlcjtcclxuZnVuY3Rpb24gT25CaW5Mb2FkKGFyZ19vdXQsIGFyZ19hcnlCdWZmZXIpIHtcclxuICAgIGFyZ19vdXQuYnVmZmVyID0gYXJnX2FyeUJ1ZmZlcjtcclxuICAgIGFyZ19vdXQuSW5pdGlhbGl6ZSgpO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDb2xvckNvbnRyb2xsZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db2xvckNvbnRyb2xsZXJcIikpO1xyXG52YXIgR2VvbWV0cnlHZW5lcmF0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHZW9tZXRyeUdlbmVyYXRlcigpIHtcclxuICAgIH1cclxuICAgIEdlb21ldHJ5R2VuZXJhdGVyLkNyZWF0ZVRvcnVzID0gZnVuY3Rpb24gKHJvdywgY29sdW1uLCBpcmFkLCBvcmFkLCBjb2xvcikge1xyXG4gICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoKSwgbm9yID0gbmV3IEFycmF5KCksIGNvbCA9IG5ldyBBcnJheSgpLCBzdCA9IG5ldyBBcnJheSgpLCBpZHggPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSByb3c7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGguUEkgKiAyIC8gcm93ICogaTtcclxuICAgICAgICAgICAgdmFyIHJyID0gTWF0aC5jb3Mocik7XHJcbiAgICAgICAgICAgIHZhciByeSA9IE1hdGguc2luKHIpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDw9IGNvbHVtbjsgaWkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyID0gTWF0aC5QSSAqIDIgLyBjb2x1bW4gKiBpaTtcclxuICAgICAgICAgICAgICAgIHZhciB0eCA9IChyciAqIGlyYWQgKyBvcmFkKSAqIE1hdGguY29zKHRyKTtcclxuICAgICAgICAgICAgICAgIHZhciB0eSA9IHJ5ICogaXJhZDtcclxuICAgICAgICAgICAgICAgIHZhciB0eiA9IChyciAqIGlyYWQgKyBvcmFkKSAqIE1hdGguc2luKHRyKTtcclxuICAgICAgICAgICAgICAgIHZhciByeCA9IHJyICogTWF0aC5jb3ModHIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJ6ID0gcnIgKiBNYXRoLnNpbih0cik7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGM7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YyA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGMgPSBDb2xvckNvbnRyb2xsZXJfMS5kZWZhdWx0LmhzdmEoMzYwIC8gY29sdW1uICogaWksIDEsIDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHJzID0gMSAvIGNvbHVtbiAqIGlpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJ0ID0gMSAvIHJvdyAqIGkgKyAwLjU7XHJcbiAgICAgICAgICAgICAgICBpZiAocnQgPiAxLjApIHtcclxuICAgICAgICAgICAgICAgICAgICBydCAtPSAxLjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydCA9IDEuMCAtIHJ0O1xyXG4gICAgICAgICAgICAgICAgcG9zLnB1c2godHgsIHR5LCB0eik7XHJcbiAgICAgICAgICAgICAgICBub3IucHVzaChyeCwgcnksIHJ6KTtcclxuICAgICAgICAgICAgICAgIGNvbC5wdXNoKHRjLngsIHRjLnksIHRjLnosIHRjLncpO1xyXG4gICAgICAgICAgICAgICAgc3QucHVzaChycywgcnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByb3c7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGlpID0gMDsgaWkgPCBjb2x1bW47IGlpKyspIHtcclxuICAgICAgICAgICAgICAgIHIgPSAoY29sdW1uICsgMSkgKiBpICsgaWk7XHJcbiAgICAgICAgICAgICAgICBpZHgucHVzaChyLCByICsgY29sdW1uICsgMSwgciArIDEpO1xyXG4gICAgICAgICAgICAgICAgaWR4LnB1c2gociArIGNvbHVtbiArIDEsIHIgKyBjb2x1bW4gKyAyLCByICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IHsgcDogcG9zLCBuOiBub3IsIGM6IGNvbCwgdXY6IHN0LCBpOiBpZHggfTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5R2VuZXJhdGVyLkNyZWF0ZVNwaGVyZSA9IGZ1bmN0aW9uIChyb3csIGNvbHVtbiwgcmFkLCBjb2xvcikge1xyXG4gICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoKSwgbm9yID0gbmV3IEFycmF5KCksIGNvbCA9IG5ldyBBcnJheSgpLCBzdCA9IG5ldyBBcnJheSgpLCBpZHggPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSByb3c7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGguUEkgLyByb3cgKiBpO1xyXG4gICAgICAgICAgICB2YXIgcnkgPSBNYXRoLmNvcyhyKTtcclxuICAgICAgICAgICAgdmFyIHJyID0gTWF0aC5zaW4ocik7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPD0gY29sdW1uOyBpaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHIgPSBNYXRoLlBJICogMiAvIGNvbHVtbiAqIGlpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHR4ID0gcnIgKiByYWQgKiBNYXRoLmNvcyh0cik7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHkgPSByeSAqIHJhZDtcclxuICAgICAgICAgICAgICAgIHZhciB0eiA9IHJyICogcmFkICogTWF0aC5zaW4odHIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJ4ID0gcnIgKiBNYXRoLmNvcyh0cik7XHJcbiAgICAgICAgICAgICAgICB2YXIgcnogPSByciAqIE1hdGguc2luKHRyKTtcclxuICAgICAgICAgICAgICAgIHZhciB0YztcclxuICAgICAgICAgICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRjID0gY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YyA9IENvbG9yQ29udHJvbGxlcl8xLmRlZmF1bHQuaHN2YSgzNjAgLyByb3cgKiBpLCAwLjUsIDAuNSwgMS4wKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBvcy5wdXNoKHR4LCB0eSwgdHopO1xyXG4gICAgICAgICAgICAgICAgbm9yLnB1c2gocngsIHJ5LCByeik7XHJcbiAgICAgICAgICAgICAgICBjb2wucHVzaCh0Yy5kYXRhWzBdLCB0Yy5kYXRhWzFdLCB0Yy5kYXRhWzJdLCB0Yy5kYXRhWzNdKTtcclxuICAgICAgICAgICAgICAgIHN0LnB1c2goMSAtIDEgLyBjb2x1bW4gKiBpaSwgMSAvIHJvdyAqIGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHIgPSAwO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByb3c7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGlpID0gMDsgaWkgPCBjb2x1bW47IGlpKyspIHtcclxuICAgICAgICAgICAgICAgIHIgPSAoY29sdW1uICsgMSkgKiBpICsgaWk7XHJcbiAgICAgICAgICAgICAgICBpZHgucHVzaChyLCByICsgMSwgciArIGNvbHVtbiArIDIpO1xyXG4gICAgICAgICAgICAgICAgaWR4LnB1c2gociwgciArIGNvbHVtbiArIDIsIHIgKyBjb2x1bW4gKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBwOiBwb3MsIG46IG5vciwgYzogY29sLCB1djogc3QsIGk6IGlkeCB9O1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5R2VuZXJhdGVyLkNyZWF0ZUN1YmUgPSBmdW5jdGlvbiAoc2lkZSwgY29sb3IpIHtcclxuICAgICAgICB2YXIgaHMgPSBzaWRlICogMC41O1xyXG4gICAgICAgIHZhciBwb3MgPSBbXHJcbiAgICAgICAgICAgIC1ocywgLWhzLCBocywgaHMsIC1ocywgaHMsIGhzLCBocywgaHMsIC1ocywgaHMsIGhzLFxyXG4gICAgICAgICAgICAtaHMsIC1ocywgLWhzLCAtaHMsIGhzLCAtaHMsIGhzLCBocywgLWhzLCBocywgLWhzLCAtaHMsXHJcbiAgICAgICAgICAgIC1ocywgaHMsIC1ocywgLWhzLCBocywgaHMsIGhzLCBocywgaHMsIGhzLCBocywgLWhzLFxyXG4gICAgICAgICAgICAtaHMsIC1ocywgLWhzLCBocywgLWhzLCAtaHMsIGhzLCAtaHMsIGhzLCAtaHMsIC1ocywgaHMsXHJcbiAgICAgICAgICAgIGhzLCAtaHMsIC1ocywgaHMsIGhzLCAtaHMsIGhzLCBocywgaHMsIGhzLCAtaHMsIGhzLFxyXG4gICAgICAgICAgICAtaHMsIC1ocywgLWhzLCAtaHMsIC1ocywgaHMsIC1ocywgaHMsIGhzLCAtaHMsIGhzLCAtaHNcclxuICAgICAgICBdO1xyXG4gICAgICAgIHZhciBub3IgPSBbXHJcbiAgICAgICAgICAgIC0xLjAsIC0xLjAsIDEuMCwgMS4wLCAtMS4wLCAxLjAsIDEuMCwgMS4wLCAxLjAsIC0xLjAsIDEuMCwgMS4wLFxyXG4gICAgICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLCAtMS4wLCAxLjAsIC0xLjAsIDEuMCwgMS4wLCAtMS4wLCAxLjAsIC0xLjAsIC0xLjAsXHJcbiAgICAgICAgICAgIC0xLjAsIDEuMCwgLTEuMCwgLTEuMCwgMS4wLCAxLjAsIDEuMCwgMS4wLCAxLjAsIDEuMCwgMS4wLCAtMS4wLFxyXG4gICAgICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLCAxLjAsIC0xLjAsIC0xLjAsIDEuMCwgLTEuMCwgMS4wLCAtMS4wLCAtMS4wLCAxLjAsXHJcbiAgICAgICAgICAgIDEuMCwgLTEuMCwgLTEuMCwgMS4wLCAxLjAsIC0xLjAsIDEuMCwgMS4wLCAxLjAsIDEuMCwgLTEuMCwgMS4wLFxyXG4gICAgICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLCAtMS4wLCAtMS4wLCAxLjAsIC0xLjAsIDEuMCwgMS4wLCAtMS4wLCAxLjAsIC0xLjBcclxuICAgICAgICBdO1xyXG4gICAgICAgIHZhciBjb2wgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvcy5sZW5ndGggLyAzOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGMgPSBjb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRjID0gQ29sb3JDb250cm9sbGVyXzEuZGVmYXVsdC5oc3ZhKDM2MCAvIHBvcy5sZW5ndGggLyAzICogaSwgMSwgMSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29sLnB1c2godGMueCwgdGMueSwgdGMueiwgdGMudyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdCA9IFtcclxuICAgICAgICAgICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXHJcbiAgICAgICAgICAgIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLFxyXG4gICAgICAgICAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCxcclxuICAgICAgICAgICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXHJcbiAgICAgICAgICAgIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLFxyXG4gICAgICAgICAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdmFyIGlkeCA9IFtcclxuICAgICAgICAgICAgMCwgMSwgMiwgMCwgMiwgMyxcclxuICAgICAgICAgICAgNCwgNSwgNiwgNCwgNiwgNyxcclxuICAgICAgICAgICAgOCwgOSwgMTAsIDgsIDEwLCAxMSxcclxuICAgICAgICAgICAgMTIsIDEzLCAxNCwgMTIsIDE0LCAxNSxcclxuICAgICAgICAgICAgMTYsIDE3LCAxOCwgMTYsIDE4LCAxOSxcclxuICAgICAgICAgICAgMjAsIDIxLCAyMiwgMjAsIDIyLCAyM1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIHsgcDogcG9zLCBuOiBub3IsIGM6IGNvbCwgdXY6IHN0LCBpOiBpZHggfTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUdlbmVyYXRlci5DcmVhdGVQbGFuZSA9IGZ1bmN0aW9uIChhcmdfc2l6ZSwgaXNSZXZlcnNlLCBhcmdfY29sb3IpIHtcclxuICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdmFyIG5vciA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHZhciBjb2wgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB2YXIgaWR4ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgcG9zID0gW1xyXG4gICAgICAgICAgICAtYXJnX3NpemUueCwgYXJnX3NpemUueSwgMC4wLFxyXG4gICAgICAgICAgICBhcmdfc2l6ZS54LCBhcmdfc2l6ZS55LCAwLjAsXHJcbiAgICAgICAgICAgIC1hcmdfc2l6ZS54LCAtYXJnX3NpemUueSwgMC4wLFxyXG4gICAgICAgICAgICBhcmdfc2l6ZS54LCAtYXJnX3NpemUueSwgMC4wLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgbm9yID0gW1xyXG4gICAgICAgICAgICAwLjAsIDAuMCwgLTEuMCxcclxuICAgICAgICAgICAgMC4wLCAwLjAsIC0xLjAsXHJcbiAgICAgICAgICAgIDAuMCwgMC4wLCAtMS4wLFxyXG4gICAgICAgICAgICAwLjAsIDAuMCwgLTEuMCxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGlmIChhcmdfY29sb3IpIHtcclxuICAgICAgICAgICAgY29sID0gW1xyXG4gICAgICAgICAgICAgICAgYXJnX2NvbG9yLngsIGFyZ19jb2xvci55LCBhcmdfY29sb3IueiwgYXJnX2NvbG9yLncsXHJcbiAgICAgICAgICAgICAgICBhcmdfY29sb3IueCwgYXJnX2NvbG9yLnksIGFyZ19jb2xvci56LCBhcmdfY29sb3IudyxcclxuICAgICAgICAgICAgICAgIGFyZ19jb2xvci54LCBhcmdfY29sb3IueSwgYXJnX2NvbG9yLnosIGFyZ19jb2xvci53LFxyXG4gICAgICAgICAgICAgICAgYXJnX2NvbG9yLngsIGFyZ19jb2xvci55LCBhcmdfY29sb3IueiwgYXJnX2NvbG9yLndcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbCA9IFsxLCAxLCAxLCAxLFxyXG4gICAgICAgICAgICAgICAgMSwgMSwgMSwgMSxcclxuICAgICAgICAgICAgICAgIDEsIDEsIDEsIDEsXHJcbiAgICAgICAgICAgICAgICAxLCAxLCAxLCAxXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlkeCA9IFtcclxuICAgICAgICAgICAgMiwgMywgMSxcclxuICAgICAgICAgICAgMiwgMSwgMCxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGlmIChpc1JldmVyc2UpXHJcbiAgICAgICAgICAgIHV2ID0gW1xyXG4gICAgICAgICAgICAgICAgMC4wLCAxLjAsXHJcbiAgICAgICAgICAgICAgICAxLjAsIDEuMCxcclxuICAgICAgICAgICAgICAgIDAuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgMS4wLCAwLjBcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdXYgPSBbXHJcbiAgICAgICAgICAgICAgICAwLjAsIDAuMCxcclxuICAgICAgICAgICAgICAgIDEuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgMC4wLCAxLjAsXHJcbiAgICAgICAgICAgICAgICAxLjAsIDEuMFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBwOiBwb3MsIG46IG5vciwgYzogY29sLCBpOiBpZHgsIHV2OiB1diB9O1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5R2VuZXJhdGVyLkNyZWF0ZVRleHRHZW9tZXRyeSA9IGZ1bmN0aW9uICh0ZXh0TGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHZhciBpZHggPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB2YXIgdW5pdCA9IDEuMDtcclxuICAgICAgICB2YXIgaGFsZiA9IHRleHRMZW5ndGggLyAyLjA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0TGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcG9zLnB1c2goLXVuaXQgKiAwLjUgKyBpICogdW5pdCAtIHVuaXQgKiBoYWxmLCB1bml0LCAwLjApO1xyXG4gICAgICAgICAgICBwb3MucHVzaCh1bml0ICogMC41ICsgaSAqIHVuaXQgLSB1bml0ICogaGFsZiwgdW5pdCwgMC4wKTtcclxuICAgICAgICAgICAgcG9zLnB1c2goLXVuaXQgKiAwLjUgKyBpICogdW5pdCAtIHVuaXQgKiBoYWxmLCAtdW5pdCwgMC4wKTtcclxuICAgICAgICAgICAgcG9zLnB1c2godW5pdCAqIDAuNSArIGkgKiB1bml0IC0gdW5pdCAqIGhhbGYsIC11bml0LCAwLjApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHRMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZHgucHVzaCgyICsgaSAqIDQsIDMgKyBpICogNCwgMSArIGkgKiA0KTtcclxuICAgICAgICAgICAgaWR4LnB1c2goMiArIGkgKiA0LCAxICsgaSAqIDQsIDAgKyBpICogNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHV2LnB1c2goMC4wLCAxLjApO1xyXG4gICAgICAgICAgICB1di5wdXNoKDEuMCwgMS4wKTtcclxuICAgICAgICAgICAgdXYucHVzaCgwLjAsIDAuMCk7XHJcbiAgICAgICAgICAgIHV2LnB1c2goMS4wLCAwLjApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBwOiBwb3MsIGk6IGlkeCwgdXY6IHV2IH07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdlb21ldHJ5R2VuZXJhdGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBHZW9tZXRyeUdlbmVyYXRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTWF0aC9WZWN0b3IyXCIpKTtcclxudmFyIElucHV0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSW5wdXQoKSB7XHJcbiAgICB9XHJcbiAgICBJbnB1dC5HZXRDYW52YXNQb3NpdGlvbiA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyXzEuZGVmYXVsdChlLmNsaWVudFggLSB0aGlzLmNhbnZhcy5vZmZzZXRMZWZ0IC0gdGhpcy5jYW52YXMud2lkdGggKiAwLjUsIGUuY2xpZW50WSAtIHRoaXMuY2FudmFzLm9mZnNldFRvcCAtIHRoaXMuY2FudmFzLmhlaWdodCAqIDAuNSk7XHJcbiAgICB9O1xyXG4gICAgSW5wdXQuQWRkQ2xpY2tFdmVudCA9IGZ1bmN0aW9uIChhcmdfb2JqLCBhcmdfZXZlbnROYW1lLCBpc1VzZUV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGV2ZW50ID0gdGhpcy5jbGlja0V2ZW50c1thcmdfZXZlbnROYW1lXTtcclxuICAgICAgICBpZiAoIWV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50ID0geyBvYmo6IGFyZ19vYmosIGhhbmRsZUV2ZW50OiBPbkNsaWNrIH07XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2tFdmVudHNbYXJnX2V2ZW50TmFtZV0gPSBldmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzVXNlRXZlbnQpXHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCwgaXNVc2VFdmVudCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBJbnB1dC5BZGRNb3VzZURvd25FdmVudCA9IGZ1bmN0aW9uIChhcmdfb2JqLCBhcmdfZXZlbnROYW1lLCBpc1VzZUV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGV2ZW50ID0gdGhpcy5tb3VzZURvd25FdmVudHNbYXJnX2V2ZW50TmFtZV07XHJcbiAgICAgICAgaWYgKCFldmVudCkge1xyXG4gICAgICAgICAgICBldmVudCA9IHsgb2JqOiBhcmdfb2JqLCBoYW5kbGVFdmVudDogT25Nb3VzZURvd24gfTtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FdmVudHNbYXJnX2V2ZW50TmFtZV0gPSBldmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzVXNlRXZlbnQpXHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZXZlbnQsIGlzVXNlRXZlbnQpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIElucHV0LkFkZE1vdXNlVXBFdmVudCA9IGZ1bmN0aW9uIChhcmdfb2JqLCBhcmdfZXZlbnROYW1lLCBpc1VzZUV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGV2ZW50ID0gdGhpcy5tb3VzZVVwRXZlbnRzW2FyZ19ldmVudE5hbWVdO1xyXG4gICAgICAgIGlmICghZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQgPSB7IG9iajogYXJnX29iaiwgaGFuZGxlRXZlbnQ6IE9uTW91c2VVcCB9O1xyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VVcEV2ZW50c1thcmdfZXZlbnROYW1lXSA9IGV2ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNVc2VFdmVudClcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZXZlbnQsIGlzVXNlRXZlbnQpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBldmVudCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBJbnB1dC5BZGRLZXlVcEV2ZW50ID0gZnVuY3Rpb24gKGFyZ19vYmosIGFyZ19ldmVudE5hbWUsIGlzVXNlRXZlbnQpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSB0aGlzLmtleVVwRXZlbnRzW2FyZ19ldmVudE5hbWVdO1xyXG4gICAgICAgIGlmIChldmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWRkS2V5XCIpO1xyXG4gICAgICAgIGV2ZW50ID0geyBvYmo6IGFyZ19vYmosIGhhbmRsZUV2ZW50OiBPbktleVVwIH07XHJcbiAgICAgICAgdGhpcy5rZXlVcEV2ZW50c1thcmdfZXZlbnROYW1lXSA9IGV2ZW50O1xyXG4gICAgICAgIGlmIChpc1VzZUV2ZW50KVxyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZXZlbnQsIGlzVXNlRXZlbnQpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZXZlbnQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSW5wdXQuQWRkS2V5RG93bkV2ZW50ID0gZnVuY3Rpb24gKGFyZ19vYmosIGFyZ19ldmVudE5hbWUsIGlzVXNlRXZlbnQpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSB0aGlzLmtleURvd25FdmVudHNbYXJnX2V2ZW50TmFtZV07XHJcbiAgICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQgPSB7IG9iajogYXJnX29iaiwgaGFuZGxlRXZlbnQ6IE9uS2V5RG93biB9O1xyXG4gICAgICAgIHRoaXMua2V5RG93bkV2ZW50c1thcmdfZXZlbnROYW1lXSA9IGV2ZW50O1xyXG4gICAgICAgIGlmIChpc1VzZUV2ZW50KVxyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCwgaXNVc2VFdmVudCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIElucHV0LkFkZE1vdXNlTW92ZUV2ZW50ID0gZnVuY3Rpb24gKGFyZ19vYmosIGFyZ19ldmVudE5hbWUsIGlzVXNlRXZlbnQpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSB0aGlzLm1vdXNlTW92ZUV2ZW50c1thcmdfZXZlbnROYW1lXTtcclxuICAgICAgICBpZiAoIWV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50ID0geyBvYmo6IGFyZ19vYmosIGhhbmRsZUV2ZW50OiBPbk1vdXNlTW92ZSB9O1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlTW92ZUV2ZW50c1thcmdfZXZlbnROYW1lXSA9IGV2ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNVc2VFdmVudClcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBldmVudCwgaXNVc2VFdmVudCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZXZlbnQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSW5wdXQuQWRkTW91c2VXaGVlbEV2ZW50ID0gZnVuY3Rpb24gKGFyZ19vYmosIGFyZ19ldmVudE5hbWUsIGlzVXNlRXZlbnQpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSB0aGlzLm1vdXNlV2hlZWxFdmVudHNbYXJnX2V2ZW50TmFtZV07XHJcbiAgICAgICAgaWYgKCFldmVudCkge1xyXG4gICAgICAgICAgICBldmVudCA9IHsgb2JqOiBhcmdfb2JqLCBoYW5kbGVFdmVudDogT25Nb3VzZVdoZWVsIH07XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VXaGVlbEV2ZW50c1thcmdfZXZlbnROYW1lXSA9IGV2ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNVc2VFdmVudClcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgZXZlbnQsIGlzVXNlRXZlbnQpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCBldmVudCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBJbnB1dC5SZW1vdmVLZXlEb3duRXZlbnQgPSBmdW5jdGlvbiAoYXJnX2V2ZW50TmFtZSkge1xyXG4gICAgICAgIHZhciBldmVudCA9IHRoaXMua2V5RG93bkV2ZW50c1thcmdfZXZlbnROYW1lXTtcclxuICAgICAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJnX2V2ZW50TmFtZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50LCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5rZXlEb3duRXZlbnRzW2FyZ19ldmVudE5hbWVdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSW5wdXQuUmVtb3ZlS2V5VXBFdmVudCA9IGZ1bmN0aW9uIChhcmdfZXZlbnROYW1lKSB7XHJcbiAgICAgICAgdmFyIGV2ZW50ID0gdGhpcy5rZXlVcEV2ZW50c1thcmdfZXZlbnROYW1lXTtcclxuICAgICAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGV2ZW50LCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5rZXlVcEV2ZW50c1thcmdfZXZlbnROYW1lXSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIElucHV0LlJlbW92ZUNsaWNrRXZlbnQgPSBmdW5jdGlvbiAoYXJnX2V2ZW50TmFtZSkge1xyXG4gICAgICAgIHZhciBldmVudCA9IHRoaXMuY2xpY2tFdmVudHNbYXJnX2V2ZW50TmFtZV07XHJcbiAgICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2tFdmVudHNbYXJnX2V2ZW50TmFtZV0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBJbnB1dC5SZW1vdmVNb3VzZVVwRXZlbnQgPSBmdW5jdGlvbiAoYXJnX2V2ZW50TmFtZSkge1xyXG4gICAgICAgIHZhciBldmVudCA9IHRoaXMubW91c2VVcEV2ZW50c1thcmdfZXZlbnROYW1lXTtcclxuICAgICAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZXZlbnQsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlVXBFdmVudHNbYXJnX2V2ZW50TmFtZV0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBJbnB1dC5SZW1vdmVNb3VzZURvd25FdmVudCA9IGZ1bmN0aW9uIChhcmdfZXZlbnROYW1lKSB7XHJcbiAgICAgICAgdmFyIGV2ZW50ID0gdGhpcy5tb3VzZURvd25FdmVudHNbYXJnX2V2ZW50TmFtZV07XHJcbiAgICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3NlZG93blwiLCBldmVudCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duRXZlbnRzW2FyZ19ldmVudE5hbWVdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSW5wdXQuUmVtb3ZlTW91c2VNb3ZlRXZlbnQgPSBmdW5jdGlvbiAoYXJnX2V2ZW50TmFtZSkge1xyXG4gICAgICAgIHZhciBldmVudCA9IHRoaXMubW91c2VNb3ZlRXZlbnRzW2FyZ19ldmVudE5hbWVdO1xyXG4gICAgICAgIGlmIChldmVudCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGV2ZW50LCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZU1vdmVFdmVudHNbYXJnX2V2ZW50TmFtZV0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBJbnB1dC5SZW1vdmVXaGVlbEV2ZW50ID0gZnVuY3Rpb24gKGFyZ19ldmVudE5hbWUpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSB0aGlzLm1vdXNlV2hlZWxFdmVudHNbYXJnX2V2ZW50TmFtZV07XHJcbiAgICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIGV2ZW50LCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVdoZWVsRXZlbnRzW2FyZ19ldmVudE5hbWVdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSW5wdXQuY2xpY2tFdmVudHMgPSBuZXcgTWFwKCk7XHJcbiAgICBJbnB1dC5tb3VzZURvd25FdmVudHMgPSBuZXcgTWFwKCk7XHJcbiAgICBJbnB1dC5tb3VzZVVwRXZlbnRzID0gbmV3IE1hcCgpO1xyXG4gICAgSW5wdXQua2V5VXBFdmVudHMgPSBuZXcgTWFwKCk7XHJcbiAgICBJbnB1dC5rZXlEb3duRXZlbnRzID0gbmV3IE1hcCgpO1xyXG4gICAgSW5wdXQubW91c2VNb3ZlRXZlbnRzID0gbmV3IE1hcCgpO1xyXG4gICAgSW5wdXQubW91c2VXaGVlbEV2ZW50cyA9IG5ldyBNYXAoKTtcclxuICAgIHJldHVybiBJbnB1dDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gSW5wdXQ7XHJcbmZ1bmN0aW9uIE9uQ2xpY2soZSkge1xyXG4gICAgdGhpcy5vYmouT25DbGljayhlKTtcclxufVxyXG5mdW5jdGlvbiBPbktleURvd24oZSkge1xyXG4gICAgdGhpcy5vYmouT25LZXlEb3duKGUpO1xyXG59XHJcbmZ1bmN0aW9uIE9uS2V5VXAoZSkge1xyXG4gICAgdGhpcy5vYmouT25LZXlVcChlKTtcclxufVxyXG5mdW5jdGlvbiBPbk1vdXNlVXAoZSkge1xyXG4gICAgdGhpcy5vYmouT25Nb3VzZVVwKGUpO1xyXG59XHJcbmZ1bmN0aW9uIE9uTW91c2VEb3duKGUpIHtcclxuICAgIHRoaXMub2JqLk9uTW91c2VVcChlKTtcclxufVxyXG5mdW5jdGlvbiBPbk1vdXNlTW92ZShlKSB7XHJcbiAgICB0aGlzLm9iai5Pbk1vdXNlTW92ZShlKTtcclxufVxyXG5mdW5jdGlvbiBPbk1vdXNlV2hlZWwoZSkge1xyXG4gICAgdGhpcy5vYmouT25Nb3VzZVdoZWVsKGUpO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciByYWQgPSBNYXRoLlBJIC8gMTgwO1xyXG52YXIgc2luUmV0cyA9IG5ldyBGbG9hdDMyQXJyYXkoMzYwKTtcclxudmFyIE1hdGhIZWxwZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYXRoSGVscGVyKCkge1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hdGhIZWxwZXIucHJvdG90eXBlLCBcIlJhZFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgTWF0aEhlbHBlci5Jbml0U2luUmV0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0luaXRTaW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM2MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNpblJldHNbaV0gPSBNYXRoLnNpbih0aGlzLlRvUmFkaWFuKGkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0luaXRTaW4gPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIE1hdGhIZWxwZXIuVG9SYWRpYW4gPSBmdW5jdGlvbiAoZGVncmVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZ3JlZSAqIHJhZDtcclxuICAgIH07XHJcbiAgICBNYXRoSGVscGVyLkdldFNpblBvcyA9IGZ1bmN0aW9uIChhcmdfdCkge1xyXG4gICAgICAgIHJldHVybiBzaW5SZXRzW2FyZ190ICUgMzYwXTtcclxuICAgIH07XHJcbiAgICBNYXRoSGVscGVyLmlzSW5pdFNpbiA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIE1hdGhIZWxwZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1hdGhIZWxwZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBUZXh0dXJlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1Jlc291cmNlL1RleHR1cmVcIikpO1xyXG52YXIgTWF0ZXJpYWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vUmVzb3VyY2UvTWF0ZXJpYWxcIikpO1xyXG52YXIgU2hhZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1Jlc291cmNlL1NoYWRlclwiKSk7XHJcbnZhciBHZW9tZXRyeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9SZXNvdXJjZS9HZW9tZXRyeVwiKSk7XHJcbnZhciBWZWN0b3I0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL01hdGgvVmVjdG9yNFwiKSk7XHJcbnZhciBGcmFtZUJ1ZmZlclRleHR1cmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vUmVzb3VyY2UvRnJhbWVCdWZmZXJUZXh0dXJlXCIpKTtcclxudmFyIE1lc2hfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vUmVzb3VyY2UvTWVzaFwiKSk7XHJcbnZhciBGaWxlTG9hZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRmlsZUxvYWRlclwiKSk7XHJcbnZhciBCaW5hcnlSZWFkZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVG9vbC9CaW5hcnlSZWFkZXJcIikpO1xyXG52YXIgU291bmRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vUmVzb3VyY2UvU291bmRcIikpO1xyXG52YXIgVmVydGV4VHlwZTtcclxuKGZ1bmN0aW9uIChWZXJ0ZXhUeXBlKSB7XHJcbiAgICBWZXJ0ZXhUeXBlW1ZlcnRleFR5cGVbXCJWZXJ0ZXhfVVZcIl0gPSAwXSA9IFwiVmVydGV4X1VWXCI7XHJcbiAgICBWZXJ0ZXhUeXBlW1ZlcnRleFR5cGVbXCJWZXJ0ZXhfTm9ybWFsXCJdID0gMV0gPSBcIlZlcnRleF9Ob3JtYWxcIjtcclxuICAgIFZlcnRleFR5cGVbVmVydGV4VHlwZVtcIlZlcnRleF9VVl9Ob3JtYWxcIl0gPSAyXSA9IFwiVmVydGV4X1VWX05vcm1hbFwiO1xyXG4gICAgVmVydGV4VHlwZVtWZXJ0ZXhUeXBlW1wiVmVydGV4X1VWX05vcm1hbF9Db2xvclwiXSA9IDNdID0gXCJWZXJ0ZXhfVVZfTm9ybWFsX0NvbG9yXCI7XHJcbiAgICBWZXJ0ZXhUeXBlW1ZlcnRleFR5cGVbXCJWZXJ0ZXhfTW9kZWxfU2luZ2xlQm9uZVwiXSA9IDRdID0gXCJWZXJ0ZXhfTW9kZWxfU2luZ2xlQm9uZVwiO1xyXG4gICAgVmVydGV4VHlwZVtWZXJ0ZXhUeXBlW1wiVmVydGV4X01vZGVsX0RvdWJsZUJvbmVcIl0gPSA1XSA9IFwiVmVydGV4X01vZGVsX0RvdWJsZUJvbmVcIjtcclxuICAgIFZlcnRleFR5cGVbVmVydGV4VHlwZVtcIlZlcnRleF9Nb2RlbF9RdWFkQm9uZVwiXSA9IDZdID0gXCJWZXJ0ZXhfTW9kZWxfUXVhZEJvbmVcIjtcclxuICAgIFZlcnRleFR5cGVbVmVydGV4VHlwZVtcIlZlcnRleF9Nb2RlbF9TREVGQm9uZVwiXSA9IDddID0gXCJWZXJ0ZXhfTW9kZWxfU0RFRkJvbmVcIjtcclxuICAgIFZlcnRleFR5cGVbVmVydGV4VHlwZVtcIlZlcnRleF9Nb2RlbF9NaXhcIl0gPSA4XSA9IFwiVmVydGV4X01vZGVsX01peFwiO1xyXG59KShWZXJ0ZXhUeXBlIHx8IChWZXJ0ZXhUeXBlID0ge30pKTtcclxuZnVuY3Rpb24gR2V0RGlyZWN0b3J5KGFyZ19wYXRoKSB7XHJcbiAgICB2YXIgc3BsaXRlZCA9IGFyZ19wYXRoLnNwbGl0KFwiL1wiKTtcclxuICAgIHZhciBvdXRwdXQgPSBcIlwiO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGxpdGVkLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIG91dHB1dCArPSBzcGxpdGVkW2ldICsgXCIvXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG59XHJcbnZhciBCM01Ib2xkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCM01Ib2xkZXIoKSB7XHJcbiAgICB9XHJcbiAgICBCM01Ib2xkZXIucHJvdG90eXBlLkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGdlb21ldHJ5O1xyXG4gICAgICAgIHZhciBhcnlfbWF0ZXJpYWwgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmJ1ZmZlclJlYWRlciA9IG5ldyBCaW5hcnlSZWFkZXJfMS5kZWZhdWx0KHRoaXMuYnVmZmVyKTtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vaGVkZXJUZXN0XHJcbiAgICAgICAgICAgIHZhciBoZWFkU3RyID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0U3RyaW5nKDE1KTtcclxuICAgICAgICAgICAgaWYgKGhlYWRTdHIgIT0gXCJCdXRpM0RNb2RlbERhdGFcIilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9tb2RlbOOBruWQjeWJjeOBquOBqSAgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgdmVyc2lvbiA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgIC8vMOOBp3N0ZDo6d3N0cmluZyAsMeOBp3N0ZDo6c3RyaW5nXHJcbiAgICAgICAgICAgIHZhciBlbmNvZGVUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICB2YXIgdGV4dENvdW50ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KCk7XHJcbiAgICAgICAgICAgIC8v5Yi25L2c6ICF44Gu5ZCN5YmN44Gu6Kqt44G/6L6844G/XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBuYW1lU3RyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuY29kZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lU3RyID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0U3RyaW5nKHRleHRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lU3RyID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0V1N0cmluZyh0ZXh0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5Yi25L2c6ICF44Gu5ZCN5YmN44Gu6Kqt44G/6L6844G/KGVuZylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dENvdW50ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmFtZVN0cjtcclxuICAgICAgICAgICAgICAgIGlmIChlbmNvZGVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVN0ciA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldFN0cmluZyh0ZXh0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVN0ciA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldFdTdHJpbmcodGV4dENvdW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+ODouODh+ODq+WQjVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0Q291bnQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBuYW1lV1N0cjtcclxuICAgICAgICAgICAgICAgIGlmIChlbmNvZGVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVdTdHIgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRTdHJpbmcodGV4dENvdW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVXU3RyID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0V1N0cmluZyh0ZXh0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v44Oi44OH44Or5ZCN6IuxXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHRDb3VudCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWVXU3RyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuY29kZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lV1N0ciA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldFN0cmluZyh0ZXh0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVdTdHIgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRXU3RyaW5nKHRleHRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/jgrPjg6Hjg7Pjg4hcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dENvdW50ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmFtZVdTdHI7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW5jb2RlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVXU3RyID0gKHRoaXMuYnVmZmVyUmVhZGVyLkdldFN0cmluZyh0ZXh0Q291bnQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVXU3RyID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0V1N0cmluZyh0ZXh0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v44Kz44Oh44Oz44OI6IuxXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHRDb3VudCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWVXU3RyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuY29kZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lV1N0ciA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldFN0cmluZyh0ZXh0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVdTdHIgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRXU3RyaW5nKHRleHRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/poILngrnjgqTjg7Pjg4fjg4Pjgq/jgrnjga7jg5DjgqTjg4jmlbBcclxuICAgICAgICB2YXIgdmVydGV4SW5kZXhCeXRlU2l6ZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAvL+ODnuODhuODquOCouODq+OCpOODs+ODh+ODg+OCr+OCueOBruODkOOCpOODiOaVsFxyXG4gICAgICAgIHZhciBtYXRlcmlhbEluZGV4Qnl0ZVNpemUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgLy/jg5zjg7zjg7PjgqTjg7Pjg4fjg4Pjgq/jgrnjga7jg5DjgqTjg4jmlbBcclxuICAgICAgICB2YXIgYm9uZUluZGV4Qnl0ZUNvdW50ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgIC8v44Oi44O844OV44Kk44Oz44OH44OD44Kv44K544Gu44OQ44Kk44OI5pWwXHJcbiAgICAgICAgdmFyIG1vcnBoSW5kZXhCeXRlU2l6ZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAvL+mggueCueani+mAoOS9k+OBruWIl+aMmeWei1xyXG4gICAgICAgIHZhciB0eXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgIHZhciB1dkV4Q291bnQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgdmFyIHZlcnRleENvdW50ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0VUludCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9VVl9Ob3JtYWw6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh1dkV4Q291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzMgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8zLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMyA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzQgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8zLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfNC5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1NpbmdsZUJvbmU6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh1dkV4Q291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzMgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8zLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzMgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl80ID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMy5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzQucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfRG91YmxlQm9uZTpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHV2RXhDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMyA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMy5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzMgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl80ID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8zLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfNC5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1F1YWRCb25lOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodXZFeENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQ0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSAtdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSAtdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQ0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMSA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzIgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8zID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQ0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzMucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMyA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzQgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMy5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzQucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfU0RFRkJvbmU6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJzZGVmIGlzIG5vdCBzdXBwb3J0LlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX01peDpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHV2RXhDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXg0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZlcnRleFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfU2luZ2xlQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDIucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDMucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDQucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQucHVzaCgxLjApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0Mi5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0My5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NC5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfRG91YmxlQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdlaWdodCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQucHVzaCh3ZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzLnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0LnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0Mi5wdXNoKDEuMCAtIHdlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0LnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9RdWFkQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9TREVGQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwic2RlZiBpcyBub3Qgc3VwcG9ydGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2ZXJ0ZXhUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1NpbmdsZUJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4Mi5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4My5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NC5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodC5wdXNoKDEuMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0LnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9Eb3VibGVCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdlaWdodCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQucHVzaCh3ZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzLnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0LnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0Mi5wdXNoKDEuMCAtIHdlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0LnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9RdWFkQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfU0RFRkJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcInNkZWYgaXMgbm90IHN1cHBvcnRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXg0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZlcnRleFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfU2luZ2xlQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4Mi5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4My5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NC5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodC5wdXNoKDEuMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0LnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9Eb3VibGVCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ZWlnaHQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0LnB1c2god2VpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4My5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NC5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDIucHVzaCgxLjAgLSB3ZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0My5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NC5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfUXVhZEJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9TREVGQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwic2RlZiBpcyBub3Qgc3VwcG9ydGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMyA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXg0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZlcnRleFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfU2luZ2xlQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzMucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDIucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDMucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDQucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQucHVzaCgxLjApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0Mi5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0My5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NC5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfRG91YmxlQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzMucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdlaWdodCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQucHVzaCh3ZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzLnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0LnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0Mi5wdXNoKDEuMCAtIHdlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0LnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9RdWFkQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzMucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9TREVGQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwic2RlZiBpcyBub3Qgc3VwcG9ydGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMyA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzQgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2ZXJ0ZXhUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1NpbmdsZUJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8zLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfNC5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4Mi5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4My5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NC5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodC5wdXNoKDEuMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0LnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9Eb3VibGVCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMy5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzQucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdlaWdodCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQucHVzaCh3ZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzLnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0LnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0Mi5wdXNoKDEuMCAtIHdlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0LnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9RdWFkQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzMucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl80LnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfU0RFRkJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcInNkZWYgaXMgbm90IHN1cHBvcnRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtYXRlcmlhbENvdW50O1xyXG4gICAgICAgIG1hdGVyaWFsQ291bnQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQobWF0ZXJpYWxJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICB2YXIgc3Vic2V0ID0gbmV3IEFycmF5KG1hdGVyaWFsQ291bnQpO1xyXG4gICAgICAgIHZhciBkaXIgPSBHZXREaXJlY3RvcnkodGhpcy5maWxlUGF0aCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRlcmlhbENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGZpbGVOYW1lQ291bnQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoKTtcclxuICAgICAgICAgICAgaWYgKGVuY29kZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXRlcmlhbEZpbGVQYXRoID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0U3RyaW5nKGZpbGVOYW1lQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgYXJ5X21hdGVyaWFsLnB1c2goUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZU1hdGVyaWFsRnJvbUZpbGUoZGlyICsgbWF0ZXJpYWxGaWxlUGF0aCwgdGhpcy5jb250YWluZXIsIHRoaXMuZ3JhcGhpY0RldmljZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGVyaWFsRmlsZVBhdGggPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRXU3RyaW5nKGZpbGVOYW1lQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgYXJ5X21hdGVyaWFsLnB1c2goUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZU1hdGVyaWFsRnJvbUZpbGUoZGlyICsgbWF0ZXJpYWxGaWxlUGF0aCwgdGhpcy5jb250YWluZXIsIHRoaXMuZ3JhcGhpY0RldmljZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN1YnNldFtpXSA9ICh0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdlb21ldHJ5LlNldFN1YnNldChzdWJzZXQpO1xyXG4gICAgICAgIHRoaXMubWVzaC5TZXRQYXJhbWV0ZXIoZ2VvbWV0cnksIGFyeV9tYXRlcmlhbCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuTG9hZEVuZCgpO1xyXG4gICAgfTtcclxuICAgIEIzTUhvbGRlci5wcm90b3R5cGUuUmVhZEluZGV4ID0gZnVuY3Rpb24gKHZlcnRleEluZGV4Qnl0ZVNpemUpIHtcclxuICAgICAgICAvL+OCpOODs+ODh+ODg+OCr+OCueOBruiqreOBv+i+vOOBv1xyXG4gICAgICAgIHZhciBpbmRleENvdW50ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KCk7XHJcbiAgICAgICAgdmFyIGlkeCA9IG5ldyBBcnJheShpbmRleENvdW50ICogMyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmRleENvdW50ICogMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlkeFtpXSA9ICh0aGlzLmJ1ZmZlclJlYWRlci5HZXRVSW50KHZlcnRleEluZGV4Qnl0ZVNpemUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlkeDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQjNNSG9sZGVyO1xyXG59KCkpO1xyXG52YXIgTWF0ZXJpYWxCaW5Mb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYXRlcmlhbEJpbkxvYWRlcigpIHtcclxuICAgIH1cclxuICAgIE1hdGVyaWFsQmluTG9hZGVyLnByb3RvdHlwZS5Jbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtYXQ7XHJcbiAgICAgICAgdmFyIG1hdGVyaWFsUmVhZGVyID0gbmV3IEJpbmFyeVJlYWRlcl8xLmRlZmF1bHQodGhpcy5idWZmZXIpO1xyXG4gICAgICAgIHZhciBtYWdpYyA9IG1hdGVyaWFsUmVhZGVyLkdldFN0cmluZygxNik7XHJcbiAgICAgICAgaWYgKG1hZ2ljICE9IFwiQnV0aU1hdGVyaWFsRGF0YVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi44OV44Kh44Kk44Or44GM6YGV44GE44G+44GZXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB2ZXJzaW9uID0gbWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAvLzDjgadzdGQ6OndzdHJpbmcgLDHjgadzdGQ6OnN0cmluZ1xyXG4gICAgICAgIHZhciBlbmNvZGVUeXBlID0gbWF0ZXJpYWxSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIG1hdGVyaWFsTmFtZUNvdW50ID0gbWF0ZXJpYWxSZWFkZXIuR2V0SW50KCk7XHJcbiAgICAgICAgICAgIGlmIChlbmNvZGVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbFJlYWRlci5HZXRTdHJpbmcobWF0ZXJpYWxOYW1lQ291bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxSZWFkZXIuR2V0V1N0cmluZyhtYXRlcmlhbE5hbWVDb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/jg57jg4bjg6rjgqLjg6vlkI3oi7FcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBtYXRlcmlhbE5hbWVDb3VudCA9IG1hdGVyaWFsUmVhZGVyLkdldEludCgpO1xyXG4gICAgICAgICAgICBpZiAoZW5jb2RlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxSZWFkZXIuR2V0U3RyaW5nKG1hdGVyaWFsTmFtZUNvdW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsUmVhZGVyLkdldFdTdHJpbmcobWF0ZXJpYWxOYW1lQ291bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v44OG44Kv44K544OB44OjXHJcbiAgICAgICAgdmFyIHRleHR1cmVDb3VudCA9IG1hdGVyaWFsUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICB2YXIgYXJ5X3RleHR1cmUgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB2YXIgZGlyID0gR2V0RGlyZWN0b3J5KHRoaXMuZmlsZVBhdGgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dHVyZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHRleE5hbWVDb3VudCA9IG1hdGVyaWFsUmVhZGVyLkdldEludCgpO1xyXG4gICAgICAgICAgICBpZiAodGV4TmFtZUNvdW50IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgYXJ5X3RleHR1cmUucHVzaCh0aGlzLmNvbnRhaW5lci5BZGRUZXh0dXJlRnJvbUZpbGUoXCJcIiwgdGhpcy5ncmFwaGljRGV2aWNlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZW5jb2RlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRleHR1cmVOYW1lID0gbWF0ZXJpYWxSZWFkZXIuR2V0U3RyaW5nKHRleE5hbWVDb3VudCk7XHJcbiAgICAgICAgICAgICAgICBhcnlfdGV4dHVyZS5wdXNoKHRoaXMuY29udGFpbmVyLkFkZFRleHR1cmVGcm9tRmlsZShkaXIgKyBcIi4uL1wiICsgdGV4dHVyZU5hbWUsIHRoaXMuZ3JhcGhpY0RldmljZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRleHR1cmVOYW1lID0gbWF0ZXJpYWxSZWFkZXIuR2V0V1N0cmluZyh0ZXhOYW1lQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgYXJ5X3RleHR1cmUucHVzaCh0aGlzLmNvbnRhaW5lci5BZGRUZXh0dXJlRnJvbUZpbGUoZGlyICsgXCIuLi9cIiArIHRleHR1cmVOYW1lLCB0aGlzLmdyYXBoaWNEZXZpY2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+ODnuODhuODquOCouODq1xyXG4gICAgICAgIHZhciBkaWZmdXNlID0gbmV3IFZlY3RvcjRfMS5kZWZhdWx0KG1hdGVyaWFsUmVhZGVyLkdldEZsb2F0KCksIG1hdGVyaWFsUmVhZGVyLkdldEZsb2F0KCksIG1hdGVyaWFsUmVhZGVyLkdldEZsb2F0KCksIG1hdGVyaWFsUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgIHZhciBzcGVjdWxhciA9IG5ldyBWZWN0b3I0XzEuZGVmYXVsdChtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpLCBtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpLCBtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpLCBtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICB2YXIgYW1iaWVudCA9IG5ldyBWZWN0b3I0XzEuZGVmYXVsdChtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpLCBtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpLCBtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpLCBtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICB2YXIgZW1pc3NpdmUgPSBuZXcgVmVjdG9yNF8xLmRlZmF1bHQobWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKSwgbWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKSwgbWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKSwgbWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgdmFyIGJ5dGVGbGFnID0gbWF0ZXJpYWxSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgIHZhciBzcGhlcmVGbGFnID0gbWF0ZXJpYWxSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIG1hdGVyaWFsTmFtZUNvdW50ID0gbWF0ZXJpYWxSZWFkZXIuR2V0SW50KCk7XHJcbiAgICAgICAgICAgIGlmIChlbmNvZGVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbFJlYWRlci5HZXRTdHJpbmcobWF0ZXJpYWxOYW1lQ291bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxSZWFkZXIuR2V0V1N0cmluZyhtYXRlcmlhbE5hbWVDb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbC5TZXRQYXJhbWV0ZXIoYW1iaWVudCwgdGhpcy5ncmFwaGljRGV2aWNlLCBhcnlfdGV4dHVyZSk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuTG9hZEVuZCgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNYXRlcmlhbEJpbkxvYWRlcjtcclxufSgpKTtcclxudmFyIFJlc291cmNlQ3JlYXRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlc291cmNlQ3JlYXRlcigpIHtcclxuICAgIH1cclxuICAgIFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSA9IGZ1bmN0aW9uIChkYXRhLCBpc1VWLCBpc05vcm1hbCwgaXNDb2xvciwgYXJnX2RldmljZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgR2VvbWV0cnlfMS5kZWZhdWx0KGRhdGEsIGlzVVYsIGlzTm9ybWFsLCBpc0NvbG9yLCBhcmdfZGV2aWNlKTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlTWF0ZXJpYWwgPSBmdW5jdGlvbiAoYXJnX2FtYmllbnQsIGFyZ19kZXZpY2UsIGFyZ19hcnlfdGV4dHVyZSwgYXJnX2FyeV9leFBhcm1zKSB7XHJcbiAgICAgICAgdmFyIG1hdCA9IG5ldyBNYXRlcmlhbF8xLmRlZmF1bHQoKTtcclxuICAgICAgICBtYXQuU2V0UGFyYW1ldGVyKGFyZ19hbWJpZW50LCBhcmdfZGV2aWNlLCBhcmdfYXJ5X3RleHR1cmUsIGFyZ19hcnlfZXhQYXJtcyk7XHJcbiAgICAgICAgcmV0dXJuIG1hdDtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlU2hhZGVyID0gZnVuY3Rpb24gKHZzU291cmNlLCBmc1NvdXJjZSwgYXJnX2dyYXBoaWNEZXZpY2UpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNoYWRlcl8xLmRlZmF1bHQodnNTb3VyY2UsIGZzU291cmNlLCBhcmdfZ3JhcGhpY0RldmljZSk7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZVNvdW5kID0gZnVuY3Rpb24gKGFyZ19zb3VuZFNvcmNlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTb3VuZF8xLmRlZmF1bHQoYXJnX3NvdW5kU29yY2UpO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ3JlYXRlci5DcmVhdGVUZXh0dXJlID0gZnVuY3Rpb24gKGFyZ19wYXRoLCBhcmdfZGV2aWNlKSB7XHJcbiAgICAgICAgdmFyIHRleCA9IG5ldyBUZXh0dXJlXzEuZGVmYXVsdChhcmdfcGF0aCwgYXJnX2RldmljZSk7XHJcbiAgICAgICAgdGV4LkluaXRpYWxpemUoKTtcclxuICAgICAgICByZXR1cm4gdGV4O1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ3JlYXRlci5DcmVhdGVGcmFtZUJ1ZmZlciA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCBhcmdfZGV2aWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGcmFtZUJ1ZmZlclRleHR1cmVfMS5kZWZhdWx0KGFyZ19kZXZpY2UsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ3JlYXRlci5DcmVhdGVNZXNoUmVzb3VyY2VGcm9tRmlsZSA9IGZ1bmN0aW9uIChhcmdfZmlsZVBhdGgsIHJlc291cmNlQ29udGFpbmVyLCBhcmdfZGV2aWNlKSB7XHJcbiAgICAgICAgdmFyIG91dCA9IG5ldyBNZXNoXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBob2xkZXIgPSBuZXcgQjNNSG9sZGVyKCk7XHJcbiAgICAgICAgcmVzb3VyY2VDb250YWluZXIuTG9hZFN0YXJ0KCk7XHJcbiAgICAgICAgaG9sZGVyLmdyYXBoaWNEZXZpY2UgPSBhcmdfZGV2aWNlO1xyXG4gICAgICAgIGhvbGRlci5jb250YWluZXIgPSByZXNvdXJjZUNvbnRhaW5lcjtcclxuICAgICAgICBob2xkZXIuZmlsZVBhdGggPSBhcmdfZmlsZVBhdGg7XHJcbiAgICAgICAgaG9sZGVyLm1lc2ggPSBvdXQ7XHJcbiAgICAgICAgRmlsZUxvYWRlcl8xLmRlZmF1bHQuTG9hZEJpbihhcmdfZmlsZVBhdGgsIGhvbGRlcik7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlTWF0ZXJpYWxGcm9tRmlsZSA9IGZ1bmN0aW9uIChhcmdfZmlsZVBhdGgsIHJlc291cmNlQ29udGFpbmVyLCBhcmdfZGV2aWNlKSB7XHJcbiAgICAgICAgdmFyIG91dCA9IG5ldyBNYXRlcmlhbF8xLmRlZmF1bHQoKTtcclxuICAgICAgICB2YXIgaG9sZGVyID0gbmV3IE1hdGVyaWFsQmluTG9hZGVyKCk7XHJcbiAgICAgICAgcmVzb3VyY2VDb250YWluZXIuTG9hZFN0YXJ0KCk7XHJcbiAgICAgICAgaG9sZGVyLmdyYXBoaWNEZXZpY2UgPSBhcmdfZGV2aWNlO1xyXG4gICAgICAgIGhvbGRlci5jb250YWluZXIgPSByZXNvdXJjZUNvbnRhaW5lcjtcclxuICAgICAgICBob2xkZXIuZmlsZVBhdGggPSBhcmdfZmlsZVBhdGg7XHJcbiAgICAgICAgaG9sZGVyLm1hdGVyaWFsID0gb3V0O1xyXG4gICAgICAgIEZpbGVMb2FkZXJfMS5kZWZhdWx0LkxvYWRCaW4oYXJnX2ZpbGVQYXRoLCBob2xkZXIpO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlc291cmNlQ3JlYXRlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUmVzb3VyY2VDcmVhdGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgTWF0cml4XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWF0aC9NYXRyaXhcIikpO1xyXG52YXIgVmVjdG9yM18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01hdGgvVmVjdG9yM1wiKSk7XHJcbnZhciBNYXRoSGVscGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVG9vbC9NYXRoSGVscGVyXCIpKTtcclxudmFyIGNhbGNNYXRyaXg0eDQgPSBuZXcgTWF0cml4XzEuZGVmYXVsdCgpLklkZW50aXR5KCk7XHJcbnZhciBUcmFuc2Zvcm0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUcmFuc2Zvcm0ocG9zaXRpb24sIHJvdGF0aW9uLCBzY2FsZSkge1xyXG4gICAgICAgIGlmIChwb3NpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAwKTtcclxuICAgICAgICBpZiAoc2NhbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZSA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgxLCAxLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IG5ldyBNYXRyaXhfMS5kZWZhdWx0KCkuSWRlbnRpdHkoKTtcclxuICAgICAgICBpZiAocm90YXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbi5Sb3RhdGVfYihNYXRoSGVscGVyXzEuZGVmYXVsdC5Ub1JhZGlhbihyb3RhdGlvbi56KSwgVmVjdG9yM18xLmRlZmF1bHQuekF4aXMpLk11bHRpcGx5X2IobmV3IE1hdHJpeF8xLmRlZmF1bHQoKS5JZGVudGl0eSgpLlJvdGF0ZV9iKE1hdGhIZWxwZXJfMS5kZWZhdWx0LlRvUmFkaWFuKHJvdGF0aW9uLnkpLCBWZWN0b3IzXzEuZGVmYXVsdC55QXhpcykpLk11bHRpcGx5X2IobmV3IE1hdHJpeF8xLmRlZmF1bHQoKS5JZGVudGl0eSgpLlJvdGF0ZV9iKE1hdGhIZWxwZXJfMS5kZWZhdWx0LlRvUmFkaWFuKHJvdGF0aW9uLngpLCBWZWN0b3IzXzEuZGVmYXVsdC54QXhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdlbmVyYXRlRnVuYyA9IHRoaXMuU2NhbGVSb3RhdGlvblRyYW5zbGF0ZTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcIlBvc2l0aW9uXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG1hdCA9IHRoaXMuTWF0cml4O1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KG1hdC5kYXRhWzEyXSwgbWF0LmRhdGFbMTNdLCBtYXQuZGF0YVsxNF0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdmFsdWUueDtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdmFsdWUueTtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi56ID0gdmFsdWUuejtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0cml4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hdHJpeC5kYXRhWzEyXSA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0cml4LmRhdGFbMTNdID0gdGhpcy5wb3NpdGlvbi55O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRyaXguZGF0YVsxNF0gPSB0aGlzLnBvc2l0aW9uLno7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJMb2NhbFBvc2l0aW9uXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24uQ2xvbmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJSb3RhdGlvblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJhc2VUcmFuc2Zvcm0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVRyYW5zZm9ybS5Sb3RhdGlvbi5NdWx0aXBseSh0aGlzLnJvdGF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGlvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRpb24gPSB2YWx1ZS5DbG9uZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1hdHJpeCA9IG51bGw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwiU2NhbGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2FsZS5DbG9uZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZS54ID0gdmFsdWUueDtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZS55ID0gdmFsdWUueTtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZS56ID0gdmFsdWUuejtcclxuICAgICAgICAgICAgdGhpcy5tYXRyaXggPSBudWxsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcIk1hdHJpeFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdHJpeCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUZ1bmMoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYmFzZVRyYW5zZm9ybSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5iYXNlVHJhbnNmb3JtLk1hdHJpeC5NdWx0aXBseSh0aGlzLm1hdHJpeCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJMb2NhbE1hdHJpeFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdHJpeCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUZ1bmMoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcIkJhc2VUcmFuc2Zvcm1cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iYXNlVHJhbnNmb3JtO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoYXJnX2Jhc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlVHJhbnNmb3JtID0gYXJnX2Jhc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwiU2V0UG9zaXRpb25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1hdHJpeCA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcIlNldFNjYWxlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRyaXggPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2FsZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLkdldEZyb250ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IzXzEuZGVmYXVsdC56QXhpcy5NdWx0aXBseV9NYXRyaXgodGhpcy5Sb3RhdGlvbikuTm9ybWFsaXplX2IoKTtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLkdldFJpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IzXzEuZGVmYXVsdC54QXhpcy5NdWx0aXBseV9NYXRyaXgodGhpcy5Sb3RhdGlvbikuTm9ybWFsaXplX2IoKTtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLkdldFVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IzXzEuZGVmYXVsdC55QXhpcy5NdWx0aXBseV9NYXRyaXgodGhpcy5Sb3RhdGlvbikuTm9ybWFsaXplX2IoKTtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLlNjYWxlUm90YXRpb25UcmFuc2xhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tYXRyaXggPSBuZXcgTWF0cml4XzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMubWF0cml4LklkZW50aXR5KCk7XHJcbiAgICAgICAgdGhpcy5tYXRyaXguVHJhbnNsYXRlX2IodGhpcy5wb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5tYXRyaXguTXVsdGlwbHlfYih0aGlzLnJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLm1hdHJpeC5TY2FsZV9iKHRoaXMuc2NhbGUpO1xyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuTG9va0F0ID0gZnVuY3Rpb24gKGFyZ190YXJnZXRQb3MsIGFyZ191cEF4aXMpIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uLklkZW50aXR5KCk7XHJcbiAgICAgICAgdmFyIHogPSAoYXJnX3RhcmdldFBvcy5TdWIodGhpcy5Qb3NpdGlvbikpLk5vcm1hbGl6ZSgpLk11bHRpcGx5KC0xKTtcclxuICAgICAgICB2YXIgeCA9IGFyZ191cEF4aXMuQ3Jvc3MoeikuTm9ybWFsaXplKCk7XHJcbiAgICAgICAgdmFyIHkgPSB6LkNyb3NzKHgpLk5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIHRoaXMucm90YXRpb24uZGF0YVswXSA9IHgueDtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uLmRhdGFbMV0gPSB4Lnk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbi5kYXRhWzJdID0geC56O1xyXG4gICAgICAgIHRoaXMucm90YXRpb24uZGF0YVs0XSA9IHkueDtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uLmRhdGFbNV0gPSB5Lnk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbi5kYXRhWzZdID0geS56O1xyXG4gICAgICAgIHRoaXMucm90YXRpb24uZGF0YVs4XSA9IHoueDtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uLmRhdGFbOV0gPSB6Lnk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbi5kYXRhWzEwXSA9IHouejtcclxuICAgICAgICB0aGlzLm1hdHJpeCA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5TY2FsZVRyYW5zbGF0ZVJvdGF0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubWF0cml4ID0gbmV3IE1hdHJpeF8xLmRlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLm1hdHJpeC5JZGVudGl0eSgpO1xyXG4gICAgICAgIHRoaXMubWF0cml4Lk11bHRpcGx5X2IodGhpcy5yb3RhdGlvbik7XHJcbiAgICAgICAgdGhpcy5tYXRyaXguVHJhbnNsYXRlX2IodGhpcy5wb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5tYXRyaXguU2NhbGVfYih0aGlzLnNjYWxlKTtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLlRyYW5zbGF0ZSA9IGZ1bmN0aW9uIChhcmdfdmVsb2NpdHkpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLnBvc2l0aW9uLnggKyBhcmdfdmVsb2NpdHkueDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLnBvc2l0aW9uLnkgKyBhcmdfdmVsb2NpdHkueTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnogPSB0aGlzLnBvc2l0aW9uLnogKyBhcmdfdmVsb2NpdHkuejtcclxuICAgICAgICBpZiAodGhpcy5tYXRyaXgpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRyaXguZGF0YVsxMl0gPSB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICAgICAgICAgIHRoaXMubWF0cml4LmRhdGFbMTNdID0gdGhpcy5wb3NpdGlvbi55O1xyXG4gICAgICAgICAgICB0aGlzLm1hdHJpeC5kYXRhWzE0XSA9IHRoaXMucG9zaXRpb24uejtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5UcmFuc2xhdGVYID0gZnVuY3Rpb24gKGFyZ194KSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5kYXRhWzBdICs9IGFyZ194O1xyXG4gICAgICAgIGlmICh0aGlzLm1hdHJpeCkge1xyXG4gICAgICAgICAgICB0aGlzLm1hdHJpeC5kYXRhWzEyXSA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5UcmFuc2xhdGVZID0gZnVuY3Rpb24gKGFyZ195KSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5kYXRhWzFdICs9IGFyZ195O1xyXG4gICAgICAgIGlmICh0aGlzLm1hdHJpeCkge1xyXG4gICAgICAgICAgICB0aGlzLm1hdHJpeC5kYXRhWzEzXSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5UcmFuc2xhdGVaID0gZnVuY3Rpb24gKGFyZ196KSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5kYXRhWzJdICs9IGFyZ196O1xyXG4gICAgICAgIGlmICh0aGlzLm1hdHJpeCkge1xyXG4gICAgICAgICAgICB0aGlzLm1hdHJpeC5kYXRhWzE0XSA9IHRoaXMucG9zaXRpb24uejtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5TZXRQb3NpdGlvblggPSBmdW5jdGlvbiAoYXJnX3gpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLmRhdGFbMF0gPSBhcmdfeDtcclxuICAgICAgICBpZiAodGhpcy5tYXRyaXgpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRyaXguZGF0YVsxMl0gPSB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuU2V0UG9zaXRpb25ZID0gZnVuY3Rpb24gKGFyZ195KSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5kYXRhWzFdID0gYXJnX3k7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0cml4KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0cml4LmRhdGFbMTNdID0gYXJnX3k7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuU2V0UG9zaXRpb25aID0gZnVuY3Rpb24gKGFyZ196KSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5kYXRhWzJdID0gYXJnX3o7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0cml4KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0cml4LmRhdGFbMTRdID0gdGhpcy5wb3NpdGlvbi56O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLlJvbGxfTG9jYWwgPSBmdW5jdGlvbiAoYXJnX3JvdGF0ZU1hdHJpeCkge1xyXG4gICAgICAgIHRoaXMucm90YXRpb24uTXVsdGlwbHlfYihhcmdfcm90YXRlTWF0cml4KTtcclxuICAgICAgICB0aGlzLm1hdHJpeCA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5Sb2xsX1dvcmxkID0gZnVuY3Rpb24gKGFyZ19yb3RhdGVNYXRyaXgpIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gYXJnX3JvdGF0ZU1hdHJpeC5NdWx0aXBseSh0aGlzLnJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLm1hdHJpeCA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5Sb2xsWF9Mb2NhbF9EZWdyZWVzID0gZnVuY3Rpb24gKGFyZ19kZWdyZWVzKSB7XHJcbiAgICAgICAgdGhpcy5Sb2xsWF9Mb2NhbF9SYWRpYW5zKE1hdGhIZWxwZXJfMS5kZWZhdWx0LlRvUmFkaWFuKGFyZ19kZWdyZWVzKSk7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5Sb2xsWF9Mb2NhbF9SYWRpYW5zID0gZnVuY3Rpb24gKGFyZ19yYWRpYW5zKSB7XHJcbiAgICAgICAgY2FsY01hdHJpeDR4NC5JZGVudGl0eSgpO1xyXG4gICAgICAgIGNhbGNNYXRyaXg0eDQuUm90YXRlX2IoYXJnX3JhZGlhbnMsIFZlY3RvcjNfMS5kZWZhdWx0LnhBeGlzKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uLk11bHRpcGx5X2IoY2FsY01hdHJpeDR4NCk7XHJcbiAgICAgICAgdGhpcy5tYXRyaXggPSBudWxsO1xyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuUm9sbFhfV29ybGRfRGVncmVlcyA9IGZ1bmN0aW9uIChhcmdfZGVncmVlcykge1xyXG4gICAgICAgIHRoaXMuUm9sbFhfV29ybGRfUmFkaWFucyhNYXRoSGVscGVyXzEuZGVmYXVsdC5Ub1JhZGlhbihhcmdfZGVncmVlcykpO1xyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuUm9sbFhfV29ybGRfUmFkaWFucyA9IGZ1bmN0aW9uIChhcmdfcmFkaWFucykge1xyXG4gICAgICAgIGNhbGNNYXRyaXg0eDQuSWRlbnRpdHkoKTtcclxuICAgICAgICBjYWxjTWF0cml4NHg0LlJvdGF0ZV9iKGFyZ19yYWRpYW5zLCBWZWN0b3IzXzEuZGVmYXVsdC54QXhpcyk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IGNhbGNNYXRyaXg0eDQuTXVsdGlwbHkodGhpcy5yb3RhdGlvbik7XHJcbiAgICAgICAgdGhpcy5tYXRyaXggPSBudWxsO1xyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuUm9sbFlfTG9jYWxfRGVncmVlcyA9IGZ1bmN0aW9uIChhcmdfZGVncmVlcykge1xyXG4gICAgICAgIHRoaXMuUm9sbFlfTG9jYWxfUmFkaWFucyhNYXRoSGVscGVyXzEuZGVmYXVsdC5Ub1JhZGlhbihhcmdfZGVncmVlcykpO1xyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuUm9sbFlfTG9jYWxfUmFkaWFucyA9IGZ1bmN0aW9uIChhcmdfcmFkaWFucykge1xyXG4gICAgICAgIGNhbGNNYXRyaXg0eDQuSWRlbnRpdHkoKTtcclxuICAgICAgICBjYWxjTWF0cml4NHg0LlJvdGF0ZV9iKGFyZ19yYWRpYW5zLCBWZWN0b3IzXzEuZGVmYXVsdC55QXhpcyk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbi5NdWx0aXBseV9iKGNhbGNNYXRyaXg0eDQpO1xyXG4gICAgICAgIHRoaXMubWF0cml4ID0gbnVsbDtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLlJvbGxZX1dvcmxkX0RlZ3JlZXMgPSBmdW5jdGlvbiAoYXJnX2RlZ3JlZXMpIHtcclxuICAgICAgICB0aGlzLlJvbGxZX1dvcmxkX1JhZGlhbnMoTWF0aEhlbHBlcl8xLmRlZmF1bHQuVG9SYWRpYW4oYXJnX2RlZ3JlZXMpKTtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLlJvbGxZX1dvcmxkX1JhZGlhbnMgPSBmdW5jdGlvbiAoYXJnX3JhZGlhbnMpIHtcclxuICAgICAgICBjYWxjTWF0cml4NHg0LklkZW50aXR5KCk7XHJcbiAgICAgICAgY2FsY01hdHJpeDR4NC5Sb3RhdGVfYihhcmdfcmFkaWFucywgVmVjdG9yM18xLmRlZmF1bHQueUF4aXMpO1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSBjYWxjTWF0cml4NHg0Lk11bHRpcGx5KHRoaXMucm90YXRpb24pO1xyXG4gICAgICAgIHRoaXMubWF0cml4ID0gbnVsbDtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLlJvbGxaX0xvY2FsX0RlZ3JlZXMgPSBmdW5jdGlvbiAoYXJnX2RlZ3JlZXMpIHtcclxuICAgICAgICB0aGlzLlJvbGxaX0xvY2FsX1JhZGlhbnMoTWF0aEhlbHBlcl8xLmRlZmF1bHQuVG9SYWRpYW4oYXJnX2RlZ3JlZXMpKTtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLlJvbGxaX0xvY2FsX1JhZGlhbnMgPSBmdW5jdGlvbiAoYXJnX3JhZGlhbnMpIHtcclxuICAgICAgICBjYWxjTWF0cml4NHg0LklkZW50aXR5KCk7XHJcbiAgICAgICAgY2FsY01hdHJpeDR4NC5Sb3RhdGVfYihhcmdfcmFkaWFucywgVmVjdG9yM18xLmRlZmF1bHQuekF4aXMpO1xyXG4gICAgICAgIHRoaXMucm90YXRpb24uTXVsdGlwbHlfYihjYWxjTWF0cml4NHg0KTtcclxuICAgICAgICB0aGlzLm1hdHJpeCA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5Sb2xsWl9Xb3JsZF9EZWdyZWVzID0gZnVuY3Rpb24gKGFyZ19kZWdyZWVzKSB7XHJcbiAgICAgICAgdGhpcy5Sb2xsWl9Xb3JsZF9SYWRpYW5zKE1hdGhIZWxwZXJfMS5kZWZhdWx0LlRvUmFkaWFuKGFyZ19kZWdyZWVzKSk7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5Sb2xsWl9Xb3JsZF9SYWRpYW5zID0gZnVuY3Rpb24gKGFyZ19yYWRpYW5zKSB7XHJcbiAgICAgICAgY2FsY01hdHJpeDR4NC5JZGVudGl0eSgpO1xyXG4gICAgICAgIGNhbGNNYXRyaXg0eDQuUm90YXRlX2IoYXJnX3JhZGlhbnMsIFZlY3RvcjNfMS5kZWZhdWx0LnpBeGlzKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gY2FsY01hdHJpeDR4NC5NdWx0aXBseSh0aGlzLnJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLm1hdHJpeCA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5DbG9uZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb3V0ID0gbmV3IFRyYW5zZm9ybSh0aGlzLkxvY2FsUG9zaXRpb24pO1xyXG4gICAgICAgIG91dC5zY2FsZSA9IHRoaXMuc2NhbGU7XHJcbiAgICAgICAgb3V0LnJvdGF0aW9uID0gdGhpcy5yb3RhdGlvbjtcclxuICAgICAgICBvdXQuYmFzZVRyYW5zZm9ybSA9IHRoaXMuYmFzZVRyYW5zZm9ybTtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUcmFuc2Zvcm07XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFRyYW5zZm9ybTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEdyYXBoaWNEZXZpY2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9HcmFwaGljL0dyYXBoaWNEZXZpY2VcIikpO1xyXG52YXIgUmVzb3VyY2VDb250YWluZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9QYXJ0cy9SZXNvdXJjZUNvbnRhaW5lclwiKSk7XHJcbnZhciBNb2RlbENyZWF0ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9QYXJ0cy9Nb2RlbENyZWF0ZXJcIikpO1xyXG52YXIgU2NlbmVNYW5hZ2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vU2NlbmUvU2NlbmVNYW5hZ2VyXCIpKTtcclxudmFyIElucHV0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVG9vbC9JbnB1dFwiKSk7XHJcbnZhciBUaXRsZVNjZW5lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVGl0bGVTY2VuZVwiKSk7XHJcbnZhciBMb2FkU2NlbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Mb2FkU2NlbmVcIikpO1xyXG5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMganMgaXMgd2ViR0wvaW5kZXgudHNcIik7XHJcbiAgICAvL2NhbnZhc+OCqOODrOODoeODs+ODiOOCkuWPluW+l1xyXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNhbnZhcycpO1xyXG4gICAgLy9hdWRpb0VsZW1lbnQudm9sdW1lPTAuMDtcclxuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgXCJcIik7XHJcbiAgICBJbnB1dF8xLmRlZmF1bHQuY2FudmFzID0gY2FudmFzO1xyXG4gICAgdmFyIHJlc291cmNlQ29udGFpbmVyID0gbmV3IFJlc291cmNlQ29udGFpbmVyXzEuZGVmYXVsdCgpO1xyXG4gICAgdmFyIGdyYXBoaWNEZXZpY2UgPSBuZXcgR3JhcGhpY0RldmljZV8xLmRlZmF1bHQoY2FudmFzKTtcclxuICAgIHZhciBtb2RlbENyZWF0ZXIgPSBuZXcgTW9kZWxDcmVhdGVyXzEuZGVmYXVsdChncmFwaGljRGV2aWNlLCByZXNvdXJjZUNvbnRhaW5lcik7XHJcbiAgICB2YXIgc2NlbmVNYW5hZ2VyID0gbmV3IFNjZW5lTWFuYWdlcl8xLmRlZmF1bHQobW9kZWxDcmVhdGVyLCByZXNvdXJjZUNvbnRhaW5lciwgZ3JhcGhpY0RldmljZSk7XHJcbiAgICBzY2VuZU1hbmFnZXIuQWRkU2NlbmUobmV3IFRpdGxlU2NlbmVfMS5kZWZhdWx0KHNjZW5lTWFuYWdlciksIFwidGl0bGVcIik7XHJcbiAgICBzY2VuZU1hbmFnZXIuQWRkU2NlbmUobmV3IExvYWRTY2VuZV8xLmRlZmF1bHQoc2NlbmVNYW5hZ2VyKSwgXCJsb2FkXCIpO1xyXG4gICAgc2NlbmVNYW5hZ2VyLkNoYW5nZVNjZW5lKFwidGl0bGVcIik7XHJcbiAgICB0aWNrKCk7XHJcbiAgICAvLyDmgZLluLjjg6vjg7zjg5dcclxuICAgIGZ1bmN0aW9uIHRpY2soKSB7XHJcbiAgICAgICAgc2NlbmVNYW5hZ2VyLlVwZGF0ZSgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coSW5wdXQubW91c2VQb3NpdGlvbi54K1wiLFwiK0lucHV0Lm1vdXNlUG9zaXRpb24ueCk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xyXG4gICAgfVxyXG4gICAgO1xyXG59O1xyXG4iLCJcclxucmVxdWlyZShcIi4vV2ViR2wvaW5kZXhcIikiXSwic291cmNlUm9vdCI6IiJ9