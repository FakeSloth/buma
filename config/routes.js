var express = require('express');
var path = require('path');

var controllers = '../app/controllers';
var mainController = require(path.join(controllers, 'main_controller'));
var userController = require(path.join(controllers, 'user_controller'));

var router = express.Router();

router.route('/')
  .get(mainController.index);

router.route('/login')
  .get(userController.login.page);

router.route('/signup')
  .get(userController.signup.page);

module.exports = router;
