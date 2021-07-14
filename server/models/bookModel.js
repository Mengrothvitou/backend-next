const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title : String,
    price : Number,
    type : String,
    desc: String,
    image:{
        type: String,
        required: true,
    },
    created:{
        type: Date,
        default: Date.now()
    }

})

const Books= mongoose.model('books',schema);
module.exports=Books;

