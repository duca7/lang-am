<template>
  <div class="app" :class="freezingClass">
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
    const { freezingClass } = useFreezingScreen();

    return {
      freezingClass
    };
  }
};
</script>
