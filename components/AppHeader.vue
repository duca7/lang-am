<template>
  <header class="nav">
    <!-- <NuxtLink to="/"> -->
    <img id="logo" src="/images/logo.png" @click="navigate('/')">
    <!-- </NuxtLink> -->
    <AppHeaderHamburger />
  </header>
</template>

<script>
export default {
  setup () {
    const { navigate } = useSidebar();
    return { navigate };
  }
};
</script>

<style lang="scss">
.nav {
    position: fixed;
    box-sizing: border-box;
    background: black;
    z-index: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    min-height: $navbar-height;
    padding: 0.2rem 1rem;

    #logo {
        max-height: 50px;
    }
}
</style>
