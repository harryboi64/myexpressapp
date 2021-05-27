var createError = require('http-errors');

var express = require('express');
//var axios = require('axios');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser= require('body-parser')


dotenv.config();

// connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("app.js connected to db")
);




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homePageRouter = require('./routes/home');
var myprofileRouter = require('./routes/myprofile');
var postRouter = require('./routes/post');
var databaseRouter = require('./routes/database');
var signupRouter =  require('./routes/signup');
var loginRouter = require('./routes/login');
var dashboardRouter = require('./routes/dashboard');
var imagePageRouter = require('./routes/imagePage');
var viewImageRouter = require('./routes/viewImage');

var app = express();

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});

// view engine setup

app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }))




app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homePageRouter);
app.use('/myprofile', myprofileRouter);
app.use('/post', postRouter);
app.use('/database', databaseRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/dashboard', dashboardRouter);
app.use('/imagePage', imagePageRouter);
app.use('/viewImage', viewImageRouter);

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




// import routes
const authRoutes = require("./routes/login");
const dashboardRoutes = require("./routes/dashboard");
const verifyToken = require("./routes/validate-token");

// middlewares
app.use(express.json()); // for body parser

// route middlewares
app.use("/api/user", authRoutes);
// this route is protected with token
app.use("/api/dashboard", verifyToken, dashboardRoutes);


module.exports = app;