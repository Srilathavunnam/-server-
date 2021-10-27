var express = require('express');
var router = express.Router();

var rand=Math.floor(Math.random());
var value=Math.cos(1);



/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.send('[Math.cos()] applied to ['+1+'] is ['+value+']');
});

module.exports = router;
