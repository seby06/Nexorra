(this.webpackJsonp=this.webpackJsonp||[]).push([[5],{48:function(t,i,e){"use strict";e.d(i,"a",(function(){return o}));var n=e(1);function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _defineProperty(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var o=function(t){var i,e;e=t,(i=Button10).prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e;var o;o=Button10;function Button10(i){var e;return _defineProperty(_assertThisInitialized(e=t.call(this)||this),"button",void 0),_defineProperty(_assertThisInitialized(e),"up",void 0),_defineProperty(_assertThisInitialized(e),"down",void 0),_defineProperty(_assertThisInitialized(e),"over",void 0),_defineProperty(_assertThisInitialized(e),"callBack",void 0),_defineProperty(_assertThisInitialized(e),"onUp",!1),_defineProperty(_assertThisInitialized(e),"ID",void 0),_defineProperty(_assertThisInitialized(e),"overTint",void 0),_defineProperty(_assertThisInitialized(e),"downTint",void 0),_defineProperty(_assertThisInitialized(e),"overSize",void 0),_defineProperty(_assertThisInitialized(e),"img",void 0),i.back&&e.addChild(n.m.from(i.back)).anchor.set(.5),null!=i.up?e.up=n.p.from(i.up):e.up=n.p.EMPTY,e.button=e.addChild(new n.m(e.up)),e.button.anchor.set(.5),e.over=i.over?n.p.from(i.over):e.up,e.down=i.down?n.p.from(i.down):e.over,null!=i.overTint&&(e.overTint=i.overTint),null!=i.downTint&&(e.downTint=i.downTint),null!=i.ID&&(e.ID=i.ID),null!=i.overSize&&(e.overSize=i.overSize),null!=i.hitA&&(e.hitArea=i.hitA),e.interactive=!0,e.buttonMode=!0,e.on("pointerover",e.pointerListener,_assertThisInitialized(e)),e.on("pointerout",e.pointerListener,_assertThisInitialized(e)),e.on("pointerdown",e.pointerListener,_assertThisInitialized(e)),i.onUp?(e.on("pointerup",i.callBack),e.onUp=!0):e.callBack=i.callBack,i.img&&(e.img=e.addChild(n.m.from(i.img)),e.img.anchor.set(.5)),e}return Button10.prototype.pointerListener=function(t){"pointerover"===t.type?(this.button.texture=this.over,this.button.anchor.set(.5),this.overTint&&(this.button.tint=this.overTint),this.overSize&&this.button.scale.set(this.overSize)):"pointerout"===t.type?(this.button.texture=this.up,this.button.anchor.set(.5),this.button.tint=16777215,this.button.scale.set(1)):"pointerdown"===t.type?(this.button.texture=this.down,this.button.anchor.set(.5),this.downTint&&(this.button.tint=this.downTint),this.onUp||this.callBack(t),this.button.scale.set(1)):"pointerup"===t.type&&this.callBack(t)},Button10}(n.c)}}]);