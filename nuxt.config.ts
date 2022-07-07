import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  /*
   ** Global CSS
   */
  // modules: [
  //   '@nuxtjs/style-resources'
  // ],
  css: ['~/assets/scss/reset.scss', '~/assets/scss/style.scss', '~/assets/scss/fonts.scss'],
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },
});
