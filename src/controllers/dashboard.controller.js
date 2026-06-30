const User = require("../models/User.js");
const Course =require("../models/Course.js");
const Enrollment =require("../models/Enrollment.js");

const dashboardAdmin = async (req, res) => {
    try {
      const totalUsers =await User.countDocuments();

      const totalCourses =await Course.countDocuments();

      const totalEnrollments =await Enrollment.countDocuments();
      res.status(201).json({
        ok:true,
        totalUsers,
        totalCourses,
        totalEnrollments
      });

    } catch (error) {
 console.log(error)
                res.status(500).json({
                ok:false,
                msg: error.msg
        })
    }
  };
  module.exports={dashboardAdmin}