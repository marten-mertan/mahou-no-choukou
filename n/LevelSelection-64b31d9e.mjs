import{_ as m,o as e,c as t,b as n,t as r,a as u,w as c,F as v,r as p,T as k,d as f,e as g,f as x}from"./entry-b7a52637.mjs";const y={name:"LevelSelection",props:{title:{type:String,default:"TITLE"},items:{type:Array,required:!0}},methods:{addMoreItems(){this.$emit("addMoreItems")}}},h={class:"level-selection"},I={class:"level-selection__title"},T={class:"level-selection-grid"};function B(L,a,s,M,N,i){const d=x;return e(),t("div",h,[n("div",I,r(s.title),1),n("div",T,[u(k,{name:"list",appear:""},{default:c(()=>[(e(!0),t(v,null,p(s.items,(l,o)=>(e(),t("div",{key:"level-selection-grid-item-"+o,class:"level-selection-grid-item"},[o!==s.items.length-1?(e(),f(d,{key:0,to:l.link,class:"level-selection-grid-item-link"},{default:c(()=>[g(r(l.index),1)]),_:2},1032,["to"])):(e(),t("div",{key:1,class:"level-selection-grid-item-more",onClick:a[0]||(a[0]=(..._)=>i.addMoreItems&&i.addMoreItems(..._))}," + "))]))),128))]),_:1})])])}var V=m(y,[["render",B],["__scopeId","data-v-173d10c9"]]);export{V as _};