<script setup>
import { RouterLink } from 'vue-router'
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <nav class="links">
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
      <RouterLink to="/swipe">Browse</RouterLink>
      <RouterLink to="/messages">Messages</RouterLink>
      <RouterLink to="/profile">Profile</RouterLink>
    </nav>
  </main>
</template>

<style scoped>
.links {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}

.links a {
  margin-bottom: 0.5rem;
}
</style>
