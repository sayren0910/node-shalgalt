const express = require('express');
const router = express.Router();
const {postData, getData, getDataId, putData, deleteData} = require("../controller/productController")

router.route('/').post(postData).get(getData);
router.route('/search/:key').get(getDataId);
router.route('/:id').put(putData).delete(deleteData);

module.exports = router;