const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const uuid = require('uuid')

// User Schema. need to add type (student/parent/tutor), created_at, updated_at later
const UserSchema = new mongoose.Schema({
  ninjaName: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  auth_token: { type: String, unique: true },
  birthday: Date,
  level: String,
  numberOfBadges: { type: Number },
  created_at: Date,
  updated_at: Date
})

UserSchema.pre('save', function (next) {
  let now = new Date()
  this.updated_at = now
  if (!this.created_at) {
    this.created_at = now
  }
  next()
})

UserSchema.pre('save', function (next) {
  const user = this
  // here, we use bcrypt to generate salt, with 8 iterations.
  if (!user.isModified('password')) return next()
  bcrypt.genSalt(8, (err, salt) => {
    if (err) return next(err)
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
  // GENERATE AUTHENTICATION TOKEN
  user.auth_token = uuid.v4()
})

UserSchema.methods.authenticate = function (password, callback) {
  bcrypt.compare(password, this.password, callback)
}

const User = mongoose.model('User', UserSchema)

module.exports = User
