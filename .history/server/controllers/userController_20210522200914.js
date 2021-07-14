const Users = require('../models/userModel');

exports.create= (req,res)=>{
    if(!req.body){
        res.status(400).send({message: `Content cannot empty`})
        return ;
    }
    const user = new Users({
        name : req.body.name,
        email:req.body.email,
        gender: req.body.gender
    })
    user.save(user)
    .then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message : err.message || "Some error occurred while creating a create operation"
        });
    })
}
exports.find=(req,res)=>{
    if(req.query.name){
        const name = req.query.name;
        Users.find({name:{ $regex: '.*' + name + '.*'}})
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
        Users.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message: `Not found`})
            }
            else{
                res.send(data)
            }
        })
    }
    else{
        Users.find()
        .then(data=>res.send(data))
        .catch(err=>{
            res.status(500).send({message: err.message})
        })
    }
}



exports.delete=(req,res)=>{
    const id = req.params.id;
    Users.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message: ` Cannot delete ${id} `})
        }else{
            res.send({
                message: ` User was deleted!`
            })
        }
    })
}
