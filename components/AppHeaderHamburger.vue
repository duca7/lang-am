<template>
  <div class="hamburger"></div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@mixin burger-angle {
  content: '';
  position: absolute;
  background-color: #a52325;
  width: 14px;
  height: 2px;
}
.hamburger {
  position: relative;
  width: 29px;
  height: 3px;
  background-color: #a52325;
  &::after {
    @include burger-angle;
    top: -5px;
    left: 0;
  }
  &::before {
    @include burger-angle;
    height: 2px;
    bottom: -5px;
    right: 0;
  }
}
</style>