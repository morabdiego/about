(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[17029,17495,86305],{86305:(e,t,r)=>{"use strict";var a=r(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(89275));t.default=n.default},89275:(e,t,r)=>{"use strict";var a=r(82171);function n(e){e.register(a),e.languages.tap={fail:/not ok[^#{\n\r]*/,pass:/ok[^#{\n\r]*/,pragma:/pragma [+-][a-z]+/,bailout:/bail out!.*/i,version:/TAP version \d+/i,plan:/\b\d+\.\.\d+(?: +#.*)?/,subtest:{pattern:/# Subtest(?:: .*)?/,greedy:!0},punctuation:/[{}]/,directive:/#.*/,yamlish:{pattern:/(^[ \t]*)---[\s\S]*?[\r\n][ \t]*\.\.\.$/m,lookbehind:!0,inside:e.languages.yaml,alias:"language-yaml"}}}e.exports=n,n.displayName="tap",n.aliases=[]},82171:e=>{"use strict";function t(e){!function(e){var t=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+r.source+"(?:[ 	]+"+t.source+")?|"+t.source+"(?:[ 	]+"+r.source+")?)",n=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),u=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function o(e,t){return t=(t||"").replace(/m/g,"")+"m",RegExp(/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return e}),t)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+n+"|"+u+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:o(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:o(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:o(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:o(u),lookbehind:!0,greedy:!0},number:{pattern:o(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml}(e)}e.exports=t,t.displayName="yaml",t.aliases=["yml"]},24994:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);