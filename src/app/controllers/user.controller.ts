import express, { Request, Response } from "express"
import { User } from "../models/user.model";
import { z } from "zod";

export const userRoutes = express.Router()


const CreateUserZodSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    age: z.number(),
    email: z.string(),
    password: z.string(),
    role: z.string().optional()
})


// normal post1
// userRoutes.post('/create-user', async (req: Request, res: Response) =>{
//     const body = req.body;
//     const user = await User.create(body);

//     res.status(201).json({
//         success: true,
//         message: 'user created successfully',
//         user
//     })
// })


// normal post2
// userRoutes.post('/create-user', async (req: Request, res: Response) => {
//     try {

//         const body = req.body;
//         // const body = await CreateUserZodSchema.parseAsync(req.body)

//         // console.log(body, 'zod body');
//         const user = await User.create(body);

//         res.status(201).json({
//             success: true,
//             message: 'user created successfully',
//             // user: {}
//             user
//         })
//     } catch (error: any) {
//         // console.log(error);
//         res.status(400).json({
//             success: false,
//             message: error.message,
//             error
//         })
//     }
// })


// built in and custom instance method
// userRoutes.post('/create-user', async (req: Request, res: Response) => {
//     try {

//         const body = req.body;
//         // const body = await CreateUserZodSchema.parseAsync(req.body)

//         // const password = await bcrypt.hash(body.password, 10)
//         // console.log(password);

//         // body.password = password
//         // console.log(body, 'zod body');
//         // const user = await User.create(body);



//         // built in and custom instance method
//         // const user = new User(body);
//         // const password = await User.hashPassword(body.password);
//         // user.password = password;
//         // await user.save();


//         // built in and custom static method
//         const password = await User.hashPassword(body.password)
//         console.log(password, 'static');
//         body.password = password
//         const user = await User.create(body);


//         res.status(201).json({
//             success: true,
//             message: 'user created successfully',
//             // user: {}
//             user
//         })


//     } catch (error: any) {
//         // console.log(error);
//         res.status(400).json({
//             success: false,
//             message: error.message,
//             error
//         })
//     }
// })


// use for pre and post hook
userRoutes.post('/create-user', async (req: Request, res: Response) => {
    try {

        const body = req.body;
        const user = await User.create(body);

        res.status(201).json({
            success: true,
            message: 'user created successfully',
            // user: {}
            user
        })

    } catch (error: any) {
        // console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
            error
        })
    }
})

// get user
userRoutes.get('/', async (req: Request, res: Response) => {
    const users = await User.find();

    res.status(201).json({
        success: true,
        message: 'users get successfully',
        users
    })
})

// update user
userRoutes.patch('/:userId', async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const updatedBody = req.body;
    const user = await User.findByIdAndUpdate(userId, updatedBody, { new: true })

    res.status(201).json({
        success: true,
        message: 'user updated successfully',
        // user
    })
})

// delete user
userRoutes.delete('/:userId', async (req: Request, res: Response) => {
    const userId = req.params.userId
    // const deletedUser = await User.findByIdAndDelete(userId)
    const deletedUser = await User.findOneAndDelete({ _id: userId })

    res.status(201).json({
        success: true,
        message: 'user deleted successfully',
        deletedUser
    })
})