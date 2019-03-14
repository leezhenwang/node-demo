var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = require('./../model/db');  //require的路径是我们的db模块相对于本文件的路径
  db.query('select * from user', []).then(data=>{
    res.send(data);
  })
});

module.exports = router;
