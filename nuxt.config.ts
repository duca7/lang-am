import { defineNuxtConfig } from 'nuxt';
import eslintPlugin from 'vite-plugin-eslint';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    meta: [
      { name: 'viewport', content: 'user-scalable=no, width=device-width, initial-scale=1' }
    ]
  },
  css: [
    '~/assets/scss/reset.scss',
    '~/assets/scss/style.scss',
    '~/assets/scss/fonts.scss'],
  styleResources: { scss: ['./assets/scss/*.scss'] },
  vite: {
    plugins: [eslintPlugin()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/variables.scss";'
        }
      }
    }
  }
});
