import { Router } from "express";
import { loginHandler, registerHandler } from "../controllers/auth.controller";
const authRouter = Router()

authRouter.post('/register',registerHandler)
authRouter.post('/login',loginHandler)
export default authRouter