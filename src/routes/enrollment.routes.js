const express = require ("express");
const { enrollCourse,getMyCourses,getAllEnrollments,completeLesson }= require("../controllers/enrollmentController.js");
const { validToken } = require("../middlewares/auth.middleware.js");
const { validRole } = require("../middlewares/role.middleware.js");

const router = express.Router();


router.post("/",validToken,enrollCourse);
router.get("/my-courses",validToken,getMyCourses)
router.get("/",validToken,validRole("admin"),getAllEnrollments)
router.get("/complete/:lessonId",validToken,completeLesson);

module.exports = router
