import express, { Application, Request, Response } from 'express'
import mongoose, { Schema } from 'mongoose';


const app: Application = express();

const notesSchema = new Schema({
    title: String,
    content: String
})

const Note = mongoose.model("Note", notesSchema);

app.post('/create-note', async (req: Request, res: Response) =>{
    const myNote = new Note({
         title: 'Learning Mongoose',
         content: 'I am learning Mongoose',
    })

    await myNote.save()

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note : myNote
    })
})

app.get('/', (req: Request, res: Response) =>{
    res.send("welcome to note app")
})

export default app;