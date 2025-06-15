import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";


const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})


export const User = model<IUser>('User', userSchema)


// {
//     "firstName": "Akash",
//     "lastName": "Khan",
//     "email": "akash@gmail.com",
//     "password": "asdafd",
//     "role": "admin"
// }