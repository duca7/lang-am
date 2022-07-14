<template>
  <div class="app-modal">
    <div class="overlay" @click="closeModal()" />
    <slot />
  </div>
</template>

<script setup>
const emits = defineEmits(['overlayclick']);

function closeModal () {
  emits('closemodal');
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
  right: 0;
  bottom: 0;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: 0.2;
    z-index: -1;
  }
}
</style>
