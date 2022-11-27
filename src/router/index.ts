import { Router } from "express";
import todoRouter from "./todo.router";
import authRouter from "./auth.router";
const router = Router();


router.use('/todo', todoRouter)
router.use('/auth',authRouter)
export default router