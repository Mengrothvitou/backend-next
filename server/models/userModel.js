const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    userName : {
        type:String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    created:{
        type: Date,
        default: Date.now(),
    }
})

const Users= mongoose.model('users',schema);
module.exports= Users;