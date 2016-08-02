const Question = require('../models/question')

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

module.exports = {
  getAllQuestions: getAllQuestions,
  getAllQuestionsOfOneTopic: getAllQuestionsOfOneTopic
}
