const express = require('express')
const { PORT } = require('./config')
const { connectDB } = require('./connections')

const app = express()

connectDB()

app.get('/', (req, res) => {
  res.json({ 'msg': "hello" })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
