const express = require("express");
const lessonController = require("../controllers/lesson.controller");
const router = express.Router()
const {validToken} = require("../middlewares/auth.middleware");
const {validRole} = require("../middlewares/role.middleware");
const {createLesson,getLessons,getLessonById,updateLesson,deleteLesson,getLessonBycourse} = require("../controllers/lesson.controller");
const { createExercise } = require("../controllers/exercise.controller");


router.get("/all",getLessons)
router.get("/course",getLessonBycourse)
router.get("/:id",getLessonById)
router.post("/create",validToken,validRole("admin"),createLesson)
router.post("/:id/exercises",validToken,validRole("admin"),createExercise)
router.put("/edit/:id",validToken,validRole("admin"),updateLesson)
router.delete("/delete/:id",validToken,validRole("admin"),deleteLesson)

module.exports = router