const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:3000')

// GET ROOT
describe('GET /', () => {
  it('should return 200 response', (done) => {
    api.get('/')
      .set('Accept', 'application/json')
      .expect(200, done)
  })
})

// GET /topics/:level
describe('GET /topics/:level', () => {
  it('should return 200 response', (done) => {
    api.get('/')
      .set('Accept', 'application/json')
      .expect(200, done)
  })
  it('should get all questions but show only the topic field', (done) => {
    api.get('/topics/:level')
      .set('Accept', 'application/json')
      .end((error, response) => {
        expect(response.body).to.be.an('array')
        expect(response.body).to.have.deep.property('[0].topic')
        expect(response.body).to.have.deep.property('[0].subtopic')
      })
  })
})

// GET /exercises/:topic
describe('GET /exercises/:topic', () => {
  it('should return 10 questions of a given topic', (done) => {
    api.get('/exercises/:topic')
      .set('Accept', 'application/json')
      .end((error, response) => {
        expect(response.bod).to.be.an('array')
        expect(response.bod).to.have.deep.property('[0].question')
        expect(response.bod).to.have.deep.property('[0].options')
        expect(response.bod).to.have.deep.property('[0].answer')
        expect(response.bod).to.have.deep.property('[0].hints')
        expect(response.bod).to.have.deep.property('[0].topic')
        expect(response.bod).to.have.deep.property('[0].subtopic')
        expect(response.bod).to.have.deep.property('[0].level')
      })
  })
})

// POST /signup
describe('POST /signup', () => {
  it('should return 200 response', (done) => {
    api.post('/signup')
      .set('Accept', 'application/json')
      .expect(200, done)
  })
  it('should allow client to sign up', (done) => {
    api.post('/signup')
      .set('Accept', 'application/json')
      .end((error, response) => {
        expect
      })
  })
})
// POST /signin
// PUT /users/:id (current user)
