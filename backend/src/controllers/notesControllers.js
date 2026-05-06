import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find(); // note.find() gives you all the notes.
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in 'getAllNotes' controller/function"); // For degubbing purposes, put the error in the console.
        res.status(500).json({ message: "Could not get notes"});
    }
};

export async function createNote(req, res) {
    // when thinking of creating something - what are you creating? Note - so the user wants to pass a Title and Content
    try {
        const {title, content} = req.body;
        const newNote = new Note({title:title, content:content}) // since the key and const values are the same, you can shorten to const newNote = new Note({titel, content})
                                                                 // but I left as is for my learning
        await newNote.save();
        res.status(201).json({"message": "Note created successfully"});
    }  catch (error) {
        console.error("Not able to create new note in 'createNote' controller/function");
        res.status(500).json({ "message": "Could not create note"}); 
    }
};

export const updateNote = (req, res) => {
    res.json({ message: "Note updated" });
};

export const deleteNote = (req, res) => {
    res.json({ message: "Note deleted" });
};