<script setup>
import state from '../store'
</script>

<template>
  <div class="profiles">
    <h1>Profiles</h1>
    <p v-if="!state.user">Please log in first.</p>
    <ul>
      <li v-for="profile in state.profiles" :key="profile.id" class="card">
        <img :src="profile.avatar" :alt="profile.name" />
        <h2>{{ profile.name }} ({{ profile.age }})</h2>
        <p>{{ profile.bio }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.profiles {
  padding: 1rem;
}

.card {
  list-style: none;
  margin-bottom: 2rem;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
}

.card img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
