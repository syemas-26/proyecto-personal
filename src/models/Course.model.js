const mongoose = require("mongoose");

const User = require("./User.model");

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxLength:300,
        minLength:5
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    category:{
        type:String,
        required:true,
        enum:["finance","marketing","Web development"]
        // default:"courses"
    },
 
    duration:{
        type:Number,
        required:true,
        min:1,
        max:500,

    },
    portal:{
        type:String,
        trim:true
    },
    users:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }]
      
},
{timestamps:true});


module.exports = mongoose.model("Course", courseSchema)

