<template>
  <button class="app-button">
    <slot />
  </button>
</template>
<script>
export default {

};
</script>

<style lang="scss" scoped>
.app-button {
    background-color: $primary-dark-red-100;
    color: white;
    padding:1em 1.5em;
    border: none;
    font-weight:bold;
}
</style>
