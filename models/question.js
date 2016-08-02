const mongoose = require('mongoose')

// subsequently, we need to add solutions (sketches. jpeg?). topic: [TopicSchema]
const QuestionSchema = new mongoose.Schema({
  question: String,
  options: Array,
  answer: Number,
  hints: String,
  topic: String,
  subtopic: String,
  level: Number
})

const Question = mongoose.model('Question', QuestionSchema)

module.exports = Question
