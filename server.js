/**
 * Module dependencies.
 */

var bodyParser = require('body-parser');
var chalk = require('chalk');
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var path = require('path');

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

/** 
 * App configuration.
 */ 

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

if (app.get('env') === 'development') {
  // don't minify html
  app.locals.pretty = true;

  // turn on console logging
  app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// configure our app to handle CORS requests
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
  next();
});


app.get('/', function(req, res) {
  res.render('index');
});

/**
 * Start Express server.
 */

app.listen(config.port, function() {
  var env = '\n[' + chalk.green(app.get('env')) + ']';
  var port = chalk.magenta(config.port);
  console.log(env + ' Listening on port ' + port + '...\n');
});
