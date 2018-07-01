var express = require('express');
var router = express.Router();
var http = require('http');
var bodyParser = require('body-parser');
var request = require('request');
// use body parser to easy fetch post body
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json())



router.get('/', function(req, res, next) {
    res.render('signup', {layout: 'default', template: 'signup-page'});
});

router.get('/created', function(req, res, next) {
  var user_id = req.body.id;
  var token = req.body.token;
  var geo = req.body.geo;
   res.render('created', {layout: 'default', template: 'created-page'});
});




/* GET home page. */
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', {layout: 'default', template: 'dashboard-page'});
});

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', {layout: 'default', template: 'login-page'});
});

/* GET home page. */
router.post('/validateLogin', function(req, res, next) {
  console.log(req);
  res.render('validateLogin', {layout: 'default', loginstatus: req.body.name, template: 'validateLogin-page'});
});



/* Sign up successful. */
router.post('/accountcreated', function(req, res, next) {
  var emailpassword = req.query;
  console.log(emailpassword);/*
  const emailPassClient = Stitch.defaultAppClient.auth.getProviderClient(UserPasswordAuthProviderClient.factory);
  emailPassClient.registerWithEmail("<user-email>", "<user-password>")
    .then(() => {
      console.log("Successfully sent account confirmation email!");
    })
    .catch(err => {
      console.log("Error registering new user:", err);
    });

    res.render('accountcreated', {layout: 'default', template: 'creation-page'});*/
  });

module.exports = router;
