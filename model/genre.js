const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genre = Schema({
    genre:{                                       //hamtlagiin ner
        type:String,
        require:true
    }
});

module.exports = mongoose.model("genre",genre);