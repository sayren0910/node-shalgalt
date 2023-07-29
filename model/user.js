const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = Schema({
  UserName: {
    type: String,
    required: [true, " хэрэглэгчин нэрийг оруулна уу"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/[^\s@]+@[^\s@]+\.[^\s@]+/gi, "э-мэйл буруу байна"],
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type: String,
    enum:["user","admin"],
    default:"user",
  },
  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  // category:{
  //   type:mongoose.Schema.Types.ObjectId,
  //   ref:'category',
  //   default:"admin"
  // },
  // product:{
  //   type:mongoose.Schema.Types.ObjectId,
  //   ref:'product',
  //   default:"user"
  // }
});

User.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
User.methods.CheckPassword = async function (password) {
  const check = await bcrypt.compare(password, this.password);
  return check;
};


// userSchema.methods.addToCart = async function(productId) {
//   const product = await Product.findById(productId);
//   if (product) {
//       const cart = this.cart;
//       const isExisting = cart.items.findIndex(objInItems => new String(objInItems.productId).trim() === new String(product._id).trim());
//       if (isExisting >= 0) {
//           cart.items[isExisting].qty += 1;
//       } else {
//           cart.items.push({ productId: product._id, qty: 1 });
//       }
//       if (!cart.totalPrice) {
//           cart.totalPrice = 0;
//       }
//       cart.totalPrice += product.price;
//       return this.save();
//   }

// };

// userSchema.methods.removeFromCart = function(productId) {
//   const cart = this.cart;
//   const isExisting = cart.items.findIndex(objInItems => new String(objInItems.productId).trim() === new String(productId).trim());
//   if (isExisting >= 0) {
//       cart.items.splice(isExisting, 1);
//       return this.save();
//   }
// }



module.exports = mongoose.model("user", User);