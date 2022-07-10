<template>
  <button :class="`app-button ${buttonSize}`">
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: 'small'
    }
  },
  computed: {
    buttonSize () {
      return ['small', 'medium', 'large'].includes(this.size) ? this.size : 'small';
    }
  }
};
</script>

<style lang="scss" scoped>
.app-button {
  background-color: $primary-dark-red-400;
  color: white;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.small {
    padding: 0.8rem 1.5rem;
  }
  &.medium {
    padding: 0.8rem 2rem;
  }
  &.large {
    padding: 0.8rem 3.5rem;
  }
}
</style>
