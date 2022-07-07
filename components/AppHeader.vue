<template>
  <header class="nav">
    <img id="logo" src="/images/logo.png">
    <AppHeaderHamburger />
  </header>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.nav {
  position: fixed;
  box-sizing: border-box;
  background: black;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-height: $navbar-height;
  padding: 0.2rem 1rem ;

  #logo {
    max-height: 50px;
  }
}

</style>
