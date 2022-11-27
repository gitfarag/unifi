import mongoose ,{ Schema } from "mongoose";


const userSchema = new Schema ({
    username: String,
    password:String
})
const User = mongoose.model("userSchema", userSchema);
export default User;
