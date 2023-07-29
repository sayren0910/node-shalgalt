const Product = require('../model/product');
// const Logger = require('../middlewares/logger');

exports.postData = async(req,res, next) => {
    console.log(req.body)
    try{
       const postProduct = await Product.create(req.body);
       res.status(200).json({
           success:true,
           postProduct
       });
    }catch(error){
       res.status(400).json({
           success:false,
           error
       });
    };
   };

 exports.getData = async(req,res,next) => {
    try{
        const getAllproduct = await Product.find();
        res.status(200).json({
            success:true,
            getAllproduct
        })
     }catch(error){
        res.status(400).json({
            success:false,
            error
        })
     }
 };

 exports.getDataId = async(req,res,next) => {
    try{
        const getIdProduct = await Product.findById(req.params.name);
        res.status(200).json({
            success:true,
            getIdProduct
        })
     }catch(error){
        res.status(400).json({
            success:false,
            error
        })
     }
 };

 exports.putData = async(req,res,next) => {
    try{
        const putProduct = await Product.findByIdAndUpdate(req.params.name,req.body);
        res.status(200).json({
            success:true,
            putProduct
        })
     }catch(error){
        res.status(400).json({
            success:false,
            error
        })
     }
 };


exports.deleteData = async(req,res,next) => {
    try{
        const deleteProduct = await Product.findByIdAndDelete(req.params.name);
        res.status(200).json({
            success:true,
            deleteProduct
        })
     }catch(error){
        res.status(400).json({
            success:false,
            error
        })
     }
};

