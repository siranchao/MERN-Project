const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 8000

//call connection DB module
connectDB()

const app = express()

//ad middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))

//use error handler middleware
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port: ${port}`))