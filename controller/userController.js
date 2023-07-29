const userModel = require("../model/user");
const UserSchema = require("../model/user");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  try {
    const newUser = await UserSchema.create(req.bory);
    res.status(200).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

exports.Login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await UserSchema.findOne({ email: email });
  try {
    if(!user){
        throw MyError(`${req.params.Id} email bolon password-oo shalga`, 404);
    };
    
    const check = await user.CheckPassword(password);
    if(!check){
        throw MyError(`${req.params.Id} email bolon password-oo shalga`, 404);
    };
    console.log(user);
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    
    res.status(200).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};


exports.getLogin = async(req,res,next) => {
  try{
      const getAllproduct = await UserSchema.find();
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

exports.getLoginId = async(req,res,next) => {
  try{
      const getIdProduct = await UserSchema.findById(req.params.name);
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

exports.putLogin = async(req,res,next) => {
  try{
      const putProduct = await UserSchema.findByIdAndUpdate(req.params.name,req.body);
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


exports.deleteLogin = async(req,res,next) => {
  try{
      const deleteProduct = await UserSchema.findByIdAndDelete(req.params.id);
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





exports.addToWishlist = async (req, res) => {
  const { productId } = req.body;
  const email = req.userEmail;
  try {
    const addList = await userModel.findOneAndUpdate(
      { email: email },
      { $addToSet: { wishlist: productId } }
    );

    res.status(200).json({
      success: true,
      addList,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

exports.getWishList = async (req, res) => {
  try {
    console.log(req.userEmail);
    const List = await userModel
      .findById(req.userId)
      .select("wishlist")
      .populate("wishlist")
      .exec();
      console.log(List)
    res.status(200).json({
      success: true,
      List,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

