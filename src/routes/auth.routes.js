import {Router} from "express";
import {check} from "express-validator";

import { login, signup } from "../controllers/auth.controller.js";
import { validateInputs } from "../middlewares/auth.middleware.js";

export const authRoutes = Router();

authRoutes.post("/login",
  [
    check('email', 'The email is obligatory').not().isEmpty(),
    check('password', 'The password is obligatory').not().isEmpty(),
    validateInputs
  ],
  login);

authRoutes.post("/signup",
  [
    check('name', 'The user must have an associated alias').not().isEmpty(),
    check('email', 'The user must have an email associated').not().isEmpty(),
    check('password', 'The user has to enter a password').not().isEmpty(),
    validateInputs
  ],
  signup);
