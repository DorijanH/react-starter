(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[699],{8318:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pokemons/[id]",function(){return t(6730)}])},6730:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return H}});var s=t(5893),n=t(7294),a=t(6670),r=t(1163),o=t(1664),c=t.n(o),l=t(5675),h=t.n(l),d=t(1048),u=t(2793),m=t(6010),p=t(4780),g=t(917),v=t(8216),f=t(4502),k=t(8271),x=t(1588),_=t(4867);function w(e){return(0,_.Z)("MuiCircularProgress",e)}(0,x.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);let b=["className","color","disableShrink","size","style","thickness","value","variant"],Z=e=>e,j,y,P,N,D=(0,g.F4)(j||(j=Z`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),E=(0,g.F4)(y||(y=Z`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),S=e=>{let{classes:i,variant:t,color:s,disableShrink:n}=e,a={root:["root",t,`color${(0,v.Z)(s)}`],svg:["svg"],circle:["circle",`circle${(0,v.Z)(t)}`,n&&"circleDisableShrink"]};return(0,p.Z)(a,w,i)},C=(0,k.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,i)=>{let{ownerState:t}=e;return[i.root,i[t.variant],i[`color${(0,v.Z)(t.color)}`]]}})(({ownerState:e,theme:i})=>(0,u.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:i.transitions.create("transform")},"inherit"!==e.color&&{color:(i.vars||i).palette[e.color].main}),({ownerState:e})=>"indeterminate"===e.variant&&(0,g.iv)(P||(P=Z`
      animation: ${0} 1.4s linear infinite;
    `),D)),M=(0,k.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,i)=>i.svg})({display:"block"}),L=(0,k.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,i)=>{let{ownerState:t}=e;return[i.circle,i[`circle${(0,v.Z)(t.variant)}`],t.disableShrink&&i.circleDisableShrink]}})(({ownerState:e,theme:i})=>(0,u.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:i.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,g.iv)(N||(N=Z`
      animation: ${0} 1.4s ease-in-out infinite;
    `),E)),R=n.forwardRef(function(e,i){let t=(0,f.Z)({props:e,name:"MuiCircularProgress"}),{className:n,color:a="primary",disableShrink:r=!1,size:o=40,style:c,thickness:l=3.6,value:h=0,variant:p="indeterminate"}=t,g=(0,d.Z)(t,b),v=(0,u.Z)({},t,{color:a,disableShrink:r,size:o,thickness:l,value:h,variant:p}),k=S(v),x={},_={},w={};if("determinate"===p){let e=2*Math.PI*((44-l)/2);x.strokeDasharray=e.toFixed(3),w["aria-valuenow"]=Math.round(h),x.strokeDashoffset=`${((100-h)/100*e).toFixed(3)}px`,_.transform="rotate(-90deg)"}return(0,s.jsx)(C,(0,u.Z)({className:(0,m.Z)(k.root,n),style:(0,u.Z)({width:o,height:o},_,c),ownerState:v,ref:i,role:"progressbar"},w,g,{children:(0,s.jsx)(M,{className:k.svg,ownerState:v,viewBox:"22 22 44 44",children:(0,s.jsx)(L,{className:k.circle,style:x,ownerState:v,cx:44,cy:44,r:(44-l)/2,fill:"none",strokeWidth:l})})}))});var V=t(8043),q=t.n(V),O=function(e){let{isLoading:i,children:t}=e;return(0,s.jsx)("div",{className:q().container,children:i?(0,s.jsx)(R,{}):t})},$=t(4924),I=t(8949),T=t(1839),U=t(1013),W=t(1288);class X{static get instance(){return null==X._viewModel&&(X._viewModel=new X),X._viewModel}async loadPokemon(e){this.isLoading=!0;try{let i=await (0,W.e)(e);(0,I.z)(()=>{this.pokemon=i})}catch(e){console.error(e),(0,U.Uo)()}(0,I.z)(()=>{this.isLoading=!1})}onUnmount(){this.isLoading=!0,this.pokemon=null}constructor(){(0,$.Z)(this,"userAppModel",void 0),(0,$.Z)(this,"isLoading",void 0),(0,$.Z)(this,"pokemon",void 0),this.userAppModel=T.Z.instance,this.isLoading=!0,this.pokemon=null,(0,I.rC)(this,{isLoading:I.LO,pokemon:I.LO,loadPokemon:I.aD.bound,onUnmount:I.aD.bound})}}(0,$.Z)(X,"_viewModel",null);var z=t(5127),F=t(9434),A=t.n(F),B=(0,z.Wc)((0,a.Pi)(function(e){let{viewModel:i}=e,{userAppModel:t,isLoading:a,pokemon:o,loadPokemon:l,onUnmount:d}=i,{user:u}=t,m=(0,r.useRouter)();return(0,n.useEffect)(()=>(m.query&&m.query.id&&l(m.query.id),d),[l,d,m.query]),(0,s.jsx)(O,{isLoading:a,children:o&&(0,s.jsxs)("div",{className:A().container,children:[(0,s.jsx)("div",{className:A().imageWrapper,children:(0,s.jsx)(h(),{src:o.image,alt:o.name,width:250,height:250})}),(0,s.jsx)("span",{className:A().name,children:o.name}),(0,s.jsxs)("div",{className:A().data,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:A().label,children:"Weight:"}),(0,s.jsx)("span",{children:o.weight})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:A().label,children:"Height:"}),(0,s.jsx)("span",{children:o.height})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:A().label,children:"Base experience:"}),(0,s.jsx)("span",{children:o.baseExperience})]})]}),(0,s.jsxs)("div",{className:A().feedback,children:["What do you think about ".concat(o.name," "),(0,s.jsx)("span",{className:A().user,children:"".concat(u?u.name:"John Doe")}),"?"]}),(0,s.jsx)(c(),{href:"/pokemons",className:A().link,children:"Go back"})]})})}),X);function G(){return(0,s.jsx)(B,{})}G.title="Pokemon details",G.showUser=!0;var H=G},1288:function(e,i,t){"use strict";t.d(i,{L:function(){return d},e:function(){return u}});var s=t(6154),n=t(4155);let a=n.env.NEXT_PUBLIC_LOCAL_SERVER;async function r(e,i,t,n){let r={url:"".concat(a?"https://localhost:5001/v1/":"https://pokeapi.co/api/v2/").concat(i),method:e,headers:{...n}};return"get"!==e.toLowerCase()?r={...r,data:t}:t instanceof String?r=t:t instanceof Object&&(r={...r,params:t}),(0,s.Z)(r)}async function o(e,i,t){return r("get",e,i,t,{})}s.Z.interceptors.response.use(e=>e,e=>e);var c=t(4924);class l{clone(){let e=new l;return e.id=this.id,e.name=this.name,e.height=this.height,e.weight=this.weight,e.abilities=[...this.abilities],e.baseExperience=this.baseExperience,e.image=this.image,e}constructor(){(0,c.Z)(this,"id",void 0),(0,c.Z)(this,"name",void 0),(0,c.Z)(this,"height",void 0),(0,c.Z)(this,"weight",void 0),(0,c.Z)(this,"abilities",void 0),(0,c.Z)(this,"baseExperience",void 0),(0,c.Z)(this,"image",void 0)}}class h{clone(){let e=new h;return e.id=this.id,e.name=this.name,e.height=this.height,e.weight=this.weight,e.abilities=[...this.abilities],e.baseExperience=this.baseExperience,e.image=this.image,e}constructor(){(0,c.Z)(this,"id",void 0),(0,c.Z)(this,"name",void 0),(0,c.Z)(this,"height",void 0),(0,c.Z)(this,"weight",void 0),(0,c.Z)(this,"abilities",void 0),(0,c.Z)(this,"baseExperience",void 0),(0,c.Z)(this,"image",void 0)}}async function d(e){let{data:i}=await o("pokemon",e);return{...i,results:i.results.map(e=>{let i=e.url.split("/"),t=new h;return t.id=i[i.length-2],t.name=e.name,t.image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(String(t.id).padStart(3,"0"),".png"),t})}}async function u(e){let{data:i}=await o("pokemon/".concat(e));return function(e){let i=new l;return i.id=e.id,i.name=e.name,i.height=e.height,i.weight=e.weight,i.abilities=e.abilities.map(e=>e.ability.name),i.baseExperience=e.base_experience,i.image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(String(i.id).padStart(3,"0"),".png"),i}(i)}},8043:function(e){e.exports={container:"LoadingContainer_container__uCTuG"}},9434:function(e){e.exports={container:"PokemonDetailsView_container__NrKqf",name:"PokemonDetailsView_name__OM__1",data:"PokemonDetailsView_data__zI0jN",label:"PokemonDetailsView_label__XINtR",feedback:"PokemonDetailsView_feedback__vVtq3",user:"PokemonDetailsView_user__M_3wk",link:"PokemonDetailsView_link__rXT8q"}},1163:function(e,i,t){e.exports=t(6885)}},function(e){e.O(0,[664,280,774,888,179],function(){return e(e.s=8318)}),_N_E=e.O()}]);
//# sourceMappingURL=[id]-4ca9024b6e964806.js.map