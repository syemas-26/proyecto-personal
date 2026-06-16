import mongoose from "mongoose";
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
    timestamps:true
});
export default mongoose.model("Lesson", lessonSchema)