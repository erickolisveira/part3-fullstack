(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(13),u=t.n(o),c=t(14),i=t(3),l=t(2),m=t.n(l),s="/api/persons",f=function(){return m.a.get(s).then((function(e){return e.data}))},d=function(e){return m.a.post(s,e).then((function(e){return e.data}))},b=function(e){return m.a.delete("".concat(s,"/").concat(e))},h=function(e,n){return m.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},p=(t(37),function(e){var n=e.message,t=e.isError;if(null===n)return null;var r=t?{border:"1px solid red",color:"red"}:{border:"1px solid green",color:"green"};return a.a.createElement("div",{style:r,className:"message"},n)});function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(t,!0).forEach((function(n){Object(c.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=function(e){var n=e.title;return a.a.createElement("h2",null,n)},O=function(e){var n=e.name,t=e.number,r=e.handleDelete;return a.a.createElement("div",null,n," ",t,a.a.createElement("button",{onClick:r},"delete"))},w=function(e){var n=e.persons,t=e.handleDelete;return n.map((function(e){return a.a.createElement(O,{key:e.name,name:e.name,number:e.number,handleDelete:function(){return t(e)}})}))},j=function(e){return a.a.createElement("div",null,"Filter shown with",a.a.createElement("input",{onChange:e.handleFindChange,value:e.search}))},y=function(e){var n=e.nameChange,t=e.numberChange,r=e.formSubmit,o=e.newPerson;return a.a.createElement("form",{onSubmit:r},a.a.createElement("div",null,"Name: ",a.a.createElement("input",{onChange:n,value:o.name})),a.a.createElement("div",null,"Number: ",a.a.createElement("input",{onChange:t,value:o.number})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"Add")))},C=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],u=Object(r.useState)({name:"",number:""}),c=Object(i.a)(u,2),l=c[0],m=c[1],s=Object(r.useState)(""),E=Object(i.a)(s,2),O=E[0],C=E[1],P=Object(r.useState)({message:null,isError:null}),k=Object(i.a)(P,2),D=k[0],S=k[1],N=function(e,n,t){S({message:e,isError:t}),setTimeout((function(){S({message:null,isError:null})}),n)},x=function(){m({name:"",number:""})};Object(r.useEffect)((function(){f().then((function(e){o(e)}))}),[]);var A=""===O?t:t.filter((function(e){return e.name.toLowerCase().includes(O.toLowerCase())}));return a.a.createElement("div",null,a.a.createElement(g,{title:"Phonebook"}),a.a.createElement(p,{message:D.message,isError:D.isError}),a.a.createElement(j,{handleFindChange:function(e){return C(e.target.value)},search:O}),a.a.createElement(g,{title:"Add a new"}),a.a.createElement(y,{nameChange:function(e){return m(v({},l,{name:e.target.value}))},numberChange:function(e){return m(v({},l,{number:e.target.value}))},formSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name===l.name}));if(n){if(window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))){var r={name:n.name,number:l.number};h(n.id,r).then((function(e){o(t.map((function(n){return n.id!==e.id?n:e}))),x(),N("Number of ".concat(e.name," changed sucessfully"),3e3,!1)})).catch((function(){N("".concat(n.name," has already been removed from the server"),3e3,!0),o(t.filter((function(e){return e.id!==n.id}))),x()}))}}else d(l).then((function(e){o(t.concat(e)),x(),N("Added ".concat(e.name," to your phonebook"),3e3,!1)}))},newPerson:l}),a.a.createElement(g,{title:"Numbers"}),a.a.createElement(w,{persons:A,handleDelete:function(e){window.confirm("".concat(e.name," will be deleted. Proceed?"))&&(b(e.id),o(t.filter((function(n){return n.id!==e.id}))))}}))};u.a.render(a.a.createElement(C,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a1560378.chunk.js.map