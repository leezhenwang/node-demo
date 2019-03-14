var express = require('express');
var router = express.Router();

/* GET homePage */
router.get('/', function(req, res, next) {
  res.redirect('/pc');
});

module.exports = router;
