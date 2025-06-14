import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import state from './store'
import { watch } from 'vue'

const app = createApp(App)

const saved = localStorage.getItem('user')
if (saved) {
  state.user = JSON.parse(saved)
}

watch(
  () => state.user,
  val => localStorage.setItem('user', JSON.stringify(val))
)

watch(
  () => state.likes,
  val => localStorage.setItem('likes', JSON.stringify(val))
)

watch(
  () => state.messages,
  val => localStorage.setItem('messages', JSON.stringify(val))
)

app.use(router)

app.mount('#app')
