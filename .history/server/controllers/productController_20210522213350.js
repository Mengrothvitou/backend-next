const Products= require('./../productModel')

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400)
    }
}