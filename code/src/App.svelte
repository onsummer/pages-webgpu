<script>
  import { Styles } from "sveltestrap";
  import { Nav, NavItem, NavLink } from "sveltestrap";
  import { Router, Link, Route } from "svelte-routing";
  import Triangle from "./pages/Triangle.svelte";

  export let url = "";

  const onTitleClick = () => {
    window.location.href = '/pages-webgpu/'
  }
</script>

<Styles />

<div id="title" on:click={onTitleClick}>我的 WebGPU 示例</div>
<Router {url}>
  <div class="root">
    <Nav vertical>
      <NavItem>
        <NavLink href="/pages-webgpu/triangle"> 01. 三角形 </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/pages-webgpu/blog"> comming ... </NavLink>
      </NavItem>
    </Nav>

    <div class="right-panel">
      <Route path="/pages-webgpu/triangle" component={Triangle} />
    </div>
  </div>
</Router>

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

  #title {
    width: 100vw;
    padding: 1.5rem;
    height: 3rem;
    font-size: 2rem;
    cursor: pointer;
  }

  .root {
    display: flex;
    flex-direction: row;
    margin-top: 3rem;
  }

  .right-panel {
    width: 70vw;
    height: 80vh;
  }
</style>
