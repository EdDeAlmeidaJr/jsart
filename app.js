var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// routes for open (non-authenticated) web pages
var openWebRouter = require('./src/routes/v1/open');
// routes for private (authenticated) web pages
var privateWebRouter = require('./src/routes/v1/private');

// routes for API entities
var usersRouter = require('./src/routes/v1/api/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// mounting non-authenticated web pages
app.use('/', openWebRouter);

// drops non-authenticated requests
app.use(function(req,res,next) {

  next();
});

// mounting authenticated web pages
app.use('/app', privateWebRouter);

// mounting API routes for all entities
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
