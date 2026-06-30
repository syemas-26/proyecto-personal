const express = require("express");
const exerciseController = require("../controllers/exercise.controller");
const router = express.Router()
const {validToken} = require("../middlewares/auth.middleware");
const {validRole} = require("../middlewares/role.middleware");
const {createExercise,getExerciseByLesson,updateExercise,deleteExercise} = require("../controllers/exercise.controller")



router.get("/lesson/:id",getExerciseByLesson)
router.post("/create",validToken,validRole("admin"),createExercise)
router.put("/edit/:id",validToken,validRole("admin"),updateExercise)
router.delete("/delete/:id",validToken,validRole("admin"),deleteExercise)

module.exports = router