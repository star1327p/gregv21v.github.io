(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var b=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"023a":function(e,t,n){"use strict";n("4480")},"36d3":function(e,t,n){"use strict";n("5676")},4480:function(e,t,n){},5676:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={id:"nav"},o=Object(r["e"])("Home"),a=Object(r["e"])(" | "),i=Object(r["e"])("Games"),u=Object(r["e"])(" | "),s=Object(r["e"])("Apps"),b=Object(r["e"])(" | "),p=Object(r["e"])("Courses");function d(e,t,n,d,l,f){var j=Object(r["v"])("router-link"),m=Object(r["v"])("router-view");return Object(r["o"])(),Object(r["d"])(r["a"],null,[Object(r["f"])("div",c,[Object(r["f"])(j,{to:"/"},{default:Object(r["A"])((function(){return[o]})),_:1}),a,Object(r["f"])(j,{to:"/games"},{default:Object(r["A"])((function(){return[i]})),_:1}),u,Object(r["f"])(j,{to:"/apps"},{default:Object(r["A"])((function(){return[s]})),_:1}),b,Object(r["f"])(j,{to:"/courses"},{default:Object(r["A"])((function(){return[p]})),_:1})]),Object(r["f"])(m)],64)}var l={name:"App",components:{}};n("f2bb");l.render=d;var f=l,j=n("6c02"),m=Object(r["B"])("data-v-20da7cda");Object(r["r"])("data-v-20da7cda");var O=Object(r["f"])("h1",null,"Home",-1),v=Object(r["f"])("p",null,"Welcome to my github website!!",-1),h=Object(r["f"])("p",null," I have many github projects on my Github website. Some of them are more developed then others. To help you navigate my github better, I have created this website. I will try my best to keep this up to date because it changes all the time. ",-1);Object(r["p"])();var g=m((function(e,t){return Object(r["o"])(),Object(r["d"])("div",null,[O,v,h])}));n("023a");const y={};y.render=g,y.__scopeId="data-v-20da7cda";var w=y,k=Object(r["f"])("h1",null,"Games",-1);function x(e,t,n,c,o,a){var i=Object(r["v"])("Project");return Object(r["o"])(),Object(r["d"])("div",null,[k,Object(r["f"])(i,{name:"Compact Farmer",description:"a game where you start with a small farm and slowly expand it",imageName:"compact-farmer"}),Object(r["f"])(i,{name:"Chemistry Lab",description:"a game about mixing Chemicals to create better chemicals",imageName:"chemistry-lab"})])}n("b0c0"),n("a4d3"),n("e01a");var S=Object(r["B"])("data-v-6aebddb5");Object(r["r"])("data-v-6aebddb5");var _={href:"/pages"};Object(r["p"])();var C=S((function(e,t,n,c,o,a){return Object(r["o"])(),Object(r["d"])("div",null,[Object(r["f"])("h1",null,[Object(r["f"])("a",_,Object(r["x"])(n.name),1)]),Object(r["f"])("p",null,Object(r["x"])(n.description),1),Object(r["f"])("img",{src:"./screenshots/".concat(n.imageName,".png"),width:"600",height:"300"},null,8,["src"])])})),P={name:"Project",props:{name:String,description:String,imageName:String}};n("d22e");P.render=C,P.__scopeId="data-v-6aebddb5";var A=P,T={name:"Games",components:{Project:A}};T.render=x;var I=T,L=Object(r["f"])("h1",null,"Apps",-1);function G(e,t,n,c,o,a){var i=Object(r["v"])("Project");return Object(r["o"])(),Object(r["d"])("div",null,[L,Object(r["f"])(i,{name:"Spending Tracker",description:"An app to keep track of your spending.",imageName:"spending-tracker-1"})])}var N={name:"Apps",components:{Project:A}};N.render=G;var B=N,M=Object(r["f"])("h1",null,"Courses",-1);function E(e,t,n,c,o,a){var i=Object(r["v"])("Course");return Object(r["o"])(),Object(r["d"])("div",null,[M,(Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(o.courses,(function(e){return Object(r["o"])(),Object(r["d"])(i,{name:e.name,description:e.description,sections:e.sections,key:e.name},null,8,["name","description","sections"])})),128))])}var H=Object(r["B"])("data-v-2b31230c");Object(r["r"])("data-v-2b31230c");var R=Object(r["f"])("br",null,null,-1);Object(r["p"])();var J=H((function(e,t,n,c,o,a){var i=Object(r["v"])("router-link");return Object(r["o"])(),Object(r["d"])("div",null,[Object(r["f"])("h1",null,[Object(r["f"])(i,{to:"/"},{default:H((function(){return[Object(r["e"])(Object(r["x"])(n.name),1)]})),_:1})]),Object(r["f"])("p",null,Object(r["x"])(n.description),1),(Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(n.sections,(function(e){return Object(r["o"])(),Object(r["d"])("div",{key:e.name},[Object(r["f"])("strong",null,Object(r["x"])(e.name),1),Object(r["e"])(":"+Object(r["x"])(e.description)+" ",1),R])})),128))])})),W={name:"Course",props:{name:String,description:String,sections:Array}};n("36d3");W.render=J,W.__scopeId="data-v-2b31230c";var D=W,F={name:"Courses",components:{Course:D},data:function(){return{courses:[{name:"Expo Tic Tac Toe Game Course",description:"a course that teaches you about the Expo SDK by learning how to create a Tic Tac Toe game.",sections:[{name:"Introduction",description:""},{name:"Getting Started",description:"Learn how to create your project"},{name:"Testing Your App",description:"Learn how to test your app on IOS"},{name:"React Components",description:"Learn how to create components and a little about their inner workings."},{name:"React Props",description:"Learn how props work"},{name:"React States",description:"Learn how states work"},{name:"Styling Components",description:"Learn how to style components"},{name:"Buttons",description:"Learn the different types of buttons available in Expo"},{name:"Checking for Winner",description:"Implement the logic for checking for a winner"}]}]}}};F.render=E;var K=F,Y=[{path:"/",name:"Home",component:w},{path:"/games",name:"Games",component:I},{path:"/courses",name:"Courses",component:K},{path:"/apps",name:"Apps",component:B}],q=Object(j["a"])({history:Object(j["b"])(),routes:Y}),z=q;Object(r["c"])(f).use(z).mount("#app")},"94f7":function(e,t,n){},cc7c:function(e,t,n){},d22e:function(e,t,n){"use strict";n("cc7c")},f2bb:function(e,t,n){"use strict";n("94f7")}});
//# sourceMappingURL=app.126c9f95.js.map