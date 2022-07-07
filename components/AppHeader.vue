<template>
  <div class="container">
    <header class="nav">
      <img class="logo" src="/images/logo.png" width="55px" height="55px">
      <AppHeaderHamburger @toggleModal="toggleModal" />
    </header>

    <transition name="slide">
      <div v-if="isOpen" ref="sidebar" class="sidebar">
        <AppSidebar />
      </div>
    </transition>
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
    toggleModal: function (isOpen) {
      this.isOpen = isOpen;
      document.body.classList.add('pause');
    }
  }
};
</script>

<style lang="scss">
.nav {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: black;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;

  .logo {
    margin-left: 1rem;
  }
}

.sidebar {
  position: fixed;
  width: 100vw;
  height: 92vh;
  background-color: #000;
  z-index: 1;
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
