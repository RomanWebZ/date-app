<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import state from '../store'

const step = ref(1)
const name = ref('')
const gender = ref('')
const dob = ref('')
const interested = ref([])
const bio = ref('')
const interests = ref([])
const phone = ref('')
const email = ref('')
const answers = ref('')
const router = useRouter()

function next() { if (step.value < 5) step.value++ }
function back() { if (step.value > 1) step.value-- }

async function register() {
  state.user = {
    name: name.value,
    gender: gender.value,
    dob: dob.value,
    interested: interested.value,
    bio: bio.value,
    interests: interests.value,
    phone: phone.value,
    email: email.value,
    answers: answers.value
  }
  try {
    await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state.user)
    })
  } catch (e) {
    // ignore errors in demo
  }
  router.push('/profile')
}
</script>

<template>
  <div class="register">
    <h1>Join SecretHeaven</h1>
    <div v-if="step === 1" class="step">
      <input v-model="name" placeholder="Name" />
      <select v-model="gender">
        <option disabled value="">Select gender</option>
        <option>Female</option>
        <option>Male</option>
        <option>Other</option>
      </select>
    </div>
    <div v-else-if="step === 2" class="step">
      <label>Date of birth</label>
      <input type="date" v-model="dob" />
    </div>
    <div v-else-if="step === 3" class="step">
      <label>Interested in</label>
      <select multiple v-model="interested">
        <option>Female</option>
        <option>Male</option>
        <option>Other</option>
      </select>
      <textarea v-model="bio" placeholder="Bio"></textarea>
      <input v-model="interests" placeholder="Sexual interests" />
    </div>
    <div v-else-if="step === 4" class="step">
      <input v-model="phone" placeholder="Phone" />
      <input v-model="email" placeholder="Email" type="email" />
    </div>
    <div v-else class="step">
      <textarea v-model="answers" placeholder="Answers"></textarea>
    </div>
    <div class="actions">
      <button @click="back" v-if="step > 1">Back</button>
      <button v-if="step < 5" @click="next">Next</button>
      <button v-else @click="register">Finish</button>
    </div>
  </div>
</template>

<style scoped>
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
}
.actions {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
}
.step {
  width: 100%;
}
</style>
