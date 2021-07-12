const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const validator = require('../validator/orderValidator');
const middleware = require('../middleware/middleware');

//register-status
router.post('/createStatus', middleware.validarTokenAdmin, validator.registerStatus, orderController.createStatus);

//register-paymentMethod 
router.post('/createPaymentMethod', middleware.validarTokenAdmin, validator.registerPaymentMethod, orderController.createPaymentMethod);

router.post('/createOrder', validator.registerOrder, orderController.createOrder);

//read-orderByAdmin
router.get('/allOrder', middleware.validarTokenAdmin, orderController.allOrdersByAdmin);

//read-orderByID
router.get('/allMyOrder', validator.allMyOrder, orderController.allOrdersByID);

//updateOrderBy
router.put('/editOrder', middleware.validarTokenAdmin, validator.updateOrder, orderController.updateOrder);

//deleteOrder
router.delete('/deleteOrder', middleware.validarTokenAdmin, validator.deleteOrder, orderController.deleteOrder);

module.exports = router;