(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{21:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(2),o=n.n(c),a=n(15),i=n.n(a),u=(n(21),n(3)),s=n(6),d=n(4),f=n.n(d),l="/api/persons",j={getAll:function(){return f.a.get(l).then((function(e){return e.data}))},create:function(e){return f.a.post(l,e).then((function(e){return e.data}))},remove:function(e){return f.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))},update:function(e,t){return f.a.put("".concat(l,"/").concat(e),t).then((function(e){return e.data}))}},b=function(e){var t=e.message;return null===t?null:t.error?Object(r.jsx)("div",{className:"error",children:t.text}):Object(r.jsx)("div",{className:"notification",children:t.text})},h=function(e){var t=e.filterText,n=e.setFilterText;return Object(r.jsxs)("div",{children:["filter shown with ",Object(r.jsx)("input",{value:t,onChange:function(e){n(e.target.value)}})]})},m=function(e){var t=e.newName,n=e.setNewName,c=e.newNumber,o=e.setNewNumber,a=e.persons,i=e.setPersons,u=e.notify;return Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=a.find((function(e){return e.name===t}));if(r){if(window.confirm("".concat(r.name," is already added to phonebook, replace the old number with a new one?"))){var d=Object(s.a)(Object(s.a)({},r),{},{number:c});j.update(r.id,d).then((function(e){i(a.map((function(t){return t.id!==r.id?t:e}))),n(""),o(""),u("Updated ".concat(e.name))})).catch((function(e){n(""),o(""),u(e.response.data.error,!0)}))}}else{var f={name:t,number:c};j.create(f).then((function(e){i(a.concat(e)),n(""),o(""),u("Added ".concat(e.name))})).catch((function(e){n(""),o(""),u(e.response.data.error,!0)}))}},children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:t,onChange:function(e){n(e.target.value)}})]}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{value:c,onChange:function(e){o(e.target.value)}})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})},O=function(e){var t=e.persons,n=e.setPersons,c=e.filterText,o=e.notify;return t.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())})).map((function(e){return Object(r.jsxs)("p",{children:[e.name," ",e.number," ",Object(r.jsx)("button",{onClick:(c=e.id,a=e.name,function(){window.confirm("Delete ".concat(a,"?"))&&j.remove(c).then((function(){return j.getAll()})).then((function(e){n(e),o("Deleted ".concat(a))})).catch((function(){o("Information of '".concat(a,"' has already been removed from server"),!0),n(t.filter((function(e){return e.id!==c})))}))}),children:"delete"})]},e.id);var c,a}))},v=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(""),i=Object(u.a)(a,2),s=i[0],d=i[1],f=Object(c.useState)(""),l=Object(u.a)(f,2),v=l[0],x=l[1],p=Object(c.useState)(""),w=Object(u.a)(p,2),g=w[0],N=w[1],C=Object(c.useState)(null),T=Object(u.a)(C,2),y=T[0],S=T[1];Object(c.useEffect)((function(){j.getAll().then((function(e){return o(e)}))}),[]);var k=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];S({text:e,error:t}),setTimeout((function(){S(null)}),5e3)};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(b,{message:y}),Object(r.jsx)(h,{filterText:g,setFilterText:N}),Object(r.jsx)("h2",{children:"Add a new"}),Object(r.jsx)(m,{newName:s,setNewName:d,newNumber:v,setNewNumber:x,persons:n,setPersons:o,notify:k}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(O,{persons:n,setPersons:o,filterText:g,notify:k})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),x()}},[[40,1,2]]]);
//# sourceMappingURL=main.e04b36e8.chunk.js.map