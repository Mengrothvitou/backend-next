const express= require('express');
const route = express.Router();

const userController = require('../controllers/userController');
const productController = require('../controllers/productController')


// User API 
route.post('/api/users',userController.create);
route.get('/api/users',userController.find);


// Product API
route.post('/api/products',productController)

module.exports = route