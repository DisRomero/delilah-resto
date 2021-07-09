const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const middleware = require('../middleware/middleware');
const validator =require('../validator/productValidator');

router.post('/create', middleware.validarTokenAdmin, validator.createProduct, productController.createProduct);

router.get('/allProducts', productController.allProducts);

router.put('/update', middleware.validarTokenAdmin, validator.updateProduct, productController.updateProduct);

router.delete('/delete', middleware.validarTokenAdmin, validator.deleteProduct, productController.deleteProduct);

module.exports = router;
