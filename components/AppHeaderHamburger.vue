<template>
  <div class="hamburger" @click="toggleModal">
    <span :class="{ active: isOpen }" />
    <span :class="{ active: isOpen }" />
    <span :class="{ active: isOpen }" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleModal: function () {
      this.isOpen = !this.isOpen;
      this.$emit('toggleModal', this.isOpen);
    }
  }
};
</script>

<style lang="scss">
.hamburger {
  $mid-path-width: 29px;
  $outer-path-width: 14px;

  @mixin outer($rotate) {
    margin: 3px 0;

    &.active {
      background-color: #fff;
      margin-top: 0;
      margin-bottom: 0;
      transform: rotate() translateY(-3px)
    }
  }

  height: 48px;
  width: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  span {
    width: $outer-path-width;
    height: 2px;
    background-color: var(--primary-dark-red);
    transition-property: transform color;
    transition: 0.3s linear;

    &:nth-child(1) {
      margin: 3px 0;
      margin-right: $mid-path-width - $outer-path-width;

      &.active {
        background-color: #fff;
        margin-top: 0;
        margin-bottom: 0;
        transform: rotate(45deg) translateY(-3px)
      }
    }

    &:nth-child(3) {
      margin: 3px 0;
      margin-left: $mid-path-width - $outer-path-width;

      &.active {
        background-color: #fff;
        margin-top: 0;
        margin-bottom: 0;
        transform: rotate(45deg) translateY(3px)
      }
    }

    &:nth-child(2) {
      width: $mid-path-width;
      height: 3px;

      &.active {
        background-color: #fff;
        transform: rotate(-45deg) scaleY(0.6)
      }
    }

  }

}
</style>
