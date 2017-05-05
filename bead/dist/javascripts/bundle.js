/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(r,t){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("undefined"!=typeof exports)t(exports);else{var e={exports:{}};t(e.exports),r.canvas=e.exports}}(this,function(r){"use strict";function t(r){if(Array.isArray(r)){for(var t=0,e=Array(r.length);t<r.length;t++)e[t]=r[t];return e}return Array.from(r)}function e(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function r(r,t){var e=[],i=!0,o=!1,n=void 0;try{for(var a,s=r[Symbol.iterator]();!(i=(a=s.next()).done)&&(e.push(a.value),!t||e.length!==t);i=!0);}catch(r){o=!0,n=r}finally{try{!i&&s.return&&s.return()}finally{if(o)throw n}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return r(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function r(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}return function(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}}(),n=function(){function r(){e(this,r),this.canvas=document.getElementById("canvas"),this.cxt=canvas.getContext("2d"),this.width=this.canvas.width=this.canvas.offsetWidth,this.height=this.canvas.height=this.canvas.offsetHeight,this.bounds=this.canvas.getBoundingClientRect(),this.ball_count=50,this.line_range=150,this.r_range=[5,30],this.color=[[23,64,86],[130,5,5]],this.period=[3,8],this.opacity=[.2,.8],this.speed=[-2,2],this.balls=[],this.clickHandle=this.clickHandle.bind(this),this.start()}return o(r,[{key:"bindEvent",value:function(){this.canvas.addEventListener("click",this.clickHandle,!1)}},{key:"unbindEvent",value:function(){this.canvas.removeEventListener("click",this.clickHandle,!1)}},{key:"clickHandle",value:function(r){var t=r.clientX-this.bounds.left,e=r.clientY-this.bounds.top;this.addWork({x:t,y:e})}},{key:"start",value:function(){var r=this;if(this.isAnimate)return!1;for(var t=0;t<this.ball_count;t++)this.addBall();this.isAnimate=!0;var e=function t(){if(!r.isAnimate)return!1;r.render(),r.update(),requestAnimationFrame(t)};requestAnimationFrame(e)}},{key:"getColorList",value:function(r){for(var t=this,e=[this.color[1][0]-this.color[0][0],this.color[1][1]-this.color[0][1],this.color[1][2]-this.color[0][2]],i=Math.max(Math.abs(e[0]),Math.abs(e[1]),Math.abs(e[2]))*r,o=e.map(function(r){return r/i}),n=[],a=0;a<i;a++)!function(r){n.push(o.map(function(e,i){return t.color[0][i]+e*r}))}(a);return n}},{key:"addBall",value:function(){var r={x:this.getRandomNumber([0,this.width]),y:this.getRandomNumber([0,this.height]),vx:this.getRandomNumber(this.speed),vy:this.getRandomNumber(this.speed),opacity:this.getRandomNumber(this.opacity),freq:this.getRandomNumber(this.period),type:~~this.getRandomNumber([0,3]),cur_i:0,reverse:!1};if(r.r=(1-r.opacity)*(this.r_range[1]-this.r_range[0])+this.r_range[0],r.ColorList=this.getColorList(r.freq),this.isOverlap(r))return this.addBall();var e=this.color[0];switch(r.color=[].concat(t(e)),r.type){case 0:break;case 1:r.empty={r:this.getRandomNumber([r.r/2,r.r/4*3])};break;case 2:r.empty={r:this.getRandomNumber([r.r/2,r.r/4*3])},r.son={r:this.getRandomNumber([r.empty.r/2,r.empty.r/4*3]),color:[].concat(t(r.color))}}this.balls.push(r)}},{key:"isOverlap",value:function(r){return!this.balls.every(function(t){return!(Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2))<=r.r+t.r)})}},{key:"addMirrorBall",value:function(r,t){var e={};for(var i in r)void 0!==t[i]?e[i]=t[i]:e[i]=r[i];return e}},{key:"render",value:function(r){var t=this;this.cxt.clearRect(0,0,this.width,this.height),Array.from(this.balls,function(r){if(t.renderBall(r),r.mirror)return t.renderBall(r.mirror);!r.mirror&&r.x<r.r?(r.mirror=t.addMirrorBall(r,{x:r.x+t.width,mirror:null}),t.renderBall(r.mirror)):!r.mirror&&r.x>t.width-r.r?(r.mirror=t.addMirrorBall(r,{x:r.x-t.width,mirror:null}),t.renderBall(r.mirror)):!r.mirror&&r.y<r.r?(r.mirror=t.addMirrorBall(r,{y:r.y+t.height,mirror:null}),t.renderBall(r.mirror)):!r.mirror&&r.y>t.height-r.r&&(r.mirror=t.addMirrorBall(r,{y:r.y-t.height,mirror:null}),t.renderBall(r.mirror))})}},{key:"renderBall",value:function(r,t,e){var i=this,o=t||r.x,n=e||r.y;this.renderArc(o,n,r.r,this.getRGBA(r.color,r.opacity)),this.cxt.globalCompositeOperation="destination-out",r.type>0&&this.renderArc(o,n,r.empty.r,"#fff"),this.cxt.globalCompositeOperation="source-over",2===r.type&&this.renderArc(o,n,r.son.r,this.getRGBA(r.son.color,r.opacity)),Array.from(this.balls,function(t){if(r===t)return!1;var e=Math.sqrt(Math.pow(o-t.x,2)+Math.pow(n-t.y,2));if(e<i.line_range&&e>r.r+t.r){var a=i.cxt.createLinearGradient(o,n,t.x,t.y);1===r.type?(a.addColorStop(0,i.getRGBA(r.color,1-e/i.line_range)),a.addColorStop(r.empty.r/e,i.getRGBA(r.color,1-e/i.line_range)),a.addColorStop(r.empty.r/e,"transparent")):2===r.type?(a.addColorStop(0,"transparent"),a.addColorStop(r.son.r/e,"transparent"),a.addColorStop(r.son.r/e,i.getRGBA(r.color,1-e/i.line_range)),a.addColorStop(r.empty.r/e,i.getRGBA(r.color,1-e/i.line_range)),a.addColorStop(r.empty.r/e,"transparent")):a.addColorStop(0,"transparent"),a.addColorStop(r.r/e,"transparent"),a.addColorStop(r.r/e,i.getRGBA(r.color,1-e/i.line_range)),a.addColorStop(1-t.r/e,i.getRGBA(t.color,1-e/i.line_range)),a.addColorStop(1-t.r/e,"transparent"),a.addColorStop(1,"transparent"),i.cxt.strokeStyle=a,i.renderLine(o,n,t.x,t.y)}else e<r.r+t.r&&!r.isCrash&&(r.isCrash=!0,t.isCrash=!0,i.crashHandle(r,t))})}},{key:"crashHandle",value:function(r,t){var e=Math.atan2(t.y-r.y,t.x-r.x),i=Math.sqrt(r.vx*r.vx+r.vy*r.vy),o=Math.sqrt(t.vx*t.vx+t.vy*t.vy),n=Math.atan2(r.vy,r.vx),a=Math.atan2(t.vy,t.vx),s=i*Math.cos(n-e),l=i*Math.sin(n-e),h=o*Math.cos(a-e),c=o*Math.sin(a-e),u=h,d=l,y=s,v=c;r.vx=Math.cos(e)*u+Math.cos(e+Math.PI/2)*d,r.vy=Math.sin(e)*u+Math.sin(e+Math.PI/2)*d,t.vx=Math.cos(e)*y+Math.cos(e+Math.PI/2)*v,t.vy=Math.sin(e)*y+Math.sin(e+Math.PI/2)*v}},{key:"update",value:function(){var r=this;this.balls=this.balls.map(function(e){return e.x<-e.r?e.mirror:e.x>r.width+e.r?e.mirror:e.y<-e.r?e.mirror:e.y>r.height+e.r?e.mirror:(e.x+=e.vx,e.y+=e.vy,e.color=e.color.map(function(r,t){return e.cur_i++,e.cur_i===e.ColorList.length&&(e.cur_i=0,e.reverse=!e.reverse),e.ColorList[e.reverse?e.ColorList.length-e.cur_i-1:e.cur_i][t]}),2===e.type&&(e.son.color=[].concat(t(e.color))),e.mirror&&(e.mirror.x+=e.mirror.vx,e.mirror.y+=e.mirror.vy),e.isCrash&&(e.isCrash=!1),e)})}},{key:"getRGBA",value:function(r,t){return"rgba("+~~r[0]+", "+~~r[1]+", "+~~r[2]+", "+t+")"}},{key:"getRandomNumber",value:function(r,t){var e=i(r,2),o=e[0],n=e[1];return Math.random()*(n-o)+o}},{key:"renderArc",value:function(r,t,e,i){this.cxt.fillStyle=i,this.cxt.beginPath(),this.cxt.arc(r,t,e,0,2*Math.PI,!0),this.cxt.closePath(),this.cxt.fill()}},{key:"renderLine",value:function(r,t,e,i){this.cxt.beginPath(),this.cxt.moveTo(r,t),this.cxt.lineTo(e,i),this.cxt.closePath(),this.cxt.stroke()}},{key:"renderTri",value:function(r,t,e){this.cxt.beginPath(),this.cxt.moveTo(r.x,r.y),this.cxt.lineTo(t.x,t.y),this.cxt.lineTo(e.x,e.y),this.cxt.lineTo(r.x,r.y),this.cxt.closePath(),this.cxt.stroke()}}]),r}();r.default=n});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e,n){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (n), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("undefined"!=typeof exports)n(require("./canvas.js"));else{var t={exports:{}};n(e.canvas),e.index=t.exports}}(this,function(e){"use strict";new(function(e){return e&&e.__esModule?e:{default:e}}(e).default)});

/***/ })
/******/ ]);