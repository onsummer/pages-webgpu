<script>
  import hljs from "highlight.js";
  import javascript from "highlight.js/lib/languages/javascript";
  // import "highlight.js/styles/atelier-heath-dark.css";
  // import "highlight.js/styles/agate.css";
  import "highlight.js/styles/shades-of-purple.css";
  import { onMount } from "svelte";
  import { sys } from "../store/sys.js";

  hljs.registerLanguage("javascript", javascript);

  export let code;
  let codeDiv;

  sys.subscribe(async ({ pageName }) => {
    if (pageName === "" || pageName === undefined) {
      return;
    }
    try {
      const demo = await import(`../pages/${pageName}.js`);
      if ('test' in demo) {
        demo.test()
      } else {
        console.log(pageName)
      }
    }
    catch (e) {
      console.log(e)
    }
  });

  onMount(() => {
    const blocks = codeDiv.querySelectorAll("pre code");
    blocks.forEach((block) => {
      // @ts-ignore
      hljs.highlightElement(block);
    });
  });
</script>

<div bind:this={codeDiv} class="code">
  <pre>
    <code lang="javascript">{code}</code>
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

  code {
    padding: 1rem;
  }
</style>
