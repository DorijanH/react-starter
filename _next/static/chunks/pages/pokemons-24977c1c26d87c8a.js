(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43],{975:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pokemons",function(){return a(7887)}])},7887:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ec}});var i=a(5893),n=a(7294),o=a(1217),r=a(1664),s=a.n(r),l=a(5675),c=a.n(l),u=a(6042),d=a(6010),p=a(2793),g=a(1048),h=a(4780),m=a(4135),v=a(1588),f=a(4867);function b(e){return(0,f.Z)("MuiPagination",e)}(0,v.Z)("MuiPagination",["root","ul","outlined","text"]);var Z=a(8925);let x=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];var y=a(1796);function k(e){return(0,f.Z)("MuiPaginationItem",e)}let _=(0,v.Z)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]);var P=a(2097),w=a(9828),L=a(6622),C=a(8175),O=(0,C.Z)((0,i.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),$=(0,C.Z)((0,i.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),N=(0,C.Z)((0,i.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),z=(0,C.Z)((0,i.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),S=a(1472);let M=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],j=(e,t)=>{let{ownerState:a}=e;return[t.root,t[a.variant],t[`size${(0,L.Z)(a.size)}`],"text"===a.variant&&t[`text${(0,L.Z)(a.color)}`],"outlined"===a.variant&&t[`outlined${(0,L.Z)(a.color)}`],"rounded"===a.shape&&t.rounded,"page"===a.type&&t.page,("start-ellipsis"===a.type||"end-ellipsis"===a.type)&&t.ellipsis,("previous"===a.type||"next"===a.type)&&t.previousNext,("first"===a.type||"last"===a.type)&&t.firstLast]},R=e=>{let{classes:t,color:a,disabled:i,selected:n,size:o,shape:r,type:s,variant:l}=e,c={root:["root",`size${(0,L.Z)(o)}`,l,r,"standard"!==a&&`${l}${(0,L.Z)(a)}`,i&&"disabled",n&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[s]],icon:["icon"]};return(0,h.Z)(c,k,t)},E=(0,S.ZP)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:j})(({theme:e,ownerState:t})=>(0,p.Z)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,height:"auto",[`&.${_.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"small"===t.size&&{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===t.size&&{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)})),T=(0,S.ZP)(w.Z,{name:"MuiPaginationItem",slot:"Root",overridesResolver:j})(({theme:e,ownerState:t})=>(0,p.Z)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,[`&.${_.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${_.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${_.selected}`]:{backgroundColor:(e.vars||e).palette.action.selected,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selected} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,y.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(e.vars||e).palette.action.selected}},[`&.${_.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selected} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,y.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},[`&.${_.disabled}`]:{opacity:1,color:(e.vars||e).palette.action.disabled,backgroundColor:(e.vars||e).palette.action.selected}}},"small"===t.size&&{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===t.size&&{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)},"rounded"===t.shape&&{borderRadius:(e.vars||e).shape.borderRadius}),({theme:e,ownerState:t})=>(0,p.Z)({},"text"===t.variant&&{[`&.${_.selected}`]:(0,p.Z)({},"standard"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}},[`&.${_.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}},{[`&.${_.disabled}`]:{color:(e.vars||e).palette.action.disabled}})},"outlined"===t.variant&&{border:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${"light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${_.selected}`]:(0,p.Z)({},"standard"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:(0,y.Fq)(e.palette[t.color].main,.5)}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.activatedOpacity})`:(0,y.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,y.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${_.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,y.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity)}},{[`&.${_.disabled}`]:{borderColor:(e.vars||e).palette.action.disabledBackground,color:(e.vars||e).palette.action.disabled}})})),B=(0,S.ZP)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(e,t)=>t.icon})(({theme:e,ownerState:t})=>(0,p.Z)({fontSize:e.typography.pxToRem(20),margin:"0 -8px"},"small"===t.size&&{fontSize:e.typography.pxToRem(18)},"large"===t.size&&{fontSize:e.typography.pxToRem(22)})),F=n.forwardRef(function(e,t){let a=(0,m.Z)({props:e,name:"MuiPaginationItem"}),{className:n,color:o="standard",component:r,components:s={},disabled:l=!1,page:c,selected:u=!1,shape:h="circular",size:v="medium",slots:f={},type:b="page",variant:Z="text"}=a,x=(0,g.Z)(a,M),y=(0,p.Z)({},a,{color:o,disabled:l,selected:u,shape:h,size:v,type:b,variant:Z}),k=(0,P.Z)(),_=R(y),w="rtl"===k.direction?{previous:f.next||s.next||z,next:f.previous||s.previous||N,last:f.first||s.first||O,first:f.last||s.last||$}:{previous:f.previous||s.previous||N,next:f.next||s.next||z,first:f.first||s.first||O,last:f.last||s.last||$},L=w[b];return"start-ellipsis"===b||"end-ellipsis"===b?(0,i.jsx)(E,{ref:t,ownerState:y,className:(0,d.Z)(_.root,n),children:"…"}):(0,i.jsxs)(T,(0,p.Z)({ref:t,ownerState:y,component:r,disabled:l,className:(0,d.Z)(_.root,n)},x,{children:["page"===b&&c,L?(0,i.jsx)(B,{as:L,ownerState:y,className:_.icon}):null]}))}),I=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],W=e=>{let{classes:t,variant:a}=e;return(0,h.Z)({root:["root",a],ul:["ul"]},b,t)},q=(0,S.ZP)("nav",{name:"MuiPagination",slot:"Root",overridesResolver(e,t){let{ownerState:a}=e;return[t.root,t[a.variant]]}})({}),V=(0,S.ZP)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(e,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function D(e,t,a){return"page"===e?`${a?"":"Go to "}page ${t}`:`Go to ${e} page`}let A=n.forwardRef(function(e,t){let a=(0,m.Z)({props:e,name:"MuiPagination"}),{boundaryCount:n=1,className:o,color:r="standard",count:s=1,defaultPage:l=1,disabled:c=!1,getItemAriaLabel:u=D,hideNextButton:h=!1,hidePrevButton:v=!1,renderItem:f=e=>(0,i.jsx)(F,(0,p.Z)({},e)),shape:b="circular",showFirstButton:y=!1,showLastButton:k=!1,siblingCount:_=1,size:P="medium",variant:w="text"}=a,L=(0,g.Z)(a,I),{items:C}=function(e={}){let{boundaryCount:t=1,componentName:a="usePagination",count:i=1,defaultPage:n=1,disabled:o=!1,hideNextButton:r=!1,hidePrevButton:s=!1,onChange:l,page:c,showFirstButton:u=!1,showLastButton:d=!1,siblingCount:h=1}=e,m=(0,g.Z)(e,x),[v,f]=(0,Z.Z)({controlled:c,default:n,name:a,state:"page"}),b=(e,t)=>{c||f(t),l&&l(e,t)},y=(e,t)=>Array.from({length:t-e+1},(t,a)=>e+a),k=y(1,Math.min(t,i)),_=y(Math.max(i-t+1,t+1),i),P=Math.max(Math.min(v-h,i-t-2*h-1),t+2),w=Math.min(Math.max(v+h,t+2*h+2),_.length>0?_[0]-2:i-1),L=[...u?["first"]:[],...s?[]:["previous"],...k,...P>t+2?["start-ellipsis"]:t+1<i-t?[t+1]:[],...y(P,w),...w<i-t-1?["end-ellipsis"]:i-t>t?[i-t]:[],..._,...r?[]:["next"],...d?["last"]:[]],C=e=>{switch(e){case"first":return 1;case"previous":return v-1;case"next":return v+1;case"last":return i;default:return null}},O=L.map(e=>"number"==typeof e?{onClick(t){b(t,e)},type:"page",page:e,selected:e===v,disabled:o,"aria-current":e===v?"true":void 0}:{onClick(t){b(t,C(e))},type:e,page:C(e),selected:!1,disabled:o||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?v>=i:v<=1)});return(0,p.Z)({items:O},m)}((0,p.Z)({},a,{componentName:"Pagination"})),O=(0,p.Z)({},a,{boundaryCount:n,color:r,count:s,defaultPage:l,disabled:c,getItemAriaLabel:u,hideNextButton:h,hidePrevButton:v,renderItem:f,shape:b,showFirstButton:y,showLastButton:k,siblingCount:_,size:P,variant:w}),$=W(O);return(0,i.jsx)(q,(0,p.Z)({"aria-label":"pagination navigation",className:(0,d.Z)($.root,o),ownerState:O,ref:t},L,{children:(0,i.jsx)(V,{className:$.ul,ownerState:O,children:C.map((e,t)=>(0,i.jsx)("li",{children:f((0,p.Z)({},e,{color:r,"aria-label":u(e.type,e.page,e.selected),shape:b,size:P,variant:w}))},t))})}))});var U=a(6247),H=a.n(U),G=function(e){var t=e.classes,a=void 0===t?{}:t,n=function(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}(e,["classes"]);return(0,i.jsx)(A,(0,u.Z)({classes:{root:a.root,ul:(0,d.Z)(a.ul,H().pagesList)}},n))},X=a(7568),J=a(1438),K=a(2951),Q=a(4924),Y=a(414),ee=a(8949),et=a(5785),ea=a(8688),ei=function(){function e(){(0,J.Z)(this,e),(0,Q.Z)(this,"isFirstLoad",void 0),(0,Q.Z)(this,"isLoading",void 0),(0,Q.Z)(this,"pokemons",void 0),(0,Q.Z)(this,"pageNumber",void 0),(0,Q.Z)(this,"pageSize",void 0),(0,Q.Z)(this,"totalPokemons",void 0),this.isFirstLoad=!0,this.isLoading=!0,this.pokemons=[],this.pageNumber=0,this.pageSize=10,this.totalPokemons=0,(0,ee.rC)(this,{isFirstLoad:ee.LO,isLoading:ee.LO,pokemons:ee.LO,pageNumber:ee.LO,pageSize:ee.LO,totalPokemons:ee.LO,loadPokemons:ee.aD.bound})}return(0,K.Z)(e,[{key:"loadPokemons",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.pageNumber,t=this;return(0,X.Z)(function(){var a,i,n,o;return(0,Y.__generator)(this,function(r){switch(r.label){case 0:if(!t.isFirstLoad&&t.isLoading||e<0)return[2];t.isLoading=!0,r.label=1;case 1:return r.trys.push([1,3,,4]),a={offset:e*t.pageSize,limit:t.pageSize},[4,et.Z.getPokemons(a)];case 2:return n=(i=r.sent()).results,o=i.count,(0,ee.z)(function(){t.pokemons=n,t.pageNumber=e,t.totalPokemons=o}),[3,4];case 3:return r.sent(),ea.Z.showDefaultErrorNotification(),[3,4];case 4:return(0,ee.z)(function(){t.isLoading=!1}),[2]}})})()}}],[{key:"instance",get:function(){return null===e._viewModel&&(e._viewModel=new e),e._viewModel}}]),e}();(0,Q.Z)(ei,"_viewModel",null);var en=a(6925),eo=a(5271),er=a.n(eo),es=(0,en.Wc)((0,o.Pi)(function(e){var t=e.viewModel,a=t.pokemons,o=t.loadPokemons,r=t.pageNumber,l=t.pageSize,u=t.totalPokemons;(0,n.useEffect)(function(){0===r&&o()},[]);var d=function(e,t){o(t-1)};return(0,i.jsxs)("div",{className:er().container,children:[(0,i.jsx)("div",{className:er().list,children:a.map(function(e){return(0,i.jsx)(s(),{href:"/pokemons/[id]",as:"/pokemons/".concat(e.id),passHref:!0,children:(0,i.jsxs)("div",{className:er().item,children:[(0,i.jsx)("div",{className:er().imageWrapper,children:(0,i.jsx)(c(),{src:e.image,alt:e.name,width:36,height:36})}),(0,i.jsx)("span",{className:er().name,children:e.name})]})},e.id)})}),(0,i.jsx)(G,{color:"primary",count:Math.max(1,Math.ceil(u/l)),onChange:d,page:r+1,siblingCount:2})]})}),ei);function el(){return(0,i.jsx)(es,{})}el.title="Pokemons",el.showUser=!0;var ec=el},5785:function(e,t,a){"use strict";a.d(t,{Z:function(){return b}});var i=a(7568),n=a(1438),o=a(2951),r=a(6042),s=a(9396),l=a(414),c=a(4924),u=a(2670),d=a(594),p=a(4155).env.NEXT_PUBLIC_LOCAL_SERVER;d.Z.interceptors.response.use(function(e){return e},function(e){return e});var g=function(){function e(){(0,n.Z)(this,e)}return(0,o.Z)(e,null,[{key:"_request",value:function(t,a,n,o){return(0,i.Z)(function(){var i;return(0,l.__generator)(this,function(l){return i={url:"".concat(e._getBaseUrl()).concat(a),method:t,headers:(0,r.Z)({},e._getDefaultHeaders(),o)},"get"!==t.toLowerCase()?i=(0,s.Z)((0,r.Z)({},i),{data:n}):(0,u.Z)(n,String)?i=n:(0,u.Z)(n,Object)&&(i=(0,s.Z)((0,r.Z)({},i),{params:n})),[2,(0,d.Z)(i)]})})()}},{key:"get",value:function(t,a,n){return(0,i.Z)(function(){return(0,l.__generator)(this,function(i){return[2,e._request("get",t,a,n,{})]})})()}},{key:"post",value:function(t,a,n,o){return(0,i.Z)(function(){return(0,l.__generator)(this,function(i){return[2,e._request("post",t,a,n,o)]})})()}},{key:"put",value:function(t,a,n){return(0,i.Z)(function(){return(0,l.__generator)(this,function(i){return[2,e._request("put",t,a,n)]})})()}},{key:"delete",value:function(t,a,n){return(0,i.Z)(function(){return(0,l.__generator)(this,function(i){return[2,e._request("delete",t,a,n)]})})()}}]),e}();(0,c.Z)(g,"_getBaseUrl",function(){return p?"https://localhost:5001/v1/":"https://pokeapi.co/api/v2/"}),(0,c.Z)(g,"_getDefaultHeaders",function(){});var h=a(9815),m=function(){function e(){(0,n.Z)(this,e),(0,c.Z)(this,"id",void 0),(0,c.Z)(this,"name",void 0),(0,c.Z)(this,"height",void 0),(0,c.Z)(this,"weight",void 0),(0,c.Z)(this,"abilities",void 0),(0,c.Z)(this,"baseExperience",void 0),(0,c.Z)(this,"image",void 0)}return(0,o.Z)(e,[{key:"clone",value:function(){var t=new e;return t.id=this.id,t.name=this.name,t.height=this.height,t.weight=this.weight,t.abilities=(0,h.Z)(this.abilities),t.baseExperience=this.baseExperience,t.image=this.image,t}}]),e}(),v=function(){function e(){(0,n.Z)(this,e),(0,c.Z)(this,"id",void 0),(0,c.Z)(this,"name",void 0),(0,c.Z)(this,"height",void 0),(0,c.Z)(this,"weight",void 0),(0,c.Z)(this,"abilities",void 0),(0,c.Z)(this,"baseExperience",void 0),(0,c.Z)(this,"image",void 0)}return(0,o.Z)(e,[{key:"clone",value:function(){var t=new e;return t.id=this.id,t.name=this.name,t.height=this.height,t.weight=this.weight,t.abilities=(0,h.Z)(this.abilities),t.baseExperience=this.baseExperience,t.image=this.image,t}}]),e}(),f=function(){function e(){(0,n.Z)(this,e)}return(0,o.Z)(e,null,[{key:"mapDtosToPokemons",value:function(e){return e.map(function(e){var t=e.url.split("/"),a=new v;return a.id=t[t.length-2],a.name=e.name,a.image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(String(a.id).padStart(3,"0"),".png"),a})}},{key:"mapDtoToSinglePokemon",value:function(e){var t=new m;return t.id=e.id,t.name=e.name,t.height=e.height,t.weight=e.weight,t.abilities=e.abilities.map(function(e){return e.ability.name}),t.baseExperience=e.base_experience,t.image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(String(t.id).padStart(3,"0"),".png"),t}}]),e}(),b=function(){function e(){(0,n.Z)(this,e)}return(0,o.Z)(e,null,[{key:"getPokemons",value:function(e){return(0,i.Z)(function(){var t;return(0,l.__generator)(this,function(a){switch(a.label){case 0:return[4,g.get("pokemon",e)];case 1:return t=a.sent().data,[2,(0,s.Z)((0,r.Z)({},t),{results:f.mapDtosToPokemons(t.results)})]}})})()}},{key:"getSinglePokemon",value:function(e){return(0,i.Z)(function(){var t;return(0,l.__generator)(this,function(a){switch(a.label){case 0:return[4,g.get("pokemon/".concat(e))];case 1:return t=a.sent().data,[2,f.mapDtoToSinglePokemon(t)]}})})()}}]),e}()},6247:function(e){e.exports={pagesList:"Pagination_pagesList__L4RIk"}},5271:function(e){e.exports={container:"PokemonsView_container__66yTP",list:"PokemonsView_list__wGu4Z",item:"PokemonsView_item__8tvN_",imageWrapper:"PokemonsView_imageWrapper__R9v8_",name:"PokemonsView_name__TeSWZ"}}},function(e){e.O(0,[664,313,774,888,179],function(){return e(e.s=975)}),_N_E=e.O()}]);