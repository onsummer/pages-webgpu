<script>
  import { onMount, afterUpdate } from "svelte";
  import CodeArea from "./CodeArea.svelte";

  export let sourceCode = `// 示例代码
function sayHi() {
  console.log('Hello WebGPU!');
}`;

  let gpuCanvas;
  afterUpdate(() => {
    gpuCanvas.width = gpuCanvas.clientWidth;
    gpuCanvas.height = gpuCanvas.clientHeight;
  });
</script>

<div class="board">
  <div class="board-left">
    <CodeArea code={sourceCode} />
  </div>
  <div class="board-right">
    <canvas id="gpucanvas" bind:this={gpuCanvas} />
  </div>
</div>

<style>
  .board {
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 100%;
  }

  .board-left {
    background-color: rgb(255, 255, 255);
    width: 35%;
    padding: 1rem;

    overflow-y: auto;
  }

  /* 滚动槽 */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.06);
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);
  }
  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.12);
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .board-right {
    background-color: rgb(20, 20, 20);
    width: 65%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #gpucanvas {
    width: 50vw;
    height: 70vh;
    background-color: rgb(74, 128, 104);
  }
</style>
