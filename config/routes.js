var express = require('express');
var path = require('path');

var controllers = '../app/controllers';
var mainController = require(path.join(controllers, 'main_controller'));

var router = express.Router();

router.route('/')
  .get(mainController.index);

module.exports = router;
