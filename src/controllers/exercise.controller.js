const CourseModel = require("../models/Course.model");
const LessonModel = require("../models/Lesson.model");
const ExerciseModel = require("../models/Exercise.model");


const createExercise = async (req, res) =>{
    try{
        const exercise = await ExerciseModel.create({
            lessonId:req.params.lessonId,
            statement:req.body.statement,
            questions:req.body.questions,
            options:req.body.options,
            correctAnswer:req.body.correctAnswer})
                res.status(201).json({
                    ok:true,
                    msg:"exercise created",
                    exercise})
        }catch(error){
            console.log(error)
                res.status(500).json({
                    ok:false,
                    msg: error.msg
                })
        }
}
const getExerciseByLesson = async (req,res)=>{
        try{
                const exercise = await ExerciseModel.find({
                    lessonId:
                    req.params.lessonId
                });  
                res.status(200).json({
                    ok:true,
                    exercise})
        }catch(error){
            console.log(error)
            res.status(500).json({
                ok:false,
                msg: error.msg
        })
        }
}



const deleteExercise = async (req,res) =>{
                try{
                const exercise = await ExerciseModel.findById(req.params.id)
                if(!exercise){
                        return res.status(404).json({
                            ok:false,
                            msg:"Exercise not found"
                        })
                }
                await exercise.deleteOne()
                res.status(200).json({
                    ok:true,
                    msg:"Exercise deleted succesfully"
                })
        }catch(error){
            console.log(error)
            res.status(500).json({
                ok:false,
                msg: error.msg
        })
        }
        }

    
const updateExercise = async (req,res) =>{
        try{
        const exercise = await ExerciseModel.findById(req.params.id)
        if(!exercise){
                return res.status(404).json({
                ok:false,
                msg:"Exercise not found"
                })
                }
const updatedExercise = await ExerciseModel.findByIdAndUpdate(req.params.id,
        req.body,{
                new:true,
        }
        )
        res.status(200).json({
            ok:true,
            msg:"updated",
            updatedExercise})
        }catch(error){
            console.log(error)
            res.status(500).json({
                ok:false,
                msg: error.msg
        })
        }
        }
                

    
        module.exports={createExercise,getExerciseByLesson,updateExercise,deleteExercise}
           
