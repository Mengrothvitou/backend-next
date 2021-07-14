const Products = require('./../models/productModel');

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message: `Content cannot empty`})
        return ;
    }
    const product=new Products({
        
    })
    product.save(product)
    .then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.status(500).send({
            message: err.message
        })
    })
}
exports.find=(req,res)=>{
    Products.find()
    .then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({message: err.message})
    })
}