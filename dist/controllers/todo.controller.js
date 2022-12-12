"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getTodoById = exports.getAllTodo = void 0;
const todo_model_1 = __importDefault(require("../models/todo.model"));
const getAllTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield todo_model_1.default.find()
        .then((todo) => res.json(todo))
        .catch((err) => res
        .status(404)
        .json({ message: "Todo not found", error: err.message }));
});
exports.getAllTodo = getAllTodo;
const getTodoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    yield todo_model_1.default.findById(id)
        .then((received) => res.json({ message: "Todo Found successfully", received }))
        .catch((err) => res
        .status(400)
        .json({ message: "Failed to get todo", error: err.message }));
});
exports.getTodoById = getTodoById;
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    yield todo_model_1.default.create(data)
        .then((data) => res.json({ message: "Todo added successfully", data }))
        .catch((err) => res
        .status(400)
        .json({ message: "Failed to add todo", error: err.message }));
});
exports.createTodo = createTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    const data = req.body;
    yield todo_model_1.default.findByIdAndUpdate(id, data)
        .then((received) => res.json({ message: "Todo Updated successfully", received }))
        .catch((err) => res
        .status(400)
        .json({ message: "Failed to add todo", error: err.message }));
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    yield todo_model_1.default.findByIdAndDelete(id)
        .then((received) => res.json({ message: "Todo deleted successfully", received }))
        .catch((err) => res
        .status(400)
        .json({ message: "Failed to add todo", error: err.message }));
});
exports.deleteTodo = deleteTodo;
