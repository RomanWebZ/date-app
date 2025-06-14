<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import state from '../store'

const route = useRoute()
const profileId = parseInt(route.params.id)
const profile = state.profiles.find(p => p.id === profileId)
const text = ref('')

if (!state.messages[profileId]) {
  state.messages[profileId] = []
}

const messages = state.messages[profileId]

function send() {
  if (text.value.trim()) {
    messages.push({ from: 'me', text: text.value.trim() })
    text.value = ''
  }
}
</script>

<template>
  <div class="chat">
    <h1>Chat with {{ profile?.name }}</h1>
    <div class="thread">
      <div v-for="(m, i) in messages" :key="i" :class="m.from">
        {{ m.text }}
      </div>
    </div>
    <input v-model="text" placeholder="Message" />
    <button @click="send">Send</button>
  </div>
</template>

<style scoped>
.chat {
  padding: 1rem;
}
.thread {
  margin-bottom: 1rem;
}
.me {
  text-align: right;
}
</style>
