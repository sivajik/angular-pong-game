(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-slider/image-slider.component */ "./src/app/image-slider/image-slider.component.ts");



class AppComponent {
    constructor() {
        this.title = 'angular-pong-game';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image-slider");
    } }, directives: [_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_1__["ImageSliderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                // template: '<app-tetris></app-tetris>',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pong_pong_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pong/pong.component */ "./src/app/pong/pong.component.ts");
/* harmony import */ var _tetris_tetris_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tetris/tetris.component */ "./src/app/tetris/tetris.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-slider/image-slider.component */ "./src/app/image-slider/image-slider.component.ts");
/* harmony import */ var _node_modules_bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/bootstrap/dist/js/bootstrap.bundle */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.js");
/* harmony import */ var _node_modules_bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cv/cv.component */ "./src/app/cv/cv.component.ts");
/* harmony import */ var _number_slider_number_slider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./number-slider/number-slider.component */ "./src/app/number-slider/number-slider.component.ts");













const appRoutes = [
    { path: 'pong-game', component: _pong_pong_component__WEBPACK_IMPORTED_MODULE_3__["PongComponent"] },
    { path: 'tetris-game', component: _tetris_tetris_component__WEBPACK_IMPORTED_MODULE_4__["TetrisComponent"] },
    { path: 'image-slider-game', component: _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_6__["ImageSliderComponent"] },
    { path: 'number-slider-game', component: _number_slider_number_slider_component__WEBPACK_IMPORTED_MODULE_10__["NumberSliderComponent"] },
    { path: 'cv', component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_9__["CvComponent"] },
    { path: '**', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
            )
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pong_pong_component__WEBPACK_IMPORTED_MODULE_3__["PongComponent"],
        _tetris_tetris_component__WEBPACK_IMPORTED_MODULE_4__["TetrisComponent"],
        _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_6__["ImageSliderComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"],
        _cv_cv_component__WEBPACK_IMPORTED_MODULE_9__["CvComponent"],
        _number_slider_number_slider_component__WEBPACK_IMPORTED_MODULE_10__["NumberSliderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _pong_pong_component__WEBPACK_IMPORTED_MODULE_3__["PongComponent"],
                    _tetris_tetris_component__WEBPACK_IMPORTED_MODULE_4__["TetrisComponent"],
                    _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_6__["ImageSliderComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"],
                    _cv_cv_component__WEBPACK_IMPORTED_MODULE_9__["CvComponent"],
                    _number_slider_number_slider_component__WEBPACK_IMPORTED_MODULE_10__["NumberSliderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                    )
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/classes/number-slider/cell.ts":
/*!***********************************************!*\
  !*** ./src/app/classes/number-slider/cell.ts ***!
  \***********************************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
class Cell {
    constructor(row, col, value, show) {
        this.row = row;
        this.col = col;
        this.value = value;
    }
}


/***/ }),

/***/ "./src/app/classes/pong/Ball.ts":
/*!**************************************!*\
  !*** ./src/app/classes/pong/Ball.ts ***!
  \**************************************/
/*! exports provided: Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ball", function() { return Ball; });
/* harmony import */ var _Movable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Movable */ "./src/app/classes/pong/Movable.ts");

class Ball extends _Movable__WEBPACK_IMPORTED_MODULE_0__["Movable"] {
    constructor(width, height, location, moveIncrement, speed) {
        super(width, height, location, moveIncrement);
        this.speed = speed;
    }
    goOppToCurrentX() {
        this.speed.horiSpeedSprintValue = -this.speed.horiSpeedSprintValue;
    }
    goOppToCurrentY() {
        this.speed.vertSpeedSprintValue = -this.speed.vertSpeedSprintValue;
    }
    setNewSpeed(speedVal) {
        this.speed.vertSpeedSprintValue = speedVal;
    }
    move() {
        super.move(this.speed);
    }
}


/***/ }),

/***/ "./src/app/classes/pong/Bat.ts":
/*!*************************************!*\
  !*** ./src/app/classes/pong/Bat.ts ***!
  \*************************************/
/*! exports provided: Bat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bat", function() { return Bat; });
/* harmony import */ var _Movable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Movable */ "./src/app/classes/pong/Movable.ts");
/* harmony import */ var _Speed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speed */ "./src/app/classes/pong/Speed.ts");


class Bat extends _Movable__WEBPACK_IMPORTED_MODULE_0__["Movable"] {
    constructor(width, height, location, moveIncrement) {
        super(width, height, location, moveIncrement);
        this.speed = new _Speed__WEBPACK_IMPORTED_MODULE_1__["Speed"](0, 0);
    }
    goDown(ratioChange) {
        if (ratioChange < 0 || ratioChange > 1)
            return;
        this.speed.vertSpeedSprintValue = Math.min(1, this.speed.vertSpeedSprintValue + ratioChange);
    }
    goUp(ratioChange) {
        if (ratioChange < 0 || ratioChange > 1)
            return;
        this.speed.vertSpeedSprintValue = Math.max(-1, this.speed.vertSpeedSprintValue - ratioChange);
    }
    move() {
        super.move(this.speed);
    }
}


/***/ }),

/***/ "./src/app/classes/pong/Movable.ts":
/*!*****************************************!*\
  !*** ./src/app/classes/pong/Movable.ts ***!
  \*****************************************/
/*! exports provided: Movable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movable", function() { return Movable; });
class Movable {
    constructor(width, height, location, moveIncrement) {
        this.width = width;
        this.height = height;
        this.location = location;
        this.moveIncrement = moveIncrement;
    }
    move(speed) {
        this.location.xCoOrd += (this.moveIncrement * speed.horiSpeedSprintValue);
        this.location.yCoOrd += (this.moveIncrement * speed.vertSpeedSprintValue);
    }
    getLocationOnCanvas() {
        return this.location;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    setHeight(newHeigt) {
        this.height = newHeigt;
    }
    getCollisionBoundaries() {
        return {
            left: this.location.xCoOrd - this.width / 2,
            right: this.location.xCoOrd + this.width / 2,
            top: this.location.yCoOrd - this.height / 2,
            bottom: this.location.yCoOrd + this.height / 2,
        };
    }
}


/***/ }),

/***/ "./src/app/classes/pong/PongGame.ts":
/*!******************************************!*\
  !*** ./src/app/classes/pong/PongGame.ts ***!
  \******************************************/
/*! exports provided: PongGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PongGame", function() { return PongGame; });
/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball */ "./src/app/classes/pong/Ball.ts");
/* harmony import */ var _Bat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bat */ "./src/app/classes/pong/Bat.ts");


class PongGame {
    constructor(width, height) {
        this.height = height;
        this.width = width;
        this.ball = new _Ball__WEBPACK_IMPORTED_MODULE_0__["Ball"](15, 15, { xCoOrd: width / 2, yCoOrd: height / 2 }, 2, { horiSpeedSprintValue: 1, vertSpeedSprintValue: 1 });
        this.bat = new _Bat__WEBPACK_IMPORTED_MODULE_1__["Bat"](20, 125, { xCoOrd: 20, yCoOrd: height / 2 }, 1.5);
    }
    progress(keyPressedState) {
        this.ball.move();
        var paddleBounds = this.bat.getCollisionBoundaries();
        if (keyPressedState.upKeyPressed && paddleBounds.top > 0) {
            this.bat.goUp(.03);
            this.bat.move();
        }
        else if (keyPressedState.downKeyPressed && paddleBounds.bottom < this.height) {
            this.bat.goDown(.03);
            this.bat.move();
        }
        const boundaries = this.checkCollided();
        return boundaries;
    }
    checkCollided() {
        let ballBounds = this.ball.getCollisionBoundaries();
        if (ballBounds.bottom >= this.height || ballBounds.top <= 0)
            this.ball.goOppToCurrentY();
        let batBounds = this.bat.getCollisionBoundaries();
        if (ballBounds.left <= batBounds.right &&
            batBounds.right - ballBounds.left <= 3 &&
            ballBounds.bottom >= batBounds.top &&
            ballBounds.top <= batBounds.bottom) {
            this.ball.goOppToCurrentX();
            var vsr = -(this.ball.getLocationOnCanvas().yCoOrd - this.bat.getLocationOnCanvas().yCoOrd)
                / (batBounds.top - this.bat.getLocationOnCanvas().yCoOrd);
            vsr = Math.min(vsr, 1);
            this.ball.setNewSpeed(vsr);
        }
        if (ballBounds.right >= this.width || ballBounds.left <= 0) {
            this.ball.goOppToCurrentX();
        }
        return ballBounds;
    }
    gameCompleted() {
        var ballBoundries = this.ball.getCollisionBoundaries();
        if (ballBoundries.left <= 10) {
            return true;
        }
        else {
            return false;
        }
    }
}


/***/ }),

/***/ "./src/app/classes/pong/Speed.ts":
/*!***************************************!*\
  !*** ./src/app/classes/pong/Speed.ts ***!
  \***************************************/
/*! exports provided: Speed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Speed", function() { return Speed; });
class Speed {
    constructor(horiSpeedSprintValue, vertSpeedSprintValue) {
        this.horiSpeedSprintValue = horiSpeedSprintValue;
        this.vertSpeedSprintValue = vertSpeedSprintValue;
    }
}


/***/ }),

/***/ "./src/app/cv/cv.component.ts":
/*!************************************!*\
  !*** ./src/app/cv/cv.component.ts ***!
  \************************************/
/*! exports provided: CvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvComponent", function() { return CvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CvComponent {
    constructor() { }
    ngOnInit() {
    }
}
CvComponent.ɵfac = function CvComponent_Factory(t) { return new (t || CvComponent)(); };
CvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvComponent, selectors: [["app-cv"]], decls: 9, vars: 0, consts: [[1, "container", "card"], [1, "card-header"], [1, "card-body"], [1, "card-title"], ["href", "https://www.linkedin.com/in/sivajikondapalli/", "target", "_blank", 1, "btn", "btn-primary"]], template: function CvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Will be updated soon!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N2L2N2LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cv',
                templateUrl: './cv.component.html',
                styleUrls: ['./cv.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 11, vars: 0, consts: [[1, "container", "card"], [1, "card-header"], [1, "card-body"], [1, "card-text"], [1, "badge", "badge-info"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This page is hosted on github pages and content/games were written using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/image-slider/image-slider.component.ts":
/*!********************************************************!*\
  !*** ./src/app/image-slider/image-slider.component.ts ***!
  \********************************************************/
/*! exports provided: ImageSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSliderComponent", function() { return ImageSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["myCanvas"];
const INITIAL_BOARD_SIZE = 4;
class ImageSliderComponent {
    constructor() {
        this.board = [];
        this.parts = [];
        this.boardDimension = INITIAL_BOARD_SIZE;
    }
    ngOnInit() {
    }
    // credits: https://github.com/KyrosDigital/imgsplit/blob/master/imgsplit.html
    ngAfterViewInit() {
        this.split();
    }
    split() {
        let img = new Image();
        img.src = "assets/images/angular.png";
        let ctx = this.canvasElem.nativeElement.getContext('2d');
        console.log("Width: " + img.width);
        console.log("Height: " + img.height);
        var w2 = img.width / 2;
        var h2 = img.height / 2;
        for (var i = 0; i < 4; i++) {
            var x = (-w2 * i) % (w2 * 2);
            var y = (h2 * i) <= h2 ? 0 : -h2;
            this.canvasElem.nativeElement.width = w2;
            this.canvasElem.nativeElement.height = h2;
            ctx.drawImage(img, x, y, w2 * 2, h2 * 2);
            this.parts.push(this.canvasElem.nativeElement.toDataURL());
            var slicedImage = document.createElement('img');
            slicedImage.src = this.parts[i];
            var div = document.getElementById('test');
            div.appendChild(slicedImage);
            div.appendChild(document.createElement('hr'));
        }
        // window.requestAnimationFrame(() => this.split());
    }
}
ImageSliderComponent.ɵfac = function ImageSliderComponent_Factory(t) { return new (t || ImageSliderComponent)(); };
ImageSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageSliderComponent, selectors: [["app-image-slider"]], viewQuery: function ImageSliderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasElem = _t.first);
    } }, decls: 3, vars: 0, consts: [["id", "test"], ["width", "900", "height", "600"], ["myCanvas", ""]], template: function ImageSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1, 2);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-slider',
                templateUrl: './image-slider.component.html'
            }]
    }], function () { return []; }, { canvasElem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myCanvas']
        }] }); })();


/***/ }),

/***/ "./src/app/number-slider/number-slider.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/number-slider/number-slider.component.ts ***!
  \**********************************************************/
/*! exports provided: NumberSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberSliderComponent", function() { return NumberSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_number_slider_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/number-slider/cell */ "./src/app/classes/number-slider/cell.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = ["boardSize"];
function NumberSliderComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberSliderComponent_div_18_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const j_r8 = ctx.index; const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onCellClick(i_r5, j_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r8 = ctx.index;
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.board[i_r5][j_r8].value, " ");
} }
function NumberSliderComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NumberSliderComponent_div_18_div_1_Template, 3, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.board[i_r5]);
} }
const DUMMY = ' ';
const INITIAL_BOARD_SIZE = 4;
class NumberSliderComponent {
    constructor() {
        this.board = [];
        this.totalClicks = 0;
        this.boardDimension = INITIAL_BOARD_SIZE;
        this.fillBoard();
    }
    ngOnInit() {
    }
    fillBoard() {
        let numberArray = new Array((this.boardDimension * this.boardDimension) - 1);
        for (let i = 0; i < (this.boardDimension * this.boardDimension) - 1; i++) {
            numberArray[i] = (i + 1);
        }
        numberArray = this.shuffle(numberArray);
        let count = 0;
        for (let i = 0; i < this.boardDimension; i++) {
            this.board[i] = new Array(this.boardDimension);
            for (let j = 0; j < this.boardDimension; j++) {
                this.board[i][j] = new _classes_number_slider_cell__WEBPACK_IMPORTED_MODULE_1__["Cell"](i, j, '' + numberArray[count++], true);
            }
        }
        this.board[this.boardDimension - 1][this.boardDimension - 1].show = false;
        this.board[this.boardDimension - 1][this.boardDimension - 1].value = DUMMY;
    }
    // credit : http://stackoverflow.com/questions/962802#962890
    shuffle(array) {
        var tmp, current, top = array.length;
        if (top) {
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        }
        return array;
    }
    onCellClick(row, col) {
        if (this.board[row][col].value != DUMMY) {
            let currentCellValue = this.board[row][col].value;
            // is right cell empty?
            if (col + 1 < this.boardDimension && this.board[row][col + 1].value === DUMMY) {
                this.board[row][col + 1].value = currentCellValue;
                this.board[row][col + 1].show = true;
                this.board[row][col].value = DUMMY;
                this.board[row][col].show = false;
                this.totalClicks++;
            }
            // is left cell empty?
            if (col - 1 >= 0 && this.board[row][col - 1].value === DUMMY) {
                this.board[row][col - 1].value = currentCellValue;
                this.board[row][col - 1].show = true;
                this.board[row][col].value = DUMMY;
                this.board[row][col].show = false;
                this.totalClicks++;
            }
            // is top cell empty?
            if (row - 1 >= 0 && this.board[row - 1][col].value === DUMMY) {
                this.board[row - 1][col].value = currentCellValue;
                this.board[row - 1][col].show = true;
                this.board[row][col].value = DUMMY;
                this.board[row][col].show = false;
                this.totalClicks++;
            }
            // is bottom cell empty?
            if (row + 1 < this.boardDimension && this.board[row + 1][col].value === DUMMY) {
                this.board[row + 1][col].value = currentCellValue;
                this.board[row + 1][col].show = true;
                this.board[row][col].value = DUMMY;
                this.board[row][col].show = false;
                this.totalClicks++;
            }
        }
        else {
            alert('Invalid click');
        }
        if (this.isGameCompleted()) {
            alert('Hurray!!! You Won the Game');
        }
    }
    hideCell(i, j) {
        return this.board[i][j].value !== DUMMY;
    }
    isGameCompleted() {
        let gameCompleted = true;
        let count = 1;
        for (let i = 0; i < this.boardDimension; i++) {
            for (let j = 0; j < this.boardDimension; j++) {
                if (i === this.boardDimension - 1 && j === this.boardDimension - 1) {
                    // if you reached here means all cells so far are having correct values.
                    if (this.board[i][j].value === DUMMY) {
                        return true;
                    }
                }
                else {
                    // let num = (count++);
                    console.log(i + " - " + j + " - " + this.board[i][j].value);
                    if (this.board[i][j].value !== '' + (count++)) {
                        return false;
                    }
                }
            }
        }
        return gameCompleted;
    }
    boardSizeChanged() {
        console.log(this.boardSize.nativeElement.value);
        this.board = [];
        this.boardDimension = this.boardSize.nativeElement.value;
        this.totalClicks = 0;
        this.fillBoard();
    }
}
NumberSliderComponent.ɵfac = function NumberSliderComponent_Factory(t) { return new (t || NumberSliderComponent)(); };
NumberSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NumberSliderComponent, selectors: [["app-number-slider"]], viewQuery: function NumberSliderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.boardSize = _t.first);
    } }, decls: 23, vars: 2, consts: [[1, "container", 2, "background-color", "whitesmoke"], [1, "row", "align-items-center", 2, "display", "flex", "justify-content", "center", "align-items", "center"], [1, "col-xs-3"], [3, "change"], ["boardSize", ""], ["value", "2", "selected", ""], ["value", "4", "selected", ""], ["value", "6"], ["value", "8"], [1, "row", 2, "display", "flex", "justify-content", "center", "align-items", "center"], [1, "col-xs-9"], ["class", "row", "style", "display: flex;justify-content: center;align-items: center;", 4, "ngFor", "ngForOf"], ["class", "col-xs-12", 4, "ngFor", "ngForOf"], [1, "col-xs-12"], [1, "btn", "btn-default", 2, "height", "55px", "width", "55px !important", "text-align", "center", "border-radius", "25%", "background-color", "#5DADE2", 3, "click"]], template: function NumberSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Board Size: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NumberSliderComponent_Template_select_change_4_listener() { return ctx.boardSizeChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Jodha (2 X 2)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "4 X 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "6 X 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "8 X 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NumberSliderComponent_div_18_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "* Click on numbers to move UP / DOWN / LEFT / RIGHT to keep all numbers in the order.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total Clicks: ", ctx.totalClicks, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.board);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-number-slider',
                templateUrl: './number-slider.component.html'
            }]
    }], function () { return []; }, { boardSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['boardSize']
        }] }); })();


/***/ }),

/***/ "./src/app/pong/pong.component.ts":
/*!****************************************!*\
  !*** ./src/app/pong/pong.component.ts ***!
  \****************************************/
/*! exports provided: PongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PongComponent", function() { return PongComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_pong_PongGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/pong/PongGame */ "./src/app/classes/pong/PongGame.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["canvasElem"];
const _c1 = function (a0) { return { visibility: a0 }; };
const ADULT_BAT_HEIGHT = 125;
const KIDS_BAT_HEIGHT = 325;
const CANVAS_WIDTH = 900;
const CANVAS_HEIGHT = 600;
const UP_KEY = 38;
const DOWN_KEY = 40;
class PongComponent {
    constructor(router) {
        this.width = CANVAS_WIDTH;
        this.height = CANVAS_HEIGHT;
        this.keyPressedState = { upKeyPressed: false, downKeyPressed: false };
        this.pongGame = new _classes_pong_PongGame__WEBPACK_IMPORTED_MODULE_1__["PongGame"](this.width, this.height);
        this.gameCompleted = false;
        this.router = router;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.renderingContext = this.canvas.nativeElement.getContext('2d');
        this.displayCanvas();
        // refresh this for every 1 milli sec
        setInterval(() => {
            const x = this.pongGame.progress(this.keyPressedState);
            this.t = x.top;
            this.b = x.bottom;
            this.l = x.left;
            this.r = x.right;
        }, 1);
    }
    restartGame() {
        this.gameCompleted = false;
        // location.href="/pong-game";//();
        this.router.navigateByUrl('/');
    }
    displayCanvas() {
        if (this.pongGame.gameCompleted()) {
            this.renderingContext.font = "30px Arial";
            this.renderingContext.fillText("Game Over!", 50, 50);
            this.gameCompleted = true;
            return;
        }
        this.renderingContext.fillStyle = 'black';
        this.renderingContext.fillRect(0, 0, this.width, this.height);
        let bounds;
        // Draw bat
        this.renderingContext.fillStyle = 'red';
        let batObj = this.pongGame.bat;
        bounds = batObj.getCollisionBoundaries();
        this.renderingContext.fillRect(bounds.left, bounds.top, batObj.getWidth(), batObj.getHeight());
        // Draw ball
        this.renderingContext.fillStyle = 'yellow';
        let ballObj = this.pongGame.ball;
        bounds = ballObj.getCollisionBoundaries();
        this.renderingContext.fillRect(bounds.left, bounds.top, ballObj.getWidth(), ballObj.getHeight());
        // Render next frame
        window.requestAnimationFrame(() => this.displayCanvas());
    }
    keyLeft(event) {
        if (event.keyCode == UP_KEY) {
            this.keyPressedState.upKeyPressed = true;
        }
        if (event.keyCode == DOWN_KEY) {
            this.keyPressedState.downKeyPressed = true;
        }
    }
    keyRight(event) {
        if (event.keyCode == UP_KEY) {
            this.keyPressedState.upKeyPressed = false;
        }
        if (event.keyCode == DOWN_KEY) {
            this.keyPressedState.downKeyPressed = false;
        }
    }
    playerChanged(event) {
        const player = event.target.value;
        if (player === 'jodha') {
            this.pongGame.bat.setHeight(KIDS_BAT_HEIGHT);
        }
        else if (player === 'daddy') {
            this.pongGame.bat.setHeight(ADULT_BAT_HEIGHT);
        }
    }
}
PongComponent.ɵfac = function PongComponent_Factory(t) { return new (t || PongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PongComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PongComponent, selectors: [["app-pong"]], viewQuery: function PongComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, hostBindings: function PongComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function PongComponent_keydown_HostBindingHandler($event) { return ctx.keyLeft($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keyup", function PongComponent_keyup_HostBindingHandler($event) { return ctx.keyRight($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 27, vars: 5, consts: [[1, "container"], [1, "row", 2, "background-color", "whitesmoke"], [1, "col-xs-9"], [3, "width", "height"], ["canvasElem", ""], [1, "col-xs-3"], ["widht", "100%", 1, "table", "table-bordered", "table-sm"], [1, "thead-dark"], ["colspan", "3", "scope", "col"], [3, "change"], ["value", "daddy"], ["value", "jodha"], [1, "btn", "btn-success", 3, "ngStyle", "click"]], template: function PongComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "canvas", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Game Controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Player Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PongComponent_Template_select_change_16_listener($event) { return ctx.playerChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Daddy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Jodha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PongComponent_Template_button_click_22_listener() { return ctx.restartGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Go Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "* Use keyboard UP and DOWN arrows to move the paddle.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("height", ctx.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.gameCompleted ? "visible" : "hidden"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PongComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pong',
                templateUrl: './pong.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvasElem']
        }], keyLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keydown', ['$event']]
        }], keyRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keyup', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/tetris/tetris.component.ts":
/*!********************************************!*\
  !*** ./src/app/tetris/tetris.component.ts ***!
  \********************************************/
/*! exports provided: TetrisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TetrisComponent", function() { return TetrisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TetrisComponent {
    constructor() { }
    ngOnInit() {
    }
}
TetrisComponent.ɵfac = function TetrisComponent_Factory(t) { return new (t || TetrisComponent)(); };
TetrisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TetrisComponent, selectors: [["app-tetris"]], decls: 2, vars: 0, template: function TetrisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "work in progress!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TetrisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tetris',
                templateUrl: './tetris.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ski/MyAngularWork/angular-pong-game/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map