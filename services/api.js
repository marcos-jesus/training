import axios from 'axios'
const api = axios.create({
  //baseURL: import.meta.NUXT_PUBLIC_API_BASE,
  baseURL: 'https://challenge.lidmo.com.br/api/'
})

export default api