var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var session = require('express-session')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ssuet');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())
 


// var userSchema = mongoose.Schema({
//     status: Number,
//     profile: {
//         name: String,
//         email: String,
//         DOB: Date,
//         contacts: [ String ]
//      }
// });

// var User = mongoose.model('User', userSchema );



// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//   }
// });


// app.get('/', function (req, res) {
//   res.send('Hello World!')
// });


var userSchema = mongoose.Schema({
    name: String,
    email: {type: String, require: true, index: true},
    password: String
});

var User = mongoose.model('User', userSchema );

app.get('/', function (req, res) {
  res.render('./auth', {msg: ''})
});

app.post('/register', function(req, res){
    var data = req.body;
    var userObj = new User(data);
    userObj.save(function(){
        res.render('./auth', {msg: ''})
    })
})

app.post('/login', function(req, res){
    console.log(req.session);
    var data = req.body;
    User.findOne({email: data.email, password: data.password}, function(err, dbUser){
        if(err){
            res.render('./auth', {msg: ''})
        } else if (!dbUser){
            res.render('./auth', {msg: 'invalid login'})
        } else {
            req.session.user = dbUser;
            res.render('./dashboard', {user: req.session.user})
        }
    })
})

app.get('/restricted', function (req, res) {
    if(req.session.user){
        res.render('./restricted', {user: ''})
    }
});
// app.get('/saveUser', function (req, res) {
//   var user = {
//         status: 1,
//         profile: {
//             name: 'taha',
//             email: 'abc@xyz.com',
//             DOB: new Date('Sun Apr 30 2000 15:36:47 GMT+0500 (PKT)'),
//             contacts: [ '123', '456' ]
//         }
//     }
//     var UserObj = new User(user);
//     UserObj.save(function(err, data){
//         if(err) res.send(err);
//         res.send(data);
//     });
// });

// app.get('/getUser', function (req, res) {
//     User.find({}, function(err, data){
//         if(err) res.send(err);
//         res.send(data);
//     });
// });


// app.get('/getUserAndUpdate', function (req, res) {
//     User.find({}, function(err, data){
//         if(err) res.send(err);
//         var user = data[0];
//         user.profile.contacts.push('789');
//         user.save(function(err, data){
//             if(err) res.send(err);
//             res.send(data);
//         });
//     });
// });



// app.get('/updateUser', function (req, res) {
//     User.update({}, { $push: {'profile.contacts': '123456789'} }, function(err, data){
//         if(err) res.send(err);
//         res.send(data);
//     });
// });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});