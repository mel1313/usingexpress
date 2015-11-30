var express = require('express')
var myData = require('./data.json')
var app = express()
/*
app.get('/', function (req, res) {
  res.send('Hello World!')
})
*/

// extract the JSON File
app.get('/', function (req, res) {
  res.send(myData)
})

// list of students
app.get('/students', function (req, res) {
  res.send(myData.students)
})

// search by student name
app.get('/studentsname', function (req, res) {
  res.json('melvin')
})

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})

module.exports = app
