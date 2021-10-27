var express = require('express');
var router = express.Router();

var rand=Math.floor(Math.random);
var value=Math.cos(rand);



/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.send('[Math.cos()] applied to ['+rand+'] is ['+Math.cos(rand)+']');
});

module.exports = router;
