(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var n=s(3),r=s.n(n),i=s(6),o=s(4),c=s(5),a=s(8),l=s(7),u=s(1),b=s.n(u),h=(s(13),s(0)),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={goods:d,listVisibility:!1,isReversed:!1,sortBy:""},t.start=function(){t.setState({listVisibility:!0})},t.sortAlphabetically=function(){t.setState({sortBy:"alphabet"})},t.sortByLength=function(){t.setState({sortBy:"length"})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.reset=function(){t.setState({isReversed:!1,sortBy:""})},t.prepareGoods=function(){var e=t.state,s=e.goods,n=e.sortBy,r=e.isReversed,o=Object(i.a)(s);return o.sort((function(t,e){switch(n){case"alphabet":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}})),r&&o.reverse(),o},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this.state.listVisibility,e=this.prepareGoods();return Object(h.jsxs)("div",{className:"App",children:[!t&&Object(h.jsx)("button",{type:"button",className:"button is-link",onClick:this.start,children:"Start"}),t&&Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"title",children:"Goods"}),Object(h.jsx)("ul",{children:e.map((function(t){return Object(h.jsx)("li",{children:t},t)}))}),Object(h.jsx)("button",{type:"button",className:"button is-link",onClick:this.sortAlphabetically,children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",className:"button is-link",onClick:this.sortByLength,children:"Sort by length"}),Object(h.jsx)("button",{type:"button",className:"button is-link",onClick:this.reverse,children:"Reverse"}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"button",className:"button is-link",onClick:this.reset,children:"Reset"})]})]})}}]),s}(b.a.Component),p=j;r.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4cf2d296.chunk.js.map