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
      },
      {
        'question': 'In 8,413,297, which digit is in the hundred thousands place? ',
        'options': [1, 2, 3, 4],
        'answer': 3,
        'hints': 'lorem ipsum',
        'topic': 'whole numbers',
        'subtopic': 'numbers and algebra',
        'level': 6
      },
      {
        'question': 'Which one of the following numbers is 60 000, when rounded off to the nearest hundred and when rounded off to the nearest thousand? ',
        'options': [59599, 59950, 60050, 60499],
        'answer': 1,
        'hints': 'lorem ipsum',
        'topic': 'whole numbers',
        'subtopic': 'numbers and algebra',
        'level': 6
      },
      {
        'question': 'What is the value of 10 ÷ 5000?',
        'options': [0.002, 0.02, 50, 5000],
        'answer': 0,
        'hints': 'lorem ipsum',
        'topic': 'division',
        'subtopic': 'numbers and algebra',
        'level': 6
      },
      {
        'question': `Which of the following is the closest to math.fraction('1/3')`,
        'options': [0.3, 0.33333333333, 30, 3],
        'answer': 1,
        'hints': 'lorem ipsum',
        'topic': 'fractions',
        'subtopic': 'numbers and algebra',
        'level': 6
      },
      {
        'question': 'What is the volume of a cube of edge 8cm? ',
        'options': ['24cm³', '64cm³', '128cm³', '512cm³'],
        'answer': 3,
        'hints': 'lorem ipsum',
        'topic': 'area and volume',
        'subtopic': 'measurement and geometry',
        'level': 6
      }
    ]
  }
]
