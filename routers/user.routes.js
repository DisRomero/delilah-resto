const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const validator = require('../validator/validator');
const middleware = require('../middleware/middleware');

//register-createUser
router.post('/register', validator.registerInputs,userController.register);

//login
router.post('/login', validator.loginInputs, userController.login);

//read - getAllUser
router.get('/all', middleware.validarTokenAdmin, userController.allUser);

//update  - editUser
router.put('/editName', middleware.validarTokenAdmin, validator.updateUserName, userController.editUser);

//delete - deleteUser
router.delete('/delete', middleware.validarTokenAdmin, validator.deleteUser, userController.deleteUser);

module.exports = router;