(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3430,11220],{3430:(e,a,t)=>{"use strict";var n=t(24994);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(42188));a.default=r.default},42188:e=>{"use strict";function a(e){e.languages.haxe=e.languages.extend("clike",{string:{pattern:/"(?:[^"\\]|\\[\s\S])*"/,greedy:!0},"class-name":[{pattern:/(\b(?:abstract|class|enum|extends|implements|interface|new|typedef)\s+)[A-Z_]\w*/,lookbehind:!0},/\b[A-Z]\w*/],keyword:/\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|final|for|from|function|if|implements|import|in|inline|interface|macro|new|null|operator|overload|override|package|private|public|return|static|super|switch|throw|to|try|typedef|untyped|using|var|while)(?!\.)\b/,function:{pattern:/\b[a-z_]\w*(?=\s*(?:<[^<>]*>\s*)?\()/i,greedy:!0},operator:/\.{3}|\+\+|--|&&|\|\||->|=>|(?:<<?|>{1,3}|[-+*/%!=&|^])=?|[?:~]/}),e.languages.insertBefore("haxe","string",{"string-interpolation":{pattern:/'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{interpolation:{pattern:/(^|[^\\])\$(?:\w+|\{[^{}]+\})/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:e.languages.haxe}}},string:/[\s\S]+/}}}),e.languages.insertBefore("haxe","class-name",{regex:{pattern:/~\/(?:[^\/\\\r\n]|\\.)+\/[a-z]*/,greedy:!0,inside:{"regex-flags":/\b[a-z]+$/,"regex-source":{pattern:/^(~\/)[\s\S]+(?=\/$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^~\/|\/$/}}}),e.languages.insertBefore("haxe","keyword",{preprocessor:{pattern:/#(?:else|elseif|end|if)\b.*/,alias:"property"},metadata:{pattern:/@:?[\w.]+/,alias:"symbol"},reification:{pattern:/\$(?:\w+|(?=\{))/,alias:"important"}})}e.exports=a,a.displayName="haxe",a.aliases=[]},24994:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);