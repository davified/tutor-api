// SETTING UP APP.JS
const express = require('express')
const app = express()

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const dotenv = require('dotenv')
dotenv.load()
const cors = require('cors')
// const session = require('express-session')
const passport = require('passport')
// const flash = require('connect-flash')

// CREATING THE APP


// enabling cors using the cors package
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, User-Email, Auth-Token')
  res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, OPTIONS')
  next()
})

mongoose.connect(process.env.MONGODB_URI)

// app.use(session({secret: 'anystringoftext',
//                 saveUnitialized: true,
//                 resave: true}))
// app.use(passport.initialize())
// app.use(passport.session())
// app.use(flash())

//temp test
// app.set('view engine', 'ejs')
// require('./config/routes.js')(app, passport)

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
