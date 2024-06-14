import{v as w,c as n,w as m,o as i,a as t,u as s,G as b,f as y,t as h,g as d,b as o,h as x,d as u,n as k,e as v}from"./app-3223b764.js";import{_ as V}from"./Checkbox-7bc0e681.js";import{_ as B}from"./GuestLayout-e4f6d56c.js";import{_ as c,a as f,b as p}from"./TextInput-ebf7233d.js";import{P}from"./PrimaryButton-6361a9e5.js";import"./ApplicationLogo-12272739.js";import"./_plugin-vue_export-helper-c27b6911.js";const $={key:0,class:"mb-4 font-medium text-sm text-green-600"},N=["onSubmit"],S={class:"mt-4"},q={class:"block mt-4"},C={class:"flex items-center"},L=o("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),R={class:"flex items-center justify-end mt-4"},M={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(l){const e=w({email:"",password:"",remember:!1}),_=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(g,a)=>(i(),n(B,null,{default:m(()=>[t(s(b),{title:"Log in"}),l.status?(i(),y("div",$,h(l.status),1)):d("",!0),o("form",{onSubmit:v(_,["prevent"])},[o("div",null,[t(c,{for:"email",value:"Email"}),t(f,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":a[0]||(a[0]=r=>s(e).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(p,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),o("div",S,[t(c,{for:"password",value:"Password"}),t(f,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":a[1]||(a[1]=r=>s(e).password=r),required:"",autocomplete:"current-password"},null,8,["modelValue"]),t(p,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),o("div",q,[o("label",C,[t(V,{name:"remember",checked:s(e).remember,"onUpdate:checked":a[2]||(a[2]=r=>s(e).remember=r)},null,8,["checked"]),L])]),o("div",R,[l.canResetPassword?(i(),n(s(x),{key:0,href:g.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:m(()=>[u(" Forgot your password? ")]),_:1},8,["href"])):d("",!0),t(P,{class:k(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[u(" Log in ")]),_:1},8,["class","disabled"])])],40,N)]),_:1}))}};export{M as default};