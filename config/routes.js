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
// Get 10 questions for each topic
router.get('/exercises/:topic', questionsController.getAllQuestionsOfOneTopic)
// Submit/log answers for exercise
router.post('/exercises/:topic', questionsController.submitAnswer)

// router.post('/dashboard', dashboardController.showDashboard)

// Get all topics for a given level
router.get('/topics/:level', questionsController.getTopic)

// show user dashboard
// router.get('/dashboard/:user_id')

module.exports = router
