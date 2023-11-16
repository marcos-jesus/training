import { defineStore } from 'pinia'
import api from './api.js'
import {route} from './routes-dictionary'

export const useLoginStore = defineStore('login', {
  persist: {
		storage: persistedState.localStorage,
	},
  state() {
    return {
      loadingLogin: false,
      registerSave: [],
      token: '',

    }
  },

  actions: {
    clearLogin() {
      this.token = ""
      this.registerSave = []

    },

    async doLogin(data) {
      try {
        this.loadingLogin = true
        const resp = await api.post(`${api.defaults.baseURL}${route.AuthLogin}`, data)
        this.token = resp.data.token
        this.loadingLogin = false

        if (resp.status === 200) {
          return navigateTo('/')
        }
      } catch (error) {
        console.error(error)
      }
    },

    async doRegister(data) {
      this.loadingLogin = true
      const resp = await api.post(`${api.defaults.baseURL}${route.AuthRegister}`, data)

      if (resp.status === 201) {
        this.loadingLogin = false

        this.registerSave = data.email

        return navigateTo('/login')
      } else {
        this.loadingLogin = false
      }
    }
  },

})
