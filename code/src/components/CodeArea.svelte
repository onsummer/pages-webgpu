<script>
  import hljs from "highlight.js";
  import javascript from "highlight.js/lib/languages/javascript";
  // import "highlight.js/styles/agate.css";
  import "highlight.js/styles/shades-of-purple.css";
  import { afterUpdate } from "svelte";
  import { sys } from "../store/sys.js";

  hljs.registerLanguage("javascript", javascript);

  let code;
  let codeDiv;

  sys.subscribe(async ({ pageName }) => {
    if (pageName === "" || pageName === undefined) {
      return;
    }
    try {
      const demo = await import(`../pages/${pageName}.js`);
      // 如果直接把 demo.javascriptCode 插入 code 内，貌似无法更新
      code.innerText = demo.javascriptCode;
      const blocks = codeDiv.querySelectorAll("pre code");
      blocks.forEach((block) => {
        // @ts-ignore
        hljs.highlightElement(block);
      });
    } catch (e) {
      console.log(e);
    }
  });
</script>

<div bind:this={codeDiv} class="code">
  <pre>
    <code bind:this={code} lang="javascript"></code>
    <!-- 作为 slot 插入，异步无法更新 -->
  </pre>
</div>

<style>
  @font-face {
    font-family: FiraCode;
    src: url("/pages-webgpu/fonts/FiraCode-Regular.woff2"),
      url("/pages-webgpu/fonts/FiraCode-Regular.woff");
  }

  .code {
    font-family: FiraCode;
    font-size: small;
  }

  pre {
    max-height: 60vh;
    overflow: scroll;
  }

  code {
    padding: 1rem;
  }
</style>
