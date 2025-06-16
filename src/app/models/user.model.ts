import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";
import validator from 'validator'


const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        // required: true,
        required: [true, 'first name kno dew nai'],
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
    email: {
        type: String,
        // unique: true,
        unique: [true, 'email common hoye geche'],
        required: true,
        lowercase: true,
        trim: true,
        // validate: {
        //     validator: function (v) {
        //         return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v)
        //     },
        //     message: props => `Email ${props.value} is not valid`
        // }
        validate: [validator.isEmail, 'Invalid Email {VALUE}']
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        uppercase: true,
        // enum : ['USER', 'ADMIN', 'SUPERADMIN'],
        enum: {
            values: ['USER', 'ADMIN', 'SUPERADMIN'],
            message: "Role is not valid. got {VALUE} role"
        },
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