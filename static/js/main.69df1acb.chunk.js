(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,t,n){},22:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return a});var i=function(){return function(e){e({type:"SIMPLE_ACTION",payload:"result_of_simple_action"})}},a=function(e){return function(t){t({type:"PORTFOLIO_DATA",payload:e})}}},33:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=[{id:1,name:"HONGKONG TECHNOLOGY",volatility:"26.8%",mean_return:"2.96%",currency:"SGD",constituents:[{weight:3,isLocked:!1,instrument:{id:1,name:"CSX corp",type:"Equity"}},{weight:17,isLocked:!1,instrument:{id:2,name:"cummins Inc",type:"Equity"}},{weight:10,isLocked:!1,instrument:{id:3,name:"Eaton Corp PLC",type:"Equity"}},{weight:10,isLocked:!1,instrument:{id:4,name:"Fedx corp",type:"Equity"}},{weight:10,isLocked:!1,instrument:{id:5,name:"Haris corp",type:"Equity"}},{weight:10,isLocked:!1,instrument:{id:6,name:"Norfolk Southern Corp",type:"Bond"}},{weight:5,isLocked:!1,instrument:{id:7,name:"General Dynamics",type:"Bond"}},{weight:15,isLocked:!1,instrument:{id:8,name:"hal",type:"Bond"}},{weight:20,isLocked:!1,instrument:{id:10,name:"USD CASH",type:"CASH"}}]}]},54:function(e,t,n){},78:function(e,t,n){"use strict";var i=n(16),a=n(17),o=n(20),r=n(18),s=n(21),c=n(6),l=n(0),u=n.n(l),m=n(19),d=n(174),p=n(48),h=n.n(p),f=n(49),g=n.n(f),b=n(22),v=n(33),y=(n(54),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(r.a)(t).call(this,e))).state={tableData:[],id:-1},n.simpleAction=n.simpleAction.bind(Object(c.a)(Object(c.a)(n))),n.afterSaveCell=n.afterSaveCell.bind(Object(c.a)(Object(c.a)(n))),n.setNewWeightsToPortFolio=n.setNewWeightsToPortFolio.bind(Object(c.a)(Object(c.a)(n))),n.setPortFolioDataDetails=n.setPortFolioDataDetails.bind(Object(c.a)(Object(c.a)(n))),n}return Object(s.a)(t,e),Object(a.a)(t,[{key:"componentWillMount",value:function(){0===this.props.portfolios.length&&this.props.initPorfolioData(v.a)}},{key:"componentWillReceiveProps",value:function(e){e.portfolios!==this.props.portfolios&&this.setPortFolioDataDetails(e.portfolios)}},{key:"componentDidMount",value:function(){this.setPortFolioDataDetails(this.props.portfolios)}},{key:"setPortFolioDataDetails",value:function(e){var t=this.props.location.search;if(e&&0!==e.length&&t){var n=t.split("?id=")[1];this.setState({id:n});var i=e.find(function(e){return e.id===Number(n)}).constituents,a=[],o={};i.forEach(function(e){var t=e.instrument.type,n=a.find(function(e){return e.type===t});n?(n.totalWeight=parseFloat(Number(n.totalWeight)+Number(e.weight)).toFixed(2),(o={}).id=e.instrument.id,o.name=e.instrument.name,o.weight=e.weight,o.isLocked=e.isLocked,n.expand.push(o)):((n={}).type=t,n.totalWeight=e.weight,(o={}).id=e.instrument.id,o.name=e.instrument.name,o.weight=e.weight,o.isLocked=e.isLocked,n.expand=[o],a.push(n))}),this.setState({tableData:a})}}},{key:"afterSaveCell",value:function(e,t,n,i){var a=this.props.portfolios,o=e<t,r=this.props.location.search;if(r){var s=r.split("?id=")[1],c=a.find(function(e){return e.id===Number(s)}).constituents;if("isLocked"===i.dataField)a.find(function(e){return e.id===Number(s)}).constituents.find(function(e){return e.instrument.id===n.id}).isLocked="Y"===t,this.props.initPorfolioData(a),this.setPortFolioDataDetails(a);else{var l,u=c.map(function(e){var t={};return t.weight=e.weight,t.isLocked=e.isLocked,t.id=e.instrument.id,t}),m=u.filter(function(e){return e.id!==n.id&&!e.isLocked}).map(function(e){return e.weight}).reduce(function(e,t){return e+t},0);l=o?(t-e)/m:(e-t)/m,u.forEach(function(e){e.id!==n.id?e.newWeight=o?e.weight-l*e.weight:e.weight+l*e.weight:e.newWeight=Number(t)}),this.setNewWeightsToPortFolio(u)}}}},{key:"setNewWeightsToPortFolio",value:function(e){var t=this,n=this.props.portfolios;n.find(function(e){return e.id===Number(t.state.id)}).constituents.forEach(function(t){if(!t.isLocked){var n=e.find(function(e){return e.id===t.instrument.id}).newWeight;t.weight=Number(parseFloat(n).toFixed(2))}}),this.props.initPorfolioData(n),this.setPortFolioDataDetails(n)}},{key:"simpleAction",value:function(e){this.props.simpleAction()}},{key:"render",value:function(){var e=this,t=this.state.tableData,n=[{dataField:"name",text:"Name",editable:!1},{dataField:"isLocked",text:"Lock",editor:{type:f.Type.CHECKBOX,value:"Y:N"}},{dataField:"weight",text:"Weight \n (Click to edit and press enter to save)",validator:function(e,t,n){return!isNaN(e)||{valid:!1,message:"Price should be numeric"}}}],i={renderer:function(t){return u.a.createElement("div",{style:{color:"black"}},u.a.createElement(h.a,{keyField:"id",data:t.expand,columns:n,cellEdit:g()({mode:"click",afterSaveCell:e.afterSaveCell,blurToSave:!0})}))},expanded:t.map(function(e){return e.type})};return u.a.createElement("div",{className:"App"},u.a.createElement("header",{className:"App-header2"},u.a.createElement(d.a,{to:"/"}," ",u.a.createElement("button",{style:{margin:10}}," Go back to List page ")," ")," ",u.a.createElement("br",null),u.a.createElement("div",{style:{width:"100%",padding:20}},u.a.createElement(h.a,{keyField:"type",data:t,columns:[{dataField:"type",text:"Type"},{dataField:"totalWeight",text:"Total Weight"}],expandRow:i}))))}}]),t}(l.Component));t.a=Object(m.b)(function(e){return{portfolios:e.simpleReducer.portfolios}},function(e){return{simpleAction:function(){return e(Object(b.b)())},initPorfolioData:function(t){return e(Object(b.a)(t))}}})(y)},79:function(e,t,n){"use strict";n.d(t,"a",function(){return i});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},80:function(e,t,n){"use strict";var i=n(12),a=n(73);var o=Object(i.c)({defaultFunction:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"start",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIMPLE_ACTION":return t.payload;default:return e}},portfolios:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PORTFOLIO_DATA":return t.payload;default:return e}}}),r=Object(i.c)({simpleReducer:o});function s(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(i.d)(r,Object(i.a)(a.a))}n.d(t,"a",function(){return s})},81:function(e,t,n){"use strict";var i=n(16),a=n(17),o=n(20),r=n(18),s=n(21),c=n(0),l=n.n(c),u=n(6),m=n(19),d=n(173),p=n(169),h=n(174),f=n(22),g=n(33),b=(n(54),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(r.a)(t).call(this,e))).simpleAction=n.simpleAction.bind(Object(u.a)(Object(u.a)(n))),n}return Object(s.a)(t,e),Object(a.a)(t,[{key:"componentWillMount",value:function(){this.props.initPorfolioData(g.a)}},{key:"simpleAction",value:function(e){this.props.simpleAction()}},{key:"render",value:function(){var e=this.props.portfolios;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(d.a,{bsStyle:"info",style:{marginTop:10}},l.a.createElement("strong",null,"Hi WeInvest !")," - Suryakumar - suryakumarmurugesan@gmail.com"),e&&e.map(function(e){return l.a.createElement("div",{class:"row",style:{padding:10,width:"100%"}},l.a.createElement("div",{class:"col-sm-6 col-md-4"},l.a.createElement("div",{class:"thumbnail"},l.a.createElement("img",{className:"pf-image",src:"http://static.asiawebdirect.com/m/phuket/portals/hong-kong-hotels-ws/homepage/nightlife/pagePropertiesImage/hong-kong-nightlife.jpg.jpg",alt:"..."}),l.a.createElement("div",{class:"caption"},l.a.createElement("h3",null,e.name),l.a.createElement("ul",{class:"list-group font"},l.a.createElement("li",{class:"list-group-item list-value"},l.a.createElement("span",{className:"left"}," Volatility "),l.a.createElement("span",{className:"right"}," ",e.volatility," ")),l.a.createElement("li",{class:"list-group-item list-value"},l.a.createElement("span",{className:"left"}," 1 Month Return "),l.a.createElement("span",{className:"right"},"2.34% ",l.a.createElement("span",{class:"glyphicon glyphicon-triangle-top","aria-hidden":"true"}))),l.a.createElement("li",{class:"list-group-item list-value"},l.a.createElement("span",{className:"left"}," Mean Return "),l.a.createElement("span",{className:"right"}," ",e.mean_return," ")),l.a.createElement("li",{class:"list-group-item list-value"},l.a.createElement("span",{className:"left"}," Minimum Investment "),l.a.createElement("span",{className:"right"},l.a.createElement("span",{style:{fontSize:"x-small"}},e.currency)," 3,000")),l.a.createElement("li",{class:"list-group-item list-value"},l.a.createElement("span",{className:"left"}," Eligibility "),l.a.createElement("span",{className:"right"}," Restricted to accredited investors "))),l.a.createElement(h.a,{to:"/detail?id=".concat(e.id)},l.a.createElement(p.a,{bsStyle:"primary",className:"go-to-detail-button"}," Explore Investment Idea "))))))})))}}]),t}(c.Component)),v=Object(m.b)(function(e){return{portfolios:e.simpleReducer.portfolios}},function(e){return{simpleAction:function(){return e(Object(f.b)())},initPorfolioData:function(t){return e(Object(f.a)(t))}}})(b),y=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return l.a.createElement(v,null)}}]),t}(c.Component);t.a=y},82:function(e,t,n){e.exports=n(83)},83:function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),i=n.n(t),a=n(70),o=n.n(a),r=n(19),s=n(170),c=n(171),l=n(38),u=n(80),m=n(81),d=n(78),p=n(79);n(165),n(167);o.a.render(i.a.createElement(r.a,{store:Object(u.a)()},i.a.createElement(s.a,{basename:"/polymath1995.github.io/"},i.a.createElement(c.a,null,i.a.createElement(l.a,{exact:!0,path:"/",component:m.a}),i.a.createElement(l.a,{path:"/detail",component:d.a})))),document.getElementById("root")),p.a(),e.hot.accept()}.call(this,n(51)(e))}},[[82,2,1]]]);
//# sourceMappingURL=main.69df1acb.chunk.js.map