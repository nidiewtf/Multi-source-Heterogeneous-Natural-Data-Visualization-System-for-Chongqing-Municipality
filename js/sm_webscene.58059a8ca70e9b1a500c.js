(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{dkUa:function(e,t,n){"use strict";n.r(t);var i=n("hdLw"),i=n.n(i),o=n("XaGS"),r=n.n(o),c=n("QCDS");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,function(e){e=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0===n)return("string"===t?String:Number)(e);n=n.call(e,t||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}(e,"string");return"symbol"===s(e)?e:String(e)}(i.key),i)}}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function p(n){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=u(n),t=(e=i?(e=u(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){var t=s;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e);var n,o=p(s);function s(e,t,n){var i;if(this instanceof s)return(i=o.call(this)).id=e,i.scanEffect=n.scanEffect||{status:!1,type:"noScan",centerPosition:{},period:2e3,speed:500},i.options=n,i.position=n.position||{},i.orientation=n.orientation||{},t&&(i.sceneUrl=t,i.init().then(function(){i.setSceneUrl(t)})),i;throw new TypeError("Cannot call a class as a function")}return t=s,(e=[{key:"setSceneUrl",value:function(e){var t=this;e&&(this.sceneUrl=e,this.viewer?this._createScene(e):this.init().then(function(){t.setSceneUrl(e)}))}},{key:"init",value:function(){var t=this;return new Promise(function(e){window.SuperMap3D?(t.initViewer(),e()):(Object(c.r)("".concat(Object(c.i)(),"SuperMap3D/Widgets/widgets.css")),Object(c.s)("".concat(Object(c.i)(),"SuperMap3D/SuperMap3D.js")).then(function(){Object(c.s)(Object(c.k)()+"static/open-scene.js").then(function(){t.initViewer(),e()})}))})}},{key:"initViewer",value:function(){this.viewer=new window.SuperMap3D.Viewer(this.id,{timeline:!0});var e=document.getElementsByClassName("supermap3d-infoBox-iframe")[0];e&&(e.setAttribute("sandbox","allow-same-origin allow-scripts allow-popups allow-forms"),e.setAttribute("src","")),this.viewer.timeline.container.style.visibility="hidden",this.viewer.Widget.creditContainer.style.visibility="hidden",this.viewer.resolutionScale=window.devicePixelRatio,this.scene=this.viewer.scene,this.fire("instancedidload",{instance:{Cesium:window.SuperMap3D,viewer:this.viewer}})}},{key:"setScanEffect",value:function(e){var t=this;r()(this.scanEffect,e)||("noScan"===(this.scanEffect=e).type?(this.scene&&(this.scene.scanEffect.show=!1),this.scene&&(this.scene.scanEffect.type=e.type)):setTimeout(function(){t.scene&&(t.scene.scanEffect.show=!0),t._startScan(e.type)},100))}},{key:"setPosition",value:function(e,t){var n,i,o,s,c;r()(this.position,e)||(this.position=e,this.scene&&e&&(c=(i=e.destination).x,n=i.y,i=i.z,o=(e=e.orientation).heading,s=e.roll,e=e.pitch,o=window.SuperMap3D.Math.toRadians(o),s=window.SuperMap3D.Math.toRadians(s),e=window.SuperMap3D.Math.toRadians(e),c={duration:1,destination:window.SuperMap3D.Cartesian3.fromDegrees(c,n,i),orientation:{heading:o,roll:s,pitch:e}},t?this.scene.camera.flyTo(c):this.scene.camera.setView(c)))}},{key:"removeInputAction",value:function(){this.handler&&(this.handler.removeInputAction(window.SuperMap3D.ScreenSpaceEventType.LEFT_CLICK),window.SuperMap3D=null,this.scene=null,this.viewer=null,this.handler=null)}},{key:"_createScene",value:function(e){var n=this,t=(this.scene&&this.scene.layers.removeAll(),this._getSceneParam()),i=e.split("/"),e=e.split("/web/scenes")[0];"/iportal"===e&&(e=location.origin+"/iportal"),window.openExistScene(i[i.length-1],this.viewer,e,this.options),this.scene.fxaa=!0,this.handler=new window.SuperMap3D.ScreenSpaceEventHandler(this.scene.canvas),this.handler.setInputAction(function(e){var t=n._getSceneParam();t.scanEffect.status&&"noScan"!==t.scanEffect.type&&(e=e.position,e=n.scene.pickPosition(e),n.scene.scanEffect.centerPosition=e,t.scanEffect.centerPosition=e,n.scanEffect.centerPosition=e,n.fire("scanpositionchanged",{centerPosition:e}),n._startScan(n.scanEffect.type))},window.SuperMap3D.ScreenSpaceEventType.LEFT_CLICK),this.viewer.camera.moveEnd.addEventListener(function(){var e=n.getPosition(),t=n.getOrientation();n.fire("viewerpositionchanged",{position:{orientation:t,destination:e}})}),t.scanEffect.status&&"noScan"!==t.scanEffect.type&&setTimeout(function(){n._startScan(t.scanEffect.type)},3e3),this.sceneParam=t}},{key:"getPosition",value:function(){var e=this.viewer.scene.camera.position,e=window.SuperMap3D.Cartographic.fromCartesian(e);return{x:window.SuperMap3D.Math.toDegrees(e.longitude),y:window.SuperMap3D.Math.toDegrees(e.latitude),z:e.height}}},{key:"getOrientation",value:function(){var e=this.viewer.scene.camera,t=e.heading,n=e.roll,e=e.pitch,n=window.SuperMap3D.Math.toDegrees(n),e=window.SuperMap3D.Math.toDegrees(e);return{heading:window.SuperMap3D.Math.toDegrees(t),roll:n,pitch:e}}},{key:"_getSceneParam",value:function(){return{sceneUrl:this.sceneUrl,position:this.position,orientation:this.orientation,scanEffect:{status:this.scanEffect.status||!1,type:this.scanEffect.type||(this.scanEffect.status?"circle":"noScan"),centerPosition:this.scanEffect.centerPosition||{},_period:this.scanEffect.period||2e3,speed:this.scanEffect.speed||500,color:null}}}},{key:"_startScan",value:function(e){var t=this.scene.camera;this.scene.scanEffect.show=!1,this.scene.scanEffect.mode="line"===e?window.SuperMap3D.ScanEffectMode.LINE:window.SuperMap3D.ScanEffectMode.CIRCLE,(this.sceneParam.scanEffect.centerPostion||this.scanEffect.centerPostion||{}).x?this.scene.scanEffect.centerPostion=this.sceneParam.scanEffect.centerPostion:(this.sceneParam.scanEffect.centerPostion=new window.SuperMap3D.Cartesian3(t.position.x,t.position.y,t.position.z),this.scene.scanEffect.centerPostion=new window.SuperMap3D.Cartesian3(t.position.x,t.position.y,t.position.z)),this.scene.scanEffect.color=window.SuperMap3D.Color.CORNFLOWERBLUE,this.scene.scanEffect._period=parseFloat(this.scanEffect.period),this.scene.scanEffect.speed=parseFloat(this.scanEffect.speed),this.scene.scanEffect.show=!0}}])&&a(t.prototype,e),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(i.a.Evented),l=n("M7pi"),o={props:{sceneUrl:{type:String},options:{type:Object},flyAnimation:{type:Boolean}},data:function(){return{id:""}},watch:{sceneUrl:function(){this.webSceneViewModel&&this.webSceneViewModel.setSceneUrl(this.sceneUrl)},"options.scanEffect":function(e){this.webSceneViewModel&&this.webSceneViewModel.setScanEffect(e)},"options.position":function(e){this.webSceneViewModel&&this.webSceneViewModel.setPosition(e,this.flyAnimation)}},created:function(){this.id="web_scene_"+l.a.uuid()},mounted:function(){this.webSceneViewModel=new h(this.id,this.sceneUrl,this.options),this.registerEvents()},methods:{registerEvents:function(){this.webSceneViewModel.on("viewerpositionchanged",this.changeViewerPositionFn),this.webSceneViewModel.on("scanpositionchanged",this.changeScanPositionFn),this.webSceneViewModel.on("instancedidload",this.instanceDidLoadFn)},changeViewerPositionFn:function(e){this.$emit("viewer-position-changed",e.position)},changeScanPositionFn:function(e){this.$emit("viewer-scan-position-changed",e.centerPosition)},instanceDidLoadFn:function(e){this.$emit("instance-did-load",e.instance)}},beforeDestory:function(){this.webSceneViewModel.off("viewerpositionchanged",this.changeViewerPositionFn),this.webSceneViewModel.off("scanpositionchanged",this.changeScanPositionFn),this.webSceneViewModel.off("instancedidload",this.instanceDidLoad),this.webSceneViewModel.removeInputAction(),this.webSceneViewModel=null}},i=n("KHd+"),n=Object(i.a)(o,function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"sm-component-web-scene",attrs:{id:e.id}})},[],!1,null,null,null);t.default=n.exports}}]);