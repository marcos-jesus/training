// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@formkit/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt-alt/proxy'
  ],
  
  tailwindcss: {
    
  },

  pinia: {
		autoImports: ['defineStore'],
	},

  imports: {
		dirs: ['services'],
	},
  
  runtimeConfig: {
    public: {
      USE_PROXY: process.env.ENVIRONMENT === 'dev',
      API_BASE:process.env.NUXT_PUBLIC_API_BASE,
    }
  },

  proxy: {
    proxies: {
      '/api': {
        target: process.env.NUXT_PUBLIC_API_BASE,
        changeOrigin: true,
      }
    }
  },

  experimental: {
    viewTransition: true,
    crossOriginPrefetch: true,
  },

  ssr: false,

})