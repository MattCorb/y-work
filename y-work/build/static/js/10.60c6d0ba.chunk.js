(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[10],{74:function(t,e,n){"use strict";n.r(e);var s=n(12),c=n(15),a=n(16),i=n(17),o=n(1),l=n.n(o),r=n(23),d=n(7),j=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(t){var c;return Object(s.a)(this,n),(c=e.call(this,t)).state={items:[],isLoaded:!1},c}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://g5pp6siiwl.execute-api.us-east-1.amazonaws.com/opening").then((function(t){return t.json()})).then((function(e){t.setState({isLoaded:!0,items:e})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this.state,e=t.isLoaded,n=t.items;return e?Object(d.jsx)("div",{children:Object(d.jsx)(r.D,{children:n.map((function(t){return Object(d.jsx)(r.n,{md:"12",lg:"6",children:Object(d.jsxs)(r.g,{body:!0,className:"text-end",children:[Object(d.jsx)(r.m,{tag:"h5",className:"border-bottom",children:t.posting_title}),Object(d.jsxs)(r.l,{className:"",children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{style:{fontWeight:"bold",float:"left"},children:"Wage:"}),"$",t.min_salary,"-$",t.max_salary]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{style:{fontWeight:"bold",float:"left"},children:"Department:"}),t.department]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{style:{fontWeight:"bold",float:"left"},children:"Category:"})," ",t.category_name]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{style:{fontWeight:"bold",float:"left"},children:"Start Date:"})," ",t.start_date]})]},t.opening_id),Object(d.jsx)("div",{children:Object(d.jsx)(r.e,{color:"info",children:"Apply to Job"})})]})})}))})}):Object(d.jsx)("div",{children:"Loading..."})}}]),n}(l.a.Component);e.default=j}}]);
//# sourceMappingURL=10.60c6d0ba.chunk.js.map