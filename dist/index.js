"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var f=s(function(P,o){
var q=require('@stdlib/assert-is-accessor-array/dist'),l=require('@stdlib/assert-is-complex-like/dist'),p=require('@stdlib/assert-is-boolean/dist').isPrimitive,g=require('@stdlib/strided-base-reinterpret-complex/dist'),c=require('@stdlib/strided-base-reinterpret-boolean/dist'),y=require('@stdlib/array-base-assert-is-complex-typed-array/dist'),A=require('@stdlib/array-base-assert-is-booleanarray/dist'),B=require('@stdlib/array-base-resolve-getter/dist'),n=require('@stdlib/assert-is-same-value/dist'),w=require('@stdlib/complex-float64-real/dist'),C=require('@stdlib/complex-float64-imag/dist');function S(r,e,u){var i;for(i=u;i<r.length;i++)if(n(e,r[i]))return i;return-1}function V(r,e,u){var i,t;for(i=B(r),t=u;t<r.length;t++)if(n(e,i(r,t)))return t;return-1}function b(r,e,u){var i,t,a,v;if(!l(e))return-1;for(i=g(r,0),t=w(e),a=C(e),v=u*2;v<i.length;v+=2)if(n(i[v],t)&&n(i[v+1],a))return v/2;return-1}function k(r,e,u){var i,t,a;if(!p(e))return-1;for(i=c(r,0),t=e?1:0,a=u;a<i.length;a++)if(i[a]===t)return a;return-1}function G(r,e,u){return u<0&&(u+=r.length,u<0&&(u=0)),q(r)?y(r)?b(r,e,u):A(r)?k(r,e,u):V(r,e,u):S(r,e,u)}o.exports=G
});var L=f();module.exports=L;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
