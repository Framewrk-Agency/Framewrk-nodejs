var express = require('express');
var router = express.Router();
var http = require('http');
var bodyParser = require('body-parser');
var request = require('request');
var MongoClient = require('mongodb').MongoClient;


/*
router.all('/validateLogin', function(req, res, next) {
  var uri = "mongodb+srv://hackerdata-shard-00-01-gktww.gcp.mongodb.net";
  var username = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  MongoClient.connect(uri, function(err, client) {
     var collection = client.db("framewrk").collection("users");
     // perform actions on the collection object
     db.collection('users').updateOne({owner_id: client.auth.user.id}, {$set:{username:username, email: email, password: password}}, {upsert:true})
       ).then(() =>
       console.log("Found docs", docs)
     client.close();
  });
  console.log(reg);
});
*/
//const stitchClient = Stitch.initializeDefaultAppClient("framewrk-iroeq");

const emailPasswordClient = stitchClient.auth
  .getProviderClient(UserPasswordAuthProviderClient.factory, "userpass");

// Register a new application user when the user submits their information
async function handleSignup() {
  const email = registerEmailEl.value;
  const password = registerPasswordEl.value;

  try {

    await emailPasswordClient.registerWithEmail(email, password)
    showPostRegistrationState()
    displaySuccess("Successfully registered. Check your inbox for a confirmation email.")

  } catch(e) {
    handleError(e)
  }
}

// Authenticate an application user based on the submitted information
async function handleLogin() {
  const email = loginEmailEl.value;
  const password = loginPasswordEl.value;
  const credential = new UserPasswordCredential(email, password);

  try {

    await stitchClient.auth.loginWithCredential(credential);
    const user = stitchClient.auth.user;
    showLoggedInState();
    displaySuccess(`Logged in as: ${user.profile.data.email}`)

  } catch(e) {
    handleError(e)
  }
}

async function handleLogout() {
  await stitchClient.auth.logout();
  showControlPanel();
}




// DOM Element Variables
const controlPanelEl = document.getElementById("control-panel");
const registerFormEl = document.getElementById("create-a-user");
const loginFormEl = document.getElementById("login");
const registerEmailEl = document.getElementById("create-a-user-email");
const registerPasswordEl = document.getElementById("create-a-user-password");
const loginEmailEl = document.getElementById("login-email");
const loginPasswordEl = document.getElementById("login-password");
const notificationEl = document.getElementById("info");
const loggedInEl = document.getElementById("logged-in");
const postRegistrationEl = document.getElementById("finished-registration");

const successEl = document.getElementById("success");
const errorEl = document.getElementById("error");

function clearFields(fields) { fields.forEach(field => field.value = "") }
function toggleHiddenElementById(id) { document.getElementById(id).classList.toggle("hidden"); }

function showRegistrationForm() {
  clearNotifications();
  controlPanelEl.hidden = true;
  registerFormEl.hidden = false;
  loggedInEl.hidden = true;
  postRegistrationEl.hidden = true;
}

function showLoginForm() {
  clearNotifications();
  controlPanelEl.hidden = true;
  loginFormEl.hidden = false;
  loggedInEl.hidden = true;
  postRegistrationEl.hidden = true;
}

function showControlPanel() {
  clearNotifications()
  controlPanelEl.hidden = false;
  loginFormEl.hidden = true;
  registerFormEl.hidden = true;
  loggedInEl.hidden = true;
  postRegistrationEl.hidden = true;
}

function showLoggedInState() {
  clearFields([loginEmailEl, loginPasswordEl]);
  clearNotifications()
  controlPanelEl.hidden = true;
  loginFormEl.hidden = true;
  registerFormEl.hidden = true;
  loggedInEl.hidden = false;
  postRegistrationEl.hidden = true;
}

function showPostRegistrationState() {
  clearFields([registerEmailEl, registerPasswordEl]);
  controlPanelEl.hidden = true;
  loginFormEl.hidden = true;
  registerFormEl.hidden = true;
  loggedInEl.hidden = true;
  postRegistrationEl.hidden = false;
}

function setPostRegistrationState() {
  // Clear registration form inputs then hide the form
  clearFields([registerEmailEl, registerPasswordEl]);
  toggleHiddenElementById("create-a-user");
  return Promise.resolve()
}

function displayError(errorMessage) { clearNotifications(); errorEl.innerText = errorMessage; }
function displaySuccess(successMessage) { clearNotifications(); successEl.innerText = successMessage }
function clearNotifications() { [errorEl, successEl].forEach(el => el.innerText = "") }

function handleError(err) {
  console.error(err)
  const errType = err.message || "Error!"
  const msg = ({
    "invalid username/password": "Invalid username or password was entered. Please try again.",
    "name already in use": "An account already exists for that email."
  })[errType] || errType
  displayError(msg);
}


module.exports = router;
