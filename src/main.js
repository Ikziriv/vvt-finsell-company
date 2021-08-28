import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import supabase from 'vue-3-supabase'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(supabase, {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseKey: import.meta.env.VITE_SUPABASE_KEY,
  options: {}
})

app.use(router)
app.mount('#app')
