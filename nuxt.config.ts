// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/global.css'],
  modules:[
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n.config.ts' ,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }// if you are using custom path, default 
  }
})
