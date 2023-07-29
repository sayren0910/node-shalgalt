const express = require('express');
const router = express.Router();
const {postData, getData, getDataId, putData, deleteData } = require("../controller/genreController");
const {Logger} = require('../middlewares/logger');
const {Upload} = require('../middlewares/upload')

router.route('/').post(Logger, Upload.single('image'),postData).get(getData);
router.route('/:id').get(getDataId);
router.route('/:id').put(putData).delete(deleteData);

module.exports = router;