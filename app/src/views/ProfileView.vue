<script setup>
import state from '../store'
</script>

<template>
  <div class="profile">
    <h1>My Profile</h1>
    <p v-if="!state.user">Please register or login.</p>
    <div v-else>
      <p><strong>Name:</strong> {{ state.user.name }}</p>
      <p v-if="state.user.age"><strong>Age:</strong> {{ state.user.age }}</p>
      <p v-if="state.user.bio"><strong>Bio:</strong> {{ state.user.bio }}</p>
    </div>
  </div>
</template>

<style scoped>
.profile {
  padding: 1rem;
}
</style>
