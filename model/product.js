const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = Schema({
    name:{                                //hamtalgiin ner
        type:String,
        require:true
    },
    genre:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'genre'
    },
});

module.exports = mongoose.model("product",product);