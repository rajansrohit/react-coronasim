(this.webpackJsonpcoronasim=this.webpackJsonpcoronasim||[]).push([[0],{11:function(e,t,a){e.exports={lineChart:"LineChart_lineChart__1YIFO",labelY:"LineChart_labelY__3CF0E",labelX:"LineChart_labelX__L30Wm"}},22:function(e,t,a){e.exports=a(28)},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),o=a.n(l),i=(a(27),a(1)),c=a(6),s=a(2),u=a(3),m=a.n(u),p=a(15),h=a(16),f=a(9),d=a(18),b=a(20),v=a(12),E=a(17),g=a.n(E),k=a(5),_=a.n(k);function y(e,t){for(var a,n,r,l=e.length,o=l-t,i=y.swaps;l-- >o;)r=l+1,n=e[a=Math.floor(Math.random()*r)],e[a]=e[l],e[l]=n,i.push(l),i.push(a);for(var c=e.slice(o);t--;)l=i.pop(),a=i.pop(),n=e[l],e[l]=e[a],e[a]=n;return c}function O(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}function S(e){var t=Math.random(),a=0;for(var n in e){var r=Object(s.a)(e[n],2),l=r[0],o=r[1];if(t<=(a+=l))return o}}function j(e,t,a){return Math.min(Math.max(a,e),t-50)}function C(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function N(){}y.swaps=[];var A={house:"\ud83c\udfe0",hospital:"\ud83c\udfe5",school:"\ud83c\udfeb",station:"\ud83d\ude8c",supermarket:"\ud83d\uded2"};function x(e){var t,a=e.layout,n=e.node,l=e.width,o=e.height,c=e.type,s=e.venue,u=e.onNodeClick,m=void 0===u?N:u,p=a[n.id],h="translate(\n    ".concat(j(p.x,l,7),",\n    ").concat(j(p.y,o,30),"\n  )"),f=g()((t={},Object(i.a)(t,_.a.node,!0),Object(i.a)(t,_.a[c],!0),Object(i.a)(t,_.a[s],!0),Object(i.a)(t,_.a.susceptible,0===n.state),Object(i.a)(t,_.a.sick,1===n.state),Object(i.a)(t,_.a.recovered,2===n.state),Object(i.a)(t,_.a.dead,3===n.state),Object(i.a)(t,_.a.locked,n.locked),t));return r.a.createElement("g",{key:"".concat(n.id,"-Node"),id:n.id,transform:h},"venue"===n.type?r.a.createElement("text",{className:f,onClick:m(n.id),x:-8,y:7,fontSize:16},A[n.venue]):3===n.state?r.a.createElement("text",{onClick:m(n.id),x:-8,y:7,fontSize:16},"\ud83d\udc80"):r.a.createElement("circle",{className:f,r:5,stroke:0,onClick:m(n.id),fill:"black"}),!1,n.locked&&r.a.createElement("circle",{r:40,fill:"none",stroke:"gray",strokeWidth:2}))}var M=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleTick=n.handleTick.bind(Object(f.a)(n)),n.setCurrent=n.setCurrent.bind(Object(f.a)(n)),n.state={current:null,layout:e.nodes.reduce((function(e,t){return e[t.id]={x:0,y:0},e}),{})},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){this.runForceSimulation(),this.simulation.on("tick",this.handleTick)}},{key:"componentWillUnmount",value:function(){this.simulation.on("tick",null)}},{key:"componentWillReceiveProps",value:function(e){this.props.tick!==e.tick&&this.updateForceSimulation()}},{key:"updateForceSimulation",value:function(){this.simulation.alpha(.2).restart(),this.simulation.nodes(this.props.nodes),this.simulation.force("link").links(this.props.edges)}},{key:"shouldComponentUpdate",value:function(e,t){return e.tick!==t.tick}},{key:"runForceSimulation",value:function(){var e=this.props,t=e.nodes,a=e.edges;(this.simulation=Object(v.c)(t).force("link",Object(v.b)().id((function(e){return e.id}))).force("collide",Object(v.a)((function(){return 1})).iterations(1).radius(9))).force("link").links(a).distance(25)}},{key:"handleTick",value:function(){var e=this.simulation,t=this.state.layout,a={};e.nodes().map((function(e){a[e.id]=e})),this.setState({layout:Object(c.a)({},t,{},a)})}},{key:"setCurrent",value:function(e){var t=this;return function(){t.setState({current:e})}}},{key:"render",value:function(){var e=this,t=this.props,a=t.nodes,n=(t.edges,t.width),l=t.height,o=t.onNodeClick,i=this.state,c=i.layout,s=i.current;return r.a.createElement("svg",{width:n,ref:function(t){return e.svgRef=t},height:l,style:{shapeRendering:"geometricPrecision"}},a.map((function(e,t){return r.a.createElement(x,Object.assign({key:t,node:e,layout:c,current:s,width:n,height:l,onNodeClick:o},e))})))}}]),a}(n.Component);M.defaultProps={width:900,height:600,nodes:[],edges:[]};var w=a(19),R=a(11),I=a.n(R);function G(e,t,a,n){return e.slice(Math.max(e.length-n,0)).reduce((function(e,n,r){return e.concat("".concat(r*t,", ").concat(-n*a))}),[]).join(" ")}function P(e){var t=e.width,a=e.height,n=e.xOffset,l=void 0===n?10:n,o=e.yOffset,i=void 0===o?17:o,c=e.data,s=void 0===c?[]:c,u=e.maxXEntries,m=void 0===u?100:u,p=a-50,h=Math.max.apply(Math,[p].concat(Object(w.a)(s.reduce((function(e,t){var a=t.points;return e.concat(a)}),[])))),f=p/h;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:I.a.labelY},"Population \u2192"),r.a.createElement("svg",{className:I.a.lineChart,width:t,height:a},r.a.createElement("g",{transform:"scale(1, ".concat(f,"), translate(0, ").concat((a-30)/f,")")},s.map((function(e,t){var a=e.points,n=e.color;return r.a.createElement("g",{key:"line-".concat(t),transform:"translate(".concat(l+5,", ").concat(1+i,")")},r.a.createElement("polyline",{points:G(a,2.5,1,m),stroke:n,fill:"transparent",strokeWidth:2}))})))),r.a.createElement("span",{className:I.a.labelX},"Days since the first case \u2192"))}var H=a(4),W=a.n(H);function F(e){var t=e.simulationState,a=e.onSettingChange,n=e.onRestartButtonClick;return r.a.createElement("div",{className:W.a.container},r.a.createElement("div",{className:W.a.form},r.a.createElement("label",null,"Initial sick agents",r.a.createElement("br",null),r.a.createElement("input",{type:"range",onChange:a("initialSickAgents"),value:t.initialSickAgents,min:0,max:10})," ",r.a.createElement("span",{className:W.a.value},t.initialSickAgents)),r.a.createElement("label",null,"Agents per building ",r.a.createElement("br",null),r.a.createElement("input",{type:"range",onChange:a("agentsPerHouse"),value:t.agentsPerHouse,min:1,max:10})," ",r.a.createElement("span",{className:W.a.value},t.agentsPerHouse)),r.a.createElement("label",null,"Houses ",r.a.createElement("br",null),r.a.createElement("input",{type:"range",onChange:a("houses"),value:t.houses,min:0,max:50})," ",r.a.createElement("span",{className:W.a.value},t.houses)),r.a.createElement("label",null,"Bus stations ",r.a.createElement("br",null),r.a.createElement("input",{type:"range",onChange:a("busStations"),value:t.busStations,min:0,max:10})," ",r.a.createElement("span",{className:W.a.value},t.busStations)),r.a.createElement("label",null,"Hospitals ",r.a.createElement("br",null),r.a.createElement("input",{type:"range",onChange:a("hospitals"),value:t.hospitals,min:0,max:10})," ",r.a.createElement("span",{className:W.a.value},t.hospitals)),r.a.createElement("label",null,"Supermarkets ",r.a.createElement("br",null),r.a.createElement("input",{type:"range",onChange:a("supermarkets"),value:t.supermarkets,min:0,max:10})," ",r.a.createElement("span",{className:W.a.value},t.supermarkets)),r.a.createElement("label",null,"Schools ",r.a.createElement("br",null),r.a.createElement("input",{type:"range",onChange:a("schools"),value:t.schools,min:0,max:10})," ",r.a.createElement("span",{className:W.a.value},t.schools))),r.a.createElement("div",{className:W.a.footer},r.a.createElement("button",{onClick:n},"Restart simulation")))}var z,L,U=a(10),T=(z={},Object(i.a)(z,0,[[1,0]]),Object(i.a)(z,2,[[1,2]]),Object(i.a)(z,1,[[.995,1],[.004,2],[.001,3]]),Object(i.a)(z,3,[[1,3]]),z),Y=(L={},Object(i.a)(L,0,[[.3,1],[.7,0]]),Object(i.a)(L,2,[[1,2]]),Object(i.a)(L,1,[[1,1]]),Object(i.a)(L,3,[[1,3]]),L);function B(e,t){var a=e.location.split("-"),n=Object(s.a)(a,1)[0];if("house"===n&&Math.random()<.9)return"stay";var r,l=t[n];return(r=l)[Math.floor(Math.random()*r.length)]}function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:600;O(e);for(var a=100,n=e.filter((function(e){return"venue"===e.type})),r=n.length,l=0;l<r;l++){var o=n[l],i=Math.floor(l/(t/a))+1,c=Math.floor(l%(t/a))+1,s=i*a,u=c*a;o.fx=s,o.fy=u}return e}var X=[{name:"house",members:function(e){return e.agentsPerHouse},isRoot:!0,count:function(e){return e.houses}},{name:"school",count:function(e){return e.schools}},{name:"hospital",count:function(e){return e.hospitals}},{name:"supermarket",count:function(e){return e.supermarkets}},{name:"station",count:function(e){return e.busStations}}],q={house:["supermarket","station","hospital","house","house","house","house","house","house","house","house"],supermarket:["base","base","base","supermarket"],hospital:["hospital","base","base","base"],station:["supermarket","base","base","base","school"],school:["supermarket","base","base","base"]};function V(e){var t=[],a=[];X.forEach((function(n){for(var r=n.name,l=n.members,o=(n.isRoot,n.count),i=(n.alignment,0),c=0;i<o(e);i++,c++){var s="".concat(r,"-").concat(i);if(t.push({type:"venue",venue:r,id:s,size:1}),l)for(var u=0;u<l(e);u++,c++){var m="".concat(r,"-").concat(i,"-").concat(u);t.push({type:"agent",location:s,base:s,id:m,size:1,state:0}),a.push({source:m,target:s})}}}));var n,r=y(t.filter((function(e){return"agent"===e.type})),e.initialSickAgents),l=Object(U.a)(r);try{for(l.s();!(n=l.n()).done;){n.value.state=1}}catch(o){l.e(o)}finally{l.f()}return{nodes:D(t),edges:a}}function Z(e,t,a){X.find((function(e){return e.isRoot}));return t.filter((function(e){return"agent"===e.type})).forEach((function(e,n){var r,l=B(e,q),o=e.location.split("-");Object(s.a)(o,1)[0]===l||"base"===l&&e.location===e.base||"stay"===l||3!==e.state&&J(t,a,e,"base"===l?t.find((function(t){return t.id===e.base})):(r=e,t.filter((function(e){return e.venue===l})).reduce((function(e,t){return C(r,t)<C(r,e)?t:e}))))})),{nodes:t=function(e,t){var a,n=Object(U.a)(e);try{var r=function(){var n=a.value;if("agent"!==n.type)return"continue";var r=e.find((function(e){var t=e.id;return n.location===t}));t.filter((function(e){return e.target.id===r.id})).map((function(e){return e.source})).forEach((function(e){e.id!==n.id&&(1===n.state&&(e.state=S(Y[e.state])),e.state=S(T[e.state]))}))};for(n.s();!(a=n.n()).done;)r()}catch(l){n.e(l)}finally{n.f()}}(t,a),edges:a,state:Object(c.a)({},e,{tick:e.tick+1})}}function J(e,t,a,n){var r=e.find((function(e){return e.id===a.location}));if(!n.locked&&!r.locked){t.map((function(e){e.source.id===a.id&&(e.target=n)}));a.location=n.id}}var Q={tick:0,agentsPerHouse:8,houses:26,busStations:5,hospitals:3,supermarkets:5,schools:3,initialSickAgents:5},K=V(Q);var $=function(){var e=Object(n.useState)(Q),t=Object(s.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(K.nodes),u=Object(s.a)(o,2),p=u[0],h=u[1],f=Object(n.useState)(K.edges),d=Object(s.a)(f,2),b=d[0],v=d[1],E=Object(n.useState)([]),g=Object(s.a)(E,2),k=g[0],_=g[1],y=Object(n.useState)([]),O=Object(s.a)(y,2),S=O[0],j=O[1],C=Object(n.useState)([]),N=Object(s.a)(C,2),A=N[0],x=N[1],w=Object(n.useState)(!0),R=Object(s.a)(w,2),I=R[0],G=R[1],H=Object(n.useRef)(null);return function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){if(!I){var e=Z(a,p,b),t=(e.nodes,e.edges,e.state);l(t),_(k.concat(p.filter((function(e){return 1===e.state})).length)),j(S.concat(p.filter((function(e){return 2===e.state})).length)),x(A.concat(p.filter((function(e){return 3===e.state})).length))}}),1e3),Object(n.useEffect)((function(){G(!1)}),[I]),r.a.createElement("div",{className:m.a.container},r.a.createElement("div",{className:m.a.header},r.a.createElement("h3",null,"CoronaSim: Simulating Coronavirus Escalation with the Application of SIR Modeling"),r.a.createElement("h2",null,"A virtualized experiment to analyze the spread of a pathogen over a modeled community")),r.a.createElement("div",{className:m.a.simulation},r.a.createElement("div",{className:m.a.samples},r.a.createElement("span",{className:m.a.sampleSusceptible},"Susceptible"),r.a.createElement("span",{className:m.a.sampleInfected},"Infected"),r.a.createElement("span",{className:m.a.sampleRecovered},"Recovered"),r.a.createElement("i",null,"Click on a building to qurantine")),!I&&r.a.createElement(M,{width:110*Math.round(p.filter((function(e){return"venue"===e.type})).length/6),height:700,tick:a.tick,nodes:p,edges:b,onNodeClick:function(e){return function(){var t=p.find((function(t){var a=t.id;return e===a}));"venue"===t.type&&(t.locked=!t.locked)}},ref:H})),r.a.createElement("div",{className:m.a.section},r.a.createElement("div",{className:m.a.stats},r.a.createElement("h3",null,"Stats"),r.a.createElement("div",{className:m.a.population},"Population: ",p.filter((function(e){return"agent"===e.type})).length," ",r.a.createElement("br",null),"Dead: ",p.filter((function(e){return 3===e.state})).length," ",r.a.createElement("br",null),"Recovered: ",p.filter((function(e){return 2===e.state})).length," ",r.a.createElement("br",null),"Sick: ",p.filter((function(e){return 1===e.state})).length," ",r.a.createElement("br",null)),r.a.createElement(P,{width:300,height:270,data:[{color:"red",points:k},{color:"green",points:S},{color:"black",points:A}]})),r.a.createElement("div",{className:m.a.simulationSettings},r.a.createElement("h3",null,"Settings"),r.a.createElement(F,{simulationState:a,onSettingChange:function(e){return function(t){l(Object(c.a)({},a,Object(i.a)({},e,t.target.value)))}},onRestartButtonClick:function(){var e=V(a),t=e.nodes,n=e.edges;G(!0),h(t),v(n),x([]),j([]),_([]),l(Object(c.a)({},a,{tick:0}))}}))),r.a.createElement("div",{className:m.a.pageInfo},r.a.createElement("div",{className:m.a.section},r.a.createElement("h1",null,"Docs"),r.a.createElement("p",null,"These elements are modifiable by the user to further specify circumstanital conditions: "),r.a.createElement("ul",null,r.a.createElement("li",null,"Initial sick agents: number of intial sick people (randomly dispersed through homes)"),r.a.createElement("br",null),r.a.createElement("li",null,"Agents per building: number of people per home"),r.a.createElement("br",null),r.a.createElement("li",null,"Houses: number of houses"),r.a.createElement("br",null),r.a.createElement("li",null,"Bus stations: number of bus stations"),r.a.createElement("br",null),r.a.createElement("li",null,"Hospitals: number of hospitals"),r.a.createElement("br",null),r.a.createElement("li",null,"Supermarkets: number of supermarkets"),r.a.createElement("br",null),r.a.createElement("li",null,"Schools: number of schools")),r.a.createElement("h2",null,"Regions"),r.a.createElement("p",null,"Each region has distinctive characteristics extracted from the region's respective Demographic Transition Model (DTM). Elements are scaled logarithimically for simulation and SIR modeling while factoring modified user input."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/react-coronasim/na/"},"North America (NA)")),r.a.createElement("li",null,r.a.createElement("a",{href:"/react-coronasim/sa/"},"South America (SA)")),r.a.createElement("li",null,r.a.createElement("a",{href:"/react-coronasim/eu/"},"Europe (EU)")),r.a.createElement("li",null,r.a.createElement("a",{href:"/react-coronasim/as/"},"Asia (AS)")),r.a.createElement("li",null,r.a.createElement("a",{href:"/react-coronasim/af/"},"Africa (AF)")),r.a.createElement("li",null,r.a.createElement("a",{href:"/react-coronasim/oc/"},"Oceania (OC)"))),r.a.createElement("br",null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,a){e.exports={container:"App_container__1MQN3",header:"App_header__3ZZ1n",simulationContainer:"App_simulationContainer__23iFm",simulation:"App_simulation__1Y9Gr",section:"App_section__1OL6S",simulationSettings:"App_simulationSettings__txA-R",stats:"App_stats__2fMs7",population:"App_population__3MVPW",simulationInfo:"App_simulationInfo__1KRFk",pageInfo:"App_pageInfo__2E9cf",samples:"App_samples__2e7V-",sampleSusceptible:"App_sampleSusceptible__2olEO",sampleInfected:"App_sampleInfected__1l1Pi",sampleRecovered:"App_sampleRecovered__33NzV"}},4:function(e,t,a){e.exports={container:"SimulationSettings_container__vY4rL",form:"SimulationSettings_form__E6YUW",value:"SimulationSettings_value__1sPd7",footer:"SimulationSettings_footer__1GRqa"}},5:function(e,t,a){e.exports={node:"Graph_node__2LUmU",venue:"Graph_venue__1yeeL",hospital:"Graph_hospital__2-HM5",teatr:"Graph_teatr__3zcOH",station:"Graph_station__3oWAU",supermarket:"Graph_supermarket__x5o1m",susceptible:"Graph_susceptible__2UC5Q",dead:"Graph_dead__aGtk-",sick:"Graph_sick__2ig0f",recovered:"Graph_recovered__3crc2",lockedSymbol:"Graph_lockedSymbol__1OEeZ"}}},[[22,1,2]]]);
//# sourceMappingURL=main.131d270c.chunk.js.map