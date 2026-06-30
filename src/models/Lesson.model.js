
const mongoose = require("mongoose");
const CourseModel = require("./Course.model");
const lessonSchema = new mongoose.Schema ({
    
      courseId:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:CourseModel,
            required:true
        }],
    title:{
        type:String,
        required:true,
        maxLength:300
    },
    description:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
   
    
},
{timestamps:true});
module.exports = mongoose.model("Lesson", lessonSchema)