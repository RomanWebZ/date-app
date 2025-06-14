<script setup>
import state from '../store'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="messages">
    <h1>Messages</h1>
    <ul>
      <li v-for="id in state.likes" :key="id">
        <RouterLink :to="`/chat/${id}`">
          {{ state.profiles.find(p => p.id === id)?.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.messages {
  padding: 1rem;
}
</style>
