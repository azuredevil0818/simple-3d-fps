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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _base_Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/Log.js */ "./src/base/Log.js");
/* harmony import */ var _game_levels_FirstLevel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/levels/FirstLevel.js */ "./src/game/levels/FirstLevel.js");
/* harmony import */ var _game_levels_CreditsLevel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/levels/CreditsLevel.js */ "./src/game/levels/CreditsLevel.js");
/* harmony import */ var _game_levels_HomeMenuLevel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/levels/HomeMenuLevel.js */ "./src/game/levels/HomeMenuLevel.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Base
 // Game Levels





var Game =
/*#__PURE__*/
function () {
  function Game() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Game);

    /**
     * Sets game options
     */
    this.options = options;
    /**
     * Keyboard pressed keys
     */

    this.keys = {};
    /**
     * Is game paused?
     */

    this.paused = false;
    /**
     * Can be used to log objects and debug the game
     */

    this.log = new _base_Log_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    /**
     * Starts the BABYLON engine on the Canvas element
     */

    this.canvas = document.getElementById("renderCanvas");
    this.engine = new BABYLON.Engine(this.canvas, true);
    this.currentLevel = null;
    this.currentLevelName = 'HomeMenuLevel';
    this.levels = {
      'HomeMenuLevel': new _game_levels_HomeMenuLevel_js__WEBPACK_IMPORTED_MODULE_3__["default"](),
      'CreditsLevel': new _game_levels_CreditsLevel_js__WEBPACK_IMPORTED_MODULE_2__["default"](),
      'FirstLevel': new _game_levels_FirstLevel_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {
      this.listenKeys();
      this.lintenTouchEvents();
      this.startLevel();
      this.listenOtherEvents();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.paused = true;
    }
  }, {
    key: "isPaused",
    value: function isPaused() {
      return this.paused;
    }
  }, {
    key: "resume",
    value: function resume() {
      this.paused = false;
    }
  }, {
    key: "listenKeys",
    value: function listenKeys() {
      document.addEventListener('keydown', keyDown.bind(this));
      document.addEventListener('keyup', keyUp.bind(this));
      this.keys.up = false;
      this.keys.down = false;
      this.keys.left = false;
      this.keys.right = false;

      function keyDown(e) {
        if (e.keyCode == 87 || e.keyCode == 38) {
          //Arrow Up
          this.keys.up = 1;
        } else if (e.keyCode == 83 || e.keyCode == 40) {
          //Arrow Down
          this.keys.down = 1;
        } else if (e.keyCode == 65 || e.keyCode == 37) {
          //Arrow Left
          this.keys.left = 1;
        } else if (e.keyCode == 68 || e.keyCode == 39) {
          //Arrow Right
          this.keys.right = 1;
        }
      }

      function keyUp(e) {
        if (e.keyCode == 87 || e.keyCode == 38) {
          //Arrow Up
          this.keys.up = 0;
        } else if (e.keyCode == 83 || e.keyCode == 40) {
          //Arrow Down
          this.keys.down = 0;
        } else if (e.keyCode == 65 || e.keyCode == 37) {
          //Arrow Left
          this.keys.left = 0;
        } else if (e.keyCode == 68 || e.keyCode == 39) {
          //Arrow Right
          this.keys.right = 0;
        }
      }
    }
  }, {
    key: "lintenTouchEvents",
    value: function lintenTouchEvents() {
      var _this = this;

      if (typeof Hammer == 'undefined') return;
      var hammertime = new Hammer(document.body);
      hammertime.get('swipe').set({
        direction: Hammer.DIRECTION_ALL
      });
      hammertime.on('swipeup', function (ev) {
        _this.keys.up = 1; // Resets the key after some milleseconds

        setTimeout(function () {
          _this.keys.up = 0;
        }, 150);
      });
      hammertime.on('swipedown', function (ev) {
        _this.keys.down = 1;
        setTimeout(function () {
          _this.keys.down = 0;
        }, 100);
      });
      hammertime.on('swipeleft', function (ev) {
        _this.keys.left = 2;
        setTimeout(function () {
          _this.keys.left = 0;
        }, 150);
      });
      hammertime.on('swiperight', function (ev) {
        _this.keys.right = 2;
        setTimeout(function () {
          _this.keys.right = 0;
        }, 150);
      });
    }
  }, {
    key: "listenOtherEvents",
    value: function listenOtherEvents() {
      var _this2 = this;

      window.addEventListener('blur', function () {
        _this2.pause();
      });
      window.addEventListener('focus', function () {
        _this2.resume();
      });
      window.addEventListener('resize', function () {
        _this2.engine.resize();
      });
    }
  }, {
    key: "goToLevel",
    value: function goToLevel(levelName) {
      if (!this.levels[levelName]) {
        console.error('A level with name ' + levelName + ' does not exists');
        return;
      }

      if (this.currentLevel) {
        this.currentLevel.exit();
      }

      this.currentLevelName = levelName;
      this.startLevel();
    }
  }, {
    key: "startLevel",
    value: function startLevel() {
      this.currentLevel = this.levels[this.currentLevelName];
      this.currentLevel.start();
    }
  }, {
    key: "render",
    value: function render() {
      this.startRenderLoop();
    }
  }, {
    key: "startRenderLoop",
    value: function startRenderLoop() {
      var _this3 = this;

      setTimeout(function () {
        _this3.engine.runRenderLoop(function () {
          _this3.currentLevel.scene.render();
        });
      }, 50);
    }
  }, {
    key: "stopRenderLoop",
    value: function stopRenderLoop() {
      this.engine.stopRenderLoop();
    }
  }, {
    key: "isMobile",
    value: function isMobile() {
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
      }

      return false;
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.js */ "./src/Game.js");
// The Game main class

window.GAME = null;
var app = {
  init: function init() {
    GAME = new _Game_js__WEBPACK_IMPORTED_MODULE_0__["default"](window.initialGameOptions);
    GAME.start();
  }
};
window.addEventListener('DOMContentLoaded', function () {
  app.init();
});

/***/ }),

/***/ "./src/base/AssetsDatabase.js":
/*!************************************!*\
  !*** ./src/base/AssetsDatabase.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AssetsDatabase; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AssetsDatabase =
/*#__PURE__*/
function () {
  function AssetsDatabase(scene, finishCallback) {
    _classCallCheck(this, AssetsDatabase);

    this.scene = scene;
    this.meshes = [];
    this.sounds = [];
    this.animatedMeshes = [];
    this.manager = new BABYLON.AssetsManager(this.scene);

    this.manager.onFinish = function (tasks) {
      if (finishCallback) finishCallback(tasks);
    };
  }
  /**
   * Adds a sound to be loaded
   * @param {*} name 
   * @param {*} file 
   * @param {*} options 
   */


  _createClass(AssetsDatabase, [{
    key: "addSound",
    value: function addSound(name, file, options) {
      var _this = this;

      var fileTask = this.manager.addBinaryFileTask(name + '__SoundTask', file);

      fileTask.onSuccess = function (task) {
        _this.sounds[name] = new BABYLON.Sound(name, task.data, _this.scene, null, options); // Execute a success callback

        if (options.onSuccess) {
          options.onSuccess(_this.sounds[name]);
        }
      };

      return this.sounds[name];
    }
    /**
     * Adds a music (sound with some predefined parametes that can be overwriten)
     * By default, musics are automatically played in loop
     * @param {*} name 
     * @param {*} file 
     * @param {*} options 
     */

  }, {
    key: "addMusic",
    value: function addMusic(name, file) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      options.loop = typeof options.loop !== 'undefined' ? options.loop : true;
      options.volume = typeof options.volume !== 'undefined' ? options.volume : 0.5;
      options.autoplay = typeof options.autoplay !== 'undefined' ? options.autoplay : true;
      return this.addSound(name, file, options);
    }
  }, {
    key: "addMergedMesh",
    value: function addMergedMesh(name, file, options) {
      return this.addMesh(name, file, options, true);
    }
  }, {
    key: "addMesh",
    value: function addMesh(name, file) {
      var _this2 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var mergeMeshes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var fileTask = this.manager.addMeshTask(name + '__MeshTask', '', file);

      fileTask.onSuccess = function (task) {
        var mesh = null;

        try {
          if (mergeMeshes) {
            mesh = BABYLON.Mesh.MergeMeshes(task.loadedMeshes);
          } else {
            mesh = task.loadedMeshes[0];
          }

          mesh.setEnabled(false);
          _this2.meshes[name] = mesh; // Execute a success callback

          if (options.onSuccess) {
            options.onSuccess(_this2.meshes[name]);
          }
        } catch (error) {
          console.error(error);
        }
      };

      return this.meshes[name];
    }
  }, {
    key: "addAnimatedMesh",
    value: function addAnimatedMesh(name, file) {
      var _this3 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var fileTask = this.manager.addMeshTask(name + '__AnimatedMeshTask', '', file);

      fileTask.onSuccess = function (task) {
        try {
          var mesh = task.loadedMeshes[0];
          mesh.setEnabled(false);
          _this3.animatedMeshes[name] = _this3.buildAnimatedMeshData(mesh, task, options); // Execute a success callback

          if (options.onSuccess) {
            options.onSuccess(_this3.animatedMeshes[name]);
          }
        } catch (error) {
          console.error(error);
        }
      };

      return this.animatedMeshes[name];
    }
  }, {
    key: "buildAnimatedMeshData",
    value: function buildAnimatedMeshData(mesh, task, options) {
      var start = 0,
          end = 0;

      if (options.start || options.startFrame) {
        start = options.startFrame ? options.startFrame / 30 : options.start;
        end = options.endFrame ? options.endFrame / 30 : options.end;
      }

      mesh.animationGroups = task.loadedAnimationGroups;
      mesh.animationGroups.forEach(function (animationGroup) {
        if (options.normalized) {
          animationGroup.normalize(start, end);
        }

        animationGroup.pause();
      });
      return mesh;
    }
  }, {
    key: "playMeshAnimation",
    value: function playMeshAnimation(meshName, start, end) {
      var loop = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var mesh = this.getAnimatedMesh(meshName);
      start = start / 30;
      end = end / 30;
      mesh.animationGroups.forEach(function (animationGroup) {
        animationGroup.stop();
        animationGroup.start(false, 1, start, end);
      });
    }
  }, {
    key: "getMesh",
    value: function getMesh(name) {
      if (!this.meshes[name]) {
        GAME.log.debugError('There is no mesh called "' + name + '"');
        return;
      }

      return this.meshes[name];
    }
  }, {
    key: "getAnimatedMesh",
    value: function getAnimatedMesh(name) {
      if (!this.animatedMeshes[name]) {
        GAME.log.debugError('There is no animated mesh called "' + name + '"');
        return;
      }

      return this.animatedMeshes[name];
    }
  }, {
    key: "getSound",
    value: function getSound(name) {
      return this.sounds[name];
    }
  }, {
    key: "load",
    value: function load() {
      this.manager.load();
    }
  }]);

  return AssetsDatabase;
}();



/***/ }),

/***/ "./src/base/Level.js":
/*!***************************!*\
  !*** ./src/base/Level.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Level; });
/* harmony import */ var _AssetsDatabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssetsDatabase */ "./src/base/AssetsDatabase.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Level =
/*#__PURE__*/
function () {
  function Level() {
    _classCallCheck(this, Level);

    /**
     * We can use this object to store materials that can be reused along the game
     */
    this.materials = {};
    this.scene = null;
    this.assets = null;
  }

  _createClass(Level, [{
    key: "start",
    value: function start() {
      if (this.setProperties) {
        this.setProperties();
      } else {
        GAME.log.debugWarning('The setProperties method is recommended to initialize the Level properties');
      }

      this.createScene();
    }
  }, {
    key: "createScene",
    value: function createScene() {
      var _this = this;

      // Create the scene space
      this.scene = new BABYLON.Scene(GAME.engine); // Add assets management and execute beforeRender after finish

      this.assets = new _AssetsDatabase__WEBPACK_IMPORTED_MODULE_0__["default"](this.scene, function () {
        GAME.log.debug('Level Assets loaded');

        if (_this.buildScene) {
          _this.buildScene();
        } else {
          GAME.log.debugWarning('You can add the buildScene method to your level to define your scene');
        } // If has the beforeRender method


        if (_this.beforeRender) {
          _this.scene.registerBeforeRender(_this.beforeRender.bind(_this));
        } else {
          GAME.log.debugWarning('You can define animations and other game logics that happens inside the main loop on the beforeRender method');
        }

        GAME.resume();
        GAME.startRenderLoop();
      });

      if (this.setupAssets) {
        this.setupAssets();
      } // Load the assets


      this.assets.load();
      return this.scene;
    }
  }, {
    key: "exit",
    value: function exit() {
      // Fix to blur the canvas to avoid issues with keyboard input
      GAME.canvas.blur();
      GAME.stopRenderLoop();
      this.scene.dispose();
      this.scene = null;
    }
    /**
     * Adds a collider to the level scene. It will fire the options.onCollide callback
     * when the collider intersects options.collisionMesh. It can be used to fire actions when
     * player enters an area for example.
     * @param {*} name 
     * @param {*} options 
     */

  }, {
    key: "addCollider",
    value: function addCollider(name, options) {
      var collider = BABYLON.MeshBuilder.CreateBox(name, {
        width: options.width || 1,
        height: options.height || 1,
        depth: options.depth || 1
      }, this.scene); // Add a tag to identify the object as collider and to simplify group operations (like dispose)

      BABYLON.Tags.AddTagsTo(collider, 'collider boxCollider');
      collider.position.x = options.positionX || 0;
      collider.position.y = options.positionY || 0;
      collider.position.z = options.positionZ || 0;
      collider.isVisible = options.visible ? options.visible : false;

      if (collider.isVisible) {
        var colliderMaterial = new BABYLON.StandardMaterial(name + 'Material');
        colliderMaterial.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0);
        colliderMaterial.alpha = 0.5;
        collider.material = colliderMaterial;
      }

      options.timeToDispose = options.timeToDispose ? options.timeToDispose : 0;
      collider.actionManager = new BABYLON.ActionManager(this.scene);
      collider.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
        trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
        parameter: options.collisionMesh
      }, function () {
        // Runs onCollide callback if exists
        if (options.onCollide) {
          options.onCollide();
        } // If true, will dispose the collider after timeToDispose


        if (options.disposeAfterCollision) {
          setTimeout(function () {
            collider.dispose();
          }, options.timeToDispose);
        }
      }));
      return collider;
    }
  }, {
    key: "disposeColliders",
    value: function disposeColliders() {
      var colliders = this.scene.getMeshesByTags('collider');

      for (var index = 0; index < colliders.length; index++) {
        colliders[index].dispose();
      }
    }
  }, {
    key: "addMaterial",
    value: function addMaterial(material) {
      this.materials[material.name] = material;
    }
  }, {
    key: "getMaterial",
    value: function getMaterial(materialName) {
      return this.materials[materialName];
    }
  }, {
    key: "removeMaterial",
    value: function removeMaterial(materialName) {
      var material = null;

      if (material = this.materials[materialName]) {
        material.dispose();
        delete this.materials[materialName];
      }
    }
    /**
     * Interpolate a value inside the Level Scene using the BABYLON Action Manager
     * @param {*} target The target object
     * @param {*} property The property in the object to interpolate
     * @param {*} toValue The final value of interpolation
     * @param {*} duration The interpolation duration in milliseconds
     * @param {*} afterExecutionCallback Callback executed after ther interpolation ends
     */

  }, {
    key: "interpolate",
    value: function interpolate(target, property, toValue, duration) {
      var afterExecutionCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

      if (!this.scene.actionManager) {
        this.scene.actionManager = new BABYLON.ActionManager(this.scene);
      }

      var interpolateAction = new BABYLON.InterpolateValueAction(BABYLON.ActionManager.NothingTrigger, target, property, toValue, duration);
      interpolateAction.onInterpolationDoneObservable.add(function () {
        GAME.log.debug('Interpolation done');
        if (afterExecutionCallback) afterExecutionCallback();
      });
      this.scene.actionManager.registerAction(interpolateAction);
      interpolateAction.execute();
    }
    /**
     * Enable pointer lock
     */

  }, {
    key: "enablePointerLock",
    value: function enablePointerLock() {
      var _this2 = this;

      var canvas = GAME.canvas;

      if (!this.camera) {
        console.error('You need to add a camera to the level to enable pointer lock');
      } // On click event, request pointer lock


      canvas.addEventListener("click", function (evt) {
        canvas.requestPointerLock = canvas.requestPointerLock || canvas.msRequestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;

        if (canvas.requestPointerLock) {
          canvas.requestPointerLock();
        }
      }, false); // Event listener when the pointerlock is updated (or removed by pressing ESC for example).

      var pointerlockchange = function pointerlockchange(event) {
        _this2.controlEnabled = document.mozPointerLockElement === canvas || document.webkitPointerLockElement === canvas || document.msPointerLockElement === canvas || document.pointerLockElement === canvas; // If the user is alreday locked

        if (!_this2.controlEnabled) {
          _this2.camera.detachControl(canvas);
        } else {
          _this2.camera.attachControl(canvas);
        }
      }; // Attach events to the document


      document.addEventListener("pointerlockchange", pointerlockchange, false);
      document.addEventListener("mspointerlockchange", pointerlockchange, false);
      document.addEventListener("mozpointerlockchange", pointerlockchange, false);
      document.addEventListener("webkitpointerlockchange", pointerlockchange, false);
    }
  }]);

  return Level;
}();



/***/ }),

/***/ "./src/base/Log.js":
/*!*************************!*\
  !*** ./src/base/Log.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Log; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Log =
/*#__PURE__*/
function () {
  function Log() {
    var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _classCallCheck(this, Log);

    this.currentID = 0;
    this.logs = [];
    this.enabled = enabled;
  }

  _createClass(Log, [{
    key: "push",
    value: function push() {
      var log = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!this.enabled) return;
      log.ID = ++this.currentID;
      this.logs.push(log);
    }
    /**
     * Simple log method to show what something is doing at moment
     * @param {*} what 
     */

  }, {
    key: "doing",
    value: function doing() {
      var what = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.push({
        'doing': what
      });
    }
  }, {
    key: "getLast",
    value: function getLast() {
      var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return this.logs.slice(-quantity);
    }
  }, {
    key: "logLast",
    value: function logLast() {
      var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      console.log(this.getLast(quantity));
    }
  }, {
    key: "get",
    value: function get() {
      return this.logs;
    }
  }, {
    key: "log",
    value: function log() {
      console.log(this.logs);
    }
  }, {
    key: "debug",
    value: function debug(data) {
      if (GAME.options.debugMode) {
        console.log('DEBUG LOG: ' + data);
      }
    }
  }, {
    key: "debugWarning",
    value: function debugWarning(data) {
      if (GAME.options.debugMode) {
        console.warn('DEBUG LOG: ' + data);
      }
    }
  }, {
    key: "debugError",
    value: function debugError(data) {
      if (GAME.options.debugMode) {
        console.error('DEBUG LOG: ' + data);
      }
    }
  }]);

  return Log;
}();



/***/ }),

/***/ "./src/base/UI.js":
/*!************************!*\
  !*** ./src/base/UI.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UI =
/*#__PURE__*/
function () {
  function UI(uiName) {
    _classCallCheck(this, UI);

    this.currentControlID = 0;
    this.controls = [];
    this.menuTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI(uiName);
  }

  _createClass(UI, [{
    key: "addButton",
    value: function addButton(name, text) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var button = BABYLON.GUI.Button.CreateSimpleButton(name, text);
      button.width = options.width || 0.5;
      button.height = options.height || '60px';
      button.color = options.color || 'black';
      button.outlineWidth = options.outlineWidth || 0;
      button.outlineColor = options.outlineColor || button.color;
      button.background = options.background || 'white';
      button.left = options.left || '0px';
      button.top = options.top || '0px';
      button.textHorizontalAlignment = typeof options.horizontalAlignment !== 'undefined' ? options.horizontalAlignment : BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      button.textVerticalAlignment = typeof options.verticalAlignment !== 'undefined' ? options.verticalAlignment : BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;

      if (options.onclick) {
        button.onPointerUpObservable.add(options.onclick);
      }

      this.menuTexture.addControl(button);
      this.add(button);
      return button;
    }
  }, {
    key: "addText",
    value: function addText(text) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var textControl = new BABYLON.GUI.TextBlock();
      textControl.text = text;
      textControl.color = options.color || 'white';
      textControl.fontSize = options.fontSize || 28;
      textControl.outlineWidth = options.outlineWidth || 0;
      textControl.outlineColor = options.outlineColor || "black";
      textControl.lineSpacing = options.lineSpacing || '5px';
      textControl.left = options.left || '0px';
      textControl.top = options.top || '0px';
      textControl.textHorizontalAlignment = typeof options.horizontalAlignment !== 'undefined' ? options.horizontalAlignment : BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      textControl.textVerticalAlignment = typeof options.verticalAlignment !== 'undefined' ? options.verticalAlignment : BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
      textControl.textWrapping = options.wrapping || true;
      this.menuTexture.addControl(textControl);
      this.add(textControl);
      return textControl;
    }
  }, {
    key: "add",
    value: function add(control) {
      control.uiControlID = this.currentControlID++;
      this.controls.push(control);
    }
  }, {
    key: "remove",
    value: function remove(control) {
      control.isVisible = false;
      this.controls.splice(control.uiControlID, 1);
    }
  }, {
    key: "show",
    value: function show() {
      this.controls.forEach(function (control) {
        return control.isVisible = true;
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      this.controls.forEach(function (control) {
        return control.isVisible = false;
      });
    }
  }]);

  return UI;
}();



/***/ }),

/***/ "./src/game/Enemy.js":
/*!***************************!*\
  !*** ./src/game/Enemy.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enemy; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Enemy =
/*#__PURE__*/
function () {
  function Enemy(level) {
    _classCallCheck(this, Enemy);

    this.level = level;
    this.scene = level.scene;
    this.mesh = null;
    this.defaultAltitude = 2.5;
    this.maxSpeed = 0.4; // this.dieSound = this.level.assets.getSound('robotOff');this.speed

    this.states = {
      'DESTROYED': false
    };
  }

  _createClass(Enemy, [{
    key: "create",
    value: function create() {
      this.mesh = this.level.assets.getMesh('enemy').clone();
      this.mesh.enemyObject = this;
      BABYLON.Tags.AddTagsTo(this.mesh, 'enemy');
      this.mesh.position.x = Math.floor(Math.random() * 100) - 50;
      this.mesh.position.z = Math.floor(Math.random() * 100) - 50;
      this.mesh.position.y = this.defaultAltitude;
      this.mesh.scaling = new BABYLON.Vector3(0.025, 0.025, 0.025);
      this.initSpeed(); // this.addEnemyMaterial();

      this.generateRandomPosition();
      return this;
    }
  }, {
    key: "addEnemyMaterial",
    value: function addEnemyMaterial() {
      var meshMaterial = new BABYLON.StandardMaterial('meshMaterial', this.scene);

      if (this.speed < 0.1) {
        meshMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0.8);
      } else if (this.speed < 0.3) {
        meshMaterial.diffuseColor = new BABYLON.Color3(0, 0.8, 0);
      } else {
        meshMaterial.diffuseColor = new BABYLON.Color3(0.8, 0, 0);
      }

      meshMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
      this.mesh.getChildren().forEach(function (mesh) {
        return mesh.material = meshMaterial;
      });
    }
  }, {
    key: "move",
    value: function move() {
      if (this.states.DESTROYED) return;
      var direction = this.randPosition.subtract(this.mesh.position).normalize(),
          alpha = Math.atan2(-1 * direction.x, -1 * direction.z);
      this.mesh.rotation.y = alpha;
      this.mesh.moveWithCollisions(direction.multiplyByFloats(this.speed, this.speed, this.speed)); // If is close to the destination, generates a new position
      // console.log(direction)

      if (this.randPosition.subtract(this.mesh.position).length() <= 1) {
        this.generateRandomPosition();
      }

      this.speed;
    }
  }, {
    key: "initSpeed",
    value: function initSpeed() {
      this.speed = Math.random();
      this.speed = this.speed <= this.maxSpeed ? this.speed : this.maxSpeed;
    }
  }, {
    key: "generateRandomPosition",
    value: function generateRandomPosition() {
      var randomPositionX = Math.floor(Math.random() * 100) - 50;
      var randomPositionZ = Math.floor(Math.random() * 100) - 50;
      var altitude = Math.floor(Math.random() * 7);
      this.randPosition = new BABYLON.Vector3(randomPositionX, 5, randomPositionZ);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.states.DESTROYED = true; // this.dieSound.play();

      this.level.interpolate(this.mesh.position, 'y', 0.5, 100 * this.mesh.position.y); //this.mesh.dispose();
    }
  }]);

  return Enemy;
}();



/***/ }),

/***/ "./src/game/Weapon.js":
/*!****************************!*\
  !*** ./src/game/Weapon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Weapon; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Weapon =
/*#__PURE__*/
function () {
  function Weapon(level) {
    _classCallCheck(this, Weapon);

    this.level = level;
    this.scene = level.scene;
    this.fireRate = 350; // Milliseconds between each fire

    this.canFire = true;
    this.currentFireRate = 0;
    this.fireSound = this.level.assets.getSound('shotgun');
  }

  _createClass(Weapon, [{
    key: "create",
    value: function create() {
      this.mesh = this.level.assets.getAnimatedMesh('rifle');
      this.mesh.setEnabled(true);
      this.mesh.isVisible = true; // Let's use a transform node to never lose the correct mesh orientation
      // It we apply transformations directly to the mesh, It can be mirrored,
      // removinf the handedness conversion

      var transformNode = new BABYLON.TransformNode('weaponTransformNode');
      transformNode.parent = this.level.camera;
      transformNode.scaling = new BABYLON.Vector3(3.5, 3.5, 3.5);
      transformNode.position = new BABYLON.Vector3(0.7, -0.45, 1.1);
      this.mesh.parent = transformNode;
      this.controlFireRate();
    }
  }, {
    key: "fire",
    value: function fire() {
      var width = this.scene.getEngine().getRenderWidth();
      var height = this.scene.getEngine().getRenderHeight(); // Is the player control enabled?

      if (this.level.controlEnabled) {
        var pickInfo = this.scene.pick(width / 2, height / 2, null, false, this.camera);
        this.doFire(pickInfo);
      }
    }
  }, {
    key: "doFire",
    value: function doFire(pickInfo) {
      if (this.canFire) {
        this.fireSound.play(); // If we hit an enemy

        if (pickInfo.hit && BABYLON.Tags.HasTags(pickInfo.pickedMesh) && pickInfo.pickedMesh.matchesTagsQuery('enemy')) {
          var mainMesh = pickInfo.pickedMesh.parent ? pickInfo.pickedMesh.parent : pickInfo.pickedMesh;
          mainMesh.enemyObject.destroy();
        } else {
          if (pickInfo.pickedPoint) {
            var box = BABYLON.Mesh.CreateBox('box', 0.1, this.scene);
            box.position = pickInfo.pickedPoint.clone();
          }
        }

        this.animateFire();
        this.canFire = false;
      }
    }
  }, {
    key: "animateFire",
    value: function animateFire() {
      // Playing rifle animation from frame 0 to 10
      this.level.assets.playMeshAnimation('rifle', 0, 10);
    }
  }, {
    key: "controlFireRate",
    value: function controlFireRate() {
      if (!this.canFire) {
        this.currentFireRate -= GAME.engine.getDeltaTime();

        if (this.currentFireRate <= 0) {
          this.canFire = true;
          this.currentFireRate = this.fireRate;
        }
      }
    }
  }]);

  return Weapon;
}();



/***/ }),

/***/ "./src/game/levels/CreditsLevel.js":
/*!*****************************************!*\
  !*** ./src/game/levels/CreditsLevel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreditsLevel; });
/* harmony import */ var _base_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/UI */ "./src/base/UI.js");
/* harmony import */ var _base_Level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/Level */ "./src/base/Level.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var CreditsLevel =
/*#__PURE__*/
function (_Level) {
  _inherits(CreditsLevel, _Level);

  function CreditsLevel() {
    _classCallCheck(this, CreditsLevel);

    return _possibleConstructorReturn(this, _getPrototypeOf(CreditsLevel).apply(this, arguments));
  }

  _createClass(CreditsLevel, [{
    key: "setupAssets",
    value: function setupAssets() {//this.assets.addMusic('music', '/assets/musics/music.mp3');
    }
  }, {
    key: "buildScene",
    value: function buildScene() {
      var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), this.scene); // Make this scene transparent to see the background

      this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
      this.makeUI();
    }
  }, {
    key: "makeUI",
    value: function makeUI() {
      var ui = new _base_UI__WEBPACK_IMPORTED_MODULE_0__["default"]('creditsUI');
      ui.addText('Design and Code by Tiago Silva Pereira Rodrigues\nkingofcode.com.br\n\n\n', {
        'top': '30px',
        'fontSize': '20px',
        'horizontalAlignment': BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_TOP
      });
      ui.addText('Music by Eric Matyas\nwww.soundimage.org\n\nPlease check the music license documentation before\nchanging the credits', {
        'top': '140px',
        'fontSize': '20px',
        'horizontalAlignment': BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_TOP
      });
      ui.addButton('backButton', 'Return to Home', {
        'top': '220px',
        'background': GAME.options.backgroundColor,
        'color': 'white',
        'onclick': function onclick() {
          return GAME.goToLevel('HomeMenuLevel');
        }
      });
    }
  }]);

  return CreditsLevel;
}(_base_Level__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/game/levels/FirstLevel.js":
/*!***************************************!*\
  !*** ./src/game/levels/FirstLevel.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FirstLevel; });
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Enemy */ "./src/game/Enemy.js");
/* harmony import */ var _base_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/UI */ "./src/base/UI.js");
/* harmony import */ var _Weapon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Weapon */ "./src/game/Weapon.js");
/* harmony import */ var _base_Level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/Level */ "./src/base/Level.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var FirstLevel =
/*#__PURE__*/
function (_Level) {
  _inherits(FirstLevel, _Level);

  function FirstLevel() {
    _classCallCheck(this, FirstLevel);

    return _possibleConstructorReturn(this, _getPrototypeOf(FirstLevel).apply(this, arguments));
  }

  _createClass(FirstLevel, [{
    key: "setProperties",
    value: function setProperties() {
      // Menu
      this.menu = null;
      this.weapon = null;
      this.enemies = [];
    }
  }, {
    key: "setupAssets",
    value: function setupAssets() {
      this.assets.addAnimatedMesh('rifle', '/assets/models/weapons/rifle/rifle.gltf', {
        'normalized': true,
        'start': 0,
        'end': 207
      });
      this.assets.addMergedMesh('enemy', '/assets/models/skull/skull.babylon'); // this.assets.addMusic('music', '/assets/musics/music.mp3');

      this.assets.addSound('shotgun', '/assets/sounds/shotgun.wav', {
        volume: 0.4
      });
    }
  }, {
    key: "buildScene",
    value: function buildScene() {
      // this.scene.debugLayer.show();
      this.scene.clearColor = new BABYLON.Color3.FromHexString('#777'); // Adding lights

      var dirLight = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), this.scene);
      dirLight.intensity = 0.3;
      var hemiLight = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), this.scene);
      hemiLight.intensity = 0.5; // Skybox

      var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {
        size: 1000
      }, this.scene);
      var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", this.scene);
      skyboxMaterial.backFaceCulling = false;
      skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("assets/skybox/skybox", this.scene);
      skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
      skyboxMaterial.disableLighting = true;
      skybox.material = skyboxMaterial;
      this.scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
      this.scene.collisionsEnabled = true;
      this.createMenus(); // Create and set the active camera

      this.camera = this.createCamera();
      this.scene.activeCamera = this.camera;
      this.enablePointerLock();
      this.createGround();
      this.addWeapon();
      this.addEnemies();
      this.setupEventListeners();
    }
  }, {
    key: "createGround",
    value: function createGround() {
      var ground = BABYLON.Mesh.CreateGround("ground", 500, 500, 2, this.scene);
      ground.checkCollisions = true;
      var groundMaterial = new BABYLON.StandardMaterial("groundMaterial", this.scene);
      groundMaterial.diffuseTexture = new BABYLON.Texture("/assets/images/sand.jpg", this.scene);
      groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
      ground.material = groundMaterial;
    }
  }, {
    key: "addWeapon",
    value: function addWeapon() {
      this.weapon = new _Weapon__WEBPACK_IMPORTED_MODULE_2__["default"](this);
      this.weapon.create();
    }
  }, {
    key: "addEnemies",
    value: function addEnemies() {
      for (var enemiesQuantity = 0; enemiesQuantity < 10; enemiesQuantity++) {
        var enemy = new _Enemy__WEBPACK_IMPORTED_MODULE_0__["default"](this).create();
        this.enemies.push(enemy);
      }
    }
  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var _this = this;

      GAME.canvas.addEventListener('click', function () {
        _this.weapon.fire();
      }, false);
    }
  }, {
    key: "createMenus",
    value: function createMenus() {}
  }, {
    key: "createCamera",
    value: function createCamera() {
      var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 3.5, 10), this.scene);
      camera.setTarget(new BABYLON.Vector3(0, 2, 0));
      camera.attachControl(GAME.canvas, true);
      camera.applyGravity = true;
      camera.ellipsoid = new BABYLON.Vector3(1, 1.7, 1);
      camera.checkCollisions = true;
      camera._needMoveForGravity = true; // Reducing the minimum visible FOV to show the Weapon correctly 

      camera.minZ = 0; // Remap keys to move with WASD

      camera.keysUp = [87]; // W

      camera.keysDown = [83]; // S

      camera.keysLeft = [65]; // A

      camera.keysRight = [68]; // D
      // camera.speed = 10;
      // camera.inertia = 5;
      // camera.angularSensibility = 1000;

      return camera;
    }
  }, {
    key: "beforeRender",
    value: function beforeRender() {
      if (!GAME.isPaused()) {
        this.weapon.controlFireRate();
        this.enemies.forEach(function (enemy) {
          return enemy.move();
        });
      }
    }
  }]);

  return FirstLevel;
}(_base_Level__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/game/levels/HomeMenuLevel.js":
/*!******************************************!*\
  !*** ./src/game/levels/HomeMenuLevel.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeMenuLevel; });
/* harmony import */ var _base_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/UI */ "./src/base/UI.js");
/* harmony import */ var _base_Level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/Level */ "./src/base/Level.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var HomeMenuLevel =
/*#__PURE__*/
function (_Level) {
  _inherits(HomeMenuLevel, _Level);

  function HomeMenuLevel() {
    _classCallCheck(this, HomeMenuLevel);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomeMenuLevel).apply(this, arguments));
  }

  _createClass(HomeMenuLevel, [{
    key: "setupAssets",
    value: function setupAssets() {//this.assets.addMusic('music', '/assets/musics/music.mp3');
    }
  }, {
    key: "buildScene",
    value: function buildScene() {
      var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), this.scene); // Make this scene transparent to see the document background

      this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
      var menu = new _base_UI__WEBPACK_IMPORTED_MODULE_0__["default"]('homeMenuUI');
      menu.addButton('playButton', 'Play Game', {
        'background': GAME.options.backgroundColor,
        'color': 'white',
        'onclick': function onclick() {
          return GAME.goToLevel('FirstLevel');
        }
      });
      menu.addButton('creditsButton', 'Credits', {
        'top': '70px',
        'background': GAME.options.backgroundColor,
        'color': 'white',
        'onclick': function onclick() {
          return GAME.goToLevel('CreditsLevel');
        }
      });
    }
  }]);

  return HomeMenuLevel;
}(_base_Level__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kingofcode/code/games/fps/src/app.js */"./src/app.js");


/***/ })

/******/ });