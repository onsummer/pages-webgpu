<script>
  import { onMount } from "svelte";

  import { isSupportWebGPU } from "../utils/check-gpu.js";
  let canvas;

  const load = async () => {
    const adapter = await navigator["gpu"].requestAdapter();
    const device = await adapter.requestDevice();

    const context = canvas.getContext("gpupresent");
    const swapChainFormat = `bgra8unorm`;
    const swapChain = context.configureSwapChain({
      device,
      format: swapChainFormat,
    });

    const pipeline = device.createRenderPipeline({
      vertex: {
        module: device.createShaderModule({
          code: `
        const pos: array<vec2<f32>, 3> = array<vec2<f32>, 3>(
          vec2<f32>(0.0, 0.5),
          vec2<f32>(-0.5, -0.5),
          vec2<f32>(0.5, -0.5)
        );

        [[builtin(position)]] var<out> Position: vec4<f32>;
        [[builtin(vertex_index)]] var<in> VertexIndex: i32;

        [[stage(vertex)]]
        fn main() -> void {
          Position = vec4<f32>(pos[VertexIndex], 0.0, 1.0);
          return;
        }
        `,
        }),
        entryPoint: "main",
      },
      fragment: {
        module: device.createShaderModule({
          code: `
        [[location(0)]] var<out> outColor: vec4<f32>;

        [[stage(fragment)]]
        fn main() -> void {
          outColor = vec4<f32>(1.0, 0.2, 0.4, 1.0);
          return;
        }
        `,
        }),
        entryPoint: "main",
        targets: [
          {
            format: swapChainFormat,
          },
        ],
      },
      primitive: {
        topology: "triangle-list",
      },
    });

    const commandEncoder = device.createCommandEncoder();
    const textureView = swapChain.getCurrentTexture().createView();
    const renderPassDescriptor = {
      colorAttachments: [
        {
          view: textureView,
          loadValue: {
            r: 0.0,
            g: 0.0,
            b: 0.0,
            a: 1.0,
          },
        },
      ],
    };

    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    passEncoder.setPipeline(pipeline);
    passEncoder.draw(3, 1, 0, 0);
    passEncoder.endPass();

    device.queue.submit([commandEncoder.finish()]);
  };

  const adjustCanvas = () => {
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
  }

  onMount(() => {
    if (!isSupportWebGPU()) {
      alert("你的浏览器不支持 WebGPU 或未开启 WebGPU 支持");
    } else {
      adjustCanvas();
      load();
    }
  });
</script>

<div class="gpuweb-container">
  <canvas id="gpuweb" bind:this={canvas}>
    <p>
      你的浏览器不支持 HTML5 /<canva /> 标签
    </p>
    <p>
      Your browser not support HTML5 /<canva /> element.
    </p>
  </canvas>
</div>

<style>
  .gpuweb-container {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, #222, rgb(56, 22, 56));
  }

  #gpuweb {
    width: 100%;
    height: 100%;
  }
</style>
