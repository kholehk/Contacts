(this.webpackJsonpcontacts=this.webpackJsonpcontacts||[]).push([[0],{33:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);n(33);var a=n(1),c=n.n(a),r=n(29),s=n.n(r),i=n(14),o=n(2),u=n.n(o),l=n(4),d=n(7),b=n(32),j=n.n(b),f=n(30),h=n(31),m=n(12),p=n.n(m),O=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";Object(f.a)(this,e),this.origin=t,this.pathname=n}return Object(h.a)(e,[{key:"origin",get:function(){return this._origin},set:function(e){this._origin=this._origin||e}},{key:"pathname",get:function(){return this._pathname},set:function(e){this._pathname=this._pathname||e}},{key:"href",get:function(){return this.origin+this.pathname}},{key:"create",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post(this.href,t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"read",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,a=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.prev=1,e.next=4,p.a.get("".concat(this.href,"/").concat(t));case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.put("".concat(this.href,"/").concat(t.id),t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.delete("".concat(this.href,"/").concat(t));case 3:return n=e.sent,e.abrupt("return",n.status);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),v=n(3),y=n(0);var x=function(e){var t=e.fields,n=e.contacts,c=e.setContacts,r=Object(a.useState)({key:t[0].key,value:""}),s=Object(d.a)(r,2),o=s[0],u=s[1];return Object(y.jsxs)("form",{className:"d-flex",children:[Object(y.jsx)("select",{className:"form-select","aria-label":"contactsProperties",onChange:function(e){return function(e){var t=e.target.options,n=Object(i.a)(t).find((function(e){return e.selected}));u(Object(v.a)(Object(v.a)({},o),{},{key:n.dataset.key,type:n.dataset.type}))}(e)},children:t.map((function(e){return Object(y.jsx)("option",{"data-key":e.key,"data-type":e.type,children:e.label},e.key)}))}),Object(y.jsx)("input",{className:"form-control me-2",placeholder:"Search","aria-label":"Search",type:o.type||"search",name:o.key,value:o.value,onChange:function(e){return function(e){var t=e.target.value;u(Object(v.a)(Object(v.a)({},o),{},{value:t}))}(e)}}),Object(y.jsx)("button",{className:"btn btn-outline-success",type:"submit",onClick:function(e){e.preventDefault();var a=t.reduce((function(e,t){var n=t.key,a=t.calculate;return n!==o.key?e:a&&a instanceof Function?Object(v.a)(Object(v.a)({},e),{},{value:a(o.value,!1)}):Object(v.a)(Object(v.a)({},e),{},{value:o.value})}),{key:o.key}),r=n.filter((function(e){return e[a.key]===a.value}));c(null!==r&&void 0!==r?r:[])},children:"Search"})]})};var g=function(e){var t=e.container,n=e.fields,a=e.contacts,c=e.setContacts,r=e.setCurrentContact;return Object(y.jsx)("header",{className:t,children:Object(y.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(y.jsxs)("div",{className:"container-fluid",children:[Object(y.jsx)("a",{className:"navbar-brand",href:"./",children:"Contacts"}),Object(y.jsx)(x,{fields:n,contacts:a,setContacts:c}),Object(y.jsx)("button",{className:"btn btn-primary",type:"button",onClick:function(){return r({})},"data-bs-toggle":"modal","data-bs-target":"#contactForm",children:"New contact"})]})})})};function k(e){var t=e.fields,n=e.contactsOnPage,a=e.setCurrentContact;return n.map((function(e){return Object(y.jsx)("tr",{children:Object(y.jsx)(C,{fields:t,contact:e,setCurrentContact:a})},e.id)}))}function C(e){var t=e.fields,n=e.contact,a=e.setCurrentContact;return t.map((function(e,t){return t?Object(y.jsx)("td",{children:e.calculate&&e.calculate instanceof Function?e.calculate(n[e.key]):n[e.key]},e.key):Object(y.jsxs)("th",{scope:"row",children:[Object(y.jsx)("strong",{className:"row mx-1",children:n[e.key]}),Object(y.jsxs)("div",{className:"row flex-nowrap mx-1",onClick:function(){return a(n)},children:[Object(y.jsx)("button",{type:"button","data-bs-toggle":"modal","data-bs-target":"#contactForm",className:"btn btn-sm btn-primary col-auto",children:"Edit"}),Object(y.jsx)("button",{type:"button","data-bs-toggle":"modal","data-bs-target":"#confirmDelete",className:"btn btn-sm btn-danger col-auto mx-1",children:"Delete"})]})]},e.key)}))}var N=function(e){var t=e.fields,n=e.contactsOnPage,a=e.setCurrentContact;return Object(y.jsx)("div",{className:"table-responsive",children:Object(y.jsxs)("table",{className:"table",children:[Object(y.jsx)("thead",{children:Object(y.jsx)("tr",{children:t.map((function(e){return Object(y.jsx)("th",{scope:"col",children:e.label},e.key)}))})}),Object(y.jsx)("tbody",{children:Array.isArray(n)&&n.length?Object(y.jsx)(k,{fields:t,contactsOnPage:n,setCurrentContact:a}):Object(y.jsx)("tr",{children:Object(y.jsx)("td",{colSpan:"7",children:"No Contacts"})})})]})})};var w=function(){return Object(y.jsx)("div",{className:"d-flex justify-content-center",children:Object(y.jsx)("div",{className:"spinner-border m-5",role:"status",children:Object(y.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})};var P=function(e){var t=e.container,n=e.fields,a=e.contactsOnPage,c=e.setCurrentContact,r=e.isLoading;return Object(y.jsx)("main",{className:t,children:r?Object(y.jsx)(w,{}):Object(y.jsx)(N,{fields:n,contactsOnPage:a,setCurrentContact:c})})};var S={};function D(e){var t=e.title,n=e.condition,c=e.page,r=e.setCurrentPage;S[t]=Object(a.useRef)();var s=Object.keys(S).find((function(e){return e!==t})),i={className:"page-link",href:"./?page=".concat(!n&&c),onClick:function(e){e.preventDefault(),r(c)},ref:S[t]};return n&&(i.tabIndex="-1",i["aria-disabled"]="true",s&&S[s].current&&S[s].current.focus()),Object(y.jsx)("li",{className:"page-item"+(n?" disabled":""),children:Object(y.jsx)("a",Object(v.a)(Object(v.a)({},i),{},{children:t}))})}var F=function(e){var t=e.container,n=e.firstPage,c=e.lastPage,r=e.currentPage,s=e.setCurrentPage,i=Object(a.useState)(r-1),o=Object(d.a)(i,2),u=o[0],l=o[1],b=Object(a.useState)(r+1),j=Object(d.a)(b,2),f=j[0],h=j[1];return Object(a.useEffect)((function(){l(r-1),h(r+1)}),[r]),Object(y.jsx)("footer",{className:t,children:Object(y.jsx)("nav",{"aria-label":"Pagination",children:Object(y.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(y.jsx)(D,{title:"Previous",condition:r===n||c<=n,page:u,setCurrentPage:s}),Object(y.jsx)(D,{title:"Next",condition:r===c||c<=n,page:f,setCurrentPage:s})]})})})},E=n(9);var L=function(e){var t=e.field,n=e.contact,a=e.handleInputChange;return Object(y.jsxs)("div",{className:"mb-3",children:[Object(y.jsx)("label",{className:"form-label",htmlFor:t.key,children:t.label}),Object(y.jsx)("input",{type:t.type,className:"form-control",id:t.key,name:t.key,value:n[t.key],onChange:function(e){return a(e)},"aria-describedby":t.label})]})};var I=function(e){var t=e.title,n=e.fields,c=e.currentContact,r=e.submitContact,s=Object(a.useCallback)((function(e){return n.reduce((function(t,n){return n.type?(t[n.key]=e[n.key]||"",t):t}),{id:c.id||null})}),[c,n]),i=Object(a.useState)(s(c)),o=Object(d.a)(i,2),b=o[0],j=o[1];function f(e){var t=e.target,n=t.name,a=t.value;j(Object(v.a)(Object(v.a)({},b),{},Object(E.a)({},n,a)))}return Object(a.useEffect)((function(){return j(s(c))}),[c,s]),Object(y.jsx)("div",{className:"modal fade",id:"contactForm",tabIndex:"-1","aria-labelledby":"contactFormLabel","aria-hidden":"true",children:Object(y.jsx)("form",{id:"contactFormDialog",className:"modal-dialog",children:Object(y.jsxs)("div",{className:"modal-content",children:[Object(y.jsxs)("div",{className:"modal-header",children:[Object(y.jsx)("h5",{className:"modal-title",id:"contactFormLabel",children:t}),Object(y.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(y.jsx)("div",{className:"modal-body",children:n.map((function(e){return e.auto?"":Object(y.jsx)(L,{field:e,contact:b,handleInputChange:f},e.key)}))}),Object(y.jsxs)("div",{className:"modal-footer",children:[Object(y.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(y.jsx)("button",{formTarget:"contactFormDialog",type:"submit",className:"btn btn-primary","data-bs-dismiss":"modal",onClick:function(){var e=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.reduce((function(e,t){var n=t.key,a=t.auto,c=t.calculate;return a&&a instanceof Function?Object(v.a)(Object(v.a)({},e),{},Object(E.a)({},n,a())):c&&c instanceof Function?Object(v.a)(Object(v.a)({},e),{},Object(E.a)({},n,c(b[n],!1))):Object(v.a)(Object(v.a)({},e),{},Object(E.a)({},n,b[n]))}),{}),e.next=4,r(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:t})]})]})})})};var M=function(e){var t=e.contact,n=e.deleteContact;return Object(y.jsx)("div",{className:"modal fade",id:"confirmDelete",tabIndex:"-1","aria-labelledby":"confirmDeleteLabel","aria-hidden":"true",children:Object(y.jsx)("div",{className:"modal-dialog",children:Object(y.jsxs)("div",{className:"modal-content",children:[Object(y.jsxs)("div",{className:"modal-header",children:[Object(y.jsxs)("h5",{className:"modal-title",id:"confirmDeleteLabel",children:[t.name," ",t.surname]}),Object(y.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(y.jsx)("div",{className:"modal-body",children:"Are you sure to delete?"}),Object(y.jsxs)("div",{className:"modal-footer",children:[Object(y.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(y.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-dismiss":"modal",onClick:Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t);case 2:case"end":return e.stop()}}),e)}))),children:"Remove"})]})]})})})},_=new O("https://my-json-server.typicode.com","/kholehk/Contacts/index"),A="container-lg",B=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n?j()(+e,t):new Date(e).getTime()},J=[{key:"name",label:"Name",type:"text"},{key:"surname",label:"Surname",type:"text"},{key:"birthday",label:"Birthday",type:"date",calculate:function(e,t){return B(e,"dd.MM.yyyy",t)}},{key:"phone",label:"Phone",type:"tel"},{key:"email",label:"Email",type:"email"},{key:"createAt",label:"Create/Update",type:"datetime-local",auto:function(){return Date.now()},calculate:function(e,t){return B(e,"dd.MM.yyyy hh:mm",t)}}];var R=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)({}),o=Object(d.a)(s,2),b=o[0],j=o[1],f=Object(a.useState)([]),h=Object(d.a)(f,2),m=h[0],p=h[1],O=Object(a.useState)(0),v=Object(d.a)(O,2),x=v[0],k=v[1],C=Object(a.useState)(!0),N=Object(d.a)(C,2),w=N[0],S=N[1],D=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,t();case 3:S(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function E(){return(E=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.create(t);case 2:a=e.sent,r([].concat(Object(i.a)(n),[a]));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return B.apply(this,arguments)}function B(){return(B=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.read();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return(R=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.update(t);case 2:a=e.sent,r(n.map((function(e){return e.id===a.id?a:e})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,e.next=3,_.delete(a);case 3:r(n.filter((function(e){return e.id!==a})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){D(L)}),[]),Object(a.useEffect)((function(){p(function(e){return e.reduce((function(e,t,n){var a=Math.floor(n/10);return a===e.length&&e.push([]),e[a].push(t),e}),[])}(n))}),[n]);var U=function(e){return!Object.keys(e).length};return Object(y.jsxs)(c.a.StrictMode,{children:[Object(y.jsx)(g,{container:A,fields:J,contacts:n,setContacts:r,setCurrentContact:j}),Object(y.jsx)(P,{container:A,fields:J,contactsOnPage:m[x],setCurrentContact:j,isLoading:w}),Object(y.jsx)(F,{container:A,firstPage:0,lastPage:m.length-1,currentPage:x,setCurrentPage:k}),Object(y.jsx)(I,{fields:J,title:U(b)?"Add contact":"Edit contact",currentContact:b,submitContact:U(b)?function(e){return E.apply(this,arguments)}:function(e){return R.apply(this,arguments)}}),Object(y.jsx)(M,{contact:b,deleteContact:function(e){return T.apply(this,arguments)}})]})};s.a.render(Object(y.jsx)(R,{}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.2cb48707.chunk.js.map