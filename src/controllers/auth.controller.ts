import { Request, Response } from "express";
import User from "../models/user.model";

const registerHandler = async (req: Request, res: Response): Promise<void> => {

    const user = req.body;
     await User.create(user)
    .then((data) => res.json({ message: "User created successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add todo", error: err.message })
        );
}

const loginHandler = async (req: Request, res: Response): Promise<void> => {

    const user = req.body;
     await User.findOne(user).then((data) => {
        if (data===null)
        throw new Error("Login failed")
        res.json({ message: "Logged in successfully", data })})
    .catch((err) =>
        res
            .status(400)
            .json({ message: "Error login", error: err.message })
    );




}
export {
    registerHandler,
    loginHandler
}