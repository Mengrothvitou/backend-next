const express= require('express');
const route = express.Router();

const userController = require('../controllers/userController');



// User API 
route.post('/api/users',userController.create);
route.get('/api/users',userController.find);


// Product 

module.exports = route