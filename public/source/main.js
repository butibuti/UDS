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
            console.log("mesh");
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
var Vector3_1 = __importDefault(__webpack_require__(/*! ../Math/Vector3 */ "./WebGl/Math/Vector3.ts"));
var Input_1 = __importDefault(__webpack_require__(/*! ../Tool/Input */ "./WebGl/Tool/Input.ts"));
var Component_1 = __importDefault(__webpack_require__(/*! ./Component */ "./WebGl/Component/Component.ts"));
var SampleComponent = /** @class */ (function (_super) {
    __extends(SampleComponent, _super);
    function SampleComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SampleComponent.prototype.OnSet = function () {
        Input_1.default.AddKeyDownEvent(this, true);
    };
    SampleComponent.prototype.OnKeyDown = function (e) {
        if (e.key == "ArrowLeft") {
            this.gameObject.transform.Position = this.gameObject.transform.Position.Add_b(new Vector3_1.default(-1.0, 0, 0));
        }
        if (e.key == "ArrowRight") {
            this.gameObject.transform.Position = this.gameObject.transform.Position.Add_b(new Vector3_1.default(1.00, 0, 0));
        }
        if (e.key == "ArrowUp") {
            this.gameObject.transform.Position = this.gameObject.transform.Position.Add_b(new Vector3_1.default(0, -1.00, 0));
        }
        if (e.key == "ArrowDown") {
            this.gameObject.transform.Position = this.gameObject.transform.Position.Add_b(new Vector3_1.default(0, 1.00, 0));
        }
    };
    return SampleComponent;
}(Component_1.default));
exports.default = SampleComponent;


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
        this.isRemove = false;
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
        this.map_gameObjects.delete(arg_gameObjectName);
    };
    GameObjectManager.prototype.Update = function () {
        this.gameObjects = this.gameObjects.concat(this.newGameObjects);
        this.newGameObjects = new Array();
        this.gameObjects.forEach(function (obj) { return obj.Update(); });
        this.gameObjects.filter(function (obj) { return obj.IsRemove; }).forEach(function (obj) { return obj.Remove(); });
        this.gameObjects = this.gameObjects.filter(function (obj) { return !obj.IsRemove; });
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
        output.data[0] = this.data[0] * arg_matrix.data[0] + this.data[0] * arg_matrix.data[4] + this.data[0] * arg_matrix.data[8] + this.data[0] * arg_matrix.data[12];
        output.data[1] = this.data[1] * arg_matrix.data[1] + this.data[1] * arg_matrix.data[5] + this.data[1] * arg_matrix.data[9] + this.data[1] * arg_matrix.data[13];
        output.data[2] = this.data[2] * arg_matrix.data[2] + this.data[2] * arg_matrix.data[6] + this.data[2] * arg_matrix.data[10] + this.data[2] * arg_matrix.data[14];
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
        this.octree = new Octree_1.default(5, new Vector3_1.default(-30, -30, -60), new Vector3_1.default(30, 30, 30));
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
        //console.log(vec_collisionObjects.length);
        for (var i = 0; i < vec_collisionObjects.length; i++) {
            for (var j = i + 1; j < vec_collisionObjects.length; j++) {
                vec_collisionObjects[i].HitCheck(vec_collisionObjects[j]);
            }
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
        var ChildFlag = false;
        // ③ 子空間に移動
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
            console.log("create:" + text);
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
            console.log(0 + ":loading");
            return 0;
        }
        console.log(this.loadingObjectCount + ":loading");
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
var GeometryGenerator_1 = __importDefault(__webpack_require__(/*! ./Tool/GeometryGenerator */ "./WebGl/Tool/GeometryGenerator.ts"));
var Quat_1 = __importDefault(__webpack_require__(/*! ./Math/Quat */ "./WebGl/Math/Quat.ts"));
var Vector4_1 = __importDefault(__webpack_require__(/*! ./Math/Vector4 */ "./WebGl/Math/Vector4.ts"));
var Vector3_1 = __importDefault(__webpack_require__(/*! ./Math/Vector3 */ "./WebGl/Math/Vector3.ts"));
var PointLight_1 = __importDefault(__webpack_require__(/*! ./Light/PointLight */ "./WebGl/Light/PointLight.ts"));
var ModelDrawComponent_1 = __importDefault(__webpack_require__(/*! ./Component/ModelDrawComponent */ "./WebGl/Component/ModelDrawComponent.ts"));
var Vector2_1 = __importDefault(__webpack_require__(/*! ./Math/Vector2 */ "./WebGl/Math/Vector2.ts"));
var SampleComponent_1 = __importDefault(__webpack_require__(/*! ./Component/SampleComponent */ "./WebGl/Component/SampleComponent.ts"));
var CollisionComponent_1 = __importDefault(__webpack_require__(/*! ./Component/CollisionComponent */ "./WebGl/Component/CollisionComponent.ts"));
var TextDrawComponent_1 = __importDefault(__webpack_require__(/*! ./Component/TextDrawComponent */ "./WebGl/Component/TextDrawComponent.ts"));
var Transform_1 = __importDefault(__webpack_require__(/*! ./Transform */ "./WebGl/Transform.ts"));
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
            var caloryTexture, frameBuffer, material;
            return __generator(this, function (_a) {
                this.sceneManger.GetResourceContainer().AddShader(ResourceCreater_1.default.CreateShader('shader/PointLightVS.glsl', "shader/PointLightFS.glsl", this.sceneManger.GetGraphicDevice()), "pointLight");
                this.sceneManger.GetResourceContainer().AddShader(ResourceCreater_1.default.CreateShader('shader/UVNormalColorVS.glsl', "shader/DefaultFS.glsl", this.sceneManger.GetGraphicDevice()), "texShader");
                this.sceneManger.GetResourceContainer().AddShader(ResourceCreater_1.default.CreateShader('shader/UVNormalColorVS.glsl', "shader/FontShaderFS.glsl", this.sceneManger.GetGraphicDevice()), "fontShader");
                this.sceneManger.GetResourceContainer().AddShader(ResourceCreater_1.default.CreateShader('shader/UVNormalVS.glsl', "shader/DefaultFS_light.glsl", this.sceneManger.GetGraphicDevice()), "texShader_light");
                this.sceneManger.GetResourceContainer().AddShader(ResourceCreater_1.default.CreateShader('shader/UVNormalVS.glsl', "shader/ZoomBlur.glsl", this.sceneManger.GetGraphicDevice()), "zoomEffect");
                this.sceneManger.GetResourceContainer().AddShader(ResourceCreater_1.default.CreateShader('shader/UVNormalVS.glsl', "shader/DotEffect.glsl", this.sceneManger.GetGraphicDevice()), "dotEffect");
                this.sceneManger.GetResourceContainer().AddShader(ResourceCreater_1.default.CreateShader('shader/UVNormalColorVS.glsl', "shader/BlackTestFS.glsl", this.sceneManger.GetGraphicDevice()), "black");
                this.sceneManger.GetResourceContainer().AddGeometry(ResourceCreater_1.default.CreateGeometry(GeometryGenerator_1.default.CreateTorus(32, 32, 0.5, 1), false, true, true, this.sceneManger.GetGraphicDevice()), "hsvTorus");
                this.sceneManger.GetResourceContainer().AddGeometry(ResourceCreater_1.default.CreateGeometry(GeometryGenerator_1.default.CreateCube(1, new Vector4_1.default(1.0, 1.0, 1.0, 1)), true, true, true, this.sceneManger.GetGraphicDevice()), "cube");
                this.sceneManger.GetResourceContainer().AddGeometry(ResourceCreater_1.default.CreateGeometry(GeometryGenerator_1.default.CreatePlane(new Vector2_1.default(1, 1), false, new Vector4_1.default(1.0, 1.0, 1.0, 1)), true, false, false, this.sceneManger.GetGraphicDevice()), "plane");
                this.sceneManger.GetResourceContainer().AddMesh(ResourceCreater_1.default.CreateMeshResourceFromFile("model/Maguro/maguro.b3m", this.sceneManger.GetResourceContainer(), this.sceneManger.GetGraphicDevice()), "maguro");
                this.sceneManger.GetResourceContainer().AddSoundFromFile("audio/Ending.mp3", "sample");
                caloryTexture = ResourceCreater_1.default.CreateTexture('image/calory.png', this.sceneManger.GetGraphicDevice());
                this.sceneManger.GetResourceContainer().AddTexture(caloryTexture, "calory");
                this.sceneManger.GetResourceContainer().AddTexture(ResourceCreater_1.default.CreateTexture('image/charmap.png', this.sceneManger.GetGraphicDevice()), "font");
                frameBuffer = this.sceneManger.GetResourceContainer().AddTexture(ResourceCreater_1.default.CreateFrameBuffer(1024, 1024, this.sceneManger.GetGraphicDevice()), "camera");
                material = this.sceneManger.GetResourceContainer().AddMaterial(ResourceCreater_1.default.CreateMaterial(new Vector4_1.default(0.1, 0.1, 0.1, 1.0), this.sceneManger.GetGraphicDevice(), [this.sceneManger.GetResourceContainer().GetTexture("calory")]), "caloryMaterial");
                material.AddExParam(4, 3, new Vector3_1.default(5, 5, 10));
                material = this.sceneManger.GetResourceContainer().AddMaterial(ResourceCreater_1.default.CreateMaterial(new Vector4_1.default(0.1, 0.1, 0.1, 1.0), this.sceneManger.GetGraphicDevice(), [this.sceneManger.GetResourceContainer().GetTexture("camera")]), "cameraMaterial");
                material.AddExParam(4, 1, this.zoomData);
                material = this.sceneManger.GetResourceContainer().AddMaterial(ResourceCreater_1.default.CreateMaterial(new Vector4_1.default(0.1, 0.1, 0.1, 1.0), this.sceneManger.GetGraphicDevice()), "nonTextureMaterial");
                material.AddExParam(4, 3, new Vector3_1.default(5, 5, 10));
                material = this.sceneManger.GetResourceContainer().AddMaterial(ResourceCreater_1.default.CreateMaterial(new Vector4_1.default(0.1, 0.1, 0.1, 1.0), this.sceneManger.GetGraphicDevice()), "zoomEffect");
                return [2 /*return*/];
            });
        });
    };
    SampleScene.prototype.OnInitialize = function () {
        this.renderer.AddLayer();
        this.AddCamera(0, 1, "main", false, this.sceneManger.GetResourceContainer().GetTexture("camera"));
        // 頂点シェーダとフラグメントシェーダの生成
        var light = new PointLight_1.default(this.sceneManger.GetGraphicDevice());
        light.transform.Position = new Vector3_1.default(-5, -5, 10);
        //this.renderer.SetLight(light,0);
        this.renderer.SetLight(light, 1);
        this.sceneManger.GetGraphicDevice().EnableStencil();
        this.GetCamera("main").transform.Position = new Vector3_1.default(0, -3, 10);
        this.GetCamera("main").transform.LookAt(new Vector3_1.default(0, 0, 0), Vector3_1.default.yAxis);
        this.GetCamera("main").clearColor = new Vector4_1.default(0.3, 0.3, 0.3, 1.0);
        this.cube = this.gameObjectManager.AddGameObject("cube");
        this.anotherCube = this.gameObjectManager.AddGameObject("cube");
        this.projectionPlane = this.gameObjectManager.AddGameObject("projectionCube");
        //this.torus.SetComponent(new ModelDrawComponent("hsvTorus","caloryMaterial","pointLight",1)) as ModelDrawComponent;
        //this.cube.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,false)) as ModelDrawComponent;
        var tr = new Transform_1.default();
        tr.Position = new Vector3_1.default(1, 1, 1);
        var tr2 = new Transform_1.default();
        tr2.Position = new Vector3_1.default(-1, -1, 2);
        this.cube.SetComponent(new TextDrawComponent_1.default("butibuti", "font", "fontShader", new Vector4_1.default(0.75, 0.75, 0.25, 1), 1, true));
        this.cube.SetComponent(new TextDrawComponent_1.default("butibuti", "font", "fontShader", new Vector4_1.default(1.0, 1.0, 1.0, 1), 1, true, tr));
        this.cube.SetComponent(new TextDrawComponent_1.default("butibuti", "font", "fontShader", new Vector4_1.default(0.5, 0.75, 0.75, 1), 1, true, tr2));
        //this.anotherCube.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,true)) as ModelDrawComponent;
        this.projectionPlane.SetComponent(new ModelDrawComponent_1.default(false, "plane", "cameraMaterial", "texShader", 0, false));
        this.projectionPlane.transform.Scale = new Vector3_1.default(500, 500, 1);
        this.cube.SetComponent(new SampleComponent_1.default());
        this.cube.transform.Position = new Vector3_1.default(0.5, 0, 0.5);
        this.anotherCube.transform.Position = new Vector3_1.default(-1, -5, 10);
        this.projectionPlane.transform.Position = new Vector3_1.default(0, 0, -1);
        this.cube.SetComponent(new CollisionComponent_1.default(PrimitiveType.box_OBB, new Vector3_1.default(1.0, 1.0, 1.0), 0));
        this.anotherCube.SetComponent(new CollisionComponent_1.default(PrimitiveType.box_OBB, new Vector3_1.default(1.0, 1.0, 1.0), 0));
    };
    SampleScene.prototype.OnUpdate = function () {
        // カウンタを元にラジアンを算出
        var rad = (this.sceneManger.GetGameTime().AbsoluteFrame % 360) * Math.PI / 180;
        var time = 1.5;
        if (this.sceneManger.GetGameTime().AbsoluteFrame >= 360) {
            //this.sceneManger.GetResourceContainer().GetSound("sample").Play();
        }
        // 回転クォータニオンの生成
        this.aQuaternion.Rotate(rad, Vector3_1.default.xAxis);
        this.bQuaternion.Rotate(-rad, Vector3_1.default.yAxis);
        this.sQuaternion = this.aQuaternion.SphereLerp(this.bQuaternion, time);
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
        this.isLoaded = false;
        this.renderer = new Renderer_1.default();
        this.map_camera = new Map();
        this.ary_camera = new Array();
        this.sceneManger = sceneManger;
        this.gameObjectManager = new GameObjectManager_1.default(this);
        this.collisionManager = new CollisionManager_1.default();
        this.AddCamera(0, 0, "last", true);
    }
    Scene.prototype.GetCollisionManager = function () {
        return this.collisionManager;
    };
    Scene.prototype.IsLoaded = function () {
        return this.isLoaded;
    };
    Scene.prototype.Release = function () {
        this.OnRelease();
        this.sceneManger = null;
        this.gameObjectManager.Release();
        this.collisionManager.Release();
        this.renderer.Release();
    };
    Scene.prototype.OnRelease = function () {
    };
    Scene.prototype.AddCamera = function (order, layer, cameraName, isPararell, frameBufferTexture) {
        var newCamera;
        if (frameBufferTexture) {
            newCamera = new Camera_1.default(this.sceneManger.GetGraphicDevice(), layer, isPararell, frameBufferTexture);
        }
        else
            newCamera = new Camera_1.default(this.sceneManger.GetGraphicDevice(), layer, isPararell);
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
        this.sceneManger.GetGraphicDevice().Present();
    };
    Scene.prototype.Update = function () {
        this.OnUpdate();
        this.gameObjectManager.Update();
        this.collisionManager.Check();
        this.Draw();
    };
    Scene.prototype.LoadingUpdate = function () {
        console.log("now loading");
    };
    Scene.prototype.OnUpdate = function () {
    };
    Scene.prototype.Start = function () {
        this.OnStart();
    };
    Scene.prototype.OnStart = function () {
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
                    case 0: return [4 /*yield*/, this.OnLoad()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.sceneManger.GetResourceContainer().GetLoadingObjCount()) return [3 /*break*/, 4];
                        return [4 /*yield*/, Sleep(100)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 2];
                    case 4:
                        console.log("end loading");
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
        return this.sceneManger;
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
            this.currentScene.LoadingUpdate();
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
    SceneManager.prototype.ChangeScene = function (key) {
        if (this.currentScene)
            this.currentScene.End();
        this.currentScene = this.map_scenes[key];
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
        for (var i = 0; i < textLength; i++) {
            pos.push(-unit * 0.5 + i * unit, unit, 0.0);
            pos.push(unit * 0.5 + i * unit, unit, 0.0);
            pos.push(-unit * 0.5 + i * unit, -unit, 0.0);
            pos.push(unit * 0.5 + i * unit, -unit, 0.0);
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
    Input.AddClickEvent = function (arg_obj, isUseEvent) {
        var event = { obj: arg_obj, handleEvent: OnClick };
        if (isUseEvent)
            this.canvas.addEventListener("click", event, isUseEvent);
        else {
            this.canvas.addEventListener("click", event, false);
        }
    };
    Input.AddMouseDownEvent = function (arg_obj, isUseEvent) {
        var event = { obj: arg_obj, handleEvent: OnMouseDown };
        if (isUseEvent)
            this.canvas.addEventListener("mousedown", event, isUseEvent);
        else {
            this.canvas.addEventListener("mousedown", event, false);
        }
    };
    Input.AddMouseUpEvent = function (arg_obj, isUseEvent) {
        var event = { obj: arg_obj, handleEvent: OnMouseUp };
        if (isUseEvent)
            this.canvas.addEventListener("mouseup", event, isUseEvent);
        else {
            this.canvas.addEventListener("mouseup", event, false);
        }
    };
    Input.AddKeyUpEvent = function (arg_obj, isUseEvent) {
        var event = { obj: arg_obj, handleEvent: OnKeyUp };
        if (isUseEvent)
            this.canvas.addEventListener("keyup", event, isUseEvent);
        else {
            this.canvas.addEventListener("keyup", event, false);
        }
    };
    Input.AddKeyDownEvent = function (arg_obj, isUseEvent) {
        var event = { obj: arg_obj, handleEvent: OnKeyDown };
        if (isUseEvent)
            document.addEventListener("keydown", event, isUseEvent);
        else {
            document.addEventListener("keydown", event, false);
        }
    };
    Input.AddMouseMoveEvent = function (arg_obj, isUseEvent) {
        var event = { obj: arg_obj, handleEvent: OnMouseMove };
        if (isUseEvent)
            this.canvas.addEventListener("mousemove", event, isUseEvent);
        else {
            this.canvas.addEventListener("mousemove", event, false);
        }
    };
    Input.AddMouseWheelEvent = function (arg_obj, isUseEvent) {
        var event = { obj: arg_obj, handleEvent: OnMouseWheel };
        if (isUseEvent)
            this.canvas.addEventListener("mousewheel", event, isUseEvent);
        else {
            this.canvas.addEventListener("mousewheel", event, false);
        }
    };
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
var Transform = /** @class */ (function () {
    function Transform() {
        this.position = new Vector3_1.default(0, 0, 0);
        this.scale = new Vector3_1.default(1, 1, 1);
        this.rotation = new Matrix_1.default();
        this.rotation.Identity();
        this.generateFunc = this.ScaleRotationTranslate;
    }
    Object.defineProperty(Transform.prototype, "Position", {
        get: function () {
            if (this.baseTransform != null) {
                return this.position.Add(this.baseTransform.Position);
            }
            else
                return this.position;
        },
        set: function (value) {
            this.position = value;
            this.matrix = null;
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
            this.rotation = value;
            this.matrix = null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "Scale", {
        get: function () {
            return this.scale;
        },
        set: function (value) {
            this.scale = value;
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
    Transform.prototype.GetFront = function () {
        return Vector3_1.default.zAxis.Multiply_Matrix(this.Rotation);
    };
    Transform.prototype.GetRight = function () {
        return Vector3_1.default.xAxis.Multiply_Matrix(this.Rotation);
    };
    Transform.prototype.GetUp = function () {
        return Vector3_1.default.yAxis.Multiply_Matrix(this.Rotation);
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
var SampleScene_1 = __importDefault(__webpack_require__(/*! ./SampleScene */ "./WebGl/SampleScene.ts"));
var Input_1 = __importDefault(__webpack_require__(/*! ./Tool/Input */ "./WebGl/Tool/Input.ts"));
onload = function () {
    console.log("this js is webGL/index.ts");
    //canvasエレメントを取得
    var canvas = document.getElementById('myCanvas');
    var audioElement = document.createElement('audio');
    audioElement.src = 'audio/Ending.mp3';
    //audioElement.volume=0.0;
    canvas.width = 800;
    canvas.height = 500;
    canvas.setAttribute('tabindex', "");
    Input_1.default.canvas = canvas;
    var resourceContainer = new ResourceContainer_1.default();
    canvas.addEventListener("click", OnClick, false);
    var graphicDevice = new GraphicDevice_1.default(canvas);
    var modelCreater = new ModelCreater_1.default(graphicDevice, resourceContainer);
    var sceneManager = new SceneManager_1.default(modelCreater, resourceContainer, graphicDevice);
    sceneManager.AddScene(new SampleScene_1.default(sceneManager), "sample");
    sceneManager.ChangeScene("sample");
    tick();
    // 恒常ループ
    function tick() {
        sceneManager.Update();
        //console.log(Input.mousePosition.x+","+Input.mousePosition.x);
        requestAnimationFrame(tick);
    }
    ;
    function OnClick() {
        audioElement.play();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvQ29tcG9uZW50L0NvbGxpc2lvbkNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Db21wb25lbnQvQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL1dlYkdsL0NvbXBvbmVudC9Nb2RlbERyYXdDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvQ29tcG9uZW50L1NhbXBsZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Db21wb25lbnQvVGV4dERyYXdDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvR2FtZU9iamVjdC9HYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy8uL1dlYkdsL0dhbWVPYmplY3QvR2FtZU9iamVjdE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvR3JhcGhpYy9DYW1lcmEudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvR3JhcGhpYy9HcmFwaGljRGV2aWNlLnRzIiwid2VicGFjazovLy8uL1dlYkdsL0dyYXBoaWMvTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvR3JhcGhpYy9UZXh0TW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvTGlnaHQvUG9pbnRMaWdodC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9NYXRoL0dlb21ldHJ5L0JveF9BQUJCLnRzIiwid2VicGFjazovLy8uL1dlYkdsL01hdGgvR2VvbWV0cnkvQm94X09CQi50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9NYXRoL0dlb21ldHJ5L0dlb21ldHJ5SGVscGVyLnRzIiwid2VicGFjazovLy8uL1dlYkdsL01hdGgvR2VvbWV0cnkvU3BoZXJlLnRzIiwid2VicGFjazovLy8uL1dlYkdsL01hdGgvTWF0cml4LnRzIiwid2VicGFjazovLy8uL1dlYkdsL01hdGgvUXVhdC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9NYXRoL1ZlY3RvcjIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvTWF0aC9WZWN0b3IzLnRzIiwid2VicGFjazovLy8uL1dlYkdsL01hdGgvVmVjdG9yNC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9QYXJ0cy9Db2xsaXNpb24vQ29sbGlzaW9uTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9QYXJ0cy9Db2xsaXNpb24vQ29sbGlzaW9uT2JqZWN0LnRzIiwid2VicGFjazovLy8uL1dlYkdsL1BhcnRzL0NvbGxpc2lvbi9PY3RDZWxsLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1BhcnRzL0NvbGxpc2lvbi9PY3RyZWUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvUGFydHMvR2FtZVRpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvUGFydHMvSUQudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvUGFydHMvTW9kZWxDcmVhdGVyLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1BhcnRzL1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1BhcnRzL1Jlc291cmNlQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1Jlc291cmNlL0ZyYW1lQnVmZmVyVGV4dHVyZS50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9SZXNvdXJjZS9HZW9tZXRyeS50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9SZXNvdXJjZS9NYXRlcmlhbC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9SZXNvdXJjZS9NZXNoLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1Jlc291cmNlL1NoYWRlci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9SZXNvdXJjZS9Tb3VuZC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9SZXNvdXJjZS9UZXh0dXJlLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1NhbXBsZVNjZW5lLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1NjZW5lL1NjZW5lLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1NjZW5lL1NjZW5lTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Ub29sL0JpbmFyeVJlYWRlci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Ub29sL0NvbGxpc2lvbk9iamVjdENyZWF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvVG9vbC9Db2xvckNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvVG9vbC9GaWxlTG9hZGVyLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1Rvb2wvR2VvbWV0cnlHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvVG9vbC9JbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Ub29sL1Jlc291cmNlQ3JlYXRlci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9UcmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qiw4RUFBOEU7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxrQ0FBa0MsbUJBQU8sQ0FBQyxtREFBYTtBQUN2RCwrQ0FBK0MsbUJBQU8sQ0FBQyw4RUFBZ0M7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQ0FBc0M7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDaEVhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDeENhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qiw4RUFBOEU7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxrQ0FBa0MsbUJBQU8sQ0FBQyxtREFBYTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNwRWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLDhFQUE4RTtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGdDQUFnQyxtQkFBTyxDQUFDLGdEQUFpQjtBQUN6RCw4QkFBOEIsbUJBQU8sQ0FBQyw0Q0FBZTtBQUNyRCxrQ0FBa0MsbUJBQU8sQ0FBQyxtREFBYTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDN0NhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qiw4RUFBOEU7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxrQ0FBa0MsbUJBQU8sQ0FBQyxtREFBYTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUMzRGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzREFBc0QsMkJBQTJCLEVBQUU7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCwyQkFBMkIsRUFBRTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsMkJBQTJCLEVBQUU7QUFDbkYsa0VBQWtFLDJCQUEyQixFQUFFO0FBQy9GLDBDQUEwQyx3QkFBd0IsRUFBRTtBQUNwRSx1RUFBdUUsNEJBQTRCLEVBQUU7QUFDckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGtDQUFrQyxFQUFFO0FBQzFGO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNuRmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELG1DQUFtQyxtQkFBTyxDQUFDLHNEQUFjO0FBQ3pELGtDQUFrQyxtQkFBTyxDQUFDLDBDQUFjO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELHFCQUFxQixFQUFFO0FBQ3hFLGdEQUFnRCxxQkFBcUIsRUFBRSwwQkFBMEIscUJBQXFCLEVBQUU7QUFDeEgsbUVBQW1FLHNCQUFzQixFQUFFO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxzQkFBc0IsRUFBRTtBQUM1RTtBQUNBLGlEQUFpRCxzQkFBc0IsRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3ZFYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsK0JBQStCLG1CQUFPLENBQUMsOENBQWdCO0FBQ3ZELGtDQUFrQyxtQkFBTyxDQUFDLDBDQUFjO0FBQ3hELGdDQUFnQyxtQkFBTyxDQUFDLGdEQUFpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNoRGE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGdDQUFnQyxtQkFBTyxDQUFDLGdEQUFpQjtBQUN6RCxnQ0FBZ0MsbUJBQU8sQ0FBQyxnREFBaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuT2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsc0JBQXNCLEVBQUU7QUFDdEU7QUFDQTtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsc0JBQXNCLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNoSGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN0RGE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGtDQUFrQyxtQkFBTyxDQUFDLDBDQUFjO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2hCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxrRUFBa0U7QUFDcEgsa0RBQWtELGtFQUFrRTtBQUNwSDtBQUNBLENBQUM7QUFDRDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbEJhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQ0FBZ0MsbUJBQU8sQ0FBQywyQ0FBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxlQUFlO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN6V2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1ZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDMVlhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCwrQkFBK0IsbUJBQU8sQ0FBQyx3Q0FBVTtBQUNqRCxnQ0FBZ0MsbUJBQU8sQ0FBQywwQ0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbk5hO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN4R2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDekphO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3JJYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0NBQWdDLG1CQUFPLENBQUMsbURBQW9CO0FBQzVELCtCQUErQixtQkFBTyxDQUFDLG1EQUFVO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlDQUFpQztBQUN4RCwrQkFBK0IsaUNBQWlDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHNCQUFzQixFQUFFO0FBQ3RFO0FBQ0E7QUFDQSw4Q0FBOEMsd0JBQXdCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDL0RhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUMzQ2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2xDYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0NBQWdDLG1CQUFPLENBQUMsbURBQW9CO0FBQzVELDJCQUEyQixtQkFBTyxDQUFDLGtDQUFPO0FBQzFDLGdDQUFnQyxtQkFBTyxDQUFDLHFEQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZUFBZTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwyQkFBMkI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlDQUF5QztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix3QkFBd0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1S2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzlDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNSYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsOEJBQThCLG1CQUFPLENBQUMsa0RBQWtCO0FBQ3hELHdDQUF3QyxtQkFBTyxDQUFDLGdFQUF5QjtBQUN6RSwwQ0FBMEMsbUJBQU8sQ0FBQyxvRUFBMkI7QUFDN0Usa0NBQWtDLG1CQUFPLENBQUMsMERBQXNCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDekVhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCwyQkFBMkIsbUJBQU8sQ0FBQyxpQ0FBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx5QkFBeUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsc0JBQXNCLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsd0JBQXdCLEVBQUU7QUFDeEU7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2hGYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsd0NBQXdDLG1CQUFPLENBQUMsZ0VBQXlCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3JJYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNsRGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN2Q2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Qsb0RBQW9ELEVBQUU7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMEJBQTBCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDOUVhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ1hhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxtQ0FBbUMsbUJBQU8sQ0FBQyxzREFBb0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDLG9FQUFvRSwwQ0FBMEMsRUFBRTtBQUNoSDtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtBQUNBLG1EQUFtRCxtREFBbUQsRUFBRTtBQUN4Ryx1QkFBdUIsK0JBQStCO0FBQ3RELCtFQUErRSxnQkFBZ0IsRUFBRTtBQUNqRztBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsbUNBQW1DO0FBQ25DLHdEQUF3RCx3Q0FBd0MsRUFBRTtBQUNsRztBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLDZDQUE2Qyw2Q0FBNkMsRUFBRTtBQUM1Rix1QkFBdUIseUJBQXlCO0FBQ2hELG1FQUFtRSxnQkFBZ0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN6RmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2xDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNoQ2E7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLDhFQUE4RTtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw4QkFBOEIsbUJBQU8sQ0FBQyw2Q0FBZTtBQUNyRCx3Q0FBd0MsbUJBQU8sQ0FBQywrREFBd0I7QUFDeEUsMENBQTBDLG1CQUFPLENBQUMsbUVBQTBCO0FBQzVFLDZCQUE2QixtQkFBTyxDQUFDLHlDQUFhO0FBQ2xELGdDQUFnQyxtQkFBTyxDQUFDLCtDQUFnQjtBQUN4RCxnQ0FBZ0MsbUJBQU8sQ0FBQywrQ0FBZ0I7QUFDeEQsbUNBQW1DLG1CQUFPLENBQUMsdURBQW9CO0FBQy9ELDJDQUEyQyxtQkFBTyxDQUFDLCtFQUFnQztBQUNuRixnQ0FBZ0MsbUJBQU8sQ0FBQywrQ0FBZ0I7QUFDeEQsd0NBQXdDLG1CQUFPLENBQUMseUVBQTZCO0FBQzdFLDJDQUEyQyxtQkFBTyxDQUFDLCtFQUFnQztBQUNuRiwwQ0FBMEMsbUJBQU8sQ0FBQyw2RUFBK0I7QUFDakYsa0NBQWtDLG1CQUFPLENBQUMseUNBQWE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQ0FBc0M7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzdLYTtBQUNiO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGlDQUFpQyxtQkFBTyxDQUFDLG9EQUFtQjtBQUM1RCwrQkFBK0IsbUJBQU8sQ0FBQyxvREFBbUI7QUFDMUQsMENBQTBDLG1CQUFPLENBQUMsZ0ZBQWlDO0FBQ25GLHlDQUF5QyxtQkFBTyxDQUFDLHdGQUFxQztBQUN0RjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsb0NBQW9DLEVBQUU7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2pLYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsaUNBQWlDLG1CQUFPLENBQUMsb0RBQW1CO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUM1RGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixVQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3hIYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsaUNBQWlDLG1CQUFPLENBQUMsb0VBQTJCO0FBQ3BFLGdDQUFnQyxtQkFBTyxDQUFDLGtFQUEwQjtBQUNsRSx1Q0FBdUMsbUJBQU8sQ0FBQyxnRkFBaUM7QUFDaEYsK0JBQStCLG1CQUFPLENBQUMsZ0VBQXlCO0FBQ2hFLGdDQUFnQyxtQkFBTyxDQUFDLGdEQUFpQjtBQUN6RCx3Q0FBd0MsbUJBQU8sQ0FBQyxzRkFBb0M7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQy9LWTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQWlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNqQ2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9CYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsd0NBQXdDLG1CQUFPLENBQUMsMERBQW1CO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsVUFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsY0FBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCLHdCQUF3QixhQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsVUFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsY0FBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCLHdCQUF3QixhQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDM01hO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQ0FBZ0MsbUJBQU8sQ0FBQyxnREFBaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzRmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGdDQUFnQyxtQkFBTyxDQUFDLHdEQUFxQjtBQUM3RCxpQ0FBaUMsbUJBQU8sQ0FBQywwREFBc0I7QUFDL0QsK0JBQStCLG1CQUFPLENBQUMsc0RBQW9CO0FBQzNELGlDQUFpQyxtQkFBTyxDQUFDLDBEQUFzQjtBQUMvRCxnQ0FBZ0MsbUJBQU8sQ0FBQyxnREFBaUI7QUFDekQsMkNBQTJDLG1CQUFPLENBQUMsOEVBQWdDO0FBQ25GLDZCQUE2QixtQkFBTyxDQUFDLGtEQUFrQjtBQUN2RCxtQ0FBbUMsbUJBQU8sQ0FBQyxnREFBYztBQUN6RCxxQ0FBcUMsbUJBQU8sQ0FBQywwREFBc0I7QUFDbkUsOEJBQThCLG1CQUFPLENBQUMsb0RBQW1CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUNqQztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUM1L0NhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCwrQkFBK0IsbUJBQU8sQ0FBQyw2Q0FBZTtBQUN0RCxnQ0FBZ0MsbUJBQU8sQ0FBQywrQ0FBZ0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbElhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxzQ0FBc0MsbUJBQU8sQ0FBQyxpRUFBeUI7QUFDdkUsMENBQTBDLG1CQUFPLENBQUMscUVBQTJCO0FBQzdFLHFDQUFxQyxtQkFBTyxDQUFDLDJEQUFzQjtBQUNuRSxxQ0FBcUMsbUJBQU8sQ0FBQywyREFBc0I7QUFDbkUsb0NBQW9DLG1CQUFPLENBQUMsNkNBQWU7QUFDM0QsOEJBQThCLG1CQUFPLENBQUMsMkNBQWM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkNBLG1CQUFPLENBQUMsdUNBQWUsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9nYW1lLmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIENvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvbXBvbmVudFwiKSk7XHJcbnZhciBDb2xsaXNpb25PYmplY3RDcmVhdGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1Rvb2wvQ29sbGlzaW9uT2JqZWN0Q3JlYXRlclwiKSk7XHJcbnZhciBQcmltaXRpdmVUeXBlO1xyXG4oZnVuY3Rpb24gKFByaW1pdGl2ZVR5cGUpIHtcclxuICAgIFByaW1pdGl2ZVR5cGVbUHJpbWl0aXZlVHlwZVtcInNwaGVyZVwiXSA9IDBdID0gXCJzcGhlcmVcIjtcclxuICAgIFByaW1pdGl2ZVR5cGVbUHJpbWl0aXZlVHlwZVtcImJveF9BQUJCXCJdID0gMV0gPSBcImJveF9BQUJCXCI7XHJcbiAgICBQcmltaXRpdmVUeXBlW1ByaW1pdGl2ZVR5cGVbXCJib3hfT0JCXCJdID0gMl0gPSBcImJveF9PQkJcIjtcclxuICAgIFByaW1pdGl2ZVR5cGVbUHJpbWl0aXZlVHlwZVtcInBvaW50XCJdID0gM10gPSBcInBvaW50XCI7XHJcbn0pKFByaW1pdGl2ZVR5cGUgfHwgKFByaW1pdGl2ZVR5cGUgPSB7fSkpO1xyXG52YXIgQ29sbGlzaW9uQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKENvbGxpc2lvbkNvbXBvbmVudCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENvbGxpc2lvbkNvbXBvbmVudChhcmdfdHlwZSwgYXJnX3NpemUsIGxheWVyKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5sYXllciA9IDA7XHJcbiAgICAgICAgX3RoaXMudHlwZSA9IGFyZ190eXBlO1xyXG4gICAgICAgIF90aGlzLnNpemUgPSBhcmdfc2l6ZTtcclxuICAgICAgICBpZiAobGF5ZXIpIHtcclxuICAgICAgICAgICAgX3RoaXMubGF5ZXIgPSBsYXllcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgQ29sbGlzaW9uQ29tcG9uZW50LnByb3RvdHlwZS5PblNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFByaW1pdGl2ZVR5cGUuc3BoZXJlOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb24gPSBDb2xsaXNpb25PYmplY3RDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVTcGhlcmUodGhpcy5zaXplLngsIHRoaXMuZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQcmltaXRpdmVUeXBlLnBvaW50OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb24gPSBDb2xsaXNpb25PYmplY3RDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVQb2ludCh0aGlzLmdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUHJpbWl0aXZlVHlwZS5ib3hfQUFCQjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uID0gQ29sbGlzaW9uT2JqZWN0Q3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlQ3ViZV9BQUJCKHRoaXMuc2l6ZSwgdGhpcy5nYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFByaW1pdGl2ZVR5cGUuYm94X09CQjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uID0gQ29sbGlzaW9uT2JqZWN0Q3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlQ3ViZV9PQkIodGhpcy5zaXplLCB0aGlzLmdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmdhbWVPYmplY3QuR2V0Q29sbGlzaW9uTWFuYWdlcigpLlJlZ2lzdCh0aGlzLmNvbGxpc2lvbiwgdGhpcy5sYXllcik7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uQ29tcG9uZW50LnByb3RvdHlwZS5PblJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3QuR2V0Q29sbGlzaW9uTWFuYWdlcigpLlVuUmVnaXN0KHRoaXMuaWQsIHRoaXMubGF5ZXIpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbkNvbXBvbmVudC5wcm90b3R5cGUuVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uLlVwZGF0ZSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb2xsaXNpb25Db21wb25lbnQ7XHJcbn0oQ29tcG9uZW50XzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDb2xsaXNpb25Db21wb25lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgXCJJc1JlbW92ZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzUmVtb3ZlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIENvbXBvbmVudC5wcm90b3R5cGUuU2V0ID0gZnVuY3Rpb24gKGFyZ19vYmopIHtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3QgPSBhcmdfb2JqO1xyXG4gICAgICAgIHRoaXMuaXNSZW1vdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLk9uU2V0KCk7XHJcbiAgICB9O1xyXG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5EZWFkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXNSZW1vdmUgPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIENvbXBvbmVudC5wcm90b3R5cGUuT25TZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5SZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5PblJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdCA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5PblJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBDb21wb25lbnQucHJvdG90eXBlLlJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5PblJlbGVhc2UoKTtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3QgPSBudWxsO1xyXG4gICAgfTtcclxuICAgIENvbXBvbmVudC5wcm90b3R5cGUuT25SZWxlYXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIENvbXBvbmVudC5wcm90b3R5cGUuVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIENvbXBvbmVudC5wcm90b3R5cGUuSGl0ID0gZnVuY3Rpb24gKGFyZ19nYW1lT2JqZWN0KSB7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ29tcG9uZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ29tcG9uZW50XCIpKTtcclxudmFyIE1vZGVsSW5mbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1vZGVsSW5mbygpIHtcclxuICAgICAgICB0aGlzLm1lc2hOYW1lID0gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBNb2RlbEluZm87XHJcbn0oKSk7XHJcbnZhciBNb2RlbERyYXdDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoTW9kZWxEcmF3Q29tcG9uZW50LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTW9kZWxEcmF3Q29tcG9uZW50KGlzTGlnaHRpbmcsIGdlb21ldHJ5TmFtZSwgbWF0ZXJpYWxOYW1lLCBzaGFkZXJOYW1lLCBsYXllciwgaXNCaWxsQm9hcmQsIG1lc2hOYW1lLCBhcmdfdHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5pbmZvID0gbmV3IE1vZGVsSW5mbygpO1xyXG4gICAgICAgIF90aGlzLnRyYW5zZm9ybSA9IG51bGw7XHJcbiAgICAgICAgX3RoaXMubGF5ZXIgPSBsYXllcjtcclxuICAgICAgICBpZiAobWVzaE5hbWUpXHJcbiAgICAgICAgICAgIF90aGlzLmluZm8ubWVzaE5hbWUgPSBtZXNoTmFtZTtcclxuICAgICAgICBfdGhpcy5pbmZvLmdlb21ldHJ5TmFtZSA9IGdlb21ldHJ5TmFtZTtcclxuICAgICAgICBfdGhpcy5pbmZvLnNoYWRlck5hbWUgPSBzaGFkZXJOYW1lO1xyXG4gICAgICAgIF90aGlzLmluZm8ubWF0ZXJpYWxOYW1lID0gbWF0ZXJpYWxOYW1lO1xyXG4gICAgICAgIGlmIChhcmdfdHJhbnNmb3JtKVxyXG4gICAgICAgICAgICBfdGhpcy50cmFuc2Zvcm0gPSBhcmdfdHJhbnNmb3JtO1xyXG4gICAgICAgIF90aGlzLmluZm8ubGlnaHRpbmcgPSBpc0xpZ2h0aW5nO1xyXG4gICAgICAgIF90aGlzLmluZm8uYmlsbEJvYXJkID0gaXNCaWxsQm9hcmQ7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1vZGVsRHJhd0NvbXBvbmVudC5wcm90b3R5cGUsIFwiTGF5ZXJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sYXllcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBNb2RlbERyYXdDb21wb25lbnQucHJvdG90eXBlLk9uU2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy50cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbmZvLm1lc2hOYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSB0aGlzLmdhbWVPYmplY3QuTWFuYWdlci5TY2VuZS5HZXRTY2VuZU1hbmFnZXIoKS5HZXRNb2RlbENyZWF0ZXIoKS5DcmVhdGVNb2RlbEZyb21NZXNoKHRoaXMuaW5mby5saWdodGluZywgdGhpcy5pbmZvLmJpbGxCb2FyZCwgdGhpcy5pbmZvLm1lc2hOYW1lLCB0aGlzLmluZm8uc2hhZGVyTmFtZSwgdGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJtZXNoXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gdGhpcy5nYW1lT2JqZWN0Lk1hbmFnZXIuU2NlbmUuR2V0U2NlbmVNYW5hZ2VyKCkuR2V0TW9kZWxDcmVhdGVyKCkuQ3JlYXRlTW9kZWwodGhpcy5pbmZvLmxpZ2h0aW5nLCB0aGlzLmluZm8uYmlsbEJvYXJkLCB0aGlzLmluZm8uZ2VvbWV0cnlOYW1lLCB0aGlzLmluZm8ubWF0ZXJpYWxOYW1lLCB0aGlzLmluZm8uc2hhZGVyTmFtZSwgdGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZGVsSUQgPSB0aGlzLmdhbWVPYmplY3QuR2V0UmVuZGVyZXIoKS5SZWdpc3QodGhpcy5tb2RlbCwgdGhpcy5sYXllcik7XHJcbiAgICB9O1xyXG4gICAgTW9kZWxEcmF3Q29tcG9uZW50LnByb3RvdHlwZS5PblJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3QuR2V0UmVuZGVyZXIoKS5VblJlZ2lzdCh0aGlzLm1vZGVsSUQsIHRoaXMubGF5ZXIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNb2RlbERyYXdDb21wb25lbnQ7XHJcbn0oQ29tcG9uZW50XzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBNb2RlbERyYXdDb21wb25lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBWZWN0b3IzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL01hdGgvVmVjdG9yM1wiKSk7XHJcbnZhciBJbnB1dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9Ub29sL0lucHV0XCIpKTtcclxudmFyIENvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvbXBvbmVudFwiKSk7XHJcbnZhciBTYW1wbGVDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU2FtcGxlQ29tcG9uZW50LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU2FtcGxlQ29tcG9uZW50KCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFNhbXBsZUNvbXBvbmVudC5wcm90b3R5cGUuT25TZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgSW5wdXRfMS5kZWZhdWx0LkFkZEtleURvd25FdmVudCh0aGlzLCB0cnVlKTtcclxuICAgIH07XHJcbiAgICBTYW1wbGVDb21wb25lbnQucHJvdG90eXBlLk9uS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09IFwiQXJyb3dMZWZ0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybS5Qb3NpdGlvbiA9IHRoaXMuZ2FtZU9iamVjdC50cmFuc2Zvcm0uUG9zaXRpb24uQWRkX2IobmV3IFZlY3RvcjNfMS5kZWZhdWx0KC0xLjAsIDAsIDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGUua2V5ID09IFwiQXJyb3dSaWdodFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdC50cmFuc2Zvcm0uUG9zaXRpb24gPSB0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtLlBvc2l0aW9uLkFkZF9iKG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgxLjAwLCAwLCAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLmtleSA9PSBcIkFycm93VXBcIikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtLlBvc2l0aW9uID0gdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybS5Qb3NpdGlvbi5BZGRfYihuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgLTEuMDAsIDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGUua2V5ID09IFwiQXJyb3dEb3duXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybS5Qb3NpdGlvbiA9IHRoaXMuZ2FtZU9iamVjdC50cmFuc2Zvcm0uUG9zaXRpb24uQWRkX2IobmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDEuMDAsIDApKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNhbXBsZUNvbXBvbmVudDtcclxufShDb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFNhbXBsZUNvbXBvbmVudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIENvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvbXBvbmVudFwiKSk7XHJcbnZhciBNb2RlbEluZm8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNb2RlbEluZm8oKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTW9kZWxJbmZvO1xyXG59KCkpO1xyXG52YXIgVGV4dERyYXdDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVGV4dERyYXdDb21wb25lbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUZXh0RHJhd0NvbXBvbmVudCh0ZXh0LCBmb250VGV4TmFtZSwgc2hhZGVyTmFtZSwgYXJnX2NvbG9yLCBsYXllciwgaXNCaWxsQm9hcmQsIGFyZ190cmFuc2Zvcm0pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmluZm8gPSBuZXcgTW9kZWxJbmZvKCk7XHJcbiAgICAgICAgX3RoaXMudHJhbnNmb3JtID0gbnVsbDtcclxuICAgICAgICBfdGhpcy5sYXllciA9IGxheWVyO1xyXG4gICAgICAgIF90aGlzLmluZm8uc2hhZGVyTmFtZSA9IHNoYWRlck5hbWU7XHJcbiAgICAgICAgX3RoaXMuaW5mby5jb2xvciA9IGFyZ19jb2xvcjtcclxuICAgICAgICBfdGhpcy5pbmZvLmZvbnRUZXh0dXJlTmFtZSA9IGZvbnRUZXhOYW1lO1xyXG4gICAgICAgIF90aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIGlmIChhcmdfdHJhbnNmb3JtKVxyXG4gICAgICAgICAgICBfdGhpcy50cmFuc2Zvcm0gPSBhcmdfdHJhbnNmb3JtO1xyXG4gICAgICAgIF90aGlzLmluZm8uYmlsbEJvYXJkID0gaXNCaWxsQm9hcmQ7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRleHREcmF3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJMYXllclwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxheWVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFRleHREcmF3Q29tcG9uZW50LnByb3RvdHlwZS5PblNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMudHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuZ2FtZU9iamVjdC5NYW5hZ2VyLlNjZW5lLkdldFNjZW5lTWFuYWdlcigpLkdldE1vZGVsQ3JlYXRlcigpLkNyZWF0ZU1vZGVsRnJvbVRleHQodGhpcy5pbmZvLmJpbGxCb2FyZCwgdGhpcy5pbmZvLmNvbG9yLCB0aGlzLnRleHQsIHRoaXMuaW5mby5mb250VGV4dHVyZU5hbWUsIHRoaXMuaW5mby5zaGFkZXJOYW1lLCB0aGlzLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbElEID0gdGhpcy5nYW1lT2JqZWN0LkdldFJlbmRlcmVyKCkuUmVnaXN0KHRoaXMubW9kZWwsIHRoaXMubGF5ZXIpO1xyXG4gICAgfTtcclxuICAgIFRleHREcmF3Q29tcG9uZW50LnByb3RvdHlwZS5PblJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3QuR2V0UmVuZGVyZXIoKS5VblJlZ2lzdCh0aGlzLm1vZGVsSUQsIHRoaXMubGF5ZXIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUZXh0RHJhd0NvbXBvbmVudDtcclxufShDb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFRleHREcmF3Q29tcG9uZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgR2FtZU9iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWVPYmplY3QoYXJnX21hbmFnZXIsIGFyZ19uYW1lLCBhcmdfdHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBhcmdfdHJhbnNmb3JtO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMubmV3Q29tcG9uZW50cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuaXNSZW1vdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBhcmdfbmFtZTtcclxuICAgICAgICB0aGlzLm1hbmFnZXIgPSBhcmdfbWFuYWdlcjtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lT2JqZWN0LnByb3RvdHlwZSwgXCJJc1JlbW92ZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzUmVtb3ZlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lT2JqZWN0LnByb3RvdHlwZSwgXCJOYW1lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGFyZ19uYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFuYWdlci5VblJlZ2lzdE9iamVjdCh0aGlzLm5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBhcmdfbmFtZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZU9iamVjdC5wcm90b3R5cGUsIFwiTWFuYWdlclwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hbmFnZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWVPYmplY3QucHJvdG90eXBlLCBcIkdhbWVUaW1lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuTWFuYWdlci5TY2VuZS5HZXRTY2VuZU1hbmFnZXIoKS5HZXRHYW1lVGltZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIEdhbWVPYmplY3QucHJvdG90eXBlLlJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiAoY29tcG9uZW50KSB7IHJldHVybiBjb21wb25lbnQuUmVtb3ZlKCk7IH0pO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMubWFuYWdlci5VblJlZ2lzdE9iamVjdCh0aGlzLm5hbWUpO1xyXG4gICAgICAgIHRoaXMubWFuYWdlciA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUuUmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiAoY29tcG9uZW50KSB7IHJldHVybiBjb21wb25lbnQuUmVtb3ZlKCk7IH0pO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMubWFuYWdlciA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUuRGVhZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmlzUmVtb3ZlID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUuR2V0UmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5TY2VuZS5HZXRSZW5kZXJlcigpO1xyXG4gICAgfTtcclxuICAgIEdhbWVPYmplY3QucHJvdG90eXBlLkdldENvbGxpc2lvbk1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5TY2VuZS5HZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUuVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50cy5jb25jYXQodGhpcy5uZXdDb21wb25lbnRzKTtcclxuICAgICAgICB0aGlzLm5ld0NvbXBvbmVudHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiAoY29tcG9uZW50KSB7IHJldHVybiBjb21wb25lbnQuVXBkYXRlKCk7IH0pO1xyXG4gICAgICAgIHZhciByZW1vdmUgPSB0aGlzLmNvbXBvbmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjb21wb25lbnQpIHsgcmV0dXJuIGNvbXBvbmVudC5Jc1JlbW92ZTsgfSk7XHJcbiAgICAgICAgcmVtb3ZlLmZvckVhY2goZnVuY3Rpb24gKHJlbW92ZSkgeyByZXR1cm4gcmVtb3ZlLlJlbW92ZSgpOyB9KTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjb21wb25lbnQpIHsgcmV0dXJuICFjb21wb25lbnQuSXNSZW1vdmU7IH0pO1xyXG4gICAgfTtcclxuICAgIEdhbWVPYmplY3QucHJvdG90eXBlLkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUuU2V0Q29tcG9uZW50ID0gZnVuY3Rpb24gKGFyZ19jb21wb25lbnQpIHtcclxuICAgICAgICBhcmdfY29tcG9uZW50LlNldCh0aGlzKTtcclxuICAgICAgICB0aGlzLm5ld0NvbXBvbmVudHMucHVzaChhcmdfY29tcG9uZW50KTtcclxuICAgICAgICByZXR1cm4gYXJnX2NvbXBvbmVudDtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0LnByb3RvdHlwZS5IaXQgPSBmdW5jdGlvbiAoYXJnX29iamVjdCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjb21wb25lbnQpIHsgcmV0dXJuIGNvbXBvbmVudC5IaXQoYXJnX29iamVjdCk7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lT2JqZWN0O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBHYW1lT2JqZWN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgR2FtZU9iamVjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0dhbWVPYmplY3RcIikpO1xyXG52YXIgVHJhbnNmb3JtXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1RyYW5zZm9ybVwiKSk7XHJcbnZhciBHYW1lT2JqZWN0TWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWVPYmplY3RNYW5hZ2VyKGFyZ19zY2VuZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLm5ld0dhbWVPYmplY3RzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5tYXBfZ2FtZU9iamVjdHMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IGFyZ19zY2VuZTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lT2JqZWN0TWFuYWdlci5wcm90b3R5cGUsIFwiU2NlbmVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBHYW1lT2JqZWN0TWFuYWdlci5wcm90b3R5cGUuQWRkR2FtZU9iamVjdCA9IGZ1bmN0aW9uIChhcmdfbmFtZSwgYXJnX3RyYW5zZm9ybSkge1xyXG4gICAgICAgIHZhciBuZXdPYmo7XHJcbiAgICAgICAgaWYgKHRoaXMubWFwX2dhbWVPYmplY3RzW2FyZ19uYW1lXSkge1xyXG4gICAgICAgICAgICB2YXIgbnVtID0gMTtcclxuICAgICAgICAgICAgdmFyIG5hbWUgPSBhcmdfbmFtZSArIFwiX1wiICsgbnVtO1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5tYXBfZ2FtZU9iamVjdHNbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIG51bSsrO1xyXG4gICAgICAgICAgICAgICAgbmFtZSA9IGFyZ19uYW1lICsgXCJfXCIgKyBudW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJnX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJnX3RyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICBuZXdPYmogPSBuZXcgR2FtZU9iamVjdF8xLmRlZmF1bHQodGhpcywgYXJnX25hbWUsIGFyZ190cmFuc2Zvcm0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbmV3T2JqID0gbmV3IEdhbWVPYmplY3RfMS5kZWZhdWx0KHRoaXMsIGFyZ19uYW1lLCBuZXcgVHJhbnNmb3JtXzEuZGVmYXVsdCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYXBfZ2FtZU9iamVjdHNbYXJnX25hbWVdID0gbmV3T2JqO1xyXG4gICAgICAgIHRoaXMubmV3R2FtZU9iamVjdHMucHVzaChuZXdPYmopO1xyXG4gICAgICAgIHJldHVybiBuZXdPYmo7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdE1hbmFnZXIucHJvdG90eXBlLlJlbW92ZU9iamVjdCA9IGZ1bmN0aW9uIChhcmdfZ2FtZU9iak5hbWUpIHtcclxuICAgICAgICB0aGlzLm1hcF9nYW1lT2JqZWN0c1thcmdfZ2FtZU9iak5hbWVdLkRlYWQoKTtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0TWFuYWdlci5wcm90b3R5cGUuVW5SZWdpc3RPYmplY3QgPSBmdW5jdGlvbiAoYXJnX2dhbWVPYmplY3ROYW1lKSB7XHJcbiAgICAgICAgdGhpcy5tYXBfZ2FtZU9iamVjdHMuZGVsZXRlKGFyZ19nYW1lT2JqZWN0TmFtZSk7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdE1hbmFnZXIucHJvdG90eXBlLlVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3RzID0gdGhpcy5nYW1lT2JqZWN0cy5jb25jYXQodGhpcy5uZXdHYW1lT2JqZWN0cyk7XHJcbiAgICAgICAgdGhpcy5uZXdHYW1lT2JqZWN0cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmouVXBkYXRlKCk7IH0pO1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMuZmlsdGVyKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iai5Jc1JlbW92ZTsgfSkuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmouUmVtb3ZlKCk7IH0pO1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMgPSB0aGlzLmdhbWVPYmplY3RzLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7IHJldHVybiAhb2JqLklzUmVtb3ZlOyB9KTtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0TWFuYWdlci5wcm90b3R5cGUuR2V0R2FtZU9iamVjdCA9IGZ1bmN0aW9uIChhcmdfZ2FtZU9iamVjdE5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBfZ2FtZU9iamVjdHNbYXJnX2dhbWVPYmplY3ROYW1lXTtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0TWFuYWdlci5wcm90b3R5cGUuUmVnaXN0T2JqID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIHRoaXMubWFwX2dhbWVPYmplY3RzW29iai5OYW1lXSA9IG9iajtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0TWFuYWdlci5wcm90b3R5cGUuUmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm1hcF9nYW1lT2JqZWN0cy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMubmV3R2FtZU9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmouUmVsZWFzZSgpOyB9KTtcclxuICAgICAgICB0aGlzLm5ld0dhbWVPYmplY3RzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iai5SZWxlYXNlKCk7IH0pO1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLnNjZW5lID0gbnVsbDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZU9iamVjdE1hbmFnZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWVPYmplY3RNYW5hZ2VyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgTWF0cml4XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL01hdGgvTWF0cml4XCIpKTtcclxudmFyIFRyYW5zZm9ybV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9UcmFuc2Zvcm1cIikpO1xyXG52YXIgVmVjdG9yNF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9NYXRoL1ZlY3RvcjRcIikpO1xyXG52YXIgQ2FtZXJhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2FtZXJhKGFyZ19kZXZpY2UsIGxheWVyLCBpc1BhcmFyZWxsLCBmcmFtZUJ1ZmZlcikge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0RnJhbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gYXJnX2RldmljZTtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm1fMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5sYXllciA9IGxheWVyO1xyXG4gICAgICAgIHRoaXMuY2xlYXJDb2xvciA9IG5ldyBWZWN0b3I0XzEuZGVmYXVsdCgwLCAwLCAwLCAwKTtcclxuICAgICAgICBpZiAoZnJhbWVCdWZmZXIpIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRGcmFtZSA9IGZyYW1lQnVmZmVyO1xyXG4gICAgICAgICAgICBpZiAoIWlzUGFyYXJlbGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeCA9IG5ldyBNYXRyaXhfMS5kZWZhdWx0KCkuUGVyc3BlY3RpdmUoNDUsIHRoaXMudGFyZ2V0RnJhbWUud2lkdGggLyB0aGlzLnRhcmdldEZyYW1lLmhlaWdodCwgMC4xLCAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4ID0gbmV3IE1hdHJpeF8xLmRlZmF1bHQoKS5PcnRobygtdGhpcy50YXJnZXRGcmFtZS53aWR0aCAvIDIsIHRoaXMudGFyZ2V0RnJhbWUud2lkdGggLyAyLCB0aGlzLnRhcmdldEZyYW1lLmhlaWdodCAvIDIsIC10aGlzLnRhcmdldEZyYW1lLmhlaWdodCAvIDIsIDAuMSwgMTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFpc1BhcmFyZWxsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4ID0gbmV3IE1hdHJpeF8xLmRlZmF1bHQoKS5QZXJzcGVjdGl2ZSg0NSwgdGhpcy5kZXZpY2UuR2V0U2l6ZSgpLnggLyB0aGlzLmRldmljZS5HZXRTaXplKCkueSwgMC4xLCAxMDApO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeCA9IG5ldyBNYXRyaXhfMS5kZWZhdWx0KCkuT3J0aG8oLXRoaXMuZGV2aWNlLkdldFNpemUoKS54IC8gMiwgdGhpcy5kZXZpY2UuR2V0U2l6ZSgpLnggLyAyLCB0aGlzLmRldmljZS5HZXRTaXplKCkueSAvIDIsIC10aGlzLmRldmljZS5HZXRTaXplKCkueSAvIDIsIDAuMSwgMTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIENhbWVyYS5wcm90b3R5cGUuQXR0YWNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZGV2aWNlLlNldENsZWFyQ29sb3IodGhpcy5jbGVhckNvbG9yKTtcclxuICAgICAgICB0aGlzLmRldmljZS5TZXRDYW1lcmFTdGF0dXModGhpcy50cmFuc2Zvcm0uTWF0cml4LkludmVyc2UoKSwgdGhpcy5wcm9qZWN0aW9uTWF0cml4LCB0aGlzLnRyYW5zZm9ybS5Sb3RhdGlvbiwgdGhpcy50cmFuc2Zvcm0uUG9zaXRpb24pO1xyXG4gICAgICAgIGlmICh0aGlzLnRhcmdldEZyYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlLmNvbnRleHQudmlld3BvcnQoMCwgMCwgdGhpcy50YXJnZXRGcmFtZS53aWR0aCwgdGhpcy50YXJnZXRGcmFtZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZS5jb250ZXh0LmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmRldmljZS5jb250ZXh0LkZSQU1FQlVGRkVSLCB0aGlzLnRhcmdldEZyYW1lLmZyYW1lQnVmZmVyKTtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2UuY2xlYXJGdW5jKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZS5jb250ZXh0LnZpZXdwb3J0KDAsIDAsIHRoaXMuZGV2aWNlLkdldFNpemUoKS54LCB0aGlzLmRldmljZS5HZXRTaXplKCkueSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlLmNvbnRleHQuYmluZEZyYW1lYnVmZmVyKHRoaXMuZGV2aWNlLmNvbnRleHQuRlJBTUVCVUZGRVIsIG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZS5jbGVhckZ1bmMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENhbWVyYTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ2FtZXJhO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVmVjdG9yNF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9NYXRoL1ZlY3RvcjRcIikpO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9NYXRoL1ZlY3RvcjJcIikpO1xyXG52YXIgR3JhcGhpY0RldmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdyYXBoaWNEZXZpY2UoYXJnX2NhbnZhcykge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gYXJnX2NhbnZhcztcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5lbmFibGUodGhpcy5jb250ZXh0LkNVTExfRkFDRSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmVuYWJsZSh0aGlzLmNvbnRleHQuREVQVEhfVEVTVCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRlcHRoRnVuYyh0aGlzLmNvbnRleHQuTEVRVUFMKTtcclxuICAgICAgICB0aGlzLmNsZWFyQ29sb3IgPSBuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5zaXplID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KGFyZ19jYW52YXMud2lkdGgsIGFyZ19jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmNsZWFyRnVuYyA9IHRoaXMuQ2xlYXI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyQ29sb3IodGhpcy5jbGVhckNvbG9yLngsIHRoaXMuY2xlYXJDb2xvci55LCB0aGlzLmNsZWFyQ29sb3IueiwgdGhpcy5jbGVhckNvbG9yLncpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhckRlcHRoKDEuMCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJsZW5kRnVuYyh0aGlzLmNvbnRleHQuU1JDX0FMUEhBLCB0aGlzLmNvbnRleHQuT05FX01JTlVTX1NSQ19BTFBIQSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmVuYWJsZSh0aGlzLmNvbnRleHQuQkxFTkQpO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLCBcIlRlbXBNYXRyaXhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wTWF0cml4O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHcmFwaGljRGV2aWNlLnByb3RvdHlwZSwgXCJWaWV3TWF0cml4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlld01hdHJpeDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR3JhcGhpY0RldmljZS5wcm90b3R5cGUsIFwiUHJvamVjdGlvbk1hdHJpeFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2plY3Rpb25NYXRyaXg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLCBcIkNhbWVyYVBvc2l0aW9uXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FtUG9zaXRpb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLCBcIkNhbWVyYVJvdGF0aW9uSW52XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FtUm90YXRpb25JbnY7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuU2V0Q2xlYXJDb2xvciA9IGZ1bmN0aW9uIChhcmdfY29sb3IpIHtcclxuICAgICAgICB0aGlzLmNsZWFyQ29sb3IgPSBhcmdfY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyQ29sb3IodGhpcy5jbGVhckNvbG9yLngsIHRoaXMuY2xlYXJDb2xvci55LCB0aGlzLmNsZWFyQ29sb3IueiwgdGhpcy5jbGVhckNvbG9yLncpO1xyXG4gICAgICAgIHJldHVybiBhcmdfY29sb3I7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuRW5hYmxlU3RlbmNpbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZW5hYmxlKHRoaXMuY29udGV4dC5TVEVOQ0lMX1RFU1QpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclN0ZW5jaWwoMCk7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuQ2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyKHRoaXMuY29udGV4dC5DT0xPUl9CVUZGRVJfQklUIHwgdGhpcy5jb250ZXh0LkRFUFRIX0JVRkZFUl9CSVQpO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLkNsZWFyU3RlbmNpbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXIodGhpcy5jb250ZXh0LkNPTE9SX0JVRkZFUl9CSVQgfCB0aGlzLmNvbnRleHQuREVQVEhfQlVGRkVSX0JJVCB8IHRoaXMuY29udGV4dC5TVEVOQ0lMX0JVRkZFUl9CSVQpO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLkdldFNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTtcclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5QcmVzZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5mbHVzaCgpO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLlNldFNoYWRlciA9IGZ1bmN0aW9uIChhcmdfc2hhZGVyKSB7XHJcbiAgICAgICAgdGhpcy5zaGFkZXIgPSBhcmdfc2hhZGVyO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC51c2VQcm9ncmFtKHRoaXMuc2hhZGVyLnByb2dyYW1PYmplY3QpO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLkNyZWF0ZVByb2dyYW0gPSBmdW5jdGlvbiAoYXJnX3ZzLCBhcmdfZnMpIHtcclxuICAgICAgICAvLyDjg5fjg63jgrDjg6njg6Djgqrjg5bjgrjjgqfjgq/jg4jjga7nlJ/miJBcclxuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMuY29udGV4dC5jcmVhdGVQcm9ncmFtKCk7XHJcbiAgICAgICAgLy8g44OX44Ot44Kw44Op44Og44Kq44OW44K444Kn44Kv44OI44Gr44K344Kn44O844OA44KS5Ymy44KK5b2T44Gm44KLXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCBhcmdfdnMpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgYXJnX2ZzKTtcclxuICAgICAgICAvLyDjgrfjgqfjg7zjg4DjgpLjg6rjg7Pjgq9cclxuICAgICAgICB0aGlzLmNvbnRleHQubGlua1Byb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgICAgLy8g44K344Kn44O844OA44Gu44Oq44Oz44Kv44GM5q2j44GX44GP6KGM44Gq44KP44KM44Gf44GL44OB44Kn44OD44KvXHJcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIHRoaXMuY29udGV4dC5MSU5LX1NUQVRVUykpIHtcclxuICAgICAgICAgICAgLy8g5oiQ5Yqf44GX44Gm44GE44Gf44KJ44OX44Ot44Kw44Op44Og44Kq44OW44K444Kn44Kv44OI44KS5pyJ5Yq544Gr44GZ44KLXHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC51c2VQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgICAgICAvLyDjg5fjg63jgrDjg6njg6Djgqrjg5bjgrjjgqfjgq/jg4jjgpLov5TjgZfjgabntYLkuoZcclxuICAgICAgICAgICAgcmV0dXJuIHByb2dyYW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDlpLHmlZfjgZfjgabjgYTjgZ/jgonjgqjjg6njg7zjg63jgrDjgpLjgqLjg6njg7zjg4jjgZnjgotcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5jb250ZXh0LmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuQ3JlYXRlVkJPID0gZnVuY3Rpb24gKGFyZ19kYXRhKSB7XHJcbiAgICAgICAgLy8g44OQ44OD44OV44Kh44Kq44OW44K444Kn44Kv44OI44Gu55Sf5oiQXHJcbiAgICAgICAgdmFyIHZibyA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgICAvLyDjg5Djg4Pjg5XjgqHjgpLjg5DjgqTjg7Pjg4njgZnjgotcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0aGlzLmNvbnRleHQuQVJSQVlfQlVGRkVSLCB2Ym8pO1xyXG4gICAgICAgIC8vIOODkOODg+ODleOCoeOBq+ODh+ODvOOCv+OCkuOCu+ODg+ODiFxyXG4gICAgICAgIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRoaXMuY29udGV4dC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoYXJnX2RhdGEpLCB0aGlzLmNvbnRleHQuU1RBVElDX0RSQVcpO1xyXG4gICAgICAgIC8vIOODkOODg+ODleOCoeOBruODkOOCpOODs+ODieOCkueEoeWKueWMllxyXG4gICAgICAgIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRoaXMuY29udGV4dC5BUlJBWV9CVUZGRVIsIG51bGwpO1xyXG4gICAgICAgIC8vIOeUn+aIkOOBl+OBn1ZCT+OCkui/lOOBl+OBpue1guS6hlxyXG4gICAgICAgIHJldHVybiB2Ym87XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuQ3JlYXRlSUJPID0gZnVuY3Rpb24gKGFyZ19kYXRhKSB7XHJcbiAgICAgICAgLy8g44OQ44OD44OV44Kh44Kq44OW44K444Kn44Kv44OI44Gu55Sf5oiQXHJcbiAgICAgICAgdmFyIGlibyA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgICAvLyDjg5Djg4Pjg5XjgqHjgpLjg5DjgqTjg7Pjg4njgZnjgotcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0aGlzLmNvbnRleHQuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGlibyk7XHJcbiAgICAgICAgLy8g44OQ44OD44OV44Kh44Gr44OH44O844K/44KS44K744OD44OIXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGhpcy5jb250ZXh0LkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBuZXcgSW50MTZBcnJheShhcmdfZGF0YSksIHRoaXMuY29udGV4dC5TVEFUSUNfRFJBVyk7XHJcbiAgICAgICAgLy8g44OQ44OD44OV44Kh44Gu44OQ44Kk44Oz44OJ44KS54Sh5Yq55YyWXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGhpcy5jb250ZXh0LkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBudWxsKTtcclxuICAgICAgICAvLyDnlJ/miJDjgZfjgZ9JQk/jgpLov5TjgZfjgabntYLkuoZcclxuICAgICAgICByZXR1cm4gaWJvO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLkNyZWF0ZVZlcnRleFNoYWRlciA9IGZ1bmN0aW9uIChhcmdfc291cmNlKSB7XHJcbiAgICAgICAgdmFyIHNoYWRlcjtcclxuICAgICAgICBzaGFkZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlU2hhZGVyKHRoaXMuY29udGV4dC5WRVJURVhfU0hBREVSKTtcclxuICAgICAgICAvLyDnlJ/miJDjgZXjgozjgZ/jgrfjgqfjg7zjg4Djgavjgr3jg7zjgrnjgpLlibLjgorlvZPjgabjgotcclxuICAgICAgICB0aGlzLmNvbnRleHQuc2hhZGVyU291cmNlKHNoYWRlciwgYXJnX3NvdXJjZSk7XHJcbiAgICAgICAgLy8g44K344Kn44O844OA44KS44Kz44Oz44OR44Kk44Or44GZ44KLXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcclxuICAgICAgICAvLyDjgrfjgqfjg7zjg4DjgYzmraPjgZfjgY/jgrPjg7Pjg5HjgqTjg6vjgZXjgozjgZ/jgYvjg4Hjgqfjg4Pjgq9cclxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHRoaXMuY29udGV4dC5DT01QSUxFX1NUQVRVUykpIHtcclxuICAgICAgICAgICAgLy8g5oiQ5Yqf44GX44Gm44GE44Gf44KJ44K344Kn44O844OA44KS6L+U44GX44Gm57WC5LqGXHJcbiAgICAgICAgICAgIHJldHVybiBzaGFkZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZlcnRleCBzaGFkZXIgZmFpbGVkXCIpO1xyXG4gICAgICAgICAgICAvLyDlpLHmlZfjgZfjgabjgYTjgZ/jgonjgqjjg6njg7zjg63jgrDjgpLjgqLjg6njg7zjg4jjgZnjgotcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5jb250ZXh0LmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuQ3JlYXRlRnJhZ21lbnRTaGFkZXIgPSBmdW5jdGlvbiAoYXJnX3NvdXJjZSkge1xyXG4gICAgICAgIHZhciBzaGFkZXI7XHJcbiAgICAgICAgc2hhZGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZVNoYWRlcih0aGlzLmNvbnRleHQuRlJBR01FTlRfU0hBREVSKTtcclxuICAgICAgICAvLyDnlJ/miJDjgZXjgozjgZ/jgrfjgqfjg7zjg4Djgavjgr3jg7zjgrnjgpLlibLjgorlvZPjgabjgotcclxuICAgICAgICB0aGlzLmNvbnRleHQuc2hhZGVyU291cmNlKHNoYWRlciwgYXJnX3NvdXJjZSk7XHJcbiAgICAgICAgLy8g44K344Kn44O844OA44KS44Kz44Oz44OR44Kk44Or44GZ44KLXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcclxuICAgICAgICAvLyDjgrfjgqfjg7zjg4DjgYzmraPjgZfjgY/jgrPjg7Pjg5HjgqTjg6vjgZXjgozjgZ/jgYvjg4Hjgqfjg4Pjgq9cclxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHRoaXMuY29udGV4dC5DT01QSUxFX1NUQVRVUykpIHtcclxuICAgICAgICAgICAgLy8g5oiQ5Yqf44GX44Gm44GE44Gf44KJ44K344Kn44O844OA44KS6L+U44GX44Gm57WC5LqGXHJcbiAgICAgICAgICAgIHJldHVybiBzaGFkZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZyYWdtZW50IHNoYWRlciBmYWlsZWRcIik7XHJcbiAgICAgICAgICAgIC8vIOWkseaVl+OBl+OBpuOBhOOBn+OCieOCqOODqeODvOODreOCsOOCkuOCouODqeODvOODiOOBmeOCi1xyXG4gICAgICAgICAgICBhbGVydCh0aGlzLmNvbnRleHQuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5DcmVhdGVUZXh0dXJlID0gZnVuY3Rpb24gKGFyZ19zb3VyY2UsIGFyZ190ZXh0dXJlKSB7XHJcbiAgICAgICAgLy8g44Kk44Oh44O844K444Kq44OW44K444Kn44Kv44OI44Gu55Sf5oiQXHJcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIC8vIOODh+ODvOOCv+OBruOCquODs+ODreODvOODieOCkuODiOODquOCrOODvOOBq+OBmeOCi1xyXG4gICAgICAgIGltZy5vbmxvYWQgPSBPblRleExvYWQoaW1nLCBhcmdfdGV4dHVyZSwgYXJnX3NvdXJjZSwgdGhpcyk7XHJcbiAgICAgICAgLy8g44Kk44Oh44O844K444Kq44OW44K444Kn44Kv44OI44Gu44K944O844K544KS5oyH5a6aXHJcbiAgICAgICAgaW1nLnNyYyA9IGFyZ19zb3VyY2U7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuU2V0VkJPID0gZnVuY3Rpb24gKGFyZ192Ym9MaXN0KSB7XHJcbiAgICAgICAgLy8g5byV5pWw44Go44GX44Gm5Y+X44GR5Y+W44Gj44Gf6YWN5YiX44KS5Yem55CG44GZ44KLXHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBhcmdfdmJvTGlzdCkge1xyXG4gICAgICAgICAgICAvLyDjg5Djg4Pjg5XjgqHjgpLjg5DjgqTjg7Pjg4njgZnjgotcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGhpcy5jb250ZXh0LkFSUkFZX0JVRkZFUiwgYXJnX3Zib0xpc3RbaV0pO1xyXG4gICAgICAgICAgICAvLyBhdHRyaWJ1dGVMb2NhdGlvbuOCkuacieWKueOBq+OBmeOCi1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5zaGFkZXIuYXR0cmlidXRlTG9jYXRpb25zW2ldKTtcclxuICAgICAgICAgICAgLy8gYXR0cmlidXRlTG9jYXRpb27jgpLpgJrnn6XjgZfnmbvpjLLjgZnjgotcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5zaGFkZXIuYXR0cmlidXRlTG9jYXRpb25zW2ldLCB0aGlzLnNoYWRlci5hdHRyaWJ1dGVTdHJpZGVzW2ldLCB0aGlzLmNvbnRleHQuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuT25Mb2FkVGV4dHVyZSA9IGZ1bmN0aW9uIChpbWcsIGFyZ190ZXh0dXJlLCBhcmdfc291cmNlKSB7XHJcbiAgICAgICAgLy8g44OG44Kv44K544OB44Oj44Kq44OW44K444Kn44Kv44OI44Gu55Sf5oiQXHJcbiAgICAgICAgdmFyIHRleCA9IHRoaXMuY29udGV4dC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgICAgICAgLy8g44OG44Kv44K544OB44Oj44KS44OQ44Kk44Oz44OJ44GZ44KLXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJpbmRUZXh0dXJlKHRoaXMuY29udGV4dC5URVhUVVJFXzJELCB0ZXgpO1xyXG4gICAgICAgIC8vIOODhuOCr+OCueODgeODo+OBuOOCpOODoeODvOOCuOOCkumBqeeUqFxyXG4gICAgICAgIHRoaXMuY29udGV4dC50ZXhJbWFnZTJEKHRoaXMuY29udGV4dC5URVhUVVJFXzJELCAwLCB0aGlzLmNvbnRleHQuUkdCQSwgdGhpcy5jb250ZXh0LlJHQkEsIHRoaXMuY29udGV4dC5VTlNJR05FRF9CWVRFLCBpbWcpO1xyXG4gICAgICAgIC8vIOODn+ODg+ODl+ODnuODg+ODl+OCkueUn+aIkFxyXG4gICAgICAgIHRoaXMuY29udGV4dC5nZW5lcmF0ZU1pcG1hcCh0aGlzLmNvbnRleHQuVEVYVFVSRV8yRCk7XHJcbiAgICAgICAgLy8g44OG44Kv44K544OB44Oj44Gu44OQ44Kk44Oz44OJ44KS54Sh5Yq55YyWXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJpbmRUZXh0dXJlKHRoaXMuY29udGV4dC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgICAgICBhcmdfdGV4dHVyZS5kYXRhID0gdGV4O1xyXG4gICAgICAgIGFyZ190ZXh0dXJlLkxvYWRlZCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFyZ19zb3VyY2UgKyBcIiBsb2FkZWRcIik7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuT25Mb2FkU2hhZGVyID0gZnVuY3Rpb24gKGFyZ19zb3VyY2UsIGFyZ19zaGFkZXIpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IGFyZ19zb3VyY2UucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIGFyZ19zaGFkZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlU2hhZGVyKHRoaXMuY29udGV4dC5WRVJURVhfU0hBREVSKTtcclxuICAgICAgICAvLyDnlJ/miJDjgZXjgozjgZ/jgrfjgqfjg7zjg4Djgavjgr3jg7zjgrnjgpLlibLjgorlvZPjgabjgotcclxuICAgICAgICB0aGlzLmNvbnRleHQuc2hhZGVyU291cmNlKGFyZ19zaGFkZXIsIGRhdGEpO1xyXG4gICAgICAgIC8vIOOCt+OCp+ODvOODgOOCkuOCs+ODs+ODkeOCpOODq+OBmeOCi1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jb21waWxlU2hhZGVyKGFyZ19zaGFkZXIpO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLlNldENhbWVyYVN0YXR1cyA9IGZ1bmN0aW9uIChhcmdfdmlld01hdHJpeCwgYXJnX3Byb2plY3Rpb25NYXRyaXgsIGFyZ19jYW1lcmFNYXRyaXgsIGFyZ19jYW1lcmFQb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMudmlld01hdHJpeCA9IGFyZ192aWV3TWF0cml4O1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeCA9IGFyZ19wcm9qZWN0aW9uTWF0cml4O1xyXG4gICAgICAgIHRoaXMudGVtcE1hdHJpeCA9IHRoaXMucHJvamVjdGlvbk1hdHJpeC5NdWx0aXBseSh0aGlzLnZpZXdNYXRyaXgpO1xyXG4gICAgICAgIHRoaXMuY2FtUG9zaXRpb24gPSBhcmdfY2FtZXJhUG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5jYW1Sb3RhdGlvbkludiA9IChhcmdfY2FtZXJhTWF0cml4KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR3JhcGhpY0RldmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gR3JhcGhpY0RldmljZTtcclxuZnVuY3Rpb24gT25UZXhMb2FkKGltZywgYXJnX3RleHR1cmUsIGFyZ19zb3VyY2UsIGRldmljZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkZXZpY2UuT25Mb2FkVGV4dHVyZShpbWcsIGFyZ190ZXh0dXJlLCBhcmdfc291cmNlKTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gT25TaGFkZXJMb2FkKGFyZ19zb3VyY2UsIGFyZ19zaGFkZXIsIGRldmljZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkZXZpY2UuT25Mb2FkU2hhZGVyKGFyZ19zb3VyY2UsIGFyZ19zaGFkZXIpO1xyXG4gICAgfTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNb2RlbChpc0xpZ2h0LCBpc0JpbGxCb2FyZCkge1xyXG4gICAgICAgIGlmIChpc0JpbGxCb2FyZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0xpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5EcmF3ID0gdGhpcy5EcmF3X0JpbGxCb2FyZF9MaWdodDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5EcmF3ID0gdGhpcy5EcmF3X0JpbGxCb2FyZF9Ob25MaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpc0xpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5EcmF3ID0gdGhpcy5EcmF3X0xpZ2h0O1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLkRyYXcgPSB0aGlzLkRyYXdfTm9uTGlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgTW9kZWwucHJvdG90eXBlLkluaXRpYWxpemVfZ2VvbSA9IGZ1bmN0aW9uIChhcmdfZ3JhcGhpY0RldmljZSwgYXJnX2dlb21ldHJ5LCBhcmdfbWF0ZXJpYWwsIGFyZ19TaGFkZXIsIGFyZ190cmFuc2Zvcm0pIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UgPSBhcmdfZ3JhcGhpY0RldmljZTtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gYXJnX2dlb21ldHJ5O1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbHMucHVzaChhcmdfbWF0ZXJpYWwpO1xyXG4gICAgICAgIHRoaXMuc3Vic2V0cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuc3Vic2V0cy5wdXNoKHRoaXMuZ2VvbWV0cnkuR2V0SW5kZXhTaXplKCkpO1xyXG4gICAgICAgIHRoaXMuc2hhZGVyID0gYXJnX1NoYWRlcjtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IGFyZ190cmFuc2Zvcm07XHJcbiAgICAgICAgdGhpcy5saWdodHMgPSBuZXcgQXJyYXkoKTtcclxuICAgIH07XHJcbiAgICBNb2RlbC5wcm90b3R5cGUuSW5pdGlhbGl6ZV9tZXNoID0gZnVuY3Rpb24gKGFyZ19ncmFwaGljRGV2aWNlLCBhcmdfbWVzaCwgYXJnX1NoYWRlciwgYXJnX3RyYW5zZm9ybSkge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZSA9IGFyZ19ncmFwaGljRGV2aWNlO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBhcmdfbWVzaC5nZW9tZXRyeTtcclxuICAgICAgICB0aGlzLm1hdGVyaWFscyA9IGFyZ19tZXNoLmFyeV9tYXRlcmlhbHM7XHJcbiAgICAgICAgdGhpcy5zdWJzZXRzID0gdGhpcy5nZW9tZXRyeS5HZXRTdWJTZXQoKTtcclxuICAgICAgICB0aGlzLnNoYWRlciA9IGFyZ19TaGFkZXI7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBhcmdfdHJhbnNmb3JtO1xyXG4gICAgICAgIHRoaXMubGlnaHRzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdWJzZXRzKTtcclxuICAgIH07XHJcbiAgICBNb2RlbC5wcm90b3R5cGUuU2V0TGlnaHQgPSBmdW5jdGlvbiAoYXJnX2xpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5saWdodHMucHVzaChhcmdfbGlnaHQpO1xyXG4gICAgfTtcclxuICAgIE1vZGVsLnByb3RvdHlwZS5EcmF3X05vbkxpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2hhZGVyLkF0dGFjaCgpO1xyXG4gICAgICAgIHZhciBtdnBNYXRyaXggPSB0aGlzLmdyYXBoaWNEZXZpY2UuVGVtcE1hdHJpeC5NdWx0aXBseSh0aGlzLnRyYW5zZm9ybS5NYXRyaXgpO1xyXG4gICAgICAgIHZhciBpbnZNYXRyaXggPSB0aGlzLnRyYW5zZm9ybS5NYXRyaXguSW52ZXJzZSgpO1xyXG4gICAgICAgIC8vIHVuaWZvcm3lpInmlbDjga7nmbvpjLLjgajmj4/nlLtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMF0sIGZhbHNlLCBtdnBNYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzFdLCBmYWxzZSwgdGhpcy50cmFuc2Zvcm0uTWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1syXSwgZmFsc2UsIGludk1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LkRyYXcoKTtcclxuICAgICAgICB2YXIgb2Zmc2V0ID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3Vic2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsc1tpXS5BdHRhY2goKTtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuZHJhd0VsZW1lbnRzKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRSSUFOR0xFUywgdGhpcy5zdWJzZXRzW2ldLCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5VTlNJR05FRF9TSE9SVCwgb2Zmc2V0ICogMik7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSB0aGlzLnN1YnNldHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE1vZGVsLnByb3RvdHlwZS5EcmF3X0xpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2hhZGVyLkF0dGFjaCgpO1xyXG4gICAgICAgIHZhciBtdnBNYXRyaXggPSB0aGlzLmdyYXBoaWNEZXZpY2UuVGVtcE1hdHJpeC5NdWx0aXBseSh0aGlzLnRyYW5zZm9ybS5NYXRyaXgpO1xyXG4gICAgICAgIHZhciBpbnZNYXRyaXggPSB0aGlzLnRyYW5zZm9ybS5NYXRyaXguSW52ZXJzZSgpO1xyXG4gICAgICAgIC8vIHVuaWZvcm3lpInmlbDjga7nmbvpjLLjgajmj4/nlLtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMF0sIGZhbHNlLCBtdnBNYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzFdLCBmYWxzZSwgdGhpcy50cmFuc2Zvcm0uTWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1syXSwgZmFsc2UsIGludk1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmxpZ2h0cy5mb3JFYWNoKGZ1bmN0aW9uIChsaWdodCkgeyByZXR1cm4gbGlnaHQuQXRhY2goKTsgfSk7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5EcmF3KCk7XHJcbiAgICAgICAgdmFyIG9mZnNldCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1YnNldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbHNbaV0uQXR0YWNoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmRyYXdFbGVtZW50cyh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5UUklBTkdMRVMsIHRoaXMuc3Vic2V0c1tpXSwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVU5TSUdORURfU0hPUlQsIG9mZnNldCAqIDIpO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gdGhpcy5zdWJzZXRzW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBNb2RlbC5wcm90b3R5cGUuRHJhd19CaWxsQm9hcmRfTGlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zaGFkZXIuQXR0YWNoKCk7XHJcbiAgICAgICAgdmFyIG1NYXRyaXggPSB0aGlzLnRyYW5zZm9ybS5NYXRyaXguTXVsdGlwbHkodGhpcy5ncmFwaGljRGV2aWNlLkNhbWVyYVJvdGF0aW9uSW52KTtcclxuICAgICAgICB2YXIgbXZwTWF0cml4ID0gdGhpcy5ncmFwaGljRGV2aWNlLlRlbXBNYXRyaXguTXVsdGlwbHkobU1hdHJpeCk7XHJcbiAgICAgICAgdmFyIGludk1hdHJpeCA9IHRoaXMudHJhbnNmb3JtLk1hdHJpeC5JbnZlcnNlKCk7XHJcbiAgICAgICAgdGhpcy5saWdodHMuZm9yRWFjaChmdW5jdGlvbiAobGlnaHQpIHsgcmV0dXJuIGxpZ2h0LkF0YWNoKCk7IH0pO1xyXG4gICAgICAgIC8vIHVuaWZvcm3lpInmlbDjga7nmbvpjLLjgajmj4/nlLtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMF0sIGZhbHNlLCBtdnBNYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzFdLCBmYWxzZSwgdGhpcy50cmFuc2Zvcm0uTWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1syXSwgZmFsc2UsIGludk1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LkRyYXcoKTtcclxuICAgICAgICB2YXIgb2Zmc2V0ID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3Vic2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsc1tpXS5BdHRhY2goKTtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuZHJhd0VsZW1lbnRzKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRSSUFOR0xFUywgdGhpcy5zdWJzZXRzW2ldLCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5VTlNJR05FRF9TSE9SVCwgb2Zmc2V0ICogMik7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSB0aGlzLnN1YnNldHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE1vZGVsLnByb3RvdHlwZS5EcmF3X0JpbGxCb2FyZF9Ob25MaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNoYWRlci5BdHRhY2goKTtcclxuICAgICAgICAvL3RoaXMudHJhbnNmb3JtLkxvb2tBdCh0aGlzLmdyYXBoaWNEZXZpY2UuQ2FtZXJhUG9zaXRpb24sbmV3IFZlY3RvcjMoMCwxLDApKTtcclxuICAgICAgICB2YXIgbU1hdHJpeCA9IHRoaXMudHJhbnNmb3JtLk1hdHJpeC5NdWx0aXBseSh0aGlzLmdyYXBoaWNEZXZpY2UuQ2FtZXJhUm90YXRpb25JbnYpO1xyXG4gICAgICAgIHZhciBtdnBNYXRyaXggPSB0aGlzLmdyYXBoaWNEZXZpY2UuVGVtcE1hdHJpeC5NdWx0aXBseShtTWF0cml4KTtcclxuICAgICAgICB2YXIgaW52TWF0cml4ID0gdGhpcy50cmFuc2Zvcm0uTWF0cml4LkludmVyc2UoKTtcclxuICAgICAgICAvLyB1bmlmb3Jt5aSJ5pWw44Gu55m76Yyy44Go5o+P55S7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzBdLCBmYWxzZSwgbXZwTWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1sxXSwgZmFsc2UsIHRoaXMudHJhbnNmb3JtLk1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMl0sIGZhbHNlLCBpbnZNYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5EcmF3KCk7XHJcbiAgICAgICAgdmFyIG9mZnNldCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1YnNldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbHNbaV0uQXR0YWNoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmRyYXdFbGVtZW50cyh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5UUklBTkdMRVMsIHRoaXMuc3Vic2V0c1tpXSwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVU5TSUdORURfU0hPUlQsIG9mZnNldCAqIDIpO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gdGhpcy5zdWJzZXRzW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gTW9kZWw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1vZGVsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVGV4dE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVGV4dE1vZGVsKGlzQmlsbEJvYXJkKSB7XHJcbiAgICAgICAgaWYgKGlzQmlsbEJvYXJkID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5EcmF3ID0gdGhpcy5EcmF3X0JpbGxCb2FyZF9Ob25MaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuRHJhdyA9IHRoaXMuRHJhd19Ob25MaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBUZXh0TW9kZWwucHJvdG90eXBlLlNldFVWRGF0YSA9IGZ1bmN0aW9uIChhcmdfdXZWQk8pIHtcclxuICAgICAgICB0aGlzLnV2RGF0YSA9IGFyZ191dlZCTztcclxuICAgIH07XHJcbiAgICBUZXh0TW9kZWwucHJvdG90eXBlLkluaXRpYWxpemVfZ2VvbSA9IGZ1bmN0aW9uIChhcmdfZ3JhcGhpY0RldmljZSwgYXJnX2dlb21ldHJ5LCBhcmdfbWF0ZXJpYWwsIGFyZ19TaGFkZXIsIGFyZ190cmFuc2Zvcm0pIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UgPSBhcmdfZ3JhcGhpY0RldmljZTtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gYXJnX2dlb21ldHJ5O1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxzID0gYXJnX21hdGVyaWFsO1xyXG4gICAgICAgIHRoaXMuaW5kZXhTaXplID0gKHRoaXMuZ2VvbWV0cnkuR2V0SW5kZXhTaXplKCkpO1xyXG4gICAgICAgIHRoaXMuc2hhZGVyID0gYXJnX1NoYWRlcjtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IGFyZ190cmFuc2Zvcm07XHJcbiAgICB9O1xyXG4gICAgVGV4dE1vZGVsLnByb3RvdHlwZS5TZXRMaWdodCA9IGZ1bmN0aW9uIChhcmdfbGlnaHQpIHtcclxuICAgIH07XHJcbiAgICBUZXh0TW9kZWwucHJvdG90eXBlLkRyYXdfTm9uTGlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zaGFkZXIuQXR0YWNoKCk7XHJcbiAgICAgICAgdmFyIG12cE1hdHJpeCA9IHRoaXMuZ3JhcGhpY0RldmljZS5UZW1wTWF0cml4Lk11bHRpcGx5KHRoaXMudHJhbnNmb3JtLk1hdHJpeCk7XHJcbiAgICAgICAgdmFyIGludk1hdHJpeCA9IHRoaXMudHJhbnNmb3JtLk1hdHJpeC5JbnZlcnNlKCk7XHJcbiAgICAgICAgLy8gdW5pZm9ybeWkieaVsOOBrueZu+mMsuOBqOaPj+eUu1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1swXSwgZmFsc2UsIG12cE1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMV0sIGZhbHNlLCB0aGlzLnRyYW5zZm9ybS5NYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzJdLCBmYWxzZSwgaW52TWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuRHJhdygpO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuQ2hhbmdlVkJPKHRoaXMudXZEYXRhLCAxKTtcclxuICAgICAgICB0aGlzLm1hdGVyaWFscy5BdHRhY2goKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5kcmF3RWxlbWVudHModGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVFJJQU5HTEVTLCB0aGlzLmluZGV4U2l6ZSwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVU5TSUdORURfU0hPUlQsIDApO1xyXG4gICAgfTtcclxuICAgIFRleHRNb2RlbC5wcm90b3R5cGUuRHJhd19CaWxsQm9hcmRfTm9uTGlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zaGFkZXIuQXR0YWNoKCk7XHJcbiAgICAgICAgLy90aGlzLnRyYW5zZm9ybS5Mb29rQXQodGhpcy5ncmFwaGljRGV2aWNlLkNhbWVyYVBvc2l0aW9uLG5ldyBWZWN0b3IzKDAsMSwwKSk7XHJcbiAgICAgICAgdmFyIG1NYXRyaXggPSB0aGlzLnRyYW5zZm9ybS5NYXRyaXguTXVsdGlwbHkodGhpcy5ncmFwaGljRGV2aWNlLkNhbWVyYVJvdGF0aW9uSW52KTtcclxuICAgICAgICB2YXIgbXZwTWF0cml4ID0gdGhpcy5ncmFwaGljRGV2aWNlLlRlbXBNYXRyaXguTXVsdGlwbHkobU1hdHJpeCk7XHJcbiAgICAgICAgdmFyIGludk1hdHJpeCA9IHRoaXMudHJhbnNmb3JtLk1hdHJpeC5JbnZlcnNlKCk7XHJcbiAgICAgICAgLy8gdW5pZm9ybeWkieaVsOOBrueZu+mMsuOBqOaPj+eUu1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1swXSwgZmFsc2UsIG12cE1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMV0sIGZhbHNlLCB0aGlzLnRyYW5zZm9ybS5NYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzJdLCBmYWxzZSwgaW52TWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuRHJhdygpO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuQ2hhbmdlVkJPKHRoaXMudXZEYXRhLCAxKTtcclxuICAgICAgICB0aGlzLm1hdGVyaWFscy5BdHRhY2goKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5kcmF3RWxlbWVudHModGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVFJJQU5HTEVTLCB0aGlzLmluZGV4U2l6ZSwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVU5TSUdORURfU0hPUlQsIDApO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUZXh0TW9kZWw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFRleHRNb2RlbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFRyYW5zZm9ybV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9UcmFuc2Zvcm1cIikpO1xyXG52YXIgUG9pbnRMaWdodCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBvaW50TGlnaHQoYXJnX2RldmljZSkge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZSA9IGFyZ19kZXZpY2U7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtXzEuZGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgUG9pbnRMaWdodC5wcm90b3R5cGUuQXRhY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybTNmdih0aGlzLmdyYXBoaWNEZXZpY2Uuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbNF0sIHRoaXMudHJhbnNmb3JtLlBvc2l0aW9uLnh5eik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFBvaW50TGlnaHQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFBvaW50TGlnaHQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBCb3hfQUFCQiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJveF9BQUJCKGFyZ19sZW5ndGhlcywgYXJnX3Bvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5oYWxmTGVuZ3RoZXMgPSBhcmdfbGVuZ3RoZXMuTXVsdGlwbHlfYigwLjUpO1xyXG4gICAgICAgIGlmIChhcmdfcG9zaXRpb24pXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBhcmdfcG9zaXRpb247XHJcbiAgICB9XHJcbiAgICBCb3hfQUFCQi5wcm90b3R5cGUuTGVuZ3RoID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFsZkxlbmd0aGVzLmRhdGFbaW5kZXhdO1xyXG4gICAgfTtcclxuICAgIEJveF9BQUJCLnByb3RvdHlwZS5HZXRNaW4gPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHRoaXMucG9zaXRpb24uZGF0YVtpbmRleF0gLSB0aGlzLmhhbGZMZW5ndGhlcy5kYXRhW2luZGV4XTsgfTtcclxuICAgIEJveF9BQUJCLnByb3RvdHlwZS5HZXRNYXggPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHRoaXMucG9zaXRpb24uZGF0YVtpbmRleF0gKyB0aGlzLmhhbGZMZW5ndGhlcy5kYXRhW2luZGV4XTsgfTtcclxuICAgIHJldHVybiBCb3hfQUFCQjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQm94X0FBQkI7XHJcbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEJveF9PQkIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCb3hfT0JCKGFyZ19sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmhhbGZMZW5ndGhlcyA9IGFyZ19sZW5ndGguTXVsdGlwbHkoMC41KTtcclxuICAgICAgICB0aGlzLmRpcmVjdHMgPSBuZXcgQXJyYXkoMyk7XHJcbiAgICB9XHJcbiAgICBCb3hfT0JCLnByb3RvdHlwZS5HZXREaXJlY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3RzW2luZGV4XTtcclxuICAgIH07XHJcbiAgICBCb3hfT0JCLnByb3RvdHlwZS5MZW5ndGggPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYWxmTGVuZ3RoZXMuZGF0YVtpbmRleF07XHJcbiAgICB9O1xyXG4gICAgQm94X09CQi5wcm90b3R5cGUuR2V0UG9zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCb3hfT0JCO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBCb3hfT0JCO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVmVjdG9yM18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9WZWN0b3IzXCIpKTtcclxuZnVuY3Rpb24gYWJzKGFyZykge1xyXG4gICAgaWYgKGFyZyA8IDApIHtcclxuICAgICAgICByZXR1cm4gYXJnICogLTE7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYXJnO1xyXG4gICAgfVxyXG59XHJcbnZhciBHZW9tZXRyeUhlbHBlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdlb21ldHJ5SGVscGVyKCkge1xyXG4gICAgfVxyXG4gICAgR2VvbWV0cnlIZWxwZXIuR2V0RGlzdGFuY2UgPSBmdW5jdGlvbiAoYXJnX3BvaW50LCBhcmdfc3VyZmFjZVBvaW50LCBhcmdfc3VyZmFjZU5vcm1hbCkge1xyXG4gICAgICAgIHJldHVybiBhYnMoYXJnX3N1cmZhY2VOb3JtYWwuRG90KGFyZ19wb2ludC5TdWIoYXJnX3N1cmZhY2VQb2ludCkpKSAvIGFyZ19zdXJmYWNlTm9ybWFsLkxlbmd0aCgpO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLkdldERpc3RhbmNlTGluZUxpbmUgPSBmdW5jdGlvbiAoYXJnX2xpbmUsIGFyZ19vdGhlckxpbmUpIHtcclxuICAgICAgICB2YXIgbm9ybWFsID0gYXJnX2xpbmUudmVsb2NpdHkuQ3Jvc3MoYXJnX290aGVyTGluZS52ZWxvY2l0eSkuTm9ybWFsaXplKCk7XHJcbiAgICAgICAgcmV0dXJuIG5vcm1hbC5Eb3QoYXJnX290aGVyTGluZS5wb2ludC5TdWIoYXJnX2xpbmUucG9pbnQpKTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5Jc0hpdFBvaW50TGluZSA9IGZ1bmN0aW9uIChhcmdfcG9pbnQsIGFyZ19saW5lKSB7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IChhcmdfcG9pbnQuU3ViKGFyZ19saW5lLnBvaW50KS5Dcm9zcyhhcmdfbGluZS52ZWxvY2l0eSkpLkxlbmd0aCgpO1xyXG4gICAgICAgIGlmIChsZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLklzSGl0UG9pbnRTZWdtZW50ID0gZnVuY3Rpb24gKGFyZ19wb2ludCwgYXJnX3NlZ21lbnQpIHtcclxuICAgICAgICB2YXIgdiA9IGFyZ19wb2ludC5TdWIoYXJnX3NlZ21lbnQucG9pbnQpO1xyXG4gICAgICAgIGlmICh2LkNyb3NzKGFyZ19zZWdtZW50LnZlbG9jaXR5KS5MZW5ndGgoKSAmJiB2Lkxlbmd0aFNxcigpIDw9IGFyZ19zZWdtZW50LnZlbG9jaXR5Lkxlbmd0aFNxcigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5HZXREaXN0YW5jZVBvaW50U2VnbWVudCA9IGZ1bmN0aW9uIChhcmdfcG9pbnQsIGFyZ19zZWdtZW50KSB7XHJcbiAgICAgICAgdmFyIHYgPSBhcmdfc2VnbWVudC5HZXRFbmRQb2ludCgpLlN1Yihhcmdfc2VnbWVudC5wb2ludCk7XHJcbiAgICAgICAgdmFyIHZwID0gYXJnX3BvaW50LlN1Yihhcmdfc2VnbWVudC5wb2ludCk7XHJcbiAgICAgICAgdmFyIHQgPSB2Lk5vcm1hbGl6ZSgpLkRvdCh2cCkgLyB2Lkxlbmd0aCgpO1xyXG4gICAgICAgIGlmICh0ID4gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJnX3NlZ21lbnQuR2V0RW5kUG9pbnQoKS5TdWIoYXJnX3BvaW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodCA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFyZ19zZWdtZW50LnBvaW50LlN1YihhcmdfcG9pbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdi5NdWx0aXBseV9iKHQpLlN1Yl9iKHZwKTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5HZXRQb2x5Z29uWSA9IGZ1bmN0aW9uIChhcmdfcG9pbnRBLCBhcmdfcG9pbnRCLCBhcmdfcG9pbnRDLCBvYmpYLCBvYmpaKSB7XHJcbiAgICAgICAgdmFyIG5vcm1hbCA9IGFyZ19wb2ludEEuU3ViKGFyZ19wb2ludEIpLkNyb3NzKGFyZ19wb2ludEEuU3ViKGFyZ19wb2ludEMpKTtcclxuICAgICAgICBpZiAobm9ybWFsLnkgPCAwKSB7XHJcbiAgICAgICAgICAgIG5vcm1hbC5NdWx0aXBseSgtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcmdfcG9pbnRBLnkgLSAobm9ybWFsLnggKiAob2JqWCAtIGFyZ19wb2ludEEueCkgKyBub3JtYWwueiAqIChvYmpaIC0gYXJnX3BvaW50QS56KSkgLyBub3JtYWwueTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5Jc0hpdExpbmVMaW5lID0gZnVuY3Rpb24gKGFyZ19saW5ldjEsIGFyZ19saW5ldjIpIHtcclxuICAgICAgICB2YXIgdjMgPSBhcmdfbGluZXYyLnBvaW50LlN1YihhcmdfbGluZXYxLnBvaW50KTtcclxuICAgICAgICB2YXIgbm9ybWFsMSA9IGFyZ19saW5ldjEudmVsb2NpdHkuQ3Jvc3MoYXJnX2xpbmV2Mi52ZWxvY2l0eSk7XHJcbiAgICAgICAgdmFyIG5vcm1hbDIgPSBhcmdfbGluZXYxLnZlbG9jaXR5LkNyb3NzKHYzKTtcclxuICAgICAgICBpZiAoIW5vcm1hbDIuTGVuZ3RoU3FyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub3JtYWwxLkxlbmd0aFNxcigpICE9IDAgJiYgbm9ybWFsMS5Dcm9zcyhub3JtYWwyKS5MZW5ndGhTcXIoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuSXNIaXRMaW5lU3VyZmFjZSA9IGZ1bmN0aW9uIChhcmdfbGluZSwgYXJnX3N1cmZhY2VQb2ludCwgYXJnX3N1cmZhY2VOb3JtYWwpIHtcclxuICAgICAgICB2YXIgdjEgPSBhcmdfbGluZS5wb2ludC5TdWIoYXJnX3N1cmZhY2VQb2ludCk7XHJcbiAgICAgICAgaWYgKHYxLkRvdChhcmdfc3VyZmFjZU5vcm1hbCkgPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZ19saW5lLnZlbG9jaXR5LkRvdChhcmdfc3VyZmFjZU5vcm1hbCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5Jc0hpdFNlZ21lbnRTdXJmYWNlID0gZnVuY3Rpb24gKGFyZ19zZWdtZW50LCBhcmdfc3VyZmFjZVBvaW50LCBhcmdfc3VyZmFjZU5vcm1hbCkge1xyXG4gICAgICAgIHZhciB2MSA9IGFyZ19zZWdtZW50LnBvaW50LlN1Yihhcmdfc3VyZmFjZVBvaW50KTtcclxuICAgICAgICB2YXIgdjIgPSBhcmdfc2VnbWVudC5HZXRFbmRQb2ludCgpLlN1Yihhcmdfc3VyZmFjZVBvaW50KTtcclxuICAgICAgICBpZiAoYXJnX3N1cmZhY2VOb3JtYWwuRG90KHYxKSAqIGFyZ19zdXJmYWNlTm9ybWFsLkRvdCh2MikgPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLkdldERpdGFuY2VQb2ludEJveF9BQUJCU3FydCA9IGZ1bmN0aW9uIChhcmdfcG9pbnQsIGFyZ19ib3gpIHtcclxuICAgICAgICB2YXIgU3FMZW4gPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhcmdfcG9pbnQuZGF0YVtpXSA8IGFyZ19ib3guR2V0TWluKGkpKVxyXG4gICAgICAgICAgICAgICAgU3FMZW4gKz0gKGFyZ19wb2ludC5kYXRhW2ldIC0gYXJnX2JveC5HZXRNaW4oaSkpICogKGFyZ19wb2ludC5kYXRhW2ldIC0gYXJnX2JveC5HZXRNaW4oaSkpO1xyXG4gICAgICAgICAgICBpZiAoYXJnX3BvaW50LmRhdGFbaV0gPiBhcmdfYm94LkdldE1heChpKSlcclxuICAgICAgICAgICAgICAgIFNxTGVuICs9IChhcmdfcG9pbnQuZGF0YVtpXSAtIGFyZ19ib3guR2V0TWF4KGkpKSAqIChhcmdfcG9pbnQuZGF0YVtpXSAtIGFyZ19ib3guR2V0TWF4KGkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNxTGVuO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLkdldERpdGFuY2VQb2ludEJveF9BQUJCID0gZnVuY3Rpb24gKGFyZ19wb2ludCwgYXJnX2JveCkge1xyXG4gICAgICAgIHJldHVybiAoR2VvbWV0cnlIZWxwZXIuR2V0RGl0YW5jZVBvaW50Qm94X0FBQkJTcXJ0KGFyZ19wb2ludCwgYXJnX2JveCkpO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLkdldERpdGFuY2VQb2ludEJveF9PQkJfU3RhdGljID0gZnVuY3Rpb24gKGFyZ19wb2ludCwgYXJnX2JveCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgMCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIEwgPSBhcmdfYm94Lkxlbmd0aChpKTtcclxuICAgICAgICAgICAgaWYgKEwgPD0gMClcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB2YXIgcyA9IChhcmdfcG9pbnQuU3ViKGFyZ19ib3guR2V0UG9zKCkpKS5Eb3QoYXJnX2JveC5HZXREaXJlY3QoaSkpIC8gTDtcclxuICAgICAgICAgICAgLy8gc+OBruWApOOBi+OCieOAgeOBr+OBv+WHuuOBl+OBn+mDqOWIhuOBjOOBguOCjOOBsOOBneOBruODmeOCr+ODiOODq+OCkuWKoOeul1xyXG4gICAgICAgICAgICBzID0gYWJzKHMpO1xyXG4gICAgICAgICAgICBpZiAocyA+IDEpXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuQWRkX2IoYXJnX2JveC5HZXREaXJlY3QoaSkuTXVsdGlwbHkoKDEgLSBzKSkuTXVsdGlwbHkoTCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb3V0cHV0TGVuID0gb3V0cHV0Lkxlbmd0aCgpO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXRMZW47XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuSXNIaXRQb2ludEJveF9PQkIgPSBmdW5jdGlvbiAoYXJnX3BvaW50LCBhcmdfYm94KSB7XHJcbiAgICAgICAgcmV0dXJuICFHZW9tZXRyeUhlbHBlci5HZXREaXRhbmNlUG9pbnRCb3hfT0JCX1N0YXRpYyhhcmdfcG9pbnQsIGFyZ19ib3gpO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLklzSGl0U3BoZXJlQm94X09CQiA9IGZ1bmN0aW9uIChhcmdfc3BoZXJlLCBhcmdfYm94KSB7XHJcbiAgICAgICAgcmV0dXJuIChhcmdfc3BoZXJlLnJhZGl1cykgPj0gR2VvbWV0cnlIZWxwZXIuR2V0RGl0YW5jZVBvaW50Qm94X09CQl9TdGF0aWMoYXJnX3NwaGVyZS5wb3NpdGlvbiwgYXJnX2JveCk7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuSXNIaXRQb2ludEJveF9BQUJCID0gZnVuY3Rpb24gKGFyZ19wb2ludCwgYXJnX2JveCkge1xyXG4gICAgICAgIHJldHVybiAhR2VvbWV0cnlIZWxwZXIuR2V0RGl0YW5jZVBvaW50Qm94X0FBQkIoYXJnX3BvaW50LCBhcmdfYm94KTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5Jc0hpdFNwaGVyZUJveF9BQUJCID0gZnVuY3Rpb24gKGFyZ19zcGhlcmUsIGFyZ19ib3gpIHtcclxuICAgICAgICByZXR1cm4gKGFyZ19zcGhlcmUucmFkaXVzKSA+PSBHZW9tZXRyeUhlbHBlci5HZXREaXRhbmNlUG9pbnRCb3hfQUFCQihhcmdfc3BoZXJlLnBvc2l0aW9uLCBhcmdfYm94KTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzID0gZnVuY3Rpb24gKGFyZ19zZXAsIGFyZ19lMSwgYXJnX2UyLCBhcmdfZTMpIHtcclxuICAgICAgICBpZiAoYXJnX2UzID09PSB2b2lkIDApIHsgYXJnX2UzID0gbnVsbDsgfVxyXG4gICAgICAgIHZhciByMSA9IGFicyhhcmdfc2VwLkRvdChhcmdfZTEpKTtcclxuICAgICAgICB2YXIgcjIgPSBhYnMoYXJnX3NlcC5Eb3QoYXJnX2UyKSk7XHJcbiAgICAgICAgdmFyIHIzID0gYXJnX2UzID8gKGFicyhhcmdfc2VwLkRvdChhcmdfZTMpKSkgOiAwO1xyXG4gICAgICAgIHJldHVybiByMSArIHIyICsgcjM7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuSXNIaXRCb3hfQUFCQiA9IGZ1bmN0aW9uIChhcmdfYm94LCBhcmdfb3RoZXJCb3gpIHtcclxuICAgICAgICB2YXIgeEF4aXMgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMSwgMCwgMCksIEFlMSA9IHhBeGlzLk11bHRpcGx5KGFyZ19ib3guTGVuZ3RoKDApKTtcclxuICAgICAgICB2YXIgeUF4aXMgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMSwgMCksIEFlMiA9IHlBeGlzLk11bHRpcGx5KGFyZ19ib3guTGVuZ3RoKDEpKTtcclxuICAgICAgICB2YXIgekF4aXMgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgMSksIEFlMyA9IHpBeGlzLk11bHRpcGx5KGFyZ19ib3guTGVuZ3RoKDIpKTtcclxuICAgICAgICB2YXIgQmUxID0geEF4aXMuTXVsdGlwbHkoYXJnX290aGVyQm94Lkxlbmd0aCgwKSk7XHJcbiAgICAgICAgdmFyIEJlMiA9IHlBeGlzLk11bHRpcGx5KGFyZ19vdGhlckJveC5MZW5ndGgoMSkpO1xyXG4gICAgICAgIHZhciBCZTMgPSB6QXhpcy5NdWx0aXBseShhcmdfb3RoZXJCb3guTGVuZ3RoKDIpKTtcclxuICAgICAgICB2YXIgSW50ZXJ2YWwgPSBhcmdfYm94LnBvc2l0aW9uLlN1Yihhcmdfb3RoZXJCb3gucG9zaXRpb24pO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEFlMVxyXG4gICAgICAgIHZhciByQSA9IEFlMS5MZW5ndGgoKTtcclxuICAgICAgICB2YXIgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKHhBeGlzLCBCZTEsIEJlMiwgQmUzKTtcclxuICAgICAgICB2YXIgTCA9IGFicyhJbnRlcnZhbC5Eb3QoeEF4aXMpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8g6KGd56qB44GX44Gm44GE44Gq44GEXHJcbiAgICAgICAgLy8g5YiG6Zui6Lu4IDogQWUyXHJcbiAgICAgICAgckEgPSBBZTIuTGVuZ3RoKCk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKHlBeGlzLCBCZTEsIEJlMiwgQmUzKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdCh5QXhpcykpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEFlM1xyXG4gICAgICAgIHJBID0gQWUzLkxlbmd0aCgpO1xyXG4gICAgICAgIHJCID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh6QXhpcywgQmUxLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoekF4aXMpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBCZTFcclxuICAgICAgICByQSA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoeEF4aXMsIEFlMSwgQWUyLCBBZTMpO1xyXG4gICAgICAgIHJCID0gQmUxLkxlbmd0aCgpO1xyXG4gICAgICAgIEwgPSBhYnMoSW50ZXJ2YWwuRG90KHhBeGlzKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8g5YiG6Zui6Lu4IDogQmUyXHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKHlBeGlzLCBBZTEsIEFlMiwgQWUzKTtcclxuICAgICAgICByQiA9IEJlMi5MZW5ndGgoKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdCh5QXhpcykpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEJlM1xyXG4gICAgICAgIHJBID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh6QXhpcywgQWUxLCBBZTIsIEFlMyk7XHJcbiAgICAgICAgckIgPSBCZTMuTGVuZ3RoKCk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoekF4aXMpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5Jc0hpdEJveF9PQkJCb3hfQUFCQiA9IGZ1bmN0aW9uIChhcmdfYm94LCBhcmdfb3RoZXJCb3gpIHtcclxuICAgICAgICB2YXIgeEF4aXMgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMSwgMCwgMCksIEFlMSA9IHhBeGlzLk11bHRpcGx5KGFyZ19ib3guTGVuZ3RoKDApKTtcclxuICAgICAgICB2YXIgeUF4aXMgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMSwgMCksIEFlMiA9IHlBeGlzLk11bHRpcGx5KGFyZ19ib3guTGVuZ3RoKDEpKTtcclxuICAgICAgICB2YXIgekF4aXMgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgMSksIEFlMyA9IHpBeGlzLk11bHRpcGx5KGFyZ19ib3guTGVuZ3RoKDIpKTtcclxuICAgICAgICB2YXIgTkJlMSA9IGFyZ19vdGhlckJveC5HZXREaXJlY3QoMCksIEJlMSA9IE5CZTEuTXVsdGlwbHkoYXJnX290aGVyQm94Lkxlbmd0aCgwKSk7XHJcbiAgICAgICAgdmFyIE5CZTIgPSBhcmdfb3RoZXJCb3guR2V0RGlyZWN0KDEpLCBCZTIgPSBOQmUyLk11bHRpcGx5KGFyZ19vdGhlckJveC5MZW5ndGgoMSkpO1xyXG4gICAgICAgIHZhciBOQmUzID0gYXJnX290aGVyQm94LkdldERpcmVjdCgyKSwgQmUzID0gTkJlMy5NdWx0aXBseShhcmdfb3RoZXJCb3guTGVuZ3RoKDIpKTtcclxuICAgICAgICB2YXIgSW50ZXJ2YWwgPSBhcmdfYm94LnBvc2l0aW9uLlN1Yihhcmdfb3RoZXJCb3guR2V0UG9zKCkpO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEFlMVxyXG4gICAgICAgIHZhciByQSA9IEFlMS5MZW5ndGgoKTtcclxuICAgICAgICB2YXIgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKHhBeGlzLCBCZTEsIEJlMiwgQmUzKTtcclxuICAgICAgICB2YXIgTCA9IGFicyhJbnRlcnZhbC5Eb3QoeEF4aXMpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8g6KGd56qB44GX44Gm44GE44Gq44GEXHJcbiAgICAgICAgLy8g5YiG6Zui6Lu4IDogQWUyXHJcbiAgICAgICAgckEgPSBBZTIuTGVuZ3RoKCk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKHlBeGlzLCBCZTEsIEJlMiwgQmUzKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdCh5QXhpcykpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEFlM1xyXG4gICAgICAgIHJBID0gQWUzLkxlbmd0aCgpO1xyXG4gICAgICAgIHJCID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh6QXhpcywgQmUxLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoekF4aXMpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBCZTFcclxuICAgICAgICByQSA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoTkJlMSwgQWUxLCBBZTIsIEFlMyk7XHJcbiAgICAgICAgckIgPSBCZTEuTGVuZ3RoKCk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoTkJlMSkpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEJlMlxyXG4gICAgICAgIHJBID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyhOQmUyLCBBZTEsIEFlMiwgQWUzKTtcclxuICAgICAgICByQiA9IEJlMi5MZW5ndGgoKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdChOQmUyKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8g5YiG6Zui6Lu4IDogQmUzXHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKE5CZTMsIEFlMSwgQWUyLCBBZTMpO1xyXG4gICAgICAgIHJCID0gQmUzLkxlbmd0aCgpO1xyXG4gICAgICAgIEwgPSBhYnMoSW50ZXJ2YWwuRG90KE5CZTMpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5HZXRCb3hfT0JCQ29udGFpbkFBQkJMZW5ndGggPSBmdW5jdGlvbiAoYXJnX2JveCkge1xyXG4gICAgICAgIHZhciB4QXhpcyA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgxLCAwLCAwKTtcclxuICAgICAgICB2YXIgeUF4aXMgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMSwgMCk7XHJcbiAgICAgICAgdmFyIHpBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDEpO1xyXG4gICAgICAgIHZhciBCZTEgPSBhcmdfYm94LkdldERpcmVjdCgwKS5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgwKSk7XHJcbiAgICAgICAgdmFyIEJlMiA9IGFyZ19ib3guR2V0RGlyZWN0KDEpLk11bHRpcGx5KGFyZ19ib3guTGVuZ3RoKDEpKTtcclxuICAgICAgICB2YXIgQmUzID0gYXJnX2JveC5HZXREaXJlY3QoMikuTXVsdGlwbHkoYXJnX2JveC5MZW5ndGgoMikpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yM18xLmRlZmF1bHQoR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh4QXhpcywgQmUxLCBCZTIsIEJlMyksIEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoeUF4aXMsIEJlMSwgQmUyLCBCZTMpLCBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKHpBeGlzLCBCZTEsIEJlMiwgQmUzKSk7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuSXNIaXRCb3hfT0JCID0gZnVuY3Rpb24gKGFyZ19ib3gsIGFyZ19vdGhlckJveCkge1xyXG4gICAgICAgIC8vIOWQhOaWueWQkeODmeOCr+ODiOODq+OBrueiuuS/nVxyXG4gICAgICAgIC8vIO+8iE4qKio65qiZ5rqW5YyW5pa55ZCR44OZ44Kv44OI44Or77yJXHJcbiAgICAgICAgdmFyIE5BZTEgPSBhcmdfYm94LkdldERpcmVjdCgwKSwgQWUxID0gTkFlMS5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgwKSk7XHJcbiAgICAgICAgdmFyIE5BZTIgPSBhcmdfYm94LkdldERpcmVjdCgxKSwgQWUyID0gTkFlMi5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgxKSk7XHJcbiAgICAgICAgdmFyIE5BZTMgPSBhcmdfYm94LkdldERpcmVjdCgyKSwgQWUzID0gTkFlMy5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgyKSk7XHJcbiAgICAgICAgdmFyIE5CZTEgPSBhcmdfb3RoZXJCb3guR2V0RGlyZWN0KDApLCBCZTEgPSBOQmUxLk11bHRpcGx5KGFyZ19vdGhlckJveC5MZW5ndGgoMCkpO1xyXG4gICAgICAgIHZhciBOQmUyID0gYXJnX290aGVyQm94LkdldERpcmVjdCgxKSwgQmUyID0gTkJlMi5NdWx0aXBseShhcmdfb3RoZXJCb3guTGVuZ3RoKDEpKTtcclxuICAgICAgICB2YXIgTkJlMyA9IGFyZ19vdGhlckJveC5HZXREaXJlY3QoMiksIEJlMyA9IE5CZTMuTXVsdGlwbHkoYXJnX290aGVyQm94Lkxlbmd0aCgyKSk7XHJcbiAgICAgICAgdmFyIEludGVydmFsID0gYXJnX2JveC5HZXRQb3MoKS5TdWIoYXJnX290aGVyQm94LkdldFBvcygpKTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBBZTFcclxuICAgICAgICB2YXIgckEgPSBBZTEuTGVuZ3RoKCk7XHJcbiAgICAgICAgdmFyIHJCID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyhOQWUxLCBCZTEsIEJlMiwgQmUzKTtcclxuICAgICAgICB2YXIgTCA9IGFicyhJbnRlcnZhbC5Eb3QoTkFlMSkpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyDooZ3nqoHjgZfjgabjgYTjgarjgYRcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBBZTJcclxuICAgICAgICByQSA9IEFlMi5MZW5ndGgoKTtcclxuICAgICAgICByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoTkFlMiwgQmUxLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoTkFlMikpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEFlM1xyXG4gICAgICAgIHJBID0gQWUzLkxlbmd0aCgpO1xyXG4gICAgICAgIHJCID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyhOQWUzLCBCZTEsIEJlMiwgQmUzKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdChOQWUzKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8g5YiG6Zui6Lu4IDogQmUxXHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKE5CZTEsIEFlMSwgQWUyLCBBZTMpO1xyXG4gICAgICAgIHJCID0gQmUxLkxlbmd0aCgpO1xyXG4gICAgICAgIEwgPSBhYnMoSW50ZXJ2YWwuRG90KE5CZTEpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBCZTJcclxuICAgICAgICByQSA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoTkJlMiwgQWUxLCBBZTIsIEFlMyk7XHJcbiAgICAgICAgckIgPSBCZTIuTGVuZ3RoKCk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoTkJlMikpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEJlM1xyXG4gICAgICAgIHJBID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyhOQmUzLCBBZTEsIEFlMiwgQWUzKTtcclxuICAgICAgICByQiA9IEJlMy5MZW5ndGgoKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdChOQmUzKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8g5YiG6Zui6Lu4IDogQzExXHJcbiAgICAgICAgdmFyIENyb3NzID0gTkFlMS5Dcm9zcyhOQmUxKTtcclxuICAgICAgICByQSA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoQ3Jvc3MsIEFlMiwgQWUzKTtcclxuICAgICAgICByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoQ3Jvc3MsIEJlMiwgQmUzKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdChDcm9zcykpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEMxMlxyXG4gICAgICAgIENyb3NzID0gTkFlMS5Dcm9zcyhOQmUyKTtcclxuICAgICAgICByQSA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoQ3Jvc3MsIEFlMiwgQWUzKTtcclxuICAgICAgICByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoQ3Jvc3MsIEJlMSwgQmUzKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdChDcm9zcykpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEMxM1xyXG4gICAgICAgIENyb3NzID0gTkFlMS5Dcm9zcyhOQmUzKTtcclxuICAgICAgICByQSA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoQ3Jvc3MsIEFlMiwgQWUzKTtcclxuICAgICAgICByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoQ3Jvc3MsIEJlMSwgQmUyKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdChDcm9zcykpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEMyMVxyXG4gICAgICAgIENyb3NzID0gTkFlMi5Dcm9zcyhOQmUxKTtcclxuICAgICAgICByQSA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoQ3Jvc3MsIEFlMSwgQWUzKTtcclxuICAgICAgICByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoQ3Jvc3MsIEJlMiwgQmUzKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdChDcm9zcykpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEMyMlxyXG4gICAgICAgIENyb3NzID0gTkFlMi5Dcm9zcyhOQmUyKTtcclxuICAgICAgICByQSA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoQ3Jvc3MsIEFlMSwgQWUzKTtcclxuICAgICAgICByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoQ3Jvc3MsIEJlMSwgQmUzKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdChDcm9zcykpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEMyM1xyXG4gICAgICAgIENyb3NzID0gTkFlMi5Dcm9zcyhOQmUzKTtcclxuICAgICAgICByQSA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoQ3Jvc3MsIEFlMSwgQWUzKTtcclxuICAgICAgICByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoQ3Jvc3MsIEJlMSwgQmUyKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdChDcm9zcykpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEMzMVxyXG4gICAgICAgIENyb3NzID0gTkFlMy5Dcm9zcyhOQmUxKTtcclxuICAgICAgICByQSA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoQ3Jvc3MsIEFlMSwgQWUyKTtcclxuICAgICAgICByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoQ3Jvc3MsIEJlMiwgQmUzKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdChDcm9zcykpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEMzMlxyXG4gICAgICAgIENyb3NzID0gTkFlMy5Dcm9zcyhOQmUyKTtcclxuICAgICAgICByQSA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoQ3Jvc3MsIEFlMSwgQWUyKTtcclxuICAgICAgICByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoQ3Jvc3MsIEJlMSwgQmUzKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdChDcm9zcykpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEMzM1xyXG4gICAgICAgIENyb3NzID0gTkFlMy5Dcm9zcyhOQmUzKTtcclxuICAgICAgICByQSA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoQ3Jvc3MsIEFlMSwgQWUyKTtcclxuICAgICAgICByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoQ3Jvc3MsIEJlMSwgQmUyKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdChDcm9zcykpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLklzSGl0U3BoZXJlU3BoZXJlID0gZnVuY3Rpb24gKGFyZ19zcGhlcmUsIGFyZ19vdGhlclNwaGVyZSkge1xyXG4gICAgICAgIHZhciBkaXN0YW5jZSA9IChhcmdfc3BoZXJlLnBvc2l0aW9uLlN1Yihhcmdfb3RoZXJTcGhlcmUucG9zaXRpb24pKS5MZW5ndGgoKTtcclxuICAgICAgICB2YXIgYm9yZGVyID0gYXJnX3NwaGVyZS5yYWRpdXMgKyBhcmdfb3RoZXJTcGhlcmUucmFkaXVzO1xyXG4gICAgICAgIHJldHVybiBkaXN0YW5jZSA8PSBib3JkZXI7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuSXNIaXRQb2ludFNwaGVyZSA9IGZ1bmN0aW9uIChhcmdfcG9pbnQsIGFyZ19vdGhlclNwaGVyZSkge1xyXG4gICAgICAgIHZhciBkaXN0YW5jZSA9IChhcmdfcG9pbnQuU3ViKGFyZ19vdGhlclNwaGVyZS5wb3NpdGlvbikpLkxlbmd0aCgpO1xyXG4gICAgICAgIHJldHVybiBkaXN0YW5jZSA8PSBhcmdfb3RoZXJTcGhlcmUucmFkaXVzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gR2VvbWV0cnlIZWxwZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBTcGhlcmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTcGhlcmUoYXJnX3IsIGFyZ19wKSB7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBhcmdfcjtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gYXJnX3A7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gU3BoZXJlO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBTcGhlcmU7XHJcbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIE1hdHJpeDR4NCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hdHJpeDR4NCgpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTtcclxuICAgIH1cclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuSWRlbnRpdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gMTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbNF0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IDE7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbN10gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMTBdID0gMTtcclxuICAgICAgICB0aGlzLmRhdGFbMTFdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMTJdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMTNdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMTRdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMTVdID0gMTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLkNsb25lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgTWF0cml4NHg0KCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhW2ldID0gdGhpcy5kYXRhW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuTXVsdGlwbHkgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IE1hdHJpeDR4NCgpO1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5kYXRhWzBdLCBiID0gdGhpcy5kYXRhWzFdLCBjID0gdGhpcy5kYXRhWzJdLCBkID0gdGhpcy5kYXRhWzNdLCBlID0gdGhpcy5kYXRhWzRdLCBmID0gdGhpcy5kYXRhWzVdLCBnID0gdGhpcy5kYXRhWzZdLCBoID0gdGhpcy5kYXRhWzddLCBpID0gdGhpcy5kYXRhWzhdLCBqID0gdGhpcy5kYXRhWzldLCBrID0gdGhpcy5kYXRhWzEwXSwgbCA9IHRoaXMuZGF0YVsxMV0sIG0gPSB0aGlzLmRhdGFbMTJdLCBuID0gdGhpcy5kYXRhWzEzXSwgbyA9IHRoaXMuZGF0YVsxNF0sIHAgPSB0aGlzLmRhdGFbMTVdLCBBID0gb3RoZXIuZGF0YVswXSwgQiA9IG90aGVyLmRhdGFbMV0sIEMgPSBvdGhlci5kYXRhWzJdLCBEID0gb3RoZXIuZGF0YVszXSwgRSA9IG90aGVyLmRhdGFbNF0sIEYgPSBvdGhlci5kYXRhWzVdLCBHID0gb3RoZXIuZGF0YVs2XSwgSCA9IG90aGVyLmRhdGFbN10sIEkgPSBvdGhlci5kYXRhWzhdLCBKID0gb3RoZXIuZGF0YVs5XSwgSyA9IG90aGVyLmRhdGFbMTBdLCBMID0gb3RoZXIuZGF0YVsxMV0sIE0gPSBvdGhlci5kYXRhWzEyXSwgTiA9IG90aGVyLmRhdGFbMTNdLCBPID0gb3RoZXIuZGF0YVsxNF0sIFAgPSBvdGhlci5kYXRhWzE1XTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IEEgKiBhICsgQiAqIGUgKyBDICogaSArIEQgKiBtO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gQSAqIGIgKyBCICogZiArIEMgKiBqICsgRCAqIG47XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSBBICogYyArIEIgKiBnICsgQyAqIGsgKyBEICogbztcclxuICAgICAgICBvdXRwdXQuZGF0YVszXSA9IEEgKiBkICsgQiAqIGggKyBDICogbCArIEQgKiBwO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzRdID0gRSAqIGEgKyBGICogZSArIEcgKiBpICsgSCAqIG07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNV0gPSBFICogYiArIEYgKiBmICsgRyAqIGogKyBIICogbjtcclxuICAgICAgICBvdXRwdXQuZGF0YVs2XSA9IEUgKiBjICsgRiAqIGcgKyBHICogayArIEggKiBvO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzddID0gRSAqIGQgKyBGICogaCArIEcgKiBsICsgSCAqIHA7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbOF0gPSBJICogYSArIEogKiBlICsgSyAqIGkgKyBMICogbTtcclxuICAgICAgICBvdXRwdXQuZGF0YVs5XSA9IEkgKiBiICsgSiAqIGYgKyBLICogaiArIEwgKiBuO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEwXSA9IEkgKiBjICsgSiAqIGcgKyBLICogayArIEwgKiBvO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzExXSA9IEkgKiBkICsgSiAqIGggKyBLICogbCArIEwgKiBwO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEyXSA9IE0gKiBhICsgTiAqIGUgKyBPICogaSArIFAgKiBtO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEzXSA9IE0gKiBiICsgTiAqIGYgKyBPICogaiArIFAgKiBuO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzE0XSA9IE0gKiBjICsgTiAqIGcgKyBPICogayArIFAgKiBvO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzE1XSA9IE0gKiBkICsgTiAqIGggKyBPICogbCArIFAgKiBwO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NHg0LnByb3RvdHlwZS5NdWx0aXBseV9iID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLmRhdGFbMF0sIGIgPSB0aGlzLmRhdGFbMV0sIGMgPSB0aGlzLmRhdGFbMl0sIGQgPSB0aGlzLmRhdGFbM10sIGUgPSB0aGlzLmRhdGFbNF0sIGYgPSB0aGlzLmRhdGFbNV0sIGcgPSB0aGlzLmRhdGFbNl0sIGggPSB0aGlzLmRhdGFbN10sIGkgPSB0aGlzLmRhdGFbOF0sIGogPSB0aGlzLmRhdGFbOV0sIGsgPSB0aGlzLmRhdGFbMTBdLCBsID0gdGhpcy5kYXRhWzExXSwgbSA9IHRoaXMuZGF0YVsxMl0sIG4gPSB0aGlzLmRhdGFbMTNdLCBvID0gdGhpcy5kYXRhWzE0XSwgcCA9IHRoaXMuZGF0YVsxNV0sIEEgPSBvdGhlci5kYXRhWzBdLCBCID0gb3RoZXIuZGF0YVsxXSwgQyA9IG90aGVyLmRhdGFbMl0sIEQgPSBvdGhlci5kYXRhWzNdLCBFID0gb3RoZXIuZGF0YVs0XSwgRiA9IG90aGVyLmRhdGFbNV0sIEcgPSBvdGhlci5kYXRhWzZdLCBIID0gb3RoZXIuZGF0YVs3XSwgSSA9IG90aGVyLmRhdGFbOF0sIEogPSBvdGhlci5kYXRhWzldLCBLID0gb3RoZXIuZGF0YVsxMF0sIEwgPSBvdGhlci5kYXRhWzExXSwgTSA9IG90aGVyLmRhdGFbMTJdLCBOID0gb3RoZXIuZGF0YVsxM10sIE8gPSBvdGhlci5kYXRhWzE0XSwgUCA9IG90aGVyLmRhdGFbMTVdO1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IEEgKiBhICsgQiAqIGUgKyBDICogaSArIEQgKiBtO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IEEgKiBiICsgQiAqIGYgKyBDICogaiArIEQgKiBuO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IEEgKiBjICsgQiAqIGcgKyBDICogayArIEQgKiBvO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IEEgKiBkICsgQiAqIGggKyBDICogbCArIEQgKiBwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IEUgKiBhICsgRiAqIGUgKyBHICogaSArIEggKiBtO1xyXG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IEUgKiBiICsgRiAqIGYgKyBHICogaiArIEggKiBuO1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IEUgKiBjICsgRiAqIGcgKyBHICogayArIEggKiBvO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IEUgKiBkICsgRiAqIGggKyBHICogbCArIEggKiBwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IEkgKiBhICsgSiAqIGUgKyBLICogaSArIEwgKiBtO1xyXG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IEkgKiBiICsgSiAqIGYgKyBLICogaiArIEwgKiBuO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMF0gPSBJICogYyArIEogKiBnICsgSyAqIGsgKyBMICogbztcclxuICAgICAgICB0aGlzLmRhdGFbMTFdID0gSSAqIGQgKyBKICogaCArIEsgKiBsICsgTCAqIHA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEyXSA9IE0gKiBhICsgTiAqIGUgKyBPICogaSArIFAgKiBtO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxM10gPSBNICogYiArIE4gKiBmICsgTyAqIGogKyBQICogbjtcclxuICAgICAgICB0aGlzLmRhdGFbMTRdID0gTSAqIGMgKyBOICogZyArIE8gKiBrICsgUCAqIG87XHJcbiAgICAgICAgdGhpcy5kYXRhWzE1XSA9IE0gKiBkICsgTiAqIGggKyBPICogbCArIFAgKiBwO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuU2NhbGUgPSBmdW5jdGlvbiAoYXJnX3NjYWxlKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBNYXRyaXg0eDQoKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAqIGFyZ19zY2FsZS54O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdICogYXJnX3NjYWxlLng7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gKiBhcmdfc2NhbGUueDtcclxuICAgICAgICBvdXRwdXQuZGF0YVszXSA9IHRoaXMuZGF0YVszXSAqIGFyZ19zY2FsZS54O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzRdID0gdGhpcy5kYXRhWzRdICogYXJnX3NjYWxlLnk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNV0gPSB0aGlzLmRhdGFbNV0gKiBhcmdfc2NhbGUueTtcclxuICAgICAgICBvdXRwdXQuZGF0YVs2XSA9IHRoaXMuZGF0YVs2XSAqIGFyZ19zY2FsZS55O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzddID0gdGhpcy5kYXRhWzddICogYXJnX3NjYWxlLnk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbOF0gPSB0aGlzLmRhdGFbOF0gKiBhcmdfc2NhbGUuejtcclxuICAgICAgICBvdXRwdXQuZGF0YVs5XSA9IHRoaXMuZGF0YVs5XSAqIGFyZ19zY2FsZS56O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEwXSA9IHRoaXMuZGF0YVsxMF0gKiBhcmdfc2NhbGUuejtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMV0gPSB0aGlzLmRhdGFbMTFdICogYXJnX3NjYWxlLno7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTJdID0gdGhpcy5kYXRhWzEyXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxM10gPSB0aGlzLmRhdGFbMTNdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzE0XSA9IHRoaXMuZGF0YVsxNF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTVdID0gdGhpcy5kYXRhWzE1XTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuU2NhbGVfYiA9IGZ1bmN0aW9uIChhcmdfc2NhbGUpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKiBhcmdfc2NhbGUueDtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKiBhcmdfc2NhbGUueDtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gKiBhcmdfc2NhbGUueDtcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSB0aGlzLmRhdGFbM10gKiBhcmdfc2NhbGUueDtcclxuICAgICAgICB0aGlzLmRhdGFbNF0gPSB0aGlzLmRhdGFbNF0gKiBhcmdfc2NhbGUueTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSB0aGlzLmRhdGFbNV0gKiBhcmdfc2NhbGUueTtcclxuICAgICAgICB0aGlzLmRhdGFbNl0gPSB0aGlzLmRhdGFbNl0gKiBhcmdfc2NhbGUueTtcclxuICAgICAgICB0aGlzLmRhdGFbN10gPSB0aGlzLmRhdGFbN10gKiBhcmdfc2NhbGUueTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSB0aGlzLmRhdGFbOF0gKiBhcmdfc2NhbGUuejtcclxuICAgICAgICB0aGlzLmRhdGFbOV0gPSB0aGlzLmRhdGFbOV0gKiBhcmdfc2NhbGUuejtcclxuICAgICAgICB0aGlzLmRhdGFbMTBdID0gdGhpcy5kYXRhWzEwXSAqIGFyZ19zY2FsZS56O1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMV0gPSB0aGlzLmRhdGFbMTFdICogYXJnX3NjYWxlLno7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEyXSA9IHRoaXMuZGF0YVsxMl07XHJcbiAgICAgICAgdGhpcy5kYXRhWzEzXSA9IHRoaXMuZGF0YVsxM107XHJcbiAgICAgICAgdGhpcy5kYXRhWzE0XSA9IHRoaXMuZGF0YVsxNF07XHJcbiAgICAgICAgdGhpcy5kYXRhWzE1XSA9IHRoaXMuZGF0YVsxNV07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NHg0LnByb3RvdHlwZS5UcmFuc2xhdGUgPSBmdW5jdGlvbiAoYXJnX3RyYW5zbGF0ZSkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgTWF0cml4NHg0KCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMl07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSB0aGlzLmRhdGFbM107XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNF0gPSB0aGlzLmRhdGFbNF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNV0gPSB0aGlzLmRhdGFbNV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNl0gPSB0aGlzLmRhdGFbNl07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbN10gPSB0aGlzLmRhdGFbN107XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbOF0gPSB0aGlzLmRhdGFbOF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbOV0gPSB0aGlzLmRhdGFbOV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTBdID0gdGhpcy5kYXRhWzEwXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMV0gPSB0aGlzLmRhdGFbMTFdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEyXSA9IHRoaXMuZGF0YVswXSAqIGFyZ190cmFuc2xhdGUueCArIHRoaXMuZGF0YVs0XSAqIGFyZ190cmFuc2xhdGUueSArIHRoaXMuZGF0YVs4XSAqIGFyZ190cmFuc2xhdGUueiArIHRoaXMuZGF0YVsxMl07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTNdID0gdGhpcy5kYXRhWzFdICogYXJnX3RyYW5zbGF0ZS54ICsgdGhpcy5kYXRhWzVdICogYXJnX3RyYW5zbGF0ZS55ICsgdGhpcy5kYXRhWzldICogYXJnX3RyYW5zbGF0ZS56ICsgdGhpcy5kYXRhWzEzXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxNF0gPSB0aGlzLmRhdGFbMl0gKiBhcmdfdHJhbnNsYXRlLnggKyB0aGlzLmRhdGFbNl0gKiBhcmdfdHJhbnNsYXRlLnkgKyB0aGlzLmRhdGFbMTBdICogYXJnX3RyYW5zbGF0ZS56ICsgdGhpcy5kYXRhWzE0XTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxNV0gPSB0aGlzLmRhdGFbM10gKiBhcmdfdHJhbnNsYXRlLnggKyB0aGlzLmRhdGFbN10gKiBhcmdfdHJhbnNsYXRlLnkgKyB0aGlzLmRhdGFbMTFdICogYXJnX3RyYW5zbGF0ZS56ICsgdGhpcy5kYXRhWzE1XTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuVHJhbnNsYXRlX2IgPSBmdW5jdGlvbiAoYXJnX3RyYW5zbGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMl0gPSB0aGlzLmRhdGFbMF0gKiBhcmdfdHJhbnNsYXRlLnggKyB0aGlzLmRhdGFbNF0gKiBhcmdfdHJhbnNsYXRlLnkgKyB0aGlzLmRhdGFbOF0gKiBhcmdfdHJhbnNsYXRlLnogKyB0aGlzLmRhdGFbMTJdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxM10gPSB0aGlzLmRhdGFbMV0gKiBhcmdfdHJhbnNsYXRlLnggKyB0aGlzLmRhdGFbNV0gKiBhcmdfdHJhbnNsYXRlLnkgKyB0aGlzLmRhdGFbOV0gKiBhcmdfdHJhbnNsYXRlLnogKyB0aGlzLmRhdGFbMTNdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxNF0gPSB0aGlzLmRhdGFbMl0gKiBhcmdfdHJhbnNsYXRlLnggKyB0aGlzLmRhdGFbNl0gKiBhcmdfdHJhbnNsYXRlLnkgKyB0aGlzLmRhdGFbMTBdICogYXJnX3RyYW5zbGF0ZS56ICsgdGhpcy5kYXRhWzE0XTtcclxuICAgICAgICB0aGlzLmRhdGFbMTVdID0gdGhpcy5kYXRhWzNdICogYXJnX3RyYW5zbGF0ZS54ICsgdGhpcy5kYXRhWzddICogYXJnX3RyYW5zbGF0ZS55ICsgdGhpcy5kYXRhWzExXSAqIGFyZ190cmFuc2xhdGUueiArIHRoaXMuZGF0YVsxNV07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NHg0LnByb3RvdHlwZS5Sb3RhdGUgPSBmdW5jdGlvbiAoYXJnX2FuZ2xlLCBhcmdfYXhpcykge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgTWF0cml4NHg0KCk7XHJcbiAgICAgICAgdmFyIHNxID0gYXJnX2F4aXMuTGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKCFzcSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGEgPSBhcmdfYXhpcy54LCBiID0gYXJnX2F4aXMueSwgYyA9IGFyZ19heGlzLno7XHJcbiAgICAgICAgaWYgKHNxICE9IDEpIHtcclxuICAgICAgICAgICAgc3EgPSAxIC8gc3E7XHJcbiAgICAgICAgICAgIGEgKj0gc3E7XHJcbiAgICAgICAgICAgIGIgKj0gc3E7XHJcbiAgICAgICAgICAgIGMgKj0gc3E7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkID0gTWF0aC5zaW4oYXJnX2FuZ2xlKSwgZSA9IE1hdGguY29zKGFyZ19hbmdsZSksIGYgPSAxIC0gZSwgZyA9IHRoaXMuZGF0YVswXSwgaCA9IHRoaXMuZGF0YVsxXSwgaSA9IHRoaXMuZGF0YVsyXSwgaiA9IHRoaXMuZGF0YVszXSwgayA9IHRoaXMuZGF0YVs0XSwgbCA9IHRoaXMuZGF0YVs1XSwgbSA9IHRoaXMuZGF0YVs2XSwgbiA9IHRoaXMuZGF0YVs3XSwgbyA9IHRoaXMuZGF0YVs4XSwgcCA9IHRoaXMuZGF0YVs5XSwgcSA9IHRoaXMuZGF0YVsxMF0sIHIgPSB0aGlzLmRhdGFbMTFdLCBzID0gYSAqIGEgKiBmICsgZSwgdCA9IGIgKiBhICogZiArIGMgKiBkLCB1ID0gYyAqIGEgKiBmIC0gYiAqIGQsIHYgPSBhICogYiAqIGYgLSBjICogZCwgdyA9IGIgKiBiICogZiArIGUsIHggPSBjICogYiAqIGYgKyBhICogZCwgeSA9IGEgKiBjICogZiArIGIgKiBkLCB6ID0gYiAqIGMgKiBmIC0gYSAqIGQsIEEgPSBjICogYyAqIGYgKyBlO1xyXG4gICAgICAgIGlmIChhcmdfYW5nbGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YSAhPSBvdXRwdXQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFbMTJdID0gdGhpcy5kYXRhWzEyXTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5kYXRhWzEzXSA9IHRoaXMuZGF0YVsxM107XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YVsxNF0gPSB0aGlzLmRhdGFbMTRdO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFbMTVdID0gdGhpcy5kYXRhWzE1XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb3V0cHV0LmRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gZyAqIHMgKyBrICogdCArIG8gKiB1O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gaCAqIHMgKyBsICogdCArIHAgKiB1O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gaSAqIHMgKyBtICogdCArIHEgKiB1O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzNdID0gaiAqIHMgKyBuICogdCArIHIgKiB1O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzRdID0gZyAqIHYgKyBrICogdyArIG8gKiB4O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzVdID0gaCAqIHYgKyBsICogdyArIHAgKiB4O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzZdID0gaSAqIHYgKyBtICogdyArIHEgKiB4O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzddID0gaiAqIHYgKyBuICogdyArIHIgKiB4O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzhdID0gZyAqIHkgKyBrICogeiArIG8gKiBBO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzldID0gaCAqIHkgKyBsICogeiArIHAgKiBBO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEwXSA9IGkgKiB5ICsgbSAqIHogKyBxICogQTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMV0gPSBqICogeSArIG4gKiB6ICsgciAqIEE7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLlJvdGF0ZV9iID0gZnVuY3Rpb24gKGFyZ19hbmdsZSwgYXJnX2F4aXMpIHtcclxuICAgICAgICB2YXIgc3EgPSBhcmdfYXhpcy5MZW5ndGgoKTtcclxuICAgICAgICBpZiAoIXNxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYSA9IGFyZ19heGlzLngsIGIgPSBhcmdfYXhpcy55LCBjID0gYXJnX2F4aXMuejtcclxuICAgICAgICBpZiAoc3EgIT0gMSkge1xyXG4gICAgICAgICAgICBzcSA9IDEgLyBzcTtcclxuICAgICAgICAgICAgYSAqPSBzcTtcclxuICAgICAgICAgICAgYiAqPSBzcTtcclxuICAgICAgICAgICAgYyAqPSBzcTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGQgPSBNYXRoLnNpbihhcmdfYW5nbGUpLCBlID0gTWF0aC5jb3MoYXJnX2FuZ2xlKSwgZiA9IDEgLSBlLCBnID0gdGhpcy5kYXRhWzBdLCBoID0gdGhpcy5kYXRhWzFdLCBpID0gdGhpcy5kYXRhWzJdLCBqID0gdGhpcy5kYXRhWzNdLCBrID0gdGhpcy5kYXRhWzRdLCBsID0gdGhpcy5kYXRhWzVdLCBtID0gdGhpcy5kYXRhWzZdLCBuID0gdGhpcy5kYXRhWzddLCBvID0gdGhpcy5kYXRhWzhdLCBwID0gdGhpcy5kYXRhWzldLCBxID0gdGhpcy5kYXRhWzEwXSwgciA9IHRoaXMuZGF0YVsxMV0sIHMgPSBhICogYSAqIGYgKyBlLCB0ID0gYiAqIGEgKiBmICsgYyAqIGQsIHUgPSBjICogYSAqIGYgLSBiICogZCwgdiA9IGEgKiBiICogZiAtIGMgKiBkLCB3ID0gYiAqIGIgKiBmICsgZSwgeCA9IGMgKiBiICogZiArIGEgKiBkLCB5ID0gYSAqIGMgKiBmICsgYiAqIGQsIHogPSBiICogYyAqIGYgLSBhICogZCwgQSA9IGMgKiBjICogZiArIGU7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gZyAqIHMgKyBrICogdCArIG8gKiB1O1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IGggKiBzICsgbCAqIHQgKyBwICogdTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBpICogcyArIG0gKiB0ICsgcSAqIHU7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gaiAqIHMgKyBuICogdCArIHIgKiB1O1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IGcgKiB2ICsgayAqIHcgKyBvICogeDtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBoICogdiArIGwgKiB3ICsgcCAqIHg7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gaSAqIHYgKyBtICogdyArIHEgKiB4O1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IGogKiB2ICsgbiAqIHcgKyByICogeDtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBnICogeSArIGsgKiB6ICsgbyAqIEE7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gaCAqIHkgKyBsICogeiArIHAgKiBBO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMF0gPSBpICogeSArIG0gKiB6ICsgcSAqIEE7XHJcbiAgICAgICAgdGhpcy5kYXRhWzExXSA9IGogKiB5ICsgbiAqIHogKyByICogQTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLkxvb2tBdCA9IGZ1bmN0aW9uIChhcmdfZXllLCBhcmdfY2VudGVyUG9zLCBhcmdfdXBBeGlzKSB7XHJcbiAgICAgICAgdmFyIGV5ZVggPSBhcmdfZXllLngsIGV5ZVkgPSBhcmdfZXllLnksIGV5ZVogPSBhcmdfZXllLnosIHVwWCA9IGFyZ191cEF4aXMueCwgdXBZID0gYXJnX3VwQXhpcy55LCB1cFogPSBhcmdfdXBBeGlzLnosIGNlbnRlclggPSBhcmdfY2VudGVyUG9zLngsIGNlbnRlclkgPSBhcmdfY2VudGVyUG9zLnksIGNlbnRlclogPSBhcmdfY2VudGVyUG9zLno7XHJcbiAgICAgICAgaWYgKGV5ZVggPT0gY2VudGVyWCAmJiBleWVZID09IGNlbnRlclkgJiYgZXllWiA9PSBjZW50ZXJaKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLklkZW50aXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB4MCwgeDEsIHgyLCB5MCwgeTEsIHkyLCB6MCwgejEsIHoyLCBsO1xyXG4gICAgICAgIHowID0gZXllWCAtIGFyZ19jZW50ZXJQb3MueDtcclxuICAgICAgICB6MSA9IGV5ZVkgLSBhcmdfY2VudGVyUG9zLnk7XHJcbiAgICAgICAgejIgPSBleWVaIC0gYXJnX2NlbnRlclBvcy56O1xyXG4gICAgICAgIGwgPSAxIC8gTWF0aC5zcXJ0KHowICogejAgKyB6MSAqIHoxICsgejIgKiB6Mik7XHJcbiAgICAgICAgejAgKj0gbDtcclxuICAgICAgICB6MSAqPSBsO1xyXG4gICAgICAgIHoyICo9IGw7XHJcbiAgICAgICAgeDAgPSB1cFkgKiB6MiAtIHVwWiAqIHoxO1xyXG4gICAgICAgIHgxID0gdXBaICogejAgLSB1cFggKiB6MjtcclxuICAgICAgICB4MiA9IHVwWCAqIHoxIC0gdXBZICogejA7XHJcbiAgICAgICAgbCA9IE1hdGguc3FydCh4MCAqIHgwICsgeDEgKiB4MSArIHgyICogeDIpO1xyXG4gICAgICAgIGlmICghbCkge1xyXG4gICAgICAgICAgICB4MCA9IDA7XHJcbiAgICAgICAgICAgIHgxID0gMDtcclxuICAgICAgICAgICAgeDIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbCA9IDEgLyBsO1xyXG4gICAgICAgICAgICB4MCAqPSBsO1xyXG4gICAgICAgICAgICB4MSAqPSBsO1xyXG4gICAgICAgICAgICB4MiAqPSBsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB5MCA9IHoxICogeDIgLSB6MiAqIHgxO1xyXG4gICAgICAgIHkxID0gejIgKiB4MCAtIHowICogeDI7XHJcbiAgICAgICAgeTIgPSB6MCAqIHgxIC0gejEgKiB4MDtcclxuICAgICAgICBsID0gTWF0aC5zcXJ0KHkwICogeTAgKyB5MSAqIHkxICsgeTIgKiB5Mik7XHJcbiAgICAgICAgaWYgKCFsKSB7XHJcbiAgICAgICAgICAgIHkwID0gMDtcclxuICAgICAgICAgICAgeTEgPSAwO1xyXG4gICAgICAgICAgICB5MiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsID0gMSAvIGw7XHJcbiAgICAgICAgICAgIHkwICo9IGw7XHJcbiAgICAgICAgICAgIHkxICo9IGw7XHJcbiAgICAgICAgICAgIHkyICo9IGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IHgwO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IHkwO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IHowO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzRdID0geDE7XHJcbiAgICAgICAgdGhpcy5kYXRhWzVdID0geTE7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gejE7XHJcbiAgICAgICAgdGhpcy5kYXRhWzddID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSB4MjtcclxuICAgICAgICB0aGlzLmRhdGFbOV0gPSB5MjtcclxuICAgICAgICB0aGlzLmRhdGFbMTBdID0gejI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzExXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEyXSA9IC0oeDAgKiBleWVYICsgeDEgKiBleWVZICsgeDIgKiBleWVaKTtcclxuICAgICAgICB0aGlzLmRhdGFbMTNdID0gLSh5MCAqIGV5ZVggKyB5MSAqIGV5ZVkgKyB5MiAqIGV5ZVopO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxNF0gPSAtKHowICogZXllWCArIHoxICogZXllWSArIHoyICogZXllWik7XHJcbiAgICAgICAgdGhpcy5kYXRhWzE1XSA9IDE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NHg0LnByb3RvdHlwZS5QZXJzcGVjdGl2ZSA9IGZ1bmN0aW9uIChmb3Z5LCBhc3BlY3QsIG5lYXIsIGZhcikge1xyXG4gICAgICAgIHZhciB0ID0gbmVhciAqIE1hdGgudGFuKGZvdnkgKiBNYXRoLlBJIC8gMzYwKTtcclxuICAgICAgICB2YXIgciA9IHQgKiBhc3BlY3Q7XHJcbiAgICAgICAgdmFyIGEgPSByICogMiwgYiA9IHQgKiAyLCBjID0gZmFyIC0gbmVhcjtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSBuZWFyICogMiAvIGE7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzRdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZWFyICogMiAvIGI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbN10gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMTBdID0gLShmYXIgKyBuZWFyKSAvIGM7XHJcbiAgICAgICAgdGhpcy5kYXRhWzExXSA9IC0xO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMl0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxM10gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxNF0gPSAtKGZhciAqIG5lYXIgKiAyKSAvIGM7XHJcbiAgICAgICAgdGhpcy5kYXRhWzE1XSA9IDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NHg0LnByb3RvdHlwZS5PcnRobyA9IGZ1bmN0aW9uIChsZWZ0LCByaWdodCwgdG9wLCBib3R0b20sIG5lYXIsIGZhcikge1xyXG4gICAgICAgIHZhciBoID0gKHJpZ2h0IC0gbGVmdCk7XHJcbiAgICAgICAgdmFyIHYgPSAodG9wIC0gYm90dG9tKTtcclxuICAgICAgICB2YXIgZCA9IChmYXIgLSBuZWFyKTtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSAyIC8gaDtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbNF0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IDIgLyB2O1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzddID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEwXSA9IC0yIC8gZDtcclxuICAgICAgICB0aGlzLmRhdGFbMTFdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMTJdID0gLShsZWZ0ICsgcmlnaHQpIC8gaDtcclxuICAgICAgICB0aGlzLmRhdGFbMTNdID0gLSh0b3AgKyBib3R0b20pIC8gdjtcclxuICAgICAgICB0aGlzLmRhdGFbMTRdID0gLShmYXIgKyBuZWFyKSAvIGQ7XHJcbiAgICAgICAgdGhpcy5kYXRhWzE1XSA9IDE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NHg0LnByb3RvdHlwZS5UcmFuc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBNYXRyaXg0eDQoKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVs0XTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVs4XTtcclxuICAgICAgICBvdXRwdXQuZGF0YVszXSA9IHRoaXMuZGF0YVsxMl07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNF0gPSB0aGlzLmRhdGFbMV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNV0gPSB0aGlzLmRhdGFbNV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNl0gPSB0aGlzLmRhdGFbOV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbN10gPSB0aGlzLmRhdGFbMTNdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzhdID0gdGhpcy5kYXRhWzJdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzldID0gdGhpcy5kYXRhWzZdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEwXSA9IHRoaXMuZGF0YVsxMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTFdID0gdGhpcy5kYXRhWzE0XTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMl0gPSB0aGlzLmRhdGFbM107XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTNdID0gdGhpcy5kYXRhWzddO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzE0XSA9IHRoaXMuZGF0YVsxMV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTVdID0gdGhpcy5kYXRhWzE1XTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuVHJhbnNwb3NlX2IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRlbXAgPSBuZXcgTWF0cml4NHg0KCk7XHJcbiAgICAgICAgdGVtcC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdO1xyXG4gICAgICAgIHRlbXAuZGF0YVsxXSA9IHRoaXMuZGF0YVs0XTtcclxuICAgICAgICB0ZW1wLmRhdGFbMl0gPSB0aGlzLmRhdGFbOF07XHJcbiAgICAgICAgdGVtcC5kYXRhWzNdID0gdGhpcy5kYXRhWzEyXTtcclxuICAgICAgICB0ZW1wLmRhdGFbNF0gPSB0aGlzLmRhdGFbMV07XHJcbiAgICAgICAgdGVtcC5kYXRhWzVdID0gdGhpcy5kYXRhWzVdO1xyXG4gICAgICAgIHRlbXAuZGF0YVs2XSA9IHRoaXMuZGF0YVs5XTtcclxuICAgICAgICB0ZW1wLmRhdGFbN10gPSB0aGlzLmRhdGFbMTNdO1xyXG4gICAgICAgIHRlbXAuZGF0YVs4XSA9IHRoaXMuZGF0YVsyXTtcclxuICAgICAgICB0ZW1wLmRhdGFbOV0gPSB0aGlzLmRhdGFbNl07XHJcbiAgICAgICAgdGVtcC5kYXRhWzEwXSA9IHRoaXMuZGF0YVsxMF07XHJcbiAgICAgICAgdGVtcC5kYXRhWzExXSA9IHRoaXMuZGF0YVsxNF07XHJcbiAgICAgICAgdGVtcC5kYXRhWzEyXSA9IHRoaXMuZGF0YVszXTtcclxuICAgICAgICB0ZW1wLmRhdGFbMTNdID0gdGhpcy5kYXRhWzddO1xyXG4gICAgICAgIHRlbXAuZGF0YVsxNF0gPSB0aGlzLmRhdGFbMTFdO1xyXG4gICAgICAgIHRlbXAuZGF0YVsxNV0gPSB0aGlzLmRhdGFbMTVdO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHRlbXAuZGF0YTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLkludmVyc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBNYXRyaXg0eDQoKTtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuZGF0YVswXSwgYiA9IHRoaXMuZGF0YVsxXSwgYyA9IHRoaXMuZGF0YVsyXSwgZCA9IHRoaXMuZGF0YVszXSwgZSA9IHRoaXMuZGF0YVs0XSwgZiA9IHRoaXMuZGF0YVs1XSwgZyA9IHRoaXMuZGF0YVs2XSwgaCA9IHRoaXMuZGF0YVs3XSwgaSA9IHRoaXMuZGF0YVs4XSwgaiA9IHRoaXMuZGF0YVs5XSwgayA9IHRoaXMuZGF0YVsxMF0sIGwgPSB0aGlzLmRhdGFbMTFdLCBtID0gdGhpcy5kYXRhWzEyXSwgbiA9IHRoaXMuZGF0YVsxM10sIG8gPSB0aGlzLmRhdGFbMTRdLCBwID0gdGhpcy5kYXRhWzE1XSwgcSA9IGEgKiBmIC0gYiAqIGUsIHIgPSBhICogZyAtIGMgKiBlLCBzID0gYSAqIGggLSBkICogZSwgdCA9IGIgKiBnIC0gYyAqIGYsIHUgPSBiICogaCAtIGQgKiBmLCB2ID0gYyAqIGggLSBkICogZywgdyA9IGkgKiBuIC0gaiAqIG0sIHggPSBpICogbyAtIGsgKiBtLCB5ID0gaSAqIHAgLSBsICogbSwgeiA9IGogKiBvIC0gayAqIG4sIEEgPSBqICogcCAtIGwgKiBuLCBCID0gayAqIHAgLSBsICogbywgaXZkID0gMSAvIChxICogQiAtIHIgKiBBICsgcyAqIHogKyB0ICogeSAtIHUgKiB4ICsgdiAqIHcpO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gKGYgKiBCIC0gZyAqIEEgKyBoICogeikgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSAoLWIgKiBCICsgYyAqIEEgLSBkICogeikgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSAobiAqIHYgLSBvICogdSArIHAgKiB0KSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVszXSA9ICgtaiAqIHYgKyBrICogdSAtIGwgKiB0KSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs0XSA9ICgtZSAqIEIgKyBnICogeSAtIGggKiB4KSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs1XSA9IChhICogQiAtIGMgKiB5ICsgZCAqIHgpICogaXZkO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzZdID0gKC1tICogdiArIG8gKiBzIC0gcCAqIHIpICogaXZkO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzddID0gKGkgKiB2IC0gayAqIHMgKyBsICogcikgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbOF0gPSAoZSAqIEEgLSBmICogeSArIGggKiB3KSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs5XSA9ICgtYSAqIEEgKyBiICogeSAtIGQgKiB3KSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMF0gPSAobSAqIHUgLSBuICogcyArIHAgKiBxKSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMV0gPSAoLWkgKiB1ICsgaiAqIHMgLSBsICogcSkgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTJdID0gKC1lICogeiArIGYgKiB4IC0gZyAqIHcpICogaXZkO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEzXSA9IChhICogeiAtIGIgKiB4ICsgYyAqIHcpICogaXZkO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzE0XSA9ICgtbSAqIHQgKyBuICogciAtIG8gKiBxKSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxNV0gPSAoaSAqIHQgLSBqICogciArIGsgKiBxKSAqIGl2ZDtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuSW52ZXJzZV9iID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5kYXRhWzBdLCBiID0gdGhpcy5kYXRhWzFdLCBjID0gdGhpcy5kYXRhWzJdLCBkID0gdGhpcy5kYXRhWzNdLCBlID0gdGhpcy5kYXRhWzRdLCBmID0gdGhpcy5kYXRhWzVdLCBnID0gdGhpcy5kYXRhWzZdLCBoID0gdGhpcy5kYXRhWzddLCBpID0gdGhpcy5kYXRhWzhdLCBqID0gdGhpcy5kYXRhWzldLCBrID0gdGhpcy5kYXRhWzEwXSwgbCA9IHRoaXMuZGF0YVsxMV0sIG0gPSB0aGlzLmRhdGFbMTJdLCBuID0gdGhpcy5kYXRhWzEzXSwgbyA9IHRoaXMuZGF0YVsxNF0sIHAgPSB0aGlzLmRhdGFbMTVdLCBxID0gYSAqIGYgLSBiICogZSwgciA9IGEgKiBnIC0gYyAqIGUsIHMgPSBhICogaCAtIGQgKiBlLCB0ID0gYiAqIGcgLSBjICogZiwgdSA9IGIgKiBoIC0gZCAqIGYsIHYgPSBjICogaCAtIGQgKiBnLCB3ID0gaSAqIG4gLSBqICogbSwgeCA9IGkgKiBvIC0gayAqIG0sIHkgPSBpICogcCAtIGwgKiBtLCB6ID0gaiAqIG8gLSBrICogbiwgQSA9IGogKiBwIC0gbCAqIG4sIEIgPSBrICogcCAtIGwgKiBvLCBpdmQgPSAxIC8gKHEgKiBCIC0gciAqIEEgKyBzICogeiArIHQgKiB5IC0gdSAqIHggKyB2ICogdyk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gKGYgKiBCIC0gZyAqIEEgKyBoICogeikgKiBpdmQ7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gKC1iICogQiArIGMgKiBBIC0gZCAqIHopICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IChuICogdiAtIG8gKiB1ICsgcCAqIHQpICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9ICgtaiAqIHYgKyBrICogdSAtIGwgKiB0KSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbNF0gPSAoLWUgKiBCICsgZyAqIHkgLSBoICogeCkgKiBpdmQ7XHJcbiAgICAgICAgdGhpcy5kYXRhWzVdID0gKGEgKiBCIC0gYyAqIHkgKyBkICogeCkgKiBpdmQ7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gKC1tICogdiArIG8gKiBzIC0gcCAqIHIpICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IChpICogdiAtIGsgKiBzICsgbCAqIHIpICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IChlICogQSAtIGYgKiB5ICsgaCAqIHcpICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVs5XSA9ICgtYSAqIEEgKyBiICogeSAtIGQgKiB3KSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbMTBdID0gKG0gKiB1IC0gbiAqIHMgKyBwICogcSkgKiBpdmQ7XHJcbiAgICAgICAgdGhpcy5kYXRhWzExXSA9ICgtaSAqIHUgKyBqICogcyAtIGwgKiBxKSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbMTJdID0gKC1lICogeiArIGYgKiB4IC0gZyAqIHcpICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxM10gPSAoYSAqIHogLSBiICogeCArIGMgKiB3KSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbMTRdID0gKC1tICogdCArIG4gKiByIC0gbyAqIHEpICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxNV0gPSAoaSAqIHQgLSBqICogciArIGsgKiBxKSAqIGl2ZDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICByZXR1cm4gTWF0cml4NHg0O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBNYXRyaXg0eDQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBNYXRyaXhfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYXRyaXhcIikpO1xyXG52YXIgVmVjdG9yM18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1ZlY3RvcjNcIikpO1xyXG52YXIgUXVhdGVybmlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFF1YXRlcm5pb24oKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEZsb2F0MzJBcnJheSg0KTtcclxuICAgIH1cclxuICAgIFF1YXRlcm5pb24ucHJvdG90eXBlLklkZW50aXR5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IDE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUXVhdGVybmlvbi5wcm90b3R5cGUuSW52ZXJzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IC10aGlzLmRhdGFbMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSAtdGhpcy5kYXRhWzFdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gLXRoaXMuZGF0YVsyXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVszXSA9IHRoaXMuZGF0YVszXTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFF1YXRlcm5pb24ucHJvdG90eXBlLkludmVyc2VfYiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSAtdGhpcy5kYXRhWzBdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IC10aGlzLmRhdGFbMV07XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gLXRoaXMuZGF0YVsyXTtcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSB0aGlzLmRhdGFbM107XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUXVhdGVybmlvbi5wcm90b3R5cGUuTm9ybWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gdGhpcy5kYXRhWzJdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzNdID0gdGhpcy5kYXRhWzNdO1xyXG4gICAgICAgIHZhciB4ID0gb3V0cHV0LmRhdGFbMF0sIHkgPSBvdXRwdXQuZGF0YVsxXSwgeiA9IG91dHB1dC5kYXRhWzJdLCB3ID0gb3V0cHV0LmRhdGFbM107XHJcbiAgICAgICAgdmFyIGwgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHcpO1xyXG4gICAgICAgIGlmIChsID09PSAwKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhWzBdID0gMDtcclxuICAgICAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSAwO1xyXG4gICAgICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IDA7XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhWzNdID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGwgPSAxIC8gbDtcclxuICAgICAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB4ICogbDtcclxuICAgICAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB5ICogbDtcclxuICAgICAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB6ICogbDtcclxuICAgICAgICAgICAgb3V0cHV0LmRhdGFbM10gPSB3ICogbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBRdWF0ZXJuaW9uLnByb3RvdHlwZS5Ob3JtYWxpemVfYiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbCA9IE1hdGguc3FydCh0aGlzLmRhdGFbMF0gKiB0aGlzLmRhdGFbMF0gKyB0aGlzLmRhdGFbMV0gKiB0aGlzLmRhdGFbMV0gKyB0aGlzLmRhdGFbMl0gKiB0aGlzLmRhdGFbMl0gKyB0aGlzLmRhdGFbM10gKiB0aGlzLmRhdGFbM10pO1xyXG4gICAgICAgIGlmIChsID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVswXSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVsxXSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVsyXSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVszXSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsID0gMSAvIGw7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAqIGw7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAqIGw7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAqIGw7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVszXSA9IHRoaXMuZGF0YVszXSAqIGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFF1YXRlcm5pb24ucHJvdG90eXBlLk11bHRpcGx5ID0gZnVuY3Rpb24gKGFyZ19xdWF0KSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgdmFyIGF4ID0gdGhpcy5kYXRhWzBdLCBheSA9IHRoaXMuZGF0YVsxXSwgYXogPSB0aGlzLmRhdGFbMl0sIGF3ID0gdGhpcy5kYXRhWzNdO1xyXG4gICAgICAgIHZhciBieCA9IGFyZ19xdWF0LmRhdGFbMF0sIGJ5ID0gYXJnX3F1YXQuZGF0YVsxXSwgYnogPSBhcmdfcXVhdC5kYXRhWzJdLCBidyA9IGFyZ19xdWF0LmRhdGFbM107XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSBheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gYXkgKiBidyArIGF3ICogYnkgKyBheiAqIGJ4IC0gYXggKiBiejtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYng7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSBhdyAqIGJ3IC0gYXggKiBieCAtIGF5ICogYnkgLSBheiAqIGJ6O1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgUXVhdGVybmlvbi5wcm90b3R5cGUuTXVsdGlwbHlfYiA9IGZ1bmN0aW9uIChhcmdfcXVhdCkge1xyXG4gICAgICAgIHZhciBheCA9IHRoaXMuZGF0YVswXSwgYXkgPSB0aGlzLmRhdGFbMV0sIGF6ID0gdGhpcy5kYXRhWzJdLCBhdyA9IHRoaXMuZGF0YVszXTtcclxuICAgICAgICB2YXIgYnggPSBhcmdfcXVhdC5kYXRhWzBdLCBieSA9IGFyZ19xdWF0LmRhdGFbMV0sIGJ6ID0gYXJnX3F1YXQuZGF0YVsyXSwgYncgPSBhcmdfcXVhdC5kYXRhWzNdO1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IGF4ICogYncgKyBhdyAqIGJ4ICsgYXkgKiBieiAtIGF6ICogYnk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gYXkgKiBidyArIGF3ICogYnkgKyBheiAqIGJ4IC0gYXggKiBiejtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBheiAqIGJ3ICsgYXcgKiBieiArIGF4ICogYnkgLSBheSAqIGJ4O1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IGF3ICogYncgLSBheCAqIGJ4IC0gYXkgKiBieSAtIGF6ICogYno7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUXVhdGVybmlvbi5wcm90b3R5cGUuUm90YXRlID0gZnVuY3Rpb24gKGFyZ19hbmdsZSwgYXJnX2F4aXMpIHtcclxuICAgICAgICB2YXIgc3EgPSBhcmdfYXhpcy5MZW5ndGgoKTtcclxuICAgICAgICBpZiAoIXNxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYSA9IGFyZ19heGlzLngsIGIgPSBhcmdfYXhpcy55LCBjID0gYXJnX2F4aXMuejtcclxuICAgICAgICBpZiAoc3EgIT0gMSkge1xyXG4gICAgICAgICAgICBzcSA9IDEgLyBzcTtcclxuICAgICAgICAgICAgYSAqPSBzcTtcclxuICAgICAgICAgICAgYiAqPSBzcTtcclxuICAgICAgICAgICAgYyAqPSBzcTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLnNpbihhcmdfYW5nbGUgKiAwLjUpO1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IGEgKiBzO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IGIgKiBzO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IGMgKiBzO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IE1hdGguY29zKGFyZ19hbmdsZSAqIDAuNSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUXVhdGVybmlvbi5wcm90b3R5cGUuVG9WZWN0b3IzID0gZnVuY3Rpb24gKGFyZ192ZWMpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDApO1xyXG4gICAgICAgIHZhciBxcCA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgdmFyIHFxID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgICAgICB2YXIgcXIgPSB0aGlzLkludmVyc2UoKTtcclxuICAgICAgICBxcC5kYXRhWzBdID0gYXJnX3ZlYy54O1xyXG4gICAgICAgIHFwLmRhdGFbMV0gPSBhcmdfdmVjLnk7XHJcbiAgICAgICAgcXAuZGF0YVsyXSA9IGFyZ192ZWMuejtcclxuICAgICAgICBxcSA9IHFyLk11bHRpcGx5KHFwKTtcclxuICAgICAgICBxciA9IHFxLk11bHRpcGx5KHRoaXMpO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gcXIuZGF0YVswXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHFyLmRhdGFbMV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSBxci5kYXRhWzJdO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgUXVhdGVybmlvbi5wcm90b3R5cGUuVG9NYXRyaXg0eDQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBNYXRyaXhfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHggPSB0aGlzLmRhdGFbMF0sIHkgPSB0aGlzLmRhdGFbMV0sIHogPSB0aGlzLmRhdGFbMl0sIHcgPSB0aGlzLmRhdGFbM107XHJcbiAgICAgICAgdmFyIHgyID0geCArIHgsIHkyID0geSArIHksIHoyID0geiArIHo7XHJcbiAgICAgICAgdmFyIHh4ID0geCAqIHgyLCB4eSA9IHggKiB5MiwgeHogPSB4ICogejI7XHJcbiAgICAgICAgdmFyIHl5ID0geSAqIHkyLCB5eiA9IHkgKiB6MiwgenogPSB6ICogejI7XHJcbiAgICAgICAgdmFyIHd4ID0gdyAqIHgyLCB3eSA9IHcgKiB5Miwgd3ogPSB3ICogejI7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSAxIC0gKHl5ICsgenopO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0geHkgLSB3ejtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHh6ICsgd3k7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSAwO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzRdID0geHkgKyB3ejtcclxuICAgICAgICBvdXRwdXQuZGF0YVs1XSA9IDEgLSAoeHggKyB6eik7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNl0gPSB5eiAtIHd4O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzddID0gMDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs4XSA9IHh6IC0gd3k7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbOV0gPSB5eiArIHd4O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEwXSA9IDEgLSAoeHggKyB5eSk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTFdID0gMDtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMl0gPSAwO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEzXSA9IDA7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTRdID0gMDtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxNV0gPSAxO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgUXVhdGVybmlvbi5wcm90b3R5cGUuU3BoZXJlTGVycCA9IGZ1bmN0aW9uIChhcmdfcXVhdCwgdGltZSkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgICAgIHZhciBodCA9IHRoaXMuZGF0YVswXSAqIGFyZ19xdWF0LmRhdGFbMF0gKyB0aGlzLmRhdGFbMV0gKiBhcmdfcXVhdC5kYXRhWzFdICsgdGhpcy5kYXRhWzJdICogYXJnX3F1YXQuZGF0YVsyXSArIHRoaXMuZGF0YVszXSAqIGFyZ19xdWF0LmRhdGFbM107XHJcbiAgICAgICAgdmFyIGhzID0gMS4wIC0gaHQgKiBodDtcclxuICAgICAgICBpZiAoaHMgPD0gMC4wKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdO1xyXG4gICAgICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXTtcclxuICAgICAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMl07XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhWzNdID0gdGhpcy5kYXRhWzNdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaHMgPSBNYXRoLnNxcnQoaHMpO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoaHMpIDwgMC4wMDAxKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YVswXSA9ICh0aGlzLmRhdGFbMF0gKiAwLjUgKyBhcmdfcXVhdC5kYXRhWzBdICogMC41KTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5kYXRhWzFdID0gKHRoaXMuZGF0YVsxXSAqIDAuNSArIGFyZ19xdWF0LmRhdGFbMV0gKiAwLjUpO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSAodGhpcy5kYXRhWzJdICogMC41ICsgYXJnX3F1YXQuZGF0YVsyXSAqIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YVszXSA9ICh0aGlzLmRhdGFbM10gKiAwLjUgKyBhcmdfcXVhdC5kYXRhWzNdICogMC41KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBwaCA9IE1hdGguYWNvcyhodCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHQgPSBwaCAqIHRpbWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgdDAgPSBNYXRoLnNpbihwaCAtIHB0KSAvIGhzO1xyXG4gICAgICAgICAgICAgICAgdmFyIHQxID0gTWF0aC5zaW4ocHQpIC8gaHM7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAqIHQwICsgYXJnX3F1YXQuZGF0YVswXSAqIHQxO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKiB0MCArIGFyZ19xdWF0LmRhdGFbMV0gKiB0MTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5kYXRhWzJdID0gdGhpcy5kYXRhWzJdICogdDAgKyBhcmdfcXVhdC5kYXRhWzJdICogdDE7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YVszXSA9IHRoaXMuZGF0YVszXSAqIHQwICsgYXJnX3F1YXQuZGF0YVszXSAqIHQxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgUXVhdGVybmlvbi5wcm90b3R5cGUuU3BoZXJlTGVycF9iID0gZnVuY3Rpb24gKGFyZ19xdWF0LCB0aW1lKSB7XHJcbiAgICAgICAgdmFyIGh0ID0gdGhpcy5kYXRhWzBdICogYXJnX3F1YXQuZGF0YVswXSArIHRoaXMuZGF0YVsxXSAqIGFyZ19xdWF0LmRhdGFbMV0gKyB0aGlzLmRhdGFbMl0gKiBhcmdfcXVhdC5kYXRhWzJdICsgdGhpcy5kYXRhWzNdICogYXJnX3F1YXQuZGF0YVszXTtcclxuICAgICAgICB2YXIgaHMgPSAxLjAgLSBodCAqIGh0O1xyXG4gICAgICAgIGlmIChocyA8PSAwLjApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBocyA9IE1hdGguc3FydChocyk7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhocykgPCAwLjAwMDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVswXSA9ICh0aGlzLmRhdGFbMF0gKiAwLjUgKyBhcmdfcXVhdC5kYXRhWzBdICogMC41KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVsxXSA9ICh0aGlzLmRhdGFbMV0gKiAwLjUgKyBhcmdfcXVhdC5kYXRhWzFdICogMC41KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVsyXSA9ICh0aGlzLmRhdGFbMl0gKiAwLjUgKyBhcmdfcXVhdC5kYXRhWzJdICogMC41KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVszXSA9ICh0aGlzLmRhdGFbM10gKiAwLjUgKyBhcmdfcXVhdC5kYXRhWzNdICogMC41KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBwaCA9IE1hdGguYWNvcyhodCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHQgPSBwaCAqIHRpbWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgdDAgPSBNYXRoLnNpbihwaCAtIHB0KSAvIGhzO1xyXG4gICAgICAgICAgICAgICAgdmFyIHQxID0gTWF0aC5zaW4ocHQpIC8gaHM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKiB0MCArIGFyZ19xdWF0LmRhdGFbMF0gKiB0MTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAqIHQwICsgYXJnX3F1YXQuZGF0YVsxXSAqIHQxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhWzJdID0gdGhpcy5kYXRhWzJdICogdDAgKyBhcmdfcXVhdC5kYXRhWzJdICogdDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbM10gPSB0aGlzLmRhdGFbM10gKiB0MCArIGFyZ19xdWF0LmRhdGFbM10gKiB0MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICByZXR1cm4gUXVhdGVybmlvbjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUXVhdGVybmlvbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFZlY3RvcjIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBWZWN0b3IyKHgsIHkpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KDIpO1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IHg7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0geTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLnByb3RvdHlwZSwgXCJ4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVswXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGFyZ192KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVswXSA9IGFyZ192O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLnByb3RvdHlwZSwgXCJ5XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVsxXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGFyZ192KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVsxXSA9IGFyZ192O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLnByb3RvdHlwZSwgXCJ4eVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuQWRkID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXSArIGFyZ19vdGhlci5kYXRhWzBdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdICsgYXJnX290aGVyLmRhdGFbMV07XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5BZGRfYiA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKyBhcmdfb3RoZXIuZGF0YVswXTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKyBhcmdfb3RoZXIuZGF0YVsxXTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5TdWIgPSBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdIC0gYXJnX290aGVyLmRhdGFbMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gLSBhcmdfb3RoZXIuZGF0YVsxXTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLlN1Yl9iID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAtIGFyZ19vdGhlci5kYXRhWzBdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAtIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLk11bHRpcGx5ID0gZnVuY3Rpb24gKGFyZ19zY2FsYXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKiBhcmdfc2NhbGFyO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdICogYXJnX3NjYWxhcjtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLk11bHRpcGx5X2IgPSBmdW5jdGlvbiAoYXJnX3NjYWxhcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSAqPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSAqPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLkRpdiA9IGZ1bmN0aW9uIChhcmdfc2NhbGFyKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdIC8gYXJnX3NjYWxhcjtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAvIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5EaXZfYiA9IGZ1bmN0aW9uIChhcmdfc2NhbGFyKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdIC89IGFyZ19zY2FsYXI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdIC89IGFyZ19zY2FsYXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5kYXRhWzBdICogdGhpcy5kYXRhWzBdICsgdGhpcy5kYXRhWzFdICogdGhpcy5kYXRhWzFdKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5MZW5ndGhTcXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVswXSAqIHRoaXMuZGF0YVswXSArIHRoaXMuZGF0YVsxXSAqIHRoaXMuZGF0YVsxXTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5Eb3QgPSBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVswXSAqIGFyZ19vdGhlci5kYXRhWzBdICsgdGhpcy5kYXRhWzFdICogYXJnX290aGVyLmRhdGFbMV07XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuQ3Jvc3MgPSBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIGFyZ19vdGhlci55IC0gdGhpcy55ICogYXJnX290aGVyLng7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuTm9ybWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yMih0aGlzLmRhdGFbMF0sIHRoaXMuZGF0YVsxXSk7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMuTGVuZ3RoKCk7XHJcbiAgICAgICAgb3V0cHV0LkRpdl9iKGxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5Ob3JtYWxpemVfYiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5MZW5ndGgoKTtcclxuICAgICAgICB0aGlzLkRpdl9iKGxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFZlY3RvcjI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFZlY3RvcjI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBWZWN0b3IzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVmVjdG9yMyh4LCB5LCB6KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEZsb2F0MzJBcnJheSgzKTtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSB4O1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IHk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gejtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IzLnByb3RvdHlwZSwgXCJ4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVswXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbMF0gPSBhcmdfb3RoZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjMucHJvdG90eXBlLCBcInlcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzFdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVsxXSA9IGFyZ19vdGhlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMy5wcm90b3R5cGUsIFwielwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbMl07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhWzJdID0gYXJnX290aGVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IzLnByb3RvdHlwZSwgXCJ4eXpcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLkFkZCA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKyBhcmdfb3RoZXIuZGF0YVswXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSArIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gdGhpcy5kYXRhWzJdICsgYXJnX290aGVyLmRhdGFbMl07XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5BZGRfYiA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKyBhcmdfb3RoZXIuZGF0YVswXTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKyBhcmdfb3RoZXIuZGF0YVsxXTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gKyBhcmdfb3RoZXIuZGF0YVsyXTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5TdWIgPSBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdIC0gYXJnX290aGVyLmRhdGFbMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gLSBhcmdfb3RoZXIuZGF0YVsxXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAtIGFyZ19vdGhlci5kYXRhWzJdO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuU3ViX2IgPSBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gdGhpcy5kYXRhWzBdIC0gYXJnX290aGVyLmRhdGFbMF07XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gdGhpcy5kYXRhWzFdIC0gYXJnX290aGVyLmRhdGFbMV07XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gdGhpcy5kYXRhWzJdIC0gYXJnX290aGVyLmRhdGFbMl07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuTXVsdGlwbHkgPSBmdW5jdGlvbiAoYXJnX3NjYWxhcikge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAqIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKiBhcmdfc2NhbGFyO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gdGhpcy5kYXRhWzJdICogYXJnX3NjYWxhcjtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLk11bHRpcGx5X1ZlYzMgPSBmdW5jdGlvbiAoYXJnX3ZlY3Rvcikge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAqIGFyZ192ZWN0b3IuZGF0YVswXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAqIGFyZ192ZWN0b3IuZGF0YVsxXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAqIGFyZ192ZWN0b3IuZGF0YVsyXTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLk11bHRpcGx5X2IgPSBmdW5jdGlvbiAoYXJnX3NjYWxhcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSAqPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSAqPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSAqPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLk11bHRpcGx5X1ZlYzNfYiA9IGZ1bmN0aW9uIChhcmdfdmVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gdGhpcy5kYXRhWzBdICogYXJnX3ZlY3Rvci5kYXRhWzBdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAqIGFyZ192ZWN0b3IuZGF0YVsxXTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gKiBhcmdfdmVjdG9yLmRhdGFbMl07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuTXVsdGlwbHlfTWF0cml4ID0gZnVuY3Rpb24gKGFyZ19tYXRyaXgpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKiBhcmdfbWF0cml4LmRhdGFbMF0gKyB0aGlzLmRhdGFbMF0gKiBhcmdfbWF0cml4LmRhdGFbNF0gKyB0aGlzLmRhdGFbMF0gKiBhcmdfbWF0cml4LmRhdGFbOF0gKyB0aGlzLmRhdGFbMF0gKiBhcmdfbWF0cml4LmRhdGFbMTJdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdICogYXJnX21hdHJpeC5kYXRhWzFdICsgdGhpcy5kYXRhWzFdICogYXJnX21hdHJpeC5kYXRhWzVdICsgdGhpcy5kYXRhWzFdICogYXJnX21hdHJpeC5kYXRhWzldICsgdGhpcy5kYXRhWzFdICogYXJnX21hdHJpeC5kYXRhWzEzXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAqIGFyZ19tYXRyaXguZGF0YVsyXSArIHRoaXMuZGF0YVsyXSAqIGFyZ19tYXRyaXguZGF0YVs2XSArIHRoaXMuZGF0YVsyXSAqIGFyZ19tYXRyaXguZGF0YVsxMF0gKyB0aGlzLmRhdGFbMl0gKiBhcmdfbWF0cml4LmRhdGFbMTRdO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuRGl2ID0gZnVuY3Rpb24gKGFyZ19zY2FsYXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gLyBhcmdfc2NhbGFyO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdIC8gYXJnX3NjYWxhcjtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAvIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5EaXZfYiA9IGZ1bmN0aW9uIChhcmdfc2NhbGFyKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdIC89IGFyZ19zY2FsYXI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdIC89IGFyZ19zY2FsYXI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdIC89IGFyZ19zY2FsYXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5kYXRhWzBdICogdGhpcy5kYXRhWzBdICsgdGhpcy5kYXRhWzFdICogdGhpcy5kYXRhWzFdICsgdGhpcy5kYXRhWzJdICogdGhpcy5kYXRhWzJdKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5MZW5ndGhTcXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVswXSAqIHRoaXMuZGF0YVswXSArIHRoaXMuZGF0YVsxXSAqIHRoaXMuZGF0YVsxXSArIHRoaXMuZGF0YVsyXSAqIHRoaXMuZGF0YVsyXTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5Eb3QgPSBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVswXSAqIGFyZ19vdGhlci5kYXRhWzBdICsgdGhpcy5kYXRhWzFdICogYXJnX290aGVyLmRhdGFbMV0gKyB0aGlzLmRhdGFbMl0gKiBhcmdfb3RoZXIuZGF0YVsyXTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5Dcm9zcyA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMV0gKiBhcmdfb3RoZXIuZGF0YVsyXSAtIHRoaXMuZGF0YVsyXSAqIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzJdICogYXJnX290aGVyLmRhdGFbMF0gLSB0aGlzLmRhdGFbMF0gKiBhcmdfb3RoZXIuZGF0YVsyXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVswXSAqIGFyZ19vdGhlci5kYXRhWzFdIC0gdGhpcy5kYXRhWzFdICogYXJnX290aGVyLmRhdGFbMF07XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5Ob3JtYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gdGhpcy5kYXRhWzJdO1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLkxlbmd0aCgpO1xyXG4gICAgICAgIG91dHB1dC5EaXZfYihsZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuTm9ybWFsaXplX2IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMuTGVuZ3RoKCk7XHJcbiAgICAgICAgdGhpcy5EaXZfYihsZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMueEF4aXMgPSBuZXcgVmVjdG9yMygxLCAwLCAwKTtcclxuICAgIFZlY3RvcjMueUF4aXMgPSBuZXcgVmVjdG9yMygwLCAxLCAwKTtcclxuICAgIFZlY3RvcjMuekF4aXMgPSBuZXcgVmVjdG9yMygwLCAwLCAxKTtcclxuICAgIHJldHVybiBWZWN0b3IzO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBWZWN0b3IzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVmVjdG9yNCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFZlY3RvcjQoeCwgeSwgeiwgdykge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoNCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0geDtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB5O1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IHo7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gdztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3I0LnByb3RvdHlwZSwgXCJ4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVswXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yNC5wcm90b3R5cGUsIFwieVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbMV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjQucHJvdG90eXBlLCBcInpcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzJdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3I0LnByb3RvdHlwZSwgXCJ3XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVszXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yNC5wcm90b3R5cGUsIFwieHl6d1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVmVjdG9yNC5wcm90b3R5cGUuU2V0ID0gZnVuY3Rpb24gKHgsIHksIHosIHcpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSB4O1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IHk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gejtcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSB3O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLkFkZCA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjQoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKyBhcmdfb3RoZXIuZGF0YVswXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSArIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gdGhpcy5kYXRhWzJdICsgYXJnX290aGVyLmRhdGFbMl07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSB0aGlzLmRhdGFbM10gKyBhcmdfb3RoZXIuZGF0YVszXTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLkFkZF9iID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IHRoaXMuZGF0YVswXSArIGFyZ19vdGhlci5kYXRhWzBdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSArIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSArIGFyZ19vdGhlci5kYXRhWzJdO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IHRoaXMuZGF0YVszXSArIGFyZ19vdGhlci5kYXRhWzNdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLlN1YiA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjQoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gLSBhcmdfb3RoZXIuZGF0YVswXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAtIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gdGhpcy5kYXRhWzJdIC0gYXJnX290aGVyLmRhdGFbMl07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSB0aGlzLmRhdGFbM10gLSBhcmdfb3RoZXIuZGF0YVszXTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLlN1Yl9iID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAtIGFyZ19vdGhlci5kYXRhWzBdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAtIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAtIGFyZ19vdGhlci5kYXRhWzJdO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IHRoaXMuZGF0YVszXSAtIGFyZ19vdGhlci5kYXRhWzNdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLk11bHRpcGx5ID0gZnVuY3Rpb24gKGFyZ19zY2FsYXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjQoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKiBhcmdfc2NhbGFyO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdICogYXJnX3NjYWxhcjtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAqIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSB0aGlzLmRhdGFbM10gKiBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yNC5wcm90b3R5cGUuTXVsdGlwbHlfYiA9IGZ1bmN0aW9uIChhcmdfc2NhbGFyKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdICo9IGFyZ19zY2FsYXI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdICo9IGFyZ19zY2FsYXI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdICo9IGFyZ19zY2FsYXI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdICo9IGFyZ19zY2FsYXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yNC5wcm90b3R5cGUuRGl2ID0gZnVuY3Rpb24gKGFyZ19zY2FsYXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjQoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gLyBhcmdfc2NhbGFyO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdIC8gYXJnX3NjYWxhcjtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAvIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSB0aGlzLmRhdGFbM10gLyBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yNC5wcm90b3R5cGUuRGl2X2IgPSBmdW5jdGlvbiAoYXJnX3NjYWxhcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSAvPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSAvPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSAvPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSAvPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLkxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGF0YVswXSAqIHRoaXMuZGF0YVswXSArIHRoaXMuZGF0YVsxXSAqIHRoaXMuZGF0YVsxXSArIHRoaXMuZGF0YVsyXSAqIHRoaXMuZGF0YVsyXSArIHRoaXMuZGF0YVszXSAqIHRoaXMuZGF0YVszXSk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yNC5wcm90b3R5cGUuTGVuZ3RoU3FyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbMF0gKiB0aGlzLmRhdGFbMF0gKyB0aGlzLmRhdGFbMV0gKiB0aGlzLmRhdGFbMV0gKyB0aGlzLmRhdGFbMl0gKiB0aGlzLmRhdGFbMl0gKyB0aGlzLmRhdGFbM10gKiB0aGlzLmRhdGFbM107XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yNC5wcm90b3R5cGUuRG90ID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbMF0gKiBhcmdfb3RoZXIuZGF0YVswXSArIHRoaXMuZGF0YVsxXSAqIGFyZ19vdGhlci5kYXRhWzFdICsgdGhpcy5kYXRhWzJdICogYXJnX290aGVyLmRhdGFbMl0gKyB0aGlzLmRhdGFbM10gKiBhcmdfb3RoZXIuZGF0YVszXTtcclxuICAgIH07XHJcbiAgICBWZWN0b3I0LnByb3RvdHlwZS5Ob3JtYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3I0KHRoaXMuZGF0YVswXSwgdGhpcy5kYXRhWzFdLCB0aGlzLmRhdGFbMl0sIHRoaXMuZGF0YVszXSk7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMuTGVuZ3RoKCk7XHJcbiAgICAgICAgb3V0cHV0LkRpdl9iKGxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3I0LnByb3RvdHlwZS5Ob3JtYWxpemVfYiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5MZW5ndGgoKTtcclxuICAgICAgICB0aGlzLkRpdl9iKGxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFZlY3RvcjQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFZlY3RvcjQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBWZWN0b3IzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL01hdGgvVmVjdG9yM1wiKSk7XHJcbnZhciBPY3RyZWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9PY3RyZWVcIikpO1xyXG52YXIgTGF5ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBMYXllcigpIHtcclxuICAgICAgICB0aGlzLm9jdHJlZSA9IG5ldyBPY3RyZWVfMS5kZWZhdWx0KDUsIG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgtMzAsIC0zMCwgLTYwKSwgbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDMwLCAzMCwgMzApKTtcclxuICAgIH1cclxuICAgIExheWVyLnByb3RvdHlwZS5SZWdpc3QgPSBmdW5jdGlvbiAoYXJnX3JlZ2lzdE9iaikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9jdHJlZS5SZWdpc3RDb2xsaXNpb25PYmooYXJnX3JlZ2lzdE9iaik7XHJcbiAgICB9O1xyXG4gICAgTGF5ZXIucHJvdG90eXBlLlVuUmVnaXN0ID0gZnVuY3Rpb24gKGFyZ19JRCkge1xyXG4gICAgICAgIHRoaXMub2N0cmVlLlVuUmVnaXN0Q29sbGlzaW9uT2JqKGFyZ19JRCk7XHJcbiAgICB9O1xyXG4gICAgTGF5ZXIucHJvdG90eXBlLkNoZWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMub2N0cmVlLlVwZGF0ZSgpO1xyXG4gICAgICAgIHZhciBsaXN0X29ialN0YWNrID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdmFyIHZlY19jb2xsaXNpb25PYmplY3RzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5vY3RyZWUuQ3JlYXRlQ29sbGlzaW9uT2JqZWN0TGlzdCgwLCB2ZWNfY29sbGlzaW9uT2JqZWN0cywgbGlzdF9vYmpTdGFjayk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh2ZWNfY29sbGlzaW9uT2JqZWN0cy5sZW5ndGgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVjX2NvbGxpc2lvbk9iamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgdmVjX2NvbGxpc2lvbk9iamVjdHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHZlY19jb2xsaXNpb25PYmplY3RzW2ldLkhpdENoZWNrKHZlY19jb2xsaXNpb25PYmplY3RzW2pdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMYXllci5wcm90b3R5cGUuUmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm9jdHJlZS5SZWxlYXNlKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExheWVyO1xyXG59KCkpO1xyXG52YXIgQ29sbGlzaW9uTWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbGxpc2lvbk1hbmFnZXIoKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmxheWVycy5wdXNoKG5ldyBMYXllcigpKTtcclxuICAgIH1cclxuICAgIENvbGxpc2lvbk1hbmFnZXIucHJvdG90eXBlLlJlZ2lzdCA9IGZ1bmN0aW9uIChhcmdfcmVnaXN0T2JqLCBsYXllcikge1xyXG4gICAgICAgIGlmICh0aGlzLmxheWVycy5sZW5ndGggPD0gbGF5ZXIpIHtcclxuICAgICAgICAgICAgbGF5ZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5sYXllcnNbbGF5ZXJdLlJlZ2lzdChhcmdfcmVnaXN0T2JqKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25NYW5hZ2VyLnByb3RvdHlwZS5VblJlZ2lzdCA9IGZ1bmN0aW9uIChhcmdfSUQsIGxheWVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGF5ZXJzLmxlbmd0aCA8PSBsYXllcikge1xyXG4gICAgICAgICAgICBsYXllciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGF5ZXJzW2xheWVyXS5VblJlZ2lzdChhcmdfSUQpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbk1hbmFnZXIucHJvdG90eXBlLkFkZExheWVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLnB1c2gobmV3IExheWVyKCkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbk1hbmFnZXIucHJvdG90eXBlLkNoZWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKGxheWVyKSB7IHJldHVybiBsYXllci5DaGVjaygpOyB9KTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25NYW5hZ2VyLnByb3RvdHlwZS5SZWxlYXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKGxheWVyKSB7IHJldHVybiBsYXllci5SZWxlYXNlKCk7IH0pO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmxlbmd0aCA9IDA7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbGxpc2lvbk1hbmFnZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENvbGxpc2lvbk1hbmFnZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDb2xsaXNpb25PYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb2xsaXNpb25PYmplY3QoYXJnX29iaiwgYXJnX3ByaW0pIHtcclxuICAgICAgICB0aGlzLnBfY2VsbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vYmplY3QgPSBhcmdfb2JqO1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uUHJpbWl0aXZlID0gYXJnX3ByaW07XHJcbiAgICB9XHJcbiAgICBDb2xsaXNpb25PYmplY3QucHJvdG90eXBlLlJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5wX2NlbGwgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnNocF9uZXh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hwX25leHQuc2hwX2JlZiA9IHRoaXMuc2hwX2JlZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2hwX2JlZikge1xyXG4gICAgICAgICAgICB0aGlzLnNocF9iZWYuc2hwX25leHQgPSB0aGlzLnNocF9uZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBfY2VsbC5PblJlbW92ZSh0aGlzKTtcclxuICAgICAgICB0aGlzLnNocF9uZXh0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNocF9iZWYgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucF9jZWxsID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25PYmplY3QucHJvdG90eXBlLlJlZ2lzdENlbGwgPSBmdW5jdGlvbiAoYXJnX3BDZWxsKSB7XHJcbiAgICAgICAgdGhpcy5wX2NlbGwgPSBhcmdfcENlbGw7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uT2JqZWN0LnByb3RvdHlwZS5HZXRCZWZPYmogPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hwX2JlZjtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25PYmplY3QucHJvdG90eXBlLkdldE5leHRPYmogPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hwX25leHQ7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uT2JqZWN0LnByb3RvdHlwZS5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb25QcmltaXRpdmUuVXBkYXRlKCk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uT2JqZWN0LnByb3RvdHlwZS5IaXRDaGVjayA9IGZ1bmN0aW9uIChhcmdfY29sbGlzaW9uT2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKGFyZ19jb2xsaXNpb25PYmplY3QuY29sbGlzaW9uUHJpbWl0aXZlLklzSGl0KHRoaXMuY29sbGlzaW9uUHJpbWl0aXZlKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5IaXQoYXJnX2NvbGxpc2lvbk9iamVjdC5vYmplY3QpO1xyXG4gICAgICAgICAgICBhcmdfY29sbGlzaW9uT2JqZWN0Lm9iamVjdC5IaXQodGhpcy5vYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29sbGlzaW9uT2JqZWN0O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDb2xsaXNpb25PYmplY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBPY3RDZWxsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gT2N0Q2VsbCgpIHtcclxuICAgIH1cclxuICAgIE9jdENlbGwucHJvdG90eXBlLlJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuc2hwX2hlYWQgIT0gbnVsbCAmJiB0aGlzLnNocF9oZWFkLnNocF9uZXh0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zaHBfaGVhZCA9IHRoaXMuc2hwX2hlYWQuc2hwX25leHQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2hwX2hlYWQuc2hwX2JlZiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hwX2hlYWQgPSBudWxsO1xyXG4gICAgfTtcclxuICAgIE9jdENlbGwucHJvdG90eXBlLlJlZ2lzdE9iamVjdCA9IGZ1bmN0aW9uIChhcmdfb2JqKSB7XHJcbiAgICAgICAgaWYgKGFyZ19vYmoucF9jZWxsID09IHRoaXMgfHwgKGFyZ19vYmogPT0gbnVsbCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBhcmdfb2JqLlJlbW92ZSgpO1xyXG4gICAgICAgIGFyZ19vYmoucF9jZWxsID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5zaHBfaGVhZCkge1xyXG4gICAgICAgICAgICBhcmdfb2JqLnNocF9uZXh0ID0gdGhpcy5zaHBfaGVhZDtcclxuICAgICAgICAgICAgdGhpcy5zaHBfaGVhZC5zaHBfYmVmID0gYXJnX29iajtcclxuICAgICAgICAgICAgdGhpcy5zaHBfaGVhZCA9IGFyZ19vYmo7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hwX2hlYWQgPSBhcmdfb2JqO1xyXG4gICAgfTtcclxuICAgIE9jdENlbGwucHJvdG90eXBlLk9uUmVtb3ZlID0gZnVuY3Rpb24gKGFyZ19yZW1vdmUpIHtcclxuICAgICAgICBpZiAoKHRoaXMuc2hwX2hlYWQgPT0gYXJnX3JlbW92ZSkgJiYgYXJnX3JlbW92ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNocF9oZWFkID0gdGhpcy5zaHBfaGVhZC5zaHBfbmV4dDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgT2N0Q2VsbC5wcm90b3R5cGUuR2V0SGVhZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaHBfaGVhZDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gT2N0Q2VsbDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gT2N0Q2VsbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFZlY3RvcjNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vTWF0aC9WZWN0b3IzXCIpKTtcclxudmFyIElEXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL0lEXCIpKTtcclxudmFyIE9jdENlbGxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9PY3RDZWxsXCIpKTtcclxudmFyIE1heExldmVsID0gNztcclxudmFyIExFVkVMX0ZMQUcgPSBbKDExMSA8PCAwKSwgKDExMSA8PCAzKSwgKDExMSA8PCA2KSwgKDExMSA8PCA5KSwgKDExMSA8PCAxMiksICgxMTEgPDwgMTUpLCAoMTExIDw8IDE4KSwgKDExMSA8PCAyMSksICgxMTEgPDwgMjQpLCAoMTExIDw8IDI3KSxdO1xyXG52YXIgT2N0cmVlSGVscGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gT2N0cmVlSGVscGVyKCkge1xyXG4gICAgfVxyXG4gICAgT2N0cmVlSGVscGVyLkJpdFNlcGFyYXRlID0gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICB2YXIgcyA9IG47XHJcbiAgICAgICAgcyA9IChzIHwgcyA8PCA4KSAmIDB4MDAwMGYwMGY7XHJcbiAgICAgICAgcyA9IChzIHwgcyA8PCA0KSAmIDB4MDAwYzMwYzM7XHJcbiAgICAgICAgcyA9IChzIHwgcyA8PCAyKSAmIDB4MDAyNDkyNDk7XHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9O1xyXG4gICAgT2N0cmVlSGVscGVyLkdldExldmVsID0gZnVuY3Rpb24gKGFyZ19mbGFnLCBhcmdfbGV2ZWwpIHtcclxuICAgICAgICB2YXIgb3V0ID0gMTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ19sZXZlbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBDaGVjayA9IChhcmdfZmxhZyA+PiAoaSAqIDMpKSAmIDB4NztcclxuICAgICAgICAgICAgaWYgKENoZWNrICE9IDApXHJcbiAgICAgICAgICAgICAgICBvdXQgPSBpICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gT2N0cmVlSGVscGVyO1xyXG59KCkpO1xyXG47XHJcbnZhciBDb2xsaXNpb25MYXllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbGxpc2lvbkxheWVyKGFyZ19sZXZlbCwgYXJnX21pblBvcywgYXJnX21heFBvcykge1xyXG4gICAgICAgIHRoaXMuT2N0UG93ID0gQXJyYXkoTWF4TGV2ZWwgKyAxKTtcclxuICAgICAgICB0aGlzLk9jdFBvd1NldmVuRGV2aWRlZCA9IEFycmF5KE1heExldmVsICsgMSk7XHJcbiAgICAgICAgaWYgKGFyZ19sZXZlbCA8PSBNYXhMZXZlbClcclxuICAgICAgICAgICAgdGhpcy5tYXhMZXZlbCA9IGFyZ19sZXZlbDtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYXhMZXZlbCA9IE1heExldmVsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJhbmdlTWF4ID0gYXJnX21heFBvcztcclxuICAgICAgICB0aGlzLnJhbmdlTWluID0gYXJnX21pblBvcztcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5yYW5nZU1heC5TdWIodGhpcy5yYW5nZU1pbik7XHJcbiAgICAgICAgdGhpcy5PY3RQb3dbMF0gPSAxO1xyXG4gICAgICAgIHRoaXMuT2N0UG93U2V2ZW5EZXZpZGVkWzBdID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IE1heExldmVsICsgMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuT2N0UG93W2ldID0gdGhpcy5PY3RQb3dbaSAtIDFdICogODtcclxuICAgICAgICAgICAgdGhpcy5PY3RQb3dTZXZlbkRldmlkZWRbaV0gPSAodGhpcy5PY3RQb3dbaV0gLSAxKSAvIDc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWF4Q2VsbE51bSA9IHRoaXMuT2N0UG93U2V2ZW5EZXZpZGVkW01heExldmVsIC0gMV07XHJcbiAgICAgICAgdGhpcy51bml0ID0gdGhpcy53aWR0aC5EaXYoKDEgPDwgdGhpcy5tYXhMZXZlbCkpO1xyXG4gICAgICAgIHRoaXMuYXJ5X2NlbGxzID0gbmV3IEFycmF5KHRoaXMubWF4Q2VsbE51bSk7XHJcbiAgICAgICAgdGhpcy5DcmVhdGVDZWxsKDApO1xyXG4gICAgICAgIHRoaXMudmVjX3NocF9jb2xsaXNpb25PYmpzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy52ZWNfaW5kZXggPSBuZXcgQXJyYXkoKTtcclxuICAgIH1cclxuICAgIENvbGxpc2lvbkxheWVyLnByb3RvdHlwZS5SZWxlYXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudmVjX3NocF9jb2xsaXNpb25PYmpzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy52ZWNfaW5kZXgubGVuZ3RoID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWF4Q2VsbE51bTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFyeV9jZWxsc1tpXSlcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJ5X2NlbGxzW2ldLlJlbGVhc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcnlfY2VsbHMubGVuZ3RoID0gMDtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25MYXllci5wcm90b3R5cGUuUmVnaXN0Q29sbGlzaW9uT2JqID0gZnVuY3Rpb24gKGFyZ19jb2xsaXNpb25PYmopIHtcclxuICAgICAgICB2YXIgaWQgPSBuZXcgSURfMS5kZWZhdWx0KHRoaXMudmVjX3NocF9jb2xsaXNpb25PYmpzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIHRoaXMudmVjX3NocF9jb2xsaXNpb25PYmpzLnB1c2goYXJnX2NvbGxpc2lvbk9iaik7XHJcbiAgICAgICAgdGhpcy52ZWNfaW5kZXgucHVzaChpZCk7XHJcbiAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbkxheWVyLnByb3RvdHlwZS5VblJlZ2lzdENvbGxpc2lvbk9iaiA9IGZ1bmN0aW9uIChhcmdfaW5kZXgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSBhcmdfaW5kZXgubnVtO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSB0aGlzLnZlY19zaHBfY29sbGlzaW9uT2Jqcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZlY19zaHBfY29sbGlzaW9uT2Jqc1tpbmRleF0uUmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy52ZWNfc2hwX2NvbGxpc2lvbk9ianMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLnZlY19pbmRleC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBpbmRleCAtIDE7IGkgPCB0aGlzLnZlY19pbmRleC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZlY19pbmRleFtpXS5udW0tLTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uTGF5ZXIucHJvdG90eXBlLkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uTGF5ZXIucHJvdG90eXBlLlVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLlJlZ2lzdE9jdHJlZSgpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbkxheWVyLnByb3RvdHlwZS5SZWdpc3RPY3RyZWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaXRyID0gMDsgaXRyIDwgdGhpcy52ZWNfc2hwX2NvbGxpc2lvbk9ianMubGVuZ3RoOyBpdHIrKykge1xyXG4gICAgICAgICAgICB2YXIgbWluUG9pbnQgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgMCksIG1heFBvaW50ID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnZlY19zaHBfY29sbGlzaW9uT2Jqc1tpdHJdLmNvbGxpc2lvblByaW1pdGl2ZS5HZXRNYXhQb2ludEFuZE1pblBvaW50KG1heFBvaW50LCBtaW5Qb2ludCk7XHJcbiAgICAgICAgICAgIHZhciBjZWxsTnVtID0gdGhpcy5HZXRNb3J0b25TcGFjZShtaW5Qb2ludCwgbWF4UG9pbnQpO1xyXG4gICAgICAgICAgICBpZiAoY2VsbE51bSA+IHRoaXMubWF4Q2VsbE51bSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmFyeV9jZWxsc1tjZWxsTnVtXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5DcmVhdGVDZWxsKGNlbGxOdW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYXJ5X2NlbGxzW2NlbGxOdW1dLlJlZ2lzdE9iamVjdCh0aGlzLnZlY19zaHBfY29sbGlzaW9uT2Jqc1tpdHJdKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uTGF5ZXIucHJvdG90eXBlLkdldDNETW9ydG9uTnVtYmVyID0gZnVuY3Rpb24gKHgsIHksIHopIHtcclxuICAgICAgICByZXR1cm4gT2N0cmVlSGVscGVyLkJpdFNlcGFyYXRlKHgpIHwgT2N0cmVlSGVscGVyLkJpdFNlcGFyYXRlKHkpIDw8IDEgfCBPY3RyZWVIZWxwZXIuQml0U2VwYXJhdGUoeikgPDwgMjtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25MYXllci5wcm90b3R5cGUuR2V0M0RNb3J0b25OdW1iZXJfVmVjMyA9IGZ1bmN0aW9uIChhcmdfcG9zaXRpb24pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5HZXQzRE1vcnRvbk51bWJlcigoKGFyZ19wb3NpdGlvbi54IC0gdGhpcy5yYW5nZU1pbi54KSAvIHRoaXMudW5pdC54KSwgKChhcmdfcG9zaXRpb24ueSAtIHRoaXMucmFuZ2VNaW4ueSkgLyB0aGlzLnVuaXQueSksICgoYXJnX3Bvc2l0aW9uLnogLSB0aGlzLnJhbmdlTWluLnopIC8gdGhpcy51bml0LnopKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25MYXllci5wcm90b3R5cGUuR2V0TW9ydG9uU3BhY2UgPSBmdW5jdGlvbiAoYXJnX21pblBvcywgYXJnX21heFBvcykge1xyXG4gICAgICAgIHZhciBtYXhTcGFjZSA9IHRoaXMuR2V0M0RNb3J0b25OdW1iZXJfVmVjMyhhcmdfbWF4UG9zKTtcclxuICAgICAgICB2YXIgbGV2ZWxDaGVja0ZsYWcgPSB0aGlzLkdldDNETW9ydG9uTnVtYmVyX1ZlYzMoYXJnX21pblBvcykgXiBtYXhTcGFjZTtcclxuICAgICAgICB2YXIgbGV2ZWwgPSBPY3RyZWVIZWxwZXIuR2V0TGV2ZWwobGV2ZWxDaGVja0ZsYWcsIHRoaXMubWF4TGV2ZWwpO1xyXG4gICAgICAgIHZhciBudW0gPSAobWF4U3BhY2UgPj4gKChsZXZlbCkgKiAzKSk7XHJcbiAgICAgICAgbnVtICs9IHRoaXMuT2N0UG93U2V2ZW5EZXZpZGVkW3RoaXMubWF4TGV2ZWwgLSBsZXZlbF07XHJcbiAgICAgICAgcmV0dXJuIG51bTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25MYXllci5wcm90b3R5cGUuQ3JlYXRlQ29sbGlzaW9uT2JqZWN0TGlzdCA9IGZ1bmN0aW9uIChhcmdfY2VsbE51bSwgYXJnX291dHB1dCwgYXJnX3N0YWNrKSB7XHJcbiAgICAgICAgdmFyIG9iakl0ciA9IHRoaXMuYXJ5X2NlbGxzW2FyZ19jZWxsTnVtXS5HZXRIZWFkKCk7XHJcbiAgICAgICAgd2hpbGUgKG9iakl0ciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhciByT2JqSXRyID0gb2JqSXRyLnNocF9uZXh0O1xyXG4gICAgICAgICAgICB3aGlsZSAock9iakl0ciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDooZ3nqoHjg6rjgrnjg4jkvZzmiJBcclxuICAgICAgICAgICAgICAgIGFyZ19vdXRwdXQucHVzaChvYmpJdHIpO1xyXG4gICAgICAgICAgICAgICAgYXJnX291dHB1dC5wdXNoKHJPYmpJdHIpO1xyXG4gICAgICAgICAgICAgICAgck9iakl0ciA9IHJPYmpJdHIuc2hwX25leHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g4pGhIOihneeqgeOCueOCv+ODg+OCr+OBqOOBruihneeqgeODquOCueODiOS9nOaIkFxyXG4gICAgICAgICAgICBmb3IgKHZhciBpdHIgPSAwOyBpdHIgPCBhcmdfc3RhY2subGVuZ3RoOyBpdHIrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnX291dHB1dC5wdXNoKG9iakl0cik7XHJcbiAgICAgICAgICAgICAgICBhcmdfb3V0cHV0LnB1c2goYXJnX3N0YWNrW2l0cl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9iakl0ciA9IG9iakl0ci5zaHBfbmV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIENoaWxkRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIC8vIOKRoiDlrZDnqbrplpPjgavnp7vli5VcclxuICAgICAgICB2YXIgT2JqTnVtID0gMDtcclxuICAgICAgICB2YXIgaSwgbmV4dENlbGxOdW07XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICBuZXh0Q2VsbE51bSA9IGFyZ19jZWxsTnVtICogOCArIDEgKyBpO1xyXG4gICAgICAgICAgICBpZiAobmV4dENlbGxOdW0gPCB0aGlzLm1heENlbGxOdW0gJiYgdGhpcy5hcnlfY2VsbHNbYXJnX2NlbGxOdW0gKiA4ICsgMSArIGldKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUNoaWxkRmxhZykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iakl0ciA9IHRoaXMuYXJ5X2NlbGxzW2FyZ19jZWxsTnVtXS5HZXRIZWFkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG9iakl0cikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdfc3RhY2sucHVzaChvYmpJdHIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmpOdW0rKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqSXRyID0gb2JqSXRyLnNocF9uZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIENoaWxkRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNyZWF0ZUNvbGxpc2lvbk9iamVjdExpc3QoYXJnX2NlbGxOdW0gKiA4ICsgMSArIGksIGFyZ19vdXRwdXQsIGFyZ19zdGFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g4pGkIOOCueOCv+ODg+OCr+OBi+OCieOCquODluOCuOOCp+OCr+ODiOOCkuWkluOBmVxyXG4gICAgICAgIGlmIChDaGlsZEZsYWcpIHtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IE9iak51bTsgaSsrKVxyXG4gICAgICAgICAgICAgICAgYXJnX3N0YWNrLnBvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25MYXllci5wcm90b3R5cGUuQ3JlYXRlQ2VsbCA9IGZ1bmN0aW9uIChhcmdfY2VsbE51bSkge1xyXG4gICAgICAgIHdoaWxlICghdGhpcy5hcnlfY2VsbHNbYXJnX2NlbGxOdW1dKSB7XHJcbiAgICAgICAgICAgIC8vIOaMh+WumuOBruimgee0oOeVquWPt+OBq+epuumWk+OCkuaWsOimj+S9nOaIkFxyXG4gICAgICAgICAgICB0aGlzLmFyeV9jZWxsc1thcmdfY2VsbE51bV0gPSBuZXcgT2N0Q2VsbF8xLmRlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy8g6Kaq56m66ZaT44Gr44K444Oj44Oz44OXXHJcbiAgICAgICAgICAgIGFyZ19jZWxsTnVtID0gKGFyZ19jZWxsTnVtIC0gMSkgPj4gMztcclxuICAgICAgICAgICAgaWYgKGFyZ19jZWxsTnVtID49IHRoaXMubWF4Q2VsbE51bSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29sbGlzaW9uTGF5ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENvbGxpc2lvbkxheWVyO1xyXG47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBHYW1lVGltZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWVUaW1lKCkge1xyXG4gICAgICAgIHRoaXMudGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHRoaXMuYWJzRnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMucmVsRnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMudGltZVBhc2UgPSAxLjA7XHJcbiAgICB9XHJcbiAgICBHYW1lVGltZS5wcm90b3R5cGUuQ291bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hYnNGcmFtZSsrO1xyXG4gICAgICAgIHRoaXMucmVsRnJhbWUgKz0gdGhpcy50aW1lUGFzZTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZVRpbWUucHJvdG90eXBlLCBcImVsYXBzZWRUaW1lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGltZSAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lVGltZS5wcm90b3R5cGUsIFwiQWJzb2x1dGVGcmFtZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFic0ZyYW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lVGltZS5wcm90b3R5cGUsIFwiUmVsYXRpdmVGcmFtZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbEZyYW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lVGltZS5wcm90b3R5cGUsIFwiVGltZVBhc2VcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aW1lUGFzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGFyZ190aW1lUGFzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVQYXNlID0gYXJnX3RpbWVQYXNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBHYW1lVGltZTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZVRpbWU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBJRCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIElEKGFyZ19udW0pIHtcclxuICAgICAgICB0aGlzLm51bSA9IGFyZ19udW07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSUQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IElEO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgTW9kZWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vR3JhcGhpYy9Nb2RlbFwiKSk7XHJcbnZhciBSZXNvdXJjZUNyZWF0ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVG9vbC9SZXNvdXJjZUNyZWF0ZXJcIikpO1xyXG52YXIgR2VvbWV0cnlHZW5lcmF0b3JfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVG9vbC9HZW9tZXRyeUdlbmVyYXRvclwiKSk7XHJcbnZhciBUZXh0TW9kZWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vR3JhcGhpYy9UZXh0TW9kZWxcIikpO1xyXG52YXIgQ2hhck1hcCA9IG5ldyBNYXAoW1xyXG4gICAgW1wiIFwiLCAwXSwgW1wiIVwiLCAxXSwgWydcIicsIDJdLCBbXCIjXCIsIDNdLCBbXCIkXCIsIDRdLCBbXCIlXCIsIDVdLCBbXCImXCIsIDZdLCBbXCInXCIsIDddLCBbXCIoXCIsIDhdLCBbXCIpXCIsIDldLFxyXG4gICAgW1wiKlwiLCAxMF0sIFtcIitcIiwgMTFdLCBbJywnLCAxMl0sIFtcIi1cIiwgMTNdLCBbXCIuXCIsIDE0XSwgW1wiL1wiLCAxNV0sIFtcIjBcIiwgMTZdLCBbXCIxXCIsIDE3XSwgW1wiMlwiLCAxOF0sIFtcIjNcIiwgMTldLFxyXG4gICAgW1wiNFwiLCAyMF0sIFtcIjVcIiwgMjFdLCBbJzYnLCAyMl0sIFtcIjdcIiwgMjNdLCBbXCI4XCIsIDI0XSwgW1wiOVwiLCAyNV0sIFtcIjpcIiwgMjZdLCBbXCI7XCIsIDI3XSwgW1wiPFwiLCAyOF0sIFtcIj1cIiwgMjldLFxyXG4gICAgW1wiPlwiLCAzMF0sIFtcIj9cIiwgMzFdLCBbJ0AnLCAzMl0sIFtcIkFcIiwgMzNdLCBbXCJCXCIsIDM0XSwgW1wiQ1wiLCAzNV0sIFtcIkRcIiwgMzZdLCBbXCJFXCIsIDM3XSwgW1wiRlwiLCAzOF0sIFtcIkdcIiwgMzldLFxyXG4gICAgW1wiSFwiLCA0MF0sIFtcIklcIiwgNDFdLCBbJ0onLCA0Ml0sIFtcIktcIiwgNDNdLCBbXCJMXCIsIDQ0XSwgW1wiTVwiLCA0NV0sIFtcIk5cIiwgNDZdLCBbXCJPXCIsIDQ3XSwgW1wiUFwiLCA0OF0sIFtcIlFcIiwgNDldLFxyXG4gICAgW1wiUlwiLCA1MF0sIFtcIlNcIiwgNTFdLCBbJ1QnLCA1Ml0sIFtcIlVcIiwgNTNdLCBbXCJWXCIsIDU0XSwgW1wiV1wiLCA1NV0sIFtcIlhcIiwgNTZdLCBbXCJZXCIsIDU3XSwgW1wiWlwiLCA1OF0sIFtcIltcIiwgNTldLFxyXG4gICAgW1wiXFxcXFwiLCA2MF0sIFtcIl1cIiwgNjFdLCBbJ14nLCA2Ml0sIFtcIl9cIiwgNjNdLCBbXCJgXCIsIDY0XSwgW1wiYVwiLCA2NV0sIFtcImJcIiwgNjZdLCBbXCJjXCIsIDY3XSwgW1wiZFwiLCA2OF0sIFtcImVcIiwgNjldLFxyXG4gICAgW1wiZlwiLCA3MF0sIFtcImdcIiwgNzFdLCBbJ2gnLCA3Ml0sIFtcImlcIiwgNzNdLCBbXCJqXCIsIDc0XSwgW1wia1wiLCA3NV0sIFtcImxcIiwgNzZdLCBbXCJtXCIsIDc3XSwgW1wiblwiLCA3OF0sIFtcIm9cIiwgNzldLFxyXG4gICAgW1wicFwiLCA4MF0sIFtcInFcIiwgODFdLCBbJ3InLCA4Ml0sIFtcInNcIiwgODNdLCBbXCJ0XCIsIDg0XSwgW1widVwiLCA4NV0sIFtcInZcIiwgODZdLCBbXCJ3XCIsIDg3XSwgW1wieFwiLCA4OF0sIFtcInlcIiwgODldLFxyXG4gICAgW1wielwiLCA5MF0sIFtcIntcIiwgOTldLCBbJ3wnLCA5Ml0sIFtcIn1cIiwgOTNdLCBbXCJ+XCIsIDk0XSxcclxuXSk7XHJcbmZ1bmN0aW9uIENoYXJDaGFuZ2UoYXJnX25hbWUpIHtcclxuICAgIHJldHVybiBDaGFyTWFwLmdldChhcmdfbmFtZSk7XHJcbn1cclxudmFyIE1vZGVsQ3JlYXRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1vZGVsQ3JlYXRlcihhcmdfZ2FyYXBoaWNEZXZpY2UsIGFyZ19yZXNvdXJjZUNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2VDb250YWluZXIgPSBhcmdfcmVzb3VyY2VDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlID0gYXJnX2dhcmFwaGljRGV2aWNlO1xyXG4gICAgICAgIHRoaXMuZm9udFVWQ29udGFpbmVyID0gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG4gICAgTW9kZWxDcmVhdGVyLnByb3RvdHlwZS5DcmVhdGVNb2RlbCA9IGZ1bmN0aW9uIChpc0xpZ2h0aW5nLCBpc0JpbGxCb2FyZCwgZ2VvbWV0cnlQYXRoLCBtYXRlcmlhbFBhdGgsIHNoYWRlclBhdGgsIGFyZ190cmFuc2Zvcm0pIHtcclxuICAgICAgICB2YXIgbW9kZWwgPSBuZXcgTW9kZWxfMS5kZWZhdWx0KGlzTGlnaHRpbmcsIGlzQmlsbEJvYXJkKTtcclxuICAgICAgICBtb2RlbC5Jbml0aWFsaXplX2dlb20odGhpcy5ncmFwaGljRGV2aWNlLCB0aGlzLnJlc291cmNlQ29udGFpbmVyLkdldEdlb21ldHJ5KGdlb21ldHJ5UGF0aCksIHRoaXMucmVzb3VyY2VDb250YWluZXIuR2V0TWF0ZXJpYWwobWF0ZXJpYWxQYXRoKSwgdGhpcy5yZXNvdXJjZUNvbnRhaW5lci5HZXRTaGFkZXIoc2hhZGVyUGF0aCksIGFyZ190cmFuc2Zvcm0pO1xyXG4gICAgICAgIHJldHVybiBtb2RlbDtcclxuICAgIH07XHJcbiAgICBNb2RlbENyZWF0ZXIucHJvdG90eXBlLkNyZWF0ZU1vZGVsRnJvbU1lc2ggPSBmdW5jdGlvbiAoaXNMaWdodGluZywgaXNCaWxsQm9hcmQsIG1lc2hQYXRoLCBzaGFkZXJQYXRoLCBhcmdfdHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdmFyIG1vZGVsID0gbmV3IE1vZGVsXzEuZGVmYXVsdChpc0xpZ2h0aW5nLCBpc0JpbGxCb2FyZCk7XHJcbiAgICAgICAgbW9kZWwuSW5pdGlhbGl6ZV9tZXNoKHRoaXMuZ3JhcGhpY0RldmljZSwgdGhpcy5yZXNvdXJjZUNvbnRhaW5lci5HZXRNZXNoKG1lc2hQYXRoKSwgdGhpcy5yZXNvdXJjZUNvbnRhaW5lci5HZXRTaGFkZXIoc2hhZGVyUGF0aCksIGFyZ190cmFuc2Zvcm0pO1xyXG4gICAgICAgIHJldHVybiBtb2RlbDtcclxuICAgIH07XHJcbiAgICBNb2RlbENyZWF0ZXIucHJvdG90eXBlLkNyZWF0ZU1vZGVsRnJvbVRleHQgPSBmdW5jdGlvbiAoaXNCaWxsQm9hcmQsIGFyZ19jb2xvciwgdGV4dCwgZm9udFRleHR1cmVQYXRoLCBzaGFkZXJQYXRoLCBhcmdfdHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdmFyIG1vZGVsID0gbmV3IFRleHRNb2RlbF8xLmRlZmF1bHQoaXNCaWxsQm9hcmQpO1xyXG4gICAgICAgIHZhciBtYXRlcmlhbE5hbWUgPSBhcmdfY29sb3IuZGF0YVswXSArIFwiXCIgKyBhcmdfY29sb3IuZGF0YVsxXSArIFwiXCIgKyBhcmdfY29sb3IuZGF0YVsyXSArIFwiXCIgKyBhcmdfY29sb3IuZGF0YVszXSArIFwiXCIgKyBmb250VGV4dHVyZVBhdGg7XHJcbiAgICAgICAgdmFyIG1hdGVyaWFsID0gdGhpcy5yZXNvdXJjZUNvbnRhaW5lci5HZXRNYXRlcmlhbChtYXRlcmlhbE5hbWUpO1xyXG4gICAgICAgIGlmIChtYXRlcmlhbCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsID0gdGhpcy5yZXNvdXJjZUNvbnRhaW5lci5BZGRNYXRlcmlhbChSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZU1hdGVyaWFsKGFyZ19jb2xvciwgdGhpcy5ncmFwaGljRGV2aWNlLCBbdGhpcy5yZXNvdXJjZUNvbnRhaW5lci5HZXRUZXh0dXJlKGZvbnRUZXh0dXJlUGF0aCldKSwgbWF0ZXJpYWxOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGdlb21ldHJ5UGF0aCA9IFwiVGV4dDpcIiArIHRleHQubGVuZ3RoO1xyXG4gICAgICAgIHZhciBnZW9tZXRyeSA9IHRoaXMucmVzb3VyY2VDb250YWluZXIuR2V0R2VvbWV0cnkoZ2VvbWV0cnlQYXRoKTtcclxuICAgICAgICBpZiAoZ2VvbWV0cnkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBnZW9tZXRyeSA9IHRoaXMucmVzb3VyY2VDb250YWluZXIuQWRkR2VvbWV0cnkoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVHZW9tZXRyeShHZW9tZXRyeUdlbmVyYXRvcl8xLmRlZmF1bHQuQ3JlYXRlVGV4dEdlb21ldHJ5KHRleHQubGVuZ3RoKSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpLCBnZW9tZXRyeVBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtb2RlbC5Jbml0aWFsaXplX2dlb20odGhpcy5ncmFwaGljRGV2aWNlLCBnZW9tZXRyeSwgbWF0ZXJpYWwsIHRoaXMucmVzb3VyY2VDb250YWluZXIuR2V0U2hhZGVyKHNoYWRlclBhdGgpLCBhcmdfdHJhbnNmb3JtKTtcclxuICAgICAgICB2YXIgdXYgPSB0aGlzLmZvbnRVVkNvbnRhaW5lclt0ZXh0XTtcclxuICAgICAgICBpZiAoIXV2KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlOlwiICsgdGV4dCk7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIHZhciB4VW5pdCA9ICgxLjAgLyAxMjguMCkgKiA3O1xyXG4gICAgICAgICAgICB2YXIgeVVuaXQgPSAxLjAgLyAxNC4wO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBudW0gPSBDaGFyQ2hhbmdlKHRleHRbaV0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSBudW0gJSAxODtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gTWF0aC5mbG9vcihudW0gLyAxOCk7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goeCAqIHhVbml0LCAoeSArIDEpICogeVVuaXQsICh4ICsgMSkgKiB4VW5pdCwgKHkgKyAxKSAqIHlVbml0LCB4ICogeFVuaXQsIHkgKiB5VW5pdCwgKHggKyAxKSAqIHhVbml0LCB5ICogeVVuaXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHV2ID0gdGhpcy5ncmFwaGljRGV2aWNlLkNyZWF0ZVZCTyhkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5mb250VVZDb250YWluZXJbdGV4dF0gPSB1djtcclxuICAgICAgICB9XHJcbiAgICAgICAgbW9kZWwuU2V0VVZEYXRhKHV2KTtcclxuICAgICAgICByZXR1cm4gbW9kZWw7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1vZGVsQ3JlYXRlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gTW9kZWxDcmVhdGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgSURfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9JRFwiKSk7XHJcbnZhciBMYXllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExheWVyKCkge1xyXG4gICAgICAgIHRoaXMuYXJ5X0lEcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuYXJ5X0lNb2RlbHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmFyeV9saWdodHMgPSBuZXcgQXJyYXkoKTtcclxuICAgIH1cclxuICAgIExheWVyLnByb3RvdHlwZS5TZXRMaWdodCA9IGZ1bmN0aW9uIChhcmdfbGlnaHQpIHtcclxuICAgICAgICB0aGlzLmFyeV9saWdodHMucHVzaChhcmdfbGlnaHQpO1xyXG4gICAgICAgIHJldHVybiBhcmdfbGlnaHQ7XHJcbiAgICB9O1xyXG4gICAgTGF5ZXIucHJvdG90eXBlLlJlZ2lzdCA9IGZ1bmN0aW9uIChhcmdfcmVnaXN0T2JqKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJ5X2xpZ2h0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGFyZ19yZWdpc3RPYmouU2V0TGlnaHQodGhpcy5hcnlfbGlnaHRzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcnlfSU1vZGVscy5wdXNoKGFyZ19yZWdpc3RPYmopO1xyXG4gICAgICAgIHZhciBpZCA9IG5ldyBJRF8xLmRlZmF1bHQodGhpcy5hcnlfSU1vZGVscy5sZW5ndGggLSAxKTtcclxuICAgICAgICB0aGlzLmFyeV9JRHMucHVzaChpZCk7XHJcbiAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgfTtcclxuICAgIExheWVyLnByb3RvdHlwZS5VblJlZ2lzdCA9IGZ1bmN0aW9uIChhcmdfSUQpIHtcclxuICAgICAgICB0aGlzLmFyeV9JTW9kZWxzLnNwbGljZShhcmdfSUQubnVtLCAxKTtcclxuICAgICAgICB0aGlzLmFyeV9JRHMuc3BsaWNlKGFyZ19JRC5udW0sIDEpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBhcmdfSUQubnVtIC0gMTsgaSA8IHRoaXMuYXJ5X0lEcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFyeV9JRHNbaV0ubnVtLS07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIExheWVyLnByb3RvdHlwZS5EcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYXJ5X0lNb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAoaW1vZGVsKSB7IHJldHVybiBpbW9kZWwuRHJhdygpOyB9KTtcclxuICAgIH07XHJcbiAgICBMYXllci5wcm90b3R5cGUuUmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFyeV9JRHMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmFyeV9JTW9kZWxzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5hcnlfbGlnaHRzLmxlbmd0aCA9IDA7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExheWVyO1xyXG59KCkpO1xyXG52YXIgUmVuZGVyZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZW5kZXJlcigpIHtcclxuICAgICAgICB0aGlzLmxheWVycyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLnB1c2gobmV3IExheWVyKCkpO1xyXG4gICAgfVxyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLlJlZ2lzdCA9IGZ1bmN0aW9uIChhcmdfcmVnaXN0T2JqLCBsYXllcikge1xyXG4gICAgICAgIGlmICh0aGlzLmxheWVycy5sZW5ndGggPD0gbGF5ZXIpIHtcclxuICAgICAgICAgICAgbGF5ZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5sYXllcnNbbGF5ZXJdLlJlZ2lzdChhcmdfcmVnaXN0T2JqKTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuVW5SZWdpc3QgPSBmdW5jdGlvbiAoYXJnX0lELCBsYXllcikge1xyXG4gICAgICAgIGlmICh0aGlzLmxheWVycy5sZW5ndGggPD0gbGF5ZXIpIHtcclxuICAgICAgICAgICAgbGF5ZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxheWVyc1tsYXllcl0uVW5SZWdpc3QoYXJnX0lEKTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuU2V0TGlnaHQgPSBmdW5jdGlvbiAoYXJnX2xpZ2h0LCBsYXllcikge1xyXG4gICAgICAgIGlmICh0aGlzLmxheWVycy5sZW5ndGggPD0gbGF5ZXIpIHtcclxuICAgICAgICAgICAgbGF5ZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5sYXllcnNbbGF5ZXJdLlNldExpZ2h0KGFyZ19saWdodCk7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLkFkZExheWVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLnB1c2gobmV3IExheWVyKCkpO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5EcmF3ID0gZnVuY3Rpb24gKGNhbWVyYSkge1xyXG4gICAgICAgIGlmICh0aGlzLmxheWVycy5sZW5ndGggPD0gY2FtZXJhLmxheWVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FtZXJhLkF0dGFjaCgpO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzW2NhbWVyYS5sYXllcl0uRHJhdygpO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5SZWxlYXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKGxheWVyKSB7IHJldHVybiBsYXllci5SZWxlYXNlKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZW5kZXJlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUmVuZGVyZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBSZXNvdXJjZUNyZWF0ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVG9vbC9SZXNvdXJjZUNyZWF0ZXJcIikpO1xyXG52YXIgUmVzb3VyY2VDb250YWluZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZXNvdXJjZUNvbnRhaW5lcigpIHtcclxuICAgICAgICB0aGlzLmlHZW9tZXRyaWVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuaU1hdGVyaWFscyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmlTaGFkZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuaVNvdW5kcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmlUZXh0dXJlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmlNZXNoZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nT2JqZWN0Q291bnQgPSAwO1xyXG4gICAgfVxyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLkdldFNoYWRlciA9IGZ1bmN0aW9uIChhcmdfa2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaVNoYWRlcnNbYXJnX2tleV0pXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlTaGFkZXJzW2FyZ19rZXldO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJrZXkgaXMgbm90IGZvbmQuXCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5BZGRTaGFkZXIgPSBmdW5jdGlvbiAoYXJnX3ZhbHVlLCBhcmdfa2V5KSB7XHJcbiAgICAgICAgdGhpcy5pU2hhZGVyc1thcmdfa2V5XSA9IGFyZ192YWx1ZTtcclxuICAgICAgICByZXR1cm4gYXJnX3ZhbHVlO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5SZW1vdmVTaGFkZXIgPSBmdW5jdGlvbiAoYXJnX2tleSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmlTaGFkZXJzW2FyZ19rZXldO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5HZXRUZXh0dXJlID0gZnVuY3Rpb24gKGFyZ19rZXkpIHtcclxuICAgICAgICBpZiAodGhpcy5pVGV4dHVyZXNbYXJnX2tleV0pXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlUZXh0dXJlc1thcmdfa2V5XTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5BZGRUZXh0dXJlID0gZnVuY3Rpb24gKGFyZ192YWx1ZSwgYXJnX2tleSkge1xyXG4gICAgICAgIHRoaXMuaVRleHR1cmVzW2FyZ19rZXldID0gYXJnX3ZhbHVlO1xyXG4gICAgICAgIGFyZ192YWx1ZS5TZXRDb250YWluZXIodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIGFyZ192YWx1ZTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuQWRkVGV4dHVyZUZyb21GaWxlID0gZnVuY3Rpb24gKGFyZ192YWx1ZSwgYXJnX2RldmljZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlUZXh0dXJlc1thcmdfdmFsdWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlUZXh0dXJlc1thcmdfdmFsdWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdGV4ID0gUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVUZXh0dXJlKGFyZ192YWx1ZSwgYXJnX2RldmljZSk7XHJcbiAgICAgICAgdGV4LlNldENvbnRhaW5lcih0aGlzKTtcclxuICAgICAgICB0aGlzLmlUZXh0dXJlc1thcmdfdmFsdWVdID0gdGV4O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlUZXh0dXJlc1thcmdfdmFsdWVdO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5SZW1vdmVUZXh0dXJlID0gZnVuY3Rpb24gKGFyZ19rZXkpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5pVGV4dHVyZXNbYXJnX2tleV07XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLkdldE1hdGVyaWFsID0gZnVuY3Rpb24gKGFyZ19rZXkpIHtcclxuICAgICAgICBpZiAodGhpcy5pTWF0ZXJpYWxzW2FyZ19rZXldKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pTWF0ZXJpYWxzW2FyZ19rZXldO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLkFkZE1hdGVyaWFsID0gZnVuY3Rpb24gKGFyZ192YWx1ZSwgYXJnX2tleSkge1xyXG4gICAgICAgIHRoaXMuaU1hdGVyaWFsc1thcmdfa2V5XSA9IGFyZ192YWx1ZTtcclxuICAgICAgICByZXR1cm4gYXJnX3ZhbHVlO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5BZGRNYXRlcmlhbEZyb21GaWxlID0gZnVuY3Rpb24gKGFyZ192YWx1ZSwgYXJnX2RldmljZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlNYXRlcmlhbHNbYXJnX3ZhbHVlXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pTWF0ZXJpYWxzW2FyZ192YWx1ZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaU1hdGVyaWFsc1thcmdfdmFsdWVdID0gUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVNYXRlcmlhbEZyb21GaWxlKGFyZ192YWx1ZSwgdGhpcywgYXJnX2RldmljZSk7XHJcbiAgICAgICAgdGhpcy5Mb2FkU3RhcnQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5pTWF0ZXJpYWxzW2FyZ192YWx1ZV07XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLlJlbW92ZU1hdGVyaWFsID0gZnVuY3Rpb24gKGFyZ19rZXkpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5pTWF0ZXJpYWxzW2FyZ19rZXldO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5HZXRHZW9tZXRyeSA9IGZ1bmN0aW9uIChhcmdfa2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaUdlb21ldHJpZXNbYXJnX2tleV0pXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlHZW9tZXRyaWVzW2FyZ19rZXldO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLkFkZEdlb21ldHJ5ID0gZnVuY3Rpb24gKGFyZ192YWx1ZSwgYXJnX2tleSkge1xyXG4gICAgICAgIHRoaXMuaUdlb21ldHJpZXNbYXJnX2tleV0gPSBhcmdfdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGFyZ192YWx1ZTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuUmVtb3ZlR2VvbWV0cnkgPSBmdW5jdGlvbiAoYXJnX2tleSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmlHZW9tZXRyaWVzW2FyZ19rZXldO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5HZXRNZXNoID0gZnVuY3Rpb24gKGFyZ19rZXkpIHtcclxuICAgICAgICBpZiAodGhpcy5pTWVzaGVzW2FyZ19rZXldKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pTWVzaGVzW2FyZ19rZXldO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLkFkZE1lc2ggPSBmdW5jdGlvbiAoYXJnX3ZhbHVlLCBhcmdfa2V5KSB7XHJcbiAgICAgICAgdGhpcy5pTWVzaGVzW2FyZ19rZXldID0gYXJnX3ZhbHVlO1xyXG4gICAgICAgIHJldHVybiBhcmdfdmFsdWU7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLlJlbW92ZU1lc2ggPSBmdW5jdGlvbiAoYXJnX2tleSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmlNZXNoZXNbYXJnX2tleV07XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLkdldFNvdW5kID0gZnVuY3Rpb24gKGFyZ19rZXkpIHtcclxuICAgICAgICBpZiAodGhpcy5pU291bmRzW2FyZ19rZXldKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pU291bmRzW2FyZ19rZXldO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLkFkZFNvdW5kID0gZnVuY3Rpb24gKGFyZ192YWx1ZSwgYXJnX2tleSkge1xyXG4gICAgICAgIHRoaXMuaVNvdW5kc1thcmdfa2V5XSA9IGFyZ192YWx1ZTtcclxuICAgICAgICByZXR1cm4gYXJnX3ZhbHVlO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5BZGRTb3VuZEZyb21GaWxlID0gZnVuY3Rpb24gKGFyZ192YWx1ZSwgYXJnX2tleSkge1xyXG4gICAgICAgIHRoaXMuaVNvdW5kc1thcmdfa2V5XSA9IFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlU291bmQoYXJnX3ZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5pU291bmRzW2FyZ19rZXldO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5SZW1vdmVTb3VuZCA9IGZ1bmN0aW9uIChhcmdfa2V5KSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuaVNvdW5kc1thcmdfa2V5XTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuTG9hZEVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmdPYmplY3RDb3VudC0tO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5Mb2FkU3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nT2JqZWN0Q291bnQrKztcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuR2V0TG9hZGluZ09iakNvdW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmdPYmplY3RDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKDAgKyBcIjpsb2FkaW5nXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sb2FkaW5nT2JqZWN0Q291bnQgKyBcIjpsb2FkaW5nXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRpbmdPYmplY3RDb3VudDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVzb3VyY2VDb250YWluZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJlc291cmNlQ29udGFpbmVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgRnJhbWVCdWZmZXJUZXh0dXJlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRnJhbWVCdWZmZXJUZXh0dXJlKGFyZ19ncmFwaGljRGV2aWNlLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZSA9IGFyZ19ncmFwaGljRGV2aWNlO1xyXG4gICAgICAgIC8vIOODleODrOODvOODoOODkOODg+ODleOCoeOBrueUn+aIkFxyXG4gICAgICAgIHRoaXMuZnJhbWVCdWZmZXIgPSB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xyXG4gICAgICAgIC8vIOODleODrOODvOODoOODkOODg+ODleOCoeOCkldlYkdM44Gr44OQ44Kk44Oz44OJXHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LkZSQU1FQlVGRkVSLCB0aGlzLmZyYW1lQnVmZmVyKTtcclxuICAgICAgICAvLyDmt7Hluqbjg5Djg4Pjg5XjgqHnlKjjg6zjg7Pjg4Djg7zjg5Djg4Pjg5XjgqHjga7nlJ/miJDjgajjg5DjgqTjg7Pjg4lcclxuICAgICAgICB0aGlzLmRlcHRoQnVmZmVyID0gdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuY3JlYXRlUmVuZGVyYnVmZmVyKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuYmluZFJlbmRlcmJ1ZmZlcih0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5SRU5ERVJCVUZGRVIsIHRoaXMuZGVwdGhCdWZmZXIpO1xyXG4gICAgICAgIC8vIOODrOODs+ODgOODvOODkOODg+ODleOCoeOCkua3seW6puODkOODg+ODleOCoeOBqOOBl+OBpuioreWumlxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnJlbmRlcmJ1ZmZlclN0b3JhZ2UodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuUkVOREVSQlVGRkVSLCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5ERVBUSF9DT01QT05FTlQxNiwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgLy8g44OV44Os44O844Og44OQ44OD44OV44Kh44Gr44Os44Oz44OA44O844OQ44OD44OV44Kh44KS6Zai6YCj5LuY44GR44KLXHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuZnJhbWVidWZmZXJSZW5kZXJidWZmZXIodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuRlJBTUVCVUZGRVIsIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LkRFUFRIX0FUVEFDSE1FTlQsIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlJFTkRFUkJVRkZFUiwgdGhpcy5kZXB0aEJ1ZmZlcik7XHJcbiAgICAgICAgLy8g44OV44Os44O844Og44OQ44OD44OV44Kh55So44OG44Kv44K544OB44Oj44Gu55Sf5oiQXHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuY3JlYXRlVGV4dHVyZSgpO1xyXG4gICAgICAgIC8vIOODleODrOODvOODoOODkOODg+ODleOCoeeUqOOBruODhuOCr+OCueODgeODo+OCkuODkOOCpOODs+ODiVxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmJpbmRUZXh0dXJlKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRFWFRVUkVfMkQsIHRoaXMuZGF0YSk7XHJcbiAgICAgICAgLy8g44OV44Os44O844Og44OQ44OD44OV44Kh55So44Gu44OG44Kv44K544OB44Oj44Gr44Kr44Op44O855So44Gu44Oh44Oi44Oq6aCY5Z+f44KS56K65L+dXHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudGV4SW1hZ2UyRCh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5URVhUVVJFXzJELCAwLCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5SR0JBLCB3aWR0aCwgaGVpZ2h0LCAwLCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5SR0JBLCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5VTlNJR05FRF9CWVRFLCBudWxsKTtcclxuICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6Pjg5Hjg6njg6Hjg7zjgr9cclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRFWFRVUkVfMkQsIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRFWFRVUkVfTUFHX0ZJTFRFUiwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuTElORUFSKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRFWFRVUkVfMkQsIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRFWFRVUkVfTUlOX0ZJTFRFUiwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuTElORUFSKTtcclxuICAgICAgICAvLyDjg5Xjg6zjg7zjg6Djg5Djg4Pjg5XjgqHjgavjg4bjgq/jgrnjg4Hjg6PjgpLplqLpgKPku5jjgZHjgotcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5mcmFtZWJ1ZmZlclRleHR1cmUyRCh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5GUkFNRUJVRkZFUiwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuQ09MT1JfQVRUQUNITUVOVDAsIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRFWFRVUkVfMkQsIHRoaXMuZGF0YSwgMCk7XHJcbiAgICAgICAgLy8g5ZCE56iu44Kq44OW44K444Kn44Kv44OI44Gu44OQ44Kk44Oz44OJ44KS6Kej6ZmkXHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuYmluZFRleHR1cmUodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuYmluZFJlbmRlcmJ1ZmZlcih0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5SRU5ERVJCVUZGRVIsIG51bGwpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcbiAgICB9XHJcbiAgICBGcmFtZUJ1ZmZlclRleHR1cmUucHJvdG90eXBlLlNldENvbnRhaW5lciA9IGZ1bmN0aW9uIChyZXNvdXJjZUNvbnRhaW5lcikge1xyXG4gICAgfTtcclxuICAgIEZyYW1lQnVmZmVyVGV4dHVyZS5wcm90b3R5cGUuTG9hZGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIEZyYW1lQnVmZmVyVGV4dHVyZS5wcm90b3R5cGUuSXNMb2FkZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgRnJhbWVCdWZmZXJUZXh0dXJlLnByb3RvdHlwZS5Jbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIEZyYW1lQnVmZmVyVGV4dHVyZS5wcm90b3R5cGUuQXR0YWNoID0gZnVuY3Rpb24gKHNsb3QpIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5hY3RpdmVUZXh0dXJlKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRFWFRVUkUwKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5iaW5kVGV4dHVyZSh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5URVhUVVJFXzJELCB0aGlzLmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm0xaSh0aGlzLmdyYXBoaWNEZXZpY2Uuc2hhZGVyLkdldFRleHR1cmVTbG90KHNsb3QpLCBzbG90KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRnJhbWVCdWZmZXJUZXh0dXJlO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBGcmFtZUJ1ZmZlclRleHR1cmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBHZW9tZXRyeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdlb21ldHJ5KGRhdGEsIGlzVVYsIGlzTm9ybWFsLCBpc0NvbG9yLCBhcmdfZGV2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSBhcmdfZGV2aWNlO1xyXG4gICAgICAgIHRoaXMudmJvTGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMudmJvTGlzdC5wdXNoKGFyZ19kZXZpY2UuQ3JlYXRlVkJPKGRhdGEucCkpO1xyXG4gICAgICAgIGlmIChpc1VWKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmJvTGlzdC5wdXNoKGFyZ19kZXZpY2UuQ3JlYXRlVkJPKGRhdGEudXYpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTm9ybWFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmJvTGlzdC5wdXNoKGFyZ19kZXZpY2UuQ3JlYXRlVkJPKGRhdGEubikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNDb2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLnZib0xpc3QucHVzaChhcmdfZGV2aWNlLkNyZWF0ZVZCTyhkYXRhLmMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pYm8gPSBhcmdfZGV2aWNlLkNyZWF0ZUlCTyhkYXRhLmkpO1xyXG4gICAgICAgIHRoaXMuaW5kZXhTaXplID0gZGF0YS5pLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnN1YnNldCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuc3Vic2V0LnB1c2goZGF0YS5pLmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgICBHZW9tZXRyeS5wcm90b3R5cGUuQ2hhbmdlVkJPID0gZnVuY3Rpb24gKHZibywgc2xvdCkge1xyXG4gICAgICAgIHRoaXMudmJvTGlzdFtzbG90XSA9IHZibztcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeS5wcm90b3R5cGUuR2V0SW5kZXhTaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4U2l6ZTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeS5wcm90b3R5cGUuRHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmRldmljZS5TZXRWQk8odGhpcy52Ym9MaXN0KTtcclxuICAgICAgICB0aGlzLmRldmljZS5jb250ZXh0LmJpbmRCdWZmZXIodGhpcy5kZXZpY2UuY29udGV4dC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pYm8pO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5LnByb3RvdHlwZS5TZXRTdWJzZXQgPSBmdW5jdGlvbiAoYXJnX3N1YnNldCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2V0ID0gYXJnX3N1YnNldDtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeS5wcm90b3R5cGUuR2V0U3ViU2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN1YnNldDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2VvbWV0cnk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEdlb21ldHJ5O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgRXhQYXJhbWV0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFeFBhcmFtZXRlcihhcmdfc2xvdCwgYXJnX3NpemUsIGFyZ19wYXJhbSkge1xyXG4gICAgICAgIHRoaXMuc2xvdCA9IGFyZ19zbG90O1xyXG4gICAgICAgIHRoaXMucGFyYW0gPSBhcmdfcGFyYW07XHJcbiAgICAgICAgdGhpcy5zaXplID0gYXJnX3NpemU7XHJcbiAgICAgICAgc3dpdGNoIChhcmdfc2l6ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0YWNoRnVuYyA9IHRoaXMuQXRhY2gxZjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0YWNoRnVuYyA9IHRoaXMuQXRhY2gyZjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0YWNoRnVuYyA9IHRoaXMuQXRhY2gzZjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0YWNoRnVuYyA9IHRoaXMuQXRhY2g0ZjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE2OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdGFjaEZ1bmMgPSB0aGlzLkF0YWNoTWF0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgRXhQYXJhbWV0ZXIucHJvdG90eXBlLkF0YWNoMWYgPSBmdW5jdGlvbiAoZGV2aWNlKSB7XHJcbiAgICAgICAgZGV2aWNlLmNvbnRleHQudW5pZm9ybTFmdihkZXZpY2Uuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbdGhpcy5zbG90XSwgdGhpcy5wYXJhbS5kYXRhKTtcclxuICAgIH07XHJcbiAgICBFeFBhcmFtZXRlci5wcm90b3R5cGUuQXRhY2gyZiA9IGZ1bmN0aW9uIChkZXZpY2UpIHtcclxuICAgICAgICBkZXZpY2UuY29udGV4dC51bmlmb3JtMmZ2KGRldmljZS5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1t0aGlzLnNsb3RdLCB0aGlzLnBhcmFtLmRhdGEpO1xyXG4gICAgfTtcclxuICAgIEV4UGFyYW1ldGVyLnByb3RvdHlwZS5BdGFjaDNmID0gZnVuY3Rpb24gKGRldmljZSkge1xyXG4gICAgICAgIGRldmljZS5jb250ZXh0LnVuaWZvcm0zZnYoZGV2aWNlLnNoYWRlci51bmlmb3JtTG9jYXRpb25zW3RoaXMuc2xvdF0sIHRoaXMucGFyYW0uZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgRXhQYXJhbWV0ZXIucHJvdG90eXBlLkF0YWNoNGYgPSBmdW5jdGlvbiAoZGV2aWNlKSB7XHJcbiAgICAgICAgZGV2aWNlLmNvbnRleHQudW5pZm9ybTRmdihkZXZpY2Uuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbdGhpcy5zbG90XSwgdGhpcy5wYXJhbS5kYXRhKTtcclxuICAgIH07XHJcbiAgICBFeFBhcmFtZXRlci5wcm90b3R5cGUuQXRhY2hNYXQgPSBmdW5jdGlvbiAoZGV2aWNlKSB7XHJcbiAgICAgICAgZGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdihkZXZpY2Uuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbdGhpcy5zbG90XSwgZmFsc2UsIHRoaXMucGFyYW0uZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEV4UGFyYW1ldGVyO1xyXG59KCkpO1xyXG52YXIgTWF0ZXJpYWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYXRlcmlhbCgpIHtcclxuICAgIH1cclxuICAgIE1hdGVyaWFsLnByb3RvdHlwZS5TZXRQYXJhbWV0ZXIgPSBmdW5jdGlvbiAoYXJnX2FtYmllbnQsIGFyZ19kZXZpY2UsIGFyZ19hcnlfdGV4dHVyZSwgYXJnX2FyeV9leFBhcm1zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmFtYmllbnRDb2xvciA9IGFyZ19hbWJpZW50O1xyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gYXJnX2RldmljZTtcclxuICAgICAgICBpZiAoYXJnX2FyeV90ZXh0dXJlKVxyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmVzID0gYXJnX2FyeV90ZXh0dXJlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuZXhQYXJhbXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBpZiAoYXJnX2FyeV9leFBhcm1zKSB7XHJcbiAgICAgICAgICAgIGFyZ19hcnlfZXhQYXJtcy5mb3JlYWNoKGZ1bmN0aW9uIChwYXJhbSkgeyByZXR1cm4gX3RoaXMuQWRkRXhQYXJhbShwYXJhbS5uLCBwYXJhbS5zLCBwYXJhbS5wKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE1hdGVyaWFsLnByb3RvdHlwZS5TZXRUZXh0dXJlID0gZnVuY3Rpb24gKGFyZ190ZXh0dXJlLCBzbG90KSB7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlc1tzbG90XSA9IGFyZ190ZXh0dXJlO1xyXG4gICAgfTtcclxuICAgIE1hdGVyaWFsLnByb3RvdHlwZS5BZGRFeFBhcmFtID0gZnVuY3Rpb24gKGFyZ19zbG90LCBhcmdfc2l6ZSwgYXJnX3BhcmFtKSB7XHJcbiAgICAgICAgdGhpcy5leFBhcmFtcy5wdXNoKG5ldyBFeFBhcmFtZXRlcihhcmdfc2xvdCwgYXJnX3NpemUsIGFyZ19wYXJhbSkpO1xyXG4gICAgfTtcclxuICAgIE1hdGVyaWFsLnByb3RvdHlwZS5BdHRhY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGV2aWNlLnNoYWRlci5hbWJpZW50U2xvdCkge1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZS5jb250ZXh0LnVuaWZvcm00ZnYodGhpcy5kZXZpY2Uuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbdGhpcy5kZXZpY2Uuc2hhZGVyLmFtYmllbnRTbG90XSwgdGhpcy5hbWJpZW50Q29sb3IueHl6dyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50ZXh0dXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0dXJlc1tpXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlc1tpXS5BdHRhY2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5leFBhcmFtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmV4UGFyYW1zW2ldLmF0YWNoRnVuYyh0aGlzLmRldmljZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBNYXRlcmlhbDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gTWF0ZXJpYWw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBNZXNoID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWVzaCgpIHtcclxuICAgIH1cclxuICAgIE1lc2gucHJvdG90eXBlLlNldFBhcmFtZXRlciA9IGZ1bmN0aW9uIChhcmdfZ2VvbWV0cnksIGFyZ19hcnlfbWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IGFyZ19nZW9tZXRyeTtcclxuICAgICAgICB0aGlzLmFyeV9tYXRlcmlhbHMgPSBhcmdfYXJ5X21hdGVyaWFscztcclxuICAgIH07XHJcbiAgICByZXR1cm4gTWVzaDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gTWVzaDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEZpbGVMb2FkZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVG9vbC9GaWxlTG9hZGVyXCIpKTtcclxuZnVuY3Rpb24gR2V0U3RyaWRlKGFyZ190eXBlKSB7XHJcbiAgICBzd2l0Y2ggKGFyZ190eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcInZlYzJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ2ZWMzXCI6XHJcbiAgICAgICAgICAgIHJldHVybiAzO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwidmVjNFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImludFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImZsb2F0XCI6XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwiVHlwZSB1bmRpZmluZWQuXCIpO1xyXG4gICAgcmV0dXJuIDA7XHJcbn1cclxudmFyIFNoYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNoYWRlcih2c1NvdXJjZSwgZnNTb3VyY2UsIGFyZ19ncmFwaGljRGV2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlID0gYXJnX2dyYXBoaWNEZXZpY2U7XHJcbiAgICAgICAgdmFyIHZzRGF0YSA9IEZpbGVMb2FkZXJfMS5kZWZhdWx0LkxvYWRUZXh0KHZzU291cmNlKTtcclxuICAgICAgICB2YXIgdl9zaGFkZXIgPSB0aGlzLmdyYXBoaWNEZXZpY2UuQ3JlYXRlVmVydGV4U2hhZGVyKHZzRGF0YSk7XHJcbiAgICAgICAgdmFyIGZzRGF0YSA9IEZpbGVMb2FkZXJfMS5kZWZhdWx0LkxvYWRUZXh0KGZzU291cmNlKTtcclxuICAgICAgICB2YXIgZl9zaGFkZXIgPSB0aGlzLmdyYXBoaWNEZXZpY2UuQ3JlYXRlRnJhZ21lbnRTaGFkZXIoZnNEYXRhKTtcclxuICAgICAgICB0aGlzLmFtYmllbnRTbG90ID0gLTE7XHJcbiAgICAgICAgdGhpcy5saWdodFBvc1Nsb3QgPSAtMTtcclxuICAgICAgICB0aGlzLmxpZ2h0RGlyU2xvdCA9IC0xO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbU9iamVjdCA9IHRoaXMuZ3JhcGhpY0RldmljZS5DcmVhdGVQcm9ncmFtKHZfc2hhZGVyLCBmX3NoYWRlcik7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZVN0cmlkZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLnRleHR1cmVTbG90cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHZhciBhdHRyaWJ1dGVTb3VyY2UgPSB2c0RhdGEuc3BsaXQoXCI7XCIpO1xyXG4gICAgICAgIGF0dHJpYnV0ZVNvdXJjZSA9IGF0dHJpYnV0ZVNvdXJjZS5maWx0ZXIoZnVuY3Rpb24gKHNvdXJjZSkgeyByZXR1cm4gc291cmNlLmluZGV4T2YoXCJhdHRyaWJ1dGVcIikgIT0gLTE7IH0pO1xyXG4gICAgICAgIHZhciBhdHRyaWJ1dGVTZW1hbnRpY3MgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJpYnV0ZVNvdXJjZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVTb3VyY2VbaV0gPSBhdHRyaWJ1dGVTb3VyY2VbaV0ucmVwbGFjZSgvXFxyP1xcbi9nLCBcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXR0cmlidXRlU291cmNlLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkgeyByZXR1cm4gYXR0cmlidXRlU2VtYW50aWNzLnB1c2goc291cmNlLnNwbGl0KFwiIFwiKSk7IH0pO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cmlidXRlU2VtYW50aWNzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZVNlbWFudGljc1tpXSA9IGF0dHJpYnV0ZVNlbWFudGljc1tpXS5maWx0ZXIoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMgIT0gXCJcIjsgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zW2ldID0gdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5wcm9ncmFtT2JqZWN0LCBhdHRyaWJ1dGVTZW1hbnRpY3NbaV1bMl0pO1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZVN0cmlkZXNbaV0gPSBHZXRTdHJpZGUoYXR0cmlidXRlU2VtYW50aWNzW2ldWzFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHVuaVNvdXJjZSA9IGZzRGF0YS5zcGxpdChcIjtcIik7XHJcbiAgICAgICAgdW5pU291cmNlID0gdnNEYXRhLnNwbGl0KFwiO1wiKS5jb25jYXQodW5pU291cmNlKTtcclxuICAgICAgICB1bmlTb3VyY2UgPSB1bmlTb3VyY2UuZmlsdGVyKGZ1bmN0aW9uIChzb3VyY2UpIHsgcmV0dXJuIHNvdXJjZS5pbmRleE9mKFwidW5pZm9ybVwiKSAhPSAtMTsgfSk7XHJcbiAgICAgICAgdmFyIHVuaVNlbWFudGljcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdW5pU291cmNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHVuaVNvdXJjZVtpXSA9IHVuaVNvdXJjZVtpXS5yZXBsYWNlKC9cXHI/XFxuL2csIFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bmlTb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7IHJldHVybiB1bmlTZW1hbnRpY3MucHVzaChzb3VyY2Uuc3BsaXQoXCIgXCIpKTsgfSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1bmlTZW1hbnRpY3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdW5pU2VtYW50aWNzW2ldID0gdW5pU2VtYW50aWNzW2ldLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcyAhPSBcIlwiOyB9KTtcclxuICAgICAgICAgICAgdGhpcy51bmlmb3JtTG9jYXRpb25zLnB1c2godGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbU9iamVjdCwgdW5pU2VtYW50aWNzW2ldWzJdKSk7XHJcbiAgICAgICAgICAgIGlmICh1bmlTZW1hbnRpY3NbaV1bMl0gPT0gXCJhbWJpZW50Q29sb3JcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbWJpZW50U2xvdCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodW5pU2VtYW50aWNzW2ldWzJdID09IFwibGlnaHRQb3NpdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpZ2h0UG9zU2xvdCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodW5pU2VtYW50aWNzW2ldWzJdID09IFwibGlnaHREaXJlY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saWdodERpclNsb3QgPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVuaVNlbWFudGljc1tpXVsxXSA9PSBcInNhbXBsZXIyRFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVTbG90cy5wdXNoKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgU2hhZGVyLnByb3RvdHlwZS5HZXRUZXh0dXJlU2xvdCA9IGZ1bmN0aW9uIChhcmdfc2xvdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRleHR1cmVTbG90c1thcmdfc2xvdF0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zW3RoaXMudGV4dHVyZVNsb3RzW2FyZ19zbG90XV07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNoYWRlci5wcm90b3R5cGUuQXR0YWNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5TZXRTaGFkZXIodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNoYWRlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU2hhZGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgU291bmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTb3VuZChhcmdfc3JjKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gICAgICAgIHRoaXMuYXVkaW9FbGVtZW50LnNyYyA9IGFyZ19zcmM7XHJcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQucHJlbG9hZCA9IFwiYXV0b1wiO1xyXG4gICAgfVxyXG4gICAgU291bmQucHJvdG90eXBlLlBsYXkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQucGxheSgpO1xyXG4gICAgfTtcclxuICAgIFNvdW5kLnByb3RvdHlwZS5QYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5wYXVzZSgpO1xyXG4gICAgfTtcclxuICAgIFNvdW5kLnByb3RvdHlwZS5NdXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYXVkaW9FbGVtZW50Lm11dGVkID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBTb3VuZC5wcm90b3R5cGUuU2V0Vm9sdW1lID0gZnVuY3Rpb24gKGFyZ192b2x1bWUpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC52b2x1bWUgPSBhcmdfdm9sdW1lO1xyXG4gICAgfTtcclxuICAgIFNvdW5kLnByb3RvdHlwZS5HZXRWb2x1bWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXVkaW9FbGVtZW50LnZvbHVtZTtcclxuICAgIH07XHJcbiAgICBTb3VuZC5wcm90b3R5cGUuRGlzTXV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5tdXRlZCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIFNvdW5kLnByb3RvdHlwZS5SZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5jdXJyZW50VGltZSA9IDAuMDtcclxuICAgIH07XHJcbiAgICBTb3VuZC5wcm90b3R5cGUuU2V0TG9vcCA9IGZ1bmN0aW9uIChhcmdfaXNMb29wKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQubG9vcCA9IGFyZ19pc0xvb3A7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNvdW5kO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBTb3VuZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFRleHR1cmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUZXh0dXJlKGFyZ19wYXRoLCBhcmdfZGV2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZSA9IGFyZ19kZXZpY2U7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gYXJnX3BhdGg7XHJcbiAgICB9XHJcbiAgICBUZXh0dXJlLnByb3RvdHlwZS5Mb2FkZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMucmVzb3VyY2VDb250YWluZXIpXHJcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VDb250YWluZXIuTG9hZEVuZCgpO1xyXG4gICAgfTtcclxuICAgIFRleHR1cmUucHJvdG90eXBlLklzTG9hZGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzTG9hZGVkO1xyXG4gICAgfTtcclxuICAgIFRleHR1cmUucHJvdG90eXBlLkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLkNyZWF0ZVRleHR1cmUodGhpcy5wYXRoLCB0aGlzKTtcclxuICAgIH07XHJcbiAgICBUZXh0dXJlLnByb3RvdHlwZS5BdHRhY2ggPSBmdW5jdGlvbiAoc2xvdCkge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmFjdGl2ZVRleHR1cmUodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVEVYVFVSRTApO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmJpbmRUZXh0dXJlKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRFWFRVUkVfMkQsIHRoaXMuZGF0YSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybTFpKHRoaXMuZ3JhcGhpY0RldmljZS5zaGFkZXIuR2V0VGV4dHVyZVNsb3Qoc2xvdCksIHNsb3QpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnRleFBhcmFtZXRlcmkodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVEVYVFVSRV8yRCwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVEVYVFVSRV9NSU5fRklMVEVSLCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5ORUFSRVNUKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRFWFRVUkVfMkQsIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRFWFRVUkVfTUFHX0ZJTFRFUiwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuTkVBUkVTVCk7XHJcbiAgICB9O1xyXG4gICAgVGV4dHVyZS5wcm90b3R5cGUuU2V0Q29udGFpbmVyID0gZnVuY3Rpb24gKHJlc291cmNlQ29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZUNvbnRhaW5lciA9IHJlc291cmNlQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2VDb250YWluZXIuTG9hZFN0YXJ0KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRleHR1cmU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFRleHR1cmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgU2NlbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TY2VuZS9TY2VuZVwiKSk7XHJcbnZhciBSZXNvdXJjZUNyZWF0ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Ub29sL1Jlc291cmNlQ3JlYXRlclwiKSk7XHJcbnZhciBHZW9tZXRyeUdlbmVyYXRvcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1Rvb2wvR2VvbWV0cnlHZW5lcmF0b3JcIikpO1xyXG52YXIgUXVhdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01hdGgvUXVhdFwiKSk7XHJcbnZhciBWZWN0b3I0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWF0aC9WZWN0b3I0XCIpKTtcclxudmFyIFZlY3RvcjNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYXRoL1ZlY3RvcjNcIikpO1xyXG52YXIgUG9pbnRMaWdodF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0xpZ2h0L1BvaW50TGlnaHRcIikpO1xyXG52YXIgTW9kZWxEcmF3Q29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ29tcG9uZW50L01vZGVsRHJhd0NvbXBvbmVudFwiKSk7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWF0aC9WZWN0b3IyXCIpKTtcclxudmFyIFNhbXBsZUNvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvbXBvbmVudC9TYW1wbGVDb21wb25lbnRcIikpO1xyXG52YXIgQ29sbGlzaW9uQ29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ29tcG9uZW50L0NvbGxpc2lvbkNvbXBvbmVudFwiKSk7XHJcbnZhciBUZXh0RHJhd0NvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvbXBvbmVudC9UZXh0RHJhd0NvbXBvbmVudFwiKSk7XHJcbnZhciBUcmFuc2Zvcm1fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9UcmFuc2Zvcm1cIikpO1xyXG52YXIgUHJpbWl0aXZlVHlwZTtcclxuKGZ1bmN0aW9uIChQcmltaXRpdmVUeXBlKSB7XHJcbiAgICBQcmltaXRpdmVUeXBlW1ByaW1pdGl2ZVR5cGVbXCJzcGhlcmVcIl0gPSAwXSA9IFwic3BoZXJlXCI7XHJcbiAgICBQcmltaXRpdmVUeXBlW1ByaW1pdGl2ZVR5cGVbXCJib3hfQUFCQlwiXSA9IDFdID0gXCJib3hfQUFCQlwiO1xyXG4gICAgUHJpbWl0aXZlVHlwZVtQcmltaXRpdmVUeXBlW1wiYm94X09CQlwiXSA9IDJdID0gXCJib3hfT0JCXCI7XHJcbiAgICBQcmltaXRpdmVUeXBlW1ByaW1pdGl2ZVR5cGVbXCJwb2ludFwiXSA9IDNdID0gXCJwb2ludFwiO1xyXG59KShQcmltaXRpdmVUeXBlIHx8IChQcmltaXRpdmVUeXBlID0ge30pKTtcclxudmFyIGZsb2F0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gZmxvYXQoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEZsb2F0MzJBcnJheSgxKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmbG9hdDtcclxufSgpKTtcclxudmFyIFNhbXBsZVNjZW5lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNhbXBsZVNjZW5lLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU2FtcGxlU2NlbmUoc2NlbmVNYW5nZXIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzY2VuZU1hbmdlcikgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5hUXVhdGVybmlvbiA9IG5ldyBRdWF0XzEuZGVmYXVsdCgpLklkZW50aXR5KCk7XHJcbiAgICAgICAgX3RoaXMuYlF1YXRlcm5pb24gPSBuZXcgUXVhdF8xLmRlZmF1bHQoKS5JZGVudGl0eSgpO1xyXG4gICAgICAgIF90aGlzLnNRdWF0ZXJuaW9uID0gbmV3IFF1YXRfMS5kZWZhdWx0KCkuSWRlbnRpdHkoKTtcclxuICAgICAgICBfdGhpcy56b29tRGF0YSA9IG5ldyBmbG9hdCgpO1xyXG4gICAgICAgIF90aGlzLnpvb21EaXJlY3Rpb24gPSAxLjA7XHJcbiAgICAgICAgX3RoaXMuem9vbURhdGEuZGF0YVswXSA9IDAuNTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBTYW1wbGVTY2VuZS5wcm90b3R5cGUuTG9hZGluZ1VwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBTYW1wbGVTY2VuZS5wcm90b3R5cGUuT25Mb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNhbG9yeVRleHR1cmUsIGZyYW1lQnVmZmVyLCBtYXRlcmlhbDtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZFNoYWRlcihSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZVNoYWRlcignc2hhZGVyL1BvaW50TGlnaHRWUy5nbHNsJywgXCJzaGFkZXIvUG9pbnRMaWdodEZTLmdsc2xcIiwgdGhpcy5zY2VuZU1hbmdlci5HZXRHcmFwaGljRGV2aWNlKCkpLCBcInBvaW50TGlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkU2hhZGVyKFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlU2hhZGVyKCdzaGFkZXIvVVZOb3JtYWxDb2xvclZTLmdsc2wnLCBcInNoYWRlci9EZWZhdWx0RlMuZ2xzbFwiLCB0aGlzLnNjZW5lTWFuZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSksIFwidGV4U2hhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZFNoYWRlcihSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZVNoYWRlcignc2hhZGVyL1VWTm9ybWFsQ29sb3JWUy5nbHNsJywgXCJzaGFkZXIvRm9udFNoYWRlckZTLmdsc2xcIiwgdGhpcy5zY2VuZU1hbmdlci5HZXRHcmFwaGljRGV2aWNlKCkpLCBcImZvbnRTaGFkZXJcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkU2hhZGVyKFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlU2hhZGVyKCdzaGFkZXIvVVZOb3JtYWxWUy5nbHNsJywgXCJzaGFkZXIvRGVmYXVsdEZTX2xpZ2h0Lmdsc2xcIiwgdGhpcy5zY2VuZU1hbmdlci5HZXRHcmFwaGljRGV2aWNlKCkpLCBcInRleFNoYWRlcl9saWdodFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5nZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRTaGFkZXIoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVTaGFkZXIoJ3NoYWRlci9VVk5vcm1hbFZTLmdsc2wnLCBcInNoYWRlci9ab29tQmx1ci5nbHNsXCIsIHRoaXMuc2NlbmVNYW5nZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJ6b29tRWZmZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZFNoYWRlcihSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZVNoYWRlcignc2hhZGVyL1VWTm9ybWFsVlMuZ2xzbCcsIFwic2hhZGVyL0RvdEVmZmVjdC5nbHNsXCIsIHRoaXMuc2NlbmVNYW5nZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJkb3RFZmZlY3RcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkU2hhZGVyKFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlU2hhZGVyKCdzaGFkZXIvVVZOb3JtYWxDb2xvclZTLmdsc2wnLCBcInNoYWRlci9CbGFja1Rlc3RGUy5nbHNsXCIsIHRoaXMuc2NlbmVNYW5nZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJibGFja1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5nZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRHZW9tZXRyeShSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZUdlb21ldHJ5KEdlb21ldHJ5R2VuZXJhdG9yXzEuZGVmYXVsdC5DcmVhdGVUb3J1cygzMiwgMzIsIDAuNSwgMSksIGZhbHNlLCB0cnVlLCB0cnVlLCB0aGlzLnNjZW5lTWFuZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSksIFwiaHN2VG9ydXNcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkR2VvbWV0cnkoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVHZW9tZXRyeShHZW9tZXRyeUdlbmVyYXRvcl8xLmRlZmF1bHQuQ3JlYXRlQ3ViZSgxLCBuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMS4wLCAxLjAsIDEuMCwgMSkpLCB0cnVlLCB0cnVlLCB0cnVlLCB0aGlzLnNjZW5lTWFuZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSksIFwiY3ViZVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5nZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRHZW9tZXRyeShSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZUdlb21ldHJ5KEdlb21ldHJ5R2VuZXJhdG9yXzEuZGVmYXVsdC5DcmVhdGVQbGFuZShuZXcgVmVjdG9yMl8xLmRlZmF1bHQoMSwgMSksIGZhbHNlLCBuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMS4wLCAxLjAsIDEuMCwgMSkpLCB0cnVlLCBmYWxzZSwgZmFsc2UsIHRoaXMuc2NlbmVNYW5nZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJwbGFuZVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5nZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRNZXNoKFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlTWVzaFJlc291cmNlRnJvbUZpbGUoXCJtb2RlbC9NYWd1cm8vbWFndXJvLmIzbVwiLCB0aGlzLnNjZW5lTWFuZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCksIHRoaXMuc2NlbmVNYW5nZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJtYWd1cm9cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkU291bmRGcm9tRmlsZShcImF1ZGlvL0VuZGluZy5tcDNcIiwgXCJzYW1wbGVcIik7XHJcbiAgICAgICAgICAgICAgICBjYWxvcnlUZXh0dXJlID0gUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVUZXh0dXJlKCdpbWFnZS9jYWxvcnkucG5nJywgdGhpcy5zY2VuZU1hbmdlci5HZXRHcmFwaGljRGV2aWNlKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZFRleHR1cmUoY2Fsb3J5VGV4dHVyZSwgXCJjYWxvcnlcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkVGV4dHVyZShSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZVRleHR1cmUoJ2ltYWdlL2NoYXJtYXAucG5nJywgdGhpcy5zY2VuZU1hbmdlci5HZXRHcmFwaGljRGV2aWNlKCkpLCBcImZvbnRcIik7XHJcbiAgICAgICAgICAgICAgICBmcmFtZUJ1ZmZlciA9IHRoaXMuc2NlbmVNYW5nZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRUZXh0dXJlKFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlRnJhbWVCdWZmZXIoMTAyNCwgMTAyNCwgdGhpcy5zY2VuZU1hbmdlci5HZXRHcmFwaGljRGV2aWNlKCkpLCBcImNhbWVyYVwiKTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsID0gdGhpcy5zY2VuZU1hbmdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZE1hdGVyaWFsKFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlTWF0ZXJpYWwobmV3IFZlY3RvcjRfMS5kZWZhdWx0KDAuMSwgMC4xLCAwLjEsIDEuMCksIHRoaXMuc2NlbmVNYW5nZXIuR2V0R3JhcGhpY0RldmljZSgpLCBbdGhpcy5zY2VuZU1hbmdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkdldFRleHR1cmUoXCJjYWxvcnlcIildKSwgXCJjYWxvcnlNYXRlcmlhbFwiKTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLkFkZEV4UGFyYW0oNCwgMywgbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDUsIDUsIDEwKSk7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbCA9IHRoaXMuc2NlbmVNYW5nZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRNYXRlcmlhbChSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZU1hdGVyaWFsKG5ldyBWZWN0b3I0XzEuZGVmYXVsdCgwLjEsIDAuMSwgMC4xLCAxLjApLCB0aGlzLnNjZW5lTWFuZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSwgW3RoaXMuc2NlbmVNYW5nZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5HZXRUZXh0dXJlKFwiY2FtZXJhXCIpXSksIFwiY2FtZXJhTWF0ZXJpYWxcIik7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5BZGRFeFBhcmFtKDQsIDEsIHRoaXMuem9vbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwgPSB0aGlzLnNjZW5lTWFuZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkTWF0ZXJpYWwoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVNYXRlcmlhbChuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMC4xLCAwLjEsIDAuMSwgMS4wKSwgdGhpcy5zY2VuZU1hbmdlci5HZXRHcmFwaGljRGV2aWNlKCkpLCBcIm5vblRleHR1cmVNYXRlcmlhbFwiKTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLkFkZEV4UGFyYW0oNCwgMywgbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDUsIDUsIDEwKSk7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbCA9IHRoaXMuc2NlbmVNYW5nZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRNYXRlcmlhbChSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZU1hdGVyaWFsKG5ldyBWZWN0b3I0XzEuZGVmYXVsdCgwLjEsIDAuMSwgMC4xLCAxLjApLCB0aGlzLnNjZW5lTWFuZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSksIFwiem9vbUVmZmVjdFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2FtcGxlU2NlbmUucHJvdG90eXBlLk9uSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLkFkZExheWVyKCk7XHJcbiAgICAgICAgdGhpcy5BZGRDYW1lcmEoMCwgMSwgXCJtYWluXCIsIGZhbHNlLCB0aGlzLnNjZW5lTWFuZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuR2V0VGV4dHVyZShcImNhbWVyYVwiKSk7XHJcbiAgICAgICAgLy8g6aCC54K544K344Kn44O844OA44Go44OV44Op44Kw44Oh44Oz44OI44K344Kn44O844OA44Gu55Sf5oiQXHJcbiAgICAgICAgdmFyIGxpZ2h0ID0gbmV3IFBvaW50TGlnaHRfMS5kZWZhdWx0KHRoaXMuc2NlbmVNYW5nZXIuR2V0R3JhcGhpY0RldmljZSgpKTtcclxuICAgICAgICBsaWdodC50cmFuc2Zvcm0uUG9zaXRpb24gPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoLTUsIC01LCAxMCk7XHJcbiAgICAgICAgLy90aGlzLnJlbmRlcmVyLlNldExpZ2h0KGxpZ2h0LDApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuU2V0TGlnaHQobGlnaHQsIDEpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVNYW5nZXIuR2V0R3JhcGhpY0RldmljZSgpLkVuYWJsZVN0ZW5jaWwoKTtcclxuICAgICAgICB0aGlzLkdldENhbWVyYShcIm1haW5cIikudHJhbnNmb3JtLlBvc2l0aW9uID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIC0zLCAxMCk7XHJcbiAgICAgICAgdGhpcy5HZXRDYW1lcmEoXCJtYWluXCIpLnRyYW5zZm9ybS5Mb29rQXQobmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDApLCBWZWN0b3IzXzEuZGVmYXVsdC55QXhpcyk7XHJcbiAgICAgICAgdGhpcy5HZXRDYW1lcmEoXCJtYWluXCIpLmNsZWFyQ29sb3IgPSBuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMC4zLCAwLjMsIDAuMywgMS4wKTtcclxuICAgICAgICB0aGlzLmN1YmUgPSB0aGlzLmdhbWVPYmplY3RNYW5hZ2VyLkFkZEdhbWVPYmplY3QoXCJjdWJlXCIpO1xyXG4gICAgICAgIHRoaXMuYW5vdGhlckN1YmUgPSB0aGlzLmdhbWVPYmplY3RNYW5hZ2VyLkFkZEdhbWVPYmplY3QoXCJjdWJlXCIpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlvblBsYW5lID0gdGhpcy5nYW1lT2JqZWN0TWFuYWdlci5BZGRHYW1lT2JqZWN0KFwicHJvamVjdGlvbkN1YmVcIik7XHJcbiAgICAgICAgLy90aGlzLnRvcnVzLlNldENvbXBvbmVudChuZXcgTW9kZWxEcmF3Q29tcG9uZW50KFwiaHN2VG9ydXNcIixcImNhbG9yeU1hdGVyaWFsXCIsXCJwb2ludExpZ2h0XCIsMSkpIGFzIE1vZGVsRHJhd0NvbXBvbmVudDtcclxuICAgICAgICAvL3RoaXMuY3ViZS5TZXRDb21wb25lbnQobmV3IE1vZGVsRHJhd0NvbXBvbmVudChmYWxzZSwgXCJjdWJlXCIsXCJjYWxvcnlNYXRlcmlhbFwiLFwidGV4U2hhZGVyXCIsMSxmYWxzZSkpIGFzIE1vZGVsRHJhd0NvbXBvbmVudDtcclxuICAgICAgICB2YXIgdHIgPSBuZXcgVHJhbnNmb3JtXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHRyLlBvc2l0aW9uID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDEsIDEsIDEpO1xyXG4gICAgICAgIHZhciB0cjIgPSBuZXcgVHJhbnNmb3JtXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHRyMi5Qb3NpdGlvbiA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgtMSwgLTEsIDIpO1xyXG4gICAgICAgIHRoaXMuY3ViZS5TZXRDb21wb25lbnQobmV3IFRleHREcmF3Q29tcG9uZW50XzEuZGVmYXVsdChcImJ1dGlidXRpXCIsIFwiZm9udFwiLCBcImZvbnRTaGFkZXJcIiwgbmV3IFZlY3RvcjRfMS5kZWZhdWx0KDAuNzUsIDAuNzUsIDAuMjUsIDEpLCAxLCB0cnVlKSk7XHJcbiAgICAgICAgdGhpcy5jdWJlLlNldENvbXBvbmVudChuZXcgVGV4dERyYXdDb21wb25lbnRfMS5kZWZhdWx0KFwiYnV0aWJ1dGlcIiwgXCJmb250XCIsIFwiZm9udFNoYWRlclwiLCBuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMS4wLCAxLjAsIDEuMCwgMSksIDEsIHRydWUsIHRyKSk7XHJcbiAgICAgICAgdGhpcy5jdWJlLlNldENvbXBvbmVudChuZXcgVGV4dERyYXdDb21wb25lbnRfMS5kZWZhdWx0KFwiYnV0aWJ1dGlcIiwgXCJmb250XCIsIFwiZm9udFNoYWRlclwiLCBuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMC41LCAwLjc1LCAwLjc1LCAxKSwgMSwgdHJ1ZSwgdHIyKSk7XHJcbiAgICAgICAgLy90aGlzLmFub3RoZXJDdWJlLlNldENvbXBvbmVudChuZXcgTW9kZWxEcmF3Q29tcG9uZW50KGZhbHNlLCBcImN1YmVcIixcImNhbG9yeU1hdGVyaWFsXCIsXCJ0ZXhTaGFkZXJcIiwxLHRydWUpKSBhcyBNb2RlbERyYXdDb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uUGxhbmUuU2V0Q29tcG9uZW50KG5ldyBNb2RlbERyYXdDb21wb25lbnRfMS5kZWZhdWx0KGZhbHNlLCBcInBsYW5lXCIsIFwiY2FtZXJhTWF0ZXJpYWxcIiwgXCJ0ZXhTaGFkZXJcIiwgMCwgZmFsc2UpKTtcclxuICAgICAgICB0aGlzLnByb2plY3Rpb25QbGFuZS50cmFuc2Zvcm0uU2NhbGUgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoNTAwLCA1MDAsIDEpO1xyXG4gICAgICAgIHRoaXMuY3ViZS5TZXRDb21wb25lbnQobmV3IFNhbXBsZUNvbXBvbmVudF8xLmRlZmF1bHQoKSk7XHJcbiAgICAgICAgdGhpcy5jdWJlLnRyYW5zZm9ybS5Qb3NpdGlvbiA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLjUsIDAsIDAuNSk7XHJcbiAgICAgICAgdGhpcy5hbm90aGVyQ3ViZS50cmFuc2Zvcm0uUG9zaXRpb24gPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoLTEsIC01LCAxMCk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uUGxhbmUudHJhbnNmb3JtLlBvc2l0aW9uID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIC0xKTtcclxuICAgICAgICB0aGlzLmN1YmUuU2V0Q29tcG9uZW50KG5ldyBDb2xsaXNpb25Db21wb25lbnRfMS5kZWZhdWx0KFByaW1pdGl2ZVR5cGUuYm94X09CQiwgbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDEuMCwgMS4wLCAxLjApLCAwKSk7XHJcbiAgICAgICAgdGhpcy5hbm90aGVyQ3ViZS5TZXRDb21wb25lbnQobmV3IENvbGxpc2lvbkNvbXBvbmVudF8xLmRlZmF1bHQoUHJpbWl0aXZlVHlwZS5ib3hfT0JCLCBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMS4wLCAxLjAsIDEuMCksIDApKTtcclxuICAgIH07XHJcbiAgICBTYW1wbGVTY2VuZS5wcm90b3R5cGUuT25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8g44Kr44Km44Oz44K/44KS5YWD44Gr44Op44K444Ki44Oz44KS566X5Ye6XHJcbiAgICAgICAgdmFyIHJhZCA9ICh0aGlzLnNjZW5lTWFuZ2VyLkdldEdhbWVUaW1lKCkuQWJzb2x1dGVGcmFtZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgIHZhciB0aW1lID0gMS41O1xyXG4gICAgICAgIGlmICh0aGlzLnNjZW5lTWFuZ2VyLkdldEdhbWVUaW1lKCkuQWJzb2x1dGVGcmFtZSA+PSAzNjApIHtcclxuICAgICAgICAgICAgLy90aGlzLnNjZW5lTWFuZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuR2V0U291bmQoXCJzYW1wbGVcIikuUGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlm57ou6Ljgq/jgqnjg7zjgr/jg4vjgqrjg7Pjga7nlJ/miJBcclxuICAgICAgICB0aGlzLmFRdWF0ZXJuaW9uLlJvdGF0ZShyYWQsIFZlY3RvcjNfMS5kZWZhdWx0LnhBeGlzKTtcclxuICAgICAgICB0aGlzLmJRdWF0ZXJuaW9uLlJvdGF0ZSgtcmFkLCBWZWN0b3IzXzEuZGVmYXVsdC55QXhpcyk7XHJcbiAgICAgICAgdGhpcy5zUXVhdGVybmlvbiA9IHRoaXMuYVF1YXRlcm5pb24uU3BoZXJlTGVycCh0aGlzLmJRdWF0ZXJuaW9uLCB0aW1lKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2FtcGxlU2NlbmU7XHJcbn0oU2NlbmVfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFNhbXBsZVNjZW5lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFJlbmRlcmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1BhcnRzL1JlbmRlcmVyXCIpKTtcclxudmFyIENhbWVyYV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9HcmFwaGljL0NhbWVyYVwiKSk7XHJcbnZhciBHYW1lT2JqZWN0TWFuYWdlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9HYW1lT2JqZWN0L0dhbWVPYmplY3RNYW5hZ2VyXCIpKTtcclxudmFyIENvbGxpc2lvbk1hbmFnZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vUGFydHMvQ29sbGlzaW9uL0NvbGxpc2lvbk1hbmFnZXJcIikpO1xyXG5mdW5jdGlvbiBTbGVlcCh0aW1lKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpO1xyXG4gICAgfSk7XHJcbn1cclxudmFyIFNjZW5lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2NlbmUoc2NlbmVNYW5nZXIpIHtcclxuICAgICAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcl8xLmRlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLm1hcF9jYW1lcmEgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5hcnlfY2FtZXJhID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZU1hbmdlciA9IHNjZW5lTWFuZ2VyO1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdE1hbmFnZXIgPSBuZXcgR2FtZU9iamVjdE1hbmFnZXJfMS5kZWZhdWx0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uTWFuYWdlciA9IG5ldyBDb2xsaXNpb25NYW5hZ2VyXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuQWRkQ2FtZXJhKDAsIDAsIFwibGFzdFwiLCB0cnVlKTtcclxuICAgIH1cclxuICAgIFNjZW5lLnByb3RvdHlwZS5HZXRDb2xsaXNpb25NYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxpc2lvbk1hbmFnZXI7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLklzTG9hZGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzTG9hZGVkO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5SZWxlYXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuT25SZWxlYXNlKCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZU1hbmdlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0TWFuYWdlci5SZWxlYXNlKCk7XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb25NYW5hZ2VyLlJlbGVhc2UoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLlJlbGVhc2UoKTtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuT25SZWxlYXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5BZGRDYW1lcmEgPSBmdW5jdGlvbiAob3JkZXIsIGxheWVyLCBjYW1lcmFOYW1lLCBpc1BhcmFyZWxsLCBmcmFtZUJ1ZmZlclRleHR1cmUpIHtcclxuICAgICAgICB2YXIgbmV3Q2FtZXJhO1xyXG4gICAgICAgIGlmIChmcmFtZUJ1ZmZlclRleHR1cmUpIHtcclxuICAgICAgICAgICAgbmV3Q2FtZXJhID0gbmV3IENhbWVyYV8xLmRlZmF1bHQodGhpcy5zY2VuZU1hbmdlci5HZXRHcmFwaGljRGV2aWNlKCksIGxheWVyLCBpc1BhcmFyZWxsLCBmcmFtZUJ1ZmZlclRleHR1cmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIG5ld0NhbWVyYSA9IG5ldyBDYW1lcmFfMS5kZWZhdWx0KHRoaXMuc2NlbmVNYW5nZXIuR2V0R3JhcGhpY0RldmljZSgpLCBsYXllciwgaXNQYXJhcmVsbCk7XHJcbiAgICAgICAgdGhpcy5hcnlfY2FtZXJhLnNwbGljZShvcmRlciwgMCwgbmV3Q2FtZXJhKTtcclxuICAgICAgICB0aGlzLm1hcF9jYW1lcmFbY2FtZXJhTmFtZV0gPSBuZXdDYW1lcmE7XHJcbiAgICAgICAgcmV0dXJuIG5ld0NhbWVyYTtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuR2V0Q2FtZXJhID0gZnVuY3Rpb24gKGNhbWVyYU5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBfY2FtZXJhW2NhbWVyYU5hbWVdO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5EcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5hcnlfY2FtZXJhLmZvckVhY2goZnVuY3Rpb24gKGNhbWVyYSkgeyByZXR1cm4gX3RoaXMucmVuZGVyZXIuRHJhdyhjYW1lcmEpOyB9KTtcclxuICAgICAgICB0aGlzLnNjZW5lTWFuZ2VyLkdldEdyYXBoaWNEZXZpY2UoKS5QcmVzZW50KCk7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLlVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLk9uVXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0TWFuYWdlci5VcGRhdGUoKTtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbk1hbmFnZXIuQ2hlY2soKTtcclxuICAgICAgICB0aGlzLkRyYXcoKTtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuTG9hZGluZ1VwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vdyBsb2FkaW5nXCIpO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5PblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuU3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5PblN0YXJ0KCk7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLk9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLkVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLk9uRW5kKCk7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLk9uRW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5Jbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuT25Jbml0aWFsaXplKCk7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLkJlZkxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLkxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLk9uTG9hZCgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNjZW5lTWFuZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuR2V0TG9hZGluZ09iakNvdW50KCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBTbGVlcCgxMDApXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVuZCBsb2FkaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Jbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLk9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLk9uSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuR2V0UmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXI7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLkdldFNjZW5lTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZU1hbmdlcjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2NlbmU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFNjZW5lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgR2FtZVRpbWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vUGFydHMvR2FtZVRpbWVcIikpO1xyXG52YXIgU2NlbmVNYW5hZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2NlbmVNYW5hZ2VyKGFyZ19tb2RlbENyZWF0ZXIsIGFyZ19yZXNvdXJjZUNvbnRhaW5lciwgYXJnX2dyYXBoaWNEZXZpY2UpIHtcclxuICAgICAgICB0aGlzLm1hcF9zY2VuZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZUNvbnRhaW5lciA9IGFyZ19yZXNvdXJjZUNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLm1vZGVsQ3JlYXRlciA9IGFyZ19tb2RlbENyZWF0ZXI7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlID0gYXJnX2dyYXBoaWNEZXZpY2U7XHJcbiAgICAgICAgdGhpcy5nYW1lVGltZSA9IG5ldyBHYW1lVGltZV8xLmRlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIFNjZW5lTWFuYWdlci5wcm90b3R5cGUuR2V0R3JhcGhpY0RldmljZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaGljRGV2aWNlO1xyXG4gICAgfTtcclxuICAgIFNjZW5lTWFuYWdlci5wcm90b3R5cGUuR2V0TW9kZWxDcmVhdGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsQ3JlYXRlcjtcclxuICAgIH07XHJcbiAgICBTY2VuZU1hbmFnZXIucHJvdG90eXBlLkdldFJlc291cmNlQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc291cmNlQ29udGFpbmVyO1xyXG4gICAgfTtcclxuICAgIFNjZW5lTWFuYWdlci5wcm90b3R5cGUuR2V0R2FtZVRpbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZVRpbWU7XHJcbiAgICB9O1xyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNjZW5lLklzTG9hZGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVRpbWUuQ291bnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lLkxvYWRpbmdVcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5BZGRTY2VuZSA9IGZ1bmN0aW9uIChhcmdfc2NlbmUsIGtleSkge1xyXG4gICAgICAgIGFyZ19zY2VuZS5Mb2FkKCk7XHJcbiAgICAgICAgdGhpcy5tYXBfc2NlbmVzW2tleV0gPSBhcmdfc2NlbmU7XHJcbiAgICAgICAgcmV0dXJuIGFyZ19zY2VuZTtcclxuICAgIH07XHJcbiAgICBTY2VuZU1hbmFnZXIucHJvdG90eXBlLkdldFNjZW5lID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcF9zY2VuZXNba2V5XTtcclxuICAgIH07XHJcbiAgICBTY2VuZU1hbmFnZXIucHJvdG90eXBlLkdldEN1cnJlbnRTY2VuZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2NlbmU7XHJcbiAgICB9O1xyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5DaGFuZ2VTY2VuZSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2NlbmUpXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lLkVuZCgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5tYXBfc2NlbmVzW2tleV07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuU3RhcnQoKTtcclxuICAgIH07XHJcbiAgICBTY2VuZU1hbmFnZXIucHJvdG90eXBlLlJlbW92ZVNjZW5lID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIGlmICh0aGlzLm1hcF9zY2VuZXNba2V5XSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hcF9zY2VuZXNba2V5XS5SZWxlYXNlKCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm1hcF9zY2VuZXNba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNjZW5lTWFuYWdlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU2NlbmVNYW5hZ2VyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQmluYXJ5UmVhZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQmluYXJ5UmVhZGVyKGFyZ19idWZmZXIpIHtcclxuICAgICAgICB0aGlzLmJ1ZmZlclZpZXcgPSBuZXcgRGF0YVZpZXcoYXJnX2J1ZmZlcik7XHJcbiAgICAgICAgdGhpcy5wb2ludCA9IDA7XHJcbiAgICB9XHJcbiAgICBCaW5hcnlSZWFkZXIucHJvdG90eXBlLkdldFN0cmluZyA9IGZ1bmN0aW9uIChzaXplKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IFwiXCI7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHJlYWQgPSB0aGlzLmJ1ZmZlclZpZXcuZ2V0SW50OCh0aGlzLnBvaW50KTtcclxuICAgICAgICAgICAgaWYgKHJlYWQgPiA5KVxyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocmVhZCk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZWFkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IFwiMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBcIjJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gXCIzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IFwiNFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBcIjVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gXCI2XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IFwiN1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBcIjhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gXCI5XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBCaW5hcnlSZWFkZXIucHJvdG90eXBlLkdldFdTdHJpbmcgPSBmdW5jdGlvbiAoc2l6ZSkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBcIlwiO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZSAqIDI7IGkrKykge1xyXG4gICAgICAgICAgICBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh0aGlzLmJ1ZmZlclZpZXcuZ2V0SW50OCh0aGlzLnBvaW50KSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBCaW5hcnlSZWFkZXIucHJvdG90eXBlLkdldENoYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuYnVmZmVyVmlldy5nZXRJbnQ4KHRoaXMucG9pbnQpO1xyXG4gICAgICAgIHRoaXMucG9pbnQgKz0gMTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIEJpbmFyeVJlYWRlci5wcm90b3R5cGUuR2V0RmxvYXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuYnVmZmVyVmlldy5nZXRGbG9hdDMyKHRoaXMucG9pbnQsIHRydWUpO1xyXG4gICAgICAgIHRoaXMucG9pbnQgKz0gNDtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIEJpbmFyeVJlYWRlci5wcm90b3R5cGUuR2V0RG91YmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLmJ1ZmZlclZpZXcuZ2V0RmxvYXQ2NCh0aGlzLnBvaW50LCB0cnVlKTtcclxuICAgICAgICB0aGlzLnBvaW50ICs9IDU7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBCaW5hcnlSZWFkZXIucHJvdG90eXBlLkdldEludCA9IGZ1bmN0aW9uIChzaXplKSB7XHJcbiAgICAgICAgaWYgKCFzaXplKSB7XHJcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLmJ1ZmZlclZpZXcuZ2V0SW50MzIodGhpcy5wb2ludCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnQgKz0gNDtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNpemUgPT0gMSkge1xyXG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5idWZmZXJWaWV3LmdldEludDgodGhpcy5wb2ludCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnQgKz0gMTtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc2l6ZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLmJ1ZmZlclZpZXcuZ2V0SW50MTYodGhpcy5wb2ludCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnQgKz0gMjtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc2l6ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLmJ1ZmZlclZpZXcuZ2V0SW50MzIodGhpcy5wb2ludCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnQgKz0gNDtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5HZXRVSW50ID0gZnVuY3Rpb24gKHNpemUpIHtcclxuICAgICAgICBpZiAoIXNpemUpIHtcclxuICAgICAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuYnVmZmVyVmlldy5nZXRVaW50MzIodGhpcy5wb2ludCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnQgKz0gNDtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNpemUgPT0gMSkge1xyXG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5idWZmZXJWaWV3LmdldFVpbnQ4KHRoaXMucG9pbnQpO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50ICs9IDE7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNpemUgPT0gMikge1xyXG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5idWZmZXJWaWV3LmdldFVpbnQxNih0aGlzLnBvaW50LCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5wb2ludCArPSAyO1xyXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzaXplID09IDQpIHtcclxuICAgICAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuYnVmZmVyVmlldy5nZXRVaW50MzIodGhpcy5wb2ludCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnQgKz0gNDtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJpbmFyeVJlYWRlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQmluYXJ5UmVhZGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQm94X0FBQkJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTWF0aC9HZW9tZXRyeS9Cb3hfQUFCQlwiKSk7XHJcbnZhciBCb3hfT0JCXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL01hdGgvR2VvbWV0cnkvQm94X09CQlwiKSk7XHJcbnZhciBHZW9tZXRyeUhlbHBlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9NYXRoL0dlb21ldHJ5L0dlb21ldHJ5SGVscGVyXCIpKTtcclxudmFyIFNwaGVyZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9NYXRoL0dlb21ldHJ5L1NwaGVyZVwiKSk7XHJcbnZhciBWZWN0b3IzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL01hdGgvVmVjdG9yM1wiKSk7XHJcbnZhciBDb2xsaXNpb25PYmplY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vUGFydHMvQ29sbGlzaW9uL0NvbGxpc2lvbk9iamVjdFwiKSk7XHJcbnZhciBDb2xsaXNpb25PYmplY3RDcmVhdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29sbGlzaW9uT2JqZWN0Q3JlYXRlcigpIHtcclxuICAgIH1cclxuICAgIENvbGxpc2lvbk9iamVjdENyZWF0ZXIuQ3JlYXRlUG9pbnQgPSBmdW5jdGlvbiAoYXJnX2dhbWVPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbGxpc2lvbk9iamVjdF8xLmRlZmF1bHQoYXJnX2dhbWVPYmplY3QsIG5ldyBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQoYXJnX2dhbWVPYmplY3QudHJhbnNmb3JtKSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uT2JqZWN0Q3JlYXRlci5DcmVhdGVTcGhlcmUgPSBmdW5jdGlvbiAoYXJnX3JhZGl1cywgYXJnX2dhbWVPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbGxpc2lvbk9iamVjdF8xLmRlZmF1bHQoYXJnX2dhbWVPYmplY3QsIG5ldyBDb2xsaXNpb25QcmltaXRpdmVfU3BoZXJlKGFyZ19yYWRpdXMsIGFyZ19nYW1lT2JqZWN0LnRyYW5zZm9ybSkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbk9iamVjdENyZWF0ZXIuQ3JlYXRlQ3ViZV9BQUJCID0gZnVuY3Rpb24gKGFyZ19sZW5ndGgsIGFyZ19nYW1lT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xsaXNpb25PYmplY3RfMS5kZWZhdWx0KGFyZ19nYW1lT2JqZWN0LCBuZXcgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCKGFyZ19sZW5ndGgsIGFyZ19nYW1lT2JqZWN0LnRyYW5zZm9ybSkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbk9iamVjdENyZWF0ZXIuQ3JlYXRlQ3ViZV9PQkIgPSBmdW5jdGlvbiAoYXJnX2xlbmd0aCwgYXJnX2dhbWVPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbGxpc2lvbk9iamVjdF8xLmRlZmF1bHQoYXJnX2dhbWVPYmplY3QsIG5ldyBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQihhcmdfbGVuZ3RoLCBhcmdfZ2FtZU9iamVjdC50cmFuc2Zvcm0pKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29sbGlzaW9uT2JqZWN0Q3JlYXRlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ29sbGlzaW9uT2JqZWN0Q3JlYXRlcjtcclxudmFyIENvbGxpc2lvblByaW1pdGl2ZV9Qb2ludCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbGxpc2lvblByaW1pdGl2ZV9Qb2ludChhcmdfdHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBhcmdfdHJhbnNmb3JtO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybS5Qb3NpdGlvbjtcclxuICAgIH1cclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Qb2ludC5wcm90b3R5cGUuSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQucHJvdG90eXBlLlByZUluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1BvaW50LnByb3RvdHlwZS5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMudHJhbnNmb3JtLlBvc2l0aW9uO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Qb2ludC5wcm90b3R5cGUuR2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtLlBvc2l0aW9uO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Qb2ludC5wcm90b3R5cGUuSXNIaXQgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gb3RoZXIuSXNIaXRQb2ludCh0aGlzKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQucHJvdG90eXBlLkdldE1heFBvaW50QW5kTWluUG9pbnQgPSBmdW5jdGlvbiAoYXJnX291dHB1dE1heCwgYXJnX291dHB1dE1pbikge1xyXG4gICAgICAgIHZhciBwb2ludCA9IHRoaXMudHJhbnNmb3JtLlBvc2l0aW9uO1xyXG4gICAgICAgIGFyZ19vdXRwdXRNYXguZGF0YSA9IHBvaW50LmRhdGE7XHJcbiAgICAgICAgYXJnX291dHB1dE1pbi5kYXRhID0gcG9pbnQuZGF0YTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQucHJvdG90eXBlLklzSGl0UG9pbnQgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gb3RoZXIuR2V0UG9zaXRpb24oKSA9PSB0aGlzLkdldFBvc2l0aW9uKCk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1BvaW50LnByb3RvdHlwZS5Jc0hpdFNwaGVyZSA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRQb2ludFNwaGVyZSh0aGlzLnBvc2l0aW9uLCBvdGhlci5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1BvaW50LnByb3RvdHlwZS5Jc0hpdEJveF9BQUJCID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5Jc0hpdFBvaW50Qm94X0FBQkIodGhpcy5wb3NpdGlvbiwgb3RoZXIuZ2VvbWV0cnkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Qb2ludC5wcm90b3R5cGUuSXNIaXRCb3hfT0JCID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5Jc0hpdFBvaW50Qm94X09CQih0aGlzLnBvc2l0aW9uLCBvdGhlci5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbGxpc2lvblByaW1pdGl2ZV9Qb2ludDtcclxufSgpKTtcclxuO1xyXG52YXIgQ29sbGlzaW9uUHJpbWl0aXZlX1NwaGVyZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbGxpc2lvblByaW1pdGl2ZV9TcGhlcmUoYXJnX3JhZGl1cywgYXJnX3RyYW5zZm9ybSkge1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gYXJnX3RyYW5zZm9ybTtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFNwaGVyZV8xLmRlZmF1bHQoYXJnX3JhZGl1cywgdGhpcy50cmFuc2Zvcm0uUG9zaXRpb24pO1xyXG4gICAgfVxyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1NwaGVyZS5wcm90b3R5cGUuSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfU3BoZXJlLnByb3RvdHlwZS5QcmVJbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9TcGhlcmUucHJvdG90eXBlLkdldE1heFBvaW50QW5kTWluUG9pbnQgPSBmdW5jdGlvbiAoYXJnX291dHB1dE1heCwgYXJnX291dHB1dE1pbikge1xyXG4gICAgICAgIGFyZ19vdXRwdXRNYXguZGF0YSA9IHRoaXMuZ2VvbWV0cnkucG9zaXRpb24uQWRkKG5ldyBWZWN0b3IzXzEuZGVmYXVsdCh0aGlzLmdlb21ldHJ5LnJhZGl1cywgdGhpcy5nZW9tZXRyeS5yYWRpdXMsIHRoaXMuZ2VvbWV0cnkucmFkaXVzKSkuZGF0YTtcclxuICAgICAgICBhcmdfb3V0cHV0TWluLmRhdGEgPSB0aGlzLmdlb21ldHJ5LnBvc2l0aW9uLlN1YihuZXcgVmVjdG9yM18xLmRlZmF1bHQodGhpcy5nZW9tZXRyeS5yYWRpdXMsIHRoaXMuZ2VvbWV0cnkucmFkaXVzLCB0aGlzLmdlb21ldHJ5LnJhZGl1cykpLmRhdGE7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1NwaGVyZS5wcm90b3R5cGUuVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkucG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybS5Qb3NpdGlvbjtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfU3BoZXJlLnByb3RvdHlwZS5Jc0hpdCA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBvdGhlci5Jc0hpdFNwaGVyZSh0aGlzKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfU3BoZXJlLnByb3RvdHlwZS5Jc0hpdEJveF9PQkIgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gR2VvbWV0cnlIZWxwZXJfMS5kZWZhdWx0LklzSGl0U3BoZXJlQm94X09CQih0aGlzLmdlb21ldHJ5LCBvdGhlci5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1NwaGVyZS5wcm90b3R5cGUuSXNIaXRQb2ludCA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRQb2ludFNwaGVyZShvdGhlci5wb3NpdGlvbiwgdGhpcy5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1NwaGVyZS5wcm90b3R5cGUuSXNIaXRTcGhlcmUgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gR2VvbWV0cnlIZWxwZXJfMS5kZWZhdWx0LklzSGl0U3BoZXJlU3BoZXJlKHRoaXMuZ2VvbWV0cnksIG90aGVyLmdlb21ldHJ5KTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfU3BoZXJlLnByb3RvdHlwZS5Jc0hpdEJveF9BQUJCID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5Jc0hpdFNwaGVyZUJveF9BQUJCKHRoaXMuZ2VvbWV0cnksIG90aGVyLmdlb21ldHJ5KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29sbGlzaW9uUHJpbWl0aXZlX1NwaGVyZTtcclxufSgpKTtcclxuO1xyXG52YXIgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCKGFyZ19sZW5ndGgsIGFyZ193ZWFrX3RyYW5zZm9ybSkge1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQm94X0FBQkJfMS5kZWZhdWx0KGFyZ19sZW5ndGgsIGFyZ193ZWFrX3RyYW5zZm9ybS5Qb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBhcmdfd2Vha190cmFuc2Zvcm07XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5pbml0TGVuZ3RoZXMgPSBhcmdfbGVuZ3RoLkRpdigyKTtcclxuICAgIH1cclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfQUFCQi5wcm90b3R5cGUuSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X0FBQkIucHJvdG90eXBlLlByZUluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCLnByb3RvdHlwZS5HZXRNYXhQb2ludEFuZE1pblBvaW50ID0gZnVuY3Rpb24gKGFyZ19vdXRwdXRNYXgsIGFyZ19vdXRwdXRNaW4pIHtcclxuICAgICAgICBhcmdfb3V0cHV0TWF4LmRhdGEgPSB0aGlzLmdlb21ldHJ5LnBvc2l0aW9uLkFkZCh0aGlzLmdlb21ldHJ5LmhhbGZMZW5ndGhlcykuZGF0YTtcclxuICAgICAgICBhcmdfb3V0cHV0TWluLmRhdGEgPSB0aGlzLmdlb21ldHJ5LnBvc2l0aW9uLlN1Yih0aGlzLmdlb21ldHJ5LmhhbGZMZW5ndGhlcykuZGF0YTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X0FBQkIucHJvdG90eXBlLlVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LnBvc2l0aW9uID0gdGhpcy50cmFuc2Zvcm0uUG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5oYWxmTGVuZ3RoZXMgPSB0aGlzLmdlb21ldHJ5LmluaXRMZW5ndGhlcy5NdWx0aXBseV9WZWMzKHRoaXMudHJhbnNmb3JtLlNjYWxlKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X0FBQkIucHJvdG90eXBlLklzSGl0ID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG90aGVyLklzSGl0Qm94X0FBQkIodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCLnByb3RvdHlwZS5Jc0hpdEJveF9PQkIgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gR2VvbWV0cnlIZWxwZXJfMS5kZWZhdWx0LklzSGl0Qm94X09CQkJveF9BQUJCKHRoaXMuZ2VvbWV0cnksIG90aGVyLmdlb21ldHJ5KTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X0FBQkIucHJvdG90eXBlLklzSGl0UG9pbnQgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gR2VvbWV0cnlIZWxwZXJfMS5kZWZhdWx0LklzSGl0UG9pbnRCb3hfQUFCQihvdGhlci5wb3NpdGlvbiwgdGhpcy5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCLnByb3RvdHlwZS5Jc0hpdFNwaGVyZSA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRTcGhlcmVCb3hfQUFCQihvdGhlci5nZW9tZXRyeSwgdGhpcy5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCLnByb3RvdHlwZS5Jc0hpdEJveF9BQUJCID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5Jc0hpdEJveF9BQUJCKHRoaXMuZ2VvbWV0cnksIG90aGVyLmdlb21ldHJ5KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCO1xyXG59KCkpO1xyXG47XHJcbnZhciBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfT0JCKGFyZ19sZW5ndGgsIGFyZ193ZWFrX3RyYW5zZm9ybSkge1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQm94X09CQl8xLmRlZmF1bHQoYXJnX2xlbmd0aCk7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBhcmdfd2Vha190cmFuc2Zvcm07XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5pbml0TGVuZ3RoZXMgPSBhcmdfbGVuZ3RoLkRpdigyKTtcclxuICAgIH1cclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfT0JCLnByb3RvdHlwZS5Jbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfT0JCLnByb3RvdHlwZS5QcmVJbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfT0JCLnByb3RvdHlwZS5HZXRNYXhQb2ludEFuZE1pblBvaW50ID0gZnVuY3Rpb24gKGFyZ19vdXRwdXRNYXgsIGFyZ19vdXRwdXRNaW4pIHtcclxuICAgICAgICB2YXIgYWFiYl9sZWd0aGVzID0gR2VvbWV0cnlIZWxwZXJfMS5kZWZhdWx0LkdldEJveF9PQkJDb250YWluQUFCQkxlbmd0aCh0aGlzLmdlb21ldHJ5KTtcclxuICAgICAgICBhcmdfb3V0cHV0TWF4LmRhdGEgPSB0aGlzLmdlb21ldHJ5LnBvc2l0aW9uLkFkZChhYWJiX2xlZ3RoZXMpLmRhdGE7XHJcbiAgICAgICAgYXJnX291dHB1dE1pbi5kYXRhID0gdGhpcy5nZW9tZXRyeS5wb3NpdGlvbi5TdWIoYWFiYl9sZWd0aGVzKS5kYXRhO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfT0JCLnByb3RvdHlwZS5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5wb3NpdGlvbiA9IHRoaXMudHJhbnNmb3JtLlBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuZGlyZWN0c1swXSA9IHRoaXMudHJhbnNmb3JtLkdldFJpZ2h0KCk7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5kaXJlY3RzWzFdID0gdGhpcy50cmFuc2Zvcm0uR2V0VXAoKTtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LmRpcmVjdHNbMl0gPSB0aGlzLnRyYW5zZm9ybS5HZXRGcm9udCgpO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuaGFsZkxlbmd0aGVzID0gdGhpcy5nZW9tZXRyeS5pbml0TGVuZ3RoZXMuTXVsdGlwbHlfVmVjMyh0aGlzLnRyYW5zZm9ybS5TY2FsZSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9PQkIucHJvdG90eXBlLklzSGl0ID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG90aGVyLklzSGl0Qm94X09CQih0aGlzKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQi5wcm90b3R5cGUuSXNIaXRCb3hfT0JCID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5Jc0hpdEJveF9PQkIob3RoZXIuZ2VvbWV0cnksIHRoaXMuZ2VvbWV0cnkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfT0JCLnByb3RvdHlwZS5Jc0hpdFBvaW50ID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5Jc0hpdFBvaW50Qm94X09CQihvdGhlci5wb3NpdGlvbiwgdGhpcy5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9PQkIucHJvdG90eXBlLklzSGl0U3BoZXJlID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5Jc0hpdFNwaGVyZUJveF9PQkIob3RoZXIuZ2VvbWV0cnksIHRoaXMuZ2VvbWV0cnkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfT0JCLnByb3RvdHlwZS5Jc0hpdEJveF9BQUJCID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5Jc0hpdEJveF9PQkJCb3hfQUFCQihvdGhlci5nZW9tZXRyeSwgdGhpcy5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfT0JCO1xyXG59KCkpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVmVjdG9yNF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9NYXRoL1ZlY3RvcjRcIikpO1xyXG52YXIgQ29sb3JDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29sb3JDb250cm9sbGVyKCkge1xyXG4gICAgfVxyXG4gICAgQ29sb3JDb250cm9sbGVyLmhzdmEgPSBmdW5jdGlvbiAoaCwgcywgdiwgYSkge1xyXG4gICAgICAgIGlmIChzID4gMSB8fCB2ID4gMSB8fCBhID4gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0aCA9IGggJSAzNjA7XHJcbiAgICAgICAgdmFyIGkgPSBNYXRoLmZsb29yKHRoIC8gNjApO1xyXG4gICAgICAgIHZhciBmID0gdGggLyA2MCAtIGk7XHJcbiAgICAgICAgdmFyIG0gPSB2ICogKDEgLSBzKTtcclxuICAgICAgICB2YXIgbiA9IHYgKiAoMSAtIHMgKiBmKTtcclxuICAgICAgICB2YXIgayA9IHYgKiAoMSAtIHMgKiAoMSAtIGYpKTtcclxuICAgICAgICB2YXIgY29sb3I7XHJcbiAgICAgICAgaWYgKCEocyA+IDApICYmICEocyA8IDApKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gbmV3IFZlY3RvcjRfMS5kZWZhdWx0KHYsIHYsIHYsIGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHIgPSBuZXcgQXJyYXkodiwgbiwgbSwgbSwgaywgdik7XHJcbiAgICAgICAgICAgIHZhciBnID0gbmV3IEFycmF5KGssIHYsIHYsIG4sIG0sIG0pO1xyXG4gICAgICAgICAgICB2YXIgYiA9IG5ldyBBcnJheShtLCBtLCBrLCB2LCB2LCBuKTtcclxuICAgICAgICAgICAgY29sb3IgPSBuZXcgVmVjdG9yNF8xLmRlZmF1bHQocltpXSwgZ1tpXSwgYltpXSwgYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29sb3JDb250cm9sbGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDb2xvckNvbnRyb2xsZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBGaWxlTG9hZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRmlsZUxvYWRlcigpIHtcclxuICAgIH1cclxuICAgIEZpbGVMb2FkZXIuTG9hZFRleHQgPSBmdW5jdGlvbiAoYXJnX2ZpbGVQYXRoLCBpc0FzeW5jaCkge1xyXG4gICAgICAgIHZhciB4bWxIdHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgaWYgKGlzQXN5bmNoKVxyXG4gICAgICAgICAgICB4bWxIdHRwLm9wZW4oXCJHRVRcIiwgYXJnX2ZpbGVQYXRoLCBpc0FzeW5jaCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHhtbEh0dHAub3BlbihcIkdFVFwiLCBhcmdfZmlsZVBhdGgsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgeG1sSHR0cC5zZW5kKG51bGwpO1xyXG4gICAgICAgIHZhciBkYXRhID0geG1sSHR0cC5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG4gICAgRmlsZUxvYWRlci5Mb2FkQmluID0gZnVuY3Rpb24gKGFyZ19maWxlUGF0aCwgYXJnX291dCkge1xyXG4gICAgICAgIHZhciB4bWxIdHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeG1sSHR0cC5vcGVuKFwiR0VUXCIsIGFyZ19maWxlUGF0aCwgdHJ1ZSk7XHJcbiAgICAgICAgeG1sSHR0cC5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XHJcbiAgICAgICAgeG1sSHR0cC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIE9uQmluTG9hZChhcmdfb3V0LCB4bWxIdHRwLnJlc3BvbnNlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHhtbEh0dHAuc2VuZChudWxsKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRmlsZUxvYWRlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRmlsZUxvYWRlcjtcclxuZnVuY3Rpb24gT25CaW5Mb2FkKGFyZ19vdXQsIGFyZ19hcnlCdWZmZXIpIHtcclxuICAgIGFyZ19vdXQuYnVmZmVyID0gYXJnX2FyeUJ1ZmZlcjtcclxuICAgIGFyZ19vdXQuSW5pdGlhbGl6ZSgpO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDb2xvckNvbnRyb2xsZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db2xvckNvbnRyb2xsZXJcIikpO1xyXG52YXIgR2VvbWV0cnlHZW5lcmF0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHZW9tZXRyeUdlbmVyYXRlcigpIHtcclxuICAgIH1cclxuICAgIEdlb21ldHJ5R2VuZXJhdGVyLkNyZWF0ZVRvcnVzID0gZnVuY3Rpb24gKHJvdywgY29sdW1uLCBpcmFkLCBvcmFkLCBjb2xvcikge1xyXG4gICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoKSwgbm9yID0gbmV3IEFycmF5KCksIGNvbCA9IG5ldyBBcnJheSgpLCBzdCA9IG5ldyBBcnJheSgpLCBpZHggPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSByb3c7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGguUEkgKiAyIC8gcm93ICogaTtcclxuICAgICAgICAgICAgdmFyIHJyID0gTWF0aC5jb3Mocik7XHJcbiAgICAgICAgICAgIHZhciByeSA9IE1hdGguc2luKHIpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDw9IGNvbHVtbjsgaWkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyID0gTWF0aC5QSSAqIDIgLyBjb2x1bW4gKiBpaTtcclxuICAgICAgICAgICAgICAgIHZhciB0eCA9IChyciAqIGlyYWQgKyBvcmFkKSAqIE1hdGguY29zKHRyKTtcclxuICAgICAgICAgICAgICAgIHZhciB0eSA9IHJ5ICogaXJhZDtcclxuICAgICAgICAgICAgICAgIHZhciB0eiA9IChyciAqIGlyYWQgKyBvcmFkKSAqIE1hdGguc2luKHRyKTtcclxuICAgICAgICAgICAgICAgIHZhciByeCA9IHJyICogTWF0aC5jb3ModHIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJ6ID0gcnIgKiBNYXRoLnNpbih0cik7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGM7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YyA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGMgPSBDb2xvckNvbnRyb2xsZXJfMS5kZWZhdWx0LmhzdmEoMzYwIC8gY29sdW1uICogaWksIDEsIDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHJzID0gMSAvIGNvbHVtbiAqIGlpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJ0ID0gMSAvIHJvdyAqIGkgKyAwLjU7XHJcbiAgICAgICAgICAgICAgICBpZiAocnQgPiAxLjApIHtcclxuICAgICAgICAgICAgICAgICAgICBydCAtPSAxLjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydCA9IDEuMCAtIHJ0O1xyXG4gICAgICAgICAgICAgICAgcG9zLnB1c2godHgsIHR5LCB0eik7XHJcbiAgICAgICAgICAgICAgICBub3IucHVzaChyeCwgcnksIHJ6KTtcclxuICAgICAgICAgICAgICAgIGNvbC5wdXNoKHRjLngsIHRjLnksIHRjLnosIHRjLncpO1xyXG4gICAgICAgICAgICAgICAgc3QucHVzaChycywgcnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByb3c7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGlpID0gMDsgaWkgPCBjb2x1bW47IGlpKyspIHtcclxuICAgICAgICAgICAgICAgIHIgPSAoY29sdW1uICsgMSkgKiBpICsgaWk7XHJcbiAgICAgICAgICAgICAgICBpZHgucHVzaChyLCByICsgY29sdW1uICsgMSwgciArIDEpO1xyXG4gICAgICAgICAgICAgICAgaWR4LnB1c2gociArIGNvbHVtbiArIDEsIHIgKyBjb2x1bW4gKyAyLCByICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IHsgcDogcG9zLCBuOiBub3IsIGM6IGNvbCwgdXY6IHN0LCBpOiBpZHggfTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5R2VuZXJhdGVyLkNyZWF0ZVNwaGVyZSA9IGZ1bmN0aW9uIChyb3csIGNvbHVtbiwgcmFkLCBjb2xvcikge1xyXG4gICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoKSwgbm9yID0gbmV3IEFycmF5KCksIGNvbCA9IG5ldyBBcnJheSgpLCBzdCA9IG5ldyBBcnJheSgpLCBpZHggPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSByb3c7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGguUEkgLyByb3cgKiBpO1xyXG4gICAgICAgICAgICB2YXIgcnkgPSBNYXRoLmNvcyhyKTtcclxuICAgICAgICAgICAgdmFyIHJyID0gTWF0aC5zaW4ocik7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPD0gY29sdW1uOyBpaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHIgPSBNYXRoLlBJICogMiAvIGNvbHVtbiAqIGlpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHR4ID0gcnIgKiByYWQgKiBNYXRoLmNvcyh0cik7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHkgPSByeSAqIHJhZDtcclxuICAgICAgICAgICAgICAgIHZhciB0eiA9IHJyICogcmFkICogTWF0aC5zaW4odHIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJ4ID0gcnIgKiBNYXRoLmNvcyh0cik7XHJcbiAgICAgICAgICAgICAgICB2YXIgcnogPSByciAqIE1hdGguc2luKHRyKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YyA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGMgPSBDb2xvckNvbnRyb2xsZXJfMS5kZWZhdWx0LmhzdmEoMzYwIC8gcm93ICogaSwgMSwgMSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwb3MucHVzaCh0eCwgdHksIHR6KTtcclxuICAgICAgICAgICAgICAgIG5vci5wdXNoKHJ4LCByeSwgcnopO1xyXG4gICAgICAgICAgICAgICAgY29sLnB1c2godGNbMF0sIHRjWzFdLCB0Y1syXSwgdGNbM10pO1xyXG4gICAgICAgICAgICAgICAgc3QucHVzaCgxIC0gMSAvIGNvbHVtbiAqIGlpLCAxIC8gcm93ICogaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgciA9IDA7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJvdzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAoaWkgPSAwOyBpaSA8IGNvbHVtbjsgaWkrKykge1xyXG4gICAgICAgICAgICAgICAgciA9IChjb2x1bW4gKyAxKSAqIGkgKyBpaTtcclxuICAgICAgICAgICAgICAgIGlkeC5wdXNoKHIsIHIgKyAxLCByICsgY29sdW1uICsgMik7XHJcbiAgICAgICAgICAgICAgICBpZHgucHVzaChyLCByICsgY29sdW1uICsgMiwgciArIGNvbHVtbiArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHA6IHBvcywgbjogbm9yLCBjOiBjb2wsIHV2OiBzdCwgaTogaWR4IH07XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlHZW5lcmF0ZXIuQ3JlYXRlQ3ViZSA9IGZ1bmN0aW9uIChzaWRlLCBjb2xvcikge1xyXG4gICAgICAgIHZhciBocyA9IHNpZGUgKiAwLjU7XHJcbiAgICAgICAgdmFyIHBvcyA9IFtcclxuICAgICAgICAgICAgLWhzLCAtaHMsIGhzLCBocywgLWhzLCBocywgaHMsIGhzLCBocywgLWhzLCBocywgaHMsXHJcbiAgICAgICAgICAgIC1ocywgLWhzLCAtaHMsIC1ocywgaHMsIC1ocywgaHMsIGhzLCAtaHMsIGhzLCAtaHMsIC1ocyxcclxuICAgICAgICAgICAgLWhzLCBocywgLWhzLCAtaHMsIGhzLCBocywgaHMsIGhzLCBocywgaHMsIGhzLCAtaHMsXHJcbiAgICAgICAgICAgIC1ocywgLWhzLCAtaHMsIGhzLCAtaHMsIC1ocywgaHMsIC1ocywgaHMsIC1ocywgLWhzLCBocyxcclxuICAgICAgICAgICAgaHMsIC1ocywgLWhzLCBocywgaHMsIC1ocywgaHMsIGhzLCBocywgaHMsIC1ocywgaHMsXHJcbiAgICAgICAgICAgIC1ocywgLWhzLCAtaHMsIC1ocywgLWhzLCBocywgLWhzLCBocywgaHMsIC1ocywgaHMsIC1oc1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgdmFyIG5vciA9IFtcclxuICAgICAgICAgICAgLTEuMCwgLTEuMCwgMS4wLCAxLjAsIC0xLjAsIDEuMCwgMS4wLCAxLjAsIDEuMCwgLTEuMCwgMS4wLCAxLjAsXHJcbiAgICAgICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsIC0xLjAsIDEuMCwgLTEuMCwgMS4wLCAxLjAsIC0xLjAsIDEuMCwgLTEuMCwgLTEuMCxcclxuICAgICAgICAgICAgLTEuMCwgMS4wLCAtMS4wLCAtMS4wLCAxLjAsIDEuMCwgMS4wLCAxLjAsIDEuMCwgMS4wLCAxLjAsIC0xLjAsXHJcbiAgICAgICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsIDEuMCwgLTEuMCwgLTEuMCwgMS4wLCAtMS4wLCAxLjAsIC0xLjAsIC0xLjAsIDEuMCxcclxuICAgICAgICAgICAgMS4wLCAtMS4wLCAtMS4wLCAxLjAsIDEuMCwgLTEuMCwgMS4wLCAxLjAsIDEuMCwgMS4wLCAtMS4wLCAxLjAsXHJcbiAgICAgICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsIC0xLjAsIC0xLjAsIDEuMCwgLTEuMCwgMS4wLCAxLjAsIC0xLjAsIDEuMCwgLTEuMFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdmFyIGNvbCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zLmxlbmd0aCAvIDM7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YyA9IGNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGMgPSBDb2xvckNvbnRyb2xsZXJfMS5kZWZhdWx0LmhzdmEoMzYwIC8gcG9zLmxlbmd0aCAvIDMgKiBpLCAxLCAxLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb2wucHVzaCh0Yy54LCB0Yy55LCB0Yy56LCB0Yy53KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN0ID0gW1xyXG4gICAgICAgICAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCxcclxuICAgICAgICAgICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXHJcbiAgICAgICAgICAgIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLFxyXG4gICAgICAgICAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCxcclxuICAgICAgICAgICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXHJcbiAgICAgICAgICAgIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wXHJcbiAgICAgICAgXTtcclxuICAgICAgICB2YXIgaWR4ID0gW1xyXG4gICAgICAgICAgICAwLCAxLCAyLCAwLCAyLCAzLFxyXG4gICAgICAgICAgICA0LCA1LCA2LCA0LCA2LCA3LFxyXG4gICAgICAgICAgICA4LCA5LCAxMCwgOCwgMTAsIDExLFxyXG4gICAgICAgICAgICAxMiwgMTMsIDE0LCAxMiwgMTQsIDE1LFxyXG4gICAgICAgICAgICAxNiwgMTcsIDE4LCAxNiwgMTgsIDE5LFxyXG4gICAgICAgICAgICAyMCwgMjEsIDIyLCAyMCwgMjIsIDIzXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4geyBwOiBwb3MsIG46IG5vciwgYzogY29sLCB1djogc3QsIGk6IGlkeCB9O1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5R2VuZXJhdGVyLkNyZWF0ZVBsYW5lID0gZnVuY3Rpb24gKGFyZ19zaXplLCBpc1JldmVyc2UsIGFyZ19jb2xvcikge1xyXG4gICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB2YXIgbm9yID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdmFyIGNvbCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHZhciBpZHggPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBwb3MgPSBbXHJcbiAgICAgICAgICAgIC1hcmdfc2l6ZS54LCBhcmdfc2l6ZS55LCAwLjAsXHJcbiAgICAgICAgICAgIGFyZ19zaXplLngsIGFyZ19zaXplLnksIDAuMCxcclxuICAgICAgICAgICAgLWFyZ19zaXplLngsIC1hcmdfc2l6ZS55LCAwLjAsXHJcbiAgICAgICAgICAgIGFyZ19zaXplLngsIC1hcmdfc2l6ZS55LCAwLjAsXHJcbiAgICAgICAgXTtcclxuICAgICAgICBub3IgPSBbXHJcbiAgICAgICAgICAgIDAuMCwgMC4wLCAtMS4wLFxyXG4gICAgICAgICAgICAwLjAsIDAuMCwgLTEuMCxcclxuICAgICAgICAgICAgMC4wLCAwLjAsIC0xLjAsXHJcbiAgICAgICAgICAgIDAuMCwgMC4wLCAtMS4wLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgaWYgKGFyZ19jb2xvcilcclxuICAgICAgICAgICAgY29sID0gW1xyXG4gICAgICAgICAgICAgICAgYXJnX2NvbG9yLngsIGFyZ19jb2xvci55LCBhcmdfY29sb3IueiwgYXJnX2NvbG9yLncsXHJcbiAgICAgICAgICAgICAgICBhcmdfY29sb3IueCwgYXJnX2NvbG9yLnksIGFyZ19jb2xvci56LCBhcmdfY29sb3IudyxcclxuICAgICAgICAgICAgICAgIGFyZ19jb2xvci54LCBhcmdfY29sb3IueSwgYXJnX2NvbG9yLnosIGFyZ19jb2xvci53LFxyXG4gICAgICAgICAgICAgICAgYXJnX2NvbG9yLngsIGFyZ19jb2xvci55LCBhcmdfY29sb3IueiwgYXJnX2NvbG9yLncsXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgaWR4ID0gW1xyXG4gICAgICAgICAgICAyLCAzLCAxLFxyXG4gICAgICAgICAgICAyLCAxLCAwLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgaWYgKGlzUmV2ZXJzZSlcclxuICAgICAgICAgICAgdXYgPSBbXHJcbiAgICAgICAgICAgICAgICAwLjAsIDEuMCxcclxuICAgICAgICAgICAgICAgIDEuMCwgMS4wLFxyXG4gICAgICAgICAgICAgICAgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAxLjAsIDAuMFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB1diA9IFtcclxuICAgICAgICAgICAgICAgIDAuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgMS4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAwLjAsIDEuMCxcclxuICAgICAgICAgICAgICAgIDEuMCwgMS4wXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHA6IHBvcywgbjogbm9yLCBjOiBjb2wsIGk6IGlkeCwgdXY6IHV2IH07XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlHZW5lcmF0ZXIuQ3JlYXRlVGV4dEdlb21ldHJ5ID0gZnVuY3Rpb24gKHRleHRMZW5ndGgpIHtcclxuICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdmFyIGlkeCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHZhciB1bml0ID0gMS4wO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBvcy5wdXNoKC11bml0ICogMC41ICsgaSAqIHVuaXQsIHVuaXQsIDAuMCk7XHJcbiAgICAgICAgICAgIHBvcy5wdXNoKHVuaXQgKiAwLjUgKyBpICogdW5pdCwgdW5pdCwgMC4wKTtcclxuICAgICAgICAgICAgcG9zLnB1c2goLXVuaXQgKiAwLjUgKyBpICogdW5pdCwgLXVuaXQsIDAuMCk7XHJcbiAgICAgICAgICAgIHBvcy5wdXNoKHVuaXQgKiAwLjUgKyBpICogdW5pdCwgLXVuaXQsIDAuMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlkeC5wdXNoKDIgKyBpICogNCwgMyArIGkgKiA0LCAxICsgaSAqIDQpO1xyXG4gICAgICAgICAgICBpZHgucHVzaCgyICsgaSAqIDQsIDEgKyBpICogNCwgMCArIGkgKiA0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0TGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdXYucHVzaCgwLjAsIDEuMCk7XHJcbiAgICAgICAgICAgIHV2LnB1c2goMS4wLCAxLjApO1xyXG4gICAgICAgICAgICB1di5wdXNoKDAuMCwgMC4wKTtcclxuICAgICAgICAgICAgdXYucHVzaCgxLjAsIDAuMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHA6IHBvcywgaTogaWR4LCB1djogdXYgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2VvbWV0cnlHZW5lcmF0ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEdlb21ldHJ5R2VuZXJhdGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9NYXRoL1ZlY3RvcjJcIikpO1xyXG52YXIgSW5wdXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBJbnB1dCgpIHtcclxuICAgIH1cclxuICAgIElucHV0LkdldENhbnZhc1Bvc2l0aW9uID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KGUuY2xpZW50WCAtIHRoaXMuY2FudmFzLm9mZnNldExlZnQgLSB0aGlzLmNhbnZhcy53aWR0aCAqIDAuNSwgZS5jbGllbnRZIC0gdGhpcy5jYW52YXMub2Zmc2V0VG9wIC0gdGhpcy5jYW52YXMuaGVpZ2h0ICogMC41KTtcclxuICAgIH07XHJcbiAgICBJbnB1dC5BZGRDbGlja0V2ZW50ID0gZnVuY3Rpb24gKGFyZ19vYmosIGlzVXNlRXZlbnQpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSB7IG9iajogYXJnX29iaiwgaGFuZGxlRXZlbnQ6IE9uQ2xpY2sgfTtcclxuICAgICAgICBpZiAoaXNVc2VFdmVudClcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50LCBpc1VzZUV2ZW50KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIElucHV0LkFkZE1vdXNlRG93bkV2ZW50ID0gZnVuY3Rpb24gKGFyZ19vYmosIGlzVXNlRXZlbnQpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSB7IG9iajogYXJnX29iaiwgaGFuZGxlRXZlbnQ6IE9uTW91c2VEb3duIH07XHJcbiAgICAgICAgaWYgKGlzVXNlRXZlbnQpXHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZXZlbnQsIGlzVXNlRXZlbnQpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIElucHV0LkFkZE1vdXNlVXBFdmVudCA9IGZ1bmN0aW9uIChhcmdfb2JqLCBpc1VzZUV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGV2ZW50ID0geyBvYmo6IGFyZ19vYmosIGhhbmRsZUV2ZW50OiBPbk1vdXNlVXAgfTtcclxuICAgICAgICBpZiAoaXNVc2VFdmVudClcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZXZlbnQsIGlzVXNlRXZlbnQpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBldmVudCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBJbnB1dC5BZGRLZXlVcEV2ZW50ID0gZnVuY3Rpb24gKGFyZ19vYmosIGlzVXNlRXZlbnQpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSB7IG9iajogYXJnX29iaiwgaGFuZGxlRXZlbnQ6IE9uS2V5VXAgfTtcclxuICAgICAgICBpZiAoaXNVc2VFdmVudClcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGV2ZW50LCBpc1VzZUV2ZW50KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIElucHV0LkFkZEtleURvd25FdmVudCA9IGZ1bmN0aW9uIChhcmdfb2JqLCBpc1VzZUV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGV2ZW50ID0geyBvYmo6IGFyZ19vYmosIGhhbmRsZUV2ZW50OiBPbktleURvd24gfTtcclxuICAgICAgICBpZiAoaXNVc2VFdmVudClcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQsIGlzVXNlRXZlbnQpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBJbnB1dC5BZGRNb3VzZU1vdmVFdmVudCA9IGZ1bmN0aW9uIChhcmdfb2JqLCBpc1VzZUV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGV2ZW50ID0geyBvYmo6IGFyZ19vYmosIGhhbmRsZUV2ZW50OiBPbk1vdXNlTW92ZSB9O1xyXG4gICAgICAgIGlmIChpc1VzZUV2ZW50KVxyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGV2ZW50LCBpc1VzZUV2ZW50KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBldmVudCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBJbnB1dC5BZGRNb3VzZVdoZWVsRXZlbnQgPSBmdW5jdGlvbiAoYXJnX29iaiwgaXNVc2VFdmVudCkge1xyXG4gICAgICAgIHZhciBldmVudCA9IHsgb2JqOiBhcmdfb2JqLCBoYW5kbGVFdmVudDogT25Nb3VzZVdoZWVsIH07XHJcbiAgICAgICAgaWYgKGlzVXNlRXZlbnQpXHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIGV2ZW50LCBpc1VzZUV2ZW50KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgZXZlbnQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIElucHV0O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBJbnB1dDtcclxuZnVuY3Rpb24gT25DbGljayhlKSB7XHJcbiAgICB0aGlzLm9iai5PbkNsaWNrKGUpO1xyXG59XHJcbmZ1bmN0aW9uIE9uS2V5RG93bihlKSB7XHJcbiAgICB0aGlzLm9iai5PbktleURvd24oZSk7XHJcbn1cclxuZnVuY3Rpb24gT25LZXlVcChlKSB7XHJcbiAgICB0aGlzLm9iai5PbktleVVwKGUpO1xyXG59XHJcbmZ1bmN0aW9uIE9uTW91c2VVcChlKSB7XHJcbiAgICB0aGlzLm9iai5Pbk1vdXNlVXAoZSk7XHJcbn1cclxuZnVuY3Rpb24gT25Nb3VzZURvd24oZSkge1xyXG4gICAgdGhpcy5vYmouT25Nb3VzZVVwKGUpO1xyXG59XHJcbmZ1bmN0aW9uIE9uTW91c2VNb3ZlKGUpIHtcclxuICAgIHRoaXMub2JqLk9uTW91c2VNb3ZlKGUpO1xyXG59XHJcbmZ1bmN0aW9uIE9uTW91c2VXaGVlbChlKSB7XHJcbiAgICB0aGlzLm9iai5Pbk1vdXNlV2hlZWwoZSk7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFRleHR1cmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vUmVzb3VyY2UvVGV4dHVyZVwiKSk7XHJcbnZhciBNYXRlcmlhbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9SZXNvdXJjZS9NYXRlcmlhbFwiKSk7XHJcbnZhciBTaGFkZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vUmVzb3VyY2UvU2hhZGVyXCIpKTtcclxudmFyIEdlb21ldHJ5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1Jlc291cmNlL0dlb21ldHJ5XCIpKTtcclxudmFyIFZlY3RvcjRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTWF0aC9WZWN0b3I0XCIpKTtcclxudmFyIEZyYW1lQnVmZmVyVGV4dHVyZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9SZXNvdXJjZS9GcmFtZUJ1ZmZlclRleHR1cmVcIikpO1xyXG52YXIgTWVzaF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9SZXNvdXJjZS9NZXNoXCIpKTtcclxudmFyIEZpbGVMb2FkZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9GaWxlTG9hZGVyXCIpKTtcclxudmFyIEJpbmFyeVJlYWRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9Ub29sL0JpbmFyeVJlYWRlclwiKSk7XHJcbnZhciBTb3VuZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9SZXNvdXJjZS9Tb3VuZFwiKSk7XHJcbnZhciBWZXJ0ZXhUeXBlO1xyXG4oZnVuY3Rpb24gKFZlcnRleFR5cGUpIHtcclxuICAgIFZlcnRleFR5cGVbVmVydGV4VHlwZVtcIlZlcnRleF9VVlwiXSA9IDBdID0gXCJWZXJ0ZXhfVVZcIjtcclxuICAgIFZlcnRleFR5cGVbVmVydGV4VHlwZVtcIlZlcnRleF9Ob3JtYWxcIl0gPSAxXSA9IFwiVmVydGV4X05vcm1hbFwiO1xyXG4gICAgVmVydGV4VHlwZVtWZXJ0ZXhUeXBlW1wiVmVydGV4X1VWX05vcm1hbFwiXSA9IDJdID0gXCJWZXJ0ZXhfVVZfTm9ybWFsXCI7XHJcbiAgICBWZXJ0ZXhUeXBlW1ZlcnRleFR5cGVbXCJWZXJ0ZXhfVVZfTm9ybWFsX0NvbG9yXCJdID0gM10gPSBcIlZlcnRleF9VVl9Ob3JtYWxfQ29sb3JcIjtcclxuICAgIFZlcnRleFR5cGVbVmVydGV4VHlwZVtcIlZlcnRleF9Nb2RlbF9TaW5nbGVCb25lXCJdID0gNF0gPSBcIlZlcnRleF9Nb2RlbF9TaW5nbGVCb25lXCI7XHJcbiAgICBWZXJ0ZXhUeXBlW1ZlcnRleFR5cGVbXCJWZXJ0ZXhfTW9kZWxfRG91YmxlQm9uZVwiXSA9IDVdID0gXCJWZXJ0ZXhfTW9kZWxfRG91YmxlQm9uZVwiO1xyXG4gICAgVmVydGV4VHlwZVtWZXJ0ZXhUeXBlW1wiVmVydGV4X01vZGVsX1F1YWRCb25lXCJdID0gNl0gPSBcIlZlcnRleF9Nb2RlbF9RdWFkQm9uZVwiO1xyXG4gICAgVmVydGV4VHlwZVtWZXJ0ZXhUeXBlW1wiVmVydGV4X01vZGVsX1NERUZCb25lXCJdID0gN10gPSBcIlZlcnRleF9Nb2RlbF9TREVGQm9uZVwiO1xyXG4gICAgVmVydGV4VHlwZVtWZXJ0ZXhUeXBlW1wiVmVydGV4X01vZGVsX01peFwiXSA9IDhdID0gXCJWZXJ0ZXhfTW9kZWxfTWl4XCI7XHJcbn0pKFZlcnRleFR5cGUgfHwgKFZlcnRleFR5cGUgPSB7fSkpO1xyXG5mdW5jdGlvbiBHZXREaXJlY3RvcnkoYXJnX3BhdGgpIHtcclxuICAgIHZhciBzcGxpdGVkID0gYXJnX3BhdGguc3BsaXQoXCIvXCIpO1xyXG4gICAgdmFyIG91dHB1dCA9IFwiXCI7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwbGl0ZWQubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgb3V0cHV0ICs9IHNwbGl0ZWRbaV0gKyBcIi9cIjtcclxuICAgIH1cclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbn1cclxudmFyIEIzTUhvbGRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEIzTUhvbGRlcigpIHtcclxuICAgIH1cclxuICAgIEIzTUhvbGRlci5wcm90b3R5cGUuSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZ2VvbWV0cnk7XHJcbiAgICAgICAgdmFyIGFyeV9tYXRlcmlhbCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuYnVmZmVyUmVhZGVyID0gbmV3IEJpbmFyeVJlYWRlcl8xLmRlZmF1bHQodGhpcy5idWZmZXIpO1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9oZWRlclRlc3RcclxuICAgICAgICAgICAgdmFyIGhlYWRTdHIgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRTdHJpbmcoMTUpO1xyXG4gICAgICAgICAgICBpZiAoaGVhZFN0ciAhPSBcIkJ1dGkzRE1vZGVsRGF0YVwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL21vZGVs44Gu5ZCN5YmN44Gq44GpICBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB2ZXJzaW9uID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgLy8w44Gnc3RkOjp3c3RyaW5nICwx44Gnc3RkOjpzdHJpbmdcclxuICAgICAgICAgICAgdmFyIGVuY29kZVR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0Q291bnQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoKTtcclxuICAgICAgICAgICAgLy/liLbkvZzogIXjga7lkI3liY3jga7oqq3jgb/ovrzjgb9cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWVTdHI7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW5jb2RlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVTdHIgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRTdHJpbmcodGV4dENvdW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVTdHIgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRXU3RyaW5nKHRleHRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/liLbkvZzogIXjga7lkI3liY3jga7oqq3jgb/ovrzjgb8oZW5nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0Q291bnQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBuYW1lU3RyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuY29kZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lU3RyID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0U3RyaW5nKHRleHRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lU3RyID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0V1N0cmluZyh0ZXh0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v44Oi44OH44Or5ZCNXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHRDb3VudCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWVXU3RyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuY29kZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lV1N0ciA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldFN0cmluZyh0ZXh0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVdTdHIgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRXU3RyaW5nKHRleHRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/jg6Ljg4fjg6vlkI3oi7FcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dENvdW50ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmFtZVdTdHI7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW5jb2RlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVXU3RyID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0U3RyaW5nKHRleHRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lV1N0ciA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldFdTdHJpbmcodGV4dENvdW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+OCs+ODoeODs+ODiFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0Q291bnQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBuYW1lV1N0cjtcclxuICAgICAgICAgICAgICAgIGlmIChlbmNvZGVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVdTdHIgPSAodGhpcy5idWZmZXJSZWFkZXIuR2V0U3RyaW5nKHRleHRDb3VudCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVdTdHIgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRXU3RyaW5nKHRleHRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/jgrPjg6Hjg7Pjg4joi7FcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dENvdW50ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmFtZVdTdHI7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW5jb2RlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVXU3RyID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0U3RyaW5nKHRleHRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lV1N0ciA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldFdTdHJpbmcodGV4dENvdW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+mggueCueOCpOODs+ODh+ODg+OCr+OCueOBruODkOOCpOODiOaVsFxyXG4gICAgICAgIHZhciB2ZXJ0ZXhJbmRleEJ5dGVTaXplID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgIC8v44Oe44OG44Oq44Ki44Or44Kk44Oz44OH44OD44Kv44K544Gu44OQ44Kk44OI5pWwXHJcbiAgICAgICAgdmFyIG1hdGVyaWFsSW5kZXhCeXRlU2l6ZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAvL+ODnOODvOODs+OCpOODs+ODh+ODg+OCr+OCueOBruODkOOCpOODiOaVsFxyXG4gICAgICAgIHZhciBib25lSW5kZXhCeXRlQ291bnQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgLy/jg6Ljg7zjg5XjgqTjg7Pjg4fjg4Pjgq/jgrnjga7jg5DjgqTjg4jmlbBcclxuICAgICAgICB2YXIgbW9ycGhJbmRleEJ5dGVTaXplID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgIC8v6aCC54K55qeL6YCg5L2T44Gu5YiX5oyZ5Z6LXHJcbiAgICAgICAgdmFyIHR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgdmFyIHV2RXhDb3VudCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICB2YXIgdmVydGV4Q291bnQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRVSW50KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X1VWX05vcm1hbDpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHV2RXhDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMSA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMyA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzMucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMSA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzIgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8zID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfNCA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzMucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl80LnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfU2luZ2xlQm9uZTpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHV2RXhDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMSA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzIgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMyA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzMucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMyA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzQgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8zLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfNC5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9Eb3VibGVCb25lOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodXZFeENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMSA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzIgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8zID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8zLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMyA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzQgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzMucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl80LnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfUXVhZEJvbmU6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh1dkV4Q291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IC10aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IC10aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMSA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXg0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMSA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzIgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzMgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMy5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMSA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzIgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8zID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfNCA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXg0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8zLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfNC5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9TREVGQm9uZTpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcInNkZWYgaXMgbm90IHN1cHBvcnQuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfTWl4OlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodXZFeENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQ0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmVydGV4VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9TaW5nbGVCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4Mi5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4My5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NC5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodC5wdXNoKDEuMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0LnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9Eb3VibGVCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2VpZ2h0ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodC5wdXNoKHdlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDMucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDQucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyLnB1c2goMS4wIC0gd2VpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDMucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDQucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1F1YWRCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1NERUZCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJzZGVmIGlzIG5vdCBzdXBwb3J0ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMSA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXg0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZlcnRleFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfU2luZ2xlQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyLnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzLnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0LnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0LnB1c2goMS4wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDIucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDMucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDQucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX0RvdWJsZUJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2VpZ2h0ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodC5wdXNoKHdlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDMucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDQucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyLnB1c2goMS4wIC0gd2VpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDMucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDQucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1F1YWRCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9TREVGQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwic2RlZiBpcyBub3Qgc3VwcG9ydGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQ0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmVydGV4VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9TaW5nbGVCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyLnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzLnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0LnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0LnB1c2goMS4wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDIucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDMucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDQucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX0RvdWJsZUJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdlaWdodCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQucHVzaCh3ZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzLnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0LnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0Mi5wdXNoKDEuMCAtIHdlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0LnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9RdWFkQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1NERUZCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJzZGVmIGlzIG5vdCBzdXBwb3J0ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMSA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzIgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8zID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQ0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmVydGV4VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9TaW5nbGVCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMy5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4Mi5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4My5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NC5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodC5wdXNoKDEuMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0LnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9Eb3VibGVCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMy5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2VpZ2h0ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodC5wdXNoKHdlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDMucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDQucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyLnB1c2goMS4wIC0gd2VpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDMucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDQucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1F1YWRCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMy5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1NERUZCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJzZGVmIGlzIG5vdCBzdXBwb3J0ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMSA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzIgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8zID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfNCA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXg0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZlcnRleFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfU2luZ2xlQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzMucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl80LnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyLnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzLnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0LnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0LnB1c2goMS4wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDIucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDMucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDQucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX0RvdWJsZUJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8zLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfNC5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2VpZ2h0ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodC5wdXNoKHdlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDMucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDQucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyLnB1c2goMS4wIC0gd2VpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDMucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDQucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1F1YWRCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMy5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzQucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9TREVGQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwic2RlZiBpcyBub3Qgc3VwcG9ydGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1hdGVyaWFsQ291bnQ7XHJcbiAgICAgICAgbWF0ZXJpYWxDb3VudCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludChtYXRlcmlhbEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgIHZhciBzdWJzZXQgPSBuZXcgQXJyYXkobWF0ZXJpYWxDb3VudCk7XHJcbiAgICAgICAgdmFyIGRpciA9IEdldERpcmVjdG9yeSh0aGlzLmZpbGVQYXRoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGVyaWFsQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgZmlsZU5hbWVDb3VudCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgpO1xyXG4gICAgICAgICAgICBpZiAoZW5jb2RlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGVyaWFsRmlsZVBhdGggPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRTdHJpbmcoZmlsZU5hbWVDb3VudCk7XHJcbiAgICAgICAgICAgICAgICBhcnlfbWF0ZXJpYWwucHVzaChSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlTWF0ZXJpYWxGcm9tRmlsZShkaXIgKyBtYXRlcmlhbEZpbGVQYXRoLCB0aGlzLmNvbnRhaW5lciwgdGhpcy5ncmFwaGljRGV2aWNlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0ZXJpYWxGaWxlUGF0aCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldFdTdHJpbmcoZmlsZU5hbWVDb3VudCk7XHJcbiAgICAgICAgICAgICAgICBhcnlfbWF0ZXJpYWwucHVzaChSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlTWF0ZXJpYWxGcm9tRmlsZShkaXIgKyBtYXRlcmlhbEZpbGVQYXRoLCB0aGlzLmNvbnRhaW5lciwgdGhpcy5ncmFwaGljRGV2aWNlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3Vic2V0W2ldID0gKHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2VvbWV0cnkuU2V0U3Vic2V0KHN1YnNldCk7XHJcbiAgICAgICAgdGhpcy5tZXNoLlNldFBhcmFtZXRlcihnZW9tZXRyeSwgYXJ5X21hdGVyaWFsKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5Mb2FkRW5kKCk7XHJcbiAgICB9O1xyXG4gICAgQjNNSG9sZGVyLnByb3RvdHlwZS5SZWFkSW5kZXggPSBmdW5jdGlvbiAodmVydGV4SW5kZXhCeXRlU2l6ZSkge1xyXG4gICAgICAgIC8v44Kk44Oz44OH44OD44Kv44K544Gu6Kqt44G/6L6844G/XHJcbiAgICAgICAgdmFyIGluZGV4Q291bnQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoKTtcclxuICAgICAgICB2YXIgaWR4ID0gbmV3IEFycmF5KGluZGV4Q291bnQgKiAzKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluZGV4Q291bnQgKiAzOyBpKyspIHtcclxuICAgICAgICAgICAgaWR4W2ldID0gKHRoaXMuYnVmZmVyUmVhZGVyLkdldFVJbnQodmVydGV4SW5kZXhCeXRlU2l6ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaWR4O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCM01Ib2xkZXI7XHJcbn0oKSk7XHJcbnZhciBNYXRlcmlhbEJpbkxvYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hdGVyaWFsQmluTG9hZGVyKCkge1xyXG4gICAgfVxyXG4gICAgTWF0ZXJpYWxCaW5Mb2FkZXIucHJvdG90eXBlLkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1hdDtcclxuICAgICAgICB2YXIgbWF0ZXJpYWxSZWFkZXIgPSBuZXcgQmluYXJ5UmVhZGVyXzEuZGVmYXVsdCh0aGlzLmJ1ZmZlcik7XHJcbiAgICAgICAgdmFyIG1hZ2ljID0gbWF0ZXJpYWxSZWFkZXIuR2V0U3RyaW5nKDE2KTtcclxuICAgICAgICBpZiAobWFnaWMgIT0gXCJCdXRpTWF0ZXJpYWxEYXRhXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLjg5XjgqHjgqTjg6vjgYzpgZXjgYTjgb7jgZlcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHZlcnNpb24gPSBtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgIC8vMOOBp3N0ZDo6d3N0cmluZyAsMeOBp3N0ZDo6c3RyaW5nXHJcbiAgICAgICAgdmFyIGVuY29kZVR5cGUgPSBtYXRlcmlhbFJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgbWF0ZXJpYWxOYW1lQ291bnQgPSBtYXRlcmlhbFJlYWRlci5HZXRJbnQoKTtcclxuICAgICAgICAgICAgaWYgKGVuY29kZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsUmVhZGVyLkdldFN0cmluZyhtYXRlcmlhbE5hbWVDb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbFJlYWRlci5HZXRXU3RyaW5nKG1hdGVyaWFsTmFtZUNvdW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+ODnuODhuODquOCouODq+WQjeiLsVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIG1hdGVyaWFsTmFtZUNvdW50ID0gbWF0ZXJpYWxSZWFkZXIuR2V0SW50KCk7XHJcbiAgICAgICAgICAgIGlmIChlbmNvZGVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbFJlYWRlci5HZXRTdHJpbmcobWF0ZXJpYWxOYW1lQ291bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxSZWFkZXIuR2V0V1N0cmluZyhtYXRlcmlhbE5hbWVDb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/jg4bjgq/jgrnjg4Hjg6NcclxuICAgICAgICB2YXIgdGV4dHVyZUNvdW50ID0gbWF0ZXJpYWxSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgIHZhciBhcnlfdGV4dHVyZSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHZhciBkaXIgPSBHZXREaXJlY3RvcnkodGhpcy5maWxlUGF0aCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0dXJlQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgdGV4TmFtZUNvdW50ID0gbWF0ZXJpYWxSZWFkZXIuR2V0SW50KCk7XHJcbiAgICAgICAgICAgIGlmICh0ZXhOYW1lQ291bnQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBhcnlfdGV4dHVyZS5wdXNoKHRoaXMuY29udGFpbmVyLkFkZFRleHR1cmVGcm9tRmlsZShcIlwiLCB0aGlzLmdyYXBoaWNEZXZpY2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChlbmNvZGVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dHVyZU5hbWUgPSBtYXRlcmlhbFJlYWRlci5HZXRTdHJpbmcodGV4TmFtZUNvdW50KTtcclxuICAgICAgICAgICAgICAgIGFyeV90ZXh0dXJlLnB1c2godGhpcy5jb250YWluZXIuQWRkVGV4dHVyZUZyb21GaWxlKGRpciArIFwiLi4vXCIgKyB0ZXh0dXJlTmFtZSwgdGhpcy5ncmFwaGljRGV2aWNlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dHVyZU5hbWUgPSBtYXRlcmlhbFJlYWRlci5HZXRXU3RyaW5nKHRleE5hbWVDb3VudCk7XHJcbiAgICAgICAgICAgICAgICBhcnlfdGV4dHVyZS5wdXNoKHRoaXMuY29udGFpbmVyLkFkZFRleHR1cmVGcm9tRmlsZShkaXIgKyBcIi4uL1wiICsgdGV4dHVyZU5hbWUsIHRoaXMuZ3JhcGhpY0RldmljZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v44Oe44OG44Oq44Ki44OrXHJcbiAgICAgICAgdmFyIGRpZmZ1c2UgPSBuZXcgVmVjdG9yNF8xLmRlZmF1bHQobWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKSwgbWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKSwgbWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKSwgbWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgdmFyIHNwZWN1bGFyID0gbmV3IFZlY3RvcjRfMS5kZWZhdWx0KG1hdGVyaWFsUmVhZGVyLkdldEZsb2F0KCksIG1hdGVyaWFsUmVhZGVyLkdldEZsb2F0KCksIG1hdGVyaWFsUmVhZGVyLkdldEZsb2F0KCksIG1hdGVyaWFsUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgIHZhciBhbWJpZW50ID0gbmV3IFZlY3RvcjRfMS5kZWZhdWx0KG1hdGVyaWFsUmVhZGVyLkdldEZsb2F0KCksIG1hdGVyaWFsUmVhZGVyLkdldEZsb2F0KCksIG1hdGVyaWFsUmVhZGVyLkdldEZsb2F0KCksIG1hdGVyaWFsUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgIHZhciBlbWlzc2l2ZSA9IG5ldyBWZWN0b3I0XzEuZGVmYXVsdChtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpLCBtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpLCBtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpLCBtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICB2YXIgYnl0ZUZsYWcgPSBtYXRlcmlhbFJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgdmFyIHNwaGVyZUZsYWcgPSBtYXRlcmlhbFJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgbWF0ZXJpYWxOYW1lQ291bnQgPSBtYXRlcmlhbFJlYWRlci5HZXRJbnQoKTtcclxuICAgICAgICAgICAgaWYgKGVuY29kZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsUmVhZGVyLkdldFN0cmluZyhtYXRlcmlhbE5hbWVDb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbFJlYWRlci5HZXRXU3RyaW5nKG1hdGVyaWFsTmFtZUNvdW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1hdGVyaWFsLlNldFBhcmFtZXRlcihhbWJpZW50LCB0aGlzLmdyYXBoaWNEZXZpY2UsIGFyeV90ZXh0dXJlKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5Mb2FkRW5kKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1hdGVyaWFsQmluTG9hZGVyO1xyXG59KCkpO1xyXG52YXIgUmVzb3VyY2VDcmVhdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVzb3VyY2VDcmVhdGVyKCkge1xyXG4gICAgfVxyXG4gICAgUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5ID0gZnVuY3Rpb24gKGRhdGEsIGlzVVYsIGlzTm9ybWFsLCBpc0NvbG9yLCBhcmdfZGV2aWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHZW9tZXRyeV8xLmRlZmF1bHQoZGF0YSwgaXNVViwgaXNOb3JtYWwsIGlzQ29sb3IsIGFyZ19kZXZpY2UpO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ3JlYXRlci5DcmVhdGVNYXRlcmlhbCA9IGZ1bmN0aW9uIChhcmdfYW1iaWVudCwgYXJnX2RldmljZSwgYXJnX2FyeV90ZXh0dXJlLCBhcmdfYXJ5X2V4UGFybXMpIHtcclxuICAgICAgICB2YXIgbWF0ID0gbmV3IE1hdGVyaWFsXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIG1hdC5TZXRQYXJhbWV0ZXIoYXJnX2FtYmllbnQsIGFyZ19kZXZpY2UsIGFyZ19hcnlfdGV4dHVyZSwgYXJnX2FyeV9leFBhcm1zKTtcclxuICAgICAgICByZXR1cm4gbWF0O1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ3JlYXRlci5DcmVhdGVTaGFkZXIgPSBmdW5jdGlvbiAodnNTb3VyY2UsIGZzU291cmNlLCBhcmdfZ3JhcGhpY0RldmljZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU2hhZGVyXzEuZGVmYXVsdCh2c1NvdXJjZSwgZnNTb3VyY2UsIGFyZ19ncmFwaGljRGV2aWNlKTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlU291bmQgPSBmdW5jdGlvbiAoYXJnX3NvdW5kU29yY2UpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNvdW5kXzEuZGVmYXVsdChhcmdfc291bmRTb3JjZSk7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZVRleHR1cmUgPSBmdW5jdGlvbiAoYXJnX3BhdGgsIGFyZ19kZXZpY2UpIHtcclxuICAgICAgICB2YXIgdGV4ID0gbmV3IFRleHR1cmVfMS5kZWZhdWx0KGFyZ19wYXRoLCBhcmdfZGV2aWNlKTtcclxuICAgICAgICB0ZXguSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIHJldHVybiB0ZXg7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUZyYW1lQnVmZmVyID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIGFyZ19kZXZpY2UpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEZyYW1lQnVmZmVyVGV4dHVyZV8xLmRlZmF1bHQoYXJnX2RldmljZSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZU1lc2hSZXNvdXJjZUZyb21GaWxlID0gZnVuY3Rpb24gKGFyZ19maWxlUGF0aCwgcmVzb3VyY2VDb250YWluZXIsIGFyZ19kZXZpY2UpIHtcclxuICAgICAgICB2YXIgb3V0ID0gbmV3IE1lc2hfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGhvbGRlciA9IG5ldyBCM01Ib2xkZXIoKTtcclxuICAgICAgICByZXNvdXJjZUNvbnRhaW5lci5Mb2FkU3RhcnQoKTtcclxuICAgICAgICBob2xkZXIuZ3JhcGhpY0RldmljZSA9IGFyZ19kZXZpY2U7XHJcbiAgICAgICAgaG9sZGVyLmNvbnRhaW5lciA9IHJlc291cmNlQ29udGFpbmVyO1xyXG4gICAgICAgIGhvbGRlci5maWxlUGF0aCA9IGFyZ19maWxlUGF0aDtcclxuICAgICAgICBob2xkZXIubWVzaCA9IG91dDtcclxuICAgICAgICBGaWxlTG9hZGVyXzEuZGVmYXVsdC5Mb2FkQmluKGFyZ19maWxlUGF0aCwgaG9sZGVyKTtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ3JlYXRlci5DcmVhdGVNYXRlcmlhbEZyb21GaWxlID0gZnVuY3Rpb24gKGFyZ19maWxlUGF0aCwgcmVzb3VyY2VDb250YWluZXIsIGFyZ19kZXZpY2UpIHtcclxuICAgICAgICB2YXIgb3V0ID0gbmV3IE1hdGVyaWFsXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBob2xkZXIgPSBuZXcgTWF0ZXJpYWxCaW5Mb2FkZXIoKTtcclxuICAgICAgICByZXNvdXJjZUNvbnRhaW5lci5Mb2FkU3RhcnQoKTtcclxuICAgICAgICBob2xkZXIuZ3JhcGhpY0RldmljZSA9IGFyZ19kZXZpY2U7XHJcbiAgICAgICAgaG9sZGVyLmNvbnRhaW5lciA9IHJlc291cmNlQ29udGFpbmVyO1xyXG4gICAgICAgIGhvbGRlci5maWxlUGF0aCA9IGFyZ19maWxlUGF0aDtcclxuICAgICAgICBob2xkZXIubWF0ZXJpYWwgPSBvdXQ7XHJcbiAgICAgICAgRmlsZUxvYWRlcl8xLmRlZmF1bHQuTG9hZEJpbihhcmdfZmlsZVBhdGgsIGhvbGRlcik7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVzb3VyY2VDcmVhdGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBSZXNvdXJjZUNyZWF0ZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBNYXRyaXhfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYXRoL01hdHJpeFwiKSk7XHJcbnZhciBWZWN0b3IzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWF0aC9WZWN0b3IzXCIpKTtcclxudmFyIFRyYW5zZm9ybSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRyYW5zZm9ybSgpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMSwgMSwgMSk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IG5ldyBNYXRyaXhfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbi5JZGVudGl0eSgpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVGdW5jID0gdGhpcy5TY2FsZVJvdGF0aW9uVHJhbnNsYXRlO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwiUG9zaXRpb25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5iYXNlVHJhbnNmb3JtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLkFkZCh0aGlzLmJhc2VUcmFuc2Zvcm0uUG9zaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLm1hdHJpeCA9IG51bGw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwiUm90YXRpb25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5iYXNlVHJhbnNmb3JtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJhc2VUcmFuc2Zvcm0uUm90YXRpb24uTXVsdGlwbHkodGhpcy5yb3RhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucm90YXRpb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMubWF0cml4ID0gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJTY2FsZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjYWxlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLm1hdHJpeCA9IG51bGw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwiTWF0cml4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0cml4ID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlRnVuYygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5iYXNlVHJhbnNmb3JtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJhc2VUcmFuc2Zvcm0uTWF0cml4Lk11bHRpcGx5KHRoaXMubWF0cml4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hdHJpeDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcIkxvY2FsTWF0cml4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0cml4ID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlRnVuYygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwiQmFzZVRyYW5zZm9ybVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJhc2VUcmFuc2Zvcm07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChhcmdfYmFzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VUcmFuc2Zvcm0gPSBhcmdfYmFzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLkdldEZyb250ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IzXzEuZGVmYXVsdC56QXhpcy5NdWx0aXBseV9NYXRyaXgodGhpcy5Sb3RhdGlvbik7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5HZXRSaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yM18xLmRlZmF1bHQueEF4aXMuTXVsdGlwbHlfTWF0cml4KHRoaXMuUm90YXRpb24pO1xyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuR2V0VXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFZlY3RvcjNfMS5kZWZhdWx0LnlBeGlzLk11bHRpcGx5X01hdHJpeCh0aGlzLlJvdGF0aW9uKTtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLlNjYWxlUm90YXRpb25UcmFuc2xhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tYXRyaXggPSBuZXcgTWF0cml4XzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMubWF0cml4LklkZW50aXR5KCk7XHJcbiAgICAgICAgdGhpcy5tYXRyaXguVHJhbnNsYXRlX2IodGhpcy5wb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5tYXRyaXguTXVsdGlwbHlfYih0aGlzLnJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLm1hdHJpeC5TY2FsZV9iKHRoaXMuc2NhbGUpO1xyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuTG9va0F0ID0gZnVuY3Rpb24gKGFyZ190YXJnZXRQb3MsIGFyZ191cEF4aXMpIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uLklkZW50aXR5KCk7XHJcbiAgICAgICAgdmFyIHogPSAoYXJnX3RhcmdldFBvcy5TdWIodGhpcy5Qb3NpdGlvbikpLk5vcm1hbGl6ZSgpLk11bHRpcGx5KC0xKTtcclxuICAgICAgICB2YXIgeCA9IGFyZ191cEF4aXMuQ3Jvc3MoeikuTm9ybWFsaXplKCk7XHJcbiAgICAgICAgdmFyIHkgPSB6LkNyb3NzKHgpLk5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIHRoaXMucm90YXRpb24uZGF0YVswXSA9IHgueDtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uLmRhdGFbMV0gPSB4Lnk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbi5kYXRhWzJdID0geC56O1xyXG4gICAgICAgIHRoaXMucm90YXRpb24uZGF0YVs0XSA9IHkueDtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uLmRhdGFbNV0gPSB5Lnk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbi5kYXRhWzZdID0geS56O1xyXG4gICAgICAgIHRoaXMucm90YXRpb24uZGF0YVs4XSA9IHoueDtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uLmRhdGFbOV0gPSB6Lnk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbi5kYXRhWzEwXSA9IHouejtcclxuICAgICAgICB0aGlzLm1hdHJpeCA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5TY2FsZVRyYW5zbGF0ZVJvdGF0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubWF0cml4ID0gbmV3IE1hdHJpeF8xLmRlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLm1hdHJpeC5JZGVudGl0eSgpO1xyXG4gICAgICAgIHRoaXMubWF0cml4Lk11bHRpcGx5X2IodGhpcy5yb3RhdGlvbik7XHJcbiAgICAgICAgdGhpcy5tYXRyaXguVHJhbnNsYXRlX2IodGhpcy5wb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5tYXRyaXguU2NhbGVfYih0aGlzLnNjYWxlKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVHJhbnNmb3JtO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFuc2Zvcm07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBHcmFwaGljRGV2aWNlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vR3JhcGhpYy9HcmFwaGljRGV2aWNlXCIpKTtcclxudmFyIFJlc291cmNlQ29udGFpbmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUGFydHMvUmVzb3VyY2VDb250YWluZXJcIikpO1xyXG52YXIgTW9kZWxDcmVhdGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUGFydHMvTW9kZWxDcmVhdGVyXCIpKTtcclxudmFyIFNjZW5lTWFuYWdlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NjZW5lL1NjZW5lTWFuYWdlclwiKSk7XHJcbnZhciBTYW1wbGVTY2VuZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NhbXBsZVNjZW5lXCIpKTtcclxudmFyIElucHV0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVG9vbC9JbnB1dFwiKSk7XHJcbm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBqcyBpcyB3ZWJHTC9pbmRleC50c1wiKTtcclxuICAgIC8vY2FudmFz44Ko44Os44Oh44Oz44OI44KS5Y+W5b6XXHJcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2FudmFzJyk7XHJcbiAgICB2YXIgYXVkaW9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuICAgIGF1ZGlvRWxlbWVudC5zcmMgPSAnYXVkaW8vRW5kaW5nLm1wMyc7XHJcbiAgICAvL2F1ZGlvRWxlbWVudC52b2x1bWU9MC4wO1xyXG4gICAgY2FudmFzLndpZHRoID0gODAwO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IDUwMDtcclxuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgXCJcIik7XHJcbiAgICBJbnB1dF8xLmRlZmF1bHQuY2FudmFzID0gY2FudmFzO1xyXG4gICAgdmFyIHJlc291cmNlQ29udGFpbmVyID0gbmV3IFJlc291cmNlQ29udGFpbmVyXzEuZGVmYXVsdCgpO1xyXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBPbkNsaWNrLCBmYWxzZSk7XHJcbiAgICB2YXIgZ3JhcGhpY0RldmljZSA9IG5ldyBHcmFwaGljRGV2aWNlXzEuZGVmYXVsdChjYW52YXMpO1xyXG4gICAgdmFyIG1vZGVsQ3JlYXRlciA9IG5ldyBNb2RlbENyZWF0ZXJfMS5kZWZhdWx0KGdyYXBoaWNEZXZpY2UsIHJlc291cmNlQ29udGFpbmVyKTtcclxuICAgIHZhciBzY2VuZU1hbmFnZXIgPSBuZXcgU2NlbmVNYW5hZ2VyXzEuZGVmYXVsdChtb2RlbENyZWF0ZXIsIHJlc291cmNlQ29udGFpbmVyLCBncmFwaGljRGV2aWNlKTtcclxuICAgIHNjZW5lTWFuYWdlci5BZGRTY2VuZShuZXcgU2FtcGxlU2NlbmVfMS5kZWZhdWx0KHNjZW5lTWFuYWdlciksIFwic2FtcGxlXCIpO1xyXG4gICAgc2NlbmVNYW5hZ2VyLkNoYW5nZVNjZW5lKFwic2FtcGxlXCIpO1xyXG4gICAgdGljaygpO1xyXG4gICAgLy8g5oGS5bi444Or44O844OXXHJcbiAgICBmdW5jdGlvbiB0aWNrKCkge1xyXG4gICAgICAgIHNjZW5lTWFuYWdlci5VcGRhdGUoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKElucHV0Lm1vdXNlUG9zaXRpb24ueCtcIixcIitJbnB1dC5tb3VzZVBvc2l0aW9uLngpO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIGZ1bmN0aW9uIE9uQ2xpY2soKSB7XHJcbiAgICAgICAgYXVkaW9FbGVtZW50LnBsYXkoKTtcclxuICAgIH1cclxufTtcclxuIiwiXHJcbnJlcXVpcmUoXCIuL1dlYkdsL2luZGV4XCIpIl0sInNvdXJjZVJvb3QiOiIifQ==