<template>
  <video
    id="myVideo"
    class="video"
    autoplay="autoplay"
    loop="loop"
    muted
    defaultMuted
    playsinline
    oncontextmenu="return false;"
    preload="auto"
  >
    <source
      :src="video"
      type="video/mp4"
    >

  </video>
</template>

<script>
export default {
  props: {
    video: {
      type: String,
      default: 'default'
    }
  }
};
</script>

<style lang="scss">
    .video{
        width: 100%;
    }
</style>
