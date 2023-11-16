import { defineStore } from 'pinia'
import api from './api.js'
import {route} from './routes-dictionary'

const useLogin = useLoginStore()
export const useTodoStore = defineStore('store', {
    persist: {
        storage: persistedState.localStorage,
    },
    state() {
      return {
        loadingTodo: false,
        tasks: []
      }
    },

    actions: {
        clearTodo() {
            this.tasks = []
        },

        async doGetTasks() {
            try {
                api.defaults.headers.common['Authorization'] = `Bearer ${useLogin.token}`
                this.loadingTodo = true

                const resp = await api.get(`${api.defaults.baseURL}${route.GetTasks}`)
                
                if (resp.status === 200) {
                    this.loadingTodo = false
                    this.tasks = resp.data
                }else {
                    this.loadingTodo = false
                }
            } catch(error) {
                if (error.response.status) {
                    this.loadingTodo = false
                }
            }
        },

        async createTask(data) {
            try {
                api.defaults.headers.common['Authorization'] = `Bearer ${useLogin.token}`
                this.loadingTodo = true
                const resp = await api.post(`${api.defaults.baseURL}${route.GetTasks}`, data)
                
                if (resp.status === 201) {
                    this.doGetTasks()
                    this.loadingTodo = false
                }else {
                    this.loadingTodo = false
                }
            } catch(error) {
                if (error.response.status) {
                    this.loadingTodo = false
                }
            }
        },

        async deleteTask(id) {
            try {
                api.defaults.headers.common['Authorization'] = `Bearer ${useLogin.token}`
                this.loadingTodo = true
                const resp = await api.delete(`${api.defaults.baseURL}${route.DeleteTask}/${id}`)
                
                if (resp.status === 200) {
                    this.doGetTasks()
                    this.loadingTodo = false
                }else {
                    this.loadingTodo = false
                }
            } catch(error) {
                if (error.response.status) {
                    this.loadingTodo = false
                }
            }
        }
    }
})