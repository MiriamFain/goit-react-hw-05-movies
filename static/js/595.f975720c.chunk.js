"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[595],{595:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r,a,c,i=n(885),s=n(791),o=n(390),u=n(689),p=n(168),d=n(444),f=(0,d.ZP)("li")(r||(r=(0,p.Z)(["\n  list-style: none;\n"]))),l=(0,d.ZP)("img")(a||(a=(0,p.Z)(["\n  width: 120px;\n"]))),h=(0,d.ZP)("ul")(c||(c=(0,p.Z)(["\n  padding: 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  gap: 10px;\n  text-align: center;\n  font-size: 11px;\n"]))),v=n(184),g=function(e){var t=e.cast.map((function(e){var t=e.character,n=e.profile_path,r=e.name,a=e.id;return(0,v.jsxs)(f,{children:[n&&(0,v.jsx)(l,{src:"https://image.tmdb.org/t/p/w500".concat(n),alt:r}),(0,v.jsx)("p",{children:r}),(0,v.jsxs)("p",{children:["Character: ",t]})," "]},a)}));return(0,v.jsx)(h,{children:t})},m=n(198),x=function(){var e=(0,s.useState)(null),t=(0,i.Z)(e,2),n=t[0],r=t[1],a=(0,s.useState)("idle"),c=(0,i.Z)(a,2),p=c[0],d=c[1],f=(0,s.useState)(""),l=(0,i.Z)(f,2),h=l[0],x=l[1],w=u.UO.moviesId;return(0,s.useEffect)((function(){o.b.getMovieById(w,"/credits").then((function(e){r(e.cast),d("resolved")})).catch((function(e){x("Sorry, we can't find information about this movie.."),d("rejected"),console.log(e.message)}))}),[w]),(0,v.jsxs)(m.W,{children:["resolved"===p&&(0,v.jsx)(g,{cast:n}),"rejected"===p&&(0,v.jsx)("p",{children:h})]})}},198:function(e,t,n){n.d(t,{W:function(){return o}});var r,a=n(168),c=n(444),i=n(184),s=(0,c.ZP)("section")(r||(r=(0,a.Z)(["\n  padding: 20px 30px;\n  text-align: center;\n"]))),o=function(e){var t=e.children;return(0,i.jsx)(s,{children:t})}},390:function(e,t,n){n.d(t,{b:function(){return f}});var r=n(861),a=n(757),c=n.n(a),i=n(44),s="e70bd309128506851c85e884e52b1998",o="https://api.themoviedb.org/3/",u=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(o,"trending/movie/day"),{params:{api_key:s}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(o,"search/movie"),{params:{query:t,api_key:s}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"",e.prev=1,e.next=4,i.Z.get("".concat(o,"movie/").concat(t).concat(n),{params:{api_key:s}});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),f={getTrending:u,getSearchMovies:p,getMovieById:d}}}]);
//# sourceMappingURL=595.f975720c.chunk.js.map