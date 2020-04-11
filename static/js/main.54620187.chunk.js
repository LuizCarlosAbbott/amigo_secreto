(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{27:function(e,t,n){e.exports=n(41)},32:function(e,t,n){},34:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(22),c=n.n(l),o=(n(32),n(10)),i=n(14),u=(n(33),n(15)),m=n(13),s=n(12);n(34);function d(){var e=Object(i.a)(["\n  mutation updatePerson($id: String!, $input: PersonInput!) {\n    updatePerson(id: $id, input: $input) {\n      id\n      name\n      email\n    }\n  }\n"]);return d=function(){return e},e}function b(){var e=Object(i.a)(["\n  mutation deletePerson($id: String!) {\n    deletePerson(id: $id) {\n      id\n      name\n      email\n    }\n  }\n"]);return b=function(){return e},e}var E=Object(s.b)(b()),p=Object(s.b)(d());var f=function(e){var t=Object(m.a)(E),n=Object(o.a)(t,1)[0],l=Object(m.a)(p),c=Object(o.a)(l,1)[0],i=Object(a.useState)(-1),s=Object(o.a)(i,2),d=s[0],b=s[1],f=Object(a.useState)(""),v=Object(o.a)(f,2),j=v[0],g=v[1],O=Object(a.useState)(""),N=Object(o.a)(O,2),h=N[0],y=N[1];return e.data.persons.map((function(e,t){var a=e.id,l=e.name,o=e.email,i=e.friend;return r.a.createElement("tr",{key:a,id:a},r.a.createElement("td",null,d!==t?l:r.a.createElement("input",{className:"Fade",value:j,onChange:function(e){return g(e.target.value)}})),r.a.createElement("td",null,d!==t?o:r.a.createElement("input",{className:"Fade",value:h,onChange:function(e){return y(e.target.value)}})),r.a.createElement("td",null,i),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-warning Fade",onClick:function(){d===t?b(-1):(b(t),g(l),y(o))}},r.a.createElement(u.c,{style:{backgroundColor:"#fbc118"}})),d===t?r.a.createElement("button",{className:"btn btn-success ml-2 Fade",onClick:function(){c({variables:{id:a,input:{name:j,email:h}}}),b(-1)}},r.a.createElement(u.d,{style:{backgroundColor:"#57a845"}})):null,r.a.createElement("button",{className:"btn btn-danger ml-2 Fade",onClick:function(){n({variables:{id:a}});var e=document.getElementById(a);e.parentNode.removeChild(e)}},r.a.createElement(u.e,{style:{backgroundColor:"#dd4b44"}}))))}))},v=(n(38),function(e){return e.loading?r.a.createElement("p",null,"Loading..."):e.error?r.a.createElement("p",null,"Error :("):r.a.createElement("table",{className:"PersonTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Nome"),r.a.createElement("th",null,"E-mail"),r.a.createElement("th",null,"Amigo"),r.a.createElement("th",null,"A\xe7\xf5es"))),r.a.createElement("tbody",null,r.a.createElement(f,{data:e.data})))});n(39);function j(){var e=Object(i.a)(["\n  mutation sortFriend {\n    sortFriend {\n      id\n      name\n      email\n      friend\n    }\n  }\n"]);return j=function(){return e},e}function g(){var e=Object(i.a)(["\n  mutation createPerson($input: PersonInput!) {\n    createPerson(input: $input) {\n      id\n      name\n      email\n      friend\n    }\n  }\n"]);return g=function(){return e},e}function O(){var e=Object(i.a)(["\n  {\n    persons {\n      id\n      name\n      email\n      friend\n    }\n  }\n"]);return O=function(){return e},e}var N=Object(s.b)(O()),h=Object(s.b)(g()),y=Object(s.b)(j());var C=function(){var e=Object(m.b)(N),t=e.loading,n=e.error,l=e.data,c=Object(m.a)(h,{update:function(e,t){var n=t.data.createPerson,a=e.readQuery({query:N}).persons;e.writeQuery({query:N,data:{persons:a.concat([n])}})}}),i=Object(o.a)(c,1)[0],s=Object(m.a)(y,{update:function(e,t){var n=t.data.sortFriend,a=e.readQuery({query:N}).persons;e.writeQuery({query:N,data:{persons:a.concat([n]).pop()}})}}),d=Object(o.a)(s,1)[0],b=Object(a.useState)(""),E=Object(o.a)(b,2),p=E[0],f=E[1],j=Object(a.useState)(""),g=Object(o.a)(j,2),O=g[0],C=g[1];return r.a.createElement("div",{className:"Geral"},r.a.createElement("div",{className:"Logo"},r.a.createElement(u.b,{size:150,className:"icon"}),r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col12 col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Nome"),r.a.createElement("input",{type:"text",className:"form-control",name:"name",value:p,onChange:function(e){return f(e.target.value)},placeholder:"Digite o nome..."}))),r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"E-mail"),r.a.createElement("input",{type:"text",className:"form-control",name:"email",value:O,onChange:function(e){return C(e.target.value)},placeholder:"Digite o e-mail..."})))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 d-flex justify-content-end"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(e){return i({variables:{input:{name:p,email:O}}})}},"Adicionar a lista"),r.a.createElement("button",{className:"btn btn-secondary ml-2",onClick:function(e){C(""),f("")}},"Cancelar"),r.a.createElement("button",{className:"btn btn-success ml-2",onClick:function(){return d()}},"Sortear e enviar email"))))),r.a.createElement("div",{className:"App"},r.a.createElement(v,{data:l,loading:t,error:n})),r.a.createElement("div",{className:"Footer"},"Produzido com carinho por Luiz Carlos - para ver o c\xf3digo \xa0 ","  ",r.a.createElement("a",{href:"https://github.com/LuizCarlosAbbott/ad-2019/"}," ","acesse",r.a.createElement(u.a,null))," "))},k=n(8),P=new s.a({uri:"https://salty-escarpment-39557.herokuapp.com/"});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k.a,{client:P},r.a.createElement(C,null))),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.54620187.chunk.js.map