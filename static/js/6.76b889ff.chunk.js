(this.webpackJsonpamadoshop=this.webpackJsonpamadoshop||[]).push([[6],{62:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(12),i=t(8),l=t(4),o=t(21),s=[{id:1,name:"Tables"},{id:2,name:"Chairs"},{id:3,name:"Seats"},{id:4,name:"Couches"},{id:5,name:"Lamps"}];var m=Object(c.b)((function(e){return{catalog:e.app.catalog.data,cart:e.app.cart,isLoading:e.app.isLoading.goods||!1,categories:e.app.categories}}),(function(e){return{updateCategory:function(a){return e(Object(o.i)(a))},updateColors:function(a){return e(Object(o.j)(a))},updateBrands:function(a){return e(Object(o.g)(a))},currentPageUpdate:function(a){return e(Object(o.a)(a))}}}))((function(e){var a=e.categories,t=e.updateCategory,r=(e.updateBrands,e.updateColors),c=e.currentPageUpdate;function o(e){t(e.currentTarget.getAttribute("name")),c(1)}return n.a.createElement("div",{className:"widget catagory mb-50"},n.a.createElement("h6",{className:"widget-title mb-30",style:{cursor:"pointer",border:"2px solid #fbb710",textAlign:"center",padding:"5px"},onClick:function(){t("All"),r("All"),c(1)}},"Reset categories"),n.a.createElement("h6",{className:"widget-title mb-30"},"Categories"),n.a.createElement("div",{className:"catagories-menu"},s.map((function(e){return n.a.createElement("ul",{key:e.id},n.a.createElement("li",{className:a==e.id?"active":"",name:e.id,htmlFor:e.id,onClick:o},n.a.createElement(i.b,{to:"".concat(l.g)},e.name)))}))))})),d=[{id:1,name:"Porto"},{id:2,name:"Boco-Boco"},{id:3,name:"Floran"},{id:4,name:"Pagany"},{id:5,name:"Ducu"},{id:6,name:"Gramm"},{id:7,name:"Rubiny"},{id:8,name:"Tamana"}];var u=Object(c.b)((function(e){return{catalog:e.app.catalog.data,cart:e.app.cart,isLoading:e.app.isLoading.goods||!1,brands:e.app.brands}}),(function(e){return{updateBrands:function(a){return e(Object(o.g)(a))},currentPageUpdate:function(a){return e(Object(o.a)(a))}}}))((function(e){var a=e.brands,t=e.updateBrands,r=e.currentPageUpdate;function c(e){t(e.currentTarget.getAttribute("surname")),r(1)}return n.a.createElement("div",{className:"widget brands mb-50"},n.a.createElement("h6",{className:"widget-title mb-30"},"Brands"),n.a.createElement("div",{className:"widget-desc"},n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"radiobutton",id:"All",surname:"All",onChange:c,defaultChecked:!0}),n.a.createElement("label",{className:"All"===a?"form-check-label select":"form-check-label",htmlFor:"All"},"All")),d.map((function(e){return n.a.createElement("div",{className:"form-check",key:e.id},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"radiobutton",id:e.name,surname:e.id,onChange:c,defaultChecked:!1}),n.a.createElement("label",{className:a===e.id?"form-check-label select":"form-check-label",htmlFor:e.name},e.name))}))))})),p=t(25),g=[{id:1,name:"red"},{id:2,name:"pink"},{id:3,name:"yellow"},{id:4,name:"grey"},{id:5,name:"blue"},{id:6,name:"black"},{id:7,name:"green"},{id:8,name:"white"}];var f=Object(c.b)((function(e){return{catalog:e.app.catalog.data,colors:e.app.colors,isLoading:e.app.isLoading.goods||!1}}),(function(e){return{updateColors:function(a){return e(Object(o.j)(a))}}}))((function(e){var a=e.colors,t=e.updateColors;return n.a.createElement("div",{className:"widget color mb-50"},n.a.createElement("h6",{className:"widget-title mb-30"},"Color"),n.a.createElement("div",{className:"widget-desc"},n.a.createElement("ul",{className:"d-flex"},g.map((function(e){return n.a.createElement("li",{key:e.id},n.a.createElement("div",{to:"#",className:e.id,name:e.id,onClick:function(e){!function(e){t(e.currentTarget.getAttribute("name"))}(e)},style:{backgroundColor:"".concat(e.name),width:"30px",height:"30px",display:"block",borderRadius:"50%",position:"relative",zIndex:"1",boxShadow:"0 0 3px rgba(0, 0, 0, 0.15)",border:"".concat(a===e.id?"1px solid black":"none"),cursor:"pointer"}}))})))))}));var b=function(){return n.a.createElement("div",{className:"widget price mb-50"},n.a.createElement("h6",{className:"widget-title mb-30"},"Price"),n.a.createElement("div",{className:"widget-desc"},n.a.createElement("div",{className:"slider-range"},n.a.createElement("div",{"data-min":"10","data-max":"1000","data-unit":"$",className:"slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all","data-value-min":"10","data-value-max":"1000","data-label-result":""},n.a.createElement("div",{className:"ui-slider-range ui-widget-header ui-corner-all"}),n.a.createElement("span",{className:"ui-slider-handle ui-state-default ui-corner-all"}),n.a.createElement("span",{className:"ui-slider-handle ui-state-default ui-corner-all"}),n.a.createElement("div",{className:"ui-slider-range ui-corner-all ui-widget-header"})),n.a.createElement("div",{className:"range-price"},"$10 - $1000"))))};var E=function(){return n.a.createElement("div",{className:"shop_sidebar_area"},n.a.createElement(m,null),n.a.createElement(u,null),n.a.createElement(f,null),n.a.createElement(b,null))};var v=t(29);function N(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,n=!1,c=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(t.push(i.value),!a||t.length!==a);r=!0);}catch(o){n=!0,c=o}finally{try{r||null==l.return||l.return()}finally{if(n)throw c}}return t}}(e,a)||Object(v.a)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e){var a=N(Object(r.useState)(!1),2),t=a[0],c=a[1],i=e.name,l=e.options,o=e.current,s=e.title,m=e.onChange;function d(e){var a=e.target.getAttribute("data-id");m(a,i)}return n.a.createElement("div",{className:"sort-by-date d-flex align-items-center mr-15"},n.a.createElement("p",null,s),n.a.createElement("form",{action:"#",method:"get"},n.a.createElement("div",{className:"nice-select ".concat(t&&"open"),tabIndex:"0",onClick:function(e){c(!t)}},n.a.createElement("span",{className:"current"},l[o]||""),n.a.createElement("ul",{className:"list"},l.map((function(e,a){return n.a.createElement("li",{"data-id":a,key:a,className:"option ".concat(o==a&&"selected"),onClick:d},e)}))))))}h.defaultProps={options:[]};var w=h,y=["Date","Newest","Popular"],k=[4,8,12,18];var C=Object(c.b)((function(e){return{catalog:e.app.catalog.data,cart:e.app.cart,isLoading:e.app.isLoading.goods||!1,openChosenDesc:e.app.isLoading.goods||!1,openChosenImg:e.app.isLoading.goods||!1,chosenImg:e.app.chosenImg.data,chosenDesc:e.app.chosenDesc.data,recentProduct:e.app.recentProduct,sliderImg:e.app.sliderImg}}),(function(e){return{listNumber:function(a){return e(Object(o.b)(a))}}}))((function(e){var a=e.listNumber,t=N(Object(r.useState)(0),2),c=t[0],i=t[1],l=N(Object(r.useState)(0),2),o=l[0],s=l[1],m=function(e,t){"sortBy"===t?i(e):"viewOnPage"===t&&(s(e),a(k[e]))};return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"product-topbar d-xl-flex align-items-end justify-content-between"},n.a.createElement("div",{className:"total-products"},n.a.createElement("p",null,"Showing 1-8 0f 25"),n.a.createElement("div",{className:"view d-flex"},n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"fa fa-th-large","aria-hidden":"true"})),n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"fa fa-bars","aria-hidden":"true"})))),n.a.createElement("div",{className:"product-sorting d-flex"},n.a.createElement(w,{title:"Sort by",name:"sortBy",current:c,options:y,onChange:m}),n.a.createElement(w,{title:"View",name:"viewOnPage",current:o,options:k,onChange:m})))))})),j=t(28),A=t.n(j);var O=Object(c.b)((function(e){return{catalog:e.app.catalog.data,cart:e.app.cart,brands:e.app.brands,currentPage:e.app.currentPage,colors:e.app.colors,categories:e.app.categories,viewNumber:e.app.viewNumber,isLoading:e.app.isLoading.goods||!1}}),(function(e){return{loadCatalog:function(){return e(Object(o.c)())},updateCart:function(a){return e(Object(o.h)(a))}}}))((function(e){var a=e.catalog,t=e.isLoading,r=e.cart,c=e.updateCart,o=e.categories,s=e.brands,m=e.colors,d=e.currentPage,u=e.viewNumber;function g(e){if(r.find((function(a){return a.id===e.currentTarget.getAttribute("name")})))console.log("\u0422\u0410\u041a\u041e\u0419 \u0422\u041e\u0412\u0410\u0420 \u0421\u0423\u0429\u0415\u0421\u0422\u0412\u0423\u0415\u0422");else{var a=e.currentTarget.getAttribute("name"),t=e.currentTarget.getAttribute("price"),n=e.currentTarget.getAttribute("imagesrc"),i=e.currentTarget.getAttribute("alt");r.push({id:a,price:t,amount:1,image:n,title:i}),c(r),localStorage.setItem("local",JSON.stringify(r))}}if(t)return n.a.createElement(p.a,null);var f=0,b=(d-1)*u+1,E=b+u;return a.map((function(e,a){if((e.brand===s||"All"===s)&&(e.category===o||"All"===o)&&(e.colors===m||"All"===m)&&(f++,b<E&&f>=b))return b++,n.a.createElement("div",{key:e.id,className:"col-12 col-sm-6 col-md-12 col-xl-6"},n.a.createElement("div",{className:"single-product-wrapper"},n.a.createElement("div",{className:"product-img"},n.a.createElement(i.b,{to:"".concat(l.e,"/").concat(e.id)},n.a.createElement("img",{src:"http://test-api.ipromote.ru/img/".concat(e.img_url),alt:""}),n.a.createElement("img",{className:"hover-img",alt:""}))),n.a.createElement("div",{className:"product-description d-flex align-items-center justify-content-between"},n.a.createElement("div",{className:"product-meta-data"},n.a.createElement("div",{className:"line"}),n.a.createElement("p",{className:"product-price"},"$",e.price),n.a.createElement(i.b,{to:"".concat(l.e,"/").concat(e.id)},n.a.createElement("h6",null,e.title))),n.a.createElement("div",{className:"ratings-cart text-right"},n.a.createElement("div",{className:"ratings"},n.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"}),n.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"}),n.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"}),n.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"}),n.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"})),n.a.createElement("div",{className:"cart"},n.a.createElement("i",{className:"fa fa-shopping-cart",src:A.a,alt:e.title,onClick:g,name:e.id,price:e.price,imagesrc:e.img_url,style:{cursor:"pointer"}}))))))}))}));var P=Object(c.b)((function(e){return{catalog:e.app.catalog.data,categories:e.app.categories,brands:e.app.brands,colors:e.app.colors,isLoading:e.app.isLoading.goods||!1,recentProduct:e.app.recentProduct,sliderImg:e.app.sliderImg,viewNumber:e.app.viewNumber,currentPage:e.app.currentPage}}),(function(e){return{currentPageUpdate:function(a){return e(Object(o.a)(a))}}}))((function(e){var a=e.catalog,t=e.isLoading,r=e.categories,c=e.brands,i=e.colors,l=e.currentPage,o=e.viewNumber,s=e.currentPageUpdate;if(t)return n.a.createElement(p.a,null);for(var m,d=0,u=[],g=0;g<a.length;g++)a[g].brand!==c&&"All"!==c||a[g].category!==r&&"All"!==r||a[g].colors!==i&&"All"!==i||d++,m=Math.ceil(d/o);for(var f=1;f<=m;f++)u.push(f);return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("nav",{"aria-label":"navigation"},n.a.createElement("ul",{className:"pagination justify-content-end mt-50"},u.map((function(e,a){return n.a.createElement("li",{className:e===l?"page-item active":"page-item",key:e},n.a.createElement("div",{className:"page-link",onClick:function(){return s(e)}},e))}))))))}));var x=function(){return n.a.createElement("div",{className:"amado_product_area section-padding-100"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(C,null),n.a.createElement("div",{className:"row"},n.a.createElement(O,null)),n.a.createElement(P,null)))};a.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(E,null),n.a.createElement(x,null))}}}]);
//# sourceMappingURL=6.76b889ff.chunk.js.map