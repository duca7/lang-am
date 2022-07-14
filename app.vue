<template>
  <div class="app">
    <AppHeader />
    <AppSidebar />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  setup () {
    useHead({
      title: 'My App',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
      meta: [{ name: 'description', content: 'My amazing site.' }]
    });
  }
};
</script>

<style lang="scss">
  // .app{
  //   display: flex;
  //   flex-direction: column;
  //   height: 100vh;

  //   footer{
  //     margin-top: auto;
  //   }
  // }
</style>
