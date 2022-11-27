import { Router } from "express";
import { getAllTodo,getTodoById,createTodo,updateTodo,deleteTodo} from "../controllers/todo.controller";
const todoRouter = Router()

todoRouter.get('/',getAllTodo)
todoRouter.post('/to',getTodoById)
todoRouter.post('/add',createTodo)
todoRouter.put('/update',updateTodo)
todoRouter.delete('/delete',deleteTodo)
export default todoRouter