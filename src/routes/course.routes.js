const express = require("express");
const router = express.Router(); 

const {createCourse,getCourses,getCourseById,updateCourse,deleteCourse,getCoursesByCategory} = require("../controllers/course.controller");
const {validToken} = require("../middlewares/auth.middleware");
const {validRole} = require("../middlewares/role.middleware");
const { createLesson } = require("../controllers/lesson.controller")

router.get("/all", getCourses)
router.get("/:id", getCourseById)
router.get("/category/:category",getCoursesByCategory)
router.post("/create",validToken,validRole("admin"),createCourse)
router.post("/:id/lessons",validToken,validRole("admin"),createLesson)
router.put("/edit/:id",validToken,validRole("admin"),updateCourse)
router.delete("/delete/:id",validToken,validRole("admin"),deleteCourse)

module.exports = router
