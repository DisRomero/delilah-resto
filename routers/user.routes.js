const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const validator = require('../validator/validator');
const middleware = require('../middleware/middleware');

//register-createUser
router.post('/register', validator.registerInputs,userController.register);

//login
router.post('/login', validator.loginInputs, userController.login);

// //read - getAllUser
router.get('/all', middleware.validarTokenAdmin, userController.allUser);

// //read by id -searchUserByID
// router.post('/searchByID', userController.searchUserByID);

// //update - updateUser
// router.put('/update', userController.updateUser);

// //delete - deleteUser
// router.delete('/delete', userController.deleteUser);

module.exports = router;