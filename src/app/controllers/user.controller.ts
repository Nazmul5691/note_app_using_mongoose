import express, { Request, Response } from "express"
import { User } from "../models/user.model";

export const userRoutes  = express.Router()


userRoutes.post('/create-user', async (req: Request, res: Response) =>{
    const body = req.body;
    const user = await User.create(body);

    res.status(201).json({
        success: true,
        message: 'user created successfully',
        user
    })
})