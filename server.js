/**
 * Module dependencies.
 */

var bodyparser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');

/**
 * Create an express application.
 */

var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('Server has started');
});
