<script>
  import { Button, Icon, ListGroup, ListGroupItem, Styles } from "sveltestrap";
  import { isSupportWebGPU } from "./utils/check-gpu.js";
  import Logo from "./components/Logo.svelte";
  import Board from "./components/Board.svelte";
  import routes from "./routes-data/routes.js";
  import { onMount } from "svelte";
  import { sys } from "./store/sys.js";
  // export let url;

  let catalogVisible = true;
  let icon = "caret-left-square-fill";

  const catalogVisibleHandler = () => {
    catalogVisible = !catalogVisible;
    if (icon === "caret-left-square-fill") {
      icon = "caret-right-square-fill";
    } else {
      icon = "caret-left-square-fill";
    }
  };

  onMount(() => {
    const condition = isSupportWebGPU();
    if (condition === false) {
      confirm(
        "你的浏览器不支持 WebGPU 或 未打开 WebGPU 选项。\n当前只有 Chrome / Edge 的 Canary 版本支持。"
      );
    }
  });

  const onSwitchHandler = (pageName) => {
    sys.update(() => {
      return {
        pageName: pageName
      }
    })
  }

</script>

<div class="catalog {catalogVisible ? '' : 'disable'}">
  <Logo />
  <ListGroup>
    {#each routes as { label, pageName }, i}
      <ListGroupItem tag="button" on:click={() => {
        onSwitchHandler(pageName)
      }} action>
        {i + 1}. {label}
      </ListGroupItem>
    {/each}
  </ListGroup>
</div>
<div class="content {catalogVisible ? '' : 'contentFull'}">
  <div class="content-header">
    <Button color="light" size="sm" on:click={catalogVisibleHandler}>
      <Icon name={icon} />
    </Button>
  </div>
  <Board />
</div>

<Styles />

<style>
  @font-face {
    font-family: FiraCode;
    src: url("/pages-webgpu/fonts/FiraCode-Regular.woff2"),
      url("/pages-webgpu/fonts/FiraCode-Regular.woff");
  }

  @font-face {
    font-family: Helvetica;
    src: url("/pages-webgpu/fonts/Helvetica.woff");
  }

  .catalog {
    width: 12vw;
    height: 90vh;
    border-right: 0.125rem solid transparent;
    border-image: linear-gradient(
      to top,
      transparent,
      rgba(10, 10, 10, 0.3),
      transparent
    );
    border-image-slice: 10;
    padding: 2rem;

    transition: width 0.2s;
    overflow-y: auto;
  }

  .disable {
    transition: all 0.2s;
    padding: 0;
    border-right: 0;
    width: 0;
  }

  .content {
    width: 88vw;
    height: 100vh;
    background-color: rgb(253, 253, 253);
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    transition: width 0.2s;
  }

  .content-header {
    margin-bottom: 0.5rem;
  }

  .contentFull {
    width: 100vw;
    transition: width 0.2s;
  }
</style>
