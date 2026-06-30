const Enrollment = require("../models/Enrollment.model.js");
const Course = require("../models/Course.model.js");

const enrollCourse = async (req,res) => {
  try {
    const { courseId } = req.body;
    const course = await Course.findById(courseId);
      if (!course) {
          return res.status(404).json({
            ok:true,
            msg: "Course not found"
      });
    }
    const exists =
      await Enrollment.findOne({
        userId: req.user._id,
        courseId
      });
    if (exists) {
      return res.status(400).json({
        ok:false,
        msg:"Already enrolled"
      });
    }
    const enrollment = await Enrollment.create({
        userId: req.user._id,
        courseId
      });
    res.status(201).json({
      ok:true,
      msg:"enrollment",
      enrollment
  });
  } catch (error) {
     console.log(error)
                res.status(500).json({
                ok:false,
                msg: error.msg
    });

  }
};
const getMyCourses = async (req, res) => {
    try {
      const enrollments = await Enrollment.find({
          userId: req.user._id
        })
        .populate("courseId");
        res.status(201).json({
          ok:true,
          msg:"enrollment",
          enrollment
        })
    } catch (error) {
      console.log(error)
                res.status(500).json({
                ok:false,
                msg: error.msg
    });

    }
  };
const completeLesson = async (req, res) => {
    try {
      const lessonId = req.params.lessonId;
      const lesson = await Lesson.findById(
          lessonId
        );
      if (!lesson) {
        return res.status(404).json({
          ok:false,
          msg:"Lesson not found"
        });
      }
       const enrollment =
        await Enrollment.findOne({
          userId: req.user._id,
          courseId:
            lesson.courseId
        });
      if (!enrollment) {
        return res.status(404).json({
          ok:false,
          msg:"Not enrolled"
        });
      }
      if (!enrollment.completedLessons.includes(lessonId)) {
        enrollment.completedLessons.push(
          lessonId
        );
      }
       const totalLessons = await Lesson.countDocuments({
          courseId:
            lesson.courseId
        });
      enrollment.progress = Math.round((
            enrollment.completedLessons
              .length /
            totalLessons
          ) * 100
        );
      await enrollment.save();
      res.status(200).json({
        ok:true,
        msg:"enrollment",
        enrollment
      });
    } catch (error) {
        console.log(error)
                res.status(500).json({
                ok:false,
                msg: error.msg
    });
    }
  };
  module.exports={enrollCourse,getMyCourses,completeLesson}