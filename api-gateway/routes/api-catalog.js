/**
 * 
 * API ROUTES
 */

 var express = require('express');
 var router = express.Router();
 var auth_controller = require('../controllers/authController');

 //POST request for registering a user
 router.post('/auth/register', auth_controller.user_register);

 //GET request for verifying user tokens
 router.get('/auth/token', auth_controller.user_token);

 //allow user login requests
 router.post('/auth/login', auth_controller.user_login);

 //handle logout requests
 router.get('/auth/logout', auth_controller.user_logout);

 module.exports = router;