
/*
============================================
; Title: Assignment 2.3
; Author: James Brown
; Date: 04/28/2020
; Modified By: James Brown
; Description: Exercise 2.3
;===========================================
*/


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var apiCatalog = require('./routes/api-catalog');
mongoose.Promise = require('bluebird');

var indexRouter = require('./routes/index');

var app = express();

/**
*
Database connection
*/
mongoose.connect('mongodb+srv://admin:snow123@sandbox-3qokk.mongodb.net/test', {
promiseLibrary: require('bluebird')
}).then ( () => console.log('connection successful'))
.catch( (err) => console.error(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiCatalog);

app.use('/', indexRouter);

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
