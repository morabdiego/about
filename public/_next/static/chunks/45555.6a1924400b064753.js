(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45555,56309],{45555:(e,t,r)=>{"use strict";var s=r(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(r(21573));t.default=a.default},21573:e=>{"use strict";function t(e){var t,r;t={pattern:/^[;#].*/m,greedy:!0},r=/"(?:[^\r\n"\\]|\\(?:[^\r]|\r\n?))*"(?!\S)/.source,e.languages.systemd={comment:t,section:{pattern:/^\[[^\n\r\[\]]*\](?=[ \t]*$)/m,greedy:!0,inside:{punctuation:/^\[|\]$/,"section-name":{pattern:/[\s\S]+/,alias:"selector"}}},key:{pattern:/^[^\s=]+(?=[ \t]*=)/m,greedy:!0,alias:"attr-name"},value:{pattern:RegExp(/(=[ \t]*(?!\s))/.source+"(?:"+r+'|(?=[^"\r\n]))(?:'+(/[^\s\\]/.source+'|[ 	]+(?:(?![ 	"])|')+r+")|"+/\\[\r\n]+(?:[#;].*[\r\n]+)*(?![#;])/.source+")*"),lookbehind:!0,greedy:!0,alias:"attr-value",inside:{comment:t,quoted:{pattern:RegExp(/(^|\s)/.source+r),lookbehind:!0,greedy:!0},punctuation:/\\$/m,boolean:{pattern:/^(?:false|no|off|on|true|yes)$/,greedy:!0}}},punctuation:/=/}}e.exports=t,t.displayName="systemd",t.aliases=[]},24994:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);