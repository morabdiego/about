(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[67824,69657],{92038:(e,t,r)=>{"use strict";var a=r(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(r(99296));t.default=o.default},99296:e=>{"use strict";function t(e){e.languages.unrealscript={comment:/\/\/.*|\/\*[\s\S]*?\*\//,string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},category:{pattern:/(\b(?:(?:autoexpand|hide|show)categories|var)\s*\()[^()]+(?=\))/,lookbehind:!0,greedy:!0,alias:"property"},metadata:{pattern:/(\w\s*)<\s*\w+\s*=[^<>|=\r\n]+(?:\|\s*\w+\s*=[^<>|=\r\n]+)*>/,lookbehind:!0,greedy:!0,inside:{property:/\b\w+(?=\s*=)/,operator:/=/,punctuation:/[<>|]/}},macro:{pattern:/`\w+/,alias:"property"},"class-name":{pattern:/(\b(?:class|enum|extends|interface|state(?:\(\))?|struct|within)\s+)\w+/,lookbehind:!0},keyword:/\b(?:abstract|actor|array|auto|autoexpandcategories|bool|break|byte|case|class|classgroup|client|coerce|collapsecategories|config|const|continue|default|defaultproperties|delegate|dependson|deprecated|do|dontcollapsecategories|editconst|editinlinenew|else|enum|event|exec|export|extends|final|float|for|forcescriptorder|foreach|function|goto|guid|hidecategories|hidedropdown|if|ignores|implements|inherits|input|int|interface|iterator|latent|local|material|name|native|nativereplication|noexport|nontransient|noteditinlinenew|notplaceable|operator|optional|out|pawn|perobjectconfig|perobjectlocalized|placeable|postoperator|preoperator|private|protected|reliable|replication|return|server|showcategories|simulated|singular|state|static|string|struct|structdefault|structdefaultproperties|switch|texture|transient|travel|unreliable|until|var|vector|while|within)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,boolean:/\b(?:false|true)\b/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/>>|<<|--|\+\+|\*\*|[-+*/~!=<>$@]=?|&&?|\|\|?|\^\^?|[?:%]|\b(?:ClockwiseFrom|Cross|Dot)\b/,punctuation:/[()[\]{};,.]/},e.languages.uc=e.languages.uscript=e.languages.unrealscript}e.exports=t,t.displayName="unrealscript",t.aliases=["uc","uscript"]},24994:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);