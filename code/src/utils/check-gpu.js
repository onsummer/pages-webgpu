export const isSupportWebGPU = () => {
  return ("gpu" in navigator)
}