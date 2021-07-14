const express= require('express');
const route = express.Router();

const userController = require('../controllers/userController');
const bagController = require('../controllers/bagController')
const bookController = require('../controllers/bookController')
const shoeController = require('../controllers/shoeController')
const clotheController = require('../controllers/clotheController')
const watchController = require('../controllers/watchController')
const cosmeticController = require('../controllers/cosmeticController')

// User API 
route.post('/api/users',userController.create);
route.get('/api/users',userController.find);
route.delete('/api/users/:id',userController.delete);
route.put('/api/users/:id',userController.update);
// Product API
//Bag
route.post('/api/bags',bagController.create);
route.get('/api/bags',bagController.find);
route.delete('/api/bags/:id',bagController.delete);
route.put('/api/bags/:id',bagController.update);
//Book
route.post('/api/books',bookController.create);
route.get('/api/books',bookController.find);
route.delete('/api/books/:id',bookController.delete);
route.put('/api/books/:id',bookController.update);
//shoe
route.post('/api/shoes',shoeController.create);
route.get('/api/shoes',shoeController.find);
route.delete('/api/shoes/:id',shoeController.delete);
route.put('/api/shoes/:id',shoeController.update);
//Clothe
route.post('/api/clothes',clotheController.create);
route.get('/api/clothes',clotheController.find);
route.delete('/api/clothes/:id',clotheController.delete);
route.put('/api/clothes/:id',clotheController.update);
//Cosmetic
route.post('/api/cosmetics',cosmeticController.create);
route.get('/api/cosmetics',cosmeticController.find);
route.delete('/api/cosmetics/:id',cosmeticController.delete);
route.put('/api/cosmetics/:id',cosmeticController.update);
//Watch
route.post('/api/watches',watchController.create);
route.get('/api/watches',watchController.find);
route.delete('/api/watches/:id',watchController.delete);
route.put('/api/watches/:id',watchController.update);


module.exports = route;