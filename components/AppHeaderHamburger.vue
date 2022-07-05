<template>
  <div class="hamburger" @click="toggleModal">
    <span :class="{ active: isOpen }"></span>
    <span :class="{ active: isOpen }"></span>
    <span :class="{ active: isOpen }"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
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

  margin: 0.5rem;
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
  // align-items: center;
  justify-content: center;
  position: relative;

  span {
    width: $outer-path-width;
    height: 2px;
    background-color: #a52325;
    transition-property: transform color;
    transition: 1s;



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
