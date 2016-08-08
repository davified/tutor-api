// SETTING UP APP.JS
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const dotenv = require('dotenv')
dotenv.load()
const cors = require('cors')

// CREATING THE APP
const app = express()

// enabling cors using the cors package
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, User-Email, Auth-Token')
//   res.header('Access-Control-Allow-Methods', 'POST, PATCH, GET, OPTIONS')
//   next()
// })

mongoose.connect(process.env.MONGODB_URI)

// ROUTES
const router = require('./config/routes')
app.use('/', router)

// ERROR HANDLERS
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: err
  })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
