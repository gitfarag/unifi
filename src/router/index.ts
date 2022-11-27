import { Router } from "express";
import todoRouter from "./todo.router";
const router = Router();


router.use('/todo', todoRouter)
// router.use('/auth')
export default router