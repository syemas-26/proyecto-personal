const CourseModel = require("../models/Course.model");
const LessonModel = require("../models/Lesson.model");


const createCourse = async (req, res) =>{
        try{
                const{
                        title,
                        description,
                        category,
                        level,
                        duration,
                        portal,
                        lessons
                }= req.body
        const course = await CourseModel.create({
                        title,
                        description,
                        category,
                        level,
                        duration,
                        portal,
                        lessons
        })
                res.status(201).json({
                        ok: true,
                        msg: "Curso creado correctamente",
                        course
                })
        }catch(error){
                console.log(error)
                res.status(500).json({
                        ok: false,
                        msg: error.msg
                })
        }
};
const getCourses = async (req,res)=>{

        //const lessons = 
        try{
                const courses = await CourseModel.find()
                res.status(200).json({
                        ok:true,
                        courses})
        }catch(error){res.status(500).json({
                ok:false,
                msg: error.msg
        })
        }
};


const getCourseById = async (req,res)=>{
        try{
                const course = await CourseModel.findById(req.params.id)
                const lessons =await Lesson.find({
                courseId:req.params.id
                }).sort({
                        order: 1
                });
                console.log(course)
                if(!course){
                        return res.status(404).json({
                                ok:false,
                                msg:"Course not found"
                        })
                }
                res.status(200).json({
                        ok:true,
                        msg:"course by id",
                        course})
        }catch(error){
                console.log(error)
                res.status(500).json({
                ok:false,
                msg: error.msg
        })
        }
};

const getCoursesByCategory =async (req, res) => {
    try {
      const courses =await Course.find({
          category:req.params.category
        });
        res.status(200).json({
                        ok:true,
                        msg:"course by category",
                        course})
        }catch(error){
                console.log(error)
                res.status(500).json({
                ok:false,
                msg: error.msg
        })
        }
  };

const deleteCourse = async (req,res) =>{
                try{
                const course = await CourseModel.findById(req.params.id)
                if(!course){
                        return res.status(404).json({
                                msg:"Course not found"
                        })
                }
                await course.deleteOne()
                res.status(200).json({
                        ok:true,
                        msg:"Course deleted succesfully"
                })
        }catch(error){
                console.log(error)
                res.status(500).json({
                ok:false,
                msg: error.msg
        })
        }
        }

    
const updateCourse = async (req,res) =>{
        try{
        const course = await CourseModel.findById(req.params.id)
        if(!course){
                return res.status(404).json({
                ok:false,
                msg:"Course not found"
                })
                }
const updatedCourse = await CourseModel.findByIdAndUpdate(req.params.id,
        req.body,{
                new:true,
                runValidatiors:true
        }
        )
        res.status(200).json({
                ok:true,
                msg:"updates successfully",
                updatedCourse})
        }catch(error){
                console.log(error)
                res.status(500).json({
                ok:false,
                msg: error.msg
        })
        }
        };
                

        
module.exports={createCourse,getCourseById,getCourses,updateCourse,deleteCourse,getCoursesByCategory};