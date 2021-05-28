export const isSupportWebGPU = () => {
  if (!("gpu" in navigator)) {
    return false
  }
  return true
}