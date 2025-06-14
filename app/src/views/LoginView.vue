<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import state from '../store'

const router = useRouter()
const name = ref('')

function login() {
  if (name.value.trim()) {
    state.user = { name: name.value.trim() }
    localStorage.setItem('user', JSON.stringify(state.user))
    router.push('/profiles')
  }
}
</script>

<template>
  <div class="login">
    <h1>Welcome to Date App</h1>
    <input v-model="name" placeholder="Enter your name" />
    <button @click="login">Enter</button>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
}

input {
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 200px;
}
</style>
