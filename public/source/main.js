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
        this.modelID = this.gameObject.GetRenderer().Regist(this.model, this.layer);
    };
    ModelDrawComponent.prototype.OnRemove = function () {
        this.gameObject.GetRenderer().UnRegist(this.modelID, this.layer);
    };
    return ModelDrawComponent;
}(Component_1.default));
exports.default = ModelDrawComponent;


/***/ }),

/***/ "./WebGl/Component/SampleComponent.ts":
/*!********************************************!*\
  !*** ./WebGl/Component/SampleComponent.ts ***!
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
var Input_1 = __importDefault(__webpack_require__(/*! ../Tool/Input */ "./WebGl/Tool/Input.ts"));
var Component_1 = __importDefault(__webpack_require__(/*! ./Component */ "./WebGl/Component/Component.ts"));
var SampleComponent = /** @class */ (function (_super) {
    __extends(SampleComponent, _super);
    function SampleComponent() {
        var _this = _super.call(this) || this;
        Input_1.default.AddKeyDownEvent(_this, "samplecomponent", true);
        return _this;
    }
    SampleComponent.prototype.OnSet = function () {
    };
    SampleComponent.prototype.Update = function () {
        this.gameObject.transform.RollY_Local_Degrees(2);
        this.gameObject.transform.RollX_World_Degrees(1);
    };
    SampleComponent.prototype.OnKeyDown = function (e) {
        if (e.key == "ArrowLeft") {
            this.gameObject.transform.TranslateX(-0.5);
        }
        if (e.key == "ArrowRight") {
            this.gameObject.transform.TranslateX(0.5);
        }
        if (e.key == "ArrowUp") {
            this.gameObject.transform.TranslateY(-1);
        }
        if (e.key == "ArrowDown") {
            this.gameObject.transform.TranslateY(1);
        }
        if (e.key == "8") {
            this.gameObject.transform.TranslateZ(-1);
        }
        if (e.key == "5") {
            this.gameObject.transform.TranslateZ(1);
        }
    };
    return SampleComponent;
}(Component_1.default));
exports.default = SampleComponent;


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
        this.offset = this.targetTransform.Position.Sub(this.transform.Position);
        this.scalePase = this.targetTransform.Scale.Sub(this.transform.Scale);
        this.initPosition = this.transform.Position;
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

/***/ "./WebGl/GameObject/GameObject.ts":
/*!****************************************!*\
  !*** ./WebGl/GameObject/GameObject.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameObject = /** @class */ (function () {
    function GameObject(arg_manager, arg_name, arg_transform) {
        this.transform = arg_transform;
        this.components = new Array();
        this.newComponents = new Array();
        this.isRemove = false;
        this.name = arg_name;
        this.manager = arg_manager;
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
    GameObject.prototype.Hit = function (arg_object) {
        //if(this!=arg_object)
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
    GameObjectManager.prototype.AddGameObject = function (arg_name, arg_transform) {
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
        if (arg_transform) {
            newObj = new GameObject_1.default(this, arg_name, arg_transform);
        }
        else {
            newObj = new GameObject_1.default(this, arg_name, new Transform_1.default());
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
                this.sceneManager.GetResourceContainer().AddGeometry(ResourceCreater_1.default.CreateGeometry(GeometryGenerator_1.default.CreateSphere(12, 12, 0.5, new Vector4_1.default(1.0, 1.0, 1.0, 1)), true, true, true, this.sceneManager.GetGraphicDevice()), "sphere");
                this.sceneManager.GetResourceContainer().AddGeometry(ResourceCreater_1.default.CreateGeometry(GeometryGenerator_1.default.CreatePlane(new Vector2_1.default(1, 1), false, new Vector4_1.default(1.0, 1.0, 1.0, 1)), true, false, false, this.sceneManager.GetGraphicDevice()), "plane");
                //this.sceneManger.GetResourceContainer().AddMesh(ResourceCreater.CreateMeshResourceFromFile("model/Maguro/maguro.b3m",this.sceneManger.GetResourceContainer(),this.sceneManger.GetGraphicDevice()),"maguro");
                this.sceneManager.GetResourceContainer().AddSoundFromFile("audio/Ending.mp3", "sample");
                caloryTexture = ResourceCreater_1.default.CreateTexture('image/calory.png', this.sceneManager.GetGraphicDevice());
                this.sceneManager.GetResourceContainer().AddTexture(caloryTexture, "calory");
                material = this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater_1.default.CreateMaterial(new Vector4_1.default(0.1, 0.1, 0.1, 1.0), this.sceneManager.GetGraphicDevice(), [this.sceneManager.GetResourceContainer().GetTexture("calory")]), "caloryMaterial");
                material.AddExParam(4, 3, new Vector3_1.default(5, 5, 10));
                material = this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater_1.default.CreateMaterial(new Vector4_1.default(0.1, 0.1, 0.1, 1.0), this.sceneManager.GetGraphicDevice()), "nonTextureMaterial");
                material.AddExParam(4, 3, new Vector3_1.default(5, 5, 10));
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
    function Sphere(arg_r, arg_p) {
        this.radius = arg_r;
        this.position = arg_p;
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

Object.defineProperty(exports, "__esModule", { value: true });
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
        output.data[0] = this.data[0] * arg_matrix.data[0] + this.data[1] * arg_matrix.data[1] + this.data[2] * arg_matrix.data[2] + arg_matrix.data[3];
        output.data[1] = this.data[0] * arg_matrix.data[4] + this.data[1] * arg_matrix.data[5] + this.data[2] * arg_matrix.data[6] + arg_matrix.data[7];
        output.data[2] = this.data[0] * arg_matrix.data[8] + this.data[1] * arg_matrix.data[9] + this.data[2] * arg_matrix.data[10] + arg_matrix.data[11];
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
        this.octree = new Octree_1.default(6, new Vector3_1.default(-30, -30, -30), new Vector3_1.default(30, 30, 30));
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
var SampleComponent_1 = __importDefault(__webpack_require__(/*! ./Component/SampleComponent */ "./WebGl/Component/SampleComponent.ts"));
var CollisionComponent_1 = __importDefault(__webpack_require__(/*! ./Component/CollisionComponent */ "./WebGl/Component/CollisionComponent.ts"));
var Transform_1 = __importDefault(__webpack_require__(/*! ./Transform */ "./WebGl/Transform.ts"));
var Input_1 = __importDefault(__webpack_require__(/*! ./Tool/Input */ "./WebGl/Tool/Input.ts"));
var SceneChanger_1 = __importDefault(__webpack_require__(/*! ./Component/SceneChanger */ "./WebGl/Component/SceneChanger.ts"));
var TransformAnimation_1 = __importDefault(__webpack_require__(/*! ./Component/TransformAnimation */ "./WebGl/Component/TransformAnimation.ts"));
var Easing_1 = __importDefault(__webpack_require__(/*! ./Tool/Easing */ "./WebGl/Tool/Easing.ts"));
var SucideComponent_1 = __importDefault(__webpack_require__(/*! ./Component/SucideComponent */ "./WebGl/Component/SucideComponent.ts"));
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
        _this.zoomDirection = 1.0;
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
                material.AddExParam(4, 1, this.zoomData);
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
        this.GetCamera("main").transform.Position = new Vector3_1.default(0, -3, 10);
        this.GetCamera("main").transform.LookAt(new Vector3_1.default(0, 0, -1), Vector3_1.default.yAxis);
        this.GetCamera("main").clearColor = new Vector4_1.default(0.3, 0.3, 0.3, 1.0);
        this.cube = this.gameObjectManager.AddGameObject("cube", new Transform_1.default(new Vector3_1.default(0, 0, -1), new Vector3_1.default(10, 10, 10), new Vector3_1.default(1, 1, 1)));
        this.anotherCube = this.gameObjectManager.AddGameObject("cube", new Transform_1.default(new Vector3_1.default(3, 1, 0), new Vector3_1.default(0, 0, 0), new Vector3_1.default(3, 1, 1)));
        this.projectionPlane = this.gameObjectManager.AddGameObject("projectionCube");
        //this.torus.SetComponent(new ModelDrawComponent("hsvTorus","caloryMaterial","pointLight",1)) as ModelDrawComponent;
        //this.cube.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,false)) as ModelDrawComponent;
        this.cube.SetComponent(new ModelDrawComponent_1.default(false, "cube", "caloryMaterial", "texShader", 1, false));
        this.anotherCube.SetComponent(new ModelDrawComponent_1.default(false, "cube", "caloryMaterial", "texShader", 1, false));
        this.projectionPlane.SetComponent(new ModelDrawComponent_1.default(false, "plane", "playCameraMaterial", "texShader", 0, false));
        this.projectionPlane.transform.Scale = new Vector3_1.default(0, 0, 1);
        this.cube.SetComponent(new SampleComponent_1.default());
        this.anotherCube.transform.BaseTransform = this.cube.transform;
        this.projectionPlane.transform.Position = new Vector3_1.default(0, 0, -1);
        this.cube.SetComponent(new CollisionComponent_1.default(PrimitiveType.box_OBB, new Vector3_1.default(1.0, 1.0, 1.0), 0));
        this.anotherCube.SetComponent(new CollisionComponent_1.default(PrimitiveType.box_OBB, new Vector3_1.default(1.0, 1.0, 1.0), 0));
        var obj = this.gameObjectManager.AddGameObject("sphere", new Transform_1.default(new Vector3_1.default(3, 0, -1), new Vector3_1.default(0, 0, 0)));
        obj.SetComponent(new ModelDrawComponent_1.default(false, "sphere", "caloryMaterial", "texShader", 1, false));
        obj.SetComponent(new CollisionComponent_1.default(PrimitiveType.sphere, new Vector3_1.default(0.5, 0.5, 0.5), 0));
    };
    SampleScene.prototype.OnStart = function () {
        Input_1.default.AddKeyDownEvent(this, "sampleSceneEvent", true);
        if (this.IsLoaded()) {
            var trans = new Transform_1.default(new Vector3_1.default(0, 0, -1), new Vector3_1.default(0, 0, 0), new Vector3_1.default(500, 500, 1));
            this.cube.SetComponent(new TransformAnimation_1.default(90, false, trans, this.projectionPlane.transform, Easing_1.default.EaseInOutCirc));
        }
    };
    SampleScene.prototype.OnEnd = function () {
        Input_1.default.RemoveKeyDownEvent("sampleSceneEvent");
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
                this.sceneManager.GetResourceContainer().AddSoundFromFile("audio/Ending.mp3", "sample");
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
        this.geometry = new Sphere_1.default(arg_radius, this.transform.Position);
    }
    CollisionPrimitive_Sphere.prototype.Initialize = function () {
    };
    CollisionPrimitive_Sphere.prototype.PreInitialize = function () {
    };
    CollisionPrimitive_Sphere.prototype.GetMaxPointAndMinPoint = function (arg_outputMax, arg_outputMin) {
        arg_outputMax.data = this.geometry.position.Add(new Vector3_1.default(this.geometry.radius, this.geometry.radius, this.geometry.radius)).data;
        arg_outputMin.data = this.geometry.position.Sub(new Vector3_1.default(this.geometry.radius, this.geometry.radius, this.geometry.radius)).data;
    };
    CollisionPrimitive_Sphere.prototype.Update = function () {
        this.geometry.position = this.transform.Position;
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
                if (color) {
                    var tc = color;
                }
                else {
                    tc = ColorController_1.default.hsva(360 / row * i, 1, 1, 1);
                }
                pos.push(tx, ty, tz);
                nor.push(rx, ry, rz);
                col.push(tc[0], tc[1], tc[2], tc[3]);
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
        if (arg_color)
            col = [
                arg_color.x, arg_color.y, arg_color.z, arg_color.w,
                arg_color.x, arg_color.y, arg_color.z, arg_color.w,
                arg_color.x, arg_color.y, arg_color.z, arg_color.w,
                arg_color.x, arg_color.y, arg_color.z, arg_color.w,
            ];
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
        if (!event) {
            event = { obj: arg_obj, handleEvent: OnKeyUp };
            this.keyUpEvents[arg_eventName] = event;
        }
        if (isUseEvent)
            this.canvas.addEventListener("keyup", event, isUseEvent);
        else {
            this.canvas.addEventListener("keyup", event, false);
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
    MathHelper.ToRadian = function (degree) {
        return degree * rad;
    };
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
            this.rotation.Rotate_b(MathHelper_1.default.ToRadian(rotation.z), Vector3_1.default.zAxis).Rotate_b(MathHelper_1.default.ToRadian(rotation.y), Vector3_1.default.yAxis).Rotate_b(MathHelper_1.default.ToRadian(rotation.x), Vector3_1.default.zAxis);
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
        return Vector3_1.default.zAxis.Multiply_Matrix(this.Rotation.Transpose()).Normalize_b();
    };
    Transform.prototype.GetRight = function () {
        return Vector3_1.default.xAxis.Multiply_Matrix(this.Rotation.Transpose()).Normalize_b();
    };
    Transform.prototype.GetUp = function () {
        return Vector3_1.default.yAxis.Multiply_Matrix(this.Rotation.Transpose()).Normalize_b();
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
    canvas.width = 800;
    canvas.height = 500;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvQ29tcG9uZW50L0NvbGxpc2lvbkNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Db21wb25lbnQvQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL1dlYkdsL0NvbXBvbmVudC9Nb2RlbERyYXdDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvQ29tcG9uZW50L1NhbXBsZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Db21wb25lbnQvU2NlbmVDaGFuZ2VyLnRzIiwid2VicGFjazovLy8uL1dlYkdsL0NvbXBvbmVudC9TdWNpZGVDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvQ29tcG9uZW50L1RleHREcmF3Q29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL1dlYkdsL0NvbXBvbmVudC9UcmFuc2Zvcm1BbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvR2FtZU9iamVjdC9HYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy8uL1dlYkdsL0dhbWVPYmplY3QvR2FtZU9iamVjdE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvR3JhcGhpYy9DYW1lcmEudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvR3JhcGhpYy9HcmFwaGljRGV2aWNlLnRzIiwid2VicGFjazovLy8uL1dlYkdsL0dyYXBoaWMvTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvR3JhcGhpYy9UZXh0TW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvTGlnaHQvUG9pbnRMaWdodC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Mb2FkU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvTWF0aC9HZW9tZXRyeS9Cb3hfQUFCQi50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9NYXRoL0dlb21ldHJ5L0JveF9PQkIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvTWF0aC9HZW9tZXRyeS9HZW9tZXRyeUhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9NYXRoL0dlb21ldHJ5L1NwaGVyZS50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9NYXRoL01hdHJpeC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9NYXRoL1F1YXQudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvTWF0aC9WZWN0b3IyLnRzIiwid2VicGFjazovLy8uL1dlYkdsL01hdGgvVmVjdG9yMy50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9NYXRoL1ZlY3RvcjQudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvUGFydHMvQ29sbGlzaW9uL0NvbGxpc2lvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvUGFydHMvQ29sbGlzaW9uL0NvbGxpc2lvbk9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9QYXJ0cy9Db2xsaXNpb24vT2N0Q2VsbC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9QYXJ0cy9Db2xsaXNpb24vT2N0cmVlLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1BhcnRzL0dhbWVUaW1lLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1BhcnRzL0lELnRzIiwid2VicGFjazovLy8uL1dlYkdsL1BhcnRzL01vZGVsQ3JlYXRlci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9QYXJ0cy9SZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9QYXJ0cy9SZXNvdXJjZUNvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9SZXNvdXJjZS9GcmFtZUJ1ZmZlclRleHR1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvUmVzb3VyY2UvR2VvbWV0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvUmVzb3VyY2UvTWF0ZXJpYWwudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvUmVzb3VyY2UvTWVzaC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9SZXNvdXJjZS9TaGFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvUmVzb3VyY2UvU291bmQudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvUmVzb3VyY2UvVGV4dHVyZS50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9TYW1wbGVTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9TY2VuZS9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9TY2VuZS9TY2VuZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvVGl0bGVTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Ub29sL0JpbmFyeVJlYWRlci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Ub29sL0NvbGxpc2lvbk9iamVjdENyZWF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvVG9vbC9Db2xvckNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvVG9vbC9FYXNpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvVG9vbC9GaWxlTG9hZGVyLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1Rvb2wvR2VvbWV0cnlHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvVG9vbC9JbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Ub29sL01hdGhIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvVG9vbC9SZXNvdXJjZUNyZWF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvVHJhbnNmb3JtLnRzIiwid2VicGFjazovLy8uL1dlYkdsL2luZGV4LnRzIiwid2VicGFjazovLy8uL2dhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsOEVBQThFO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsa0NBQWtDLG1CQUFPLENBQUMsbURBQWE7QUFDdkQsK0NBQStDLG1CQUFPLENBQUMsOEVBQWdDO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0NBQXNDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2hFYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDekNhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qiw4RUFBOEU7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxrQ0FBa0MsbUJBQU8sQ0FBQyxtREFBYTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbkVhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qiw4RUFBOEU7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw4QkFBOEIsbUJBQU8sQ0FBQyw0Q0FBZTtBQUNyRCxrQ0FBa0MsbUJBQU8sQ0FBQyxtREFBYTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3ZEYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsOEVBQThFO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsa0NBQWtDLG1CQUFPLENBQUMsbURBQWE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN2Q2E7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLDhFQUE4RTtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGtDQUFrQyxtQkFBTyxDQUFDLG1EQUFhO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ25DYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsOEVBQThFO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsa0NBQWtDLG1CQUFPLENBQUMsbURBQWE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDM0RhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qiw4RUFBOEU7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCwrQkFBK0IsbUJBQU8sQ0FBQyw4Q0FBZ0I7QUFDdkQsa0NBQWtDLG1CQUFPLENBQUMsbURBQWE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDakZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esc0RBQXNELDJCQUEyQixFQUFFO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsMkJBQTJCLEVBQUU7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELDJCQUEyQixFQUFFO0FBQ25GLGtFQUFrRSwyQkFBMkIsRUFBRTtBQUMvRiwwQ0FBMEMsd0JBQXdCLEVBQUU7QUFDcEUsdUVBQXVFLDRCQUE0QixFQUFFO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Qsa0NBQWtDLEVBQUU7QUFDMUY7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3JGYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsbUNBQW1DLG1CQUFPLENBQUMsc0RBQWM7QUFDekQsa0NBQWtDLG1CQUFPLENBQUMsMENBQWM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQscUJBQXFCLEVBQUU7QUFDeEUsZ0RBQWdELHFCQUFxQixFQUFFLDBCQUEwQixxQkFBcUIsRUFBRTtBQUN4SCxtRUFBbUUsc0JBQXNCLEVBQUU7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsc0JBQXNCLEVBQUU7QUFDNUU7QUFDQSxpREFBaUQsc0JBQXNCLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN4RWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELCtCQUErQixtQkFBTyxDQUFDLDhDQUFnQjtBQUN2RCxrQ0FBa0MsbUJBQU8sQ0FBQywwQ0FBYztBQUN4RCxnQ0FBZ0MsbUJBQU8sQ0FBQyxnREFBaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDaERhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQ0FBZ0MsbUJBQU8sQ0FBQyxnREFBaUI7QUFDekQsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQWlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbk9hO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHNCQUFzQixFQUFFO0FBQ3RFO0FBQ0E7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHNCQUFzQixFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDaEhhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDdERhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxrQ0FBa0MsbUJBQU8sQ0FBQywwQ0FBYztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNoQmE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLDhFQUE4RTtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw4QkFBOEIsbUJBQU8sQ0FBQyw2Q0FBZTtBQUNyRCx3Q0FBd0MsbUJBQU8sQ0FBQywrREFBd0I7QUFDeEUsMENBQTBDLG1CQUFPLENBQUMsbUVBQTBCO0FBQzVFLDZCQUE2QixtQkFBTyxDQUFDLHlDQUFhO0FBQ2xELGdDQUFnQyxtQkFBTyxDQUFDLCtDQUFnQjtBQUN4RCxnQ0FBZ0MsbUJBQU8sQ0FBQywrQ0FBZ0I7QUFDeEQsbUNBQW1DLG1CQUFPLENBQUMsdURBQW9CO0FBQy9ELDJDQUEyQyxtQkFBTyxDQUFDLCtFQUFnQztBQUNuRixnQ0FBZ0MsbUJBQU8sQ0FBQywrQ0FBZ0I7QUFDeEQsMENBQTBDLG1CQUFPLENBQUMsNkVBQStCO0FBQ2pGLGtDQUFrQyxtQkFBTyxDQUFDLHlDQUFhO0FBQ3ZELG9DQUFvQyxtQkFBTyxDQUFDLDZDQUFlO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0NBQXNDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzlKYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxrRUFBa0U7QUFDcEgsa0RBQWtELGtFQUFrRTtBQUNwSDtBQUNBLENBQUM7QUFDRDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbEJhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQ0FBZ0MsbUJBQU8sQ0FBQywyQ0FBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzFXYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUMxWWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELCtCQUErQixtQkFBTyxDQUFDLHdDQUFVO0FBQ2pELGdDQUFnQyxtQkFBTyxDQUFDLDBDQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNuTmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3hHYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUMvSmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDcklhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQ0FBZ0MsbUJBQU8sQ0FBQyxtREFBb0I7QUFDNUQsK0JBQStCLG1CQUFPLENBQUMsbURBQVU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUNBQWlDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxzQkFBc0IsRUFBRTtBQUN0RTtBQUNBO0FBQ0EsOENBQThDLHdCQUF3QixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzdEYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDM0NhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNsQ2E7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGdDQUFnQyxtQkFBTyxDQUFDLG1EQUFvQjtBQUM1RCwyQkFBMkIsbUJBQU8sQ0FBQyxrQ0FBTztBQUMxQyxnQ0FBZ0MsbUJBQU8sQ0FBQyxxREFBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwyQkFBMkI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlDQUF5QztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHdCQUF3QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFlBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0thO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUM5Q2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDUmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDhCQUE4QixtQkFBTyxDQUFDLGtEQUFrQjtBQUN4RCx3Q0FBd0MsbUJBQU8sQ0FBQyxnRUFBeUI7QUFDekUsMENBQTBDLG1CQUFPLENBQUMsb0VBQTJCO0FBQzdFLGtDQUFrQyxtQkFBTyxDQUFDLDBEQUFzQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0Y7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN4RWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDJCQUEyQixtQkFBTyxDQUFDLGlDQUFNO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHlCQUF5QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxzQkFBc0IsRUFBRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx3QkFBd0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDaEZhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCx3Q0FBd0MsbUJBQU8sQ0FBQyxnRUFBeUI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNuSWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbERhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDdkNhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELG9EQUFvRCxFQUFFO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzlFYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNYYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsbUNBQW1DLG1CQUFPLENBQUMsc0RBQW9CO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyxvRUFBb0UsMENBQTBDLEVBQUU7QUFDaEg7QUFDQSx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0E7QUFDQSxtREFBbUQsbURBQW1ELEVBQUU7QUFDeEcsdUJBQXVCLCtCQUErQjtBQUN0RCwrRUFBK0UsZ0JBQWdCLEVBQUU7QUFDakc7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLG1DQUFtQztBQUNuQyx3REFBd0Qsd0NBQXdDLEVBQUU7QUFDbEc7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSw2Q0FBNkMsNkNBQTZDLEVBQUU7QUFDNUYsdUJBQXVCLHlCQUF5QjtBQUNoRCxtRUFBbUUsZ0JBQWdCLEVBQUU7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDekZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNsQ2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDaENhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qiw4RUFBOEU7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsOEJBQThCLG1CQUFPLENBQUMsNkNBQWU7QUFDckQsd0NBQXdDLG1CQUFPLENBQUMsK0RBQXdCO0FBQ3hFLDZCQUE2QixtQkFBTyxDQUFDLHlDQUFhO0FBQ2xELGdDQUFnQyxtQkFBTyxDQUFDLCtDQUFnQjtBQUN4RCxnQ0FBZ0MsbUJBQU8sQ0FBQywrQ0FBZ0I7QUFDeEQsbUNBQW1DLG1CQUFPLENBQUMsdURBQW9CO0FBQy9ELDJDQUEyQyxtQkFBTyxDQUFDLCtFQUFnQztBQUNuRix3Q0FBd0MsbUJBQU8sQ0FBQyx5RUFBNkI7QUFDN0UsMkNBQTJDLG1CQUFPLENBQUMsK0VBQWdDO0FBQ25GLGtDQUFrQyxtQkFBTyxDQUFDLHlDQUFhO0FBQ3ZELDhCQUE4QixtQkFBTyxDQUFDLDJDQUFjO0FBQ3BELHFDQUFxQyxtQkFBTyxDQUFDLG1FQUEwQjtBQUN2RSwyQ0FBMkMsbUJBQU8sQ0FBQywrRUFBZ0M7QUFDbkYsK0JBQStCLG1CQUFPLENBQUMsNkNBQWU7QUFDdEQsd0NBQXdDLG1CQUFPLENBQUMseUVBQTZCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0NBQXNDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDeEthO0FBQ2I7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsaUNBQWlDLG1CQUFPLENBQUMsb0RBQW1CO0FBQzVELCtCQUErQixtQkFBTyxDQUFDLG9EQUFtQjtBQUMxRCwwQ0FBMEMsbUJBQU8sQ0FBQyxnRkFBaUM7QUFDbkYseUNBQXlDLG1CQUFPLENBQUMsd0ZBQXFDO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsb0NBQW9DLEVBQUU7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3hMYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsaUNBQWlDLG1CQUFPLENBQUMsb0RBQW1CO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUMvRGE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLDhFQUE4RTtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw4QkFBOEIsbUJBQU8sQ0FBQyw2Q0FBZTtBQUNyRCx3Q0FBd0MsbUJBQU8sQ0FBQywrREFBd0I7QUFDeEUsMENBQTBDLG1CQUFPLENBQUMsbUVBQTBCO0FBQzVFLDZCQUE2QixtQkFBTyxDQUFDLHlDQUFhO0FBQ2xELGdDQUFnQyxtQkFBTyxDQUFDLCtDQUFnQjtBQUN4RCxnQ0FBZ0MsbUJBQU8sQ0FBQywrQ0FBZ0I7QUFDeEQsbUNBQW1DLG1CQUFPLENBQUMsdURBQW9CO0FBQy9ELDJDQUEyQyxtQkFBTyxDQUFDLCtFQUFnQztBQUNuRixnQ0FBZ0MsbUJBQU8sQ0FBQywrQ0FBZ0I7QUFDeEQsMENBQTBDLG1CQUFPLENBQUMsNkVBQStCO0FBQ2pGLGtDQUFrQyxtQkFBTyxDQUFDLHlDQUFhO0FBQ3ZELDhCQUE4QixtQkFBTyxDQUFDLDJDQUFjO0FBQ3BELDJDQUEyQyxtQkFBTyxDQUFDLCtFQUFnQztBQUNuRixxQ0FBcUMsbUJBQU8sQ0FBQyxtRUFBMEI7QUFDdkUsK0JBQStCLG1CQUFPLENBQUMsNkNBQWU7QUFDdEQsd0NBQXdDLG1CQUFPLENBQUMseUVBQTZCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ25MYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDeEhhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxpQ0FBaUMsbUJBQU8sQ0FBQyxvRUFBMkI7QUFDcEUsZ0NBQWdDLG1CQUFPLENBQUMsa0VBQTBCO0FBQ2xFLHVDQUF1QyxtQkFBTyxDQUFDLGdGQUFpQztBQUNoRiwrQkFBK0IsbUJBQU8sQ0FBQyxnRUFBeUI7QUFDaEUsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQWlCO0FBQ3pELHdDQUF3QyxtQkFBTyxDQUFDLHNGQUFvQztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNoTFk7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGdDQUFnQyxtQkFBTyxDQUFDLGdEQUFpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDakNhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDeEhhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvQmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELHdDQUF3QyxtQkFBTyxDQUFDLDBEQUFtQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1Qix3QkFBd0IsYUFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1Qix3QkFBd0IsYUFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDNU1hO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQ0FBZ0MsbUJBQU8sQ0FBQyxnREFBaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsTGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbEJhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQ0FBZ0MsbUJBQU8sQ0FBQyx3REFBcUI7QUFDN0QsaUNBQWlDLG1CQUFPLENBQUMsMERBQXNCO0FBQy9ELCtCQUErQixtQkFBTyxDQUFDLHNEQUFvQjtBQUMzRCxpQ0FBaUMsbUJBQU8sQ0FBQywwREFBc0I7QUFDL0QsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQWlCO0FBQ3pELDJDQUEyQyxtQkFBTyxDQUFDLDhFQUFnQztBQUNuRiw2QkFBNkIsbUJBQU8sQ0FBQyxrREFBa0I7QUFDdkQsbUNBQW1DLG1CQUFPLENBQUMsZ0RBQWM7QUFDekQscUNBQXFDLG1CQUFPLENBQUMsMERBQXNCO0FBQ25FLDhCQUE4QixtQkFBTyxDQUFDLG9EQUFtQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnQ0FBZ0M7QUFDakM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDNS9DYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsK0JBQStCLG1CQUFPLENBQUMsNkNBQWU7QUFDdEQsZ0NBQWdDLG1CQUFPLENBQUMsK0NBQWdCO0FBQ3hELG1DQUFtQyxtQkFBTyxDQUFDLHFEQUFtQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDNVFhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxzQ0FBc0MsbUJBQU8sQ0FBQyxpRUFBeUI7QUFDdkUsMENBQTBDLG1CQUFPLENBQUMscUVBQTJCO0FBQzdFLHFDQUFxQyxtQkFBTyxDQUFDLDJEQUFzQjtBQUNuRSxxQ0FBcUMsbUJBQU8sQ0FBQywyREFBc0I7QUFDbkUsOEJBQThCLG1CQUFPLENBQUMsMkNBQWM7QUFDcEQsbUNBQW1DLG1CQUFPLENBQUMsMkNBQWM7QUFDekQsa0NBQWtDLG1CQUFPLENBQUMseUNBQWE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQ0EsbUJBQU8sQ0FBQyx1Q0FBZSxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2dhbWUuanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ29tcG9uZW50XCIpKTtcclxudmFyIENvbGxpc2lvbk9iamVjdENyZWF0ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVG9vbC9Db2xsaXNpb25PYmplY3RDcmVhdGVyXCIpKTtcclxudmFyIFByaW1pdGl2ZVR5cGU7XHJcbihmdW5jdGlvbiAoUHJpbWl0aXZlVHlwZSkge1xyXG4gICAgUHJpbWl0aXZlVHlwZVtQcmltaXRpdmVUeXBlW1wic3BoZXJlXCJdID0gMF0gPSBcInNwaGVyZVwiO1xyXG4gICAgUHJpbWl0aXZlVHlwZVtQcmltaXRpdmVUeXBlW1wiYm94X0FBQkJcIl0gPSAxXSA9IFwiYm94X0FBQkJcIjtcclxuICAgIFByaW1pdGl2ZVR5cGVbUHJpbWl0aXZlVHlwZVtcImJveF9PQkJcIl0gPSAyXSA9IFwiYm94X09CQlwiO1xyXG4gICAgUHJpbWl0aXZlVHlwZVtQcmltaXRpdmVUeXBlW1wicG9pbnRcIl0gPSAzXSA9IFwicG9pbnRcIjtcclxufSkoUHJpbWl0aXZlVHlwZSB8fCAoUHJpbWl0aXZlVHlwZSA9IHt9KSk7XHJcbnZhciBDb2xsaXNpb25Db21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ29sbGlzaW9uQ29tcG9uZW50LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQ29sbGlzaW9uQ29tcG9uZW50KGFyZ190eXBlLCBhcmdfc2l6ZSwgbGF5ZXIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmxheWVyID0gMDtcclxuICAgICAgICBfdGhpcy50eXBlID0gYXJnX3R5cGU7XHJcbiAgICAgICAgX3RoaXMuc2l6ZSA9IGFyZ19zaXplO1xyXG4gICAgICAgIGlmIChsYXllcikge1xyXG4gICAgICAgICAgICBfdGhpcy5sYXllciA9IGxheWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBDb2xsaXNpb25Db21wb25lbnQucHJvdG90eXBlLk9uU2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUHJpbWl0aXZlVHlwZS5zcGhlcmU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvbiA9IENvbGxpc2lvbk9iamVjdENyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZVNwaGVyZSh0aGlzLnNpemUueCwgdGhpcy5nYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFByaW1pdGl2ZVR5cGUucG9pbnQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvbiA9IENvbGxpc2lvbk9iamVjdENyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZVBvaW50KHRoaXMuZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQcmltaXRpdmVUeXBlLmJveF9BQUJCOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb24gPSBDb2xsaXNpb25PYmplY3RDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVDdWJlX0FBQkIodGhpcy5zaXplLCB0aGlzLmdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUHJpbWl0aXZlVHlwZS5ib3hfT0JCOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb24gPSBDb2xsaXNpb25PYmplY3RDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVDdWJlX09CQih0aGlzLnNpemUsIHRoaXMuZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuZ2FtZU9iamVjdC5HZXRDb2xsaXNpb25NYW5hZ2VyKCkuUmVnaXN0KHRoaXMuY29sbGlzaW9uLCB0aGlzLmxheWVyKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25Db21wb25lbnQucHJvdG90eXBlLk9uUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdC5HZXRDb2xsaXNpb25NYW5hZ2VyKCkuVW5SZWdpc3QodGhpcy5pZCwgdGhpcy5sYXllcik7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uQ29tcG9uZW50LnByb3RvdHlwZS5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb24uVXBkYXRlKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbGxpc2lvbkNvbXBvbmVudDtcclxufShDb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENvbGxpc2lvbkNvbXBvbmVudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIENvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbXBvbmVudCgpIHtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBcIklzUmVtb3ZlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNSZW1vdmU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5TZXQgPSBmdW5jdGlvbiAoYXJnX29iaikge1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdCA9IGFyZ19vYmo7XHJcbiAgICAgICAgdGhpcy5pc1JlbW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuT25TZXQoKTtcclxuICAgIH07XHJcbiAgICBDb21wb25lbnQucHJvdG90eXBlLkRlYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pc1JlbW92ZSA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5PblNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBDb21wb25lbnQucHJvdG90eXBlLlJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmlzUmVtb3ZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk9uUmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0ID0gbnVsbDtcclxuICAgIH07XHJcbiAgICBDb21wb25lbnQucHJvdG90eXBlLk9uUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIENvbXBvbmVudC5wcm90b3R5cGUuUmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLk9uUmVsZWFzZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdCA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5PblJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5IaXQgPSBmdW5jdGlvbiAoYXJnX2dhbWVPYmplY3QpIHtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDb21wb25lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21wb25lbnRcIikpO1xyXG52YXIgTW9kZWxJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTW9kZWxJbmZvKCkge1xyXG4gICAgICAgIHRoaXMubWVzaE5hbWUgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1vZGVsSW5mbztcclxufSgpKTtcclxudmFyIE1vZGVsRHJhd0NvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhNb2RlbERyYXdDb21wb25lbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBNb2RlbERyYXdDb21wb25lbnQoaXNMaWdodGluZywgZ2VvbWV0cnlOYW1lLCBtYXRlcmlhbE5hbWUsIHNoYWRlck5hbWUsIGxheWVyLCBpc0JpbGxCb2FyZCwgbWVzaE5hbWUsIGFyZ190cmFuc2Zvcm0pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmluZm8gPSBuZXcgTW9kZWxJbmZvKCk7XHJcbiAgICAgICAgX3RoaXMudHJhbnNmb3JtID0gbnVsbDtcclxuICAgICAgICBfdGhpcy5sYXllciA9IGxheWVyO1xyXG4gICAgICAgIGlmIChtZXNoTmFtZSlcclxuICAgICAgICAgICAgX3RoaXMuaW5mby5tZXNoTmFtZSA9IG1lc2hOYW1lO1xyXG4gICAgICAgIF90aGlzLmluZm8uZ2VvbWV0cnlOYW1lID0gZ2VvbWV0cnlOYW1lO1xyXG4gICAgICAgIF90aGlzLmluZm8uc2hhZGVyTmFtZSA9IHNoYWRlck5hbWU7XHJcbiAgICAgICAgX3RoaXMuaW5mby5tYXRlcmlhbE5hbWUgPSBtYXRlcmlhbE5hbWU7XHJcbiAgICAgICAgaWYgKGFyZ190cmFuc2Zvcm0pXHJcbiAgICAgICAgICAgIF90aGlzLnRyYW5zZm9ybSA9IGFyZ190cmFuc2Zvcm07XHJcbiAgICAgICAgX3RoaXMuaW5mby5saWdodGluZyA9IGlzTGlnaHRpbmc7XHJcbiAgICAgICAgX3RoaXMuaW5mby5iaWxsQm9hcmQgPSBpc0JpbGxCb2FyZDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTW9kZWxEcmF3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJMYXllclwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxheWVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE1vZGVsRHJhd0NvbXBvbmVudC5wcm90b3R5cGUuT25TZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMuZ2FtZU9iamVjdC50cmFuc2Zvcm07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmluZm8ubWVzaE5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuZ2FtZU9iamVjdC5NYW5hZ2VyLlNjZW5lLkdldFNjZW5lTWFuYWdlcigpLkdldE1vZGVsQ3JlYXRlcigpLkNyZWF0ZU1vZGVsRnJvbU1lc2godGhpcy5pbmZvLmxpZ2h0aW5nLCB0aGlzLmluZm8uYmlsbEJvYXJkLCB0aGlzLmluZm8ubWVzaE5hbWUsIHRoaXMuaW5mby5zaGFkZXJOYW1lLCB0aGlzLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gdGhpcy5nYW1lT2JqZWN0Lk1hbmFnZXIuU2NlbmUuR2V0U2NlbmVNYW5hZ2VyKCkuR2V0TW9kZWxDcmVhdGVyKCkuQ3JlYXRlTW9kZWwodGhpcy5pbmZvLmxpZ2h0aW5nLCB0aGlzLmluZm8uYmlsbEJvYXJkLCB0aGlzLmluZm8uZ2VvbWV0cnlOYW1lLCB0aGlzLmluZm8ubWF0ZXJpYWxOYW1lLCB0aGlzLmluZm8uc2hhZGVyTmFtZSwgdGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZGVsSUQgPSB0aGlzLmdhbWVPYmplY3QuR2V0UmVuZGVyZXIoKS5SZWdpc3QodGhpcy5tb2RlbCwgdGhpcy5sYXllcik7XHJcbiAgICB9O1xyXG4gICAgTW9kZWxEcmF3Q29tcG9uZW50LnByb3RvdHlwZS5PblJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3QuR2V0UmVuZGVyZXIoKS5VblJlZ2lzdCh0aGlzLm1vZGVsSUQsIHRoaXMubGF5ZXIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNb2RlbERyYXdDb21wb25lbnQ7XHJcbn0oQ29tcG9uZW50XzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBNb2RlbERyYXdDb21wb25lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBJbnB1dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9Ub29sL0lucHV0XCIpKTtcclxudmFyIENvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvbXBvbmVudFwiKSk7XHJcbnZhciBTYW1wbGVDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU2FtcGxlQ29tcG9uZW50LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU2FtcGxlQ29tcG9uZW50KCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgSW5wdXRfMS5kZWZhdWx0LkFkZEtleURvd25FdmVudChfdGhpcywgXCJzYW1wbGVjb21wb25lbnRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgU2FtcGxlQ29tcG9uZW50LnByb3RvdHlwZS5PblNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBTYW1wbGVDb21wb25lbnQucHJvdG90eXBlLlVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtLlJvbGxZX0xvY2FsX0RlZ3JlZXMoMik7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybS5Sb2xsWF9Xb3JsZF9EZWdyZWVzKDEpO1xyXG4gICAgfTtcclxuICAgIFNhbXBsZUNvbXBvbmVudC5wcm90b3R5cGUuT25LZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS5rZXkgPT0gXCJBcnJvd0xlZnRcIikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtLlRyYW5zbGF0ZVgoLTAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLmtleSA9PSBcIkFycm93UmlnaHRcIikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtLlRyYW5zbGF0ZVgoMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGUua2V5ID09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdC50cmFuc2Zvcm0uVHJhbnNsYXRlWSgtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLmtleSA9PSBcIkFycm93RG93blwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdC50cmFuc2Zvcm0uVHJhbnNsYXRlWSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGUua2V5ID09IFwiOFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdC50cmFuc2Zvcm0uVHJhbnNsYXRlWigtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLmtleSA9PSBcIjVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtLlRyYW5zbGF0ZVooMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBTYW1wbGVDb21wb25lbnQ7XHJcbn0oQ29tcG9uZW50XzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBTYW1wbGVDb21wb25lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21wb25lbnRcIikpO1xyXG52YXIgU2NlbmVDaGFuZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNjZW5lQ2hhbmdlciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFNjZW5lQ2hhbmdlcihhcmdfc2NlbmVOYW1lLCBhcmdfd2FpdEZyYW1lLCBhcmdfc2NlbmVDaGFuZ2VWYWx1ZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuc2NlbmVOYW1lID0gYXJnX3NjZW5lTmFtZTtcclxuICAgICAgICBfdGhpcy5zY2VuZUNoYW5nZVZhbHVlID0gYXJnX3NjZW5lQ2hhbmdlVmFsdWU7XHJcbiAgICAgICAgX3RoaXMud2FpdEZyYW1lID0gYXJnX3dhaXRGcmFtZTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBTY2VuZUNoYW5nZXIucHJvdG90eXBlLlVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLndhaXRGcmFtZS0tO1xyXG4gICAgICAgIGlmICh0aGlzLndhaXRGcmFtZSA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdhbWVPYmplY3QuTWFuYWdlci5TY2VuZS5HZXRTY2VuZU1hbmFnZXIoKS5DaGFuZ2VTY2VuZSh0aGlzLnNjZW5lTmFtZSwgdGhpcy5zY2VuZUNoYW5nZVZhbHVlKTtcclxuICAgICAgICB0aGlzLkRlYWQoKTtcclxuICAgICAgICA7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNjZW5lQ2hhbmdlcjtcclxufShDb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFNjZW5lQ2hhbmdlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIENvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvbXBvbmVudFwiKSk7XHJcbnZhciBTdWNpZGVDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU3VjaWRlQ29tcG9uZW50LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU3VjaWRlQ29tcG9uZW50KGFyZ193YWl0RnJhbWUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLndhaXRGcmFtZSA9IGFyZ193YWl0RnJhbWU7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgU3VjaWRlQ29tcG9uZW50LnByb3RvdHlwZS5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy53YWl0RnJhbWUtLTtcclxuICAgICAgICBpZiAodGhpcy53YWl0RnJhbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0LkRlYWQoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU3VjaWRlQ29tcG9uZW50O1xyXG59KENvbXBvbmVudF8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU3VjaWRlQ29tcG9uZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ29tcG9uZW50XCIpKTtcclxudmFyIE1vZGVsSW5mbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1vZGVsSW5mbygpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBNb2RlbEluZm87XHJcbn0oKSk7XHJcbnZhciBUZXh0RHJhd0NvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUZXh0RHJhd0NvbXBvbmVudCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRleHREcmF3Q29tcG9uZW50KHRleHQsIGZvbnRUZXhOYW1lLCBzaGFkZXJOYW1lLCBhcmdfY29sb3IsIGxheWVyLCBpc0JpbGxCb2FyZCwgYXJnX3RyYW5zZm9ybSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuaW5mbyA9IG5ldyBNb2RlbEluZm8oKTtcclxuICAgICAgICBfdGhpcy50cmFuc2Zvcm0gPSBudWxsO1xyXG4gICAgICAgIF90aGlzLmxheWVyID0gbGF5ZXI7XHJcbiAgICAgICAgX3RoaXMuaW5mby5zaGFkZXJOYW1lID0gc2hhZGVyTmFtZTtcclxuICAgICAgICBfdGhpcy5pbmZvLmNvbG9yID0gYXJnX2NvbG9yO1xyXG4gICAgICAgIF90aGlzLmluZm8uZm9udFRleHR1cmVOYW1lID0gZm9udFRleE5hbWU7XHJcbiAgICAgICAgX3RoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgaWYgKGFyZ190cmFuc2Zvcm0pXHJcbiAgICAgICAgICAgIF90aGlzLnRyYW5zZm9ybSA9IGFyZ190cmFuc2Zvcm07XHJcbiAgICAgICAgX3RoaXMuaW5mby5iaWxsQm9hcmQgPSBpc0JpbGxCb2FyZDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGV4dERyYXdDb21wb25lbnQucHJvdG90eXBlLCBcIkxheWVyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVGV4dERyYXdDb21wb25lbnQucHJvdG90eXBlLk9uU2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy50cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZGVsID0gdGhpcy5nYW1lT2JqZWN0Lk1hbmFnZXIuU2NlbmUuR2V0U2NlbmVNYW5hZ2VyKCkuR2V0TW9kZWxDcmVhdGVyKCkuQ3JlYXRlTW9kZWxGcm9tVGV4dCh0aGlzLmluZm8uYmlsbEJvYXJkLCB0aGlzLmluZm8uY29sb3IsIHRoaXMudGV4dCwgdGhpcy5pbmZvLmZvbnRUZXh0dXJlTmFtZSwgdGhpcy5pbmZvLnNoYWRlck5hbWUsIHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICB0aGlzLm1vZGVsSUQgPSB0aGlzLmdhbWVPYmplY3QuR2V0UmVuZGVyZXIoKS5SZWdpc3QodGhpcy5tb2RlbCwgdGhpcy5sYXllcik7XHJcbiAgICB9O1xyXG4gICAgVGV4dERyYXdDb21wb25lbnQucHJvdG90eXBlLk9uUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdC5HZXRSZW5kZXJlcigpLlVuUmVnaXN0KHRoaXMubW9kZWxJRCwgdGhpcy5sYXllcik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRleHREcmF3Q29tcG9uZW50O1xyXG59KENvbXBvbmVudF8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dERyYXdDb21wb25lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBFYXNpbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVG9vbC9FYXNpbmdcIikpO1xyXG52YXIgQ29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ29tcG9uZW50XCIpKTtcclxudmFyIFRyYW5zZm9ybUFuaW1hdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUcmFuc2Zvcm1BbmltYXRpb24sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUcmFuc2Zvcm1BbmltYXRpb24oYXJnX3RpbWUsIGFyZ19pc0xvb3AsIGFyZ190YXJnZXRUcmFuc2Zvcm0sIGFyZ190cmFuc2Zvcm0sIGFyZ19lYXNpbmdGdW5jdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgIF90aGlzLmRpcmVjdGlvbiA9IDE7XHJcbiAgICAgICAgX3RoaXMudGltZSA9IGFyZ190aW1lO1xyXG4gICAgICAgIF90aGlzLmxpbmVyUGFzZSA9IDEuMCAvIGFyZ190aW1lO1xyXG4gICAgICAgIF90aGlzLnRhcmdldFRyYW5zZm9ybSA9IGFyZ190YXJnZXRUcmFuc2Zvcm07XHJcbiAgICAgICAgaWYgKGFyZ190cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgX3RoaXMudHJhbnNmb3JtID0gYXJnX3RyYW5zZm9ybTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZ19lYXNpbmdGdW5jdGlvbikge1xyXG4gICAgICAgICAgICBfdGhpcy5lYXNpbmdGdW5jdGlvbiA9IGFyZ19lYXNpbmdGdW5jdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIF90aGlzLmVhc2luZ0Z1bmN0aW9uID0gRWFzaW5nXzEuZGVmYXVsdC5FYXNlSW5PdXRCYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJnX2lzTG9vcCkge1xyXG4gICAgICAgICAgICBfdGhpcy5UaW1lVXBkYXRlID0gX3RoaXMuVGltZVVwZGF0ZV9Mb29wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgX3RoaXMuVGltZVVwZGF0ZSA9IF90aGlzLlRpbWVVcGRhdGVfTm9Mb29wO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBUcmFuc2Zvcm1BbmltYXRpb24ucHJvdG90eXBlLk9uU2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy50cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9mZnNldCA9IHRoaXMudGFyZ2V0VHJhbnNmb3JtLlBvc2l0aW9uLlN1Yih0aGlzLnRyYW5zZm9ybS5Qb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5zY2FsZVBhc2UgPSB0aGlzLnRhcmdldFRyYW5zZm9ybS5TY2FsZS5TdWIodGhpcy50cmFuc2Zvcm0uU2NhbGUpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy50cmFuc2Zvcm0uUG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5pbml0U2NhbGUgPSB0aGlzLnRyYW5zZm9ybS5TY2FsZTtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm1BbmltYXRpb24ucHJvdG90eXBlLlRpbWVVcGRhdGVfTG9vcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA+PSB0aGlzLnRpbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHRoaXMudGltZTtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jdXJyZW50VGltZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgKz0gdGhpcy5kaXJlY3Rpb247XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtQW5pbWF0aW9uLnByb3RvdHlwZS5UaW1lVXBkYXRlX05vTG9vcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA+PSB0aGlzLnRpbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHRoaXMudGltZTtcclxuICAgICAgICAgICAgdGhpcy5SZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSArPSB0aGlzLmRpcmVjdGlvbjtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm1BbmltYXRpb24ucHJvdG90eXBlLlVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLlRpbWVVcGRhdGUoKTtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybS5Qb3NpdGlvbiA9IHRoaXMuaW5pdFBvc2l0aW9uLkFkZCh0aGlzLm9mZnNldC5NdWx0aXBseSh0aGlzLmN1cnJlbnRUaW1lIC8gdGhpcy50aW1lKSk7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uU2NhbGUgPSB0aGlzLmluaXRTY2FsZS5BZGQodGhpcy5zY2FsZVBhc2UuTXVsdGlwbHkodGhpcy5lYXNpbmdGdW5jdGlvbih0aGlzLmN1cnJlbnRUaW1lIC8gdGhpcy50aW1lKSkpO1xyXG4gICAgICAgIC8vdGhpcy50cmFuc2Zvcm0uUm90YXRpb249IHRoaXMudHJhbnNmb3JtLlJvdGF0aW9uXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRyYW5zZm9ybUFuaW1hdGlvbjtcclxufShDb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFRyYW5zZm9ybUFuaW1hdGlvbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEdhbWVPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lT2JqZWN0KGFyZ19tYW5hZ2VyLCBhcmdfbmFtZSwgYXJnX3RyYW5zZm9ybSkge1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gYXJnX3RyYW5zZm9ybTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLm5ld0NvbXBvbmVudHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmlzUmVtb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gYXJnX25hbWU7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gYXJnX21hbmFnZXI7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZU9iamVjdC5wcm90b3R5cGUsIFwiSXNSZW1vdmVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1JlbW92ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZU9iamVjdC5wcm90b3R5cGUsIFwiTmFtZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChhcmdfbmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hbmFnZXIuVW5SZWdpc3RPYmplY3QodGhpcy5uYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gYXJnX25hbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWVPYmplY3QucHJvdG90eXBlLCBcIk1hbmFnZXJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lT2JqZWN0LnByb3RvdHlwZSwgXCJHYW1lVGltZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLk1hbmFnZXIuU2NlbmUuR2V0U2NlbmVNYW5hZ2VyKCkuR2V0R2FtZVRpbWUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBHYW1lT2JqZWN0LnByb3RvdHlwZS5SZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goZnVuY3Rpb24gKGNvbXBvbmVudCkgeyByZXR1cm4gY29tcG9uZW50LlJlbW92ZSgpOyB9KTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLm1hbmFnZXIuVW5SZWdpc3RPYmplY3QodGhpcy5uYW1lKTtcclxuICAgICAgICB0aGlzLm1hbmFnZXIgPSBudWxsO1xyXG4gICAgfTtcclxuICAgIEdhbWVPYmplY3QucHJvdG90eXBlLlJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goZnVuY3Rpb24gKGNvbXBvbmVudCkgeyByZXR1cm4gY29tcG9uZW50LlJlbW92ZSgpOyB9KTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLm1hbmFnZXIgPSBudWxsO1xyXG4gICAgfTtcclxuICAgIEdhbWVPYmplY3QucHJvdG90eXBlLkRlYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pc1JlbW92ZSA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUuR2V0UmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5TY2VuZS5HZXRSZW5kZXJlcigpO1xyXG4gICAgfTtcclxuICAgIEdhbWVPYmplY3QucHJvdG90eXBlLkdldENvbGxpc2lvbk1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5TY2VuZS5HZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUuVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50cy5jb25jYXQodGhpcy5uZXdDb21wb25lbnRzKTtcclxuICAgICAgICB0aGlzLm5ld0NvbXBvbmVudHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiAoY29tcG9uZW50KSB7IHJldHVybiBjb21wb25lbnQuVXBkYXRlKCk7IH0pO1xyXG4gICAgICAgIHZhciByZW1vdmUgPSB0aGlzLmNvbXBvbmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjb21wb25lbnQpIHsgcmV0dXJuIGNvbXBvbmVudC5Jc1JlbW92ZTsgfSk7XHJcbiAgICAgICAgcmVtb3ZlLmZvckVhY2goZnVuY3Rpb24gKHJlbW92ZSkgeyByZXR1cm4gcmVtb3ZlLlJlbW92ZSgpOyB9KTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjb21wb25lbnQpIHsgcmV0dXJuICFjb21wb25lbnQuSXNSZW1vdmU7IH0pO1xyXG4gICAgfTtcclxuICAgIEdhbWVPYmplY3QucHJvdG90eXBlLkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUuU2V0Q29tcG9uZW50ID0gZnVuY3Rpb24gKGFyZ19jb21wb25lbnQpIHtcclxuICAgICAgICBhcmdfY29tcG9uZW50LlNldCh0aGlzKTtcclxuICAgICAgICB0aGlzLm5ld0NvbXBvbmVudHMucHVzaChhcmdfY29tcG9uZW50KTtcclxuICAgICAgICByZXR1cm4gYXJnX2NvbXBvbmVudDtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0LnByb3RvdHlwZS5IaXQgPSBmdW5jdGlvbiAoYXJnX29iamVjdCkge1xyXG4gICAgICAgIC8vaWYodGhpcyE9YXJnX29iamVjdClcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbGxpc2lvbjpcIiArIHRoaXMubmFtZSArIFwiLFwiICsgYXJnX29iamVjdC5uYW1lKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiAoY29tcG9uZW50KSB7IHJldHVybiBjb21wb25lbnQuSGl0KGFyZ19vYmplY3QpOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZU9iamVjdDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZU9iamVjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEdhbWVPYmplY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9HYW1lT2JqZWN0XCIpKTtcclxudmFyIFRyYW5zZm9ybV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9UcmFuc2Zvcm1cIikpO1xyXG52YXIgR2FtZU9iamVjdE1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lT2JqZWN0TWFuYWdlcihhcmdfc2NlbmUpIHtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3RzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5uZXdHYW1lT2JqZWN0cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMubWFwX2dhbWVPYmplY3RzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBhcmdfc2NlbmU7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZU9iamVjdE1hbmFnZXIucHJvdG90eXBlLCBcIlNjZW5lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgR2FtZU9iamVjdE1hbmFnZXIucHJvdG90eXBlLkFkZEdhbWVPYmplY3QgPSBmdW5jdGlvbiAoYXJnX25hbWUsIGFyZ190cmFuc2Zvcm0pIHtcclxuICAgICAgICB2YXIgbmV3T2JqO1xyXG4gICAgICAgIGlmICh0aGlzLm1hcF9nYW1lT2JqZWN0c1thcmdfbmFtZV0pIHtcclxuICAgICAgICAgICAgdmFyIG51bSA9IDE7XHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gYXJnX25hbWUgKyBcIl9cIiArIG51bTtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMubWFwX2dhbWVPYmplY3RzW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBudW0rKztcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBhcmdfbmFtZSArIFwiX1wiICsgbnVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFyZ19uYW1lID0gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZ190cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgbmV3T2JqID0gbmV3IEdhbWVPYmplY3RfMS5kZWZhdWx0KHRoaXMsIGFyZ19uYW1lLCBhcmdfdHJhbnNmb3JtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld09iaiA9IG5ldyBHYW1lT2JqZWN0XzEuZGVmYXVsdCh0aGlzLCBhcmdfbmFtZSwgbmV3IFRyYW5zZm9ybV8xLmRlZmF1bHQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWFwX2dhbWVPYmplY3RzW2FyZ19uYW1lXSA9IG5ld09iajtcclxuICAgICAgICB0aGlzLm5ld0dhbWVPYmplY3RzLnB1c2gobmV3T2JqKTtcclxuICAgICAgICByZXR1cm4gbmV3T2JqO1xyXG4gICAgfTtcclxuICAgIEdhbWVPYmplY3RNYW5hZ2VyLnByb3RvdHlwZS5SZW1vdmVPYmplY3QgPSBmdW5jdGlvbiAoYXJnX2dhbWVPYmpOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5tYXBfZ2FtZU9iamVjdHNbYXJnX2dhbWVPYmpOYW1lXS5EZWFkKCk7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdE1hbmFnZXIucHJvdG90eXBlLlVuUmVnaXN0T2JqZWN0ID0gZnVuY3Rpb24gKGFyZ19nYW1lT2JqZWN0TmFtZSkge1xyXG4gICAgICAgIHRoaXMubWFwX2dhbWVPYmplY3RzW2FyZ19nYW1lT2JqZWN0TmFtZV0gPSBudWxsO1xyXG4gICAgfTtcclxuICAgIEdhbWVPYmplY3RNYW5hZ2VyLnByb3RvdHlwZS5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cyA9IHRoaXMuZ2FtZU9iamVjdHMuY29uY2F0KHRoaXMubmV3R2FtZU9iamVjdHMpO1xyXG4gICAgICAgIHRoaXMubmV3R2FtZU9iamVjdHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqLlVwZGF0ZSgpOyB9KTtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3RzLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmouSXNSZW1vdmU7IH0pLmZvckVhY2goZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqLlJlbW92ZSgpOyB9KTtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3RzID0gdGhpcy5nYW1lT2JqZWN0cy5maWx0ZXIoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gIW9iai5Jc1JlbW92ZTsgfSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmdhbWVPYmplY3RzLmxlbmd0aCk7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdE1hbmFnZXIucHJvdG90eXBlLkdldEdhbWVPYmplY3QgPSBmdW5jdGlvbiAoYXJnX2dhbWVPYmplY3ROYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwX2dhbWVPYmplY3RzW2FyZ19nYW1lT2JqZWN0TmFtZV07XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdE1hbmFnZXIucHJvdG90eXBlLlJlZ2lzdE9iaiA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICB0aGlzLm1hcF9nYW1lT2JqZWN0c1tvYmouTmFtZV0gPSBvYmo7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdE1hbmFnZXIucHJvdG90eXBlLlJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tYXBfZ2FtZU9iamVjdHMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm5ld0dhbWVPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqLlJlbGVhc2UoKTsgfSk7XHJcbiAgICAgICAgdGhpcy5uZXdHYW1lT2JqZWN0cy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmouUmVsZWFzZSgpOyB9KTtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3RzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdhbWVPYmplY3RNYW5hZ2VyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBHYW1lT2JqZWN0TWFuYWdlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIE1hdHJpeF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9NYXRoL01hdHJpeFwiKSk7XHJcbnZhciBUcmFuc2Zvcm1fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVHJhbnNmb3JtXCIpKTtcclxudmFyIFZlY3RvcjRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTWF0aC9WZWN0b3I0XCIpKTtcclxudmFyIENhbWVyYSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENhbWVyYShhcmdfZGV2aWNlLCBsYXllciwgaXNQYXJhcmVsbCwgZnJhbWVCdWZmZXIpIHtcclxuICAgICAgICB0aGlzLnRhcmdldEZyYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRldmljZSA9IGFyZ19kZXZpY2U7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMubGF5ZXIgPSBsYXllcjtcclxuICAgICAgICB0aGlzLmNsZWFyQ29sb3IgPSBuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgaWYgKGZyYW1lQnVmZmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0RnJhbWUgPSBmcmFtZUJ1ZmZlcjtcclxuICAgICAgICAgICAgaWYgKCFpc1BhcmFyZWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3Rpb25NYXRyaXggPSBuZXcgTWF0cml4XzEuZGVmYXVsdCgpLlBlcnNwZWN0aXZlKDQ1LCB0aGlzLnRhcmdldEZyYW1lLndpZHRoIC8gdGhpcy50YXJnZXRGcmFtZS5oZWlnaHQsIDAuMSwgMTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeCA9IG5ldyBNYXRyaXhfMS5kZWZhdWx0KCkuT3J0aG8oLXRoaXMudGFyZ2V0RnJhbWUud2lkdGggLyAyLCB0aGlzLnRhcmdldEZyYW1lLndpZHRoIC8gMiwgdGhpcy50YXJnZXRGcmFtZS5oZWlnaHQgLyAyLCAtdGhpcy50YXJnZXRGcmFtZS5oZWlnaHQgLyAyLCAwLjEsIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghaXNQYXJhcmVsbClcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeCA9IG5ldyBNYXRyaXhfMS5kZWZhdWx0KCkuUGVyc3BlY3RpdmUoNDUsIHRoaXMuZGV2aWNlLkdldFNpemUoKS54IC8gdGhpcy5kZXZpY2UuR2V0U2l6ZSgpLnksIDAuMSwgMTAwKTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3Rpb25NYXRyaXggPSBuZXcgTWF0cml4XzEuZGVmYXVsdCgpLk9ydGhvKC10aGlzLmRldmljZS5HZXRTaXplKCkueCAvIDIsIHRoaXMuZGV2aWNlLkdldFNpemUoKS54IC8gMiwgdGhpcy5kZXZpY2UuR2V0U2l6ZSgpLnkgLyAyLCAtdGhpcy5kZXZpY2UuR2V0U2l6ZSgpLnkgLyAyLCAwLjEsIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBDYW1lcmEucHJvdG90eXBlLkF0dGFjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmRldmljZS5TZXRDbGVhckNvbG9yKHRoaXMuY2xlYXJDb2xvcik7XHJcbiAgICAgICAgdGhpcy5kZXZpY2UuU2V0Q2FtZXJhU3RhdHVzKHRoaXMudHJhbnNmb3JtLk1hdHJpeC5JbnZlcnNlKCksIHRoaXMucHJvamVjdGlvbk1hdHJpeCwgdGhpcy50cmFuc2Zvcm0uUm90YXRpb24sIHRoaXMudHJhbnNmb3JtLlBvc2l0aW9uKTtcclxuICAgICAgICBpZiAodGhpcy50YXJnZXRGcmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZS5jb250ZXh0LnZpZXdwb3J0KDAsIDAsIHRoaXMudGFyZ2V0RnJhbWUud2lkdGgsIHRoaXMudGFyZ2V0RnJhbWUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2UuY29udGV4dC5iaW5kRnJhbWVidWZmZXIodGhpcy5kZXZpY2UuY29udGV4dC5GUkFNRUJVRkZFUiwgdGhpcy50YXJnZXRGcmFtZS5mcmFtZUJ1ZmZlcik7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlLmNsZWFyRnVuYygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2UuY29udGV4dC52aWV3cG9ydCgwLCAwLCB0aGlzLmRldmljZS5HZXRTaXplKCkueCwgdGhpcy5kZXZpY2UuR2V0U2l6ZSgpLnkpO1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZS5jb250ZXh0LmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmRldmljZS5jb250ZXh0LkZSQU1FQlVGRkVSLCBudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2UuY2xlYXJGdW5jKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBDYW1lcmE7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENhbWVyYTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFZlY3RvcjRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTWF0aC9WZWN0b3I0XCIpKTtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTWF0aC9WZWN0b3IyXCIpKTtcclxudmFyIEdyYXBoaWNEZXZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHcmFwaGljRGV2aWNlKGFyZ19jYW52YXMpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGFyZ19jYW52YXM7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZW5hYmxlKHRoaXMuY29udGV4dC5DVUxMX0ZBQ0UpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5lbmFibGUodGhpcy5jb250ZXh0LkRFUFRIX1RFU1QpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kZXB0aEZ1bmModGhpcy5jb250ZXh0LkxFUVVBTCk7XHJcbiAgICAgICAgdGhpcy5jbGVhckNvbG9yID0gbmV3IFZlY3RvcjRfMS5kZWZhdWx0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IG5ldyBWZWN0b3IyXzEuZGVmYXVsdChhcmdfY2FudmFzLndpZHRoLCBhcmdfY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jbGVhckZ1bmMgPSB0aGlzLkNsZWFyO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhckNvbG9yKHRoaXMuY2xlYXJDb2xvci54LCB0aGlzLmNsZWFyQ29sb3IueSwgdGhpcy5jbGVhckNvbG9yLnosIHRoaXMuY2xlYXJDb2xvci53KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJEZXB0aCgxLjApO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5ibGVuZEZ1bmModGhpcy5jb250ZXh0LlNSQ19BTFBIQSwgdGhpcy5jb250ZXh0Lk9ORV9NSU5VU19TUkNfQUxQSEEpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5lbmFibGUodGhpcy5jb250ZXh0LkJMRU5EKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHcmFwaGljRGV2aWNlLnByb3RvdHlwZSwgXCJUZW1wTWF0cml4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVtcE1hdHJpeDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR3JhcGhpY0RldmljZS5wcm90b3R5cGUsIFwiVmlld01hdHJpeFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZpZXdNYXRyaXg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLCBcIlByb2plY3Rpb25NYXRyaXhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0aW9uTWF0cml4O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHcmFwaGljRGV2aWNlLnByb3RvdHlwZSwgXCJDYW1lcmFQb3NpdGlvblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbVBvc2l0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHcmFwaGljRGV2aWNlLnByb3RvdHlwZSwgXCJDYW1lcmFSb3RhdGlvbkludlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbVJvdGF0aW9uSW52O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLlNldENsZWFyQ29sb3IgPSBmdW5jdGlvbiAoYXJnX2NvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckNvbG9yID0gYXJnX2NvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhckNvbG9yKHRoaXMuY2xlYXJDb2xvci54LCB0aGlzLmNsZWFyQ29sb3IueSwgdGhpcy5jbGVhckNvbG9yLnosIHRoaXMuY2xlYXJDb2xvci53KTtcclxuICAgICAgICByZXR1cm4gYXJnX2NvbG9yO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLkVuYWJsZVN0ZW5jaWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmVuYWJsZSh0aGlzLmNvbnRleHQuU1RFTkNJTF9URVNUKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJTdGVuY2lsKDApO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLkNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhcih0aGlzLmNvbnRleHQuQ09MT1JfQlVGRkVSX0JJVCB8IHRoaXMuY29udGV4dC5ERVBUSF9CVUZGRVJfQklUKTtcclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5DbGVhclN0ZW5jaWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyKHRoaXMuY29udGV4dC5DT0xPUl9CVUZGRVJfQklUIHwgdGhpcy5jb250ZXh0LkRFUFRIX0JVRkZFUl9CSVQgfCB0aGlzLmNvbnRleHQuU1RFTkNJTF9CVUZGRVJfQklUKTtcclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5HZXRTaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemU7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuUHJlc2VudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmx1c2goKTtcclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5TZXRTaGFkZXIgPSBmdW5jdGlvbiAoYXJnX3NoYWRlcikge1xyXG4gICAgICAgIHRoaXMuc2hhZGVyID0gYXJnX3NoYWRlcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbSh0aGlzLnNoYWRlci5wcm9ncmFtT2JqZWN0KTtcclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5DcmVhdGVQcm9ncmFtID0gZnVuY3Rpb24gKGFyZ192cywgYXJnX2ZzKSB7XHJcbiAgICAgICAgLy8g44OX44Ot44Kw44Op44Og44Kq44OW44K444Kn44Kv44OI44Gu55Sf5oiQXHJcbiAgICAgICAgdmFyIHByb2dyYW0gPSB0aGlzLmNvbnRleHQuY3JlYXRlUHJvZ3JhbSgpO1xyXG4gICAgICAgIC8vIOODl+ODreOCsOODqeODoOOCquODluOCuOOCp+OCr+ODiOOBq+OCt+OCp+ODvOODgOOCkuWJsuOCiuW9k+OBpuOCi1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgYXJnX3ZzKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGFyZ19mcyk7XHJcbiAgICAgICAgLy8g44K344Kn44O844OA44KS44Oq44Oz44KvXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmtQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgIC8vIOOCt+OCp+ODvOODgOOBruODquODs+OCr+OBjOato+OBl+OBj+ihjOOBquOCj+OCjOOBn+OBi+ODgeOCp+ODg+OCr1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCB0aGlzLmNvbnRleHQuTElOS19TVEFUVVMpKSB7XHJcbiAgICAgICAgICAgIC8vIOaIkOWKn+OBl+OBpuOBhOOBn+OCieODl+ODreOCsOODqeODoOOCquODluOCuOOCp+OCr+ODiOOCkuacieWKueOBq+OBmeOCi1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICAgICAgLy8g44OX44Ot44Kw44Op44Og44Kq44OW44K444Kn44Kv44OI44KS6L+U44GX44Gm57WC5LqGXHJcbiAgICAgICAgICAgIHJldHVybiBwcm9ncmFtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8g5aSx5pWX44GX44Gm44GE44Gf44KJ44Ko44Op44O844Ot44Kw44KS44Ki44Op44O844OI44GZ44KLXHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuY29udGV4dC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLkNyZWF0ZVZCTyA9IGZ1bmN0aW9uIChhcmdfZGF0YSkge1xyXG4gICAgICAgIC8vIOODkOODg+ODleOCoeOCquODluOCuOOCp+OCr+ODiOOBrueUn+aIkFxyXG4gICAgICAgIHZhciB2Ym8gPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgICAgLy8g44OQ44OD44OV44Kh44KS44OQ44Kk44Oz44OJ44GZ44KLXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGhpcy5jb250ZXh0LkFSUkFZX0JVRkZFUiwgdmJvKTtcclxuICAgICAgICAvLyDjg5Djg4Pjg5XjgqHjgavjg4fjg7zjgr/jgpLjgrvjg4Pjg4hcclxuICAgICAgICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0aGlzLmNvbnRleHQuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KGFyZ19kYXRhKSwgdGhpcy5jb250ZXh0LlNUQVRJQ19EUkFXKTtcclxuICAgICAgICAvLyDjg5Djg4Pjg5XjgqHjga7jg5DjgqTjg7Pjg4njgpLnhKHlirnljJZcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0aGlzLmNvbnRleHQuQVJSQVlfQlVGRkVSLCBudWxsKTtcclxuICAgICAgICAvLyDnlJ/miJDjgZfjgZ9WQk/jgpLov5TjgZfjgabntYLkuoZcclxuICAgICAgICByZXR1cm4gdmJvO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLkNyZWF0ZUlCTyA9IGZ1bmN0aW9uIChhcmdfZGF0YSkge1xyXG4gICAgICAgIC8vIOODkOODg+ODleOCoeOCquODluOCuOOCp+OCr+ODiOOBrueUn+aIkFxyXG4gICAgICAgIHZhciBpYm8gPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgICAgLy8g44OQ44OD44OV44Kh44KS44OQ44Kk44Oz44OJ44GZ44KLXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGhpcy5jb250ZXh0LkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBpYm8pO1xyXG4gICAgICAgIC8vIOODkOODg+ODleOCoeOBq+ODh+ODvOOCv+OCkuOCu+ODg+ODiFxyXG4gICAgICAgIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRoaXMuY29udGV4dC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbmV3IEludDE2QXJyYXkoYXJnX2RhdGEpLCB0aGlzLmNvbnRleHQuU1RBVElDX0RSQVcpO1xyXG4gICAgICAgIC8vIOODkOODg+ODleOCoeOBruODkOOCpOODs+ODieOCkueEoeWKueWMllxyXG4gICAgICAgIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRoaXMuY29udGV4dC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbnVsbCk7XHJcbiAgICAgICAgLy8g55Sf5oiQ44GX44GfSUJP44KS6L+U44GX44Gm57WC5LqGXHJcbiAgICAgICAgcmV0dXJuIGlibztcclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5DcmVhdGVWZXJ0ZXhTaGFkZXIgPSBmdW5jdGlvbiAoYXJnX3NvdXJjZSkge1xyXG4gICAgICAgIHZhciBzaGFkZXI7XHJcbiAgICAgICAgc2hhZGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZVNoYWRlcih0aGlzLmNvbnRleHQuVkVSVEVYX1NIQURFUik7XHJcbiAgICAgICAgLy8g55Sf5oiQ44GV44KM44Gf44K344Kn44O844OA44Gr44K944O844K544KS5Ymy44KK5b2T44Gm44KLXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNoYWRlclNvdXJjZShzaGFkZXIsIGFyZ19zb3VyY2UpO1xyXG4gICAgICAgIC8vIOOCt+OCp+ODvOODgOOCkuOCs+ODs+ODkeOCpOODq+OBmeOCi1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XHJcbiAgICAgICAgLy8g44K344Kn44O844OA44GM5q2j44GX44GP44Kz44Oz44OR44Kk44Or44GV44KM44Gf44GL44OB44Kn44OD44KvXHJcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCB0aGlzLmNvbnRleHQuQ09NUElMRV9TVEFUVVMpKSB7XHJcbiAgICAgICAgICAgIC8vIOaIkOWKn+OBl+OBpuOBhOOBn+OCieOCt+OCp+ODvOODgOOCkui/lOOBl+OBpue1guS6hlxyXG4gICAgICAgICAgICByZXR1cm4gc2hhZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2ZXJ0ZXggc2hhZGVyIGZhaWxlZFwiKTtcclxuICAgICAgICAgICAgLy8g5aSx5pWX44GX44Gm44GE44Gf44KJ44Ko44Op44O844Ot44Kw44KS44Ki44Op44O844OI44GZ44KLXHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuY29udGV4dC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLkNyZWF0ZUZyYWdtZW50U2hhZGVyID0gZnVuY3Rpb24gKGFyZ19zb3VyY2UpIHtcclxuICAgICAgICB2YXIgc2hhZGVyO1xyXG4gICAgICAgIHNoYWRlciA9IHRoaXMuY29udGV4dC5jcmVhdGVTaGFkZXIodGhpcy5jb250ZXh0LkZSQUdNRU5UX1NIQURFUik7XHJcbiAgICAgICAgLy8g55Sf5oiQ44GV44KM44Gf44K344Kn44O844OA44Gr44K944O844K544KS5Ymy44KK5b2T44Gm44KLXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNoYWRlclNvdXJjZShzaGFkZXIsIGFyZ19zb3VyY2UpO1xyXG4gICAgICAgIC8vIOOCt+OCp+ODvOODgOOCkuOCs+ODs+ODkeOCpOODq+OBmeOCi1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XHJcbiAgICAgICAgLy8g44K344Kn44O844OA44GM5q2j44GX44GP44Kz44Oz44OR44Kk44Or44GV44KM44Gf44GL44OB44Kn44OD44KvXHJcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCB0aGlzLmNvbnRleHQuQ09NUElMRV9TVEFUVVMpKSB7XHJcbiAgICAgICAgICAgIC8vIOaIkOWKn+OBl+OBpuOBhOOBn+OCieOCt+OCp+ODvOODgOOCkui/lOOBl+OBpue1guS6hlxyXG4gICAgICAgICAgICByZXR1cm4gc2hhZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmcmFnbWVudCBzaGFkZXIgZmFpbGVkXCIpO1xyXG4gICAgICAgICAgICAvLyDlpLHmlZfjgZfjgabjgYTjgZ/jgonjgqjjg6njg7zjg63jgrDjgpLjgqLjg6njg7zjg4jjgZnjgotcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5jb250ZXh0LmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuQ3JlYXRlVGV4dHVyZSA9IGZ1bmN0aW9uIChhcmdfc291cmNlLCBhcmdfdGV4dHVyZSkge1xyXG4gICAgICAgIC8vIOOCpOODoeODvOOCuOOCquODluOCuOOCp+OCr+ODiOOBrueUn+aIkFxyXG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAvLyDjg4fjg7zjgr/jga7jgqrjg7Pjg63jg7zjg4njgpLjg4jjg6rjgqzjg7zjgavjgZnjgotcclxuICAgICAgICBpbWcub25sb2FkID0gT25UZXhMb2FkKGltZywgYXJnX3RleHR1cmUsIGFyZ19zb3VyY2UsIHRoaXMpO1xyXG4gICAgICAgIC8vIOOCpOODoeODvOOCuOOCquODluOCuOOCp+OCr+ODiOOBruOCveODvOOCueOCkuaMh+WumlxyXG4gICAgICAgIGltZy5zcmMgPSBhcmdfc291cmNlO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLlNldFZCTyA9IGZ1bmN0aW9uIChhcmdfdmJvTGlzdCkge1xyXG4gICAgICAgIC8vIOW8leaVsOOBqOOBl+OBpuWPl+OBkeWPluOBo+OBn+mFjeWIl+OCkuWHpueQhuOBmeOCi1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gYXJnX3Zib0xpc3QpIHtcclxuICAgICAgICAgICAgLy8g44OQ44OD44OV44Kh44KS44OQ44Kk44Oz44OJ44GZ44KLXHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRoaXMuY29udGV4dC5BUlJBWV9CVUZGRVIsIGFyZ192Ym9MaXN0W2ldKTtcclxuICAgICAgICAgICAgLy8gYXR0cmlidXRlTG9jYXRpb27jgpLmnInlirnjgavjgZnjgotcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuc2hhZGVyLmF0dHJpYnV0ZUxvY2F0aW9uc1tpXSk7XHJcbiAgICAgICAgICAgIC8vIGF0dHJpYnV0ZUxvY2F0aW9u44KS6YCa55+l44GX55m76Yyy44GZ44KLXHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuc2hhZGVyLmF0dHJpYnV0ZUxvY2F0aW9uc1tpXSwgdGhpcy5zaGFkZXIuYXR0cmlidXRlU3RyaWRlc1tpXSwgdGhpcy5jb250ZXh0LkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLk9uTG9hZFRleHR1cmUgPSBmdW5jdGlvbiAoaW1nLCBhcmdfdGV4dHVyZSwgYXJnX3NvdXJjZSkge1xyXG4gICAgICAgIC8vIOODhuOCr+OCueODgeODo+OCquODluOCuOOCp+OCr+ODiOOBrueUn+aIkFxyXG4gICAgICAgIHZhciB0ZXggPSB0aGlzLmNvbnRleHQuY3JlYXRlVGV4dHVyZSgpO1xyXG4gICAgICAgIC8vIOODhuOCr+OCueODgeODo+OCkuODkOOCpOODs+ODieOBmeOCi1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZSh0aGlzLmNvbnRleHQuVEVYVFVSRV8yRCwgdGV4KTtcclxuICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6PjgbjjgqTjg6Hjg7zjgrjjgpLpgannlKhcclxuICAgICAgICB0aGlzLmNvbnRleHQudGV4SW1hZ2UyRCh0aGlzLmNvbnRleHQuVEVYVFVSRV8yRCwgMCwgdGhpcy5jb250ZXh0LlJHQkEsIHRoaXMuY29udGV4dC5SR0JBLCB0aGlzLmNvbnRleHQuVU5TSUdORURfQllURSwgaW1nKTtcclxuICAgICAgICAvLyDjg5/jg4Pjg5fjg57jg4Pjg5fjgpLnlJ/miJBcclxuICAgICAgICB0aGlzLmNvbnRleHQuZ2VuZXJhdGVNaXBtYXAodGhpcy5jb250ZXh0LlRFWFRVUkVfMkQpO1xyXG4gICAgICAgIC8vIOODhuOCr+OCueODgeODo+OBruODkOOCpOODs+ODieOCkueEoeWKueWMllxyXG4gICAgICAgIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZSh0aGlzLmNvbnRleHQuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgICAgICAgYXJnX3RleHR1cmUuZGF0YSA9IHRleDtcclxuICAgICAgICBhcmdfdGV4dHVyZS5Mb2FkZWQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhcmdfc291cmNlICsgXCIgbG9hZGVkXCIpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLk9uTG9hZFNoYWRlciA9IGZ1bmN0aW9uIChhcmdfc291cmNlLCBhcmdfc2hhZGVyKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBhcmdfc291cmNlLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBhcmdfc2hhZGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZVNoYWRlcih0aGlzLmNvbnRleHQuVkVSVEVYX1NIQURFUik7XHJcbiAgICAgICAgLy8g55Sf5oiQ44GV44KM44Gf44K344Kn44O844OA44Gr44K944O844K544KS5Ymy44KK5b2T44Gm44KLXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNoYWRlclNvdXJjZShhcmdfc2hhZGVyLCBkYXRhKTtcclxuICAgICAgICAvLyDjgrfjgqfjg7zjg4DjgpLjgrPjg7Pjg5HjgqTjg6vjgZnjgotcclxuICAgICAgICB0aGlzLmNvbnRleHQuY29tcGlsZVNoYWRlcihhcmdfc2hhZGVyKTtcclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5TZXRDYW1lcmFTdGF0dXMgPSBmdW5jdGlvbiAoYXJnX3ZpZXdNYXRyaXgsIGFyZ19wcm9qZWN0aW9uTWF0cml4LCBhcmdfY2FtZXJhTWF0cml4LCBhcmdfY2FtZXJhUG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLnZpZXdNYXRyaXggPSBhcmdfdmlld01hdHJpeDtcclxuICAgICAgICB0aGlzLnByb2plY3Rpb25NYXRyaXggPSBhcmdfcHJvamVjdGlvbk1hdHJpeDtcclxuICAgICAgICB0aGlzLnRlbXBNYXRyaXggPSB0aGlzLnByb2plY3Rpb25NYXRyaXguTXVsdGlwbHkodGhpcy52aWV3TWF0cml4KTtcclxuICAgICAgICB0aGlzLmNhbVBvc2l0aW9uID0gYXJnX2NhbWVyYVBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuY2FtUm90YXRpb25JbnYgPSAoYXJnX2NhbWVyYU1hdHJpeCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdyYXBoaWNEZXZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEdyYXBoaWNEZXZpY2U7XHJcbmZ1bmN0aW9uIE9uVGV4TG9hZChpbWcsIGFyZ190ZXh0dXJlLCBhcmdfc291cmNlLCBkZXZpY2UpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGV2aWNlLk9uTG9hZFRleHR1cmUoaW1nLCBhcmdfdGV4dHVyZSwgYXJnX3NvdXJjZSk7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIE9uU2hhZGVyTG9hZChhcmdfc291cmNlLCBhcmdfc2hhZGVyLCBkZXZpY2UpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGV2aWNlLk9uTG9hZFNoYWRlcihhcmdfc291cmNlLCBhcmdfc2hhZGVyKTtcclxuICAgIH07XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTW9kZWwoaXNMaWdodCwgaXNCaWxsQm9hcmQpIHtcclxuICAgICAgICBpZiAoaXNCaWxsQm9hcmQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoaXNMaWdodClcclxuICAgICAgICAgICAgICAgIHRoaXMuRHJhdyA9IHRoaXMuRHJhd19CaWxsQm9hcmRfTGlnaHQ7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuRHJhdyA9IHRoaXMuRHJhd19CaWxsQm9hcmRfTm9uTGlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaXNMaWdodClcclxuICAgICAgICAgICAgICAgIHRoaXMuRHJhdyA9IHRoaXMuRHJhd19MaWdodDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5EcmF3ID0gdGhpcy5EcmF3X05vbkxpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIE1vZGVsLnByb3RvdHlwZS5Jbml0aWFsaXplX2dlb20gPSBmdW5jdGlvbiAoYXJnX2dyYXBoaWNEZXZpY2UsIGFyZ19nZW9tZXRyeSwgYXJnX21hdGVyaWFsLCBhcmdfU2hhZGVyLCBhcmdfdHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlID0gYXJnX2dyYXBoaWNEZXZpY2U7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IGFyZ19nZW9tZXRyeTtcclxuICAgICAgICB0aGlzLm1hdGVyaWFscyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxzLnB1c2goYXJnX21hdGVyaWFsKTtcclxuICAgICAgICB0aGlzLnN1YnNldHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLnN1YnNldHMucHVzaCh0aGlzLmdlb21ldHJ5LkdldEluZGV4U2l6ZSgpKTtcclxuICAgICAgICB0aGlzLnNoYWRlciA9IGFyZ19TaGFkZXI7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBhcmdfdHJhbnNmb3JtO1xyXG4gICAgICAgIHRoaXMubGlnaHRzID0gbmV3IEFycmF5KCk7XHJcbiAgICB9O1xyXG4gICAgTW9kZWwucHJvdG90eXBlLkluaXRpYWxpemVfbWVzaCA9IGZ1bmN0aW9uIChhcmdfZ3JhcGhpY0RldmljZSwgYXJnX21lc2gsIGFyZ19TaGFkZXIsIGFyZ190cmFuc2Zvcm0pIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UgPSBhcmdfZ3JhcGhpY0RldmljZTtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gYXJnX21lc2guZ2VvbWV0cnk7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbHMgPSBhcmdfbWVzaC5hcnlfbWF0ZXJpYWxzO1xyXG4gICAgICAgIHRoaXMuc3Vic2V0cyA9IHRoaXMuZ2VvbWV0cnkuR2V0U3ViU2V0KCk7XHJcbiAgICAgICAgdGhpcy5zaGFkZXIgPSBhcmdfU2hhZGVyO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gYXJnX3RyYW5zZm9ybTtcclxuICAgICAgICB0aGlzLmxpZ2h0cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3Vic2V0cyk7XHJcbiAgICB9O1xyXG4gICAgTW9kZWwucHJvdG90eXBlLlNldExpZ2h0ID0gZnVuY3Rpb24gKGFyZ19saWdodCkge1xyXG4gICAgICAgIHRoaXMubGlnaHRzLnB1c2goYXJnX2xpZ2h0KTtcclxuICAgIH07XHJcbiAgICBNb2RlbC5wcm90b3R5cGUuRHJhd19Ob25MaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNoYWRlci5BdHRhY2goKTtcclxuICAgICAgICB2YXIgbXZwTWF0cml4ID0gdGhpcy5ncmFwaGljRGV2aWNlLlRlbXBNYXRyaXguTXVsdGlwbHkodGhpcy50cmFuc2Zvcm0uTWF0cml4KTtcclxuICAgICAgICB2YXIgaW52TWF0cml4ID0gdGhpcy50cmFuc2Zvcm0uTWF0cml4LkludmVyc2UoKTtcclxuICAgICAgICAvLyB1bmlmb3Jt5aSJ5pWw44Gu55m76Yyy44Go5o+P55S7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzBdLCBmYWxzZSwgbXZwTWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1sxXSwgZmFsc2UsIHRoaXMudHJhbnNmb3JtLk1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMl0sIGZhbHNlLCBpbnZNYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5EcmF3KCk7XHJcbiAgICAgICAgdmFyIG9mZnNldCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1YnNldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbHNbaV0uQXR0YWNoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmRyYXdFbGVtZW50cyh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5UUklBTkdMRVMsIHRoaXMuc3Vic2V0c1tpXSwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVU5TSUdORURfU0hPUlQsIG9mZnNldCAqIDIpO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gdGhpcy5zdWJzZXRzW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBNb2RlbC5wcm90b3R5cGUuRHJhd19MaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNoYWRlci5BdHRhY2goKTtcclxuICAgICAgICB2YXIgbXZwTWF0cml4ID0gdGhpcy5ncmFwaGljRGV2aWNlLlRlbXBNYXRyaXguTXVsdGlwbHkodGhpcy50cmFuc2Zvcm0uTWF0cml4KTtcclxuICAgICAgICB2YXIgaW52TWF0cml4ID0gdGhpcy50cmFuc2Zvcm0uTWF0cml4LkludmVyc2UoKTtcclxuICAgICAgICAvLyB1bmlmb3Jt5aSJ5pWw44Gu55m76Yyy44Go5o+P55S7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzBdLCBmYWxzZSwgbXZwTWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1sxXSwgZmFsc2UsIHRoaXMudHJhbnNmb3JtLk1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMl0sIGZhbHNlLCBpbnZNYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5saWdodHMuZm9yRWFjaChmdW5jdGlvbiAobGlnaHQpIHsgcmV0dXJuIGxpZ2h0LkF0YWNoKCk7IH0pO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuRHJhdygpO1xyXG4gICAgICAgIHZhciBvZmZzZXQgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdWJzZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzW2ldLkF0dGFjaCgpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5kcmF3RWxlbWVudHModGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVFJJQU5HTEVTLCB0aGlzLnN1YnNldHNbaV0sIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlVOU0lHTkVEX1NIT1JULCBvZmZzZXQgKiAyKTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IHRoaXMuc3Vic2V0c1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTW9kZWwucHJvdG90eXBlLkRyYXdfQmlsbEJvYXJkX0xpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2hhZGVyLkF0dGFjaCgpO1xyXG4gICAgICAgIHZhciBtTWF0cml4ID0gdGhpcy50cmFuc2Zvcm0uTWF0cml4Lk11bHRpcGx5KHRoaXMuZ3JhcGhpY0RldmljZS5DYW1lcmFSb3RhdGlvbkludik7XHJcbiAgICAgICAgdmFyIG12cE1hdHJpeCA9IHRoaXMuZ3JhcGhpY0RldmljZS5UZW1wTWF0cml4Lk11bHRpcGx5KG1NYXRyaXgpO1xyXG4gICAgICAgIHZhciBpbnZNYXRyaXggPSB0aGlzLnRyYW5zZm9ybS5NYXRyaXguSW52ZXJzZSgpO1xyXG4gICAgICAgIHRoaXMubGlnaHRzLmZvckVhY2goZnVuY3Rpb24gKGxpZ2h0KSB7IHJldHVybiBsaWdodC5BdGFjaCgpOyB9KTtcclxuICAgICAgICAvLyB1bmlmb3Jt5aSJ5pWw44Gu55m76Yyy44Go5o+P55S7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzBdLCBmYWxzZSwgbXZwTWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1sxXSwgZmFsc2UsIHRoaXMudHJhbnNmb3JtLk1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMl0sIGZhbHNlLCBpbnZNYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5EcmF3KCk7XHJcbiAgICAgICAgdmFyIG9mZnNldCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1YnNldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbHNbaV0uQXR0YWNoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmRyYXdFbGVtZW50cyh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5UUklBTkdMRVMsIHRoaXMuc3Vic2V0c1tpXSwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVU5TSUdORURfU0hPUlQsIG9mZnNldCAqIDIpO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gdGhpcy5zdWJzZXRzW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBNb2RlbC5wcm90b3R5cGUuRHJhd19CaWxsQm9hcmRfTm9uTGlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zaGFkZXIuQXR0YWNoKCk7XHJcbiAgICAgICAgLy90aGlzLnRyYW5zZm9ybS5Mb29rQXQodGhpcy5ncmFwaGljRGV2aWNlLkNhbWVyYVBvc2l0aW9uLG5ldyBWZWN0b3IzKDAsMSwwKSk7XHJcbiAgICAgICAgdmFyIG1NYXRyaXggPSB0aGlzLnRyYW5zZm9ybS5NYXRyaXguTXVsdGlwbHkodGhpcy5ncmFwaGljRGV2aWNlLkNhbWVyYVJvdGF0aW9uSW52KTtcclxuICAgICAgICB2YXIgbXZwTWF0cml4ID0gdGhpcy5ncmFwaGljRGV2aWNlLlRlbXBNYXRyaXguTXVsdGlwbHkobU1hdHJpeCk7XHJcbiAgICAgICAgdmFyIGludk1hdHJpeCA9IHRoaXMudHJhbnNmb3JtLk1hdHJpeC5JbnZlcnNlKCk7XHJcbiAgICAgICAgLy8gdW5pZm9ybeWkieaVsOOBrueZu+mMsuOBqOaPj+eUu1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1swXSwgZmFsc2UsIG12cE1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMV0sIGZhbHNlLCB0aGlzLnRyYW5zZm9ybS5NYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzJdLCBmYWxzZSwgaW52TWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuRHJhdygpO1xyXG4gICAgICAgIHZhciBvZmZzZXQgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdWJzZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzW2ldLkF0dGFjaCgpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5kcmF3RWxlbWVudHModGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVFJJQU5HTEVTLCB0aGlzLnN1YnNldHNbaV0sIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlVOU0lHTkVEX1NIT1JULCBvZmZzZXQgKiAyKTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IHRoaXMuc3Vic2V0c1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1vZGVsO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBNb2RlbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFRleHRNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRleHRNb2RlbChpc0JpbGxCb2FyZCkge1xyXG4gICAgICAgIGlmIChpc0JpbGxCb2FyZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuRHJhdyA9IHRoaXMuRHJhd19CaWxsQm9hcmRfTm9uTGlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLkRyYXcgPSB0aGlzLkRyYXdfTm9uTGlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgVGV4dE1vZGVsLnByb3RvdHlwZS5TZXRVVkRhdGEgPSBmdW5jdGlvbiAoYXJnX3V2VkJPKSB7XHJcbiAgICAgICAgdGhpcy51dkRhdGEgPSBhcmdfdXZWQk87XHJcbiAgICB9O1xyXG4gICAgVGV4dE1vZGVsLnByb3RvdHlwZS5Jbml0aWFsaXplX2dlb20gPSBmdW5jdGlvbiAoYXJnX2dyYXBoaWNEZXZpY2UsIGFyZ19nZW9tZXRyeSwgYXJnX21hdGVyaWFsLCBhcmdfU2hhZGVyLCBhcmdfdHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlID0gYXJnX2dyYXBoaWNEZXZpY2U7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IGFyZ19nZW9tZXRyeTtcclxuICAgICAgICB0aGlzLm1hdGVyaWFscyA9IGFyZ19tYXRlcmlhbDtcclxuICAgICAgICB0aGlzLmluZGV4U2l6ZSA9ICh0aGlzLmdlb21ldHJ5LkdldEluZGV4U2l6ZSgpKTtcclxuICAgICAgICB0aGlzLnNoYWRlciA9IGFyZ19TaGFkZXI7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBhcmdfdHJhbnNmb3JtO1xyXG4gICAgfTtcclxuICAgIFRleHRNb2RlbC5wcm90b3R5cGUuU2V0TGlnaHQgPSBmdW5jdGlvbiAoYXJnX2xpZ2h0KSB7XHJcbiAgICB9O1xyXG4gICAgVGV4dE1vZGVsLnByb3RvdHlwZS5EcmF3X05vbkxpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2hhZGVyLkF0dGFjaCgpO1xyXG4gICAgICAgIHZhciBtdnBNYXRyaXggPSB0aGlzLmdyYXBoaWNEZXZpY2UuVGVtcE1hdHJpeC5NdWx0aXBseSh0aGlzLnRyYW5zZm9ybS5NYXRyaXgpO1xyXG4gICAgICAgIHZhciBpbnZNYXRyaXggPSB0aGlzLnRyYW5zZm9ybS5NYXRyaXguSW52ZXJzZSgpO1xyXG4gICAgICAgIC8vIHVuaWZvcm3lpInmlbDjga7nmbvpjLLjgajmj4/nlLtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMF0sIGZhbHNlLCBtdnBNYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzFdLCBmYWxzZSwgdGhpcy50cmFuc2Zvcm0uTWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1syXSwgZmFsc2UsIGludk1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LkRyYXcoKTtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LkNoYW5nZVZCTyh0aGlzLnV2RGF0YSwgMSk7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbHMuQXR0YWNoKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuZHJhd0VsZW1lbnRzKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRSSUFOR0xFUywgdGhpcy5pbmRleFNpemUsIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlVOU0lHTkVEX1NIT1JULCAwKTtcclxuICAgIH07XHJcbiAgICBUZXh0TW9kZWwucHJvdG90eXBlLkRyYXdfQmlsbEJvYXJkX05vbkxpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2hhZGVyLkF0dGFjaCgpO1xyXG4gICAgICAgIC8vdGhpcy50cmFuc2Zvcm0uTG9va0F0KHRoaXMuZ3JhcGhpY0RldmljZS5DYW1lcmFQb3NpdGlvbixuZXcgVmVjdG9yMygwLDEsMCkpO1xyXG4gICAgICAgIHZhciBtTWF0cml4ID0gdGhpcy50cmFuc2Zvcm0uTWF0cml4Lk11bHRpcGx5KHRoaXMuZ3JhcGhpY0RldmljZS5DYW1lcmFSb3RhdGlvbkludik7XHJcbiAgICAgICAgdmFyIG12cE1hdHJpeCA9IHRoaXMuZ3JhcGhpY0RldmljZS5UZW1wTWF0cml4Lk11bHRpcGx5KG1NYXRyaXgpO1xyXG4gICAgICAgIHZhciBpbnZNYXRyaXggPSB0aGlzLnRyYW5zZm9ybS5NYXRyaXguSW52ZXJzZSgpO1xyXG4gICAgICAgIC8vIHVuaWZvcm3lpInmlbDjga7nmbvpjLLjgajmj4/nlLtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMF0sIGZhbHNlLCBtdnBNYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzFdLCBmYWxzZSwgdGhpcy50cmFuc2Zvcm0uTWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1syXSwgZmFsc2UsIGludk1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LkRyYXcoKTtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LkNoYW5nZVZCTyh0aGlzLnV2RGF0YSwgMSk7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbHMuQXR0YWNoKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuZHJhd0VsZW1lbnRzKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRSSUFOR0xFUywgdGhpcy5pbmRleFNpemUsIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlVOU0lHTkVEX1NIT1JULCAwKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVGV4dE1vZGVsO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBUZXh0TW9kZWw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBUcmFuc2Zvcm1fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVHJhbnNmb3JtXCIpKTtcclxudmFyIFBvaW50TGlnaHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQb2ludExpZ2h0KGFyZ19kZXZpY2UpIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UgPSBhcmdfZGV2aWNlO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybV8xLmRlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIFBvaW50TGlnaHQucHJvdG90eXBlLkF0YWNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm0zZnYodGhpcy5ncmFwaGljRGV2aWNlLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzRdLCB0aGlzLnRyYW5zZm9ybS5Qb3NpdGlvbi54eXopO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQb2ludExpZ2h0O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBQb2ludExpZ2h0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFNjZW5lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vU2NlbmUvU2NlbmVcIikpO1xyXG52YXIgUmVzb3VyY2VDcmVhdGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVG9vbC9SZXNvdXJjZUNyZWF0ZXJcIikpO1xyXG52YXIgR2VvbWV0cnlHZW5lcmF0b3JfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Ub29sL0dlb21ldHJ5R2VuZXJhdG9yXCIpKTtcclxudmFyIFF1YXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYXRoL1F1YXRcIikpO1xyXG52YXIgVmVjdG9yNF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01hdGgvVmVjdG9yNFwiKSk7XHJcbnZhciBWZWN0b3IzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWF0aC9WZWN0b3IzXCIpKTtcclxudmFyIFBvaW50TGlnaHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9MaWdodC9Qb2ludExpZ2h0XCIpKTtcclxudmFyIE1vZGVsRHJhd0NvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvbXBvbmVudC9Nb2RlbERyYXdDb21wb25lbnRcIikpO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01hdGgvVmVjdG9yMlwiKSk7XHJcbnZhciBUZXh0RHJhd0NvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvbXBvbmVudC9UZXh0RHJhd0NvbXBvbmVudFwiKSk7XHJcbnZhciBUcmFuc2Zvcm1fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9UcmFuc2Zvcm1cIikpO1xyXG52YXIgU2FtcGxlU2NlbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TYW1wbGVTY2VuZVwiKSk7XHJcbnZhciBQcmltaXRpdmVUeXBlO1xyXG4oZnVuY3Rpb24gKFByaW1pdGl2ZVR5cGUpIHtcclxuICAgIFByaW1pdGl2ZVR5cGVbUHJpbWl0aXZlVHlwZVtcInNwaGVyZVwiXSA9IDBdID0gXCJzcGhlcmVcIjtcclxuICAgIFByaW1pdGl2ZVR5cGVbUHJpbWl0aXZlVHlwZVtcImJveF9BQUJCXCJdID0gMV0gPSBcImJveF9BQUJCXCI7XHJcbiAgICBQcmltaXRpdmVUeXBlW1ByaW1pdGl2ZVR5cGVbXCJib3hfT0JCXCJdID0gMl0gPSBcImJveF9PQkJcIjtcclxuICAgIFByaW1pdGl2ZVR5cGVbUHJpbWl0aXZlVHlwZVtcInBvaW50XCJdID0gM10gPSBcInBvaW50XCI7XHJcbn0pKFByaW1pdGl2ZVR5cGUgfHwgKFByaW1pdGl2ZVR5cGUgPSB7fSkpO1xyXG52YXIgZmxvYXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBmbG9hdCgpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZsb2F0O1xyXG59KCkpO1xyXG52YXIgTG9hZFNjZW5lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKExvYWRTY2VuZSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIExvYWRTY2VuZShzY2VuZU1hbmdlcikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHNjZW5lTWFuZ2VyKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmFRdWF0ZXJuaW9uID0gbmV3IFF1YXRfMS5kZWZhdWx0KCkuSWRlbnRpdHkoKTtcclxuICAgICAgICBfdGhpcy5iUXVhdGVybmlvbiA9IG5ldyBRdWF0XzEuZGVmYXVsdCgpLklkZW50aXR5KCk7XHJcbiAgICAgICAgX3RoaXMuc1F1YXRlcm5pb24gPSBuZXcgUXVhdF8xLmRlZmF1bHQoKS5JZGVudGl0eSgpO1xyXG4gICAgICAgIF90aGlzLnpvb21EYXRhID0gbmV3IGZsb2F0KCk7XHJcbiAgICAgICAgX3RoaXMuem9vbURpcmVjdGlvbiA9IDEuMDtcclxuICAgICAgICBfdGhpcy56b29tRGF0YS5kYXRhWzBdID0gMC41O1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIExvYWRTY2VuZS5wcm90b3R5cGUuQmVmTG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLkFkZExheWVyKCk7XHJcbiAgICAgICAgdGhpcy5BZGRDYW1lcmEoMCwgMSwgXCJtYWluXCIsIGZhbHNlLCB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkdldFRleHR1cmUoXCJsb2FkaW5nQ2FtZXJhXCIpKTtcclxuICAgICAgICAvLyDpoILngrnjgrfjgqfjg7zjg4Djgajjg5Xjg6njgrDjg6Hjg7Pjg4jjgrfjgqfjg7zjg4Djga7nlJ/miJBcclxuICAgICAgICB2YXIgbGlnaHQgPSBuZXcgUG9pbnRMaWdodF8xLmRlZmF1bHQodGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKTtcclxuICAgICAgICBsaWdodC50cmFuc2Zvcm0uUG9zaXRpb24gPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoLTUsIC01LCAxMCk7XHJcbiAgICAgICAgLy90aGlzLnJlbmRlcmVyLlNldExpZ2h0KGxpZ2h0LDApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuU2V0TGlnaHQobGlnaHQsIDEpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKS5FbmFibGVTdGVuY2lsKCk7XHJcbiAgICAgICAgdGhpcy5HZXRDYW1lcmEoXCJtYWluXCIpLnRyYW5zZm9ybS5Qb3NpdGlvbiA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAtMywgMTApO1xyXG4gICAgICAgIHRoaXMuR2V0Q2FtZXJhKFwibWFpblwiKS50cmFuc2Zvcm0uTG9va0F0KG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAwKSwgVmVjdG9yM18xLmRlZmF1bHQueUF4aXMpO1xyXG4gICAgICAgIHRoaXMuR2V0Q2FtZXJhKFwibWFpblwiKS5jbGVhckNvbG9yID0gbmV3IFZlY3RvcjRfMS5kZWZhdWx0KDAuMCwgMC4wLCAwLjAsIDEuMCk7XHJcbiAgICAgICAgdGhpcy5jdWJlID0gdGhpcy5nYW1lT2JqZWN0TWFuYWdlci5BZGRHYW1lT2JqZWN0KFwiY3ViZVwiKTtcclxuICAgICAgICB0aGlzLmFub3RoZXJDdWJlID0gdGhpcy5nYW1lT2JqZWN0TWFuYWdlci5BZGRHYW1lT2JqZWN0KFwiY3ViZVwiKTtcclxuICAgICAgICB0aGlzLnByb2plY3Rpb25QbGFuZSA9IHRoaXMuZ2FtZU9iamVjdE1hbmFnZXIuQWRkR2FtZU9iamVjdChcInByb2plY3Rpb25DdWJlXCIpO1xyXG4gICAgICAgIC8vdGhpcy50b3J1cy5TZXRDb21wb25lbnQobmV3IE1vZGVsRHJhd0NvbXBvbmVudChcImhzdlRvcnVzXCIsXCJjYWxvcnlNYXRlcmlhbFwiLFwicG9pbnRMaWdodFwiLDEpKSBhcyBNb2RlbERyYXdDb21wb25lbnQ7XHJcbiAgICAgICAgLy90aGlzLmN1YmUuU2V0Q29tcG9uZW50KG5ldyBNb2RlbERyYXdDb21wb25lbnQoZmFsc2UsIFwiY3ViZVwiLFwiY2Fsb3J5TWF0ZXJpYWxcIixcInRleFNoYWRlclwiLDEsZmFsc2UpKSBhcyBNb2RlbERyYXdDb21wb25lbnQ7XHJcbiAgICAgICAgdmFyIHRyID0gbmV3IFRyYW5zZm9ybV8xLmRlZmF1bHQoKTtcclxuICAgICAgICB0ci5Qb3NpdGlvbiA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgxLCAxLCAxKTtcclxuICAgICAgICB2YXIgdHIyID0gbmV3IFRyYW5zZm9ybV8xLmRlZmF1bHQoKTtcclxuICAgICAgICB0cjIuUG9zaXRpb24gPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoLTEsIC0xLCAyKTtcclxuICAgICAgICB0aGlzLmN1YmUuU2V0Q29tcG9uZW50KG5ldyBUZXh0RHJhd0NvbXBvbmVudF8xLmRlZmF1bHQoXCJsb2FkaW5nXCIsIFwiZm9udFwiLCBcImZvbnRTaGFkZXJcIiwgbmV3IFZlY3RvcjRfMS5kZWZhdWx0KDAuNzUsIDAuNzUsIDAuMjUsIDEpLCAxLCB0cnVlKSk7XHJcbiAgICAgICAgLy90aGlzLmFub3RoZXJDdWJlLlNldENvbXBvbmVudChuZXcgTW9kZWxEcmF3Q29tcG9uZW50KGZhbHNlLCBcImN1YmVcIixcImNhbG9yeU1hdGVyaWFsXCIsXCJ0ZXhTaGFkZXJcIiwxLHRydWUpKSBhcyBNb2RlbERyYXdDb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uUGxhbmUuU2V0Q29tcG9uZW50KG5ldyBNb2RlbERyYXdDb21wb25lbnRfMS5kZWZhdWx0KGZhbHNlLCBcInBsYW5lXCIsIFwibG9hZGluZ0NhbWVyYU1hdGVyaWFsXCIsIFwidGV4U2hhZGVyXCIsIDAsIGZhbHNlKSk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uUGxhbmUudHJhbnNmb3JtLlNjYWxlID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDUwMCwgNTAwLCAxKTtcclxuICAgICAgICB0aGlzLmN1YmUudHJhbnNmb3JtLlBvc2l0aW9uID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAuNSwgMCwgMC41KTtcclxuICAgICAgICB0aGlzLmFub3RoZXJDdWJlLnRyYW5zZm9ybS5Qb3NpdGlvbiA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgtMSwgLTUsIDEwKTtcclxuICAgICAgICB0aGlzLnByb2plY3Rpb25QbGFuZS50cmFuc2Zvcm0uUG9zaXRpb24gPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgLTEpO1xyXG4gICAgfTtcclxuICAgIExvYWRTY2VuZS5wcm90b3R5cGUuT25Mb2FkaW5nVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIExvYWRTY2VuZS5wcm90b3R5cGUuT25Mb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNhbG9yeVRleHR1cmUsIG1hdGVyaWFsO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZFNoYWRlcihSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZVNoYWRlcignc2hhZGVyL1BvaW50TGlnaHRWUy5nbHNsJywgXCJzaGFkZXIvUG9pbnRMaWdodEZTLmdsc2xcIiwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJwb2ludExpZ2h0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRTaGFkZXIoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVTaGFkZXIoJ3NoYWRlci9VVk5vcm1hbFZTLmdsc2wnLCBcInNoYWRlci9EZWZhdWx0RlNfbGlnaHQuZ2xzbFwiLCB0aGlzLnNjZW5lTWFuYWdlci5HZXRHcmFwaGljRGV2aWNlKCkpLCBcInRleFNoYWRlcl9saWdodFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkU2hhZGVyKFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlU2hhZGVyKCdzaGFkZXIvVVZOb3JtYWxWUy5nbHNsJywgXCJzaGFkZXIvWm9vbUJsdXIuZ2xzbFwiLCB0aGlzLnNjZW5lTWFuYWdlci5HZXRHcmFwaGljRGV2aWNlKCkpLCBcInpvb21FZmZlY3RcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZFNoYWRlcihSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZVNoYWRlcignc2hhZGVyL1VWTm9ybWFsVlMuZ2xzbCcsIFwic2hhZGVyL0RvdEVmZmVjdC5nbHNsXCIsIHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSksIFwiZG90RWZmZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRTaGFkZXIoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVTaGFkZXIoJ3NoYWRlci9VVk5vcm1hbENvbG9yVlMuZ2xzbCcsIFwic2hhZGVyL0JsYWNrVGVzdEZTLmdsc2xcIiwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJibGFja1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkR2VvbWV0cnkoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVHZW9tZXRyeShHZW9tZXRyeUdlbmVyYXRvcl8xLmRlZmF1bHQuQ3JlYXRlVG9ydXMoMzIsIDMyLCAwLjUsIDEpLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJoc3ZUb3J1c1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkR2VvbWV0cnkoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVHZW9tZXRyeShHZW9tZXRyeUdlbmVyYXRvcl8xLmRlZmF1bHQuQ3JlYXRlQ3ViZSgxLCBuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMS4wLCAxLjAsIDEuMCwgMSkpLCB0cnVlLCB0cnVlLCB0cnVlLCB0aGlzLnNjZW5lTWFuYWdlci5HZXRHcmFwaGljRGV2aWNlKCkpLCBcImN1YmVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZEdlb21ldHJ5KFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlR2VvbWV0cnkoR2VvbWV0cnlHZW5lcmF0b3JfMS5kZWZhdWx0LkNyZWF0ZVNwaGVyZSgxMiwgMTIsIDAuNSwgbmV3IFZlY3RvcjRfMS5kZWZhdWx0KDEuMCwgMS4wLCAxLjAsIDEpKSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJzcGhlcmVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZEdlb21ldHJ5KFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlR2VvbWV0cnkoR2VvbWV0cnlHZW5lcmF0b3JfMS5kZWZhdWx0LkNyZWF0ZVBsYW5lKG5ldyBWZWN0b3IyXzEuZGVmYXVsdCgxLCAxKSwgZmFsc2UsIG5ldyBWZWN0b3I0XzEuZGVmYXVsdCgxLjAsIDEuMCwgMS4wLCAxKSksIHRydWUsIGZhbHNlLCBmYWxzZSwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJwbGFuZVwiKTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5zY2VuZU1hbmdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZE1lc2goUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZU1lc2hSZXNvdXJjZUZyb21GaWxlKFwibW9kZWwvTWFndXJvL21hZ3Vyby5iM21cIix0aGlzLnNjZW5lTWFuZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCksdGhpcy5zY2VuZU1hbmdlci5HZXRHcmFwaGljRGV2aWNlKCkpLFwibWFndXJvXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRTb3VuZEZyb21GaWxlKFwiYXVkaW8vRW5kaW5nLm1wM1wiLCBcInNhbXBsZVwiKTtcclxuICAgICAgICAgICAgICAgIGNhbG9yeVRleHR1cmUgPSBSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZVRleHR1cmUoJ2ltYWdlL2NhbG9yeS5wbmcnLCB0aGlzLnNjZW5lTWFuYWdlci5HZXRHcmFwaGljRGV2aWNlKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRUZXh0dXJlKGNhbG9yeVRleHR1cmUsIFwiY2Fsb3J5XCIpO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwgPSB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZE1hdGVyaWFsKFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlTWF0ZXJpYWwobmV3IFZlY3RvcjRfMS5kZWZhdWx0KDAuMSwgMC4xLCAwLjEsIDEuMCksIHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSwgW3RoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuR2V0VGV4dHVyZShcImNhbG9yeVwiKV0pLCBcImNhbG9yeU1hdGVyaWFsXCIpO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuQWRkRXhQYXJhbSg0LCAzLCBuZXcgVmVjdG9yM18xLmRlZmF1bHQoNSwgNSwgMTApKTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsID0gdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRNYXRlcmlhbChSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZU1hdGVyaWFsKG5ldyBWZWN0b3I0XzEuZGVmYXVsdCgwLjEsIDAuMSwgMC4xLCAxLjApLCB0aGlzLnNjZW5lTWFuYWdlci5HZXRHcmFwaGljRGV2aWNlKCkpLCBcIm5vblRleHR1cmVNYXRlcmlhbFwiKTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLkFkZEV4UGFyYW0oNCwgMywgbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDUsIDUsIDEwKSk7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbCA9IHRoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkTWF0ZXJpYWwoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVNYXRlcmlhbChuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMC4xLCAwLjEsIDAuMSwgMS4wKSwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJ6b29tRWZmZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmFnZXIuQWRkU2NlbmUobmV3IFNhbXBsZVNjZW5lXzEuZGVmYXVsdCh0aGlzLnNjZW5lTWFuYWdlciksIFwic2FtcGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMb2FkU2NlbmUucHJvdG90eXBlLk9uSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0N1cnJlbnQpXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyLkNoYW5nZVNjZW5lKFwic2FtcGxlXCIpO1xyXG4gICAgfTtcclxuICAgIExvYWRTY2VuZS5wcm90b3R5cGUuT25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjZW5lTWFuYWdlci5DaGFuZ2VTY2VuZShcInNhbXBsZVwiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTG9hZFNjZW5lO1xyXG59KFNjZW5lXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkU2NlbmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBCb3hfQUFCQiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJveF9BQUJCKGFyZ19sZW5ndGhlcywgYXJnX3Bvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5oYWxmTGVuZ3RoZXMgPSBhcmdfbGVuZ3RoZXMuTXVsdGlwbHlfYigwLjUpO1xyXG4gICAgICAgIGlmIChhcmdfcG9zaXRpb24pXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBhcmdfcG9zaXRpb247XHJcbiAgICB9XHJcbiAgICBCb3hfQUFCQi5wcm90b3R5cGUuTGVuZ3RoID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFsZkxlbmd0aGVzLmRhdGFbaW5kZXhdO1xyXG4gICAgfTtcclxuICAgIEJveF9BQUJCLnByb3RvdHlwZS5HZXRNaW4gPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHRoaXMucG9zaXRpb24uZGF0YVtpbmRleF0gLSB0aGlzLmhhbGZMZW5ndGhlcy5kYXRhW2luZGV4XTsgfTtcclxuICAgIEJveF9BQUJCLnByb3RvdHlwZS5HZXRNYXggPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHRoaXMucG9zaXRpb24uZGF0YVtpbmRleF0gKyB0aGlzLmhhbGZMZW5ndGhlcy5kYXRhW2luZGV4XTsgfTtcclxuICAgIHJldHVybiBCb3hfQUFCQjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQm94X0FBQkI7XHJcbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEJveF9PQkIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCb3hfT0JCKGFyZ19sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmhhbGZMZW5ndGhlcyA9IGFyZ19sZW5ndGguTXVsdGlwbHkoMC41KTtcclxuICAgICAgICB0aGlzLmRpcmVjdHMgPSBuZXcgQXJyYXkoMyk7XHJcbiAgICB9XHJcbiAgICBCb3hfT0JCLnByb3RvdHlwZS5HZXREaXJlY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3RzW2luZGV4XTtcclxuICAgIH07XHJcbiAgICBCb3hfT0JCLnByb3RvdHlwZS5MZW5ndGggPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYWxmTGVuZ3RoZXMuZGF0YVtpbmRleF07XHJcbiAgICB9O1xyXG4gICAgQm94X09CQi5wcm90b3R5cGUuR2V0UG9zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCb3hfT0JCO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBCb3hfT0JCO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVmVjdG9yM18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9WZWN0b3IzXCIpKTtcclxuZnVuY3Rpb24gYWJzKGFyZykge1xyXG4gICAgaWYgKGFyZyA8IDApIHtcclxuICAgICAgICByZXR1cm4gYXJnICogLTE7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYXJnO1xyXG4gICAgfVxyXG59XHJcbnZhciBHZW9tZXRyeUhlbHBlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdlb21ldHJ5SGVscGVyKCkge1xyXG4gICAgfVxyXG4gICAgR2VvbWV0cnlIZWxwZXIuR2V0RGlzdGFuY2UgPSBmdW5jdGlvbiAoYXJnX3BvaW50LCBhcmdfc3VyZmFjZVBvaW50LCBhcmdfc3VyZmFjZU5vcm1hbCkge1xyXG4gICAgICAgIHJldHVybiBhYnMoYXJnX3N1cmZhY2VOb3JtYWwuRG90KGFyZ19wb2ludC5TdWIoYXJnX3N1cmZhY2VQb2ludCkpKSAvIGFyZ19zdXJmYWNlTm9ybWFsLkxlbmd0aCgpO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLkdldERpc3RhbmNlTGluZUxpbmUgPSBmdW5jdGlvbiAoYXJnX2xpbmUsIGFyZ19vdGhlckxpbmUpIHtcclxuICAgICAgICB2YXIgbm9ybWFsID0gYXJnX2xpbmUudmVsb2NpdHkuQ3Jvc3MoYXJnX290aGVyTGluZS52ZWxvY2l0eSkuTm9ybWFsaXplKCk7XHJcbiAgICAgICAgcmV0dXJuIG5vcm1hbC5Eb3QoYXJnX290aGVyTGluZS5wb2ludC5TdWIoYXJnX2xpbmUucG9pbnQpKTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5Jc0hpdFBvaW50TGluZSA9IGZ1bmN0aW9uIChhcmdfcG9pbnQsIGFyZ19saW5lKSB7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IChhcmdfcG9pbnQuU3ViKGFyZ19saW5lLnBvaW50KS5Dcm9zcyhhcmdfbGluZS52ZWxvY2l0eSkpLkxlbmd0aCgpO1xyXG4gICAgICAgIGlmIChsZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLklzSGl0UG9pbnRTZWdtZW50ID0gZnVuY3Rpb24gKGFyZ19wb2ludCwgYXJnX3NlZ21lbnQpIHtcclxuICAgICAgICB2YXIgdiA9IGFyZ19wb2ludC5TdWIoYXJnX3NlZ21lbnQucG9pbnQpO1xyXG4gICAgICAgIGlmICh2LkNyb3NzKGFyZ19zZWdtZW50LnZlbG9jaXR5KS5MZW5ndGgoKSAmJiB2Lkxlbmd0aFNxcigpIDw9IGFyZ19zZWdtZW50LnZlbG9jaXR5Lkxlbmd0aFNxcigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5HZXREaXN0YW5jZVBvaW50U2VnbWVudCA9IGZ1bmN0aW9uIChhcmdfcG9pbnQsIGFyZ19zZWdtZW50KSB7XHJcbiAgICAgICAgdmFyIHYgPSBhcmdfc2VnbWVudC5HZXRFbmRQb2ludCgpLlN1Yihhcmdfc2VnbWVudC5wb2ludCk7XHJcbiAgICAgICAgdmFyIHZwID0gYXJnX3BvaW50LlN1Yihhcmdfc2VnbWVudC5wb2ludCk7XHJcbiAgICAgICAgdmFyIHQgPSB2Lk5vcm1hbGl6ZSgpLkRvdCh2cCkgLyB2Lkxlbmd0aCgpO1xyXG4gICAgICAgIGlmICh0ID4gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJnX3NlZ21lbnQuR2V0RW5kUG9pbnQoKS5TdWIoYXJnX3BvaW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodCA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFyZ19zZWdtZW50LnBvaW50LlN1YihhcmdfcG9pbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdi5NdWx0aXBseV9iKHQpLlN1Yl9iKHZwKTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5HZXRQb2x5Z29uWSA9IGZ1bmN0aW9uIChhcmdfcG9pbnRBLCBhcmdfcG9pbnRCLCBhcmdfcG9pbnRDLCBvYmpYLCBvYmpaKSB7XHJcbiAgICAgICAgdmFyIG5vcm1hbCA9IGFyZ19wb2ludEEuU3ViKGFyZ19wb2ludEIpLkNyb3NzKGFyZ19wb2ludEEuU3ViKGFyZ19wb2ludEMpKTtcclxuICAgICAgICBpZiAobm9ybWFsLnkgPCAwKSB7XHJcbiAgICAgICAgICAgIG5vcm1hbC5NdWx0aXBseSgtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcmdfcG9pbnRBLnkgLSAobm9ybWFsLnggKiAob2JqWCAtIGFyZ19wb2ludEEueCkgKyBub3JtYWwueiAqIChvYmpaIC0gYXJnX3BvaW50QS56KSkgLyBub3JtYWwueTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5Jc0hpdExpbmVMaW5lID0gZnVuY3Rpb24gKGFyZ19saW5ldjEsIGFyZ19saW5ldjIpIHtcclxuICAgICAgICB2YXIgdjMgPSBhcmdfbGluZXYyLnBvaW50LlN1YihhcmdfbGluZXYxLnBvaW50KTtcclxuICAgICAgICB2YXIgbm9ybWFsMSA9IGFyZ19saW5ldjEudmVsb2NpdHkuQ3Jvc3MoYXJnX2xpbmV2Mi52ZWxvY2l0eSk7XHJcbiAgICAgICAgdmFyIG5vcm1hbDIgPSBhcmdfbGluZXYxLnZlbG9jaXR5LkNyb3NzKHYzKTtcclxuICAgICAgICBpZiAoIW5vcm1hbDIuTGVuZ3RoU3FyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub3JtYWwxLkxlbmd0aFNxcigpICE9IDAgJiYgbm9ybWFsMS5Dcm9zcyhub3JtYWwyKS5MZW5ndGhTcXIoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuSXNIaXRMaW5lU3VyZmFjZSA9IGZ1bmN0aW9uIChhcmdfbGluZSwgYXJnX3N1cmZhY2VQb2ludCwgYXJnX3N1cmZhY2VOb3JtYWwpIHtcclxuICAgICAgICB2YXIgdjEgPSBhcmdfbGluZS5wb2ludC5TdWIoYXJnX3N1cmZhY2VQb2ludCk7XHJcbiAgICAgICAgaWYgKHYxLkRvdChhcmdfc3VyZmFjZU5vcm1hbCkgPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZ19saW5lLnZlbG9jaXR5LkRvdChhcmdfc3VyZmFjZU5vcm1hbCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5Jc0hpdFNlZ21lbnRTdXJmYWNlID0gZnVuY3Rpb24gKGFyZ19zZWdtZW50LCBhcmdfc3VyZmFjZVBvaW50LCBhcmdfc3VyZmFjZU5vcm1hbCkge1xyXG4gICAgICAgIHZhciB2MSA9IGFyZ19zZWdtZW50LnBvaW50LlN1Yihhcmdfc3VyZmFjZVBvaW50KTtcclxuICAgICAgICB2YXIgdjIgPSBhcmdfc2VnbWVudC5HZXRFbmRQb2ludCgpLlN1Yihhcmdfc3VyZmFjZVBvaW50KTtcclxuICAgICAgICBpZiAoYXJnX3N1cmZhY2VOb3JtYWwuRG90KHYxKSAqIGFyZ19zdXJmYWNlTm9ybWFsLkRvdCh2MikgPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLkdldERpdGFuY2VQb2ludEJveF9BQUJCU3FydCA9IGZ1bmN0aW9uIChhcmdfcG9pbnQsIGFyZ19ib3gpIHtcclxuICAgICAgICB2YXIgU3FMZW4gPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhcmdfcG9pbnQuZGF0YVtpXSA8IGFyZ19ib3guR2V0TWluKGkpKVxyXG4gICAgICAgICAgICAgICAgU3FMZW4gKz0gKGFyZ19wb2ludC5kYXRhW2ldIC0gYXJnX2JveC5HZXRNaW4oaSkpICogKGFyZ19wb2ludC5kYXRhW2ldIC0gYXJnX2JveC5HZXRNaW4oaSkpO1xyXG4gICAgICAgICAgICBpZiAoYXJnX3BvaW50LmRhdGFbaV0gPiBhcmdfYm94LkdldE1heChpKSlcclxuICAgICAgICAgICAgICAgIFNxTGVuICs9IChhcmdfcG9pbnQuZGF0YVtpXSAtIGFyZ19ib3guR2V0TWF4KGkpKSAqIChhcmdfcG9pbnQuZGF0YVtpXSAtIGFyZ19ib3guR2V0TWF4KGkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNxTGVuO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLkdldERpdGFuY2VQb2ludEJveF9BQUJCID0gZnVuY3Rpb24gKGFyZ19wb2ludCwgYXJnX2JveCkge1xyXG4gICAgICAgIHJldHVybiAoR2VvbWV0cnlIZWxwZXIuR2V0RGl0YW5jZVBvaW50Qm94X0FBQkJTcXJ0KGFyZ19wb2ludCwgYXJnX2JveCkpO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLkdldERpdGFuY2VQb2ludEJveF9PQkJfU3RhdGljID0gZnVuY3Rpb24gKGFyZ19wb2ludCwgYXJnX2JveCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgMCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIEwgPSBhcmdfYm94Lkxlbmd0aChpKTtcclxuICAgICAgICAgICAgaWYgKEwgPD0gMClcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB2YXIgcyA9IChhcmdfcG9pbnQuU3ViKGFyZ19ib3guR2V0UG9zKCkpKS5Eb3QoYXJnX2JveC5HZXREaXJlY3QoaSkpIC8gTDtcclxuICAgICAgICAgICAgLy8gc+OBruWApOOBi+OCieOAgeOBr+OBv+WHuuOBl+OBn+mDqOWIhuOBjOOBguOCjOOBsOOBneOBruODmeOCr+ODiOODq+OCkuWKoOeul1xyXG4gICAgICAgICAgICBzID0gYWJzKHMpO1xyXG4gICAgICAgICAgICBpZiAocyA+IDEpXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuQWRkX2IoYXJnX2JveC5HZXREaXJlY3QoaSkuTXVsdGlwbHkoKDEgLSBzKSkuTXVsdGlwbHkoTCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb3V0cHV0TGVuID0gb3V0cHV0Lkxlbmd0aCgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cob3V0cHV0TGVuKTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0TGVuO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLklzSGl0UG9pbnRCb3hfT0JCID0gZnVuY3Rpb24gKGFyZ19wb2ludCwgYXJnX2JveCkge1xyXG4gICAgICAgIHJldHVybiAhR2VvbWV0cnlIZWxwZXIuR2V0RGl0YW5jZVBvaW50Qm94X09CQl9TdGF0aWMoYXJnX3BvaW50LCBhcmdfYm94KTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5Jc0hpdFNwaGVyZUJveF9PQkIgPSBmdW5jdGlvbiAoYXJnX3NwaGVyZSwgYXJnX2JveCkge1xyXG4gICAgICAgIHJldHVybiAoYXJnX3NwaGVyZS5yYWRpdXMpID49IEdlb21ldHJ5SGVscGVyLkdldERpdGFuY2VQb2ludEJveF9PQkJfU3RhdGljKGFyZ19zcGhlcmUucG9zaXRpb24sIGFyZ19ib3gpO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLklzSGl0UG9pbnRCb3hfQUFCQiA9IGZ1bmN0aW9uIChhcmdfcG9pbnQsIGFyZ19ib3gpIHtcclxuICAgICAgICByZXR1cm4gIUdlb21ldHJ5SGVscGVyLkdldERpdGFuY2VQb2ludEJveF9BQUJCKGFyZ19wb2ludCwgYXJnX2JveCk7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuSXNIaXRTcGhlcmVCb3hfQUFCQiA9IGZ1bmN0aW9uIChhcmdfc3BoZXJlLCBhcmdfYm94KSB7XHJcbiAgICAgICAgcmV0dXJuIChhcmdfc3BoZXJlLnJhZGl1cykgPj0gR2VvbWV0cnlIZWxwZXIuR2V0RGl0YW5jZVBvaW50Qm94X0FBQkIoYXJnX3NwaGVyZS5wb3NpdGlvbiwgYXJnX2JveCk7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyA9IGZ1bmN0aW9uIChhcmdfc2VwLCBhcmdfZTEsIGFyZ19lMiwgYXJnX2UzKSB7XHJcbiAgICAgICAgaWYgKGFyZ19lMyA9PT0gdm9pZCAwKSB7IGFyZ19lMyA9IG51bGw7IH1cclxuICAgICAgICB2YXIgcjEgPSBhYnMoYXJnX3NlcC5Eb3QoYXJnX2UxKSk7XHJcbiAgICAgICAgdmFyIHIyID0gYWJzKGFyZ19zZXAuRG90KGFyZ19lMikpO1xyXG4gICAgICAgIHZhciByMyA9IGFyZ19lMyA/IChhYnMoYXJnX3NlcC5Eb3QoYXJnX2UzKSkpIDogMDtcclxuICAgICAgICByZXR1cm4gcjEgKyByMiArIHIzO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLklzSGl0Qm94X0FBQkIgPSBmdW5jdGlvbiAoYXJnX2JveCwgYXJnX290aGVyQm94KSB7XHJcbiAgICAgICAgdmFyIHhBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDEsIDAsIDApLCBBZTEgPSB4QXhpcy5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgwKSk7XHJcbiAgICAgICAgdmFyIHlBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDEsIDApLCBBZTIgPSB5QXhpcy5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgxKSk7XHJcbiAgICAgICAgdmFyIHpBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDEpLCBBZTMgPSB6QXhpcy5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgyKSk7XHJcbiAgICAgICAgdmFyIEJlMSA9IHhBeGlzLk11bHRpcGx5KGFyZ19vdGhlckJveC5MZW5ndGgoMCkpO1xyXG4gICAgICAgIHZhciBCZTIgPSB5QXhpcy5NdWx0aXBseShhcmdfb3RoZXJCb3guTGVuZ3RoKDEpKTtcclxuICAgICAgICB2YXIgQmUzID0gekF4aXMuTXVsdGlwbHkoYXJnX290aGVyQm94Lkxlbmd0aCgyKSk7XHJcbiAgICAgICAgdmFyIEludGVydmFsID0gYXJnX2JveC5wb3NpdGlvbi5TdWIoYXJnX290aGVyQm94LnBvc2l0aW9uKTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBBZTFcclxuICAgICAgICB2YXIgckEgPSBBZTEuTGVuZ3RoKCk7XHJcbiAgICAgICAgdmFyIHJCID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh4QXhpcywgQmUxLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgdmFyIEwgPSBhYnMoSW50ZXJ2YWwuRG90KHhBeGlzKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIOihneeqgeOBl+OBpuOBhOOBquOBhFxyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEFlMlxyXG4gICAgICAgIHJBID0gQWUyLkxlbmd0aCgpO1xyXG4gICAgICAgIHJCID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh5QXhpcywgQmUxLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoeUF4aXMpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBBZTNcclxuICAgICAgICByQSA9IEFlMy5MZW5ndGgoKTtcclxuICAgICAgICByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoekF4aXMsIEJlMSwgQmUyLCBCZTMpO1xyXG4gICAgICAgIEwgPSBhYnMoSW50ZXJ2YWwuRG90KHpBeGlzKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8g5YiG6Zui6Lu4IDogQmUxXHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKHhBeGlzLCBBZTEsIEFlMiwgQWUzKTtcclxuICAgICAgICByQiA9IEJlMS5MZW5ndGgoKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdCh4QXhpcykpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEJlMlxyXG4gICAgICAgIHJBID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh5QXhpcywgQWUxLCBBZTIsIEFlMyk7XHJcbiAgICAgICAgckIgPSBCZTIuTGVuZ3RoKCk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoeUF4aXMpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBCZTNcclxuICAgICAgICByQSA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoekF4aXMsIEFlMSwgQWUyLCBBZTMpO1xyXG4gICAgICAgIHJCID0gQmUzLkxlbmd0aCgpO1xyXG4gICAgICAgIEwgPSBhYnMoSW50ZXJ2YWwuRG90KHpBeGlzKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuSXNIaXRCb3hfT0JCQm94X0FBQkIgPSBmdW5jdGlvbiAoYXJnX2JveCwgYXJnX290aGVyQm94KSB7XHJcbiAgICAgICAgdmFyIHhBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDEsIDAsIDApLCBBZTEgPSB4QXhpcy5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgwKSk7XHJcbiAgICAgICAgdmFyIHlBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDEsIDApLCBBZTIgPSB5QXhpcy5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgxKSk7XHJcbiAgICAgICAgdmFyIHpBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDEpLCBBZTMgPSB6QXhpcy5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgyKSk7XHJcbiAgICAgICAgdmFyIE5CZTEgPSBhcmdfb3RoZXJCb3guR2V0RGlyZWN0KDApLCBCZTEgPSBOQmUxLk11bHRpcGx5KGFyZ19vdGhlckJveC5MZW5ndGgoMCkpO1xyXG4gICAgICAgIHZhciBOQmUyID0gYXJnX290aGVyQm94LkdldERpcmVjdCgxKSwgQmUyID0gTkJlMi5NdWx0aXBseShhcmdfb3RoZXJCb3guTGVuZ3RoKDEpKTtcclxuICAgICAgICB2YXIgTkJlMyA9IGFyZ19vdGhlckJveC5HZXREaXJlY3QoMiksIEJlMyA9IE5CZTMuTXVsdGlwbHkoYXJnX290aGVyQm94Lkxlbmd0aCgyKSk7XHJcbiAgICAgICAgdmFyIEludGVydmFsID0gYXJnX2JveC5wb3NpdGlvbi5TdWIoYXJnX290aGVyQm94LkdldFBvcygpKTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBBZTFcclxuICAgICAgICB2YXIgckEgPSBBZTEuTGVuZ3RoKCk7XHJcbiAgICAgICAgdmFyIHJCID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh4QXhpcywgQmUxLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgdmFyIEwgPSBhYnMoSW50ZXJ2YWwuRG90KHhBeGlzKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIOihneeqgeOBl+OBpuOBhOOBquOBhFxyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEFlMlxyXG4gICAgICAgIHJBID0gQWUyLkxlbmd0aCgpO1xyXG4gICAgICAgIHJCID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh5QXhpcywgQmUxLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoeUF4aXMpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBBZTNcclxuICAgICAgICByQSA9IEFlMy5MZW5ndGgoKTtcclxuICAgICAgICByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoekF4aXMsIEJlMSwgQmUyLCBCZTMpO1xyXG4gICAgICAgIEwgPSBhYnMoSW50ZXJ2YWwuRG90KHpBeGlzKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8g5YiG6Zui6Lu4IDogQmUxXHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKE5CZTEsIEFlMSwgQWUyLCBBZTMpO1xyXG4gICAgICAgIHJCID0gQmUxLkxlbmd0aCgpO1xyXG4gICAgICAgIEwgPSBhYnMoSW50ZXJ2YWwuRG90KE5CZTEpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBCZTJcclxuICAgICAgICByQSA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoTkJlMiwgQWUxLCBBZTIsIEFlMyk7XHJcbiAgICAgICAgckIgPSBCZTIuTGVuZ3RoKCk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoTkJlMikpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEJlM1xyXG4gICAgICAgIHJBID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyhOQmUzLCBBZTEsIEFlMiwgQWUzKTtcclxuICAgICAgICByQiA9IEJlMy5MZW5ndGgoKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdChOQmUzKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuR2V0Qm94X09CQkNvbnRhaW5BQUJCTGVuZ3RoID0gZnVuY3Rpb24gKGFyZ19ib3gpIHtcclxuICAgICAgICB2YXIgeEF4aXMgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMSwgMCwgMCk7XHJcbiAgICAgICAgdmFyIHlBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDEsIDApO1xyXG4gICAgICAgIHZhciB6QXhpcyA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAxKTtcclxuICAgICAgICB2YXIgQmUxID0gYXJnX2JveC5HZXREaXJlY3QoMCkuTXVsdGlwbHkoYXJnX2JveC5MZW5ndGgoMCkpO1xyXG4gICAgICAgIHZhciBCZTIgPSBhcmdfYm94LkdldERpcmVjdCgxKS5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgxKSk7XHJcbiAgICAgICAgdmFyIEJlMyA9IGFyZ19ib3guR2V0RGlyZWN0KDIpLk11bHRpcGx5KGFyZ19ib3guTGVuZ3RoKDIpKTtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoeEF4aXMsIEJlMSwgQmUyLCBCZTMpLCBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKHlBeGlzLCBCZTEsIEJlMiwgQmUzKSwgR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh6QXhpcywgQmUxLCBCZTIsIEJlMykpO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLklzSGl0Qm94X09CQiA9IGZ1bmN0aW9uIChhcmdfYm94LCBhcmdfb3RoZXJCb3gpIHtcclxuICAgICAgICAvLyDlkITmlrnlkJHjg5njgq/jg4jjg6vjga7norrkv51cclxuICAgICAgICAvLyDvvIhOKioqOuaomea6luWMluaWueWQkeODmeOCr+ODiOODq++8iVxyXG4gICAgICAgIHZhciBOQWUxID0gYXJnX2JveC5HZXREaXJlY3QoMCksIEFlMSA9IE5BZTEuTXVsdGlwbHkoYXJnX2JveC5MZW5ndGgoMCkpO1xyXG4gICAgICAgIHZhciBOQWUyID0gYXJnX2JveC5HZXREaXJlY3QoMSksIEFlMiA9IE5BZTIuTXVsdGlwbHkoYXJnX2JveC5MZW5ndGgoMSkpO1xyXG4gICAgICAgIHZhciBOQWUzID0gYXJnX2JveC5HZXREaXJlY3QoMiksIEFlMyA9IE5BZTMuTXVsdGlwbHkoYXJnX2JveC5MZW5ndGgoMikpO1xyXG4gICAgICAgIHZhciBOQmUxID0gYXJnX290aGVyQm94LkdldERpcmVjdCgwKSwgQmUxID0gTkJlMS5NdWx0aXBseShhcmdfb3RoZXJCb3guTGVuZ3RoKDApKTtcclxuICAgICAgICB2YXIgTkJlMiA9IGFyZ19vdGhlckJveC5HZXREaXJlY3QoMSksIEJlMiA9IE5CZTIuTXVsdGlwbHkoYXJnX290aGVyQm94Lkxlbmd0aCgxKSk7XHJcbiAgICAgICAgdmFyIE5CZTMgPSBhcmdfb3RoZXJCb3guR2V0RGlyZWN0KDIpLCBCZTMgPSBOQmUzLk11bHRpcGx5KGFyZ19vdGhlckJveC5MZW5ndGgoMikpO1xyXG4gICAgICAgIHZhciBJbnRlcnZhbCA9IGFyZ19ib3guR2V0UG9zKCkuU3ViKGFyZ19vdGhlckJveC5HZXRQb3MoKSk7XHJcbiAgICAgICAgLy8g5YiG6Zui6Lu4IDogQWUxXHJcbiAgICAgICAgdmFyIHJBID0gQWUxLkxlbmd0aCgpO1xyXG4gICAgICAgIHZhciByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoTkFlMSwgQmUxLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgdmFyIEwgPSBhYnMoSW50ZXJ2YWwuRG90KE5BZTEpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8g6KGd56qB44GX44Gm44GE44Gq44GEXHJcbiAgICAgICAgLy8g5YiG6Zui6Lu4IDogQWUyXHJcbiAgICAgICAgckEgPSBBZTIuTGVuZ3RoKCk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKE5BZTIsIEJlMSwgQmUyLCBCZTMpO1xyXG4gICAgICAgIEwgPSBhYnMoSW50ZXJ2YWwuRG90KE5BZTIpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBBZTNcclxuICAgICAgICByQSA9IEFlMy5MZW5ndGgoKTtcclxuICAgICAgICByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoTkFlMywgQmUxLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoTkFlMykpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEJlMVxyXG4gICAgICAgIHJBID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyhOQmUxLCBBZTEsIEFlMiwgQWUzKTtcclxuICAgICAgICByQiA9IEJlMS5MZW5ndGgoKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdChOQmUxKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8g5YiG6Zui6Lu4IDogQmUyXHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKE5CZTIsIEFlMSwgQWUyLCBBZTMpO1xyXG4gICAgICAgIHJCID0gQmUyLkxlbmd0aCgpO1xyXG4gICAgICAgIEwgPSBhYnMoSW50ZXJ2YWwuRG90KE5CZTIpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBCZTNcclxuICAgICAgICByQSA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoTkJlMywgQWUxLCBBZTIsIEFlMyk7XHJcbiAgICAgICAgckIgPSBCZTMuTGVuZ3RoKCk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoTkJlMykpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEMxMVxyXG4gICAgICAgIHZhciBDcm9zcyA9IE5BZTEuQ3Jvc3MoTkJlMSk7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTIsIEFlMyk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMTJcclxuICAgICAgICBDcm9zcyA9IE5BZTEuQ3Jvc3MoTkJlMik7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTIsIEFlMyk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTEsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMTNcclxuICAgICAgICBDcm9zcyA9IE5BZTEuQ3Jvc3MoTkJlMyk7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTIsIEFlMyk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTEsIEJlMik7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMjFcclxuICAgICAgICBDcm9zcyA9IE5BZTIuQ3Jvc3MoTkJlMSk7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTEsIEFlMyk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMjJcclxuICAgICAgICBDcm9zcyA9IE5BZTIuQ3Jvc3MoTkJlMik7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTEsIEFlMyk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTEsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMjNcclxuICAgICAgICBDcm9zcyA9IE5BZTIuQ3Jvc3MoTkJlMyk7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTEsIEFlMyk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTEsIEJlMik7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMzFcclxuICAgICAgICBDcm9zcyA9IE5BZTMuQ3Jvc3MoTkJlMSk7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTEsIEFlMik7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMzJcclxuICAgICAgICBDcm9zcyA9IE5BZTMuQ3Jvc3MoTkJlMik7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTEsIEFlMik7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTEsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMzNcclxuICAgICAgICBDcm9zcyA9IE5BZTMuQ3Jvc3MoTkJlMyk7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTEsIEFlMik7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTEsIEJlMik7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5Jc0hpdFNwaGVyZVNwaGVyZSA9IGZ1bmN0aW9uIChhcmdfc3BoZXJlLCBhcmdfb3RoZXJTcGhlcmUpIHtcclxuICAgICAgICB2YXIgZGlzdGFuY2UgPSAoYXJnX3NwaGVyZS5wb3NpdGlvbi5TdWIoYXJnX290aGVyU3BoZXJlLnBvc2l0aW9uKSkuTGVuZ3RoKCk7XHJcbiAgICAgICAgdmFyIGJvcmRlciA9IGFyZ19zcGhlcmUucmFkaXVzICsgYXJnX290aGVyU3BoZXJlLnJhZGl1cztcclxuICAgICAgICByZXR1cm4gZGlzdGFuY2UgPD0gYm9yZGVyO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLklzSGl0UG9pbnRTcGhlcmUgPSBmdW5jdGlvbiAoYXJnX3BvaW50LCBhcmdfb3RoZXJTcGhlcmUpIHtcclxuICAgICAgICB2YXIgZGlzdGFuY2UgPSAoYXJnX3BvaW50LlN1Yihhcmdfb3RoZXJTcGhlcmUucG9zaXRpb24pKS5MZW5ndGgoKTtcclxuICAgICAgICByZXR1cm4gZGlzdGFuY2UgPD0gYXJnX290aGVyU3BoZXJlLnJhZGl1cztcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2VvbWV0cnlIZWxwZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEdlb21ldHJ5SGVscGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgU3BoZXJlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3BoZXJlKGFyZ19yLCBhcmdfcCkge1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gYXJnX3I7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IGFyZ19wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFNwaGVyZTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU3BoZXJlO1xyXG47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBNYXRyaXg0eDQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYXRyaXg0eDQoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEZsb2F0MzJBcnJheSgxNik7XHJcbiAgICB9XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLklkZW50aXR5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IDE7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzRdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSAxO1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzddID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEwXSA9IDE7XHJcbiAgICAgICAgdGhpcy5kYXRhWzExXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEyXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEzXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzE0XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzE1XSA9IDE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NHg0LnByb3RvdHlwZS5DbG9uZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IE1hdHJpeDR4NCgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7IGkrKykge1xyXG4gICAgICAgICAgICBvdXRwdXQuZGF0YVtpXSA9IHRoaXMuZGF0YVtpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLk11bHRpcGx5ID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBNYXRyaXg0eDQoKTtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuZGF0YVswXSwgYiA9IHRoaXMuZGF0YVsxXSwgYyA9IHRoaXMuZGF0YVsyXSwgZCA9IHRoaXMuZGF0YVszXSwgZSA9IHRoaXMuZGF0YVs0XSwgZiA9IHRoaXMuZGF0YVs1XSwgZyA9IHRoaXMuZGF0YVs2XSwgaCA9IHRoaXMuZGF0YVs3XSwgaSA9IHRoaXMuZGF0YVs4XSwgaiA9IHRoaXMuZGF0YVs5XSwgayA9IHRoaXMuZGF0YVsxMF0sIGwgPSB0aGlzLmRhdGFbMTFdLCBtID0gdGhpcy5kYXRhWzEyXSwgbiA9IHRoaXMuZGF0YVsxM10sIG8gPSB0aGlzLmRhdGFbMTRdLCBwID0gdGhpcy5kYXRhWzE1XSwgQSA9IG90aGVyLmRhdGFbMF0sIEIgPSBvdGhlci5kYXRhWzFdLCBDID0gb3RoZXIuZGF0YVsyXSwgRCA9IG90aGVyLmRhdGFbM10sIEUgPSBvdGhlci5kYXRhWzRdLCBGID0gb3RoZXIuZGF0YVs1XSwgRyA9IG90aGVyLmRhdGFbNl0sIEggPSBvdGhlci5kYXRhWzddLCBJID0gb3RoZXIuZGF0YVs4XSwgSiA9IG90aGVyLmRhdGFbOV0sIEsgPSBvdGhlci5kYXRhWzEwXSwgTCA9IG90aGVyLmRhdGFbMTFdLCBNID0gb3RoZXIuZGF0YVsxMl0sIE4gPSBvdGhlci5kYXRhWzEzXSwgTyA9IG90aGVyLmRhdGFbMTRdLCBQID0gb3RoZXIuZGF0YVsxNV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSBBICogYSArIEIgKiBlICsgQyAqIGkgKyBEICogbTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IEEgKiBiICsgQiAqIGYgKyBDICogaiArIEQgKiBuO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gQSAqIGMgKyBCICogZyArIEMgKiBrICsgRCAqIG87XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSBBICogZCArIEIgKiBoICsgQyAqIGwgKyBEICogcDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs0XSA9IEUgKiBhICsgRiAqIGUgKyBHICogaSArIEggKiBtO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzVdID0gRSAqIGIgKyBGICogZiArIEcgKiBqICsgSCAqIG47XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNl0gPSBFICogYyArIEYgKiBnICsgRyAqIGsgKyBIICogbztcclxuICAgICAgICBvdXRwdXQuZGF0YVs3XSA9IEUgKiBkICsgRiAqIGggKyBHICogbCArIEggKiBwO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzhdID0gSSAqIGEgKyBKICogZSArIEsgKiBpICsgTCAqIG07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbOV0gPSBJICogYiArIEogKiBmICsgSyAqIGogKyBMICogbjtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMF0gPSBJICogYyArIEogKiBnICsgSyAqIGsgKyBMICogbztcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMV0gPSBJICogZCArIEogKiBoICsgSyAqIGwgKyBMICogcDtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMl0gPSBNICogYSArIE4gKiBlICsgTyAqIGkgKyBQICogbTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxM10gPSBNICogYiArIE4gKiBmICsgTyAqIGogKyBQICogbjtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxNF0gPSBNICogYyArIE4gKiBnICsgTyAqIGsgKyBQICogbztcclxuICAgICAgICBvdXRwdXQuZGF0YVsxNV0gPSBNICogZCArIE4gKiBoICsgTyAqIGwgKyBQICogcDtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuTXVsdGlwbHlfYiA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5kYXRhWzBdLCBiID0gdGhpcy5kYXRhWzFdLCBjID0gdGhpcy5kYXRhWzJdLCBkID0gdGhpcy5kYXRhWzNdLCBlID0gdGhpcy5kYXRhWzRdLCBmID0gdGhpcy5kYXRhWzVdLCBnID0gdGhpcy5kYXRhWzZdLCBoID0gdGhpcy5kYXRhWzddLCBpID0gdGhpcy5kYXRhWzhdLCBqID0gdGhpcy5kYXRhWzldLCBrID0gdGhpcy5kYXRhWzEwXSwgbCA9IHRoaXMuZGF0YVsxMV0sIG0gPSB0aGlzLmRhdGFbMTJdLCBuID0gdGhpcy5kYXRhWzEzXSwgbyA9IHRoaXMuZGF0YVsxNF0sIHAgPSB0aGlzLmRhdGFbMTVdLCBBID0gb3RoZXIuZGF0YVswXSwgQiA9IG90aGVyLmRhdGFbMV0sIEMgPSBvdGhlci5kYXRhWzJdLCBEID0gb3RoZXIuZGF0YVszXSwgRSA9IG90aGVyLmRhdGFbNF0sIEYgPSBvdGhlci5kYXRhWzVdLCBHID0gb3RoZXIuZGF0YVs2XSwgSCA9IG90aGVyLmRhdGFbN10sIEkgPSBvdGhlci5kYXRhWzhdLCBKID0gb3RoZXIuZGF0YVs5XSwgSyA9IG90aGVyLmRhdGFbMTBdLCBMID0gb3RoZXIuZGF0YVsxMV0sIE0gPSBvdGhlci5kYXRhWzEyXSwgTiA9IG90aGVyLmRhdGFbMTNdLCBPID0gb3RoZXIuZGF0YVsxNF0sIFAgPSBvdGhlci5kYXRhWzE1XTtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSBBICogYSArIEIgKiBlICsgQyAqIGkgKyBEICogbTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSBBICogYiArIEIgKiBmICsgQyAqIGogKyBEICogbjtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBBICogYyArIEIgKiBnICsgQyAqIGsgKyBEICogbztcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSBBICogZCArIEIgKiBoICsgQyAqIGwgKyBEICogcDtcclxuICAgICAgICB0aGlzLmRhdGFbNF0gPSBFICogYSArIEYgKiBlICsgRyAqIGkgKyBIICogbTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBFICogYiArIEYgKiBmICsgRyAqIGogKyBIICogbjtcclxuICAgICAgICB0aGlzLmRhdGFbNl0gPSBFICogYyArIEYgKiBnICsgRyAqIGsgKyBIICogbztcclxuICAgICAgICB0aGlzLmRhdGFbN10gPSBFICogZCArIEYgKiBoICsgRyAqIGwgKyBIICogcDtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBJICogYSArIEogKiBlICsgSyAqIGkgKyBMICogbTtcclxuICAgICAgICB0aGlzLmRhdGFbOV0gPSBJICogYiArIEogKiBmICsgSyAqIGogKyBMICogbjtcclxuICAgICAgICB0aGlzLmRhdGFbMTBdID0gSSAqIGMgKyBKICogZyArIEsgKiBrICsgTCAqIG87XHJcbiAgICAgICAgdGhpcy5kYXRhWzExXSA9IEkgKiBkICsgSiAqIGggKyBLICogbCArIEwgKiBwO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMl0gPSBNICogYSArIE4gKiBlICsgTyAqIGkgKyBQICogbTtcclxuICAgICAgICB0aGlzLmRhdGFbMTNdID0gTSAqIGIgKyBOICogZiArIE8gKiBqICsgUCAqIG47XHJcbiAgICAgICAgdGhpcy5kYXRhWzE0XSA9IE0gKiBjICsgTiAqIGcgKyBPICogayArIFAgKiBvO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxNV0gPSBNICogZCArIE4gKiBoICsgTyAqIGwgKyBQICogcDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLlNjYWxlID0gZnVuY3Rpb24gKGFyZ19zY2FsZSkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgTWF0cml4NHg0KCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKiBhcmdfc2NhbGUueDtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAqIGFyZ19zY2FsZS54O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gdGhpcy5kYXRhWzJdICogYXJnX3NjYWxlLng7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSB0aGlzLmRhdGFbM10gKiBhcmdfc2NhbGUueDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs0XSA9IHRoaXMuZGF0YVs0XSAqIGFyZ19zY2FsZS55O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzVdID0gdGhpcy5kYXRhWzVdICogYXJnX3NjYWxlLnk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNl0gPSB0aGlzLmRhdGFbNl0gKiBhcmdfc2NhbGUueTtcclxuICAgICAgICBvdXRwdXQuZGF0YVs3XSA9IHRoaXMuZGF0YVs3XSAqIGFyZ19zY2FsZS55O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzhdID0gdGhpcy5kYXRhWzhdICogYXJnX3NjYWxlLno7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbOV0gPSB0aGlzLmRhdGFbOV0gKiBhcmdfc2NhbGUuejtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMF0gPSB0aGlzLmRhdGFbMTBdICogYXJnX3NjYWxlLno7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTFdID0gdGhpcy5kYXRhWzExXSAqIGFyZ19zY2FsZS56O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEyXSA9IHRoaXMuZGF0YVsxMl07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTNdID0gdGhpcy5kYXRhWzEzXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxNF0gPSB0aGlzLmRhdGFbMTRdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzE1XSA9IHRoaXMuZGF0YVsxNV07XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLlNjYWxlX2IgPSBmdW5jdGlvbiAoYXJnX3NjYWxlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gdGhpcy5kYXRhWzBdICogYXJnX3NjYWxlLng7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gdGhpcy5kYXRhWzFdICogYXJnX3NjYWxlLng7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gdGhpcy5kYXRhWzJdICogYXJnX3NjYWxlLng7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gdGhpcy5kYXRhWzNdICogYXJnX3NjYWxlLng7XHJcbiAgICAgICAgdGhpcy5kYXRhWzRdID0gdGhpcy5kYXRhWzRdICogYXJnX3NjYWxlLnk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzVdID0gdGhpcy5kYXRhWzVdICogYXJnX3NjYWxlLnk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gdGhpcy5kYXRhWzZdICogYXJnX3NjYWxlLnk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzddID0gdGhpcy5kYXRhWzddICogYXJnX3NjYWxlLnk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzhdID0gdGhpcy5kYXRhWzhdICogYXJnX3NjYWxlLno7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gdGhpcy5kYXRhWzldICogYXJnX3NjYWxlLno7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEwXSA9IHRoaXMuZGF0YVsxMF0gKiBhcmdfc2NhbGUuejtcclxuICAgICAgICB0aGlzLmRhdGFbMTFdID0gdGhpcy5kYXRhWzExXSAqIGFyZ19zY2FsZS56O1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMl0gPSB0aGlzLmRhdGFbMTJdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxM10gPSB0aGlzLmRhdGFbMTNdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxNF0gPSB0aGlzLmRhdGFbMTRdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxNV0gPSB0aGlzLmRhdGFbMTVdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuVHJhbnNsYXRlID0gZnVuY3Rpb24gKGFyZ190cmFuc2xhdGUpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IE1hdHJpeDR4NCgpO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gdGhpcy5kYXRhWzJdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzNdID0gdGhpcy5kYXRhWzNdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzRdID0gdGhpcy5kYXRhWzRdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzVdID0gdGhpcy5kYXRhWzVdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzZdID0gdGhpcy5kYXRhWzZdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzddID0gdGhpcy5kYXRhWzddO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzhdID0gdGhpcy5kYXRhWzhdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzldID0gdGhpcy5kYXRhWzldO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEwXSA9IHRoaXMuZGF0YVsxMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTFdID0gdGhpcy5kYXRhWzExXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMl0gPSB0aGlzLmRhdGFbMF0gKiBhcmdfdHJhbnNsYXRlLnggKyB0aGlzLmRhdGFbNF0gKiBhcmdfdHJhbnNsYXRlLnkgKyB0aGlzLmRhdGFbOF0gKiBhcmdfdHJhbnNsYXRlLnogKyB0aGlzLmRhdGFbMTJdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEzXSA9IHRoaXMuZGF0YVsxXSAqIGFyZ190cmFuc2xhdGUueCArIHRoaXMuZGF0YVs1XSAqIGFyZ190cmFuc2xhdGUueSArIHRoaXMuZGF0YVs5XSAqIGFyZ190cmFuc2xhdGUueiArIHRoaXMuZGF0YVsxM107XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTRdID0gdGhpcy5kYXRhWzJdICogYXJnX3RyYW5zbGF0ZS54ICsgdGhpcy5kYXRhWzZdICogYXJnX3RyYW5zbGF0ZS55ICsgdGhpcy5kYXRhWzEwXSAqIGFyZ190cmFuc2xhdGUueiArIHRoaXMuZGF0YVsxNF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTVdID0gdGhpcy5kYXRhWzNdICogYXJnX3RyYW5zbGF0ZS54ICsgdGhpcy5kYXRhWzddICogYXJnX3RyYW5zbGF0ZS55ICsgdGhpcy5kYXRhWzExXSAqIGFyZ190cmFuc2xhdGUueiArIHRoaXMuZGF0YVsxNV07XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLlRyYW5zbGF0ZV9iID0gZnVuY3Rpb24gKGFyZ190cmFuc2xhdGUpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMTJdID0gdGhpcy5kYXRhWzBdICogYXJnX3RyYW5zbGF0ZS54ICsgdGhpcy5kYXRhWzRdICogYXJnX3RyYW5zbGF0ZS55ICsgdGhpcy5kYXRhWzhdICogYXJnX3RyYW5zbGF0ZS56ICsgdGhpcy5kYXRhWzEyXTtcclxuICAgICAgICB0aGlzLmRhdGFbMTNdID0gdGhpcy5kYXRhWzFdICogYXJnX3RyYW5zbGF0ZS54ICsgdGhpcy5kYXRhWzVdICogYXJnX3RyYW5zbGF0ZS55ICsgdGhpcy5kYXRhWzldICogYXJnX3RyYW5zbGF0ZS56ICsgdGhpcy5kYXRhWzEzXTtcclxuICAgICAgICB0aGlzLmRhdGFbMTRdID0gdGhpcy5kYXRhWzJdICogYXJnX3RyYW5zbGF0ZS54ICsgdGhpcy5kYXRhWzZdICogYXJnX3RyYW5zbGF0ZS55ICsgdGhpcy5kYXRhWzEwXSAqIGFyZ190cmFuc2xhdGUueiArIHRoaXMuZGF0YVsxNF07XHJcbiAgICAgICAgdGhpcy5kYXRhWzE1XSA9IHRoaXMuZGF0YVszXSAqIGFyZ190cmFuc2xhdGUueCArIHRoaXMuZGF0YVs3XSAqIGFyZ190cmFuc2xhdGUueSArIHRoaXMuZGF0YVsxMV0gKiBhcmdfdHJhbnNsYXRlLnogKyB0aGlzLmRhdGFbMTVdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuUm90YXRlID0gZnVuY3Rpb24gKGFyZ19hbmdsZSwgYXJnX2F4aXMpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IE1hdHJpeDR4NCgpO1xyXG4gICAgICAgIHZhciBzcSA9IGFyZ19heGlzLkxlbmd0aCgpO1xyXG4gICAgICAgIGlmICghc3EpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhID0gYXJnX2F4aXMueCwgYiA9IGFyZ19heGlzLnksIGMgPSBhcmdfYXhpcy56O1xyXG4gICAgICAgIGlmIChzcSAhPSAxKSB7XHJcbiAgICAgICAgICAgIHNxID0gMSAvIHNxO1xyXG4gICAgICAgICAgICBhICo9IHNxO1xyXG4gICAgICAgICAgICBiICo9IHNxO1xyXG4gICAgICAgICAgICBjICo9IHNxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZCA9IE1hdGguc2luKGFyZ19hbmdsZSksIGUgPSBNYXRoLmNvcyhhcmdfYW5nbGUpLCBmID0gMSAtIGUsIGcgPSB0aGlzLmRhdGFbMF0sIGggPSB0aGlzLmRhdGFbMV0sIGkgPSB0aGlzLmRhdGFbMl0sIGogPSB0aGlzLmRhdGFbM10sIGsgPSB0aGlzLmRhdGFbNF0sIGwgPSB0aGlzLmRhdGFbNV0sIG0gPSB0aGlzLmRhdGFbNl0sIG4gPSB0aGlzLmRhdGFbN10sIG8gPSB0aGlzLmRhdGFbOF0sIHAgPSB0aGlzLmRhdGFbOV0sIHEgPSB0aGlzLmRhdGFbMTBdLCByID0gdGhpcy5kYXRhWzExXSwgcyA9IGEgKiBhICogZiArIGUsIHQgPSBiICogYSAqIGYgKyBjICogZCwgdSA9IGMgKiBhICogZiAtIGIgKiBkLCB2ID0gYSAqIGIgKiBmIC0gYyAqIGQsIHcgPSBiICogYiAqIGYgKyBlLCB4ID0gYyAqIGIgKiBmICsgYSAqIGQsIHkgPSBhICogYyAqIGYgKyBiICogZCwgeiA9IGIgKiBjICogZiAtIGEgKiBkLCBBID0gYyAqIGMgKiBmICsgZTtcclxuICAgICAgICBpZiAoYXJnX2FuZ2xlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEgIT0gb3V0cHV0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5kYXRhWzEyXSA9IHRoaXMuZGF0YVsxMl07XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YVsxM10gPSB0aGlzLmRhdGFbMTNdO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFbMTRdID0gdGhpcy5kYXRhWzE0XTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5kYXRhWzE1XSA9IHRoaXMuZGF0YVsxNV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhID0gdGhpcy5kYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IGcgKiBzICsgayAqIHQgKyBvICogdTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IGggKiBzICsgbCAqIHQgKyBwICogdTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IGkgKiBzICsgbSAqIHQgKyBxICogdTtcclxuICAgICAgICBvdXRwdXQuZGF0YVszXSA9IGogKiBzICsgbiAqIHQgKyByICogdTtcclxuICAgICAgICBvdXRwdXQuZGF0YVs0XSA9IGcgKiB2ICsgayAqIHcgKyBvICogeDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs1XSA9IGggKiB2ICsgbCAqIHcgKyBwICogeDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs2XSA9IGkgKiB2ICsgbSAqIHcgKyBxICogeDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs3XSA9IGogKiB2ICsgbiAqIHcgKyByICogeDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs4XSA9IGcgKiB5ICsgayAqIHogKyBvICogQTtcclxuICAgICAgICBvdXRwdXQuZGF0YVs5XSA9IGggKiB5ICsgbCAqIHogKyBwICogQTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMF0gPSBpICogeSArIG0gKiB6ICsgcSAqIEE7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTFdID0gaiAqIHkgKyBuICogeiArIHIgKiBBO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NHg0LnByb3RvdHlwZS5Sb3RhdGVfYiA9IGZ1bmN0aW9uIChhcmdfYW5nbGUsIGFyZ19heGlzKSB7XHJcbiAgICAgICAgdmFyIHNxID0gYXJnX2F4aXMuTGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKCFzcSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGEgPSBhcmdfYXhpcy54LCBiID0gYXJnX2F4aXMueSwgYyA9IGFyZ19heGlzLno7XHJcbiAgICAgICAgaWYgKHNxICE9IDEpIHtcclxuICAgICAgICAgICAgc3EgPSAxIC8gc3E7XHJcbiAgICAgICAgICAgIGEgKj0gc3E7XHJcbiAgICAgICAgICAgIGIgKj0gc3E7XHJcbiAgICAgICAgICAgIGMgKj0gc3E7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkID0gTWF0aC5zaW4oYXJnX2FuZ2xlKSwgZSA9IE1hdGguY29zKGFyZ19hbmdsZSksIGYgPSAxIC0gZSwgZyA9IHRoaXMuZGF0YVswXSwgaCA9IHRoaXMuZGF0YVsxXSwgaSA9IHRoaXMuZGF0YVsyXSwgaiA9IHRoaXMuZGF0YVszXSwgayA9IHRoaXMuZGF0YVs0XSwgbCA9IHRoaXMuZGF0YVs1XSwgbSA9IHRoaXMuZGF0YVs2XSwgbiA9IHRoaXMuZGF0YVs3XSwgbyA9IHRoaXMuZGF0YVs4XSwgcCA9IHRoaXMuZGF0YVs5XSwgcSA9IHRoaXMuZGF0YVsxMF0sIHIgPSB0aGlzLmRhdGFbMTFdLCBzID0gYSAqIGEgKiBmICsgZSwgdCA9IGIgKiBhICogZiArIGMgKiBkLCB1ID0gYyAqIGEgKiBmIC0gYiAqIGQsIHYgPSBhICogYiAqIGYgLSBjICogZCwgdyA9IGIgKiBiICogZiArIGUsIHggPSBjICogYiAqIGYgKyBhICogZCwgeSA9IGEgKiBjICogZiArIGIgKiBkLCB6ID0gYiAqIGMgKiBmIC0gYSAqIGQsIEEgPSBjICogYyAqIGYgKyBlO1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IGcgKiBzICsgayAqIHQgKyBvICogdTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSBoICogcyArIGwgKiB0ICsgcCAqIHU7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gaSAqIHMgKyBtICogdCArIHEgKiB1O1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IGogKiBzICsgbiAqIHQgKyByICogdTtcclxuICAgICAgICB0aGlzLmRhdGFbNF0gPSBnICogdiArIGsgKiB3ICsgbyAqIHg7XHJcbiAgICAgICAgdGhpcy5kYXRhWzVdID0gaCAqIHYgKyBsICogdyArIHAgKiB4O1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IGkgKiB2ICsgbSAqIHcgKyBxICogeDtcclxuICAgICAgICB0aGlzLmRhdGFbN10gPSBqICogdiArIG4gKiB3ICsgciAqIHg7XHJcbiAgICAgICAgdGhpcy5kYXRhWzhdID0gZyAqIHkgKyBrICogeiArIG8gKiBBO1xyXG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IGggKiB5ICsgbCAqIHogKyBwICogQTtcclxuICAgICAgICB0aGlzLmRhdGFbMTBdID0gaSAqIHkgKyBtICogeiArIHEgKiBBO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMV0gPSBqICogeSArIG4gKiB6ICsgciAqIEE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NHg0LnByb3RvdHlwZS5Mb29rQXQgPSBmdW5jdGlvbiAoYXJnX2V5ZSwgYXJnX2NlbnRlclBvcywgYXJnX3VwQXhpcykge1xyXG4gICAgICAgIHZhciBleWVYID0gYXJnX2V5ZS54LCBleWVZID0gYXJnX2V5ZS55LCBleWVaID0gYXJnX2V5ZS56LCB1cFggPSBhcmdfdXBBeGlzLngsIHVwWSA9IGFyZ191cEF4aXMueSwgdXBaID0gYXJnX3VwQXhpcy56LCBjZW50ZXJYID0gYXJnX2NlbnRlclBvcy54LCBjZW50ZXJZID0gYXJnX2NlbnRlclBvcy55LCBjZW50ZXJaID0gYXJnX2NlbnRlclBvcy56O1xyXG4gICAgICAgIGlmIChleWVYID09IGNlbnRlclggJiYgZXllWSA9PSBjZW50ZXJZICYmIGV5ZVogPT0gY2VudGVyWikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5JZGVudGl0eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgeDAsIHgxLCB4MiwgeTAsIHkxLCB5MiwgejAsIHoxLCB6MiwgbDtcclxuICAgICAgICB6MCA9IGV5ZVggLSBhcmdfY2VudGVyUG9zLng7XHJcbiAgICAgICAgejEgPSBleWVZIC0gYXJnX2NlbnRlclBvcy55O1xyXG4gICAgICAgIHoyID0gZXllWiAtIGFyZ19jZW50ZXJQb3MuejtcclxuICAgICAgICBsID0gMSAvIE1hdGguc3FydCh6MCAqIHowICsgejEgKiB6MSArIHoyICogejIpO1xyXG4gICAgICAgIHowICo9IGw7XHJcbiAgICAgICAgejEgKj0gbDtcclxuICAgICAgICB6MiAqPSBsO1xyXG4gICAgICAgIHgwID0gdXBZICogejIgLSB1cFogKiB6MTtcclxuICAgICAgICB4MSA9IHVwWiAqIHowIC0gdXBYICogejI7XHJcbiAgICAgICAgeDIgPSB1cFggKiB6MSAtIHVwWSAqIHowO1xyXG4gICAgICAgIGwgPSBNYXRoLnNxcnQoeDAgKiB4MCArIHgxICogeDEgKyB4MiAqIHgyKTtcclxuICAgICAgICBpZiAoIWwpIHtcclxuICAgICAgICAgICAgeDAgPSAwO1xyXG4gICAgICAgICAgICB4MSA9IDA7XHJcbiAgICAgICAgICAgIHgyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGwgPSAxIC8gbDtcclxuICAgICAgICAgICAgeDAgKj0gbDtcclxuICAgICAgICAgICAgeDEgKj0gbDtcclxuICAgICAgICAgICAgeDIgKj0gbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgeTAgPSB6MSAqIHgyIC0gejIgKiB4MTtcclxuICAgICAgICB5MSA9IHoyICogeDAgLSB6MCAqIHgyO1xyXG4gICAgICAgIHkyID0gejAgKiB4MSAtIHoxICogeDA7XHJcbiAgICAgICAgbCA9IE1hdGguc3FydCh5MCAqIHkwICsgeTEgKiB5MSArIHkyICogeTIpO1xyXG4gICAgICAgIGlmICghbCkge1xyXG4gICAgICAgICAgICB5MCA9IDA7XHJcbiAgICAgICAgICAgIHkxID0gMDtcclxuICAgICAgICAgICAgeTIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbCA9IDEgLyBsO1xyXG4gICAgICAgICAgICB5MCAqPSBsO1xyXG4gICAgICAgICAgICB5MSAqPSBsO1xyXG4gICAgICAgICAgICB5MiAqPSBsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSB4MDtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB5MDtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSB6MDtcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IHgxO1xyXG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IHkxO1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IHoxO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzhdID0geDI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0geTI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEwXSA9IHoyO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMV0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMl0gPSAtKHgwICogZXllWCArIHgxICogZXllWSArIHgyICogZXllWik7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEzXSA9IC0oeTAgKiBleWVYICsgeTEgKiBleWVZICsgeTIgKiBleWVaKTtcclxuICAgICAgICB0aGlzLmRhdGFbMTRdID0gLSh6MCAqIGV5ZVggKyB6MSAqIGV5ZVkgKyB6MiAqIGV5ZVopO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxNV0gPSAxO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuUGVyc3BlY3RpdmUgPSBmdW5jdGlvbiAoZm92eSwgYXNwZWN0LCBuZWFyLCBmYXIpIHtcclxuICAgICAgICB2YXIgdCA9IG5lYXIgKiBNYXRoLnRhbihmb3Z5ICogTWF0aC5QSSAvIDM2MCk7XHJcbiAgICAgICAgdmFyIHIgPSB0ICogYXNwZWN0O1xyXG4gICAgICAgIHZhciBhID0gciAqIDIsIGIgPSB0ICogMiwgYyA9IGZhciAtIG5lYXI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmVhciAqIDIgLyBhO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzVdID0gbmVhciAqIDIgLyBiO1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzddID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEwXSA9IC0oZmFyICsgbmVhcikgLyBjO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMV0gPSAtMTtcclxuICAgICAgICB0aGlzLmRhdGFbMTJdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMTNdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMTRdID0gLShmYXIgKiBuZWFyICogMikgLyBjO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxNV0gPSAwO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuT3J0aG8gPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tLCBuZWFyLCBmYXIpIHtcclxuICAgICAgICB2YXIgaCA9IChyaWdodCAtIGxlZnQpO1xyXG4gICAgICAgIHZhciB2ID0gKHRvcCAtIGJvdHRvbSk7XHJcbiAgICAgICAgdmFyIGQgPSAoZmFyIC0gbmVhcik7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gMiAvIGg7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzRdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSAyIC8gdjtcclxuICAgICAgICB0aGlzLmRhdGFbNl0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzhdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbOV0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMF0gPSAtMiAvIGQ7XHJcbiAgICAgICAgdGhpcy5kYXRhWzExXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEyXSA9IC0obGVmdCArIHJpZ2h0KSAvIGg7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEzXSA9IC0odG9wICsgYm90dG9tKSAvIHY7XHJcbiAgICAgICAgdGhpcy5kYXRhWzE0XSA9IC0oZmFyICsgbmVhcikgLyBkO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxNV0gPSAxO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuVHJhbnNwb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgTWF0cml4NHg0KCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbNF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbOF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSB0aGlzLmRhdGFbMTJdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzRdID0gdGhpcy5kYXRhWzFdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzVdID0gdGhpcy5kYXRhWzVdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzZdID0gdGhpcy5kYXRhWzldO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzddID0gdGhpcy5kYXRhWzEzXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVs4XSA9IHRoaXMuZGF0YVsyXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVs5XSA9IHRoaXMuZGF0YVs2XTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMF0gPSB0aGlzLmRhdGFbMTBdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzExXSA9IHRoaXMuZGF0YVsxNF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTJdID0gdGhpcy5kYXRhWzNdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEzXSA9IHRoaXMuZGF0YVs3XTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxNF0gPSB0aGlzLmRhdGFbMTFdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzE1XSA9IHRoaXMuZGF0YVsxNV07XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLlRyYW5zcG9zZV9iID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ZW1wID0gbmV3IE1hdHJpeDR4NCgpO1xyXG4gICAgICAgIHRlbXAuZGF0YVswXSA9IHRoaXMuZGF0YVswXTtcclxuICAgICAgICB0ZW1wLmRhdGFbMV0gPSB0aGlzLmRhdGFbNF07XHJcbiAgICAgICAgdGVtcC5kYXRhWzJdID0gdGhpcy5kYXRhWzhdO1xyXG4gICAgICAgIHRlbXAuZGF0YVszXSA9IHRoaXMuZGF0YVsxMl07XHJcbiAgICAgICAgdGVtcC5kYXRhWzRdID0gdGhpcy5kYXRhWzFdO1xyXG4gICAgICAgIHRlbXAuZGF0YVs1XSA9IHRoaXMuZGF0YVs1XTtcclxuICAgICAgICB0ZW1wLmRhdGFbNl0gPSB0aGlzLmRhdGFbOV07XHJcbiAgICAgICAgdGVtcC5kYXRhWzddID0gdGhpcy5kYXRhWzEzXTtcclxuICAgICAgICB0ZW1wLmRhdGFbOF0gPSB0aGlzLmRhdGFbMl07XHJcbiAgICAgICAgdGVtcC5kYXRhWzldID0gdGhpcy5kYXRhWzZdO1xyXG4gICAgICAgIHRlbXAuZGF0YVsxMF0gPSB0aGlzLmRhdGFbMTBdO1xyXG4gICAgICAgIHRlbXAuZGF0YVsxMV0gPSB0aGlzLmRhdGFbMTRdO1xyXG4gICAgICAgIHRlbXAuZGF0YVsxMl0gPSB0aGlzLmRhdGFbM107XHJcbiAgICAgICAgdGVtcC5kYXRhWzEzXSA9IHRoaXMuZGF0YVs3XTtcclxuICAgICAgICB0ZW1wLmRhdGFbMTRdID0gdGhpcy5kYXRhWzExXTtcclxuICAgICAgICB0ZW1wLmRhdGFbMTVdID0gdGhpcy5kYXRhWzE1XTtcclxuICAgICAgICB0aGlzLmRhdGEgPSB0ZW1wLmRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NHg0LnByb3RvdHlwZS5JbnZlcnNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgTWF0cml4NHg0KCk7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLmRhdGFbMF0sIGIgPSB0aGlzLmRhdGFbMV0sIGMgPSB0aGlzLmRhdGFbMl0sIGQgPSB0aGlzLmRhdGFbM10sIGUgPSB0aGlzLmRhdGFbNF0sIGYgPSB0aGlzLmRhdGFbNV0sIGcgPSB0aGlzLmRhdGFbNl0sIGggPSB0aGlzLmRhdGFbN10sIGkgPSB0aGlzLmRhdGFbOF0sIGogPSB0aGlzLmRhdGFbOV0sIGsgPSB0aGlzLmRhdGFbMTBdLCBsID0gdGhpcy5kYXRhWzExXSwgbSA9IHRoaXMuZGF0YVsxMl0sIG4gPSB0aGlzLmRhdGFbMTNdLCBvID0gdGhpcy5kYXRhWzE0XSwgcCA9IHRoaXMuZGF0YVsxNV0sIHEgPSBhICogZiAtIGIgKiBlLCByID0gYSAqIGcgLSBjICogZSwgcyA9IGEgKiBoIC0gZCAqIGUsIHQgPSBiICogZyAtIGMgKiBmLCB1ID0gYiAqIGggLSBkICogZiwgdiA9IGMgKiBoIC0gZCAqIGcsIHcgPSBpICogbiAtIGogKiBtLCB4ID0gaSAqIG8gLSBrICogbSwgeSA9IGkgKiBwIC0gbCAqIG0sIHogPSBqICogbyAtIGsgKiBuLCBBID0gaiAqIHAgLSBsICogbiwgQiA9IGsgKiBwIC0gbCAqIG8sIGl2ZCA9IDEgLyAocSAqIEIgLSByICogQSArIHMgKiB6ICsgdCAqIHkgLSB1ICogeCArIHYgKiB3KTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IChmICogQiAtIGcgKiBBICsgaCAqIHopICogaXZkO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gKC1iICogQiArIGMgKiBBIC0gZCAqIHopICogaXZkO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gKG4gKiB2IC0gbyAqIHUgKyBwICogdCkgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSAoLWogKiB2ICsgayAqIHUgLSBsICogdCkgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNF0gPSAoLWUgKiBCICsgZyAqIHkgLSBoICogeCkgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNV0gPSAoYSAqIEIgLSBjICogeSArIGQgKiB4KSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs2XSA9ICgtbSAqIHYgKyBvICogcyAtIHAgKiByKSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs3XSA9IChpICogdiAtIGsgKiBzICsgbCAqIHIpICogaXZkO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzhdID0gKGUgKiBBIC0gZiAqIHkgKyBoICogdykgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbOV0gPSAoLWEgKiBBICsgYiAqIHkgLSBkICogdykgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTBdID0gKG0gKiB1IC0gbiAqIHMgKyBwICogcSkgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTFdID0gKC1pICogdSArIGogKiBzIC0gbCAqIHEpICogaXZkO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEyXSA9ICgtZSAqIHogKyBmICogeCAtIGcgKiB3KSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxM10gPSAoYSAqIHogLSBiICogeCArIGMgKiB3KSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxNF0gPSAoLW0gKiB0ICsgbiAqIHIgLSBvICogcSkgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTVdID0gKGkgKiB0IC0gaiAqIHIgKyBrICogcSkgKiBpdmQ7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLkludmVyc2VfYiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuZGF0YVswXSwgYiA9IHRoaXMuZGF0YVsxXSwgYyA9IHRoaXMuZGF0YVsyXSwgZCA9IHRoaXMuZGF0YVszXSwgZSA9IHRoaXMuZGF0YVs0XSwgZiA9IHRoaXMuZGF0YVs1XSwgZyA9IHRoaXMuZGF0YVs2XSwgaCA9IHRoaXMuZGF0YVs3XSwgaSA9IHRoaXMuZGF0YVs4XSwgaiA9IHRoaXMuZGF0YVs5XSwgayA9IHRoaXMuZGF0YVsxMF0sIGwgPSB0aGlzLmRhdGFbMTFdLCBtID0gdGhpcy5kYXRhWzEyXSwgbiA9IHRoaXMuZGF0YVsxM10sIG8gPSB0aGlzLmRhdGFbMTRdLCBwID0gdGhpcy5kYXRhWzE1XSwgcSA9IGEgKiBmIC0gYiAqIGUsIHIgPSBhICogZyAtIGMgKiBlLCBzID0gYSAqIGggLSBkICogZSwgdCA9IGIgKiBnIC0gYyAqIGYsIHUgPSBiICogaCAtIGQgKiBmLCB2ID0gYyAqIGggLSBkICogZywgdyA9IGkgKiBuIC0gaiAqIG0sIHggPSBpICogbyAtIGsgKiBtLCB5ID0gaSAqIHAgLSBsICogbSwgeiA9IGogKiBvIC0gayAqIG4sIEEgPSBqICogcCAtIGwgKiBuLCBCID0gayAqIHAgLSBsICogbywgaXZkID0gMSAvIChxICogQiAtIHIgKiBBICsgcyAqIHogKyB0ICogeSAtIHUgKiB4ICsgdiAqIHcpO1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IChmICogQiAtIGcgKiBBICsgaCAqIHopICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9ICgtYiAqIEIgKyBjICogQSAtIGQgKiB6KSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSAobiAqIHYgLSBvICogdSArIHAgKiB0KSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSAoLWogKiB2ICsgayAqIHUgLSBsICogdCkgKiBpdmQ7XHJcbiAgICAgICAgdGhpcy5kYXRhWzRdID0gKC1lICogQiArIGcgKiB5IC0gaCAqIHgpICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IChhICogQiAtIGMgKiB5ICsgZCAqIHgpICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9ICgtbSAqIHYgKyBvICogcyAtIHAgKiByKSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbN10gPSAoaSAqIHYgLSBrICogcyArIGwgKiByKSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSAoZSAqIEEgLSBmICogeSArIGggKiB3KSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbOV0gPSAoLWEgKiBBICsgYiAqIHkgLSBkICogdykgKiBpdmQ7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEwXSA9IChtICogdSAtIG4gKiBzICsgcCAqIHEpICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMV0gPSAoLWkgKiB1ICsgaiAqIHMgLSBsICogcSkgKiBpdmQ7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEyXSA9ICgtZSAqIHogKyBmICogeCAtIGcgKiB3KSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbMTNdID0gKGEgKiB6IC0gYiAqIHggKyBjICogdykgKiBpdmQ7XHJcbiAgICAgICAgdGhpcy5kYXRhWzE0XSA9ICgtbSAqIHQgKyBuICogciAtIG8gKiBxKSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbMTVdID0gKGkgKiB0IC0gaiAqIHIgKyBrICogcSkgKiBpdmQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1hdHJpeDR4NDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gTWF0cml4NHg0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgTWF0cml4XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWF0cml4XCIpKTtcclxudmFyIFZlY3RvcjNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9WZWN0b3IzXCIpKTtcclxudmFyIFF1YXRlcm5pb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBRdWF0ZXJuaW9uKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoNCk7XHJcbiAgICB9XHJcbiAgICBRdWF0ZXJuaW9uLnByb3RvdHlwZS5JZGVudGl0eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSAxO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFF1YXRlcm5pb24ucHJvdG90eXBlLkludmVyc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSAtdGhpcy5kYXRhWzBdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gLXRoaXMuZGF0YVsxXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IC10aGlzLmRhdGFbMl07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSB0aGlzLmRhdGFbM107XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBRdWF0ZXJuaW9uLnByb3RvdHlwZS5JbnZlcnNlX2IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gLXRoaXMuZGF0YVswXTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSAtdGhpcy5kYXRhWzFdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IC10aGlzLmRhdGFbMl07XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gdGhpcy5kYXRhWzNdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFF1YXRlcm5pb24ucHJvdG90eXBlLk5vcm1hbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVszXSA9IHRoaXMuZGF0YVszXTtcclxuICAgICAgICB2YXIgeCA9IG91dHB1dC5kYXRhWzBdLCB5ID0gb3V0cHV0LmRhdGFbMV0sIHogPSBvdXRwdXQuZGF0YVsyXSwgdyA9IG91dHB1dC5kYXRhWzNdO1xyXG4gICAgICAgIHZhciBsID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3KTtcclxuICAgICAgICBpZiAobCA9PT0gMCkge1xyXG4gICAgICAgICAgICBvdXRwdXQuZGF0YVswXSA9IDA7XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhWzFdID0gMDtcclxuICAgICAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSAwO1xyXG4gICAgICAgICAgICBvdXRwdXQuZGF0YVszXSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsID0gMSAvIGw7XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhWzBdID0geCAqIGw7XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhWzFdID0geSAqIGw7XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhWzJdID0geiAqIGw7XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhWzNdID0gdyAqIGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgUXVhdGVybmlvbi5wcm90b3R5cGUuTm9ybWFsaXplX2IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGwgPSBNYXRoLnNxcnQodGhpcy5kYXRhWzBdICogdGhpcy5kYXRhWzBdICsgdGhpcy5kYXRhWzFdICogdGhpcy5kYXRhWzFdICsgdGhpcy5kYXRhWzJdICogdGhpcy5kYXRhWzJdICsgdGhpcy5kYXRhWzNdICogdGhpcy5kYXRhWzNdKTtcclxuICAgICAgICBpZiAobCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbMF0gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbMV0gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbMl0gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbM10gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbCA9IDEgLyBsO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKiBsO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKiBsO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gKiBsO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbM10gPSB0aGlzLmRhdGFbM10gKiBsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBRdWF0ZXJuaW9uLnByb3RvdHlwZS5NdWx0aXBseSA9IGZ1bmN0aW9uIChhcmdfcXVhdCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgICAgIHZhciBheCA9IHRoaXMuZGF0YVswXSwgYXkgPSB0aGlzLmRhdGFbMV0sIGF6ID0gdGhpcy5kYXRhWzJdLCBhdyA9IHRoaXMuZGF0YVszXTtcclxuICAgICAgICB2YXIgYnggPSBhcmdfcXVhdC5kYXRhWzBdLCBieSA9IGFyZ19xdWF0LmRhdGFbMV0sIGJ6ID0gYXJnX3F1YXQuZGF0YVsyXSwgYncgPSBhcmdfcXVhdC5kYXRhWzNdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gYXggKiBidyArIGF3ICogYnggKyBheSAqIGJ6IC0gYXogKiBieTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IGF5ICogYncgKyBhdyAqIGJ5ICsgYXogKiBieCAtIGF4ICogYno7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSBheiAqIGJ3ICsgYXcgKiBieiArIGF4ICogYnkgLSBheSAqIGJ4O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzNdID0gYXcgKiBidyAtIGF4ICogYnggLSBheSAqIGJ5IC0gYXogKiBiejtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFF1YXRlcm5pb24ucHJvdG90eXBlLk11bHRpcGx5X2IgPSBmdW5jdGlvbiAoYXJnX3F1YXQpIHtcclxuICAgICAgICB2YXIgYXggPSB0aGlzLmRhdGFbMF0sIGF5ID0gdGhpcy5kYXRhWzFdLCBheiA9IHRoaXMuZGF0YVsyXSwgYXcgPSB0aGlzLmRhdGFbM107XHJcbiAgICAgICAgdmFyIGJ4ID0gYXJnX3F1YXQuZGF0YVswXSwgYnkgPSBhcmdfcXVhdC5kYXRhWzFdLCBieiA9IGFyZ19xdWF0LmRhdGFbMl0sIGJ3ID0gYXJnX3F1YXQuZGF0YVszXTtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSBheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5O1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IGF5ICogYncgKyBhdyAqIGJ5ICsgYXogKiBieCAtIGF4ICogYno7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gYXogKiBidyArIGF3ICogYnogKyBheCAqIGJ5IC0gYXkgKiBieDtcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSBhdyAqIGJ3IC0gYXggKiBieCAtIGF5ICogYnkgLSBheiAqIGJ6O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFF1YXRlcm5pb24ucHJvdG90eXBlLlJvdGF0ZSA9IGZ1bmN0aW9uIChhcmdfYW5nbGUsIGFyZ19heGlzKSB7XHJcbiAgICAgICAgdmFyIHNxID0gYXJnX2F4aXMuTGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKCFzcSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGEgPSBhcmdfYXhpcy54LCBiID0gYXJnX2F4aXMueSwgYyA9IGFyZ19heGlzLno7XHJcbiAgICAgICAgaWYgKHNxICE9IDEpIHtcclxuICAgICAgICAgICAgc3EgPSAxIC8gc3E7XHJcbiAgICAgICAgICAgIGEgKj0gc3E7XHJcbiAgICAgICAgICAgIGIgKj0gc3E7XHJcbiAgICAgICAgICAgIGMgKj0gc3E7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzID0gTWF0aC5zaW4oYXJnX2FuZ2xlICogMC41KTtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSBhICogcztcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSBiICogcztcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBjICogcztcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSBNYXRoLmNvcyhhcmdfYW5nbGUgKiAwLjUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFF1YXRlcm5pb24ucHJvdG90eXBlLlRvVmVjdG9yMyA9IGZ1bmN0aW9uIChhcmdfdmVjKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAwKTtcclxuICAgICAgICB2YXIgcXAgPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgICAgIHZhciBxcSA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgdmFyIHFyID0gdGhpcy5JbnZlcnNlKCk7XHJcbiAgICAgICAgcXAuZGF0YVswXSA9IGFyZ192ZWMueDtcclxuICAgICAgICBxcC5kYXRhWzFdID0gYXJnX3ZlYy55O1xyXG4gICAgICAgIHFwLmRhdGFbMl0gPSBhcmdfdmVjLno7XHJcbiAgICAgICAgcXEgPSBxci5NdWx0aXBseShxcCk7XHJcbiAgICAgICAgcXIgPSBxcS5NdWx0aXBseSh0aGlzKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHFyLmRhdGFbMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSBxci5kYXRhWzFdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gcXIuZGF0YVsyXTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFF1YXRlcm5pb24ucHJvdG90eXBlLlRvTWF0cml4NHg0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgTWF0cml4XzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciB4ID0gdGhpcy5kYXRhWzBdLCB5ID0gdGhpcy5kYXRhWzFdLCB6ID0gdGhpcy5kYXRhWzJdLCB3ID0gdGhpcy5kYXRhWzNdO1xyXG4gICAgICAgIHZhciB4MiA9IHggKyB4LCB5MiA9IHkgKyB5LCB6MiA9IHogKyB6O1xyXG4gICAgICAgIHZhciB4eCA9IHggKiB4MiwgeHkgPSB4ICogeTIsIHh6ID0geCAqIHoyO1xyXG4gICAgICAgIHZhciB5eSA9IHkgKiB5MiwgeXogPSB5ICogejIsIHp6ID0geiAqIHoyO1xyXG4gICAgICAgIHZhciB3eCA9IHcgKiB4Miwgd3kgPSB3ICogeTIsIHd6ID0gdyAqIHoyO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gMSAtICh5eSArIHp6KTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHh5IC0gd3o7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB4eiArIHd5O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzNdID0gMDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs0XSA9IHh5ICsgd3o7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNV0gPSAxIC0gKHh4ICsgenopO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzZdID0geXogLSB3eDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs3XSA9IDA7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbOF0gPSB4eiAtIHd5O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzldID0geXogKyB3eDtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMF0gPSAxIC0gKHh4ICsgeXkpO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzExXSA9IDA7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTJdID0gMDtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxM10gPSAwO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzE0XSA9IDA7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTVdID0gMTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFF1YXRlcm5pb24ucHJvdG90eXBlLlNwaGVyZUxlcnAgPSBmdW5jdGlvbiAoYXJnX3F1YXQsIHRpbWUpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgICAgICB2YXIgaHQgPSB0aGlzLmRhdGFbMF0gKiBhcmdfcXVhdC5kYXRhWzBdICsgdGhpcy5kYXRhWzFdICogYXJnX3F1YXQuZGF0YVsxXSArIHRoaXMuZGF0YVsyXSAqIGFyZ19xdWF0LmRhdGFbMl0gKyB0aGlzLmRhdGFbM10gKiBhcmdfcXVhdC5kYXRhWzNdO1xyXG4gICAgICAgIHZhciBocyA9IDEuMCAtIGh0ICogaHQ7XHJcbiAgICAgICAgaWYgKGhzIDw9IDAuMCkge1xyXG4gICAgICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXTtcclxuICAgICAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV07XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhWzJdID0gdGhpcy5kYXRhWzJdO1xyXG4gICAgICAgICAgICBvdXRwdXQuZGF0YVszXSA9IHRoaXMuZGF0YVszXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhzID0gTWF0aC5zcXJ0KGhzKTtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGhzKSA8IDAuMDAwMSkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSAodGhpcy5kYXRhWzBdICogMC41ICsgYXJnX3F1YXQuZGF0YVswXSAqIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YVsxXSA9ICh0aGlzLmRhdGFbMV0gKiAwLjUgKyBhcmdfcXVhdC5kYXRhWzFdICogMC41KTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5kYXRhWzJdID0gKHRoaXMuZGF0YVsyXSAqIDAuNSArIGFyZ19xdWF0LmRhdGFbMl0gKiAwLjUpO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFbM10gPSAodGhpcy5kYXRhWzNdICogMC41ICsgYXJnX3F1YXQuZGF0YVszXSAqIDAuNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGggPSBNYXRoLmFjb3MoaHQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHB0ID0gcGggKiB0aW1lO1xyXG4gICAgICAgICAgICAgICAgdmFyIHQwID0gTWF0aC5zaW4ocGggLSBwdCkgLyBocztcclxuICAgICAgICAgICAgICAgIHZhciB0MSA9IE1hdGguc2luKHB0KSAvIGhzO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKiB0MCArIGFyZ19xdWF0LmRhdGFbMF0gKiB0MTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdICogdDAgKyBhcmdfcXVhdC5kYXRhWzFdICogdDE7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAqIHQwICsgYXJnX3F1YXQuZGF0YVsyXSAqIHQxO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFbM10gPSB0aGlzLmRhdGFbM10gKiB0MCArIGFyZ19xdWF0LmRhdGFbM10gKiB0MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFF1YXRlcm5pb24ucHJvdG90eXBlLlNwaGVyZUxlcnBfYiA9IGZ1bmN0aW9uIChhcmdfcXVhdCwgdGltZSkge1xyXG4gICAgICAgIHZhciBodCA9IHRoaXMuZGF0YVswXSAqIGFyZ19xdWF0LmRhdGFbMF0gKyB0aGlzLmRhdGFbMV0gKiBhcmdfcXVhdC5kYXRhWzFdICsgdGhpcy5kYXRhWzJdICogYXJnX3F1YXQuZGF0YVsyXSArIHRoaXMuZGF0YVszXSAqIGFyZ19xdWF0LmRhdGFbM107XHJcbiAgICAgICAgdmFyIGhzID0gMS4wIC0gaHQgKiBodDtcclxuICAgICAgICBpZiAoaHMgPD0gMC4wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaHMgPSBNYXRoLnNxcnQoaHMpO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoaHMpIDwgMC4wMDAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbMF0gPSAodGhpcy5kYXRhWzBdICogMC41ICsgYXJnX3F1YXQuZGF0YVswXSAqIDAuNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbMV0gPSAodGhpcy5kYXRhWzFdICogMC41ICsgYXJnX3F1YXQuZGF0YVsxXSAqIDAuNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbMl0gPSAodGhpcy5kYXRhWzJdICogMC41ICsgYXJnX3F1YXQuZGF0YVsyXSAqIDAuNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbM10gPSAodGhpcy5kYXRhWzNdICogMC41ICsgYXJnX3F1YXQuZGF0YVszXSAqIDAuNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGggPSBNYXRoLmFjb3MoaHQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHB0ID0gcGggKiB0aW1lO1xyXG4gICAgICAgICAgICAgICAgdmFyIHQwID0gTWF0aC5zaW4ocGggLSBwdCkgLyBocztcclxuICAgICAgICAgICAgICAgIHZhciB0MSA9IE1hdGguc2luKHB0KSAvIGhzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhWzBdID0gdGhpcy5kYXRhWzBdICogdDAgKyBhcmdfcXVhdC5kYXRhWzBdICogdDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKiB0MCArIGFyZ19xdWF0LmRhdGFbMV0gKiB0MTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAqIHQwICsgYXJnX3F1YXQuZGF0YVsyXSAqIHQxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhWzNdID0gdGhpcy5kYXRhWzNdICogdDAgKyBhcmdfcXVhdC5kYXRhWzNdICogdDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFF1YXRlcm5pb247XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFF1YXRlcm5pb247XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBWZWN0b3IyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVmVjdG9yMih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEZsb2F0MzJBcnJheSgyKTtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSB4O1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IHk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMi5wcm90b3R5cGUsIFwieFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbMF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChhcmdfdikge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbMF0gPSBhcmdfdjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMi5wcm90b3R5cGUsIFwieVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbMV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChhcmdfdikge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbMV0gPSBhcmdfdjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMi5wcm90b3R5cGUsIFwieHlcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLkFkZCA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKyBhcmdfb3RoZXIuZGF0YVswXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSArIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuQWRkX2IgPSBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gdGhpcy5kYXRhWzBdICsgYXJnX290aGVyLmRhdGFbMF07XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gdGhpcy5kYXRhWzFdICsgYXJnX290aGVyLmRhdGFbMV07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuU3ViID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAtIGFyZ19vdGhlci5kYXRhWzBdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdIC0gYXJnX290aGVyLmRhdGFbMV07XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5TdWJfYiA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gLSBhcmdfb3RoZXIuZGF0YVswXTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gLSBhcmdfb3RoZXIuZGF0YVsxXTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5NdWx0aXBseSA9IGZ1bmN0aW9uIChhcmdfc2NhbGFyKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdICogYXJnX3NjYWxhcjtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAqIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5NdWx0aXBseV9iID0gZnVuY3Rpb24gKGFyZ19zY2FsYXIpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gKj0gYXJnX3NjYWxhcjtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gKj0gYXJnX3NjYWxhcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5EaXYgPSBmdW5jdGlvbiAoYXJnX3NjYWxhcikge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAvIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gLyBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuRGl2X2IgPSBmdW5jdGlvbiAoYXJnX3NjYWxhcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSAvPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSAvPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLkxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGF0YVswXSAqIHRoaXMuZGF0YVswXSArIHRoaXMuZGF0YVsxXSAqIHRoaXMuZGF0YVsxXSk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuTGVuZ3RoU3FyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbMF0gKiB0aGlzLmRhdGFbMF0gKyB0aGlzLmRhdGFbMV0gKiB0aGlzLmRhdGFbMV07XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuRG90ID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbMF0gKiBhcmdfb3RoZXIuZGF0YVswXSArIHRoaXMuZGF0YVsxXSAqIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLkNyb3NzID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnggKiBhcmdfb3RoZXIueSAtIHRoaXMueSAqIGFyZ19vdGhlci54O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLk5vcm1hbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjIodGhpcy5kYXRhWzBdLCB0aGlzLmRhdGFbMV0pO1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLkxlbmd0aCgpO1xyXG4gICAgICAgIG91dHB1dC5EaXZfYihsZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuTm9ybWFsaXplX2IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMuTGVuZ3RoKCk7XHJcbiAgICAgICAgdGhpcy5EaXZfYihsZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBWZWN0b3IyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBWZWN0b3IyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVmVjdG9yMyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFZlY3RvcjMoeCwgeSwgeikge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoMyk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0geDtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB5O1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IHo7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMy5wcm90b3R5cGUsIFwieFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbMF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhWzBdID0gYXJnX290aGVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IzLnByb3RvdHlwZSwgXCJ5XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVsxXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbMV0gPSBhcmdfb3RoZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjMucHJvdG90eXBlLCBcInpcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzJdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVsyXSA9IGFyZ19vdGhlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMy5wcm90b3R5cGUsIFwieHl6XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5BZGQgPSBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdICsgYXJnX290aGVyLmRhdGFbMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKyBhcmdfb3RoZXIuZGF0YVsxXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSArIGFyZ19vdGhlci5kYXRhWzJdO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuQWRkX2IgPSBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gdGhpcy5kYXRhWzBdICsgYXJnX290aGVyLmRhdGFbMF07XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gdGhpcy5kYXRhWzFdICsgYXJnX290aGVyLmRhdGFbMV07XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gdGhpcy5kYXRhWzJdICsgYXJnX290aGVyLmRhdGFbMl07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuU3ViID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAtIGFyZ19vdGhlci5kYXRhWzBdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdIC0gYXJnX290aGVyLmRhdGFbMV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gLSBhcmdfb3RoZXIuZGF0YVsyXTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLlN1Yl9iID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAtIGFyZ19vdGhlci5kYXRhWzBdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAtIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAtIGFyZ19vdGhlci5kYXRhWzJdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLk11bHRpcGx5ID0gZnVuY3Rpb24gKGFyZ19zY2FsYXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKiBhcmdfc2NhbGFyO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdICogYXJnX3NjYWxhcjtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAqIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5NdWx0aXBseV9WZWMzID0gZnVuY3Rpb24gKGFyZ192ZWN0b3IpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKiBhcmdfdmVjdG9yLmRhdGFbMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKiBhcmdfdmVjdG9yLmRhdGFbMV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gKiBhcmdfdmVjdG9yLmRhdGFbMl07XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5NdWx0aXBseV9iID0gZnVuY3Rpb24gKGFyZ19zY2FsYXIpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gKj0gYXJnX3NjYWxhcjtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gKj0gYXJnX3NjYWxhcjtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gKj0gYXJnX3NjYWxhcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5NdWx0aXBseV9WZWMzX2IgPSBmdW5jdGlvbiAoYXJnX3ZlY3Rvcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAqIGFyZ192ZWN0b3IuZGF0YVswXTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKiBhcmdfdmVjdG9yLmRhdGFbMV07XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gdGhpcy5kYXRhWzJdICogYXJnX3ZlY3Rvci5kYXRhWzJdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLk11bHRpcGx5X01hdHJpeCA9IGZ1bmN0aW9uIChhcmdfbWF0cml4KSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgICAgIC8vIG91dHB1dC5kYXRhWzBdPXRoaXMuZGF0YVswXSphcmdfbWF0cml4LmRhdGFbMF0rdGhpcy5kYXRhWzBdKmFyZ19tYXRyaXguZGF0YVs0XSt0aGlzLmRhdGFbMF0qYXJnX21hdHJpeC5kYXRhWzhdK3RoaXMuZGF0YVswXSphcmdfbWF0cml4LmRhdGFbMTJdO1xyXG4gICAgICAgIC8vIG91dHB1dC5kYXRhWzFdPXRoaXMuZGF0YVsxXSphcmdfbWF0cml4LmRhdGFbMV0rdGhpcy5kYXRhWzFdKmFyZ19tYXRyaXguZGF0YVs1XSt0aGlzLmRhdGFbMV0qYXJnX21hdHJpeC5kYXRhWzldK3RoaXMuZGF0YVsxXSphcmdfbWF0cml4LmRhdGFbMTNdO1xyXG4gICAgICAgIC8vIG91dHB1dC5kYXRhWzJdPXRoaXMuZGF0YVsyXSphcmdfbWF0cml4LmRhdGFbMl0rdGhpcy5kYXRhWzJdKmFyZ19tYXRyaXguZGF0YVs2XSt0aGlzLmRhdGFbMl0qYXJnX21hdHJpeC5kYXRhWzEwXSt0aGlzLmRhdGFbMl0qYXJnX21hdHJpeC5kYXRhWzE0XTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAqIGFyZ19tYXRyaXguZGF0YVswXSArIHRoaXMuZGF0YVsxXSAqIGFyZ19tYXRyaXguZGF0YVsxXSArIHRoaXMuZGF0YVsyXSAqIGFyZ19tYXRyaXguZGF0YVsyXSArIGFyZ19tYXRyaXguZGF0YVszXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVswXSAqIGFyZ19tYXRyaXguZGF0YVs0XSArIHRoaXMuZGF0YVsxXSAqIGFyZ19tYXRyaXguZGF0YVs1XSArIHRoaXMuZGF0YVsyXSAqIGFyZ19tYXRyaXguZGF0YVs2XSArIGFyZ19tYXRyaXguZGF0YVs3XTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVswXSAqIGFyZ19tYXRyaXguZGF0YVs4XSArIHRoaXMuZGF0YVsxXSAqIGFyZ19tYXRyaXguZGF0YVs5XSArIHRoaXMuZGF0YVsyXSAqIGFyZ19tYXRyaXguZGF0YVsxMF0gKyBhcmdfbWF0cml4LmRhdGFbMTFdO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuRGl2ID0gZnVuY3Rpb24gKGFyZ19zY2FsYXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gLyBhcmdfc2NhbGFyO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdIC8gYXJnX3NjYWxhcjtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAvIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5EaXZfYiA9IGZ1bmN0aW9uIChhcmdfc2NhbGFyKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdIC89IGFyZ19zY2FsYXI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdIC89IGFyZ19zY2FsYXI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdIC89IGFyZ19zY2FsYXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5kYXRhWzBdICogdGhpcy5kYXRhWzBdICsgdGhpcy5kYXRhWzFdICogdGhpcy5kYXRhWzFdICsgdGhpcy5kYXRhWzJdICogdGhpcy5kYXRhWzJdKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5MZW5ndGhTcXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVswXSAqIHRoaXMuZGF0YVswXSArIHRoaXMuZGF0YVsxXSAqIHRoaXMuZGF0YVsxXSArIHRoaXMuZGF0YVsyXSAqIHRoaXMuZGF0YVsyXTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5Eb3QgPSBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVswXSAqIGFyZ19vdGhlci5kYXRhWzBdICsgdGhpcy5kYXRhWzFdICogYXJnX290aGVyLmRhdGFbMV0gKyB0aGlzLmRhdGFbMl0gKiBhcmdfb3RoZXIuZGF0YVsyXTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5Dcm9zcyA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMV0gKiBhcmdfb3RoZXIuZGF0YVsyXSAtIHRoaXMuZGF0YVsyXSAqIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzJdICogYXJnX290aGVyLmRhdGFbMF0gLSB0aGlzLmRhdGFbMF0gKiBhcmdfb3RoZXIuZGF0YVsyXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVswXSAqIGFyZ19vdGhlci5kYXRhWzFdIC0gdGhpcy5kYXRhWzFdICogYXJnX290aGVyLmRhdGFbMF07XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5Ob3JtYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gdGhpcy5kYXRhWzJdO1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLkxlbmd0aCgpO1xyXG4gICAgICAgIG91dHB1dC5EaXZfYihsZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuTm9ybWFsaXplX2IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMuTGVuZ3RoKCk7XHJcbiAgICAgICAgdGhpcy5EaXZfYihsZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLkNsb25lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyh0aGlzLmRhdGFbMF0sIHRoaXMuZGF0YVsxXSwgdGhpcy5kYXRhWzJdKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnhBeGlzID0gbmV3IFZlY3RvcjMoMSwgMCwgMCk7XHJcbiAgICBWZWN0b3IzLnlBeGlzID0gbmV3IFZlY3RvcjMoMCwgMSwgMCk7XHJcbiAgICBWZWN0b3IzLnpBeGlzID0gbmV3IFZlY3RvcjMoMCwgMCwgMSk7XHJcbiAgICByZXR1cm4gVmVjdG9yMztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVmVjdG9yMztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFZlY3RvcjQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBWZWN0b3I0KHgsIHksIHosIHcpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KDQpO1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IHg7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0geTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSB6O1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IHc7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yNC5wcm90b3R5cGUsIFwieFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbMF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjQucHJvdG90eXBlLCBcInlcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzFdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3I0LnByb3RvdHlwZSwgXCJ6XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVsyXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yNC5wcm90b3R5cGUsIFwid1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbM107XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjQucHJvdG90eXBlLCBcInh5endcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLlNldCA9IGZ1bmN0aW9uICh4LCB5LCB6LCB3KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0geDtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB5O1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IHo7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gdztcclxuICAgIH07XHJcbiAgICBWZWN0b3I0LnByb3RvdHlwZS5BZGQgPSBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3I0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdICsgYXJnX290aGVyLmRhdGFbMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKyBhcmdfb3RoZXIuZGF0YVsxXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSArIGFyZ19vdGhlci5kYXRhWzJdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzNdID0gdGhpcy5kYXRhWzNdICsgYXJnX290aGVyLmRhdGFbM107XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3I0LnByb3RvdHlwZS5BZGRfYiA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKyBhcmdfb3RoZXIuZGF0YVswXTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKyBhcmdfb3RoZXIuZGF0YVsxXTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gKyBhcmdfb3RoZXIuZGF0YVsyXTtcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSB0aGlzLmRhdGFbM10gKyBhcmdfb3RoZXIuZGF0YVszXTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3I0LnByb3RvdHlwZS5TdWIgPSBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3I0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdIC0gYXJnX290aGVyLmRhdGFbMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gLSBhcmdfb3RoZXIuZGF0YVsxXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAtIGFyZ19vdGhlci5kYXRhWzJdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzNdID0gdGhpcy5kYXRhWzNdIC0gYXJnX290aGVyLmRhdGFbM107XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3I0LnByb3RvdHlwZS5TdWJfYiA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gLSBhcmdfb3RoZXIuZGF0YVswXTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gLSBhcmdfb3RoZXIuZGF0YVsxXTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gLSBhcmdfb3RoZXIuZGF0YVsyXTtcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSB0aGlzLmRhdGFbM10gLSBhcmdfb3RoZXIuZGF0YVszXTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3I0LnByb3RvdHlwZS5NdWx0aXBseSA9IGZ1bmN0aW9uIChhcmdfc2NhbGFyKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3I0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdICogYXJnX3NjYWxhcjtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAqIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gKiBhcmdfc2NhbGFyO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzNdID0gdGhpcy5kYXRhWzNdICogYXJnX3NjYWxhcjtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLk11bHRpcGx5X2IgPSBmdW5jdGlvbiAoYXJnX3NjYWxhcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSAqPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSAqPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSAqPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSAqPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLkRpdiA9IGZ1bmN0aW9uIChhcmdfc2NhbGFyKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3I0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdIC8gYXJnX3NjYWxhcjtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAvIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gLyBhcmdfc2NhbGFyO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzNdID0gdGhpcy5kYXRhWzNdIC8gYXJnX3NjYWxhcjtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLkRpdl9iID0gZnVuY3Rpb24gKGFyZ19zY2FsYXIpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gLz0gYXJnX3NjYWxhcjtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gLz0gYXJnX3NjYWxhcjtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gLz0gYXJnX3NjYWxhcjtcclxuICAgICAgICB0aGlzLmRhdGFbM10gLz0gYXJnX3NjYWxhcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3I0LnByb3RvdHlwZS5MZW5ndGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRhdGFbMF0gKiB0aGlzLmRhdGFbMF0gKyB0aGlzLmRhdGFbMV0gKiB0aGlzLmRhdGFbMV0gKyB0aGlzLmRhdGFbMl0gKiB0aGlzLmRhdGFbMl0gKyB0aGlzLmRhdGFbM10gKiB0aGlzLmRhdGFbM10pO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLkxlbmd0aFNxciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzBdICogdGhpcy5kYXRhWzBdICsgdGhpcy5kYXRhWzFdICogdGhpcy5kYXRhWzFdICsgdGhpcy5kYXRhWzJdICogdGhpcy5kYXRhWzJdICsgdGhpcy5kYXRhWzNdICogdGhpcy5kYXRhWzNdO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLkRvdCA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzBdICogYXJnX290aGVyLmRhdGFbMF0gKyB0aGlzLmRhdGFbMV0gKiBhcmdfb3RoZXIuZGF0YVsxXSArIHRoaXMuZGF0YVsyXSAqIGFyZ19vdGhlci5kYXRhWzJdICsgdGhpcy5kYXRhWzNdICogYXJnX290aGVyLmRhdGFbM107XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yNC5wcm90b3R5cGUuTm9ybWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yNCh0aGlzLmRhdGFbMF0sIHRoaXMuZGF0YVsxXSwgdGhpcy5kYXRhWzJdLCB0aGlzLmRhdGFbM10pO1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLkxlbmd0aCgpO1xyXG4gICAgICAgIG91dHB1dC5EaXZfYihsZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yNC5wcm90b3R5cGUuTm9ybWFsaXplX2IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMuTGVuZ3RoKCk7XHJcbiAgICAgICAgdGhpcy5EaXZfYihsZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBWZWN0b3I0O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBWZWN0b3I0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVmVjdG9yM18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9NYXRoL1ZlY3RvcjNcIikpO1xyXG52YXIgT2N0cmVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vT2N0cmVlXCIpKTtcclxudmFyIExheWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTGF5ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5vY3RyZWUgPSBuZXcgT2N0cmVlXzEuZGVmYXVsdCg2LCBuZXcgVmVjdG9yM18xLmRlZmF1bHQoLTMwLCAtMzAsIC0zMCksIG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgzMCwgMzAsIDMwKSk7XHJcbiAgICB9XHJcbiAgICBMYXllci5wcm90b3R5cGUuUmVnaXN0ID0gZnVuY3Rpb24gKGFyZ19yZWdpc3RPYmopIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vY3RyZWUuUmVnaXN0Q29sbGlzaW9uT2JqKGFyZ19yZWdpc3RPYmopO1xyXG4gICAgfTtcclxuICAgIExheWVyLnByb3RvdHlwZS5VblJlZ2lzdCA9IGZ1bmN0aW9uIChhcmdfSUQpIHtcclxuICAgICAgICB0aGlzLm9jdHJlZS5VblJlZ2lzdENvbGxpc2lvbk9iaihhcmdfSUQpO1xyXG4gICAgfTtcclxuICAgIExheWVyLnByb3RvdHlwZS5DaGVjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm9jdHJlZS5VcGRhdGUoKTtcclxuICAgICAgICB2YXIgbGlzdF9vYmpTdGFjayA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHZhciB2ZWNfY29sbGlzaW9uT2JqZWN0cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMub2N0cmVlLkNyZWF0ZUNvbGxpc2lvbk9iamVjdExpc3QoMCwgdmVjX2NvbGxpc2lvbk9iamVjdHMsIGxpc3Rfb2JqU3RhY2spO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codmVjX2NvbGxpc2lvbk9iamVjdHMpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVjX2NvbGxpc2lvbk9iamVjdHMubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgdmVjX2NvbGxpc2lvbk9iamVjdHNbaV0uSGl0Q2hlY2sodmVjX2NvbGxpc2lvbk9iamVjdHNbaSArIDFdKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTGF5ZXIucHJvdG90eXBlLlJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5vY3RyZWUuUmVsZWFzZSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMYXllcjtcclxufSgpKTtcclxudmFyIENvbGxpc2lvbk1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb2xsaXNpb25NYW5hZ2VyKCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5sYXllcnMucHVzaChuZXcgTGF5ZXIoKSk7XHJcbiAgICB9XHJcbiAgICBDb2xsaXNpb25NYW5hZ2VyLnByb3RvdHlwZS5SZWdpc3QgPSBmdW5jdGlvbiAoYXJnX3JlZ2lzdE9iaiwgbGF5ZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5sYXllcnMubGVuZ3RoIDw9IGxheWVyKSB7XHJcbiAgICAgICAgICAgIGxheWVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzW2xheWVyXS5SZWdpc3QoYXJnX3JlZ2lzdE9iaik7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uTWFuYWdlci5wcm90b3R5cGUuVW5SZWdpc3QgPSBmdW5jdGlvbiAoYXJnX0lELCBsYXllcikge1xyXG4gICAgICAgIGlmICh0aGlzLmxheWVycy5sZW5ndGggPD0gbGF5ZXIpIHtcclxuICAgICAgICAgICAgbGF5ZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxheWVyc1tsYXllcl0uVW5SZWdpc3QoYXJnX0lEKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25NYW5hZ2VyLnByb3RvdHlwZS5BZGRMYXllciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxheWVycy5wdXNoKG5ldyBMYXllcigpKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25NYW5hZ2VyLnByb3RvdHlwZS5DaGVjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChsYXllcikgeyByZXR1cm4gbGF5ZXIuQ2hlY2soKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uTWFuYWdlci5wcm90b3R5cGUuUmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChsYXllcikgeyByZXR1cm4gbGF5ZXIuUmVsZWFzZSgpOyB9KTtcclxuICAgICAgICB0aGlzLmxheWVycy5sZW5ndGggPSAwO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb2xsaXNpb25NYW5hZ2VyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDb2xsaXNpb25NYW5hZ2VyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ29sbGlzaW9uT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29sbGlzaW9uT2JqZWN0KGFyZ19vYmosIGFyZ19wcmltKSB7XHJcbiAgICAgICAgdGhpcy5wX2NlbGwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub2JqZWN0ID0gYXJnX29iajtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvblByaW1pdGl2ZSA9IGFyZ19wcmltO1xyXG4gICAgfVxyXG4gICAgQ29sbGlzaW9uT2JqZWN0LnByb3RvdHlwZS5SZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucF9jZWxsID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5zaHBfbmV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLnNocF9uZXh0LnNocF9iZWYgPSB0aGlzLnNocF9iZWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNocF9iZWYpIHtcclxuICAgICAgICAgICAgdGhpcy5zaHBfYmVmLnNocF9uZXh0ID0gdGhpcy5zaHBfbmV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wX2NlbGwuT25SZW1vdmUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zaHBfbmV4dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zaHBfYmVmID0gbnVsbDtcclxuICAgICAgICB0aGlzLnBfY2VsbCA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uT2JqZWN0LnByb3RvdHlwZS5SZWdpc3RDZWxsID0gZnVuY3Rpb24gKGFyZ19wQ2VsbCkge1xyXG4gICAgICAgIHRoaXMucF9jZWxsID0gYXJnX3BDZWxsO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbk9iamVjdC5wcm90b3R5cGUuR2V0QmVmT2JqID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNocF9iZWY7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uT2JqZWN0LnByb3RvdHlwZS5HZXROZXh0T2JqID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNocF9uZXh0O1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbk9iamVjdC5wcm90b3R5cGUuVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uUHJpbWl0aXZlLlVwZGF0ZSgpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbk9iamVjdC5wcm90b3R5cGUuSGl0Q2hlY2sgPSBmdW5jdGlvbiAoYXJnX2NvbGxpc2lvbk9iamVjdCkge1xyXG4gICAgICAgIGlmIChhcmdfY29sbGlzaW9uT2JqZWN0LmNvbGxpc2lvblByaW1pdGl2ZS5Jc0hpdCh0aGlzLmNvbGxpc2lvblByaW1pdGl2ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5vYmplY3QuSGl0KGFyZ19jb2xsaXNpb25PYmplY3Qub2JqZWN0KTtcclxuICAgICAgICAgICAgYXJnX2NvbGxpc2lvbk9iamVjdC5vYmplY3QuSGl0KHRoaXMub2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbGxpc2lvbk9iamVjdDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ29sbGlzaW9uT2JqZWN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgT2N0Q2VsbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE9jdENlbGwoKSB7XHJcbiAgICB9XHJcbiAgICBPY3RDZWxsLnByb3RvdHlwZS5SZWxlYXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnNocF9oZWFkICE9IG51bGwgJiYgdGhpcy5zaHBfaGVhZC5zaHBfbmV4dCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hwX2hlYWQgPSB0aGlzLnNocF9oZWFkLnNocF9uZXh0O1xyXG4gICAgICAgICAgICB0aGlzLnNocF9oZWFkLnNocF9iZWYgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNocF9oZWFkID0gbnVsbDtcclxuICAgIH07XHJcbiAgICBPY3RDZWxsLnByb3RvdHlwZS5SZWdpc3RPYmplY3QgPSBmdW5jdGlvbiAoYXJnX29iaikge1xyXG4gICAgICAgIGlmIChhcmdfb2JqLnBfY2VsbCA9PSB0aGlzIHx8IChhcmdfb2JqID09IG51bGwpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgYXJnX29iai5SZW1vdmUoKTtcclxuICAgICAgICBhcmdfb2JqLnBfY2VsbCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hwX2hlYWQpIHtcclxuICAgICAgICAgICAgYXJnX29iai5zaHBfbmV4dCA9IHRoaXMuc2hwX2hlYWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2hwX2hlYWQuc2hwX2JlZiA9IGFyZ19vYmo7XHJcbiAgICAgICAgICAgIHRoaXMuc2hwX2hlYWQgPSBhcmdfb2JqO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNocF9oZWFkID0gYXJnX29iajtcclxuICAgIH07XHJcbiAgICBPY3RDZWxsLnByb3RvdHlwZS5PblJlbW92ZSA9IGZ1bmN0aW9uIChhcmdfcmVtb3ZlKSB7XHJcbiAgICAgICAgaWYgKCh0aGlzLnNocF9oZWFkID09IGFyZ19yZW1vdmUpICYmIGFyZ19yZW1vdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaHBfaGVhZCA9IHRoaXMuc2hwX2hlYWQuc2hwX25leHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE9jdENlbGwucHJvdG90eXBlLkdldEhlYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hwX2hlYWQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9jdENlbGw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE9jdENlbGw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBWZWN0b3IzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL01hdGgvVmVjdG9yM1wiKSk7XHJcbnZhciBJRF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9JRFwiKSk7XHJcbnZhciBPY3RDZWxsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vT2N0Q2VsbFwiKSk7XHJcbnZhciBNYXhMZXZlbCA9IDc7XHJcbnZhciBMRVZFTF9GTEFHID0gWygxMTEgPDwgMCksICgxMTEgPDwgMyksICgxMTEgPDwgNiksICgxMTEgPDwgOSksICgxMTEgPDwgMTIpLCAoMTExIDw8IDE1KSwgKDExMSA8PCAxOCksICgxMTEgPDwgMjEpLCAoMTExIDw8IDI0KSwgKDExMSA8PCAyNyksXTtcclxudmFyIE9jdHJlZUhlbHBlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE9jdHJlZUhlbHBlcigpIHtcclxuICAgIH1cclxuICAgIE9jdHJlZUhlbHBlci5CaXRTZXBhcmF0ZSA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgdmFyIHMgPSBuO1xyXG4gICAgICAgIHMgPSAocyB8IHMgPDwgOCkgJiAweDAwMDBmMDBmO1xyXG4gICAgICAgIHMgPSAocyB8IHMgPDwgNCkgJiAweDAwMGMzMGMzO1xyXG4gICAgICAgIHMgPSAocyB8IHMgPDwgMikgJiAweDAwMjQ5MjQ5O1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfTtcclxuICAgIE9jdHJlZUhlbHBlci5HZXRMZXZlbCA9IGZ1bmN0aW9uIChhcmdfZmxhZywgYXJnX2xldmVsKSB7XHJcbiAgICAgICAgdmFyIG91dCA9IDE7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdfbGV2ZWw7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgQ2hlY2sgPSAoYXJnX2ZsYWcgPj4gKGkgKiAzKSkgJiAweDc7XHJcbiAgICAgICAgICAgIGlmIChDaGVjayAhPSAwKVxyXG4gICAgICAgICAgICAgICAgb3V0ID0gaSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9jdHJlZUhlbHBlcjtcclxufSgpKTtcclxuO1xyXG52YXIgQ29sbGlzaW9uTGF5ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb2xsaXNpb25MYXllcihhcmdfbGV2ZWwsIGFyZ19taW5Qb3MsIGFyZ19tYXhQb3MpIHtcclxuICAgICAgICB0aGlzLk9jdFBvdyA9IEFycmF5KE1heExldmVsICsgMSk7XHJcbiAgICAgICAgdGhpcy5PY3RQb3dTZXZlbkRldmlkZWQgPSBBcnJheShNYXhMZXZlbCArIDEpO1xyXG4gICAgICAgIGlmIChhcmdfbGV2ZWwgPD0gTWF4TGV2ZWwpXHJcbiAgICAgICAgICAgIHRoaXMubWF4TGV2ZWwgPSBhcmdfbGV2ZWw7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF4TGV2ZWwgPSBNYXhMZXZlbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yYW5nZU1heCA9IGFyZ19tYXhQb3M7XHJcbiAgICAgICAgdGhpcy5yYW5nZU1pbiA9IGFyZ19taW5Qb3M7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMucmFuZ2VNYXguU3ViKHRoaXMucmFuZ2VNaW4pO1xyXG4gICAgICAgIHRoaXMuT2N0UG93WzBdID0gMTtcclxuICAgICAgICB0aGlzLk9jdFBvd1NldmVuRGV2aWRlZFswXSA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBNYXhMZXZlbCArIDE7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLk9jdFBvd1tpXSA9IHRoaXMuT2N0UG93W2kgLSAxXSAqIDg7XHJcbiAgICAgICAgICAgIHRoaXMuT2N0UG93U2V2ZW5EZXZpZGVkW2ldID0gKHRoaXMuT2N0UG93W2ldIC0gMSkgLyA3O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1heENlbGxOdW0gPSB0aGlzLk9jdFBvd1NldmVuRGV2aWRlZFtNYXhMZXZlbCAtIDFdO1xyXG4gICAgICAgIHRoaXMudW5pdCA9IHRoaXMud2lkdGguRGl2KCgxIDw8IHRoaXMubWF4TGV2ZWwpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVuaXQpO1xyXG4gICAgICAgIHRoaXMuYXJ5X2NlbGxzID0gbmV3IEFycmF5KHRoaXMubWF4Q2VsbE51bSk7XHJcbiAgICAgICAgdGhpcy5DcmVhdGVDZWxsKDApO1xyXG4gICAgICAgIHRoaXMudmVjX3NocF9jb2xsaXNpb25PYmpzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy52ZWNfaW5kZXggPSBuZXcgQXJyYXkoKTtcclxuICAgIH1cclxuICAgIENvbGxpc2lvbkxheWVyLnByb3RvdHlwZS5SZWxlYXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudmVjX3NocF9jb2xsaXNpb25PYmpzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy52ZWNfaW5kZXgubGVuZ3RoID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWF4Q2VsbE51bTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFyeV9jZWxsc1tpXSlcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJ5X2NlbGxzW2ldLlJlbGVhc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcnlfY2VsbHMubGVuZ3RoID0gMDtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25MYXllci5wcm90b3R5cGUuUmVnaXN0Q29sbGlzaW9uT2JqID0gZnVuY3Rpb24gKGFyZ19jb2xsaXNpb25PYmopIHtcclxuICAgICAgICB2YXIgaWQgPSBuZXcgSURfMS5kZWZhdWx0KHRoaXMudmVjX3NocF9jb2xsaXNpb25PYmpzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIHRoaXMudmVjX3NocF9jb2xsaXNpb25PYmpzLnB1c2goYXJnX2NvbGxpc2lvbk9iaik7XHJcbiAgICAgICAgdGhpcy52ZWNfaW5kZXgucHVzaChpZCk7XHJcbiAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbkxheWVyLnByb3RvdHlwZS5VblJlZ2lzdENvbGxpc2lvbk9iaiA9IGZ1bmN0aW9uIChhcmdfaW5kZXgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSBhcmdfaW5kZXgubnVtO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSB0aGlzLnZlY19zaHBfY29sbGlzaW9uT2Jqcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZlY19zaHBfY29sbGlzaW9uT2Jqc1tpbmRleF0uUmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy52ZWNfc2hwX2NvbGxpc2lvbk9ianMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLnZlY19pbmRleC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBpbmRleCAtIDE7IGkgPCB0aGlzLnZlY19pbmRleC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZlY19pbmRleFtpXS5udW0tLTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uTGF5ZXIucHJvdG90eXBlLkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uTGF5ZXIucHJvdG90eXBlLlVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLlJlZ2lzdE9jdHJlZSgpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbkxheWVyLnByb3RvdHlwZS5SZWdpc3RPY3RyZWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaXRyID0gMDsgaXRyIDwgdGhpcy52ZWNfc2hwX2NvbGxpc2lvbk9ianMubGVuZ3RoOyBpdHIrKykge1xyXG4gICAgICAgICAgICB2YXIgbWluUG9pbnQgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgMCksIG1heFBvaW50ID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnZlY19zaHBfY29sbGlzaW9uT2Jqc1tpdHJdLmNvbGxpc2lvblByaW1pdGl2ZS5HZXRNYXhQb2ludEFuZE1pblBvaW50KG1heFBvaW50LCBtaW5Qb2ludCk7XHJcbiAgICAgICAgICAgIHZhciBjZWxsTnVtID0gdGhpcy5HZXRNb3J0b25TcGFjZShtaW5Qb2ludCwgbWF4UG9pbnQpO1xyXG4gICAgICAgICAgICBpZiAoY2VsbE51bSA+IHRoaXMubWF4Q2VsbE51bSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmFyeV9jZWxsc1tjZWxsTnVtXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5DcmVhdGVDZWxsKGNlbGxOdW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYXJ5X2NlbGxzW2NlbGxOdW1dLlJlZ2lzdE9iamVjdCh0aGlzLnZlY19zaHBfY29sbGlzaW9uT2Jqc1tpdHJdKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uTGF5ZXIucHJvdG90eXBlLkdldDNETW9ydG9uTnVtYmVyID0gZnVuY3Rpb24gKHgsIHksIHopIHtcclxuICAgICAgICByZXR1cm4gT2N0cmVlSGVscGVyLkJpdFNlcGFyYXRlKHgpIHwgT2N0cmVlSGVscGVyLkJpdFNlcGFyYXRlKHkpIDw8IDEgfCBPY3RyZWVIZWxwZXIuQml0U2VwYXJhdGUoeikgPDwgMjtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25MYXllci5wcm90b3R5cGUuR2V0M0RNb3J0b25OdW1iZXJfVmVjMyA9IGZ1bmN0aW9uIChhcmdfcG9zaXRpb24pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5HZXQzRE1vcnRvbk51bWJlcigoKGFyZ19wb3NpdGlvbi54IC0gdGhpcy5yYW5nZU1pbi54KSAvIHRoaXMudW5pdC54KSwgKChhcmdfcG9zaXRpb24ueSAtIHRoaXMucmFuZ2VNaW4ueSkgLyB0aGlzLnVuaXQueSksICgoYXJnX3Bvc2l0aW9uLnogLSB0aGlzLnJhbmdlTWluLnopIC8gdGhpcy51bml0LnopKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25MYXllci5wcm90b3R5cGUuR2V0TW9ydG9uU3BhY2UgPSBmdW5jdGlvbiAoYXJnX21pblBvcywgYXJnX21heFBvcykge1xyXG4gICAgICAgIHZhciBtYXhTcGFjZSA9IHRoaXMuR2V0M0RNb3J0b25OdW1iZXJfVmVjMyhhcmdfbWF4UG9zKTtcclxuICAgICAgICB2YXIgbGV2ZWxDaGVja0ZsYWcgPSB0aGlzLkdldDNETW9ydG9uTnVtYmVyX1ZlYzMoYXJnX21pblBvcykgXiBtYXhTcGFjZTtcclxuICAgICAgICB2YXIgbGV2ZWwgPSBPY3RyZWVIZWxwZXIuR2V0TGV2ZWwobGV2ZWxDaGVja0ZsYWcsIHRoaXMubWF4TGV2ZWwpO1xyXG4gICAgICAgIHZhciBudW0gPSAobWF4U3BhY2UgPj4gKChsZXZlbCkgKiAzKSk7XHJcbiAgICAgICAgbnVtICs9IHRoaXMuT2N0UG93U2V2ZW5EZXZpZGVkW3RoaXMubWF4TGV2ZWwgLSBsZXZlbF07XHJcbiAgICAgICAgcmV0dXJuIG51bTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25MYXllci5wcm90b3R5cGUuQ3JlYXRlQ29sbGlzaW9uT2JqZWN0TGlzdCA9IGZ1bmN0aW9uIChhcmdfY2VsbE51bSwgYXJnX291dHB1dCwgYXJnX3N0YWNrKSB7XHJcbiAgICAgICAgdmFyIG9iakl0ciA9IHRoaXMuYXJ5X2NlbGxzW2FyZ19jZWxsTnVtXS5HZXRIZWFkKCk7XHJcbiAgICAgICAgLy92YXIgaT0wO1xyXG4gICAgICAgIHdoaWxlIChvYmpJdHIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgck9iakl0ciA9IG9iakl0ci5zaHBfbmV4dDtcclxuICAgICAgICAgICAgd2hpbGUgKHJPYmpJdHIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy8g6KGd56qB44Oq44K544OI5L2c5oiQXHJcbiAgICAgICAgICAgICAgICBhcmdfb3V0cHV0LnB1c2gob2JqSXRyKTtcclxuICAgICAgICAgICAgICAgIGFyZ19vdXRwdXQucHVzaChyT2JqSXRyKTtcclxuICAgICAgICAgICAgICAgIHJPYmpJdHIgPSByT2JqSXRyLnNocF9uZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOKRoSDooZ3nqoHjgrnjgr/jg4Pjgq/jgajjga7ooZ3nqoHjg6rjgrnjg4jkvZzmiJBcclxuICAgICAgICAgICAgZm9yICh2YXIgaXRyID0gMDsgaXRyIDwgYXJnX3N0YWNrLmxlbmd0aDsgaXRyKyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ19vdXRwdXQucHVzaChvYmpJdHIpO1xyXG4gICAgICAgICAgICAgICAgYXJnX291dHB1dC5wdXNoKGFyZ19zdGFja1tpdHJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYmpJdHIgPSBvYmpJdHIuc2hwX25leHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coaSk7XHJcbiAgICAgICAgdmFyIENoaWxkRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIC8vIOKRoiDlrZDnqbrplpNcclxuICAgICAgICB2YXIgT2JqTnVtID0gMDtcclxuICAgICAgICB2YXIgaSwgbmV4dENlbGxOdW07XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICBuZXh0Q2VsbE51bSA9IGFyZ19jZWxsTnVtICogOCArIDEgKyBpO1xyXG4gICAgICAgICAgICBpZiAobmV4dENlbGxOdW0gPCB0aGlzLm1heENlbGxOdW0gJiYgdGhpcy5hcnlfY2VsbHNbYXJnX2NlbGxOdW0gKiA4ICsgMSArIGldKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUNoaWxkRmxhZykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iakl0ciA9IHRoaXMuYXJ5X2NlbGxzW2FyZ19jZWxsTnVtXS5HZXRIZWFkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG9iakl0cikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdfc3RhY2sucHVzaChvYmpJdHIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmpOdW0rKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqSXRyID0gb2JqSXRyLnNocF9uZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIENoaWxkRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNyZWF0ZUNvbGxpc2lvbk9iamVjdExpc3QoYXJnX2NlbGxOdW0gKiA4ICsgMSArIGksIGFyZ19vdXRwdXQsIGFyZ19zdGFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g4pGkIOOCueOCv+ODg+OCr+OBi+OCieOCquODluOCuOOCp+OCr+ODiOOCkuWkluOBmVxyXG4gICAgICAgIGlmIChDaGlsZEZsYWcpIHtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IE9iak51bTsgaSsrKVxyXG4gICAgICAgICAgICAgICAgYXJnX3N0YWNrLnBvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25MYXllci5wcm90b3R5cGUuQ3JlYXRlQ2VsbCA9IGZ1bmN0aW9uIChhcmdfY2VsbE51bSkge1xyXG4gICAgICAgIHdoaWxlICghdGhpcy5hcnlfY2VsbHNbYXJnX2NlbGxOdW1dKSB7XHJcbiAgICAgICAgICAgIC8vIOaMh+WumuOBruimgee0oOeVquWPt+OBq+epuumWk+OCkuaWsOimj+S9nOaIkFxyXG4gICAgICAgICAgICB0aGlzLmFyeV9jZWxsc1thcmdfY2VsbE51bV0gPSBuZXcgT2N0Q2VsbF8xLmRlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy8g6Kaq56m66ZaT44Gr44K444Oj44Oz44OXXHJcbiAgICAgICAgICAgIGFyZ19jZWxsTnVtID0gKGFyZ19jZWxsTnVtIC0gMSkgPj4gMztcclxuICAgICAgICAgICAgaWYgKGFyZ19jZWxsTnVtID49IHRoaXMubWF4Q2VsbE51bSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29sbGlzaW9uTGF5ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENvbGxpc2lvbkxheWVyO1xyXG47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBHYW1lVGltZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWVUaW1lKCkge1xyXG4gICAgICAgIHRoaXMudGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHRoaXMuYWJzRnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMucmVsRnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMudGltZVBhc2UgPSAxLjA7XHJcbiAgICB9XHJcbiAgICBHYW1lVGltZS5wcm90b3R5cGUuQ291bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hYnNGcmFtZSsrO1xyXG4gICAgICAgIHRoaXMucmVsRnJhbWUgKz0gdGhpcy50aW1lUGFzZTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZVRpbWUucHJvdG90eXBlLCBcImVsYXBzZWRUaW1lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGltZSAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lVGltZS5wcm90b3R5cGUsIFwiQWJzb2x1dGVGcmFtZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFic0ZyYW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lVGltZS5wcm90b3R5cGUsIFwiUmVsYXRpdmVGcmFtZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbEZyYW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lVGltZS5wcm90b3R5cGUsIFwiVGltZVBhc2VcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aW1lUGFzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGFyZ190aW1lUGFzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVQYXNlID0gYXJnX3RpbWVQYXNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBHYW1lVGltZTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZVRpbWU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBJRCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIElEKGFyZ19udW0pIHtcclxuICAgICAgICB0aGlzLm51bSA9IGFyZ19udW07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSUQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IElEO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgTW9kZWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vR3JhcGhpYy9Nb2RlbFwiKSk7XHJcbnZhciBSZXNvdXJjZUNyZWF0ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVG9vbC9SZXNvdXJjZUNyZWF0ZXJcIikpO1xyXG52YXIgR2VvbWV0cnlHZW5lcmF0b3JfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVG9vbC9HZW9tZXRyeUdlbmVyYXRvclwiKSk7XHJcbnZhciBUZXh0TW9kZWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vR3JhcGhpYy9UZXh0TW9kZWxcIikpO1xyXG52YXIgQ2hhck1hcCA9IG5ldyBNYXAoW1xyXG4gICAgW1wiIFwiLCAwXSwgW1wiIVwiLCAxXSwgWydcIicsIDJdLCBbXCIjXCIsIDNdLCBbXCIkXCIsIDRdLCBbXCIlXCIsIDVdLCBbXCImXCIsIDZdLCBbXCInXCIsIDddLCBbXCIoXCIsIDhdLCBbXCIpXCIsIDldLFxyXG4gICAgW1wiKlwiLCAxMF0sIFtcIitcIiwgMTFdLCBbJywnLCAxMl0sIFtcIi1cIiwgMTNdLCBbXCIuXCIsIDE0XSwgW1wiL1wiLCAxNV0sIFtcIjBcIiwgMTZdLCBbXCIxXCIsIDE3XSwgW1wiMlwiLCAxOF0sIFtcIjNcIiwgMTldLFxyXG4gICAgW1wiNFwiLCAyMF0sIFtcIjVcIiwgMjFdLCBbJzYnLCAyMl0sIFtcIjdcIiwgMjNdLCBbXCI4XCIsIDI0XSwgW1wiOVwiLCAyNV0sIFtcIjpcIiwgMjZdLCBbXCI7XCIsIDI3XSwgW1wiPFwiLCAyOF0sIFtcIj1cIiwgMjldLFxyXG4gICAgW1wiPlwiLCAzMF0sIFtcIj9cIiwgMzFdLCBbJ0AnLCAzMl0sIFtcIkFcIiwgMzNdLCBbXCJCXCIsIDM0XSwgW1wiQ1wiLCAzNV0sIFtcIkRcIiwgMzZdLCBbXCJFXCIsIDM3XSwgW1wiRlwiLCAzOF0sIFtcIkdcIiwgMzldLFxyXG4gICAgW1wiSFwiLCA0MF0sIFtcIklcIiwgNDFdLCBbJ0onLCA0Ml0sIFtcIktcIiwgNDNdLCBbXCJMXCIsIDQ0XSwgW1wiTVwiLCA0NV0sIFtcIk5cIiwgNDZdLCBbXCJPXCIsIDQ3XSwgW1wiUFwiLCA0OF0sIFtcIlFcIiwgNDldLFxyXG4gICAgW1wiUlwiLCA1MF0sIFtcIlNcIiwgNTFdLCBbJ1QnLCA1Ml0sIFtcIlVcIiwgNTNdLCBbXCJWXCIsIDU0XSwgW1wiV1wiLCA1NV0sIFtcIlhcIiwgNTZdLCBbXCJZXCIsIDU3XSwgW1wiWlwiLCA1OF0sIFtcIltcIiwgNTldLFxyXG4gICAgW1wiXFxcXFwiLCA2MF0sIFtcIl1cIiwgNjFdLCBbJ14nLCA2Ml0sIFtcIl9cIiwgNjNdLCBbXCJgXCIsIDY0XSwgW1wiYVwiLCA2NV0sIFtcImJcIiwgNjZdLCBbXCJjXCIsIDY3XSwgW1wiZFwiLCA2OF0sIFtcImVcIiwgNjldLFxyXG4gICAgW1wiZlwiLCA3MF0sIFtcImdcIiwgNzFdLCBbJ2gnLCA3Ml0sIFtcImlcIiwgNzNdLCBbXCJqXCIsIDc0XSwgW1wia1wiLCA3NV0sIFtcImxcIiwgNzZdLCBbXCJtXCIsIDc3XSwgW1wiblwiLCA3OF0sIFtcIm9cIiwgNzldLFxyXG4gICAgW1wicFwiLCA4MF0sIFtcInFcIiwgODFdLCBbJ3InLCA4Ml0sIFtcInNcIiwgODNdLCBbXCJ0XCIsIDg0XSwgW1widVwiLCA4NV0sIFtcInZcIiwgODZdLCBbXCJ3XCIsIDg3XSwgW1wieFwiLCA4OF0sIFtcInlcIiwgODldLFxyXG4gICAgW1wielwiLCA5MF0sIFtcIntcIiwgOTldLCBbJ3wnLCA5Ml0sIFtcIn1cIiwgOTNdLCBbXCJ+XCIsIDk0XSxcclxuXSk7XHJcbmZ1bmN0aW9uIENoYXJDaGFuZ2UoYXJnX25hbWUpIHtcclxuICAgIHJldHVybiBDaGFyTWFwLmdldChhcmdfbmFtZSk7XHJcbn1cclxudmFyIE1vZGVsQ3JlYXRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1vZGVsQ3JlYXRlcihhcmdfZ2FyYXBoaWNEZXZpY2UsIGFyZ19yZXNvdXJjZUNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2VDb250YWluZXIgPSBhcmdfcmVzb3VyY2VDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlID0gYXJnX2dhcmFwaGljRGV2aWNlO1xyXG4gICAgICAgIHRoaXMuZm9udFVWQ29udGFpbmVyID0gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG4gICAgTW9kZWxDcmVhdGVyLnByb3RvdHlwZS5DcmVhdGVNb2RlbCA9IGZ1bmN0aW9uIChpc0xpZ2h0aW5nLCBpc0JpbGxCb2FyZCwgZ2VvbWV0cnlQYXRoLCBtYXRlcmlhbFBhdGgsIHNoYWRlclBhdGgsIGFyZ190cmFuc2Zvcm0pIHtcclxuICAgICAgICB2YXIgbW9kZWwgPSBuZXcgTW9kZWxfMS5kZWZhdWx0KGlzTGlnaHRpbmcsIGlzQmlsbEJvYXJkKTtcclxuICAgICAgICBtb2RlbC5Jbml0aWFsaXplX2dlb20odGhpcy5ncmFwaGljRGV2aWNlLCB0aGlzLnJlc291cmNlQ29udGFpbmVyLkdldEdlb21ldHJ5KGdlb21ldHJ5UGF0aCksIHRoaXMucmVzb3VyY2VDb250YWluZXIuR2V0TWF0ZXJpYWwobWF0ZXJpYWxQYXRoKSwgdGhpcy5yZXNvdXJjZUNvbnRhaW5lci5HZXRTaGFkZXIoc2hhZGVyUGF0aCksIGFyZ190cmFuc2Zvcm0pO1xyXG4gICAgICAgIHJldHVybiBtb2RlbDtcclxuICAgIH07XHJcbiAgICBNb2RlbENyZWF0ZXIucHJvdG90eXBlLkNyZWF0ZU1vZGVsRnJvbU1lc2ggPSBmdW5jdGlvbiAoaXNMaWdodGluZywgaXNCaWxsQm9hcmQsIG1lc2hQYXRoLCBzaGFkZXJQYXRoLCBhcmdfdHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdmFyIG1vZGVsID0gbmV3IE1vZGVsXzEuZGVmYXVsdChpc0xpZ2h0aW5nLCBpc0JpbGxCb2FyZCk7XHJcbiAgICAgICAgbW9kZWwuSW5pdGlhbGl6ZV9tZXNoKHRoaXMuZ3JhcGhpY0RldmljZSwgdGhpcy5yZXNvdXJjZUNvbnRhaW5lci5HZXRNZXNoKG1lc2hQYXRoKSwgdGhpcy5yZXNvdXJjZUNvbnRhaW5lci5HZXRTaGFkZXIoc2hhZGVyUGF0aCksIGFyZ190cmFuc2Zvcm0pO1xyXG4gICAgICAgIHJldHVybiBtb2RlbDtcclxuICAgIH07XHJcbiAgICBNb2RlbENyZWF0ZXIucHJvdG90eXBlLkNyZWF0ZU1vZGVsRnJvbVRleHQgPSBmdW5jdGlvbiAoaXNCaWxsQm9hcmQsIGFyZ19jb2xvciwgdGV4dCwgZm9udFRleHR1cmVQYXRoLCBzaGFkZXJQYXRoLCBhcmdfdHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdmFyIG1vZGVsID0gbmV3IFRleHRNb2RlbF8xLmRlZmF1bHQoaXNCaWxsQm9hcmQpO1xyXG4gICAgICAgIHZhciBtYXRlcmlhbE5hbWUgPSBhcmdfY29sb3IuZGF0YVswXSArIFwiXCIgKyBhcmdfY29sb3IuZGF0YVsxXSArIFwiXCIgKyBhcmdfY29sb3IuZGF0YVsyXSArIFwiXCIgKyBhcmdfY29sb3IuZGF0YVszXSArIFwiXCIgKyBmb250VGV4dHVyZVBhdGg7XHJcbiAgICAgICAgdmFyIG1hdGVyaWFsID0gdGhpcy5yZXNvdXJjZUNvbnRhaW5lci5HZXRNYXRlcmlhbChtYXRlcmlhbE5hbWUpO1xyXG4gICAgICAgIGlmIChtYXRlcmlhbCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsID0gdGhpcy5yZXNvdXJjZUNvbnRhaW5lci5BZGRNYXRlcmlhbChSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZU1hdGVyaWFsKGFyZ19jb2xvciwgdGhpcy5ncmFwaGljRGV2aWNlLCBbdGhpcy5yZXNvdXJjZUNvbnRhaW5lci5HZXRUZXh0dXJlKGZvbnRUZXh0dXJlUGF0aCldKSwgbWF0ZXJpYWxOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGdlb21ldHJ5UGF0aCA9IFwiVGV4dDpcIiArIHRleHQubGVuZ3RoO1xyXG4gICAgICAgIHZhciBnZW9tZXRyeSA9IHRoaXMucmVzb3VyY2VDb250YWluZXIuR2V0R2VvbWV0cnkoZ2VvbWV0cnlQYXRoKTtcclxuICAgICAgICBpZiAoZ2VvbWV0cnkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBnZW9tZXRyeSA9IHRoaXMucmVzb3VyY2VDb250YWluZXIuQWRkR2VvbWV0cnkoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVHZW9tZXRyeShHZW9tZXRyeUdlbmVyYXRvcl8xLmRlZmF1bHQuQ3JlYXRlVGV4dEdlb21ldHJ5KHRleHQubGVuZ3RoKSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpLCBnZW9tZXRyeVBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtb2RlbC5Jbml0aWFsaXplX2dlb20odGhpcy5ncmFwaGljRGV2aWNlLCBnZW9tZXRyeSwgbWF0ZXJpYWwsIHRoaXMucmVzb3VyY2VDb250YWluZXIuR2V0U2hhZGVyKHNoYWRlclBhdGgpLCBhcmdfdHJhbnNmb3JtKTtcclxuICAgICAgICB2YXIgdXYgPSB0aGlzLmZvbnRVVkNvbnRhaW5lclt0ZXh0XTtcclxuICAgICAgICBpZiAoIXV2KSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIHZhciB4VW5pdCA9ICgxLjAgLyAxMjguMCkgKiA3O1xyXG4gICAgICAgICAgICB2YXIgeVVuaXQgPSAxLjAgLyAxNC4wO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBudW0gPSBDaGFyQ2hhbmdlKHRleHRbaV0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSBudW0gJSAxODtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gTWF0aC5mbG9vcihudW0gLyAxOCk7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goeCAqIHhVbml0LCAoeSArIDEpICogeVVuaXQsICh4ICsgMSkgKiB4VW5pdCwgKHkgKyAxKSAqIHlVbml0LCB4ICogeFVuaXQsIHkgKiB5VW5pdCwgKHggKyAxKSAqIHhVbml0LCB5ICogeVVuaXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHV2ID0gdGhpcy5ncmFwaGljRGV2aWNlLkNyZWF0ZVZCTyhkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5mb250VVZDb250YWluZXJbdGV4dF0gPSB1djtcclxuICAgICAgICB9XHJcbiAgICAgICAgbW9kZWwuU2V0VVZEYXRhKHV2KTtcclxuICAgICAgICByZXR1cm4gbW9kZWw7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1vZGVsQ3JlYXRlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gTW9kZWxDcmVhdGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgSURfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9JRFwiKSk7XHJcbnZhciBMYXllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExheWVyKCkge1xyXG4gICAgICAgIHRoaXMuYXJ5X0lEcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuYXJ5X0lNb2RlbHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmFyeV9saWdodHMgPSBuZXcgQXJyYXkoKTtcclxuICAgIH1cclxuICAgIExheWVyLnByb3RvdHlwZS5TZXRMaWdodCA9IGZ1bmN0aW9uIChhcmdfbGlnaHQpIHtcclxuICAgICAgICB0aGlzLmFyeV9saWdodHMucHVzaChhcmdfbGlnaHQpO1xyXG4gICAgICAgIHJldHVybiBhcmdfbGlnaHQ7XHJcbiAgICB9O1xyXG4gICAgTGF5ZXIucHJvdG90eXBlLlJlZ2lzdCA9IGZ1bmN0aW9uIChhcmdfcmVnaXN0T2JqKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJ5X2xpZ2h0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGFyZ19yZWdpc3RPYmouU2V0TGlnaHQodGhpcy5hcnlfbGlnaHRzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcnlfSU1vZGVscy5wdXNoKGFyZ19yZWdpc3RPYmopO1xyXG4gICAgICAgIHZhciBpZCA9IG5ldyBJRF8xLmRlZmF1bHQodGhpcy5hcnlfSU1vZGVscy5sZW5ndGggLSAxKTtcclxuICAgICAgICB0aGlzLmFyeV9JRHMucHVzaChpZCk7XHJcbiAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgfTtcclxuICAgIExheWVyLnByb3RvdHlwZS5VblJlZ2lzdCA9IGZ1bmN0aW9uIChhcmdfSUQpIHtcclxuICAgICAgICB0aGlzLmFyeV9JTW9kZWxzLnNwbGljZShhcmdfSUQubnVtLCAxKTtcclxuICAgICAgICB0aGlzLmFyeV9JRHMuc3BsaWNlKGFyZ19JRC5udW0sIDEpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBhcmdfSUQubnVtIC0gMTsgaSA8IHRoaXMuYXJ5X0lEcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFyeV9JRHNbaV0ubnVtLS07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIExheWVyLnByb3RvdHlwZS5EcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYXJ5X0lNb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAoaW1vZGVsKSB7IHJldHVybiBpbW9kZWwuRHJhdygpOyB9KTtcclxuICAgIH07XHJcbiAgICBMYXllci5wcm90b3R5cGUuUmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFyeV9JRHMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmFyeV9JTW9kZWxzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5hcnlfbGlnaHRzLmxlbmd0aCA9IDA7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExheWVyO1xyXG59KCkpO1xyXG52YXIgUmVuZGVyZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZW5kZXJlcigpIHtcclxuICAgICAgICB0aGlzLmxheWVycyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLnB1c2gobmV3IExheWVyKCkpO1xyXG4gICAgfVxyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLlJlZ2lzdCA9IGZ1bmN0aW9uIChhcmdfcmVnaXN0T2JqLCBsYXllcikge1xyXG4gICAgICAgIGlmICh0aGlzLmxheWVycy5sZW5ndGggPD0gbGF5ZXIpIHtcclxuICAgICAgICAgICAgbGF5ZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5sYXllcnNbbGF5ZXJdLlJlZ2lzdChhcmdfcmVnaXN0T2JqKTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuVW5SZWdpc3QgPSBmdW5jdGlvbiAoYXJnX0lELCBsYXllcikge1xyXG4gICAgICAgIGlmICh0aGlzLmxheWVycy5sZW5ndGggPD0gbGF5ZXIpIHtcclxuICAgICAgICAgICAgbGF5ZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxheWVyc1tsYXllcl0uVW5SZWdpc3QoYXJnX0lEKTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuU2V0TGlnaHQgPSBmdW5jdGlvbiAoYXJnX2xpZ2h0LCBsYXllcikge1xyXG4gICAgICAgIGlmICh0aGlzLmxheWVycy5sZW5ndGggPD0gbGF5ZXIpIHtcclxuICAgICAgICAgICAgbGF5ZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5sYXllcnNbbGF5ZXJdLlNldExpZ2h0KGFyZ19saWdodCk7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLkFkZExheWVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLnB1c2gobmV3IExheWVyKCkpO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5EcmF3ID0gZnVuY3Rpb24gKGNhbWVyYSkge1xyXG4gICAgICAgIGlmICh0aGlzLmxheWVycy5sZW5ndGggPD0gY2FtZXJhLmxheWVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FtZXJhLkF0dGFjaCgpO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzW2NhbWVyYS5sYXllcl0uRHJhdygpO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5SZWxlYXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKGxheWVyKSB7IHJldHVybiBsYXllci5SZWxlYXNlKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZW5kZXJlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUmVuZGVyZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBSZXNvdXJjZUNyZWF0ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVG9vbC9SZXNvdXJjZUNyZWF0ZXJcIikpO1xyXG52YXIgUmVzb3VyY2VDb250YWluZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZXNvdXJjZUNvbnRhaW5lcigpIHtcclxuICAgICAgICB0aGlzLmlHZW9tZXRyaWVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuaU1hdGVyaWFscyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmlTaGFkZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuaVNvdW5kcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmlUZXh0dXJlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmlNZXNoZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nT2JqZWN0Q291bnQgPSAwO1xyXG4gICAgfVxyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLkdldFNoYWRlciA9IGZ1bmN0aW9uIChhcmdfa2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaVNoYWRlcnNbYXJnX2tleV0pXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlTaGFkZXJzW2FyZ19rZXldO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJrZXkgaXMgbm90IGZvbmQuXCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5BZGRTaGFkZXIgPSBmdW5jdGlvbiAoYXJnX3ZhbHVlLCBhcmdfa2V5KSB7XHJcbiAgICAgICAgdGhpcy5pU2hhZGVyc1thcmdfa2V5XSA9IGFyZ192YWx1ZTtcclxuICAgICAgICByZXR1cm4gYXJnX3ZhbHVlO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5SZW1vdmVTaGFkZXIgPSBmdW5jdGlvbiAoYXJnX2tleSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmlTaGFkZXJzW2FyZ19rZXldO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5HZXRUZXh0dXJlID0gZnVuY3Rpb24gKGFyZ19rZXkpIHtcclxuICAgICAgICBpZiAodGhpcy5pVGV4dHVyZXNbYXJnX2tleV0pXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlUZXh0dXJlc1thcmdfa2V5XTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5BZGRUZXh0dXJlID0gZnVuY3Rpb24gKGFyZ192YWx1ZSwgYXJnX2tleSkge1xyXG4gICAgICAgIHRoaXMuaVRleHR1cmVzW2FyZ19rZXldID0gYXJnX3ZhbHVlO1xyXG4gICAgICAgIGFyZ192YWx1ZS5TZXRDb250YWluZXIodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIGFyZ192YWx1ZTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuQWRkVGV4dHVyZUZyb21GaWxlID0gZnVuY3Rpb24gKGFyZ192YWx1ZSwgYXJnX2RldmljZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlUZXh0dXJlc1thcmdfdmFsdWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlUZXh0dXJlc1thcmdfdmFsdWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdGV4ID0gUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVUZXh0dXJlKGFyZ192YWx1ZSwgYXJnX2RldmljZSk7XHJcbiAgICAgICAgdGV4LlNldENvbnRhaW5lcih0aGlzKTtcclxuICAgICAgICB0aGlzLmlUZXh0dXJlc1thcmdfdmFsdWVdID0gdGV4O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlUZXh0dXJlc1thcmdfdmFsdWVdO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5SZW1vdmVUZXh0dXJlID0gZnVuY3Rpb24gKGFyZ19rZXkpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5pVGV4dHVyZXNbYXJnX2tleV07XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLkdldE1hdGVyaWFsID0gZnVuY3Rpb24gKGFyZ19rZXkpIHtcclxuICAgICAgICBpZiAodGhpcy5pTWF0ZXJpYWxzW2FyZ19rZXldKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pTWF0ZXJpYWxzW2FyZ19rZXldO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLkFkZE1hdGVyaWFsID0gZnVuY3Rpb24gKGFyZ192YWx1ZSwgYXJnX2tleSkge1xyXG4gICAgICAgIHRoaXMuaU1hdGVyaWFsc1thcmdfa2V5XSA9IGFyZ192YWx1ZTtcclxuICAgICAgICByZXR1cm4gYXJnX3ZhbHVlO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5BZGRNYXRlcmlhbEZyb21GaWxlID0gZnVuY3Rpb24gKGFyZ192YWx1ZSwgYXJnX2RldmljZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlNYXRlcmlhbHNbYXJnX3ZhbHVlXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pTWF0ZXJpYWxzW2FyZ192YWx1ZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaU1hdGVyaWFsc1thcmdfdmFsdWVdID0gUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVNYXRlcmlhbEZyb21GaWxlKGFyZ192YWx1ZSwgdGhpcywgYXJnX2RldmljZSk7XHJcbiAgICAgICAgdGhpcy5Mb2FkU3RhcnQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5pTWF0ZXJpYWxzW2FyZ192YWx1ZV07XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLlJlbW92ZU1hdGVyaWFsID0gZnVuY3Rpb24gKGFyZ19rZXkpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5pTWF0ZXJpYWxzW2FyZ19rZXldO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5HZXRHZW9tZXRyeSA9IGZ1bmN0aW9uIChhcmdfa2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaUdlb21ldHJpZXNbYXJnX2tleV0pXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlHZW9tZXRyaWVzW2FyZ19rZXldO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLkFkZEdlb21ldHJ5ID0gZnVuY3Rpb24gKGFyZ192YWx1ZSwgYXJnX2tleSkge1xyXG4gICAgICAgIHRoaXMuaUdlb21ldHJpZXNbYXJnX2tleV0gPSBhcmdfdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGFyZ192YWx1ZTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuUmVtb3ZlR2VvbWV0cnkgPSBmdW5jdGlvbiAoYXJnX2tleSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmlHZW9tZXRyaWVzW2FyZ19rZXldO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5HZXRNZXNoID0gZnVuY3Rpb24gKGFyZ19rZXkpIHtcclxuICAgICAgICBpZiAodGhpcy5pTWVzaGVzW2FyZ19rZXldKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pTWVzaGVzW2FyZ19rZXldO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLkFkZE1lc2ggPSBmdW5jdGlvbiAoYXJnX3ZhbHVlLCBhcmdfa2V5KSB7XHJcbiAgICAgICAgdGhpcy5pTWVzaGVzW2FyZ19rZXldID0gYXJnX3ZhbHVlO1xyXG4gICAgICAgIHJldHVybiBhcmdfdmFsdWU7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLlJlbW92ZU1lc2ggPSBmdW5jdGlvbiAoYXJnX2tleSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmlNZXNoZXNbYXJnX2tleV07XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLkdldFNvdW5kID0gZnVuY3Rpb24gKGFyZ19rZXkpIHtcclxuICAgICAgICBpZiAodGhpcy5pU291bmRzW2FyZ19rZXldKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pU291bmRzW2FyZ19rZXldO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLkFkZFNvdW5kID0gZnVuY3Rpb24gKGFyZ192YWx1ZSwgYXJnX2tleSkge1xyXG4gICAgICAgIHRoaXMuaVNvdW5kc1thcmdfa2V5XSA9IGFyZ192YWx1ZTtcclxuICAgICAgICByZXR1cm4gYXJnX3ZhbHVlO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5BZGRTb3VuZEZyb21GaWxlID0gZnVuY3Rpb24gKGFyZ192YWx1ZSwgYXJnX2tleSkge1xyXG4gICAgICAgIHRoaXMuaVNvdW5kc1thcmdfa2V5XSA9IFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlU291bmQoYXJnX3ZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5pU291bmRzW2FyZ19rZXldO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5SZW1vdmVTb3VuZCA9IGZ1bmN0aW9uIChhcmdfa2V5KSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuaVNvdW5kc1thcmdfa2V5XTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuTG9hZEVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmdPYmplY3RDb3VudC0tO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5Mb2FkU3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nT2JqZWN0Q291bnQrKztcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuR2V0TG9hZGluZ09iakNvdW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmdPYmplY3RDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2FkaW5nT2JqZWN0Q291bnQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlc291cmNlQ29udGFpbmVyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBSZXNvdXJjZUNvbnRhaW5lcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEZyYW1lQnVmZmVyVGV4dHVyZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZyYW1lQnVmZmVyVGV4dHVyZShhcmdfZ3JhcGhpY0RldmljZSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UgPSBhcmdfZ3JhcGhpY0RldmljZTtcclxuICAgICAgICAvLyDjg5Xjg6zjg7zjg6Djg5Djg4Pjg5XjgqHjga7nlJ/miJBcclxuICAgICAgICB0aGlzLmZyYW1lQnVmZmVyID0gdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuY3JlYXRlRnJhbWVidWZmZXIoKTtcclxuICAgICAgICAvLyDjg5Xjg6zjg7zjg6Djg5Djg4Pjg5XjgqHjgpJXZWJHTOOBq+ODkOOCpOODs+ODiVxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5GUkFNRUJVRkZFUiwgdGhpcy5mcmFtZUJ1ZmZlcik7XHJcbiAgICAgICAgLy8g5rex5bqm44OQ44OD44OV44Kh55So44Os44Oz44OA44O844OQ44OD44OV44Kh44Gu55Sf5oiQ44Go44OQ44Kk44Oz44OJXHJcbiAgICAgICAgdGhpcy5kZXB0aEJ1ZmZlciA9IHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmNyZWF0ZVJlbmRlcmJ1ZmZlcigpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmJpbmRSZW5kZXJidWZmZXIodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuUkVOREVSQlVGRkVSLCB0aGlzLmRlcHRoQnVmZmVyKTtcclxuICAgICAgICAvLyDjg6zjg7Pjg4Djg7zjg5Djg4Pjg5XjgqHjgpLmt7Hluqbjg5Djg4Pjg5XjgqHjgajjgZfjgaboqK3lrppcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5yZW5kZXJidWZmZXJTdG9yYWdlKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlJFTkRFUkJVRkZFUiwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuREVQVEhfQ09NUE9ORU5UMTYsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIC8vIOODleODrOODvOODoOODkOODg+ODleOCoeOBq+ODrOODs+ODgOODvOODkOODg+ODleOCoeOCkumWoumAo+S7mOOBkeOCi1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmZyYW1lYnVmZmVyUmVuZGVyYnVmZmVyKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LkZSQU1FQlVGRkVSLCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5ERVBUSF9BVFRBQ0hNRU5ULCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5SRU5ERVJCVUZGRVIsIHRoaXMuZGVwdGhCdWZmZXIpO1xyXG4gICAgICAgIC8vIOODleODrOODvOODoOODkOODg+ODleOCoeeUqOODhuOCr+OCueODgeODo+OBrueUn+aIkFxyXG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmNyZWF0ZVRleHR1cmUoKTtcclxuICAgICAgICAvLyDjg5Xjg6zjg7zjg6Djg5Djg4Pjg5XjgqHnlKjjga7jg4bjgq/jgrnjg4Hjg6PjgpLjg5DjgqTjg7Pjg4lcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5iaW5kVGV4dHVyZSh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5URVhUVVJFXzJELCB0aGlzLmRhdGEpO1xyXG4gICAgICAgIC8vIOODleODrOODvOODoOODkOODg+ODleOCoeeUqOOBruODhuOCr+OCueODgeODo+OBq+OCq+ODqeODvOeUqOOBruODoeODouODqumgmOWfn+OCkueiuuS/nVxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnRleEltYWdlMkQodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVEVYVFVSRV8yRCwgMCwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuUkdCQSwgd2lkdGgsIGhlaWdodCwgMCwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuUkdCQSwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVU5TSUdORURfQllURSwgbnVsbCk7XHJcbiAgICAgICAgLy8g44OG44Kv44K544OB44Oj44OR44Op44Oh44O844K/XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudGV4UGFyYW1ldGVyaSh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5URVhUVVJFXzJELCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5URVhUVVJFX01BR19GSUxURVIsIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LkxJTkVBUik7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudGV4UGFyYW1ldGVyaSh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5URVhUVVJFXzJELCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5URVhUVVJFX01JTl9GSUxURVIsIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LkxJTkVBUik7XHJcbiAgICAgICAgLy8g44OV44Os44O844Og44OQ44OD44OV44Kh44Gr44OG44Kv44K544OB44Oj44KS6Zai6YCj5LuY44GR44KLXHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuZnJhbWVidWZmZXJUZXh0dXJlMkQodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuRlJBTUVCVUZGRVIsIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LkNPTE9SX0FUVEFDSE1FTlQwLCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5URVhUVVJFXzJELCB0aGlzLmRhdGEsIDApO1xyXG4gICAgICAgIC8vIOWQhOeoruOCquODluOCuOOCp+OCr+ODiOOBruODkOOCpOODs+ODieOCkuino+mZpFxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmJpbmRUZXh0dXJlKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmJpbmRSZW5kZXJidWZmZXIodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuUkVOREVSQlVGRkVSLCBudWxsKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5iaW5kRnJhbWVidWZmZXIodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuRlJBTUVCVUZGRVIsIG51bGwpO1xyXG4gICAgfVxyXG4gICAgRnJhbWVCdWZmZXJUZXh0dXJlLnByb3RvdHlwZS5TZXRDb250YWluZXIgPSBmdW5jdGlvbiAocmVzb3VyY2VDb250YWluZXIpIHtcclxuICAgIH07XHJcbiAgICBGcmFtZUJ1ZmZlclRleHR1cmUucHJvdG90eXBlLkxvYWRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBGcmFtZUJ1ZmZlclRleHR1cmUucHJvdG90eXBlLklzTG9hZGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuICAgIEZyYW1lQnVmZmVyVGV4dHVyZS5wcm90b3R5cGUuSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBGcmFtZUJ1ZmZlclRleHR1cmUucHJvdG90eXBlLkF0dGFjaCA9IGZ1bmN0aW9uIChzbG90KSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuYWN0aXZlVGV4dHVyZSh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5URVhUVVJFMCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuYmluZFRleHR1cmUodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVEVYVFVSRV8yRCwgdGhpcy5kYXRhKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtMWkodGhpcy5ncmFwaGljRGV2aWNlLnNoYWRlci5HZXRUZXh0dXJlU2xvdChzbG90KSwgc2xvdCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEZyYW1lQnVmZmVyVGV4dHVyZTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRnJhbWVCdWZmZXJUZXh0dXJlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgR2VvbWV0cnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHZW9tZXRyeShkYXRhLCBpc1VWLCBpc05vcm1hbCwgaXNDb2xvciwgYXJnX2RldmljZSkge1xyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gYXJnX2RldmljZTtcclxuICAgICAgICB0aGlzLnZib0xpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLnZib0xpc3QucHVzaChhcmdfZGV2aWNlLkNyZWF0ZVZCTyhkYXRhLnApKTtcclxuICAgICAgICBpZiAoaXNVVikge1xyXG4gICAgICAgICAgICB0aGlzLnZib0xpc3QucHVzaChhcmdfZGV2aWNlLkNyZWF0ZVZCTyhkYXRhLnV2KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc05vcm1hbCkge1xyXG4gICAgICAgICAgICB0aGlzLnZib0xpc3QucHVzaChhcmdfZGV2aWNlLkNyZWF0ZVZCTyhkYXRhLm4pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzQ29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy52Ym9MaXN0LnB1c2goYXJnX2RldmljZS5DcmVhdGVWQk8oZGF0YS5jKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaWJvID0gYXJnX2RldmljZS5DcmVhdGVJQk8oZGF0YS5pKTtcclxuICAgICAgICB0aGlzLmluZGV4U2l6ZSA9IGRhdGEuaS5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5zdWJzZXQgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLnN1YnNldC5wdXNoKGRhdGEuaS5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgR2VvbWV0cnkucHJvdG90eXBlLkNoYW5nZVZCTyA9IGZ1bmN0aW9uICh2Ym8sIHNsb3QpIHtcclxuICAgICAgICB0aGlzLnZib0xpc3Rbc2xvdF0gPSB2Ym87XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnkucHJvdG90eXBlLkdldEluZGV4U2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmRleFNpemU7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnkucHJvdG90eXBlLkRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kZXZpY2UuU2V0VkJPKHRoaXMudmJvTGlzdCk7XHJcbiAgICAgICAgdGhpcy5kZXZpY2UuY29udGV4dC5iaW5kQnVmZmVyKHRoaXMuZGV2aWNlLmNvbnRleHQuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuaWJvKTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeS5wcm90b3R5cGUuU2V0U3Vic2V0ID0gZnVuY3Rpb24gKGFyZ19zdWJzZXQpIHtcclxuICAgICAgICB0aGlzLnN1YnNldCA9IGFyZ19zdWJzZXQ7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnkucHJvdG90eXBlLkdldFN1YlNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdWJzZXQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdlb21ldHJ5O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBHZW9tZXRyeTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEV4UGFyYW1ldGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRXhQYXJhbWV0ZXIoYXJnX3Nsb3QsIGFyZ19zaXplLCBhcmdfcGFyYW0pIHtcclxuICAgICAgICB0aGlzLnNsb3QgPSBhcmdfc2xvdDtcclxuICAgICAgICB0aGlzLnBhcmFtID0gYXJnX3BhcmFtO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IGFyZ19zaXplO1xyXG4gICAgICAgIHN3aXRjaCAoYXJnX3NpemUpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdGFjaEZ1bmMgPSB0aGlzLkF0YWNoMWY7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdGFjaEZ1bmMgPSB0aGlzLkF0YWNoMmY7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdGFjaEZ1bmMgPSB0aGlzLkF0YWNoM2Y7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdGFjaEZ1bmMgPSB0aGlzLkF0YWNoNGY7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxNjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYXRhY2hGdW5jID0gdGhpcy5BdGFjaE1hdDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEV4UGFyYW1ldGVyLnByb3RvdHlwZS5BdGFjaDFmID0gZnVuY3Rpb24gKGRldmljZSkge1xyXG4gICAgICAgIGRldmljZS5jb250ZXh0LnVuaWZvcm0xZnYoZGV2aWNlLnNoYWRlci51bmlmb3JtTG9jYXRpb25zW3RoaXMuc2xvdF0sIHRoaXMucGFyYW0uZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgRXhQYXJhbWV0ZXIucHJvdG90eXBlLkF0YWNoMmYgPSBmdW5jdGlvbiAoZGV2aWNlKSB7XHJcbiAgICAgICAgZGV2aWNlLmNvbnRleHQudW5pZm9ybTJmdihkZXZpY2Uuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbdGhpcy5zbG90XSwgdGhpcy5wYXJhbS5kYXRhKTtcclxuICAgIH07XHJcbiAgICBFeFBhcmFtZXRlci5wcm90b3R5cGUuQXRhY2gzZiA9IGZ1bmN0aW9uIChkZXZpY2UpIHtcclxuICAgICAgICBkZXZpY2UuY29udGV4dC51bmlmb3JtM2Z2KGRldmljZS5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1t0aGlzLnNsb3RdLCB0aGlzLnBhcmFtLmRhdGEpO1xyXG4gICAgfTtcclxuICAgIEV4UGFyYW1ldGVyLnByb3RvdHlwZS5BdGFjaDRmID0gZnVuY3Rpb24gKGRldmljZSkge1xyXG4gICAgICAgIGRldmljZS5jb250ZXh0LnVuaWZvcm00ZnYoZGV2aWNlLnNoYWRlci51bmlmb3JtTG9jYXRpb25zW3RoaXMuc2xvdF0sIHRoaXMucGFyYW0uZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgRXhQYXJhbWV0ZXIucHJvdG90eXBlLkF0YWNoTWF0ID0gZnVuY3Rpb24gKGRldmljZSkge1xyXG4gICAgICAgIGRldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYoZGV2aWNlLnNoYWRlci51bmlmb3JtTG9jYXRpb25zW3RoaXMuc2xvdF0sIGZhbHNlLCB0aGlzLnBhcmFtLmRhdGEpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBFeFBhcmFtZXRlcjtcclxufSgpKTtcclxudmFyIE1hdGVyaWFsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWF0ZXJpYWwoKSB7XHJcbiAgICB9XHJcbiAgICBNYXRlcmlhbC5wcm90b3R5cGUuU2V0UGFyYW1ldGVyID0gZnVuY3Rpb24gKGFyZ19hbWJpZW50LCBhcmdfZGV2aWNlLCBhcmdfYXJ5X3RleHR1cmUsIGFyZ19hcnlfZXhQYXJtcykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5hbWJpZW50Q29sb3IgPSBhcmdfYW1iaWVudDtcclxuICAgICAgICB0aGlzLmRldmljZSA9IGFyZ19kZXZpY2U7XHJcbiAgICAgICAgaWYgKGFyZ19hcnlfdGV4dHVyZSlcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlcyA9IGFyZ19hcnlfdGV4dHVyZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmV4UGFyYW1zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgaWYgKGFyZ19hcnlfZXhQYXJtcykge1xyXG4gICAgICAgICAgICBhcmdfYXJ5X2V4UGFybXMuZm9yZWFjaChmdW5jdGlvbiAocGFyYW0pIHsgcmV0dXJuIF90aGlzLkFkZEV4UGFyYW0ocGFyYW0ubiwgcGFyYW0ucywgcGFyYW0ucCk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBNYXRlcmlhbC5wcm90b3R5cGUuU2V0VGV4dHVyZSA9IGZ1bmN0aW9uIChhcmdfdGV4dHVyZSwgc2xvdCkge1xyXG4gICAgICAgIHRoaXMudGV4dHVyZXNbc2xvdF0gPSBhcmdfdGV4dHVyZTtcclxuICAgIH07XHJcbiAgICBNYXRlcmlhbC5wcm90b3R5cGUuQWRkRXhQYXJhbSA9IGZ1bmN0aW9uIChhcmdfc2xvdCwgYXJnX3NpemUsIGFyZ19wYXJhbSkge1xyXG4gICAgICAgIHRoaXMuZXhQYXJhbXMucHVzaChuZXcgRXhQYXJhbWV0ZXIoYXJnX3Nsb3QsIGFyZ19zaXplLCBhcmdfcGFyYW0pKTtcclxuICAgIH07XHJcbiAgICBNYXRlcmlhbC5wcm90b3R5cGUuQXR0YWNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRldmljZS5zaGFkZXIuYW1iaWVudFNsb3QpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2UuY29udGV4dC51bmlmb3JtNGZ2KHRoaXMuZGV2aWNlLnNoYWRlci51bmlmb3JtTG9jYXRpb25zW3RoaXMuZGV2aWNlLnNoYWRlci5hbWJpZW50U2xvdF0sIHRoaXMuYW1iaWVudENvbG9yLnh5encpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGV4dHVyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGV4dHVyZXNbaV0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZXNbaV0uQXR0YWNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXhQYXJhbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5leFBhcmFtc1tpXS5hdGFjaEZ1bmModGhpcy5kZXZpY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gTWF0ZXJpYWw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1hdGVyaWFsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgTWVzaCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1lc2goKSB7XHJcbiAgICB9XHJcbiAgICBNZXNoLnByb3RvdHlwZS5TZXRQYXJhbWV0ZXIgPSBmdW5jdGlvbiAoYXJnX2dlb21ldHJ5LCBhcmdfYXJ5X21hdGVyaWFscykge1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBhcmdfZ2VvbWV0cnk7XHJcbiAgICAgICAgdGhpcy5hcnlfbWF0ZXJpYWxzID0gYXJnX2FyeV9tYXRlcmlhbHM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1lc2g7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1lc2g7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBGaWxlTG9hZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1Rvb2wvRmlsZUxvYWRlclwiKSk7XHJcbmZ1bmN0aW9uIEdldFN0cmlkZShhcmdfdHlwZSkge1xyXG4gICAgc3dpdGNoIChhcmdfdHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJ2ZWMyXCI6XHJcbiAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwidmVjM1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gMztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInZlYzRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIDQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJpbnRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJmbG9hdFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcIlR5cGUgdW5kaWZpbmVkLlwiKTtcclxuICAgIHJldHVybiAwO1xyXG59XHJcbnZhciBTaGFkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTaGFkZXIodnNTb3VyY2UsIGZzU291cmNlLCBhcmdfZ3JhcGhpY0RldmljZSkge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZSA9IGFyZ19ncmFwaGljRGV2aWNlO1xyXG4gICAgICAgIHZhciB2c0RhdGEgPSBGaWxlTG9hZGVyXzEuZGVmYXVsdC5Mb2FkVGV4dCh2c1NvdXJjZSk7XHJcbiAgICAgICAgdmFyIHZfc2hhZGVyID0gdGhpcy5ncmFwaGljRGV2aWNlLkNyZWF0ZVZlcnRleFNoYWRlcih2c0RhdGEpO1xyXG4gICAgICAgIHZhciBmc0RhdGEgPSBGaWxlTG9hZGVyXzEuZGVmYXVsdC5Mb2FkVGV4dChmc1NvdXJjZSk7XHJcbiAgICAgICAgdmFyIGZfc2hhZGVyID0gdGhpcy5ncmFwaGljRGV2aWNlLkNyZWF0ZUZyYWdtZW50U2hhZGVyKGZzRGF0YSk7XHJcbiAgICAgICAgdGhpcy5hbWJpZW50U2xvdCA9IC0xO1xyXG4gICAgICAgIHRoaXMubGlnaHRQb3NTbG90ID0gLTE7XHJcbiAgICAgICAgdGhpcy5saWdodERpclNsb3QgPSAtMTtcclxuICAgICAgICB0aGlzLnByb2dyYW1PYmplY3QgPSB0aGlzLmdyYXBoaWNEZXZpY2UuQ3JlYXRlUHJvZ3JhbSh2X3NoYWRlciwgZl9zaGFkZXIpO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVTdHJpZGVzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy51bmlmb3JtTG9jYXRpb25zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlU2xvdHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB2YXIgYXR0cmlidXRlU291cmNlID0gdnNEYXRhLnNwbGl0KFwiO1wiKTtcclxuICAgICAgICBhdHRyaWJ1dGVTb3VyY2UgPSBhdHRyaWJ1dGVTb3VyY2UuZmlsdGVyKGZ1bmN0aW9uIChzb3VyY2UpIHsgcmV0dXJuIHNvdXJjZS5pbmRleE9mKFwiYXR0cmlidXRlXCIpICE9IC0xOyB9KTtcclxuICAgICAgICB2YXIgYXR0cmlidXRlU2VtYW50aWNzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdHRyaWJ1dGVTb3VyY2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlU291cmNlW2ldID0gYXR0cmlidXRlU291cmNlW2ldLnJlcGxhY2UoL1xccj9cXG4vZywgXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF0dHJpYnV0ZVNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHsgcmV0dXJuIGF0dHJpYnV0ZVNlbWFudGljcy5wdXNoKHNvdXJjZS5zcGxpdChcIiBcIikpOyB9KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJpYnV0ZVNlbWFudGljcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVTZW1hbnRpY3NbaV0gPSBhdHRyaWJ1dGVTZW1hbnRpY3NbaV0uZmlsdGVyKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzICE9IFwiXCI7IH0pO1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9uc1tpXSA9IHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucHJvZ3JhbU9iamVjdCwgYXR0cmlidXRlU2VtYW50aWNzW2ldWzJdKTtcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVTdHJpZGVzW2ldID0gR2V0U3RyaWRlKGF0dHJpYnV0ZVNlbWFudGljc1tpXVsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1bmlTb3VyY2UgPSBmc0RhdGEuc3BsaXQoXCI7XCIpO1xyXG4gICAgICAgIHVuaVNvdXJjZSA9IHZzRGF0YS5zcGxpdChcIjtcIikuY29uY2F0KHVuaVNvdXJjZSk7XHJcbiAgICAgICAgdW5pU291cmNlID0gdW5pU291cmNlLmZpbHRlcihmdW5jdGlvbiAoc291cmNlKSB7IHJldHVybiBzb3VyY2UuaW5kZXhPZihcInVuaWZvcm1cIikgIT0gLTE7IH0pO1xyXG4gICAgICAgIHZhciB1bmlTZW1hbnRpY3MgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHVuaVNvdXJjZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB1bmlTb3VyY2VbaV0gPSB1bmlTb3VyY2VbaV0ucmVwbGFjZSgvXFxyP1xcbi9nLCBcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdW5pU291cmNlLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkgeyByZXR1cm4gdW5pU2VtYW50aWNzLnB1c2goc291cmNlLnNwbGl0KFwiIFwiKSk7IH0pO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdW5pU2VtYW50aWNzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHVuaVNlbWFudGljc1tpXSA9IHVuaVNlbWFudGljc1tpXS5maWx0ZXIoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMgIT0gXCJcIjsgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5wdXNoKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW1PYmplY3QsIHVuaVNlbWFudGljc1tpXVsyXSkpO1xyXG4gICAgICAgICAgICBpZiAodW5pU2VtYW50aWNzW2ldWzJdID09IFwiYW1iaWVudENvbG9yXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW1iaWVudFNsb3QgPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVuaVNlbWFudGljc1tpXVsyXSA9PSBcImxpZ2h0UG9zaXRpb25cIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saWdodFBvc1Nsb3QgPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVuaVNlbWFudGljc1tpXVsyXSA9PSBcImxpZ2h0RGlyZWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlnaHREaXJTbG90ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1bmlTZW1hbnRpY3NbaV1bMV0gPT0gXCJzYW1wbGVyMkRcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlU2xvdHMucHVzaChpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFNoYWRlci5wcm90b3R5cGUuR2V0VGV4dHVyZVNsb3QgPSBmdW5jdGlvbiAoYXJnX3Nsb3QpIHtcclxuICAgICAgICBpZiAodGhpcy50ZXh0dXJlU2xvdHNbYXJnX3Nsb3RdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9uc1t0aGlzLnRleHR1cmVTbG90c1thcmdfc2xvdF1dO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTaGFkZXIucHJvdG90eXBlLkF0dGFjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuU2V0U2hhZGVyKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTaGFkZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFNoYWRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFNvdW5kID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU291bmQoYXJnX3NyYykge1xyXG4gICAgICAgIHRoaXMuYXVkaW9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5zcmMgPSBhcmdfc3JjO1xyXG4gICAgICAgIHRoaXMuYXVkaW9FbGVtZW50LnByZWxvYWQgPSBcImF1dG9cIjtcclxuICAgIH1cclxuICAgIFNvdW5kLnByb3RvdHlwZS5QbGF5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYXVkaW9FbGVtZW50LnBsYXkoKTtcclxuICAgIH07XHJcbiAgICBTb3VuZC5wcm90b3R5cGUuUGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQucGF1c2UoKTtcclxuICAgIH07XHJcbiAgICBTb3VuZC5wcm90b3R5cGUuTXV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5tdXRlZCA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgU291bmQucHJvdG90eXBlLlNldFZvbHVtZSA9IGZ1bmN0aW9uIChhcmdfdm9sdW1lKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQudm9sdW1lID0gYXJnX3ZvbHVtZTtcclxuICAgIH07XHJcbiAgICBTb3VuZC5wcm90b3R5cGUuR2V0Vm9sdW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF1ZGlvRWxlbWVudC52b2x1bWU7XHJcbiAgICB9O1xyXG4gICAgU291bmQucHJvdG90eXBlLkRpc011dGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQubXV0ZWQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICBTb3VuZC5wcm90b3R5cGUuUmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQuY3VycmVudFRpbWUgPSAwLjA7XHJcbiAgICB9O1xyXG4gICAgU291bmQucHJvdG90eXBlLlNldExvb3AgPSBmdW5jdGlvbiAoYXJnX2lzTG9vcCkge1xyXG4gICAgICAgIHRoaXMuYXVkaW9FbGVtZW50Lmxvb3AgPSBhcmdfaXNMb29wO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTb3VuZDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU291bmQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBUZXh0dXJlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVGV4dHVyZShhcmdfcGF0aCwgYXJnX2RldmljZSkge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UgPSBhcmdfZGV2aWNlO1xyXG4gICAgICAgIHRoaXMucGF0aCA9IGFyZ19wYXRoO1xyXG4gICAgfVxyXG4gICAgVGV4dHVyZS5wcm90b3R5cGUuTG9hZGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnJlc291cmNlQ29udGFpbmVyKVxyXG4gICAgICAgICAgICB0aGlzLnJlc291cmNlQ29udGFpbmVyLkxvYWRFbmQoKTtcclxuICAgIH07XHJcbiAgICBUZXh0dXJlLnByb3RvdHlwZS5Jc0xvYWRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0xvYWRlZDtcclxuICAgIH07XHJcbiAgICBUZXh0dXJlLnByb3RvdHlwZS5Jbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5DcmVhdGVUZXh0dXJlKHRoaXMucGF0aCwgdGhpcyk7XHJcbiAgICB9O1xyXG4gICAgVGV4dHVyZS5wcm90b3R5cGUuQXR0YWNoID0gZnVuY3Rpb24gKHNsb3QpIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5hY3RpdmVUZXh0dXJlKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRFWFRVUkUwKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5iaW5kVGV4dHVyZSh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5URVhUVVJFXzJELCB0aGlzLmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm0xaSh0aGlzLmdyYXBoaWNEZXZpY2Uuc2hhZGVyLkdldFRleHR1cmVTbG90KHNsb3QpLCBzbG90KTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRFWFRVUkVfMkQsIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRFWFRVUkVfTUlOX0ZJTFRFUiwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuTkVBUkVTVCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudGV4UGFyYW1ldGVyaSh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5URVhUVVJFXzJELCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5URVhUVVJFX01BR19GSUxURVIsIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0Lk5FQVJFU1QpO1xyXG4gICAgfTtcclxuICAgIFRleHR1cmUucHJvdG90eXBlLlNldENvbnRhaW5lciA9IGZ1bmN0aW9uIChyZXNvdXJjZUNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2VDb250YWluZXIgPSByZXNvdXJjZUNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLnJlc291cmNlQ29udGFpbmVyLkxvYWRTdGFydCgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUZXh0dXJlO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBUZXh0dXJlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFNjZW5lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vU2NlbmUvU2NlbmVcIikpO1xyXG52YXIgUmVzb3VyY2VDcmVhdGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVG9vbC9SZXNvdXJjZUNyZWF0ZXJcIikpO1xyXG52YXIgUXVhdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01hdGgvUXVhdFwiKSk7XHJcbnZhciBWZWN0b3I0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWF0aC9WZWN0b3I0XCIpKTtcclxudmFyIFZlY3RvcjNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYXRoL1ZlY3RvcjNcIikpO1xyXG52YXIgUG9pbnRMaWdodF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0xpZ2h0L1BvaW50TGlnaHRcIikpO1xyXG52YXIgTW9kZWxEcmF3Q29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ29tcG9uZW50L01vZGVsRHJhd0NvbXBvbmVudFwiKSk7XHJcbnZhciBTYW1wbGVDb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21wb25lbnQvU2FtcGxlQ29tcG9uZW50XCIpKTtcclxudmFyIENvbGxpc2lvbkNvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvbXBvbmVudC9Db2xsaXNpb25Db21wb25lbnRcIikpO1xyXG52YXIgVHJhbnNmb3JtXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVHJhbnNmb3JtXCIpKTtcclxudmFyIElucHV0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVG9vbC9JbnB1dFwiKSk7XHJcbnZhciBTY2VuZUNoYW5nZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21wb25lbnQvU2NlbmVDaGFuZ2VyXCIpKTtcclxudmFyIFRyYW5zZm9ybUFuaW1hdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvbXBvbmVudC9UcmFuc2Zvcm1BbmltYXRpb25cIikpO1xyXG52YXIgRWFzaW5nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVG9vbC9FYXNpbmdcIikpO1xyXG52YXIgU3VjaWRlQ29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ29tcG9uZW50L1N1Y2lkZUNvbXBvbmVudFwiKSk7XHJcbnZhciBQcmltaXRpdmVUeXBlO1xyXG4oZnVuY3Rpb24gKFByaW1pdGl2ZVR5cGUpIHtcclxuICAgIFByaW1pdGl2ZVR5cGVbUHJpbWl0aXZlVHlwZVtcInNwaGVyZVwiXSA9IDBdID0gXCJzcGhlcmVcIjtcclxuICAgIFByaW1pdGl2ZVR5cGVbUHJpbWl0aXZlVHlwZVtcImJveF9BQUJCXCJdID0gMV0gPSBcImJveF9BQUJCXCI7XHJcbiAgICBQcmltaXRpdmVUeXBlW1ByaW1pdGl2ZVR5cGVbXCJib3hfT0JCXCJdID0gMl0gPSBcImJveF9PQkJcIjtcclxuICAgIFByaW1pdGl2ZVR5cGVbUHJpbWl0aXZlVHlwZVtcInBvaW50XCJdID0gM10gPSBcInBvaW50XCI7XHJcbn0pKFByaW1pdGl2ZVR5cGUgfHwgKFByaW1pdGl2ZVR5cGUgPSB7fSkpO1xyXG52YXIgZmxvYXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBmbG9hdCgpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZsb2F0O1xyXG59KCkpO1xyXG52YXIgU2FtcGxlU2NlbmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU2FtcGxlU2NlbmUsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTYW1wbGVTY2VuZShzY2VuZU1hbmdlcikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHNjZW5lTWFuZ2VyKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmFRdWF0ZXJuaW9uID0gbmV3IFF1YXRfMS5kZWZhdWx0KCkuSWRlbnRpdHkoKTtcclxuICAgICAgICBfdGhpcy5iUXVhdGVybmlvbiA9IG5ldyBRdWF0XzEuZGVmYXVsdCgpLklkZW50aXR5KCk7XHJcbiAgICAgICAgX3RoaXMuc1F1YXRlcm5pb24gPSBuZXcgUXVhdF8xLmRlZmF1bHQoKS5JZGVudGl0eSgpO1xyXG4gICAgICAgIF90aGlzLnpvb21EYXRhID0gbmV3IGZsb2F0KCk7XHJcbiAgICAgICAgX3RoaXMuem9vbURpcmVjdGlvbiA9IDEuMDtcclxuICAgICAgICBfdGhpcy56b29tRGF0YS5kYXRhWzBdID0gMC41O1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFNhbXBsZVNjZW5lLnByb3RvdHlwZS5Mb2FkaW5nVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIFNhbXBsZVNjZW5lLnByb3RvdHlwZS5PbkxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZnJhbWVCdWZmZXIsIG1hdGVyaWFsO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBmcmFtZUJ1ZmZlciA9IHRoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkVGV4dHVyZShSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZUZyYW1lQnVmZmVyKDEwMjQsIDEwMjQsIHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSksIFwicGxheUNhbWVyYVwiKTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsID0gdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRNYXRlcmlhbChSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZU1hdGVyaWFsKG5ldyBWZWN0b3I0XzEuZGVmYXVsdCgwLjEsIDAuMSwgMC4xLCAxLjApLCB0aGlzLnNjZW5lTWFuYWdlci5HZXRHcmFwaGljRGV2aWNlKCksIFt0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkdldFRleHR1cmUoXCJwbGF5Q2FtZXJhXCIpXSksIFwicGxheUNhbWVyYU1hdGVyaWFsXCIpO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuQWRkRXhQYXJhbSg0LCAxLCB0aGlzLnpvb21EYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2FtcGxlU2NlbmUucHJvdG90eXBlLk9uSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLkFkZExheWVyKCk7XHJcbiAgICAgICAgdGhpcy5Vc2VDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5BZGRDYW1lcmEoMCwgMSwgXCJtYWluXCIsIGZhbHNlLCB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkdldFRleHR1cmUoXCJwbGF5Q2FtZXJhXCIpKTtcclxuICAgICAgICAvLyDpoILngrnjgrfjgqfjg7zjg4Djgajjg5Xjg6njgrDjg6Hjg7Pjg4jjgrfjgqfjg7zjg4Djga7nlJ/miJBcclxuICAgICAgICB2YXIgbGlnaHQgPSBuZXcgUG9pbnRMaWdodF8xLmRlZmF1bHQodGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKTtcclxuICAgICAgICBsaWdodC50cmFuc2Zvcm0uUG9zaXRpb24gPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoLTUsIC01LCAxMCk7XHJcbiAgICAgICAgLy90aGlzLnJlbmRlcmVyLlNldExpZ2h0KGxpZ2h0LDApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuU2V0TGlnaHQobGlnaHQsIDEpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKS5FbmFibGVTdGVuY2lsKCk7XHJcbiAgICAgICAgdGhpcy5HZXRDYW1lcmEoXCJtYWluXCIpLnRyYW5zZm9ybS5Qb3NpdGlvbiA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAtMywgMTApO1xyXG4gICAgICAgIHRoaXMuR2V0Q2FtZXJhKFwibWFpblwiKS50cmFuc2Zvcm0uTG9va0F0KG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAtMSksIFZlY3RvcjNfMS5kZWZhdWx0LnlBeGlzKTtcclxuICAgICAgICB0aGlzLkdldENhbWVyYShcIm1haW5cIikuY2xlYXJDb2xvciA9IG5ldyBWZWN0b3I0XzEuZGVmYXVsdCgwLjMsIDAuMywgMC4zLCAxLjApO1xyXG4gICAgICAgIHRoaXMuY3ViZSA9IHRoaXMuZ2FtZU9iamVjdE1hbmFnZXIuQWRkR2FtZU9iamVjdChcImN1YmVcIiwgbmV3IFRyYW5zZm9ybV8xLmRlZmF1bHQobmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIC0xKSwgbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDEwLCAxMCwgMTApLCBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMSwgMSwgMSkpKTtcclxuICAgICAgICB0aGlzLmFub3RoZXJDdWJlID0gdGhpcy5nYW1lT2JqZWN0TWFuYWdlci5BZGRHYW1lT2JqZWN0KFwiY3ViZVwiLCBuZXcgVHJhbnNmb3JtXzEuZGVmYXVsdChuZXcgVmVjdG9yM18xLmRlZmF1bHQoMywgMSwgMCksIG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAwKSwgbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDMsIDEsIDEpKSk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uUGxhbmUgPSB0aGlzLmdhbWVPYmplY3RNYW5hZ2VyLkFkZEdhbWVPYmplY3QoXCJwcm9qZWN0aW9uQ3ViZVwiKTtcclxuICAgICAgICAvL3RoaXMudG9ydXMuU2V0Q29tcG9uZW50KG5ldyBNb2RlbERyYXdDb21wb25lbnQoXCJoc3ZUb3J1c1wiLFwiY2Fsb3J5TWF0ZXJpYWxcIixcInBvaW50TGlnaHRcIiwxKSkgYXMgTW9kZWxEcmF3Q29tcG9uZW50O1xyXG4gICAgICAgIC8vdGhpcy5jdWJlLlNldENvbXBvbmVudChuZXcgTW9kZWxEcmF3Q29tcG9uZW50KGZhbHNlLCBcImN1YmVcIixcImNhbG9yeU1hdGVyaWFsXCIsXCJ0ZXhTaGFkZXJcIiwxLGZhbHNlKSkgYXMgTW9kZWxEcmF3Q29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMuY3ViZS5TZXRDb21wb25lbnQobmV3IE1vZGVsRHJhd0NvbXBvbmVudF8xLmRlZmF1bHQoZmFsc2UsIFwiY3ViZVwiLCBcImNhbG9yeU1hdGVyaWFsXCIsIFwidGV4U2hhZGVyXCIsIDEsIGZhbHNlKSk7XHJcbiAgICAgICAgdGhpcy5hbm90aGVyQ3ViZS5TZXRDb21wb25lbnQobmV3IE1vZGVsRHJhd0NvbXBvbmVudF8xLmRlZmF1bHQoZmFsc2UsIFwiY3ViZVwiLCBcImNhbG9yeU1hdGVyaWFsXCIsIFwidGV4U2hhZGVyXCIsIDEsIGZhbHNlKSk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uUGxhbmUuU2V0Q29tcG9uZW50KG5ldyBNb2RlbERyYXdDb21wb25lbnRfMS5kZWZhdWx0KGZhbHNlLCBcInBsYW5lXCIsIFwicGxheUNhbWVyYU1hdGVyaWFsXCIsIFwidGV4U2hhZGVyXCIsIDAsIGZhbHNlKSk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uUGxhbmUudHJhbnNmb3JtLlNjYWxlID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDEpO1xyXG4gICAgICAgIHRoaXMuY3ViZS5TZXRDb21wb25lbnQobmV3IFNhbXBsZUNvbXBvbmVudF8xLmRlZmF1bHQoKSk7XHJcbiAgICAgICAgdGhpcy5hbm90aGVyQ3ViZS50cmFuc2Zvcm0uQmFzZVRyYW5zZm9ybSA9IHRoaXMuY3ViZS50cmFuc2Zvcm07XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uUGxhbmUudHJhbnNmb3JtLlBvc2l0aW9uID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIC0xKTtcclxuICAgICAgICB0aGlzLmN1YmUuU2V0Q29tcG9uZW50KG5ldyBDb2xsaXNpb25Db21wb25lbnRfMS5kZWZhdWx0KFByaW1pdGl2ZVR5cGUuYm94X09CQiwgbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDEuMCwgMS4wLCAxLjApLCAwKSk7XHJcbiAgICAgICAgdGhpcy5hbm90aGVyQ3ViZS5TZXRDb21wb25lbnQobmV3IENvbGxpc2lvbkNvbXBvbmVudF8xLmRlZmF1bHQoUHJpbWl0aXZlVHlwZS5ib3hfT0JCLCBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMS4wLCAxLjAsIDEuMCksIDApKTtcclxuICAgICAgICB2YXIgb2JqID0gdGhpcy5nYW1lT2JqZWN0TWFuYWdlci5BZGRHYW1lT2JqZWN0KFwic3BoZXJlXCIsIG5ldyBUcmFuc2Zvcm1fMS5kZWZhdWx0KG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgzLCAwLCAtMSksIG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAwKSkpO1xyXG4gICAgICAgIG9iai5TZXRDb21wb25lbnQobmV3IE1vZGVsRHJhd0NvbXBvbmVudF8xLmRlZmF1bHQoZmFsc2UsIFwic3BoZXJlXCIsIFwiY2Fsb3J5TWF0ZXJpYWxcIiwgXCJ0ZXhTaGFkZXJcIiwgMSwgZmFsc2UpKTtcclxuICAgICAgICBvYmouU2V0Q29tcG9uZW50KG5ldyBDb2xsaXNpb25Db21wb25lbnRfMS5kZWZhdWx0KFByaW1pdGl2ZVR5cGUuc3BoZXJlLCBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMC41LCAwLjUsIDAuNSksIDApKTtcclxuICAgIH07XHJcbiAgICBTYW1wbGVTY2VuZS5wcm90b3R5cGUuT25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBJbnB1dF8xLmRlZmF1bHQuQWRkS2V5RG93bkV2ZW50KHRoaXMsIFwic2FtcGxlU2NlbmVFdmVudFwiLCB0cnVlKTtcclxuICAgICAgICBpZiAodGhpcy5Jc0xvYWRlZCgpKSB7XHJcbiAgICAgICAgICAgIHZhciB0cmFucyA9IG5ldyBUcmFuc2Zvcm1fMS5kZWZhdWx0KG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAtMSksIG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAwKSwgbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDUwMCwgNTAwLCAxKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3ViZS5TZXRDb21wb25lbnQobmV3IFRyYW5zZm9ybUFuaW1hdGlvbl8xLmRlZmF1bHQoOTAsIGZhbHNlLCB0cmFucywgdGhpcy5wcm9qZWN0aW9uUGxhbmUudHJhbnNmb3JtLCBFYXNpbmdfMS5kZWZhdWx0LkVhc2VJbk91dENpcmMpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU2FtcGxlU2NlbmUucHJvdG90eXBlLk9uRW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIElucHV0XzEuZGVmYXVsdC5SZW1vdmVLZXlEb3duRXZlbnQoXCJzYW1wbGVTY2VuZUV2ZW50XCIpO1xyXG4gICAgfTtcclxuICAgIFNhbXBsZVNjZW5lLnByb3RvdHlwZS5PblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyDjgqvjgqbjg7Pjgr/jgpLlhYPjgavjg6njgrjjgqLjg7PjgpLnrpflh7pcclxuICAgICAgICB2YXIgcmFkID0gKHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdhbWVUaW1lKCkuQWJzb2x1dGVGcmFtZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgIHZhciB0aW1lID0gMS41O1xyXG4gICAgfTtcclxuICAgIFNhbXBsZVNjZW5lLnByb3RvdHlwZS5PbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgICAgIHZhciBzY2VuZUNoYW5nZU9iamVjdCA9IHRoaXMuZ2FtZU9iamVjdE1hbmFnZXIuR2V0R2FtZU9iamVjdChcInNjZW5lQ2hhbmdlclwiKTtcclxuICAgICAgICAgICAgaWYgKHNjZW5lQ2hhbmdlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2NlbmVDaGFuZ2VPYmplY3QgPSB0aGlzLmdhbWVPYmplY3RNYW5hZ2VyLkFkZEdhbWVPYmplY3QoXCJzY2VuZUNoYW5nZXJcIik7XHJcbiAgICAgICAgICAgIHNjZW5lQ2hhbmdlT2JqZWN0LlNldENvbXBvbmVudChuZXcgU2NlbmVDaGFuZ2VyXzEuZGVmYXVsdChcInRpdGxlXCIsIDEwMCwgbnVsbCkpO1xyXG4gICAgICAgICAgICB2YXIgdHJhbnMgPSBuZXcgVHJhbnNmb3JtXzEuZGVmYXVsdChuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgLTEpLCBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgMCksIG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAwKSk7XHJcbiAgICAgICAgICAgIHNjZW5lQ2hhbmdlT2JqZWN0LlNldENvbXBvbmVudChuZXcgVHJhbnNmb3JtQW5pbWF0aW9uXzEuZGVmYXVsdCg5MCwgZmFsc2UsIHRyYW5zLCB0aGlzLnByb2plY3Rpb25QbGFuZS50cmFuc2Zvcm0sIEVhc2luZ18xLmRlZmF1bHQuRWFzZUluT3V0Q2lyYykpO1xyXG4gICAgICAgICAgICBzY2VuZUNoYW5nZU9iamVjdC5TZXRDb21wb25lbnQobmV3IFN1Y2lkZUNvbXBvbmVudF8xLmRlZmF1bHQoMTAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBTYW1wbGVTY2VuZTtcclxufShTY2VuZV8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU2FtcGxlU2NlbmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUmVuZGVyZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vUGFydHMvUmVuZGVyZXJcIikpO1xyXG52YXIgQ2FtZXJhXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL0dyYXBoaWMvQ2FtZXJhXCIpKTtcclxudmFyIEdhbWVPYmplY3RNYW5hZ2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL0dhbWVPYmplY3QvR2FtZU9iamVjdE1hbmFnZXJcIikpO1xyXG52YXIgQ29sbGlzaW9uTWFuYWdlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9QYXJ0cy9Db2xsaXNpb24vQ29sbGlzaW9uTWFuYWdlclwiKSk7XHJcbmZ1bmN0aW9uIFNsZWVwKHRpbWUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSk7XHJcbiAgICB9KTtcclxufVxyXG52YXIgU2NlbmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTY2VuZShzY2VuZU1hbmdlcikge1xyXG4gICAgICAgIHRoaXMuaXNDdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXJfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5tYXBfY2FtZXJhID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuYXJ5X2NhbWVyYSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyID0gc2NlbmVNYW5nZXI7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0TWFuYWdlciA9IG5ldyBHYW1lT2JqZWN0TWFuYWdlcl8xLmRlZmF1bHQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5VcGRhdGUgPSB0aGlzLlVwZGF0ZV9XaXRob3V0Q29sbGlzaW9uO1xyXG4gICAgICAgIHRoaXMuQWRkQ2FtZXJhKDAsIDAsIFwibGFzdFwiLCB0cnVlKTtcclxuICAgIH1cclxuICAgIFNjZW5lLnByb3RvdHlwZS5Jc0N1cnJlbnRTY2VuZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0N1cnJlbnQ7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLlNldEN1cnJlbnRTY2VuZSA9IGZ1bmN0aW9uIChhcmdfaXNjdXJyZW50KSB7XHJcbiAgICAgICAgdGhpcy5pc0N1cnJlbnQgPSBhcmdfaXNjdXJyZW50O1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5Vc2VDb2xsaXNpb25NYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uTWFuYWdlciA9IG5ldyBDb2xsaXNpb25NYW5hZ2VyXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuVXBkYXRlID0gdGhpcy5VcGRhdGVfV2l0aENvbGxpc2lvbjtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuR2V0Q29sbGlzaW9uTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2xsaXNpb25NYW5hZ2VyO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5Jc0xvYWRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0xvYWRlZDtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuUmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLk9uUmVsZWFzZSgpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3RNYW5hZ2VyLlJlbGVhc2UoKTtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbk1hbmFnZXIuUmVsZWFzZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuUmVsZWFzZSgpO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5PblJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLkdldENhbWVyYUNvdW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyeV9jYW1lcmEubGVuZ3RoO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5BZGRDYW1lcmEgPSBmdW5jdGlvbiAob3JkZXIsIGxheWVyLCBjYW1lcmFOYW1lLCBpc1BhcmFyZWxsLCBmcmFtZUJ1ZmZlclRleHR1cmUpIHtcclxuICAgICAgICB2YXIgbmV3Q2FtZXJhO1xyXG4gICAgICAgIGlmIChmcmFtZUJ1ZmZlclRleHR1cmUpIHtcclxuICAgICAgICAgICAgbmV3Q2FtZXJhID0gbmV3IENhbWVyYV8xLmRlZmF1bHQodGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpLCBsYXllciwgaXNQYXJhcmVsbCwgZnJhbWVCdWZmZXJUZXh0dXJlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBuZXdDYW1lcmEgPSBuZXcgQ2FtZXJhXzEuZGVmYXVsdCh0aGlzLnNjZW5lTWFuYWdlci5HZXRHcmFwaGljRGV2aWNlKCksIGxheWVyLCBpc1BhcmFyZWxsKTtcclxuICAgICAgICB0aGlzLmFyeV9jYW1lcmEuc3BsaWNlKG9yZGVyLCAwLCBuZXdDYW1lcmEpO1xyXG4gICAgICAgIHRoaXMubWFwX2NhbWVyYVtjYW1lcmFOYW1lXSA9IG5ld0NhbWVyYTtcclxuICAgICAgICByZXR1cm4gbmV3Q2FtZXJhO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5HZXRDYW1lcmEgPSBmdW5jdGlvbiAoY2FtZXJhTmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcF9jYW1lcmFbY2FtZXJhTmFtZV07XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLkRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmFyeV9jYW1lcmEuZm9yRWFjaChmdW5jdGlvbiAoY2FtZXJhKSB7IHJldHVybiBfdGhpcy5yZW5kZXJlci5EcmF3KGNhbWVyYSk7IH0pO1xyXG4gICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKS5QcmVzZW50KCk7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLlVwZGF0ZV9XaXRoQ29sbGlzaW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuT25VcGRhdGUoKTtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3RNYW5hZ2VyLlVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uTWFuYWdlci5DaGVjaygpO1xyXG4gICAgICAgIHRoaXMuRHJhdygpO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5VcGRhdGVfV2l0aG91dENvbGxpc2lvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLk9uVXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0TWFuYWdlci5VcGRhdGUoKTtcclxuICAgICAgICB0aGlzLkRyYXcoKTtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuTG9hZGluZ1VwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLk9uTG9hZGluZ1VwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuRHJhdygpO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5PbkxvYWRpbmdVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLk9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5TdGFydCA9IGZ1bmN0aW9uIChpbmZvcm1hdGlvbikge1xyXG4gICAgICAgIHRoaXMuT25TdGFydChpbmZvcm1hdGlvbik7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLk9uU3RhcnQgPSBmdW5jdGlvbiAoaW5mb3JtYXRpb24pIHtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuRW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuT25FbmQoKTtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuT25FbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5PbkluaXRpYWxpemUoKTtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuQmVmTG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuTG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQmVmTG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLk9uTG9hZCgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkdldExvYWRpbmdPYmpDb3VudCgpKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgU2xlZXAoMTAwKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5PbkxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5PbkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLkdldFJlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5HZXRTY2VuZU1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVNYW5hZ2VyO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTY2VuZTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU2NlbmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBHYW1lVGltZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9QYXJ0cy9HYW1lVGltZVwiKSk7XHJcbnZhciBTY2VuZU1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTY2VuZU1hbmFnZXIoYXJnX21vZGVsQ3JlYXRlciwgYXJnX3Jlc291cmNlQ29udGFpbmVyLCBhcmdfZ3JhcGhpY0RldmljZSkge1xyXG4gICAgICAgIHRoaXMubWFwX3NjZW5lcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLnJlc291cmNlQ29udGFpbmVyID0gYXJnX3Jlc291cmNlQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMubW9kZWxDcmVhdGVyID0gYXJnX21vZGVsQ3JlYXRlcjtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UgPSBhcmdfZ3JhcGhpY0RldmljZTtcclxuICAgICAgICB0aGlzLmdhbWVUaW1lID0gbmV3IEdhbWVUaW1lXzEuZGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5HZXRHcmFwaGljRGV2aWNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdyYXBoaWNEZXZpY2U7XHJcbiAgICB9O1xyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5HZXRNb2RlbENyZWF0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxDcmVhdGVyO1xyXG4gICAgfTtcclxuICAgIFNjZW5lTWFuYWdlci5wcm90b3R5cGUuR2V0UmVzb3VyY2VDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VDb250YWluZXI7XHJcbiAgICB9O1xyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5HZXRHYW1lVGltZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lVGltZTtcclxuICAgIH07XHJcbiAgICBTY2VuZU1hbmFnZXIucHJvdG90eXBlLlVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2NlbmUuSXNMb2FkZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5VcGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lVGltZS5Db3VudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuRHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTY2VuZU1hbmFnZXIucHJvdG90eXBlLkFkZFNjZW5lID0gZnVuY3Rpb24gKGFyZ19zY2VuZSwga2V5KSB7XHJcbiAgICAgICAgYXJnX3NjZW5lLkxvYWQoKTtcclxuICAgICAgICB0aGlzLm1hcF9zY2VuZXNba2V5XSA9IGFyZ19zY2VuZTtcclxuICAgICAgICByZXR1cm4gYXJnX3NjZW5lO1xyXG4gICAgfTtcclxuICAgIFNjZW5lTWFuYWdlci5wcm90b3R5cGUuR2V0U2NlbmUgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwX3NjZW5lc1trZXldO1xyXG4gICAgfTtcclxuICAgIFNjZW5lTWFuYWdlci5wcm90b3R5cGUuR2V0Q3VycmVudFNjZW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTY2VuZTtcclxuICAgIH07XHJcbiAgICBTY2VuZU1hbmFnZXIucHJvdG90eXBlLkNoYW5nZVNjZW5lID0gZnVuY3Rpb24gKGtleSwgaW5mb3JtYXRpb24pIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2NlbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuU2V0Q3VycmVudFNjZW5lKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuRW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5tYXBfc2NlbmVzW2tleV07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuU2V0Q3VycmVudFNjZW5lKHRydWUpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLlN0YXJ0KCk7XHJcbiAgICB9O1xyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5SZW1vdmVTY2VuZSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICBpZiAodGhpcy5tYXBfc2NlbmVzW2tleV0pIHtcclxuICAgICAgICAgICAgdGhpcy5tYXBfc2NlbmVzW2tleV0uUmVsZWFzZSgpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5tYXBfc2NlbmVzW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBTY2VuZU1hbmFnZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFNjZW5lTWFuYWdlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBTY2VuZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NjZW5lL1NjZW5lXCIpKTtcclxudmFyIFJlc291cmNlQ3JlYXRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1Rvb2wvUmVzb3VyY2VDcmVhdGVyXCIpKTtcclxudmFyIEdlb21ldHJ5R2VuZXJhdG9yXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVG9vbC9HZW9tZXRyeUdlbmVyYXRvclwiKSk7XHJcbnZhciBRdWF0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWF0aC9RdWF0XCIpKTtcclxudmFyIFZlY3RvcjRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYXRoL1ZlY3RvcjRcIikpO1xyXG52YXIgVmVjdG9yM18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01hdGgvVmVjdG9yM1wiKSk7XHJcbnZhciBQb2ludExpZ2h0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTGlnaHQvUG9pbnRMaWdodFwiKSk7XHJcbnZhciBNb2RlbERyYXdDb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21wb25lbnQvTW9kZWxEcmF3Q29tcG9uZW50XCIpKTtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYXRoL1ZlY3RvcjJcIikpO1xyXG52YXIgVGV4dERyYXdDb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21wb25lbnQvVGV4dERyYXdDb21wb25lbnRcIikpO1xyXG52YXIgVHJhbnNmb3JtXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVHJhbnNmb3JtXCIpKTtcclxudmFyIElucHV0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVG9vbC9JbnB1dFwiKSk7XHJcbnZhciBUcmFuc2Zvcm1BbmltYXRpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21wb25lbnQvVHJhbnNmb3JtQW5pbWF0aW9uXCIpKTtcclxudmFyIFNjZW5lQ2hhbmdlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvbXBvbmVudC9TY2VuZUNoYW5nZXJcIikpO1xyXG52YXIgRWFzaW5nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVG9vbC9FYXNpbmdcIikpO1xyXG52YXIgU3VjaWRlQ29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ29tcG9uZW50L1N1Y2lkZUNvbXBvbmVudFwiKSk7XHJcbnZhciBmbG9hdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIGZsb2F0KCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmxvYXQ7XHJcbn0oKSk7XHJcbnZhciBUaXRsZVNjZW5lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRpdGxlU2NlbmUsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUaXRsZVNjZW5lKHNjZW5lTWFuZ2VyKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc2NlbmVNYW5nZXIpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuYVF1YXRlcm5pb24gPSBuZXcgUXVhdF8xLmRlZmF1bHQoKS5JZGVudGl0eSgpO1xyXG4gICAgICAgIF90aGlzLmJRdWF0ZXJuaW9uID0gbmV3IFF1YXRfMS5kZWZhdWx0KCkuSWRlbnRpdHkoKTtcclxuICAgICAgICBfdGhpcy5zUXVhdGVybmlvbiA9IG5ldyBRdWF0XzEuZGVmYXVsdCgpLklkZW50aXR5KCk7XHJcbiAgICAgICAgX3RoaXMuem9vbURhdGEgPSBuZXcgZmxvYXQoKTtcclxuICAgICAgICBfdGhpcy5pc0xvYWQgPSBmYWxzZTtcclxuICAgICAgICBfdGhpcy56b29tRGlyZWN0aW9uID0gMS4wO1xyXG4gICAgICAgIF90aGlzLnpvb21EYXRhLmRhdGFbMF0gPSAwLjU7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgVGl0bGVTY2VuZS5wcm90b3R5cGUuTG9hZGluZ1VwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBUaXRsZVNjZW5lLnByb3RvdHlwZS5PbkxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZnJhbWVCdWZmZXIsIG1hdGVyaWFsO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZFNoYWRlcihSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZVNoYWRlcignc2hhZGVyL1VWTm9ybWFsQ29sb3JWUy5nbHNsJywgXCJzaGFkZXIvRGVmYXVsdEZTLmdsc2xcIiwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJ0ZXhTaGFkZXJcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZFNoYWRlcihSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZVNoYWRlcignc2hhZGVyL1VWTm9ybWFsQ29sb3JWUy5nbHNsJywgXCJzaGFkZXIvRm9udFNoYWRlckZTLmdsc2xcIiwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJmb250U2hhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRHZW9tZXRyeShSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZUdlb21ldHJ5KEdlb21ldHJ5R2VuZXJhdG9yXzEuZGVmYXVsdC5DcmVhdGVQbGFuZShuZXcgVmVjdG9yMl8xLmRlZmF1bHQoMSwgMSksIGZhbHNlLCBuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMS4wLCAxLjAsIDEuMCwgMSkpLCB0cnVlLCBmYWxzZSwgZmFsc2UsIHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSksIFwicGxhbmVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZFNvdW5kRnJvbUZpbGUoXCJhdWRpby9FbmRpbmcubXAzXCIsIFwic2FtcGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8g44OG44Kv44K544OB44Oj44KS55Sf5oiQXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZFRleHR1cmUoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVUZXh0dXJlKCdpbWFnZS9jaGFybWFwLnBuZycsIHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSksIFwiZm9udFwiKTtcclxuICAgICAgICAgICAgICAgIGZyYW1lQnVmZmVyID0gdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRUZXh0dXJlKFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlRnJhbWVCdWZmZXIoMTAyNCwgMTAyNCwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJ0aXRsZUNhbWVyYVwiKTtcclxuICAgICAgICAgICAgICAgIGZyYW1lQnVmZmVyID0gdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRUZXh0dXJlKFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlRnJhbWVCdWZmZXIoMTAyNCwgMTAyNCwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJsb2FkaW5nQ2FtZXJhXCIpO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwgPSB0aGlzLnNjZW5lTWFuYWdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZE1hdGVyaWFsKFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlTWF0ZXJpYWwobmV3IFZlY3RvcjRfMS5kZWZhdWx0KDAuMSwgMC4xLCAwLjEsIDEuMCksIHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSwgW3RoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuR2V0VGV4dHVyZShcInRpdGxlQ2FtZXJhXCIpXSksIFwidGl0bGVDYW1lcmFNYXRlcmlhbFwiKTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLkFkZEV4UGFyYW0oNCwgMSwgdGhpcy56b29tRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbCA9IHRoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkTWF0ZXJpYWwoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVNYXRlcmlhbChuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMC4xLCAwLjEsIDAuMSwgMS4wKSwgdGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpLCBbdGhpcy5zY2VuZU1hbmFnZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5HZXRUZXh0dXJlKFwibG9hZGluZ0NhbWVyYVwiKV0pLCBcImxvYWRpbmdDYW1lcmFNYXRlcmlhbFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVGl0bGVTY2VuZS5wcm90b3R5cGUuT25Jbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuQWRkTGF5ZXIoKTtcclxuICAgICAgICB0aGlzLkFkZENhbWVyYSgwLCAxLCBcIm1haW5cIiwgZmFsc2UsIHRoaXMuc2NlbmVNYW5hZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuR2V0VGV4dHVyZShcInRpdGxlQ2FtZXJhXCIpKTtcclxuICAgICAgICAvLyDpoILngrnjgrfjgqfjg7zjg4Djgajjg5Xjg6njgrDjg6Hjg7Pjg4jjgrfjgqfjg7zjg4Djga7nlJ/miJBcclxuICAgICAgICB2YXIgbGlnaHQgPSBuZXcgUG9pbnRMaWdodF8xLmRlZmF1bHQodGhpcy5zY2VuZU1hbmFnZXIuR2V0R3JhcGhpY0RldmljZSgpKTtcclxuICAgICAgICBsaWdodC50cmFuc2Zvcm0uUG9zaXRpb24gPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoLTUsIC01LCAxMCk7XHJcbiAgICAgICAgLy90aGlzLnJlbmRlcmVyLlNldExpZ2h0KGxpZ2h0LDApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuU2V0TGlnaHQobGlnaHQsIDEpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyLkdldEdyYXBoaWNEZXZpY2UoKS5FbmFibGVTdGVuY2lsKCk7XHJcbiAgICAgICAgdGhpcy5HZXRDYW1lcmEoXCJtYWluXCIpLnRyYW5zZm9ybS5Qb3NpdGlvbiA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAxMCk7XHJcbiAgICAgICAgdGhpcy5HZXRDYW1lcmEoXCJtYWluXCIpLnRyYW5zZm9ybS5Mb29rQXQobmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDApLCBWZWN0b3IzXzEuZGVmYXVsdC55QXhpcyk7XHJcbiAgICAgICAgdGhpcy5HZXRDYW1lcmEoXCJtYWluXCIpLmNsZWFyQ29sb3IgPSBuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMS4wLCAxLjAsIDEuMCwgMS4wKTtcclxuICAgICAgICB0aGlzLnRleHRzID0gdGhpcy5nYW1lT2JqZWN0TWFuYWdlci5BZGRHYW1lT2JqZWN0KFwidGV4dFwiKTtcclxuICAgICAgICB0aGlzLnByb2plY3Rpb25QbGFuZSA9IHRoaXMuZ2FtZU9iamVjdE1hbmFnZXIuQWRkR2FtZU9iamVjdChcInByb2plY3Rpb25QbGFuZVwiKTtcclxuICAgICAgICAvL3RoaXMudG9ydXMuU2V0Q29tcG9uZW50KG5ldyBNb2RlbERyYXdDb21wb25lbnQoXCJoc3ZUb3J1c1wiLFwiY2Fsb3J5TWF0ZXJpYWxcIixcInBvaW50TGlnaHRcIiwxKSkgYXMgTW9kZWxEcmF3Q29tcG9uZW50O1xyXG4gICAgICAgIC8vdGhpcy5jdWJlLlNldENvbXBvbmVudChuZXcgTW9kZWxEcmF3Q29tcG9uZW50KGZhbHNlLCBcImN1YmVcIixcImNhbG9yeU1hdGVyaWFsXCIsXCJ0ZXhTaGFkZXJcIiwxLGZhbHNlKSkgYXMgTW9kZWxEcmF3Q29tcG9uZW50O1xyXG4gICAgICAgIHZhciB0ciA9IG5ldyBUcmFuc2Zvcm1fMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdHIuUG9zaXRpb24gPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMSwgMSwgMSk7XHJcbiAgICAgICAgdmFyIHRyMiA9IG5ldyBUcmFuc2Zvcm1fMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdHIyLlBvc2l0aW9uID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KC0xLCAtMSwgMik7XHJcbiAgICAgICAgdmFyIHRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm1fMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdHJhbnNmb3JtLlNjYWxlID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAuNSwgMC41LCAwLjUpO1xyXG4gICAgICAgIHRyYW5zZm9ybS5Qb3NpdGlvbiA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAtMS4wLCAwKTtcclxuICAgICAgICB2YXIgcHJlc3NBbnlUcmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHByZXNzQW55VHJhbnNmb3JtLlNjYWxlID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAuMjUsIDAuMjUsIDAuMjUpO1xyXG4gICAgICAgIHByZXNzQW55VHJhbnNmb3JtLlBvc2l0aW9uID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDEsIDApO1xyXG4gICAgICAgIHZhciBwcmVzc1RhcmdldCA9IG5ldyBUcmFuc2Zvcm1fMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgcHJlc3NUYXJnZXQuU2NhbGUgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMC40LCAwLjQsIDAuNCk7XHJcbiAgICAgICAgcHJlc3NUYXJnZXQuUG9zaXRpb24gPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy50ZXh0cy5TZXRDb21wb25lbnQobmV3IFRleHREcmF3Q29tcG9uZW50XzEuZGVmYXVsdChcIlRpdGxlXCIsIFwiZm9udFwiLCBcImZvbnRTaGFkZXJcIiwgbmV3IFZlY3RvcjRfMS5kZWZhdWx0KDAuNzUsIDAuNzUsIDAuMjUsIDEpLCAxLCB0cnVlLCB0cmFuc2Zvcm0pKTtcclxuICAgICAgICB0aGlzLnRleHRzLlNldENvbXBvbmVudChuZXcgVGV4dERyYXdDb21wb25lbnRfMS5kZWZhdWx0KFwiUHJlc3MgQW55IEtleVwiLCBcImZvbnRcIiwgXCJmb250U2hhZGVyXCIsIG5ldyBWZWN0b3I0XzEuZGVmYXVsdCgwLjAsIDAuMCwgMC4wLCAxKSwgMSwgdHJ1ZSwgcHJlc3NBbnlUcmFuc2Zvcm0pKTtcclxuICAgICAgICB0aGlzLnRleHRzLlNldENvbXBvbmVudChuZXcgVHJhbnNmb3JtQW5pbWF0aW9uXzEuZGVmYXVsdCg2MCwgdHJ1ZSwgcHJlc3NUYXJnZXQsIHByZXNzQW55VHJhbnNmb3JtKSk7XHJcbiAgICAgICAgLy90aGlzLmFub3RoZXJDdWJlLlNldENvbXBvbmVudChuZXcgTW9kZWxEcmF3Q29tcG9uZW50KGZhbHNlLCBcImN1YmVcIixcImNhbG9yeU1hdGVyaWFsXCIsXCJ0ZXhTaGFkZXJcIiwxLHRydWUpKSBhcyBNb2RlbERyYXdDb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uUGxhbmUuU2V0Q29tcG9uZW50KG5ldyBNb2RlbERyYXdDb21wb25lbnRfMS5kZWZhdWx0KGZhbHNlLCBcInBsYW5lXCIsIFwidGl0bGVDYW1lcmFNYXRlcmlhbFwiLCBcInRleFNoYWRlclwiLCAwLCBmYWxzZSkpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlvblBsYW5lLnRyYW5zZm9ybS5TY2FsZSA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCg1MDAsIDUwMCwgMSk7XHJcbiAgICAgICAgdGhpcy50ZXh0cy50cmFuc2Zvcm0uUG9zaXRpb24gPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgMC41KTtcclxuICAgICAgICB0aGlzLnByb2plY3Rpb25QbGFuZS50cmFuc2Zvcm0uUG9zaXRpb24gPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgLTEpO1xyXG4gICAgfTtcclxuICAgIFRpdGxlU2NlbmUucHJvdG90eXBlLk9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIOOCq+OCpuODs+OCv+OCkuWFg+OBq+ODqeOCuOOCouODs+OCkueul+WHulxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9qZWN0aW9uUGxhbmUudHJhbnNmb3JtLlNjYWxlKTtcclxuICAgICAgICAvL3RoaXMudGV4dHMudHJhbnNmb3JtLlBvc2l0aW9uPShuZXcgVmVjdG9yMyggMCxzbGlkZS8xMCwwKSk7XHJcbiAgICB9O1xyXG4gICAgVGl0bGVTY2VuZS5wcm90b3R5cGUuT25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBJbnB1dF8xLmRlZmF1bHQuQWRkS2V5RG93bkV2ZW50KHRoaXMsIFwidGl0bGVTY2VuZUV2ZW50XCIsIHRydWUpO1xyXG4gICAgICAgIGlmICh0aGlzLklzTG9hZGVkKCkpIHtcclxuICAgICAgICAgICAgdmFyIHRyYW5zID0gbmV3IFRyYW5zZm9ybV8xLmRlZmF1bHQobmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIC0xKSwgbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDApLCBuZXcgVmVjdG9yM18xLmRlZmF1bHQoNTAwLCA1MDAsIDEpKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0cy5TZXRDb21wb25lbnQobmV3IFRyYW5zZm9ybUFuaW1hdGlvbl8xLmRlZmF1bHQoOTAsIGZhbHNlLCB0cmFucywgdGhpcy5wcm9qZWN0aW9uUGxhbmUudHJhbnNmb3JtLCBFYXNpbmdfMS5kZWZhdWx0LkVhc2VJbk91dENpcmMpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVGl0bGVTY2VuZS5wcm90b3R5cGUuT25FbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgSW5wdXRfMS5kZWZhdWx0LlJlbW92ZUtleURvd25FdmVudChcInRpdGxlU2NlbmVFdmVudFwiKTtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3RNYW5hZ2VyLkdldEdhbWVPYmplY3QoXCJzY2VuZUNoYW5nZXJcIikuRGVhZCgpO1xyXG4gICAgfTtcclxuICAgIFRpdGxlU2NlbmUucHJvdG90eXBlLk9uS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUua2V5ICE9IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgdmFyIHNjZW5lQ2hhbmdlT2JqZWN0ID0gdGhpcy5nYW1lT2JqZWN0TWFuYWdlci5HZXRHYW1lT2JqZWN0KFwic2NlbmVDaGFuZ2VyXCIpO1xyXG4gICAgICAgICAgICBpZiAoc2NlbmVDaGFuZ2VPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzY2VuZUNoYW5nZU9iamVjdCA9IHRoaXMuZ2FtZU9iamVjdE1hbmFnZXIuQWRkR2FtZU9iamVjdChcInNjZW5lQ2hhbmdlclwiKTtcclxuICAgICAgICAgICAgc2NlbmVDaGFuZ2VPYmplY3QuU2V0Q29tcG9uZW50KG5ldyBTY2VuZUNoYW5nZXJfMS5kZWZhdWx0KFwibG9hZFwiLCAxMDAsIG51bGwpKTtcclxuICAgICAgICAgICAgdmFyIHRyYW5zID0gbmV3IFRyYW5zZm9ybV8xLmRlZmF1bHQobmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIC0xKSwgbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDApLCBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgMCkpO1xyXG4gICAgICAgICAgICBzY2VuZUNoYW5nZU9iamVjdC5TZXRDb21wb25lbnQobmV3IFRyYW5zZm9ybUFuaW1hdGlvbl8xLmRlZmF1bHQoOTAsIGZhbHNlLCB0cmFucywgdGhpcy5wcm9qZWN0aW9uUGxhbmUudHJhbnNmb3JtLCBFYXNpbmdfMS5kZWZhdWx0LkVhc2VJbk91dENpcmMpKTtcclxuICAgICAgICAgICAgc2NlbmVDaGFuZ2VPYmplY3QuU2V0Q29tcG9uZW50KG5ldyBTdWNpZGVDb21wb25lbnRfMS5kZWZhdWx0KDEwMCkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gVGl0bGVTY2VuZTtcclxufShTY2VuZV8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVGl0bGVTY2VuZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEJpbmFyeVJlYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJpbmFyeVJlYWRlcihhcmdfYnVmZmVyKSB7XHJcbiAgICAgICAgdGhpcy5idWZmZXJWaWV3ID0gbmV3IERhdGFWaWV3KGFyZ19idWZmZXIpO1xyXG4gICAgICAgIHRoaXMucG9pbnQgPSAwO1xyXG4gICAgfVxyXG4gICAgQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5HZXRTdHJpbmcgPSBmdW5jdGlvbiAoc2l6ZSkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBcIlwiO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciByZWFkID0gdGhpcy5idWZmZXJWaWV3LmdldEludDgodGhpcy5wb2ludCk7XHJcbiAgICAgICAgICAgIGlmIChyZWFkID4gOSlcclxuICAgICAgICAgICAgICAgIG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJlYWQpO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocmVhZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBcIjFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gXCIyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IFwiM1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBcIjRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gXCI1XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IFwiNlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBcIjdcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gXCI4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IFwiOVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBvaW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5HZXRXU3RyaW5nID0gZnVuY3Rpb24gKHNpemUpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gXCJcIjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemUgKiAyOyBpKyspIHtcclxuICAgICAgICAgICAgb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodGhpcy5idWZmZXJWaWV3LmdldEludDgodGhpcy5wb2ludCkpO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5HZXRDaGFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLmJ1ZmZlclZpZXcuZ2V0SW50OCh0aGlzLnBvaW50KTtcclxuICAgICAgICB0aGlzLnBvaW50ICs9IDE7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBCaW5hcnlSZWFkZXIucHJvdG90eXBlLkdldEZsb2F0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLmJ1ZmZlclZpZXcuZ2V0RmxvYXQzMih0aGlzLnBvaW50LCB0cnVlKTtcclxuICAgICAgICB0aGlzLnBvaW50ICs9IDQ7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBCaW5hcnlSZWFkZXIucHJvdG90eXBlLkdldERvdWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5idWZmZXJWaWV3LmdldEZsb2F0NjQodGhpcy5wb2ludCwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5wb2ludCArPSA1O1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5HZXRJbnQgPSBmdW5jdGlvbiAoc2l6ZSkge1xyXG4gICAgICAgIGlmICghc2l6ZSkge1xyXG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5idWZmZXJWaWV3LmdldEludDMyKHRoaXMucG9pbnQsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50ICs9IDQ7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaXplID09IDEpIHtcclxuICAgICAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuYnVmZmVyVmlldy5nZXRJbnQ4KHRoaXMucG9pbnQpO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50ICs9IDE7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNpemUgPT0gMikge1xyXG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5idWZmZXJWaWV3LmdldEludDE2KHRoaXMucG9pbnQsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50ICs9IDI7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNpemUgPT0gNCkge1xyXG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5idWZmZXJWaWV3LmdldEludDMyKHRoaXMucG9pbnQsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50ICs9IDQ7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEJpbmFyeVJlYWRlci5wcm90b3R5cGUuR2V0VUludCA9IGZ1bmN0aW9uIChzaXplKSB7XHJcbiAgICAgICAgaWYgKCFzaXplKSB7XHJcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLmJ1ZmZlclZpZXcuZ2V0VWludDMyKHRoaXMucG9pbnQsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50ICs9IDQ7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaXplID09IDEpIHtcclxuICAgICAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuYnVmZmVyVmlldy5nZXRVaW50OCh0aGlzLnBvaW50KTtcclxuICAgICAgICAgICAgdGhpcy5wb2ludCArPSAxO1xyXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzaXplID09IDIpIHtcclxuICAgICAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuYnVmZmVyVmlldy5nZXRVaW50MTYodGhpcy5wb2ludCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnQgKz0gMjtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc2l6ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLmJ1ZmZlclZpZXcuZ2V0VWludDMyKHRoaXMucG9pbnQsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50ICs9IDQ7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBCaW5hcnlSZWFkZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEJpbmFyeVJlYWRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEJveF9BQUJCXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL01hdGgvR2VvbWV0cnkvQm94X0FBQkJcIikpO1xyXG52YXIgQm94X09CQl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9NYXRoL0dlb21ldHJ5L0JveF9PQkJcIikpO1xyXG52YXIgR2VvbWV0cnlIZWxwZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTWF0aC9HZW9tZXRyeS9HZW9tZXRyeUhlbHBlclwiKSk7XHJcbnZhciBTcGhlcmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTWF0aC9HZW9tZXRyeS9TcGhlcmVcIikpO1xyXG52YXIgVmVjdG9yM18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9NYXRoL1ZlY3RvcjNcIikpO1xyXG52YXIgQ29sbGlzaW9uT2JqZWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1BhcnRzL0NvbGxpc2lvbi9Db2xsaXNpb25PYmplY3RcIikpO1xyXG52YXIgQ29sbGlzaW9uT2JqZWN0Q3JlYXRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbGxpc2lvbk9iamVjdENyZWF0ZXIoKSB7XHJcbiAgICB9XHJcbiAgICBDb2xsaXNpb25PYmplY3RDcmVhdGVyLkNyZWF0ZVBvaW50ID0gZnVuY3Rpb24gKGFyZ19nYW1lT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xsaXNpb25PYmplY3RfMS5kZWZhdWx0KGFyZ19nYW1lT2JqZWN0LCBuZXcgQ29sbGlzaW9uUHJpbWl0aXZlX1BvaW50KGFyZ19nYW1lT2JqZWN0LnRyYW5zZm9ybSkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbk9iamVjdENyZWF0ZXIuQ3JlYXRlU3BoZXJlID0gZnVuY3Rpb24gKGFyZ19yYWRpdXMsIGFyZ19nYW1lT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xsaXNpb25PYmplY3RfMS5kZWZhdWx0KGFyZ19nYW1lT2JqZWN0LCBuZXcgQ29sbGlzaW9uUHJpbWl0aXZlX1NwaGVyZShhcmdfcmFkaXVzLCBhcmdfZ2FtZU9iamVjdC50cmFuc2Zvcm0pKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25PYmplY3RDcmVhdGVyLkNyZWF0ZUN1YmVfQUFCQiA9IGZ1bmN0aW9uIChhcmdfbGVuZ3RoLCBhcmdfZ2FtZU9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29sbGlzaW9uT2JqZWN0XzEuZGVmYXVsdChhcmdfZ2FtZU9iamVjdCwgbmV3IENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfQUFCQihhcmdfbGVuZ3RoLCBhcmdfZ2FtZU9iamVjdC50cmFuc2Zvcm0pKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25PYmplY3RDcmVhdGVyLkNyZWF0ZUN1YmVfT0JCID0gZnVuY3Rpb24gKGFyZ19sZW5ndGgsIGFyZ19nYW1lT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xsaXNpb25PYmplY3RfMS5kZWZhdWx0KGFyZ19nYW1lT2JqZWN0LCBuZXcgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9PQkIoYXJnX2xlbmd0aCwgYXJnX2dhbWVPYmplY3QudHJhbnNmb3JtKSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbGxpc2lvbk9iamVjdENyZWF0ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENvbGxpc2lvbk9iamVjdENyZWF0ZXI7XHJcbnZhciBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQoYXJnX3RyYW5zZm9ybSkge1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gYXJnX3RyYW5zZm9ybTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy50cmFuc2Zvcm0uUG9zaXRpb247XHJcbiAgICB9XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQucHJvdG90eXBlLkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1BvaW50LnByb3RvdHlwZS5QcmVJbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Qb2ludC5wcm90b3R5cGUuVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybS5Qb3NpdGlvbjtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQucHJvdG90eXBlLkdldFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybS5Qb3NpdGlvbjtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQucHJvdG90eXBlLklzSGl0ID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG90aGVyLklzSGl0UG9pbnQodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1BvaW50LnByb3RvdHlwZS5HZXRNYXhQb2ludEFuZE1pblBvaW50ID0gZnVuY3Rpb24gKGFyZ19vdXRwdXRNYXgsIGFyZ19vdXRwdXRNaW4pIHtcclxuICAgICAgICB2YXIgcG9pbnQgPSB0aGlzLnRyYW5zZm9ybS5Qb3NpdGlvbjtcclxuICAgICAgICBhcmdfb3V0cHV0TWF4LmRhdGEgPSBwb2ludC5kYXRhO1xyXG4gICAgICAgIGFyZ19vdXRwdXRNaW4uZGF0YSA9IHBvaW50LmRhdGE7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1BvaW50LnByb3RvdHlwZS5Jc0hpdFBvaW50ID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG90aGVyLkdldFBvc2l0aW9uKCkgPT0gdGhpcy5HZXRQb3NpdGlvbigpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Qb2ludC5wcm90b3R5cGUuSXNIaXRTcGhlcmUgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gR2VvbWV0cnlIZWxwZXJfMS5kZWZhdWx0LklzSGl0UG9pbnRTcGhlcmUodGhpcy5wb3NpdGlvbiwgb3RoZXIuZ2VvbWV0cnkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Qb2ludC5wcm90b3R5cGUuSXNIaXRCb3hfQUFCQiA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRQb2ludEJveF9BQUJCKHRoaXMucG9zaXRpb24sIG90aGVyLmdlb21ldHJ5KTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQucHJvdG90eXBlLklzSGl0Qm94X09CQiA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRQb2ludEJveF9PQkIodGhpcy5wb3NpdGlvbiwgb3RoZXIuZ2VvbWV0cnkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQ7XHJcbn0oKSk7XHJcbjtcclxudmFyIENvbGxpc2lvblByaW1pdGl2ZV9TcGhlcmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb2xsaXNpb25QcmltaXRpdmVfU3BoZXJlKGFyZ19yYWRpdXMsIGFyZ190cmFuc2Zvcm0pIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IGFyZ190cmFuc2Zvcm07XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBTcGhlcmVfMS5kZWZhdWx0KGFyZ19yYWRpdXMsIHRoaXMudHJhbnNmb3JtLlBvc2l0aW9uKTtcclxuICAgIH1cclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9TcGhlcmUucHJvdG90eXBlLkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1NwaGVyZS5wcm90b3R5cGUuUHJlSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfU3BoZXJlLnByb3RvdHlwZS5HZXRNYXhQb2ludEFuZE1pblBvaW50ID0gZnVuY3Rpb24gKGFyZ19vdXRwdXRNYXgsIGFyZ19vdXRwdXRNaW4pIHtcclxuICAgICAgICBhcmdfb3V0cHV0TWF4LmRhdGEgPSB0aGlzLmdlb21ldHJ5LnBvc2l0aW9uLkFkZChuZXcgVmVjdG9yM18xLmRlZmF1bHQodGhpcy5nZW9tZXRyeS5yYWRpdXMsIHRoaXMuZ2VvbWV0cnkucmFkaXVzLCB0aGlzLmdlb21ldHJ5LnJhZGl1cykpLmRhdGE7XHJcbiAgICAgICAgYXJnX291dHB1dE1pbi5kYXRhID0gdGhpcy5nZW9tZXRyeS5wb3NpdGlvbi5TdWIobmV3IFZlY3RvcjNfMS5kZWZhdWx0KHRoaXMuZ2VvbWV0cnkucmFkaXVzLCB0aGlzLmdlb21ldHJ5LnJhZGl1cywgdGhpcy5nZW9tZXRyeS5yYWRpdXMpKS5kYXRhO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9TcGhlcmUucHJvdG90eXBlLlVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LnBvc2l0aW9uID0gdGhpcy50cmFuc2Zvcm0uUG9zaXRpb247XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1NwaGVyZS5wcm90b3R5cGUuSXNIaXQgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gb3RoZXIuSXNIaXRTcGhlcmUodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1NwaGVyZS5wcm90b3R5cGUuSXNIaXRCb3hfT0JCID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5Jc0hpdFNwaGVyZUJveF9PQkIodGhpcy5nZW9tZXRyeSwgb3RoZXIuZ2VvbWV0cnkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9TcGhlcmUucHJvdG90eXBlLklzSGl0UG9pbnQgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gR2VvbWV0cnlIZWxwZXJfMS5kZWZhdWx0LklzSGl0UG9pbnRTcGhlcmUob3RoZXIucG9zaXRpb24sIHRoaXMuZ2VvbWV0cnkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9TcGhlcmUucHJvdG90eXBlLklzSGl0U3BoZXJlID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5Jc0hpdFNwaGVyZVNwaGVyZSh0aGlzLmdlb21ldHJ5LCBvdGhlci5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1NwaGVyZS5wcm90b3R5cGUuSXNIaXRCb3hfQUFCQiA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRTcGhlcmVCb3hfQUFCQih0aGlzLmdlb21ldHJ5LCBvdGhlci5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbGxpc2lvblByaW1pdGl2ZV9TcGhlcmU7XHJcbn0oKSk7XHJcbjtcclxudmFyIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfQUFCQiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfQUFCQihhcmdfbGVuZ3RoLCBhcmdfd2Vha190cmFuc2Zvcm0pIHtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJveF9BQUJCXzEuZGVmYXVsdChhcmdfbGVuZ3RoLCBhcmdfd2Vha190cmFuc2Zvcm0uUG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gYXJnX3dlYWtfdHJhbnNmb3JtO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuaW5pdExlbmd0aGVzID0gYXJnX2xlbmd0aC5EaXYoMik7XHJcbiAgICB9XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X0FBQkIucHJvdG90eXBlLkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCLnByb3RvdHlwZS5QcmVJbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfQUFCQi5wcm90b3R5cGUuR2V0TWF4UG9pbnRBbmRNaW5Qb2ludCA9IGZ1bmN0aW9uIChhcmdfb3V0cHV0TWF4LCBhcmdfb3V0cHV0TWluKSB7XHJcbiAgICAgICAgYXJnX291dHB1dE1heC5kYXRhID0gdGhpcy5nZW9tZXRyeS5wb3NpdGlvbi5BZGQodGhpcy5nZW9tZXRyeS5oYWxmTGVuZ3RoZXMpLmRhdGE7XHJcbiAgICAgICAgYXJnX291dHB1dE1pbi5kYXRhID0gdGhpcy5nZW9tZXRyeS5wb3NpdGlvbi5TdWIodGhpcy5nZW9tZXRyeS5oYWxmTGVuZ3RoZXMpLmRhdGE7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCLnByb3RvdHlwZS5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5wb3NpdGlvbiA9IHRoaXMudHJhbnNmb3JtLlBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuaGFsZkxlbmd0aGVzID0gdGhpcy5nZW9tZXRyeS5pbml0TGVuZ3RoZXMuTXVsdGlwbHlfVmVjMyh0aGlzLnRyYW5zZm9ybS5TY2FsZSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCLnByb3RvdHlwZS5Jc0hpdCA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBvdGhlci5Jc0hpdEJveF9BQUJCKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfQUFCQi5wcm90b3R5cGUuSXNIaXRCb3hfT0JCID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5Jc0hpdEJveF9PQkJCb3hfQUFCQih0aGlzLmdlb21ldHJ5LCBvdGhlci5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCLnByb3RvdHlwZS5Jc0hpdFBvaW50ID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5Jc0hpdFBvaW50Qm94X0FBQkIob3RoZXIucG9zaXRpb24sIHRoaXMuZ2VvbWV0cnkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfQUFCQi5wcm90b3R5cGUuSXNIaXRTcGhlcmUgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gR2VvbWV0cnlIZWxwZXJfMS5kZWZhdWx0LklzSGl0U3BoZXJlQm94X0FBQkIob3RoZXIuZ2VvbWV0cnksIHRoaXMuZ2VvbWV0cnkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfQUFCQi5wcm90b3R5cGUuSXNIaXRCb3hfQUFCQiA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRCb3hfQUFCQih0aGlzLmdlb21ldHJ5LCBvdGhlci5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfQUFCQjtcclxufSgpKTtcclxuO1xyXG52YXIgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9PQkIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQihhcmdfbGVuZ3RoLCBhcmdfd2Vha190cmFuc2Zvcm0pIHtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJveF9PQkJfMS5kZWZhdWx0KGFyZ19sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gYXJnX3dlYWtfdHJhbnNmb3JtO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuaW5pdExlbmd0aGVzID0gYXJnX2xlbmd0aC5EaXYoMik7XHJcbiAgICB9XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQi5wcm90b3R5cGUuSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQi5wcm90b3R5cGUuUHJlSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQi5wcm90b3R5cGUuR2V0TWF4UG9pbnRBbmRNaW5Qb2ludCA9IGZ1bmN0aW9uIChhcmdfb3V0cHV0TWF4LCBhcmdfb3V0cHV0TWluKSB7XHJcbiAgICAgICAgdmFyIGFhYmJfbGVndGhlcyA9IEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5HZXRCb3hfT0JCQ29udGFpbkFBQkJMZW5ndGgodGhpcy5nZW9tZXRyeSk7XHJcbiAgICAgICAgYXJnX291dHB1dE1heC5kYXRhID0gdGhpcy5nZW9tZXRyeS5wb3NpdGlvbi5BZGQoYWFiYl9sZWd0aGVzKS5kYXRhO1xyXG4gICAgICAgIGFyZ19vdXRwdXRNaW4uZGF0YSA9IHRoaXMuZ2VvbWV0cnkucG9zaXRpb24uU3ViKGFhYmJfbGVndGhlcykuZGF0YTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQi5wcm90b3R5cGUuVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkucG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybS5Qb3NpdGlvbjtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LmRpcmVjdHNbMF0gPSB0aGlzLnRyYW5zZm9ybS5HZXRSaWdodCgpO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuZGlyZWN0c1sxXSA9IHRoaXMudHJhbnNmb3JtLkdldFVwKCk7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5kaXJlY3RzWzJdID0gdGhpcy50cmFuc2Zvcm0uR2V0RnJvbnQoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZ2VvbWV0cnkuZGlyZWN0c1swXSk7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5oYWxmTGVuZ3RoZXMgPSB0aGlzLmdlb21ldHJ5LmluaXRMZW5ndGhlcy5NdWx0aXBseV9WZWMzKHRoaXMudHJhbnNmb3JtLlNjYWxlKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQi5wcm90b3R5cGUuSXNIaXQgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gb3RoZXIuSXNIaXRCb3hfT0JCKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfT0JCLnByb3RvdHlwZS5Jc0hpdEJveF9PQkIgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gR2VvbWV0cnlIZWxwZXJfMS5kZWZhdWx0LklzSGl0Qm94X09CQihvdGhlci5nZW9tZXRyeSwgdGhpcy5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9PQkIucHJvdG90eXBlLklzSGl0UG9pbnQgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gR2VvbWV0cnlIZWxwZXJfMS5kZWZhdWx0LklzSGl0UG9pbnRCb3hfT0JCKG90aGVyLnBvc2l0aW9uLCB0aGlzLmdlb21ldHJ5KTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQi5wcm90b3R5cGUuSXNIaXRTcGhlcmUgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gR2VvbWV0cnlIZWxwZXJfMS5kZWZhdWx0LklzSGl0U3BoZXJlQm94X09CQihvdGhlci5nZW9tZXRyeSwgdGhpcy5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9PQkIucHJvdG90eXBlLklzSGl0Qm94X0FBQkIgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gR2VvbWV0cnlIZWxwZXJfMS5kZWZhdWx0LklzSGl0Qm94X09CQkJveF9BQUJCKG90aGVyLmdlb21ldHJ5LCB0aGlzLmdlb21ldHJ5KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9PQkI7XHJcbn0oKSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBWZWN0b3I0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL01hdGgvVmVjdG9yNFwiKSk7XHJcbnZhciBDb2xvckNvbnRyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb2xvckNvbnRyb2xsZXIoKSB7XHJcbiAgICB9XHJcbiAgICBDb2xvckNvbnRyb2xsZXIuaHN2YSA9IGZ1bmN0aW9uIChoLCBzLCB2LCBhKSB7XHJcbiAgICAgICAgaWYgKHMgPiAxIHx8IHYgPiAxIHx8IGEgPiAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRoID0gaCAlIDM2MDtcclxuICAgICAgICB2YXIgaSA9IE1hdGguZmxvb3IodGggLyA2MCk7XHJcbiAgICAgICAgdmFyIGYgPSB0aCAvIDYwIC0gaTtcclxuICAgICAgICB2YXIgbSA9IHYgKiAoMSAtIHMpO1xyXG4gICAgICAgIHZhciBuID0gdiAqICgxIC0gcyAqIGYpO1xyXG4gICAgICAgIHZhciBrID0gdiAqICgxIC0gcyAqICgxIC0gZikpO1xyXG4gICAgICAgIHZhciBjb2xvcjtcclxuICAgICAgICBpZiAoIShzID4gMCkgJiYgIShzIDwgMCkpIHtcclxuICAgICAgICAgICAgY29sb3IgPSBuZXcgVmVjdG9yNF8xLmRlZmF1bHQodiwgdiwgdiwgYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgciA9IG5ldyBBcnJheSh2LCBuLCBtLCBtLCBrLCB2KTtcclxuICAgICAgICAgICAgdmFyIGcgPSBuZXcgQXJyYXkoaywgdiwgdiwgbiwgbSwgbSk7XHJcbiAgICAgICAgICAgIHZhciBiID0gbmV3IEFycmF5KG0sIG0sIGssIHYsIHYsIG4pO1xyXG4gICAgICAgICAgICBjb2xvciA9IG5ldyBWZWN0b3I0XzEuZGVmYXVsdChyW2ldLCBnW2ldLCBiW2ldLCBhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb2xvckNvbnRyb2xsZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENvbG9yQ29udHJvbGxlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEVhc2luZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEVhc2luZygpIHtcclxuICAgIH1cclxuICAgIEVhc2luZy5FYXNlSW5TaW5lID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICByZXR1cm4gMSAtIE1hdGguY29zKCh4ICogTWF0aC5QSSkgLyAyKTtcclxuICAgIH07XHJcbiAgICBFYXNpbmcuRWFzZU91dFNpbmUgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNpbigoeCAqIE1hdGguUEkpIC8gMik7XHJcbiAgICB9O1xyXG4gICAgRWFzaW5nLkVhc2VJbk91dFNpbmUgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHJldHVybiAtKE1hdGguY29zKE1hdGguUEkgKiB4KSAtIDEpIC8gMjtcclxuICAgIH07XHJcbiAgICBFYXNpbmcuRWFzZUluUXVhZCA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHggKiB4O1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5FYXNlT3V0UXVhZCA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgcmV0dXJuIDEgLSAoMSAtIHgpICogKDEgLSB4KTtcclxuICAgIH07XHJcbiAgICBFYXNpbmcuRWFzZUluT3V0UXVhZCA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHggPCAwLjUgPyAyICogeCAqIHggOiAxIC0gTWF0aC5wb3coLTIgKiB4ICsgMiwgMikgLyAyO1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5FYXNlSW5DdWJpYyA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHggKiB4ICogeDtcclxuICAgIH07XHJcbiAgICBFYXNpbmcuRWFzZU91dEN1YmljID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICByZXR1cm4gMSAtIE1hdGgucG93KDEgLSB4LCAzKTtcclxuICAgIH07XHJcbiAgICBFYXNpbmcuRWFzZUluT3V0Q3ViaWMgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHJldHVybiB4IDwgMC41ID8gNCAqIHggKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCAzKSAvIDI7XHJcbiAgICB9O1xyXG4gICAgRWFzaW5nLkVhc2VJblF1YXJ0ID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICByZXR1cm4geCAqIHggKiB4ICogeDtcclxuICAgIH07XHJcbiAgICBFYXNpbmcuRWFzZU91dFF1YXJ0ID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICByZXR1cm4gMSAtIE1hdGgucG93KDEgLSB4LCA0KTtcclxuICAgIH07XHJcbiAgICBFYXNpbmcuRWFzZUluT3V0UXVhcnQgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHJldHVybiB4IDwgMC41ID8gOCAqIHggKiB4ICogeCAqIHggOiAxIC0gTWF0aC5wb3coLTIgKiB4ICsgMiwgNCkgLyAyO1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5FYXNlSW5DaXJjID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICByZXR1cm4gMSAtIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeCwgMikpO1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5FYXNlT3V0Q2lyYyA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeCAtIDEsIDIpKTtcclxuICAgIH07XHJcbiAgICBFYXNpbmcuRWFzZUluT3V0Q2lyYyA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHggPCAwLjVcclxuICAgICAgICAgICAgPyAoMSAtIE1hdGguc3FydCgxIC0gTWF0aC5wb3coMiAqIHgsIDIpKSkgLyAyXHJcbiAgICAgICAgICAgIDogKE1hdGguc3FydCgxIC0gTWF0aC5wb3coLTIgKiB4ICsgMiwgMikpICsgMSkgLyAyO1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5FYXNlSW5CYWNrID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICB2YXIgYzEgPSAxLjcwMTU4O1xyXG4gICAgICAgIHZhciBjMyA9IGMxICsgMTtcclxuICAgICAgICByZXR1cm4gYzMgKiB4ICogeCAqIHggLSBjMSAqIHggKiB4O1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5FYXNlT3V0QmFjayA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgdmFyIGMxID0gMS43MDE1ODtcclxuICAgICAgICB2YXIgYzMgPSBjMSArIDE7XHJcbiAgICAgICAgcmV0dXJuIDEgKyBjMyAqIE1hdGgucG93KHggLSAxLCAzKSArIGMxICogTWF0aC5wb3coeCAtIDEsIDIpO1xyXG4gICAgfTtcclxuICAgIEVhc2luZy5FYXNlSW5PdXRCYWNrID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICB2YXIgYzEgPSAxLjcwMTU4O1xyXG4gICAgICAgIHZhciBjMiA9IGMxICogMS41MjU7XHJcbiAgICAgICAgcmV0dXJuIHggPCAwLjVcclxuICAgICAgICAgICAgPyAoTWF0aC5wb3coMiAqIHgsIDIpICogKChjMiArIDEpICogMiAqIHggLSBjMikpIC8gMlxyXG4gICAgICAgICAgICA6IChNYXRoLnBvdygyICogeCAtIDIsIDIpICogKChjMiArIDEpICogKHggKiAyIC0gMikgKyBjMikgKyAyKSAvIDI7XHJcbiAgICB9O1xyXG4gICAgRWFzaW5nLkVhc2VJbkVsYXN0aWMgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHZhciBjNCA9ICgyICogTWF0aC5QSSkgLyAzO1xyXG4gICAgICAgIHJldHVybiB4ID09PSAwXHJcbiAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICA6IHggPT09IDFcclxuICAgICAgICAgICAgICAgID8gMVxyXG4gICAgICAgICAgICAgICAgOiAtTWF0aC5wb3coMiwgMTAgKiB4IC0gMTApICogTWF0aC5zaW4oKHggKiAxMCAtIDEwLjc1KSAqIGM0KTtcclxuICAgIH07XHJcbiAgICBFYXNpbmcuRWFzZU91dEVsYXN0aWMgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHZhciBjNCA9ICgyICogTWF0aC5QSSkgLyAzO1xyXG4gICAgICAgIHJldHVybiB4ID09PSAwXHJcbiAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICA6IHggPT09IDFcclxuICAgICAgICAgICAgICAgID8gMVxyXG4gICAgICAgICAgICAgICAgOiBNYXRoLnBvdygyLCAtMTAgKiB4KSAqIE1hdGguc2luKCh4ICogMTAgLSAwLjc1KSAqIGM0KSArIDE7XHJcbiAgICB9O1xyXG4gICAgRWFzaW5nLkVhc2VJbk91dEVsYXN0aWMgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHZhciBjNSA9ICgyICogTWF0aC5QSSkgLyA0LjU7XHJcbiAgICAgICAgcmV0dXJuIHggPT09IDBcclxuICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgIDogeCA9PT0gMVxyXG4gICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICA6IHggPCAwLjVcclxuICAgICAgICAgICAgICAgICAgICA/IC0oTWF0aC5wb3coMiwgMjAgKiB4IC0gMTApICogTWF0aC5zaW4oKDIwICogeCAtIDExLjEyNSkgKiBjNSkpIC8gMlxyXG4gICAgICAgICAgICAgICAgICAgIDogKE1hdGgucG93KDIsIC0yMCAqIHggKyAxMCkgKiBNYXRoLnNpbigoMjAgKiB4IC0gMTEuMTI1KSAqIGM1KSkgLyAyICsgMTtcclxuICAgIH07XHJcbiAgICBFYXNpbmcuRWFzZUluUXVpbnQgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHJldHVybiB4ICogeCAqIHggKiB4ICogeDtcclxuICAgIH07XHJcbiAgICBFYXNpbmcuRWFzZU91dFF1aW50ID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICByZXR1cm4gMSAtIE1hdGgucG93KDEgLSB4LCA1KTtcclxuICAgIH07XHJcbiAgICBFYXNpbmcuRWFzZUluT3V0UXVpbnQgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHJldHVybiB4IDwgMC41ID8gMTYgKiB4ICogeCAqIHggKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCA1KSAvIDI7XHJcbiAgICB9O1xyXG4gICAgRWFzaW5nLkVhc2VJbkV4cG8gPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHJldHVybiB4ID09PSAwID8gMCA6IE1hdGgucG93KDIsIDEwICogeCAtIDEwKTtcclxuICAgIH07XHJcbiAgICBFYXNpbmcuRWFzZU91dEV4cG8gPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHJldHVybiB4ID09PSAxID8gMSA6IDEgLSBNYXRoLnBvdygyLCAtMTAgKiB4KTtcclxuICAgIH07XHJcbiAgICBFYXNpbmcuRWFzZUluT3V0RXhwbyA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHggPT09IDBcclxuICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgIDogeCA9PT0gMVxyXG4gICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICA6IHggPCAwLjUgPyBNYXRoLnBvdygyLCAyMCAqIHggLSAxMCkgLyAyXHJcbiAgICAgICAgICAgICAgICAgICAgOiAoMiAtIE1hdGgucG93KDIsIC0yMCAqIHggKyAxMCkpIC8gMjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRWFzaW5nO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBFYXNpbmc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBGaWxlTG9hZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRmlsZUxvYWRlcigpIHtcclxuICAgIH1cclxuICAgIEZpbGVMb2FkZXIuTG9hZFRleHQgPSBmdW5jdGlvbiAoYXJnX2ZpbGVQYXRoLCBpc0FzeW5jaCkge1xyXG4gICAgICAgIHZhciB4bWxIdHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgaWYgKGlzQXN5bmNoKVxyXG4gICAgICAgICAgICB4bWxIdHRwLm9wZW4oXCJHRVRcIiwgYXJnX2ZpbGVQYXRoLCBpc0FzeW5jaCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHhtbEh0dHAub3BlbihcIkdFVFwiLCBhcmdfZmlsZVBhdGgsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgeG1sSHR0cC5zZW5kKG51bGwpO1xyXG4gICAgICAgIHZhciBkYXRhID0geG1sSHR0cC5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG4gICAgRmlsZUxvYWRlci5Mb2FkQmluID0gZnVuY3Rpb24gKGFyZ19maWxlUGF0aCwgYXJnX291dCkge1xyXG4gICAgICAgIHZhciB4bWxIdHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeG1sSHR0cC5vcGVuKFwiR0VUXCIsIGFyZ19maWxlUGF0aCwgdHJ1ZSk7XHJcbiAgICAgICAgeG1sSHR0cC5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XHJcbiAgICAgICAgeG1sSHR0cC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIE9uQmluTG9hZChhcmdfb3V0LCB4bWxIdHRwLnJlc3BvbnNlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHhtbEh0dHAuc2VuZChudWxsKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRmlsZUxvYWRlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRmlsZUxvYWRlcjtcclxuZnVuY3Rpb24gT25CaW5Mb2FkKGFyZ19vdXQsIGFyZ19hcnlCdWZmZXIpIHtcclxuICAgIGFyZ19vdXQuYnVmZmVyID0gYXJnX2FyeUJ1ZmZlcjtcclxuICAgIGFyZ19vdXQuSW5pdGlhbGl6ZSgpO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDb2xvckNvbnRyb2xsZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db2xvckNvbnRyb2xsZXJcIikpO1xyXG52YXIgR2VvbWV0cnlHZW5lcmF0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHZW9tZXRyeUdlbmVyYXRlcigpIHtcclxuICAgIH1cclxuICAgIEdlb21ldHJ5R2VuZXJhdGVyLkNyZWF0ZVRvcnVzID0gZnVuY3Rpb24gKHJvdywgY29sdW1uLCBpcmFkLCBvcmFkLCBjb2xvcikge1xyXG4gICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoKSwgbm9yID0gbmV3IEFycmF5KCksIGNvbCA9IG5ldyBBcnJheSgpLCBzdCA9IG5ldyBBcnJheSgpLCBpZHggPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSByb3c7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGguUEkgKiAyIC8gcm93ICogaTtcclxuICAgICAgICAgICAgdmFyIHJyID0gTWF0aC5jb3Mocik7XHJcbiAgICAgICAgICAgIHZhciByeSA9IE1hdGguc2luKHIpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDw9IGNvbHVtbjsgaWkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyID0gTWF0aC5QSSAqIDIgLyBjb2x1bW4gKiBpaTtcclxuICAgICAgICAgICAgICAgIHZhciB0eCA9IChyciAqIGlyYWQgKyBvcmFkKSAqIE1hdGguY29zKHRyKTtcclxuICAgICAgICAgICAgICAgIHZhciB0eSA9IHJ5ICogaXJhZDtcclxuICAgICAgICAgICAgICAgIHZhciB0eiA9IChyciAqIGlyYWQgKyBvcmFkKSAqIE1hdGguc2luKHRyKTtcclxuICAgICAgICAgICAgICAgIHZhciByeCA9IHJyICogTWF0aC5jb3ModHIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJ6ID0gcnIgKiBNYXRoLnNpbih0cik7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGM7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YyA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGMgPSBDb2xvckNvbnRyb2xsZXJfMS5kZWZhdWx0LmhzdmEoMzYwIC8gY29sdW1uICogaWksIDEsIDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHJzID0gMSAvIGNvbHVtbiAqIGlpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJ0ID0gMSAvIHJvdyAqIGkgKyAwLjU7XHJcbiAgICAgICAgICAgICAgICBpZiAocnQgPiAxLjApIHtcclxuICAgICAgICAgICAgICAgICAgICBydCAtPSAxLjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydCA9IDEuMCAtIHJ0O1xyXG4gICAgICAgICAgICAgICAgcG9zLnB1c2godHgsIHR5LCB0eik7XHJcbiAgICAgICAgICAgICAgICBub3IucHVzaChyeCwgcnksIHJ6KTtcclxuICAgICAgICAgICAgICAgIGNvbC5wdXNoKHRjLngsIHRjLnksIHRjLnosIHRjLncpO1xyXG4gICAgICAgICAgICAgICAgc3QucHVzaChycywgcnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByb3c7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGlpID0gMDsgaWkgPCBjb2x1bW47IGlpKyspIHtcclxuICAgICAgICAgICAgICAgIHIgPSAoY29sdW1uICsgMSkgKiBpICsgaWk7XHJcbiAgICAgICAgICAgICAgICBpZHgucHVzaChyLCByICsgY29sdW1uICsgMSwgciArIDEpO1xyXG4gICAgICAgICAgICAgICAgaWR4LnB1c2gociArIGNvbHVtbiArIDEsIHIgKyBjb2x1bW4gKyAyLCByICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IHsgcDogcG9zLCBuOiBub3IsIGM6IGNvbCwgdXY6IHN0LCBpOiBpZHggfTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5R2VuZXJhdGVyLkNyZWF0ZVNwaGVyZSA9IGZ1bmN0aW9uIChyb3csIGNvbHVtbiwgcmFkLCBjb2xvcikge1xyXG4gICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoKSwgbm9yID0gbmV3IEFycmF5KCksIGNvbCA9IG5ldyBBcnJheSgpLCBzdCA9IG5ldyBBcnJheSgpLCBpZHggPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSByb3c7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGguUEkgLyByb3cgKiBpO1xyXG4gICAgICAgICAgICB2YXIgcnkgPSBNYXRoLmNvcyhyKTtcclxuICAgICAgICAgICAgdmFyIHJyID0gTWF0aC5zaW4ocik7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPD0gY29sdW1uOyBpaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHIgPSBNYXRoLlBJICogMiAvIGNvbHVtbiAqIGlpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHR4ID0gcnIgKiByYWQgKiBNYXRoLmNvcyh0cik7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHkgPSByeSAqIHJhZDtcclxuICAgICAgICAgICAgICAgIHZhciB0eiA9IHJyICogcmFkICogTWF0aC5zaW4odHIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJ4ID0gcnIgKiBNYXRoLmNvcyh0cik7XHJcbiAgICAgICAgICAgICAgICB2YXIgcnogPSByciAqIE1hdGguc2luKHRyKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YyA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGMgPSBDb2xvckNvbnRyb2xsZXJfMS5kZWZhdWx0LmhzdmEoMzYwIC8gcm93ICogaSwgMSwgMSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwb3MucHVzaCh0eCwgdHksIHR6KTtcclxuICAgICAgICAgICAgICAgIG5vci5wdXNoKHJ4LCByeSwgcnopO1xyXG4gICAgICAgICAgICAgICAgY29sLnB1c2godGNbMF0sIHRjWzFdLCB0Y1syXSwgdGNbM10pO1xyXG4gICAgICAgICAgICAgICAgc3QucHVzaCgxIC0gMSAvIGNvbHVtbiAqIGlpLCAxIC8gcm93ICogaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgciA9IDA7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJvdzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAoaWkgPSAwOyBpaSA8IGNvbHVtbjsgaWkrKykge1xyXG4gICAgICAgICAgICAgICAgciA9IChjb2x1bW4gKyAxKSAqIGkgKyBpaTtcclxuICAgICAgICAgICAgICAgIGlkeC5wdXNoKHIsIHIgKyAxLCByICsgY29sdW1uICsgMik7XHJcbiAgICAgICAgICAgICAgICBpZHgucHVzaChyLCByICsgY29sdW1uICsgMiwgciArIGNvbHVtbiArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHA6IHBvcywgbjogbm9yLCBjOiBjb2wsIHV2OiBzdCwgaTogaWR4IH07XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlHZW5lcmF0ZXIuQ3JlYXRlQ3ViZSA9IGZ1bmN0aW9uIChzaWRlLCBjb2xvcikge1xyXG4gICAgICAgIHZhciBocyA9IHNpZGUgKiAwLjU7XHJcbiAgICAgICAgdmFyIHBvcyA9IFtcclxuICAgICAgICAgICAgLWhzLCAtaHMsIGhzLCBocywgLWhzLCBocywgaHMsIGhzLCBocywgLWhzLCBocywgaHMsXHJcbiAgICAgICAgICAgIC1ocywgLWhzLCAtaHMsIC1ocywgaHMsIC1ocywgaHMsIGhzLCAtaHMsIGhzLCAtaHMsIC1ocyxcclxuICAgICAgICAgICAgLWhzLCBocywgLWhzLCAtaHMsIGhzLCBocywgaHMsIGhzLCBocywgaHMsIGhzLCAtaHMsXHJcbiAgICAgICAgICAgIC1ocywgLWhzLCAtaHMsIGhzLCAtaHMsIC1ocywgaHMsIC1ocywgaHMsIC1ocywgLWhzLCBocyxcclxuICAgICAgICAgICAgaHMsIC1ocywgLWhzLCBocywgaHMsIC1ocywgaHMsIGhzLCBocywgaHMsIC1ocywgaHMsXHJcbiAgICAgICAgICAgIC1ocywgLWhzLCAtaHMsIC1ocywgLWhzLCBocywgLWhzLCBocywgaHMsIC1ocywgaHMsIC1oc1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgdmFyIG5vciA9IFtcclxuICAgICAgICAgICAgLTEuMCwgLTEuMCwgMS4wLCAxLjAsIC0xLjAsIDEuMCwgMS4wLCAxLjAsIDEuMCwgLTEuMCwgMS4wLCAxLjAsXHJcbiAgICAgICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsIC0xLjAsIDEuMCwgLTEuMCwgMS4wLCAxLjAsIC0xLjAsIDEuMCwgLTEuMCwgLTEuMCxcclxuICAgICAgICAgICAgLTEuMCwgMS4wLCAtMS4wLCAtMS4wLCAxLjAsIDEuMCwgMS4wLCAxLjAsIDEuMCwgMS4wLCAxLjAsIC0xLjAsXHJcbiAgICAgICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsIDEuMCwgLTEuMCwgLTEuMCwgMS4wLCAtMS4wLCAxLjAsIC0xLjAsIC0xLjAsIDEuMCxcclxuICAgICAgICAgICAgMS4wLCAtMS4wLCAtMS4wLCAxLjAsIDEuMCwgLTEuMCwgMS4wLCAxLjAsIDEuMCwgMS4wLCAtMS4wLCAxLjAsXHJcbiAgICAgICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsIC0xLjAsIC0xLjAsIDEuMCwgLTEuMCwgMS4wLCAxLjAsIC0xLjAsIDEuMCwgLTEuMFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdmFyIGNvbCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zLmxlbmd0aCAvIDM7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YyA9IGNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGMgPSBDb2xvckNvbnRyb2xsZXJfMS5kZWZhdWx0LmhzdmEoMzYwIC8gcG9zLmxlbmd0aCAvIDMgKiBpLCAxLCAxLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb2wucHVzaCh0Yy54LCB0Yy55LCB0Yy56LCB0Yy53KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN0ID0gW1xyXG4gICAgICAgICAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCxcclxuICAgICAgICAgICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXHJcbiAgICAgICAgICAgIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLFxyXG4gICAgICAgICAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCxcclxuICAgICAgICAgICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXHJcbiAgICAgICAgICAgIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wXHJcbiAgICAgICAgXTtcclxuICAgICAgICB2YXIgaWR4ID0gW1xyXG4gICAgICAgICAgICAwLCAxLCAyLCAwLCAyLCAzLFxyXG4gICAgICAgICAgICA0LCA1LCA2LCA0LCA2LCA3LFxyXG4gICAgICAgICAgICA4LCA5LCAxMCwgOCwgMTAsIDExLFxyXG4gICAgICAgICAgICAxMiwgMTMsIDE0LCAxMiwgMTQsIDE1LFxyXG4gICAgICAgICAgICAxNiwgMTcsIDE4LCAxNiwgMTgsIDE5LFxyXG4gICAgICAgICAgICAyMCwgMjEsIDIyLCAyMCwgMjIsIDIzXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4geyBwOiBwb3MsIG46IG5vciwgYzogY29sLCB1djogc3QsIGk6IGlkeCB9O1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5R2VuZXJhdGVyLkNyZWF0ZVBsYW5lID0gZnVuY3Rpb24gKGFyZ19zaXplLCBpc1JldmVyc2UsIGFyZ19jb2xvcikge1xyXG4gICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB2YXIgbm9yID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdmFyIGNvbCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHZhciBpZHggPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBwb3MgPSBbXHJcbiAgICAgICAgICAgIC1hcmdfc2l6ZS54LCBhcmdfc2l6ZS55LCAwLjAsXHJcbiAgICAgICAgICAgIGFyZ19zaXplLngsIGFyZ19zaXplLnksIDAuMCxcclxuICAgICAgICAgICAgLWFyZ19zaXplLngsIC1hcmdfc2l6ZS55LCAwLjAsXHJcbiAgICAgICAgICAgIGFyZ19zaXplLngsIC1hcmdfc2l6ZS55LCAwLjAsXHJcbiAgICAgICAgXTtcclxuICAgICAgICBub3IgPSBbXHJcbiAgICAgICAgICAgIDAuMCwgMC4wLCAtMS4wLFxyXG4gICAgICAgICAgICAwLjAsIDAuMCwgLTEuMCxcclxuICAgICAgICAgICAgMC4wLCAwLjAsIC0xLjAsXHJcbiAgICAgICAgICAgIDAuMCwgMC4wLCAtMS4wLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgaWYgKGFyZ19jb2xvcilcclxuICAgICAgICAgICAgY29sID0gW1xyXG4gICAgICAgICAgICAgICAgYXJnX2NvbG9yLngsIGFyZ19jb2xvci55LCBhcmdfY29sb3IueiwgYXJnX2NvbG9yLncsXHJcbiAgICAgICAgICAgICAgICBhcmdfY29sb3IueCwgYXJnX2NvbG9yLnksIGFyZ19jb2xvci56LCBhcmdfY29sb3IudyxcclxuICAgICAgICAgICAgICAgIGFyZ19jb2xvci54LCBhcmdfY29sb3IueSwgYXJnX2NvbG9yLnosIGFyZ19jb2xvci53LFxyXG4gICAgICAgICAgICAgICAgYXJnX2NvbG9yLngsIGFyZ19jb2xvci55LCBhcmdfY29sb3IueiwgYXJnX2NvbG9yLncsXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgaWR4ID0gW1xyXG4gICAgICAgICAgICAyLCAzLCAxLFxyXG4gICAgICAgICAgICAyLCAxLCAwLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgaWYgKGlzUmV2ZXJzZSlcclxuICAgICAgICAgICAgdXYgPSBbXHJcbiAgICAgICAgICAgICAgICAwLjAsIDEuMCxcclxuICAgICAgICAgICAgICAgIDEuMCwgMS4wLFxyXG4gICAgICAgICAgICAgICAgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAxLjAsIDAuMFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB1diA9IFtcclxuICAgICAgICAgICAgICAgIDAuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgMS4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAwLjAsIDEuMCxcclxuICAgICAgICAgICAgICAgIDEuMCwgMS4wXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHA6IHBvcywgbjogbm9yLCBjOiBjb2wsIGk6IGlkeCwgdXY6IHV2IH07XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlHZW5lcmF0ZXIuQ3JlYXRlVGV4dEdlb21ldHJ5ID0gZnVuY3Rpb24gKHRleHRMZW5ndGgpIHtcclxuICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdmFyIGlkeCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHZhciB1bml0ID0gMS4wO1xyXG4gICAgICAgIHZhciBoYWxmID0gdGV4dExlbmd0aCAvIDIuMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHRMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBwb3MucHVzaCgtdW5pdCAqIDAuNSArIGkgKiB1bml0IC0gdW5pdCAqIGhhbGYsIHVuaXQsIDAuMCk7XHJcbiAgICAgICAgICAgIHBvcy5wdXNoKHVuaXQgKiAwLjUgKyBpICogdW5pdCAtIHVuaXQgKiBoYWxmLCB1bml0LCAwLjApO1xyXG4gICAgICAgICAgICBwb3MucHVzaCgtdW5pdCAqIDAuNSArIGkgKiB1bml0IC0gdW5pdCAqIGhhbGYsIC11bml0LCAwLjApO1xyXG4gICAgICAgICAgICBwb3MucHVzaCh1bml0ICogMC41ICsgaSAqIHVuaXQgLSB1bml0ICogaGFsZiwgLXVuaXQsIDAuMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlkeC5wdXNoKDIgKyBpICogNCwgMyArIGkgKiA0LCAxICsgaSAqIDQpO1xyXG4gICAgICAgICAgICBpZHgucHVzaCgyICsgaSAqIDQsIDEgKyBpICogNCwgMCArIGkgKiA0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0TGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdXYucHVzaCgwLjAsIDEuMCk7XHJcbiAgICAgICAgICAgIHV2LnB1c2goMS4wLCAxLjApO1xyXG4gICAgICAgICAgICB1di5wdXNoKDAuMCwgMC4wKTtcclxuICAgICAgICAgICAgdXYucHVzaCgxLjAsIDAuMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHA6IHBvcywgaTogaWR4LCB1djogdXYgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2VvbWV0cnlHZW5lcmF0ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEdlb21ldHJ5R2VuZXJhdGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9NYXRoL1ZlY3RvcjJcIikpO1xyXG52YXIgSW5wdXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBJbnB1dCgpIHtcclxuICAgIH1cclxuICAgIElucHV0LkdldENhbnZhc1Bvc2l0aW9uID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KGUuY2xpZW50WCAtIHRoaXMuY2FudmFzLm9mZnNldExlZnQgLSB0aGlzLmNhbnZhcy53aWR0aCAqIDAuNSwgZS5jbGllbnRZIC0gdGhpcy5jYW52YXMub2Zmc2V0VG9wIC0gdGhpcy5jYW52YXMuaGVpZ2h0ICogMC41KTtcclxuICAgIH07XHJcbiAgICBJbnB1dC5BZGRDbGlja0V2ZW50ID0gZnVuY3Rpb24gKGFyZ19vYmosIGFyZ19ldmVudE5hbWUsIGlzVXNlRXZlbnQpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSB0aGlzLmNsaWNrRXZlbnRzW2FyZ19ldmVudE5hbWVdO1xyXG4gICAgICAgIGlmICghZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQgPSB7IG9iajogYXJnX29iaiwgaGFuZGxlRXZlbnQ6IE9uQ2xpY2sgfTtcclxuICAgICAgICAgICAgdGhpcy5jbGlja0V2ZW50c1thcmdfZXZlbnROYW1lXSA9IGV2ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNVc2VFdmVudClcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50LCBpc1VzZUV2ZW50KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIElucHV0LkFkZE1vdXNlRG93bkV2ZW50ID0gZnVuY3Rpb24gKGFyZ19vYmosIGFyZ19ldmVudE5hbWUsIGlzVXNlRXZlbnQpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSB0aGlzLm1vdXNlRG93bkV2ZW50c1thcmdfZXZlbnROYW1lXTtcclxuICAgICAgICBpZiAoIWV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50ID0geyBvYmo6IGFyZ19vYmosIGhhbmRsZUV2ZW50OiBPbk1vdXNlRG93biB9O1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93bkV2ZW50c1thcmdfZXZlbnROYW1lXSA9IGV2ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNVc2VFdmVudClcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBldmVudCwgaXNVc2VFdmVudCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZXZlbnQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSW5wdXQuQWRkTW91c2VVcEV2ZW50ID0gZnVuY3Rpb24gKGFyZ19vYmosIGFyZ19ldmVudE5hbWUsIGlzVXNlRXZlbnQpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSB0aGlzLm1vdXNlVXBFdmVudHNbYXJnX2V2ZW50TmFtZV07XHJcbiAgICAgICAgaWYgKCFldmVudCkge1xyXG4gICAgICAgICAgICBldmVudCA9IHsgb2JqOiBhcmdfb2JqLCBoYW5kbGVFdmVudDogT25Nb3VzZVVwIH07XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVVwRXZlbnRzW2FyZ19ldmVudE5hbWVdID0gZXZlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1VzZUV2ZW50KVxyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBldmVudCwgaXNVc2VFdmVudCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIElucHV0LkFkZEtleVVwRXZlbnQgPSBmdW5jdGlvbiAoYXJnX29iaiwgYXJnX2V2ZW50TmFtZSwgaXNVc2VFdmVudCkge1xyXG4gICAgICAgIHZhciBldmVudCA9IHRoaXMua2V5VXBFdmVudHNbYXJnX2V2ZW50TmFtZV07XHJcbiAgICAgICAgaWYgKCFldmVudCkge1xyXG4gICAgICAgICAgICBldmVudCA9IHsgb2JqOiBhcmdfb2JqLCBoYW5kbGVFdmVudDogT25LZXlVcCB9O1xyXG4gICAgICAgICAgICB0aGlzLmtleVVwRXZlbnRzW2FyZ19ldmVudE5hbWVdID0gZXZlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1VzZUV2ZW50KVxyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZXZlbnQsIGlzVXNlRXZlbnQpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZXZlbnQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSW5wdXQuQWRkS2V5RG93bkV2ZW50ID0gZnVuY3Rpb24gKGFyZ19vYmosIGFyZ19ldmVudE5hbWUsIGlzVXNlRXZlbnQpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSB0aGlzLmtleURvd25FdmVudHNbYXJnX2V2ZW50TmFtZV07XHJcbiAgICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQgPSB7IG9iajogYXJnX29iaiwgaGFuZGxlRXZlbnQ6IE9uS2V5RG93biB9O1xyXG4gICAgICAgIHRoaXMua2V5RG93bkV2ZW50c1thcmdfZXZlbnROYW1lXSA9IGV2ZW50O1xyXG4gICAgICAgIGlmIChpc1VzZUV2ZW50KVxyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCwgaXNVc2VFdmVudCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIElucHV0LkFkZE1vdXNlTW92ZUV2ZW50ID0gZnVuY3Rpb24gKGFyZ19vYmosIGFyZ19ldmVudE5hbWUsIGlzVXNlRXZlbnQpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSB0aGlzLm1vdXNlTW92ZUV2ZW50c1thcmdfZXZlbnROYW1lXTtcclxuICAgICAgICBpZiAoIWV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50ID0geyBvYmo6IGFyZ19vYmosIGhhbmRsZUV2ZW50OiBPbk1vdXNlTW92ZSB9O1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlTW92ZUV2ZW50c1thcmdfZXZlbnROYW1lXSA9IGV2ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNVc2VFdmVudClcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBldmVudCwgaXNVc2VFdmVudCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZXZlbnQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSW5wdXQuQWRkTW91c2VXaGVlbEV2ZW50ID0gZnVuY3Rpb24gKGFyZ19vYmosIGFyZ19ldmVudE5hbWUsIGlzVXNlRXZlbnQpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSB0aGlzLm1vdXNlV2hlZWxFdmVudHNbYXJnX2V2ZW50TmFtZV07XHJcbiAgICAgICAgaWYgKCFldmVudCkge1xyXG4gICAgICAgICAgICBldmVudCA9IHsgb2JqOiBhcmdfb2JqLCBoYW5kbGVFdmVudDogT25Nb3VzZVdoZWVsIH07XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VXaGVlbEV2ZW50c1thcmdfZXZlbnROYW1lXSA9IGV2ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNVc2VFdmVudClcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgZXZlbnQsIGlzVXNlRXZlbnQpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCBldmVudCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBJbnB1dC5SZW1vdmVLZXlEb3duRXZlbnQgPSBmdW5jdGlvbiAoYXJnX2V2ZW50TmFtZSkge1xyXG4gICAgICAgIHZhciBldmVudCA9IHRoaXMua2V5RG93bkV2ZW50c1thcmdfZXZlbnROYW1lXTtcclxuICAgICAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJnX2V2ZW50TmFtZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50LCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5rZXlEb3duRXZlbnRzW2FyZ19ldmVudE5hbWVdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSW5wdXQuUmVtb3ZlS2V5VXBFdmVudCA9IGZ1bmN0aW9uIChhcmdfZXZlbnROYW1lKSB7XHJcbiAgICAgICAgdmFyIGV2ZW50ID0gdGhpcy5rZXlVcEV2ZW50c1thcmdfZXZlbnROYW1lXTtcclxuICAgICAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGV2ZW50LCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5rZXlVcEV2ZW50c1thcmdfZXZlbnROYW1lXSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIElucHV0LlJlbW92ZUNsaWNrRXZlbnQgPSBmdW5jdGlvbiAoYXJnX2V2ZW50TmFtZSkge1xyXG4gICAgICAgIHZhciBldmVudCA9IHRoaXMuY2xpY2tFdmVudHNbYXJnX2V2ZW50TmFtZV07XHJcbiAgICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2tFdmVudHNbYXJnX2V2ZW50TmFtZV0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBJbnB1dC5SZW1vdmVNb3VzZVVwRXZlbnQgPSBmdW5jdGlvbiAoYXJnX2V2ZW50TmFtZSkge1xyXG4gICAgICAgIHZhciBldmVudCA9IHRoaXMubW91c2VVcEV2ZW50c1thcmdfZXZlbnROYW1lXTtcclxuICAgICAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZXZlbnQsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlVXBFdmVudHNbYXJnX2V2ZW50TmFtZV0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBJbnB1dC5SZW1vdmVNb3VzZURvd25FdmVudCA9IGZ1bmN0aW9uIChhcmdfZXZlbnROYW1lKSB7XHJcbiAgICAgICAgdmFyIGV2ZW50ID0gdGhpcy5tb3VzZURvd25FdmVudHNbYXJnX2V2ZW50TmFtZV07XHJcbiAgICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3NlZG93blwiLCBldmVudCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duRXZlbnRzW2FyZ19ldmVudE5hbWVdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSW5wdXQuUmVtb3ZlTW91c2VNb3ZlRXZlbnQgPSBmdW5jdGlvbiAoYXJnX2V2ZW50TmFtZSkge1xyXG4gICAgICAgIHZhciBldmVudCA9IHRoaXMubW91c2VNb3ZlRXZlbnRzW2FyZ19ldmVudE5hbWVdO1xyXG4gICAgICAgIGlmIChldmVudCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGV2ZW50LCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZU1vdmVFdmVudHNbYXJnX2V2ZW50TmFtZV0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBJbnB1dC5SZW1vdmVXaGVlbEV2ZW50ID0gZnVuY3Rpb24gKGFyZ19ldmVudE5hbWUpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSB0aGlzLm1vdXNlV2hlZWxFdmVudHNbYXJnX2V2ZW50TmFtZV07XHJcbiAgICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIGV2ZW50LCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVdoZWVsRXZlbnRzW2FyZ19ldmVudE5hbWVdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSW5wdXQuY2xpY2tFdmVudHMgPSBuZXcgTWFwKCk7XHJcbiAgICBJbnB1dC5tb3VzZURvd25FdmVudHMgPSBuZXcgTWFwKCk7XHJcbiAgICBJbnB1dC5tb3VzZVVwRXZlbnRzID0gbmV3IE1hcCgpO1xyXG4gICAgSW5wdXQua2V5VXBFdmVudHMgPSBuZXcgTWFwKCk7XHJcbiAgICBJbnB1dC5rZXlEb3duRXZlbnRzID0gbmV3IE1hcCgpO1xyXG4gICAgSW5wdXQubW91c2VNb3ZlRXZlbnRzID0gbmV3IE1hcCgpO1xyXG4gICAgSW5wdXQubW91c2VXaGVlbEV2ZW50cyA9IG5ldyBNYXAoKTtcclxuICAgIHJldHVybiBJbnB1dDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gSW5wdXQ7XHJcbmZ1bmN0aW9uIE9uQ2xpY2soZSkge1xyXG4gICAgdGhpcy5vYmouT25DbGljayhlKTtcclxufVxyXG5mdW5jdGlvbiBPbktleURvd24oZSkge1xyXG4gICAgdGhpcy5vYmouT25LZXlEb3duKGUpO1xyXG59XHJcbmZ1bmN0aW9uIE9uS2V5VXAoZSkge1xyXG4gICAgdGhpcy5vYmouT25LZXlVcChlKTtcclxufVxyXG5mdW5jdGlvbiBPbk1vdXNlVXAoZSkge1xyXG4gICAgdGhpcy5vYmouT25Nb3VzZVVwKGUpO1xyXG59XHJcbmZ1bmN0aW9uIE9uTW91c2VEb3duKGUpIHtcclxuICAgIHRoaXMub2JqLk9uTW91c2VVcChlKTtcclxufVxyXG5mdW5jdGlvbiBPbk1vdXNlTW92ZShlKSB7XHJcbiAgICB0aGlzLm9iai5Pbk1vdXNlTW92ZShlKTtcclxufVxyXG5mdW5jdGlvbiBPbk1vdXNlV2hlZWwoZSkge1xyXG4gICAgdGhpcy5vYmouT25Nb3VzZVdoZWVsKGUpO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciByYWQgPSBNYXRoLlBJIC8gMTgwO1xyXG52YXIgTWF0aEhlbHBlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hdGhIZWxwZXIoKSB7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWF0aEhlbHBlci5wcm90b3R5cGUsIFwiUmFkXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJhZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBNYXRoSGVscGVyLlRvUmFkaWFuID0gZnVuY3Rpb24gKGRlZ3JlZSkge1xyXG4gICAgICAgIHJldHVybiBkZWdyZWUgKiByYWQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1hdGhIZWxwZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1hdGhIZWxwZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBUZXh0dXJlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1Jlc291cmNlL1RleHR1cmVcIikpO1xyXG52YXIgTWF0ZXJpYWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vUmVzb3VyY2UvTWF0ZXJpYWxcIikpO1xyXG52YXIgU2hhZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1Jlc291cmNlL1NoYWRlclwiKSk7XHJcbnZhciBHZW9tZXRyeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9SZXNvdXJjZS9HZW9tZXRyeVwiKSk7XHJcbnZhciBWZWN0b3I0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL01hdGgvVmVjdG9yNFwiKSk7XHJcbnZhciBGcmFtZUJ1ZmZlclRleHR1cmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vUmVzb3VyY2UvRnJhbWVCdWZmZXJUZXh0dXJlXCIpKTtcclxudmFyIE1lc2hfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vUmVzb3VyY2UvTWVzaFwiKSk7XHJcbnZhciBGaWxlTG9hZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRmlsZUxvYWRlclwiKSk7XHJcbnZhciBCaW5hcnlSZWFkZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVG9vbC9CaW5hcnlSZWFkZXJcIikpO1xyXG52YXIgU291bmRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vUmVzb3VyY2UvU291bmRcIikpO1xyXG52YXIgVmVydGV4VHlwZTtcclxuKGZ1bmN0aW9uIChWZXJ0ZXhUeXBlKSB7XHJcbiAgICBWZXJ0ZXhUeXBlW1ZlcnRleFR5cGVbXCJWZXJ0ZXhfVVZcIl0gPSAwXSA9IFwiVmVydGV4X1VWXCI7XHJcbiAgICBWZXJ0ZXhUeXBlW1ZlcnRleFR5cGVbXCJWZXJ0ZXhfTm9ybWFsXCJdID0gMV0gPSBcIlZlcnRleF9Ob3JtYWxcIjtcclxuICAgIFZlcnRleFR5cGVbVmVydGV4VHlwZVtcIlZlcnRleF9VVl9Ob3JtYWxcIl0gPSAyXSA9IFwiVmVydGV4X1VWX05vcm1hbFwiO1xyXG4gICAgVmVydGV4VHlwZVtWZXJ0ZXhUeXBlW1wiVmVydGV4X1VWX05vcm1hbF9Db2xvclwiXSA9IDNdID0gXCJWZXJ0ZXhfVVZfTm9ybWFsX0NvbG9yXCI7XHJcbiAgICBWZXJ0ZXhUeXBlW1ZlcnRleFR5cGVbXCJWZXJ0ZXhfTW9kZWxfU2luZ2xlQm9uZVwiXSA9IDRdID0gXCJWZXJ0ZXhfTW9kZWxfU2luZ2xlQm9uZVwiO1xyXG4gICAgVmVydGV4VHlwZVtWZXJ0ZXhUeXBlW1wiVmVydGV4X01vZGVsX0RvdWJsZUJvbmVcIl0gPSA1XSA9IFwiVmVydGV4X01vZGVsX0RvdWJsZUJvbmVcIjtcclxuICAgIFZlcnRleFR5cGVbVmVydGV4VHlwZVtcIlZlcnRleF9Nb2RlbF9RdWFkQm9uZVwiXSA9IDZdID0gXCJWZXJ0ZXhfTW9kZWxfUXVhZEJvbmVcIjtcclxuICAgIFZlcnRleFR5cGVbVmVydGV4VHlwZVtcIlZlcnRleF9Nb2RlbF9TREVGQm9uZVwiXSA9IDddID0gXCJWZXJ0ZXhfTW9kZWxfU0RFRkJvbmVcIjtcclxuICAgIFZlcnRleFR5cGVbVmVydGV4VHlwZVtcIlZlcnRleF9Nb2RlbF9NaXhcIl0gPSA4XSA9IFwiVmVydGV4X01vZGVsX01peFwiO1xyXG59KShWZXJ0ZXhUeXBlIHx8IChWZXJ0ZXhUeXBlID0ge30pKTtcclxuZnVuY3Rpb24gR2V0RGlyZWN0b3J5KGFyZ19wYXRoKSB7XHJcbiAgICB2YXIgc3BsaXRlZCA9IGFyZ19wYXRoLnNwbGl0KFwiL1wiKTtcclxuICAgIHZhciBvdXRwdXQgPSBcIlwiO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGxpdGVkLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIG91dHB1dCArPSBzcGxpdGVkW2ldICsgXCIvXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG59XHJcbnZhciBCM01Ib2xkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCM01Ib2xkZXIoKSB7XHJcbiAgICB9XHJcbiAgICBCM01Ib2xkZXIucHJvdG90eXBlLkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGdlb21ldHJ5O1xyXG4gICAgICAgIHZhciBhcnlfbWF0ZXJpYWwgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmJ1ZmZlclJlYWRlciA9IG5ldyBCaW5hcnlSZWFkZXJfMS5kZWZhdWx0KHRoaXMuYnVmZmVyKTtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vaGVkZXJUZXN0XHJcbiAgICAgICAgICAgIHZhciBoZWFkU3RyID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0U3RyaW5nKDE1KTtcclxuICAgICAgICAgICAgaWYgKGhlYWRTdHIgIT0gXCJCdXRpM0RNb2RlbERhdGFcIilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9tb2RlbOOBruWQjeWJjeOBquOBqSAgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgdmVyc2lvbiA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgIC8vMOOBp3N0ZDo6d3N0cmluZyAsMeOBp3N0ZDo6c3RyaW5nXHJcbiAgICAgICAgICAgIHZhciBlbmNvZGVUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICB2YXIgdGV4dENvdW50ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KCk7XHJcbiAgICAgICAgICAgIC8v5Yi25L2c6ICF44Gu5ZCN5YmN44Gu6Kqt44G/6L6844G/XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBuYW1lU3RyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuY29kZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lU3RyID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0U3RyaW5nKHRleHRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lU3RyID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0V1N0cmluZyh0ZXh0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5Yi25L2c6ICF44Gu5ZCN5YmN44Gu6Kqt44G/6L6844G/KGVuZylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dENvdW50ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmFtZVN0cjtcclxuICAgICAgICAgICAgICAgIGlmIChlbmNvZGVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVN0ciA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldFN0cmluZyh0ZXh0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVN0ciA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldFdTdHJpbmcodGV4dENvdW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+ODouODh+ODq+WQjVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0Q291bnQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBuYW1lV1N0cjtcclxuICAgICAgICAgICAgICAgIGlmIChlbmNvZGVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVdTdHIgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRTdHJpbmcodGV4dENvdW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVXU3RyID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0V1N0cmluZyh0ZXh0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v44Oi44OH44Or5ZCN6IuxXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHRDb3VudCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWVXU3RyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuY29kZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lV1N0ciA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldFN0cmluZyh0ZXh0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVdTdHIgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRXU3RyaW5nKHRleHRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/jgrPjg6Hjg7Pjg4hcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dENvdW50ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmFtZVdTdHI7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW5jb2RlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVXU3RyID0gKHRoaXMuYnVmZmVyUmVhZGVyLkdldFN0cmluZyh0ZXh0Q291bnQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVXU3RyID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0V1N0cmluZyh0ZXh0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v44Kz44Oh44Oz44OI6IuxXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHRDb3VudCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWVXU3RyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuY29kZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lV1N0ciA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldFN0cmluZyh0ZXh0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVdTdHIgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRXU3RyaW5nKHRleHRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/poILngrnjgqTjg7Pjg4fjg4Pjgq/jgrnjga7jg5DjgqTjg4jmlbBcclxuICAgICAgICB2YXIgdmVydGV4SW5kZXhCeXRlU2l6ZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAvL+ODnuODhuODquOCouODq+OCpOODs+ODh+ODg+OCr+OCueOBruODkOOCpOODiOaVsFxyXG4gICAgICAgIHZhciBtYXRlcmlhbEluZGV4Qnl0ZVNpemUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgLy/jg5zjg7zjg7PjgqTjg7Pjg4fjg4Pjgq/jgrnjga7jg5DjgqTjg4jmlbBcclxuICAgICAgICB2YXIgYm9uZUluZGV4Qnl0ZUNvdW50ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgIC8v44Oi44O844OV44Kk44Oz44OH44OD44Kv44K544Gu44OQ44Kk44OI5pWwXHJcbiAgICAgICAgdmFyIG1vcnBoSW5kZXhCeXRlU2l6ZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAvL+mggueCueani+mAoOS9k+OBruWIl+aMmeWei1xyXG4gICAgICAgIHZhciB0eXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgIHZhciB1dkV4Q291bnQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgdmFyIHZlcnRleENvdW50ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0VUludCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9VVl9Ob3JtYWw6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh1dkV4Q291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzMgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8zLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMyA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzQgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8zLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfNC5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1NpbmdsZUJvbmU6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh1dkV4Q291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzMgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8zLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzMgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl80ID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMy5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzQucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfRG91YmxlQm9uZTpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHV2RXhDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMyA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMy5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzMgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl80ID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8zLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfNC5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1F1YWRCb25lOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodXZFeENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQ0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSAtdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSAtdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQ0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMSA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzIgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8zID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQ0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzMucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMyA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzQgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMy5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzQucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfU0RFRkJvbmU6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJzZGVmIGlzIG5vdCBzdXBwb3J0LlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX01peDpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHV2RXhDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXg0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZlcnRleFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfU2luZ2xlQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDIucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDMucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDQucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQucHVzaCgxLjApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0Mi5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0My5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NC5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfRG91YmxlQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdlaWdodCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQucHVzaCh3ZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzLnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0LnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0Mi5wdXNoKDEuMCAtIHdlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0LnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9RdWFkQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9TREVGQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwic2RlZiBpcyBub3Qgc3VwcG9ydGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2ZXJ0ZXhUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1NpbmdsZUJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4Mi5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4My5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NC5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodC5wdXNoKDEuMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0LnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9Eb3VibGVCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdlaWdodCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQucHVzaCh3ZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzLnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0LnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0Mi5wdXNoKDEuMCAtIHdlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0LnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9RdWFkQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfU0RFRkJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcInNkZWYgaXMgbm90IHN1cHBvcnRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXg0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZlcnRleFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfU2luZ2xlQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4Mi5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4My5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NC5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodC5wdXNoKDEuMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0LnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9Eb3VibGVCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ZWlnaHQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0LnB1c2god2VpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4My5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NC5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDIucHVzaCgxLjAgLSB3ZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0My5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NC5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfUXVhZEJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9TREVGQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwic2RlZiBpcyBub3Qgc3VwcG9ydGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMyA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXg0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZlcnRleFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfU2luZ2xlQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzMucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDIucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDMucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDQucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQucHVzaCgxLjApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0Mi5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0My5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NC5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfRG91YmxlQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzMucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdlaWdodCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQucHVzaCh3ZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzLnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0LnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0Mi5wdXNoKDEuMCAtIHdlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0LnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9RdWFkQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzMucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9TREVGQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwic2RlZiBpcyBub3Qgc3VwcG9ydGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMyA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzQgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2ZXJ0ZXhUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1NpbmdsZUJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8zLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfNC5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4Mi5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4My5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NC5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodC5wdXNoKDEuMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0LnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9Eb3VibGVCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMy5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzQucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdlaWdodCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQucHVzaCh3ZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzLnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0LnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0Mi5wdXNoKDEuMCAtIHdlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0LnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9RdWFkQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzMucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl80LnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfU0RFRkJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcInNkZWYgaXMgbm90IHN1cHBvcnRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtYXRlcmlhbENvdW50O1xyXG4gICAgICAgIG1hdGVyaWFsQ291bnQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQobWF0ZXJpYWxJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICB2YXIgc3Vic2V0ID0gbmV3IEFycmF5KG1hdGVyaWFsQ291bnQpO1xyXG4gICAgICAgIHZhciBkaXIgPSBHZXREaXJlY3RvcnkodGhpcy5maWxlUGF0aCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRlcmlhbENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGZpbGVOYW1lQ291bnQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoKTtcclxuICAgICAgICAgICAgaWYgKGVuY29kZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXRlcmlhbEZpbGVQYXRoID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0U3RyaW5nKGZpbGVOYW1lQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgYXJ5X21hdGVyaWFsLnB1c2goUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZU1hdGVyaWFsRnJvbUZpbGUoZGlyICsgbWF0ZXJpYWxGaWxlUGF0aCwgdGhpcy5jb250YWluZXIsIHRoaXMuZ3JhcGhpY0RldmljZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGVyaWFsRmlsZVBhdGggPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRXU3RyaW5nKGZpbGVOYW1lQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgYXJ5X21hdGVyaWFsLnB1c2goUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZU1hdGVyaWFsRnJvbUZpbGUoZGlyICsgbWF0ZXJpYWxGaWxlUGF0aCwgdGhpcy5jb250YWluZXIsIHRoaXMuZ3JhcGhpY0RldmljZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN1YnNldFtpXSA9ICh0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdlb21ldHJ5LlNldFN1YnNldChzdWJzZXQpO1xyXG4gICAgICAgIHRoaXMubWVzaC5TZXRQYXJhbWV0ZXIoZ2VvbWV0cnksIGFyeV9tYXRlcmlhbCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuTG9hZEVuZCgpO1xyXG4gICAgfTtcclxuICAgIEIzTUhvbGRlci5wcm90b3R5cGUuUmVhZEluZGV4ID0gZnVuY3Rpb24gKHZlcnRleEluZGV4Qnl0ZVNpemUpIHtcclxuICAgICAgICAvL+OCpOODs+ODh+ODg+OCr+OCueOBruiqreOBv+i+vOOBv1xyXG4gICAgICAgIHZhciBpbmRleENvdW50ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KCk7XHJcbiAgICAgICAgdmFyIGlkeCA9IG5ldyBBcnJheShpbmRleENvdW50ICogMyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmRleENvdW50ICogMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlkeFtpXSA9ICh0aGlzLmJ1ZmZlclJlYWRlci5HZXRVSW50KHZlcnRleEluZGV4Qnl0ZVNpemUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlkeDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQjNNSG9sZGVyO1xyXG59KCkpO1xyXG52YXIgTWF0ZXJpYWxCaW5Mb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYXRlcmlhbEJpbkxvYWRlcigpIHtcclxuICAgIH1cclxuICAgIE1hdGVyaWFsQmluTG9hZGVyLnByb3RvdHlwZS5Jbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtYXQ7XHJcbiAgICAgICAgdmFyIG1hdGVyaWFsUmVhZGVyID0gbmV3IEJpbmFyeVJlYWRlcl8xLmRlZmF1bHQodGhpcy5idWZmZXIpO1xyXG4gICAgICAgIHZhciBtYWdpYyA9IG1hdGVyaWFsUmVhZGVyLkdldFN0cmluZygxNik7XHJcbiAgICAgICAgaWYgKG1hZ2ljICE9IFwiQnV0aU1hdGVyaWFsRGF0YVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi44OV44Kh44Kk44Or44GM6YGV44GE44G+44GZXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB2ZXJzaW9uID0gbWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAvLzDjgadzdGQ6OndzdHJpbmcgLDHjgadzdGQ6OnN0cmluZ1xyXG4gICAgICAgIHZhciBlbmNvZGVUeXBlID0gbWF0ZXJpYWxSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIG1hdGVyaWFsTmFtZUNvdW50ID0gbWF0ZXJpYWxSZWFkZXIuR2V0SW50KCk7XHJcbiAgICAgICAgICAgIGlmIChlbmNvZGVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbFJlYWRlci5HZXRTdHJpbmcobWF0ZXJpYWxOYW1lQ291bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxSZWFkZXIuR2V0V1N0cmluZyhtYXRlcmlhbE5hbWVDb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/jg57jg4bjg6rjgqLjg6vlkI3oi7FcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBtYXRlcmlhbE5hbWVDb3VudCA9IG1hdGVyaWFsUmVhZGVyLkdldEludCgpO1xyXG4gICAgICAgICAgICBpZiAoZW5jb2RlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxSZWFkZXIuR2V0U3RyaW5nKG1hdGVyaWFsTmFtZUNvdW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsUmVhZGVyLkdldFdTdHJpbmcobWF0ZXJpYWxOYW1lQ291bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v44OG44Kv44K544OB44OjXHJcbiAgICAgICAgdmFyIHRleHR1cmVDb3VudCA9IG1hdGVyaWFsUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICB2YXIgYXJ5X3RleHR1cmUgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB2YXIgZGlyID0gR2V0RGlyZWN0b3J5KHRoaXMuZmlsZVBhdGgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dHVyZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHRleE5hbWVDb3VudCA9IG1hdGVyaWFsUmVhZGVyLkdldEludCgpO1xyXG4gICAgICAgICAgICBpZiAodGV4TmFtZUNvdW50IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgYXJ5X3RleHR1cmUucHVzaCh0aGlzLmNvbnRhaW5lci5BZGRUZXh0dXJlRnJvbUZpbGUoXCJcIiwgdGhpcy5ncmFwaGljRGV2aWNlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZW5jb2RlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRleHR1cmVOYW1lID0gbWF0ZXJpYWxSZWFkZXIuR2V0U3RyaW5nKHRleE5hbWVDb3VudCk7XHJcbiAgICAgICAgICAgICAgICBhcnlfdGV4dHVyZS5wdXNoKHRoaXMuY29udGFpbmVyLkFkZFRleHR1cmVGcm9tRmlsZShkaXIgKyBcIi4uL1wiICsgdGV4dHVyZU5hbWUsIHRoaXMuZ3JhcGhpY0RldmljZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRleHR1cmVOYW1lID0gbWF0ZXJpYWxSZWFkZXIuR2V0V1N0cmluZyh0ZXhOYW1lQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgYXJ5X3RleHR1cmUucHVzaCh0aGlzLmNvbnRhaW5lci5BZGRUZXh0dXJlRnJvbUZpbGUoZGlyICsgXCIuLi9cIiArIHRleHR1cmVOYW1lLCB0aGlzLmdyYXBoaWNEZXZpY2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+ODnuODhuODquOCouODq1xyXG4gICAgICAgIHZhciBkaWZmdXNlID0gbmV3IFZlY3RvcjRfMS5kZWZhdWx0KG1hdGVyaWFsUmVhZGVyLkdldEZsb2F0KCksIG1hdGVyaWFsUmVhZGVyLkdldEZsb2F0KCksIG1hdGVyaWFsUmVhZGVyLkdldEZsb2F0KCksIG1hdGVyaWFsUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgIHZhciBzcGVjdWxhciA9IG5ldyBWZWN0b3I0XzEuZGVmYXVsdChtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpLCBtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpLCBtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpLCBtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICB2YXIgYW1iaWVudCA9IG5ldyBWZWN0b3I0XzEuZGVmYXVsdChtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpLCBtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpLCBtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpLCBtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICB2YXIgZW1pc3NpdmUgPSBuZXcgVmVjdG9yNF8xLmRlZmF1bHQobWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKSwgbWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKSwgbWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKSwgbWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgdmFyIGJ5dGVGbGFnID0gbWF0ZXJpYWxSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgIHZhciBzcGhlcmVGbGFnID0gbWF0ZXJpYWxSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIG1hdGVyaWFsTmFtZUNvdW50ID0gbWF0ZXJpYWxSZWFkZXIuR2V0SW50KCk7XHJcbiAgICAgICAgICAgIGlmIChlbmNvZGVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbFJlYWRlci5HZXRTdHJpbmcobWF0ZXJpYWxOYW1lQ291bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxSZWFkZXIuR2V0V1N0cmluZyhtYXRlcmlhbE5hbWVDb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbC5TZXRQYXJhbWV0ZXIoYW1iaWVudCwgdGhpcy5ncmFwaGljRGV2aWNlLCBhcnlfdGV4dHVyZSk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuTG9hZEVuZCgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNYXRlcmlhbEJpbkxvYWRlcjtcclxufSgpKTtcclxudmFyIFJlc291cmNlQ3JlYXRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlc291cmNlQ3JlYXRlcigpIHtcclxuICAgIH1cclxuICAgIFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSA9IGZ1bmN0aW9uIChkYXRhLCBpc1VWLCBpc05vcm1hbCwgaXNDb2xvciwgYXJnX2RldmljZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgR2VvbWV0cnlfMS5kZWZhdWx0KGRhdGEsIGlzVVYsIGlzTm9ybWFsLCBpc0NvbG9yLCBhcmdfZGV2aWNlKTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlTWF0ZXJpYWwgPSBmdW5jdGlvbiAoYXJnX2FtYmllbnQsIGFyZ19kZXZpY2UsIGFyZ19hcnlfdGV4dHVyZSwgYXJnX2FyeV9leFBhcm1zKSB7XHJcbiAgICAgICAgdmFyIG1hdCA9IG5ldyBNYXRlcmlhbF8xLmRlZmF1bHQoKTtcclxuICAgICAgICBtYXQuU2V0UGFyYW1ldGVyKGFyZ19hbWJpZW50LCBhcmdfZGV2aWNlLCBhcmdfYXJ5X3RleHR1cmUsIGFyZ19hcnlfZXhQYXJtcyk7XHJcbiAgICAgICAgcmV0dXJuIG1hdDtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlU2hhZGVyID0gZnVuY3Rpb24gKHZzU291cmNlLCBmc1NvdXJjZSwgYXJnX2dyYXBoaWNEZXZpY2UpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNoYWRlcl8xLmRlZmF1bHQodnNTb3VyY2UsIGZzU291cmNlLCBhcmdfZ3JhcGhpY0RldmljZSk7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZVNvdW5kID0gZnVuY3Rpb24gKGFyZ19zb3VuZFNvcmNlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTb3VuZF8xLmRlZmF1bHQoYXJnX3NvdW5kU29yY2UpO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ3JlYXRlci5DcmVhdGVUZXh0dXJlID0gZnVuY3Rpb24gKGFyZ19wYXRoLCBhcmdfZGV2aWNlKSB7XHJcbiAgICAgICAgdmFyIHRleCA9IG5ldyBUZXh0dXJlXzEuZGVmYXVsdChhcmdfcGF0aCwgYXJnX2RldmljZSk7XHJcbiAgICAgICAgdGV4LkluaXRpYWxpemUoKTtcclxuICAgICAgICByZXR1cm4gdGV4O1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ3JlYXRlci5DcmVhdGVGcmFtZUJ1ZmZlciA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCBhcmdfZGV2aWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGcmFtZUJ1ZmZlclRleHR1cmVfMS5kZWZhdWx0KGFyZ19kZXZpY2UsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ3JlYXRlci5DcmVhdGVNZXNoUmVzb3VyY2VGcm9tRmlsZSA9IGZ1bmN0aW9uIChhcmdfZmlsZVBhdGgsIHJlc291cmNlQ29udGFpbmVyLCBhcmdfZGV2aWNlKSB7XHJcbiAgICAgICAgdmFyIG91dCA9IG5ldyBNZXNoXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBob2xkZXIgPSBuZXcgQjNNSG9sZGVyKCk7XHJcbiAgICAgICAgcmVzb3VyY2VDb250YWluZXIuTG9hZFN0YXJ0KCk7XHJcbiAgICAgICAgaG9sZGVyLmdyYXBoaWNEZXZpY2UgPSBhcmdfZGV2aWNlO1xyXG4gICAgICAgIGhvbGRlci5jb250YWluZXIgPSByZXNvdXJjZUNvbnRhaW5lcjtcclxuICAgICAgICBob2xkZXIuZmlsZVBhdGggPSBhcmdfZmlsZVBhdGg7XHJcbiAgICAgICAgaG9sZGVyLm1lc2ggPSBvdXQ7XHJcbiAgICAgICAgRmlsZUxvYWRlcl8xLmRlZmF1bHQuTG9hZEJpbihhcmdfZmlsZVBhdGgsIGhvbGRlcik7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlTWF0ZXJpYWxGcm9tRmlsZSA9IGZ1bmN0aW9uIChhcmdfZmlsZVBhdGgsIHJlc291cmNlQ29udGFpbmVyLCBhcmdfZGV2aWNlKSB7XHJcbiAgICAgICAgdmFyIG91dCA9IG5ldyBNYXRlcmlhbF8xLmRlZmF1bHQoKTtcclxuICAgICAgICB2YXIgaG9sZGVyID0gbmV3IE1hdGVyaWFsQmluTG9hZGVyKCk7XHJcbiAgICAgICAgcmVzb3VyY2VDb250YWluZXIuTG9hZFN0YXJ0KCk7XHJcbiAgICAgICAgaG9sZGVyLmdyYXBoaWNEZXZpY2UgPSBhcmdfZGV2aWNlO1xyXG4gICAgICAgIGhvbGRlci5jb250YWluZXIgPSByZXNvdXJjZUNvbnRhaW5lcjtcclxuICAgICAgICBob2xkZXIuZmlsZVBhdGggPSBhcmdfZmlsZVBhdGg7XHJcbiAgICAgICAgaG9sZGVyLm1hdGVyaWFsID0gb3V0O1xyXG4gICAgICAgIEZpbGVMb2FkZXJfMS5kZWZhdWx0LkxvYWRCaW4oYXJnX2ZpbGVQYXRoLCBob2xkZXIpO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlc291cmNlQ3JlYXRlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUmVzb3VyY2VDcmVhdGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgTWF0cml4XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWF0aC9NYXRyaXhcIikpO1xyXG52YXIgVmVjdG9yM18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01hdGgvVmVjdG9yM1wiKSk7XHJcbnZhciBNYXRoSGVscGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVG9vbC9NYXRoSGVscGVyXCIpKTtcclxudmFyIGNhbGNNYXRyaXg0eDQgPSBuZXcgTWF0cml4XzEuZGVmYXVsdCgpLklkZW50aXR5KCk7XHJcbnZhciBUcmFuc2Zvcm0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUcmFuc2Zvcm0ocG9zaXRpb24sIHJvdGF0aW9uLCBzY2FsZSkge1xyXG4gICAgICAgIGlmIChwb3NpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAwKTtcclxuICAgICAgICBpZiAoc2NhbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZSA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgxLCAxLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IG5ldyBNYXRyaXhfMS5kZWZhdWx0KCkuSWRlbnRpdHkoKTtcclxuICAgICAgICBpZiAocm90YXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbi5Sb3RhdGVfYihNYXRoSGVscGVyXzEuZGVmYXVsdC5Ub1JhZGlhbihyb3RhdGlvbi56KSwgVmVjdG9yM18xLmRlZmF1bHQuekF4aXMpLlJvdGF0ZV9iKE1hdGhIZWxwZXJfMS5kZWZhdWx0LlRvUmFkaWFuKHJvdGF0aW9uLnkpLCBWZWN0b3IzXzEuZGVmYXVsdC55QXhpcykuUm90YXRlX2IoTWF0aEhlbHBlcl8xLmRlZmF1bHQuVG9SYWRpYW4ocm90YXRpb24ueCksIFZlY3RvcjNfMS5kZWZhdWx0LnpBeGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUZ1bmMgPSB0aGlzLlNjYWxlUm90YXRpb25UcmFuc2xhdGU7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJQb3NpdGlvblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXQgPSB0aGlzLk1hdHJpeDtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzXzEuZGVmYXVsdChtYXQuZGF0YVsxMl0sIG1hdC5kYXRhWzEzXSwgbWF0LmRhdGFbMTRdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHZhbHVlLng7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHZhbHVlLnk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueiA9IHZhbHVlLno7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdHJpeCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRyaXguZGF0YVsxMl0gPSB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hdHJpeC5kYXRhWzEzXSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0cml4LmRhdGFbMTRdID0gdGhpcy5wb3NpdGlvbi56O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwiTG9jYWxQb3NpdGlvblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLkNsb25lKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwiUm90YXRpb25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5iYXNlVHJhbnNmb3JtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJhc2VUcmFuc2Zvcm0uUm90YXRpb24uTXVsdGlwbHkodGhpcy5yb3RhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucm90YXRpb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uID0gdmFsdWUuQ2xvbmUoKTtcclxuICAgICAgICAgICAgdGhpcy5tYXRyaXggPSBudWxsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcIlNjYWxlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUuQ2xvbmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGUueCA9IHZhbHVlLng7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGUueSA9IHZhbHVlLnk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGUueiA9IHZhbHVlLno7XHJcbiAgICAgICAgICAgIHRoaXMubWF0cml4ID0gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJNYXRyaXhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRyaXggPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVGdW5jKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJhc2VUcmFuc2Zvcm0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVRyYW5zZm9ybS5NYXRyaXguTXVsdGlwbHkodGhpcy5tYXRyaXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwiTG9jYWxNYXRyaXhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRyaXggPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVGdW5jKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hdHJpeDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJCYXNlVHJhbnNmb3JtXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVRyYW5zZm9ybTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGFyZ19iYXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZVRyYW5zZm9ybSA9IGFyZ19iYXNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcIlNldFBvc2l0aW9uXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRyaXggPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJTZXRTY2FsZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0cml4ID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5HZXRGcm9udCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yM18xLmRlZmF1bHQuekF4aXMuTXVsdGlwbHlfTWF0cml4KHRoaXMuUm90YXRpb24uVHJhbnNwb3NlKCkpLk5vcm1hbGl6ZV9iKCk7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5HZXRSaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yM18xLmRlZmF1bHQueEF4aXMuTXVsdGlwbHlfTWF0cml4KHRoaXMuUm90YXRpb24uVHJhbnNwb3NlKCkpLk5vcm1hbGl6ZV9iKCk7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5HZXRVcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yM18xLmRlZmF1bHQueUF4aXMuTXVsdGlwbHlfTWF0cml4KHRoaXMuUm90YXRpb24uVHJhbnNwb3NlKCkpLk5vcm1hbGl6ZV9iKCk7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5TY2FsZVJvdGF0aW9uVHJhbnNsYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubWF0cml4ID0gbmV3IE1hdHJpeF8xLmRlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLm1hdHJpeC5JZGVudGl0eSgpO1xyXG4gICAgICAgIHRoaXMubWF0cml4LlRyYW5zbGF0ZV9iKHRoaXMucG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMubWF0cml4Lk11bHRpcGx5X2IodGhpcy5yb3RhdGlvbik7XHJcbiAgICAgICAgdGhpcy5tYXRyaXguU2NhbGVfYih0aGlzLnNjYWxlKTtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLkxvb2tBdCA9IGZ1bmN0aW9uIChhcmdfdGFyZ2V0UG9zLCBhcmdfdXBBeGlzKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbi5JZGVudGl0eSgpO1xyXG4gICAgICAgIHZhciB6ID0gKGFyZ190YXJnZXRQb3MuU3ViKHRoaXMuUG9zaXRpb24pKS5Ob3JtYWxpemUoKS5NdWx0aXBseSgtMSk7XHJcbiAgICAgICAgdmFyIHggPSBhcmdfdXBBeGlzLkNyb3NzKHopLk5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIHZhciB5ID0gei5Dcm9zcyh4KS5Ob3JtYWxpemUoKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uLmRhdGFbMF0gPSB4Lng7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbi5kYXRhWzFdID0geC55O1xyXG4gICAgICAgIHRoaXMucm90YXRpb24uZGF0YVsyXSA9IHguejtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uLmRhdGFbNF0gPSB5Lng7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbi5kYXRhWzVdID0geS55O1xyXG4gICAgICAgIHRoaXMucm90YXRpb24uZGF0YVs2XSA9IHkuejtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uLmRhdGFbOF0gPSB6Lng7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbi5kYXRhWzldID0gei55O1xyXG4gICAgICAgIHRoaXMucm90YXRpb24uZGF0YVsxMF0gPSB6Lno7XHJcbiAgICAgICAgdGhpcy5tYXRyaXggPSBudWxsO1xyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuU2NhbGVUcmFuc2xhdGVSb3RhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm1hdHJpeCA9IG5ldyBNYXRyaXhfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5tYXRyaXguSWRlbnRpdHkoKTtcclxuICAgICAgICB0aGlzLm1hdHJpeC5NdWx0aXBseV9iKHRoaXMucm90YXRpb24pO1xyXG4gICAgICAgIHRoaXMubWF0cml4LlRyYW5zbGF0ZV9iKHRoaXMucG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMubWF0cml4LlNjYWxlX2IodGhpcy5zY2FsZSk7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5UcmFuc2xhdGUgPSBmdW5jdGlvbiAoYXJnX3ZlbG9jaXR5KSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5wb3NpdGlvbi54ICsgYXJnX3ZlbG9jaXR5Lng7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5wb3NpdGlvbi55ICsgYXJnX3ZlbG9jaXR5Lnk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi56ID0gdGhpcy5wb3NpdGlvbi56ICsgYXJnX3ZlbG9jaXR5Lno7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0cml4KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0cml4LmRhdGFbMTJdID0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgICAgICAgICB0aGlzLm1hdHJpeC5kYXRhWzEzXSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICAgICAgdGhpcy5tYXRyaXguZGF0YVsxNF0gPSB0aGlzLnBvc2l0aW9uLno7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuVHJhbnNsYXRlWCA9IGZ1bmN0aW9uIChhcmdfeCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uZGF0YVswXSArPSBhcmdfeDtcclxuICAgICAgICBpZiAodGhpcy5tYXRyaXgpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRyaXguZGF0YVsxMl0gPSB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuVHJhbnNsYXRlWSA9IGZ1bmN0aW9uIChhcmdfeSkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uZGF0YVsxXSArPSBhcmdfeTtcclxuICAgICAgICBpZiAodGhpcy5tYXRyaXgpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRyaXguZGF0YVsxM10gPSB0aGlzLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuVHJhbnNsYXRlWiA9IGZ1bmN0aW9uIChhcmdfeikge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uZGF0YVsyXSArPSBhcmdfejtcclxuICAgICAgICBpZiAodGhpcy5tYXRyaXgpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRyaXguZGF0YVsxNF0gPSB0aGlzLnBvc2l0aW9uLno7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuUm9sbF9Mb2NhbCA9IGZ1bmN0aW9uIChhcmdfcm90YXRlTWF0cml4KSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbi5NdWx0aXBseV9iKGFyZ19yb3RhdGVNYXRyaXgpO1xyXG4gICAgICAgIHRoaXMubWF0cml4ID0gbnVsbDtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLlJvbGxfV29ybGQgPSBmdW5jdGlvbiAoYXJnX3JvdGF0ZU1hdHJpeCkge1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSBhcmdfcm90YXRlTWF0cml4Lk11bHRpcGx5KHRoaXMucm90YXRpb24pO1xyXG4gICAgICAgIHRoaXMubWF0cml4ID0gbnVsbDtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLlJvbGxYX0xvY2FsX0RlZ3JlZXMgPSBmdW5jdGlvbiAoYXJnX2RlZ3JlZXMpIHtcclxuICAgICAgICB0aGlzLlJvbGxYX0xvY2FsX1JhZGlhbnMoTWF0aEhlbHBlcl8xLmRlZmF1bHQuVG9SYWRpYW4oYXJnX2RlZ3JlZXMpKTtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLlJvbGxYX0xvY2FsX1JhZGlhbnMgPSBmdW5jdGlvbiAoYXJnX3JhZGlhbnMpIHtcclxuICAgICAgICBjYWxjTWF0cml4NHg0LklkZW50aXR5KCk7XHJcbiAgICAgICAgY2FsY01hdHJpeDR4NC5Sb3RhdGVfYihhcmdfcmFkaWFucywgVmVjdG9yM18xLmRlZmF1bHQueEF4aXMpO1xyXG4gICAgICAgIHRoaXMucm90YXRpb24uTXVsdGlwbHlfYihjYWxjTWF0cml4NHg0KTtcclxuICAgICAgICB0aGlzLm1hdHJpeCA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5Sb2xsWF9Xb3JsZF9EZWdyZWVzID0gZnVuY3Rpb24gKGFyZ19kZWdyZWVzKSB7XHJcbiAgICAgICAgdGhpcy5Sb2xsWF9Xb3JsZF9SYWRpYW5zKE1hdGhIZWxwZXJfMS5kZWZhdWx0LlRvUmFkaWFuKGFyZ19kZWdyZWVzKSk7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5Sb2xsWF9Xb3JsZF9SYWRpYW5zID0gZnVuY3Rpb24gKGFyZ19yYWRpYW5zKSB7XHJcbiAgICAgICAgY2FsY01hdHJpeDR4NC5JZGVudGl0eSgpO1xyXG4gICAgICAgIGNhbGNNYXRyaXg0eDQuUm90YXRlX2IoYXJnX3JhZGlhbnMsIFZlY3RvcjNfMS5kZWZhdWx0LnhBeGlzKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gY2FsY01hdHJpeDR4NC5NdWx0aXBseSh0aGlzLnJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLm1hdHJpeCA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5Sb2xsWV9Mb2NhbF9EZWdyZWVzID0gZnVuY3Rpb24gKGFyZ19kZWdyZWVzKSB7XHJcbiAgICAgICAgdGhpcy5Sb2xsWV9Mb2NhbF9SYWRpYW5zKE1hdGhIZWxwZXJfMS5kZWZhdWx0LlRvUmFkaWFuKGFyZ19kZWdyZWVzKSk7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5Sb2xsWV9Mb2NhbF9SYWRpYW5zID0gZnVuY3Rpb24gKGFyZ19yYWRpYW5zKSB7XHJcbiAgICAgICAgY2FsY01hdHJpeDR4NC5JZGVudGl0eSgpO1xyXG4gICAgICAgIGNhbGNNYXRyaXg0eDQuUm90YXRlX2IoYXJnX3JhZGlhbnMsIFZlY3RvcjNfMS5kZWZhdWx0LnlBeGlzKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uLk11bHRpcGx5X2IoY2FsY01hdHJpeDR4NCk7XHJcbiAgICAgICAgdGhpcy5tYXRyaXggPSBudWxsO1xyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuUm9sbFlfV29ybGRfRGVncmVlcyA9IGZ1bmN0aW9uIChhcmdfZGVncmVlcykge1xyXG4gICAgICAgIHRoaXMuUm9sbFlfV29ybGRfUmFkaWFucyhNYXRoSGVscGVyXzEuZGVmYXVsdC5Ub1JhZGlhbihhcmdfZGVncmVlcykpO1xyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuUm9sbFlfV29ybGRfUmFkaWFucyA9IGZ1bmN0aW9uIChhcmdfcmFkaWFucykge1xyXG4gICAgICAgIGNhbGNNYXRyaXg0eDQuSWRlbnRpdHkoKTtcclxuICAgICAgICBjYWxjTWF0cml4NHg0LlJvdGF0ZV9iKGFyZ19yYWRpYW5zLCBWZWN0b3IzXzEuZGVmYXVsdC55QXhpcyk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IGNhbGNNYXRyaXg0eDQuTXVsdGlwbHkodGhpcy5yb3RhdGlvbik7XHJcbiAgICAgICAgdGhpcy5tYXRyaXggPSBudWxsO1xyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuUm9sbFpfTG9jYWxfRGVncmVlcyA9IGZ1bmN0aW9uIChhcmdfZGVncmVlcykge1xyXG4gICAgICAgIHRoaXMuUm9sbFpfTG9jYWxfUmFkaWFucyhNYXRoSGVscGVyXzEuZGVmYXVsdC5Ub1JhZGlhbihhcmdfZGVncmVlcykpO1xyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuUm9sbFpfTG9jYWxfUmFkaWFucyA9IGZ1bmN0aW9uIChhcmdfcmFkaWFucykge1xyXG4gICAgICAgIGNhbGNNYXRyaXg0eDQuSWRlbnRpdHkoKTtcclxuICAgICAgICBjYWxjTWF0cml4NHg0LlJvdGF0ZV9iKGFyZ19yYWRpYW5zLCBWZWN0b3IzXzEuZGVmYXVsdC56QXhpcyk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbi5NdWx0aXBseV9iKGNhbGNNYXRyaXg0eDQpO1xyXG4gICAgICAgIHRoaXMubWF0cml4ID0gbnVsbDtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLlJvbGxaX1dvcmxkX0RlZ3JlZXMgPSBmdW5jdGlvbiAoYXJnX2RlZ3JlZXMpIHtcclxuICAgICAgICB0aGlzLlJvbGxaX1dvcmxkX1JhZGlhbnMoTWF0aEhlbHBlcl8xLmRlZmF1bHQuVG9SYWRpYW4oYXJnX2RlZ3JlZXMpKTtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLlJvbGxaX1dvcmxkX1JhZGlhbnMgPSBmdW5jdGlvbiAoYXJnX3JhZGlhbnMpIHtcclxuICAgICAgICBjYWxjTWF0cml4NHg0LklkZW50aXR5KCk7XHJcbiAgICAgICAgY2FsY01hdHJpeDR4NC5Sb3RhdGVfYihhcmdfcmFkaWFucywgVmVjdG9yM18xLmRlZmF1bHQuekF4aXMpO1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSBjYWxjTWF0cml4NHg0Lk11bHRpcGx5KHRoaXMucm90YXRpb24pO1xyXG4gICAgICAgIHRoaXMubWF0cml4ID0gbnVsbDtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLkNsb25lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXQgPSBuZXcgVHJhbnNmb3JtKHRoaXMuTG9jYWxQb3NpdGlvbik7XHJcbiAgICAgICAgb3V0LnNjYWxlID0gdGhpcy5zY2FsZTtcclxuICAgICAgICBvdXQucm90YXRpb24gPSB0aGlzLnJvdGF0aW9uO1xyXG4gICAgICAgIG91dC5iYXNlVHJhbnNmb3JtID0gdGhpcy5iYXNlVHJhbnNmb3JtO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRyYW5zZm9ybTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVHJhbnNmb3JtO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgR3JhcGhpY0RldmljZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0dyYXBoaWMvR3JhcGhpY0RldmljZVwiKSk7XHJcbnZhciBSZXNvdXJjZUNvbnRhaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1BhcnRzL1Jlc291cmNlQ29udGFpbmVyXCIpKTtcclxudmFyIE1vZGVsQ3JlYXRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1BhcnRzL01vZGVsQ3JlYXRlclwiKSk7XHJcbnZhciBTY2VuZU1hbmFnZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TY2VuZS9TY2VuZU1hbmFnZXJcIikpO1xyXG52YXIgSW5wdXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Ub29sL0lucHV0XCIpKTtcclxudmFyIFRpdGxlU2NlbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9UaXRsZVNjZW5lXCIpKTtcclxudmFyIExvYWRTY2VuZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0xvYWRTY2VuZVwiKSk7XHJcbm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBqcyBpcyB3ZWJHTC9pbmRleC50c1wiKTtcclxuICAgIC8vY2FudmFz44Ko44Os44Oh44Oz44OI44KS5Y+W5b6XXHJcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2FudmFzJyk7XHJcbiAgICAvL2F1ZGlvRWxlbWVudC52b2x1bWU9MC4wO1xyXG4gICAgY2FudmFzLndpZHRoID0gODAwO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IDUwMDtcclxuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgXCJcIik7XHJcbiAgICBJbnB1dF8xLmRlZmF1bHQuY2FudmFzID0gY2FudmFzO1xyXG4gICAgdmFyIHJlc291cmNlQ29udGFpbmVyID0gbmV3IFJlc291cmNlQ29udGFpbmVyXzEuZGVmYXVsdCgpO1xyXG4gICAgdmFyIGdyYXBoaWNEZXZpY2UgPSBuZXcgR3JhcGhpY0RldmljZV8xLmRlZmF1bHQoY2FudmFzKTtcclxuICAgIHZhciBtb2RlbENyZWF0ZXIgPSBuZXcgTW9kZWxDcmVhdGVyXzEuZGVmYXVsdChncmFwaGljRGV2aWNlLCByZXNvdXJjZUNvbnRhaW5lcik7XHJcbiAgICB2YXIgc2NlbmVNYW5hZ2VyID0gbmV3IFNjZW5lTWFuYWdlcl8xLmRlZmF1bHQobW9kZWxDcmVhdGVyLCByZXNvdXJjZUNvbnRhaW5lciwgZ3JhcGhpY0RldmljZSk7XHJcbiAgICBzY2VuZU1hbmFnZXIuQWRkU2NlbmUobmV3IFRpdGxlU2NlbmVfMS5kZWZhdWx0KHNjZW5lTWFuYWdlciksIFwidGl0bGVcIik7XHJcbiAgICBzY2VuZU1hbmFnZXIuQWRkU2NlbmUobmV3IExvYWRTY2VuZV8xLmRlZmF1bHQoc2NlbmVNYW5hZ2VyKSwgXCJsb2FkXCIpO1xyXG4gICAgc2NlbmVNYW5hZ2VyLkNoYW5nZVNjZW5lKFwidGl0bGVcIik7XHJcbiAgICB0aWNrKCk7XHJcbiAgICAvLyDmgZLluLjjg6vjg7zjg5dcclxuICAgIGZ1bmN0aW9uIHRpY2soKSB7XHJcbiAgICAgICAgc2NlbmVNYW5hZ2VyLlVwZGF0ZSgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coSW5wdXQubW91c2VQb3NpdGlvbi54K1wiLFwiK0lucHV0Lm1vdXNlUG9zaXRpb24ueCk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xyXG4gICAgfVxyXG4gICAgO1xyXG59O1xyXG4iLCJcclxucmVxdWlyZShcIi4vV2ViR2wvaW5kZXhcIikiXSwic291cmNlUm9vdCI6IiJ9