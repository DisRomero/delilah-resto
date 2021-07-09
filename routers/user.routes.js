const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const validator = require('../validator/userValidator');
const middleware = require('../middleware/middleware');

//register-createUserClient
router.post('/register', validator.registerInputs,userController.register);

//login
router.post('/login', validator.loginInputs, userController.login);

//read - getAllUser
router.get('/all', middleware.validarTokenAdmin, userController.allUser);

//update  - editUser
router.put('/editName', middleware.validarTokenAdmin, validator.updateUserName, userController.editUser);

//delete - deleteUser
router.delete('/delete', middleware.validarTokenAdmin, validator.deleteUser, userController.deleteUser);

//read - getAllUserType
router.get('/allUserType', middleware.validarTokenAdmin, userController.allUserType);

//update  - editUserType
router.put('/editUserTypeName', middleware.validarTokenAdmin, validator.updateUserTypeName, userController.editUserType);

//delete - deleteUser
router.delete('/deleteUserType', middleware.validarTokenAdmin, validator.deleteUserType, userController.deleteUserType);

module.exports = router;