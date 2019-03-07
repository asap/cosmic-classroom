var express = require('express');
var router = express.Router();
var data = require('../data/data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  const {
    page,
    teacher,
    students,
  } = data;

  res.render('index', { page, teacher, students });
});

module.exports = router;
