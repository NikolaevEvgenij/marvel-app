(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},216:function(e,t,c){},226:function(e,t,c){"use strict";c.r(t);var r=c(4),a=c(0),n=c(38),s=c(52),i=c(32),o=c(35),l=c(26),u=c(51),j=(c(105),c.p+"static/media/mjolnir.61f31e18.png"),h=c(2),d=function(e){var t=e.data,c=t.name,r=t.description,a=t.thumbnail,n=t.homepage,s=t.wiki,i={};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i={objectFit:"contain"}),Object(h.jsxs)("div",{className:"randomchar__block",children:[Object(h.jsx)("img",{src:a,style:i,alt:"Random character",className:"randomchar__img"}),Object(h.jsxs)("div",{className:"randomchar__info",children:[Object(h.jsx)("p",{className:"randomchar__name",children:c}),Object(h.jsx)("p",{className:"randomchar__descr",children:r}),Object(h.jsxs)("div",{className:"randomchar__btns",children:[Object(h.jsx)("a",{href:n,className:"button button__main",children:Object(h.jsx)("div",{className:"inner",children:"homepage"})}),Object(h.jsx)("a",{href:s,className:"button button__secondary",children:Object(h.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},b=function(){var e=Object(a.useState)({}),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(i.a)(),o=s.getCharacter,l=(s.loading,s.error,s.process),b=s.setProcess,m=s.clearError;Object(a.useEffect)((function(){p()}),[]);var f=function(e){n(e)},p=function(){m();var e=Math.floor(400*Math.random()+1011e3);o(e).then(f).then((function(){return b("confirmed")}))};return Object(h.jsxs)("div",{className:"randomchar",children:[Object(u.a)(l,d,c),Object(h.jsxs)("div",{className:"randomchar__static",children:[Object(h.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(h.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(h.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(h.jsx)("button",{className:"button button__main",children:Object(h.jsx)("div",{className:"inner",onClick:p,children:"try it"})}),Object(h.jsx)("img",{src:j,alt:"mjolnir",className:"randomchar__decoration"})]})]})},m=c(42),f=c(227),p=c(228),O=(c(106),function(e){var t=Object(a.useState)([]),c=Object(r.a)(t,2),n=c[0],s=c[1],u=Object(a.useState)(!1),j=Object(r.a)(u,2),d=j[0],b=j[1],O=Object(a.useState)(400),x=Object(r.a)(O,2),v=x[0],_=x[1],g=Object(a.useState)(!1),N=Object(r.a)(g,2),k=N[0],w=N[1],y=Object(i.a)(),C=y.process,E=y.setProcess,S=y.getAllCharacters;Object(a.useEffect)((function(){T(v,!0)}),[]);var T=function(e,t){b(!t),S(e).then(F).then((function(){return E("confirmed")}))},F=function(e){var t=!1;e.length<9&&(t=!0),s((function(t){return[].concat(Object(m.a)(t),Object(m.a)(e))})),b(!1),_((function(e){return e+9})),w(t)},M=Object(a.useRef)([]),P=function(e){M.current.forEach((function(e){return e.classList.remove("char__item_selected")})),M.current[e].classList.add("char__item_selected"),M.current[e].focus()},R=Object(a.useMemo)((function(){return function(e,t,c){switch(e){case"waiting":return Object(h.jsx)(o.a,{});case"loading":return c?Object(h.jsx)(t,{}):Object(h.jsx)(o.a,{});case"error":return Object(h.jsx)(l.a,{});case"confirmed":return Object(h.jsx)(t,{});default:throw new Error("Unexpected process state")}}(C,(function(){return function(t){var c=t.map((function(t,c){var r=t.id,a=t.name,n=t.thumbnail,s={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(s={objectFit:"unset"}),Object(h.jsx)(f.a,{timeout:400,classNames:"char__item",children:Object(h.jsxs)("li",{tabIndex:0,ref:function(e){return M.current[c]=e},className:"char__item",onClick:function(){e.onCharSelected(r),P(c)},onKeyDown:function(t){" "!==t.key&&"Enter"!==t.key||(e.onCharSelected(r),P(c))},children:[Object(h.jsx)("img",{src:n,alt:"abyss",style:s}),Object(h.jsx)("div",{className:"char__name",children:a})]})},r)}));return Object(h.jsx)(p.a,{component:"ul",className:"char__grid",children:c})}(n)}),d)}),[C]);return Object(h.jsxs)("div",{className:"char__list",children:[R,Object(h.jsx)("button",{className:"button button__main button__long",disabled:d,style:{display:k?"none":"block"},onClick:function(){return T(v)},children:Object(h.jsx)("div",{className:"inner",children:"load more"})})]})}),x=c(6),v=(c(107),function(e){var t=e.data,c=t.name,r=t.description,a=t.thumbnail,n=t.homepage,s=t.wiki,i=t.comics,o="There are no comics for this character";0!==i.length&&(o=i.map((function(e,t){if(!(t>=10)){var c=e.resourceURI.slice(43);return Object(h.jsx)("li",{className:"char__comics-item ",children:Object(h.jsx)(x.b,{to:"/comics/".concat(c),children:e.name})},t)}})));var l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(l={objectFit:"unset"}),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"char__basics",children:[Object(h.jsx)("img",{src:a,alt:c,style:l}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"char__info-name",children:c}),Object(h.jsxs)("div",{className:"char__btns",children:[Object(h.jsx)("a",{href:n,className:"button button__main",children:Object(h.jsx)("div",{className:"inner",children:"homepage"})}),Object(h.jsx)("a",{href:s,className:"button button__secondary",children:Object(h.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(h.jsx)("div",{className:"char__descr",children:r}),Object(h.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(h.jsx)("ul",{className:"char__comics-list",children:o})]})}),_=function(e){var t=Object(a.useState)(null),c=Object(r.a)(t,2),n=c[0],s=c[1],o=Object(i.a)(),l=o.process,j=o.setProcess,d=o.getCharacter,b=function(e){s(e)};return Object(a.useEffect)((function(){!function(){var t=e.charId;t&&d(t).then(b).then((function(){return j("confirmed")}))}()}),[e.charId]),Object(h.jsx)("div",{className:"char__info",children:Object(u.a)(l,v,n)})},g=c(221),N=c(220),k=(c(216),function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(i.a)(),o=s.getCharacterByName,u=s.clearError,j=s.process,d=s.setProcess,b=function(e){n(e)},m="error"===j?Object(h.jsx)("div",{className:"char__search-critical-error",children:Object(h.jsx)(l.a,{})}):null,f=null;return f=c?Object(h.jsxs)("div",{className:"char__search-wrapper",children:[Object(h.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",c.name," page?"]}),Object(h.jsx)(x.b,{to:"/characters/".concat(c.id),className:"button button__secondary",children:Object(h.jsx)("div",{className:"inner",children:"To page"})})]}):""===c?Object(h.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null,Object(h.jsxs)("div",{className:"char__search-form",children:[Object(h.jsx)(N.d,{initialValues:{charName:""},validationSchema:g.a({charName:g.b().required("This field is required")}),onSubmit:function(e){var t,c=e.charName;t=c,u(),o(t).then(b).then((function(){return d("confirmed")}))},children:Object(h.jsxs)(N.c,{children:[Object(h.jsx)("label",{htmlFor:"charName",className:"char__search-label",children:"Or find a character by name:"}),Object(h.jsxs)("div",{className:"char__search-wrapper",children:[Object(h.jsx)(N.b,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),Object(h.jsx)("button",{type:"submit",className:"button button__main",disabled:"loading"===j,children:Object(h.jsx)("div",{className:"inner",children:"find"})})]}),Object(h.jsx)(N.a,{className:"char__search-error",name:"charName",component:"div"})]})}),f,m]})}),w=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(n.a,{children:[Object(h.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(h.jsx)("title",{children:"Marvel information portal"})]}),Object(h.jsx)(s.a,{children:Object(h.jsx)(b,{})}),Object(h.jsxs)("div",{className:"char__content",children:[Object(h.jsx)(s.a,{children:Object(h.jsx)(O,{onCharSelected:function(e){return i(e)}})}),Object(h.jsxs)("div",{children:[Object(h.jsx)(s.a,{children:Object(h.jsx)(_,{charId:c})}),Object(h.jsx)(s.a,{children:Object(h.jsx)(k,{})})]}),Object(h.jsx)("img",{className:"bg-decoration",src:w,alt:"vision"})]})]})}},26:function(e,t,c){"use strict";var r=c.p+"static/media/error.42292aa1.gif",a=c(2);t.a=function(){return Object(a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Error Gif"})}},32:function(e,t,c){"use strict";var r=c(33),a=c.n(r),n=c(34),s=c(4),i=c(0);t.a=function(){var e=function(){var e=Object(i.useState)("waiting"),t=Object(s.a)(e,2),c=t[0],r=t[1];return{request:Object(i.useCallback)(function(){var e=Object(n.a)(a.a.mark((function e(t){var c,n,s,i,o,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",n=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},r("loading"),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(4),r("error"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){r("loading")}),[]),setProcess:r,process:c}}(),t=e.request,c=e.clearError,r=e.process,o=e.setProcess,l="https://gateway.marvel.com:443/v1/public/",u="apikey=6384ce9cf17f02f85ebfa13f965d5627",j=400,h=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},d=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",language:e.textObjects.language||"en-us",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,price:e.prices.price?"".concat(e.prices.price,"$"):"not available"}},b=function(){var e=Object(n.a)(a.a.mark((function e(){var c,r,n=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.length>0&&void 0!==n[0]?n[0]:j,e.next=3,t("".concat(l,"characters?limit=9&offset=").concat(c,"&").concat(u));case 3:return r=e.sent,e.abrupt("return",r.data.results.map((function(e){return h(e)})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(n.a)(a.a.mark((function e(c){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"characters/").concat(c,"?").concat(u));case 2:return r=e.sent,e.abrupt("return",h(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(n.a)(a.a.mark((function e(c){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"characters?name=").concat(c,"&").concat(u));case 2:if((r=e.sent).data.total){e.next=5;break}return e.abrupt("return",r="");case 5:return console.log(r),e.abrupt("return",h(r.data.results[0]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{clearError:c,process:r,setProcess:o,getAllCharacters:b,getCharacter:m,getComics:function(){var e=Object(n.a)(a.a.mark((function e(){var c,r,n=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.length>0&&void 0!==n[0]?n[0]:j,e.next=3,t("".concat(l,"comics?limit=8&offset=").concat(c,"&").concat(u));case 3:return r=e.sent,e.abrupt("return",r.data.results.map((function(e){return d(e)})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getComic:function(){var e=Object(n.a)(a.a.mark((function e(c){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"comics/").concat(c,"?").concat(u));case 2:return r=e.sent,e.abrupt("return",d(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getCharacterByName:f}}},35:function(e,t,c){"use strict";var r=c(2);t.a=function(){return Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"0 auto",background:"rgb(255, 255, 255)",display:"block",shapeRendering:"auto",width:"250px",height:"250px"},viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(r.jsx)("circle",{cx:"41",cy:"50",fill:"#000000",r:"9",children:Object(r.jsx)("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1.1235955056179776s",keyTimes:"0;0.5;1",values:"41;59;41",begin:"-0.5617977528089888s"})}),Object(r.jsx)("circle",{cx:"59",cy:"50",fill:"#ff0000",r:"9",children:Object(r.jsx)("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1.1235955056179776s",keyTimes:"0;0.5;1",values:"41;59;41",begin:"0s"})}),Object(r.jsxs)("circle",{cx:"41",cy:"50",fill:"#000000",r:"9",children:[Object(r.jsx)("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1.1235955056179776s",keyTimes:"0;0.5;1",values:"41;59;41",begin:"-0.5617977528089888s"}),Object(r.jsx)("animate",{attributeName:"fill-opacity",values:"0;0;1;1",calcMode:"discrete",keyTimes:"0;0.499;0.5;1",dur:"1.1235955056179776s",repeatCount:"indefinite"})]})]})}},51:function(e,t,c){"use strict";c(55);var r=c(2),a=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(r.jsxs)("div",{className:"skeleton",children:[Object(r.jsxs)("div",{className:"pulse skeleton__header",children:[Object(r.jsx)("div",{className:"pulse skeleton__circle"}),Object(r.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(r.jsx)("div",{className:"pulse skeleton__block"}),Object(r.jsx)("div",{className:"pulse skeleton__block"}),Object(r.jsx)("div",{className:"pulse skeleton__block"})]})]})},n=c(35),s=c(26);t.a=function(e,t,c){switch(e){case"waiting":return Object(r.jsx)(a,{});case"loading":return Object(r.jsx)(n.a,{});case"error":return Object(r.jsx)(s.a,{});case"confirmed":return Object(r.jsx)(t,{data:c});default:throw new Error("Unexpected process state")}}},52:function(e,t,c){"use strict";var r=c(24),a=c(25),n=c(28),s=c(30),i=c(0),o=c(26),l=c(2),u=function(e){Object(n.a)(c,e);var t=Object(s.a)(c);function c(){var e;Object(r.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={error:!1},e}return Object(a.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(o.a,{}):this.props.children}}]),c}(i.Component);t.a=u},55:function(e,t,c){}}]);
//# sourceMappingURL=6.5b8abfc4.chunk.js.map