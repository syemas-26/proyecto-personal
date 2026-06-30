const CourseModel = require("../models/Course.model");
const LessonModel = require("../models/Lesson.model");

// crear lesson 
// enlazar los lessons con course
// del method populate o el push de mongoose 
const createLesson = async (req, res) =>{
        try{ 
                const lesson = await LessonModel.create({
                    title:req.body.title,
                   description:req.body.description,
                   content:req.body.content})
                 res.status(201).json({
                    ok:true,
                     msg:"lesson created",
                     lesson})
        }catch(error){
            console.log(error)
                res.status(500).json({
                    ok:false,
                    msg: error.msg
                })
        }
}
const getLessons = async (req,res)=>{

        try{
                const lessons = await LessonModel.find()
                res.status(200).json({
                        ok:true,
                        lessons})
        }catch(error){res.status(500).json({
                ok:false,
                msg: error.msg
        })
        }
};

const getLessonBycourse = async (req,res)=>{
        try{
                const lesson = await LessonModel.find({
                        courseId:
                        req.params.courseId
                        }).sort({
                        order: 1
        });
                res.status(200).json({
                    ok:true,
                    lesson})
        }catch(error){
            console.log(error)
            res.status(500).json({
                ok:false,
                msg: error.msg
        })
        }
}

const getLessonById = async (req,res)=>{
        try{
                const lesson = await LessonModel.findById(req.params.id)
                if(!lesson){
                        return res.status(404).json({
                            ok:false,
                            msg:"Lesson not found"
                        })
                }
                res.status(200).json({
                    ok:true,
                    msg:"lesson ",
                    lesson})
        }catch(error){ 
            console.log(error)
            res.status(500).json({
                ok:false,
                msg: error.msg
        })
        }
}



const deleteLesson = async (req,res) =>{
                try{
                const lesson = await LessonModel.findById(req.params.id)
                if(!lesson){
                        return res.status(404).json({
                            ok:false,
                            msg:"Lesson not found"
                        })
                }
                await lesson.deleteOne()
                res.status(200).json({
                    ok:true,
                    msg:"Lesson deleted succesfully"
                })
        }catch(error){
            console.log(error)
            res.status(500).json({
                ok:false,
                msg: error.msg
        })
        }
        }

    
const updateLesson = async (req,res) =>{
        try{
        const lesson = await LessonModel.findById(req.params.id)
        if(!lesson){
                return res.status(404).json({
                ok:false,
                msg:"Lesson not found"
                })
                }
const updatedLesson = await LessonModel.findByIdAndUpdate(req.params.id,
        req.body,{
                new:true,
        }
        )
        res.status(200).json({
            ok:true,
            msg:"updated",
            updatedLesson})
        }catch(error){
            console.log(error)
            res.status(500).json({
                ok:false,
                msg: error.msg
        })
        }
        }
                

    
        module.exports={getLessonById,getLessons,getLessonBycourse,createLesson,deleteLesson,updateLesson}