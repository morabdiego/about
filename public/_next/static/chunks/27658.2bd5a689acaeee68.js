(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16403,27658],{27658:(e,t,n)=>{"use strict";var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(56876));t.default=r.default},56876:e=>{"use strict";function t(e){!function(e){function t(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,a,r,o){if(n.language===a){var u=n.tokenStack=[];n.code=n.code.replace(r,function(e){if("function"==typeof o&&!o(e))return e;for(var r,s=u.length;-1!==n.code.indexOf(r=t(a,s));)++s;return u[s]=e,r}),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,a){if(n.language===a&&n.tokenStack){n.grammar=e.languages[a];var r=0,o=Object.keys(n.tokenStack);!function u(s){for(var l=0;l<s.length&&!(r>=o.length);l++){var i=s[l];if("string"==typeof i||i.content&&"string"==typeof i.content){var c=o[r],p=n.tokenStack[c],f="string"==typeof i?i:i.content,g=t(a,c),d=f.indexOf(g);if(d>-1){++r;var k=f.substring(0,d),_=new e.Token(a,e.tokenize(p,n.grammar),"language-"+a,p),v=f.substring(d+g.length),h=[];k&&h.push.apply(h,u([k])),h.push(_),v&&h.push.apply(h,u([v])),"string"==typeof i?s.splice.apply(s,[l,1].concat(h)):i.content=h}}else i.content&&u(i.content)}return s}(n.tokens)}}}})}(e)}e.exports=t,t.displayName="markupTemplating",t.aliases=[]},24994:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);