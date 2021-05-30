import{S as e,i as t,s as n,e as a,t as r,a as s,c as o,b as i,d as c,f as l,g as $,h as f,j as u,k as p,n as g,o as d,l as m,m as v,R as h,p as w,q as x,r as b,u as y,v as P,w as E,x as V,A,y as C,z as I,N as M}from"./vendor.19faf2cf.js";function z(e){let t,n,d,m,v,h,w,x,b,y,P;return{c(){t=a("div"),n=a("canvas"),d=a("p"),m=r("你的浏览器不支持 HTML5 /"),v=a("canva"),h=r(" 标签"),w=s(),x=a("p"),b=r("Your browser not support HTML5 /"),y=a("canva"),P=r(" element."),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=i(t);n=o(a,"CANVAS",{id:!0,class:!0});var r=i(n);d=o(r,"P",{});var s=i(d);m=c(s,"你的浏览器不支持 HTML5 /"),v=o(s,"CANVA",{}),i(v).forEach(l),h=c(s," 标签"),s.forEach(l),w=$(r),x=o(r,"P",{});var f=i(x);b=c(f,"Your browser not support HTML5 /"),y=o(f,"CANVA",{}),i(y).forEach(l),P=c(f," element."),f.forEach(l),r.forEach(l),a.forEach(l),this.h()},h(){f(n,"id","gpuweb"),f(n,"class","svelte-xldlzz"),f(t,"class","gpuweb-container svelte-xldlzz")},m(a,r){u(a,t,r),p(t,n),p(n,d),p(d,m),p(d,v),p(d,h),p(n,w),p(n,x),p(x,b),p(x,y),p(x,P),e[1](n)},p:g,i:g,o:g,d(n){n&&l(t),e[1](null)}}}function D(e,t,n){let a;return d((()=>{"gpu"in navigator?(n(0,a.width=a.clientWidth,a),n(0,a.height=a.clientHeight,a),(async()=>{const e=await navigator.gpu.requestAdapter(),t=await e.requestDevice(),n="bgra8unorm",r=a.getContext("gpupresent").configureSwapChain({device:t,format:n}),s=t.createRenderPipeline({vertex:{module:t.createShaderModule({code:"\n        const pos: array<vec2<f32>, 3> = array<vec2<f32>, 3>(\n          vec2<f32>(0.0, 0.5),\n          vec2<f32>(-0.5, -0.5),\n          vec2<f32>(0.5, -0.5)\n        );\n\n        [[builtin(position)]] var<out> Position: vec4<f32>;\n        [[builtin(vertex_index)]] var<in> VertexIndex: i32;\n\n        [[stage(vertex)]]\n        fn main() -> void {\n          Position = vec4<f32>(pos[VertexIndex], 0.0, 1.0);\n          return;\n        }\n        "}),entryPoint:"main"},fragment:{module:t.createShaderModule({code:"\n        [[location(0)]] var<out> outColor: vec4<f32>;\n\n        [[stage(fragment)]]\n        fn main() -> void {\n          outColor = vec4<f32>(1.0, 0.2, 0.4, 1.0);\n          return;\n        }\n        "}),entryPoint:"main",targets:[{format:n}]},primitive:{topology:"triangle-list"}}),o=t.createCommandEncoder(),i={colorAttachments:[{view:r.getCurrentTexture().createView(),loadValue:{r:0,g:0,b:0,a:1}}]},c=o.beginRenderPass(i);c.setPipeline(s),c.draw(3,1,0,0),c.endPass(),t.queue.submit([o.finish()])})()):alert("你的浏览器不支持 WebGPU 或未开启 WebGPU 支持")})),[a,function(e){m[e?"unshift":"push"]((()=>{a=e,n(0,a)}))}]}class G extends e{constructor(e){super(),t(this,e,D,z,n,{})}}function H(e){let t;return{c(){t=r("01. 三角形")},l(e){t=c(e,"01. 三角形")},m(e,n){u(e,t,n)},d(e){e&&l(t)}}}function S(e){let t,n;return t=new M({props:{href:"/pages-webgpu/triangle",$$slots:{default:[H]},$$scope:{ctx:e}}}),{c(){w(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,a){b(t,e,a),n=!0},p(e,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(P(t.$$.fragment,e),n=!0)},o(e){E(t.$$.fragment,e),n=!1},d(e){V(t,e)}}}function T(e){let t,n;return t=new I({props:{style:"padding: 0.5rem;",active:!0,header:"Part1 三角形",$$slots:{default:[S]},$$scope:{ctx:e}}}),{c(){w(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,a){b(t,e,a),n=!0},p(e,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(P(t.$$.fragment,e),n=!0)},o(e){E(t.$$.fragment,e),n=!1},d(e){V(t,e)}}}function W(e){let t,n,r,c,g,d;return n=new A({props:{stayOpen:!0,style:"width: 10vw;",$$slots:{default:[T]},$$scope:{ctx:e}}}),g=new C({props:{path:"/pages-webgpu/triangle",component:G}}),{c(){t=a("div"),w(n.$$.fragment),r=s(),c=a("div"),w(g.$$.fragment),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=i(t);x(n.$$.fragment,a),r=$(a),c=o(a,"DIV",{class:!0});var s=i(c);x(g.$$.fragment,s),s.forEach(l),a.forEach(l),this.h()},h(){f(c,"class","right-panel svelte-w5f6di"),f(t,"class","root svelte-w5f6di")},m(e,a){u(e,t,a),b(n,t,null),p(t,r),p(t,c),b(g,c,null),d=!0},p(e,t){const a={};4&t&&(a.$$scope={dirty:t,ctx:e}),n.$set(a)},i(e){d||(P(n.$$.fragment,e),P(g.$$.fragment,e),d=!0)},o(e){E(n.$$.fragment,e),E(g.$$.fragment,e),d=!1},d(e){e&&l(t),V(n),V(g)}}}function q(e){let t,n,g,d,m,A,C,I,M,z,D;return t=new v({}),I=new h({props:{url:e[0],$$slots:{default:[W]},$$scope:{ctx:e}}}),{c(){w(t.$$.fragment),n=s(),g=a("div"),d=a("img"),A=r("\r\n  WebGPU 示例"),C=s(),w(I.$$.fragment),this.h()},l(e){x(t.$$.fragment,e),n=$(e),g=o(e,"DIV",{id:!0,class:!0});var a=i(g);d=o(a,"IMG",{src:!0,alt:!0,class:!0}),A=c(a,"\r\n  WebGPU 示例"),a.forEach(l),C=$(e),x(I.$$.fragment,e),this.h()},h(){d.src!==(m="/pages-webgpu/favicon.webp")&&f(d,"src","/pages-webgpu/favicon.webp"),f(d,"alt","icon"),f(d,"class","svelte-w5f6di"),f(g,"id","title"),f(g,"class","svelte-w5f6di")},m(a,r){b(t,a,r),u(a,n,r),u(a,g,r),p(g,d),p(g,A),u(a,C,r),b(I,a,r),M=!0,z||(D=y(g,"click",e[1]),z=!0)},p(e,[t]){const n={};1&t&&(n.url=e[0]),4&t&&(n.$$scope={dirty:t,ctx:e}),I.$set(n)},i(e){M||(P(t.$$.fragment,e),P(I.$$.fragment,e),M=!0)},o(e){E(t.$$.fragment,e),E(I.$$.fragment,e),M=!1},d(e){V(t,e),e&&l(n),e&&l(g),e&&l(C),V(I,e),z=!1,D()}}}function L(e,t,n){let{url:a=""}=t;return e.$$set=e=>{"url"in e&&n(0,a=e.url)},[a,()=>{window.location.href="/pages-webgpu/"}]}new class extends e{constructor(e){super(),t(this,e,L,q,n,{url:0})}}({target:document.getElementById("app")});