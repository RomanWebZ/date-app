import express from 'express'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const app = express()
app.use(express.json())

const dbPromise = open({ filename: 'database.sqlite', driver: sqlite3.Database })

async function init() {
  const db = await dbPromise
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      gender TEXT,
      dob TEXT,
      interested TEXT,
      bio TEXT,
      interests TEXT,
      phone TEXT,
      email TEXT,
      answers TEXT,
      password TEXT
    );
  `)
}
init()

app.post('/register', async (req, res) => {
  const db = await dbPromise
  const {
    name,
    gender,
    dob,
    interested,
    bio,
    interests,
    phone,
    email,
    answers,
    password
  } = req.body
  try {
    const result = await db.run(
      `INSERT INTO users (name, gender, dob, interested, bio, interests, phone, email, answers, password)
       VALUES (?,?,?,?,?,?,?,?,?,?)`,
      [
        name,
        gender,
        dob,
        JSON.stringify(interested || []),
        bio,
        JSON.stringify(interests || []),
        phone,
        email,
        JSON.stringify(answers || []),
        password
      ]
    )
    res.json({ id: result.lastID })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

app.post('/login', async (req, res) => {
  const db = await dbPromise
  const { email, password } = req.body
  const user = await db.get(
    'SELECT id, name FROM users WHERE email = ? AND password = ?',
    [email, password]
  )
  if (user) {
    res.json(user)
  } else {
    res.status(401).json({ error: 'Invalid credentials' })
  }
})

app.get('/profiles', async (req, res) => {
  const db = await dbPromise
  const rows = await db.all('SELECT id, name, bio FROM users')
  res.json(rows)
})

app.listen(3000, () => {
  console.log('SecretHeaven server running at http://localhost:3000')
})
