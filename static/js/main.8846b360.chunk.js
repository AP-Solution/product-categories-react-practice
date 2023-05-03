(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{12:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t(5),r=t.n(s),n=(t(10),t(11),t(4)),i=t(3),l=(t(12),[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}]),d=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],o=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}],j=t(0),h=function(e){var a=e.id,t=e.name,c=e.category,s=e.user;return Object(j.jsxs)("tr",{"data-cy":"Product",children:[Object(j.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:a}),Object(j.jsx)("td",{"data-cy":"ProductName",children:t}),Object(j.jsxs)("td",{"data-cy":"ProductCategory",children:[Object(j.jsx)("span",{role:"img","aria-label":"grocery",children:c.icon}),"-",c.name]}),Object(j.jsx)("td",{"data-cy":"ProductUser",className:"has-text-danger",children:s.name})]})},b=function(){var e=Object(c.useState)(null),a=Object(i.a)(e,2),t=a[0],s=a[1],r=Object(c.useState)(""),b=Object(i.a)(r,2),m=b[0],x=b[1],u=o.filter((function(e){var a=d.find((function(a){return a.id===e.categoryId})),c=l.find((function(e){return e.id===a.ownerId}));return!t||c.id===t})).filter((function(e){return e.name.toLowerCase().includes(m.toLowerCase())})).map((function(e){var a=d.find((function(a){return a.id===e.categoryId})),t=l.find((function(e){return e.id===a.ownerId}));return Object(n.a)(Object(n.a)({},e),{},{category:a,user:t})}));return Object(j.jsx)("div",{className:"section",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"title",children:"Product Categories"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("nav",{className:"panel",children:[Object(j.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(j.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(j.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",children:"All"}),l.map((function(e){var a=e.id,c=e.name;return Object(j.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:t===a?"is-active":"",onClick:function(){return s(a)},children:c},a)}))]}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:m,onChange:function(e){return x(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),""!==m&&Object(j.jsx)("span",{className:"icon is-right",children:Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){return x("")}})})]})}),Object(j.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(j.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 is-outlined",children:"All"}),Object(j.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 1"}),Object(j.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 2"}),Object(j.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 3"}),Object(j.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 4"})]}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})}),Object(j.jsxs)("div",{className:"box table-container",children:[0===u.length&&Object(j.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}),u.length>0&&Object(j.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(j.jsx)("tbody",{children:u.map((function(e){var a=e.id,t=e.name,c=e.category,s=e.user;return Object(j.jsx)(h,{id:a,name:t,category:c,user:s},a)}))})]})]})]})})};r.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8846b360.chunk.js.map