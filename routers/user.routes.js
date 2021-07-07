const express = require('express');
const { validationResult } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/user.controller');
const validator = require('../validator/validator');

//register-createUser
router.post('/register', validator.validateInfo,userController.register);

//login
router.post('/login', userController.login);

// //read - getAllUser
// router.get('/all', userController.getAllUser);

// //read by id -searchUserByID
// router.post('/searchByID', userController.searchUserByID);

// //update - updateUser
// router.put('/update', userController.updateUser);

// //delete - deleteUser
// router.delete('/delete', userController.deleteUser);

module.exports = router;