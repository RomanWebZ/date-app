<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import state from '../store'

const name = ref('')
const age = ref('')
const bio = ref('')
const router = useRouter()

function register() {
  if (name.value.trim()) {
    state.user = {
      name: name.value.trim(),
      age: age.value,
      bio: bio.value
    }
    router.push('/profile')
  }
}
</script>

<template>
  <div class="register">
    <h1>Create Account</h1>
    <input v-model="name" placeholder="Name" />
    <input v-model="age" placeholder="Age" type="number" />
    <textarea v-model="bio" placeholder="Bio"></textarea>
    <button @click="register">Register</button>
  </div>
</template>

<style scoped>
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
}

input,
textarea {
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 200px;
}
</style>
