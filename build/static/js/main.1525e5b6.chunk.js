(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(31)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(12),s=a.n(i),l=a(10),c=a(1),u=a(4),o=a(5),d=a(7),h=a(6),m=a(2),f=a(8),p=a(13),y="localhost"===window.location.hostname?"ws://127.0.0.1:8080":"wss://durak-app.herokuapp.com/",v={client:null,connect:function(){this.client||(this.client=new p.w3cwebsocket(y,"echo-protocol"))},listen:function(e){this.client.onclose=function(){return e("closed")},this.client.onerror=function(t){return e("error",t)},this.client.onmessage=function(t){return e("message",JSON.parse(t.data))}},send:function(e){var t=this,a=JSON.stringify(e);this.client.readyState===this.client.OPEN?this.client.send(a):this.client.onopen=function(){return t.client.send(a)}},close:function(){this.client&&(this.client.close(),this.client=null)}},g=n.a.createContext(),b=(a(23),function(e){var t=e.changeItem,a=e.currOption,r=e.option,i=e.optionText;return n.a.createElement("span",{className:"menu-item-option ".concat(a===r?"current":""),onClick:a!==r?function(){return t(r)}:null,style:{cursor:a!==r?"pointer":"default"}},i)}),k=function(e){var t=e.username,a=e.mode,r=e.playersNumber,i=e.changeName,s=e.changeMode,l=e.isPlaying,c=e.changePlayersNumber,u=e.startGame,o=e.waitUsers,d=e.saveUserSettings,h=n.a.createRef(),m=function(e){var t=e.target.value;h.current.placeholder&&(h.current.placeholder=""),t&&(t=t[0].toUpperCase()+t.slice(1)),i(t)},f=function(e){t?"single-player"===a?(d(),u()):(d(),o()):h.current.placeholder="ru"===e?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f":"You should enter name"};return n.a.createElement(g.Consumer,null,function(e){var i=e.lang;return n.a.createElement("div",{className:"menu ".concat(l?"hide":"")},n.a.createElement("h1",null,"ru"===i?"\u041c\u0435\u043d\u044e":"Menu"),n.a.createElement("div",{className:"menu-items"},n.a.createElement("label",{className:"menu-item"},n.a.createElement("span",{className:"menu-item-name"},"ru"===i?"\u0418\u043c\u044f:":"Name:"),n.a.createElement("input",{ref:h,type:"text",value:t,onChange:m})),n.a.createElement("div",{className:"menu-item"},n.a.createElement("span",{className:"menu-item-name"},"ru"===i?"\u0420\u0435\u0436\u0438\u043c:":"Mode:"),n.a.createElement(b,{changeItem:s,currOption:a,option:"single-player",optionText:"ru"===i?"\u0421 \u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043e\u043c":"Single Player"}),n.a.createElement(b,{changeItem:s,currOption:a,option:"multiplayer",optionText:"ru"===i?"\u0421 \u0414\u0440\u0443\u0433\u0438\u043c\u0438 \u0418\u0433\u0440\u043e\u043a\u0430\u043c\u0438":"Multiplayer"})),n.a.createElement("div",{className:"menu-item"},n.a.createElement("span",{className:"menu-item-name"},"ru"===i?"\u0427\u0438\u0441\u043b\u043e \u0418\u0433\u0440\u043e\u043a\u043e\u0432:":"Players Number:"),n.a.createElement(b,{changeItem:c,currOption:r,option:2,optionText:"2"}),n.a.createElement(b,{changeItem:c,currOption:r,option:3,optionText:"3"}),n.a.createElement(b,{changeItem:c,currOption:r,option:4,optionText:"4"}),n.a.createElement(b,{changeItem:c,currOption:r,option:5,optionText:"5"}),n.a.createElement(b,{changeItem:c,currOption:r,option:6,optionText:"6"}))),n.a.createElement("button",{onClick:f},"single-player"===a?"ru"===i?"\u0418\u0433\u0440\u0430\u0442\u044c":"Play":"ru"===i?"\u0416\u0434\u0430\u0442\u044c \u0414\u0440\u0443\u0433\u0438\u0445 \u0418\u0433\u0440\u043e\u043a\u043e\u0432":"Wait for Users"))})},x=(a(24),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={joinedUsers:[],userConfirms:!1,allUsersConfirm:!1},a.cancel=a.cancel.bind(Object(m.a)(a)),a.confirm=a.confirm.bind(Object(m.a)(a)),a}return Object(f.a)(t,e),Object(o.a)(t,[{key:"updateJoinedUsers",value:function(e){this.setState({joinedUsers:e,playersNumber:this.state.playersNumber})}},{key:"confirm",value:function(){this.setState({userConfirms:!0}),v.send({type:"confirm"})}},{key:"allUsersConfirm",value:function(){this.props.startMultiplayGame()}},{key:"cancel",value:function(){this.props.cancelWaiting(),v.close()}},{key:"connectToWebsocket",value:function(){var e=this;v.connect(),v.listen(function(t,a){"message"===t&&("joinedUsers"===a.type&&e.updateJoinedUsers(a.data.joinedUsers),"allUsersConfirm"===a.type&&e.allUsersConfirm()),"closed"===t&&e.cancel()}),v.send({type:"addData",username:this.props.username,groupSize:this.props.playersNumber})}},{key:"componentDidUpdate",value:function(e){e.isWaiting||e.isPlaying||!this.props.isWaiting||(this.connectToWebsocket(),this.setState({joinedUsers:[],userConfirms:!1,allUsersConfirm:!1}))}},{key:"render",value:function(){var e=this.props,t=e.isWaiting,a=e.playersNumber,r=this.state,i=r.joinedUsers,s=r.userConfirms,l=this.context.lang;return n.a.createElement("div",{className:"wait-page ".concat(t?"":"hide")},n.a.createElement("h1",null,"ru"===l?"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435 \u0418\u0433\u0440\u043e\u043a\u043e\u0432":"Wait for Users"),n.a.createElement("div",{className:"info"},!!i.length&&n.a.createElement("p",null,n.a.createElement("b",null,"ru"===l?"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0432\u0448\u0438\u0435\u0441\u044f \u0418\u0433\u0440\u043e\u043a\u0438: ":"Joined Users: "),i.map(function(e,t){return n.a.createElement("span",{key:t},t?", "+e:" "+e)})),n.a.createElement("p",null,n.a.createElement("b",null,"ru"===l?"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0416\u0434\u0430\u0442\u044c: ":"Remains to wait: "),a-i.length),s&&n.a.createElement("p",null,"ru"===l?"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435 \u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u0418\u0433\u0440\u043e\u043a\u043e\u0432":"Waiting for Users to Confirm")),n.a.createElement("div",{className:"buttons"},n.a.createElement("button",{className:"cancel-button",onClick:this.cancel},"ru"===l?"\u041e\u0442\u043c\u0435\u043d\u0430":"Cancel"),i.length===a&&!s&&n.a.createElement("button",{className:"confirm-button",onClick:this.confirm},"ru"===l?"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c":"Confirm")))}}]),t}(r.Component));x.contextType=g;var S=x,C=(a(25),function(e){var t=e.field,a={cx:t.width/2+"px",cy:t.height/2+"px",r:(t.width-2*t.playerSpace)/2+"px"};return n.a.createElement("circle",{className:"table",style:a})}),w=function(e){var t=e.placeCenter,a=50,r=77.78,i={x:t.x-a/2,y:t.y-r/2};return n.a.createElement(g.Consumer,null,function(e){var t=e.trumpSuit;return t?n.a.createElement("image",{x:0,y:0,width:a,height:r,href:"/images/card-suits/".concat(t,".svg"),style:{transform:"translate(".concat(i.x,"px, ").concat(i.y,"px)")}}):null})},O={cardSize:{width:50,height:77.78},maxCardsAfterDealing:6,maxAttacks:6},E=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).imageElement=n.a.createRef(),a}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.rotation,r=e.coords,i=e.side,s=e.activePlayer,l=this.context,c=l.possibleCards,u=l.makeMove,o=l.cardStyles,d=l.updateCardStyles,h=l.movedCard,m=l.addMovedCard,f=l.removeMovedCard,p=this.imageElement,y=O.cardSize,v=r.x-y.width/2,g=r.y-y.height/2;s&&h===t&&(g-=20);var b="translate(".concat(v,"px, ").concat(g,"px)"),k="rotate(".concat(a?a+"deg":"0deg",")"),x=o?o[t]:null,S={transformOrigin:"".concat(r.x,"px ").concat(r.y,"px"),transform:"".concat(k," ").concat(b)},C=s&&!c.includes(t),w=function(e,t,a){e.style.transform=t.transform,e.style.transformOrigin=t.transformOrigin,e.style.transition=a?"0.3s":"0s",e.style.cursor=s&&!C?"pointer":"auto",e.style.filter=C?'url("#darker")':"none"};!function e(){window.requestAnimationFrame(function(){var a=p.current;a?x?(w(a,x,!1),window.requestAnimationFrame(function(){w(a,S,!0),d(t,S)})):(w(a,S,!1),d(t,S)):e()})}();return n.a.createElement("image",{ref:this.imageElement,x:0,y:0,width:y.width,height:y.height,href:"front"===i?"/images/cards/".concat(t,".png"):"/images/cards/back.png",id:t,className:"card",onClick:function(){s&&!C&&(u(t),h===t&&setTimeout(f,300))},onMouseOver:function(){h||!s||C||m(t)},onMouseLeave:function(){h===t&&f()}})}}]),t}(r.Component);E.contextType=g;var j=E,P=function(e){var t=e.cards,a=e.placeCenter;return n.a.createElement(r.Fragment,null,t.length?t.map(function(e,t){var r=.1*t+(e.trump?-19:0),n=.1*-t+(e.trump?13:0),i={x:a.x+r,y:a.y+n},s=e.trump?90:0;return Object(c.a)({},e,{coords:i,rotation:s,side:e.trump?"front":"back"})}).map(function(e){return n.a.createElement(j,Object.assign({},e,{key:e.id}))}):n.a.createElement(w,{placeCenter:a}))},N=a(14),M=a(3),T=function(e){return e*Math.PI/180},I=function(e,t){return{x:Math.cos(T(e))*t,y:Math.sin(T(e))*t}},U=function e(t){var a=t instanceof Array;if(!a&&!("object"===typeof t&&!a))return t;if(a){var r=[],n=!0,i=!1,s=void 0;try{for(var l,c=t.entries()[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var u=l.value,o=Object(M.a)(u,2),d=o[0],h=o[1];r[d]=e(h)}}catch(p){i=!0,s=p}finally{try{n||null==c.return||c.return()}finally{if(i)throw s}}return r}var m={};for(var f in t)m[f]=e(t[f]);return m},A=function(e){var t=e.players,a=e.playerCardsPosition,i=e.userIndex,s=[],l=!0,u=!1,o=void 0;try{for(var d,h=t.entries()[Symbol.iterator]();!(l=(d=h.next()).done);l=!0){var m=d.value,f=Object(M.a)(m,2),p=f[0],y=f[1],v=a[p],g=v.angle,b=Object(N.a)(v,["angle"]),k=!0,x=!1,S=void 0;try{for(var C,w=y.entries()[Symbol.iterator]();!(k=(C=w.next()).done);k=!0){var O=C.value,E=Object(M.a)(O,2),P=E[0],T=E[1],U=p===i?20:5,A=(P-(y.length-1)/2)*U,G=I(g,A),W={x:b.x+G.x,y:b.y+G.y};s.push(Object(c.a)({},T,{rotation:g,coords:W,side:p===i?"front":"back",activePlayer:p===i}))}}catch(D){x=!0,S=D}finally{try{k||null==w.return||w.return()}finally{if(x)throw S}}}}catch(D){u=!0,o=D}finally{try{l||null==h.return||h.return()}finally{if(u)throw o}}return n.a.createElement(r.Fragment,null,s.map(function(e){return n.a.createElement(j,Object.assign({},e,{key:e.id}))}))},G=function(e){var t=e.attacks,a=e.placeCenter,i=[],s=!0,l=!1,u=void 0;try{for(var o,d=t.entries()[Symbol.iterator]();!(s=(o=d.next()).done);s=!0){var h=o.value,m=Object(M.a)(h,2),f=m[0],p=m[1],y=!0,v=!1,g=void 0;try{for(var b,k=p.entries()[Symbol.iterator]();!(y=(b=k.next()).done);y=!0){var x=b.value,S=Object(M.a)(x,2),C=S[0],w=S[1],O=0===C,E={};t.length>3?f>2?(E.x=f-3-(t.length-4)/2,E.y=1):(E.x=f-1,E.y=-1):(E.x=f-(t.length-1)/2,E.y=0),O||(E.x+=.05,E.y+=.4),E.x=70*E.x,E.y=60*E.y;var P={x:a.x+E.x,y:a.y+E.y};i.push(Object(c.a)({},w,{coords:P,side:"front"}))}}catch(N){v=!0,g=N}finally{try{y||null==k.return||k.return()}finally{if(v)throw g}}}}catch(N){l=!0,u=N}finally{try{s||null==d.return||d.return()}finally{if(l)throw u}}return n.a.createElement(r.Fragment,null,i.map(function(e){return n.a.createElement(j,Object.assign({},e,{key:e.id}))}))},W=function(e){var t=e.cards,a=e.placeCenter;return n.a.createElement(r.Fragment,null,t.map(function(e){return n.a.createElement(j,Object.assign({},e,{key:e.id,coords:Object(c.a)({},a),side:"back"}))}))},D=function(e){var t=e.cards,a=e.field,i=e.players,s=e.userIndex,l={deck:{x:.36*a.width,y:.5*a.height},table:{x:.55*a.width,y:.48*a.height},discarded:{x:1.7*a.width,y:.5*a.height}};return n.a.createElement(r.Fragment,null,n.a.createElement(P,{cards:t.deck,placeCenter:l.deck}),n.a.createElement(A,{players:t.players,playerCardsPosition:function(){var e=(a.width+a.height)/2/2-a.playerSpace/2;return Array.from({length:i.length},function(t,r){var n=360*(r-s)/i.length,l=I(n+90,e);return{angle:n,x:a.width/2+l.x,y:a.height/2+l.y}})}(),userIndex:s}),n.a.createElement(G,{attacks:t.table,placeCenter:l.table}),n.a.createElement(W,{cards:t.discarded,placeCenter:l.discarded}))},B=(a(26),function(e){var t=e.show,a=e.text,r=e.onClick,i={opacity:t?1:0,cursor:t?"pointer":"default"};return n.a.createElement("g",{className:"pass-button",style:i,onClick:r},n.a.createElement("rect",null),n.a.createElement("text",null,a))}),F=(a(27),function(e){var t=e.field,a=e.defenderIndex,r=e.playersCount,i=e.userIndex;if(null===a)return null;var s=360*(a-i)/r,l=(t.width-2*t.playerSpace)/2-35,c=I(s+95,l),u=t.width/2+c.x,o=t.height/2+c.y,d={transform:"rotate(".concat(s,"deg) translate(").concat(u,"px, ").concat(o,"px)"),transformOrigin:"".concat(u,"px ").concat(o,"px")};return n.a.createElement("polygon",{className:"arrow",points:"0,0 28,0 14,28",x:0,y:0,style:d})}),J=(a(28),function(e){var t=e.timer;return null===t?null:n.a.createElement("g",{className:"timer"},n.a.createElement("rect",null),n.a.createElement("text",null,t))}),L=function(){return n.a.createElement("defs",null,n.a.createElement("filter",{id:"darker"},n.a.createElement("feColorMatrix",{type:"matrix",values:".6   0   0   0   0 0  .6   0   0   0 0   0  .6   0   0 0   0   0   1   0 "})))},R=a(9),z=function(){function e(t){Object(u.a)(this,e),this.cards={deck:[],players:[],table:[],discarded:[]},this.userIndex=0,this.trumpSuit=null,this.attacker=null,this.defender=null,this.defendSucceed=null,this.activePlayers={players:[]},this.maxAttacks=0,this.observable={subscriber:null,subscribe:function(e){var t=this;return this.subscriber=e,function(){return t.subscriber=null}},update:function(e){this.subscriber(e)}}}return Object(o.a)(e,[{key:"initNewGame",value:function(e){var t=this.shuffleCards(this.genCards()),a=Array.from({length:e},function(){return[]});this.cards=Object(c.a)({},this.cards,{deck:t,players:a}),this.observable.update([{prop:"cards",value:this.cards}])}},{key:"genCards",value:function(){for(var e=["2","3","4","5","6","7","8","9","10","J","Q","K","A"],t=[2,3,4,5,6,7,8,9,10,11,12,13,14],a=["clubs","diamonds","hearts","spades"],r=[],n=0;n<e.length;n++)for(var i=0;i<a.length;i++)r.push({id:"".concat(e[n],"-").concat(a[i]),rank:e[n],suit:a[i],value:t[n]});return r}},{key:"shuffleCards",value:function(e){for(var t=U(e),a=t.length-1;a>0;a--){var r=Math.floor(Math.random()*(a+1)),n=U(t[a]);t[a]=U(t[r]),t[r]=U(n)}return t}},{key:"startGame",value:function(){this.dealCards(),this.chooseTrump(),this.clearGameProps()}},{key:"dealCards",value:function(){for(var e=this.userIndex,t=this.cards.players.length,a=function(e){return e+1===t?0:e+1},r=a(e);this.cards.players[r].length<O.maxCardsAfterDealing;)this.dealOneCard(r),this.observable.update([{prop:"cards",value:this.cards}]),r=a(r)}},{key:"chooseTrump",value:function(){var e=U(this.cards.deck),t=Math.floor(Math.random()*e.length),a=e[t];e[t]=e[0],e[0]=Object(c.a)({},a,{trump:!0}),this.cards=Object(c.a)({},this.cards,{deck:e}),this.trumpSuit=a.suit,this.sortPlayerCards(),this.observable.update([{prop:"cards",value:this.cards},{prop:"trumpSuit",value:this.trumpSuit}])}},{key:"dealOneCard",value:function(e){var t=U(this.cards.deck),a=U(this.cards.players),r=t.pop();a[e].push(r),this.cards=Object(c.a)({},this.cards,{deck:t,players:a}),this.sortPlayerCards()}},{key:"sortPlayerCards",value:function(){var e=this,t=function(t){return t.suit===e.trumpSuit},a=U(this.cards.players),r=!0,n=!1,i=void 0;try{for(var s,l=a[Symbol.iterator]();!(r=(s=l.next()).done);r=!0){s.value.sort(function(a,r){return n=a,i=r,!e.trumpSuit||t(n)&&t(i)||!t(n)&&!t(i)?a.value-r.value:t(a)&&!t(r)?1:!t(a)&&t(r)?-1:0;var n,i})}}catch(u){n=!0,i=u}finally{try{r||null==l.return||l.return()}finally{if(n)throw i}}this.cards=Object(c.a)({},this.cards,{players:a})}},{key:"clearGameProps",value:function(){this.defendSucceed=null}},{key:"startTrick",value:function(){if(this.getNumberOfActivePlayers()<2)this.endGame();else if(this.updateActivePlayers(),this.updateAttackerAndDefender(),this.updateMaxAttacks(),this.attacker===this.userIndex)this.sendPossibleCardsToUser();else{var e=this.makeDecision(this.attacker);this.makeMove(this.attacker,e),this.updateActivePlayerTimers()}}},{key:"getNumberOfActivePlayers",value:function(){return this.cards.players.filter(function(e){return e.length}).length}},{key:"updateActivePlayers",value:function(){var e=[],t=!0,a=!1,r=void 0;try{for(var n,i=this.cards.players.entries()[Symbol.iterator]();!(t=(n=i.next()).done);t=!0){var s=n.value,l=Object(M.a)(s,2),u=l[0];if(l[1].length){var o={index:u};u===this.userIndex?o.pass=!1:(o.timer=null,o.rejected=[]),e.push(o)}}}catch(h){a=!0,r=h}finally{try{t||null==i.return||i.return()}finally{if(a)throw r}}var d=this;this.activePlayers={players:e,isPlayerInGame:function(e){return!!this.players.filter(function(t){return t.index===e})[0]},getNextIndex:function(e){var t,a=this.players.map(function(e){return e.index}),r=!0,n=!1,i=void 0;try{for(var s,l=a[Symbol.iterator]();!(r=(s=l.next()).done);r=!0){var c=s.value;if(c>e){t=c;break}}}catch(h){n=!0,i=h}finally{try{r||null==l.return||l.return()}finally{if(n)throw i}}return void 0===t&&(t=a[0]),t},playersDontHaveTimers:function(){return!this.players.filter(function(e){return e.timer}).length},userPass:function(){this.players=this.players.map(function(e){return e.index===d.userIndex?Object(c.a)({},e,{pass:!0}):e})}}}},{key:"updateAttackerAndDefender",value:function(){null===this.defendSucceed?this.defineAttackerAndDefenderByLowestTrump():this.defendSucceed&&this.activePlayers.isPlayerInGame(this.defender)?this.attacker=this.defender:this.attacker=this.activePlayers.getNextIndex(this.defender),this.defender=this.activePlayers.getNextIndex(this.attacker),this.observable.update([{prop:"attacker",value:this.attacker},{prop:"defender",value:this.defender}])}},{key:"defineAttackerAndDefenderByLowestTrump",value:function(){var e=this.cards.players,t=e.length,a={playerIndex:null,value:15},r=!0,n=!1,i=void 0;try{for(var s,l=e.entries()[Symbol.iterator]();!(r=(s=l.next()).done);r=!0){var c=s.value,u=Object(M.a)(c,2),o=u[0],d=u[1],h=!0,m=!1,f=void 0;try{for(var p,y=d[Symbol.iterator]();!(h=(p=y.next()).done);h=!0){var v=p.value;v.suit===this.trumpSuit&&v.value<a.value&&(a={playerIndex:o,value:v.value})}}catch(b){m=!0,f=b}finally{try{h||null==y.return||y.return()}finally{if(m)throw f}}}}catch(b){n=!0,i=b}finally{try{r||null==l.return||l.return()}finally{if(n)throw i}}if(null!==a.playerIndex)this.attacker=a.playerIndex;else{var g=Math.floor(Math.random()*t);this.attacker=g}this.defender=this.activePlayers.getNextIndex(this.attacker)}},{key:"updateMaxAttacks",value:function(){this.maxAttacks=Math.min(this.cards.players[this.defender].length,O.maxAttacks)}},{key:"sendPossibleCardsToUser",value:function(e){e||(e=this.findPossibleCards(this.userIndex)),this.observable.update([{prop:"possibleCards",value:e}])}},{key:"findPossibleCards",value:function(e){return e===this.defender?this.findCardsForDefend(e):this.findCardsForAttack(e)}},{key:"findCardsForAttack",value:function(e){var t=this.cards.table,a=this.cards.players[e];if(t.length>=this.maxAttacks)return[];if(!t.length)return a.map(function(e){return e.id});var r=[],n=!0,i=!1,s=void 0;try{for(var l,c=t[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var u=l.value;r.push.apply(r,Object(R.a)(u))}}catch(d){i=!0,s=d}finally{try{n||null==c.return||c.return()}finally{if(i)throw s}}var o=r.map(function(e){return e.rank});return a.filter(function(e){return o.includes(e.rank)}).map(function(e){return e.id})}},{key:"findCardsForDefend",value:function(e){var t=this,a=this.cards.players[e],r=this.cards.table.map(function(e,t){return{cards:e,index:t}}).filter(function(e){return 1===e.cards.length}),n=[],i=!0,s=!1,l=void 0;try{for(var c,u=function(){var e=c.value.cards[0];a.filter(function(a){return t.getHigherCard(a,e).id===a.id}).forEach(function(e){n.includes(e.id)||n.push(e.id)})},o=r[Symbol.iterator]();!(i=(c=o.next()).done);i=!0)u()}catch(d){s=!0,l=d}finally{try{i||null==o.return||o.return()}finally{if(s)throw l}}return n}},{key:"makeDecision",value:function(e){var t=this.findPossibleCards(e);if(t.length){var a=this.defender===e,r=!this.cards.table.length,n=!!this.cards.deck.length,i=this.cards.table.filter(function(e){return 1===e.length}),s=t[0],l=this.getCardById(s),c=!1;return a?(t.length<i.length&&(c=!0),n&&l.suit===this.trumpSuit&&l.value>10&&(c=!0)):r||n&&l.suit===this.trumpSuit&&(c=!0),c?null:s}}},{key:"makeMove",value:function(e,t){var a=e===this.defender,r=this.getCardById(t),n=this.addCardToTable(r,a),i=this.cards.players.map(function(a,r){return r===e?a.filter(function(e){return e.id!==t}):a});this.cards=Object(c.a)({},this.cards,{table:n,players:i}),this.observable.update([{prop:"cards",value:this.cards}])}},{key:"addCardToTable",value:function(e,t){var a=this,r=U(this.cards.table);if(t){var n=[];r.forEach(function(t,r){1===t.length&&a.getHigherCard(e,t[0]).id===e.id&&n.push(r)});var i=Math.floor(Math.random()*n.length),s=n[i];return r.map(function(t,a){return a===s?[].concat(Object(R.a)(t),[e]):t})}return[].concat(Object(R.a)(this.cards.table),[[e]])}},{key:"getCardById",value:function(e){for(var t in this.cards){var a=!0,r=!1,n=void 0;try{for(var i,s=this.cards[t][Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var l=i.value;if(l instanceof Array){var c=!0,u=!1,o=void 0;try{for(var d,h=l[Symbol.iterator]();!(c=(d=h.next()).done);c=!0){var m=d.value;if(m.id===e)return m}}catch(f){u=!0,o=f}finally{try{c||null==h.return||h.return()}finally{if(u)throw o}}}else if(l.id===e)return l}}catch(f){r=!0,n=f}finally{try{a||null==s.return||s.return()}finally{if(r)throw n}}}}},{key:"getHigherCard",value:function(e,t){return e.suit===t.suit?e.value>t.value?e:t:e.suit===this.trumpSuit?e:t}},{key:"updateActivePlayerTimers",value:function(){var e=this,t=this.activePlayers.isPlayerInGame(this.userIndex),a=!t,r=!0,n=!1,i=void 0;try{for(var s,l=function(){var r=s.value;if(r.index===e.userIndex)if(r.pass)a=!0;else{var n=e.findPossibleCards(r.index);n.length||(a=!0),e.sendPossibleCardsToUser(n)}else if(!r.timer){var i=e.findPossibleCards(r.index).filter(function(e){return!r.rejected.includes(e)});if(i.length){var l=t?2e3*Math.random()+2e3:1500*Math.random()+1500;r.timer=setTimeout(function(){var t;r.timer=null;var a=e.makeDecision(r.index);a?e.makeMove(r.index,a):(t=r.rejected).push.apply(t,Object(R.a)(i)),e.updateActivePlayerTimers()},l)}}},c=this.activePlayers.players[Symbol.iterator]();!(r=(s=c.next()).done);r=!0)l()}catch(u){n=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(n)throw i}}this.activePlayers.playersDontHaveTimers()&&a&&this.endTrick()}},{key:"endTrick",value:function(){this.defendSucceed=this.cards.table.reduce(function(e,t){return 1!==t.length&&e},!0),this.clearTable(),this.drawCardsFromDeck()}},{key:"clearTable",value:function(){var e=this,t=U(this.cards.players[this.defender]),a=U(this.cards.discarded),r=!0,n=!1,i=void 0;try{for(var s,l=this.cards.table[Symbol.iterator]();!(r=(s=l.next()).done);r=!0){var u=s.value,o=!0,d=!1,h=void 0;try{for(var m,f=u[Symbol.iterator]();!(o=(m=f.next()).done);o=!0){var p=m.value;this.defendSucceed?a.push(p):t.push(p)}}catch(y){d=!0,h=y}finally{try{o||null==f.return||f.return()}finally{if(d)throw h}}}}catch(y){n=!0,i=y}finally{try{r||null==l.return||l.return()}finally{if(n)throw i}}this.cards=Object(c.a)({},this.cards,{players:this.cards.players.map(function(a,r){return r===e.defender?t:a}),discarded:a,table:[]}),this.sortPlayerCards(),this.observable.update([{prop:"cards",value:this.cards}])}},{key:"drawCardsFromDeck",value:function(){for(var e=this,t=this.cards.players.length,a=0,r=this.attacker,n=function(t,a){return e.cards.players.map(function(e,r){return t===r?a:e})};a<t;){var i=this.cards.players[r].length;if(i<O.maxCardsAfterDealing){for(var s=O.maxCardsAfterDealing-i,l=U(this.cards.players[r]),u=U(this.cards.deck),o=0;o<s;o++)if(u.length){var d=u.pop();l.push(d)}this.cards=Object(c.a)({},this.cards,{players:n(r,l),deck:u})}this.sortPlayerCards(),this.observable.update([{prop:"cards",value:this.cards}]),a++,-1===(r-=1)&&(r=t-1)}}},{key:"endGame",value:function(){var e=null,t=!0,a=!1,r=void 0;try{for(var n,i=this.cards.players.entries()[Symbol.iterator]();!(t=(n=i.next()).done);t=!0){var s=n.value,l=Object(M.a)(s,2),c=l[0];if(l[1].length){e=c;break}}}catch(u){a=!0,r=u}finally{try{t||null==i.return||i.return()}finally{if(a)throw r}}this.trumpSuit=null,this.cards={deck:[],players:[],table:[],discarded:[]},this.observable.update([{prop:"isPlaying",value:!1},{prop:"trumpSuit",value:null},{prop:"attacker",value:null},{prop:"defender",value:null},{prop:"loser",value:e}])}},{key:"makeUserMove",value:function(e){this.findPossibleCards(this.userIndex).includes(e)&&(this.makeMove(this.userIndex,e),this.updateActivePlayerTimers())}},{key:"pass",value:function(){this.activePlayers.userPass(),this.observable.update([{prop:"possibleCards",value:[]}]),this.updateActivePlayerTimers()}}]),e}(),H={functions:[],delaying:!1,add:function(e){this.functions.push(e),this.run()},run:function(){var e=this;if(this.functions.length&&!this.delaying){var t=this.functions[0];this.delaying=!0,setTimeout(function(){t(),e.functions.shift(),e.delaying=!1,e.run()},200)}}},V=(a(29),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={viewport:{width:1024,height:768},isPlaying:!1,isWaiting:!1,userIndex:0,username:"",mode:"single-player",playersNumber:2,players:[],cards:{deck:[],players:[],table:[],discarded:[]},possibleCards:[],attacker:null,defender:null,trumpSuit:null,loser:null,showButton:!1,movedCard:null,timer:null},a.timeout=null,a.gameState=null,a.cardStyles=null,a.handleStateUpdate=a.handleStateUpdate.bind(Object(m.a)(a)),a.updateViewport=a.updateViewport.bind(Object(m.a)(a)),a.startGame=a.startGame.bind(Object(m.a)(a)),a.makeMove=a.makeMove.bind(Object(m.a)(a)),a.pass=a.pass.bind(Object(m.a)(a)),a.updateCardStyles=a.updateCardStyles.bind(Object(m.a)(a)),a.addMovedCard=a.addMovedCard.bind(Object(m.a)(a)),a.removeMovedCard=a.removeMovedCard.bind(Object(m.a)(a)),a.changeName=a.changeName.bind(Object(m.a)(a)),a.changeMode=a.changeMode.bind(Object(m.a)(a)),a.changePlayersNumber=a.changePlayersNumber.bind(Object(m.a)(a)),a.saveUserSettings=a.saveUserSettings.bind(Object(m.a)(a)),a.waitUsers=a.waitUsers.bind(Object(m.a)(a)),a.cancelWaiting=a.cancelWaiting.bind(Object(m.a)(a)),a.startMultiplayGame=a.startMultiplayGame.bind(Object(m.a)(a)),a.reduceTimer=a.reduceTimer.bind(Object(m.a)(a)),a}return Object(f.a)(t,e),Object(o.a)(t,[{key:"getUserSettings",value:function(){var e=localStorage.getItem("settings");if(e){var t=JSON.parse(e),a=t.username,r=t.mode,n=t.playersNumber;this.setState({username:a,mode:r,playersNumber:n})}}},{key:"saveUserSettings",value:function(){var e=this.state,t=e.username,a=e.mode,r=e.playersNumber,n=JSON.stringify({username:t,mode:a,playersNumber:r});localStorage.setItem("settings",n)}},{key:"changeName",value:function(e){this.setState({username:e})}},{key:"changeMode",value:function(e){this.setState({mode:e})}},{key:"changePlayersNumber",value:function(e){this.setState({playersNumber:e})}},{key:"waitUsers",value:function(){this.setState({isWaiting:!0})}},{key:"cancelWaiting",value:function(){this.setState({isWaiting:!1})}},{key:"startMultiplayGame",value:function(){var e=this;this.setState({isWaiting:!1,isPlaying:!0}),v.listen(function(t,a){"message"===t&&"gameStateUpdate"===a.type&&H.add(function(){return e.handleStateUpdate(a.data.updates)})})}},{key:"addObserver",value:function(){var e=this;return this.gameState.observable.subscribe(function(t){H.add(function(){return e.handleStateUpdate(t)})})}},{key:"updateCardStyles",value:function(e,t){this.cardStyles=Object(c.a)({},this.cardStyles,Object(l.a)({},e,t))}},{key:"updateViewport",value:function(){var e=document.documentElement,t=e.clientWidth,a=e.clientHeight;this.setState({viewport:{width:t,height:a}})}},{key:"addResizeListener",value:function(){var e=this,t=!1,a=function(){t||(t=!0,setTimeout(function(){t=!1,e.updateViewport()},300))};return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}},{key:"genPlayers",value:function(e){return Array.from({length:e},function(e,t){return{name:"Player"+t}})}},{key:"handleStateUpdate",value:function(e){var t={},a=!0,r=!1,n=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var l=i.value,c=l.prop,u=l.value;t[c]=u}}catch(o){r=!0,n=o}finally{try{a||null==s.return||s.return()}finally{if(r)throw n}}this.setState(t)}},{key:"addMovedCard",value:function(e){this.setState({movedCard:e})}},{key:"removeMovedCard",value:function(){this.setState({movedCard:null})}},{key:"startGame",value:function(){var e=this.state.playersNumber;this.gameState=new z,this.unsubscribe=this.addObserver(),this.setState({isPlaying:!0,players:this.genPlayers(e)}),this.gameState.initNewGame(e),this.gameState.startGame()}},{key:"makeMove",value:function(e){"single-player"===this.state.mode?this.gameState.makeUserMove(e):v.send({type:"move",data:{cardId:e}})}},{key:"pass",value:function(){"single-player"===this.state.mode?this.gameState.pass():v.send({type:"pass"})}},{key:"skip",value:function(){v.send({type:"skip"})}},{key:"handleStartTrick",value:function(e){if("multiplayer"!==this.state.mode){var t=e.cards.table,a=this.state.cards.table,r=e.trumpSuit,n=this.state.trumpSuit;(!!t.length&&!a.length||!r&&n)&&this.gameState.startTrick()}}},{key:"handleShowButton",value:function(e){var t=e.possibleCards,a=this.state,r=a.possibleCards,n=a.cards.table,i=a.showButton;r.length&&n.length?t.length===r.length||i||this.setState({showButton:!0}):i&&this.setState({showButton:!1})}},{key:"handleEndGame",value:function(e){e.isPlaying&&!this.state.isPlaying&&("multiplayer"===this.state.mode?v.close():(this.gameState=null,this.unsubscribe()))}},{key:"reduceTimer",value:function(){var e=this.state.timer;this.setState({timer:e-1}),1===e?this.skip():this.timeout=setTimeout(this.reduceTimer,1e3)}},{key:"handleTimerUpdate",value:function(e){"multiplayer"===this.state.mode&&e.possibleCards.length!==this.state.possibleCards.length&&(this.state.possibleCards.length?(this.setState({timer:10}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(this.reduceTimer,1e3)):(this.setState({timer:null}),this.timeout&&clearTimeout(this.timeout)))}},{key:"componentDidMount",value:function(){this.updateViewport(),this.getUserSettings(),this.removeListener=this.addResizeListener()}},{key:"componentDidUpdate",value:function(e,t){this.handleStartTrick(t),this.handleShowButton(t),this.handleEndGame(t),this.handleTimerUpdate(t)}},{key:"componentWillUnmount",value:function(){this.removeListener&&this.removeListener(),this.unsubscribe&&this.unsubscribe()}},{key:"render",value:function(){var e=function(e){var t=Object(c.a)({},e,{aspectRatio:e.width/e.height}),a={width:700,height:600,playerSpace:150,aspectRatio:700/600};return t.aspectRatio>a.aspectRatio?(a.scale=t.height/a.height,a.x=(t.width-a.width*a.scale)/2,a.y=0):(a.scale=t.width/a.width,a.x=0,a.y=(t.height-a.height*a.scale)/2),a.style={transform:"translate(".concat(a.x,"px, ").concat(a.y,"px) scale(").concat(a.scale,")")},a}(this.state.viewport);return n.a.createElement(g.Provider,{value:{lang:this.props.lang,cardStyles:this.cardStyles,possibleCards:this.state.possibleCards,trumpSuit:this.state.trumpSuit,movedCard:this.state.movedCard,updateCardStyles:this.updateCardStyles,makeMove:this.makeMove,addMovedCard:this.addMovedCard,removeMovedCard:this.removeMovedCard}},n.a.createElement(k,{isPlaying:this.state.isPlaying,username:this.state.username,mode:this.state.mode,playersNumber:this.state.playersNumber,changeName:this.changeName,changeMode:this.changeMode,changePlayersNumber:this.changePlayersNumber,startGame:this.startGame,waitUsers:this.waitUsers,saveUserSettings:this.saveUserSettings}),n.a.createElement(S,{username:this.state.username,playersNumber:this.state.playersNumber,isPlaying:this.state.isPlaying,isWaiting:this.state.isWaiting,cancelWaiting:this.cancelWaiting,startMultiplayGame:this.startMultiplayGame}),n.a.createElement("svg",{className:"app"},n.a.createElement("g",{className:"field",width:e.width,height:e.height,style:e.style},n.a.createElement(C,{field:e}),n.a.createElement(D,{cards:this.state.cards,field:e,players:this.state.players,userIndex:this.state.userIndex}),n.a.createElement(B,{show:this.state.showButton,text:this.state.defender===this.state.userIndex?"ru"===this.props.lang?"\u0412\u0437\u044f\u0442\u044c":"Pick up":"ru"===this.props.lang?"\u041f\u0430\u0441":"Pass",onClick:this.state.showButton?this.pass:null}),n.a.createElement(F,{field:e,defenderIndex:this.state.defender,playersCount:this.state.players.length,userIndex:this.state.userIndex}),n.a.createElement(J,{timer:this.state.timer})),n.a.createElement(L,null)))}}]),t}(r.Component));a(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q="/ru"===window.location.pathname?"ru":"en";"ru"===q&&(document.title="\u0414\u0443\u0440\u0430\u043a"),s.a.render(n.a.createElement(V,{lang:q}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.1525e5b6.chunk.js.map