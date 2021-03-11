(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(14),u=t.n(r),o=t(3),a=t(0),s=function(e){var n=e.addPerson,t=e.newName,c=e.newNumber,r=e.handleNameChange,u=e.handleNumberChange;return Object(a.jsxs)("form",{onSubmit:n,children:[Object(a.jsxs)("div",{children:["Name: ",Object(a.jsx)("input",{value:t,onChange:r})]}),Object(a.jsxs)("div",{children:["Number: ",Object(a.jsx)("input",{value:c,onChange:u})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{children:"Add"})})]})},i=function(e){var n=e.title;return Object(a.jsx)("h2",{children:n})},l=function(e){var n=e.showPersons,t=e.deletePerson;return Object(a.jsx)("ul",{children:n.map((function(e){return Object(a.jsxs)("li",{children:[e.name," ",e.number," ",Object(a.jsx)("button",{onClick:function(){return t(e.id)},children:"Delete"})]},e.id)}))})},d=function(e){var n=e.message;return null===n?null:n.success?Object(a.jsx)("div",{className:"success",children:n.success}):n.error?Object(a.jsx)("div",{className:"error",children:n.error}):void 0},j=function(e){var n=e.search,t=e.handleSearch;return Object(a.jsxs)("div",{children:["Search: ",Object(a.jsx)("input",{value:n,onChange:t})]})},h=t(4),f=t.n(h),b="/api/persons",m=function(){return f.a.get(b).then((function(e){return e.data}))},O=function(e){return f.a.post(b,e).then((function(e){return e.data}))},v=function(e,n){return f.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},x=function(e){return f.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},p=function(){var e=Object(c.useState)(null),n=Object(o.a)(e,2),t=n[0],r=n[1],u=Object(c.useState)(""),h=Object(o.a)(u,2),f=h[0],b=h[1],p=Object(c.useState)(""),w=Object(o.a)(p,2),g=w[0],C=w[1],N=Object(c.useState)(""),S=Object(o.a)(N,2),P=S[0],k=S[1],y=Object(c.useState)(null),L=Object(o.a)(y,2),T=L[0],D=L[1],A=P?t.filter((function(e){return e.name.toLowerCase().includes(P.toLowerCase())})):t;return Object(c.useEffect)((function(){m().then((function(e){r(e)}))}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)(d,{message:T}),Object(a.jsx)(i,{title:"Phonebook"}),Object(a.jsx)(j,{search:P,handleSearch:function(e){k(e.target.value)}}),Object(a.jsx)(i,{title:"Add new"}),Object(a.jsx)(s,{addPerson:function(e){e.preventDefault();var n={name:f,number:g},c=t.find((function(e){return e.name.toLowerCase().includes(f.toLowerCase())}));if(c){if(f.length>0)if(window.confirm(f+" is already added to phonebook, replace the old number with the new one?")){var u=c.id;v(u,n).then((function(e){D({success:"Updated ".concat(c.name,"!")}),r(t.map((function(n){return n.id!==u?n:e}))),setTimeout((function(){D(null)}),5e3)})).catch((function(){D({error:"Could not update"}),setTimeout((function(){D(null)}),5e3)}))}else console.log("cancel update")}else O(n).then((function(e){D({success:"".concat(f," was added to the server")}),r(t.concat(e)),b(""),C(""),setTimeout((function(){D(null)}),5e3)})).catch((function(e){D({error:e.response.data.error})}))},newName:f,newNumber:g,handleNameChange:function(e){b(e.target.value)},handleNumberChange:function(e){C(e.target.value)}}),Object(a.jsx)(i,{title:"Numbers"}),t?Object(a.jsx)(l,{showPersons:A,deletePerson:function(e){window.confirm("Do you really want to delete")?x(e).then((function(){D({success:"Removed user from the server"}),r(t.filter((function(n){return n.id!==e}))),setTimeout((function(){D(null)}),5e3)})).catch((function(){D({error:"User was already removed from server"}),r(t.filter((function(n){return n.id!==e}))),setTimeout((function(){D(null)}),5e3)})):console.log("cancel delete")}}):Object(a.jsx)("p",{children:"Loading..."})]})};t(38);u.a.render(Object(a.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.a5321c79.chunk.js.map