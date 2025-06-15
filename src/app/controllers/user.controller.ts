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


userRoutes.get('/', async (req: Request, res: Response) =>{
    const users = await User.find();

    res.status(201).json({
        success: true,
        message: 'users get successfully',
        users
    })
})


userRoutes.patch('/:userId', async (req: Request, res: Response) =>{
    const userId = req.params.userId;
    const updatedBody = req.body;
    const user = await User.findByIdAndUpdate(userId, updatedBody, {new: true})

    res.status(201).json({
        success: true,
        message: 'user updated successfully',
        user
    })
})



userRoutes.delete('/:userId', async (req: Request, res: Response) =>{
    const userId = req.params.userId
    const deletedUser = await User.findByIdAndDelete(userId)

    res.status(201).json({
        success: true,
        message: 'user deleted successfully',
        deletedUser
    })
})