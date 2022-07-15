<template>
  <div class="app-modal">
    <div class="backdrop" @click="closeModal()" />
    <slot />
  </div>
</template>

<script setup>
const emits = defineEmits(['onbackdropclick']);

function closeModal () {
  emits('onbackdropclick');
}
</script>

<style lang="scss" scoped>
.app-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 3;

  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: 0.8;
    z-index: -1;
  }
}
</style>
