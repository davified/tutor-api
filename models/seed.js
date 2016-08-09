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
        'answer': '2',
        'hints': 'If I gave you an egg and your mom gives you another egg, how many eggs do you have?',
        'topic': 'arithmetic',
        'subtopic': 'addition',
        'level': 1
      },
      {
        'question': 'What is 1 + 1?',
        'options': [1, 10, 2, 100],
        'answer': '2',
        'hints': 'If I gave you an egg and your mom gives you another egg, how many eggs do you have?',
        'topic': 'arithmetic',
        'subtopic': 'addition',
        'level': 1
      },
      {
        'question': 'What is 2 + 2?',
        'options': [1, 10, 2, 4],
        'answer': '3',
        'hints': 'If I gave you two eggs and your mom gives you another two eggs, how many eggs do you have?',
        'topic': 'arithmetic',
        'subtopic': 'addition',
        'level': 2
      },
      {
        'question': 'What is 2 + 2?',
        'options': [1, 10, 2, 4],
        'answer': '3',
        'hints': 'If I gave you two eggs and your mom gives you another two eggs, how many eggs do you have?',
        'topic': 'arithmetic',
        'subtopic': 'addition',
        'level': 2
      },
      {
        'question': 'What is 3 + 3?',
        'options': [1, 10, 2, 6],
        'answer': '3',
        'hints': 'If I gave you three eggs and your mom gives you another three eggs, how many eggs do you have?',
        'topic': 'arithmetic',
        'subtopic': 'addition',
        'level': 3
      },
      {
        'question': 'What is 4 + 4?',
        'options': [1, 10, 8, 4],
        'answer': '2',
        'hints': 'If I gave you four eggs and your mom gives you another four eggs, how many eggs do you have?',
        'topic': 'arithmetic',
        'subtopic': 'addition',
        'level': 3
      },
      {
        'question': 'In 8,413,297, which digit is in the hundred thousands place? ',
        'options': [1, 2, 3, 4],
        'answer': '3',
        'hints': 'lorem ipsum',
        'topic': 'whole numbers',
        'subtopic': 'numbers and algebra',
        'level': 6
      },
      {
        'question': 'Which one of the following numbers is 60 000, when rounded off to the nearest hundred and when rounded off to the nearest thousand? ',
        'options': [59599, 59950, 60050, 60499],
        'answer': '1',
        'hints': 'lorem ipsum',
        'topic': 'whole numbers',
        'subtopic': 'numbers and algebra',
        'level': 6
      },
      {
        'question': 'What is the value of 10 ÷ 5000?',
        'options': [0.002, 0.02, 50, 5000],
        'answer': '0',
        'hints': 'lorem ipsum',
        'topic': 'division',
        'subtopic': 'numbers and algebra',
        'level': 6
      },
      {
        'question': `Which of the following is the closest to 1/3`,
        'options': [0.3, 0.33333333333, 30, 3],
        'answer': '1',
        'hints': 'lorem ipsum',
        'topic': 'fractions',
        'subtopic': 'numbers and algebra',
        'level': 6
      },
      {
        'question': 'What is the volume of a cube of edge 8cm? ',
        'options': ['24cm³', '64cm³', '128cm³', '512cm³'],
        'answer': '3',
        'hints': 'lorem ipsum',
        'topic': 'area and volume',
        'subtopic': 'measurement and geometry',
        'level': 6
      },
      {
        'question': 'Which of the following is equivalent to 3 ÷ 7/9',
        'options': ['1/3 x 9/7', '7/9 x 3', '2 + 1/3', '3 + 6/7'],
        'answer': '0',
        'hints': 'lorem ipsum',
        'topic': 'fractions',
        'subtopic': 'four operations with fractions',
        'level': 6
      },
      {
        'question': 'A 4/5 kg of honeydew was cut into 8 equal pieces. What is the mass of each piece of honeydew? ',
        'options': ['1/10 kg', '5/32 kg', '6 2/5 kg', '7 1/5 kg'],
        'answer': '0',
        'hints': 'lorem ipsum',
        'topic': 'fractions',
        'subtopic': 'four operations with fractions',
        'level': 6
      },
      {
        'question': 'A kg of dried mushrooms costs $28. What is the cost of 200 g of the dried mushrooms?',
        'options': ['$5.60', '$11.20', '$14.00', '$56.00'],
        'answer': '0',
        'hints': 'lorem ipsum',
        'topic': 'decimals',
        'subtopic': 'four operations with decimals',
        'level': 6
      },
      {
        'question': 'The usual price of a power bank was $75. During a sale, it was sold at a discount of 20%. How much was the discount?',
        'options': ['$60', '$55', '$15', '$11'],
        'answer': '0',
        'hints': 'lorem ipsum',
        'topic': 'percentage',
        'subtopic': 'percentage',
        'level': 6
      },
      {
        'question': 'The length of a baseball bat is 5/2 of the length of a table tennis bat. The baseball bat is 18 cm longer than the table tennis bat. Find the length of the table tennis bat. ',
        'options': ['2cm', '6cm', '10cm', '12cm'],
        'answer': '3',
        'hints': 'lorem ipsum',
        'topic': 'fractions',
        'subtopic': 'four operations with fractions',
        'level': 6
      },
      {
        'question': '6 children shared a pizza equally at a party. One of them gave away 1/2 of his share to his sister. What fraction of the pizza had he left? ',
        'options': ['1/12', '1/6', '1/3', '1/2'],
        'answer': '0',
        'hints': 'lorem ipsum',
        'topic': 'fractions',
        'subtopic': 'four operations with fractions',
        'level': 6
      },
      {
        'question': 'Mrs Smith baked 32 pies and 40 puffs. She sold all the pies at $w each and all the puffs at $2 each. How much money did she collect altogether? ',
        'options': ['$104w', '$112w', '$(32w + 80) ', '$(40w + 60)'],
        'answer': '2',
        'hints': 'lorem ipsum',
        'topic': 'algebra',
        'subtopic': 'algebraic expressions in one variable',
        'level': 6
      },
      {
        'question': '10 similar pens cost $14. Helix paid $30 for 30 pens. How rnuch discount was he given?',
        'options': ['$10', '$12', '$16', '$28'],
        'answer': '1',
        'hints': 'lorem ipsum',
        'topic': 'four operations',
        'subtopic': 'order of operations',
        'level': 6
      },
      {
        'question': 'Anthon had a 10-m long string. He cut 5 pieces of string, each measuring 4/5 m to tie some boxes. He then cut the remaining string into some pieces each of length 5/8 m to tie some parcels. How many pieces of string, each 5/8 m in length, did Anthon cut altogether? ',
        'options': [7, 8, 9, 10],
        'answer': '2',
        'hints': 'lorem ipsum',
        'topic': 'fractions',
        'subtopic': 'four operations with fractions',
        'level': 6
      },
      {
        'question': 'Find the value of 46 - 19 + 3 x 8 ÷ 4',
        'answer': '33',
        'hints': 'lorem ipsum',
        'topic': 'whole numbers',
        'subtopic': 'four operations',
        'level': 6
      },
      {
        'question': 'What is the value of 6370 ÷ 70?',
        'answer': '91',
        'hints': 'lorem ipsum',
        'topic': 'whole numbers',
        'subtopic': 'four operations',
        'level': 6
      },
      {
        'question': 'Express 5 2/11 as a decimal. Leave your answer correct to 2 decimal places.',
        'answer': '5.18',
        'hints': 'lorem ipsum',
        'topic': 'decimals',
        'subtopic': 'decimals',
        'level': 6
      },
      {
        'question': 'What fraction is exactly halfway between 2/9 and 3/9',
        'answer': '5/18',
        'hints': 'lorem ipsum',
        'topic': 'fractions',
        'subtopic': 'four operations with fractions',
        'level': 6
      },
      {
        'question': 'In a class of 40 pupils. 13 boys and 9 girls wear spectacles. What fraction of the class does not wear spectacles? Express your answer in the simplest form.',
        'answer': '9/20',
        'hints': 'lorem ipsum',
        'topic': 'fractions',
        'subtopic': 'four operations with fractions',
        'level': 6
      },
      {
        'question': 'Maggie left her house at 3.40 .p.m. and reached her friend\'s house at 5.25 p.m. How long did she take to travel to her friend\'s house? (express your answer in hour(s) and minutes)',
        'answer': '1 hour 45 minutes',
        'hints': 'lorem ipsum',
        'topic': 'time, distance and speed',
        'subtopic': 'time',
        'level': 6
      },
      {
        'question': 'Tosh had 2 ropes with a total length of 10.1 m. When he cut 4.07 m from the longer rope, the length of the remaining rope was twice of the length of the shorter rope. Find the length of the shorter rope.',
        'answer': '2.01',
        'hints': 'lorem ipsum',
        'topic': 'decimals',
        'subtopic': 'four operations with decimals',
        'level': 6
      },
      {
        'question': 'Jaden poured 7.2 l of apple juice into some glasses, each with a capacity of 300 ml. How many glasses did Jaden use altogether? ',
        'answer': '24',
        'hints': 'lorem ipsum',
        'topic': 'decimals',
        'subtopic': 'four operations with decimals',
        'level': 6
      },
      {
        'question': 'Max wrote a string of letters in the following pattern as shown below. \n  J K K L L L J K K L L L J K K L L L \n \n If the pattern were to continue and he wrote a total of 65 letters , how many \'L\' would there be altogether?',
        'answer': '37',
        'hints': 'lorem ipsum',
        'topic': 'patterns',
        'subtopic': 'patterns',
        'level': 6
      },
      {
        'question': '[Primary 5] In 8,413,297, which digit is in the hundred thousands place? ',
        'options': [1, 2, 3, 4],
        'answer': '3',
        'hints': 'lorem ipsum',
        'topic': 'whole numbers',
        'subtopic': 'numbers and algebra',
        'level': 5
      },
      {
        'question': '[Primary 5] Which one of the following numbers is 60 000, when rounded off to the nearest hundred and when rounded off to the nearest thousand? ',
        'options': [59599, 59950, 60050, 60499],
        'answer': '1',
        'hints': 'lorem ipsum',
        'topic': 'whole numbers',
        'subtopic': 'numbers and algebra',
        'level': 5
      },
      {
        'question': '[Primary 5] What is the value of 10 ÷ 5000?',
        'options': [0.002, 0.02, 50, 5000],
        'answer': '0',
        'hints': 'lorem ipsum',
        'topic': 'division',
        'subtopic': 'numbers and algebra',
        'level': 5
      },
      {
        'question': `[Primary 5] Which of the following is the closest to 1/3`,
        'options': [0.3, 0.33333333333, 30, 3],
        'answer': '1',
        'hints': 'lorem ipsum',
        'topic': 'fractions',
        'subtopic': 'numbers and algebra',
        'level': 5
      },
      {
        'question': '[Primary 5] What is the volume of a cube of edge 8cm? ',
        'options': ['24cm³', '64cm³', '128cm³', '512cm³'],
        'answer': '3',
        'hints': 'lorem ipsum',
        'topic': 'area and volume',
        'subtopic': 'measurement and geometry',
        'level': 5
      },
      {
        'question': '[Primary 5] Which of the following is equivalent to 3 ÷ 7/9',
        'options': ['1/3 x 9/7', '7/9 x 3', '2 + 1/3', '3 + 6/7'],
        'answer': '0',
        'hints': 'lorem ipsum',
        'topic': 'fractions',
        'subtopic': 'four operations with fractions',
        'level': 5
      },
      {
        'question': '[Primary 5] A 4/5 kg of honeydew was cut into 8 equal pieces. What is the mass of each piece of honeydew? ',
        'options': ['1/10 kg', '5/32 kg', '6 2/5 kg', '7 1/5 kg'],
        'answer': '0',
        'hints': 'lorem ipsum',
        'topic': 'fractions',
        'subtopic': 'four operations with fractions',
        'level': 5
      },
      {
        'question': '[Primary 5] A kg of dried mushrooms costs $28. What is the cost of 200 g of the dried mushrooms?',
        'options': ['$5.60', '$11.20', '$14.00', '$56.00'],
        'answer': '0',
        'hints': 'lorem ipsum',
        'topic': 'decimals',
        'subtopic': 'four operations with decimals',
        'level': 5
      },
      {
        'question': '[Primary 5] The usual price of a power bank was $75. During a sale, it was sold at a discount of 20%. How much was the discount?',
        'options': ['$60', '$55', '$15', '$11'],
        'answer': '0',
        'hints': 'lorem ipsum',
        'topic': 'percentage',
        'subtopic': 'percentage',
        'level': 5
      },
      {
        'question': '[Primary 5] The length of a baseball bat is 5/2 of the length of a table tennis bat. The baseball bat is 18 cm longer than the table tennis bat. Find the length of the table tennis bat. ',
        'options': ['2cm', '6cm', '10cm', '12cm'],
        'answer': '3',
        'hints': 'lorem ipsum',
        'topic': 'fractions',
        'subtopic': 'four operations with fractions',
        'level': 5
      },
      {
        'question': '[Primary 5] 6 children shared a pizza equally at a party. One of them gave away 1/2 of his share to his sister. What fraction of the pizza had he left? ',
        'options': ['1/12', '1/6', '1/3', '1/2'],
        'answer': '0',
        'hints': 'lorem ipsum',
        'topic': 'fractions',
        'subtopic': 'four operations with fractions',
        'level': 5
      },
      {
        'question': '[Primary 5] Mrs Smith baked 32 pies and 40 puffs. She sold all the pies at $w each and all the puffs at $2 each. How much money did she collect altogether? ',
        'options': ['$104w', '$112w', '$(32w + 80) ', '$(40w + 60)'],
        'answer': '2',
        'hints': 'lorem ipsum',
        'topic': 'algebra',
        'subtopic': 'algebraic expressions in one variable',
        'level': 5
      },
      {
        'question': '[Primary 5] 10 similar pens cost $14. Helix paid $30 for 30 pens. How rnuch discount was he given?',
        'options': ['$10', '$12', '$16', '$28'],
        'answer': '1',
        'hints': 'lorem ipsum',
        'topic': 'four operations',
        'subtopic': 'order of operations',
        'level': 5
      },
      {
        'question': '[Primary 5] Anthon had a 10-m long string. He cut 5 pieces of string, each measuring 4/5 m to tie some boxes. He then cut the remaining string into some pieces each of length 5/8 m to tie some parcels. How many pieces of string, each 5/8 m in length, did Anthon cut altogether? ',
        'options': [7, 8, 9, 10],
        'answer': '2',
        'hints': 'lorem ipsum',
        'topic': 'fractions',
        'subtopic': 'four operations with fractions',
        'level': 5
      },
      {
        'question': '[Primary 5] Find the value of 46 - 19 + 3 x 8 ÷ 4',
        'answer': '33',
        'hints': 'lorem ipsum',
        'topic': 'whole numbers',
        'subtopic': 'four operations',
        'level': 5
      },
      {
        'question': '[Primary 5] What is the value of 6370 ÷ 70?',
        'answer': '91',
        'hints': 'lorem ipsum',
        'topic': 'whole numbers',
        'subtopic': 'four operations',
        'level': 5
      },
      {
        'question': '[Primary 5] Express 5 2/11 as a decimal. Leave your answer correct to 2 decimal places.',
        'answer': '5.18',
        'hints': 'lorem ipsum',
        'topic': 'decimals',
        'subtopic': 'decimals',
        'level': 5
      },
      {
        'question': '[Primary 5] What fraction is exactly halfway between 2/9 and 3/9',
        'answer': '5/18',
        'hints': 'lorem ipsum',
        'topic': 'fractions',
        'subtopic': 'four operations with fractions',
        'level': 5
      },
      {
        'question': '[Primary 5] In a class of 40 pupils. 13 boys and 9 girls wear spectacles. What fraction of the class does not wear spectacles? Express your answer in the simplest form.',
        'answer': '9/20',
        'hints': 'lorem ipsum',
        'topic': 'fractions',
        'subtopic': 'four operations with fractions',
        'level': 5
      },
      {
        'question': '[Primary 5] Maggie left her house at 3.40 .p.m. and reached her friend\'s house at 5.25 p.m. How long did she take to travel to her friend\'s house? (express your answer in hour(s) and minutes)',
        'answer': '1 hour 45 minutes',
        'hints': 'lorem ipsum',
        'topic': 'time, distance and speed',
        'subtopic': 'time',
        'level': 5
      },
      {
        'question': '[Primary 5] Tosh had 2 ropes with a total length of 10.1 m. When he cut 4.07 m from the longer rope, the length of the remaining rope was twice of the length of the shorter rope. Find the length of the shorter rope.',
        'answer': '2.01',
        'hints': 'lorem ipsum',
        'topic': 'decimals',
        'subtopic': 'four operations with decimals',
        'level': 5
      },
      {
        'question': '[Primary 5] Jaden poured 7.2 l of apple juice into some glasses, each with a capacity of 300 ml. How many glasses did Jaden use altogether? ',
        'answer': '24',
        'hints': 'lorem ipsum',
        'topic': 'decimals',
        'subtopic': 'four operations with decimals',
        'level': 5
      },
      {
        'question': '[Primary 5] Max wrote a string of letters in the following pattern as shown below. \n  J K K L L L J K K L L L J K K L L L \n \n If the pattern were to continue and he wrote a total of 65 letters , how many \'L\' would there be altogether?',
        'answer': '37',
        'hints': 'lorem ipsum',
        'topic': 'patterns',
        'subtopic': 'patterns',
        'level': 5
      }
    ]
  }
]
