<template>
  <button :class="`app-button ${buttonSize} font-rlw `">
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

<style lang="scss">
.app-button {
  background-color: $primary-dark-red-400;
  color: white;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  span{
    font-weight: 500;
    font-size: 1.1em;
    margin:0 5px;
  }

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
