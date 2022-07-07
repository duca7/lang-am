<template>
  <header class="nav">
    <img class="logo" src="/images/logo.png" width="55px" height="55px" />
    <AppHeaderHamburger @toggleModal="toggleModal" />
  </header>

  <transition name="slide">
    <div v-if="isOpen" ref="sidebar" class="sidebar">
      <AppSidebar></AppSidebar>
    </div>
  </transition>

</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleModal: function (isOpen) {
      console.log(this.isOpen)
      this.isOpen = isOpen
    }
  }
};
</script>

<style lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;

  .logo{
    margin-left: 1rem;
  }
}

.sidebar {
  position: fixed;
  width: 100vw;
  height: 92vh;
  background-color: #000;
}

.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-enter-to {
  transform: translateX(0%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>

