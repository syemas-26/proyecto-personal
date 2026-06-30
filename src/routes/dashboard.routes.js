const { validToken } = require("../middlewares/auth.middleware.js");
const { validRole }= require("../middlewares/role.middleware.js");

const express = require("express");
const { dashboardAdmin } = require("../controllers/dashboardController.js");
const authMiddleware = require("../middleware/authMiddleware.js");
const roleMiddleware = require("../middleware/roleMiddleware.js");

const router = express.Router();

router.get("/stats",validToken,validRole("admin"),dashboardAdmin);

module.exports=router