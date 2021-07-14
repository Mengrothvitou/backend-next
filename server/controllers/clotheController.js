const { update } = require('../models/clotheModel');
const Clothes= require('../models/clotheModel')

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message : `Body cannot empty.`})
        return ; 
    }
    const clothe= new Clothes({
        title:req.body.title,
        price : req.body.price,
        type: req.body.type,
        desc: req.body.desc,
        image: req.body.image,
    })
    clothe.save(clothe)
    .then ((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({message: err.message})
    })
}

exports.find=(req,res)=>{
    if(req.query.type){
        const type = req.query.type;
        Clothes.find({type: type})
        .then(data=>{
            if(!data){
                res.status(404).send({message: `Not found`})
            }
            else{
                res.send(data)
            }
        })
    }else if(req.query.id){
        const id = req.query.id;
        Clothes.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message: `${id} Not found`})
            }
            else{
                res.send(data)
            }
        })
    }
    else{
        Clothes.find()
        .then(data=>res.send(data))
        .catch(err=>{
            res.status(500).send({message: err.message})
        })
    }
}
exports.update=(req,res)=>{
    if(JSON.stringify(req.body)==={}){
        return res.status(400).send({message: "Data to update cannot be empty "})
    }
    const id =req.params.id;
    Clothes.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then((data)=>{
        if(!data){
            res.status(404).send({message:`Your update product with ${id} is not match`})
        }else{
            res.send(data);
        }
    }).catch((err)=>{
        res.status(500).send({message: "Error Update!"})
    })
}
exports.delete=(req,res)=>{
    const id = req.params.id;
    Clothes.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message: ` Cannot delete ${id} `})
        }else{
            res.send({
                message: ` Product was deleted!`
            })
        }
    })
}