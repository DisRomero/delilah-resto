const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

//register-createUser
router.post('/register', userController.register);

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