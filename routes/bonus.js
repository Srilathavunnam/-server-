var express = require('express');
var router = express.Router();

var rand=Math.random();
var value=Math.cos(rand);




/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.send('[Math.cos()],[Math.asin()] applied to ['+rand+'] is ['+value+'],['+Math.asin(rand)+'],'+'['+Math.asinh(rand)+']');
});

module.exports = router;
