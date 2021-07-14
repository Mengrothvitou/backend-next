const { update } = require('../models/watchModel');
const Watches= require('../models/watchModel')

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message : `Body cannot empty.`})
        return ; 
    }
    const watch= new Watches({
        title:req.body.title,
        price : req.body.price,
        type: req.body.type,
        desc: req.body.desc,
        image: req.body.image,
    })
    watch.save(watch)
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
        Watches.find({type: type})
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
        Watches.findById(id)
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
        Watches.find()
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
    Watches.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
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
    Watches.findByIdAndDelete(id)
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