const express= require('express');
const route = express.Router();

const userController = require('../controllers/userController');
const Pro


// User API 
route.post('/api/users',userController.create);
route.get('/api/users',userController.find);


// Product API
route.post('/api/products',)

module.exports = route