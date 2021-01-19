const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const passport = require('passport')

router.use(express.json());
/* GET home page. */
router.get('/login', (req, res) => res.render('login'))
router.post("/login", userController.loginUser);
router.post("/register", userController.registerUser);
router.get('/getAllUsers', userController.getAllUsers)

router.get('/auth/google', userController.authenticateUserWithGoogle)
router.get('/auth/google/callback', passport.authenticate('google'), userController.handleGoogleAuthenticationCallback)

router.get('/auth/facebook', userController.authenticateUserWithFacebook)
router.get('/auth/facebook/callback', passport.authenticate('facebook'), userController.handleFacebookAuthenticationCallback)

module.exports = router;