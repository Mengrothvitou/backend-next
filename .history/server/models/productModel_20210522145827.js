const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:String,
    price: String,
    date : Date,
})
const Products= mongoose.model('products',schema);
module.exports = Products;