const express = require("express");
const router = express.Router();
const {Login,register,addToWishlist, getWishList, getLogin, getLoginId, putLogin, deleteLogin } = require("../controller/userController");
const { Logger } = require("../middlewares/logger");

router.route("/re").post(register);
router.route("/login").post(Login)
router.route("/use").get(getLogin);
router.route("/:id").delete(deleteLogin).put(putLogin);
router.route("/wishList").post(Logger, addToWishlist).get(Logger, getWishList);

module.exports = router;