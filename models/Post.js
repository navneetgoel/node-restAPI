const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title:{
        type:String,
        Required:true
    },
    description:{
        type:String,
        Required:true
    },
    date:{
        type:Date,
        default:Date.now,
    }
});

module.exports = mongoose.model('Posts', PostSchema);