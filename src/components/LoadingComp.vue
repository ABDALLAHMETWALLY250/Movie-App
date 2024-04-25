<template>
  <div class="loading">
    <lottie-player
      src="https://lottie.host/6ab95998-1caa-4191-93d1-d01a3b0d1a5a/fJ74xOPW0K.json"
      background="##FFFFFF"
      speed="1"
      style="width: 400px; height: 400px"
      loop
      autoplay
    ></lottie-player>
  </div>
</template>
<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(5px);
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>