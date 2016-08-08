const Question = require('../models/question')
const CompletedQuestion = require('../models/completedQuestion')

function getAllQuestions (req, res, next) {
  if (req.query.search) {
    Question.find({topic: new RegExp(req.query.search, 'i')}).exec(function (err, questions) {
      if (err) return next(err)
      res.status(200).json({questions})
    })
  } else {
    Question.find({}).exec(function (err, questions) {
      if (err) return next(err)
      res.status(200).json({questions})
    })
  }
}

function getAllQuestionsOfOneTopic (req, res) {
  Question.find({topic: req.params.topic}, (err, questions) => {
    if (err) return res.status(401).json({message: 'getAllQuestionsOfOneTopic error'})
    res.status(200).json({questions})
  })
}

function submitAnswer (req, res) {
  let completedQuestion = new CompletedQuestion()

}


function getTopic (req, res) {
  var topicByLevel = []
  var subtopicByLevel = []
  Question.find({level: req.params.level}, (err, questions) => {
    if (err) return res.status(401).json({message: 'getTopic error'})
    questions.forEach(function(element) {
      if(!topicByLevel.includes(element.topic)) topicByLevel.push(element.topic)
    })
    res.status(200).json(topicByLevel)
  })
}

function submitAnswer (req, res) {

}

module.exports = {
  getAllQuestions: getAllQuestions,
  getAllQuestionsOfOneTopic: getAllQuestionsOfOneTopic,
  getTopic: getTopic,
  submitAnswer: submitAnswer
}
