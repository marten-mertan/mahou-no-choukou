import{_ as I,o as n,c as r,a as _,t as c,F as h,r as v,b as u,d as m,w as G,e as A,f as D}from"./entry-2de13a75.mjs";const f={name:"LevelSelection",props:{title:{type:String,default:"TITLE"},name:{type:String,required:!0},items:{type:Array,required:!0},itemsMax:{type:Number,required:!0}},methods:{addMoreItems(){this.$emit("addMoreItems",this.name)}}},x={class:"level-selection"},T={class:"level-selection__title"},p={class:"level-selection-grid"},R={key:0,class:"level-selection-grid-item"};function S(e,t,s,a,i,l){const d=D;return n(),r("div",x,[_("div",T,c(s.title),1),_("div",p,[(n(!0),r(h,null,v(s.items,(o,M)=>(n(),r("div",{key:"level-selection-grid-item-"+M,class:"level-selection-grid-item"},[m(d,{to:o.link,class:"level-selection-grid-item-link"},{default:G(()=>[A(c(o.index),1)]),_:2},1032,["to"])]))),128)),s.items.length<s.itemsMax?(n(),r("div",R,[_("div",{class:"level-selection-grid-item-more",onClick:t[0]||(t[0]=(...o)=>l.addMoreItems&&l.addMoreItems(...o))}," + ")])):u("",!0)])])}var N=I(f,[["render",S],["__scopeId","data-v-3cd4d4e1"]]);const y={name:"Index",data:()=>({GRID_MAX_ITEMS:200,GRID_INITIAL_COUNT:28,GRID_ADD_COUNT:14,levelGrid:{easy:[],normal:[],hard:[]}}),methods:{levelGridInit(){for(let e=1;e<=this.GRID_INITIAL_COUNT;e++)this.levelGrid.easy.push({index:e,link:`/level/${e}/`,complete:!1}),this.levelGrid.normal.push({index:e+this.GRID_MAX_ITEMS,link:`/level/${e+this.GRID_MAX_ITEMS}/`,complete:!1}),this.levelGrid.hard.push({index:e+this.GRID_MAX_ITEMS*2,link:`/level/${e+this.GRID_MAX_ITEMS*2}/`,complete:!1})},addMoreItems(e){if(this.levelGrid[e]===void 0)return;const t=this.levelGrid[e].length,s=t+this.GRID_ADD_COUNT>this.GRID_MAX_ITEMS?this.GRID_MAX_ITEMS-t:this.GRID_ADD_COUNT,a=this.levelGrid[e][t-1].index;for(let i=a+1;i<=a+s;i++)this.levelGrid[e].push({index:i,link:`/level/${i}/`,complete:!1})}},mounted(){this.levelGridInit()}},E={class:"container"};function g(e,t,s,a,i,l){const d=N;return n(),r("div",E,[m(d,{title:"Easy",name:"easy",items:e.levelGrid.easy,itemsMax:e.GRID_MAX_ITEMS,onAddMoreItems:l.addMoreItems},null,8,["items","itemsMax","onAddMoreItems"]),m(d,{title:"Normal",name:"normal",items:e.levelGrid.normal,itemsMax:e.GRID_MAX_ITEMS,onAddMoreItems:l.addMoreItems},null,8,["items","itemsMax","onAddMoreItems"]),m(d,{title:"Hard",name:"hard",items:e.levelGrid.hard,itemsMax:e.GRID_MAX_ITEMS,onAddMoreItems:l.addMoreItems},null,8,["items","itemsMax","onAddMoreItems"])])}var X=I(y,[["render",g]]);export{X as default};
