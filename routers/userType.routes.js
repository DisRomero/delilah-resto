const express = require('express');
const router = express.Router();
const userTypeController = require('../controllers/userType.controller');



//create -createUserType
router.post('/createUserType', userTypeController.createUserType);

//read - getAllUserType
router.get('/allUserType', userTypeController.getAllUserType);

//read by id -searchUserTypeByID
router.post('/searchUserTypeByID', userTypeController.searchUserTypeByID);

//update - updateUserType
router.put('/updateUserType', userTypeController.updateUserType);

//delete - deleteUserType
router.delete('/deleteUserType', userTypeController.deleteUserType);


module.exports = router;