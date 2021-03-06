var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const exphbs = require('express-handlebars');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// const mongoose = require('mongoose');
const users = require('./helpers/db');

var app = express();

// Database
// const mongodb_url = "mongodb+srv://gautam123:gautam123@projectcrud-qrqlx.mongodb.net/test?retryWrites=true&w=majority"


// function databaseconnect(){
//   mongoose.connect(mongodb_url,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });

//   mongoose.connection.on('connected',()=>{
//     console.log("Mongoose is connected!!");
//   });
// }
// app.use(databaseconnect());



// Middleware for handle bar

// app.set('view engine', 'handlebars');

app.use(function(req,res,next){
  console.log("ip address is :",req.ip,req.cookies);
  next();
});


// view engine setup
app.engine('hbs', exphbs({extname:'hbs',defaultLayout:'layout',layoutsDir:__dirname+'/views/layouts'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/',(req,res)=>{
  res.clearCookie("username");
  res.clearCookie("auth_token");
  console.log("removed all cookies");
  res.render('index',{title:"My App"});
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
