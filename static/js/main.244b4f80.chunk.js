(this.webpackJsonppractice=this.webpackJsonppractice||[]).push([[0],{142:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},148:function(e,t,a){},149:function(e,t,a){},159:function(e,t,a){e.exports=a.p+"static/media/block4.64e5e0c8.webp"},160:function(e,t,a){e.exports=a.p+"static/media/block3.75e6fad6.jpg"},174:function(e,t,a){e.exports=a(322)},179:function(e,t,a){},181:function(e,t,a){},322:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(37),o=a.n(c),u=(a(179),a(12)),i=a.n(u),l=a(25),s=a(140),d=a(141),p=a(162),m=a(161),f=(a(181),a(142)),h=a.n(f),v=a(344),b=a(352),E=a(346),g=a(347),y=a(71),w=a.n(y),k=a(8),x=a.n(k),j=a(39),C=a.n(j),O=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:"App"},r.a.createElement(v.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(v.a,{item:!0,xs:12,md:3,component:b.a,className:x()(C.a.card,C.a.infected)},r.a.createElement(E.a,{style:{backgroundColor:" #f48a04",color:"White",padding:20}},r.a.createElement(g.a,{variant:"h5",color:"White",gutterBottom:!0},"Infected"),r.a.createElement(g.a,{variant:"h4",component:"h2"},r.a.createElement(w.a,{start:0,end:a.value,duration:2.75,separator:","})),r.a.createElement(g.a,{color:"White"},new Date(o).toDateString()))),r.a.createElement(v.a,{item:!0,xs:12,md:3,component:b.a,className:x()(C.a.card,C.a.recovered)},r.a.createElement(E.a,{style:{backgroundColor:" #02ab02",color:"White",padding:20}},r.a.createElement(g.a,{variant:"h5",color:"white",gutterBottom:!0},"Recovered"),r.a.createElement(g.a,{variant:"h4",component:"h2"},r.a.createElement(w.a,{start:0,end:n.value,duration:2.75,separator:","})),r.a.createElement(g.a,{color:"white"},new Date(o).toDateString()))),r.a.createElement(v.a,{item:!0,xs:12,md:3,component:b.a,className:x()(C.a.card,C.a.deaths)},r.a.createElement(E.a,{style:{backgroundColor:" #bf0325",color:"White",padding:20}},r.a.createElement(g.a,{variant:"h5",color:"white",gutterBottom:!0},"Deaths"),r.a.createElement(g.a,{variant:"h4",component:"h2"},r.a.createElement(w.a,{start:0,end:c.value,duration:2.75,separator:","})),r.a.createElement(g.a,{color:"white"},new Date(o).toDateString()))))):""},D=a(69),S=a(96),N=a(54),W=a.n(N),B="https://covid19.mathdro.id/api",I=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,r,c,o,u,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=B,t&&(a="".concat(B,"/countries/").concat(t)),e.prev=2,e.next=5,W.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,l=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:l});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.a.get("".concat(B,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.a.get("".concat(B,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(148),J=a.n(A),R=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,s=Object(n.useState)({}),d=Object(D.a)(s,2),p=d[0],m=d[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=a?r.a.createElement(S.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["#f48a04","#02ab02","#bf0325"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null,h=p[0]?r.a.createElement(S.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#f48a04",backgroundColor:"white"},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"#bf0325",backgroundColor:"white"}]}}):null;return r.a.createElement("div",{className:J.a.container},u?f:h)},z=a(353),G=a(351),M=a(149),P=a.n(M),V=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(D.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,U();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(z.a,{className:P.a.formControl},r.a.createElement(G.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"World"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},q=a(348),F=function(){return r.a.createElement(q.a,null)},H=a(350),K=[{header:"Covid-19 Tracker"}],L=function(){return r.a.createElement(H.a.Group,{centered:!0,items:K})},Q=a(349),X=a(159),Y=a.n(X),Z=a(160),$=a.n(Z),_=Object(Q.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function ee(){var e=_();e.bullet;return r.a.createElement(v.a,{justify:"center"},r.a.createElement("img",{src:$.a,style:{width:"90%",marginTop:30}}),r.a.createElement("img",{src:Y.a,style:{width:"90%",marginTop:30}}))}var te=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(l.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:"app"},r.a.createElement("img",{src:h.a,style:{width:400,padding:30,display:"inline-block"}}),r.a.createElement(L,null),r.a.createElement(O,{data:t}),r.a.createElement(V,{handleCountryChange:this.handleCountryChange}),r.a.createElement(R,{data:t,country:a}),r.a.createElement(F,null),r.a.createElement(ee,null))}}]),a}(r.a.Component);o.a.render(r.a.createElement(te,null),document.getElementById("root"))},39:function(e,t,a){}},[[174,1,2]]]);
//# sourceMappingURL=main.244b4f80.chunk.js.map