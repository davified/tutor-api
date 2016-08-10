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

function getQuestionsByTopic (req, res) {
  var topic = req.params.topic
  var level = req.params.level
  Question.find({topic: topic, level: level}, (err, questions) => {
    if (err) return res.status(401).json({message: 'getQuestionsByTopic error'})
    res.status(200).json({questions})
  })
}

function getTopicsByLevel (req, res) {
  var topicByLevel = []
  var subtopicByLevel = []
  Question.find({level: req.params.level}, (err, questions) => {
    if (err) return res.status(401).json({message: 'getTopicsByLevel error'})
    questions.forEach(function (element) {
      if (!topicByLevel.includes(element.topic)) topicByLevel.push(element.topic)
    })
    res.status(200).json(topicByLevel)
  })
}

function submitAnswer (req, res) {

  // var hasError = false
  var submissionArray = req.body
  var counter = submissionArray.length
  for (var i = 0; i < submissionArray.length; i++) {
    const submission = new CompletedQuestion(submissionArray[i])
    submission.save((err, submission) => {
      counter--
      console.log(counter);
      if (counter === 0) {
        console.log('hello');

        res.status(200).json({message: 'submission success!! '})
      }
    })
  }
  // if (err) return res.status(401).json(err)

}

module.exports = {
  getAllQuestions: getAllQuestions,
  getTopicsByLevel: getTopicsByLevel,
  getQuestionsByTopic: getQuestionsByTopic,
  submitAnswer: submitAnswer
}
