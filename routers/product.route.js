const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.post('/product', productController.createProduct);

router.get('/allProducts', productController.allProducts);

router.put('/updateProduct', productController.updateProduct);

module.exports = router;
