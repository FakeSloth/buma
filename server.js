/**
 * Module dependencies.
 */

var bodyparser = require('body-parser');
var chalk = require('chalk');
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');

var config = require('./config/config');

/**
 * Create an express application.
 */

var app = express();

/**
 * Connect to MongoDB.
 */

mongoose.connect(config.mongodb);
mongoose.connection.on('error', function(err) {
  console.error(chalk.red('\nMongoDB Connection Error. Make sure MongoDB is running.'));
  console.error(chalk.red(err + '\n'));
});

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('Server has started');
});
