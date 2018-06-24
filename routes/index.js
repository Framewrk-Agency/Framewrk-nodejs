var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('splash', {layout: 'default', template: 'splash'});
});

/* GET home page. */
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', {layout: 'default', template: 'dashboard'});
});

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', {layout: 'default', template: 'login'});
});


module.exports = router;
