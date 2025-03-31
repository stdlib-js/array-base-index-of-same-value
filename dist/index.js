"use strict";var o=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};var c=o(function(h,n){
var v=require('@stdlib/array-base-arraylike2object/dist'),s=require('@stdlib/assert-is-same-value/dist');function l(e,t,a){var r;for(r=a;r<e.length;r++)if(s(t,e[r]))return r;return-1}function f(e,t,a){var r,u,i;for(r=e.data,u=e.accessors[0],i=a;i<r.length;i++)if(s(t,u(r,i)))return i;return-1}function g(e,t,a){var r;return a<0&&(a+=e.length,a<0&&(a=0)),r=v(e),r.accessorProtocol?f(r,t,a):l(e,t,a)}n.exports=g
});var q=c();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
