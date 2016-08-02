// load in the environment vars
require('dotenv').config()
var seeder = require('mongoose-seed')

// Connect to MongoDB via Mongoose
seeder.connect(process.env.MONGODB_URI, function () {
  // Load Mongoose models
  seeder.loadModels([
    'models/question.js'
  ])

  // Clear specified collections
  seeder.clearModels('Question', function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      console.log('done');
    })
  })
})

// Data array containing seed data - documents organized by Model
var data = [
  {
    'model': 'Question',
    'documents': [
      {
        'question': 'What is 1 + 1?',
        'options': [1, 10, 2, 100],
        'answer': 2,
        'hints': 'If I gave you an egg and your mom gives you another egg, how many eggs do you have?',
        'topic': 'Arithmetic',
        'subtopic': 'Addition',
        'level': 1
      },
      {
        'question': 'What is 2 + 2?',
        'options': [1, 10, 2, 4],
        'answer': 3,
        'hints': 'If I gave you two eggs and your mom gives you another two eggs, how many eggs do you have?',
        'topic': 'Arithmetic',
        'subtopic': 'Addition',
        'level': 2
      },
      {
        'question': 'What is 3 + 3?',
        'options': [1, 10, 2, 6],
        'answer': 3,
        'hints': 'If I gave you three eggs and your mom gives you another three eggs, how many eggs do you have?',
        'topic': 'Arithmetic',
        'subtopic': 'Addition',
        'level': 3
      },
      {
        'question': 'What is 4 + 4?',
        'options': [1, 10, 8, 4],
        'answer': 2,
        'hints': 'If I gave you four eggs and your mom gives you another four eggs, how many eggs do you have?',
        'topic': 'Arithmetic',
        'subtopic': 'Addition',
        'level': 3
      }
    ]
  }
]
