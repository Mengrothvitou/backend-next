
const Bags= require('../models/bagModel')

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message : `Body cannot empty.`})
        return ; 
    }
    const bag= new Bags({
        title:req.body.title,
        price : req.body.price,
        type: req.body.type,
        desc: req.body.desc,
        image: req.body.image,
    })
    bag.save(bag)
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
        Bags.find({type: type})
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
        Bags.findById(id)
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
        Bags.find()
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
    Bags.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
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
    Bags.findByIdAndDelete(id)
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