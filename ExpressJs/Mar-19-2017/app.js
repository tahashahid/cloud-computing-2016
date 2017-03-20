var express = require('express')
var app = express()

app.use(function(req, res){
    res.send("HERE")
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/home', function(req, res){
    console.log(req.query)
    res.send('Home');
})

app.get('/home', function(req, res){
    console.log(req.query)
    res.send('Home');
})

app.get('*', function(req, res){
    console.log(req.query)
    res.send('Home');
})

app.get('/user/:id/:class', function(req, res){
    console.log(req.params.id)
    console.log(req.params.class)
    res.send('User is ' + req.params.id);
})

// app.get(url, callback)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})