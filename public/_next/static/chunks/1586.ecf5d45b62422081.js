(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1586,92279],{1586:(e,t,a)=>{"use strict";var n=a(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(83940));t.default=s.default},83940:e=>{"use strict";function t(e){!function(e){function t(e,t,a){return{pattern:RegExp("<#"+e+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+e+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:t,alias:a}}}}e.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:function(a){var n=e.languages[a],s="language-"+a;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:t("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\b\w+(?=\s)/,"attr-name":/\b\w+/}),expression:t("=",n,s),"class-feature":t("\\+",n,s),standard:t("",n,s)}}}}})}(e)}e.exports=t,t.displayName="t4Templating",t.aliases=[]},24994:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);