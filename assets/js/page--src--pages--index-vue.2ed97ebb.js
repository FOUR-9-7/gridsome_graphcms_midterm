(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"GqV+":function(t,s,e){"use strict";var c=e("KCZm");e.n(c).a},KCZm:function(t,s,e){},iyQ6:function(t,s,e){"use strict";e.r(s);var c={data:function(){return{perPage:3,currentPage:1,cartItems:[],x:[],lll:1,products:[{name:"",description:"",price:"",images:[{url:""}],slug:""}]}},computed:{rows:function(){return this.$page.pageAll.products.length}},created:function(){this.products=this.$page.page1.products},methods:{addToCart:function(t){this.cartItems=JSON.parse(localStorage.getItem("product")),null==this.cartItems&&(this.cartItems=[]),this.cartItems.push(t),localStorage.setItem("product",JSON.stringify(this.cartItems))},selectPage:function(t){1==t&&(this.products=this.$page.page1.products),2==t&&(this.products=this.$page.page2.products)},select0_30k:function(){this.products=this.$page.select0_30k.products},select30k_50k:function(){this.products=this.$page.select30k_50k.products},select50k_70k:function(){this.products=this.$page.select50k_70k.products},select70k_grt:function(){this.products=this.$page.select70k_grt.products}}},i=(e("GqV+"),e("KHd+")),a=null,r=Object(i.a)(c,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shoppy"},[e("br"),e("br"),e("h1",{staticClass:"text-title"},[t._v("Product")]),e("div",{staticClass:"priceRange"},[e("h2",[e("b-icon",{attrs:{icon:"sliders"}}),t._v("\n       Price range\n    ")],1),e("div",{staticStyle:{"justify-content":"space-between","text-align":"center"}},[e("b-button",{staticClass:"filterPrice-btn",attrs:{id:"show-btn"},on:{click:function(s){return t.select0_30k()}}},[e("ul",{staticClass:"list-tags"},[e("li",[t._v(" 0 - 30,000 Baht")])]),e("b-icon",{attrs:{icon:"cart"}})],1),t._v("\n         \n      "),e("b-button",{staticClass:"filterPrice-btn",attrs:{id:"show-btn"},on:{click:function(s){return t.select30k_50k()}}},[e("ul",{staticClass:"list-tags"},[e("li",[t._v(" 30,001 - 50,000 Baht")])]),e("b-icon",{attrs:{icon:"cart"}})],1),t._v("\n         \n      "),e("b-button",{staticClass:"filterPrice-btn",attrs:{id:"show-btn"},on:{click:function(s){return t.select50k_70k()}}},[e("ul",{staticClass:"list-tags"},[e("li",[t._v(" 50,001 - 70,000 Baht")])]),e("b-icon",{attrs:{icon:"cart"}})],1),t._v("\n         \n      "),e("b-button",{staticClass:"filterPrice-btn",attrs:{id:"show-btn"},on:{click:function(s){return t.select70k_grt()}}},[e("ul",{staticClass:"list-tags"},[e("li",[t._v("70,000 Baht")])]),e("b-icon",{attrs:{icon:"cart"}})],1),t._v("\n         \n    ")],1)]),e("br"),e("b-pagination",{attrs:{pills:"","total-rows":t.rows,"per-page":t.perPage,align:"center"},nativeOn:{click:function(s){return t.selectPage(t.currentPage)}},model:{value:t.currentPage,callback:function(s){t.currentPage=s},expression:"currentPage"}}),this.$page.pageAll.products?e("div",{staticClass:"product-grid text-center"},t._l(t.products,(function(s){return e("div",{key:s.id,staticClass:"flex-col"},[e("g-link",{staticClass:"link",attrs:{to:"product/"+s.id}},[e("div",{staticClass:"product-wrapper"},[t._l(s.images,(function(t,s){return e("g-image",{key:s,staticClass:"img",attrs:{src:t.url}})})),e("div",{staticClass:"product-content"},[e("p",{staticClass:"product-name"},[t._v(" "+t._s(s.name))]),e("p",{staticClass:"product-price"},[t._v("  ₦"+t._s(10*s.price))])])],2)])],1)})),0):t._e()],1)}),[],!1,null,"3d918ef8",null);"function"==typeof a&&a(r);s.default=r.exports}}]);