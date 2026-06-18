const mongoose = require("mongoose");
const lessonSchema = new mongoose.Schema ({
    title:{
        type:String,
        required:true,
        maxLength:300
    },
    index:{
        type:String,
        rquired:true,
        trim:true
    },
    content:{
        type:String,
        required:true
    },
    
},
{timestamps:true});
module.exports = mongoose.model("Lesson", lessonSchema)