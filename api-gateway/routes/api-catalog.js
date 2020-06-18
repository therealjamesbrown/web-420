/**
 * 
 * API ROUTES
 */

 var express = require('express');
 var checkToken = require('../check-token');
 var router = express.Router();
 var auth_controller = require('../controllers/authController');

 //GET request for token check
 router.get('/auth/token', checkToken, auth_controller.user_token);

 //POST request for registering a user
 router.post('/auth/register', auth_controller.user_register);

 //GET request for verifying user tokens
 router.get('/auth/token', auth_controller.user_token);

 //allow user login requests
 router.post('/auth/login', auth_controller.user_login);

 //handle logout requests
 router.get('/auth/logout', auth_controller.user_logout);

 module.exports = router;