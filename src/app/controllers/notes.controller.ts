import express, { Request, Response } from "express";
import { Note } from "../models/notes.model";

export const notesRoutes = express.Router();


// approach 1 for creating a data
// notesRoutes.post('/create-note', async (req: Request, res: Response) => {
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

// create note
notesRoutes.post('/create-note', async (req: Request, res: Response) => {

    const body = req.body;

    const note = await Note.create(body)

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note
    })
})


//get all notes
notesRoutes.get('/', async (req: Request, res: Response) => {

    const notes = await Note.find()

    res.status(201).json({
        success: true,
        message: "Note get successfully",
        notes
    })
})


//get single note
notesRoutes.get('/:noteId', async (req: Request, res: Response) => {

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


//update a note
notesRoutes.patch('/:noteId', async (req: Request, res: Response) => {

    const noteId = req.params.noteId;
    const updatedBody = req.body;
    const note = await Note.findByIdAndUpdate(noteId, updatedBody, { new: true })
    // const note = await Note.updateOne({_id: noteId}, updatedBody)
    // const note = await Note.findOneAndUpdate({_id: noteId}, updatedBody, {new: true})

    res.status(201).json({
        success: true,
        message: "Note updated successfully",
        note
    })
})


//delete a note
notesRoutes.delete('/:noteId', async (req: Request, res: Response) => {

    const noteId = req.params.noteId;
    const note = await Note.findByIdAndDelete(noteId)
    // const note = await Note.deleteOne({_id: noteId})
    // const note = await Note.findOneAndDelete({_id: noteId})

    res.status(201).json({
        success: true,
        message: "Note deleted successfully",
        note
    })
})