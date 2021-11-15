(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={input__field:"ContactForm_input__field__7rbrk",form__button:"ContactForm_form__button__1B49a"}},15:function(t,e,n){t.exports={contacts__list:"ContactList_contacts__list__2FY7i",contacts__button:"ContactList_contacts__button__1K-Su"}},19:function(t,e,n){t.exports={filter__field:"Filter_filter__field__369WF"}},26:function(t,e,n){},27:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(8),o=n.n(r),i=(n(26),n(27),n(16)),s=n(5),u=n(3),l=n(18),b=n.n(l),j=Object(u.b)("contacts/add",(function(t,e){return{payload:{id:b.a.generate(),name:t,number:e}}})),d=Object(u.b)("phonebook/delete"),f=Object(u.b)("phonebook/changeFilter"),_=n(11),h=n.n(_),m=n(1);var O=Object(s.b)((function(t){return t.contacts.phonebookContacts}),(function(t){return{onSubmit:function(e,n){return t(j(e,n))}}}))((function(t){t.phonebookContacts;var e=t.onSubmit,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(""),u=Object(i.a)(s,2),l=u[0],b=u[1],j=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":o(c);break;case"number":b(c);break;default:return}};return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(r,l),o(""),b("")},children:[Object(m.jsxs)("label",{children:["Name",Object(m.jsx)("input",{className:h.a.input__field,onChange:j,type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{children:["Number",Object(m.jsx)("input",{className:h.a.input__field,onChange:j,type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("button",{className:h.a.form__button,type:"submit",children:"Add contact"})]})})})),p=n(15),x=n.n(p),v=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},C=Object(s.b)((function(t){var e=t.contacts,n=e.phonebookContacts,c=e.phonebookFilter;return{contacts:v(n,c)}}),(function(t){return{deleteContact:function(e){return t(d(e))}}}))((function(t){var e=t.contacts,n=t.deleteContact;return Object(m.jsx)("div",{children:Object(m.jsx)("ol",{className:x.a.contacts__list,children:e.map((function(t){var e=t.name,c=t.number,a=t.id;return Object(m.jsxs)("li",{className:"ContactList_item",children:[e," ",c,Object(m.jsx)("button",{className:x.a.contacts__button,type:"button",onClick:function(){return n(a)},children:"Delete"})]},a)}))})})})),k=n(19),g=n.n(k),F=Object(s.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{changeFilter:function(e){return t(f(e))}}}))((function(t){var e=t.filter,n=t.changeFilter;return Object(m.jsxs)("div",{className:"FilterWrapper",children:["Find contact by name",Object(m.jsx)("label",{htmlFor:"",children:Object(m.jsx)("input",{className:g.a.filter__field,type:"text",name:"filter",value:e,onChange:function(t){return n(t.currentTarget.value)}})})]})}));var y,N=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(O,{}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(F,{}),Object(m.jsx)(C,{})]})})},A=n(10),w=n(20),S=n.n(w),z=n(4),L=n(21),B=n.n(L),J=n(12),Z=n(2),q=Object(u.c)([],(y={},Object(J.a)(y,j,(function(t,e){var n=e.payload;return console.log(n),t.some((function(t){return t.name===n.name}))?(alert("Attention, the contact is already in contacts list"),t):[].concat(Object(A.a)(t),[n])})),Object(J.a)(y,d,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),y)),D=Object(u.c)("",Object(J.a)({},f,(function(t,e){return e.payload}))),M=Object(Z.b)({phonebookContacts:q,phonebookFilter:D}),T={key:"contacts",storage:B.a,blacklist:["filter"]},W=[].concat(Object(A.a)(Object(u.d)({serializableCheck:{ignoredActions:[z.a,z.f,z.b,z.c,z.d,z.e]}})),[S.a]),E=Object(u.a)({reducer:{contacts:Object(z.g)(T,M)},middleware:W,devTools:!1}),I={store:E,persistor:Object(z.h)(E)};o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(s.a,{store:I.store,children:Object(m.jsx)(N,{})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.71f30abb.chunk.js.map