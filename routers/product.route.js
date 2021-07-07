const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const middleware = require('../middleware/middleware');

router.post('/create', middleware.validarTokenAdmin, productController.createProduct);

router.get('/allProducts', productController.allProducts);

router.put('/updateProduct', productController.updateProduct);

module.exports = router;
