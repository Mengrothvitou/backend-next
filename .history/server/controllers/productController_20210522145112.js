const Products = require('./../models/productModel');

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({})
    }
    const product= {
        name : req.body.name,
        price: req.body.price,
    }
    product.save(product)
    .then((res)=>{
        res.send
    })
}