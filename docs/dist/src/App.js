!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Landing=e():t.Landing=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=44)}([function(t,e){t.exports=function(t,e,n,r){var i,o=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,o=t.default);var a="function"==typeof o?o.options:o;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),r){var u=a.computed||(a.computed={});Object.keys(r).forEach(function(t){var e=r[t];u[t]=function(){return e}})}return{esModule:i,exports:o,options:a}}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=l[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(s(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],i=0;i<n.parts.length;i++)o.push(s(n.parts[i]));l[n.id]={id:n.id,refs:1,parts:o}}}}function i(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=o[0],a=o[1],u=o[2],c=o[3],l={css:a,media:u,sourceMap:c};r[s]?(l.id=t+":"+r[s].parts.length,r[s].parts.push(l)):(l.id=t+":0",n.push(r[s]={id:s,parts:[l]}))}return n}function o(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function s(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]'),i=null!=r;if(i&&h)return m;if(v){var s=p++;r=f||(f=o()),e=a.bind(null,r,s,!1),n=a.bind(null,r,s,!0)}else r=r||o(),e=u.bind(null,r),n=function(){r.parentNode.removeChild(r)};return i||e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function a(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function u(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=n(43),l={},d=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var o=i(t,e);return r(o),function(e){for(var n=[],s=0;s<o.length;s++){var a=o[s],u=l[a.id];u.refs--,n.push(u)}e?(o=i(t,e),r(o)):o=[];for(var s=0;s<n.length;s++){var u=n[s];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete l[u.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n){for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r))if((0,l.isArray)(e[r])||(0,l.isObject)(e[r])){if(!i(t[r],e[r],n[r]))return!1}else{if(0!==n[r])return!1;if(t[r]!==e[r])return!1}return!0}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&a.return&&a.return()}finally{if(i)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=n(6),a=r(s),u=n(4),c=r(u),l=n(7);e.default={data:function(){return{currentValues:null,currentVelocities:null}},props:{value:Number,values:[Object,Array],tag:{type:String,default:"span"},spring:{type:[Object,String],default:"noWobble"}},computed:{springConfig:function(){return"string"==typeof this.spring?c.default[this.spring]:this.spring},realValues:function(){return null!=this.value?{value:this.value}:this.values}},render:function(t){return t(this.tag,[this.$scopedSlots.default(this.currentValues)])},watch:{realValues:function(t,e){e===t||this.wasAnimating||(this.prevTime=(0,l.now)(),this.accumulatedTime=0,this.animate())}},created:function(){var t=this.defineInitialValues(this.realValues,null);this.currentValues=t.values,this.currentVelocities=t.velocities},mounted:function(){this.prevTime=(0,l.now)(),this.accumulatedTime=0;var t=this.defineInitialValues(this.currentValues,this.currentVelocities);this.idealValues=t.values,this.idealVelocities=t.velocities,this.animate()},methods:{defineInitialValues:function(t,e){var n={},r={};return this.defineValues(t,e,n,r),{values:n,velocities:r}},defineValues:function(t,e,n,r){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&((0,l.isArray)(t[i])||(0,l.isObject)(t[i])?(n[i]={},r[i]={},this.defineValues(t[i],e&&e[i],n[i],r[i])):(n[i]=t[i],r[i]=e?e[i]:0))},animate:function(){var t=this;this.animationId=(0,l.raf)(function(){if(i(t.currentValues,t.realValues,t.currentVelocities))return t.wasAnimating&&t.$emit("motion-end"),t.animationId=null,void(t.wasAnimating=!1);t.wasAnimating||t.$emit("motion-start"),t.wasAnimating=!0;var e=(0,l.now)(),n=e-t.prevTime;if(t.prevTime=e,t.accumulatedTime+=n,t.accumulatedTime>1e3/60*10&&(t.accumulatedTime=0),0===t.accumulatedTime)return t.animationID=null,t.$emit("motion-restart"),void t.animate();var r=(t.accumulatedTime-Math.floor(t.accumulatedTime/(1e3/60))*(1e3/60))/(1e3/60),o=Math.floor(t.accumulatedTime/(1e3/60)),s=t.springConfig;t.animateValues({framesToCatchUp:o,currentFrameCompletion:r,springConfig:s,realValues:t.realValues,currentValues:t.currentValues,currentVelocities:t.currentVelocities,idealValues:t.idealValues,idealVelocities:t.idealVelocities}),t.animationID=null,t.accumulatedTime-=o*(1e3/60),t.animate()})},animateValues:function(t){var e=t.framesToCatchUp,n=t.currentFrameCompletion,r=t.springConfig,i=t.realValues,s=t.currentValues,u=t.currentVelocities,c=t.idealValues,d=t.idealVelocities;for(var f in i)if(Object.prototype.hasOwnProperty.call(i,f))if((0,l.isArray)(i[f])||(0,l.isObject)(i[f]))this.animateValues({framesToCatchUp:e,currentFrameCompletion:n,springConfig:r,realValues:i[f],currentValues:s[f],currentVelocities:u[f],idealValues:c[f],idealVelocities:d[f]});else{for(var p=c[f],h=d[f],m=i[f],v=0;v<e;v++){var g=(0,a.default)(1e3/60/1e3,p,h,m,r.stiffness,r.damping,r.precision),b=o(g,2);p=b[0],h=b[1]}var _=(0,a.default)(1e3/60/1e3,p,h,m,r.stiffness,r.damping,r.precision),y=o(_,2),x=y[0],w=y[1];s[f]=p+(x-p)*n,u[f]=h+(w-h)*n,c[f]=p,d[f]=h}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={noWobble:{stiffness:170,damping:26,precision:.01},gentle:{stiffness:120,damping:14,precision:.01},wobbly:{stiffness:180,damping:12,precision:.01},stiff:{stiffness:210,damping:20,precision:.01}}},function(t,e,n){n(41);var r=n(0)(n(8),n(35),"data-v-9e48fde0",null);t.exports=r.exports},function(t,e,n){"use strict";function r(t,e,n,r,o,s,a){var u=-o*(e-r),c=-s*n,l=u+c,d=n+l*t,f=e+d*t;return Math.abs(d)<a&&Math.abs(f-r)<a?(i[0]=r,i[1]=0,i):(i[0]=f,i[1]=d,i)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var i=[0,0]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.raf=window.requestAnimationFrame.bind(window),e.now=performance.now.bind(performance),e.isArray=Array.isArray.bind(Array),e.isObject=function(t){return null!==t&&"object"===(void 0===t?"undefined":r(t))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n.n(r),o=n(27),s=n.n(o),a=n(25),u=n.n(a),c=n(26),l=n.n(c),d=n(24),f=n.n(d),p=n(22),h=n.n(p);e.default={data:function(){return{currentTab:-1}},mounted:function(){this.currentTab=1,document.body.style.backgroundColor="ghostwhite"},computed:{tabsPositions:function(){if(this.currentTab,!this.$el)return{first:0,second:0};var t=this.$refs.first,e=this.$refs.second;return{first:this.currentTab*-t.$el.offsetWidth,second:(1-this.currentTab)*e.$el.offsetWidth}}},components:{Motion:i.a,VueLogo:s.a,Tabs:l.a,Tab:u.a,Playground:f.a,Gallery:h.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n.n(r),o=n(23),s=n.n(o),a="https://github.com/posva/vue-motion/raw/master/docs/static/";e.default={data:function(){return{current:0}},computed:{sizes:function(){var t=this.photos[this.current];return this.photos.map(function(e){return{width:e.width*(t.height/e.height),height:t.height}})},sizesNormalized:function(){return this.sizes.reduce(function(t,e,n){return t.pictures[n]=e,t},{layout:{width:this.photos[this.current].width,height:this.photos[this.current].height},pictures:[]})},photos:function(){return[{width:300,height:450,src:a+"cat1.jpg"},{width:500,height:390,src:a+"cat2.jpg"},{width:500,height:330,src:a+"cat3.jpg"},{width:491,height:251,src:a+"cat4.jpg"},{width:447,height:500,src:a+"cat5.jpg"},{width:320,height:154,src:"https://media.giphy.com/media/JEVqknUonZJWU/giphy.gif"}]}},methods:{next:function(){++this.current>=this.photos.length&&(this.current=0)},previous:function(){--this.current<0&&(this.current=this.photos.length-1)},leftSpace:function(t){for(var e=Array(this.photos.length),n=0,r=this.current;r<this.photos.length;++r)e[r]=n,n+=t["w"+r];if(this.current>0){n=0;for(var i=this.current-1;i>=0;--i)n-=t["w"+i],e[i]=n}return e}},components:{Motion:i.a,PhotosContainer:s.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n.n(r);e.default={props:["sizes","current"],computed:{left:function(){for(var t=this,e=0,n=0;n<this.current;++n)e+=t.sizes[n].width;return-e}},created:function(){console.log("hey")},components:{Motion:i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n.n(r),o=n(4),s=n.n(o);e.default={data:function(){return{n:0,max:200,config:{stiffness:170,damping:26,precision:.01}}},computed:{presets:function(){return s.a},logoSize:function(){return{width:this.logoWidth,height:this.logoHeight}}},methods:{toggle:function(){this.n=this.n<this.max/2?this.max:0},setSpring:function(t){this.config=t,this.config.precision=this.config.precision||.01},start:function(){console.log("---------"),console.log("Start"),console.time("motion")},end:function(){console.log("Stop"),console.timeEnd("motion"),console.log("---------")},restart:function(){console.log("Restart")}},components:{Motion:i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["index"],computed:{classes:function(){return{"tabs__tab--active":this.$parent.value===this.index}}},methods:{select:function(){this.$parent.select(this.index)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["value"],methods:{select:function(t){this.$emit("input",t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n.n(r),o=n(28),s=n.n(o);e.default={data:function(){return{x:-1e3,rotated:0}},mounted:function(){var t=this;setTimeout(function(){t.x=0},1e3)},methods:{end:function(){var t=this;this.timer=setTimeout(function(){t.timer=null,t.rotated=0===t.rotated?180:0},1e4)},animate:function(){this.timer&&clearTimeout(this.timer),this.rotated+=360},style:function(t){return{overflow:Math.abs(t)>10?"hidden":"initial"}}},computed:{spring:function(){return{stiffness:180,damping:12,precision:.01}},values:function(){return{x:this.x,rotated:this.rotated}}},components:{Motion:i.a,VueSvg:s.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{width:Number,height:Number,x:Number,rotated:Number},computed:{style:function(){return{width:this.width,height:this.height,transform:"perspective(200px)                     translateX("+this.x+"px)                     rotateY("+this.rotated+"deg)"}}}}},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,".tabs{display:flex;justify-content:center;margin:1rem 0}",""])},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,".logo[data-v-262cfbc0]{border:2px solid #d3d3d3;background-color:#fff;border-radius:1rem;padding:1.2rem 0;max-width:100%;width:480px;margin:auto}.logo svg[data-v-262cfbc0]{display:block;margin:auto}",""])},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,".demo[data-v-46356e1c]{width:100px;height:100px;background-color:crimson}.demo-container[data-v-46356e1c]{width:300px;background-color:#d3d3d3}",""])},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,".demo[data-v-63623a41]{display:flex;align-items:center;height:600px}.demo-inner[data-v-63623a41]{width:100%}.container[data-v-63623a41]{position:relative;overflow:hidden;margin:auto;max-width:100%}.photos[data-v-63623a41]{position:absolute;white-space:nowrap}.controls[data-v-63623a41]{display:flex;max-width:500px}.controls button[data-v-63623a41]{flex:1}.controls input[data-v-63623a41]{flex:3}",""])},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Lato);",""]),e.push([t.i,"[data-v-9e48fde0]{box-sizing:border-box;font-family:Lato,helvetica neue,sans-serif}.landing[data-v-9e48fde0]{background-color:#f8f8ff;padding:20px;overflow-x:hidden}.landing__title[data-v-9e48fde0]{font-size:48px;margin:1rem 0;text-align:center}.landing__subtitle[data-v-9e48fde0]{font-size:1.1rem;text-align:center;color:gray}.landing__main[data-v-9e48fde0]{position:relative;width:100%;height:656px}.landing__content[data-v-9e48fde0]{position:absolute;background-color:#fff;left:0;right:0;width:100%;border:1px solid #e5e5e5;padding:1rem;border-radius:.5rem;display:inline-block}.landing__docs-link[data-v-9e48fde0]{text-align:center;margin-bottom:.7rem}",""])},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,".tabs__tab{border:1px solid #555;color:#333;padding:.5rem;margin:0 .3rem;border-radius:.3rem;background-color:#ddd;user-select:none;font-size:1rem}.tabs__tab:not(.tabs__tab--active):hover{background-color:#eee;cursor:pointer}.tabs__tab--active{color:#eee;background-color:#35495e}",""])},function(t,e,n){n(40);var r=n(0)(n(9),n(33),"data-v-63623a41",null);t.exports=r.exports},function(t,e,n){var r=n(0)(n(10),n(34),null,null);t.exports=r.exports},function(t,e,n){n(39);var r=n(0)(n(11),n(32),"data-v-46356e1c",null);t.exports=r.exports},function(t,e,n){n(42);var r=n(0)(n(12),n(36),null,null);t.exports=r.exports},function(t,e,n){n(37);var r=n(0)(n(13),n(29),null,null);t.exports=r.exports},function(t,e,n){n(38);var r=n(0)(n(14),n(30),"data-v-262cfbc0",null);t.exports=r.exports},function(t,e,n){var r=n(0)(n(15),n(31),null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tabs"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Motion",{attrs:{tag:"div",values:t.values,spring:t.spring},on:{"motion-end":t.end},scopedSlots:t._u([["default",function(e){return[n("div",{staticClass:"logo",style:t.style(e.x)},[n("VueSvg",{attrs:{width:256,height:221,x:e.x,rotated:e.rotated},nativeOn:{touchstart:function(e){t.animate(e)}}})],1)]}]])})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{style:t.style,attrs:{viewBox:"0 0 256 221",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMinYMin meet"}},[n("path",{attrs:{d:"M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z",fill:"#41B883"}}),t._v(" "),n("path",{attrs:{d:"M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z",fill:"#35495E"}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Motion",{attrs:{value:t.n,spring:t.config},on:{"motion-start":t.start,"motion-end":t.end,"motion-restart":t.restart},scopedSlots:t._u([["default",function(e){return[n("span",[t._v("Value is")]),t._v(" "),n("pre",[t._v(t._s(e))]),t._v(" "),n("div",{staticClass:"demo-container"},[n("div",{staticClass:"demo",style:{transform:"translate3d("+e.value+"px, 0, 0)"}})])]}]])}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.n,expression:"n",modifiers:{number:!0}}],attrs:{step:"10",type:"number"},domProps:{value:t.n},on:{input:function(e){e.target.composing||(t.n=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),n("br"),t._v(" "),n("button",{on:{click:t.toggle}},[t._v("Toggle")]),t._v(" "),n("br"),t._v(" "),n("label",[t._v("\n    Stiffness\n    "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.config.stiffness,expression:"config.stiffness",modifiers:{number:!0}}],attrs:{step:"10",type:"number"},domProps:{value:t.config.stiffness},on:{input:function(e){e.target.composing||(t.config.stiffness=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),n("br"),t._v(" "),n("label",[t._v("\n    Damping\n    "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.config.damping,expression:"config.damping",modifiers:{number:!0}}],attrs:{step:"1",type:"number"},domProps:{value:t.config.damping},on:{input:function(e){e.target.composing||(t.config.damping=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),n("br"),t._v(" "),n("label",[t._v("\n    Precision\n    "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.config.precision,expression:"config.precision",modifiers:{number:!0}}],attrs:{step:"0.01",type:"number"},domProps:{value:t.config.precision},on:{input:function(e){e.target.composing||(t.config.precision=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),n("br"),t._v(" "),t._l(t.presets,function(e,r){return n("button",{on:{click:function(n){t.setSpring(e)}}},[t._v(t._s(r))])})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"controls"},[n("button",{on:{click:t.previous}},[t._v("Previous")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.current,expression:"current"}],attrs:{type:"range",min:"0",max:t.photos.length-1},domProps:{value:t.current},on:{__r:function(e){t.current=e.target.value}}}),t._v(" "),n("button",{on:{click:t.next}},[t._v("Next")])]),t._v(" "),n("div",{staticClass:"demo"},[n("Motion",{staticClass:"demo-inner",attrs:{values:t.sizesNormalized,tag:"div"},scopedSlots:t._u([["default",function(e){return[n("PhotosContainer",{staticClass:"container",style:{width:e.layout.width+"px",height:e.layout.height+"px"},attrs:{sizes:t.sizes,current:t.current},scopedSlots:t._u([["default",function(r){return[n("div",{staticClass:"photos",style:{left:r.left+"px"}},t._l(t.photos,function(r,i){return n("img",{staticClass:"photo",style:{width:e.pictures[i].width+"px",height:e.pictures[i].height+"px"},attrs:{src:r.src},on:{touchstart:t.next}})}))]}]])})]}]])})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("Motion",{attrs:{tag:"div",value:t.left},scopedSlots:t._u([["default",function(e){return[t._t("default",null,{left:e.value})]}]])})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"landing"},[n("h1",{staticClass:"landing__title"},[t._v("Vue Motion")]),t._v(" "),n("h2",{staticClass:"landing__subtitle"},[t._v("Natural animations for Vue")]),t._v(" "),n("VueLogo"),t._v(" "),n("section",[n("Tabs",{model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[n("Tab",{attrs:{index:0}},[t._v("Playground")]),t._v(" "),n("Tab",{attrs:{index:1}},[t._v("Gallery Example")])],1),t._v(" "),t._m(0),t._v(" "),n("Motion",{staticClass:"landing__main",attrs:{tag:"div",values:t.tabsPositions},scopedSlots:t._u([["default",function(e){return[n("Playground",{ref:"first",staticClass:"landing__content",style:{transform:"translateX("+e.first+"px)"}}),t._v(" "),n("Gallery",{ref:"second",staticClass:"landing__content",style:{transform:"translateX("+e.second+"px)"}})]}]])})],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"landing__docs-link"},[n("a",{attrs:{href:"#/home"}},[t._v("Documentation")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tabs__tab",class:t.classes,attrs:{role:"button",tabindex:"0"},on:{click:t.select,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13)&&t._k(e.keyCode,"space",32))return null;t.select(e)}}},[t._t("default")],2)},staticRenderFns:[]}},function(t,e,n){var r=n(16);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("bab2b4d2",r,!0)},function(t,e,n){var r=n(17);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("1d85cfb3",r,!0)},function(t,e,n){var r=n(18);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("29bcf9ae",r,!0)},function(t,e,n){var r=n(19);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("0b6f84f8",r,!0)},function(t,e,n){var r=n(20);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("cddfbd04",r,!0)},function(t,e,n){var r=n(21);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("d3770410",r,!0)},function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=o[0],a=o[1],u=o[2],c=o[3],l={id:t+":"+i,css:a,media:u,sourceMap:c};r[s]?r[s].parts.push(l):n.push(r[s]={id:s,parts:[l]})}return n}},function(t,e,n){t.exports=n(5)}])});
//# sourceMappingURL=App.js.map