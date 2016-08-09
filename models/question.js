const mongoose = require('mongoose')

// subsequently, we need to add solutions (sketches. jpeg?). topic: [TopicSchema]
const QuestionSchema = new mongoose.Schema({
  question: String,
  questionImage: String,
  options: Array,
  answer: String,
  answerImage: String,
  hints: String,
  topic: String,
  subtopic: String,
  level: Number
})

const Question = mongoose.model('Question', QuestionSchema)

module.exports = Question
