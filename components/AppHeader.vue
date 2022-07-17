<template>
  <header class="nav">
    <img v-if="isLogoVisible" id="logo" src="/images/logo.png" @click="navigate('/')">
    <AppBackIcon v-else @click="back()" />
    <AppHeaderHamburger />
  </header>
</template>

<script setup>
const { path, routes, back, navigate } = useSidebar();

const allRoutes = [...routes, { path: '/' }];

const isLogoVisible = computed(() => allRoutes.some(r => r.path === path.value));

</script>

<style lang="scss">
.nav {
    position: fixed;
    box-sizing: border-box;
    background: black;
    z-index: 2;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    min-height: $navbar-height;
    padding: 0.2rem 1rem;

    #logo {
        max-height: 35px;
    }
}
</style>
