(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(56)},31:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(17),s=a.n(c),o=(a(31),a(32),a(7)),i=a(18),l=a(19),d=a(23),u=a(20),m=a(24),f=a(59),h=a(57),p=a(58),k=a(9),v=a.n(k),b=(a(52),function(e){var t=e.data,a=Object.keys(t[0]);return r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,a.map(function(e,t){return r.a.createElement("th",{key:t},e)}))),r.a.createElement("tbody",null,t.map(function(e,n){return r.a.createElement("tr",{key:n},a.map(function(e,a){return r.a.createElement("td",{key:a},t[n][e])}))})))}),E=function(e){return r.a.createElement(h.a,{className:"m-1"},r.a.createElement(p.a,{xs:"12",className:"text-white bg-secondary p-2"},e.title),r.a.createElement(p.a,{xs:"12",className:"bg-light p-2"},r.a.createElement(b,{field:e.field,value:e.value,data:e.data})))},y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={lekerdezes:[],forgalom:"",etelNev:"",stat:[],sqlTasks:[],errors:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://localhost:8000/api/sqltasks").then(function(t){var a=t.data;e.setState({sqlTasks:a},function(){e.fetchStat()})}).catch(function(t){var a=[].concat(Object(o.a)(e.state.errors),[{description:"Hiba: a lek\xe9rdez\xe9sek defin\xedci\xf3j\xe1t nem siker\xfclt lek\xe9rni a szerverr\u0151l!"}]);e.setState({errors:a}),console.error(e.state.errors)})}},{key:"fetchStat",value:function(){var e=this;this.state.sqlTasks.forEach(function(t){t.adminPage&&v.a.get("http://localhost:8000/api/lekerdezes/"+t.id).then(function(a){console.log(t.id);var n=[].concat(Object(o.a)(e.state.stat),[{id:t.id,description:t.description,data:a.data}]);e.setState({stat:n.sort(function(e,t){return e.id-t.id})},function(){return console.log(JSON.stringify(e.state.stat))})}).catch(function(a){var n=[].concat(Object(o.a)(e.state.stat),[{id:t.id,description:t.description,data:[{error:"Hiba: A lek\xe9rdez\xe9s nem hajthat\xf3 v\xe9gre!"}]}]);e.setState({stat:n})})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{className:"mt-5"},r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement("h1",{className:"text-center"},"Csudij\xf3 \xc9tterem - Adminisztr\xe1ci\xf3s oldal"))),this.state.stat.map(function(e,t){return r.a.createElement(E,{title:e.id+". "+e.description,field:Object.keys(e.data[0])[0],value:e.data[0][Object.keys(e.data[0])[0]],data:e.data,key:t})})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.8eee9a34.chunk.js.map