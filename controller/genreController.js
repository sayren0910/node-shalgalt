const Genre = require('../model/genre');
const Logger = require('../middlewares/logger');

 exports.postData = async(req,res, next) => {
    
 try{
    const postGenre = await Genre.create({
        genre:name,
        music:filename,
    });
    res.status(200).json({
        success:true,
        postGenre
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
        const getAllGenre = await Genre.find();
        res.status(200).json({
            success:true,
            getAllGenre
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
        const getIdGenre = await Genre.findById(req.params.id);
        res.status(200).json({
            success:true,
            getIdGenre
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
        const putGenre = await Genre.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            success:true,
            putGenre
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
        const deleteGenre = await Genre.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success:true,
            deleteGenre
        })
     }catch(error){
        res.status(400).json({
            success:false,
            error
        })
     }
};


// exports.search = async (req,res)=>{
//     let data = await Genre.find(
//         {
//             "$or":[
//                 {name:{$regex:req.params.key}},
//                 {brand:{$regex:req.params.key}}
//             ]
//         }
//     )
//     res.send(data);

// }