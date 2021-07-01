(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,n){e.exports=n.p+"static/media/error.22389cf4.jpg"},41:function(e,t,n){e.exports=n(71)},51:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(32),l=n.n(c),o=n(4),s=n(5),i=n(7),u=n(6),m=n(8),f=n(74),h=n(21),d=n(22),p=n(14);function v(){var e=Object(h.a)(["\n    display: flex;\n    margin: 0;\n    align-items: center;\n    color: #fff;\n    list-style-type: none;\n    li {\n        margin-right: 20px;\n        font-size: 18px;\n    }\n"]);return v=function(){return e},e}function g(){var e=Object(h.a)(["\n    font-size: 24px;\n    color: #fff;\n    margin: 0;\n"]);return g=function(){return e},e}function E(){var e=Object(h.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 80px;\n"]);return E=function(){return e},e}var b=d.a.div(E()),S=d.a.h3(g()),j=d.a.ul(v()),O=function(){return r.a.createElement(b,null,r.a.createElement(S,null,r.a.createElement(p.b,{to:"/"},"Game of Thrones DB")),r.a.createElement(j,null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/characters/"}," Characters ")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/houses/"}," Houses ")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/books/"}," Books "))))},k=(n(51),n(9)),y=n.n(k),w=n(15),C=function(){function e(){var t=this;Object(o.a)(this,e),this.getResource=function(){var e=Object(w.a)(y.a.mark(function e(n){var a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiUrlBase).concat(n));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("!!!!!! COULD NOT FETCH ".concat(t._apiUrlBase,". Error status: ").concat(a.status," !!!!!!"));case 5:return e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.getAllBooks=Object(w.a)(y.a.mark(function e(){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/books/");case 2:return n=e.sent,e.abrupt("return",n.map(t._transformBook));case 4:case"end":return e.stop()}},e,this)})),this.getBook=function(){var e=Object(w.a)(y.a.mark(function e(n){var a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/books/".concat(n,"/"));case 2:return a=e.sent,e.abrupt("return",t._transformBook(a));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(w.a)(y.a.mark(function e(){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/characters?page=5&pageSize=10");case 2:return n=e.sent,e.abrupt("return",n.map(t._transformCharacter));case 4:case"end":return e.stop()}},e,this)})),this.getCharacter=function(){var e=Object(w.a)(y.a.mark(function e(n){var a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/characters/".concat(n));case 2:return a=e.sent,e.abrupt("return",t._transformCharacter(a));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.getAllHouses=Object(w.a)(y.a.mark(function e(){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/houses/");case 2:return n=e.sent,e.abrupt("return",n.map(t._transformHouse));case 4:case"end":return e.stop()}},e,this)})),this.getHouse=function(){var e=Object(w.a)(y.a.mark(function e(n){var a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/houses/".concat(n,"/"));case 2:return a=e.sent,e.abrupt("return",t._transformHouse(a));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this._extractId=function(e){return e.url.match(/\/([0-9]*)$/)[1]},this._transformCharacter=function(e){return{id:t._extractId(e),name:t.isSet(e.name),gender:t.isSet(e.gender),born:t.isSet(e.born),died:t.isSet(e.died),culture:t.isSet(e.culture)}},this._transformHouse=function(e){return{id:t._extractId(e),name:t.isSet(e.name),region:t.isSet(e.region),words:t.isSet(e.words),titles:t.isSet(e.titles),ancestralWeapons:t.isSet(e.ancestralWeapons)}},this._transformBook=function(e){return{id:t._extractId(e),name:t.isSet(e.name),numberOfPages:t.isSet(e.numberOfPages),publisher:t.isSet(e.publisher),released:t.isSet(e.released)}},this._apiUrlBase="https://anapioficeandfire.com/api/"}return Object(s.a)(e,[{key:"isSet",value:function(e){return e||"no data :("}}]),e}(),I=(n(55),function(){return r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{className:"lds-spin"},r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null))))}),x=(n(57),n(36)),N=n.n(x),D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:N.a,alt:"error"}),r.a.createElement("span",null,"Something goes wrong"))},B=n(72),R=n(73),_=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).gotService=new C,n.state={char:{},loading:!0,error:!1},n.onCharLoaded=function(e){n.setState({char:e,loading:!1})},n.onError=function(e){n.setState({error:!0,loading:!1}),console.log(e)},n.updateChar=function(){var e=Math.floor(140*Math.random()+25);n.gotService.getCharacter(e).then(n.onCharLoaded).catch(n.onError)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updateChar(),this.timerId=setInterval(this.updateChar,2500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.char,n=e.loading,a=e.error,c=a?r.a.createElement(D,null):null,l=n?r.a.createElement(I,null):null,o=n||a?null:r.a.createElement(A,{char:t});return r.a.createElement(B.a,null,r.a.createElement(R.a,{lg:{size:5,offset:0}},r.a.createElement("div",{className:"random-block rounded"},c,l,o)))}}]),t}(a.Component),A=function(e){var t=e.char,n=t.name,a=t.gender,c=t.born,l=t.died,o=t.culture;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Random Character: ",n),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Gender "),r.a.createElement("span",null,a)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Born "),r.a.createElement("span",null,c)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Died "),r.a.createElement("span",null,l)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Culture "),r.a.createElement("span",null,o))))},H=_,L=(n(59),function(e){var t=e.onClick;return r.a.createElement("button",{className:"toggle-btn",onClick:t},"Toggle random character")}),U=n(1),P=(n(61),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={itemList:null},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;(0,this.props.getData)().then(function(t){e.setState({itemList:t})})}},{key:"renderItems",value:function(e){var t=this;return e.map(function(e){var n=e.id,a=t.props.renderItem(e);return r.a.createElement("li",{key:n,className:"list-group-item",onClick:function(){return t.props.onItemSelected(n)}},a)})}},{key:"render",value:function(){var e=this.state.itemList;if(!e)return r.a.createElement(I,null);var t=this.renderItems(e);return r.a.createElement("ul",{className:"item-list list-group"},t)}}]),t}(a.Component)),T=(n(63),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={item:null,error:!1},n.updateItem=function(){n.setState(function(e){var t=n.props;(0,t.getData)(t.itemId).then(function(e){return n.setState({item:e})})})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){this.props.itemId!==e.itemId&&this.updateItem()}},{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){if(!this.state.item)return r.a.createElement("span",{className:"spanUnselected"},"Please Select SomeThing From ItemList...");if(this.state.error)return r.a.createElement(D,null);var e=this.state.item,t=e.name;return r.a.createElement("div",{className:"char-details rounded"},r.a.createElement("h4",null," ",t," "),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.Children.map(this.props.children,function(t){return r.a.cloneElement(t,{item:e})})))}}]),t}(a.Component)),W=function(e){var t=e.left,n=e.right;return r.a.createElement(B.a,null,r.a.createElement(R.a,{md:"6"},t),r.a.createElement(R.a,{md:"6"},n))},M=function(e){var t=e.item,n=e.field,a=e.label;return r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"}," ",a," "),r.a.createElement("span",null,t[n]))},z=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).gotService=new C,n.state={selectedChar:null,error:!1},n.onItemSelected=function(e){n.setState({selectedChar:e})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){if(this.state.error)return r.a.createElement(D,null);var e=r.a.createElement(P,{onItemSelected:this.onItemSelected,getData:this.gotService.getAllCharacters,renderItem:function(e){var t=e.name;return"".concat(t)}}),t=r.a.createElement(T,{itemId:this.state.selectedChar,getData:this.gotService.getCharacter},r.a.createElement(M,{field:"gender",label:"Gender"}),r.a.createElement(M,{field:"born",label:"Born"}),r.a.createElement(M,{field:"died",label:"Died"}),r.a.createElement(M,{field:"culture",label:"Culture"}));return r.a.createElement(W,{left:e,right:t})}}]),t}(a.Component),F=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).gotService=new C,n.state={selectedBook:null,error:!1},n.onItemSelected=function(e){n.setState({selectedBook:e})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e){this.setState({error:!0}),console.log(e)}},{key:"render",value:function(){if(this.state.error)return r.a.createElement(D,null);var e=r.a.createElement(P,{onItemSelected:this.onItemSelected,getData:this.gotService.getAllBooks,renderItem:function(e){var t=e.name;return"".concat(t)}}),t=r.a.createElement(T,{itemId:this.state.selectedBook,getData:this.gotService.getBook},r.a.createElement(M,{field:"numberOfPages",label:"Pages Number:"}),r.a.createElement(M,{field:"publisher",label:"Publisher:"}),r.a.createElement(M,{field:"released",label:"Released:"}));return r.a.createElement(W,{left:e,right:t})}}]),t}(a.Component),G=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).gotService=new C,n.state={selectedHouse:null,error:!1},n.onItemSelected=function(e){n.setState({selectedHouse:e})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){if(this.state.error)return r.a.createElement(D,null);var e=r.a.createElement(P,{onItemSelected:this.onItemSelected,getData:this.gotService.getAllHouses,renderItem:function(e){var t=e.name;return"".concat(t)}}),t=r.a.createElement(T,{itemId:this.state.selectedHouse,getData:this.gotService.getHouse},r.a.createElement(M,{field:"region",label:"Region"}),r.a.createElement(M,{field:"words",label:"Words"}),r.a.createElement(M,{field:"titles",label:"Titles"}),r.a.createElement(M,{field:"ancestralWeapons",label:"Ancestral Weapons"}));return r.a.createElement(W,{left:e,right:t})}}]),t}(a.Component),J=(a.Component,n(65),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).gotService=new C,n.state={showRandomChar:!0,error:!1,selectedItem:null},n.toggleRandomChar=function(){n.setState({showRandomChar:!n.state.showRandomChar})},n.onItemSelected=function(e){n.setState({selectedItem:e})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(){console.log("error"),this.setState({error:!0})}},{key:"render",value:function(){var e=this.state.showRandomChar?r.a.createElement(H,null):null;return this.state.error?r.a.createElement(D,null):r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(f.a,null,r.a.createElement(O,null)),r.a.createElement(f.a,null,e,r.a.createElement(L,{onClick:this.toggleRandomChar}),r.a.createElement(U.a,{path:"/characters",component:z}),r.a.createElement(U.a,{path:"/houses",component:G}),r.a.createElement(U.a,{path:"/books",component:F}))))}}]),t}(a.Component));n(67),n(69);l.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[41,2,1]]]);
//# sourceMappingURL=main.78e04dcc.chunk.js.map