const mongoose = require("mongoose");
const LessonModel = require("./Lesson.model");
const exerciseSchema = new mongoose.Schema ({
    
    statement:{
        type:String,
        required:true,
        trim:true
    },
    // question:{
    //     type:String,
    //     required:true
    // },
    questions:[{
        question:String,
        options:[String],
        correctAnswer:String
    }],
    options:[String],

    correctAnswer:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum:["mcq","truefalse","text"],
        default:"text"
    },
    // correctAnswer:{
    //     type:String,
    //     required:true
    // },
     lessonId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Lesson",
        required:true
        }
    
},
    {timestamps:true});

module.exports = mongoose.model("Exercise", exerciseSchema)