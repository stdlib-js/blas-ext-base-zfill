"use strict";var l=function(t,u){return function(){return u||t((u={exports:{}}).exports,u),u.exports}};var c=l(function(I,p){
var w=require('@stdlib/strided-base-reinterpret-complex128/dist'),x=require('@stdlib/complex-float64-real/dist'),E=require('@stdlib/complex-float64-imag/dist'),q=8;function M(t,u,n,s,g){var e,i,a,f,o,v,r;if(t<=0)return n;if(f=g,i=x(u),a=E(u),e=w(n,0),s===1){if(o=t%q,o>0)for(v=0;v<o;v++)r=f*2,e[r]=i,e[r+1]=a,f+=s;if(t<q)return n;for(v=o;v<t;v+=q)r=f*2,e[r]=i,e[r+1]=a,e[r+2]=i,e[r+3]=a,e[r+4]=i,e[r+5]=a,e[r+6]=i,e[r+7]=a,e[r+8]=i,e[r+9]=a,e[r+10]=i,e[r+11]=a,e[r+12]=i,e[r+13]=a,e[r+14]=i,e[r+15]=a,f+=q;return n}for(v=0;v<t;v++)r=f*2,e[r]=i,e[r+1]=a,f+=s;return n}p.exports=M
});var j=l(function(J,y){
var O=require('@stdlib/strided-base-stride2offset/dist'),b=c();function k(t,u,n,s){return b(t,u,n,s,O(t,s))}y.exports=k
});var R=l(function(K,d){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=j(),B=c();A(z,"ndarray",B);d.exports=z
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=R(),m,_=D(C(__dirname,"./native.js"));F(_)?m=G:m=_;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
