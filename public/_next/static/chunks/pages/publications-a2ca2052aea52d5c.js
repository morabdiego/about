(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63313],{48506:(e,s,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/publications",function(){return i(64039)}])},64039:(e,s,i)=>{"use strict";i.r(s),i.d(s,{Div_0c4c0d922d990c245023c72baae2d5e1:()=>E,Fragment_c179379f847dbcf00ba21f73b0ad1b3d:()=>D,Toaster_6e6ebf8d7ce589d59b7d382fb7576edf:()=>C,default:()=>_});var t=i(84577),a=i(2445),n=i(96540),r=i(18526),o=i(19188),l=i(32930),c=i(57602),d=i(17437),m=i(64721),u=i(749),p=i(84217),j=i(91106),g=i.n(j),h=i(23631);i(34811);var f=i(58082),b=i(68463),x=i(97417),v=i(98521),w=i(32191),k=i(78079),y=i(32458),q=i(82164),Y=i(13368),S=i.n(Y);function I(){let e=(0,t._)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);return I=function(){return e},e}function C(){let{resolvedColorMode:e}=(0,n.useContext)(o.ColorModeContext);l.refs.__toast=m.oR;let[s,i]=(0,n.useContext)(o.EventLoopContext),t={description:"Check if server is reachable at "+(0,l.getBackendURL)(u.ll).href,closeButton:!0,duration:12e4,id:"websocket-error"},[r,c]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{i.length>=2?r||m.oR.error("Cannot connect to server: ".concat(i.length>0?i[i.length-1].message:"","."),{...t,onDismiss:()=>c(!0)}):(m.oR.dismiss("websocket-error"),c(!1))},[i]),(0,a.Y)(m.l$,{closeButton:!1,expand:!0,position:"bottom-right",richColors:!0,theme:e})}function E(){let[e,s]=(0,n.useContext)(o.EventLoopContext);return(0,a.Y)("div",{css:{position:"fixed",width:"100vw",height:"0"},title:"Connection Error: "+(s.length>0?s[s.length-1].message:""),children:(0,a.Y)(D,{})})}let F=(0,d.keyframes)(I());function D(){let[e,s]=(0,n.useContext)(o.EventLoopContext);return(0,a.Y)(n.Fragment,{children:(0,l.isTrue)(s.length>0)?(0,a.Y)(n.Fragment,{children:(0,a.Y)(c.A,{css:{color:"crimson",zIndex:9999,position:"fixed",bottom:"33px",right:"33px",animation:F+" 1s infinite"},size:32})}):(0,a.Y)(n.Fragment,{})})}function _(){return(0,a.FD)(n.Fragment,{children:[(0,a.Y)(r.uV,{}),(0,a.FD)(n.Fragment,{children:[(0,a.FD)(n.Fragment,{children:[(0,a.Y)(E,{}),(0,a.Y)(C,{})]}),(0,a.FD)(p.Box,{css:{width:"100%"},children:[(0,a.Y)(p.Flex,{align:"start",className:"rx-Stack",direction:"column",gap:"3",children:(0,a.Y)(p.Flex,{align:"start",className:"rx-Stack",css:{width:"100%",maxWidth:"100%",marginInlineStart:"auto",marginInlineEnd:"auto",background:"#1e1e1e",position:"sticky",borderBottom:"0.25em solid #64b692","@media screen and (min-width: 0)":{paddingInlineStart:"1em",paddingInlineEnd:"1em"},"@media screen and (min-width: 30em)":{paddingInlineStart:"1.5em",paddingInlineEnd:"1.5em"},"@media screen and (min-width: 48em)":{paddingInlineStart:"20em",paddingInlineEnd:"20em"},"@media screen and (min-width: 62em)":{paddingInlineStart:"20em",paddingInlineEnd:"20em"},paddingTop:"1em",paddingBottom:"1em",zIndex:"999",top:"0",backdropFilter:"blur(10px)"},direction:"row",gap:"3",children:(0,a.FD)(p.Flex,{align:"start",className:"rx-Stack",css:{paddingInlineStart:"1.5em",paddingInlineEnd:"1.5em"},direction:"row",gap:"8",children:[(0,a.Y)(p.Link,{asChild:!0,css:{color:"#f0eedc","&:hover":{color:"#64b692"}},children:(0,a.Y)(g(),{href:"/",passHref:!0,children:"Home"})}),(0,a.Y)(p.Link,{asChild:!0,css:{color:"#f0eedc","&:hover":{color:"#64b692"}},children:(0,a.Y)(g(),{href:"/publications",passHref:!0,children:"Publications"})})]})})}),(0,a.Y)(p.Flex,{align:"start",className:"rx-Stack",css:{width:"100%",background:"#f0eedc"},direction:"column",gap:"3",children:(0,a.Y)(p.Box,{css:{width:"100%",maxWidth:"1400px",marginInlineStart:"auto",marginInlineEnd:"auto","@media screen and (min-width: 0)":{paddingInlineStart:"1em",paddingInlineEnd:"1em"},"@media screen and (min-width: 30em)":{paddingInlineStart:"1.5em",paddingInlineEnd:"1.5em"},"@media screen and (min-width: 48em)":{paddingInlineStart:"20em",paddingInlineEnd:"20em"},"@media screen and (min-width: 62em)":{paddingInlineStart:"20em",paddingInlineEnd:"20em"},paddingTop:["3em"],paddingBottom:["3em"],minHeight:"calc(100vh - 60px - 60px)"},children:(0,a.Y)(h.$,{components:function(){let{resolvedColorMode:e}=(0,n.useContext)(o.ColorModeContext);return(async()=>{try{let e=await i.e(97616).then(i.bind(i,97616));k.A.registerLanguage("python",e.default)}catch(e){console.error("Error importing language module for python:",e)}})(),{h1:e=>{let{node:s,children:i,...t}=e;return(0,a.Y)(p.Heading,{as:"h1",css:{color:"#9b4d4d",fontSize:["3em"],fontWeight:"bold",marginBottom:"1em",textAlign:"center"},...t,children:i})},h2:e=>{let{node:s,children:i,...t}=e;return(0,a.Y)(p.Heading,{as:"h2",css:{color:"#1e1e1e",fontSize:["2em"],fontWeight:"bold",marginBottom:"0.8em",textAlign:"justify"},...t,children:i})},h3:e=>{let{node:s,children:i,...t}=e;return(0,a.Y)(p.Heading,{as:"h3",css:{color:"#1e1e1e",fontSize:["2em"],marginTop:"1em",marginBottom:"0.6em",textAlign:"justify"},...t,children:i})},h4:e=>{let{node:s,children:i,...t}=e;return(0,a.Y)(p.Heading,{as:"h4",css:{marginTop:"0.5em",marginBottom:"0.5em"},size:"3",...t,children:i})},h5:e=>{let{node:s,children:i,...t}=e;return(0,a.Y)(p.Heading,{as:"h5",css:{marginTop:"0.5em",marginBottom:"0.5em"},size:"2",...t,children:i})},h6:e=>{let{node:s,children:i,...t}=e;return(0,a.Y)(p.Heading,{as:"h6",css:{marginTop:"0.5em",marginBottom:"0.5em"},size:"1",...t,children:i})},p:e=>{let{node:s,children:i,...t}=e;return(0,a.Y)(p.Text,{as:"p",css:{color:"#1e1e1e",fontSize:"1em",marginBottom:"1em",textAlign:"justify"},...t,children:i})},ul:e=>{let{node:s,children:i,...t}=e;return(0,a.Y)("ul",{css:{listStyleType:"disc",marginTop:"1em",marginBottom:"1em",marginLeft:"1.5rem",direction:"column"},children:i})},ol:e=>{let{node:s,children:i,...t}=e;return(0,a.Y)("ol",{css:{listStyleType:"decimal",marginTop:"1em",marginBottom:"1em",marginLeft:"1.5rem",direction:"column"},children:i})},li:e=>{let{node:s,children:i,...t}=e;return(0,a.Y)("li",{css:{marginTop:"0.5em",marginBottom:"0.5em"},children:i})},a:e=>{let{node:s,children:i,...t}=e;return(0,a.Y)(p.Link,{css:{color:"#64b692",textDecoration:"none",fontWeight:"bold","&:hover":{textDecoration:"underline"}},href:"#",...t,children:i})},code:s=>{let{node:t,inline:n,className:r,children:o,...l}=s,c=(r||"").match(RegExp("language-(?<lang>.*)")),d=c?c[1]:"";return d&&(async()=>{try{let e=await i(83508)("./".concat(d));k.A.registerLanguage(d,e.default)}catch(e){console.error("Error importing language module for ".concat(d,":"),e)}})(),n?(0,a.Y)(p.Code,{...l,children:o}):(0,a.Y)(k.A,{children:Array.isArray(o)?o.join("\n"):o,css:{marginTop:"1em",marginBottom:"1em"},customStyle:{marginTop:"1em",marginBottom:"1em"},language:d,style:"light"===e?y.A:q.A,wrapLongLines:!0,...l})}}}(),css:{css:{width:"100%",maxWidth:"600px",margin:"0 auto"},color:"#1e1e1e"},rehypePlugins:[v.A,w.A],remarkPlugins:[f.A,b.A,x.A],children:"# Projects\n\n\n### Economic Analysis Platform\nA comprehensive tool for analyzing economic data, built with Python and modern data science libraries.\n[View Project →](https://github.com/yourusername/project1)\n\n### Survey System\nCustom survey platform with real-time data collection and analysis capabilities.\n[View Project →](https://github.com/yourusername/project2)\n\n### Data Visualization Dashboard\nInteractive dashboard for economic indicators visualization using Plotly and Dash.\n[View Project →](https://github.com/yourusername/project3)\n\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nCurabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.\n\nFusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales.\n\nAenean lectus elit, fermentum non, convallis id, sagittis at, neque. Nullam mauris orci, porttitor eget, sollicitudin non, vulputate id, risus. Ut tincidunt, erat eget feugiat elementum, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed libero pede, suscipit ac, varius vel, egestas non, eros. Praesent malesuada, diam id pretium elementum, eros sem dictum tortor, vel consectetuer odio sem sed wisi. Donec nonummy magna quis risus. Quisque eleifend. Phasellus tempor vehicula justo. Aliquam lacinia metus ut elit. Suspendisse iaculis mauris nec lorem. Sed et libero. Proin dapibus, justo et rhoncus ultrices, risus urna fermentum mi, in porttitor pede justo eu massa. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n"})})}),(0,a.Y)(p.Flex,{align:"start",className:"rx-Stack",direction:"column",gap:"3",children:(0,a.FD)(p.Flex,{align:"start",className:"rx-Stack",css:{width:"100%",maxWidth:"100%",marginInlineStart:"auto",marginInlineEnd:"auto",background:"#1e1e1e",borderTop:"0.25em solid #64b692","@media screen and (min-width: 0)":{paddingInlineStart:"1em",paddingInlineEnd:"1em"},"@media screen and (min-width: 30em)":{paddingInlineStart:"1.5em",paddingInlineEnd:"1.5em"},"@media screen and (min-width: 48em)":{paddingInlineStart:"20em",paddingInlineEnd:"20em"},"@media screen and (min-width: 62em)":{paddingInlineStart:"20em",paddingInlineEnd:"20em"},paddingTop:"1em",paddingBottom:"1em"},direction:"row",gap:"3",children:[(0,a.Y)(p.Flex,{align:"start",className:"rx-Stack",css:{paddingInlineStart:"1.5em",paddingInlineEnd:"1.5em"},direction:"row",gap:"8",children:(0,a.Y)(p.Text,{as:"p",css:{color:"#f0eedc",fontSize:"0.7em",whiteSpace:"nowrap"},children:"Created by Diego Mora with Reflex, 2025 \xa9"})}),(0,a.Y)(p.Flex,{css:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}),(0,a.FD)(p.Flex,{align:"start",className:"rx-Stack",css:{paddingInlineStart:"0.7em",paddingInlineEnd:"0.7em"},direction:"row",gap:"8",children:[(0,a.FD)(p.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"row",gap:"2",children:[(0,a.Y)(r.d8,{}),(0,a.Y)(r.O9,{})]}),(0,a.FD)(p.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"row",gap:"2",children:[(0,a.Y)(r.IS,{}),(0,a.Y)(r.fo,{})]}),(0,a.FD)(p.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"row",gap:"2",children:[(0,a.Y)(r.GK,{}),(0,a.Y)(r.IT,{})]}),(0,a.FD)(p.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"row",gap:"2",children:[(0,a.Y)(r.LV,{}),(0,a.Y)(r.KD,{})]})]})]})})]}),(0,a.FD)(S(),{children:[(0,a.Y)("title",{children:"Publications | Diego Mora"}),(0,a.Y)("meta",{content:"favicon.ico",property:"og:image"})]})]})]})}},18526:(e,s,i)=>{"use strict";i.d(s,{GK:()=>j,IS:()=>u,IT:()=>g,KD:()=>f,LV:()=>h,O9:()=>m,d8:()=>d,fo:()=>p,uV:()=>c});var t=i(2445),a=i(19188),n=i(96540);i(32930);var r=i(84217),o=i(91106),l=i.n(o);function c(){let{resolvedColorMode:e}=(0,n.useContext)(a.ColorModeContext);return(0,t.FD)("a",{css:{position:"fixed",bottom:"1rem",right:"1rem",display:"flex","flex-direction":"row",gap:"0.375rem","align-items":"center",width:"auto","border-radius":"0.5rem",color:"light"===e?"#E5E7EB":"#27282B",border:"light"===e?"1px solid #27282B":"1px solid #E5E7EB","background-color":"light"===e?"#151618":"#FCFCFD",padding:"0.375rem",transition:"background-color 0.2s ease-in-out","box-shadow":"0 1px 2px 0 rgba(0, 0, 0, 0.05)","z-index":"9998",cursor:"pointer",align:"center",textAlign:"center"},href:"https://reflex.dev",target:"_blank",children:[(0,t.FD)("svg",{css:{fill:"white",viewBox:"0 0 16 16"},height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.Y)("rect",{css:{fill:"#6E56CF"},height:"16",rx:"2",width:"16"}),(0,t.Y)("path",{css:{fill:"white"},d:"M10 9V13H12V9H10Z"}),(0,t.Y)("path",{css:{fill:"white"},d:"M4 3V13H6V9H10V7H6V5H10V7H12V3H4Z"})]}),(0,t.Y)(r.Box,{css:{"@media screen and (min-width: 0)":{display:"none"},"@media screen and (min-width: 30em)":{display:"none"},"@media screen and (min-width: 48em)":{display:"none"},"@media screen and (min-width: 62em)":{display:"block"}},children:(0,t.Y)(r.Text,{as:"p",css:{color:"var(--slate-1)",fontWeight:"600",fontFamily:"'Instrument Sans', sans-serif","--default-font-family":"'Instrument Sans', sans-serif",fontSize:"0.875rem",lineHeight:"1rem",letterSpacing:"-0.00656rem"},children:"Built with Reflex"})})]})}function d(){return(0,t.Y)(r.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,t.Y)(l(),{href:"mailto:morabdiego@gmail.com",passHref:!0,children:(0,t.Y)("img",{css:{width:"20px",height:"20px",marginRight:"2",filter:"invert(1)","&:hover":{opacity:.8}},src:"/ico_email.png"})})})}function m(){return(0,t.Y)(r.Link,{asChild:!0,css:{color:"#f0eedc","&:hover":{color:"#64b692"}},target:"_blank",children:(0,t.Y)(l(),{href:"mailto:morabdiego@gmail.com",passHref:!0,children:"morabdiego@gmail.com"})})}function u(){return(0,t.Y)(r.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,t.Y)(l(),{href:"https://www.linkedin.com/in/morabdiego/",passHref:!0,children:(0,t.Y)("img",{css:{width:"20px",height:"20px",marginRight:"2",filter:"invert(1)","&:hover":{opacity:.8}},src:"/ico_linkedin.png"})})})}function p(){return(0,t.Y)(r.Link,{asChild:!0,css:{color:"#f0eedc","&:hover":{color:"#64b692"}},target:"_blank",children:(0,t.Y)(l(),{href:"https://www.linkedin.com/in/morabdiego/",passHref:!0,children:"/morabdiego"})})}function j(){return(0,t.Y)(r.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,t.Y)(l(),{href:"https://github.com/morabdiego",passHref:!0,children:(0,t.Y)("img",{css:{width:"20px",height:"20px",marginRight:"2",filter:"invert(1)","&:hover":{opacity:.8}},src:"/ico_github.png"})})})}function g(){return(0,t.Y)(r.Link,{asChild:!0,css:{color:"#f0eedc","&:hover":{color:"#64b692"}},target:"_blank",children:(0,t.Y)(l(),{href:"https://github.com/morabdiego",passHref:!0,children:"/morabdiego"})})}function h(){return(0,t.Y)(r.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,t.Y)(l(),{href:"https://www.instagram.com/morabdiego/",passHref:!0,children:(0,t.Y)("img",{css:{width:"20px",height:"20px",marginRight:"2",filter:"invert(1)","&:hover":{opacity:.8}},src:"/ico_instagram.png"})})})}function f(){return(0,t.Y)(r.Link,{asChild:!0,css:{color:"#f0eedc","&:hover":{color:"#64b692"}},target:"_blank",children:(0,t.Y)(l(),{href:"https://www.instagram.com/morabdiego/",passHref:!0,children:"/morabdiego"})})}},83508:(e,s,i)=>{var t={"./":[68956,48358,47681,18369,42540,68956],"./abap":[55396,55396],"./abap.js":[55396,55396],"./abnf":[46661,46661],"./abnf.js":[46661,46661],"./actionscript":[90867,90867],"./actionscript.js":[90867,90867],"./ada":[34988,34988],"./ada.js":[34988,34988],"./agda":[42633,42633],"./agda.js":[42633,42633],"./al":[91467,91467],"./al.js":[91467,91467],"./antlr4":[6539,6539],"./antlr4.js":[6539,6539],"./apacheconf":[88490,88490],"./apacheconf.js":[88490,88490],"./apex":[23190,23190],"./apex.js":[23190,23190],"./apl":[90387,90387],"./apl.js":[90387,90387],"./applescript":[5683,5683],"./applescript.js":[5683,5683],"./aql":[52454,52454],"./aql.js":[52454,52454],"./arduino":[86796,86796],"./arduino.js":[86796,86796],"./arff":[25725,25725],"./arff.js":[25725,25725],"./asciidoc":[82853,82853],"./asciidoc.js":[82853,82853],"./asm6502":[75568,75568],"./asm6502.js":[75568,75568],"./asmatmel":[19590,19590],"./asmatmel.js":[19590,19590],"./aspnet":[1177,1177],"./aspnet.js":[1177,1177],"./autohotkey":[7539,7539],"./autohotkey.js":[7539,7539],"./autoit":[82476,82476],"./autoit.js":[82476,82476],"./avisynth":[5934,5934],"./avisynth.js":[5934,5934],"./avro-idl":[74520,74520],"./avro-idl.js":[74520,74520],"./bash":[39032,39032],"./bash.js":[39032,39032],"./basic":[70234,70234],"./basic.js":[70234,70234],"./batch":[99692,99692],"./batch.js":[99692,99692],"./bbcode":[97335,97335],"./bbcode.js":[97335,97335],"./bicep":[63675,63675],"./bicep.js":[63675,63675],"./birb":[97067,97067],"./birb.js":[97067,97067],"./bison":[41131,41131],"./bison.js":[41131,41131],"./bnf":[8690,8690],"./bnf.js":[8690,8690],"./brainfuck":[79319,79319],"./brainfuck.js":[79319,79319],"./brightscript":[47689,47689],"./brightscript.js":[47689,47689],"./bro":[26133,26133],"./bro.js":[26133,26133],"./bsl":[4329,4329],"./bsl.js":[4329,4329],"./c":[94641,94641],"./c.js":[94641,94641],"./cfscript":[56256,56256],"./cfscript.js":[56256,56256],"./chaiscript":[98144,98144],"./chaiscript.js":[98144,98144],"./cil":[72976,72976],"./cil.js":[72976,72976],"./clike":[54222,54222],"./clike.js":[54222,54222],"./clojure":[63076,63076],"./clojure.js":[63076,63076],"./cmake":[23667,23667],"./cmake.js":[23667,23667],"./cobol":[3255,3255],"./cobol.js":[3255,3255],"./coffeescript":[6965,6965],"./coffeescript.js":[6965,6965],"./concurnas":[57864,57864],"./concurnas.js":[57864,57864],"./coq":[71073,71073],"./coq.js":[71073,71073],"./core":[28677,28677],"./core.js":[28677,28677],"./cpp":[98017,98017],"./cpp.js":[98017,98017],"./crystal":[2462,2462],"./crystal.js":[2462,2462],"./csharp":[43569,43569],"./csharp.js":[43569,43569],"./cshtml":[82213,47681,82213],"./cshtml.js":[82213,47681,82213],"./csp":[15406,15406],"./csp.js":[15406,15406],"./css":[65035,65035],"./css-extras":[67,67],"./css-extras.js":[67,67],"./css.js":[65035,65035],"./csv":[48984,48984],"./csv.js":[48984,48984],"./cypher":[72217,72217],"./cypher.js":[72217,72217],"./d":[31268,31268],"./d.js":[31268,31268],"./dart":[59699,59699],"./dart.js":[59699,59699],"./dataweave":[42170,42170],"./dataweave.js":[42170,42170],"./dax":[92585,92585],"./dax.js":[92585,92585],"./dhall":[4419,4419],"./dhall.js":[4419,4419],"./diff":[43225,43225],"./diff.js":[43225,43225],"./django":[96965,96965],"./django.js":[96965,96965],"./dns-zone-file":[16793,16793],"./dns-zone-file.js":[16793,16793],"./docker":[62026,62026],"./docker.js":[62026,62026],"./dot":[52779,52779],"./dot.js":[52779,52779],"./ebnf":[24409,24409],"./ebnf.js":[24409,24409],"./editorconfig":[54941,54941],"./editorconfig.js":[54941,54941],"./eiffel":[92537,92537],"./eiffel.js":[92537,92537],"./ejs":[46768,46768],"./ejs.js":[46768,46768],"./elixir":[80553,80553],"./elixir.js":[80553,80553],"./elm":[63356,63356],"./elm.js":[63356,63356],"./erb":[4351,4351],"./erb.js":[4351,4351],"./erlang":[69161,69161],"./erlang.js":[69161,69161],"./etlua":[39097,39097],"./etlua.js":[39097,39097],"./excel-formula":[37360,37360],"./excel-formula.js":[37360,37360],"./factor":[92237,18369,92237],"./factor.js":[92237,18369,92237],"./false":[26051,26051],"./false.js":[26051,26051],"./firestore-security-rules":[35962,35962],"./firestore-security-rules.js":[35962,35962],"./flow":[3058,3058],"./flow.js":[3058,3058],"./fortran":[70842,70842],"./fortran.js":[70842,70842],"./fsharp":[76388,76388],"./fsharp.js":[76388,76388],"./ftl":[88918,88918],"./ftl.js":[88918,88918],"./gap":[41224,41224],"./gap.js":[41224,41224],"./gcode":[46156,46156],"./gcode.js":[46156,46156],"./gdscript":[55970,55970],"./gdscript.js":[55970,55970],"./gedcom":[7231,7231],"./gedcom.js":[7231,7231],"./gherkin":[36810,36810],"./gherkin.js":[36810,36810],"./git":[65692,65692],"./git.js":[65692,65692],"./glsl":[6230,6230],"./glsl.js":[6230,6230],"./gml":[97536,97536],"./gml.js":[97536,97536],"./gn":[50755,50755],"./gn.js":[50755,50755],"./go":[52764,52764],"./go-module":[42421,42421],"./go-module.js":[42421,42421],"./go.js":[52764,52764],"./graphql":[14345,14345],"./graphql.js":[14345,14345],"./groovy":[21e3,21e3],"./groovy.js":[21e3,21e3],"./haml":[84660,84660],"./haml.js":[84660,84660],"./handlebars":[55770,55770],"./handlebars.js":[55770,55770],"./haskell":[15008,15008],"./haskell.js":[15008,15008],"./haxe":[3430,3430],"./haxe.js":[3430,3430],"./hcl":[16027,16027],"./hcl.js":[16027,16027],"./hlsl":[58837,58837],"./hlsl.js":[58837,58837],"./hoon":[66566,66566],"./hoon.js":[66566,66566],"./hpkp":[11445,11445],"./hpkp.js":[11445,11445],"./hsts":[57302,57302],"./hsts.js":[57302,57302],"./http":[42882,42882],"./http.js":[42882,42882],"./ichigojam":[34419,34419],"./ichigojam.js":[34419,34419],"./icon":[155,155],"./icon.js":[155,155],"./icu-message-format":[8053,8053],"./icu-message-format.js":[8053,8053],"./idris":[20633,20633],"./idris.js":[20633,20633],"./iecst":[57040,57040],"./iecst.js":[57040,57040],"./ignore":[87188,87188],"./ignore.js":[87188,87188],"./index":[68956,48358,47681,18369,42540,68956],"./index.js":[68956,48358,47681,18369,42540,68956],"./inform7":[40586,40586],"./inform7.js":[40586,40586],"./ini":[72530,72530],"./ini.js":[72530,72530],"./io":[84838,84838],"./io.js":[84838,84838],"./j":[58650,58650],"./j.js":[58650,58650],"./java":[82818,82818],"./java.js":[82818,82818],"./javadoc":[20690,20690],"./javadoc.js":[20690,20690],"./javadoclike":[93645,93645],"./javadoclike.js":[93645,93645],"./javascript":[58889,58889],"./javascript.js":[58889,58889],"./javastacktrace":[1247,1247],"./javastacktrace.js":[1247,1247],"./jexl":[27031,27031],"./jexl.js":[27031,27031],"./jolie":[76299,76299],"./jolie.js":[76299,76299],"./jq":[4999,4999],"./jq.js":[4999,4999],"./js-extras":[50293,50293],"./js-extras.js":[50293,50293],"./js-templates":[61619,61619],"./js-templates.js":[61619,61619],"./jsdoc":[30231,30231],"./jsdoc.js":[30231,30231],"./json":[85620,85620],"./json.js":[85620,85620],"./json5":[75041,75041],"./json5.js":[75041,75041],"./jsonp":[73150,73150],"./jsonp.js":[73150,73150],"./jsstacktrace":[91808,91808],"./jsstacktrace.js":[91808,91808],"./jsx":[41693,41693],"./jsx.js":[41693,41693],"./julia":[55529,55529],"./julia.js":[55529,55529],"./keepalived":[28240,28240],"./keepalived.js":[28240,28240],"./keyman":[38835,38835],"./keyman.js":[38835,38835],"./kotlin":[2415,2415],"./kotlin.js":[2415,2415],"./kumir":[47500,47500],"./kumir.js":[47500,47500],"./kusto":[65208,65208],"./kusto.js":[65208,65208],"./latex":[60588,60588],"./latex.js":[60588,60588],"./latte":[35350,35350],"./latte.js":[35350,35350],"./less":[19491,19491],"./less.js":[19491,19491],"./lilypond":[16585,16585],"./lilypond.js":[16585,16585],"./liquid":[37018,37018],"./liquid.js":[37018,37018],"./lisp":[62794,62794],"./lisp.js":[62794,62794],"./livescript":[91875,91875],"./livescript.js":[91875,91875],"./llvm":[82767,82767],"./llvm.js":[82767,82767],"./log":[8582,8582],"./log.js":[8582,8582],"./lolcode":[80530,80530],"./lolcode.js":[80530,80530],"./lua":[97974,97974],"./lua.js":[97974,97974],"./magma":[89973,89973],"./magma.js":[89973,89973],"./makefile":[99702,99702],"./makefile.js":[99702,99702],"./markdown":[57071,57071],"./markdown.js":[57071,57071],"./markup":[81930,81930],"./markup-templating":[27658,27658],"./markup-templating.js":[27658,27658],"./markup.js":[81930,81930],"./matlab":[78191,78191],"./matlab.js":[78191,78191],"./maxscript":[71933,71933],"./maxscript.js":[71933,71933],"./mel":[73830,73830],"./mel.js":[73830,73830],"./mermaid":[21835,21835],"./mermaid.js":[21835,21835],"./mizar":[43607,43607],"./mizar.js":[43607,43607],"./mongodb":[11382,11382],"./mongodb.js":[11382,11382],"./monkey":[89299,89299],"./monkey.js":[89299,89299],"./moonscript":[58452,58452],"./moonscript.js":[58452,58452],"./n1ql":[74778,74778],"./n1ql.js":[74778,74778],"./n4js":[83799,83799],"./n4js.js":[83799,83799],"./nand2tetris-hdl":[96219,96219],"./nand2tetris-hdl.js":[96219,96219],"./naniscript":[15821,15821],"./naniscript.js":[15821,15821],"./nasm":[26271,26271],"./nasm.js":[26271,26271],"./neon":[82242,82242],"./neon.js":[82242,82242],"./nevod":[738,738],"./nevod.js":[738,738],"./nginx":[22248,22248],"./nginx.js":[22248,22248],"./nim":[47480,47480],"./nim.js":[47480,47480],"./nix":[10043,10043],"./nix.js":[10043,10043],"./nsis":[88553,88553],"./nsis.js":[88553,88553],"./objectivec":[27062,27062],"./objectivec.js":[27062,27062],"./ocaml":[45636,45636],"./ocaml.js":[45636,45636],"./opencl":[27229,27229],"./opencl.js":[27229,27229],"./openqasm":[95480,95480],"./openqasm.js":[95480,95480],"./oz":[62031,62031],"./oz.js":[62031,62031],"./parigp":[55623,55623],"./parigp.js":[55623,55623],"./parser":[7737,7737],"./parser.js":[7737,7737],"./pascal":[37922,37922],"./pascal.js":[37922,37922],"./pascaligo":[85249,85249],"./pascaligo.js":[85249,85249],"./pcaxis":[4178,4178],"./pcaxis.js":[4178,4178],"./peoplecode":[69956,69956],"./peoplecode.js":[69956,69956],"./perl":[30915,30915],"./perl.js":[30915,30915],"./php":[8136,8136],"./php-extras":[86234,86234],"./php-extras.js":[86234,86234],"./php.js":[8136,8136],"./phpdoc":[42540,42540],"./phpdoc.js":[42540,42540],"./plsql":[40660,40660],"./plsql.js":[40660,40660],"./powerquery":[82825,82825],"./powerquery.js":[82825,82825],"./powershell":[12931,12931],"./powershell.js":[12931,12931],"./processing":[83469,83469],"./processing.js":[83469,83469],"./prolog":[34345,34345],"./prolog.js":[34345,34345],"./promql":[98081,98081],"./promql.js":[98081,98081],"./properties":[67743,67743],"./properties.js":[67743,67743],"./protobuf":[49469,49469],"./protobuf.js":[49469,49469],"./psl":[3859,3859],"./psl.js":[3859,3859],"./pug":[15388,15388],"./pug.js":[15388,15388],"./puppet":[10248,10248],"./puppet.js":[10248,10248],"./pure":[7412,7412],"./pure.js":[7412,7412],"./purebasic":[23076,23076],"./purebasic.js":[23076,23076],"./purescript":[33863,33863],"./purescript.js":[33863,33863],"./python":[97616,97616],"./python.js":[97616,97616],"./q":[63679,63679],"./q.js":[63679,63679],"./qml":[84474,84474],"./qml.js":[84474,84474],"./qore":[85103,85103],"./qore.js":[85103,85103],"./qsharp":[25267,25267],"./qsharp.js":[25267,25267],"./r":[56882,56882],"./r.js":[56882,56882],"./racket":[23140,23140],"./racket.js":[23140,23140],"./reason":[26030,26030],"./reason.js":[26030,26030],"./regex":[92963,92963],"./regex.js":[92963,92963],"./rego":[11989,11989],"./rego.js":[11989,11989],"./renpy":[41506,41506],"./renpy.js":[41506,41506],"./rest":[52144,52144],"./rest.js":[52144,52144],"./rip":[32111,32111],"./rip.js":[32111,32111],"./roboconf":[96188,96188],"./roboconf.js":[96188,96188],"./robotframework":[72326,72326],"./robotframework.js":[72326,72326],"./ruby":[27101,49482],"./ruby.js":[27101,49482],"./rust":[51616,51616],"./rust.js":[51616,51616],"./sas":[57093,57093],"./sas.js":[57093,57093],"./sass":[16784,16784],"./sass.js":[16784,16784],"./scala":[61370,61370],"./scala.js":[61370,61370],"./scheme":[22433,22433],"./scheme.js":[22433,22433],"./scss":[65118,65118],"./scss.js":[65118,65118],"./shell-session":[491,491],"./shell-session.js":[491,491],"./smali":[89476,89476],"./smali.js":[89476,89476],"./smalltalk":[90409,90409],"./smalltalk.js":[90409,90409],"./smarty":[6,6],"./smarty.js":[6,6],"./sml":[41812,41812],"./sml.js":[41812,41812],"./solidity":[75035,75035],"./solidity.js":[75035,75035],"./solution-file":[88872,88872],"./solution-file.js":[88872,88872],"./soy":[53897,53897],"./soy.js":[53897,53897],"./sparql":[87675,87675],"./sparql.js":[87675,87675],"./splunk-spl":[59405,59405],"./splunk-spl.js":[59405,59405],"./sqf":[73018,48358,73018],"./sqf.js":[73018,48358,73018],"./sql":[71896,71896],"./sql.js":[71896,71896],"./squirrel":[3621,3621],"./squirrel.js":[3621,3621],"./stan":[15186,15186],"./stan.js":[15186,15186],"./stylus":[39848,39848],"./stylus.js":[39848,39848],"./supported-languages":[83736,83736],"./supported-languages.js":[83736,83736],"./swift":[24803,24803],"./swift.js":[24803,24803],"./systemd":[45555,45555],"./systemd.js":[45555,45555],"./t4-cs":[51821,51821],"./t4-cs.js":[51821,51821],"./t4-templating":[1586,1586],"./t4-templating.js":[1586,1586],"./t4-vb":[41459,41459],"./t4-vb.js":[41459,41459],"./tap":[86305,86305],"./tap.js":[86305,86305],"./tcl":[43655,43655],"./tcl.js":[43655,43655],"./textile":[80345,80345],"./textile.js":[80345,80345],"./toml":[706,706],"./toml.js":[706,706],"./tremor":[14719,14719],"./tremor.js":[14719,14719],"./tsx":[38755,38755],"./tsx.js":[38755,38755],"./tt2":[16034,16034],"./tt2.js":[16034,16034],"./turtle":[8984,8984],"./turtle.js":[8984,8984],"./twig":[51587,51587],"./twig.js":[51587,51587],"./typescript":[69345,69345],"./typescript.js":[69345,69345],"./typoscript":[94883,94883],"./typoscript.js":[94883,94883],"./unrealscript":[92038,69657],"./unrealscript.js":[92038,69657],"./uorazor":[73792,51411],"./uorazor.js":[73792,51411],"./uri":[49562,49562],"./uri.js":[49562,49562],"./v":[81022,81022],"./v.js":[81022,81022],"./vala":[28064,28064],"./vala.js":[28064,28064],"./vbnet":[58567,58567],"./vbnet.js":[58567,58567],"./velocity":[24625,24625],"./velocity.js":[24625,24625],"./verilog":[72522,72522],"./verilog.js":[72522,72522],"./vhdl":[5548,5548],"./vhdl.js":[5548,5548],"./vim":[3792,3792],"./vim.js":[3792,3792],"./visual-basic":[36169,36169],"./visual-basic.js":[36169,36169],"./warpscript":[86627,86627],"./warpscript.js":[86627,86627],"./wasm":[44202,44202],"./wasm.js":[44202,44202],"./web-idl":[14056,14056],"./web-idl.js":[14056,14056],"./wiki":[66166,66166],"./wiki.js":[66166,66166],"./wolfram":[75504,75504],"./wolfram.js":[75504,75504],"./wren":[3832,3832],"./wren.js":[3832,3832],"./xeora":[69909,69909],"./xeora.js":[69909,69909],"./xml-doc":[52030,52030],"./xml-doc.js":[52030,52030],"./xojo":[11468,11468],"./xojo.js":[11468,11468],"./xquery":[51402,51402],"./xquery.js":[51402,51402],"./yaml":[41701,41701],"./yaml.js":[41701,41701],"./yang":[64991,64991],"./yang.js":[64991,64991],"./zig":[91334,91334],"./zig.js":[91334,91334]};function a(e){if(!i.o(t,e))return Promise.resolve().then(()=>{var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s});var s=t[e],a=s[0];return Promise.all(s.slice(1).map(i.e)).then(()=>i(a))}a.keys=()=>Object.keys(t),a.id=83508,e.exports=a}},e=>{var s=s=>e(e.s=s);e.O(0,[32611,40813,18478,90636,46593,38792],()=>s(48506)),_N_E=e.O()}]);