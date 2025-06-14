<script setup>
import { ref } from 'vue'
import state from '../store'

const index = ref(0)

function like() {
  if (index.value < state.profiles.length) {
    const profile = state.profiles[index.value]
    if (!state.likes.includes(profile.id)) state.likes.push(profile.id)
    index.value++
  }
}

function passProfile() {
  if (index.value < state.profiles.length) {
    index.value++
  }
}
</script>

<template>
  <div class="swipe">
    <div v-if="index < state.profiles.length">
      <img :src="state.profiles[index].avatar" :alt="state.profiles[index].name" />
      <h2>{{ state.profiles[index].name }} ({{ state.profiles[index].age }})</h2>
      <p>{{ state.profiles[index].bio }}</p>
      <button @click="passProfile">Pass</button>
      <button @click="like">Like</button>
    </div>
    <p v-else>No more profiles.</p>
  </div>
</template>

<style scoped>
.swipe {
  text-align: center;
}

img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
