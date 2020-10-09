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
var ModelCreater = /** @class */ (function () {
    function ModelCreater(arg_garaphicDevice, arg_resourceContainer) {
        this.resourceContainer = arg_resourceContainer;
        this.graphicDevice = arg_garaphicDevice;
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
                this.sceneManger.GetResourceContainer().AddShader(ResourceCreater_1.default.CreateShader('shader/UVNormalVS.glsl', "shader/DefaultFS_light.glsl", this.sceneManger.GetGraphicDevice()), "texShader_light");
                this.sceneManger.GetResourceContainer().AddShader(ResourceCreater_1.default.CreateShader('shader/UVNormalVS.glsl', "shader/ZoomBlur.glsl", this.sceneManger.GetGraphicDevice()), "zoomEffect");
                this.sceneManger.GetResourceContainer().AddShader(ResourceCreater_1.default.CreateShader('shader/UVNormalVS.glsl', "shader/DotEffect.glsl", this.sceneManger.GetGraphicDevice()), "dotEffect");
                this.sceneManger.GetResourceContainer().AddShader(ResourceCreater_1.default.CreateShader('shader/UVNormalColorVS.glsl', "shader/BlackTestFS.glsl", this.sceneManger.GetGraphicDevice()), "black");
                this.sceneManger.GetResourceContainer().AddGeometry(ResourceCreater_1.default.CreateGeometry(GeometryGenerator_1.default.CreateTorus(32, 32, 0.5, 1), false, true, true, this.sceneManger.GetGraphicDevice()), "hsvTorus");
                this.sceneManger.GetResourceContainer().AddGeometry(ResourceCreater_1.default.CreateGeometry(GeometryGenerator_1.default.CreateCube(1, new Vector4_1.default(1.0, 1.0, 1.0, 1)), true, true, true, this.sceneManger.GetGraphicDevice()), "cube");
                this.sceneManger.GetResourceContainer().AddGeometry(ResourceCreater_1.default.CreateGeometry(GeometryGenerator_1.default.CreatePlane(new Vector2_1.default(1, 1), new Vector4_1.default(1.0, 1.0, 1.0, 1)), true, false, false, this.sceneManger.GetGraphicDevice()), "plane");
                this.sceneManger.GetResourceContainer().AddMesh(ResourceCreater_1.default.CreateMeshResourceFromFile("model/Maguro/maguro.b3m", this.sceneManger.GetResourceContainer(), this.sceneManger.GetGraphicDevice()), "maguro");
                this.sceneManger.GetResourceContainer().AddSoundFromFile("audio/Ending.mp3", "sample");
                caloryTexture = ResourceCreater_1.default.CreateTexture('image/calory.png', this.sceneManger.GetGraphicDevice());
                this.sceneManger.GetResourceContainer().AddTexture(caloryTexture, "calory");
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
        //this.GetCamera("main").transform.Rotation=new Matrix4x4().Rotate_b(0* Math.PI / 180,new Vector3(0,0,1));
        // カメラの上方向を表すベクトル
        var camUpDirection = new Vector3_1.default(0, 1, 0);
        this.GetCamera("main").transform.LookAt(new Vector3_1.default(0, 0, 0), camUpDirection);
        this.GetCamera("main").clearColor = new Vector4_1.default(0.3, 0.3, 0.3, 1.0);
        this.cube = this.gameObjectManager.AddGameObject("cube");
        this.anotherCube = this.gameObjectManager.AddGameObject("cube");
        this.projectionPlane = this.gameObjectManager.AddGameObject("projectionCube");
        //this.torus.SetComponent(new ModelDrawComponent("hsvTorus","caloryMaterial","pointLight",1)) as ModelDrawComponent;
        this.cube.SetComponent(new ModelDrawComponent_1.default(false, "cube", "caloryMaterial", "texShader", 1, true));
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
        this.aQuaternion.Rotate(rad, new Vector3_1.default(1.0, 0.0, 0.0));
        this.bQuaternion.Rotate(-rad, new Vector3_1.default(0, 1, 0));
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
    GeometryGenerater.CreatePlane = function (arg_size, arg_color) {
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
        uv = [
            0.0, 0.0,
            1.0, 0.0,
            0.0, 1.0,
            1.0, 1.0
        ];
        return { p: pos, n: nor, c: col, i: idx, uv: uv };
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
        return new Vector3_1.default(0, 0, 1).Multiply_Matrix(this.Rotation);
    };
    Transform.prototype.GetRight = function () {
        return new Vector3_1.default(1, 0, 0).Multiply_Matrix(this.Rotation);
    };
    Transform.prototype.GetUp = function () {
        return new Vector3_1.default(0, 1, 0).Multiply_Matrix(this.Rotation);
    };
    Transform.prototype.ScaleRotationTranslate = function () {
        this.matrix = new Matrix_1.default();
        this.matrix.Identity();
        this.matrix.Translate_b(this.position);
        this.matrix.Multiply_b(this.rotation);
        this.matrix.Scale_b(this.scale);
    };
    Transform.prototype.LookAt = function (arg_targetPos, arg_upAxis) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvQ29tcG9uZW50L0NvbGxpc2lvbkNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Db21wb25lbnQvQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL1dlYkdsL0NvbXBvbmVudC9Nb2RlbERyYXdDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvQ29tcG9uZW50L1NhbXBsZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9HYW1lT2JqZWN0L0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvR2FtZU9iamVjdC9HYW1lT2JqZWN0TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9HcmFwaGljL0NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9HcmFwaGljL0dyYXBoaWNEZXZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvR3JhcGhpYy9Nb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9MaWdodC9Qb2ludExpZ2h0LnRzIiwid2VicGFjazovLy8uL1dlYkdsL01hdGgvR2VvbWV0cnkvQm94X0FBQkIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvTWF0aC9HZW9tZXRyeS9Cb3hfT0JCLnRzIiwid2VicGFjazovLy8uL1dlYkdsL01hdGgvR2VvbWV0cnkvR2VvbWV0cnlIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvTWF0aC9HZW9tZXRyeS9TcGhlcmUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvTWF0aC9NYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvTWF0aC9RdWF0LnRzIiwid2VicGFjazovLy8uL1dlYkdsL01hdGgvVmVjdG9yMi50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9NYXRoL1ZlY3RvcjMudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvTWF0aC9WZWN0b3I0LnRzIiwid2VicGFjazovLy8uL1dlYkdsL1BhcnRzL0NvbGxpc2lvbi9Db2xsaXNpb25NYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1BhcnRzL0NvbGxpc2lvbi9Db2xsaXNpb25PYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvUGFydHMvQ29sbGlzaW9uL09jdENlbGwudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvUGFydHMvQ29sbGlzaW9uL09jdHJlZS50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9QYXJ0cy9HYW1lVGltZS50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9QYXJ0cy9JRC50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9QYXJ0cy9Nb2RlbENyZWF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvUGFydHMvUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvUGFydHMvUmVzb3VyY2VDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvUmVzb3VyY2UvRnJhbWVCdWZmZXJUZXh0dXJlLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1Jlc291cmNlL0dlb21ldHJ5LnRzIiwid2VicGFjazovLy8uL1dlYkdsL1Jlc291cmNlL01hdGVyaWFsLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1Jlc291cmNlL01lc2gudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvUmVzb3VyY2UvU2hhZGVyLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1Jlc291cmNlL1NvdW5kLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1Jlc291cmNlL1RleHR1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvU2FtcGxlU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvU2NlbmUvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvU2NlbmUvU2NlbmVNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1Rvb2wvQmluYXJ5UmVhZGVyLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1Rvb2wvQ29sbGlzaW9uT2JqZWN0Q3JlYXRlci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Ub29sL0NvbG9yQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Ub29sL0ZpbGVMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vV2ViR2wvVG9vbC9HZW9tZXRyeUdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9Ub29sL0lucHV0LnRzIiwid2VicGFjazovLy8uL1dlYkdsL1Rvb2wvUmVzb3VyY2VDcmVhdGVyLnRzIiwid2VicGFjazovLy8uL1dlYkdsL1RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9XZWJHbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9nYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLDhFQUE4RTtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGtDQUFrQyxtQkFBTyxDQUFDLG1EQUFhO0FBQ3ZELCtDQUErQyxtQkFBTyxDQUFDLDhFQUFnQztBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNDQUFzQztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNoRWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN4Q2E7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLDhFQUE4RTtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGtDQUFrQyxtQkFBTyxDQUFDLG1EQUFhO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3BFYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsOEVBQThFO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQWlCO0FBQ3pELDhCQUE4QixtQkFBTyxDQUFDLDRDQUFlO0FBQ3JELGtDQUFrQyxtQkFBTyxDQUFDLG1EQUFhO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUM3Q2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzREFBc0QsMkJBQTJCLEVBQUU7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCwyQkFBMkIsRUFBRTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsMkJBQTJCLEVBQUU7QUFDbkYsa0VBQWtFLDJCQUEyQixFQUFFO0FBQy9GLDBDQUEwQyx3QkFBd0IsRUFBRTtBQUNwRSx1RUFBdUUsNEJBQTRCLEVBQUU7QUFDckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGtDQUFrQyxFQUFFO0FBQzFGO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNuRmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELG1DQUFtQyxtQkFBTyxDQUFDLHNEQUFjO0FBQ3pELGtDQUFrQyxtQkFBTyxDQUFDLDBDQUFjO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELHFCQUFxQixFQUFFO0FBQ3hFLGdEQUFnRCxxQkFBcUIsRUFBRSwwQkFBMEIscUJBQXFCLEVBQUU7QUFDeEgsbUVBQW1FLHNCQUFzQixFQUFFO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxzQkFBc0IsRUFBRTtBQUM1RTtBQUNBLGlEQUFpRCxzQkFBc0IsRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3ZFYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsK0JBQStCLG1CQUFPLENBQUMsOENBQWdCO0FBQ3ZELGtDQUFrQyxtQkFBTyxDQUFDLDBDQUFjO0FBQ3hELGdDQUFnQyxtQkFBTyxDQUFDLGdEQUFpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNoRGE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGdDQUFnQyxtQkFBTyxDQUFDLGdEQUFpQjtBQUN6RCxnQ0FBZ0MsbUJBQU8sQ0FBQyxnREFBaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pPYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxzQkFBc0IsRUFBRTtBQUN0RTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxzQkFBc0IsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2hIYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsa0NBQWtDLG1CQUFPLENBQUMsMENBQWM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDaEJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGtFQUFrRTtBQUNwSCxrREFBa0Qsa0VBQWtFO0FBQ3BIO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNsQmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGdDQUFnQyxtQkFBTyxDQUFDLDJDQUFZO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3pXYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUMxWWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELCtCQUErQixtQkFBTyxDQUFDLHdDQUFVO0FBQ2pELGdDQUFnQyxtQkFBTyxDQUFDLDBDQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNuTmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3hHYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN0SmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDcklhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQ0FBZ0MsbUJBQU8sQ0FBQyxtREFBb0I7QUFDNUQsK0JBQStCLG1CQUFPLENBQUMsbURBQVU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUNBQWlDO0FBQ3hELCtCQUErQixpQ0FBaUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsc0JBQXNCLEVBQUU7QUFDdEU7QUFDQTtBQUNBLDhDQUE4Qyx3QkFBd0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUMvRGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzNDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbENhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQ0FBZ0MsbUJBQU8sQ0FBQyxtREFBb0I7QUFDNUQsMkJBQTJCLG1CQUFPLENBQUMsa0NBQU87QUFDMUMsZ0NBQWdDLG1CQUFPLENBQUMscURBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDJCQUEyQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIseUNBQXlDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHdCQUF3QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVLYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDOUNhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ1JhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw4QkFBOEIsbUJBQU8sQ0FBQyxrREFBa0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN2QmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDJCQUEyQixtQkFBTyxDQUFDLGlDQUFNO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHlCQUF5QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxzQkFBc0IsRUFBRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx3QkFBd0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDaEZhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCx3Q0FBd0MsbUJBQU8sQ0FBQyxnRUFBeUI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDcklhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2xEYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3BDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxvREFBb0QsRUFBRTtBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMEJBQTBCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUM5RWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDWGE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELG1DQUFtQyxtQkFBTyxDQUFDLHNEQUFvQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0Msb0VBQW9FLDBDQUEwQyxFQUFFO0FBQ2hIO0FBQ0EsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0EsbURBQW1ELG1EQUFtRCxFQUFFO0FBQ3hHLHVCQUF1QiwrQkFBK0I7QUFDdEQsK0VBQStFLGdCQUFnQixFQUFFO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxtQ0FBbUM7QUFDbkMsd0RBQXdELHdDQUF3QyxFQUFFO0FBQ2xHO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsNkNBQTZDLDZDQUE2QyxFQUFFO0FBQzVGLHVCQUF1Qix5QkFBeUI7QUFDaEQsbUVBQW1FLGdCQUFnQixFQUFFO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3pGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbENhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDOUJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qiw4RUFBOEU7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsOEJBQThCLG1CQUFPLENBQUMsNkNBQWU7QUFDckQsd0NBQXdDLG1CQUFPLENBQUMsK0RBQXdCO0FBQ3hFLDBDQUEwQyxtQkFBTyxDQUFDLG1FQUEwQjtBQUM1RSw2QkFBNkIsbUJBQU8sQ0FBQyx5Q0FBYTtBQUNsRCxnQ0FBZ0MsbUJBQU8sQ0FBQywrQ0FBZ0I7QUFDeEQsZ0NBQWdDLG1CQUFPLENBQUMsK0NBQWdCO0FBQ3hELG1DQUFtQyxtQkFBTyxDQUFDLHVEQUFvQjtBQUMvRCwyQ0FBMkMsbUJBQU8sQ0FBQywrRUFBZ0M7QUFDbkYsZ0NBQWdDLG1CQUFPLENBQUMsK0NBQWdCO0FBQ3hELHdDQUF3QyxtQkFBTyxDQUFDLHlFQUE2QjtBQUM3RSwyQ0FBMkMsbUJBQU8sQ0FBQywrRUFBZ0M7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQ0FBc0M7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3JLYTtBQUNiO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGlDQUFpQyxtQkFBTyxDQUFDLG9EQUFtQjtBQUM1RCwrQkFBK0IsbUJBQU8sQ0FBQyxvREFBbUI7QUFDMUQsMENBQTBDLG1CQUFPLENBQUMsZ0ZBQWlDO0FBQ25GLHlDQUF5QyxtQkFBTyxDQUFDLHdGQUFxQztBQUN0RjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsb0NBQW9DLEVBQUU7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2pLYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsaUNBQWlDLG1CQUFPLENBQUMsb0RBQW1CO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUM1RGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixVQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3hIYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsaUNBQWlDLG1CQUFPLENBQUMsb0VBQTJCO0FBQ3BFLGdDQUFnQyxtQkFBTyxDQUFDLGtFQUEwQjtBQUNsRSx1Q0FBdUMsbUJBQU8sQ0FBQyxnRkFBaUM7QUFDaEYsK0JBQStCLG1CQUFPLENBQUMsZ0VBQXlCO0FBQ2hFLGdDQUFnQyxtQkFBTyxDQUFDLGdEQUFpQjtBQUN6RCx3Q0FBd0MsbUJBQU8sQ0FBQyxzRkFBb0M7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQy9LWTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQWlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNqQ2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9CYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsd0NBQXdDLG1CQUFPLENBQUMsMERBQW1CO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsVUFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsY0FBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCLHdCQUF3QixhQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsVUFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsY0FBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCLHdCQUF3QixhQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzFLYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQWlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0ZhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQ0FBZ0MsbUJBQU8sQ0FBQyx3REFBcUI7QUFDN0QsaUNBQWlDLG1CQUFPLENBQUMsMERBQXNCO0FBQy9ELCtCQUErQixtQkFBTyxDQUFDLHNEQUFvQjtBQUMzRCxpQ0FBaUMsbUJBQU8sQ0FBQywwREFBc0I7QUFDL0QsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQWlCO0FBQ3pELDJDQUEyQyxtQkFBTyxDQUFDLDhFQUFnQztBQUNuRiw2QkFBNkIsbUJBQU8sQ0FBQyxrREFBa0I7QUFDdkQsbUNBQW1DLG1CQUFPLENBQUMsZ0RBQWM7QUFDekQscUNBQXFDLG1CQUFPLENBQUMsMERBQXNCO0FBQ25FLDhCQUE4QixtQkFBTyxDQUFDLG9EQUFtQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnQ0FBZ0M7QUFDakM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG9DQUFvQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxvQ0FBb0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsb0NBQW9DO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDNS9DYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsK0JBQStCLG1CQUFPLENBQUMsNkNBQWU7QUFDdEQsZ0NBQWdDLG1CQUFPLENBQUMsK0NBQWdCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNqSWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELHNDQUFzQyxtQkFBTyxDQUFDLGlFQUF5QjtBQUN2RSwwQ0FBMEMsbUJBQU8sQ0FBQyxxRUFBMkI7QUFDN0UscUNBQXFDLG1CQUFPLENBQUMsMkRBQXNCO0FBQ25FLHFDQUFxQyxtQkFBTyxDQUFDLDJEQUFzQjtBQUNuRSxvQ0FBb0MsbUJBQU8sQ0FBQyw2Q0FBZTtBQUMzRCw4QkFBOEIsbUJBQU8sQ0FBQywyQ0FBYztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2Q0EsbUJBQU8sQ0FBQyx1Q0FBZSxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2dhbWUuanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ29tcG9uZW50XCIpKTtcclxudmFyIENvbGxpc2lvbk9iamVjdENyZWF0ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVG9vbC9Db2xsaXNpb25PYmplY3RDcmVhdGVyXCIpKTtcclxudmFyIFByaW1pdGl2ZVR5cGU7XHJcbihmdW5jdGlvbiAoUHJpbWl0aXZlVHlwZSkge1xyXG4gICAgUHJpbWl0aXZlVHlwZVtQcmltaXRpdmVUeXBlW1wic3BoZXJlXCJdID0gMF0gPSBcInNwaGVyZVwiO1xyXG4gICAgUHJpbWl0aXZlVHlwZVtQcmltaXRpdmVUeXBlW1wiYm94X0FBQkJcIl0gPSAxXSA9IFwiYm94X0FBQkJcIjtcclxuICAgIFByaW1pdGl2ZVR5cGVbUHJpbWl0aXZlVHlwZVtcImJveF9PQkJcIl0gPSAyXSA9IFwiYm94X09CQlwiO1xyXG4gICAgUHJpbWl0aXZlVHlwZVtQcmltaXRpdmVUeXBlW1wicG9pbnRcIl0gPSAzXSA9IFwicG9pbnRcIjtcclxufSkoUHJpbWl0aXZlVHlwZSB8fCAoUHJpbWl0aXZlVHlwZSA9IHt9KSk7XHJcbnZhciBDb2xsaXNpb25Db21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ29sbGlzaW9uQ29tcG9uZW50LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQ29sbGlzaW9uQ29tcG9uZW50KGFyZ190eXBlLCBhcmdfc2l6ZSwgbGF5ZXIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmxheWVyID0gMDtcclxuICAgICAgICBfdGhpcy50eXBlID0gYXJnX3R5cGU7XHJcbiAgICAgICAgX3RoaXMuc2l6ZSA9IGFyZ19zaXplO1xyXG4gICAgICAgIGlmIChsYXllcikge1xyXG4gICAgICAgICAgICBfdGhpcy5sYXllciA9IGxheWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBDb2xsaXNpb25Db21wb25lbnQucHJvdG90eXBlLk9uU2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUHJpbWl0aXZlVHlwZS5zcGhlcmU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvbiA9IENvbGxpc2lvbk9iamVjdENyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZVNwaGVyZSh0aGlzLnNpemUueCwgdGhpcy5nYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFByaW1pdGl2ZVR5cGUucG9pbnQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvbiA9IENvbGxpc2lvbk9iamVjdENyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZVBvaW50KHRoaXMuZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQcmltaXRpdmVUeXBlLmJveF9BQUJCOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb24gPSBDb2xsaXNpb25PYmplY3RDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVDdWJlX0FBQkIodGhpcy5zaXplLCB0aGlzLmdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUHJpbWl0aXZlVHlwZS5ib3hfT0JCOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb24gPSBDb2xsaXNpb25PYmplY3RDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVDdWJlX09CQih0aGlzLnNpemUsIHRoaXMuZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuZ2FtZU9iamVjdC5HZXRDb2xsaXNpb25NYW5hZ2VyKCkuUmVnaXN0KHRoaXMuY29sbGlzaW9uLCB0aGlzLmxheWVyKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25Db21wb25lbnQucHJvdG90eXBlLk9uUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdC5HZXRDb2xsaXNpb25NYW5hZ2VyKCkuVW5SZWdpc3QodGhpcy5pZCwgdGhpcy5sYXllcik7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uQ29tcG9uZW50LnByb3RvdHlwZS5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb24uVXBkYXRlKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbGxpc2lvbkNvbXBvbmVudDtcclxufShDb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENvbGxpc2lvbkNvbXBvbmVudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIENvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbXBvbmVudCgpIHtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBcIklzUmVtb3ZlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNSZW1vdmU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5TZXQgPSBmdW5jdGlvbiAoYXJnX29iaikge1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdCA9IGFyZ19vYmo7XHJcbiAgICAgICAgdGhpcy5pc1JlbW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuT25TZXQoKTtcclxuICAgIH07XHJcbiAgICBDb21wb25lbnQucHJvdG90eXBlLkRlYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pc1JlbW92ZSA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5PblNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBDb21wb25lbnQucHJvdG90eXBlLlJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLk9uUmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0ID0gbnVsbDtcclxuICAgIH07XHJcbiAgICBDb21wb25lbnQucHJvdG90eXBlLk9uUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIENvbXBvbmVudC5wcm90b3R5cGUuUmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLk9uUmVsZWFzZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdCA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5PblJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5IaXQgPSBmdW5jdGlvbiAoYXJnX2dhbWVPYmplY3QpIHtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDb21wb25lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21wb25lbnRcIikpO1xyXG52YXIgTW9kZWxJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTW9kZWxJbmZvKCkge1xyXG4gICAgICAgIHRoaXMubWVzaE5hbWUgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1vZGVsSW5mbztcclxufSgpKTtcclxudmFyIE1vZGVsRHJhd0NvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhNb2RlbERyYXdDb21wb25lbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBNb2RlbERyYXdDb21wb25lbnQoaXNMaWdodGluZywgZ2VvbWV0cnlOYW1lLCBtYXRlcmlhbE5hbWUsIHNoYWRlck5hbWUsIGxheWVyLCBpc0JpbGxCb2FyZCwgbWVzaE5hbWUsIGFyZ190cmFuc2Zvcm0pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmluZm8gPSBuZXcgTW9kZWxJbmZvKCk7XHJcbiAgICAgICAgX3RoaXMudHJhbnNmb3JtID0gbnVsbDtcclxuICAgICAgICBfdGhpcy5sYXllciA9IGxheWVyO1xyXG4gICAgICAgIGlmIChtZXNoTmFtZSlcclxuICAgICAgICAgICAgX3RoaXMuaW5mby5tZXNoTmFtZSA9IG1lc2hOYW1lO1xyXG4gICAgICAgIF90aGlzLmluZm8uZ2VvbWV0cnlOYW1lID0gZ2VvbWV0cnlOYW1lO1xyXG4gICAgICAgIF90aGlzLmluZm8uc2hhZGVyTmFtZSA9IHNoYWRlck5hbWU7XHJcbiAgICAgICAgX3RoaXMuaW5mby5tYXRlcmlhbE5hbWUgPSBtYXRlcmlhbE5hbWU7XHJcbiAgICAgICAgaWYgKGFyZ190cmFuc2Zvcm0pXHJcbiAgICAgICAgICAgIF90aGlzLnRyYW5zZm9ybSA9IGFyZ190cmFuc2Zvcm07XHJcbiAgICAgICAgX3RoaXMuaW5mby5saWdodGluZyA9IGlzTGlnaHRpbmc7XHJcbiAgICAgICAgX3RoaXMuaW5mby5iaWxsQm9hcmQgPSBpc0JpbGxCb2FyZDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTW9kZWxEcmF3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJMYXllclwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxheWVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE1vZGVsRHJhd0NvbXBvbmVudC5wcm90b3R5cGUuT25TZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMuZ2FtZU9iamVjdC50cmFuc2Zvcm07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmluZm8ubWVzaE5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuZ2FtZU9iamVjdC5NYW5hZ2VyLlNjZW5lLkdldFNjZW5lTWFuYWdlcigpLkdldE1vZGVsQ3JlYXRlcigpLkNyZWF0ZU1vZGVsRnJvbU1lc2godGhpcy5pbmZvLmxpZ2h0aW5nLCB0aGlzLmluZm8uYmlsbEJvYXJkLCB0aGlzLmluZm8ubWVzaE5hbWUsIHRoaXMuaW5mby5zaGFkZXJOYW1lLCB0aGlzLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1lc2hcIik7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSB0aGlzLmdhbWVPYmplY3QuTWFuYWdlci5TY2VuZS5HZXRTY2VuZU1hbmFnZXIoKS5HZXRNb2RlbENyZWF0ZXIoKS5DcmVhdGVNb2RlbCh0aGlzLmluZm8ubGlnaHRpbmcsIHRoaXMuaW5mby5iaWxsQm9hcmQsIHRoaXMuaW5mby5nZW9tZXRyeU5hbWUsIHRoaXMuaW5mby5tYXRlcmlhbE5hbWUsIHRoaXMuaW5mby5zaGFkZXJOYW1lLCB0aGlzLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kZWxJRCA9IHRoaXMuZ2FtZU9iamVjdC5HZXRSZW5kZXJlcigpLlJlZ2lzdCh0aGlzLm1vZGVsLCB0aGlzLmxheWVyKTtcclxuICAgIH07XHJcbiAgICBNb2RlbERyYXdDb21wb25lbnQucHJvdG90eXBlLk9uUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdC5HZXRSZW5kZXJlcigpLlVuUmVnaXN0KHRoaXMubW9kZWxJRCwgdGhpcy5sYXllcik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1vZGVsRHJhd0NvbXBvbmVudDtcclxufShDb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1vZGVsRHJhd0NvbXBvbmVudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFZlY3RvcjNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTWF0aC9WZWN0b3IzXCIpKTtcclxudmFyIElucHV0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1Rvb2wvSW5wdXRcIikpO1xyXG52YXIgQ29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ29tcG9uZW50XCIpKTtcclxudmFyIFNhbXBsZUNvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhTYW1wbGVDb21wb25lbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTYW1wbGVDb21wb25lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgU2FtcGxlQ29tcG9uZW50LnByb3RvdHlwZS5PblNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBJbnB1dF8xLmRlZmF1bHQuQWRkS2V5RG93bkV2ZW50KHRoaXMsIHRydWUpO1xyXG4gICAgfTtcclxuICAgIFNhbXBsZUNvbXBvbmVudC5wcm90b3R5cGUuT25LZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS5rZXkgPT0gXCJBcnJvd0xlZnRcIikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtLlBvc2l0aW9uID0gdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybS5Qb3NpdGlvbi5BZGRfYihuZXcgVmVjdG9yM18xLmRlZmF1bHQoLTEuMCwgMCwgMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS5rZXkgPT0gXCJBcnJvd1JpZ2h0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybS5Qb3NpdGlvbiA9IHRoaXMuZ2FtZU9iamVjdC50cmFuc2Zvcm0uUG9zaXRpb24uQWRkX2IobmV3IFZlY3RvcjNfMS5kZWZhdWx0KDEuMDAsIDAsIDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGUua2V5ID09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdC50cmFuc2Zvcm0uUG9zaXRpb24gPSB0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtLlBvc2l0aW9uLkFkZF9iKG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAtMS4wMCwgMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS5rZXkgPT0gXCJBcnJvd0Rvd25cIikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtLlBvc2l0aW9uID0gdGhpcy5nYW1lT2JqZWN0LnRyYW5zZm9ybS5Qb3NpdGlvbi5BZGRfYihuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMS4wMCwgMCkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gU2FtcGxlQ29tcG9uZW50O1xyXG59KENvbXBvbmVudF8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU2FtcGxlQ29tcG9uZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgR2FtZU9iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWVPYmplY3QoYXJnX21hbmFnZXIsIGFyZ19uYW1lLCBhcmdfdHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBhcmdfdHJhbnNmb3JtO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMubmV3Q29tcG9uZW50cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuaXNSZW1vdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBhcmdfbmFtZTtcclxuICAgICAgICB0aGlzLm1hbmFnZXIgPSBhcmdfbWFuYWdlcjtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lT2JqZWN0LnByb3RvdHlwZSwgXCJJc1JlbW92ZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzUmVtb3ZlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lT2JqZWN0LnByb3RvdHlwZSwgXCJOYW1lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGFyZ19uYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFuYWdlci5VblJlZ2lzdE9iamVjdCh0aGlzLm5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBhcmdfbmFtZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZU9iamVjdC5wcm90b3R5cGUsIFwiTWFuYWdlclwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hbmFnZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWVPYmplY3QucHJvdG90eXBlLCBcIkdhbWVUaW1lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuTWFuYWdlci5TY2VuZS5HZXRTY2VuZU1hbmFnZXIoKS5HZXRHYW1lVGltZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIEdhbWVPYmplY3QucHJvdG90eXBlLlJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiAoY29tcG9uZW50KSB7IHJldHVybiBjb21wb25lbnQuUmVtb3ZlKCk7IH0pO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMubWFuYWdlci5VblJlZ2lzdE9iamVjdCh0aGlzLm5hbWUpO1xyXG4gICAgICAgIHRoaXMubWFuYWdlciA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUuUmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiAoY29tcG9uZW50KSB7IHJldHVybiBjb21wb25lbnQuUmVtb3ZlKCk7IH0pO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMubWFuYWdlciA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUuRGVhZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmlzUmVtb3ZlID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUuR2V0UmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5TY2VuZS5HZXRSZW5kZXJlcigpO1xyXG4gICAgfTtcclxuICAgIEdhbWVPYmplY3QucHJvdG90eXBlLkdldENvbGxpc2lvbk1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5TY2VuZS5HZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUuVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50cy5jb25jYXQodGhpcy5uZXdDb21wb25lbnRzKTtcclxuICAgICAgICB0aGlzLm5ld0NvbXBvbmVudHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiAoY29tcG9uZW50KSB7IHJldHVybiBjb21wb25lbnQuVXBkYXRlKCk7IH0pO1xyXG4gICAgICAgIHZhciByZW1vdmUgPSB0aGlzLmNvbXBvbmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjb21wb25lbnQpIHsgcmV0dXJuIGNvbXBvbmVudC5Jc1JlbW92ZTsgfSk7XHJcbiAgICAgICAgcmVtb3ZlLmZvckVhY2goZnVuY3Rpb24gKHJlbW92ZSkgeyByZXR1cm4gcmVtb3ZlLlJlbW92ZSgpOyB9KTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjb21wb25lbnQpIHsgcmV0dXJuICFjb21wb25lbnQuSXNSZW1vdmU7IH0pO1xyXG4gICAgfTtcclxuICAgIEdhbWVPYmplY3QucHJvdG90eXBlLkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUuU2V0Q29tcG9uZW50ID0gZnVuY3Rpb24gKGFyZ19jb21wb25lbnQpIHtcclxuICAgICAgICBhcmdfY29tcG9uZW50LlNldCh0aGlzKTtcclxuICAgICAgICB0aGlzLm5ld0NvbXBvbmVudHMucHVzaChhcmdfY29tcG9uZW50KTtcclxuICAgICAgICByZXR1cm4gYXJnX2NvbXBvbmVudDtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0LnByb3RvdHlwZS5IaXQgPSBmdW5jdGlvbiAoYXJnX29iamVjdCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjb21wb25lbnQpIHsgcmV0dXJuIGNvbXBvbmVudC5IaXQoYXJnX29iamVjdCk7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lT2JqZWN0O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBHYW1lT2JqZWN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgR2FtZU9iamVjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0dhbWVPYmplY3RcIikpO1xyXG52YXIgVHJhbnNmb3JtXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1RyYW5zZm9ybVwiKSk7XHJcbnZhciBHYW1lT2JqZWN0TWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWVPYmplY3RNYW5hZ2VyKGFyZ19zY2VuZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLm5ld0dhbWVPYmplY3RzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5tYXBfZ2FtZU9iamVjdHMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IGFyZ19zY2VuZTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lT2JqZWN0TWFuYWdlci5wcm90b3R5cGUsIFwiU2NlbmVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBHYW1lT2JqZWN0TWFuYWdlci5wcm90b3R5cGUuQWRkR2FtZU9iamVjdCA9IGZ1bmN0aW9uIChhcmdfbmFtZSwgYXJnX3RyYW5zZm9ybSkge1xyXG4gICAgICAgIHZhciBuZXdPYmo7XHJcbiAgICAgICAgaWYgKHRoaXMubWFwX2dhbWVPYmplY3RzW2FyZ19uYW1lXSkge1xyXG4gICAgICAgICAgICB2YXIgbnVtID0gMTtcclxuICAgICAgICAgICAgdmFyIG5hbWUgPSBhcmdfbmFtZSArIFwiX1wiICsgbnVtO1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5tYXBfZ2FtZU9iamVjdHNbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIG51bSsrO1xyXG4gICAgICAgICAgICAgICAgbmFtZSA9IGFyZ19uYW1lICsgXCJfXCIgKyBudW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJnX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJnX3RyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICBuZXdPYmogPSBuZXcgR2FtZU9iamVjdF8xLmRlZmF1bHQodGhpcywgYXJnX25hbWUsIGFyZ190cmFuc2Zvcm0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbmV3T2JqID0gbmV3IEdhbWVPYmplY3RfMS5kZWZhdWx0KHRoaXMsIGFyZ19uYW1lLCBuZXcgVHJhbnNmb3JtXzEuZGVmYXVsdCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYXBfZ2FtZU9iamVjdHNbYXJnX25hbWVdID0gbmV3T2JqO1xyXG4gICAgICAgIHRoaXMubmV3R2FtZU9iamVjdHMucHVzaChuZXdPYmopO1xyXG4gICAgICAgIHJldHVybiBuZXdPYmo7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdE1hbmFnZXIucHJvdG90eXBlLlJlbW92ZU9iamVjdCA9IGZ1bmN0aW9uIChhcmdfZ2FtZU9iak5hbWUpIHtcclxuICAgICAgICB0aGlzLm1hcF9nYW1lT2JqZWN0c1thcmdfZ2FtZU9iak5hbWVdLkRlYWQoKTtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0TWFuYWdlci5wcm90b3R5cGUuVW5SZWdpc3RPYmplY3QgPSBmdW5jdGlvbiAoYXJnX2dhbWVPYmplY3ROYW1lKSB7XHJcbiAgICAgICAgdGhpcy5tYXBfZ2FtZU9iamVjdHMuZGVsZXRlKGFyZ19nYW1lT2JqZWN0TmFtZSk7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdE1hbmFnZXIucHJvdG90eXBlLlVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3RzID0gdGhpcy5nYW1lT2JqZWN0cy5jb25jYXQodGhpcy5uZXdHYW1lT2JqZWN0cyk7XHJcbiAgICAgICAgdGhpcy5uZXdHYW1lT2JqZWN0cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmouVXBkYXRlKCk7IH0pO1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMuZmlsdGVyKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iai5Jc1JlbW92ZTsgfSkuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmouUmVtb3ZlKCk7IH0pO1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMgPSB0aGlzLmdhbWVPYmplY3RzLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7IHJldHVybiAhb2JqLklzUmVtb3ZlOyB9KTtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0TWFuYWdlci5wcm90b3R5cGUuR2V0R2FtZU9iamVjdCA9IGZ1bmN0aW9uIChhcmdfZ2FtZU9iamVjdE5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBfZ2FtZU9iamVjdHNbYXJnX2dhbWVPYmplY3ROYW1lXTtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0TWFuYWdlci5wcm90b3R5cGUuUmVnaXN0T2JqID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIHRoaXMubWFwX2dhbWVPYmplY3RzW29iai5OYW1lXSA9IG9iajtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0TWFuYWdlci5wcm90b3R5cGUuUmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm1hcF9nYW1lT2JqZWN0cy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMubmV3R2FtZU9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmouUmVsZWFzZSgpOyB9KTtcclxuICAgICAgICB0aGlzLm5ld0dhbWVPYmplY3RzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iai5SZWxlYXNlKCk7IH0pO1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLnNjZW5lID0gbnVsbDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZU9iamVjdE1hbmFnZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWVPYmplY3RNYW5hZ2VyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgTWF0cml4XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL01hdGgvTWF0cml4XCIpKTtcclxudmFyIFRyYW5zZm9ybV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9UcmFuc2Zvcm1cIikpO1xyXG52YXIgVmVjdG9yNF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9NYXRoL1ZlY3RvcjRcIikpO1xyXG52YXIgQ2FtZXJhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2FtZXJhKGFyZ19kZXZpY2UsIGxheWVyLCBpc1BhcmFyZWxsLCBmcmFtZUJ1ZmZlcikge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0RnJhbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gYXJnX2RldmljZTtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm1fMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5sYXllciA9IGxheWVyO1xyXG4gICAgICAgIHRoaXMuY2xlYXJDb2xvciA9IG5ldyBWZWN0b3I0XzEuZGVmYXVsdCgwLCAwLCAwLCAwKTtcclxuICAgICAgICBpZiAoZnJhbWVCdWZmZXIpIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRGcmFtZSA9IGZyYW1lQnVmZmVyO1xyXG4gICAgICAgICAgICBpZiAoIWlzUGFyYXJlbGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeCA9IG5ldyBNYXRyaXhfMS5kZWZhdWx0KCkuUGVyc3BlY3RpdmUoNDUsIHRoaXMudGFyZ2V0RnJhbWUud2lkdGggLyB0aGlzLnRhcmdldEZyYW1lLmhlaWdodCwgMC4xLCAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4ID0gbmV3IE1hdHJpeF8xLmRlZmF1bHQoKS5PcnRobygtdGhpcy50YXJnZXRGcmFtZS53aWR0aCAvIDIsIHRoaXMudGFyZ2V0RnJhbWUud2lkdGggLyAyLCB0aGlzLnRhcmdldEZyYW1lLmhlaWdodCAvIDIsIC10aGlzLnRhcmdldEZyYW1lLmhlaWdodCAvIDIsIDAuMSwgMTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFpc1BhcmFyZWxsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4ID0gbmV3IE1hdHJpeF8xLmRlZmF1bHQoKS5QZXJzcGVjdGl2ZSg0NSwgdGhpcy5kZXZpY2UuR2V0U2l6ZSgpLnggLyB0aGlzLmRldmljZS5HZXRTaXplKCkueSwgMC4xLCAxMDApO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeCA9IG5ldyBNYXRyaXhfMS5kZWZhdWx0KCkuT3J0aG8oLXRoaXMuZGV2aWNlLkdldFNpemUoKS54IC8gMiwgdGhpcy5kZXZpY2UuR2V0U2l6ZSgpLnggLyAyLCB0aGlzLmRldmljZS5HZXRTaXplKCkueSAvIDIsIC10aGlzLmRldmljZS5HZXRTaXplKCkueSAvIDIsIDAuMSwgMTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIENhbWVyYS5wcm90b3R5cGUuQXR0YWNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZGV2aWNlLlNldENsZWFyQ29sb3IodGhpcy5jbGVhckNvbG9yKTtcclxuICAgICAgICB0aGlzLmRldmljZS5TZXRDYW1lcmFTdGF0dXModGhpcy50cmFuc2Zvcm0uTWF0cml4LkludmVyc2UoKSwgdGhpcy5wcm9qZWN0aW9uTWF0cml4LCB0aGlzLnRyYW5zZm9ybS5Sb3RhdGlvbiwgdGhpcy50cmFuc2Zvcm0uUG9zaXRpb24pO1xyXG4gICAgICAgIGlmICh0aGlzLnRhcmdldEZyYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlLmNvbnRleHQudmlld3BvcnQoMCwgMCwgdGhpcy50YXJnZXRGcmFtZS53aWR0aCwgdGhpcy50YXJnZXRGcmFtZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZS5jb250ZXh0LmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmRldmljZS5jb250ZXh0LkZSQU1FQlVGRkVSLCB0aGlzLnRhcmdldEZyYW1lLmZyYW1lQnVmZmVyKTtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2UuY2xlYXJGdW5jKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZS5jb250ZXh0LnZpZXdwb3J0KDAsIDAsIHRoaXMuZGV2aWNlLkdldFNpemUoKS54LCB0aGlzLmRldmljZS5HZXRTaXplKCkueSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlLmNvbnRleHQuYmluZEZyYW1lYnVmZmVyKHRoaXMuZGV2aWNlLmNvbnRleHQuRlJBTUVCVUZGRVIsIG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZS5jbGVhckZ1bmMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENhbWVyYTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ2FtZXJhO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVmVjdG9yNF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9NYXRoL1ZlY3RvcjRcIikpO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9NYXRoL1ZlY3RvcjJcIikpO1xyXG52YXIgR3JhcGhpY0RldmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdyYXBoaWNEZXZpY2UoYXJnX2NhbnZhcykge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gYXJnX2NhbnZhcztcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5lbmFibGUodGhpcy5jb250ZXh0LkNVTExfRkFDRSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmVuYWJsZSh0aGlzLmNvbnRleHQuREVQVEhfVEVTVCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRlcHRoRnVuYyh0aGlzLmNvbnRleHQuTEVRVUFMKTtcclxuICAgICAgICB0aGlzLmNsZWFyQ29sb3IgPSBuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5zaXplID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KGFyZ19jYW52YXMud2lkdGgsIGFyZ19jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmNsZWFyRnVuYyA9IHRoaXMuQ2xlYXI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyQ29sb3IodGhpcy5jbGVhckNvbG9yLngsIHRoaXMuY2xlYXJDb2xvci55LCB0aGlzLmNsZWFyQ29sb3IueiwgdGhpcy5jbGVhckNvbG9yLncpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhckRlcHRoKDEuMCk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR3JhcGhpY0RldmljZS5wcm90b3R5cGUsIFwiVGVtcE1hdHJpeFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRlbXBNYXRyaXg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLCBcIlZpZXdNYXRyaXhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52aWV3TWF0cml4O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHcmFwaGljRGV2aWNlLnByb3RvdHlwZSwgXCJQcm9qZWN0aW9uTWF0cml4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdGlvbk1hdHJpeDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR3JhcGhpY0RldmljZS5wcm90b3R5cGUsIFwiQ2FtZXJhUG9zaXRpb25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYW1Qb3NpdGlvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR3JhcGhpY0RldmljZS5wcm90b3R5cGUsIFwiQ2FtZXJhUm90YXRpb25JbnZcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYW1Sb3RhdGlvbkludjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5TZXRDbGVhckNvbG9yID0gZnVuY3Rpb24gKGFyZ19jb2xvcikge1xyXG4gICAgICAgIHRoaXMuY2xlYXJDb2xvciA9IGFyZ19jb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcih0aGlzLmNsZWFyQ29sb3IueCwgdGhpcy5jbGVhckNvbG9yLnksIHRoaXMuY2xlYXJDb2xvci56LCB0aGlzLmNsZWFyQ29sb3Iudyk7XHJcbiAgICAgICAgcmV0dXJuIGFyZ19jb2xvcjtcclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5FbmFibGVTdGVuY2lsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5lbmFibGUodGhpcy5jb250ZXh0LlNURU5DSUxfVEVTVCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyU3RlbmNpbCgwKTtcclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5DbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXIodGhpcy5jb250ZXh0LkNPTE9SX0JVRkZFUl9CSVQgfCB0aGlzLmNvbnRleHQuREVQVEhfQlVGRkVSX0JJVCk7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuQ2xlYXJTdGVuY2lsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhcih0aGlzLmNvbnRleHQuQ09MT1JfQlVGRkVSX0JJVCB8IHRoaXMuY29udGV4dC5ERVBUSF9CVUZGRVJfQklUIHwgdGhpcy5jb250ZXh0LlNURU5DSUxfQlVGRkVSX0JJVCk7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuR2V0U2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLlByZXNlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZsdXNoKCk7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuU2V0U2hhZGVyID0gZnVuY3Rpb24gKGFyZ19zaGFkZXIpIHtcclxuICAgICAgICB0aGlzLnNoYWRlciA9IGFyZ19zaGFkZXI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW0odGhpcy5zaGFkZXIucHJvZ3JhbU9iamVjdCk7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuQ3JlYXRlUHJvZ3JhbSA9IGZ1bmN0aW9uIChhcmdfdnMsIGFyZ19mcykge1xyXG4gICAgICAgIC8vIOODl+ODreOCsOODqeODoOOCquODluOCuOOCp+OCr+ODiOOBrueUn+aIkFxyXG4gICAgICAgIHZhciBwcm9ncmFtID0gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0oKTtcclxuICAgICAgICAvLyDjg5fjg63jgrDjg6njg6Djgqrjg5bjgrjjgqfjgq/jg4jjgavjgrfjgqfjg7zjg4DjgpLlibLjgorlvZPjgabjgotcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGFyZ192cyk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCBhcmdfZnMpO1xyXG4gICAgICAgIC8vIOOCt+OCp+ODvOODgOOCkuODquODs+OCr1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICAvLyDjgrfjgqfjg7zjg4Djga7jg6rjg7Pjgq/jgYzmraPjgZfjgY/ooYzjgarjgo/jgozjgZ/jgYvjg4Hjgqfjg4Pjgq9cclxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgdGhpcy5jb250ZXh0LkxJTktfU1RBVFVTKSkge1xyXG4gICAgICAgICAgICAvLyDmiJDlip/jgZfjgabjgYTjgZ/jgonjg5fjg63jgrDjg6njg6Djgqrjg5bjgrjjgqfjgq/jg4jjgpLmnInlirnjgavjgZnjgotcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIC8vIOODl+ODreOCsOODqeODoOOCquODluOCuOOCp+OCr+ODiOOCkui/lOOBl+OBpue1guS6hlxyXG4gICAgICAgICAgICByZXR1cm4gcHJvZ3JhbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOWkseaVl+OBl+OBpuOBhOOBn+OCieOCqOODqeODvOODreOCsOOCkuOCouODqeODvOODiOOBmeOCi1xyXG4gICAgICAgICAgICBhbGVydCh0aGlzLmNvbnRleHQuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5DcmVhdGVWQk8gPSBmdW5jdGlvbiAoYXJnX2RhdGEpIHtcclxuICAgICAgICAvLyDjg5Djg4Pjg5XjgqHjgqrjg5bjgrjjgqfjgq/jg4jjga7nlJ/miJBcclxuICAgICAgICB2YXIgdmJvID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgIC8vIOODkOODg+ODleOCoeOCkuODkOOCpOODs+ODieOBmeOCi1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRoaXMuY29udGV4dC5BUlJBWV9CVUZGRVIsIHZibyk7XHJcbiAgICAgICAgLy8g44OQ44OD44OV44Kh44Gr44OH44O844K/44KS44K744OD44OIXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGhpcy5jb250ZXh0LkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShhcmdfZGF0YSksIHRoaXMuY29udGV4dC5TVEFUSUNfRFJBVyk7XHJcbiAgICAgICAgLy8g44OQ44OD44OV44Kh44Gu44OQ44Kk44Oz44OJ44KS54Sh5Yq55YyWXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGhpcy5jb250ZXh0LkFSUkFZX0JVRkZFUiwgbnVsbCk7XHJcbiAgICAgICAgLy8g55Sf5oiQ44GX44GfVkJP44KS6L+U44GX44Gm57WC5LqGXHJcbiAgICAgICAgcmV0dXJuIHZibztcclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5DcmVhdGVJQk8gPSBmdW5jdGlvbiAoYXJnX2RhdGEpIHtcclxuICAgICAgICAvLyDjg5Djg4Pjg5XjgqHjgqrjg5bjgrjjgqfjgq/jg4jjga7nlJ/miJBcclxuICAgICAgICB2YXIgaWJvID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgIC8vIOODkOODg+ODleOCoeOCkuODkOOCpOODs+ODieOBmeOCi1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRoaXMuY29udGV4dC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgaWJvKTtcclxuICAgICAgICAvLyDjg5Djg4Pjg5XjgqHjgavjg4fjg7zjgr/jgpLjgrvjg4Pjg4hcclxuICAgICAgICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0aGlzLmNvbnRleHQuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG5ldyBJbnQxNkFycmF5KGFyZ19kYXRhKSwgdGhpcy5jb250ZXh0LlNUQVRJQ19EUkFXKTtcclxuICAgICAgICAvLyDjg5Djg4Pjg5XjgqHjga7jg5DjgqTjg7Pjg4njgpLnhKHlirnljJZcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0aGlzLmNvbnRleHQuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG51bGwpO1xyXG4gICAgICAgIC8vIOeUn+aIkOOBl+OBn0lCT+OCkui/lOOBl+OBpue1guS6hlxyXG4gICAgICAgIHJldHVybiBpYm87XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuQ3JlYXRlVmVydGV4U2hhZGVyID0gZnVuY3Rpb24gKGFyZ19zb3VyY2UpIHtcclxuICAgICAgICB2YXIgc2hhZGVyO1xyXG4gICAgICAgIHNoYWRlciA9IHRoaXMuY29udGV4dC5jcmVhdGVTaGFkZXIodGhpcy5jb250ZXh0LlZFUlRFWF9TSEFERVIpO1xyXG4gICAgICAgIC8vIOeUn+aIkOOBleOCjOOBn+OCt+OCp+ODvOODgOOBq+OCveODvOOCueOCkuWJsuOCiuW9k+OBpuOCi1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBhcmdfc291cmNlKTtcclxuICAgICAgICAvLyDjgrfjgqfjg7zjg4DjgpLjgrPjg7Pjg5HjgqTjg6vjgZnjgotcclxuICAgICAgICB0aGlzLmNvbnRleHQuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG4gICAgICAgIC8vIOOCt+OCp+ODvOODgOOBjOato+OBl+OBj+OCs+ODs+ODkeOCpOODq+OBleOCjOOBn+OBi+ODgeOCp+ODg+OCr1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgdGhpcy5jb250ZXh0LkNPTVBJTEVfU1RBVFVTKSkge1xyXG4gICAgICAgICAgICAvLyDmiJDlip/jgZfjgabjgYTjgZ/jgonjgrfjgqfjg7zjg4DjgpLov5TjgZfjgabntYLkuoZcclxuICAgICAgICAgICAgcmV0dXJuIHNoYWRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmVydGV4IHNoYWRlciBmYWlsZWRcIik7XHJcbiAgICAgICAgICAgIC8vIOWkseaVl+OBl+OBpuOBhOOBn+OCieOCqOODqeODvOODreOCsOOCkuOCouODqeODvOODiOOBmeOCi1xyXG4gICAgICAgICAgICBhbGVydCh0aGlzLmNvbnRleHQuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5DcmVhdGVGcmFnbWVudFNoYWRlciA9IGZ1bmN0aW9uIChhcmdfc291cmNlKSB7XHJcbiAgICAgICAgdmFyIHNoYWRlcjtcclxuICAgICAgICBzaGFkZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlU2hhZGVyKHRoaXMuY29udGV4dC5GUkFHTUVOVF9TSEFERVIpO1xyXG4gICAgICAgIC8vIOeUn+aIkOOBleOCjOOBn+OCt+OCp+ODvOODgOOBq+OCveODvOOCueOCkuWJsuOCiuW9k+OBpuOCi1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBhcmdfc291cmNlKTtcclxuICAgICAgICAvLyDjgrfjgqfjg7zjg4DjgpLjgrPjg7Pjg5HjgqTjg6vjgZnjgotcclxuICAgICAgICB0aGlzLmNvbnRleHQuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG4gICAgICAgIC8vIOOCt+OCp+ODvOODgOOBjOato+OBl+OBj+OCs+ODs+ODkeOCpOODq+OBleOCjOOBn+OBi+ODgeOCp+ODg+OCr1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgdGhpcy5jb250ZXh0LkNPTVBJTEVfU1RBVFVTKSkge1xyXG4gICAgICAgICAgICAvLyDmiJDlip/jgZfjgabjgYTjgZ/jgonjgrfjgqfjg7zjg4DjgpLov5TjgZfjgabntYLkuoZcclxuICAgICAgICAgICAgcmV0dXJuIHNoYWRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZnJhZ21lbnQgc2hhZGVyIGZhaWxlZFwiKTtcclxuICAgICAgICAgICAgLy8g5aSx5pWX44GX44Gm44GE44Gf44KJ44Ko44Op44O844Ot44Kw44KS44Ki44Op44O844OI44GZ44KLXHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuY29udGV4dC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEdyYXBoaWNEZXZpY2UucHJvdG90eXBlLkNyZWF0ZVRleHR1cmUgPSBmdW5jdGlvbiAoYXJnX3NvdXJjZSwgYXJnX3RleHR1cmUpIHtcclxuICAgICAgICAvLyDjgqTjg6Hjg7zjgrjjgqrjg5bjgrjjgqfjgq/jg4jjga7nlJ/miJBcclxuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgLy8g44OH44O844K/44Gu44Kq44Oz44Ot44O844OJ44KS44OI44Oq44Ks44O844Gr44GZ44KLXHJcbiAgICAgICAgaW1nLm9ubG9hZCA9IE9uVGV4TG9hZChpbWcsIGFyZ190ZXh0dXJlLCBhcmdfc291cmNlLCB0aGlzKTtcclxuICAgICAgICAvLyDjgqTjg6Hjg7zjgrjjgqrjg5bjgrjjgqfjgq/jg4jjga7jgr3jg7zjgrnjgpLmjIflrppcclxuICAgICAgICBpbWcuc3JjID0gYXJnX3NvdXJjZTtcclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5TZXRWQk8gPSBmdW5jdGlvbiAoYXJnX3Zib0xpc3QpIHtcclxuICAgICAgICAvLyDlvJXmlbDjgajjgZfjgablj5fjgZHlj5bjgaPjgZ/phY3liJfjgpLlh6bnkIbjgZnjgotcclxuICAgICAgICBmb3IgKHZhciBpIGluIGFyZ192Ym9MaXN0KSB7XHJcbiAgICAgICAgICAgIC8vIOODkOODg+ODleOCoeOCkuODkOOCpOODs+ODieOBmeOCi1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0aGlzLmNvbnRleHQuQVJSQVlfQlVGRkVSLCBhcmdfdmJvTGlzdFtpXSk7XHJcbiAgICAgICAgICAgIC8vIGF0dHJpYnV0ZUxvY2F0aW9u44KS5pyJ5Yq544Gr44GZ44KLXHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnNoYWRlci5hdHRyaWJ1dGVMb2NhdGlvbnNbaV0pO1xyXG4gICAgICAgICAgICAvLyBhdHRyaWJ1dGVMb2NhdGlvbuOCkumAmuefpeOBl+eZu+mMsuOBmeOCi1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnNoYWRlci5hdHRyaWJ1dGVMb2NhdGlvbnNbaV0sIHRoaXMuc2hhZGVyLmF0dHJpYnV0ZVN0cmlkZXNbaV0sIHRoaXMuY29udGV4dC5GTE9BVCwgZmFsc2UsIDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5PbkxvYWRUZXh0dXJlID0gZnVuY3Rpb24gKGltZywgYXJnX3RleHR1cmUsIGFyZ19zb3VyY2UpIHtcclxuICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6Pjgqrjg5bjgrjjgqfjgq/jg4jjga7nlJ/miJBcclxuICAgICAgICB2YXIgdGV4ID0gdGhpcy5jb250ZXh0LmNyZWF0ZVRleHR1cmUoKTtcclxuICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6PjgpLjg5DjgqTjg7Pjg4njgZnjgotcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUodGhpcy5jb250ZXh0LlRFWFRVUkVfMkQsIHRleCk7XHJcbiAgICAgICAgLy8g44OG44Kv44K544OB44Oj44G444Kk44Oh44O844K444KS6YGp55SoXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnRleEltYWdlMkQodGhpcy5jb250ZXh0LlRFWFRVUkVfMkQsIDAsIHRoaXMuY29udGV4dC5SR0JBLCB0aGlzLmNvbnRleHQuUkdCQSwgdGhpcy5jb250ZXh0LlVOU0lHTkVEX0JZVEUsIGltZyk7XHJcbiAgICAgICAgLy8g44Of44OD44OX44Oe44OD44OX44KS55Sf5oiQXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmdlbmVyYXRlTWlwbWFwKHRoaXMuY29udGV4dC5URVhUVVJFXzJEKTtcclxuICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6Pjga7jg5DjgqTjg7Pjg4njgpLnhKHlirnljJZcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUodGhpcy5jb250ZXh0LlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gICAgICAgIGFyZ190ZXh0dXJlLmRhdGEgPSB0ZXg7XHJcbiAgICAgICAgYXJnX3RleHR1cmUuTG9hZGVkKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYXJnX3NvdXJjZSArIFwiIGxvYWRlZFwiKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICBHcmFwaGljRGV2aWNlLnByb3RvdHlwZS5PbkxvYWRTaGFkZXIgPSBmdW5jdGlvbiAoYXJnX3NvdXJjZSwgYXJnX3NoYWRlcikge1xyXG4gICAgICAgIHZhciBkYXRhID0gYXJnX3NvdXJjZS5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgYXJnX3NoYWRlciA9IHRoaXMuY29udGV4dC5jcmVhdGVTaGFkZXIodGhpcy5jb250ZXh0LlZFUlRFWF9TSEFERVIpO1xyXG4gICAgICAgIC8vIOeUn+aIkOOBleOCjOOBn+OCt+OCp+ODvOODgOOBq+OCveODvOOCueOCkuWJsuOCiuW9k+OBpuOCi1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zaGFkZXJTb3VyY2UoYXJnX3NoYWRlciwgZGF0YSk7XHJcbiAgICAgICAgLy8g44K344Kn44O844OA44KS44Kz44Oz44OR44Kk44Or44GZ44KLXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNvbXBpbGVTaGFkZXIoYXJnX3NoYWRlcik7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY0RldmljZS5wcm90b3R5cGUuU2V0Q2FtZXJhU3RhdHVzID0gZnVuY3Rpb24gKGFyZ192aWV3TWF0cml4LCBhcmdfcHJvamVjdGlvbk1hdHJpeCwgYXJnX2NhbWVyYU1hdHJpeCwgYXJnX2NhbWVyYVBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy52aWV3TWF0cml4ID0gYXJnX3ZpZXdNYXRyaXg7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4ID0gYXJnX3Byb2plY3Rpb25NYXRyaXg7XHJcbiAgICAgICAgdGhpcy50ZW1wTWF0cml4ID0gdGhpcy5wcm9qZWN0aW9uTWF0cml4Lk11bHRpcGx5KHRoaXMudmlld01hdHJpeCk7XHJcbiAgICAgICAgdGhpcy5jYW1Qb3NpdGlvbiA9IGFyZ19jYW1lcmFQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLmNhbVJvdGF0aW9uSW52ID0gKGFyZ19jYW1lcmFNYXRyaXgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHcmFwaGljRGV2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBHcmFwaGljRGV2aWNlO1xyXG5mdW5jdGlvbiBPblRleExvYWQoaW1nLCBhcmdfdGV4dHVyZSwgYXJnX3NvdXJjZSwgZGV2aWNlKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRldmljZS5PbkxvYWRUZXh0dXJlKGltZywgYXJnX3RleHR1cmUsIGFyZ19zb3VyY2UpO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBPblNoYWRlckxvYWQoYXJnX3NvdXJjZSwgYXJnX3NoYWRlciwgZGV2aWNlKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRldmljZS5PbkxvYWRTaGFkZXIoYXJnX3NvdXJjZSwgYXJnX3NoYWRlcik7XHJcbiAgICB9O1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1vZGVsKGlzTGlnaHQsIGlzQmlsbEJvYXJkKSB7XHJcbiAgICAgICAgaWYgKGlzQmlsbEJvYXJkID09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKGlzTGlnaHQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLkRyYXcgPSB0aGlzLkRyYXdfQmlsbEJvYXJkX0xpZ2h0O1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLkRyYXcgPSB0aGlzLkRyYXdfQmlsbEJvYXJkX05vbkxpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGlzTGlnaHQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLkRyYXcgPSB0aGlzLkRyYXdfTGlnaHQ7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuRHJhdyA9IHRoaXMuRHJhd19Ob25MaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBNb2RlbC5wcm90b3R5cGUuSW5pdGlhbGl6ZV9nZW9tID0gZnVuY3Rpb24gKGFyZ19ncmFwaGljRGV2aWNlLCBhcmdfZ2VvbWV0cnksIGFyZ19tYXRlcmlhbCwgYXJnX1NoYWRlciwgYXJnX3RyYW5zZm9ybSkge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZSA9IGFyZ19ncmFwaGljRGV2aWNlO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBhcmdfZ2VvbWV0cnk7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLm1hdGVyaWFscy5wdXNoKGFyZ19tYXRlcmlhbCk7XHJcbiAgICAgICAgdGhpcy5zdWJzZXRzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5zdWJzZXRzLnB1c2godGhpcy5nZW9tZXRyeS5HZXRJbmRleFNpemUoKSk7XHJcbiAgICAgICAgdGhpcy5zaGFkZXIgPSBhcmdfU2hhZGVyO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gYXJnX3RyYW5zZm9ybTtcclxuICAgICAgICB0aGlzLmxpZ2h0cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgfTtcclxuICAgIE1vZGVsLnByb3RvdHlwZS5Jbml0aWFsaXplX21lc2ggPSBmdW5jdGlvbiAoYXJnX2dyYXBoaWNEZXZpY2UsIGFyZ19tZXNoLCBhcmdfU2hhZGVyLCBhcmdfdHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlID0gYXJnX2dyYXBoaWNEZXZpY2U7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IGFyZ19tZXNoLmdlb21ldHJ5O1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxzID0gYXJnX21lc2guYXJ5X21hdGVyaWFscztcclxuICAgICAgICB0aGlzLnN1YnNldHMgPSB0aGlzLmdlb21ldHJ5LkdldFN1YlNldCgpO1xyXG4gICAgICAgIHRoaXMuc2hhZGVyID0gYXJnX1NoYWRlcjtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IGFyZ190cmFuc2Zvcm07XHJcbiAgICAgICAgdGhpcy5saWdodHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN1YnNldHMpO1xyXG4gICAgfTtcclxuICAgIE1vZGVsLnByb3RvdHlwZS5TZXRMaWdodCA9IGZ1bmN0aW9uIChhcmdfbGlnaHQpIHtcclxuICAgICAgICB0aGlzLmxpZ2h0cy5wdXNoKGFyZ19saWdodCk7XHJcbiAgICB9O1xyXG4gICAgTW9kZWwucHJvdG90eXBlLkRyYXdfTm9uTGlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zaGFkZXIuQXR0YWNoKCk7XHJcbiAgICAgICAgdmFyIG12cE1hdHJpeCA9IHRoaXMuZ3JhcGhpY0RldmljZS5UZW1wTWF0cml4Lk11bHRpcGx5KHRoaXMudHJhbnNmb3JtLk1hdHJpeCk7XHJcbiAgICAgICAgdmFyIGludk1hdHJpeCA9IHRoaXMudHJhbnNmb3JtLk1hdHJpeC5JbnZlcnNlKCk7XHJcbiAgICAgICAgLy8gdW5pZm9ybeWkieaVsOOBrueZu+mMsuOBqOaPj+eUu1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1swXSwgZmFsc2UsIG12cE1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMV0sIGZhbHNlLCB0aGlzLnRyYW5zZm9ybS5NYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzJdLCBmYWxzZSwgaW52TWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuRHJhdygpO1xyXG4gICAgICAgIHZhciBvZmZzZXQgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdWJzZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzW2ldLkF0dGFjaCgpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5kcmF3RWxlbWVudHModGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVFJJQU5HTEVTLCB0aGlzLnN1YnNldHNbaV0sIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlVOU0lHTkVEX1NIT1JULCBvZmZzZXQgKiAyKTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IHRoaXMuc3Vic2V0c1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTW9kZWwucHJvdG90eXBlLkRyYXdfTGlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zaGFkZXIuQXR0YWNoKCk7XHJcbiAgICAgICAgdmFyIG12cE1hdHJpeCA9IHRoaXMuZ3JhcGhpY0RldmljZS5UZW1wTWF0cml4Lk11bHRpcGx5KHRoaXMudHJhbnNmb3JtLk1hdHJpeCk7XHJcbiAgICAgICAgdmFyIGludk1hdHJpeCA9IHRoaXMudHJhbnNmb3JtLk1hdHJpeC5JbnZlcnNlKCk7XHJcbiAgICAgICAgLy8gdW5pZm9ybeWkieaVsOOBrueZu+mMsuOBqOaPj+eUu1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1swXSwgZmFsc2UsIG12cE1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMV0sIGZhbHNlLCB0aGlzLnRyYW5zZm9ybS5NYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzJdLCBmYWxzZSwgaW52TWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMubGlnaHRzLmZvckVhY2goZnVuY3Rpb24gKGxpZ2h0KSB7IHJldHVybiBsaWdodC5BdGFjaCgpOyB9KTtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LkRyYXcoKTtcclxuICAgICAgICB2YXIgb2Zmc2V0ID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3Vic2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsc1tpXS5BdHRhY2goKTtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuZHJhd0VsZW1lbnRzKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRSSUFOR0xFUywgdGhpcy5zdWJzZXRzW2ldLCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5VTlNJR05FRF9TSE9SVCwgb2Zmc2V0ICogMik7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSB0aGlzLnN1YnNldHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE1vZGVsLnByb3RvdHlwZS5EcmF3X0JpbGxCb2FyZF9MaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNoYWRlci5BdHRhY2goKTtcclxuICAgICAgICB2YXIgbU1hdHJpeCA9IHRoaXMudHJhbnNmb3JtLk1hdHJpeC5NdWx0aXBseSh0aGlzLmdyYXBoaWNEZXZpY2UuQ2FtZXJhUm90YXRpb25JbnYpO1xyXG4gICAgICAgIHZhciBtdnBNYXRyaXggPSB0aGlzLmdyYXBoaWNEZXZpY2UuVGVtcE1hdHJpeC5NdWx0aXBseShtTWF0cml4KTtcclxuICAgICAgICB2YXIgaW52TWF0cml4ID0gdGhpcy50cmFuc2Zvcm0uTWF0cml4LkludmVyc2UoKTtcclxuICAgICAgICB0aGlzLmxpZ2h0cy5mb3JFYWNoKGZ1bmN0aW9uIChsaWdodCkgeyByZXR1cm4gbGlnaHQuQXRhY2goKTsgfSk7XHJcbiAgICAgICAgLy8gdW5pZm9ybeWkieaVsOOBrueZu+mMsuOBqOaPj+eUu1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1swXSwgZmFsc2UsIG12cE1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMV0sIGZhbHNlLCB0aGlzLnRyYW5zZm9ybS5NYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzJdLCBmYWxzZSwgaW52TWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuRHJhdygpO1xyXG4gICAgICAgIHZhciBvZmZzZXQgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdWJzZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzW2ldLkF0dGFjaCgpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5kcmF3RWxlbWVudHModGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVFJJQU5HTEVTLCB0aGlzLnN1YnNldHNbaV0sIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlVOU0lHTkVEX1NIT1JULCBvZmZzZXQgKiAyKTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IHRoaXMuc3Vic2V0c1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTW9kZWwucHJvdG90eXBlLkRyYXdfQmlsbEJvYXJkX05vbkxpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2hhZGVyLkF0dGFjaCgpO1xyXG4gICAgICAgIC8vdGhpcy50cmFuc2Zvcm0uTG9va0F0KHRoaXMuZ3JhcGhpY0RldmljZS5DYW1lcmFQb3NpdGlvbixuZXcgVmVjdG9yMygwLDEsMCkpO1xyXG4gICAgICAgIHZhciBtTWF0cml4ID0gdGhpcy50cmFuc2Zvcm0uTWF0cml4Lk11bHRpcGx5KHRoaXMuZ3JhcGhpY0RldmljZS5DYW1lcmFSb3RhdGlvbkludik7XHJcbiAgICAgICAgdmFyIG12cE1hdHJpeCA9IHRoaXMuZ3JhcGhpY0RldmljZS5UZW1wTWF0cml4Lk11bHRpcGx5KG1NYXRyaXgpO1xyXG4gICAgICAgIHZhciBpbnZNYXRyaXggPSB0aGlzLnRyYW5zZm9ybS5NYXRyaXguSW52ZXJzZSgpO1xyXG4gICAgICAgIC8vIHVuaWZvcm3lpInmlbDjga7nmbvpjLLjgajmj4/nlLtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbMF0sIGZhbHNlLCBtdnBNYXRyaXguZGF0YSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzFdLCBmYWxzZSwgdGhpcy50cmFuc2Zvcm0uTWF0cml4LmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1syXSwgZmFsc2UsIGludk1hdHJpeC5kYXRhKTtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LkRyYXcoKTtcclxuICAgICAgICB2YXIgb2Zmc2V0ID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3Vic2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsc1tpXS5BdHRhY2goKTtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuZHJhd0VsZW1lbnRzKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRSSUFOR0xFUywgdGhpcy5zdWJzZXRzW2ldLCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5VTlNJR05FRF9TSE9SVCwgb2Zmc2V0ICogMik7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSB0aGlzLnN1YnNldHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBNb2RlbDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gTW9kZWw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBUcmFuc2Zvcm1fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVHJhbnNmb3JtXCIpKTtcclxudmFyIFBvaW50TGlnaHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQb2ludExpZ2h0KGFyZ19kZXZpY2UpIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UgPSBhcmdfZGV2aWNlO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybV8xLmRlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIFBvaW50TGlnaHQucHJvdG90eXBlLkF0YWNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm0zZnYodGhpcy5ncmFwaGljRGV2aWNlLnNoYWRlci51bmlmb3JtTG9jYXRpb25zWzRdLCB0aGlzLnRyYW5zZm9ybS5Qb3NpdGlvbi54eXopO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQb2ludExpZ2h0O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBQb2ludExpZ2h0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQm94X0FBQkIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCb3hfQUFCQihhcmdfbGVuZ3RoZXMsIGFyZ19wb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMuaGFsZkxlbmd0aGVzID0gYXJnX2xlbmd0aGVzLk11bHRpcGx5X2IoMC41KTtcclxuICAgICAgICBpZiAoYXJnX3Bvc2l0aW9uKVxyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gYXJnX3Bvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgQm94X0FBQkIucHJvdG90eXBlLkxlbmd0aCA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhbGZMZW5ndGhlcy5kYXRhW2luZGV4XTtcclxuICAgIH07XHJcbiAgICBCb3hfQUFCQi5wcm90b3R5cGUuR2V0TWluID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiB0aGlzLnBvc2l0aW9uLmRhdGFbaW5kZXhdIC0gdGhpcy5oYWxmTGVuZ3RoZXMuZGF0YVtpbmRleF07IH07XHJcbiAgICBCb3hfQUFCQi5wcm90b3R5cGUuR2V0TWF4ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiB0aGlzLnBvc2l0aW9uLmRhdGFbaW5kZXhdICsgdGhpcy5oYWxmTGVuZ3RoZXMuZGF0YVtpbmRleF07IH07XHJcbiAgICByZXR1cm4gQm94X0FBQkI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEJveF9BQUJCO1xyXG47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBCb3hfT0JCID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm94X09CQihhcmdfbGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5oYWxmTGVuZ3RoZXMgPSBhcmdfbGVuZ3RoLk11bHRpcGx5KDAuNSk7XHJcbiAgICAgICAgdGhpcy5kaXJlY3RzID0gbmV3IEFycmF5KDMpO1xyXG4gICAgfVxyXG4gICAgQm94X09CQi5wcm90b3R5cGUuR2V0RGlyZWN0ID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0c1tpbmRleF07XHJcbiAgICB9O1xyXG4gICAgQm94X09CQi5wcm90b3R5cGUuTGVuZ3RoID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFsZkxlbmd0aGVzLmRhdGFbaW5kZXhdO1xyXG4gICAgfTtcclxuICAgIEJveF9PQkIucHJvdG90eXBlLkdldFBvcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQm94X09CQjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQm94X09CQjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFZlY3RvcjNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVmVjdG9yM1wiKSk7XHJcbmZ1bmN0aW9uIGFicyhhcmcpIHtcclxuICAgIGlmIChhcmcgPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGFyZyAqIC0xO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGFyZztcclxuICAgIH1cclxufVxyXG52YXIgR2VvbWV0cnlIZWxwZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHZW9tZXRyeUhlbHBlcigpIHtcclxuICAgIH1cclxuICAgIEdlb21ldHJ5SGVscGVyLkdldERpc3RhbmNlID0gZnVuY3Rpb24gKGFyZ19wb2ludCwgYXJnX3N1cmZhY2VQb2ludCwgYXJnX3N1cmZhY2VOb3JtYWwpIHtcclxuICAgICAgICByZXR1cm4gYWJzKGFyZ19zdXJmYWNlTm9ybWFsLkRvdChhcmdfcG9pbnQuU3ViKGFyZ19zdXJmYWNlUG9pbnQpKSkgLyBhcmdfc3VyZmFjZU5vcm1hbC5MZW5ndGgoKTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5HZXREaXN0YW5jZUxpbmVMaW5lID0gZnVuY3Rpb24gKGFyZ19saW5lLCBhcmdfb3RoZXJMaW5lKSB7XHJcbiAgICAgICAgdmFyIG5vcm1hbCA9IGFyZ19saW5lLnZlbG9jaXR5LkNyb3NzKGFyZ19vdGhlckxpbmUudmVsb2NpdHkpLk5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIHJldHVybiBub3JtYWwuRG90KGFyZ19vdGhlckxpbmUucG9pbnQuU3ViKGFyZ19saW5lLnBvaW50KSk7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuSXNIaXRQb2ludExpbmUgPSBmdW5jdGlvbiAoYXJnX3BvaW50LCBhcmdfbGluZSkge1xyXG4gICAgICAgIHZhciBsZW5ndGggPSAoYXJnX3BvaW50LlN1YihhcmdfbGluZS5wb2ludCkuQ3Jvc3MoYXJnX2xpbmUudmVsb2NpdHkpKS5MZW5ndGgoKTtcclxuICAgICAgICBpZiAobGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5Jc0hpdFBvaW50U2VnbWVudCA9IGZ1bmN0aW9uIChhcmdfcG9pbnQsIGFyZ19zZWdtZW50KSB7XHJcbiAgICAgICAgdmFyIHYgPSBhcmdfcG9pbnQuU3ViKGFyZ19zZWdtZW50LnBvaW50KTtcclxuICAgICAgICBpZiAodi5Dcm9zcyhhcmdfc2VnbWVudC52ZWxvY2l0eSkuTGVuZ3RoKCkgJiYgdi5MZW5ndGhTcXIoKSA8PSBhcmdfc2VnbWVudC52ZWxvY2l0eS5MZW5ndGhTcXIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuR2V0RGlzdGFuY2VQb2ludFNlZ21lbnQgPSBmdW5jdGlvbiAoYXJnX3BvaW50LCBhcmdfc2VnbWVudCkge1xyXG4gICAgICAgIHZhciB2ID0gYXJnX3NlZ21lbnQuR2V0RW5kUG9pbnQoKS5TdWIoYXJnX3NlZ21lbnQucG9pbnQpO1xyXG4gICAgICAgIHZhciB2cCA9IGFyZ19wb2ludC5TdWIoYXJnX3NlZ21lbnQucG9pbnQpO1xyXG4gICAgICAgIHZhciB0ID0gdi5Ob3JtYWxpemUoKS5Eb3QodnApIC8gdi5MZW5ndGgoKTtcclxuICAgICAgICBpZiAodCA+IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFyZ19zZWdtZW50LkdldEVuZFBvaW50KCkuU3ViKGFyZ19wb2ludCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHQgPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcmdfc2VnbWVudC5wb2ludC5TdWIoYXJnX3BvaW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHYuTXVsdGlwbHlfYih0KS5TdWJfYih2cCk7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuR2V0UG9seWdvblkgPSBmdW5jdGlvbiAoYXJnX3BvaW50QSwgYXJnX3BvaW50QiwgYXJnX3BvaW50Qywgb2JqWCwgb2JqWikge1xyXG4gICAgICAgIHZhciBub3JtYWwgPSBhcmdfcG9pbnRBLlN1YihhcmdfcG9pbnRCKS5Dcm9zcyhhcmdfcG9pbnRBLlN1YihhcmdfcG9pbnRDKSk7XHJcbiAgICAgICAgaWYgKG5vcm1hbC55IDwgMCkge1xyXG4gICAgICAgICAgICBub3JtYWwuTXVsdGlwbHkoLTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJnX3BvaW50QS55IC0gKG5vcm1hbC54ICogKG9ialggLSBhcmdfcG9pbnRBLngpICsgbm9ybWFsLnogKiAob2JqWiAtIGFyZ19wb2ludEEueikpIC8gbm9ybWFsLnk7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuSXNIaXRMaW5lTGluZSA9IGZ1bmN0aW9uIChhcmdfbGluZXYxLCBhcmdfbGluZXYyKSB7XHJcbiAgICAgICAgdmFyIHYzID0gYXJnX2xpbmV2Mi5wb2ludC5TdWIoYXJnX2xpbmV2MS5wb2ludCk7XHJcbiAgICAgICAgdmFyIG5vcm1hbDEgPSBhcmdfbGluZXYxLnZlbG9jaXR5LkNyb3NzKGFyZ19saW5ldjIudmVsb2NpdHkpO1xyXG4gICAgICAgIHZhciBub3JtYWwyID0gYXJnX2xpbmV2MS52ZWxvY2l0eS5Dcm9zcyh2Myk7XHJcbiAgICAgICAgaWYgKCFub3JtYWwyLkxlbmd0aFNxcigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm9ybWFsMS5MZW5ndGhTcXIoKSAhPSAwICYmIG5vcm1hbDEuQ3Jvc3Mobm9ybWFsMikuTGVuZ3RoU3FyKCkgPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLklzSGl0TGluZVN1cmZhY2UgPSBmdW5jdGlvbiAoYXJnX2xpbmUsIGFyZ19zdXJmYWNlUG9pbnQsIGFyZ19zdXJmYWNlTm9ybWFsKSB7XHJcbiAgICAgICAgdmFyIHYxID0gYXJnX2xpbmUucG9pbnQuU3ViKGFyZ19zdXJmYWNlUG9pbnQpO1xyXG4gICAgICAgIGlmICh2MS5Eb3QoYXJnX3N1cmZhY2VOb3JtYWwpID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmdfbGluZS52ZWxvY2l0eS5Eb3QoYXJnX3N1cmZhY2VOb3JtYWwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuSXNIaXRTZWdtZW50U3VyZmFjZSA9IGZ1bmN0aW9uIChhcmdfc2VnbWVudCwgYXJnX3N1cmZhY2VQb2ludCwgYXJnX3N1cmZhY2VOb3JtYWwpIHtcclxuICAgICAgICB2YXIgdjEgPSBhcmdfc2VnbWVudC5wb2ludC5TdWIoYXJnX3N1cmZhY2VQb2ludCk7XHJcbiAgICAgICAgdmFyIHYyID0gYXJnX3NlZ21lbnQuR2V0RW5kUG9pbnQoKS5TdWIoYXJnX3N1cmZhY2VQb2ludCk7XHJcbiAgICAgICAgaWYgKGFyZ19zdXJmYWNlTm9ybWFsLkRvdCh2MSkgKiBhcmdfc3VyZmFjZU5vcm1hbC5Eb3QodjIpIDw9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5HZXREaXRhbmNlUG9pbnRCb3hfQUFCQlNxcnQgPSBmdW5jdGlvbiAoYXJnX3BvaW50LCBhcmdfYm94KSB7XHJcbiAgICAgICAgdmFyIFNxTGVuID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoYXJnX3BvaW50LmRhdGFbaV0gPCBhcmdfYm94LkdldE1pbihpKSlcclxuICAgICAgICAgICAgICAgIFNxTGVuICs9IChhcmdfcG9pbnQuZGF0YVtpXSAtIGFyZ19ib3guR2V0TWluKGkpKSAqIChhcmdfcG9pbnQuZGF0YVtpXSAtIGFyZ19ib3guR2V0TWluKGkpKTtcclxuICAgICAgICAgICAgaWYgKGFyZ19wb2ludC5kYXRhW2ldID4gYXJnX2JveC5HZXRNYXgoaSkpXHJcbiAgICAgICAgICAgICAgICBTcUxlbiArPSAoYXJnX3BvaW50LmRhdGFbaV0gLSBhcmdfYm94LkdldE1heChpKSkgKiAoYXJnX3BvaW50LmRhdGFbaV0gLSBhcmdfYm94LkdldE1heChpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTcUxlbjtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5HZXREaXRhbmNlUG9pbnRCb3hfQUFCQiA9IGZ1bmN0aW9uIChhcmdfcG9pbnQsIGFyZ19ib3gpIHtcclxuICAgICAgICByZXR1cm4gKEdlb21ldHJ5SGVscGVyLkdldERpdGFuY2VQb2ludEJveF9BQUJCU3FydChhcmdfcG9pbnQsIGFyZ19ib3gpKTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5HZXREaXRhbmNlUG9pbnRCb3hfT0JCX1N0YXRpYyA9IGZ1bmN0aW9uIChhcmdfcG9pbnQsIGFyZ19ib3gpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDApO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBMID0gYXJnX2JveC5MZW5ndGgoaSk7XHJcbiAgICAgICAgICAgIGlmIChMIDw9IDApXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgdmFyIHMgPSAoYXJnX3BvaW50LlN1YihhcmdfYm94LkdldFBvcygpKSkuRG90KGFyZ19ib3guR2V0RGlyZWN0KGkpKSAvIEw7XHJcbiAgICAgICAgICAgIC8vIHPjga7lgKTjgYvjgonjgIHjga/jgb/lh7rjgZfjgZ/pg6jliIbjgYzjgYLjgozjgbDjgZ3jga7jg5njgq/jg4jjg6vjgpLliqDnrpdcclxuICAgICAgICAgICAgcyA9IGFicyhzKTtcclxuICAgICAgICAgICAgaWYgKHMgPiAxKVxyXG4gICAgICAgICAgICAgICAgb3V0cHV0LkFkZF9iKGFyZ19ib3guR2V0RGlyZWN0KGkpLk11bHRpcGx5KCgxIC0gcykpLk11bHRpcGx5KEwpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG91dHB1dExlbiA9IG91dHB1dC5MZW5ndGgoKTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0TGVuO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLklzSGl0UG9pbnRCb3hfT0JCID0gZnVuY3Rpb24gKGFyZ19wb2ludCwgYXJnX2JveCkge1xyXG4gICAgICAgIHJldHVybiAhR2VvbWV0cnlIZWxwZXIuR2V0RGl0YW5jZVBvaW50Qm94X09CQl9TdGF0aWMoYXJnX3BvaW50LCBhcmdfYm94KTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5Jc0hpdFNwaGVyZUJveF9PQkIgPSBmdW5jdGlvbiAoYXJnX3NwaGVyZSwgYXJnX2JveCkge1xyXG4gICAgICAgIHJldHVybiAoYXJnX3NwaGVyZS5yYWRpdXMpID49IEdlb21ldHJ5SGVscGVyLkdldERpdGFuY2VQb2ludEJveF9PQkJfU3RhdGljKGFyZ19zcGhlcmUucG9zaXRpb24sIGFyZ19ib3gpO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLklzSGl0UG9pbnRCb3hfQUFCQiA9IGZ1bmN0aW9uIChhcmdfcG9pbnQsIGFyZ19ib3gpIHtcclxuICAgICAgICByZXR1cm4gIUdlb21ldHJ5SGVscGVyLkdldERpdGFuY2VQb2ludEJveF9BQUJCKGFyZ19wb2ludCwgYXJnX2JveCk7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuSXNIaXRTcGhlcmVCb3hfQUFCQiA9IGZ1bmN0aW9uIChhcmdfc3BoZXJlLCBhcmdfYm94KSB7XHJcbiAgICAgICAgcmV0dXJuIChhcmdfc3BoZXJlLnJhZGl1cykgPj0gR2VvbWV0cnlIZWxwZXIuR2V0RGl0YW5jZVBvaW50Qm94X0FBQkIoYXJnX3NwaGVyZS5wb3NpdGlvbiwgYXJnX2JveCk7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyA9IGZ1bmN0aW9uIChhcmdfc2VwLCBhcmdfZTEsIGFyZ19lMiwgYXJnX2UzKSB7XHJcbiAgICAgICAgaWYgKGFyZ19lMyA9PT0gdm9pZCAwKSB7IGFyZ19lMyA9IG51bGw7IH1cclxuICAgICAgICB2YXIgcjEgPSBhYnMoYXJnX3NlcC5Eb3QoYXJnX2UxKSk7XHJcbiAgICAgICAgdmFyIHIyID0gYWJzKGFyZ19zZXAuRG90KGFyZ19lMikpO1xyXG4gICAgICAgIHZhciByMyA9IGFyZ19lMyA/IChhYnMoYXJnX3NlcC5Eb3QoYXJnX2UzKSkpIDogMDtcclxuICAgICAgICByZXR1cm4gcjEgKyByMiArIHIzO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLklzSGl0Qm94X0FBQkIgPSBmdW5jdGlvbiAoYXJnX2JveCwgYXJnX290aGVyQm94KSB7XHJcbiAgICAgICAgdmFyIHhBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDEsIDAsIDApLCBBZTEgPSB4QXhpcy5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgwKSk7XHJcbiAgICAgICAgdmFyIHlBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDEsIDApLCBBZTIgPSB5QXhpcy5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgxKSk7XHJcbiAgICAgICAgdmFyIHpBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDEpLCBBZTMgPSB6QXhpcy5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgyKSk7XHJcbiAgICAgICAgdmFyIEJlMSA9IHhBeGlzLk11bHRpcGx5KGFyZ19vdGhlckJveC5MZW5ndGgoMCkpO1xyXG4gICAgICAgIHZhciBCZTIgPSB5QXhpcy5NdWx0aXBseShhcmdfb3RoZXJCb3guTGVuZ3RoKDEpKTtcclxuICAgICAgICB2YXIgQmUzID0gekF4aXMuTXVsdGlwbHkoYXJnX290aGVyQm94Lkxlbmd0aCgyKSk7XHJcbiAgICAgICAgdmFyIEludGVydmFsID0gYXJnX2JveC5wb3NpdGlvbi5TdWIoYXJnX290aGVyQm94LnBvc2l0aW9uKTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBBZTFcclxuICAgICAgICB2YXIgckEgPSBBZTEuTGVuZ3RoKCk7XHJcbiAgICAgICAgdmFyIHJCID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh4QXhpcywgQmUxLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgdmFyIEwgPSBhYnMoSW50ZXJ2YWwuRG90KHhBeGlzKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIOihneeqgeOBl+OBpuOBhOOBquOBhFxyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEFlMlxyXG4gICAgICAgIHJBID0gQWUyLkxlbmd0aCgpO1xyXG4gICAgICAgIHJCID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh5QXhpcywgQmUxLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoeUF4aXMpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBBZTNcclxuICAgICAgICByQSA9IEFlMy5MZW5ndGgoKTtcclxuICAgICAgICByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoekF4aXMsIEJlMSwgQmUyLCBCZTMpO1xyXG4gICAgICAgIEwgPSBhYnMoSW50ZXJ2YWwuRG90KHpBeGlzKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8g5YiG6Zui6Lu4IDogQmUxXHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKHhBeGlzLCBBZTEsIEFlMiwgQWUzKTtcclxuICAgICAgICByQiA9IEJlMS5MZW5ndGgoKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdCh4QXhpcykpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEJlMlxyXG4gICAgICAgIHJBID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh5QXhpcywgQWUxLCBBZTIsIEFlMyk7XHJcbiAgICAgICAgckIgPSBCZTIuTGVuZ3RoKCk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoeUF4aXMpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBCZTNcclxuICAgICAgICByQSA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoekF4aXMsIEFlMSwgQWUyLCBBZTMpO1xyXG4gICAgICAgIHJCID0gQmUzLkxlbmd0aCgpO1xyXG4gICAgICAgIEwgPSBhYnMoSW50ZXJ2YWwuRG90KHpBeGlzKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuSXNIaXRCb3hfT0JCQm94X0FBQkIgPSBmdW5jdGlvbiAoYXJnX2JveCwgYXJnX290aGVyQm94KSB7XHJcbiAgICAgICAgdmFyIHhBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDEsIDAsIDApLCBBZTEgPSB4QXhpcy5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgwKSk7XHJcbiAgICAgICAgdmFyIHlBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDEsIDApLCBBZTIgPSB5QXhpcy5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgxKSk7XHJcbiAgICAgICAgdmFyIHpBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDEpLCBBZTMgPSB6QXhpcy5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgyKSk7XHJcbiAgICAgICAgdmFyIE5CZTEgPSBhcmdfb3RoZXJCb3guR2V0RGlyZWN0KDApLCBCZTEgPSBOQmUxLk11bHRpcGx5KGFyZ19vdGhlckJveC5MZW5ndGgoMCkpO1xyXG4gICAgICAgIHZhciBOQmUyID0gYXJnX290aGVyQm94LkdldERpcmVjdCgxKSwgQmUyID0gTkJlMi5NdWx0aXBseShhcmdfb3RoZXJCb3guTGVuZ3RoKDEpKTtcclxuICAgICAgICB2YXIgTkJlMyA9IGFyZ19vdGhlckJveC5HZXREaXJlY3QoMiksIEJlMyA9IE5CZTMuTXVsdGlwbHkoYXJnX290aGVyQm94Lkxlbmd0aCgyKSk7XHJcbiAgICAgICAgdmFyIEludGVydmFsID0gYXJnX2JveC5wb3NpdGlvbi5TdWIoYXJnX290aGVyQm94LkdldFBvcygpKTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBBZTFcclxuICAgICAgICB2YXIgckEgPSBBZTEuTGVuZ3RoKCk7XHJcbiAgICAgICAgdmFyIHJCID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh4QXhpcywgQmUxLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgdmFyIEwgPSBhYnMoSW50ZXJ2YWwuRG90KHhBeGlzKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIOihneeqgeOBl+OBpuOBhOOBquOBhFxyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEFlMlxyXG4gICAgICAgIHJBID0gQWUyLkxlbmd0aCgpO1xyXG4gICAgICAgIHJCID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh5QXhpcywgQmUxLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoeUF4aXMpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBBZTNcclxuICAgICAgICByQSA9IEFlMy5MZW5ndGgoKTtcclxuICAgICAgICByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoekF4aXMsIEJlMSwgQmUyLCBCZTMpO1xyXG4gICAgICAgIEwgPSBhYnMoSW50ZXJ2YWwuRG90KHpBeGlzKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8g5YiG6Zui6Lu4IDogQmUxXHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKE5CZTEsIEFlMSwgQWUyLCBBZTMpO1xyXG4gICAgICAgIHJCID0gQmUxLkxlbmd0aCgpO1xyXG4gICAgICAgIEwgPSBhYnMoSW50ZXJ2YWwuRG90KE5CZTEpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBCZTJcclxuICAgICAgICByQSA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoTkJlMiwgQWUxLCBBZTIsIEFlMyk7XHJcbiAgICAgICAgckIgPSBCZTIuTGVuZ3RoKCk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoTkJlMikpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEJlM1xyXG4gICAgICAgIHJBID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyhOQmUzLCBBZTEsIEFlMiwgQWUzKTtcclxuICAgICAgICByQiA9IEJlMy5MZW5ndGgoKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdChOQmUzKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnlIZWxwZXIuR2V0Qm94X09CQkNvbnRhaW5BQUJCTGVuZ3RoID0gZnVuY3Rpb24gKGFyZ19ib3gpIHtcclxuICAgICAgICB2YXIgeEF4aXMgPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMSwgMCwgMCk7XHJcbiAgICAgICAgdmFyIHlBeGlzID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDEsIDApO1xyXG4gICAgICAgIHZhciB6QXhpcyA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAxKTtcclxuICAgICAgICB2YXIgQmUxID0gYXJnX2JveC5HZXREaXJlY3QoMCkuTXVsdGlwbHkoYXJnX2JveC5MZW5ndGgoMCkpO1xyXG4gICAgICAgIHZhciBCZTIgPSBhcmdfYm94LkdldERpcmVjdCgxKS5NdWx0aXBseShhcmdfYm94Lkxlbmd0aCgxKSk7XHJcbiAgICAgICAgdmFyIEJlMyA9IGFyZ19ib3guR2V0RGlyZWN0KDIpLk11bHRpcGx5KGFyZ19ib3guTGVuZ3RoKDIpKTtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoeEF4aXMsIEJlMSwgQmUyLCBCZTMpLCBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKHlBeGlzLCBCZTEsIEJlMiwgQmUzKSwgR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyh6QXhpcywgQmUxLCBCZTIsIEJlMykpO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLklzSGl0Qm94X09CQiA9IGZ1bmN0aW9uIChhcmdfYm94LCBhcmdfb3RoZXJCb3gpIHtcclxuICAgICAgICAvLyDlkITmlrnlkJHjg5njgq/jg4jjg6vjga7norrkv51cclxuICAgICAgICAvLyDvvIhOKioqOuaomea6luWMluaWueWQkeODmeOCr+ODiOODq++8iVxyXG4gICAgICAgIHZhciBOQWUxID0gYXJnX2JveC5HZXREaXJlY3QoMCksIEFlMSA9IE5BZTEuTXVsdGlwbHkoYXJnX2JveC5MZW5ndGgoMCkpO1xyXG4gICAgICAgIHZhciBOQWUyID0gYXJnX2JveC5HZXREaXJlY3QoMSksIEFlMiA9IE5BZTIuTXVsdGlwbHkoYXJnX2JveC5MZW5ndGgoMSkpO1xyXG4gICAgICAgIHZhciBOQWUzID0gYXJnX2JveC5HZXREaXJlY3QoMiksIEFlMyA9IE5BZTMuTXVsdGlwbHkoYXJnX2JveC5MZW5ndGgoMikpO1xyXG4gICAgICAgIHZhciBOQmUxID0gYXJnX290aGVyQm94LkdldERpcmVjdCgwKSwgQmUxID0gTkJlMS5NdWx0aXBseShhcmdfb3RoZXJCb3guTGVuZ3RoKDApKTtcclxuICAgICAgICB2YXIgTkJlMiA9IGFyZ19vdGhlckJveC5HZXREaXJlY3QoMSksIEJlMiA9IE5CZTIuTXVsdGlwbHkoYXJnX290aGVyQm94Lkxlbmd0aCgxKSk7XHJcbiAgICAgICAgdmFyIE5CZTMgPSBhcmdfb3RoZXJCb3guR2V0RGlyZWN0KDIpLCBCZTMgPSBOQmUzLk11bHRpcGx5KGFyZ19vdGhlckJveC5MZW5ndGgoMikpO1xyXG4gICAgICAgIHZhciBJbnRlcnZhbCA9IGFyZ19ib3guR2V0UG9zKCkuU3ViKGFyZ19vdGhlckJveC5HZXRQb3MoKSk7XHJcbiAgICAgICAgLy8g5YiG6Zui6Lu4IDogQWUxXHJcbiAgICAgICAgdmFyIHJBID0gQWUxLkxlbmd0aCgpO1xyXG4gICAgICAgIHZhciByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoTkFlMSwgQmUxLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgdmFyIEwgPSBhYnMoSW50ZXJ2YWwuRG90KE5BZTEpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8g6KGd56qB44GX44Gm44GE44Gq44GEXHJcbiAgICAgICAgLy8g5YiG6Zui6Lu4IDogQWUyXHJcbiAgICAgICAgckEgPSBBZTIuTGVuZ3RoKCk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKE5BZTIsIEJlMSwgQmUyLCBCZTMpO1xyXG4gICAgICAgIEwgPSBhYnMoSW50ZXJ2YWwuRG90KE5BZTIpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBBZTNcclxuICAgICAgICByQSA9IEFlMy5MZW5ndGgoKTtcclxuICAgICAgICByQiA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoTkFlMywgQmUxLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoTkFlMykpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEJlMVxyXG4gICAgICAgIHJBID0gR2VvbWV0cnlIZWxwZXIuTGVuZ3RoU2VwYXJhdGVkQXhpcyhOQmUxLCBBZTEsIEFlMiwgQWUzKTtcclxuICAgICAgICByQiA9IEJlMS5MZW5ndGgoKTtcclxuICAgICAgICBMID0gYWJzKEludGVydmFsLkRvdChOQmUxKSk7XHJcbiAgICAgICAgaWYgKEwgPiByQSArIHJCKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8g5YiG6Zui6Lu4IDogQmUyXHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKE5CZTIsIEFlMSwgQWUyLCBBZTMpO1xyXG4gICAgICAgIHJCID0gQmUyLkxlbmd0aCgpO1xyXG4gICAgICAgIEwgPSBhYnMoSW50ZXJ2YWwuRG90KE5CZTIpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBCZTNcclxuICAgICAgICByQSA9IEdlb21ldHJ5SGVscGVyLkxlbmd0aFNlcGFyYXRlZEF4aXMoTkJlMywgQWUxLCBBZTIsIEFlMyk7XHJcbiAgICAgICAgckIgPSBCZTMuTGVuZ3RoKCk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoTkJlMykpO1xyXG4gICAgICAgIGlmIChMID4gckEgKyByQilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWIhumboui7uCA6IEMxMVxyXG4gICAgICAgIHZhciBDcm9zcyA9IE5BZTEuQ3Jvc3MoTkJlMSk7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTIsIEFlMyk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMTJcclxuICAgICAgICBDcm9zcyA9IE5BZTEuQ3Jvc3MoTkJlMik7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTIsIEFlMyk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTEsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMTNcclxuICAgICAgICBDcm9zcyA9IE5BZTEuQ3Jvc3MoTkJlMyk7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTIsIEFlMyk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTEsIEJlMik7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMjFcclxuICAgICAgICBDcm9zcyA9IE5BZTIuQ3Jvc3MoTkJlMSk7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTEsIEFlMyk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMjJcclxuICAgICAgICBDcm9zcyA9IE5BZTIuQ3Jvc3MoTkJlMik7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTEsIEFlMyk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTEsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMjNcclxuICAgICAgICBDcm9zcyA9IE5BZTIuQ3Jvc3MoTkJlMyk7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTEsIEFlMyk7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTEsIEJlMik7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMzFcclxuICAgICAgICBDcm9zcyA9IE5BZTMuQ3Jvc3MoTkJlMSk7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTEsIEFlMik7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTIsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMzJcclxuICAgICAgICBDcm9zcyA9IE5BZTMuQ3Jvc3MoTkJlMik7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTEsIEFlMik7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTEsIEJlMyk7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDliIbpm6Lou7ggOiBDMzNcclxuICAgICAgICBDcm9zcyA9IE5BZTMuQ3Jvc3MoTkJlMyk7XHJcbiAgICAgICAgckEgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBBZTEsIEFlMik7XHJcbiAgICAgICAgckIgPSBHZW9tZXRyeUhlbHBlci5MZW5ndGhTZXBhcmF0ZWRBeGlzKENyb3NzLCBCZTEsIEJlMik7XHJcbiAgICAgICAgTCA9IGFicyhJbnRlcnZhbC5Eb3QoQ3Jvc3MpKTtcclxuICAgICAgICBpZiAoTCA+IHJBICsgckIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUhlbHBlci5Jc0hpdFNwaGVyZVNwaGVyZSA9IGZ1bmN0aW9uIChhcmdfc3BoZXJlLCBhcmdfb3RoZXJTcGhlcmUpIHtcclxuICAgICAgICB2YXIgZGlzdGFuY2UgPSAoYXJnX3NwaGVyZS5wb3NpdGlvbi5TdWIoYXJnX290aGVyU3BoZXJlLnBvc2l0aW9uKSkuTGVuZ3RoKCk7XHJcbiAgICAgICAgdmFyIGJvcmRlciA9IGFyZ19zcGhlcmUucmFkaXVzICsgYXJnX290aGVyU3BoZXJlLnJhZGl1cztcclxuICAgICAgICByZXR1cm4gZGlzdGFuY2UgPD0gYm9yZGVyO1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5SGVscGVyLklzSGl0UG9pbnRTcGhlcmUgPSBmdW5jdGlvbiAoYXJnX3BvaW50LCBhcmdfb3RoZXJTcGhlcmUpIHtcclxuICAgICAgICB2YXIgZGlzdGFuY2UgPSAoYXJnX3BvaW50LlN1Yihhcmdfb3RoZXJTcGhlcmUucG9zaXRpb24pKS5MZW5ndGgoKTtcclxuICAgICAgICByZXR1cm4gZGlzdGFuY2UgPD0gYXJnX290aGVyU3BoZXJlLnJhZGl1cztcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2VvbWV0cnlIZWxwZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEdlb21ldHJ5SGVscGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgU3BoZXJlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3BoZXJlKGFyZ19yLCBhcmdfcCkge1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gYXJnX3I7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IGFyZ19wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFNwaGVyZTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU3BoZXJlO1xyXG47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBNYXRyaXg0eDQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYXRyaXg0eDQoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEZsb2F0MzJBcnJheSgxNik7XHJcbiAgICB9XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLklkZW50aXR5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IDE7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzRdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSAxO1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzddID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEwXSA9IDE7XHJcbiAgICAgICAgdGhpcy5kYXRhWzExXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEyXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEzXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzE0XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzE1XSA9IDE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NHg0LnByb3RvdHlwZS5DbG9uZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IE1hdHJpeDR4NCgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7IGkrKykge1xyXG4gICAgICAgICAgICBvdXRwdXQuZGF0YVtpXSA9IHRoaXMuZGF0YVtpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLk11bHRpcGx5ID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBNYXRyaXg0eDQoKTtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuZGF0YVswXSwgYiA9IHRoaXMuZGF0YVsxXSwgYyA9IHRoaXMuZGF0YVsyXSwgZCA9IHRoaXMuZGF0YVszXSwgZSA9IHRoaXMuZGF0YVs0XSwgZiA9IHRoaXMuZGF0YVs1XSwgZyA9IHRoaXMuZGF0YVs2XSwgaCA9IHRoaXMuZGF0YVs3XSwgaSA9IHRoaXMuZGF0YVs4XSwgaiA9IHRoaXMuZGF0YVs5XSwgayA9IHRoaXMuZGF0YVsxMF0sIGwgPSB0aGlzLmRhdGFbMTFdLCBtID0gdGhpcy5kYXRhWzEyXSwgbiA9IHRoaXMuZGF0YVsxM10sIG8gPSB0aGlzLmRhdGFbMTRdLCBwID0gdGhpcy5kYXRhWzE1XSwgQSA9IG90aGVyLmRhdGFbMF0sIEIgPSBvdGhlci5kYXRhWzFdLCBDID0gb3RoZXIuZGF0YVsyXSwgRCA9IG90aGVyLmRhdGFbM10sIEUgPSBvdGhlci5kYXRhWzRdLCBGID0gb3RoZXIuZGF0YVs1XSwgRyA9IG90aGVyLmRhdGFbNl0sIEggPSBvdGhlci5kYXRhWzddLCBJID0gb3RoZXIuZGF0YVs4XSwgSiA9IG90aGVyLmRhdGFbOV0sIEsgPSBvdGhlci5kYXRhWzEwXSwgTCA9IG90aGVyLmRhdGFbMTFdLCBNID0gb3RoZXIuZGF0YVsxMl0sIE4gPSBvdGhlci5kYXRhWzEzXSwgTyA9IG90aGVyLmRhdGFbMTRdLCBQID0gb3RoZXIuZGF0YVsxNV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSBBICogYSArIEIgKiBlICsgQyAqIGkgKyBEICogbTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IEEgKiBiICsgQiAqIGYgKyBDICogaiArIEQgKiBuO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gQSAqIGMgKyBCICogZyArIEMgKiBrICsgRCAqIG87XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSBBICogZCArIEIgKiBoICsgQyAqIGwgKyBEICogcDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs0XSA9IEUgKiBhICsgRiAqIGUgKyBHICogaSArIEggKiBtO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzVdID0gRSAqIGIgKyBGICogZiArIEcgKiBqICsgSCAqIG47XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNl0gPSBFICogYyArIEYgKiBnICsgRyAqIGsgKyBIICogbztcclxuICAgICAgICBvdXRwdXQuZGF0YVs3XSA9IEUgKiBkICsgRiAqIGggKyBHICogbCArIEggKiBwO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzhdID0gSSAqIGEgKyBKICogZSArIEsgKiBpICsgTCAqIG07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbOV0gPSBJICogYiArIEogKiBmICsgSyAqIGogKyBMICogbjtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMF0gPSBJICogYyArIEogKiBnICsgSyAqIGsgKyBMICogbztcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMV0gPSBJICogZCArIEogKiBoICsgSyAqIGwgKyBMICogcDtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMl0gPSBNICogYSArIE4gKiBlICsgTyAqIGkgKyBQICogbTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxM10gPSBNICogYiArIE4gKiBmICsgTyAqIGogKyBQICogbjtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxNF0gPSBNICogYyArIE4gKiBnICsgTyAqIGsgKyBQICogbztcclxuICAgICAgICBvdXRwdXQuZGF0YVsxNV0gPSBNICogZCArIE4gKiBoICsgTyAqIGwgKyBQICogcDtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuTXVsdGlwbHlfYiA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5kYXRhWzBdLCBiID0gdGhpcy5kYXRhWzFdLCBjID0gdGhpcy5kYXRhWzJdLCBkID0gdGhpcy5kYXRhWzNdLCBlID0gdGhpcy5kYXRhWzRdLCBmID0gdGhpcy5kYXRhWzVdLCBnID0gdGhpcy5kYXRhWzZdLCBoID0gdGhpcy5kYXRhWzddLCBpID0gdGhpcy5kYXRhWzhdLCBqID0gdGhpcy5kYXRhWzldLCBrID0gdGhpcy5kYXRhWzEwXSwgbCA9IHRoaXMuZGF0YVsxMV0sIG0gPSB0aGlzLmRhdGFbMTJdLCBuID0gdGhpcy5kYXRhWzEzXSwgbyA9IHRoaXMuZGF0YVsxNF0sIHAgPSB0aGlzLmRhdGFbMTVdLCBBID0gb3RoZXIuZGF0YVswXSwgQiA9IG90aGVyLmRhdGFbMV0sIEMgPSBvdGhlci5kYXRhWzJdLCBEID0gb3RoZXIuZGF0YVszXSwgRSA9IG90aGVyLmRhdGFbNF0sIEYgPSBvdGhlci5kYXRhWzVdLCBHID0gb3RoZXIuZGF0YVs2XSwgSCA9IG90aGVyLmRhdGFbN10sIEkgPSBvdGhlci5kYXRhWzhdLCBKID0gb3RoZXIuZGF0YVs5XSwgSyA9IG90aGVyLmRhdGFbMTBdLCBMID0gb3RoZXIuZGF0YVsxMV0sIE0gPSBvdGhlci5kYXRhWzEyXSwgTiA9IG90aGVyLmRhdGFbMTNdLCBPID0gb3RoZXIuZGF0YVsxNF0sIFAgPSBvdGhlci5kYXRhWzE1XTtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSBBICogYSArIEIgKiBlICsgQyAqIGkgKyBEICogbTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSBBICogYiArIEIgKiBmICsgQyAqIGogKyBEICogbjtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBBICogYyArIEIgKiBnICsgQyAqIGsgKyBEICogbztcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSBBICogZCArIEIgKiBoICsgQyAqIGwgKyBEICogcDtcclxuICAgICAgICB0aGlzLmRhdGFbNF0gPSBFICogYSArIEYgKiBlICsgRyAqIGkgKyBIICogbTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBFICogYiArIEYgKiBmICsgRyAqIGogKyBIICogbjtcclxuICAgICAgICB0aGlzLmRhdGFbNl0gPSBFICogYyArIEYgKiBnICsgRyAqIGsgKyBIICogbztcclxuICAgICAgICB0aGlzLmRhdGFbN10gPSBFICogZCArIEYgKiBoICsgRyAqIGwgKyBIICogcDtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBJICogYSArIEogKiBlICsgSyAqIGkgKyBMICogbTtcclxuICAgICAgICB0aGlzLmRhdGFbOV0gPSBJICogYiArIEogKiBmICsgSyAqIGogKyBMICogbjtcclxuICAgICAgICB0aGlzLmRhdGFbMTBdID0gSSAqIGMgKyBKICogZyArIEsgKiBrICsgTCAqIG87XHJcbiAgICAgICAgdGhpcy5kYXRhWzExXSA9IEkgKiBkICsgSiAqIGggKyBLICogbCArIEwgKiBwO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMl0gPSBNICogYSArIE4gKiBlICsgTyAqIGkgKyBQICogbTtcclxuICAgICAgICB0aGlzLmRhdGFbMTNdID0gTSAqIGIgKyBOICogZiArIE8gKiBqICsgUCAqIG47XHJcbiAgICAgICAgdGhpcy5kYXRhWzE0XSA9IE0gKiBjICsgTiAqIGcgKyBPICogayArIFAgKiBvO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxNV0gPSBNICogZCArIE4gKiBoICsgTyAqIGwgKyBQICogcDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLlNjYWxlID0gZnVuY3Rpb24gKGFyZ19zY2FsZSkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgTWF0cml4NHg0KCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKiBhcmdfc2NhbGUueDtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAqIGFyZ19zY2FsZS54O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gdGhpcy5kYXRhWzJdICogYXJnX3NjYWxlLng7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSB0aGlzLmRhdGFbM10gKiBhcmdfc2NhbGUueDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs0XSA9IHRoaXMuZGF0YVs0XSAqIGFyZ19zY2FsZS55O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzVdID0gdGhpcy5kYXRhWzVdICogYXJnX3NjYWxlLnk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNl0gPSB0aGlzLmRhdGFbNl0gKiBhcmdfc2NhbGUueTtcclxuICAgICAgICBvdXRwdXQuZGF0YVs3XSA9IHRoaXMuZGF0YVs3XSAqIGFyZ19zY2FsZS55O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzhdID0gdGhpcy5kYXRhWzhdICogYXJnX3NjYWxlLno7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbOV0gPSB0aGlzLmRhdGFbOV0gKiBhcmdfc2NhbGUuejtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMF0gPSB0aGlzLmRhdGFbMTBdICogYXJnX3NjYWxlLno7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTFdID0gdGhpcy5kYXRhWzExXSAqIGFyZ19zY2FsZS56O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEyXSA9IHRoaXMuZGF0YVsxMl07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTNdID0gdGhpcy5kYXRhWzEzXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxNF0gPSB0aGlzLmRhdGFbMTRdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzE1XSA9IHRoaXMuZGF0YVsxNV07XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLlNjYWxlX2IgPSBmdW5jdGlvbiAoYXJnX3NjYWxlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gdGhpcy5kYXRhWzBdICogYXJnX3NjYWxlLng7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gdGhpcy5kYXRhWzFdICogYXJnX3NjYWxlLng7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gdGhpcy5kYXRhWzJdICogYXJnX3NjYWxlLng7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gdGhpcy5kYXRhWzNdICogYXJnX3NjYWxlLng7XHJcbiAgICAgICAgdGhpcy5kYXRhWzRdID0gdGhpcy5kYXRhWzRdICogYXJnX3NjYWxlLnk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzVdID0gdGhpcy5kYXRhWzVdICogYXJnX3NjYWxlLnk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gdGhpcy5kYXRhWzZdICogYXJnX3NjYWxlLnk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzddID0gdGhpcy5kYXRhWzddICogYXJnX3NjYWxlLnk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzhdID0gdGhpcy5kYXRhWzhdICogYXJnX3NjYWxlLno7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gdGhpcy5kYXRhWzldICogYXJnX3NjYWxlLno7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEwXSA9IHRoaXMuZGF0YVsxMF0gKiBhcmdfc2NhbGUuejtcclxuICAgICAgICB0aGlzLmRhdGFbMTFdID0gdGhpcy5kYXRhWzExXSAqIGFyZ19zY2FsZS56O1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMl0gPSB0aGlzLmRhdGFbMTJdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxM10gPSB0aGlzLmRhdGFbMTNdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxNF0gPSB0aGlzLmRhdGFbMTRdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxNV0gPSB0aGlzLmRhdGFbMTVdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuVHJhbnNsYXRlID0gZnVuY3Rpb24gKGFyZ190cmFuc2xhdGUpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IE1hdHJpeDR4NCgpO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gdGhpcy5kYXRhWzJdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzNdID0gdGhpcy5kYXRhWzNdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzRdID0gdGhpcy5kYXRhWzRdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzVdID0gdGhpcy5kYXRhWzVdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzZdID0gdGhpcy5kYXRhWzZdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzddID0gdGhpcy5kYXRhWzddO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzhdID0gdGhpcy5kYXRhWzhdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzldID0gdGhpcy5kYXRhWzldO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEwXSA9IHRoaXMuZGF0YVsxMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTFdID0gdGhpcy5kYXRhWzExXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMl0gPSB0aGlzLmRhdGFbMF0gKiBhcmdfdHJhbnNsYXRlLnggKyB0aGlzLmRhdGFbNF0gKiBhcmdfdHJhbnNsYXRlLnkgKyB0aGlzLmRhdGFbOF0gKiBhcmdfdHJhbnNsYXRlLnogKyB0aGlzLmRhdGFbMTJdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEzXSA9IHRoaXMuZGF0YVsxXSAqIGFyZ190cmFuc2xhdGUueCArIHRoaXMuZGF0YVs1XSAqIGFyZ190cmFuc2xhdGUueSArIHRoaXMuZGF0YVs5XSAqIGFyZ190cmFuc2xhdGUueiArIHRoaXMuZGF0YVsxM107XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTRdID0gdGhpcy5kYXRhWzJdICogYXJnX3RyYW5zbGF0ZS54ICsgdGhpcy5kYXRhWzZdICogYXJnX3RyYW5zbGF0ZS55ICsgdGhpcy5kYXRhWzEwXSAqIGFyZ190cmFuc2xhdGUueiArIHRoaXMuZGF0YVsxNF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTVdID0gdGhpcy5kYXRhWzNdICogYXJnX3RyYW5zbGF0ZS54ICsgdGhpcy5kYXRhWzddICogYXJnX3RyYW5zbGF0ZS55ICsgdGhpcy5kYXRhWzExXSAqIGFyZ190cmFuc2xhdGUueiArIHRoaXMuZGF0YVsxNV07XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLlRyYW5zbGF0ZV9iID0gZnVuY3Rpb24gKGFyZ190cmFuc2xhdGUpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMTJdID0gdGhpcy5kYXRhWzBdICogYXJnX3RyYW5zbGF0ZS54ICsgdGhpcy5kYXRhWzRdICogYXJnX3RyYW5zbGF0ZS55ICsgdGhpcy5kYXRhWzhdICogYXJnX3RyYW5zbGF0ZS56ICsgdGhpcy5kYXRhWzEyXTtcclxuICAgICAgICB0aGlzLmRhdGFbMTNdID0gdGhpcy5kYXRhWzFdICogYXJnX3RyYW5zbGF0ZS54ICsgdGhpcy5kYXRhWzVdICogYXJnX3RyYW5zbGF0ZS55ICsgdGhpcy5kYXRhWzldICogYXJnX3RyYW5zbGF0ZS56ICsgdGhpcy5kYXRhWzEzXTtcclxuICAgICAgICB0aGlzLmRhdGFbMTRdID0gdGhpcy5kYXRhWzJdICogYXJnX3RyYW5zbGF0ZS54ICsgdGhpcy5kYXRhWzZdICogYXJnX3RyYW5zbGF0ZS55ICsgdGhpcy5kYXRhWzEwXSAqIGFyZ190cmFuc2xhdGUueiArIHRoaXMuZGF0YVsxNF07XHJcbiAgICAgICAgdGhpcy5kYXRhWzE1XSA9IHRoaXMuZGF0YVszXSAqIGFyZ190cmFuc2xhdGUueCArIHRoaXMuZGF0YVs3XSAqIGFyZ190cmFuc2xhdGUueSArIHRoaXMuZGF0YVsxMV0gKiBhcmdfdHJhbnNsYXRlLnogKyB0aGlzLmRhdGFbMTVdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuUm90YXRlID0gZnVuY3Rpb24gKGFyZ19hbmdsZSwgYXJnX2F4aXMpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IE1hdHJpeDR4NCgpO1xyXG4gICAgICAgIHZhciBzcSA9IGFyZ19heGlzLkxlbmd0aCgpO1xyXG4gICAgICAgIGlmICghc3EpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhID0gYXJnX2F4aXMueCwgYiA9IGFyZ19heGlzLnksIGMgPSBhcmdfYXhpcy56O1xyXG4gICAgICAgIGlmIChzcSAhPSAxKSB7XHJcbiAgICAgICAgICAgIHNxID0gMSAvIHNxO1xyXG4gICAgICAgICAgICBhICo9IHNxO1xyXG4gICAgICAgICAgICBiICo9IHNxO1xyXG4gICAgICAgICAgICBjICo9IHNxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZCA9IE1hdGguc2luKGFyZ19hbmdsZSksIGUgPSBNYXRoLmNvcyhhcmdfYW5nbGUpLCBmID0gMSAtIGUsIGcgPSB0aGlzLmRhdGFbMF0sIGggPSB0aGlzLmRhdGFbMV0sIGkgPSB0aGlzLmRhdGFbMl0sIGogPSB0aGlzLmRhdGFbM10sIGsgPSB0aGlzLmRhdGFbNF0sIGwgPSB0aGlzLmRhdGFbNV0sIG0gPSB0aGlzLmRhdGFbNl0sIG4gPSB0aGlzLmRhdGFbN10sIG8gPSB0aGlzLmRhdGFbOF0sIHAgPSB0aGlzLmRhdGFbOV0sIHEgPSB0aGlzLmRhdGFbMTBdLCByID0gdGhpcy5kYXRhWzExXSwgcyA9IGEgKiBhICogZiArIGUsIHQgPSBiICogYSAqIGYgKyBjICogZCwgdSA9IGMgKiBhICogZiAtIGIgKiBkLCB2ID0gYSAqIGIgKiBmIC0gYyAqIGQsIHcgPSBiICogYiAqIGYgKyBlLCB4ID0gYyAqIGIgKiBmICsgYSAqIGQsIHkgPSBhICogYyAqIGYgKyBiICogZCwgeiA9IGIgKiBjICogZiAtIGEgKiBkLCBBID0gYyAqIGMgKiBmICsgZTtcclxuICAgICAgICBpZiAoYXJnX2FuZ2xlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEgIT0gb3V0cHV0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5kYXRhWzEyXSA9IHRoaXMuZGF0YVsxMl07XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YVsxM10gPSB0aGlzLmRhdGFbMTNdO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFbMTRdID0gdGhpcy5kYXRhWzE0XTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5kYXRhWzE1XSA9IHRoaXMuZGF0YVsxNV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhID0gdGhpcy5kYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IGcgKiBzICsgayAqIHQgKyBvICogdTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IGggKiBzICsgbCAqIHQgKyBwICogdTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IGkgKiBzICsgbSAqIHQgKyBxICogdTtcclxuICAgICAgICBvdXRwdXQuZGF0YVszXSA9IGogKiBzICsgbiAqIHQgKyByICogdTtcclxuICAgICAgICBvdXRwdXQuZGF0YVs0XSA9IGcgKiB2ICsgayAqIHcgKyBvICogeDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs1XSA9IGggKiB2ICsgbCAqIHcgKyBwICogeDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs2XSA9IGkgKiB2ICsgbSAqIHcgKyBxICogeDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs3XSA9IGogKiB2ICsgbiAqIHcgKyByICogeDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs4XSA9IGcgKiB5ICsgayAqIHogKyBvICogQTtcclxuICAgICAgICBvdXRwdXQuZGF0YVs5XSA9IGggKiB5ICsgbCAqIHogKyBwICogQTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMF0gPSBpICogeSArIG0gKiB6ICsgcSAqIEE7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTFdID0gaiAqIHkgKyBuICogeiArIHIgKiBBO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NHg0LnByb3RvdHlwZS5Sb3RhdGVfYiA9IGZ1bmN0aW9uIChhcmdfYW5nbGUsIGFyZ19heGlzKSB7XHJcbiAgICAgICAgdmFyIHNxID0gYXJnX2F4aXMuTGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKCFzcSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGEgPSBhcmdfYXhpcy54LCBiID0gYXJnX2F4aXMueSwgYyA9IGFyZ19heGlzLno7XHJcbiAgICAgICAgaWYgKHNxICE9IDEpIHtcclxuICAgICAgICAgICAgc3EgPSAxIC8gc3E7XHJcbiAgICAgICAgICAgIGEgKj0gc3E7XHJcbiAgICAgICAgICAgIGIgKj0gc3E7XHJcbiAgICAgICAgICAgIGMgKj0gc3E7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkID0gTWF0aC5zaW4oYXJnX2FuZ2xlKSwgZSA9IE1hdGguY29zKGFyZ19hbmdsZSksIGYgPSAxIC0gZSwgZyA9IHRoaXMuZGF0YVswXSwgaCA9IHRoaXMuZGF0YVsxXSwgaSA9IHRoaXMuZGF0YVsyXSwgaiA9IHRoaXMuZGF0YVszXSwgayA9IHRoaXMuZGF0YVs0XSwgbCA9IHRoaXMuZGF0YVs1XSwgbSA9IHRoaXMuZGF0YVs2XSwgbiA9IHRoaXMuZGF0YVs3XSwgbyA9IHRoaXMuZGF0YVs4XSwgcCA9IHRoaXMuZGF0YVs5XSwgcSA9IHRoaXMuZGF0YVsxMF0sIHIgPSB0aGlzLmRhdGFbMTFdLCBzID0gYSAqIGEgKiBmICsgZSwgdCA9IGIgKiBhICogZiArIGMgKiBkLCB1ID0gYyAqIGEgKiBmIC0gYiAqIGQsIHYgPSBhICogYiAqIGYgLSBjICogZCwgdyA9IGIgKiBiICogZiArIGUsIHggPSBjICogYiAqIGYgKyBhICogZCwgeSA9IGEgKiBjICogZiArIGIgKiBkLCB6ID0gYiAqIGMgKiBmIC0gYSAqIGQsIEEgPSBjICogYyAqIGYgKyBlO1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IGcgKiBzICsgayAqIHQgKyBvICogdTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSBoICogcyArIGwgKiB0ICsgcCAqIHU7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gaSAqIHMgKyBtICogdCArIHEgKiB1O1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IGogKiBzICsgbiAqIHQgKyByICogdTtcclxuICAgICAgICB0aGlzLmRhdGFbNF0gPSBnICogdiArIGsgKiB3ICsgbyAqIHg7XHJcbiAgICAgICAgdGhpcy5kYXRhWzVdID0gaCAqIHYgKyBsICogdyArIHAgKiB4O1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IGkgKiB2ICsgbSAqIHcgKyBxICogeDtcclxuICAgICAgICB0aGlzLmRhdGFbN10gPSBqICogdiArIG4gKiB3ICsgciAqIHg7XHJcbiAgICAgICAgdGhpcy5kYXRhWzhdID0gZyAqIHkgKyBrICogeiArIG8gKiBBO1xyXG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IGggKiB5ICsgbCAqIHogKyBwICogQTtcclxuICAgICAgICB0aGlzLmRhdGFbMTBdID0gaSAqIHkgKyBtICogeiArIHEgKiBBO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMV0gPSBqICogeSArIG4gKiB6ICsgciAqIEE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NHg0LnByb3RvdHlwZS5Mb29rQXQgPSBmdW5jdGlvbiAoYXJnX2V5ZSwgYXJnX2NlbnRlclBvcywgYXJnX3VwQXhpcykge1xyXG4gICAgICAgIHZhciBleWVYID0gYXJnX2V5ZS54LCBleWVZID0gYXJnX2V5ZS55LCBleWVaID0gYXJnX2V5ZS56LCB1cFggPSBhcmdfdXBBeGlzLngsIHVwWSA9IGFyZ191cEF4aXMueSwgdXBaID0gYXJnX3VwQXhpcy56LCBjZW50ZXJYID0gYXJnX2NlbnRlclBvcy54LCBjZW50ZXJZID0gYXJnX2NlbnRlclBvcy55LCBjZW50ZXJaID0gYXJnX2NlbnRlclBvcy56O1xyXG4gICAgICAgIGlmIChleWVYID09IGNlbnRlclggJiYgZXllWSA9PSBjZW50ZXJZICYmIGV5ZVogPT0gY2VudGVyWikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5JZGVudGl0eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgeDAsIHgxLCB4MiwgeTAsIHkxLCB5MiwgejAsIHoxLCB6MiwgbDtcclxuICAgICAgICB6MCA9IGV5ZVggLSBhcmdfY2VudGVyUG9zLng7XHJcbiAgICAgICAgejEgPSBleWVZIC0gYXJnX2NlbnRlclBvcy55O1xyXG4gICAgICAgIHoyID0gZXllWiAtIGFyZ19jZW50ZXJQb3MuejtcclxuICAgICAgICBsID0gMSAvIE1hdGguc3FydCh6MCAqIHowICsgejEgKiB6MSArIHoyICogejIpO1xyXG4gICAgICAgIHowICo9IGw7XHJcbiAgICAgICAgejEgKj0gbDtcclxuICAgICAgICB6MiAqPSBsO1xyXG4gICAgICAgIHgwID0gdXBZICogejIgLSB1cFogKiB6MTtcclxuICAgICAgICB4MSA9IHVwWiAqIHowIC0gdXBYICogejI7XHJcbiAgICAgICAgeDIgPSB1cFggKiB6MSAtIHVwWSAqIHowO1xyXG4gICAgICAgIGwgPSBNYXRoLnNxcnQoeDAgKiB4MCArIHgxICogeDEgKyB4MiAqIHgyKTtcclxuICAgICAgICBpZiAoIWwpIHtcclxuICAgICAgICAgICAgeDAgPSAwO1xyXG4gICAgICAgICAgICB4MSA9IDA7XHJcbiAgICAgICAgICAgIHgyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGwgPSAxIC8gbDtcclxuICAgICAgICAgICAgeDAgKj0gbDtcclxuICAgICAgICAgICAgeDEgKj0gbDtcclxuICAgICAgICAgICAgeDIgKj0gbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgeTAgPSB6MSAqIHgyIC0gejIgKiB4MTtcclxuICAgICAgICB5MSA9IHoyICogeDAgLSB6MCAqIHgyO1xyXG4gICAgICAgIHkyID0gejAgKiB4MSAtIHoxICogeDA7XHJcbiAgICAgICAgbCA9IE1hdGguc3FydCh5MCAqIHkwICsgeTEgKiB5MSArIHkyICogeTIpO1xyXG4gICAgICAgIGlmICghbCkge1xyXG4gICAgICAgICAgICB5MCA9IDA7XHJcbiAgICAgICAgICAgIHkxID0gMDtcclxuICAgICAgICAgICAgeTIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbCA9IDEgLyBsO1xyXG4gICAgICAgICAgICB5MCAqPSBsO1xyXG4gICAgICAgICAgICB5MSAqPSBsO1xyXG4gICAgICAgICAgICB5MiAqPSBsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSB4MDtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB5MDtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSB6MDtcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IHgxO1xyXG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IHkxO1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IHoxO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzhdID0geDI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0geTI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEwXSA9IHoyO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMV0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMl0gPSAtKHgwICogZXllWCArIHgxICogZXllWSArIHgyICogZXllWik7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEzXSA9IC0oeTAgKiBleWVYICsgeTEgKiBleWVZICsgeTIgKiBleWVaKTtcclxuICAgICAgICB0aGlzLmRhdGFbMTRdID0gLSh6MCAqIGV5ZVggKyB6MSAqIGV5ZVkgKyB6MiAqIGV5ZVopO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxNV0gPSAxO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuUGVyc3BlY3RpdmUgPSBmdW5jdGlvbiAoZm92eSwgYXNwZWN0LCBuZWFyLCBmYXIpIHtcclxuICAgICAgICB2YXIgdCA9IG5lYXIgKiBNYXRoLnRhbihmb3Z5ICogTWF0aC5QSSAvIDM2MCk7XHJcbiAgICAgICAgdmFyIHIgPSB0ICogYXNwZWN0O1xyXG4gICAgICAgIHZhciBhID0gciAqIDIsIGIgPSB0ICogMiwgYyA9IGZhciAtIG5lYXI7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmVhciAqIDIgLyBhO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzVdID0gbmVhciAqIDIgLyBiO1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzddID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEwXSA9IC0oZmFyICsgbmVhcikgLyBjO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMV0gPSAtMTtcclxuICAgICAgICB0aGlzLmRhdGFbMTJdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMTNdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMTRdID0gLShmYXIgKiBuZWFyICogMikgLyBjO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxNV0gPSAwO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuT3J0aG8gPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tLCBuZWFyLCBmYXIpIHtcclxuICAgICAgICB2YXIgaCA9IChyaWdodCAtIGxlZnQpO1xyXG4gICAgICAgIHZhciB2ID0gKHRvcCAtIGJvdHRvbSk7XHJcbiAgICAgICAgdmFyIGQgPSAoZmFyIC0gbmVhcik7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gMiAvIGg7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzRdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSAyIC8gdjtcclxuICAgICAgICB0aGlzLmRhdGFbNl0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzhdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbOV0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMF0gPSAtMiAvIGQ7XHJcbiAgICAgICAgdGhpcy5kYXRhWzExXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEyXSA9IC0obGVmdCArIHJpZ2h0KSAvIGg7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEzXSA9IC0odG9wICsgYm90dG9tKSAvIHY7XHJcbiAgICAgICAgdGhpcy5kYXRhWzE0XSA9IC0oZmFyICsgbmVhcikgLyBkO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxNV0gPSAxO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDR4NC5wcm90b3R5cGUuVHJhbnNwb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgTWF0cml4NHg0KCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbNF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbOF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSB0aGlzLmRhdGFbMTJdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzRdID0gdGhpcy5kYXRhWzFdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzVdID0gdGhpcy5kYXRhWzVdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzZdID0gdGhpcy5kYXRhWzldO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzddID0gdGhpcy5kYXRhWzEzXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVs4XSA9IHRoaXMuZGF0YVsyXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVs5XSA9IHRoaXMuZGF0YVs2XTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMF0gPSB0aGlzLmRhdGFbMTBdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzExXSA9IHRoaXMuZGF0YVsxNF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTJdID0gdGhpcy5kYXRhWzNdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEzXSA9IHRoaXMuZGF0YVs3XTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxNF0gPSB0aGlzLmRhdGFbMTFdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzE1XSA9IHRoaXMuZGF0YVsxNV07XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLlRyYW5zcG9zZV9iID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ZW1wID0gbmV3IE1hdHJpeDR4NCgpO1xyXG4gICAgICAgIHRlbXAuZGF0YVswXSA9IHRoaXMuZGF0YVswXTtcclxuICAgICAgICB0ZW1wLmRhdGFbMV0gPSB0aGlzLmRhdGFbNF07XHJcbiAgICAgICAgdGVtcC5kYXRhWzJdID0gdGhpcy5kYXRhWzhdO1xyXG4gICAgICAgIHRlbXAuZGF0YVszXSA9IHRoaXMuZGF0YVsxMl07XHJcbiAgICAgICAgdGVtcC5kYXRhWzRdID0gdGhpcy5kYXRhWzFdO1xyXG4gICAgICAgIHRlbXAuZGF0YVs1XSA9IHRoaXMuZGF0YVs1XTtcclxuICAgICAgICB0ZW1wLmRhdGFbNl0gPSB0aGlzLmRhdGFbOV07XHJcbiAgICAgICAgdGVtcC5kYXRhWzddID0gdGhpcy5kYXRhWzEzXTtcclxuICAgICAgICB0ZW1wLmRhdGFbOF0gPSB0aGlzLmRhdGFbMl07XHJcbiAgICAgICAgdGVtcC5kYXRhWzldID0gdGhpcy5kYXRhWzZdO1xyXG4gICAgICAgIHRlbXAuZGF0YVsxMF0gPSB0aGlzLmRhdGFbMTBdO1xyXG4gICAgICAgIHRlbXAuZGF0YVsxMV0gPSB0aGlzLmRhdGFbMTRdO1xyXG4gICAgICAgIHRlbXAuZGF0YVsxMl0gPSB0aGlzLmRhdGFbM107XHJcbiAgICAgICAgdGVtcC5kYXRhWzEzXSA9IHRoaXMuZGF0YVs3XTtcclxuICAgICAgICB0ZW1wLmRhdGFbMTRdID0gdGhpcy5kYXRhWzExXTtcclxuICAgICAgICB0ZW1wLmRhdGFbMTVdID0gdGhpcy5kYXRhWzE1XTtcclxuICAgICAgICB0aGlzLmRhdGEgPSB0ZW1wLmRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NHg0LnByb3RvdHlwZS5JbnZlcnNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgTWF0cml4NHg0KCk7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLmRhdGFbMF0sIGIgPSB0aGlzLmRhdGFbMV0sIGMgPSB0aGlzLmRhdGFbMl0sIGQgPSB0aGlzLmRhdGFbM10sIGUgPSB0aGlzLmRhdGFbNF0sIGYgPSB0aGlzLmRhdGFbNV0sIGcgPSB0aGlzLmRhdGFbNl0sIGggPSB0aGlzLmRhdGFbN10sIGkgPSB0aGlzLmRhdGFbOF0sIGogPSB0aGlzLmRhdGFbOV0sIGsgPSB0aGlzLmRhdGFbMTBdLCBsID0gdGhpcy5kYXRhWzExXSwgbSA9IHRoaXMuZGF0YVsxMl0sIG4gPSB0aGlzLmRhdGFbMTNdLCBvID0gdGhpcy5kYXRhWzE0XSwgcCA9IHRoaXMuZGF0YVsxNV0sIHEgPSBhICogZiAtIGIgKiBlLCByID0gYSAqIGcgLSBjICogZSwgcyA9IGEgKiBoIC0gZCAqIGUsIHQgPSBiICogZyAtIGMgKiBmLCB1ID0gYiAqIGggLSBkICogZiwgdiA9IGMgKiBoIC0gZCAqIGcsIHcgPSBpICogbiAtIGogKiBtLCB4ID0gaSAqIG8gLSBrICogbSwgeSA9IGkgKiBwIC0gbCAqIG0sIHogPSBqICogbyAtIGsgKiBuLCBBID0gaiAqIHAgLSBsICogbiwgQiA9IGsgKiBwIC0gbCAqIG8sIGl2ZCA9IDEgLyAocSAqIEIgLSByICogQSArIHMgKiB6ICsgdCAqIHkgLSB1ICogeCArIHYgKiB3KTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IChmICogQiAtIGcgKiBBICsgaCAqIHopICogaXZkO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gKC1iICogQiArIGMgKiBBIC0gZCAqIHopICogaXZkO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gKG4gKiB2IC0gbyAqIHUgKyBwICogdCkgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSAoLWogKiB2ICsgayAqIHUgLSBsICogdCkgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNF0gPSAoLWUgKiBCICsgZyAqIHkgLSBoICogeCkgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNV0gPSAoYSAqIEIgLSBjICogeSArIGQgKiB4KSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs2XSA9ICgtbSAqIHYgKyBvICogcyAtIHAgKiByKSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs3XSA9IChpICogdiAtIGsgKiBzICsgbCAqIHIpICogaXZkO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzhdID0gKGUgKiBBIC0gZiAqIHkgKyBoICogdykgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbOV0gPSAoLWEgKiBBICsgYiAqIHkgLSBkICogdykgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTBdID0gKG0gKiB1IC0gbiAqIHMgKyBwICogcSkgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTFdID0gKC1pICogdSArIGogKiBzIC0gbCAqIHEpICogaXZkO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzEyXSA9ICgtZSAqIHogKyBmICogeCAtIGcgKiB3KSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxM10gPSAoYSAqIHogLSBiICogeCArIGMgKiB3KSAqIGl2ZDtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxNF0gPSAoLW0gKiB0ICsgbiAqIHIgLSBvICogcSkgKiBpdmQ7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTVdID0gKGkgKiB0IC0gaiAqIHIgKyBrICogcSkgKiBpdmQ7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0eDQucHJvdG90eXBlLkludmVyc2VfYiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuZGF0YVswXSwgYiA9IHRoaXMuZGF0YVsxXSwgYyA9IHRoaXMuZGF0YVsyXSwgZCA9IHRoaXMuZGF0YVszXSwgZSA9IHRoaXMuZGF0YVs0XSwgZiA9IHRoaXMuZGF0YVs1XSwgZyA9IHRoaXMuZGF0YVs2XSwgaCA9IHRoaXMuZGF0YVs3XSwgaSA9IHRoaXMuZGF0YVs4XSwgaiA9IHRoaXMuZGF0YVs5XSwgayA9IHRoaXMuZGF0YVsxMF0sIGwgPSB0aGlzLmRhdGFbMTFdLCBtID0gdGhpcy5kYXRhWzEyXSwgbiA9IHRoaXMuZGF0YVsxM10sIG8gPSB0aGlzLmRhdGFbMTRdLCBwID0gdGhpcy5kYXRhWzE1XSwgcSA9IGEgKiBmIC0gYiAqIGUsIHIgPSBhICogZyAtIGMgKiBlLCBzID0gYSAqIGggLSBkICogZSwgdCA9IGIgKiBnIC0gYyAqIGYsIHUgPSBiICogaCAtIGQgKiBmLCB2ID0gYyAqIGggLSBkICogZywgdyA9IGkgKiBuIC0gaiAqIG0sIHggPSBpICogbyAtIGsgKiBtLCB5ID0gaSAqIHAgLSBsICogbSwgeiA9IGogKiBvIC0gayAqIG4sIEEgPSBqICogcCAtIGwgKiBuLCBCID0gayAqIHAgLSBsICogbywgaXZkID0gMSAvIChxICogQiAtIHIgKiBBICsgcyAqIHogKyB0ICogeSAtIHUgKiB4ICsgdiAqIHcpO1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IChmICogQiAtIGcgKiBBICsgaCAqIHopICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9ICgtYiAqIEIgKyBjICogQSAtIGQgKiB6KSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSAobiAqIHYgLSBvICogdSArIHAgKiB0KSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSAoLWogKiB2ICsgayAqIHUgLSBsICogdCkgKiBpdmQ7XHJcbiAgICAgICAgdGhpcy5kYXRhWzRdID0gKC1lICogQiArIGcgKiB5IC0gaCAqIHgpICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IChhICogQiAtIGMgKiB5ICsgZCAqIHgpICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9ICgtbSAqIHYgKyBvICogcyAtIHAgKiByKSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbN10gPSAoaSAqIHYgLSBrICogcyArIGwgKiByKSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSAoZSAqIEEgLSBmICogeSArIGggKiB3KSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbOV0gPSAoLWEgKiBBICsgYiAqIHkgLSBkICogdykgKiBpdmQ7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEwXSA9IChtICogdSAtIG4gKiBzICsgcCAqIHEpICogaXZkO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxMV0gPSAoLWkgKiB1ICsgaiAqIHMgLSBsICogcSkgKiBpdmQ7XHJcbiAgICAgICAgdGhpcy5kYXRhWzEyXSA9ICgtZSAqIHogKyBmICogeCAtIGcgKiB3KSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbMTNdID0gKGEgKiB6IC0gYiAqIHggKyBjICogdykgKiBpdmQ7XHJcbiAgICAgICAgdGhpcy5kYXRhWzE0XSA9ICgtbSAqIHQgKyBuICogciAtIG8gKiBxKSAqIGl2ZDtcclxuICAgICAgICB0aGlzLmRhdGFbMTVdID0gKGkgKiB0IC0gaiAqIHIgKyBrICogcSkgKiBpdmQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1hdHJpeDR4NDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gTWF0cml4NHg0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgTWF0cml4XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWF0cml4XCIpKTtcclxudmFyIFZlY3RvcjNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9WZWN0b3IzXCIpKTtcclxudmFyIFF1YXRlcm5pb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBRdWF0ZXJuaW9uKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoNCk7XHJcbiAgICB9XHJcbiAgICBRdWF0ZXJuaW9uLnByb3RvdHlwZS5JZGVudGl0eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gMDtcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSAxO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFF1YXRlcm5pb24ucHJvdG90eXBlLkludmVyc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSAtdGhpcy5kYXRhWzBdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gLXRoaXMuZGF0YVsxXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IC10aGlzLmRhdGFbMl07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbM10gPSB0aGlzLmRhdGFbM107XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBRdWF0ZXJuaW9uLnByb3RvdHlwZS5JbnZlcnNlX2IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gLXRoaXMuZGF0YVswXTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSAtdGhpcy5kYXRhWzFdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IC10aGlzLmRhdGFbMl07XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gdGhpcy5kYXRhWzNdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFF1YXRlcm5pb24ucHJvdG90eXBlLk5vcm1hbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVszXSA9IHRoaXMuZGF0YVszXTtcclxuICAgICAgICB2YXIgeCA9IG91dHB1dC5kYXRhWzBdLCB5ID0gb3V0cHV0LmRhdGFbMV0sIHogPSBvdXRwdXQuZGF0YVsyXSwgdyA9IG91dHB1dC5kYXRhWzNdO1xyXG4gICAgICAgIHZhciBsID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3KTtcclxuICAgICAgICBpZiAobCA9PT0gMCkge1xyXG4gICAgICAgICAgICBvdXRwdXQuZGF0YVswXSA9IDA7XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhWzFdID0gMDtcclxuICAgICAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSAwO1xyXG4gICAgICAgICAgICBvdXRwdXQuZGF0YVszXSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsID0gMSAvIGw7XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhWzBdID0geCAqIGw7XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhWzFdID0geSAqIGw7XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhWzJdID0geiAqIGw7XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhWzNdID0gdyAqIGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgUXVhdGVybmlvbi5wcm90b3R5cGUuTm9ybWFsaXplX2IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGwgPSBNYXRoLnNxcnQodGhpcy5kYXRhWzBdICogdGhpcy5kYXRhWzBdICsgdGhpcy5kYXRhWzFdICogdGhpcy5kYXRhWzFdICsgdGhpcy5kYXRhWzJdICogdGhpcy5kYXRhWzJdICsgdGhpcy5kYXRhWzNdICogdGhpcy5kYXRhWzNdKTtcclxuICAgICAgICBpZiAobCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbMF0gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbMV0gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbMl0gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbM10gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbCA9IDEgLyBsO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKiBsO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKiBsO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gKiBsO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbM10gPSB0aGlzLmRhdGFbM10gKiBsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBRdWF0ZXJuaW9uLnByb3RvdHlwZS5NdWx0aXBseSA9IGZ1bmN0aW9uIChhcmdfcXVhdCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgICAgIHZhciBheCA9IHRoaXMuZGF0YVswXSwgYXkgPSB0aGlzLmRhdGFbMV0sIGF6ID0gdGhpcy5kYXRhWzJdLCBhdyA9IHRoaXMuZGF0YVszXTtcclxuICAgICAgICB2YXIgYnggPSBhcmdfcXVhdC5kYXRhWzBdLCBieSA9IGFyZ19xdWF0LmRhdGFbMV0sIGJ6ID0gYXJnX3F1YXQuZGF0YVsyXSwgYncgPSBhcmdfcXVhdC5kYXRhWzNdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gYXggKiBidyArIGF3ICogYnggKyBheSAqIGJ6IC0gYXogKiBieTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IGF5ICogYncgKyBhdyAqIGJ5ICsgYXogKiBieCAtIGF4ICogYno7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSBheiAqIGJ3ICsgYXcgKiBieiArIGF4ICogYnkgLSBheSAqIGJ4O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzNdID0gYXcgKiBidyAtIGF4ICogYnggLSBheSAqIGJ5IC0gYXogKiBiejtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFF1YXRlcm5pb24ucHJvdG90eXBlLk11bHRpcGx5X2IgPSBmdW5jdGlvbiAoYXJnX3F1YXQpIHtcclxuICAgICAgICB2YXIgYXggPSB0aGlzLmRhdGFbMF0sIGF5ID0gdGhpcy5kYXRhWzFdLCBheiA9IHRoaXMuZGF0YVsyXSwgYXcgPSB0aGlzLmRhdGFbM107XHJcbiAgICAgICAgdmFyIGJ4ID0gYXJnX3F1YXQuZGF0YVswXSwgYnkgPSBhcmdfcXVhdC5kYXRhWzFdLCBieiA9IGFyZ19xdWF0LmRhdGFbMl0sIGJ3ID0gYXJnX3F1YXQuZGF0YVszXTtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSBheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5O1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IGF5ICogYncgKyBhdyAqIGJ5ICsgYXogKiBieCAtIGF4ICogYno7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gYXogKiBidyArIGF3ICogYnogKyBheCAqIGJ5IC0gYXkgKiBieDtcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSBhdyAqIGJ3IC0gYXggKiBieCAtIGF5ICogYnkgLSBheiAqIGJ6O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFF1YXRlcm5pb24ucHJvdG90eXBlLlJvdGF0ZSA9IGZ1bmN0aW9uIChhcmdfYW5nbGUsIGFyZ19heGlzKSB7XHJcbiAgICAgICAgdmFyIHNxID0gYXJnX2F4aXMuTGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKCFzcSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGEgPSBhcmdfYXhpcy54LCBiID0gYXJnX2F4aXMueSwgYyA9IGFyZ19heGlzLno7XHJcbiAgICAgICAgaWYgKHNxICE9IDEpIHtcclxuICAgICAgICAgICAgc3EgPSAxIC8gc3E7XHJcbiAgICAgICAgICAgIGEgKj0gc3E7XHJcbiAgICAgICAgICAgIGIgKj0gc3E7XHJcbiAgICAgICAgICAgIGMgKj0gc3E7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzID0gTWF0aC5zaW4oYXJnX2FuZ2xlICogMC41KTtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSBhICogcztcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSBiICogcztcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBjICogcztcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSBNYXRoLmNvcyhhcmdfYW5nbGUgKiAwLjUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFF1YXRlcm5pb24ucHJvdG90eXBlLlRvVmVjdG9yMyA9IGZ1bmN0aW9uIChhcmdfdmVjKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAwKTtcclxuICAgICAgICB2YXIgcXAgPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgICAgIHZhciBxcSA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgdmFyIHFyID0gdGhpcy5JbnZlcnNlKCk7XHJcbiAgICAgICAgcXAuZGF0YVswXSA9IGFyZ192ZWMueDtcclxuICAgICAgICBxcC5kYXRhWzFdID0gYXJnX3ZlYy55O1xyXG4gICAgICAgIHFwLmRhdGFbMl0gPSBhcmdfdmVjLno7XHJcbiAgICAgICAgcXEgPSBxci5NdWx0aXBseShxcCk7XHJcbiAgICAgICAgcXIgPSBxcS5NdWx0aXBseSh0aGlzKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHFyLmRhdGFbMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSBxci5kYXRhWzFdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzJdID0gcXIuZGF0YVsyXTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFF1YXRlcm5pb24ucHJvdG90eXBlLlRvTWF0cml4NHg0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgTWF0cml4XzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciB4ID0gdGhpcy5kYXRhWzBdLCB5ID0gdGhpcy5kYXRhWzFdLCB6ID0gdGhpcy5kYXRhWzJdLCB3ID0gdGhpcy5kYXRhWzNdO1xyXG4gICAgICAgIHZhciB4MiA9IHggKyB4LCB5MiA9IHkgKyB5LCB6MiA9IHogKyB6O1xyXG4gICAgICAgIHZhciB4eCA9IHggKiB4MiwgeHkgPSB4ICogeTIsIHh6ID0geCAqIHoyO1xyXG4gICAgICAgIHZhciB5eSA9IHkgKiB5MiwgeXogPSB5ICogejIsIHp6ID0geiAqIHoyO1xyXG4gICAgICAgIHZhciB3eCA9IHcgKiB4Miwgd3kgPSB3ICogeTIsIHd6ID0gdyAqIHoyO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gMSAtICh5eSArIHp6KTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHh5IC0gd3o7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB4eiArIHd5O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzNdID0gMDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs0XSA9IHh5ICsgd3o7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbNV0gPSAxIC0gKHh4ICsgenopO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzZdID0geXogLSB3eDtcclxuICAgICAgICBvdXRwdXQuZGF0YVs3XSA9IDA7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbOF0gPSB4eiAtIHd5O1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzldID0geXogKyB3eDtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxMF0gPSAxIC0gKHh4ICsgeXkpO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzExXSA9IDA7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTJdID0gMDtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxM10gPSAwO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzE0XSA9IDA7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMTVdID0gMTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFF1YXRlcm5pb24ucHJvdG90eXBlLlNwaGVyZUxlcnAgPSBmdW5jdGlvbiAoYXJnX3F1YXQsIHRpbWUpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgICAgICB2YXIgaHQgPSB0aGlzLmRhdGFbMF0gKiBhcmdfcXVhdC5kYXRhWzBdICsgdGhpcy5kYXRhWzFdICogYXJnX3F1YXQuZGF0YVsxXSArIHRoaXMuZGF0YVsyXSAqIGFyZ19xdWF0LmRhdGFbMl0gKyB0aGlzLmRhdGFbM10gKiBhcmdfcXVhdC5kYXRhWzNdO1xyXG4gICAgICAgIHZhciBocyA9IDEuMCAtIGh0ICogaHQ7XHJcbiAgICAgICAgaWYgKGhzIDw9IDAuMCkge1xyXG4gICAgICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXTtcclxuICAgICAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV07XHJcbiAgICAgICAgICAgIG91dHB1dC5kYXRhWzJdID0gdGhpcy5kYXRhWzJdO1xyXG4gICAgICAgICAgICBvdXRwdXQuZGF0YVszXSA9IHRoaXMuZGF0YVszXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhzID0gTWF0aC5zcXJ0KGhzKTtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGhzKSA8IDAuMDAwMSkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSAodGhpcy5kYXRhWzBdICogMC41ICsgYXJnX3F1YXQuZGF0YVswXSAqIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YVsxXSA9ICh0aGlzLmRhdGFbMV0gKiAwLjUgKyBhcmdfcXVhdC5kYXRhWzFdICogMC41KTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5kYXRhWzJdID0gKHRoaXMuZGF0YVsyXSAqIDAuNSArIGFyZ19xdWF0LmRhdGFbMl0gKiAwLjUpO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFbM10gPSAodGhpcy5kYXRhWzNdICogMC41ICsgYXJnX3F1YXQuZGF0YVszXSAqIDAuNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGggPSBNYXRoLmFjb3MoaHQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHB0ID0gcGggKiB0aW1lO1xyXG4gICAgICAgICAgICAgICAgdmFyIHQwID0gTWF0aC5zaW4ocGggLSBwdCkgLyBocztcclxuICAgICAgICAgICAgICAgIHZhciB0MSA9IE1hdGguc2luKHB0KSAvIGhzO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKiB0MCArIGFyZ19xdWF0LmRhdGFbMF0gKiB0MTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdICogdDAgKyBhcmdfcXVhdC5kYXRhWzFdICogdDE7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAqIHQwICsgYXJnX3F1YXQuZGF0YVsyXSAqIHQxO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFbM10gPSB0aGlzLmRhdGFbM10gKiB0MCArIGFyZ19xdWF0LmRhdGFbM10gKiB0MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFF1YXRlcm5pb24ucHJvdG90eXBlLlNwaGVyZUxlcnBfYiA9IGZ1bmN0aW9uIChhcmdfcXVhdCwgdGltZSkge1xyXG4gICAgICAgIHZhciBodCA9IHRoaXMuZGF0YVswXSAqIGFyZ19xdWF0LmRhdGFbMF0gKyB0aGlzLmRhdGFbMV0gKiBhcmdfcXVhdC5kYXRhWzFdICsgdGhpcy5kYXRhWzJdICogYXJnX3F1YXQuZGF0YVsyXSArIHRoaXMuZGF0YVszXSAqIGFyZ19xdWF0LmRhdGFbM107XHJcbiAgICAgICAgdmFyIGhzID0gMS4wIC0gaHQgKiBodDtcclxuICAgICAgICBpZiAoaHMgPD0gMC4wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaHMgPSBNYXRoLnNxcnQoaHMpO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoaHMpIDwgMC4wMDAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbMF0gPSAodGhpcy5kYXRhWzBdICogMC41ICsgYXJnX3F1YXQuZGF0YVswXSAqIDAuNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbMV0gPSAodGhpcy5kYXRhWzFdICogMC41ICsgYXJnX3F1YXQuZGF0YVsxXSAqIDAuNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbMl0gPSAodGhpcy5kYXRhWzJdICogMC41ICsgYXJnX3F1YXQuZGF0YVsyXSAqIDAuNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbM10gPSAodGhpcy5kYXRhWzNdICogMC41ICsgYXJnX3F1YXQuZGF0YVszXSAqIDAuNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGggPSBNYXRoLmFjb3MoaHQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHB0ID0gcGggKiB0aW1lO1xyXG4gICAgICAgICAgICAgICAgdmFyIHQwID0gTWF0aC5zaW4ocGggLSBwdCkgLyBocztcclxuICAgICAgICAgICAgICAgIHZhciB0MSA9IE1hdGguc2luKHB0KSAvIGhzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhWzBdID0gdGhpcy5kYXRhWzBdICogdDAgKyBhcmdfcXVhdC5kYXRhWzBdICogdDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKiB0MCArIGFyZ19xdWF0LmRhdGFbMV0gKiB0MTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAqIHQwICsgYXJnX3F1YXQuZGF0YVsyXSAqIHQxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhWzNdID0gdGhpcy5kYXRhWzNdICogdDAgKyBhcmdfcXVhdC5kYXRhWzNdICogdDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFF1YXRlcm5pb247XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFF1YXRlcm5pb247XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBWZWN0b3IyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVmVjdG9yMih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEZsb2F0MzJBcnJheSgyKTtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSB4O1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IHk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMi5wcm90b3R5cGUsIFwieFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbMF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChhcmdfdikge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbMF0gPSBhcmdfdjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMi5wcm90b3R5cGUsIFwieVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbMV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChhcmdfdikge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbMV0gPSBhcmdfdjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMi5wcm90b3R5cGUsIFwieHlcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLkFkZCA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKyBhcmdfb3RoZXIuZGF0YVswXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSArIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuQWRkX2IgPSBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gdGhpcy5kYXRhWzBdICsgYXJnX290aGVyLmRhdGFbMF07XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gdGhpcy5kYXRhWzFdICsgYXJnX290aGVyLmRhdGFbMV07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuU3ViID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAtIGFyZ19vdGhlci5kYXRhWzBdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdIC0gYXJnX290aGVyLmRhdGFbMV07XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5TdWJfYiA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gLSBhcmdfb3RoZXIuZGF0YVswXTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gLSBhcmdfb3RoZXIuZGF0YVsxXTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5NdWx0aXBseSA9IGZ1bmN0aW9uIChhcmdfc2NhbGFyKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdICogYXJnX3NjYWxhcjtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAqIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5NdWx0aXBseV9iID0gZnVuY3Rpb24gKGFyZ19zY2FsYXIpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gKj0gYXJnX3NjYWxhcjtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gKj0gYXJnX3NjYWxhcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5EaXYgPSBmdW5jdGlvbiAoYXJnX3NjYWxhcikge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAvIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gLyBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuRGl2X2IgPSBmdW5jdGlvbiAoYXJnX3NjYWxhcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSAvPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSAvPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLkxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGF0YVswXSAqIHRoaXMuZGF0YVswXSArIHRoaXMuZGF0YVsxXSAqIHRoaXMuZGF0YVsxXSk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuTGVuZ3RoU3FyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbMF0gKiB0aGlzLmRhdGFbMF0gKyB0aGlzLmRhdGFbMV0gKiB0aGlzLmRhdGFbMV07XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuRG90ID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbMF0gKiBhcmdfb3RoZXIuZGF0YVswXSArIHRoaXMuZGF0YVsxXSAqIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLkNyb3NzID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnggKiBhcmdfb3RoZXIueSAtIHRoaXMueSAqIGFyZ19vdGhlci54O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLk5vcm1hbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjIodGhpcy5kYXRhWzBdLCB0aGlzLmRhdGFbMV0pO1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLkxlbmd0aCgpO1xyXG4gICAgICAgIG91dHB1dC5EaXZfYihsZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuTm9ybWFsaXplX2IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMuTGVuZ3RoKCk7XHJcbiAgICAgICAgdGhpcy5EaXZfYihsZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBWZWN0b3IyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBWZWN0b3IyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVmVjdG9yMyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFZlY3RvcjMoeCwgeSwgeikge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoMyk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0geDtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB5O1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IHo7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMy5wcm90b3R5cGUsIFwieFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbMF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhWzBdID0gYXJnX290aGVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IzLnByb3RvdHlwZSwgXCJ5XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVsxXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbMV0gPSBhcmdfb3RoZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjMucHJvdG90eXBlLCBcInpcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzJdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVsyXSA9IGFyZ19vdGhlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMy5wcm90b3R5cGUsIFwieHl6XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5BZGQgPSBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdICsgYXJnX290aGVyLmRhdGFbMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKyBhcmdfb3RoZXIuZGF0YVsxXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSArIGFyZ19vdGhlci5kYXRhWzJdO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuQWRkX2IgPSBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gdGhpcy5kYXRhWzBdICsgYXJnX290aGVyLmRhdGFbMF07XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gdGhpcy5kYXRhWzFdICsgYXJnX290aGVyLmRhdGFbMV07XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gdGhpcy5kYXRhWzJdICsgYXJnX290aGVyLmRhdGFbMl07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuU3ViID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAtIGFyZ19vdGhlci5kYXRhWzBdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdIC0gYXJnX290aGVyLmRhdGFbMV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gLSBhcmdfb3RoZXIuZGF0YVsyXTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLlN1Yl9iID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAtIGFyZ19vdGhlci5kYXRhWzBdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAtIGFyZ19vdGhlci5kYXRhWzFdO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAtIGFyZ19vdGhlci5kYXRhWzJdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLk11bHRpcGx5ID0gZnVuY3Rpb24gKGFyZ19zY2FsYXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKiBhcmdfc2NhbGFyO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzFdID0gdGhpcy5kYXRhWzFdICogYXJnX3NjYWxhcjtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAqIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5NdWx0aXBseV9WZWMzID0gZnVuY3Rpb24gKGFyZ192ZWN0b3IpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKiBhcmdfdmVjdG9yLmRhdGFbMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKiBhcmdfdmVjdG9yLmRhdGFbMV07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gKiBhcmdfdmVjdG9yLmRhdGFbMl07XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5NdWx0aXBseV9iID0gZnVuY3Rpb24gKGFyZ19zY2FsYXIpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gKj0gYXJnX3NjYWxhcjtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gKj0gYXJnX3NjYWxhcjtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gKj0gYXJnX3NjYWxhcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5NdWx0aXBseV9WZWMzX2IgPSBmdW5jdGlvbiAoYXJnX3ZlY3Rvcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IHRoaXMuZGF0YVswXSAqIGFyZ192ZWN0b3IuZGF0YVswXTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKiBhcmdfdmVjdG9yLmRhdGFbMV07XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gdGhpcy5kYXRhWzJdICogYXJnX3ZlY3Rvci5kYXRhWzJdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLk11bHRpcGx5X01hdHJpeCA9IGZ1bmN0aW9uIChhcmdfbWF0cml4KSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdICogYXJnX21hdHJpeC5kYXRhWzBdICsgdGhpcy5kYXRhWzBdICogYXJnX21hdHJpeC5kYXRhWzRdICsgdGhpcy5kYXRhWzBdICogYXJnX21hdHJpeC5kYXRhWzhdICsgdGhpcy5kYXRhWzBdICogYXJnX21hdHJpeC5kYXRhWzEyXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAqIGFyZ19tYXRyaXguZGF0YVsxXSArIHRoaXMuZGF0YVsxXSAqIGFyZ19tYXRyaXguZGF0YVs1XSArIHRoaXMuZGF0YVsxXSAqIGFyZ19tYXRyaXguZGF0YVs5XSArIHRoaXMuZGF0YVsxXSAqIGFyZ19tYXRyaXguZGF0YVsxM107XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gKiBhcmdfbWF0cml4LmRhdGFbMl0gKyB0aGlzLmRhdGFbMl0gKiBhcmdfbWF0cml4LmRhdGFbNl0gKyB0aGlzLmRhdGFbMl0gKiBhcmdfbWF0cml4LmRhdGFbMTBdICsgdGhpcy5kYXRhWzJdICogYXJnX21hdHJpeC5kYXRhWzE0XTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLkRpdiA9IGZ1bmN0aW9uIChhcmdfc2NhbGFyKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdIC8gYXJnX3NjYWxhcjtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAvIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gLyBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuRGl2X2IgPSBmdW5jdGlvbiAoYXJnX3NjYWxhcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSAvPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSAvPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSAvPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLkxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGF0YVswXSAqIHRoaXMuZGF0YVswXSArIHRoaXMuZGF0YVsxXSAqIHRoaXMuZGF0YVsxXSArIHRoaXMuZGF0YVsyXSAqIHRoaXMuZGF0YVsyXSk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuTGVuZ3RoU3FyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbMF0gKiB0aGlzLmRhdGFbMF0gKyB0aGlzLmRhdGFbMV0gKiB0aGlzLmRhdGFbMV0gKyB0aGlzLmRhdGFbMl0gKiB0aGlzLmRhdGFbMl07XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuRG90ID0gZnVuY3Rpb24gKGFyZ19vdGhlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbMF0gKiBhcmdfb3RoZXIuZGF0YVswXSArIHRoaXMuZGF0YVsxXSAqIGFyZ19vdGhlci5kYXRhWzFdICsgdGhpcy5kYXRhWzJdICogYXJnX290aGVyLmRhdGFbMl07XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuQ3Jvc3MgPSBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzFdICogYXJnX290aGVyLmRhdGFbMl0gLSB0aGlzLmRhdGFbMl0gKiBhcmdfb3RoZXIuZGF0YVsxXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsyXSAqIGFyZ19vdGhlci5kYXRhWzBdIC0gdGhpcy5kYXRhWzBdICogYXJnX290aGVyLmRhdGFbMl07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMF0gKiBhcmdfb3RoZXIuZGF0YVsxXSAtIHRoaXMuZGF0YVsxXSAqIGFyZ19vdGhlci5kYXRhWzBdO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuTm9ybWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuICAgICAgICBvdXRwdXQuZGF0YVswXSA9IHRoaXMuZGF0YVswXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXTtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5MZW5ndGgoKTtcclxuICAgICAgICBvdXRwdXQuRGl2X2IobGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLk5vcm1hbGl6ZV9iID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLkxlbmd0aCgpO1xyXG4gICAgICAgIHRoaXMuRGl2X2IobGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICByZXR1cm4gVmVjdG9yMztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVmVjdG9yMztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFZlY3RvcjQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBWZWN0b3I0KHgsIHksIHosIHcpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KDQpO1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IHg7XHJcbiAgICAgICAgdGhpcy5kYXRhWzFdID0geTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSB6O1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IHc7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yNC5wcm90b3R5cGUsIFwieFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbMF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjQucHJvdG90eXBlLCBcInlcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzFdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3I0LnByb3RvdHlwZSwgXCJ6XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVsyXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yNC5wcm90b3R5cGUsIFwid1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbM107XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjQucHJvdG90eXBlLCBcInh5endcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLlNldCA9IGZ1bmN0aW9uICh4LCB5LCB6LCB3KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0geDtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB5O1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IHo7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gdztcclxuICAgIH07XHJcbiAgICBWZWN0b3I0LnByb3RvdHlwZS5BZGQgPSBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3I0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdICsgYXJnX290aGVyLmRhdGFbMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKyBhcmdfb3RoZXIuZGF0YVsxXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSArIGFyZ19vdGhlci5kYXRhWzJdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzNdID0gdGhpcy5kYXRhWzNdICsgYXJnX290aGVyLmRhdGFbM107XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3I0LnByb3RvdHlwZS5BZGRfYiA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gKyBhcmdfb3RoZXIuZGF0YVswXTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gKyBhcmdfb3RoZXIuZGF0YVsxXTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gKyBhcmdfb3RoZXIuZGF0YVsyXTtcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSB0aGlzLmRhdGFbM10gKyBhcmdfb3RoZXIuZGF0YVszXTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3I0LnByb3RvdHlwZS5TdWIgPSBmdW5jdGlvbiAoYXJnX290aGVyKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3I0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdIC0gYXJnX290aGVyLmRhdGFbMF07XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gLSBhcmdfb3RoZXIuZGF0YVsxXTtcclxuICAgICAgICBvdXRwdXQuZGF0YVsyXSA9IHRoaXMuZGF0YVsyXSAtIGFyZ19vdGhlci5kYXRhWzJdO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzNdID0gdGhpcy5kYXRhWzNdIC0gYXJnX290aGVyLmRhdGFbM107XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBWZWN0b3I0LnByb3RvdHlwZS5TdWJfYiA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0gLSBhcmdfb3RoZXIuZGF0YVswXTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSB0aGlzLmRhdGFbMV0gLSBhcmdfb3RoZXIuZGF0YVsxXTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gLSBhcmdfb3RoZXIuZGF0YVsyXTtcclxuICAgICAgICB0aGlzLmRhdGFbM10gPSB0aGlzLmRhdGFbM10gLSBhcmdfb3RoZXIuZGF0YVszXTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3I0LnByb3RvdHlwZS5NdWx0aXBseSA9IGZ1bmN0aW9uIChhcmdfc2NhbGFyKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3I0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdICogYXJnX3NjYWxhcjtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAqIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gKiBhcmdfc2NhbGFyO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzNdID0gdGhpcy5kYXRhWzNdICogYXJnX3NjYWxhcjtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLk11bHRpcGx5X2IgPSBmdW5jdGlvbiAoYXJnX3NjYWxhcikge1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSAqPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSAqPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHRoaXMuZGF0YVsyXSAqPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSAqPSBhcmdfc2NhbGFyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLkRpdiA9IGZ1bmN0aW9uIChhcmdfc2NhbGFyKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBWZWN0b3I0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzBdID0gdGhpcy5kYXRhWzBdIC8gYXJnX3NjYWxhcjtcclxuICAgICAgICBvdXRwdXQuZGF0YVsxXSA9IHRoaXMuZGF0YVsxXSAvIGFyZ19zY2FsYXI7XHJcbiAgICAgICAgb3V0cHV0LmRhdGFbMl0gPSB0aGlzLmRhdGFbMl0gLyBhcmdfc2NhbGFyO1xyXG4gICAgICAgIG91dHB1dC5kYXRhWzNdID0gdGhpcy5kYXRhWzNdIC8gYXJnX3NjYWxhcjtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLkRpdl9iID0gZnVuY3Rpb24gKGFyZ19zY2FsYXIpIHtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gLz0gYXJnX3NjYWxhcjtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gLz0gYXJnX3NjYWxhcjtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gLz0gYXJnX3NjYWxhcjtcclxuICAgICAgICB0aGlzLmRhdGFbM10gLz0gYXJnX3NjYWxhcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3I0LnByb3RvdHlwZS5MZW5ndGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRhdGFbMF0gKiB0aGlzLmRhdGFbMF0gKyB0aGlzLmRhdGFbMV0gKiB0aGlzLmRhdGFbMV0gKyB0aGlzLmRhdGFbMl0gKiB0aGlzLmRhdGFbMl0gKyB0aGlzLmRhdGFbM10gKiB0aGlzLmRhdGFbM10pO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLkxlbmd0aFNxciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzBdICogdGhpcy5kYXRhWzBdICsgdGhpcy5kYXRhWzFdICogdGhpcy5kYXRhWzFdICsgdGhpcy5kYXRhWzJdICogdGhpcy5kYXRhWzJdICsgdGhpcy5kYXRhWzNdICogdGhpcy5kYXRhWzNdO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjQucHJvdG90eXBlLkRvdCA9IGZ1bmN0aW9uIChhcmdfb3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzBdICogYXJnX290aGVyLmRhdGFbMF0gKyB0aGlzLmRhdGFbMV0gKiBhcmdfb3RoZXIuZGF0YVsxXSArIHRoaXMuZGF0YVsyXSAqIGFyZ19vdGhlci5kYXRhWzJdICsgdGhpcy5kYXRhWzNdICogYXJnX290aGVyLmRhdGFbM107XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yNC5wcm90b3R5cGUuTm9ybWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBuZXcgVmVjdG9yNCh0aGlzLmRhdGFbMF0sIHRoaXMuZGF0YVsxXSwgdGhpcy5kYXRhWzJdLCB0aGlzLmRhdGFbM10pO1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLkxlbmd0aCgpO1xyXG4gICAgICAgIG91dHB1dC5EaXZfYihsZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yNC5wcm90b3R5cGUuTm9ybWFsaXplX2IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMuTGVuZ3RoKCk7XHJcbiAgICAgICAgdGhpcy5EaXZfYihsZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBWZWN0b3I0O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBWZWN0b3I0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVmVjdG9yM18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9NYXRoL1ZlY3RvcjNcIikpO1xyXG52YXIgT2N0cmVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vT2N0cmVlXCIpKTtcclxudmFyIExheWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTGF5ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5vY3RyZWUgPSBuZXcgT2N0cmVlXzEuZGVmYXVsdCg1LCBuZXcgVmVjdG9yM18xLmRlZmF1bHQoLTMwLCAtMzAsIC02MCksIG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgzMCwgMzAsIDMwKSk7XHJcbiAgICB9XHJcbiAgICBMYXllci5wcm90b3R5cGUuUmVnaXN0ID0gZnVuY3Rpb24gKGFyZ19yZWdpc3RPYmopIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vY3RyZWUuUmVnaXN0Q29sbGlzaW9uT2JqKGFyZ19yZWdpc3RPYmopO1xyXG4gICAgfTtcclxuICAgIExheWVyLnByb3RvdHlwZS5VblJlZ2lzdCA9IGZ1bmN0aW9uIChhcmdfSUQpIHtcclxuICAgICAgICB0aGlzLm9jdHJlZS5VblJlZ2lzdENvbGxpc2lvbk9iaihhcmdfSUQpO1xyXG4gICAgfTtcclxuICAgIExheWVyLnByb3RvdHlwZS5DaGVjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm9jdHJlZS5VcGRhdGUoKTtcclxuICAgICAgICB2YXIgbGlzdF9vYmpTdGFjayA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHZhciB2ZWNfY29sbGlzaW9uT2JqZWN0cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMub2N0cmVlLkNyZWF0ZUNvbGxpc2lvbk9iamVjdExpc3QoMCwgdmVjX2NvbGxpc2lvbk9iamVjdHMsIGxpc3Rfb2JqU3RhY2spO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codmVjX2NvbGxpc2lvbk9iamVjdHMubGVuZ3RoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlY19jb2xsaXNpb25PYmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IHZlY19jb2xsaXNpb25PYmplY3RzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB2ZWNfY29sbGlzaW9uT2JqZWN0c1tpXS5IaXRDaGVjayh2ZWNfY29sbGlzaW9uT2JqZWN0c1tqXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTGF5ZXIucHJvdG90eXBlLlJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5vY3RyZWUuUmVsZWFzZSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMYXllcjtcclxufSgpKTtcclxudmFyIENvbGxpc2lvbk1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb2xsaXNpb25NYW5hZ2VyKCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5sYXllcnMucHVzaChuZXcgTGF5ZXIoKSk7XHJcbiAgICB9XHJcbiAgICBDb2xsaXNpb25NYW5hZ2VyLnByb3RvdHlwZS5SZWdpc3QgPSBmdW5jdGlvbiAoYXJnX3JlZ2lzdE9iaiwgbGF5ZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5sYXllcnMubGVuZ3RoIDw9IGxheWVyKSB7XHJcbiAgICAgICAgICAgIGxheWVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzW2xheWVyXS5SZWdpc3QoYXJnX3JlZ2lzdE9iaik7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uTWFuYWdlci5wcm90b3R5cGUuVW5SZWdpc3QgPSBmdW5jdGlvbiAoYXJnX0lELCBsYXllcikge1xyXG4gICAgICAgIGlmICh0aGlzLmxheWVycy5sZW5ndGggPD0gbGF5ZXIpIHtcclxuICAgICAgICAgICAgbGF5ZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxheWVyc1tsYXllcl0uVW5SZWdpc3QoYXJnX0lEKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25NYW5hZ2VyLnByb3RvdHlwZS5BZGRMYXllciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxheWVycy5wdXNoKG5ldyBMYXllcigpKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25NYW5hZ2VyLnByb3RvdHlwZS5DaGVjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChsYXllcikgeyByZXR1cm4gbGF5ZXIuQ2hlY2soKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uTWFuYWdlci5wcm90b3R5cGUuUmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChsYXllcikgeyByZXR1cm4gbGF5ZXIuUmVsZWFzZSgpOyB9KTtcclxuICAgICAgICB0aGlzLmxheWVycy5sZW5ndGggPSAwO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb2xsaXNpb25NYW5hZ2VyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDb2xsaXNpb25NYW5hZ2VyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ29sbGlzaW9uT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29sbGlzaW9uT2JqZWN0KGFyZ19vYmosIGFyZ19wcmltKSB7XHJcbiAgICAgICAgdGhpcy5wX2NlbGwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub2JqZWN0ID0gYXJnX29iajtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvblByaW1pdGl2ZSA9IGFyZ19wcmltO1xyXG4gICAgfVxyXG4gICAgQ29sbGlzaW9uT2JqZWN0LnByb3RvdHlwZS5SZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucF9jZWxsID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5zaHBfbmV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLnNocF9uZXh0LnNocF9iZWYgPSB0aGlzLnNocF9iZWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNocF9iZWYpIHtcclxuICAgICAgICAgICAgdGhpcy5zaHBfYmVmLnNocF9uZXh0ID0gdGhpcy5zaHBfbmV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wX2NlbGwuT25SZW1vdmUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zaHBfbmV4dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zaHBfYmVmID0gbnVsbDtcclxuICAgICAgICB0aGlzLnBfY2VsbCA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uT2JqZWN0LnByb3RvdHlwZS5SZWdpc3RDZWxsID0gZnVuY3Rpb24gKGFyZ19wQ2VsbCkge1xyXG4gICAgICAgIHRoaXMucF9jZWxsID0gYXJnX3BDZWxsO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbk9iamVjdC5wcm90b3R5cGUuR2V0QmVmT2JqID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNocF9iZWY7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uT2JqZWN0LnByb3RvdHlwZS5HZXROZXh0T2JqID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNocF9uZXh0O1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbk9iamVjdC5wcm90b3R5cGUuVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uUHJpbWl0aXZlLlVwZGF0ZSgpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbk9iamVjdC5wcm90b3R5cGUuSGl0Q2hlY2sgPSBmdW5jdGlvbiAoYXJnX2NvbGxpc2lvbk9iamVjdCkge1xyXG4gICAgICAgIGlmIChhcmdfY29sbGlzaW9uT2JqZWN0LmNvbGxpc2lvblByaW1pdGl2ZS5Jc0hpdCh0aGlzLmNvbGxpc2lvblByaW1pdGl2ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5vYmplY3QuSGl0KGFyZ19jb2xsaXNpb25PYmplY3Qub2JqZWN0KTtcclxuICAgICAgICAgICAgYXJnX2NvbGxpc2lvbk9iamVjdC5vYmplY3QuSGl0KHRoaXMub2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbGxpc2lvbk9iamVjdDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ29sbGlzaW9uT2JqZWN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgT2N0Q2VsbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE9jdENlbGwoKSB7XHJcbiAgICB9XHJcbiAgICBPY3RDZWxsLnByb3RvdHlwZS5SZWxlYXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnNocF9oZWFkICE9IG51bGwgJiYgdGhpcy5zaHBfaGVhZC5zaHBfbmV4dCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hwX2hlYWQgPSB0aGlzLnNocF9oZWFkLnNocF9uZXh0O1xyXG4gICAgICAgICAgICB0aGlzLnNocF9oZWFkLnNocF9iZWYgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNocF9oZWFkID0gbnVsbDtcclxuICAgIH07XHJcbiAgICBPY3RDZWxsLnByb3RvdHlwZS5SZWdpc3RPYmplY3QgPSBmdW5jdGlvbiAoYXJnX29iaikge1xyXG4gICAgICAgIGlmIChhcmdfb2JqLnBfY2VsbCA9PSB0aGlzIHx8IChhcmdfb2JqID09IG51bGwpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgYXJnX29iai5SZW1vdmUoKTtcclxuICAgICAgICBhcmdfb2JqLnBfY2VsbCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hwX2hlYWQpIHtcclxuICAgICAgICAgICAgYXJnX29iai5zaHBfbmV4dCA9IHRoaXMuc2hwX2hlYWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2hwX2hlYWQuc2hwX2JlZiA9IGFyZ19vYmo7XHJcbiAgICAgICAgICAgIHRoaXMuc2hwX2hlYWQgPSBhcmdfb2JqO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNocF9oZWFkID0gYXJnX29iajtcclxuICAgIH07XHJcbiAgICBPY3RDZWxsLnByb3RvdHlwZS5PblJlbW92ZSA9IGZ1bmN0aW9uIChhcmdfcmVtb3ZlKSB7XHJcbiAgICAgICAgaWYgKCh0aGlzLnNocF9oZWFkID09IGFyZ19yZW1vdmUpICYmIGFyZ19yZW1vdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaHBfaGVhZCA9IHRoaXMuc2hwX2hlYWQuc2hwX25leHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE9jdENlbGwucHJvdG90eXBlLkdldEhlYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hwX2hlYWQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9jdENlbGw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE9jdENlbGw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBWZWN0b3IzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL01hdGgvVmVjdG9yM1wiKSk7XHJcbnZhciBJRF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9JRFwiKSk7XHJcbnZhciBPY3RDZWxsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vT2N0Q2VsbFwiKSk7XHJcbnZhciBNYXhMZXZlbCA9IDc7XHJcbnZhciBMRVZFTF9GTEFHID0gWygxMTEgPDwgMCksICgxMTEgPDwgMyksICgxMTEgPDwgNiksICgxMTEgPDwgOSksICgxMTEgPDwgMTIpLCAoMTExIDw8IDE1KSwgKDExMSA8PCAxOCksICgxMTEgPDwgMjEpLCAoMTExIDw8IDI0KSwgKDExMSA8PCAyNyksXTtcclxudmFyIE9jdHJlZUhlbHBlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE9jdHJlZUhlbHBlcigpIHtcclxuICAgIH1cclxuICAgIE9jdHJlZUhlbHBlci5CaXRTZXBhcmF0ZSA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgdmFyIHMgPSBuO1xyXG4gICAgICAgIHMgPSAocyB8IHMgPDwgOCkgJiAweDAwMDBmMDBmO1xyXG4gICAgICAgIHMgPSAocyB8IHMgPDwgNCkgJiAweDAwMGMzMGMzO1xyXG4gICAgICAgIHMgPSAocyB8IHMgPDwgMikgJiAweDAwMjQ5MjQ5O1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfTtcclxuICAgIE9jdHJlZUhlbHBlci5HZXRMZXZlbCA9IGZ1bmN0aW9uIChhcmdfZmxhZywgYXJnX2xldmVsKSB7XHJcbiAgICAgICAgdmFyIG91dCA9IDE7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdfbGV2ZWw7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgQ2hlY2sgPSAoYXJnX2ZsYWcgPj4gKGkgKiAzKSkgJiAweDc7XHJcbiAgICAgICAgICAgIGlmIChDaGVjayAhPSAwKVxyXG4gICAgICAgICAgICAgICAgb3V0ID0gaSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9jdHJlZUhlbHBlcjtcclxufSgpKTtcclxuO1xyXG52YXIgQ29sbGlzaW9uTGF5ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb2xsaXNpb25MYXllcihhcmdfbGV2ZWwsIGFyZ19taW5Qb3MsIGFyZ19tYXhQb3MpIHtcclxuICAgICAgICB0aGlzLk9jdFBvdyA9IEFycmF5KE1heExldmVsICsgMSk7XHJcbiAgICAgICAgdGhpcy5PY3RQb3dTZXZlbkRldmlkZWQgPSBBcnJheShNYXhMZXZlbCArIDEpO1xyXG4gICAgICAgIGlmIChhcmdfbGV2ZWwgPD0gTWF4TGV2ZWwpXHJcbiAgICAgICAgICAgIHRoaXMubWF4TGV2ZWwgPSBhcmdfbGV2ZWw7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF4TGV2ZWwgPSBNYXhMZXZlbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yYW5nZU1heCA9IGFyZ19tYXhQb3M7XHJcbiAgICAgICAgdGhpcy5yYW5nZU1pbiA9IGFyZ19taW5Qb3M7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMucmFuZ2VNYXguU3ViKHRoaXMucmFuZ2VNaW4pO1xyXG4gICAgICAgIHRoaXMuT2N0UG93WzBdID0gMTtcclxuICAgICAgICB0aGlzLk9jdFBvd1NldmVuRGV2aWRlZFswXSA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBNYXhMZXZlbCArIDE7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLk9jdFBvd1tpXSA9IHRoaXMuT2N0UG93W2kgLSAxXSAqIDg7XHJcbiAgICAgICAgICAgIHRoaXMuT2N0UG93U2V2ZW5EZXZpZGVkW2ldID0gKHRoaXMuT2N0UG93W2ldIC0gMSkgLyA3O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1heENlbGxOdW0gPSB0aGlzLk9jdFBvd1NldmVuRGV2aWRlZFtNYXhMZXZlbCAtIDFdO1xyXG4gICAgICAgIHRoaXMudW5pdCA9IHRoaXMud2lkdGguRGl2KCgxIDw8IHRoaXMubWF4TGV2ZWwpKTtcclxuICAgICAgICB0aGlzLmFyeV9jZWxscyA9IG5ldyBBcnJheSh0aGlzLm1heENlbGxOdW0pO1xyXG4gICAgICAgIHRoaXMuQ3JlYXRlQ2VsbCgwKTtcclxuICAgICAgICB0aGlzLnZlY19zaHBfY29sbGlzaW9uT2JqcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMudmVjX2luZGV4ID0gbmV3IEFycmF5KCk7XHJcbiAgICB9XHJcbiAgICBDb2xsaXNpb25MYXllci5wcm90b3R5cGUuUmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnZlY19zaHBfY29sbGlzaW9uT2Jqcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMudmVjX2luZGV4Lmxlbmd0aCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1heENlbGxOdW07IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hcnlfY2VsbHNbaV0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyeV9jZWxsc1tpXS5SZWxlYXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXJ5X2NlbGxzLmxlbmd0aCA9IDA7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uTGF5ZXIucHJvdG90eXBlLlJlZ2lzdENvbGxpc2lvbk9iaiA9IGZ1bmN0aW9uIChhcmdfY29sbGlzaW9uT2JqKSB7XHJcbiAgICAgICAgdmFyIGlkID0gbmV3IElEXzEuZGVmYXVsdCh0aGlzLnZlY19zaHBfY29sbGlzaW9uT2Jqcy5sZW5ndGggLSAxKTtcclxuICAgICAgICB0aGlzLnZlY19zaHBfY29sbGlzaW9uT2Jqcy5wdXNoKGFyZ19jb2xsaXNpb25PYmopO1xyXG4gICAgICAgIHRoaXMudmVjX2luZGV4LnB1c2goaWQpO1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25MYXllci5wcm90b3R5cGUuVW5SZWdpc3RDb2xsaXNpb25PYmogPSBmdW5jdGlvbiAoYXJnX2luZGV4KSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gYXJnX2luZGV4Lm51bTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gdGhpcy52ZWNfc2hwX2NvbGxpc2lvbk9ianMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52ZWNfc2hwX2NvbGxpc2lvbk9ianNbaW5kZXhdLlJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMudmVjX3NocF9jb2xsaXNpb25PYmpzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgdGhpcy52ZWNfaW5kZXguc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gaW5kZXggLSAxOyBpIDwgdGhpcy52ZWNfaW5kZXgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy52ZWNfaW5kZXhbaV0ubnVtLS07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbkxheWVyLnByb3RvdHlwZS5Jbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbkxheWVyLnByb3RvdHlwZS5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5SZWdpc3RPY3RyZWUoKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25MYXllci5wcm90b3R5cGUuUmVnaXN0T2N0cmVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGl0ciA9IDA7IGl0ciA8IHRoaXMudmVjX3NocF9jb2xsaXNpb25PYmpzLmxlbmd0aDsgaXRyKyspIHtcclxuICAgICAgICAgICAgdmFyIG1pblBvaW50ID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAsIDAsIDApLCBtYXhQb2ludCA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy52ZWNfc2hwX2NvbGxpc2lvbk9ianNbaXRyXS5jb2xsaXNpb25QcmltaXRpdmUuR2V0TWF4UG9pbnRBbmRNaW5Qb2ludChtYXhQb2ludCwgbWluUG9pbnQpO1xyXG4gICAgICAgICAgICB2YXIgY2VsbE51bSA9IHRoaXMuR2V0TW9ydG9uU3BhY2UobWluUG9pbnQsIG1heFBvaW50KTtcclxuICAgICAgICAgICAgaWYgKGNlbGxOdW0gPiB0aGlzLm1heENlbGxOdW0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5hcnlfY2VsbHNbY2VsbE51bV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ3JlYXRlQ2VsbChjZWxsTnVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFyeV9jZWxsc1tjZWxsTnVtXS5SZWdpc3RPYmplY3QodGhpcy52ZWNfc2hwX2NvbGxpc2lvbk9ianNbaXRyXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbkxheWVyLnByb3RvdHlwZS5HZXQzRE1vcnRvbk51bWJlciA9IGZ1bmN0aW9uICh4LCB5LCB6KSB7XHJcbiAgICAgICAgcmV0dXJuIE9jdHJlZUhlbHBlci5CaXRTZXBhcmF0ZSh4KSB8IE9jdHJlZUhlbHBlci5CaXRTZXBhcmF0ZSh5KSA8PCAxIHwgT2N0cmVlSGVscGVyLkJpdFNlcGFyYXRlKHopIDw8IDI7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uTGF5ZXIucHJvdG90eXBlLkdldDNETW9ydG9uTnVtYmVyX1ZlYzMgPSBmdW5jdGlvbiAoYXJnX3Bvc2l0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuR2V0M0RNb3J0b25OdW1iZXIoKChhcmdfcG9zaXRpb24ueCAtIHRoaXMucmFuZ2VNaW4ueCkgLyB0aGlzLnVuaXQueCksICgoYXJnX3Bvc2l0aW9uLnkgLSB0aGlzLnJhbmdlTWluLnkpIC8gdGhpcy51bml0LnkpLCAoKGFyZ19wb3NpdGlvbi56IC0gdGhpcy5yYW5nZU1pbi56KSAvIHRoaXMudW5pdC56KSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uTGF5ZXIucHJvdG90eXBlLkdldE1vcnRvblNwYWNlID0gZnVuY3Rpb24gKGFyZ19taW5Qb3MsIGFyZ19tYXhQb3MpIHtcclxuICAgICAgICB2YXIgbWF4U3BhY2UgPSB0aGlzLkdldDNETW9ydG9uTnVtYmVyX1ZlYzMoYXJnX21heFBvcyk7XHJcbiAgICAgICAgdmFyIGxldmVsQ2hlY2tGbGFnID0gdGhpcy5HZXQzRE1vcnRvbk51bWJlcl9WZWMzKGFyZ19taW5Qb3MpIF4gbWF4U3BhY2U7XHJcbiAgICAgICAgdmFyIGxldmVsID0gT2N0cmVlSGVscGVyLkdldExldmVsKGxldmVsQ2hlY2tGbGFnLCB0aGlzLm1heExldmVsKTtcclxuICAgICAgICB2YXIgbnVtID0gKG1heFNwYWNlID4+ICgobGV2ZWwpICogMykpO1xyXG4gICAgICAgIG51bSArPSB0aGlzLk9jdFBvd1NldmVuRGV2aWRlZFt0aGlzLm1heExldmVsIC0gbGV2ZWxdO1xyXG4gICAgICAgIHJldHVybiBudW07XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uTGF5ZXIucHJvdG90eXBlLkNyZWF0ZUNvbGxpc2lvbk9iamVjdExpc3QgPSBmdW5jdGlvbiAoYXJnX2NlbGxOdW0sIGFyZ19vdXRwdXQsIGFyZ19zdGFjaykge1xyXG4gICAgICAgIHZhciBvYmpJdHIgPSB0aGlzLmFyeV9jZWxsc1thcmdfY2VsbE51bV0uR2V0SGVhZCgpO1xyXG4gICAgICAgIHdoaWxlIChvYmpJdHIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgck9iakl0ciA9IG9iakl0ci5zaHBfbmV4dDtcclxuICAgICAgICAgICAgd2hpbGUgKHJPYmpJdHIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy8g6KGd56qB44Oq44K544OI5L2c5oiQXHJcbiAgICAgICAgICAgICAgICBhcmdfb3V0cHV0LnB1c2gob2JqSXRyKTtcclxuICAgICAgICAgICAgICAgIGFyZ19vdXRwdXQucHVzaChyT2JqSXRyKTtcclxuICAgICAgICAgICAgICAgIHJPYmpJdHIgPSByT2JqSXRyLnNocF9uZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOKRoSDooZ3nqoHjgrnjgr/jg4Pjgq/jgajjga7ooZ3nqoHjg6rjgrnjg4jkvZzmiJBcclxuICAgICAgICAgICAgZm9yICh2YXIgaXRyID0gMDsgaXRyIDwgYXJnX3N0YWNrLmxlbmd0aDsgaXRyKyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ19vdXRwdXQucHVzaChvYmpJdHIpO1xyXG4gICAgICAgICAgICAgICAgYXJnX291dHB1dC5wdXNoKGFyZ19zdGFja1tpdHJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYmpJdHIgPSBvYmpJdHIuc2hwX25leHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBDaGlsZEZsYWcgPSBmYWxzZTtcclxuICAgICAgICAvLyDikaIg5a2Q56m66ZaT44Gr56e75YuVXHJcbiAgICAgICAgdmFyIE9iak51bSA9IDA7XHJcbiAgICAgICAgdmFyIGksIG5leHRDZWxsTnVtO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgICAgICAgbmV4dENlbGxOdW0gPSBhcmdfY2VsbE51bSAqIDggKyAxICsgaTtcclxuICAgICAgICAgICAgaWYgKG5leHRDZWxsTnVtIDwgdGhpcy5tYXhDZWxsTnVtICYmIHRoaXMuYXJ5X2NlbGxzW2FyZ19jZWxsTnVtICogOCArIDEgKyBpXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFDaGlsZEZsYWcpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmpJdHIgPSB0aGlzLmFyeV9jZWxsc1thcmdfY2VsbE51bV0uR2V0SGVhZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChvYmpJdHIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnX3N0YWNrLnB1c2gob2JqSXRyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqTnVtKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iakl0ciA9IG9iakl0ci5zaHBfbmV4dDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBDaGlsZEZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5DcmVhdGVDb2xsaXNpb25PYmplY3RMaXN0KGFyZ19jZWxsTnVtICogOCArIDEgKyBpLCBhcmdfb3V0cHV0LCBhcmdfc3RhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOKRpCDjgrnjgr/jg4Pjgq/jgYvjgonjgqrjg5bjgrjjgqfjgq/jg4jjgpLlpJbjgZlcclxuICAgICAgICBpZiAoQ2hpbGRGbGFnKSB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBPYmpOdW07IGkrKylcclxuICAgICAgICAgICAgICAgIGFyZ19zdGFjay5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uTGF5ZXIucHJvdG90eXBlLkNyZWF0ZUNlbGwgPSBmdW5jdGlvbiAoYXJnX2NlbGxOdW0pIHtcclxuICAgICAgICB3aGlsZSAoIXRoaXMuYXJ5X2NlbGxzW2FyZ19jZWxsTnVtXSkge1xyXG4gICAgICAgICAgICAvLyDmjIflrprjga7opoHntKDnlarlj7fjgavnqbrplpPjgpLmlrDopo/kvZzmiJBcclxuICAgICAgICAgICAgdGhpcy5hcnlfY2VsbHNbYXJnX2NlbGxOdW1dID0gbmV3IE9jdENlbGxfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIC8vIOimquepuumWk+OBq+OCuOODo+ODs+ODl1xyXG4gICAgICAgICAgICBhcmdfY2VsbE51bSA9IChhcmdfY2VsbE51bSAtIDEpID4+IDM7XHJcbiAgICAgICAgICAgIGlmIChhcmdfY2VsbE51bSA+PSB0aGlzLm1heENlbGxOdW0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbGxpc2lvbkxheWVyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDb2xsaXNpb25MYXllcjtcclxuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgR2FtZVRpbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lVGltZSgpIHtcclxuICAgICAgICB0aGlzLnRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB0aGlzLmFic0ZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLnJlbEZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLnRpbWVQYXNlID0gMS4wO1xyXG4gICAgfVxyXG4gICAgR2FtZVRpbWUucHJvdG90eXBlLkNvdW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYWJzRnJhbWUrKztcclxuICAgICAgICB0aGlzLnJlbEZyYW1lICs9IHRoaXMudGltZVBhc2U7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWVUaW1lLnByb3RvdHlwZSwgXCJlbGFwc2VkVGltZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWUgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZVRpbWUucHJvdG90eXBlLCBcIkFic29sdXRlRnJhbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hYnNGcmFtZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZVRpbWUucHJvdG90eXBlLCBcIlJlbGF0aXZlRnJhbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWxGcmFtZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZVRpbWUucHJvdG90eXBlLCBcIlRpbWVQYXNlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGltZVBhc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChhcmdfdGltZVBhc2UpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lUGFzZSA9IGFyZ190aW1lUGFzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gR2FtZVRpbWU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWVUaW1lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgSUQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBJRChhcmdfbnVtKSB7XHJcbiAgICAgICAgdGhpcy5udW0gPSBhcmdfbnVtO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIElEO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBJRDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIE1vZGVsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL0dyYXBoaWMvTW9kZWxcIikpO1xyXG52YXIgTW9kZWxDcmVhdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTW9kZWxDcmVhdGVyKGFyZ19nYXJhcGhpY0RldmljZSwgYXJnX3Jlc291cmNlQ29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZUNvbnRhaW5lciA9IGFyZ19yZXNvdXJjZUNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UgPSBhcmdfZ2FyYXBoaWNEZXZpY2U7XHJcbiAgICB9XHJcbiAgICBNb2RlbENyZWF0ZXIucHJvdG90eXBlLkNyZWF0ZU1vZGVsID0gZnVuY3Rpb24gKGlzTGlnaHRpbmcsIGlzQmlsbEJvYXJkLCBnZW9tZXRyeVBhdGgsIG1hdGVyaWFsUGF0aCwgc2hhZGVyUGF0aCwgYXJnX3RyYW5zZm9ybSkge1xyXG4gICAgICAgIHZhciBtb2RlbCA9IG5ldyBNb2RlbF8xLmRlZmF1bHQoaXNMaWdodGluZywgaXNCaWxsQm9hcmQpO1xyXG4gICAgICAgIG1vZGVsLkluaXRpYWxpemVfZ2VvbSh0aGlzLmdyYXBoaWNEZXZpY2UsIHRoaXMucmVzb3VyY2VDb250YWluZXIuR2V0R2VvbWV0cnkoZ2VvbWV0cnlQYXRoKSwgdGhpcy5yZXNvdXJjZUNvbnRhaW5lci5HZXRNYXRlcmlhbChtYXRlcmlhbFBhdGgpLCB0aGlzLnJlc291cmNlQ29udGFpbmVyLkdldFNoYWRlcihzaGFkZXJQYXRoKSwgYXJnX3RyYW5zZm9ybSk7XHJcbiAgICAgICAgcmV0dXJuIG1vZGVsO1xyXG4gICAgfTtcclxuICAgIE1vZGVsQ3JlYXRlci5wcm90b3R5cGUuQ3JlYXRlTW9kZWxGcm9tTWVzaCA9IGZ1bmN0aW9uIChpc0xpZ2h0aW5nLCBpc0JpbGxCb2FyZCwgbWVzaFBhdGgsIHNoYWRlclBhdGgsIGFyZ190cmFuc2Zvcm0pIHtcclxuICAgICAgICB2YXIgbW9kZWwgPSBuZXcgTW9kZWxfMS5kZWZhdWx0KGlzTGlnaHRpbmcsIGlzQmlsbEJvYXJkKTtcclxuICAgICAgICBtb2RlbC5Jbml0aWFsaXplX21lc2godGhpcy5ncmFwaGljRGV2aWNlLCB0aGlzLnJlc291cmNlQ29udGFpbmVyLkdldE1lc2gobWVzaFBhdGgpLCB0aGlzLnJlc291cmNlQ29udGFpbmVyLkdldFNoYWRlcihzaGFkZXJQYXRoKSwgYXJnX3RyYW5zZm9ybSk7XHJcbiAgICAgICAgcmV0dXJuIG1vZGVsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNb2RlbENyZWF0ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1vZGVsQ3JlYXRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIElEXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vSURcIikpO1xyXG52YXIgTGF5ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBMYXllcigpIHtcclxuICAgICAgICB0aGlzLmFyeV9JRHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmFyeV9JTW9kZWxzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5hcnlfbGlnaHRzID0gbmV3IEFycmF5KCk7XHJcbiAgICB9XHJcbiAgICBMYXllci5wcm90b3R5cGUuU2V0TGlnaHQgPSBmdW5jdGlvbiAoYXJnX2xpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5hcnlfbGlnaHRzLnB1c2goYXJnX2xpZ2h0KTtcclxuICAgICAgICByZXR1cm4gYXJnX2xpZ2h0O1xyXG4gICAgfTtcclxuICAgIExheWVyLnByb3RvdHlwZS5SZWdpc3QgPSBmdW5jdGlvbiAoYXJnX3JlZ2lzdE9iaikge1xyXG4gICAgICAgIGlmICh0aGlzLmFyeV9saWdodHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhcmdfcmVnaXN0T2JqLlNldExpZ2h0KHRoaXMuYXJ5X2xpZ2h0c1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXJ5X0lNb2RlbHMucHVzaChhcmdfcmVnaXN0T2JqKTtcclxuICAgICAgICB2YXIgaWQgPSBuZXcgSURfMS5kZWZhdWx0KHRoaXMuYXJ5X0lNb2RlbHMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgdGhpcy5hcnlfSURzLnB1c2goaWQpO1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH07XHJcbiAgICBMYXllci5wcm90b3R5cGUuVW5SZWdpc3QgPSBmdW5jdGlvbiAoYXJnX0lEKSB7XHJcbiAgICAgICAgdGhpcy5hcnlfSU1vZGVscy5zcGxpY2UoYXJnX0lELm51bSwgMSk7XHJcbiAgICAgICAgdGhpcy5hcnlfSURzLnNwbGljZShhcmdfSUQubnVtLCAxKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gYXJnX0lELm51bSAtIDE7IGkgPCB0aGlzLmFyeV9JRHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnlfSURzW2ldLm51bS0tO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMYXllci5wcm90b3R5cGUuRHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFyeV9JTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGltb2RlbCkgeyByZXR1cm4gaW1vZGVsLkRyYXcoKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgTGF5ZXIucHJvdG90eXBlLlJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hcnlfSURzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5hcnlfSU1vZGVscy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuYXJ5X2xpZ2h0cy5sZW5ndGggPSAwO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMYXllcjtcclxufSgpKTtcclxudmFyIFJlbmRlcmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVuZGVyZXIoKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmxheWVycy5wdXNoKG5ldyBMYXllcigpKTtcclxuICAgIH1cclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5SZWdpc3QgPSBmdW5jdGlvbiAoYXJnX3JlZ2lzdE9iaiwgbGF5ZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5sYXllcnMubGVuZ3RoIDw9IGxheWVyKSB7XHJcbiAgICAgICAgICAgIGxheWVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzW2xheWVyXS5SZWdpc3QoYXJnX3JlZ2lzdE9iaik7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLlVuUmVnaXN0ID0gZnVuY3Rpb24gKGFyZ19JRCwgbGF5ZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5sYXllcnMubGVuZ3RoIDw9IGxheWVyKSB7XHJcbiAgICAgICAgICAgIGxheWVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYXllcnNbbGF5ZXJdLlVuUmVnaXN0KGFyZ19JRCk7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLlNldExpZ2h0ID0gZnVuY3Rpb24gKGFyZ19saWdodCwgbGF5ZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5sYXllcnMubGVuZ3RoIDw9IGxheWVyKSB7XHJcbiAgICAgICAgICAgIGxheWVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzW2xheWVyXS5TZXRMaWdodChhcmdfbGlnaHQpO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5BZGRMYXllciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxheWVycy5wdXNoKG5ldyBMYXllcigpKTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuRHJhdyA9IGZ1bmN0aW9uIChjYW1lcmEpIHtcclxuICAgICAgICBpZiAodGhpcy5sYXllcnMubGVuZ3RoIDw9IGNhbWVyYS5sYXllcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbWVyYS5BdHRhY2goKTtcclxuICAgICAgICB0aGlzLmxheWVyc1tjYW1lcmEubGF5ZXJdLkRyYXcoKTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuUmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChsYXllcikgeyByZXR1cm4gbGF5ZXIuUmVsZWFzZSgpOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVuZGVyZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJlbmRlcmVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUmVzb3VyY2VDcmVhdGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1Rvb2wvUmVzb3VyY2VDcmVhdGVyXCIpKTtcclxudmFyIFJlc291cmNlQ29udGFpbmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVzb3VyY2VDb250YWluZXIoKSB7XHJcbiAgICAgICAgdGhpcy5pR2VvbWV0cmllcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmlNYXRlcmlhbHMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5pU2hhZGVycyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmlTb3VuZHMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5pVGV4dHVyZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5pTWVzaGVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ09iamVjdENvdW50ID0gMDtcclxuICAgIH1cclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5HZXRTaGFkZXIgPSBmdW5jdGlvbiAoYXJnX2tleSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlTaGFkZXJzW2FyZ19rZXldKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pU2hhZGVyc1thcmdfa2V5XTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwia2V5IGlzIG5vdCBmb25kLlwiKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuQWRkU2hhZGVyID0gZnVuY3Rpb24gKGFyZ192YWx1ZSwgYXJnX2tleSkge1xyXG4gICAgICAgIHRoaXMuaVNoYWRlcnNbYXJnX2tleV0gPSBhcmdfdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGFyZ192YWx1ZTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuUmVtb3ZlU2hhZGVyID0gZnVuY3Rpb24gKGFyZ19rZXkpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5pU2hhZGVyc1thcmdfa2V5XTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuR2V0VGV4dHVyZSA9IGZ1bmN0aW9uIChhcmdfa2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaVRleHR1cmVzW2FyZ19rZXldKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pVGV4dHVyZXNbYXJnX2tleV07XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuQWRkVGV4dHVyZSA9IGZ1bmN0aW9uIChhcmdfdmFsdWUsIGFyZ19rZXkpIHtcclxuICAgICAgICB0aGlzLmlUZXh0dXJlc1thcmdfa2V5XSA9IGFyZ192YWx1ZTtcclxuICAgICAgICBhcmdfdmFsdWUuU2V0Q29udGFpbmVyKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiBhcmdfdmFsdWU7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLkFkZFRleHR1cmVGcm9tRmlsZSA9IGZ1bmN0aW9uIChhcmdfdmFsdWUsIGFyZ19kZXZpY2UpIHtcclxuICAgICAgICBpZiAodGhpcy5pVGV4dHVyZXNbYXJnX3ZhbHVlXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pVGV4dHVyZXNbYXJnX3ZhbHVlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRleCA9IFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlVGV4dHVyZShhcmdfdmFsdWUsIGFyZ19kZXZpY2UpO1xyXG4gICAgICAgIHRleC5TZXRDb250YWluZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5pVGV4dHVyZXNbYXJnX3ZhbHVlXSA9IHRleDtcclxuICAgICAgICByZXR1cm4gdGhpcy5pVGV4dHVyZXNbYXJnX3ZhbHVlXTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuUmVtb3ZlVGV4dHVyZSA9IGZ1bmN0aW9uIChhcmdfa2V5KSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuaVRleHR1cmVzW2FyZ19rZXldO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5HZXRNYXRlcmlhbCA9IGZ1bmN0aW9uIChhcmdfa2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaU1hdGVyaWFsc1thcmdfa2V5XSlcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaU1hdGVyaWFsc1thcmdfa2V5XTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5BZGRNYXRlcmlhbCA9IGZ1bmN0aW9uIChhcmdfdmFsdWUsIGFyZ19rZXkpIHtcclxuICAgICAgICB0aGlzLmlNYXRlcmlhbHNbYXJnX2tleV0gPSBhcmdfdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGFyZ192YWx1ZTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuQWRkTWF0ZXJpYWxGcm9tRmlsZSA9IGZ1bmN0aW9uIChhcmdfdmFsdWUsIGFyZ19kZXZpY2UpIHtcclxuICAgICAgICBpZiAodGhpcy5pTWF0ZXJpYWxzW2FyZ192YWx1ZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaU1hdGVyaWFsc1thcmdfdmFsdWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlNYXRlcmlhbHNbYXJnX3ZhbHVlXSA9IFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlTWF0ZXJpYWxGcm9tRmlsZShhcmdfdmFsdWUsIHRoaXMsIGFyZ19kZXZpY2UpO1xyXG4gICAgICAgIHRoaXMuTG9hZFN0YXJ0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaU1hdGVyaWFsc1thcmdfdmFsdWVdO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5SZW1vdmVNYXRlcmlhbCA9IGZ1bmN0aW9uIChhcmdfa2V5KSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuaU1hdGVyaWFsc1thcmdfa2V5XTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuR2V0R2VvbWV0cnkgPSBmdW5jdGlvbiAoYXJnX2tleSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlHZW9tZXRyaWVzW2FyZ19rZXldKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pR2VvbWV0cmllc1thcmdfa2V5XTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5BZGRHZW9tZXRyeSA9IGZ1bmN0aW9uIChhcmdfdmFsdWUsIGFyZ19rZXkpIHtcclxuICAgICAgICB0aGlzLmlHZW9tZXRyaWVzW2FyZ19rZXldID0gYXJnX3ZhbHVlO1xyXG4gICAgICAgIHJldHVybiBhcmdfdmFsdWU7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLlJlbW92ZUdlb21ldHJ5ID0gZnVuY3Rpb24gKGFyZ19rZXkpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5pR2VvbWV0cmllc1thcmdfa2V5XTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuR2V0TWVzaCA9IGZ1bmN0aW9uIChhcmdfa2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaU1lc2hlc1thcmdfa2V5XSlcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaU1lc2hlc1thcmdfa2V5XTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5BZGRNZXNoID0gZnVuY3Rpb24gKGFyZ192YWx1ZSwgYXJnX2tleSkge1xyXG4gICAgICAgIHRoaXMuaU1lc2hlc1thcmdfa2V5XSA9IGFyZ192YWx1ZTtcclxuICAgICAgICByZXR1cm4gYXJnX3ZhbHVlO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5SZW1vdmVNZXNoID0gZnVuY3Rpb24gKGFyZ19rZXkpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5pTWVzaGVzW2FyZ19rZXldO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5HZXRTb3VuZCA9IGZ1bmN0aW9uIChhcmdfa2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaVNvdW5kc1thcmdfa2V5XSlcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaVNvdW5kc1thcmdfa2V5XTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ29udGFpbmVyLnByb3RvdHlwZS5BZGRTb3VuZCA9IGZ1bmN0aW9uIChhcmdfdmFsdWUsIGFyZ19rZXkpIHtcclxuICAgICAgICB0aGlzLmlTb3VuZHNbYXJnX2tleV0gPSBhcmdfdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGFyZ192YWx1ZTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuQWRkU291bmRGcm9tRmlsZSA9IGZ1bmN0aW9uIChhcmdfdmFsdWUsIGFyZ19rZXkpIHtcclxuICAgICAgICB0aGlzLmlTb3VuZHNbYXJnX2tleV0gPSBSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZVNvdW5kKGFyZ192YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaVNvdW5kc1thcmdfa2V5XTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuUmVtb3ZlU291bmQgPSBmdW5jdGlvbiAoYXJnX2tleSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmlTb3VuZHNbYXJnX2tleV07XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLkxvYWRFbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nT2JqZWN0Q291bnQtLTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNvbnRhaW5lci5wcm90b3R5cGUuTG9hZFN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ09iamVjdENvdW50Kys7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDb250YWluZXIucHJvdG90eXBlLkdldExvYWRpbmdPYmpDb3VudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2FkaW5nT2JqZWN0Q291bnQgPD0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygwICsgXCI6bG9hZGluZ1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubG9hZGluZ09iamVjdENvdW50ICsgXCI6bG9hZGluZ1wiKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2FkaW5nT2JqZWN0Q291bnQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlc291cmNlQ29udGFpbmVyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBSZXNvdXJjZUNvbnRhaW5lcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEZyYW1lQnVmZmVyVGV4dHVyZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZyYW1lQnVmZmVyVGV4dHVyZShhcmdfZ3JhcGhpY0RldmljZSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UgPSBhcmdfZ3JhcGhpY0RldmljZTtcclxuICAgICAgICAvLyDjg5Xjg6zjg7zjg6Djg5Djg4Pjg5XjgqHjga7nlJ/miJBcclxuICAgICAgICB0aGlzLmZyYW1lQnVmZmVyID0gdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuY3JlYXRlRnJhbWVidWZmZXIoKTtcclxuICAgICAgICAvLyDjg5Xjg6zjg7zjg6Djg5Djg4Pjg5XjgqHjgpJXZWJHTOOBq+ODkOOCpOODs+ODiVxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5GUkFNRUJVRkZFUiwgdGhpcy5mcmFtZUJ1ZmZlcik7XHJcbiAgICAgICAgLy8g5rex5bqm44OQ44OD44OV44Kh55So44Os44Oz44OA44O844OQ44OD44OV44Kh44Gu55Sf5oiQ44Go44OQ44Kk44Oz44OJXHJcbiAgICAgICAgdGhpcy5kZXB0aEJ1ZmZlciA9IHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmNyZWF0ZVJlbmRlcmJ1ZmZlcigpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmJpbmRSZW5kZXJidWZmZXIodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuUkVOREVSQlVGRkVSLCB0aGlzLmRlcHRoQnVmZmVyKTtcclxuICAgICAgICAvLyDjg6zjg7Pjg4Djg7zjg5Djg4Pjg5XjgqHjgpLmt7Hluqbjg5Djg4Pjg5XjgqHjgajjgZfjgaboqK3lrppcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5yZW5kZXJidWZmZXJTdG9yYWdlKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlJFTkRFUkJVRkZFUiwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuREVQVEhfQ09NUE9ORU5UMTYsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIC8vIOODleODrOODvOODoOODkOODg+ODleOCoeOBq+ODrOODs+ODgOODvOODkOODg+ODleOCoeOCkumWoumAo+S7mOOBkeOCi1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmZyYW1lYnVmZmVyUmVuZGVyYnVmZmVyKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LkZSQU1FQlVGRkVSLCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5ERVBUSF9BVFRBQ0hNRU5ULCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5SRU5ERVJCVUZGRVIsIHRoaXMuZGVwdGhCdWZmZXIpO1xyXG4gICAgICAgIC8vIOODleODrOODvOODoOODkOODg+ODleOCoeeUqOODhuOCr+OCueODgeODo+OBrueUn+aIkFxyXG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmNyZWF0ZVRleHR1cmUoKTtcclxuICAgICAgICAvLyDjg5Xjg6zjg7zjg6Djg5Djg4Pjg5XjgqHnlKjjga7jg4bjgq/jgrnjg4Hjg6PjgpLjg5DjgqTjg7Pjg4lcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5iaW5kVGV4dHVyZSh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5URVhUVVJFXzJELCB0aGlzLmRhdGEpO1xyXG4gICAgICAgIC8vIOODleODrOODvOODoOODkOODg+ODleOCoeeUqOOBruODhuOCr+OCueODgeODo+OBq+OCq+ODqeODvOeUqOOBruODoeODouODqumgmOWfn+OCkueiuuS/nVxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnRleEltYWdlMkQodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVEVYVFVSRV8yRCwgMCwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuUkdCQSwgd2lkdGgsIGhlaWdodCwgMCwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuUkdCQSwgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVU5TSUdORURfQllURSwgbnVsbCk7XHJcbiAgICAgICAgLy8g44OG44Kv44K544OB44Oj44OR44Op44Oh44O844K/XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudGV4UGFyYW1ldGVyaSh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5URVhUVVJFXzJELCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5URVhUVVJFX01BR19GSUxURVIsIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LkxJTkVBUik7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQudGV4UGFyYW1ldGVyaSh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5URVhUVVJFXzJELCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5URVhUVVJFX01JTl9GSUxURVIsIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LkxJTkVBUik7XHJcbiAgICAgICAgLy8g44OV44Os44O844Og44OQ44OD44OV44Kh44Gr44OG44Kv44K544OB44Oj44KS6Zai6YCj5LuY44GR44KLXHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuZnJhbWVidWZmZXJUZXh0dXJlMkQodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuRlJBTUVCVUZGRVIsIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LkNPTE9SX0FUVEFDSE1FTlQwLCB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5URVhUVVJFXzJELCB0aGlzLmRhdGEsIDApO1xyXG4gICAgICAgIC8vIOWQhOeoruOCquODluOCuOOCp+OCr+ODiOOBruODkOOCpOODs+ODieOCkuino+mZpFxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmJpbmRUZXh0dXJlKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmJpbmRSZW5kZXJidWZmZXIodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuUkVOREVSQlVGRkVSLCBudWxsKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5iaW5kRnJhbWVidWZmZXIodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuRlJBTUVCVUZGRVIsIG51bGwpO1xyXG4gICAgfVxyXG4gICAgRnJhbWVCdWZmZXJUZXh0dXJlLnByb3RvdHlwZS5TZXRDb250YWluZXIgPSBmdW5jdGlvbiAocmVzb3VyY2VDb250YWluZXIpIHtcclxuICAgIH07XHJcbiAgICBGcmFtZUJ1ZmZlclRleHR1cmUucHJvdG90eXBlLkxvYWRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBGcmFtZUJ1ZmZlclRleHR1cmUucHJvdG90eXBlLklzTG9hZGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuICAgIEZyYW1lQnVmZmVyVGV4dHVyZS5wcm90b3R5cGUuSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBGcmFtZUJ1ZmZlclRleHR1cmUucHJvdG90eXBlLkF0dGFjaCA9IGZ1bmN0aW9uIChzbG90KSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuYWN0aXZlVGV4dHVyZSh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5URVhUVVJFMCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuYmluZFRleHR1cmUodGhpcy5ncmFwaGljRGV2aWNlLmNvbnRleHQuVEVYVFVSRV8yRCwgdGhpcy5kYXRhKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC51bmlmb3JtMWkodGhpcy5ncmFwaGljRGV2aWNlLnNoYWRlci5HZXRUZXh0dXJlU2xvdChzbG90KSwgc2xvdCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEZyYW1lQnVmZmVyVGV4dHVyZTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRnJhbWVCdWZmZXJUZXh0dXJlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgR2VvbWV0cnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHZW9tZXRyeShkYXRhLCBpc1VWLCBpc05vcm1hbCwgaXNDb2xvciwgYXJnX2RldmljZSkge1xyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gYXJnX2RldmljZTtcclxuICAgICAgICB0aGlzLnZib0xpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLnZib0xpc3QucHVzaChhcmdfZGV2aWNlLkNyZWF0ZVZCTyhkYXRhLnApKTtcclxuICAgICAgICBpZiAoaXNVVikge1xyXG4gICAgICAgICAgICB0aGlzLnZib0xpc3QucHVzaChhcmdfZGV2aWNlLkNyZWF0ZVZCTyhkYXRhLnV2KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc05vcm1hbCkge1xyXG4gICAgICAgICAgICB0aGlzLnZib0xpc3QucHVzaChhcmdfZGV2aWNlLkNyZWF0ZVZCTyhkYXRhLm4pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzQ29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy52Ym9MaXN0LnB1c2goYXJnX2RldmljZS5DcmVhdGVWQk8oZGF0YS5jKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaWJvID0gYXJnX2RldmljZS5DcmVhdGVJQk8oZGF0YS5pKTtcclxuICAgICAgICB0aGlzLmluZGV4U2l6ZSA9IGRhdGEuaS5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5zdWJzZXQgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLnN1YnNldC5wdXNoKGRhdGEuaS5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgR2VvbWV0cnkucHJvdG90eXBlLkdldEluZGV4U2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmRleFNpemU7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnkucHJvdG90eXBlLkRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kZXZpY2UuU2V0VkJPKHRoaXMudmJvTGlzdCk7XHJcbiAgICAgICAgdGhpcy5kZXZpY2UuY29udGV4dC5iaW5kQnVmZmVyKHRoaXMuZGV2aWNlLmNvbnRleHQuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuaWJvKTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeS5wcm90b3R5cGUuU2V0U3Vic2V0ID0gZnVuY3Rpb24gKGFyZ19zdWJzZXQpIHtcclxuICAgICAgICB0aGlzLnN1YnNldCA9IGFyZ19zdWJzZXQ7XHJcbiAgICB9O1xyXG4gICAgR2VvbWV0cnkucHJvdG90eXBlLkdldFN1YlNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdWJzZXQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdlb21ldHJ5O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBHZW9tZXRyeTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEV4UGFyYW1ldGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRXhQYXJhbWV0ZXIoYXJnX3Nsb3QsIGFyZ19zaXplLCBhcmdfcGFyYW0pIHtcclxuICAgICAgICB0aGlzLnNsb3QgPSBhcmdfc2xvdDtcclxuICAgICAgICB0aGlzLnBhcmFtID0gYXJnX3BhcmFtO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IGFyZ19zaXplO1xyXG4gICAgICAgIHN3aXRjaCAoYXJnX3NpemUpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdGFjaEZ1bmMgPSB0aGlzLkF0YWNoMWY7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdGFjaEZ1bmMgPSB0aGlzLkF0YWNoMmY7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdGFjaEZ1bmMgPSB0aGlzLkF0YWNoM2Y7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdGFjaEZ1bmMgPSB0aGlzLkF0YWNoNGY7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxNjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYXRhY2hGdW5jID0gdGhpcy5BdGFjaE1hdDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEV4UGFyYW1ldGVyLnByb3RvdHlwZS5BdGFjaDFmID0gZnVuY3Rpb24gKGRldmljZSkge1xyXG4gICAgICAgIGRldmljZS5jb250ZXh0LnVuaWZvcm0xZnYoZGV2aWNlLnNoYWRlci51bmlmb3JtTG9jYXRpb25zW3RoaXMuc2xvdF0sIHRoaXMucGFyYW0uZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgRXhQYXJhbWV0ZXIucHJvdG90eXBlLkF0YWNoMmYgPSBmdW5jdGlvbiAoZGV2aWNlKSB7XHJcbiAgICAgICAgZGV2aWNlLmNvbnRleHQudW5pZm9ybTJmdihkZXZpY2Uuc2hhZGVyLnVuaWZvcm1Mb2NhdGlvbnNbdGhpcy5zbG90XSwgdGhpcy5wYXJhbS5kYXRhKTtcclxuICAgIH07XHJcbiAgICBFeFBhcmFtZXRlci5wcm90b3R5cGUuQXRhY2gzZiA9IGZ1bmN0aW9uIChkZXZpY2UpIHtcclxuICAgICAgICBkZXZpY2UuY29udGV4dC51bmlmb3JtM2Z2KGRldmljZS5zaGFkZXIudW5pZm9ybUxvY2F0aW9uc1t0aGlzLnNsb3RdLCB0aGlzLnBhcmFtLmRhdGEpO1xyXG4gICAgfTtcclxuICAgIEV4UGFyYW1ldGVyLnByb3RvdHlwZS5BdGFjaDRmID0gZnVuY3Rpb24gKGRldmljZSkge1xyXG4gICAgICAgIGRldmljZS5jb250ZXh0LnVuaWZvcm00ZnYoZGV2aWNlLnNoYWRlci51bmlmb3JtTG9jYXRpb25zW3RoaXMuc2xvdF0sIHRoaXMucGFyYW0uZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgRXhQYXJhbWV0ZXIucHJvdG90eXBlLkF0YWNoTWF0ID0gZnVuY3Rpb24gKGRldmljZSkge1xyXG4gICAgICAgIGRldmljZS5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYoZGV2aWNlLnNoYWRlci51bmlmb3JtTG9jYXRpb25zW3RoaXMuc2xvdF0sIGZhbHNlLCB0aGlzLnBhcmFtLmRhdGEpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBFeFBhcmFtZXRlcjtcclxufSgpKTtcclxudmFyIE1hdGVyaWFsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWF0ZXJpYWwoKSB7XHJcbiAgICB9XHJcbiAgICBNYXRlcmlhbC5wcm90b3R5cGUuU2V0UGFyYW1ldGVyID0gZnVuY3Rpb24gKGFyZ19hbWJpZW50LCBhcmdfZGV2aWNlLCBhcmdfYXJ5X3RleHR1cmUsIGFyZ19hcnlfZXhQYXJtcykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5hbWJpZW50Q29sb3IgPSBhcmdfYW1iaWVudDtcclxuICAgICAgICB0aGlzLmRldmljZSA9IGFyZ19kZXZpY2U7XHJcbiAgICAgICAgaWYgKGFyZ19hcnlfdGV4dHVyZSlcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlcyA9IGFyZ19hcnlfdGV4dHVyZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmV4UGFyYW1zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgaWYgKGFyZ19hcnlfZXhQYXJtcykge1xyXG4gICAgICAgICAgICBhcmdfYXJ5X2V4UGFybXMuZm9yZWFjaChmdW5jdGlvbiAocGFyYW0pIHsgcmV0dXJuIF90aGlzLkFkZEV4UGFyYW0ocGFyYW0ubiwgcGFyYW0ucywgcGFyYW0ucCk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBNYXRlcmlhbC5wcm90b3R5cGUuU2V0VGV4dHVyZSA9IGZ1bmN0aW9uIChhcmdfdGV4dHVyZSwgc2xvdCkge1xyXG4gICAgICAgIHRoaXMudGV4dHVyZXNbc2xvdF0gPSBhcmdfdGV4dHVyZTtcclxuICAgIH07XHJcbiAgICBNYXRlcmlhbC5wcm90b3R5cGUuQWRkRXhQYXJhbSA9IGZ1bmN0aW9uIChhcmdfc2xvdCwgYXJnX3NpemUsIGFyZ19wYXJhbSkge1xyXG4gICAgICAgIHRoaXMuZXhQYXJhbXMucHVzaChuZXcgRXhQYXJhbWV0ZXIoYXJnX3Nsb3QsIGFyZ19zaXplLCBhcmdfcGFyYW0pKTtcclxuICAgIH07XHJcbiAgICBNYXRlcmlhbC5wcm90b3R5cGUuQXR0YWNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRldmljZS5zaGFkZXIuYW1iaWVudFNsb3QpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2UuY29udGV4dC51bmlmb3JtNGZ2KHRoaXMuZGV2aWNlLnNoYWRlci51bmlmb3JtTG9jYXRpb25zW3RoaXMuZGV2aWNlLnNoYWRlci5hbWJpZW50U2xvdF0sIHRoaXMuYW1iaWVudENvbG9yLnh5encpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGV4dHVyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGV4dHVyZXNbaV0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZXNbaV0uQXR0YWNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXhQYXJhbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5leFBhcmFtc1tpXS5hdGFjaEZ1bmModGhpcy5kZXZpY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gTWF0ZXJpYWw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1hdGVyaWFsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgTWVzaCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1lc2goKSB7XHJcbiAgICB9XHJcbiAgICBNZXNoLnByb3RvdHlwZS5TZXRQYXJhbWV0ZXIgPSBmdW5jdGlvbiAoYXJnX2dlb21ldHJ5LCBhcmdfYXJ5X21hdGVyaWFscykge1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBhcmdfZ2VvbWV0cnk7XHJcbiAgICAgICAgdGhpcy5hcnlfbWF0ZXJpYWxzID0gYXJnX2FyeV9tYXRlcmlhbHM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1lc2g7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1lc2g7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBGaWxlTG9hZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1Rvb2wvRmlsZUxvYWRlclwiKSk7XHJcbmZ1bmN0aW9uIEdldFN0cmlkZShhcmdfdHlwZSkge1xyXG4gICAgc3dpdGNoIChhcmdfdHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJ2ZWMyXCI6XHJcbiAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwidmVjM1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gMztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInZlYzRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIDQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJpbnRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJmbG9hdFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcIlR5cGUgdW5kaWZpbmVkLlwiKTtcclxuICAgIHJldHVybiAwO1xyXG59XHJcbnZhciBTaGFkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTaGFkZXIodnNTb3VyY2UsIGZzU291cmNlLCBhcmdfZ3JhcGhpY0RldmljZSkge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZSA9IGFyZ19ncmFwaGljRGV2aWNlO1xyXG4gICAgICAgIHZhciB2c0RhdGEgPSBGaWxlTG9hZGVyXzEuZGVmYXVsdC5Mb2FkVGV4dCh2c1NvdXJjZSk7XHJcbiAgICAgICAgdmFyIHZfc2hhZGVyID0gdGhpcy5ncmFwaGljRGV2aWNlLkNyZWF0ZVZlcnRleFNoYWRlcih2c0RhdGEpO1xyXG4gICAgICAgIHZhciBmc0RhdGEgPSBGaWxlTG9hZGVyXzEuZGVmYXVsdC5Mb2FkVGV4dChmc1NvdXJjZSk7XHJcbiAgICAgICAgdmFyIGZfc2hhZGVyID0gdGhpcy5ncmFwaGljRGV2aWNlLkNyZWF0ZUZyYWdtZW50U2hhZGVyKGZzRGF0YSk7XHJcbiAgICAgICAgdGhpcy5hbWJpZW50U2xvdCA9IC0xO1xyXG4gICAgICAgIHRoaXMubGlnaHRQb3NTbG90ID0gLTE7XHJcbiAgICAgICAgdGhpcy5saWdodERpclNsb3QgPSAtMTtcclxuICAgICAgICB0aGlzLnByb2dyYW1PYmplY3QgPSB0aGlzLmdyYXBoaWNEZXZpY2UuQ3JlYXRlUHJvZ3JhbSh2X3NoYWRlciwgZl9zaGFkZXIpO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVTdHJpZGVzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy51bmlmb3JtTG9jYXRpb25zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlU2xvdHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB2YXIgYXR0cmlidXRlU291cmNlID0gdnNEYXRhLnNwbGl0KFwiO1wiKTtcclxuICAgICAgICBhdHRyaWJ1dGVTb3VyY2UgPSBhdHRyaWJ1dGVTb3VyY2UuZmlsdGVyKGZ1bmN0aW9uIChzb3VyY2UpIHsgcmV0dXJuIHNvdXJjZS5pbmRleE9mKFwiYXR0cmlidXRlXCIpICE9IC0xOyB9KTtcclxuICAgICAgICB2YXIgYXR0cmlidXRlU2VtYW50aWNzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdHRyaWJ1dGVTb3VyY2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlU291cmNlW2ldID0gYXR0cmlidXRlU291cmNlW2ldLnJlcGxhY2UoL1xccj9cXG4vZywgXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF0dHJpYnV0ZVNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHsgcmV0dXJuIGF0dHJpYnV0ZVNlbWFudGljcy5wdXNoKHNvdXJjZS5zcGxpdChcIiBcIikpOyB9KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJpYnV0ZVNlbWFudGljcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVTZW1hbnRpY3NbaV0gPSBhdHRyaWJ1dGVTZW1hbnRpY3NbaV0uZmlsdGVyKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzICE9IFwiXCI7IH0pO1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9uc1tpXSA9IHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucHJvZ3JhbU9iamVjdCwgYXR0cmlidXRlU2VtYW50aWNzW2ldWzJdKTtcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVTdHJpZGVzW2ldID0gR2V0U3RyaWRlKGF0dHJpYnV0ZVNlbWFudGljc1tpXVsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1bmlTb3VyY2UgPSBmc0RhdGEuc3BsaXQoXCI7XCIpO1xyXG4gICAgICAgIHVuaVNvdXJjZSA9IHZzRGF0YS5zcGxpdChcIjtcIikuY29uY2F0KHVuaVNvdXJjZSk7XHJcbiAgICAgICAgdW5pU291cmNlID0gdW5pU291cmNlLmZpbHRlcihmdW5jdGlvbiAoc291cmNlKSB7IHJldHVybiBzb3VyY2UuaW5kZXhPZihcInVuaWZvcm1cIikgIT0gLTE7IH0pO1xyXG4gICAgICAgIHZhciB1bmlTZW1hbnRpY3MgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHVuaVNvdXJjZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB1bmlTb3VyY2VbaV0gPSB1bmlTb3VyY2VbaV0ucmVwbGFjZSgvXFxyP1xcbi9nLCBcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdW5pU291cmNlLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkgeyByZXR1cm4gdW5pU2VtYW50aWNzLnB1c2goc291cmNlLnNwbGl0KFwiIFwiKSk7IH0pO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdW5pU2VtYW50aWNzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHVuaVNlbWFudGljc1tpXSA9IHVuaVNlbWFudGljc1tpXS5maWx0ZXIoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMgIT0gXCJcIjsgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5wdXNoKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW1PYmplY3QsIHVuaVNlbWFudGljc1tpXVsyXSkpO1xyXG4gICAgICAgICAgICBpZiAodW5pU2VtYW50aWNzW2ldWzJdID09IFwiYW1iaWVudENvbG9yXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW1iaWVudFNsb3QgPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVuaVNlbWFudGljc1tpXVsyXSA9PSBcImxpZ2h0UG9zaXRpb25cIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saWdodFBvc1Nsb3QgPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVuaVNlbWFudGljc1tpXVsyXSA9PSBcImxpZ2h0RGlyZWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlnaHREaXJTbG90ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1bmlTZW1hbnRpY3NbaV1bMV0gPT0gXCJzYW1wbGVyMkRcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlU2xvdHMucHVzaChpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFNoYWRlci5wcm90b3R5cGUuR2V0VGV4dHVyZVNsb3QgPSBmdW5jdGlvbiAoYXJnX3Nsb3QpIHtcclxuICAgICAgICBpZiAodGhpcy50ZXh0dXJlU2xvdHNbYXJnX3Nsb3RdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9uc1t0aGlzLnRleHR1cmVTbG90c1thcmdfc2xvdF1dO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTaGFkZXIucHJvdG90eXBlLkF0dGFjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuU2V0U2hhZGVyKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTaGFkZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFNoYWRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFNvdW5kID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU291bmQoYXJnX3NyYykge1xyXG4gICAgICAgIHRoaXMuYXVkaW9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5zcmMgPSBhcmdfc3JjO1xyXG4gICAgICAgIHRoaXMuYXVkaW9FbGVtZW50LnByZWxvYWQgPSBcImF1dG9cIjtcclxuICAgIH1cclxuICAgIFNvdW5kLnByb3RvdHlwZS5QbGF5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYXVkaW9FbGVtZW50LnBsYXkoKTtcclxuICAgIH07XHJcbiAgICBTb3VuZC5wcm90b3R5cGUuUGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQucGF1c2UoKTtcclxuICAgIH07XHJcbiAgICBTb3VuZC5wcm90b3R5cGUuTXV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvRWxlbWVudC5tdXRlZCA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgU291bmQucHJvdG90eXBlLlNldFZvbHVtZSA9IGZ1bmN0aW9uIChhcmdfdm9sdW1lKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQudm9sdW1lID0gYXJnX3ZvbHVtZTtcclxuICAgIH07XHJcbiAgICBTb3VuZC5wcm90b3R5cGUuR2V0Vm9sdW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF1ZGlvRWxlbWVudC52b2x1bWU7XHJcbiAgICB9O1xyXG4gICAgU291bmQucHJvdG90eXBlLkRpc011dGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQubXV0ZWQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICBTb3VuZC5wcm90b3R5cGUuUmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0VsZW1lbnQuY3VycmVudFRpbWUgPSAwLjA7XHJcbiAgICB9O1xyXG4gICAgU291bmQucHJvdG90eXBlLlNldExvb3AgPSBmdW5jdGlvbiAoYXJnX2lzTG9vcCkge1xyXG4gICAgICAgIHRoaXMuYXVkaW9FbGVtZW50Lmxvb3AgPSBhcmdfaXNMb29wO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTb3VuZDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU291bmQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBUZXh0dXJlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVGV4dHVyZShhcmdfcGF0aCwgYXJnX2RldmljZSkge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UgPSBhcmdfZGV2aWNlO1xyXG4gICAgICAgIHRoaXMucGF0aCA9IGFyZ19wYXRoO1xyXG4gICAgfVxyXG4gICAgVGV4dHVyZS5wcm90b3R5cGUuTG9hZGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnJlc291cmNlQ29udGFpbmVyKVxyXG4gICAgICAgICAgICB0aGlzLnJlc291cmNlQ29udGFpbmVyLkxvYWRFbmQoKTtcclxuICAgIH07XHJcbiAgICBUZXh0dXJlLnByb3RvdHlwZS5Jc0xvYWRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0xvYWRlZDtcclxuICAgIH07XHJcbiAgICBUZXh0dXJlLnByb3RvdHlwZS5Jbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5DcmVhdGVUZXh0dXJlKHRoaXMucGF0aCwgdGhpcyk7XHJcbiAgICB9O1xyXG4gICAgVGV4dHVyZS5wcm90b3R5cGUuQXR0YWNoID0gZnVuY3Rpb24gKHNsb3QpIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5hY3RpdmVUZXh0dXJlKHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LlRFWFRVUkUwKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5iaW5kVGV4dHVyZSh0aGlzLmdyYXBoaWNEZXZpY2UuY29udGV4dC5URVhUVVJFXzJELCB0aGlzLmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZS5jb250ZXh0LnVuaWZvcm0xaSh0aGlzLmdyYXBoaWNEZXZpY2Uuc2hhZGVyLkdldFRleHR1cmVTbG90KHNsb3QpLCBzbG90KTtcclxuICAgIH07XHJcbiAgICBUZXh0dXJlLnByb3RvdHlwZS5TZXRDb250YWluZXIgPSBmdW5jdGlvbiAocmVzb3VyY2VDb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLnJlc291cmNlQ29udGFpbmVyID0gcmVzb3VyY2VDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZUNvbnRhaW5lci5Mb2FkU3RhcnQoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVGV4dHVyZTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dHVyZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBTY2VuZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NjZW5lL1NjZW5lXCIpKTtcclxudmFyIFJlc291cmNlQ3JlYXRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1Rvb2wvUmVzb3VyY2VDcmVhdGVyXCIpKTtcclxudmFyIEdlb21ldHJ5R2VuZXJhdG9yXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVG9vbC9HZW9tZXRyeUdlbmVyYXRvclwiKSk7XHJcbnZhciBRdWF0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWF0aC9RdWF0XCIpKTtcclxudmFyIFZlY3RvcjRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYXRoL1ZlY3RvcjRcIikpO1xyXG52YXIgVmVjdG9yM18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01hdGgvVmVjdG9yM1wiKSk7XHJcbnZhciBQb2ludExpZ2h0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTGlnaHQvUG9pbnRMaWdodFwiKSk7XHJcbnZhciBNb2RlbERyYXdDb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21wb25lbnQvTW9kZWxEcmF3Q29tcG9uZW50XCIpKTtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYXRoL1ZlY3RvcjJcIikpO1xyXG52YXIgU2FtcGxlQ29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ29tcG9uZW50L1NhbXBsZUNvbXBvbmVudFwiKSk7XHJcbnZhciBDb2xsaXNpb25Db21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21wb25lbnQvQ29sbGlzaW9uQ29tcG9uZW50XCIpKTtcclxudmFyIFByaW1pdGl2ZVR5cGU7XHJcbihmdW5jdGlvbiAoUHJpbWl0aXZlVHlwZSkge1xyXG4gICAgUHJpbWl0aXZlVHlwZVtQcmltaXRpdmVUeXBlW1wic3BoZXJlXCJdID0gMF0gPSBcInNwaGVyZVwiO1xyXG4gICAgUHJpbWl0aXZlVHlwZVtQcmltaXRpdmVUeXBlW1wiYm94X0FBQkJcIl0gPSAxXSA9IFwiYm94X0FBQkJcIjtcclxuICAgIFByaW1pdGl2ZVR5cGVbUHJpbWl0aXZlVHlwZVtcImJveF9PQkJcIl0gPSAyXSA9IFwiYm94X09CQlwiO1xyXG4gICAgUHJpbWl0aXZlVHlwZVtQcmltaXRpdmVUeXBlW1wicG9pbnRcIl0gPSAzXSA9IFwicG9pbnRcIjtcclxufSkoUHJpbWl0aXZlVHlwZSB8fCAoUHJpbWl0aXZlVHlwZSA9IHt9KSk7XHJcbnZhciBmbG9hdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIGZsb2F0KCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmxvYXQ7XHJcbn0oKSk7XHJcbnZhciBTYW1wbGVTY2VuZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhTYW1wbGVTY2VuZSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFNhbXBsZVNjZW5lKHNjZW5lTWFuZ2VyKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc2NlbmVNYW5nZXIpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuYVF1YXRlcm5pb24gPSBuZXcgUXVhdF8xLmRlZmF1bHQoKS5JZGVudGl0eSgpO1xyXG4gICAgICAgIF90aGlzLmJRdWF0ZXJuaW9uID0gbmV3IFF1YXRfMS5kZWZhdWx0KCkuSWRlbnRpdHkoKTtcclxuICAgICAgICBfdGhpcy5zUXVhdGVybmlvbiA9IG5ldyBRdWF0XzEuZGVmYXVsdCgpLklkZW50aXR5KCk7XHJcbiAgICAgICAgX3RoaXMuem9vbURhdGEgPSBuZXcgZmxvYXQoKTtcclxuICAgICAgICBfdGhpcy56b29tRGlyZWN0aW9uID0gMS4wO1xyXG4gICAgICAgIF90aGlzLnpvb21EYXRhLmRhdGFbMF0gPSAwLjU7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgU2FtcGxlU2NlbmUucHJvdG90eXBlLkxvYWRpbmdVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgU2FtcGxlU2NlbmUucHJvdG90eXBlLk9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjYWxvcnlUZXh0dXJlLCBmcmFtZUJ1ZmZlciwgbWF0ZXJpYWw7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5nZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRTaGFkZXIoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVTaGFkZXIoJ3NoYWRlci9Qb2ludExpZ2h0VlMuZ2xzbCcsIFwic2hhZGVyL1BvaW50TGlnaHRGUy5nbHNsXCIsIHRoaXMuc2NlbmVNYW5nZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJwb2ludExpZ2h0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZFNoYWRlcihSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZVNoYWRlcignc2hhZGVyL1VWTm9ybWFsQ29sb3JWUy5nbHNsJywgXCJzaGFkZXIvRGVmYXVsdEZTLmdsc2xcIiwgdGhpcy5zY2VuZU1hbmdlci5HZXRHcmFwaGljRGV2aWNlKCkpLCBcInRleFNoYWRlclwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5nZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRTaGFkZXIoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVTaGFkZXIoJ3NoYWRlci9VVk5vcm1hbFZTLmdsc2wnLCBcInNoYWRlci9EZWZhdWx0RlNfbGlnaHQuZ2xzbFwiLCB0aGlzLnNjZW5lTWFuZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSksIFwidGV4U2hhZGVyX2xpZ2h0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZFNoYWRlcihSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZVNoYWRlcignc2hhZGVyL1VWTm9ybWFsVlMuZ2xzbCcsIFwic2hhZGVyL1pvb21CbHVyLmdsc2xcIiwgdGhpcy5zY2VuZU1hbmdlci5HZXRHcmFwaGljRGV2aWNlKCkpLCBcInpvb21FZmZlY3RcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkU2hhZGVyKFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlU2hhZGVyKCdzaGFkZXIvVVZOb3JtYWxWUy5nbHNsJywgXCJzaGFkZXIvRG90RWZmZWN0Lmdsc2xcIiwgdGhpcy5zY2VuZU1hbmdlci5HZXRHcmFwaGljRGV2aWNlKCkpLCBcImRvdEVmZmVjdFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5nZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRTaGFkZXIoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVTaGFkZXIoJ3NoYWRlci9VVk5vcm1hbENvbG9yVlMuZ2xzbCcsIFwic2hhZGVyL0JsYWNrVGVzdEZTLmdsc2xcIiwgdGhpcy5zY2VuZU1hbmdlci5HZXRHcmFwaGljRGV2aWNlKCkpLCBcImJsYWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZEdlb21ldHJ5KFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlR2VvbWV0cnkoR2VvbWV0cnlHZW5lcmF0b3JfMS5kZWZhdWx0LkNyZWF0ZVRvcnVzKDMyLCAzMiwgMC41LCAxKSwgZmFsc2UsIHRydWUsIHRydWUsIHRoaXMuc2NlbmVNYW5nZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJoc3ZUb3J1c1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5nZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRHZW9tZXRyeShSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZUdlb21ldHJ5KEdlb21ldHJ5R2VuZXJhdG9yXzEuZGVmYXVsdC5DcmVhdGVDdWJlKDEsIG5ldyBWZWN0b3I0XzEuZGVmYXVsdCgxLjAsIDEuMCwgMS4wLCAxKSksIHRydWUsIHRydWUsIHRydWUsIHRoaXMuc2NlbmVNYW5nZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJjdWJlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZEdlb21ldHJ5KFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlR2VvbWV0cnkoR2VvbWV0cnlHZW5lcmF0b3JfMS5kZWZhdWx0LkNyZWF0ZVBsYW5lKG5ldyBWZWN0b3IyXzEuZGVmYXVsdCgxLCAxKSwgbmV3IFZlY3RvcjRfMS5kZWZhdWx0KDEuMCwgMS4wLCAxLjAsIDEpKSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCB0aGlzLnNjZW5lTWFuZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSksIFwicGxhbmVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkTWVzaChSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZU1lc2hSZXNvdXJjZUZyb21GaWxlKFwibW9kZWwvTWFndXJvL21hZ3Vyby5iM21cIiwgdGhpcy5zY2VuZU1hbmdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLCB0aGlzLnNjZW5lTWFuZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSksIFwibWFndXJvXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZFNvdW5kRnJvbUZpbGUoXCJhdWRpby9FbmRpbmcubXAzXCIsIFwic2FtcGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgY2Fsb3J5VGV4dHVyZSA9IFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlVGV4dHVyZSgnaW1hZ2UvY2Fsb3J5LnBuZycsIHRoaXMuc2NlbmVNYW5nZXIuR2V0R3JhcGhpY0RldmljZSgpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5nZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRUZXh0dXJlKGNhbG9yeVRleHR1cmUsIFwiY2Fsb3J5XCIpO1xyXG4gICAgICAgICAgICAgICAgZnJhbWVCdWZmZXIgPSB0aGlzLnNjZW5lTWFuZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkVGV4dHVyZShSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZUZyYW1lQnVmZmVyKDEwMjQsIDEwMjQsIHRoaXMuc2NlbmVNYW5nZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJjYW1lcmFcIik7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbCA9IHRoaXMuc2NlbmVNYW5nZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5BZGRNYXRlcmlhbChSZXNvdXJjZUNyZWF0ZXJfMS5kZWZhdWx0LkNyZWF0ZU1hdGVyaWFsKG5ldyBWZWN0b3I0XzEuZGVmYXVsdCgwLjEsIDAuMSwgMC4xLCAxLjApLCB0aGlzLnNjZW5lTWFuZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSwgW3RoaXMuc2NlbmVNYW5nZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5HZXRUZXh0dXJlKFwiY2Fsb3J5XCIpXSksIFwiY2Fsb3J5TWF0ZXJpYWxcIik7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5BZGRFeFBhcmFtKDQsIDMsIG5ldyBWZWN0b3IzXzEuZGVmYXVsdCg1LCA1LCAxMCkpO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwgPSB0aGlzLnNjZW5lTWFuZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkTWF0ZXJpYWwoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVNYXRlcmlhbChuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMC4xLCAwLjEsIDAuMSwgMS4wKSwgdGhpcy5zY2VuZU1hbmdlci5HZXRHcmFwaGljRGV2aWNlKCksIFt0aGlzLnNjZW5lTWFuZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuR2V0VGV4dHVyZShcImNhbWVyYVwiKV0pLCBcImNhbWVyYU1hdGVyaWFsXCIpO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuQWRkRXhQYXJhbSg0LCAxLCB0aGlzLnpvb21EYXRhKTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsID0gdGhpcy5zY2VuZU1hbmdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkFkZE1hdGVyaWFsKFJlc291cmNlQ3JlYXRlcl8xLmRlZmF1bHQuQ3JlYXRlTWF0ZXJpYWwobmV3IFZlY3RvcjRfMS5kZWZhdWx0KDAuMSwgMC4xLCAwLjEsIDEuMCksIHRoaXMuc2NlbmVNYW5nZXIuR2V0R3JhcGhpY0RldmljZSgpKSwgXCJub25UZXh0dXJlTWF0ZXJpYWxcIik7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5BZGRFeFBhcmFtKDQsIDMsIG5ldyBWZWN0b3IzXzEuZGVmYXVsdCg1LCA1LCAxMCkpO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwgPSB0aGlzLnNjZW5lTWFuZ2VyLkdldFJlc291cmNlQ29udGFpbmVyKCkuQWRkTWF0ZXJpYWwoUmVzb3VyY2VDcmVhdGVyXzEuZGVmYXVsdC5DcmVhdGVNYXRlcmlhbChuZXcgVmVjdG9yNF8xLmRlZmF1bHQoMC4xLCAwLjEsIDAuMSwgMS4wKSwgdGhpcy5zY2VuZU1hbmdlci5HZXRHcmFwaGljRGV2aWNlKCkpLCBcInpvb21FZmZlY3RcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNhbXBsZVNjZW5lLnByb3RvdHlwZS5PbkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5BZGRMYXllcigpO1xyXG4gICAgICAgIHRoaXMuQWRkQ2FtZXJhKDAsIDEsIFwibWFpblwiLCBmYWxzZSwgdGhpcy5zY2VuZU1hbmdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkdldFRleHR1cmUoXCJjYW1lcmFcIikpO1xyXG4gICAgICAgIC8vIOmggueCueOCt+OCp+ODvOODgOOBqOODleODqeOCsOODoeODs+ODiOOCt+OCp+ODvOODgOOBrueUn+aIkFxyXG4gICAgICAgIHZhciBsaWdodCA9IG5ldyBQb2ludExpZ2h0XzEuZGVmYXVsdCh0aGlzLnNjZW5lTWFuZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSk7XHJcbiAgICAgICAgbGlnaHQudHJhbnNmb3JtLlBvc2l0aW9uID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KC01LCAtNSwgMTApO1xyXG4gICAgICAgIC8vdGhpcy5yZW5kZXJlci5TZXRMaWdodChsaWdodCwwKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLlNldExpZ2h0KGxpZ2h0LCAxKTtcclxuICAgICAgICB0aGlzLnNjZW5lTWFuZ2VyLkdldEdyYXBoaWNEZXZpY2UoKS5FbmFibGVTdGVuY2lsKCk7XHJcbiAgICAgICAgdGhpcy5HZXRDYW1lcmEoXCJtYWluXCIpLnRyYW5zZm9ybS5Qb3NpdGlvbiA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAtMywgMTApO1xyXG4gICAgICAgIC8vdGhpcy5HZXRDYW1lcmEoXCJtYWluXCIpLnRyYW5zZm9ybS5Sb3RhdGlvbj1uZXcgTWF0cml4NHg0KCkuUm90YXRlX2IoMCogTWF0aC5QSSAvIDE4MCxuZXcgVmVjdG9yMygwLDAsMSkpO1xyXG4gICAgICAgIC8vIOOCq+ODoeODqeOBruS4iuaWueWQkeOCkuihqOOBmeODmeOCr+ODiOODq1xyXG4gICAgICAgIHZhciBjYW1VcERpcmVjdGlvbiA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLkdldENhbWVyYShcIm1haW5cIikudHJhbnNmb3JtLkxvb2tBdChuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgMCksIGNhbVVwRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLkdldENhbWVyYShcIm1haW5cIikuY2xlYXJDb2xvciA9IG5ldyBWZWN0b3I0XzEuZGVmYXVsdCgwLjMsIDAuMywgMC4zLCAxLjApO1xyXG4gICAgICAgIHRoaXMuY3ViZSA9IHRoaXMuZ2FtZU9iamVjdE1hbmFnZXIuQWRkR2FtZU9iamVjdChcImN1YmVcIik7XHJcbiAgICAgICAgdGhpcy5hbm90aGVyQ3ViZSA9IHRoaXMuZ2FtZU9iamVjdE1hbmFnZXIuQWRkR2FtZU9iamVjdChcImN1YmVcIik7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uUGxhbmUgPSB0aGlzLmdhbWVPYmplY3RNYW5hZ2VyLkFkZEdhbWVPYmplY3QoXCJwcm9qZWN0aW9uQ3ViZVwiKTtcclxuICAgICAgICAvL3RoaXMudG9ydXMuU2V0Q29tcG9uZW50KG5ldyBNb2RlbERyYXdDb21wb25lbnQoXCJoc3ZUb3J1c1wiLFwiY2Fsb3J5TWF0ZXJpYWxcIixcInBvaW50TGlnaHRcIiwxKSkgYXMgTW9kZWxEcmF3Q29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMuY3ViZS5TZXRDb21wb25lbnQobmV3IE1vZGVsRHJhd0NvbXBvbmVudF8xLmRlZmF1bHQoZmFsc2UsIFwiY3ViZVwiLCBcImNhbG9yeU1hdGVyaWFsXCIsIFwidGV4U2hhZGVyXCIsIDEsIHRydWUpKTtcclxuICAgICAgICAvL3RoaXMuYW5vdGhlckN1YmUuU2V0Q29tcG9uZW50KG5ldyBNb2RlbERyYXdDb21wb25lbnQoZmFsc2UsIFwiY3ViZVwiLFwiY2Fsb3J5TWF0ZXJpYWxcIixcInRleFNoYWRlclwiLDEsdHJ1ZSkpIGFzIE1vZGVsRHJhd0NvbXBvbmVudDtcclxuICAgICAgICB0aGlzLnByb2plY3Rpb25QbGFuZS5TZXRDb21wb25lbnQobmV3IE1vZGVsRHJhd0NvbXBvbmVudF8xLmRlZmF1bHQoZmFsc2UsIFwicGxhbmVcIiwgXCJjYW1lcmFNYXRlcmlhbFwiLCBcInRleFNoYWRlclwiLCAwLCBmYWxzZSkpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlvblBsYW5lLnRyYW5zZm9ybS5TY2FsZSA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCg1MDAsIDUwMCwgMSk7XHJcbiAgICAgICAgdGhpcy5jdWJlLlNldENvbXBvbmVudChuZXcgU2FtcGxlQ29tcG9uZW50XzEuZGVmYXVsdCgpKTtcclxuICAgICAgICB0aGlzLmN1YmUudHJhbnNmb3JtLlBvc2l0aW9uID0gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDAuNSwgMCwgMC41KTtcclxuICAgICAgICB0aGlzLmFub3RoZXJDdWJlLnRyYW5zZm9ybS5Qb3NpdGlvbiA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgtMSwgLTUsIDEwKTtcclxuICAgICAgICB0aGlzLnByb2plY3Rpb25QbGFuZS50cmFuc2Zvcm0uUG9zaXRpb24gPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgLTEpO1xyXG4gICAgICAgIHRoaXMuY3ViZS5TZXRDb21wb25lbnQobmV3IENvbGxpc2lvbkNvbXBvbmVudF8xLmRlZmF1bHQoUHJpbWl0aXZlVHlwZS5ib3hfT0JCLCBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMS4wLCAxLjAsIDEuMCksIDApKTtcclxuICAgICAgICB0aGlzLmFub3RoZXJDdWJlLlNldENvbXBvbmVudChuZXcgQ29sbGlzaW9uQ29tcG9uZW50XzEuZGVmYXVsdChQcmltaXRpdmVUeXBlLmJveF9PQkIsIG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgxLjAsIDEuMCwgMS4wKSwgMCkpO1xyXG4gICAgfTtcclxuICAgIFNhbXBsZVNjZW5lLnByb3RvdHlwZS5PblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyDjgqvjgqbjg7Pjgr/jgpLlhYPjgavjg6njgrjjgqLjg7PjgpLnrpflh7pcclxuICAgICAgICB2YXIgcmFkID0gKHRoaXMuc2NlbmVNYW5nZXIuR2V0R2FtZVRpbWUoKS5BYnNvbHV0ZUZyYW1lICUgMzYwKSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgdmFyIHRpbWUgPSAxLjU7XHJcbiAgICAgICAgaWYgKHRoaXMuc2NlbmVNYW5nZXIuR2V0R2FtZVRpbWUoKS5BYnNvbHV0ZUZyYW1lID49IDM2MCkge1xyXG4gICAgICAgICAgICAvL3RoaXMuc2NlbmVNYW5nZXIuR2V0UmVzb3VyY2VDb250YWluZXIoKS5HZXRTb3VuZChcInNhbXBsZVwiKS5QbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWbnui7ouOCr+OCqeODvOOCv+ODi+OCquODs+OBrueUn+aIkFxyXG4gICAgICAgIHRoaXMuYVF1YXRlcm5pb24uUm90YXRlKHJhZCwgbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDEuMCwgMC4wLCAwLjApKTtcclxuICAgICAgICB0aGlzLmJRdWF0ZXJuaW9uLlJvdGF0ZSgtcmFkLCBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMSwgMCkpO1xyXG4gICAgICAgIHRoaXMuc1F1YXRlcm5pb24gPSB0aGlzLmFRdWF0ZXJuaW9uLlNwaGVyZUxlcnAodGhpcy5iUXVhdGVybmlvbiwgdGltZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNhbXBsZVNjZW5lO1xyXG59KFNjZW5lXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBTYW1wbGVTY2VuZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBSZW5kZXJlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9QYXJ0cy9SZW5kZXJlclwiKSk7XHJcbnZhciBDYW1lcmFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vR3JhcGhpYy9DYW1lcmFcIikpO1xyXG52YXIgR2FtZU9iamVjdE1hbmFnZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vR2FtZU9iamVjdC9HYW1lT2JqZWN0TWFuYWdlclwiKSk7XHJcbnZhciBDb2xsaXNpb25NYW5hZ2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1BhcnRzL0NvbGxpc2lvbi9Db2xsaXNpb25NYW5hZ2VyXCIpKTtcclxuZnVuY3Rpb24gU2xlZXAodGltZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKTtcclxuICAgIH0pO1xyXG59XHJcbnZhciBTY2VuZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNjZW5lKHNjZW5lTWFuZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXJfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5tYXBfY2FtZXJhID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuYXJ5X2NhbWVyYSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVNYW5nZXIgPSBzY2VuZU1hbmdlcjtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3RNYW5hZ2VyID0gbmV3IEdhbWVPYmplY3RNYW5hZ2VyXzEuZGVmYXVsdCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbk1hbmFnZXIgPSBuZXcgQ29sbGlzaW9uTWFuYWdlcl8xLmRlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLkFkZENhbWVyYSgwLCAwLCBcImxhc3RcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuR2V0Q29sbGlzaW9uTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2xsaXNpb25NYW5hZ2VyO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5Jc0xvYWRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0xvYWRlZDtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuUmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLk9uUmVsZWFzZSgpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVNYW5nZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdE1hbmFnZXIuUmVsZWFzZSgpO1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uTWFuYWdlci5SZWxlYXNlKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5SZWxlYXNlKCk7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLk9uUmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuQWRkQ2FtZXJhID0gZnVuY3Rpb24gKG9yZGVyLCBsYXllciwgY2FtZXJhTmFtZSwgaXNQYXJhcmVsbCwgZnJhbWVCdWZmZXJUZXh0dXJlKSB7XHJcbiAgICAgICAgdmFyIG5ld0NhbWVyYTtcclxuICAgICAgICBpZiAoZnJhbWVCdWZmZXJUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIG5ld0NhbWVyYSA9IG5ldyBDYW1lcmFfMS5kZWZhdWx0KHRoaXMuc2NlbmVNYW5nZXIuR2V0R3JhcGhpY0RldmljZSgpLCBsYXllciwgaXNQYXJhcmVsbCwgZnJhbWVCdWZmZXJUZXh0dXJlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBuZXdDYW1lcmEgPSBuZXcgQ2FtZXJhXzEuZGVmYXVsdCh0aGlzLnNjZW5lTWFuZ2VyLkdldEdyYXBoaWNEZXZpY2UoKSwgbGF5ZXIsIGlzUGFyYXJlbGwpO1xyXG4gICAgICAgIHRoaXMuYXJ5X2NhbWVyYS5zcGxpY2Uob3JkZXIsIDAsIG5ld0NhbWVyYSk7XHJcbiAgICAgICAgdGhpcy5tYXBfY2FtZXJhW2NhbWVyYU5hbWVdID0gbmV3Q2FtZXJhO1xyXG4gICAgICAgIHJldHVybiBuZXdDYW1lcmE7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLkdldENhbWVyYSA9IGZ1bmN0aW9uIChjYW1lcmFOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwX2NhbWVyYVtjYW1lcmFOYW1lXTtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuRHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYXJ5X2NhbWVyYS5mb3JFYWNoKGZ1bmN0aW9uIChjYW1lcmEpIHsgcmV0dXJuIF90aGlzLnJlbmRlcmVyLkRyYXcoY2FtZXJhKTsgfSk7XHJcbiAgICAgICAgdGhpcy5zY2VuZU1hbmdlci5HZXRHcmFwaGljRGV2aWNlKCkuUHJlc2VudCgpO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5PblVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdE1hbmFnZXIuVXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb25NYW5hZ2VyLkNoZWNrKCk7XHJcbiAgICAgICAgdGhpcy5EcmF3KCk7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLkxvYWRpbmdVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJub3cgbG9hZGluZ1wiKTtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuT25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLlN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuT25TdGFydCgpO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5PblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5FbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5PbkVuZCgpO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5PbkVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBTY2VuZS5wcm90b3R5cGUuSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLk9uSW5pdGlhbGl6ZSgpO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5CZWZMb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5Mb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5PbkxvYWQoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zY2VuZU1hbmdlci5HZXRSZXNvdXJjZUNvbnRhaW5lcigpLkdldExvYWRpbmdPYmpDb3VudCgpKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgU2xlZXAoMTAwKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbmQgbG9hZGluZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5PbkxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5PbkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgU2NlbmUucHJvdG90eXBlLkdldFJlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyO1xyXG4gICAgfTtcclxuICAgIFNjZW5lLnByb3RvdHlwZS5HZXRTY2VuZU1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVNYW5nZXI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNjZW5lO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBTY2VuZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEdhbWVUaW1lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1BhcnRzL0dhbWVUaW1lXCIpKTtcclxudmFyIFNjZW5lTWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNjZW5lTWFuYWdlcihhcmdfbW9kZWxDcmVhdGVyLCBhcmdfcmVzb3VyY2VDb250YWluZXIsIGFyZ19ncmFwaGljRGV2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5tYXBfc2NlbmVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2VDb250YWluZXIgPSBhcmdfcmVzb3VyY2VDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5tb2RlbENyZWF0ZXIgPSBhcmdfbW9kZWxDcmVhdGVyO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0RldmljZSA9IGFyZ19ncmFwaGljRGV2aWNlO1xyXG4gICAgICAgIHRoaXMuZ2FtZVRpbWUgPSBuZXcgR2FtZVRpbWVfMS5kZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBTY2VuZU1hbmFnZXIucHJvdG90eXBlLkdldEdyYXBoaWNEZXZpY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhpY0RldmljZTtcclxuICAgIH07XHJcbiAgICBTY2VuZU1hbmFnZXIucHJvdG90eXBlLkdldE1vZGVsQ3JlYXRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbENyZWF0ZXI7XHJcbiAgICB9O1xyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5HZXRSZXNvdXJjZUNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUNvbnRhaW5lcjtcclxuICAgIH07XHJcbiAgICBTY2VuZU1hbmFnZXIucHJvdG90eXBlLkdldEdhbWVUaW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVUaW1lO1xyXG4gICAgfTtcclxuICAgIFNjZW5lTWFuYWdlci5wcm90b3R5cGUuVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTY2VuZS5Jc0xvYWRlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lLlVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVUaW1lLkNvdW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5Mb2FkaW5nVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNjZW5lTWFuYWdlci5wcm90b3R5cGUuQWRkU2NlbmUgPSBmdW5jdGlvbiAoYXJnX3NjZW5lLCBrZXkpIHtcclxuICAgICAgICBhcmdfc2NlbmUuTG9hZCgpO1xyXG4gICAgICAgIHRoaXMubWFwX3NjZW5lc1trZXldID0gYXJnX3NjZW5lO1xyXG4gICAgICAgIHJldHVybiBhcmdfc2NlbmU7XHJcbiAgICB9O1xyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5HZXRTY2VuZSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBfc2NlbmVzW2tleV07XHJcbiAgICB9O1xyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5HZXRDdXJyZW50U2NlbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNjZW5lO1xyXG4gICAgfTtcclxuICAgIFNjZW5lTWFuYWdlci5wcm90b3R5cGUuQ2hhbmdlU2NlbmUgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNjZW5lKVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5FbmQoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMubWFwX3NjZW5lc1trZXldO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLlN0YXJ0KCk7XHJcbiAgICB9O1xyXG4gICAgU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5SZW1vdmVTY2VuZSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICBpZiAodGhpcy5tYXBfc2NlbmVzW2tleV0pIHtcclxuICAgICAgICAgICAgdGhpcy5tYXBfc2NlbmVzW2tleV0uUmVsZWFzZSgpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5tYXBfc2NlbmVzW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBTY2VuZU1hbmFnZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFNjZW5lTWFuYWdlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEJpbmFyeVJlYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJpbmFyeVJlYWRlcihhcmdfYnVmZmVyKSB7XHJcbiAgICAgICAgdGhpcy5idWZmZXJWaWV3ID0gbmV3IERhdGFWaWV3KGFyZ19idWZmZXIpO1xyXG4gICAgICAgIHRoaXMucG9pbnQgPSAwO1xyXG4gICAgfVxyXG4gICAgQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5HZXRTdHJpbmcgPSBmdW5jdGlvbiAoc2l6ZSkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBcIlwiO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciByZWFkID0gdGhpcy5idWZmZXJWaWV3LmdldEludDgodGhpcy5wb2ludCk7XHJcbiAgICAgICAgICAgIGlmIChyZWFkID4gOSlcclxuICAgICAgICAgICAgICAgIG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJlYWQpO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocmVhZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBcIjFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gXCIyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IFwiM1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBcIjRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gXCI1XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IFwiNlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBcIjdcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gXCI4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IFwiOVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBvaW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5HZXRXU3RyaW5nID0gZnVuY3Rpb24gKHNpemUpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gXCJcIjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemUgKiAyOyBpKyspIHtcclxuICAgICAgICAgICAgb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodGhpcy5idWZmZXJWaWV3LmdldEludDgodGhpcy5wb2ludCkpO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5HZXRDaGFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLmJ1ZmZlclZpZXcuZ2V0SW50OCh0aGlzLnBvaW50KTtcclxuICAgICAgICB0aGlzLnBvaW50ICs9IDE7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBCaW5hcnlSZWFkZXIucHJvdG90eXBlLkdldEZsb2F0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLmJ1ZmZlclZpZXcuZ2V0RmxvYXQzMih0aGlzLnBvaW50LCB0cnVlKTtcclxuICAgICAgICB0aGlzLnBvaW50ICs9IDQ7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBCaW5hcnlSZWFkZXIucHJvdG90eXBlLkdldERvdWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5idWZmZXJWaWV3LmdldEZsb2F0NjQodGhpcy5wb2ludCwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5wb2ludCArPSA1O1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gICAgQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5HZXRJbnQgPSBmdW5jdGlvbiAoc2l6ZSkge1xyXG4gICAgICAgIGlmICghc2l6ZSkge1xyXG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5idWZmZXJWaWV3LmdldEludDMyKHRoaXMucG9pbnQsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50ICs9IDQ7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaXplID09IDEpIHtcclxuICAgICAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuYnVmZmVyVmlldy5nZXRJbnQ4KHRoaXMucG9pbnQpO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50ICs9IDE7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNpemUgPT0gMikge1xyXG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5idWZmZXJWaWV3LmdldEludDE2KHRoaXMucG9pbnQsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50ICs9IDI7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNpemUgPT0gNCkge1xyXG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5idWZmZXJWaWV3LmdldEludDMyKHRoaXMucG9pbnQsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50ICs9IDQ7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEJpbmFyeVJlYWRlci5wcm90b3R5cGUuR2V0VUludCA9IGZ1bmN0aW9uIChzaXplKSB7XHJcbiAgICAgICAgaWYgKCFzaXplKSB7XHJcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLmJ1ZmZlclZpZXcuZ2V0VWludDMyKHRoaXMucG9pbnQsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50ICs9IDQ7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaXplID09IDEpIHtcclxuICAgICAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuYnVmZmVyVmlldy5nZXRVaW50OCh0aGlzLnBvaW50KTtcclxuICAgICAgICAgICAgdGhpcy5wb2ludCArPSAxO1xyXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzaXplID09IDIpIHtcclxuICAgICAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuYnVmZmVyVmlldy5nZXRVaW50MTYodGhpcy5wb2ludCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnQgKz0gMjtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc2l6ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLmJ1ZmZlclZpZXcuZ2V0VWludDMyKHRoaXMucG9pbnQsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50ICs9IDQ7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBCaW5hcnlSZWFkZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEJpbmFyeVJlYWRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEJveF9BQUJCXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL01hdGgvR2VvbWV0cnkvQm94X0FBQkJcIikpO1xyXG52YXIgQm94X09CQl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9NYXRoL0dlb21ldHJ5L0JveF9PQkJcIikpO1xyXG52YXIgR2VvbWV0cnlIZWxwZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTWF0aC9HZW9tZXRyeS9HZW9tZXRyeUhlbHBlclwiKSk7XHJcbnZhciBTcGhlcmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTWF0aC9HZW9tZXRyeS9TcGhlcmVcIikpO1xyXG52YXIgVmVjdG9yM18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9NYXRoL1ZlY3RvcjNcIikpO1xyXG52YXIgQ29sbGlzaW9uT2JqZWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1BhcnRzL0NvbGxpc2lvbi9Db2xsaXNpb25PYmplY3RcIikpO1xyXG52YXIgQ29sbGlzaW9uT2JqZWN0Q3JlYXRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbGxpc2lvbk9iamVjdENyZWF0ZXIoKSB7XHJcbiAgICB9XHJcbiAgICBDb2xsaXNpb25PYmplY3RDcmVhdGVyLkNyZWF0ZVBvaW50ID0gZnVuY3Rpb24gKGFyZ19nYW1lT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xsaXNpb25PYmplY3RfMS5kZWZhdWx0KGFyZ19nYW1lT2JqZWN0LCBuZXcgQ29sbGlzaW9uUHJpbWl0aXZlX1BvaW50KGFyZ19nYW1lT2JqZWN0LnRyYW5zZm9ybSkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvbk9iamVjdENyZWF0ZXIuQ3JlYXRlU3BoZXJlID0gZnVuY3Rpb24gKGFyZ19yYWRpdXMsIGFyZ19nYW1lT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xsaXNpb25PYmplY3RfMS5kZWZhdWx0KGFyZ19nYW1lT2JqZWN0LCBuZXcgQ29sbGlzaW9uUHJpbWl0aXZlX1NwaGVyZShhcmdfcmFkaXVzLCBhcmdfZ2FtZU9iamVjdC50cmFuc2Zvcm0pKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25PYmplY3RDcmVhdGVyLkNyZWF0ZUN1YmVfQUFCQiA9IGZ1bmN0aW9uIChhcmdfbGVuZ3RoLCBhcmdfZ2FtZU9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29sbGlzaW9uT2JqZWN0XzEuZGVmYXVsdChhcmdfZ2FtZU9iamVjdCwgbmV3IENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfQUFCQihhcmdfbGVuZ3RoLCBhcmdfZ2FtZU9iamVjdC50cmFuc2Zvcm0pKTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25PYmplY3RDcmVhdGVyLkNyZWF0ZUN1YmVfT0JCID0gZnVuY3Rpb24gKGFyZ19sZW5ndGgsIGFyZ19nYW1lT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xsaXNpb25PYmplY3RfMS5kZWZhdWx0KGFyZ19nYW1lT2JqZWN0LCBuZXcgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9PQkIoYXJnX2xlbmd0aCwgYXJnX2dhbWVPYmplY3QudHJhbnNmb3JtKSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbGxpc2lvbk9iamVjdENyZWF0ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENvbGxpc2lvbk9iamVjdENyZWF0ZXI7XHJcbnZhciBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQoYXJnX3RyYW5zZm9ybSkge1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gYXJnX3RyYW5zZm9ybTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy50cmFuc2Zvcm0uUG9zaXRpb247XHJcbiAgICB9XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQucHJvdG90eXBlLkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1BvaW50LnByb3RvdHlwZS5QcmVJbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Qb2ludC5wcm90b3R5cGUuVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybS5Qb3NpdGlvbjtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQucHJvdG90eXBlLkdldFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybS5Qb3NpdGlvbjtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQucHJvdG90eXBlLklzSGl0ID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG90aGVyLklzSGl0UG9pbnQodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1BvaW50LnByb3RvdHlwZS5HZXRNYXhQb2ludEFuZE1pblBvaW50ID0gZnVuY3Rpb24gKGFyZ19vdXRwdXRNYXgsIGFyZ19vdXRwdXRNaW4pIHtcclxuICAgICAgICB2YXIgcG9pbnQgPSB0aGlzLnRyYW5zZm9ybS5Qb3NpdGlvbjtcclxuICAgICAgICBhcmdfb3V0cHV0TWF4LmRhdGEgPSBwb2ludC5kYXRhO1xyXG4gICAgICAgIGFyZ19vdXRwdXRNaW4uZGF0YSA9IHBvaW50LmRhdGE7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1BvaW50LnByb3RvdHlwZS5Jc0hpdFBvaW50ID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG90aGVyLkdldFBvc2l0aW9uKCkgPT0gdGhpcy5HZXRQb3NpdGlvbigpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Qb2ludC5wcm90b3R5cGUuSXNIaXRTcGhlcmUgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gR2VvbWV0cnlIZWxwZXJfMS5kZWZhdWx0LklzSGl0UG9pbnRTcGhlcmUodGhpcy5wb3NpdGlvbiwgb3RoZXIuZ2VvbWV0cnkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Qb2ludC5wcm90b3R5cGUuSXNIaXRCb3hfQUFCQiA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRQb2ludEJveF9BQUJCKHRoaXMucG9zaXRpb24sIG90aGVyLmdlb21ldHJ5KTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQucHJvdG90eXBlLklzSGl0Qm94X09CQiA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRQb2ludEJveF9PQkIodGhpcy5wb3NpdGlvbiwgb3RoZXIuZ2VvbWV0cnkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb2xsaXNpb25QcmltaXRpdmVfUG9pbnQ7XHJcbn0oKSk7XHJcbjtcclxudmFyIENvbGxpc2lvblByaW1pdGl2ZV9TcGhlcmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb2xsaXNpb25QcmltaXRpdmVfU3BoZXJlKGFyZ19yYWRpdXMsIGFyZ190cmFuc2Zvcm0pIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IGFyZ190cmFuc2Zvcm07XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBTcGhlcmVfMS5kZWZhdWx0KGFyZ19yYWRpdXMsIHRoaXMudHJhbnNmb3JtLlBvc2l0aW9uKTtcclxuICAgIH1cclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9TcGhlcmUucHJvdG90eXBlLkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1NwaGVyZS5wcm90b3R5cGUuUHJlSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfU3BoZXJlLnByb3RvdHlwZS5HZXRNYXhQb2ludEFuZE1pblBvaW50ID0gZnVuY3Rpb24gKGFyZ19vdXRwdXRNYXgsIGFyZ19vdXRwdXRNaW4pIHtcclxuICAgICAgICBhcmdfb3V0cHV0TWF4LmRhdGEgPSB0aGlzLmdlb21ldHJ5LnBvc2l0aW9uLkFkZChuZXcgVmVjdG9yM18xLmRlZmF1bHQodGhpcy5nZW9tZXRyeS5yYWRpdXMsIHRoaXMuZ2VvbWV0cnkucmFkaXVzLCB0aGlzLmdlb21ldHJ5LnJhZGl1cykpLmRhdGE7XHJcbiAgICAgICAgYXJnX291dHB1dE1pbi5kYXRhID0gdGhpcy5nZW9tZXRyeS5wb3NpdGlvbi5TdWIobmV3IFZlY3RvcjNfMS5kZWZhdWx0KHRoaXMuZ2VvbWV0cnkucmFkaXVzLCB0aGlzLmdlb21ldHJ5LnJhZGl1cywgdGhpcy5nZW9tZXRyeS5yYWRpdXMpKS5kYXRhO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9TcGhlcmUucHJvdG90eXBlLlVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LnBvc2l0aW9uID0gdGhpcy50cmFuc2Zvcm0uUG9zaXRpb247XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1NwaGVyZS5wcm90b3R5cGUuSXNIaXQgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gb3RoZXIuSXNIaXRTcGhlcmUodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1NwaGVyZS5wcm90b3R5cGUuSXNIaXRCb3hfT0JCID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5Jc0hpdFNwaGVyZUJveF9PQkIodGhpcy5nZW9tZXRyeSwgb3RoZXIuZ2VvbWV0cnkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9TcGhlcmUucHJvdG90eXBlLklzSGl0UG9pbnQgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gR2VvbWV0cnlIZWxwZXJfMS5kZWZhdWx0LklzSGl0UG9pbnRTcGhlcmUob3RoZXIucG9zaXRpb24sIHRoaXMuZ2VvbWV0cnkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9TcGhlcmUucHJvdG90eXBlLklzSGl0U3BoZXJlID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5Jc0hpdFNwaGVyZVNwaGVyZSh0aGlzLmdlb21ldHJ5LCBvdGhlci5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX1NwaGVyZS5wcm90b3R5cGUuSXNIaXRCb3hfQUFCQiA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRTcGhlcmVCb3hfQUFCQih0aGlzLmdlb21ldHJ5LCBvdGhlci5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbGxpc2lvblByaW1pdGl2ZV9TcGhlcmU7XHJcbn0oKSk7XHJcbjtcclxudmFyIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfQUFCQiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfQUFCQihhcmdfbGVuZ3RoLCBhcmdfd2Vha190cmFuc2Zvcm0pIHtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJveF9BQUJCXzEuZGVmYXVsdChhcmdfbGVuZ3RoLCBhcmdfd2Vha190cmFuc2Zvcm0uUG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gYXJnX3dlYWtfdHJhbnNmb3JtO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuaW5pdExlbmd0aGVzID0gYXJnX2xlbmd0aC5EaXYoMik7XHJcbiAgICB9XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X0FBQkIucHJvdG90eXBlLkluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCLnByb3RvdHlwZS5QcmVJbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfQUFCQi5wcm90b3R5cGUuR2V0TWF4UG9pbnRBbmRNaW5Qb2ludCA9IGZ1bmN0aW9uIChhcmdfb3V0cHV0TWF4LCBhcmdfb3V0cHV0TWluKSB7XHJcbiAgICAgICAgYXJnX291dHB1dE1heC5kYXRhID0gdGhpcy5nZW9tZXRyeS5wb3NpdGlvbi5BZGQodGhpcy5nZW9tZXRyeS5oYWxmTGVuZ3RoZXMpLmRhdGE7XHJcbiAgICAgICAgYXJnX291dHB1dE1pbi5kYXRhID0gdGhpcy5nZW9tZXRyeS5wb3NpdGlvbi5TdWIodGhpcy5nZW9tZXRyeS5oYWxmTGVuZ3RoZXMpLmRhdGE7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCLnByb3RvdHlwZS5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5wb3NpdGlvbiA9IHRoaXMudHJhbnNmb3JtLlBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuaGFsZkxlbmd0aGVzID0gdGhpcy5nZW9tZXRyeS5pbml0TGVuZ3RoZXMuTXVsdGlwbHlfVmVjMyh0aGlzLnRyYW5zZm9ybS5TY2FsZSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCLnByb3RvdHlwZS5Jc0hpdCA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBvdGhlci5Jc0hpdEJveF9BQUJCKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfQUFCQi5wcm90b3R5cGUuSXNIaXRCb3hfT0JCID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5Jc0hpdEJveF9PQkJCb3hfQUFCQih0aGlzLmdlb21ldHJ5LCBvdGhlci5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9BQUJCLnByb3RvdHlwZS5Jc0hpdFBvaW50ID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5Jc0hpdFBvaW50Qm94X0FBQkIob3RoZXIucG9zaXRpb24sIHRoaXMuZ2VvbWV0cnkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfQUFCQi5wcm90b3R5cGUuSXNIaXRTcGhlcmUgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gR2VvbWV0cnlIZWxwZXJfMS5kZWZhdWx0LklzSGl0U3BoZXJlQm94X0FBQkIob3RoZXIuZ2VvbWV0cnksIHRoaXMuZ2VvbWV0cnkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfQUFCQi5wcm90b3R5cGUuSXNIaXRCb3hfQUFCQiA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRCb3hfQUFCQih0aGlzLmdlb21ldHJ5LCBvdGhlci5nZW9tZXRyeSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfQUFCQjtcclxufSgpKTtcclxuO1xyXG52YXIgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9PQkIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQihhcmdfbGVuZ3RoLCBhcmdfd2Vha190cmFuc2Zvcm0pIHtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJveF9PQkJfMS5kZWZhdWx0KGFyZ19sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gYXJnX3dlYWtfdHJhbnNmb3JtO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuaW5pdExlbmd0aGVzID0gYXJnX2xlbmd0aC5EaXYoMik7XHJcbiAgICB9XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQi5wcm90b3R5cGUuSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQi5wcm90b3R5cGUuUHJlSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQi5wcm90b3R5cGUuR2V0TWF4UG9pbnRBbmRNaW5Qb2ludCA9IGZ1bmN0aW9uIChhcmdfb3V0cHV0TWF4LCBhcmdfb3V0cHV0TWluKSB7XHJcbiAgICAgICAgdmFyIGFhYmJfbGVndGhlcyA9IEdlb21ldHJ5SGVscGVyXzEuZGVmYXVsdC5HZXRCb3hfT0JCQ29udGFpbkFBQkJMZW5ndGgodGhpcy5nZW9tZXRyeSk7XHJcbiAgICAgICAgYXJnX291dHB1dE1heC5kYXRhID0gdGhpcy5nZW9tZXRyeS5wb3NpdGlvbi5BZGQoYWFiYl9sZWd0aGVzKS5kYXRhO1xyXG4gICAgICAgIGFyZ19vdXRwdXRNaW4uZGF0YSA9IHRoaXMuZ2VvbWV0cnkucG9zaXRpb24uU3ViKGFhYmJfbGVndGhlcykuZGF0YTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQi5wcm90b3R5cGUuVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkucG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybS5Qb3NpdGlvbjtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LmRpcmVjdHNbMF0gPSB0aGlzLnRyYW5zZm9ybS5HZXRSaWdodCgpO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuZGlyZWN0c1sxXSA9IHRoaXMudHJhbnNmb3JtLkdldFVwKCk7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5kaXJlY3RzWzJdID0gdGhpcy50cmFuc2Zvcm0uR2V0RnJvbnQoKTtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LmhhbGZMZW5ndGhlcyA9IHRoaXMuZ2VvbWV0cnkuaW5pdExlbmd0aGVzLk11bHRpcGx5X1ZlYzModGhpcy50cmFuc2Zvcm0uU2NhbGUpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfT0JCLnByb3RvdHlwZS5Jc0hpdCA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBvdGhlci5Jc0hpdEJveF9PQkIodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGlzaW9uUHJpbWl0aXZlX0JveF9PQkIucHJvdG90eXBlLklzSGl0Qm94X09CQiA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRCb3hfT0JCKG90aGVyLmdlb21ldHJ5LCB0aGlzLmdlb21ldHJ5KTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQi5wcm90b3R5cGUuSXNIaXRQb2ludCA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRQb2ludEJveF9PQkIob3RoZXIucG9zaXRpb24sIHRoaXMuZ2VvbWV0cnkpO1xyXG4gICAgfTtcclxuICAgIENvbGxpc2lvblByaW1pdGl2ZV9Cb3hfT0JCLnByb3RvdHlwZS5Jc0hpdFNwaGVyZSA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRTcGhlcmVCb3hfT0JCKG90aGVyLmdlb21ldHJ5LCB0aGlzLmdlb21ldHJ5KTtcclxuICAgIH07XHJcbiAgICBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQi5wcm90b3R5cGUuSXNIaXRCb3hfQUFCQiA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiBHZW9tZXRyeUhlbHBlcl8xLmRlZmF1bHQuSXNIaXRCb3hfT0JCQm94X0FBQkIob3RoZXIuZ2VvbWV0cnksIHRoaXMuZ2VvbWV0cnkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb2xsaXNpb25QcmltaXRpdmVfQm94X09CQjtcclxufSgpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFZlY3RvcjRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTWF0aC9WZWN0b3I0XCIpKTtcclxudmFyIENvbG9yQ29udHJvbGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbG9yQ29udHJvbGxlcigpIHtcclxuICAgIH1cclxuICAgIENvbG9yQ29udHJvbGxlci5oc3ZhID0gZnVuY3Rpb24gKGgsIHMsIHYsIGEpIHtcclxuICAgICAgICBpZiAocyA+IDEgfHwgdiA+IDEgfHwgYSA+IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdGggPSBoICUgMzYwO1xyXG4gICAgICAgIHZhciBpID0gTWF0aC5mbG9vcih0aCAvIDYwKTtcclxuICAgICAgICB2YXIgZiA9IHRoIC8gNjAgLSBpO1xyXG4gICAgICAgIHZhciBtID0gdiAqICgxIC0gcyk7XHJcbiAgICAgICAgdmFyIG4gPSB2ICogKDEgLSBzICogZik7XHJcbiAgICAgICAgdmFyIGsgPSB2ICogKDEgLSBzICogKDEgLSBmKSk7XHJcbiAgICAgICAgdmFyIGNvbG9yO1xyXG4gICAgICAgIGlmICghKHMgPiAwKSAmJiAhKHMgPCAwKSkge1xyXG4gICAgICAgICAgICBjb2xvciA9IG5ldyBWZWN0b3I0XzEuZGVmYXVsdCh2LCB2LCB2LCBhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByID0gbmV3IEFycmF5KHYsIG4sIG0sIG0sIGssIHYpO1xyXG4gICAgICAgICAgICB2YXIgZyA9IG5ldyBBcnJheShrLCB2LCB2LCBuLCBtLCBtKTtcclxuICAgICAgICAgICAgdmFyIGIgPSBuZXcgQXJyYXkobSwgbSwgaywgdiwgdiwgbik7XHJcbiAgICAgICAgICAgIGNvbG9yID0gbmV3IFZlY3RvcjRfMS5kZWZhdWx0KHJbaV0sIGdbaV0sIGJbaV0sIGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbG9yQ29udHJvbGxlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ29sb3JDb250cm9sbGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgRmlsZUxvYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZpbGVMb2FkZXIoKSB7XHJcbiAgICB9XHJcbiAgICBGaWxlTG9hZGVyLkxvYWRUZXh0ID0gZnVuY3Rpb24gKGFyZ19maWxlUGF0aCwgaXNBc3luY2gpIHtcclxuICAgICAgICB2YXIgeG1sSHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIGlmIChpc0FzeW5jaClcclxuICAgICAgICAgICAgeG1sSHR0cC5vcGVuKFwiR0VUXCIsIGFyZ19maWxlUGF0aCwgaXNBc3luY2gpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB4bWxIdHRwLm9wZW4oXCJHRVRcIiwgYXJnX2ZpbGVQYXRoLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHhtbEh0dHAuc2VuZChudWxsKTtcclxuICAgICAgICB2YXIgZGF0YSA9IHhtbEh0dHAucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfTtcclxuICAgIEZpbGVMb2FkZXIuTG9hZEJpbiA9IGZ1bmN0aW9uIChhcmdfZmlsZVBhdGgsIGFyZ19vdXQpIHtcclxuICAgICAgICB2YXIgeG1sSHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhtbEh0dHAub3BlbihcIkdFVFwiLCBhcmdfZmlsZVBhdGgsIHRydWUpO1xyXG4gICAgICAgIHhtbEh0dHAucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xyXG4gICAgICAgIHhtbEh0dHAub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBPbkJpbkxvYWQoYXJnX291dCwgeG1sSHR0cC5yZXNwb25zZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4bWxIdHRwLnNlbmQobnVsbCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEZpbGVMb2FkZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEZpbGVMb2FkZXI7XHJcbmZ1bmN0aW9uIE9uQmluTG9hZChhcmdfb3V0LCBhcmdfYXJ5QnVmZmVyKSB7XHJcbiAgICBhcmdfb3V0LmJ1ZmZlciA9IGFyZ19hcnlCdWZmZXI7XHJcbiAgICBhcmdfb3V0LkluaXRpYWxpemUoKTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ29sb3JDb250cm9sbGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ29sb3JDb250cm9sbGVyXCIpKTtcclxudmFyIEdlb21ldHJ5R2VuZXJhdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2VvbWV0cnlHZW5lcmF0ZXIoKSB7XHJcbiAgICB9XHJcbiAgICBHZW9tZXRyeUdlbmVyYXRlci5DcmVhdGVUb3J1cyA9IGZ1bmN0aW9uIChyb3csIGNvbHVtbiwgaXJhZCwgb3JhZCwgY29sb3IpIHtcclxuICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KCksIG5vciA9IG5ldyBBcnJheSgpLCBjb2wgPSBuZXcgQXJyYXkoKSwgc3QgPSBuZXcgQXJyYXkoKSwgaWR4ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gcm93OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHIgPSBNYXRoLlBJICogMiAvIHJvdyAqIGk7XHJcbiAgICAgICAgICAgIHZhciByciA9IE1hdGguY29zKHIpO1xyXG4gICAgICAgICAgICB2YXIgcnkgPSBNYXRoLnNpbihyKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8PSBjb2x1bW47IGlpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ciA9IE1hdGguUEkgKiAyIC8gY29sdW1uICogaWk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHggPSAocnIgKiBpcmFkICsgb3JhZCkgKiBNYXRoLmNvcyh0cik7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHkgPSByeSAqIGlyYWQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHogPSAocnIgKiBpcmFkICsgb3JhZCkgKiBNYXRoLnNpbih0cik7XHJcbiAgICAgICAgICAgICAgICB2YXIgcnggPSByciAqIE1hdGguY29zKHRyKTtcclxuICAgICAgICAgICAgICAgIHZhciByeiA9IHJyICogTWF0aC5zaW4odHIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRjO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGMgPSBjb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRjID0gQ29sb3JDb250cm9sbGVyXzEuZGVmYXVsdC5oc3ZhKDM2MCAvIGNvbHVtbiAqIGlpLCAxLCAxLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBycyA9IDEgLyBjb2x1bW4gKiBpaTtcclxuICAgICAgICAgICAgICAgIHZhciBydCA9IDEgLyByb3cgKiBpICsgMC41O1xyXG4gICAgICAgICAgICAgICAgaWYgKHJ0ID4gMS4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnQgLT0gMS4wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcnQgPSAxLjAgLSBydDtcclxuICAgICAgICAgICAgICAgIHBvcy5wdXNoKHR4LCB0eSwgdHopO1xyXG4gICAgICAgICAgICAgICAgbm9yLnB1c2gocngsIHJ5LCByeik7XHJcbiAgICAgICAgICAgICAgICBjb2wucHVzaCh0Yy54LCB0Yy55LCB0Yy56LCB0Yy53KTtcclxuICAgICAgICAgICAgICAgIHN0LnB1c2gocnMsIHJ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcm93OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChpaSA9IDA7IGlpIDwgY29sdW1uOyBpaSsrKSB7XHJcbiAgICAgICAgICAgICAgICByID0gKGNvbHVtbiArIDEpICogaSArIGlpO1xyXG4gICAgICAgICAgICAgICAgaWR4LnB1c2gociwgciArIGNvbHVtbiArIDEsIHIgKyAxKTtcclxuICAgICAgICAgICAgICAgIGlkeC5wdXNoKHIgKyBjb2x1bW4gKyAxLCByICsgY29sdW1uICsgMiwgciArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvdXRwdXQgPSB7IHA6IHBvcywgbjogbm9yLCBjOiBjb2wsIHV2OiBzdCwgaTogaWR4IH07XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUdlbmVyYXRlci5DcmVhdGVTcGhlcmUgPSBmdW5jdGlvbiAocm93LCBjb2x1bW4sIHJhZCwgY29sb3IpIHtcclxuICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KCksIG5vciA9IG5ldyBBcnJheSgpLCBjb2wgPSBuZXcgQXJyYXkoKSwgc3QgPSBuZXcgQXJyYXkoKSwgaWR4ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gcm93OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHIgPSBNYXRoLlBJIC8gcm93ICogaTtcclxuICAgICAgICAgICAgdmFyIHJ5ID0gTWF0aC5jb3Mocik7XHJcbiAgICAgICAgICAgIHZhciByciA9IE1hdGguc2luKHIpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDw9IGNvbHVtbjsgaWkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyID0gTWF0aC5QSSAqIDIgLyBjb2x1bW4gKiBpaTtcclxuICAgICAgICAgICAgICAgIHZhciB0eCA9IHJyICogcmFkICogTWF0aC5jb3ModHIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHR5ID0gcnkgKiByYWQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHogPSByciAqIHJhZCAqIE1hdGguc2luKHRyKTtcclxuICAgICAgICAgICAgICAgIHZhciByeCA9IHJyICogTWF0aC5jb3ModHIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJ6ID0gcnIgKiBNYXRoLnNpbih0cik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGMgPSBjb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRjID0gQ29sb3JDb250cm9sbGVyXzEuZGVmYXVsdC5oc3ZhKDM2MCAvIHJvdyAqIGksIDEsIDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcG9zLnB1c2godHgsIHR5LCB0eik7XHJcbiAgICAgICAgICAgICAgICBub3IucHVzaChyeCwgcnksIHJ6KTtcclxuICAgICAgICAgICAgICAgIGNvbC5wdXNoKHRjWzBdLCB0Y1sxXSwgdGNbMl0sIHRjWzNdKTtcclxuICAgICAgICAgICAgICAgIHN0LnB1c2goMSAtIDEgLyBjb2x1bW4gKiBpaSwgMSAvIHJvdyAqIGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHIgPSAwO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByb3c7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGlpID0gMDsgaWkgPCBjb2x1bW47IGlpKyspIHtcclxuICAgICAgICAgICAgICAgIHIgPSAoY29sdW1uICsgMSkgKiBpICsgaWk7XHJcbiAgICAgICAgICAgICAgICBpZHgucHVzaChyLCByICsgMSwgciArIGNvbHVtbiArIDIpO1xyXG4gICAgICAgICAgICAgICAgaWR4LnB1c2gociwgciArIGNvbHVtbiArIDIsIHIgKyBjb2x1bW4gKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBwOiBwb3MsIG46IG5vciwgYzogY29sLCB1djogc3QsIGk6IGlkeCB9O1xyXG4gICAgfTtcclxuICAgIEdlb21ldHJ5R2VuZXJhdGVyLkNyZWF0ZUN1YmUgPSBmdW5jdGlvbiAoc2lkZSwgY29sb3IpIHtcclxuICAgICAgICB2YXIgaHMgPSBzaWRlICogMC41O1xyXG4gICAgICAgIHZhciBwb3MgPSBbXHJcbiAgICAgICAgICAgIC1ocywgLWhzLCBocywgaHMsIC1ocywgaHMsIGhzLCBocywgaHMsIC1ocywgaHMsIGhzLFxyXG4gICAgICAgICAgICAtaHMsIC1ocywgLWhzLCAtaHMsIGhzLCAtaHMsIGhzLCBocywgLWhzLCBocywgLWhzLCAtaHMsXHJcbiAgICAgICAgICAgIC1ocywgaHMsIC1ocywgLWhzLCBocywgaHMsIGhzLCBocywgaHMsIGhzLCBocywgLWhzLFxyXG4gICAgICAgICAgICAtaHMsIC1ocywgLWhzLCBocywgLWhzLCAtaHMsIGhzLCAtaHMsIGhzLCAtaHMsIC1ocywgaHMsXHJcbiAgICAgICAgICAgIGhzLCAtaHMsIC1ocywgaHMsIGhzLCAtaHMsIGhzLCBocywgaHMsIGhzLCAtaHMsIGhzLFxyXG4gICAgICAgICAgICAtaHMsIC1ocywgLWhzLCAtaHMsIC1ocywgaHMsIC1ocywgaHMsIGhzLCAtaHMsIGhzLCAtaHNcclxuICAgICAgICBdO1xyXG4gICAgICAgIHZhciBub3IgPSBbXHJcbiAgICAgICAgICAgIC0xLjAsIC0xLjAsIDEuMCwgMS4wLCAtMS4wLCAxLjAsIDEuMCwgMS4wLCAxLjAsIC0xLjAsIDEuMCwgMS4wLFxyXG4gICAgICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLCAtMS4wLCAxLjAsIC0xLjAsIDEuMCwgMS4wLCAtMS4wLCAxLjAsIC0xLjAsIC0xLjAsXHJcbiAgICAgICAgICAgIC0xLjAsIDEuMCwgLTEuMCwgLTEuMCwgMS4wLCAxLjAsIDEuMCwgMS4wLCAxLjAsIDEuMCwgMS4wLCAtMS4wLFxyXG4gICAgICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLCAxLjAsIC0xLjAsIC0xLjAsIDEuMCwgLTEuMCwgMS4wLCAtMS4wLCAtMS4wLCAxLjAsXHJcbiAgICAgICAgICAgIDEuMCwgLTEuMCwgLTEuMCwgMS4wLCAxLjAsIC0xLjAsIDEuMCwgMS4wLCAxLjAsIDEuMCwgLTEuMCwgMS4wLFxyXG4gICAgICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLCAtMS4wLCAtMS4wLCAxLjAsIC0xLjAsIDEuMCwgMS4wLCAtMS4wLCAxLjAsIC0xLjBcclxuICAgICAgICBdO1xyXG4gICAgICAgIHZhciBjb2wgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvcy5sZW5ndGggLyAzOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGMgPSBjb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRjID0gQ29sb3JDb250cm9sbGVyXzEuZGVmYXVsdC5oc3ZhKDM2MCAvIHBvcy5sZW5ndGggLyAzICogaSwgMSwgMSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29sLnB1c2godGMueCwgdGMueSwgdGMueiwgdGMudyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdCA9IFtcclxuICAgICAgICAgICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXHJcbiAgICAgICAgICAgIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLFxyXG4gICAgICAgICAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCxcclxuICAgICAgICAgICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXHJcbiAgICAgICAgICAgIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLFxyXG4gICAgICAgICAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdmFyIGlkeCA9IFtcclxuICAgICAgICAgICAgMCwgMSwgMiwgMCwgMiwgMyxcclxuICAgICAgICAgICAgNCwgNSwgNiwgNCwgNiwgNyxcclxuICAgICAgICAgICAgOCwgOSwgMTAsIDgsIDEwLCAxMSxcclxuICAgICAgICAgICAgMTIsIDEzLCAxNCwgMTIsIDE0LCAxNSxcclxuICAgICAgICAgICAgMTYsIDE3LCAxOCwgMTYsIDE4LCAxOSxcclxuICAgICAgICAgICAgMjAsIDIxLCAyMiwgMjAsIDIyLCAyM1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIHsgcDogcG9zLCBuOiBub3IsIGM6IGNvbCwgdXY6IHN0LCBpOiBpZHggfTtcclxuICAgIH07XHJcbiAgICBHZW9tZXRyeUdlbmVyYXRlci5DcmVhdGVQbGFuZSA9IGZ1bmN0aW9uIChhcmdfc2l6ZSwgYXJnX2NvbG9yKSB7XHJcbiAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHZhciBub3IgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB2YXIgY29sID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdmFyIGlkeCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHBvcyA9IFtcclxuICAgICAgICAgICAgLWFyZ19zaXplLngsIGFyZ19zaXplLnksIDAuMCxcclxuICAgICAgICAgICAgYXJnX3NpemUueCwgYXJnX3NpemUueSwgMC4wLFxyXG4gICAgICAgICAgICAtYXJnX3NpemUueCwgLWFyZ19zaXplLnksIDAuMCxcclxuICAgICAgICAgICAgYXJnX3NpemUueCwgLWFyZ19zaXplLnksIDAuMCxcclxuICAgICAgICBdO1xyXG4gICAgICAgIG5vciA9IFtcclxuICAgICAgICAgICAgMC4wLCAwLjAsIC0xLjAsXHJcbiAgICAgICAgICAgIDAuMCwgMC4wLCAtMS4wLFxyXG4gICAgICAgICAgICAwLjAsIDAuMCwgLTEuMCxcclxuICAgICAgICAgICAgMC4wLCAwLjAsIC0xLjAsXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb2wgPSBbXHJcbiAgICAgICAgICAgIGFyZ19jb2xvci54LCBhcmdfY29sb3IueSwgYXJnX2NvbG9yLnosIGFyZ19jb2xvci53LFxyXG4gICAgICAgICAgICBhcmdfY29sb3IueCwgYXJnX2NvbG9yLnksIGFyZ19jb2xvci56LCBhcmdfY29sb3IudyxcclxuICAgICAgICAgICAgYXJnX2NvbG9yLngsIGFyZ19jb2xvci55LCBhcmdfY29sb3IueiwgYXJnX2NvbG9yLncsXHJcbiAgICAgICAgICAgIGFyZ19jb2xvci54LCBhcmdfY29sb3IueSwgYXJnX2NvbG9yLnosIGFyZ19jb2xvci53LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgaWR4ID0gW1xyXG4gICAgICAgICAgICAyLCAzLCAxLFxyXG4gICAgICAgICAgICAyLCAxLCAwLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdXYgPSBbXHJcbiAgICAgICAgICAgIDAuMCwgMC4wLFxyXG4gICAgICAgICAgICAxLjAsIDAuMCxcclxuICAgICAgICAgICAgMC4wLCAxLjAsXHJcbiAgICAgICAgICAgIDEuMCwgMS4wXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4geyBwOiBwb3MsIG46IG5vciwgYzogY29sLCBpOiBpZHgsIHV2OiB1diB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHZW9tZXRyeUdlbmVyYXRlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gR2VvbWV0cnlHZW5lcmF0ZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL01hdGgvVmVjdG9yMlwiKSk7XHJcbnZhciBJbnB1dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIElucHV0KCkge1xyXG4gICAgfVxyXG4gICAgSW5wdXQuR2V0Q2FudmFzUG9zaXRpb24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMl8xLmRlZmF1bHQoZS5jbGllbnRYIC0gdGhpcy5jYW52YXMub2Zmc2V0TGVmdCAtIHRoaXMuY2FudmFzLndpZHRoICogMC41LCBlLmNsaWVudFkgLSB0aGlzLmNhbnZhcy5vZmZzZXRUb3AgLSB0aGlzLmNhbnZhcy5oZWlnaHQgKiAwLjUpO1xyXG4gICAgfTtcclxuICAgIElucHV0LkFkZENsaWNrRXZlbnQgPSBmdW5jdGlvbiAoYXJnX29iaiwgaXNVc2VFdmVudCkge1xyXG4gICAgICAgIHZhciBldmVudCA9IHsgb2JqOiBhcmdfb2JqLCBoYW5kbGVFdmVudDogT25DbGljayB9O1xyXG4gICAgICAgIGlmIChpc1VzZUV2ZW50KVxyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQsIGlzVXNlRXZlbnQpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSW5wdXQuQWRkTW91c2VEb3duRXZlbnQgPSBmdW5jdGlvbiAoYXJnX29iaiwgaXNVc2VFdmVudCkge1xyXG4gICAgICAgIHZhciBldmVudCA9IHsgb2JqOiBhcmdfb2JqLCBoYW5kbGVFdmVudDogT25Nb3VzZURvd24gfTtcclxuICAgICAgICBpZiAoaXNVc2VFdmVudClcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBldmVudCwgaXNVc2VFdmVudCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZXZlbnQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSW5wdXQuQWRkTW91c2VVcEV2ZW50ID0gZnVuY3Rpb24gKGFyZ19vYmosIGlzVXNlRXZlbnQpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSB7IG9iajogYXJnX29iaiwgaGFuZGxlRXZlbnQ6IE9uTW91c2VVcCB9O1xyXG4gICAgICAgIGlmIChpc1VzZUV2ZW50KVxyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBldmVudCwgaXNVc2VFdmVudCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIElucHV0LkFkZEtleVVwRXZlbnQgPSBmdW5jdGlvbiAoYXJnX29iaiwgaXNVc2VFdmVudCkge1xyXG4gICAgICAgIHZhciBldmVudCA9IHsgb2JqOiBhcmdfb2JqLCBoYW5kbGVFdmVudDogT25LZXlVcCB9O1xyXG4gICAgICAgIGlmIChpc1VzZUV2ZW50KVxyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZXZlbnQsIGlzVXNlRXZlbnQpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZXZlbnQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSW5wdXQuQWRkS2V5RG93bkV2ZW50ID0gZnVuY3Rpb24gKGFyZ19vYmosIGlzVXNlRXZlbnQpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSB7IG9iajogYXJnX29iaiwgaGFuZGxlRXZlbnQ6IE9uS2V5RG93biB9O1xyXG4gICAgICAgIGlmIChpc1VzZUV2ZW50KVxyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCwgaXNVc2VFdmVudCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIElucHV0LkFkZE1vdXNlTW92ZUV2ZW50ID0gZnVuY3Rpb24gKGFyZ19vYmosIGlzVXNlRXZlbnQpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSB7IG9iajogYXJnX29iaiwgaGFuZGxlRXZlbnQ6IE9uTW91c2VNb3ZlIH07XHJcbiAgICAgICAgaWYgKGlzVXNlRXZlbnQpXHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZXZlbnQsIGlzVXNlRXZlbnQpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIElucHV0LkFkZE1vdXNlV2hlZWxFdmVudCA9IGZ1bmN0aW9uIChhcmdfb2JqLCBpc1VzZUV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGV2ZW50ID0geyBvYmo6IGFyZ19vYmosIGhhbmRsZUV2ZW50OiBPbk1vdXNlV2hlZWwgfTtcclxuICAgICAgICBpZiAoaXNVc2VFdmVudClcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgZXZlbnQsIGlzVXNlRXZlbnQpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCBldmVudCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gSW5wdXQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IElucHV0O1xyXG5mdW5jdGlvbiBPbkNsaWNrKGUpIHtcclxuICAgIHRoaXMub2JqLk9uQ2xpY2soZSk7XHJcbn1cclxuZnVuY3Rpb24gT25LZXlEb3duKGUpIHtcclxuICAgIHRoaXMub2JqLk9uS2V5RG93bihlKTtcclxufVxyXG5mdW5jdGlvbiBPbktleVVwKGUpIHtcclxuICAgIHRoaXMub2JqLk9uS2V5VXAoZSk7XHJcbn1cclxuZnVuY3Rpb24gT25Nb3VzZVVwKGUpIHtcclxuICAgIHRoaXMub2JqLk9uTW91c2VVcChlKTtcclxufVxyXG5mdW5jdGlvbiBPbk1vdXNlRG93bihlKSB7XHJcbiAgICB0aGlzLm9iai5Pbk1vdXNlVXAoZSk7XHJcbn1cclxuZnVuY3Rpb24gT25Nb3VzZU1vdmUoZSkge1xyXG4gICAgdGhpcy5vYmouT25Nb3VzZU1vdmUoZSk7XHJcbn1cclxuZnVuY3Rpb24gT25Nb3VzZVdoZWVsKGUpIHtcclxuICAgIHRoaXMub2JqLk9uTW91c2VXaGVlbChlKTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVGV4dHVyZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9SZXNvdXJjZS9UZXh0dXJlXCIpKTtcclxudmFyIE1hdGVyaWFsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1Jlc291cmNlL01hdGVyaWFsXCIpKTtcclxudmFyIFNoYWRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9SZXNvdXJjZS9TaGFkZXJcIikpO1xyXG52YXIgR2VvbWV0cnlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vUmVzb3VyY2UvR2VvbWV0cnlcIikpO1xyXG52YXIgVmVjdG9yNF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9NYXRoL1ZlY3RvcjRcIikpO1xyXG52YXIgRnJhbWVCdWZmZXJUZXh0dXJlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1Jlc291cmNlL0ZyYW1lQnVmZmVyVGV4dHVyZVwiKSk7XHJcbnZhciBNZXNoXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1Jlc291cmNlL01lc2hcIikpO1xyXG52YXIgRmlsZUxvYWRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0ZpbGVMb2FkZXJcIikpO1xyXG52YXIgQmluYXJ5UmVhZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1Rvb2wvQmluYXJ5UmVhZGVyXCIpKTtcclxudmFyIFNvdW5kXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1Jlc291cmNlL1NvdW5kXCIpKTtcclxudmFyIFZlcnRleFR5cGU7XHJcbihmdW5jdGlvbiAoVmVydGV4VHlwZSkge1xyXG4gICAgVmVydGV4VHlwZVtWZXJ0ZXhUeXBlW1wiVmVydGV4X1VWXCJdID0gMF0gPSBcIlZlcnRleF9VVlwiO1xyXG4gICAgVmVydGV4VHlwZVtWZXJ0ZXhUeXBlW1wiVmVydGV4X05vcm1hbFwiXSA9IDFdID0gXCJWZXJ0ZXhfTm9ybWFsXCI7XHJcbiAgICBWZXJ0ZXhUeXBlW1ZlcnRleFR5cGVbXCJWZXJ0ZXhfVVZfTm9ybWFsXCJdID0gMl0gPSBcIlZlcnRleF9VVl9Ob3JtYWxcIjtcclxuICAgIFZlcnRleFR5cGVbVmVydGV4VHlwZVtcIlZlcnRleF9VVl9Ob3JtYWxfQ29sb3JcIl0gPSAzXSA9IFwiVmVydGV4X1VWX05vcm1hbF9Db2xvclwiO1xyXG4gICAgVmVydGV4VHlwZVtWZXJ0ZXhUeXBlW1wiVmVydGV4X01vZGVsX1NpbmdsZUJvbmVcIl0gPSA0XSA9IFwiVmVydGV4X01vZGVsX1NpbmdsZUJvbmVcIjtcclxuICAgIFZlcnRleFR5cGVbVmVydGV4VHlwZVtcIlZlcnRleF9Nb2RlbF9Eb3VibGVCb25lXCJdID0gNV0gPSBcIlZlcnRleF9Nb2RlbF9Eb3VibGVCb25lXCI7XHJcbiAgICBWZXJ0ZXhUeXBlW1ZlcnRleFR5cGVbXCJWZXJ0ZXhfTW9kZWxfUXVhZEJvbmVcIl0gPSA2XSA9IFwiVmVydGV4X01vZGVsX1F1YWRCb25lXCI7XHJcbiAgICBWZXJ0ZXhUeXBlW1ZlcnRleFR5cGVbXCJWZXJ0ZXhfTW9kZWxfU0RFRkJvbmVcIl0gPSA3XSA9IFwiVmVydGV4X01vZGVsX1NERUZCb25lXCI7XHJcbiAgICBWZXJ0ZXhUeXBlW1ZlcnRleFR5cGVbXCJWZXJ0ZXhfTW9kZWxfTWl4XCJdID0gOF0gPSBcIlZlcnRleF9Nb2RlbF9NaXhcIjtcclxufSkoVmVydGV4VHlwZSB8fCAoVmVydGV4VHlwZSA9IHt9KSk7XHJcbmZ1bmN0aW9uIEdldERpcmVjdG9yeShhcmdfcGF0aCkge1xyXG4gICAgdmFyIHNwbGl0ZWQgPSBhcmdfcGF0aC5zcGxpdChcIi9cIik7XHJcbiAgICB2YXIgb3V0cHV0ID0gXCJcIjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3BsaXRlZC5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICBvdXRwdXQgKz0gc3BsaXRlZFtpXSArIFwiL1wiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxufVxyXG52YXIgQjNNSG9sZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQjNNSG9sZGVyKCkge1xyXG4gICAgfVxyXG4gICAgQjNNSG9sZGVyLnByb3RvdHlwZS5Jbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBnZW9tZXRyeTtcclxuICAgICAgICB2YXIgYXJ5X21hdGVyaWFsID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5idWZmZXJSZWFkZXIgPSBuZXcgQmluYXJ5UmVhZGVyXzEuZGVmYXVsdCh0aGlzLmJ1ZmZlcik7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2hlZGVyVGVzdFxyXG4gICAgICAgICAgICB2YXIgaGVhZFN0ciA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldFN0cmluZygxNSk7XHJcbiAgICAgICAgICAgIGlmIChoZWFkU3RyICE9IFwiQnV0aTNETW9kZWxEYXRhXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vbW9kZWzjga7lkI3liY3jgarjgakgIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHZlcnNpb24gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAvLzDjgadzdGQ6OndzdHJpbmcgLDHjgadzdGQ6OnN0cmluZ1xyXG4gICAgICAgICAgICB2YXIgZW5jb2RlVHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgdmFyIHRleHRDb3VudCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgpO1xyXG4gICAgICAgICAgICAvL+WItuS9nOiAheOBruWQjeWJjeOBruiqreOBv+i+vOOBv1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmFtZVN0cjtcclxuICAgICAgICAgICAgICAgIGlmIChlbmNvZGVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVN0ciA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldFN0cmluZyh0ZXh0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVN0ciA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldFdTdHJpbmcodGV4dENvdW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+WItuS9nOiAheOBruWQjeWJjeOBruiqreOBv+i+vOOBvyhlbmcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHRDb3VudCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWVTdHI7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW5jb2RlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVTdHIgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRTdHJpbmcodGV4dENvdW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVTdHIgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRXU3RyaW5nKHRleHRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/jg6Ljg4fjg6vlkI1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dENvdW50ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmFtZVdTdHI7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW5jb2RlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVXU3RyID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0U3RyaW5nKHRleHRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lV1N0ciA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldFdTdHJpbmcodGV4dENvdW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+ODouODh+ODq+WQjeiLsVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0Q291bnQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBuYW1lV1N0cjtcclxuICAgICAgICAgICAgICAgIGlmIChlbmNvZGVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVdTdHIgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRTdHJpbmcodGV4dENvdW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVXU3RyID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0V1N0cmluZyh0ZXh0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v44Kz44Oh44Oz44OIXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHRDb3VudCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWVXU3RyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuY29kZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lV1N0ciA9ICh0aGlzLmJ1ZmZlclJlYWRlci5HZXRTdHJpbmcodGV4dENvdW50KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lV1N0ciA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldFdTdHJpbmcodGV4dENvdW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+OCs+ODoeODs+ODiOiLsVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0Q291bnQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBuYW1lV1N0cjtcclxuICAgICAgICAgICAgICAgIGlmIChlbmNvZGVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVdTdHIgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRTdHJpbmcodGV4dENvdW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVXU3RyID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0V1N0cmluZyh0ZXh0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6aCC54K544Kk44Oz44OH44OD44Kv44K544Gu44OQ44Kk44OI5pWwXHJcbiAgICAgICAgdmFyIHZlcnRleEluZGV4Qnl0ZVNpemUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgLy/jg57jg4bjg6rjgqLjg6vjgqTjg7Pjg4fjg4Pjgq/jgrnjga7jg5DjgqTjg4jmlbBcclxuICAgICAgICB2YXIgbWF0ZXJpYWxJbmRleEJ5dGVTaXplID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgIC8v44Oc44O844Oz44Kk44Oz44OH44OD44Kv44K544Gu44OQ44Kk44OI5pWwXHJcbiAgICAgICAgdmFyIGJvbmVJbmRleEJ5dGVDb3VudCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAvL+ODouODvOODleOCpOODs+ODh+ODg+OCr+OCueOBruODkOOCpOODiOaVsFxyXG4gICAgICAgIHZhciBtb3JwaEluZGV4Qnl0ZVNpemUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgLy/poILngrnmp4vpgKDkvZPjga7liJfmjJnlnotcclxuICAgICAgICB2YXIgdHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICB2YXIgdXZFeENvdW50ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgIHZhciB2ZXJ0ZXhDb3VudCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldFVJbnQodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfVVZfTm9ybWFsOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodXZFeENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMSA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzIgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMSA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzIgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8zID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMy5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzMgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl80ID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMy5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzQucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9TaW5nbGVCb25lOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodXZFeENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMSA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMSA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzIgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8zID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMy5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMSA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzIgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8zID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfNCA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzMucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl80LnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX0RvdWJsZUJvbmU6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh1dkV4Q291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMSA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMSA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzIgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzMgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzMucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMSA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzIgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8zID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfNCA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMy5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzQucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9RdWFkQm9uZTpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHV2RXhDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXg0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gLXRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gLXRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQ0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXg0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0M1tpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLlJlYWRJbmRleCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IFJlc291cmNlQ3JlYXRlci5DcmVhdGVHZW9tZXRyeSh7IHA6IHBvcywgbjogbm9ybWFsLCB1djogdXYsIGk6IGlkeCB9LCB0cnVlLCB0cnVlLCBmYWxzZSwgdGhpcy5ncmFwaGljRGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1diA9IG5ldyBBcnJheSgyICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzEgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8yID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMyA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXg0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDMgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXhUeXBlID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8zLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzMgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl80ID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQ0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzMucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl80LnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1NERUZCb25lOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwic2RlZiBpcyBub3Qgc3VwcG9ydC5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9NaXg6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh1dkV4Q291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2ZXJ0ZXhUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1NpbmdsZUJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyLnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzLnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0LnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0LnB1c2goMS4wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDIucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDMucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDQucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX0RvdWJsZUJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ZWlnaHQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0LnB1c2god2VpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4My5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NC5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDIucHVzaCgxLjAgLSB3ZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0My5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NC5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfUXVhZEJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfU0RFRkJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcInNkZWYgaXMgbm90IHN1cHBvcnRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQ0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmVydGV4VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9TaW5nbGVCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDIucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDMucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDQucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQucHVzaCgxLjApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0Mi5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0My5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NC5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfRG91YmxlQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ZWlnaHQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0LnB1c2god2VpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4My5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NC5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDIucHVzaCgxLjAgLSB3ZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0My5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NC5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfUXVhZEJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1NERUZCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJzZGVmIGlzIG5vdCBzdXBwb3J0ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV2ID0gbmV3IEFycmF5KDIgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMSA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzIgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2ZXJ0ZXhUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1NpbmdsZUJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDIucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDMucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDQucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQucHVzaCgxLjApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0Mi5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0My5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NC5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfRG91YmxlQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2VpZ2h0ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodC5wdXNoKHdlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDMucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDQucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQyLnB1c2goMS4wIC0gd2VpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDMucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDQucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1F1YWRCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfU0RFRkJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcInNkZWYgaXMgbm90IHN1cHBvcnRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzMgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsID0gbmV3IEFycmF5KDMgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4NCA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MiA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQzID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVydGV4VHlwZSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2ZXJ0ZXhUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1NpbmdsZUJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8zLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyLnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzLnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXg0LnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0LnB1c2goMS4wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDIucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDMucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDQucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX0RvdWJsZUJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8zLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ZWlnaHQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0LnB1c2god2VpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4My5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NC5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDIucHVzaCgxLjAgLSB3ZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0My5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NC5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfUXVhZEJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8zLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDNbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQ0W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfU0RFRkJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcInNkZWYgaXMgbm90IHN1cHBvcnRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5SZWFkSW5kZXgodmVydGV4SW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkoeyBwOiBwb3MsIG46IG5vcm1hbCwgdXY6IHV2LCBpOiBpZHggfSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRoaXMuZ3JhcGhpY0RldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgQXJyYXkoMyAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXYgPSBuZXcgQXJyYXkoMiAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl8xID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dXZfMiA9IG5ldyBBcnJheSg0ICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHV2XzMgPSBuZXcgQXJyYXkoNCAqIHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh1dl80ID0gbmV3IEFycmF5KDQgKiB2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyBBcnJheSgzICogdmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXggPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lSW5kZXgyID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZUluZGV4MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVJbmRleDQgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9uZVdlaWdodDIgPSBuZXcgQXJyYXkodmVydGV4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib25lV2VpZ2h0MyA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmVXZWlnaHQ0ID0gbmV3IEFycmF5KHZlcnRleENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRleFR5cGUgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmVydGV4VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlZlcnRleF9Nb2RlbF9TaW5nbGVCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzEucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8yLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMy5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzQucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDJdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4W2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDIucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDMucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDQucHVzaCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQucHVzaCgxLjApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0Mi5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0My5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NC5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfRG91YmxlQm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMF0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8xLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMi5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzMucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl80LnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAyXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgyW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ZWlnaHQgPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0LnB1c2god2VpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4My5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4NC5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDIucHVzaCgxLjAgLSB3ZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0My5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NC5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5WZXJ0ZXhfTW9kZWxfUXVhZEJvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1tpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dltpICogMiArIDBdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfMS5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHV2XzIucHVzaCh0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpLCB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh1dl8zLnB1c2godGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSwgdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dXZfNC5wdXNoKHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCksIHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyAwXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIDFdID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgMl0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4MltpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lSW5kZXgzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleDRbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRJbnQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZVdlaWdodDJbaV0gPSB0aGlzLmJ1ZmZlclJlYWRlci5HZXRGbG9hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVXZWlnaHQzW2ldID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0RmxvYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lV2VpZ2h0NFtpXSA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuVmVydGV4X01vZGVsX1NERUZCb25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJzZGVmIGlzIG5vdCBzdXBwb3J0ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuUmVhZEluZGV4KHZlcnRleEluZGV4Qnl0ZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZUdlb21ldHJ5KHsgcDogcG9zLCBuOiBub3JtYWwsIHV2OiB1diwgaTogaWR4IH0sIHRydWUsIHRydWUsIGZhbHNlLCB0aGlzLmdyYXBoaWNEZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbWF0ZXJpYWxDb3VudDtcclxuICAgICAgICBtYXRlcmlhbENvdW50ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KG1hdGVyaWFsSW5kZXhCeXRlU2l6ZSk7XHJcbiAgICAgICAgdmFyIHN1YnNldCA9IG5ldyBBcnJheShtYXRlcmlhbENvdW50KTtcclxuICAgICAgICB2YXIgZGlyID0gR2V0RGlyZWN0b3J5KHRoaXMuZmlsZVBhdGgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0ZXJpYWxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBmaWxlTmFtZUNvdW50ID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KCk7XHJcbiAgICAgICAgICAgIGlmIChlbmNvZGVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0ZXJpYWxGaWxlUGF0aCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldFN0cmluZyhmaWxlTmFtZUNvdW50KTtcclxuICAgICAgICAgICAgICAgIGFyeV9tYXRlcmlhbC5wdXNoKFJlc291cmNlQ3JlYXRlci5DcmVhdGVNYXRlcmlhbEZyb21GaWxlKGRpciArIG1hdGVyaWFsRmlsZVBhdGgsIHRoaXMuY29udGFpbmVyLCB0aGlzLmdyYXBoaWNEZXZpY2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXRlcmlhbEZpbGVQYXRoID0gdGhpcy5idWZmZXJSZWFkZXIuR2V0V1N0cmluZyhmaWxlTmFtZUNvdW50KTtcclxuICAgICAgICAgICAgICAgIGFyeV9tYXRlcmlhbC5wdXNoKFJlc291cmNlQ3JlYXRlci5DcmVhdGVNYXRlcmlhbEZyb21GaWxlKGRpciArIG1hdGVyaWFsRmlsZVBhdGgsIHRoaXMuY29udGFpbmVyLCB0aGlzLmdyYXBoaWNEZXZpY2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdWJzZXRbaV0gPSAodGhpcy5idWZmZXJSZWFkZXIuR2V0SW50KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZW9tZXRyeS5TZXRTdWJzZXQoc3Vic2V0KTtcclxuICAgICAgICB0aGlzLm1lc2guU2V0UGFyYW1ldGVyKGdlb21ldHJ5LCBhcnlfbWF0ZXJpYWwpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLkxvYWRFbmQoKTtcclxuICAgIH07XHJcbiAgICBCM01Ib2xkZXIucHJvdG90eXBlLlJlYWRJbmRleCA9IGZ1bmN0aW9uICh2ZXJ0ZXhJbmRleEJ5dGVTaXplKSB7XHJcbiAgICAgICAgLy/jgqTjg7Pjg4fjg4Pjgq/jgrnjga7oqq3jgb/ovrzjgb9cclxuICAgICAgICB2YXIgaW5kZXhDb3VudCA9IHRoaXMuYnVmZmVyUmVhZGVyLkdldEludCgpO1xyXG4gICAgICAgIHZhciBpZHggPSBuZXcgQXJyYXkoaW5kZXhDb3VudCAqIDMpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5kZXhDb3VudCAqIDM7IGkrKykge1xyXG4gICAgICAgICAgICBpZHhbaV0gPSAodGhpcy5idWZmZXJSZWFkZXIuR2V0VUludCh2ZXJ0ZXhJbmRleEJ5dGVTaXplKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpZHg7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEIzTUhvbGRlcjtcclxufSgpKTtcclxudmFyIE1hdGVyaWFsQmluTG9hZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWF0ZXJpYWxCaW5Mb2FkZXIoKSB7XHJcbiAgICB9XHJcbiAgICBNYXRlcmlhbEJpbkxvYWRlci5wcm90b3R5cGUuSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWF0O1xyXG4gICAgICAgIHZhciBtYXRlcmlhbFJlYWRlciA9IG5ldyBCaW5hcnlSZWFkZXJfMS5kZWZhdWx0KHRoaXMuYnVmZmVyKTtcclxuICAgICAgICB2YXIgbWFnaWMgPSBtYXRlcmlhbFJlYWRlci5HZXRTdHJpbmcoMTYpO1xyXG4gICAgICAgIGlmIChtYWdpYyAhPSBcIkJ1dGlNYXRlcmlhbERhdGFcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuODleOCoeOCpOODq+OBjOmBleOBhOOBvuOBmVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdmVyc2lvbiA9IG1hdGVyaWFsUmVhZGVyLkdldEZsb2F0KCk7XHJcbiAgICAgICAgLy8w44Gnc3RkOjp3c3RyaW5nICwx44Gnc3RkOjpzdHJpbmdcclxuICAgICAgICB2YXIgZW5jb2RlVHlwZSA9IG1hdGVyaWFsUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBtYXRlcmlhbE5hbWVDb3VudCA9IG1hdGVyaWFsUmVhZGVyLkdldEludCgpO1xyXG4gICAgICAgICAgICBpZiAoZW5jb2RlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxSZWFkZXIuR2V0U3RyaW5nKG1hdGVyaWFsTmFtZUNvdW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsUmVhZGVyLkdldFdTdHJpbmcobWF0ZXJpYWxOYW1lQ291bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v44Oe44OG44Oq44Ki44Or5ZCN6IuxXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgbWF0ZXJpYWxOYW1lQ291bnQgPSBtYXRlcmlhbFJlYWRlci5HZXRJbnQoKTtcclxuICAgICAgICAgICAgaWYgKGVuY29kZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsUmVhZGVyLkdldFN0cmluZyhtYXRlcmlhbE5hbWVDb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbFJlYWRlci5HZXRXU3RyaW5nKG1hdGVyaWFsTmFtZUNvdW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+ODhuOCr+OCueODgeODo1xyXG4gICAgICAgIHZhciB0ZXh0dXJlQ291bnQgPSBtYXRlcmlhbFJlYWRlci5HZXRDaGFyKCk7XHJcbiAgICAgICAgdmFyIGFyeV90ZXh0dXJlID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdmFyIGRpciA9IEdldERpcmVjdG9yeSh0aGlzLmZpbGVQYXRoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHR1cmVDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXhOYW1lQ291bnQgPSBtYXRlcmlhbFJlYWRlci5HZXRJbnQoKTtcclxuICAgICAgICAgICAgaWYgKHRleE5hbWVDb3VudCA8IDApIHtcclxuICAgICAgICAgICAgICAgIGFyeV90ZXh0dXJlLnB1c2godGhpcy5jb250YWluZXIuQWRkVGV4dHVyZUZyb21GaWxlKFwiXCIsIHRoaXMuZ3JhcGhpY0RldmljZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGVuY29kZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0dXJlTmFtZSA9IG1hdGVyaWFsUmVhZGVyLkdldFN0cmluZyh0ZXhOYW1lQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgYXJ5X3RleHR1cmUucHVzaCh0aGlzLmNvbnRhaW5lci5BZGRUZXh0dXJlRnJvbUZpbGUoZGlyICsgXCIuLi9cIiArIHRleHR1cmVOYW1lLCB0aGlzLmdyYXBoaWNEZXZpY2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0dXJlTmFtZSA9IG1hdGVyaWFsUmVhZGVyLkdldFdTdHJpbmcodGV4TmFtZUNvdW50KTtcclxuICAgICAgICAgICAgICAgIGFyeV90ZXh0dXJlLnB1c2godGhpcy5jb250YWluZXIuQWRkVGV4dHVyZUZyb21GaWxlKGRpciArIFwiLi4vXCIgKyB0ZXh0dXJlTmFtZSwgdGhpcy5ncmFwaGljRGV2aWNlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/jg57jg4bjg6rjgqLjg6tcclxuICAgICAgICB2YXIgZGlmZnVzZSA9IG5ldyBWZWN0b3I0XzEuZGVmYXVsdChtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpLCBtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpLCBtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpLCBtYXRlcmlhbFJlYWRlci5HZXRGbG9hdCgpKTtcclxuICAgICAgICB2YXIgc3BlY3VsYXIgPSBuZXcgVmVjdG9yNF8xLmRlZmF1bHQobWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKSwgbWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKSwgbWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKSwgbWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgdmFyIGFtYmllbnQgPSBuZXcgVmVjdG9yNF8xLmRlZmF1bHQobWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKSwgbWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKSwgbWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKSwgbWF0ZXJpYWxSZWFkZXIuR2V0RmxvYXQoKSk7XHJcbiAgICAgICAgdmFyIGVtaXNzaXZlID0gbmV3IFZlY3RvcjRfMS5kZWZhdWx0KG1hdGVyaWFsUmVhZGVyLkdldEZsb2F0KCksIG1hdGVyaWFsUmVhZGVyLkdldEZsb2F0KCksIG1hdGVyaWFsUmVhZGVyLkdldEZsb2F0KCksIG1hdGVyaWFsUmVhZGVyLkdldEZsb2F0KCkpO1xyXG4gICAgICAgIHZhciBieXRlRmxhZyA9IG1hdGVyaWFsUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICB2YXIgc3BoZXJlRmxhZyA9IG1hdGVyaWFsUmVhZGVyLkdldENoYXIoKTtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBtYXRlcmlhbE5hbWVDb3VudCA9IG1hdGVyaWFsUmVhZGVyLkdldEludCgpO1xyXG4gICAgICAgICAgICBpZiAoZW5jb2RlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxSZWFkZXIuR2V0U3RyaW5nKG1hdGVyaWFsTmFtZUNvdW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsUmVhZGVyLkdldFdTdHJpbmcobWF0ZXJpYWxOYW1lQ291bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwuU2V0UGFyYW1ldGVyKGFtYmllbnQsIHRoaXMuZ3JhcGhpY0RldmljZSwgYXJ5X3RleHR1cmUpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLkxvYWRFbmQoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTWF0ZXJpYWxCaW5Mb2FkZXI7XHJcbn0oKSk7XHJcbnZhciBSZXNvdXJjZUNyZWF0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZXNvdXJjZUNyZWF0ZXIoKSB7XHJcbiAgICB9XHJcbiAgICBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlR2VvbWV0cnkgPSBmdW5jdGlvbiAoZGF0YSwgaXNVViwgaXNOb3JtYWwsIGlzQ29sb3IsIGFyZ19kZXZpY2UpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdlb21ldHJ5XzEuZGVmYXVsdChkYXRhLCBpc1VWLCBpc05vcm1hbCwgaXNDb2xvciwgYXJnX2RldmljZSk7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZU1hdGVyaWFsID0gZnVuY3Rpb24gKGFyZ19hbWJpZW50LCBhcmdfZGV2aWNlLCBhcmdfYXJ5X3RleHR1cmUsIGFyZ19hcnlfZXhQYXJtcykge1xyXG4gICAgICAgIHZhciBtYXQgPSBuZXcgTWF0ZXJpYWxfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgbWF0LlNldFBhcmFtZXRlcihhcmdfYW1iaWVudCwgYXJnX2RldmljZSwgYXJnX2FyeV90ZXh0dXJlLCBhcmdfYXJ5X2V4UGFybXMpO1xyXG4gICAgICAgIHJldHVybiBtYXQ7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZVNoYWRlciA9IGZ1bmN0aW9uICh2c1NvdXJjZSwgZnNTb3VyY2UsIGFyZ19ncmFwaGljRGV2aWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTaGFkZXJfMS5kZWZhdWx0KHZzU291cmNlLCBmc1NvdXJjZSwgYXJnX2dyYXBoaWNEZXZpY2UpO1xyXG4gICAgfTtcclxuICAgIFJlc291cmNlQ3JlYXRlci5DcmVhdGVTb3VuZCA9IGZ1bmN0aW9uIChhcmdfc291bmRTb3JjZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU291bmRfMS5kZWZhdWx0KGFyZ19zb3VuZFNvcmNlKTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlVGV4dHVyZSA9IGZ1bmN0aW9uIChhcmdfcGF0aCwgYXJnX2RldmljZSkge1xyXG4gICAgICAgIHZhciB0ZXggPSBuZXcgVGV4dHVyZV8xLmRlZmF1bHQoYXJnX3BhdGgsIGFyZ19kZXZpY2UpO1xyXG4gICAgICAgIHRleC5Jbml0aWFsaXplKCk7XHJcbiAgICAgICAgcmV0dXJuIHRleDtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlRnJhbWVCdWZmZXIgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgYXJnX2RldmljZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRnJhbWVCdWZmZXJUZXh0dXJlXzEuZGVmYXVsdChhcmdfZGV2aWNlLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICBSZXNvdXJjZUNyZWF0ZXIuQ3JlYXRlTWVzaFJlc291cmNlRnJvbUZpbGUgPSBmdW5jdGlvbiAoYXJnX2ZpbGVQYXRoLCByZXNvdXJjZUNvbnRhaW5lciwgYXJnX2RldmljZSkge1xyXG4gICAgICAgIHZhciBvdXQgPSBuZXcgTWVzaF8xLmRlZmF1bHQoKTtcclxuICAgICAgICB2YXIgaG9sZGVyID0gbmV3IEIzTUhvbGRlcigpO1xyXG4gICAgICAgIHJlc291cmNlQ29udGFpbmVyLkxvYWRTdGFydCgpO1xyXG4gICAgICAgIGhvbGRlci5ncmFwaGljRGV2aWNlID0gYXJnX2RldmljZTtcclxuICAgICAgICBob2xkZXIuY29udGFpbmVyID0gcmVzb3VyY2VDb250YWluZXI7XHJcbiAgICAgICAgaG9sZGVyLmZpbGVQYXRoID0gYXJnX2ZpbGVQYXRoO1xyXG4gICAgICAgIGhvbGRlci5tZXNoID0gb3V0O1xyXG4gICAgICAgIEZpbGVMb2FkZXJfMS5kZWZhdWx0LkxvYWRCaW4oYXJnX2ZpbGVQYXRoLCBob2xkZXIpO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9O1xyXG4gICAgUmVzb3VyY2VDcmVhdGVyLkNyZWF0ZU1hdGVyaWFsRnJvbUZpbGUgPSBmdW5jdGlvbiAoYXJnX2ZpbGVQYXRoLCByZXNvdXJjZUNvbnRhaW5lciwgYXJnX2RldmljZSkge1xyXG4gICAgICAgIHZhciBvdXQgPSBuZXcgTWF0ZXJpYWxfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGhvbGRlciA9IG5ldyBNYXRlcmlhbEJpbkxvYWRlcigpO1xyXG4gICAgICAgIHJlc291cmNlQ29udGFpbmVyLkxvYWRTdGFydCgpO1xyXG4gICAgICAgIGhvbGRlci5ncmFwaGljRGV2aWNlID0gYXJnX2RldmljZTtcclxuICAgICAgICBob2xkZXIuY29udGFpbmVyID0gcmVzb3VyY2VDb250YWluZXI7XHJcbiAgICAgICAgaG9sZGVyLmZpbGVQYXRoID0gYXJnX2ZpbGVQYXRoO1xyXG4gICAgICAgIGhvbGRlci5tYXRlcmlhbCA9IG91dDtcclxuICAgICAgICBGaWxlTG9hZGVyXzEuZGVmYXVsdC5Mb2FkQmluKGFyZ19maWxlUGF0aCwgaG9sZGVyKTtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZXNvdXJjZUNyZWF0ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJlc291cmNlQ3JlYXRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIE1hdHJpeF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01hdGgvTWF0cml4XCIpKTtcclxudmFyIFZlY3RvcjNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYXRoL1ZlY3RvcjNcIikpO1xyXG52YXIgVHJhbnNmb3JtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVHJhbnNmb3JtKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgxLCAxLCAxKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gbmV3IE1hdHJpeF8xLmRlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uLklkZW50aXR5KCk7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUZ1bmMgPSB0aGlzLlNjYWxlUm90YXRpb25UcmFuc2xhdGU7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJQb3NpdGlvblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJhc2VUcmFuc2Zvcm0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24uQWRkKHRoaXMuYmFzZVRyYW5zZm9ybS5Qb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMubWF0cml4ID0gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJSb3RhdGlvblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJhc2VUcmFuc2Zvcm0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVRyYW5zZm9ybS5Sb3RhdGlvbi5NdWx0aXBseSh0aGlzLnJvdGF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGlvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5tYXRyaXggPSBudWxsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcIlNjYWxlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjYWxlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMubWF0cml4ID0gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJNYXRyaXhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRyaXggPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVGdW5jKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJhc2VUcmFuc2Zvcm0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVRyYW5zZm9ybS5NYXRyaXguTXVsdGlwbHkodGhpcy5tYXRyaXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwiTG9jYWxNYXRyaXhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRyaXggPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVGdW5jKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hdHJpeDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJCYXNlVHJhbnNmb3JtXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVRyYW5zZm9ybTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGFyZ19iYXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZVRyYW5zZm9ybSA9IGFyZ19iYXNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuR2V0RnJvbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzXzEuZGVmYXVsdCgwLCAwLCAxKS5NdWx0aXBseV9NYXRyaXgodGhpcy5Sb3RhdGlvbik7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5HZXRSaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjNfMS5kZWZhdWx0KDEsIDAsIDApLk11bHRpcGx5X01hdHJpeCh0aGlzLlJvdGF0aW9uKTtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLkdldFVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yM18xLmRlZmF1bHQoMCwgMSwgMCkuTXVsdGlwbHlfTWF0cml4KHRoaXMuUm90YXRpb24pO1xyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuU2NhbGVSb3RhdGlvblRyYW5zbGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm1hdHJpeCA9IG5ldyBNYXRyaXhfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5tYXRyaXguSWRlbnRpdHkoKTtcclxuICAgICAgICB0aGlzLm1hdHJpeC5UcmFuc2xhdGVfYih0aGlzLnBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLm1hdHJpeC5NdWx0aXBseV9iKHRoaXMucm90YXRpb24pO1xyXG4gICAgICAgIHRoaXMubWF0cml4LlNjYWxlX2IodGhpcy5zY2FsZSk7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5Mb29rQXQgPSBmdW5jdGlvbiAoYXJnX3RhcmdldFBvcywgYXJnX3VwQXhpcykge1xyXG4gICAgICAgIHZhciB6ID0gKGFyZ190YXJnZXRQb3MuU3ViKHRoaXMuUG9zaXRpb24pKS5Ob3JtYWxpemUoKS5NdWx0aXBseSgtMSk7XHJcbiAgICAgICAgdmFyIHggPSBhcmdfdXBBeGlzLkNyb3NzKHopLk5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIHZhciB5ID0gei5Dcm9zcyh4KS5Ob3JtYWxpemUoKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uLmRhdGFbMF0gPSB4Lng7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbi5kYXRhWzFdID0geC55O1xyXG4gICAgICAgIHRoaXMucm90YXRpb24uZGF0YVsyXSA9IHguejtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uLmRhdGFbNF0gPSB5Lng7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbi5kYXRhWzVdID0geS55O1xyXG4gICAgICAgIHRoaXMucm90YXRpb24uZGF0YVs2XSA9IHkuejtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uLmRhdGFbOF0gPSB6Lng7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbi5kYXRhWzldID0gei55O1xyXG4gICAgICAgIHRoaXMucm90YXRpb24uZGF0YVsxMF0gPSB6Lno7XHJcbiAgICAgICAgdGhpcy5tYXRyaXggPSBudWxsO1xyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuU2NhbGVUcmFuc2xhdGVSb3RhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm1hdHJpeCA9IG5ldyBNYXRyaXhfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5tYXRyaXguSWRlbnRpdHkoKTtcclxuICAgICAgICB0aGlzLm1hdHJpeC5NdWx0aXBseV9iKHRoaXMucm90YXRpb24pO1xyXG4gICAgICAgIHRoaXMubWF0cml4LlRyYW5zbGF0ZV9iKHRoaXMucG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMubWF0cml4LlNjYWxlX2IodGhpcy5zY2FsZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRyYW5zZm9ybTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVHJhbnNmb3JtO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgR3JhcGhpY0RldmljZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0dyYXBoaWMvR3JhcGhpY0RldmljZVwiKSk7XHJcbnZhciBSZXNvdXJjZUNvbnRhaW5lcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1BhcnRzL1Jlc291cmNlQ29udGFpbmVyXCIpKTtcclxudmFyIE1vZGVsQ3JlYXRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1BhcnRzL01vZGVsQ3JlYXRlclwiKSk7XHJcbnZhciBTY2VuZU1hbmFnZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TY2VuZS9TY2VuZU1hbmFnZXJcIikpO1xyXG52YXIgU2FtcGxlU2NlbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TYW1wbGVTY2VuZVwiKSk7XHJcbnZhciBJbnB1dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1Rvb2wvSW5wdXRcIikpO1xyXG5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMganMgaXMgd2ViR0wvaW5kZXgudHNcIik7XHJcbiAgICAvL2NhbnZhc+OCqOODrOODoeODs+ODiOOCkuWPluW+l1xyXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNhbnZhcycpO1xyXG4gICAgdmFyIGF1ZGlvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgICBhdWRpb0VsZW1lbnQuc3JjID0gJ2F1ZGlvL0VuZGluZy5tcDMnO1xyXG4gICAgLy9hdWRpb0VsZW1lbnQudm9sdW1lPTAuMDtcclxuICAgIGNhbnZhcy53aWR0aCA9IDgwMDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSA1MDA7XHJcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIFwiXCIpO1xyXG4gICAgSW5wdXRfMS5kZWZhdWx0LmNhbnZhcyA9IGNhbnZhcztcclxuICAgIHZhciByZXNvdXJjZUNvbnRhaW5lciA9IG5ldyBSZXNvdXJjZUNvbnRhaW5lcl8xLmRlZmF1bHQoKTtcclxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgT25DbGljaywgZmFsc2UpO1xyXG4gICAgdmFyIGdyYXBoaWNEZXZpY2UgPSBuZXcgR3JhcGhpY0RldmljZV8xLmRlZmF1bHQoY2FudmFzKTtcclxuICAgIHZhciBtb2RlbENyZWF0ZXIgPSBuZXcgTW9kZWxDcmVhdGVyXzEuZGVmYXVsdChncmFwaGljRGV2aWNlLCByZXNvdXJjZUNvbnRhaW5lcik7XHJcbiAgICB2YXIgc2NlbmVNYW5hZ2VyID0gbmV3IFNjZW5lTWFuYWdlcl8xLmRlZmF1bHQobW9kZWxDcmVhdGVyLCByZXNvdXJjZUNvbnRhaW5lciwgZ3JhcGhpY0RldmljZSk7XHJcbiAgICBzY2VuZU1hbmFnZXIuQWRkU2NlbmUobmV3IFNhbXBsZVNjZW5lXzEuZGVmYXVsdChzY2VuZU1hbmFnZXIpLCBcInNhbXBsZVwiKTtcclxuICAgIHNjZW5lTWFuYWdlci5DaGFuZ2VTY2VuZShcInNhbXBsZVwiKTtcclxuICAgIHRpY2soKTtcclxuICAgIC8vIOaBkuW4uOODq+ODvOODl1xyXG4gICAgZnVuY3Rpb24gdGljaygpIHtcclxuICAgICAgICBzY2VuZU1hbmFnZXIuVXBkYXRlKCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhJbnB1dC5tb3VzZVBvc2l0aW9uLngrXCIsXCIrSW5wdXQubW91c2VQb3NpdGlvbi54KTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBmdW5jdGlvbiBPbkNsaWNrKCkge1xyXG4gICAgICAgIGF1ZGlvRWxlbWVudC5wbGF5KCk7XHJcbiAgICB9XHJcbn07XHJcbiIsIlxyXG5yZXF1aXJlKFwiLi9XZWJHbC9pbmRleFwiKSJdLCJzb3VyY2VSb290IjoiIn0=