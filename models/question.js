const mongoose = require('mongoose')

const TopicSchema = new mongoose.Schema({
  topic: String,
  level: Number
})

// subsequently, we need to add solutions (sketches. jpeg?)
const QuestionSchema = new mongoose.Schema({
  question: String,
  options: Array,
  answer: Number,
  hints: String,
  topic: [TopicSchema]
})

const Question = mongoose.model('Question', QuestionSchema)
const Topic = mongoose.model('Topic', TopicSchema)

module.exports = Question
