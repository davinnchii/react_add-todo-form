(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(8),i=n.n(a),r=n(4),c=n(2),s=n(7),o=(n(14),n(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],u=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],d=n(9),m=n.n(d),j=n(0),b=function(e){var t=e.user;return t&&Object(j.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},h=function(e){var t=e.todo;return Object(j.jsxs)("article",{className:m()("TodoInfo",{"TodoInfo--completed":t.completed}),"data-id":t.id,children:[Object(j.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(j.jsx)(b,{user:t.user})]})},O=function(e){var t=e.todos;return Object(j.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(j.jsx)(h,{todo:e},e.id)}))})};function f(e){return l.find((function(t){return t.id===e}))||null}function p(e){var t=e.map((function(e){return e.id}));return Math.max.apply(Math,Object(s.a)(t))}var x=function(){var e=Object(o.useState)(u.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:f(e.userId)})}))),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(o.useState)({title:!1,newUser:!1}),d=Object(r.a)(i,2),m=d[0],b=d[1],h=Object(o.useState)(""),x=Object(r.a)(h,2),v=x[0],y=x[1],S=Object(o.useState)(0),N=Object(r.a)(S,2),w=N[0],I=N[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Add todo form"}),Object(j.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){var t;(e.preventDefault(),v&&w)?(t={id:p(n)+1,title:v,completed:!1,user:f(w)},a((function(e){return[].concat(Object(s.a)(e),[t])})),y(""),I(0),b((function(){return{title:!1,newUser:!1}}))):b((function(){return{title:!v,newUser:!w}}))},children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsxs)("label",{htmlFor:"#title",children:["Title: ",Object(j.jsx)("input",{id:"title",type:"text","data-cy":"titleInput",value:v,placeholder:"Enter a title",onChange:function(e){y(e.target.value),b((function(e){return Object(c.a)(Object(c.a)({},e),{},{title:!1})}))}})]}),m.title&&Object(j.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsxs)("label",{htmlFor:"userSelect",children:["User: ",Object(j.jsxs)("select",{id:"userSelect","data-cy":"userSelect",value:w,onChange:function(e){I(+e.target.value),b((function(e){return Object(c.a)(Object(c.a)({},e),{},{newUser:!1})}))},children:[Object(j.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.name})}))]})]}),m.newUser&&Object(j.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(j.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(j.jsx)(O,{todos:n})]})};i.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9ad7972a.chunk.js.map