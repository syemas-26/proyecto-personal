const mongoose = require("mongoose");
const User = require("./User.model");
const Course = require("./Course.model");
const Lesson = require("./Lesson.model");
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
module.exports = mongoose.model("enrollment", enrollmentSchema)