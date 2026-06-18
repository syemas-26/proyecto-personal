const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxLength:300
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    portal:{
        type:String,
        trim:true
    },
    
},
{timestamps:true});

module.exports = mongoose.model("Course", courseSchema)