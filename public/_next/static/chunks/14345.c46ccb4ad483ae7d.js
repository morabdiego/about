(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14345,20451],{14345:(t,e,n)=>{"use strict";var a=n(24994);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n(88355));e.default=r.default},88355:t=>{"use strict";function e(t){t.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:t.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},t.hooks.add("after-tokenize",function(t){if("graphql"===t.language)for(var e=t.tokens.filter(function(t){return"string"!=typeof t&&"comment"!==t.type&&"scalar"!==t.type}),n=0;n<e.length;){var a=e[n++];if("keyword"===a.type&&"mutation"===a.content){var r=[];if(l(["definition-mutation","punctuation"])&&"("===e[n+1].content){n+=2;var i=f(/^\($/,/^\)$/);if(-1===i)continue;for(;n<i;n++){var o=e[n+0];"variable"===o.type&&(c(o,"variable-input"),r.push(o.content))}n=i+1}if(l(["punctuation","property-query"])&&"{"===e[n+0].content&&(c(e[++n+0],"property-mutation"),r.length>0)){var s=f(/^\{$/,/^\}$/);if(-1===s)continue;for(var u=n;u<s;u++){var p=e[u];"variable"===p.type&&r.indexOf(p.content)>=0&&c(p,"variable-input")}}}}function l(t,a){a=a||0;for(var r=0;r<t.length;r++){var i=e[n+(r+a)];if(!i||i.type!==t[r])return!1}return!0}function f(t,a){for(var r=1,i=n;i<e.length;i++){var o=e[i],s=o.content;if("punctuation"===o.type&&"string"==typeof s){if(t.test(s))r++;else if(a.test(s)&&0==--r)return i}}return -1}function c(t,e){var n=t.alias;n?Array.isArray(n)||(t.alias=n=[n]):t.alias=n=[],n.push(e)}})}t.exports=e,e.displayName="graphql",e.aliases=[]},24994:t=>{t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);