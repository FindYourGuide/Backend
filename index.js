const express = require('express')
const { PORT } = require('./config')
const { connectDB } = require('./connections')
const cors = require('cors')
const { authRouter } = require('./routes')

const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
  res.json({ 'msg': "hello" })
})

app.use('/api/auth', authRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
