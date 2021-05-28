import{S as e,i as t,s as n,e as a,t as r,a as s,c as o,b as c,d as $,f as i,g as l,h as f,j as u,k as g,n as p,o as m,l as d,m as h,R as v,p as w,q as x,r as b,u as y,v as P,w as E,x as V,N as A,y as C,z as I,A as M}from"./vendor.3c8c3571.js";function z(e){let t,n,m,d,h,v,w,x,b,y,P;return{c(){t=a("div"),n=a("canvas"),m=a("p"),d=r("你的浏览器不支持 HTML5 /"),h=a("canva"),v=r(" 标签"),w=s(),x=a("p"),b=r("Your browser not support HTML5 /"),y=a("canva"),P=r(" element."),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=c(t);n=o(a,"CANVAS",{id:!0,class:!0});var r=c(n);m=o(r,"P",{});var s=c(m);d=$(s,"你的浏览器不支持 HTML5 /"),h=o(s,"CANVA",{}),c(h).forEach(i),v=$(s," 标签"),s.forEach(i),w=l(r),x=o(r,"P",{});var f=c(x);b=$(f,"Your browser not support HTML5 /"),y=o(f,"CANVA",{}),c(y).forEach(i),P=$(f," element."),f.forEach(i),r.forEach(i),a.forEach(i),this.h()},h(){f(n,"id","gpuweb"),f(n,"class","svelte-xldlzz"),f(t,"class","gpuweb-container svelte-xldlzz")},m(a,r){u(a,t,r),g(t,n),g(n,m),g(m,d),g(m,h),g(m,v),g(n,w),g(n,x),g(x,b),g(x,y),g(x,P),e[1](n)},p:p,i:p,o:p,d(n){n&&i(t),e[1](null)}}}function D(e,t,n){let a;return m((()=>{"gpu"in navigator?(n(0,a.width=a.clientWidth,a),n(0,a.height=a.clientHeight,a),(async()=>{const e=await navigator.gpu.requestAdapter(),t=await e.requestDevice(),n="bgra8unorm",r=a.getContext("gpupresent").configureSwapChain({device:t,format:n}),s=t.createRenderPipeline({vertex:{module:t.createShaderModule({code:"\n        const pos: array<vec2<f32>, 3> = array<vec2<f32>, 3>(\n          vec2<f32>(0.0, 0.5),\n          vec2<f32>(-0.5, -0.5),\n          vec2<f32>(0.5, -0.5)\n        );\n\n        [[builtin(position)]] var<out> Position: vec4<f32>;\n        [[builtin(vertex_index)]] var<in> VertexIndex: i32;\n\n        [[stage(vertex)]]\n        fn main() -> void {\n          Position = vec4<f32>(pos[VertexIndex], 0.0, 1.0);\n          return;\n        }\n        "}),entryPoint:"main"},fragment:{module:t.createShaderModule({code:"\n        [[location(0)]] var<out> outColor: vec4<f32>;\n\n        [[stage(fragment)]]\n        fn main() -> void {\n          outColor = vec4<f32>(1.0, 0.2, 0.4, 1.0);\n          return;\n        }\n        "}),entryPoint:"main",targets:[{format:n}]},primitive:{topology:"triangle-list"}}),o=t.createCommandEncoder(),c={colorAttachments:[{view:r.getCurrentTexture().createView(),loadValue:{r:0,g:0,b:0,a:1}}]},$=o.beginRenderPass(c);$.setPipeline(s),$.draw(3,1,0,0),$.endPass(),t.queue.submit([o.finish()])})()):alert("你的浏览器不支持 WebGPU 或未开启 WebGPU 支持")})),[a,function(e){d[e?"unshift":"push"]((()=>{a=e,n(0,a)}))}]}class H extends e{constructor(e){super(),t(this,e,D,z,n,{})}}function S(e){let t;return{c(){t=r("01. 三角形")},l(e){t=$(e,"01. 三角形")},m(e,n){u(e,t,n)},d(e){e&&i(t)}}}function T(e){let t,n;return t=new M({props:{href:"/pages-webgpu/triangle",$$slots:{default:[S]},$$scope:{ctx:e}}}),{c(){w(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,a){b(t,e,a),n=!0},p(e,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(P(t.$$.fragment,e),n=!0)},o(e){E(t.$$.fragment,e),n=!1},d(e){V(t,e)}}}function W(e){let t;return{c(){t=r("comming ...")},l(e){t=$(e,"comming ...")},m(e,n){u(e,t,n)},d(e){e&&i(t)}}}function q(e){let t,n;return t=new M({props:{href:"/pages-webgpu/blog",$$slots:{default:[W]},$$scope:{ctx:e}}}),{c(){w(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,a){b(t,e,a),n=!0},p(e,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(P(t.$$.fragment,e),n=!0)},o(e){E(t.$$.fragment,e),n=!1},d(e){V(t,e)}}}function G(e){let t,n,a,r;return t=new I({props:{$$slots:{default:[T]},$$scope:{ctx:e}}}),a=new I({props:{$$slots:{default:[q]},$$scope:{ctx:e}}}),{c(){w(t.$$.fragment),n=s(),w(a.$$.fragment)},l(e){x(t.$$.fragment,e),n=l(e),x(a.$$.fragment,e)},m(e,s){b(t,e,s),u(e,n,s),b(a,e,s),r=!0},p(e,n){const r={};4&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r);const s={};4&n&&(s.$$scope={dirty:n,ctx:e}),a.$set(s)},i(e){r||(P(t.$$.fragment,e),P(a.$$.fragment,e),r=!0)},o(e){E(t.$$.fragment,e),E(a.$$.fragment,e),r=!1},d(e){V(t,e),e&&i(n),V(a,e)}}}function L(e){let t,n,r,$,p,m;return n=new A({props:{vertical:!0,$$slots:{default:[G]},$$scope:{ctx:e}}}),p=new C({props:{path:"/pages-webgpu/triangle",component:H}}),{c(){t=a("div"),w(n.$$.fragment),r=s(),$=a("div"),w(p.$$.fragment),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=c(t);x(n.$$.fragment,a),r=l(a),$=o(a,"DIV",{class:!0});var s=c($);x(p.$$.fragment,s),s.forEach(i),a.forEach(i),this.h()},h(){f($,"class","right-panel svelte-48abhn"),f(t,"class","root svelte-48abhn")},m(e,a){u(e,t,a),b(n,t,null),g(t,r),g(t,$),b(p,$,null),m=!0},p(e,t){const a={};4&t&&(a.$$scope={dirty:t,ctx:e}),n.$set(a)},i(e){m||(P(n.$$.fragment,e),P(p.$$.fragment,e),m=!0)},o(e){E(n.$$.fragment,e),E(p.$$.fragment,e),m=!1},d(e){e&&i(t),V(n),V(p)}}}function N(e){let t,n,p,m,d,A,C,I,M;return t=new h({}),A=new v({props:{url:e[0],$$slots:{default:[L]},$$scope:{ctx:e}}}),{c(){w(t.$$.fragment),n=s(),p=a("div"),m=r("我的 WebGPU 示例"),d=s(),w(A.$$.fragment),this.h()},l(e){x(t.$$.fragment,e),n=l(e),p=o(e,"DIV",{id:!0,class:!0});var a=c(p);m=$(a,"我的 WebGPU 示例"),a.forEach(i),d=l(e),x(A.$$.fragment,e),this.h()},h(){f(p,"id","title"),f(p,"class","svelte-48abhn")},m(a,r){b(t,a,r),u(a,n,r),u(a,p,r),g(p,m),u(a,d,r),b(A,a,r),C=!0,I||(M=y(p,"click",e[1]),I=!0)},p(e,[t]){const n={};1&t&&(n.url=e[0]),4&t&&(n.$$scope={dirty:t,ctx:e}),A.$set(n)},i(e){C||(P(t.$$.fragment,e),P(A.$$.fragment,e),C=!0)},o(e){E(t.$$.fragment,e),E(A.$$.fragment,e),C=!1},d(e){V(t,e),e&&i(n),e&&i(p),e&&i(d),V(A,e),I=!1,M()}}}function U(e,t,n){let{url:a=""}=t;return e.$$set=e=>{"url"in e&&n(0,a=e.url)},[a,()=>{window.location.href="/pages-webgpu/"}]}new class extends e{constructor(e){super(),t(this,e,U,N,n,{url:0})}}({target:document.getElementById("app")});
