"use strict";var q=function(u,t){return function(){return t||u((t={exports:{}}).exports,t),t.exports}};var l=q(function(H,m){
var g=require('@stdlib/strided-base-reinterpret-complex128/dist'),w=require('@stdlib/complex-float64-real/dist'),x=require('@stdlib/complex-float64-imag/dist'),o=8;function E(u,t,n,f,_){var e,i,a,r,s,v;if(u<=0)return n;if(i=w(t),a=x(t),e=g(n,0),r=_*2,f*=2,f===2){if(s=u%o,s>0)for(v=0;v<s;v++)e[r]=i,e[r+1]=a,r+=f;if(u<o)return n;for(v=s;v<u;v+=o)e[r]=i,e[r+1]=a,e[r+2]=i,e[r+3]=a,e[r+4]=i,e[r+5]=a,e[r+6]=i,e[r+7]=a,e[r+8]=i,e[r+9]=a,e[r+10]=i,e[r+11]=a,e[r+12]=i,e[r+13]=a,e[r+14]=i,e[r+15]=a,r+=o*2;return n}for(v=0;v<u;v++)e[r]=i,e[r+1]=a,r+=f;return n}m.exports=E
});var y=q(function(I,p){
var M=require('@stdlib/strided-base-stride2offset/dist'),O=l();function b(u,t,n,f){return O(u,t,n,f,M(u,f))}p.exports=b
});var d=q(function(J,j){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=y(),A=l();k(z,"ndarray",A);j.exports=z
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=d(),c,R=C(B(__dirname,"./native.js"));D(R)?c=F:c=R;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
