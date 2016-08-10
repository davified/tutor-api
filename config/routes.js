const express = require('express')
const router = express.Router()
const signInUpController = require('../controllers/signInUpController')
// const userController = require('../controllers/userController')
const questionsController = require('../controllers/questionsController')
const dashboardController = require('../controllers/dashboardController')

// 'HELLO WORLD' TEST FOR DEPLOYMENT ON HEROKU
router.get('/', function (req, res) {
  res.status(200).json({message: 'hello world!'})
})
//
// ROUTING END POINTS TO THE APPROPRIATE FUNCTIONS
router.post('/signup', signInUpController.signUp)
router.post('/signin', signInUpController.signIn)

// // USERS
// // Get all users
// router.get('/users', userController.getAllUsers)
// // router.get('/users/:id', userController.findUserById)
// // router.put('/users/:id', userController.editUser)

// QUESTIONS
// Get all questions
router.get('/exercises', questionsController.getAllQuestions)
// Submit/log answers for exercise
router.post('/exercises/:topic', questionsController.submitAnswer)

// router.post('/dashboard', dashboardController.showDashboard)

// Get all topics for a given level
router.get('/levels/:level', questionsController.getTopicsByLevel)

// Get exercise
router.get('/levels/:level/exercises/:topic', questionsController.getQuestionsByTopic)

// Submit exercise
router.post('/submit', questionsController.submitAnswer)

// Edit User details
router.put('/edit-user', signInUpController.editUser)

// show user dashboard
// router.get('/dashboard/:user_id')

module.exports = router
