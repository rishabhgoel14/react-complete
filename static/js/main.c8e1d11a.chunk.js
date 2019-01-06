(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"n",function(){return a}),n.d(t,"p",function(){return o}),n.d(t,"f",function(){return i}),n.d(t,"k",function(){return c}),n.d(t,"l",function(){return u}),n.d(t,"j",function(){return l}),n.d(t,"m",function(){return s}),n.d(t,"h",function(){return d}),n.d(t,"i",function(){return p}),n.d(t,"g",function(){return h}),n.d(t,"d",function(){return m}),n.d(t,"e",function(){return f}),n.d(t,"b",function(){return g}),n.d(t,"c",function(){return b}),n.d(t,"o",function(){return E});var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAILED",c="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",l="PURCHASE_BURGER_FAIL",s="PURCHASE_INIT",d="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",h="FETCH_ORDERS_FAIL",m="AUTH_START",f="AUTH_SUCCESS",g="AUTH_FAIL",b="AUTH_LOGOUT",E="SET_AUTH_REDIRECT_PATH"},function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return o});var r=n(19),a=function(e,t){return Object(r.a)({},e,t)},o=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,function(e,t,n){"use strict";var r=n(2),a=n(18),o=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.n,ingredientName:e}},c=function(){return function(e){a.a.get("https://param-burger-app.firebaseio.com/ingredients.json").then(function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))}).catch(function(t){e({type:r.f})})}},u=n(19),l=function(e,t){return function(n){n({type:r.k}),a.a.post("/orders.json?auth="+t,e).then(function(t){n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(t.data.name,e))}).catch(function(e){n(function(e){return{type:r.j,error:e}}(e))})}},s=function(){return{type:r.m}},d=function(e,t){return function(n){n({type:r.h});var o="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("/orders.json"+o).then(function(e){var t,a=[];for(var o in e.data)a.push(Object(u.a)({},e.data[o],{id:o}));n((t=a,{type:r.i,orders:t}))}).catch(function(e){var t;n((t=e,{type:r.g,error:t}))})}},p=n(29),h=n.n(p),m=function(e,t){return{type:r.e,idToken:e,userId:t}},f=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},g=function(e){return function(t){setTimeout(function(){t(f())},1e3*e)}},b=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBa_AdSETR2Q1396C0mKPplB_uarxEnkwM";n||(i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBa_AdSETR2Q1396C0mKPplB_uarxEnkwM"),h.a.post(i,o).then(function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(m(e.data.idToken,e.data.localId)),a(g(e.data.expiresIn))}).catch(function(e){var t;a((t=e.response.data.error,{type:r.b,error:t}))})}},E=function(e){return{type:r.o,path:e}},_=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(f());else{var r=localStorage.getItem("userId");e(m(t,r)),e(g((n.getTime()-(new Date).getTime())/1e3))}}else e(f())}};n.d(t,"a",function(){return o}),n.d(t,"i",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"g",function(){return l}),n.d(t,"h",function(){return s}),n.d(t,"d",function(){return d}),n.d(t,"b",function(){return b}),n.d(t,"f",function(){return f}),n.d(t,"j",function(){return E}),n.d(t,"c",function(){return _})},function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__1CpoU",BreadTop:"BurgerIngredient_BreadTop__16enJ",Seeds1:"BurgerIngredient_Seeds1__1xlk4",Seeds2:"BurgerIngredient_Seeds2__1iM_c",Meat:"BurgerIngredient_Meat__3uHaf",Cheese:"BurgerIngredient_Cheese__2PHJE",Salad:"BurgerIngredient_Salad__1JdHp",Bacon:"BurgerIngredient_Bacon__WUc-U"}},,function(e,t,n){"use strict";var r=n(29),a=n.n(r).a.create({baseURL:"https://param-burger-app.firebaseio.com/"});t.a=a},,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__cyrkx",Open:"SideDrawer_Open__3PkuR",Close:"SideDrawer_Close__3iWqY",Logo:"SideDrawer_Logo__2UVEb"}},,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__16a9W",Label:"BuildControl_Label__1AULc",Less:"BuildControl_Less__3co7h",More:"BuildControl_More__1aDE6"}},,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(57),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(5),a=n(6),o=n(8),i=n(7),c=n(9),u=n(0),l=n.n(u),s=n(59),d=n.n(s),p=n(12),h=n(27),m=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(h.a,{show:this.props.show,clicked:this.props.modalClosed}),l.a.createElement("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(u.Component);t.a=m},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__276T_",Logo:"Toolbar_Logo__3UEnL",DesktopOnly:"Toolbar_DesktopOnly__1ixuE"}},,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(38),i=n.n(o);t.a=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},,,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__1Tdxo",active:"NavigationItem_active__1r5wL"}},function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1GJqF",OrderButton:"BuildControls_OrderButton__2SFkd",enable:"BuildControls_enable__27ZQv"}},function(e,t,n){e.exports={Button:"Button_Button__3ci9E",Success:"Button_Success__3K-rK",Danger:"Button_Danger__2tOCV"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(60),i=n.n(o);t.a=function(){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(5),a=n(6),o=n(8),i=n(7),c=n(9),u=n(0),l=n.n(u),s=n(28),d=n(12);t.a=function(e,t){return function(n){function u(){var e,t;Object(r.a)(this,u);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(u)).call.apply(e,[this].concat(a)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(c.a)(u,n),Object(a.a)(u,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(s.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),l.a.createElement(e,this.props))}}]),u}(u.Component)}},,,,,,,function(e,t,n){"use strict";var r=n(62),a=n(0),o=n.n(a),i=n(58),c=n.n(i),u=n(5),l=n(6),s=n(8),d=n(7),p=n(9),h=n(16),m=n.n(h),f=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:m.a.BreadBottom});break;case"bread-top":e=o.a.createElement("div",{className:m.a.BreadTop},o.a.createElement("div",{className:m.a.Seeds1}),o.a.createElement("div",{className:m.a.Seeds2}));break;case"meat":e=o.a.createElement("div",{className:m.a.Meat});break;case"cheese":e=o.a.createElement("div",{className:m.a.Cheese});break;case"bacon":e=o.a.createElement("div",{className:m.a.Bacon});break;case"salad":e=o.a.createElement("div",{className:m.a.Salad});break;default:e=null}return e}}]),t}(a.Component);t.a=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(r.a)(Array(e.ingredients[t])).map(function(e,n){return o.a.createElement(f,{key:t+n,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=o.a.createElement("p",null,"Please start adding ingredients!")),o.a.createElement("div",{className:c.a.Burger},o.a.createElement(f,{type:"bread-top"}),t,o.a.createElement(f,{type:"bread-bottom"}))}},,,,,function(e,t,n){e.exports={Content:"Layout_Content__3qRWK"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.64e69cfd.png"},function(e,t,n){e.exports={Logo:"Logo_Logo___NKnl"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__2JQcC"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__3ZT_6"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__1FnnH"}},function(e,t,n){e.exports={Burger:"Burger_Burger__1i3xh"}},function(e,t,n){e.exports={Modal:"Modal_Modal__2LBw7"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__2lDon",load2:"Spinner_load2__30wSl"}},,,function(e,t,n){e.exports=n(111)},,,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(48),i=n.n(o),c=n(125),u=n(14),l=n(20),s=n(51),d=(n(73),n(5)),p=n(6),h=n(8),m=n(7),f=n(9),g=n(128),b=n(80),E=n(124),_=n(129),v=function(e){return function(t){function n(){var e,t;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(h.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(a)))).state={component:null},t}return Object(f.a)(n,t),Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=this;e().then(function(e){t.setState({component:e.default})})}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),n}(r.Component)},O=n(12),y=n(52),k=n.n(y),j=n(30),w=n.n(j),C=n(53),S=n.n(C),I=n(54),B=n.n(I),N=function(e){return a.a.createElement("div",{className:B.a.Logo,style:{height:e.height}},a.a.createElement("img",{src:S.a,alt:"MyBurger"}))},T=n(55),A=n.n(T),D=n(127),R=n(36),L=n.n(R),x=function(e){return a.a.createElement("li",{className:L.a.NavigationItem},a.a.createElement(D.a,{to:e.link,exact:e.exact,activeClassName:L.a.active},e.children))},H=function(e){return a.a.createElement("ul",{className:A.a.NavigationItems},a.a.createElement(x,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?a.a.createElement(x,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(x,{link:"/logout"},"Logout"):a.a.createElement(x,{link:"/auth"},"Authenticate"))},P=n(56),U=n.n(P),M=function(e){return a.a.createElement("div",{className:U.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},F=function(e){return a.a.createElement("header",{className:w.a.Toolbar},a.a.createElement(M,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:w.a.Logo},a.a.createElement(N,null)),a.a.createElement("nav",{className:w.a.DesktopOnly},a.a.createElement(H,{isAuthenticated:e.isAuth})))},z=n(21),W=n.n(z),G=n(27),q=function(e){var t=[W.a.SideDrawer,W.a.Close];return e.open&&(t=[W.a.SideDrawer,W.a.Open]),a.a.createElement(O.a,null,a.a.createElement(G.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:W.a.Logo},a.a.createElement(N,null)),a.a.createElement("nav",null,a.a.createElement(H,{isAuthenticated:e.isAuth}))))},J=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(O.a,null,a.a.createElement(F,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(q,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:k.a.Content},this.props.children))}}]),t}(r.Component),K=Object(u.b)(function(e){return{isAuthenticated:null!==e.auth.token}})(J),Q=n(19),Y=n(47),$=n(37),V=n.n($),Z=n(23),X=n.n(Z),ee=function(e){return a.a.createElement("div",{className:X.a.BuildControl},a.a.createElement("div",{className:X.a.Label},e.label),a.a.createElement("button",{className:X.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:X.a.More,onClick:e.added},"More"))},te=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],ne=function(e){return a.a.createElement("div",{className:V.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))),te.map(function(t){return a.a.createElement(ee,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),a.a.createElement("button",{className:V.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},re=n(28),ae=n(32),oe=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])});return a.a.createElement(O.a,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(ae.a,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),a.a.createElement(ae.a,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(r.Component),ie=n(39),ce=n(40),ue=n(15),le=n(18),se=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={purchasing:!1},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0)>0}},{key:"render",value:function(){var e=Object(Q.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement("p",null,"Ingredients can't be loaded!"):a.a.createElement(ie.a,null);return this.props.ings&&(r=a.a.createElement(O.a,null,a.a.createElement(Y.a,{ingredients:this.props.ings}),a.a.createElement(ne,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated,price:this.props.price})),n=a.a.createElement(oe,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),a.a.createElement(O.a,null,a.a.createElement(re.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),t}(r.Component),de=Object(u.b)(function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}},function(e){return{onIngredientAdded:function(t){return e(ue.a(t))},onIngredientRemoved:function(t){return e(ue.i(t))},onInitIngredients:function(){return e(ue.e())},onInitPurchase:function(){return e(ue.h())},onSetAuthRedirectPath:function(t){return e(ue.j(t))}}})(Object(ce.a)(se,le.a)),pe=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(E.a,{to:"/"})}}]),t}(r.Component),he=Object(u.b)(null,function(e){return{onLogout:function(){return e(ue.f())}}})(pe),me=v(function(){return n.e(1).then(n.bind(null,126))}),fe=v(function(){return n.e(2).then(n.bind(null,130))}),ge=v(function(){return n.e(3).then(n.bind(null,123))}),be=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(g.a,null,a.a.createElement(b.a,{path:"/auth",component:ge}),a.a.createElement(b.a,{path:"/",exact:!0,component:de}),a.a.createElement(E.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(g.a,null,a.a.createElement(b.a,{path:"/checkout",component:me}),a.a.createElement(b.a,{path:"/orders",component:fe}),a.a.createElement(b.a,{path:"/logout",component:he}),a.a.createElement(b.a,{path:"/auth",component:ge}),a.a.createElement(b.a,{path:"/",exact:!0,component:de}),a.a.createElement(E.a,{to:"/"}))),a.a.createElement("div",null,a.a.createElement(K,null,e))}}]),t}(r.Component),Ee=Object(_.a)(Object(u.b)(function(e){return{isAuthenticated:null!==e.auth.token}},function(e){return{onTryAutoSignup:function(){return e(ue.c())}}})(be)),_e=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Oe=n(22),ye=n(2),ke=n(3),je={ingredients:null,totalPrice:4,error:!1,building:!1},we={salad:.5,cheese:.4,meat:1.3,bacon:.7},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye.a:return function(e,t){var n=Object(Oe.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(ke.b)(e.ingredients,n),totalPrice:e.totalPrice+we[t.ingredientName],building:!0};return Object(ke.b)(e,r)}(e,t);case ye.n:return function(e,t){var n=Object(Oe.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(ke.b)(e.ingredients,n),totalPrice:e.totalPrice+we[t.ingredientName],building:!0};return Object(ke.b)(e,r)}(e,t);case ye.p:return function(e,t){return Object(ke.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})}(e,t);case ye.f:return function(e,t){return Object(ke.b)(e,{error:!0})}(e);default:return e}},Se={orders:[],loading:!1,purchased:!1},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye.m:return function(e,t){return Object(ke.b)(e,{purchased:!1})}(e);case ye.k:return function(e,t){return Object(ke.b)(e,{loading:!0})}(e);case ye.l:return function(e,t){var n=Object(ke.b)(t.orderData,{id:t.orderId});return Object(ke.b)(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})}(e,t);case ye.j:return function(e,t){return Object(ke.b)(e,{loading:!1})}(e);case ye.h:return function(e,t){return Object(ke.b)(e,{loading:!0})}(e);case ye.i:return function(e,t){return Object(ke.b)(e,{orders:t.orders,loading:!1})}(e,t);case ye.g:return function(e,t){return Object(ke.b)(e,{loading:!1})}(e);default:return e}},Be={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye.d:return function(e,t){return Object(ke.b)(e,{error:null,loading:!0})}(e);case ye.e:return function(e,t){return Object(ke.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})}(e,t);case ye.b:return function(e,t){return Object(ke.b)(e,{error:t.error,loading:!1})}(e,t);case ye.c:return function(e,t){return Object(ke.b)(e,{token:null,userId:null})}(e);case ye.o:return function(e,t){return Object(ke.b)(e,{authRedirectPath:t.path})}(e,t);default:return e}},Te=Object(l.c)({burgerBuilder:Ce,order:Ie,auth:Ne}),Ae=Object(l.d)(Te,Object(l.a)(s.a)),De=a.a.createElement(u.a,{store:Ae},a.a.createElement(c.a,{basename:"/react-complete"},a.a.createElement(Ee,null)));i.a.render(De,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-complete",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react-complete","/service-worker.js");_e?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ve(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):ve(e)})}}()}],[[63,5,4]]]);
//# sourceMappingURL=main.c8e1d11a.chunk.js.map