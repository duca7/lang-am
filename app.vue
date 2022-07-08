<template>
  <AppHeader />

  <AppSidebar />

  <div class="app-container">
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup>
useHead({
  title: 'My App',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'My amazing site.' }]
  // bodyAttrs: {
  // class: 'test'
  // }
});
</script>
