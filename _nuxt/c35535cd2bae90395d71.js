(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{157:function(n,t,e){var l=e(7),r=e(20),o=e(16),d=e(43).f;n.exports=function(n){return function(t){for(var e,c=o(t),f=r(c),h=f.length,i=0,v=[];h>i;)e=f[i++],l&&!d.call(c,e)||v.push(n?[e,c[e]]:c[e]);return v}}},158:function(n){n.exports=JSON.parse('{"Normal Island":{"img":"normal.jpg","fruits":"native","flowers":["native","secondary"],"notes":"This island has no particular characteristics."},"Normal Pond Island":{"img":"normal_pond.jpg","fruits":"native","flowers":["native"],"notes":"This island has no particular characteristics."},"Fruit Island":{"img":"fruit.jpg","fruits":"secondary","flowers":["secondary"],"notes":"This island is full of trees of your secondary fruit."},"Spiral Island":{"img":"spiral.jpg","fruits":"native","flowers":["native"],"notes":"This islands river is shaped like the swirl on a fossil. There is also a chance that a special fossil can be found in the center."},"Mountain Island":{"img":"mountain.jpg","fruits":"native","flowers":["native"],"notes":"This island has no river and a mountain with 5 rocks on top. You can spawn infinite centipedes from the rocks if you hit them with a shovel."},"Pond Island":{"img":"pond.jpg","fruits":"native","flowers":["native","secondary"],"notes":"This island has a big pond in the middle."},"Big Fish Flower Island":{"img":"big_fish_flower.jpg","fruits":"native","flowers":["native"],"notes":"This island has a big lake in the middle and hybrid flowers around it. Only fishes of size 4 or bigger will spawn on this island."},"Big Fish Island":{"img":"big_fish.jpg","fruits":"native","flowers":["native"],"notes":"This island has a smaller isle within. Only fishes of size 4 or bigger will spawn on this island."},"Bamboo Island":{"img":"bamboo.jpg","fruits":"none","flowers":["native"],"notes":"This island only has bamboo trees and flowers."},"Bells Island":{"img":"bells.jpg","fruits":"native","flowers":["native"],"notes":"This island has another island in the middle. It is accessible by crushing the rock on the top. All rocks on the smaller island will drop bells."},"Waterfalls Island":{"img":"waterfalls.jpg","fruits":"native","flowers":["native","secondary"],"notes":"This island is has 4 waterfalls across 2 mountain levels."},"Flower Island":{"img":"flower.jpg","fruits":"none","flowers":["native","secondary"],"notes":"This island has a large pond in the middle and hybrid colored flowers around it."},"Tarantula Island":{"img":"tarantula.jpg","fruits":"native","flowers":["native"],"notes":"This island has another island in the middle that you can access without a pole. Tarantulas will spawn infinitely in this area."},"Shark Island":{"img":"shark.jpg","fruits":"none","flowers":["native"],"notes":"On this island only fish with fins will spawn."},"Scorpion Island":{"img":"scorpion.jpg","fruits":"native","flowers":["native"],"notes":"On this island only scorpions will spawn."},"Trash Island":{"img":"trash.jpg","fruits":"native","flowers":["native"],"notes":"On this island every fish will be either a tire, a boot or a can."}}')},159:function(n,t,e){var content=e(164);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(29).default)("40d8b67d",content,!0,{sourceMap:!1})},160:function(n,t,e){var content=e(166);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(29).default)("5573c73c",content,!0,{sourceMap:!1})},162:function(n,t,e){var l=e(6),r=e(157)(!0);l(l.S,"Object",{entries:function(n){return r(n)}})},163:function(n,t,e){"use strict";var l=e(159);e.n(l).a},164:function(n,t,e){(t=e(28)(!1)).push([n.i,".container[data-v-ac50dca4]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));grid-gap:.5em}.card[data-v-ac50dca4]{height:-moz-max-content;height:max-content}.cardHeader[data-v-ac50dca4]{font-weight:700;display:inline-block}",""]),n.exports=t},165:function(n,t,e){"use strict";var l=e(160);e.n(l).a},166:function(n,t,e){(t=e(28)(!1)).push([n.i,".container[data-v-43c89f10]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));grid-gap:.5em}.card[data-v-43c89f10]{height:-moz-max-content;height:max-content}",""]),n.exports=t},171:function(n,t,e){"use strict";e.r(t);e(27),e(13),e(162);var l=e(158),r={data:function(){return{islands:Object.entries(l),columns:[{field:"fruits",label:"Fruits"},{field:"flowers",label:"Flowers"},{field:"notes",label:"Notes"}]}}},o=(e(163),e(19)),d={name:"Islands",components:{IslandCards:Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container"},n._l(n.islands,(function(t){return e("div",{key:t[0],staticClass:"card"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image"},[e("img",{attrs:{src:"/acnh-deserted-islands/islands/x512/"+t[1].img}})])]),n._v(" "),e("div",{staticClass:"card-content"},[e("p",{staticClass:"title is-4"},[n._v("\n                "+n._s(t[0])+"\n            ")]),n._v(" "),e("div",{},[e("div",{staticClass:"cardHeader"},[n._v("Fruits:")]),n._v("\n                "+n._s(t[1].fruits)+"\n            ")]),n._v(" "),e("div",{},[e("div",{staticClass:"cardHeader"},[n._v("Flowers:")]),n._v("\n                "+n._s(t[1].flowers.toString())+"\n            ")]),n._v(" "),e("div",{},[e("div",{staticClass:"cardHeader"},[n._v("Notes:")]),n._v("\n                "+n._s(t[1].notes)+"\n            ")])])])})),0)}),[],!1,null,"ac50dca4",null).exports}},c=(e(165),Object(o.a)(d,(function(){var n=this.$createElement,t=this._self._c||n;return t("section",{staticClass:"section"},[t("IslandCards")],1)}),[],!1,null,"43c89f10",null));t.default=c.exports}}]);