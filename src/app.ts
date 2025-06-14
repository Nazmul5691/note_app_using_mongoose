import express, { Application, Request, Response } from 'express'
import mongoose, { Schema } from 'mongoose';



const app: Application = express();

app.use(express.json());

const notesSchema = new Schema({
    // title: String,
    // content: String
    title: { type: String, required: true, trim: true },
    content: { type: String, default: '' },
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
    }
})

const Note = mongoose.model("Note", notesSchema);


// approach 1 for creating a data
// app.post('/notes/create-note', async (req: Request, res: Response) => {
//     const myNote = new Note({
//         title: 'Learning Mongoose',

//     })

//     await myNote.save()

//     res.status(201).json({
//         success: true,
//         message: "Note created successfully",
//         note: myNote
//     })
// })


// approach 2 for creating a data
app.post('/notes/create-note', async (req: Request, res: Response) => {

    const body = req.body;

    const note = await Note.create(body)

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note
    })
})


//get all notes
app.get('/notes', async (req: Request, res: Response) => {

    const notes = await Note.find()

    res.status(201).json({
        success: true,
        message: "Note get successfully",
        notes
    })
})


//get single note
app.get('/note/:noteId', async (req: Request, res: Response) => {

    const noteId = req.params.noteId
    const note = await Note.findById(noteId)
    // const note = await Note.findOne({ _id: noteId })
    // const note = await Note.findOne({ title: "Learning new mongoose" })

    res.status(201).json({
        success: true,
        message: "Note get successfully",
        note
    })
})


app.get('/', (req: Request, res: Response) => {
    res.send("welcome to note app")
})

export default app;