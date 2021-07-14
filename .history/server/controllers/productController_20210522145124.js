const Products = require('./../models/productModel');

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message: `Content cannot empty`})
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