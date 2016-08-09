const mongoose = require('mongoose')
const Question = require('./question')
const User = require('./user')

const CompletedQuestionSchema = new mongoose.Schema({
  questionId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  userId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  isCorrect: Boolean,
  numberOfWrongAttempts: Number,
  userAnswerImage: String
})

const CompletedQuestion = mongoose.model('CompletedQuestion', CompletedQuestionSchema)

module.exports = CompletedQuestion
