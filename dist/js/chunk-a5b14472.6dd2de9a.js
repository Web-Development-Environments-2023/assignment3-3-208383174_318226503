(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5b14472"],{"03cd":function(t,e,r){},"0749":function(t,e,r){},"13d5":function(t,e,r){"use strict";var n=r("23e7"),i=r("d58f").left,s=r("a640"),o=r("ae40"),a=s("reduce"),u=o("reduce",{1:0});n({target:"Array",proto:!0,forced:!a||!u},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"1fb5":function(t,e,r){"use strict";e.byteLength=f,e.toByteArray=l,e.fromByteArray=g;for(var n=[],i=[],s="undefined"!==typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,u=o.length;a<u;++a)n[a]=o[a],i[o.charCodeAt(a)]=a;function c(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");-1===r&&(r=e);var n=r===e?0:4-r%4;return[r,n]}function f(t){var e=c(t),r=e[0],n=e[1];return 3*(r+n)/4-n}function h(t,e,r){return 3*(e+r)/4-r}function l(t){var e,r,n=c(t),o=n[0],a=n[1],u=new s(h(t,o,a)),f=0,l=a>0?o-4:o;for(r=0;r<l;r+=4)e=i[t.charCodeAt(r)]<<18|i[t.charCodeAt(r+1)]<<12|i[t.charCodeAt(r+2)]<<6|i[t.charCodeAt(r+3)],u[f++]=e>>16&255,u[f++]=e>>8&255,u[f++]=255&e;return 2===a&&(e=i[t.charCodeAt(r)]<<2|i[t.charCodeAt(r+1)]>>4,u[f++]=255&e),1===a&&(e=i[t.charCodeAt(r)]<<10|i[t.charCodeAt(r+1)]<<4|i[t.charCodeAt(r+2)]>>2,u[f++]=e>>8&255,u[f++]=255&e),u}function p(t){return n[t>>18&63]+n[t>>12&63]+n[t>>6&63]+n[63&t]}function d(t,e,r){for(var n,i=[],s=e;s<r;s+=3)n=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]),i.push(p(n));return i.join("")}function g(t){for(var e,r=t.length,i=r%3,s=[],o=16383,a=0,u=r-i;a<u;a+=o)s.push(d(t,a,a+o>u?u:a+o));return 1===i?(e=t[r-1],s.push(n[e>>2]+n[e<<4&63]+"==")):2===i&&(e=(t[r-2]<<8)+t[r-1],s.push(n[e>>10]+n[e>>4&63]+n[e<<2&63]+"=")),s.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},"3af4":function(t,e,r){t.exports=r.p+"img/viewed.4b942bb4.png"},"5a64":function(t,e,r){"use strict";var n=r("0749"),i=r.n(n);i.a},"606e":function(t,e,r){"use strict";var n=r("03cd"),i=r.n(n);i.a},6619:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"1200px","min-width":"1000px"},attrs:{"no-body":""}},[n("div",{staticClass:"container"},[n("div",{staticClass:"recipe-body"},[n("h2",[t._v(t._s(t.recipe.title))]),n("div",{attrs:{id:"recipe-info"}},[n("span",[n("div",{staticClass:"info",attrs:{id:"minutes"}},[n("div",{staticClass:"number"},[t._v(t._s(t.recipe.readyInMinutes))]),n("div",{staticClass:"description"},[t._v("minutes")])]),n("div",{staticClass:"info",attrs:{id:"likes"}},[n("div",{staticClass:"number"},[t._v(t._s(t.recipe.popularity))]),n("div",{staticClass:"description"},[t._v("likes")])]),n("div",{staticClass:"info"},[n("div",{staticClass:"number"},[t._v(t._s(t.recipe.servingSize))]),n("div",{staticClass:"description"},[t._v("Dishes")])])])]),n("div",{staticClass:"icons"},[!0===t.recipe.vegetarian?n("img",{attrs:{id:"vegetarian",src:r("a4a8"),title:"vegetarian"}}):t._e(),!0===t.recipe.vegan?n("img",{attrs:{id:"vegan",src:r("5455"),title:"vegan"}}):t._e(),!0===t.recipe.glutenFree?n("img",{attrs:{id:"glutenFree",src:r("ca91"),title:"gluten free"}}):t._e(),!1===t.recipe.first_time&&t.$root.store.username?n("img",{attrs:{id:"viewed",src:r("3af4"),title:"you have viewed this recipe"}}):!0===t.recipe.first_time?n("img",{attrs:{id:"viewed",src:r("7a61"),title:"this is the first time you're viewing this recipe"}}):t._e()]),t.$root.store.username?n("div",{attrs:{id:"buttons"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.onlypreview,expression:"onlypreview"}]},[n("b-button",{staticClass:"button",attrs:{type:"submit"},on:{click:t.onMakeNow}},[t._v(t._s(t.make_button_text))]),n("span",[n("b-button",{staticClass:"button",on:{click:function(e){return t.addToMeal()}}},[t._v(t._s(t.addToMealLabel))])],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.onlypreview,expression:"!onlypreview"}],attrs:{id:"make-amount"}},[n("h3",[t._v("change the number of dishes")]),n("div",[n("b-button",{staticClass:"change-dishes",attrs:{variant:"outline-danger"},on:{click:function(e){return t.decrement_dishes()}}},[t._v("-")]),n("b-button",{staticClass:"change-dishes",attrs:{variant:"outline-success"},on:{click:function(e){return t.increment_dishes()}}},[t._v("+")])],1),n("b-icon",{attrs:{icon:"check2-circle",variant:"outline-success",type:"submit",title:"done"},on:{click:t.backToRecipe}},[t._v(t._s(t.make_button_text)),n("i",{staticClass:"bi bi-camera-video"})])],1)]):t._e()]),t.recipe?n("div",{staticClass:"recipe-img-container"},[n("img",{staticClass:"center",attrs:{id:"recipe-image",src:t.recipe.image}}),n("FavoriteButton",{attrs:{id:"favoriteButton",recipe:t.recipe.previewInfo}})],1):t._e()]),n("div",{staticClass:"divider div-transparent"}),n("div",{staticClass:"recipe-full"},[t.onlypreview?n("div",{attrs:{id:"instructions"}},[n("Instructions",{attrs:{instructions:t.recipe._instructions}})],1):t._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.onlypreview,expression:"!onlypreview"}],attrs:{id:"MakingRecipeSteps_div"}},[n("MakingRecipeSteps",{attrs:{instructions:t.recipe._instructions,r_id:t.recipe.id}})],1),n("div",{attrs:{id:"ingredients"}},[n("Ingredients",{attrs:{ingredients:t.recipe.extendedIngredients,mul:t.mul_dishes}})],1)])])},i=[],s=(r("99af"),r("d81d"),r("13d5"),r("b0c0"),r("ac1f"),r("5319"),r("2909")),o=(r("96cf"),r("1da1")),a=r("e6e2"),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Ingredients:")]),r("div",{staticClass:"list"},[r("span",{staticClass:"list-item"},t._l(t.ingredients,(function(e,n){return r("div",{key:n+"_"+e.id,staticClass:"info"},[t._m(0,!0),r("div",{staticClass:"item-text"},[r("div",[t._v(" "+t._s(e.name)),r("span",{attrs:{id:"divider"}},[t._v("|")]),r("span",{attrs:{id:"amount"}},[t._v(t._s(Math.floor(e.amount*t.mul*100)/100))]),"null"!=e.unit?r("span",[t._v(" "+t._s(e.unit))]):t._e()])])])})),0)])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",[n("img",{staticClass:"bullet",attrs:{src:r("874f")}}),n("img",{staticClass:"bullet",attrs:{src:r("acca")}})])}],f=(r("a9e3"),{name:"Ingredients",props:{ingredients:{type:Array,required:!0},mul:{type:Number,required:!0}}}),h=f,l=(r("606e"),r("2877")),p=Object(l["a"])(h,u,c,!1,null,"5a7d3122",null),d=p.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v(" Instructions ")]),r("div",{staticClass:"wrapped"},[r("div",{staticClass:"step"},t._l(t.instructions,(function(e){return r("div",{key:e.number,staticClass:"specific-step"},[r("div",{attrs:{id:"step-title"}},[t._v("step "+t._s(e.number)+":")]),r("div",{attrs:{id:"step-description"}},[t._v(t._s(e.step))])])})),0)])])},v=[],y={name:"Instructions",props:{instructions:{type:Array}}},w=y,m=(r("aa56"),Object(l["a"])(w,g,v,!1,null,"233fae9f",null)),_=m.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v(" Instructions ")]),r("b-progress",{attrs:{max:t.max,height:"2rem"}},[r("b-progress-bar",{attrs:{value:t.value}},[r("span",[t._v("Progress: "),r("strong",[t._v(t._s(t.value.toFixed(2))+" / "+t._s(t.max))])])])],1),r("div",{staticClass:"wrapped"},[r("ul",{staticClass:"list-group"},t._l(t.steps_todo,(function(e){return r("li",{key:e.number,staticClass:"list-group-item"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[e.isDone?r("span",[r("del",[t._v(t._s(e.text))])]):r("span",[t._v(t._s(e.text))])]),r("div",{staticClass:"col-auto"},[r("div",{staticClass:"row"},[t.canClickButton(e)?r("div",{staticClass:"col"},[r("b-button",{attrs:{variant:"outline-info"},on:{click:function(r){return t.done(e)}}},[t._v("Done")])],1):t._e(),t.canClickButton(e)?t._e():r("div",{staticClass:"col"},[r("button",{staticClass:"btn btn-light",attrs:{disabled:"true"},on:{click:function(r){return t.done(e)}}},[t._v(" Done ")])])])])])])})),0)])],1)},A=[],E=(r("e25e"),r("b639"),{name:"Instructions",props:{instructions:{type:Array,required:!0},r_id:{type:Number,required:!0}},created:function(){this.max=0,this.value=getSessionValue(),console.log("created this.value : "+this.value)},data:function(){return{steps_todo:[],selected:[],max:0,value:0}},mounted:function(){console.log("mounted make recipe");var t="",e=0,r=!1;0!=this.getSessionValue()&&(e=this.getSessionValue()[0],console.log("minStep : "+e),this.value=e,console.log("mounted this.value : "+this.value));for(var n=0;n<this.instructions.length;n++)t="Step ".concat(this.instructions[n].number,": ").concat(this.instructions[n].step),r=this.instructions[n].number<=e,r&&this.selected.push(parseInt(this.instructions[n].number)),this.steps_todo.push({text:t,value:this.instructions[n].number,isDone:r});console.log("this.steps_todo.length : "+parseInt(this.steps_todo.length)),this.max=parseInt(this.steps_todo.length)},methods:{updateValueProgress:function(){this.value<this.max&&(this.value+=1)},getSessionValue:function(){var t=0;try{console.log("sessionStorage.making_progress[this.r_id] "+JSON.parse(sessionStorage.making_progress)[this.r_id]),t=JSON.parse(sessionStorage.making_progress)[this.r_id],void 0==t&&(t=0)}catch(e){console.log("no progress")}finally{return t}},done:function(t){console.log("this.value : "+this.value),t.isDone=!0,this.selected.push(parseInt(t.value)),this.updateValueProgress();var e=sessionStorage.making_progress;console.log("temp1: "+e);var r=JSON.parse(e);console.log("temp: "+r),void 0==r&&(r={}),r[this.r_id]=[this.value,this.steps_todo.length],sessionStorage.setItem("making_progress",JSON.stringify(r)),e=sessionStorage.making_progress,console.log("temp1: "+e)},canClickButton:function(t){var e=this.selected.length;return 1==t.value&&0==e||parseInt(t.value)-this.selected[e-1]==1}},computed:{state:function(){console.log("this.selected:"+this.selected),console.log("value: "+this.value),console.log("max: "+this.max);var t=this.selected.length;return 1==t?(this.updateValueProgress(),!0):0==t||(console.log(parseInt(this.selected[t-1])),parseInt(this.selected[t-1])-parseInt(this.selected[t-2])==1&&(this.updateValueProgress(),!0))}}}),I=E,R=(r("8989"),Object(l["a"])(I,b,A,!1,null,"659d3f21",null)),S=R.exports,C={components:{FavoriteButton:a["a"],Ingredients:d,Instructions:_,MakingRecipeSteps:S},data:function(){return{recipe:null,onlypreview:!0,make_button_text:"Make Now",mul_dishes:1,addToMealLabel:"Add to meal"}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n,i,o,a,u,c,f,h,l,p,d,g,v,y,w,m,_,b,A,E;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.$route.query.isPersonal?(console.log("personal"),r="https://chenshahafrecipes.cs.bgu.ac.il/users/personal/"):(console.log("not personal"),r="https://chenshahafrecipes.cs.bgu.ac.il/recipes/"),e.prev=2,e.next=5,t.axios.create({withCredentials:!0}).get(r+t.$route.params.recipeId);case 5:n=e.sent,200!==n.status&&t.$router.replace("/NotFound"),e.next=14;break;case 9:return e.prev=9,e.t0=e["catch"](2),console.log("error.response.status",e.t0.response.status),t.$router.replace("/NotFound"),e.abrupt("return");case 14:console.log(n.data),i=n.data,o=i.analyzedInstructions,a=i.extendedIngredients,u=i.previewInfo,c=i.first_time,f=n.data.previewInfo,h=f.id,l=f.popularity,p=f.readyInMinutes,d=f.image,g=f.title,v=f.vegan,y=f.vegetarian,w=f.glutenFree,m=f.isFavorite,_=f.isViewed,b=f.servingSize,0!=o[0].steps.length&&(A=o.map((function(t){return t.steps[0].step=t.name+t.steps[0].step,t.steps})).reduce((function(t,e){return[].concat(Object(s["a"])(t),Object(s["a"])(e))}),[])),E={_instructions:A,analyzedInstructions:o,extendedIngredients:a,popularity:l,readyInMinutes:p,image:d,title:g,vegan:v,vegetarian:y,glutenFree:w,isFavorite:m,isViewed:_,previewInfo:u,servingSize:b,first_time:c,id:h},console.log("first time"),null!==t.readyInMinutes&&void 0!==t.readyInMinutes||(t.readyInMinutes="0"),null!==b&&void 0!==b||(t.servingSize=0),t.recipe=E,e.next=28;break;case 25:e.prev=25,e.t1=e["catch"](0),console.log(e.t1);case 28:case"end":return e.stop()}}),e,null,[[0,25],[2,9]])})))()},methods:{onMakeNow:function(){this.onlypreview=!1,this.make_button_text="Done",this.addToMeal()},backToRecipe:function(){this.onlypreview=!0,this.make_button_text="Make Now"},decrement_dishes:function(){this.recipe.servingSize>0&&(this.recipe.servingSize-=1,this.mul_dishes-=1)},increment_dishes:function(){this.recipe.servingSize+=1,this.mul_dishes+=1},addToMeal:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.addToMealLabel="Added",r="https://chenshahafrecipes.cs.bgu.ac.il/users/upcommingMeal/",console.log("this.$route.query.isPersonal in make now: "+t.$route.query.isPersonal),console.log(r+t.recipe.id+"?isPersonal="+t.$route.query.isPersonal),e.prev=4,e.next=7,t.axios.create({withCredentials:!0}).post(r+t.recipe.id+"?isPersonal="+t.$route.query.isPersonal);case 7:response=e.sent,200!==response.status&&t.$router.replace("/NotFound"),e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](4),console.log("error.response.status",e.t0.response.status),e.abrupt("return");case 15:case"end":return e.stop()}}),e,null,[[4,11]])})))()}}},P=C,T=(r("5a64"),Object(l["a"])(P,n,i,!1,null,"145c9798",null));e["default"]=T.exports},7156:function(t,e,r){var n=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var s,o;return i&&"function"==typeof(s=e.constructor)&&s!==r&&n(o=s.prototype)&&o!==r.prototype&&i(t,o),t}},"7a61":function(t,e,r){t.exports=r.p+"img/new.86530a71.png"},"874f":function(t,e,r){t.exports=r.p+"img/peach.e29413d4.png"},8989:function(t,e,r){"use strict";var n=r("ad86"),i=r.n(n);i.a},9152:function(t,e){e.read=function(t,e,r,n,i){var s,o,a=8*i-n-1,u=(1<<a)-1,c=u>>1,f=-7,h=r?i-1:0,l=r?-1:1,p=t[e+h];for(h+=l,s=p&(1<<-f)-1,p>>=-f,f+=a;f>0;s=256*s+t[e+h],h+=l,f-=8);for(o=s&(1<<-f)-1,s>>=-f,f+=n;f>0;o=256*o+t[e+h],h+=l,f-=8);if(0===s)s=1-c;else{if(s===u)return o?NaN:1/0*(p?-1:1);o+=Math.pow(2,n),s-=c}return(p?-1:1)*o*Math.pow(2,s-n)},e.write=function(t,e,r,n,i,s){var o,a,u,c=8*s-i-1,f=(1<<c)-1,h=f>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:s-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=f):(o=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-o))<1&&(o--,u*=2),e+=o+h>=1?l/u:l*Math.pow(2,1-h),e*u>=2&&(o++,u/=2),o+h>=f?(a=0,o=f):o+h>=1?(a=(e*u-1)*Math.pow(2,i),o+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;t[r+p]=255&a,p+=d,a/=256,i-=8);for(o=o<<i|a,c+=i;c>0;t[r+p]=255&o,p+=d,o/=256,c-=8);t[r+p-d]|=128*g}},"99af":function(t,e,r){"use strict";var n=r("23e7"),i=r("d039"),s=r("e8b5"),o=r("861d"),a=r("7b0b"),u=r("50c4"),c=r("8418"),f=r("65f0"),h=r("1dde"),l=r("b622"),p=r("2d00"),d=l("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",y=p>=51||!i((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),w=h("concat"),m=function(t){if(!o(t))return!1;var e=t[d];return void 0!==e?!!e:s(t)},_=!y||!w;n({target:"Array",proto:!0,forced:_},{concat:function(t){var e,r,n,i,s,o=a(this),h=f(o,0),l=0;for(e=-1,n=arguments.length;e<n;e++)if(s=-1===e?o:arguments[e],m(s)){if(i=u(s.length),l+i>g)throw TypeError(v);for(r=0;r<i;r++,l++)r in s&&c(h,l,s[r])}else{if(l>=g)throw TypeError(v);c(h,l++,s)}return h.length=l,h}})},a9e3:function(t,e,r){"use strict";var n=r("83ab"),i=r("da84"),s=r("94ca"),o=r("6eeb"),a=r("5135"),u=r("c6b6"),c=r("7156"),f=r("c04e"),h=r("d039"),l=r("7c73"),p=r("241c").f,d=r("06cf").f,g=r("9bf2").f,v=r("58a8").trim,y="Number",w=i[y],m=w.prototype,_=u(l(m))==y,b=function(t){var e,r,n,i,s,o,a,u,c=f(t,!1);if("string"==typeof c&&c.length>2)if(c=v(c),e=c.charCodeAt(0),43===e||45===e){if(r=c.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+c}for(s=c.slice(2),o=s.length,a=0;a<o;a++)if(u=s.charCodeAt(a),u<48||u>i)return NaN;return parseInt(s,n)}return+c};if(s(y,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var A,E=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof E&&(_?h((function(){m.valueOf.call(r)})):u(r)!=y)?c(new w(b(e)),r,E):b(e)},I=n?p(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),R=0;I.length>R;R++)a(w,A=I[R])&&!a(E,A)&&g(E,A,d(w,A));E.prototype=m,m.constructor=E,o(i,y,E)}},aa56:function(t,e,r){"use strict";var n=r("b009"),i=r.n(n);i.a},acca:function(t,e,r){t.exports=r.p+"img/peach-hover.fb9138c9.png"},ad86:function(t,e,r){},b009:function(t,e,r){},b639:function(t,e,r){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var n=r("1fb5"),i=r("9152"),s=r("e3db");function o(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"===typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(e){return!1}}function a(){return c.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function u(t,e){if(a()<e)throw new RangeError("Invalid typed array length");return c.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=c.prototype):(null===t&&(t=new c(e)),t.length=e),t}function c(t,e,r){if(!c.TYPED_ARRAY_SUPPORT&&!(this instanceof c))return new c(t,e,r);if("number"===typeof t){if("string"===typeof e)throw new Error("If encoding is specified then the first argument must be a string");return p(this,t)}return f(this,t,e,r)}function f(t,e,r,n){if("number"===typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!==typeof ArrayBuffer&&e instanceof ArrayBuffer?v(t,e,r,n):"string"===typeof e?d(t,e,r):y(t,e)}function h(t){if("number"!==typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function l(t,e,r,n){return h(e),e<=0?u(t,e):void 0!==r?"string"===typeof n?u(t,e).fill(r,n):u(t,e).fill(r):u(t,e)}function p(t,e){if(h(e),t=u(t,e<0?0:0|w(e)),!c.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function d(t,e,r){if("string"===typeof r&&""!==r||(r="utf8"),!c.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|_(e,r);t=u(t,n);var i=t.write(e,r);return i!==n&&(t=t.slice(0,i)),t}function g(t,e){var r=e.length<0?0:0|w(e.length);t=u(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function v(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");return e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),c.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=c.prototype):t=g(t,e),t}function y(t,e){if(c.isBuffer(e)){var r=0|w(e.length);return t=u(t,r),0===t.length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!==typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!==typeof e.length||et(e.length)?u(t,0):g(t,e);if("Buffer"===e.type&&s(e.data))return g(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function w(t){if(t>=a())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a().toString(16)+" bytes");return 0|t}function m(t){return+t!=t&&(t=0),c.alloc(+t)}function _(t,e){if(c.isBuffer(t))return t.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!==typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return H(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return W(t).length;default:if(n)return H(t).length;e=(""+e).toLowerCase(),n=!0}}function b(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if(r>>>=0,e>>>=0,r<=e)return"";t||(t="utf8");while(1)switch(t){case"hex":return O(this,e,r);case"utf8":case"utf-8":return k(this,e,r);case"ascii":return N(this,e,r);case"latin1":case"binary":return Y(this,e,r);case"base64":return B(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function A(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function E(t,e,r,n,i){if(0===t.length)return-1;if("string"===typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"===typeof e&&(e=c.from(e,n)),c.isBuffer(e))return 0===e.length?-1:I(t,e,r,n,i);if("number"===typeof e)return e&=255,c.TYPED_ARRAY_SUPPORT&&"function"===typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):I(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function I(t,e,r,n,i){var s,o=1,a=t.length,u=e.length;if(void 0!==n&&(n=String(n).toLowerCase(),"ucs2"===n||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;o=2,a/=2,u/=2,r/=2}function c(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(i){var f=-1;for(s=r;s<a;s++)if(c(t,s)===c(e,-1===f?0:s-f)){if(-1===f&&(f=s),s-f+1===u)return f*o}else-1!==f&&(s-=s-f),f=-1}else for(r+u>a&&(r=a-u),s=r;s>=0;s--){for(var h=!0,l=0;l<u;l++)if(c(t,s+l)!==c(e,l)){h=!1;break}if(h)return s}return-1}function R(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n),n>i&&(n=i)):n=i;var s=e.length;if(s%2!==0)throw new TypeError("Invalid hex string");n>s/2&&(n=s/2);for(var o=0;o<n;++o){var a=parseInt(e.substr(2*o,2),16);if(isNaN(a))return o;t[r+o]=a}return o}function S(t,e,r,n){return tt(H(e,t.length-r),t,r,n)}function C(t,e,r,n){return tt(K(e),t,r,n)}function P(t,e,r,n){return C(t,e,r,n)}function T(t,e,r,n){return tt(W(e),t,r,n)}function x(t,e,r,n){return tt(Q(e,t.length-r),t,r,n)}function B(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function k(t,e,r){r=Math.min(t.length,r);var n=[],i=e;while(i<r){var s,o,a,u,c=t[i],f=null,h=c>239?4:c>223?3:c>191?2:1;if(i+h<=r)switch(h){case 1:c<128&&(f=c);break;case 2:s=t[i+1],128===(192&s)&&(u=(31&c)<<6|63&s,u>127&&(f=u));break;case 3:s=t[i+1],o=t[i+2],128===(192&s)&&128===(192&o)&&(u=(15&c)<<12|(63&s)<<6|63&o,u>2047&&(u<55296||u>57343)&&(f=u));break;case 4:s=t[i+1],o=t[i+2],a=t[i+3],128===(192&s)&&128===(192&o)&&128===(192&a)&&(u=(15&c)<<18|(63&s)<<12|(63&o)<<6|63&a,u>65535&&u<1114112&&(f=u))}null===f?(f=65533,h=1):f>65535&&(f-=65536,n.push(f>>>10&1023|55296),f=56320|1023&f),n.push(f),i+=h}return M(n)}e.Buffer=c,e.SlowBuffer=m,e.INSPECT_MAX_BYTES=50,c.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:o(),e.kMaxLength=a(),c.poolSize=8192,c._augment=function(t){return t.__proto__=c.prototype,t},c.from=function(t,e,r){return f(null,t,e,r)},c.TYPED_ARRAY_SUPPORT&&(c.prototype.__proto__=Uint8Array.prototype,c.__proto__=Uint8Array,"undefined"!==typeof Symbol&&Symbol.species&&c[Symbol.species]===c&&Object.defineProperty(c,Symbol.species,{value:null,configurable:!0})),c.alloc=function(t,e,r){return l(null,t,e,r)},c.allocUnsafe=function(t){return p(null,t)},c.allocUnsafeSlow=function(t){return p(null,t)},c.isBuffer=function(t){return!(null==t||!t._isBuffer)},c.compare=function(t,e){if(!c.isBuffer(t)||!c.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,i=0,s=Math.min(r,n);i<s;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},c.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(t,e){if(!s(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return c.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=c.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){var o=t[r];if(!c.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},c.byteLength=_,c.prototype._isBuffer=!0,c.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)A(this,e,e+1);return this},c.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)A(this,e,e+3),A(this,e+1,e+2);return this},c.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)A(this,e,e+7),A(this,e+1,e+6),A(this,e+2,e+5),A(this,e+3,e+4);return this},c.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?k(this,0,t):b.apply(this,arguments)},c.prototype.equals=function(t){if(!c.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===c.compare(this,t)},c.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},c.prototype.compare=function(t,e,r,n,i){if(!c.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,i>>>=0,this===t)return 0;for(var s=i-n,o=r-e,a=Math.min(s,o),u=this.slice(n,i),f=t.slice(e,r),h=0;h<a;++h)if(u[h]!==f[h]){s=u[h],o=f[h];break}return s<o?-1:o<s?1:0},c.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},c.prototype.indexOf=function(t,e,r){return E(this,t,e,r,!0)},c.prototype.lastIndexOf=function(t,e,r){return E(this,t,e,r,!1)},c.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"===typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var s=!1;;)switch(n){case"hex":return R(this,t,e,r);case"utf8":case"utf-8":return S(this,t,e,r);case"ascii":return C(this,t,e,r);case"latin1":case"binary":return P(this,t,e,r);case"base64":return T(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,t,e,r);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var U=4096;function M(t){var e=t.length;if(e<=U)return String.fromCharCode.apply(String,t);var r="",n=0;while(n<e)r+=String.fromCharCode.apply(String,t.slice(n,n+=U));return r}function N(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function Y(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function O(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var i="",s=e;s<r;++s)i+=Z(t[s]);return i}function L(t,e,r){for(var n=t.slice(e,r),i="",s=0;s<n.length;s+=2)i+=String.fromCharCode(n[s]+256*n[s+1]);return i}function D(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function F(t,e,r,n,i,s){if(!c.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<s)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function z(t,e,r,n){e<0&&(e=65535+e+1);for(var i=0,s=Math.min(t.length-r,2);i<s;++i)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function V(t,e,r,n){e<0&&(e=4294967295+e+1);for(var i=0,s=Math.min(t.length-r,4);i<s;++i)t[r+i]=e>>>8*(n?i:3-i)&255}function $(t,e,r,n,i,s){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function j(t,e,r,n,s){return s||$(t,e,r,4,34028234663852886e22,-34028234663852886e22),i.write(t,e,r,n,23,4),r+4}function q(t,e,r,n,s){return s||$(t,e,r,8,17976931348623157e292,-17976931348623157e292),i.write(t,e,r,n,52,8),r+8}c.prototype.slice=function(t,e){var r,n=this.length;if(t=~~t,e=void 0===e?n:~~e,t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),e<t&&(e=t),c.TYPED_ARRAY_SUPPORT)r=this.subarray(t,e),r.__proto__=c.prototype;else{var i=e-t;r=new c(i,void 0);for(var s=0;s<i;++s)r[s]=this[s+t]}return r},c.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||D(t,e,this.length);var n=this[t],i=1,s=0;while(++s<e&&(i*=256))n+=this[t+s]*i;return n},c.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||D(t,e,this.length);var n=this[t+--e],i=1;while(e>0&&(i*=256))n+=this[t+--e]*i;return n},c.prototype.readUInt8=function(t,e){return e||D(t,1,this.length),this[t]},c.prototype.readUInt16LE=function(t,e){return e||D(t,2,this.length),this[t]|this[t+1]<<8},c.prototype.readUInt16BE=function(t,e){return e||D(t,2,this.length),this[t]<<8|this[t+1]},c.prototype.readUInt32LE=function(t,e){return e||D(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},c.prototype.readUInt32BE=function(t,e){return e||D(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},c.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||D(t,e,this.length);var n=this[t],i=1,s=0;while(++s<e&&(i*=256))n+=this[t+s]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*e)),n},c.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||D(t,e,this.length);var n=e,i=1,s=this[t+--n];while(n>0&&(i*=256))s+=this[t+--n]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*e)),s},c.prototype.readInt8=function(t,e){return e||D(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},c.prototype.readInt16LE=function(t,e){e||D(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt16BE=function(t,e){e||D(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt32LE=function(t,e){return e||D(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},c.prototype.readInt32BE=function(t,e){return e||D(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},c.prototype.readFloatLE=function(t,e){return e||D(t,4,this.length),i.read(this,t,!0,23,4)},c.prototype.readFloatBE=function(t,e){return e||D(t,4,this.length),i.read(this,t,!1,23,4)},c.prototype.readDoubleLE=function(t,e){return e||D(t,8,this.length),i.read(this,t,!0,52,8)},c.prototype.readDoubleBE=function(t,e){return e||D(t,8,this.length),i.read(this,t,!1,52,8)},c.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){var i=Math.pow(2,8*r)-1;F(this,t,e,r,i,0)}var s=1,o=0;this[e]=255&t;while(++o<r&&(s*=256))this[e+o]=t/s&255;return e+r},c.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){var i=Math.pow(2,8*r)-1;F(this,t,e,r,i,0)}var s=r-1,o=1;this[e+s]=255&t;while(--s>=0&&(o*=256))this[e+s]=t/o&255;return e+r},c.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||F(this,t,e,1,255,0),c.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},c.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||F(this,t,e,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):z(this,t,e,!0),e+2},c.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||F(this,t,e,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):z(this,t,e,!1),e+2},c.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||F(this,t,e,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):V(this,t,e,!0),e+4},c.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||F(this,t,e,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):V(this,t,e,!1),e+4},c.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);F(this,t,e,r,i-1,-i)}var s=0,o=1,a=0;this[e]=255&t;while(++s<r&&(o*=256))t<0&&0===a&&0!==this[e+s-1]&&(a=1),this[e+s]=(t/o>>0)-a&255;return e+r},c.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);F(this,t,e,r,i-1,-i)}var s=r-1,o=1,a=0;this[e+s]=255&t;while(--s>=0&&(o*=256))t<0&&0===a&&0!==this[e+s+1]&&(a=1),this[e+s]=(t/o>>0)-a&255;return e+r},c.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||F(this,t,e,1,127,-128),c.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},c.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||F(this,t,e,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):z(this,t,e,!0),e+2},c.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||F(this,t,e,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):z(this,t,e,!1),e+2},c.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||F(this,t,e,4,2147483647,-2147483648),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):V(this,t,e,!0),e+4},c.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||F(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):V(this,t,e,!1),e+4},c.prototype.writeFloatLE=function(t,e,r){return j(this,t,e,!0,r)},c.prototype.writeFloatBE=function(t,e,r){return j(this,t,e,!1,r)},c.prototype.writeDoubleLE=function(t,e,r){return q(this,t,e,!0,r)},c.prototype.writeDoubleBE=function(t,e,r){return q(this,t,e,!1,r)},c.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var i,s=n-r;if(this===t&&r<e&&e<n)for(i=s-1;i>=0;--i)t[i+e]=this[i+r];else if(s<1e3||!c.TYPED_ARRAY_SUPPORT)for(i=0;i<s;++i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+s),e);return s},c.prototype.fill=function(t,e,r,n){if("string"===typeof t){if("string"===typeof e?(n=e,e=0,r=this.length):"string"===typeof r&&(n=r,r=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!==typeof n)throw new TypeError("encoding must be a string");if("string"===typeof n&&!c.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"===typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var s;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"===typeof t)for(s=e;s<r;++s)this[s]=t;else{var o=c.isBuffer(t)?t:H(new c(t,n).toString()),a=o.length;for(s=0;s<r-e;++s)this[s+e]=o[s%a]}return this};var J=/[^+\/0-9A-Za-z-_]/g;function X(t){if(t=G(t).replace(J,""),t.length<2)return"";while(t.length%4!==0)t+="=";return t}function G(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Z(t){return t<16?"0"+t.toString(16):t.toString(16)}function H(t,e){var r;e=e||1/0;for(var n=t.length,i=null,s=[],o=0;o<n;++o){if(r=t.charCodeAt(o),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===n){(e-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&s.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;s.push(r)}else if(r<2048){if((e-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return s}function K(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}function Q(t,e){for(var r,n,i,s=[],o=0;o<t.length;++o){if((e-=2)<0)break;r=t.charCodeAt(o),n=r>>8,i=r%256,s.push(i),s.push(n)}return s}function W(t){return n.toByteArray(X(t))}function tt(t,e,r,n){for(var i=0;i<n;++i){if(i+r>=e.length||i>=t.length)break;e[i+r]=t[i]}return i}function et(t){return t!==t}}).call(this,r("c8ba"))},c20d:function(t,e,r){var n=r("da84"),i=r("58a8").trim,s=r("5899"),o=n.parseInt,a=/^[+-]?0[Xx]/,u=8!==o(s+"08")||22!==o(s+"0x16");t.exports=u?function(t,e){var r=i(String(t));return o(r,e>>>0||(a.test(r)?16:10))}:o},ca91:function(t,e,r){t.exports=r.p+"img/gluten-free2.39d09131.png"},d58f:function(t,e,r){var n=r("1c0b"),i=r("7b0b"),s=r("44ad"),o=r("50c4"),a=function(t){return function(e,r,a,u){n(r);var c=i(e),f=s(c),h=o(c.length),l=t?h-1:0,p=t?-1:1;if(a<2)while(1){if(l in f){u=f[l],l+=p;break}if(l+=p,t?l<0:h<=l)throw TypeError("Reduce of empty array with no initial value")}for(;t?l>=0:h>l;l+=p)l in f&&(u=r(u,f[l],l,c));return u}};t.exports={left:a(!1),right:a(!0)}},d81d:function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").map,s=r("1dde"),o=r("ae40"),a=s("map"),u=o("map");n({target:"Array",proto:!0,forced:!a||!u},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e25e:function(t,e,r){var n=r("23e7"),i=r("c20d");n({global:!0,forced:parseInt!=i},{parseInt:i})},e3db:function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}}}]);
//# sourceMappingURL=chunk-a5b14472.6dd2de9a.js.map