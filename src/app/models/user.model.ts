import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";


const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true,
        trim: true,
        // minlength: [6, 'First name must be at least 6 character, got {VALUE}'],
        minlength: 6,
        maxlength: 10
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 4,
        maxlength: 10
    },
    age: {
        type: Number,
        required: true,
        // min: 18,
        min: [18, 'age must be at least 18, got {VALUE}'],
        max: 60
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        uppercase: true,
        enum: ['USER', 'ADMIN', 'SUPERADMIN'],
        default: 'USER'
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