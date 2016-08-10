const User = require('../models/user')

function signUp (req, res) {
  const user = new User(req.body)
  user.save((err, user) => {
    console.log(err);
    if (err) return res.status(401).json({err})
    res.status(200).json({message: 'welcome! ', user})
  })
}

function signIn (req, res) {
  const userParams = req.body
  User.findOne({email: userParams.email}, (err, user) => {
    if (err || !user) return res.status(401).json({error: '/signin error 1'})
    user.authenticate(userParams.password, (err, isMatch) => {
      if (err) return res.status(401).json({err: '/signin error 2'})
      res.status(200).json({message: 'sign in success! welcome: ', user})
    })
  })
}

function userLoggedIn (req, res, next) {
  const userEmail = req.get('User-Email')
  const authToken = req.get('Auth-Token')
  if (!userEmail || !authToken) return res.status(401).json({error: 'unauthorised'})

  User.findOne({email: userEmail, auth_token: authToken}, (err, user) => {
    if (err || !user) return res.status(401).json({error: 'unauthorised'})
    req.currentUser = user
    next()
  })
}

function editUser (req, res) {
  User.findOne({email: req.body.email}, (err, user) => {
    if (err || !user) return res.status(401).json({error: '/editUser error 1'})
    if (req.body.ninjaName) user.ninjaName = req.body.ninjaName
    if (req.body.firstName) user.firstName = req.body.firstName
    if (req.body.lastName) user.lastName = req.body.lastName
    if (req.body.user_image) user.user_image = req.body.user_image
    if (req.body.email) user.email = req.body.email
    if (req.body.password) user.password = req.body.password
    if (req.body.birthday) user.birthday = req.body.birthday
    if (req.body.school) user.school = req.body.school
    if (req.body.aboutMe) user.aboutMe = req.body.aboutMe
    if (req.body.level) {
      if (req.body.level === 'Primary 1') user.level = 1
      if (req.body.level === 'Primary 2') user.level = 2
      if (req.body.level === 'Primary 3') user.level = 3
      if (req.body.level === 'Primary 4') user.level = 4
      if (req.body.level === 'Primary 5') user.level = 5
      if (req.body.level === 'Primary 6') user.level = 6
      if (req.body.level === 'Secondary 1') user.level = 7
      if (req.body.level === 'Secondary 1') user.level = 8
      if (req.body.level === 'Secondary 1') user.level = 9
      if (req.body.level === 'Secondary 1') user.level = 10
      if (req.body.level === 'Secondary 1') user.level = 11
    }
    user.updated_at = new Date()
    user.save(console.log(user))
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  userLoggedIn: userLoggedIn,
  editUser: editUser
}
