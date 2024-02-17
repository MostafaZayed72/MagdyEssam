// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: ['@nuxtjs/tailwindcss','nuxt-icon',(_options, nuxt) => {
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      // @ts-expect-error
      config.plugins.push(vuetify({ autoImport: true }))
    })
  },],
    buildModules: [
      // Simple usage
      '@nuxtjs/vuetify',
  
      // With options
      ['@nuxtjs/vuetify', { /* module options */ }]
    ]
  
  

})
