import mongoose, { Schema } from "mongoose";
import { INotes } from "../interfaces/notes.interface";

const notesSchema = new Schema<INotes>(
    {
        // title: String,
        // content: String
        title: {
            type: String,
            required: true,
            trim: true
        },
        content: {
            type: String,
            default: ''
        },
        category: {
            type: String,
            enum: ["personal", "work", "study", "other"],
            default: "personal"
        },
        pinned: {
            type: Boolean,
            default: false
        },
        tags: {
            label: { type: String, required: true },
            color: { type: String, default: "gray" }
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }

)

export const Note = mongoose.model<INotes>("Note", notesSchema);