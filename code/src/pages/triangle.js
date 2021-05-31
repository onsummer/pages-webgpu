const vertexShaderSource = `
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
`

const fragmentShaderSource = `
[[location(0)]] var<out> outColor: vec4<f32>;

[[stage(fragment)]]
fn main() -> void {
  outColor = vec4<f32>(1.0, 0.2, 0.4, 1.0);
  return;
}
`

const init = async (canvas) => {
  const adapter = await navigator['gpu'].requestAdapter()
  const device = await adapter.requestDevice()

  const context = canvas.getContext('gpupresent')
  const swapChainFormat = `bgra8unorm`
  const swapChain = context.configureSwapChain({
    device,
    format: swapChainFormat
  })

  const pipeline = device.createRenderPipeline({
    vertex: {
      module: device.createShaderModule({
        code: vertexShaderSource
      }),
      entryPoint: 'main',
    },
    fragment: {
      module: device.createShaderModule({
        code: fragmentShaderSource
      }),
      entryPoint: 'main',
      targets: [
        {
          format: swapChainFormat
        }
      ]
    },
    primitive: {
      topology: 'triangle-list',
    }
  })

  const commandEncoder = device.createCommandEncoder()
  const textureView = swapChain.getCurrentTexture().createView()
  const renderPassDescriptor = {
    colorAttachments: [
      {
        view: textureView,
        loadValue: {
          r: 0.0,
          g: 0.0,
          b: 0.0,
          a: 1.0
        }
      }
    ]
  }

  const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor)
  passEncoder.setPipeline(pipeline)
  passEncoder.draw(3, 1, 0, 0)
  passEncoder.endPass()

  device.queue.submit([commandEncoder.finish()])
}

const descText = `
这是案例01，三角形的介绍文字。
TODO
`

const javascriptCode = `const canvas = document.getElementById('gpuweb')

const vertexShaderSource = \`${vertexShaderSource}\`

const fragmentShaderSource = \`${fragmentShaderSource}\`

async function render() {
  /* 初始化，请求适配器、设备、上下文等 */
  const adapter = await navigator.gpu.requestAdapter()
  const device = await adapter.requestDevice()

  const context = canvas.getContext('gpupresent')
  const swapChainFormat = "bgra8unorm"
  const swapChain = context.configureSwapChain({
    device,
    format: swapChainFormat
  })

  /* 组装渲染管线 */
  const pipeline = device.createRenderPipeline({
    vertex: {
      module: device.createShaderModule({
        code: vertexShaderSource
      }),
      entryPoint: 'main',
    },
    fragment: {
      module: device.createShaderModule({
        code: fragmentShaderSource
      }),
      entryPoint: 'main',
      targets: [
        {
          format: swapChainFormat
        }
      ]
    },
    primitive: {
      topology: 'triangle-list',
    }
  })

  /* 创建命令编码器 */
  const commandEncoder = device.createCommandEncoder()
  const textureView = swapChain.getCurrentTexture().createView()
  const renderPassDescriptor = {
    colorAttachments: [
      {
        view: textureView,
        loadValue: {
          r: 0.0,
          g: 0.0,
          b: 0.0,
          a: 1.0
        }
      }
    ]
  }

  /* 使用命令编码器创建渲染通道 */
  const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor)
  passEncoder.setPipeline(pipeline)
  passEncoder.draw(3, 1, 0, 0)
  passEncoder.endPass()

  /* 向设备中的队列发送命令编码 */
  device.queue.submit([commandEncoder.finish()])
}

render()
`

export {
  javascriptCode,
  descText,
  init
}