import { Request, Response, RequestHandler } from "express";
import Todo from "../models/todo.model";



const getAllTodo =async (req:Request, res:Response):Promise<void>=>{
    await Todo.find()
    .then((receive) => {
        if(receive===null)
        throw new Error('empty todo list')
        res.json(receive).status(200)
    })
    .catch((err) =>
        res
            .status(404)
            .json({ message: "Todo not found", error: err.message })
    );
};

const getTodoById =async (req:Request, res:Response):Promise<void>=>{
    const {id} = req.query
    await Todo.findById(id)
    .then((receive) => {
        
        if(receive===null)
        throw new Error('incorrect id')
       
    res.json({ message: "Todo Found", receive })
        
})
.catch((err) =>
            res.status(400)
            .json({ message: "Failed to get todo", error: err.message })
        );};

const createTodo = async (req:Request, res:Response):Promise<void>=>{
    const data = req.body
    await Todo.create(data)
    .then((data) => {
        if(data===null)
        throw new Error('error happened')
        res.json({ message: "Todo added successfully", data })
    })
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add todo", error: err.message })
        );
}

const updateTodo = async (req:Request, res:Response):Promise<void>=>{
    const {id} = req.query
    const data = req.body
    await Todo.findByIdAndUpdate(id,data)
    .then((received) => {
        if(received===null)
        throw new Error('to do is not exists')
        res.json({ message: "Todo Updated successfully", received })
    })
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add todo", error: err.message })
        );
}

const deleteTodo = async (req:Request, res:Response):Promise<void>=>{
    const {id} = req.query
    await Todo.findByIdAndDelete(id)
    .then((received) => {
        if(received===null)
        throw new Error('todo is not exists')
        res.json({ message: "Todo deleted successfully", received })
    })
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add todo", error: err.message })
        );
}


export {        getAllTodo,
                getTodoById,
                createTodo,
                updateTodo,
                deleteTodo
     }


