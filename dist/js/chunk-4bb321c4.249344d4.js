(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bb321c4"],{"2b07":function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",{staticClass:"container"},[t("h1",[e._v("Your upcoming Meal")]),t("div",[t("table",{staticClass:"table"},[e._m(0),e._l(e.todo_recipes,(function(r){return t("tr",{key:r.order},[t("td",[t("h2",[e._v(e._s(r.order))])]),t("td",[t("RecipePreviewHorizontal",{staticClass:"recipePreview",attrs:{recipe:r.recipe_preview}})],1),t("td",[t("RecipeProgressBar",{attrs:{r_id:r.recipe_preview.id}})],1),t("td",[t("span",{attrs:{id:"change_order"}},[t("b-button",{staticClass:"order",attrs:{pill:"",variant:"outline-danger",title:"move order down"},on:{click:function(t){return e.moveDown(r)}}},[t("b-icon-arrow-down")],1),t("b-button",{staticClass:"order",attrs:{pill:"",variant:"outline-success",title:"move order up"},on:{click:function(t){return e.moveUp(r)}}},[t("b-icon-arrow-up")],1)],1)]),t("td",[t("b-icon",{attrs:{id:"delete-icon",icon:"x-circle",title:"remove recipe from upcoming meal"},on:{click:function(t){return e.remove(r)}}})],1)])}))],2),t("b-button",{attrs:{variant:"outline-danger",id:"remove-all"},on:{click:e.removeAll}},[e._v("remove all recipes from current meal plan")])],1)])])},a=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("thead",[t("th",[e._v("Order")]),t("th",[e._v("Recipe")]),t("th",[e._v("Progress")]),t("th",[e._v("Change Order")]),t("th",[e._v("Remove")])])}],i=(t("96cf"),t("1da1")),c=t("24db"),s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("b-progress",{staticClass:"mb-3",attrs:{max:e.max,height:"2rem"}},[t("b-progress-bar",{attrs:{variant:"success",value:e.value}},[t("span",[t("strong",[e._v(e._s(e.value.toFixed(2))+" / "+e._s(e.max))])])])],1)],1)},o=[],u=(t("a9e3"),{name:"ProgressBar",props:{r_id:{type:Number,required:!0}},data:function(){return{max:0,value:0}},created:function(){},mounted:function(){this.max=this.get_Session_Value()[1],this.value=this.get_Session_Value()[0],console.log("recipe progress bar this.value : "+this.value),console.log("recipe progress bar this.max : "+this.max)},methods:{get_Session_Value:function(){return console.log(JSON.parse(sessionStorage.making_progress)[this.r_id]),JSON.parse(sessionStorage.making_progress)[this.r_id]}}}),l=u,p=t("2877"),d=Object(p["a"])(l,s,o,!1,null,null,null),h=d.exports,v={name:"MealPlanning",data:function(){return{todo_recipes:[]}},mounted:function(){this.getupcomingMeal()},components:{RecipePreviewHorizontal:c["a"],RecipeProgressBar:h},methods:{getupcomingMeal:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var t,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t="https://chenshahafrecipes.cs.bgu.ac.il",r.prev=1,r.next=4,e.axios.create({withCredentials:!0}).get(t+"/users/upcomingMeal",{withCredentials:!0});case 4:n=r.sent,e.todo_recipes=n.data,console.log(e.todo_recipes),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](1),console.log("ERROR !");case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()},moveDown:function(e){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n="https://chenshahafrecipes.cs.bgu.ac.il/",console.log("r.id is: "+e.recipe_preview.id),console.log(" order is: "+e.order),e.order!=r.todo_recipes.length){t.next=5;break}return t.abrupt("return");case 5:return t.prev=5,t.next=8,r.axios.create({withCredentials:!0}).put(n+"users/changeRecipeOrderInMeal",{recipeId:e.recipe_preview.id,neworder:e.order+1},{withCredentials:!0});case 8:r.getupcomingMeal(),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](5),console.log("ERROR !");case 14:case"end":return t.stop()}}),t,null,[[5,11]])})))()},moveUp:function(e){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n="https://chenshahafrecipes.cs.bgu.ac.il/",console.log("r.id is: "+e.recipe_preview.id),console.log(" order is: "+e.order),1!=e.order){t.next=5;break}return t.abrupt("return");case 5:return t.prev=5,t.next=8,r.axios.create({withCredentials:!0}).put(n+"users/changeRecipeOrderInMeal",{recipeId:e.recipe_preview.id,neworder:e.order-1},{withCredentials:!0});case 8:r.getupcomingMeal(),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](5),console.log("ERROR !");case 14:case"end":return t.stop()}}),t,null,[[5,11]])})))()},remove:function(e){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="https://chenshahafrecipes.cs.bgu.ac.il/",t.prev=1,t.next=4,r.axios.create({withCredentials:!0})["delete"](n+"users/removeRecipeFromMeal",{data:{recipeId:e.recipe_preview.id}});case 4:r.getupcomingMeal(),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),console.log("ERROR !");case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()},removeAll:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(0!=e.todo_recipes.length){r.next=3;break}return confirm("No recipes in current meal"),r.abrupt("return");case 3:return t="https://chenshahafrecipes.cs.bgu.ac.il/",r.prev=4,r.next=7,e.axios.create({withCredentials:!0})["delete"](t+"users/removeAllRecipesFromMeal",{});case 7:e.getupcomingMeal(),confirm("All recipes from current meal were successfully removed"),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](4),console.log("ERROR !");case 14:case"end":return r.stop()}}),r,null,[[4,11]])})))()}}},g=v,f=(t("8b4c"),Object(p["a"])(g,n,a,!1,null,"28248dd3",null));r["default"]=f.exports},"501f":function(e,r,t){},7156:function(e,r,t){var n=t("861d"),a=t("d2bb");e.exports=function(e,r,t){var i,c;return a&&"function"==typeof(i=r.constructor)&&i!==t&&n(c=i.prototype)&&c!==t.prototype&&a(e,c),e}},"8b4c":function(e,r,t){"use strict";var n=t("501f"),a=t.n(n);a.a},a9e3:function(e,r,t){"use strict";var n=t("83ab"),a=t("da84"),i=t("94ca"),c=t("6eeb"),s=t("5135"),o=t("c6b6"),u=t("7156"),l=t("c04e"),p=t("d039"),d=t("7c73"),h=t("241c").f,v=t("06cf").f,g=t("9bf2").f,f=t("58a8").trim,m="Number",b=a[m],_=b.prototype,w=o(d(_))==m,R=function(e){var r,t,n,a,i,c,s,o,u=l(e,!1);if("string"==typeof u&&u.length>2)if(u=f(u),r=u.charCodeAt(0),43===r||45===r){if(t=u.charCodeAt(2),88===t||120===t)return NaN}else if(48===r){switch(u.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+u}for(i=u.slice(2),c=i.length,s=0;s<c;s++)if(o=i.charCodeAt(s),o<48||o>a)return NaN;return parseInt(i,n)}return+u};if(i(m,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var x,k=function(e){var r=arguments.length<1?0:e,t=this;return t instanceof k&&(w?p((function(){_.valueOf.call(t)})):o(t)!=m)?u(new b(R(r)),t,k):R(r)},I=n?h(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;I.length>N;N++)s(b,x=I[N])&&!s(k,x)&&g(k,x,v(b,x));k.prototype=_,_.constructor=k,c(a,m,k)}}}]);
//# sourceMappingURL=chunk-4bb321c4.249344d4.js.map