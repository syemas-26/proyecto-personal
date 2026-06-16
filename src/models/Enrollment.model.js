import mongoose from "mongoose";
import User from "./User.model";
import Course from "./Course.model";
import Lesson from "./Lesson.model";
const enrollmentSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Course
    },
    lesson:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Lesson
    },
    enrolledAt:{
        date:Date,
        default:Date.now
    }
});
export default mongoose.model("enrollment", enrollmentSchema)