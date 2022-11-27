import mongoose ,{ Schema } from "mongoose";


const todoSchema = new Schema ({
    title: String,
    description:String
})
const Todo = mongoose.model("todoSchema", todoSchema);
export default Todo;
export {todoSchema}