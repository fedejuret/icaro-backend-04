const express = require('express');
const ProductController = require('../controllers/product');
const route = express();

route.get('/products', ProductController.getProducts);
route.get('/products/:productId', ProductController.getProduct);

module.exports = route;