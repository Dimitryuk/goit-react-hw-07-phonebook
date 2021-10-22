(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={filter__field:"Filter_filter__field__1C6JC"}},18:function(t,e,n){},27:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),o=n(9),r=n.n(o),i=(n(18),n(12)),s=n(13),u=n(2),l=n(10),b=n.n(l),d=(n(27),n(6)),j=n.n(d),m=n(0),f=function(t){var e=t.onSubmit,n=Object(c.useState)(""),a=Object(u.a)(n,2),o=a[0],r=a[1],i=Object(c.useState)(""),s=Object(u.a)(i,2),l=s[0],b=s[1],d=function(t){var e=t.currentTarget,n=e.name,c=e.value;"name"===n?r(c):b(c)};return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({name:o,number:l}),r(""),b("")},children:[Object(m.jsxs)("label",{children:["Name",Object(m.jsx)("input",{className:j.a.input__field,onChange:d,type:"text",name:"name",value:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{children:["Number",Object(m.jsx)("input",{className:j.a.input__field,onChange:d,type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("button",{className:j.a.form__button,type:"submit",children:"Add contact"})]})})},_=n(8),O=n.n(_),h=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(m.jsx)("div",{children:Object(m.jsx)("ol",{className:O.a.contacts__list,children:e.map((function(t){var e=t.name,c=t.number,a=t.id;return Object(m.jsxs)("li",{className:"ContactList_item",children:[e," ",c,Object(m.jsx)("button",{className:O.a.contacts__button,type:"button",onClick:function(){return n(a)},children:"Delete"})]},a)}))})})},p=n(11),x=n.n(p),v=function(t){var e=t.value,n=t.onFilterChange;return Object(m.jsxs)("div",{className:"FilterWrapper",children:["Find contact by name",Object(m.jsx)("label",{htmlFor:"",children:Object(m.jsx)("input",{className:x.a.filter__field,type:"text",name:"filter",value:e,onChange:n})})]})};var C=function(){var t=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],e=Object(c.useState)(""),n=Object(u.a)(e,2),a=(n[0],n[1]),o=Object(c.useState)(""),r=Object(u.a)(o,2),l=(r[0],r[1]),d=Object(c.useState)(""),j=Object(u.a)(d,2),_=j[0],O=j[1],p=Object(c.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:t})),x=Object(u.a)(p,2),C=x[0],g=x[1];return Object(c.useEffect)((function(){var e=window.localStorage.getItem("contacts");g(e?JSON.parse(e):t)}),[]),Object(c.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(C))}),[C]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(f,{onSubmit:function(t){C.some((function(e){return e.name===t.name}))?alert("".concat(t.name," already exists")):(g((function(e){return[Object(s.a)({id:b.a.generate()},t)].concat(Object(i.a)(e))})),a(""),l(""))}}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(v,{onFilterChange:function(t){O(t.currentTarget.value)}}),Object(m.jsx)(h,{contacts:function(t,e){return t.filter((function(t){return t.name.toLocaleLowerCase().includes(e.toLocaleLowerCase())}))}(C,_),onDeleteContact:function(t){g(C.filter((function(e){return e.id!==t})))}})]})})};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={input__field:"ContactForm_input__field__24m-Z",form__button:"ContactForm_form__button__22Nnh"}},8:function(t,e,n){t.exports={contacts__list:"ContactList_contacts__list__h7GWK",contacts__button:"ContactList_contacts__button__1QWXE"}}},[[29,1,2]]]);
//# sourceMappingURL=main.bf4398cc.chunk.js.map