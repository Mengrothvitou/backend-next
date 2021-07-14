const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:String,
    price: double,
})
const Products= mongoose.model('products',schema);
module.exports = Products;