import { defineNuxtConfig } from 'nuxt';
import eslintPlugin from 'vite-plugin-eslint';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    meta: [{ name: 'viewport', content: 'user-scalable=no, width=device-width, initial-scale=1' }]
  },
  css: ['@/assets/scss/main.scss'],

  components: {
    global: true,
    dirs: ['~/components']
  },

  vite: {
    plugins: [eslintPlugin()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/global.scss";'
        }
      }
    }
  }
});
