(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(22)},17:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(4),i=a.n(o),c=(a(17),a(5)),s=a(6),l=a(9),u=a(7),m=a(10),d=a(8),h=(a(20),a(21),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={gameList:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new URL(document.location).searchParams.get("username");fetch("https://bgg-json.azurewebsites.net/collection/"+t+"?grouped=true").then(function(e){return e.json()}).then(function(t){var a=[];(a=t.filter(function(e){return!1===e.wishList})).forEach(function(e){-1===e.rank&&(e.rank="N/A")}),e.setState({gameList:a})})}},{key:"render",value:function(){var e=[{Header:"Rank",accessor:"rank",maxWidth:75},{Header:"",accessor:"thumbnail",maxWidth:120,Cell:function(e){return r.a.createElement("img",{src:e.value,height:"64",alt:"thumbnail"})}},{Header:"Title",accessor:"name",minWidth:150,maxWidth:450,style:{whiteSpace:"unset"},Cell:function(e){return r.a.createElement("div",null,r.a.createElement("a",{href:"https://boardgamegeek.com/boardgame/"+e.original.gameId,target:"_blank",rel:"noopener noreferrer"},e.value)," ",r.a.createElement("span",{className:"yearPublished"},"(",e.original.yearPublished,")"))}},{Header:"Avg Rating",accessor:"averageRating",defaultSortDesc:!0,maxWidth:100},{Header:"Min Players",accessor:"minPlayers",maxWidth:100},{Header:"Max Players",accessor:"maxPlayers",defaultSortDesc:!0,maxWidth:100},{Header:"Play Time",accessor:"playingTime",defaultSortDesc:!0,maxWidth:100},{Header:"Comment",accessor:"userComment",style:{whiteSpace:"unset"}}];return r.a.createElement(d.a,{data:this.state.gameList,columns:e,defaultSorted:[{id:"rank",desc:!1}]})}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.088798e4.chunk.js.map