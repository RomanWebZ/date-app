import { reactive } from 'vue'

const state = reactive({
  user: JSON.parse(localStorage.getItem('user')) || null,
  profiles: [
    {
      id: 1,
      name: 'Alice',
      age: 28,
      bio: 'Loves hiking and outdoor adventures.',
      avatar: 'https://via.placeholder.com/150?text=Alice'
    },
    {
      id: 2,
      name: 'Bob',
      age: 30,
      bio: 'Food enthusiast and movie buff.',
      avatar: 'https://via.placeholder.com/150?text=Bob'
    },
    {
      id: 3,
      name: 'Carol',
      age: 25,
      bio: 'Bookworm who enjoys cozy cafes.',
      avatar: 'https://via.placeholder.com/150?text=Carol'
    }
  ],
  likes: JSON.parse(localStorage.getItem('likes') || '[]'),
  messages: JSON.parse(localStorage.getItem('messages') || '{}')
})

export default state
