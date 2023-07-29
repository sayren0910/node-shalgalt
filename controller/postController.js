const UserSchema = require ('../model/post')

exports.postUser = async(req,res, next) => {
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

exports.putUser = async(req,res,next) => {
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


exports.deleteUser = async(req,res,next) => {
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