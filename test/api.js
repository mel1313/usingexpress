var app = require('../app.js')
var request = require('supertest')

describe('Classroom', () => {
  it('it should respond with JSON data', done => {
    request(app)

.get('/')
//  .expect('', /json/)
// .expect('Content-Length', '20')
  .expect(200)
// .end(function(err, res){
// if (err) throw err;
// });
.end(done)
  })
  it('should provide a list of all class participants', done => {
    request(app)
.get('/students')
.end(done)
  })
})

describe('provide a list of student')
