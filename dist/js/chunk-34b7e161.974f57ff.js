(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34b7e161"],{"000b":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"FavoritePage",style:{background:"url("+i("a7f1")+")  no-repeat",backgroundSize:"410px"}},[r("div",{staticClass:"FavoritePage"},[r("div",{staticClass:"container"},[r("RecipePreviewListVertical",{staticClass:"FavoriteRecipes center",attrs:{title:"Your Favorite Recipes",type:"favorites"}}),e.$root.store.username?e._e():r("router-link",{attrs:{to:"/login",tag:"button"}},[e._v("You need to Login to view this")])],1)])])},a=[],s=i("4ec1"),n={components:{RecipePreviewListVertical:s["a"]}},c=n,o=(i("e50e"),i("2877")),p=Object(o["a"])(c,r,a,!1,null,"69dea6c5",null);t["default"]=p.exports},"03e1":function(e,t,i){"use strict";var r=i("ab19"),a=i.n(r);a.a},"4ec1":function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-container",{staticClass:"recipes-container"},[i("h4",[e._v(" "+e._s(e.title)+" "),e._t("default")],2),i("b-row",e._l(e.recipes,(function(e){return i("b-col",{key:e.id},[i("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1),i("b-row",[this.hasContent?e._e():i("b-alert",{attrs:{show:"",variant:"danger"}},[i("a",{staticClass:"alert-link"},[e._v("You don't have "+e._s(e.type)+" recipes")])])],1)],1)},a=[],s=i("2909"),n=(i("96cf"),i("1da1")),c=i("832a"),o={name:"RecipePreviewListVertical",components:{RecipePreview:c["a"]},props:{title:{type:String,required:!0},type:{type:String,require:!0}},data:function(){return{recipes:[],hasContent:!0}},mounted:function(){console.log("Recipe Preview List mounted"),this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var i,r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i="https://chenshahafrecipes.cs.bgu.ac.il",t.prev=1,t.next=4,e.axios.get(i+"/users/"+e.type,{withCredentials:!0});case 4:r=t.sent,200==r.status?(n=r.data,e.recipes=[],(a=e.recipes).push.apply(a,Object(s["a"])(n))):204==r.status&&(e.hasContent=!1),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.dir("error at Recipe Preview List");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()}}},p=o,u=(i("03e1"),i("2877")),l=Object(u["a"])(p,r,a,!1,null,"72a4ee21",null);t["a"]=l.exports},"5ca5":function(e,t,i){},"636a":function(e,t,i){},"832a":function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"card",staticStyle:{width:"18rem",height:"23.24rem"}},[r("router-link",{attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id},query:{isPersonal:e.recipe.isPersonal}},id:"recipe-preview"}},[r("div",{staticClass:"recipe-body"},[e.image_load?r("img",{staticClass:"card-img-top",attrs:{src:e.recipe.image}}):e._e()]),r("h5",{staticClass:"card-title"},[e._v(" "+e._s(e.recipe.title)+" ")])]),r("div",{staticClass:"card-body"},[r("ul",{staticClass:"list-group list-group-flush"},[r("p",{attrs:{id:"recipe_info"}},[e._v(" "+e._s(e.recipe.readyInMinutes)+" minutes "),r("span",{attrs:{id:"line"}},[e._v("|")]),e._v(" "+e._s(e.recipe.popularity)+" likes ")]),!0===e.recipe.isViewed?r("p",{attrs:{id:"viewed_recipe"}},[e._v(" you have watched this recipe ")]):e._e(),r("div",{staticClass:"food_icons"},[r("FavoriteButton",{staticClass:"favoriteButton",attrs:{recipe:e.recipe}}),!0===e.recipe.vegetarian?r("img",{attrs:{id:"vegetarian",src:i("a4a8"),height:"28px",width:"28px",title:"vegetarian"}}):e._e(),!0===e.recipe.vegan?r("img",{attrs:{id:"vegan",src:i("5455"),height:"28px",width:"28px",title:"vegan"}}):e._e(),!0===e.recipe.glutenFree?r("img",{attrs:{id:"glutenFree",src:i("513c"),height:"28px",width:"28px",title:"gluten free"}}):e._e()],1)])])],1)])},a=[],s=i("e6e2"),n={name:"RecipePreview",components:{FavoriteButton:s["a"]},mounted:function(){var e=this;console.log("recipe preview mounted"),this.axios.get(this.recipe.image).then((function(t){e.image_load=!0}))},data:function(){return{image_load:!1}},props:{recipe:{type:Object,required:!0}}},c=n,o=(i("d824"),i("2877")),p=Object(o["a"])(c,r,a,!1,null,"ac6f1632",null);t["a"]=p.exports},ab19:function(e,t,i){},d824:function(e,t,i){"use strict";var r=i("5ca5"),a=i.n(r);a.a},e50e:function(e,t,i){"use strict";var r=i("636a"),a=i.n(r);a.a}}]);
//# sourceMappingURL=chunk-34b7e161.974f57ff.js.map